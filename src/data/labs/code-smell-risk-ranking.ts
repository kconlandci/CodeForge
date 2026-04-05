import { createCodeForgeLab, type LabSeed } from "./shared";

export const codeSmellRiskRankingLab = createCodeForgeLab({
  "id": "code-smell-risk-ranking",
  "title": "Code Smell Risk Ranking",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 47,
  "description": "Practice code smell risk ranking in a large service class review by comparing separate security-relevant smells from pure maintainability issues, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "smell",
    "risk",
    "ranking",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how code smell risk ranking supports separate security-relevant smells from pure maintainability issues.",
    "Identify where a large service class review needs an explicit engineering control instead of reviewer memory.",
    "Choose ranking smells by boundary exposure and failure mode over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Code Smell Risk Ranking builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "separate security-relevant smells from pure maintainability issues",
  "surface": "a large service class review",
  "secureApproach": "ranking smells by boundary exposure and failure mode",
  "riskyShortcut": "treating every smell as equally urgent",
  "prerequisites": [
    {
      "labId": "dependency-scan-triage",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
