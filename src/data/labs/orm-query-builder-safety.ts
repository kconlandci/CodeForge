import { createCodeForgeLab, type LabSeed } from "./shared";

export const ormQueryBuilderSafetyLab = createCodeForgeLab({
  "id": "orm-query-builder-safety",
  "title": "ORM Query Builder Safety",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 27,
  "description": "Practice orm query builder safety in a search repository method by comparing use ORM query builders without reintroducing injection flaws, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "orm",
    "query",
    "builder",
    "safety",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how orm query builder safety supports use ORM query builders without reintroducing injection flaws.",
    "Identify where a search repository method needs an explicit engineering control instead of reviewer memory.",
    "Choose safe ORM filters and named parameters over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. ORM Query Builder Safety builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "use ORM query builders without reintroducing injection flaws",
  "surface": "a search repository method",
  "secureApproach": "safe ORM filters and named parameters",
  "riskyShortcut": "dropping to raw SQL strings for convenience",
  "prerequisites": [
    {
      "labId": "sql-parameterized-queries",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
