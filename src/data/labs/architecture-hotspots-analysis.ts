import { createCodeForgeLab, type LabSeed } from "./shared";

export const architectureHotspotsAnalysisLab = createCodeForgeLab({
  "id": "architecture-hotspots-analysis",
  "title": "Architecture Hotspots Analysis",
  "track": "code-review-analysis",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 54,
  "description": "Practice architecture hotspots analysis in a code ownership dashboard by comparing identify modules that deserve deeper review based on change patterns, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "code",
    "review",
    "analysis",
    "architecture",
    "hotspots",
    "toggle",
    "config",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how architecture hotspots analysis supports identify modules that deserve deeper review based on change patterns.",
    "Identify where a code ownership dashboard needs an explicit engineering control instead of reviewer memory.",
    "Choose combining churn, privilege, and exposure signals to target review over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Policy as Code"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Architecture Hotspots Analysis builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "identify modules that deserve deeper review based on change patterns",
  "surface": "a code ownership dashboard",
  "secureApproach": "combining churn, privilege, and exposure signals to target review",
  "riskyShortcut": "reviewing files only by size or popularity",
  "prerequisites": [
    {
      "labId": "secure-refactor-triage",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
