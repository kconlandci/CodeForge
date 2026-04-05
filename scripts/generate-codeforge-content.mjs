import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { curriculum } from "./codeforge-curriculum.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const labsDir = path.join(root, "src", "data", "labs");
const catalogPath = path.join(root, "src", "data", "catalog.ts");
const pathsPath = path.join(root, "src", "data", "paths.ts");

const renderers = [
  "action-rationale",
  "toggle-config",
  "investigate-decide",
  "triage-remediate",
];

const rendererTools = {
  "action-rationale": "Secure Code Review",
  "toggle-config": "Policy as Code",
  "investigate-decide": "Code Search & Diff Review",
  "triage-remediate": "Secure SDLC Checklist",
};

const rendererEmphasis = {
  "action-rationale": "choosing the safest implementation path",
  "toggle-config": "hardening the right defaults",
  "investigate-decide": "investigating evidence before deciding on a fix",
  "triage-remediate": "prioritizing and remediating the right issue first",
};

const toConstName = (value) =>
  value
    .split("-")
    .map((part, index) =>
      index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
    )
    .join("") + "Lab";

const unique = (values) => [...new Set(values.filter(Boolean))];

const minutesFor = (difficulty) =>
  difficulty === "easy" ? 10 : difficulty === "moderate" ? 12 : 15;

function levelFor(index, total) {
  if (total === 20) {
    if (index < 7) return { tier: "beginner", difficulty: "easy", accessLevel: "free" };
    if (index < 13) return { tier: "intermediate", difficulty: "moderate", accessLevel: "free" };
    if (index < 16) return { tier: "intermediate", difficulty: "moderate", accessLevel: "premium" };
    return { tier: "advanced", difficulty: "challenging", accessLevel: "premium" };
  }

  if (index < 5) return { tier: "beginner", difficulty: "easy", accessLevel: "free" };
  if (index < 10) return { tier: "intermediate", difficulty: "moderate", accessLevel: "free" };
  if (index < 12) return { tier: "intermediate", difficulty: "moderate", accessLevel: "premium" };
  return { tier: "advanced", difficulty: "challenging", accessLevel: "premium" };
}

function buildTags(trackId, slug, rendererType, tier, difficulty, accessLevel) {
  return unique([
    ...trackId.split("-"),
    ...slug.split("-").slice(0, 4),
    ...rendererType.split("-"),
    tier,
    difficulty,
    accessLevel,
    "secure-coding",
  ]);
}

function buildDescription(title, focus, surface, rendererType) {
  return `Practice ${title.toLowerCase()} in ${surface} by comparing ${focus}, ${rendererEmphasis[rendererType]}, and the difference between a durable secure control and a risky shortcut.`;
}

function buildObjectives(title, focus, secureApproach, surface) {
  return [
    `Explain how ${title.toLowerCase()} supports ${focus}.`,
    `Identify where ${surface} needs an explicit engineering control instead of reviewer memory.`,
    `Choose ${secureApproach} over brittle convenience paths.`,
    "Translate the finding into a repeatable team habit and regression check.",
  ];
}

function buildCareerInsight(pathTitle, title, rendererType) {
  return `${pathTitle} skills show up in pull requests, release reviews, and incident follow-ups. ${title} builds judgment around ${rendererEmphasis[rendererType]} when delivery pressure is high.`;
}

function buildToolRelevance(pathTools, rendererType) {
  return unique([...pathTools, rendererTools[rendererType]]).slice(0, 4);
}

function createSeed(pathSpec, lab, index, sortOrder, previousLabId) {
  const [id, title, focus, surface, secureApproach, riskyShortcut] = lab;
  const rendererType = renderers[(sortOrder - 1) % renderers.length];
  const level = levelFor(index, pathSpec.labs.length);

  return {
    id,
    title,
    track: pathSpec.id,
    tier: level.tier,
    difficulty: level.difficulty,
    accessLevel: level.accessLevel,
    rendererType,
    sortOrder,
    description: buildDescription(title, focus, surface, rendererType),
    estimatedMinutes: minutesFor(level.difficulty),
    tags: buildTags(
      pathSpec.id,
      id,
      rendererType,
      level.tier,
      level.difficulty,
      level.accessLevel
    ),
    learningObjectives: buildObjectives(title, focus, secureApproach, surface),
    toolRelevance: buildToolRelevance(pathSpec.tools, rendererType),
    careerInsight: buildCareerInsight(pathSpec.title, title, rendererType),
    focus,
    surface,
    secureApproach,
    riskyShortcut,
    prerequisites: previousLabId ? [{ labId: previousLabId, minScore: 60 }] : [],
  };
}

function renderSeedModule(constName, seed) {
  return `import { createCodeForgeLab, type LabSeed } from "./shared";

export const ${constName} = createCodeForgeLab(${JSON.stringify(seed, null, 2)} satisfies LabSeed);
`;
}

const generatedLabs = [];
let sortOrder = 1;

for (const pathSpec of curriculum) {
  pathSpec.labs.forEach((lab, index) => {
    const previousLabId = index > 0 ? pathSpec.labs[index - 1][0] : null;
    const seed = createSeed(pathSpec, lab, index, sortOrder, previousLabId);
    generatedLabs.push({
      id: seed.id,
      constName: toConstName(seed.id),
      seed,
    });
    sortOrder += 1;
  });
}

const freeCount = generatedLabs.filter(
  (lab) => lab.seed.accessLevel === "free"
).length;
const premiumCount = generatedLabs.filter(
  (lab) => lab.seed.accessLevel === "premium"
).length;

if (generatedLabs.length !== 100) {
  throw new Error(`Expected 100 labs, generated ${generatedLabs.length}.`);
}

if (freeCount !== 66 || premiumCount !== 34) {
  throw new Error(
    `Expected 66 free / 34 premium labs, got ${freeCount} / ${premiumCount}.`
  );
}

mkdirSync(labsDir, { recursive: true });
for (const entry of readdirSync(labsDir, { withFileTypes: true })) {
  if (entry.name === "shared.ts") continue;
  rmSync(path.join(labsDir, entry.name), { recursive: true, force: true });
}

for (const lab of generatedLabs) {
  writeFileSync(
    path.join(labsDir, `${lab.id}.ts`),
    renderSeedModule(lab.constName, lab.seed)
  );
}

writeFileSync(
  catalogPath,
  `// ============================================================
// CodeForge — Lab Catalog
// Generated by scripts/generate-codeforge-content.mjs
// ============================================================

${generatedLabs
    .map((lab) => `import { ${lab.constName} } from "./labs/${lab.id}";`)
    .join("\n")}

export const labCatalog = [
${generatedLabs.map((lab) => `  ${lab.constName},`).join("\n")}
].sort((a, b) => a.sortOrder - b.sortOrder);
`
);

writeFileSync(
  pathsPath,
  `// ============================================================
// CodeForge — Learning Paths
// Generated by scripts/generate-codeforge-content.mjs
// ============================================================

export interface LearningPath {
  id: string;
  title: string;
  name: string;
  description: string;
  targetAudience: string;
  labIds: string[];
  icon: string;
}

export const learningPaths: LearningPath[] = ${JSON.stringify(
    curriculum.map((pathSpec) => ({
      id: pathSpec.id,
      title: pathSpec.title,
      name: pathSpec.title,
      description: pathSpec.description,
      targetAudience: pathSpec.targetAudience,
      labIds: pathSpec.labs.map(([id]) => id),
      icon: pathSpec.icon,
    })),
    null,
    2
  )};
`
);

console.log(
  `Generated ${generatedLabs.length} CodeForge labs (${freeCount} free / ${premiumCount} premium).`
);
