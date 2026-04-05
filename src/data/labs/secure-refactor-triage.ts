import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureRefactorTriageLab = createCodeForgeLab({
  "id": "secure-refactor-triage",
  "title": "Secure Refactor Triage",
  "track": "code-review-analysis",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 53,
  "description": "Practice secure refactor triage in a service extraction effort by comparing preserve security controls while refactoring legacy code, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "code",
    "review",
    "analysis",
    "secure",
    "refactor",
    "triage",
    "action",
    "rationale",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure refactor triage supports preserve security controls while refactoring legacy code.",
    "Identify where a service extraction effort needs an explicit engineering control instead of reviewer memory.",
    "Choose tracking security invariants before and after refactors over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure Code Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Secure Refactor Triage builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "preserve security controls while refactoring legacy code",
  "surface": "a service extraction effort",
  "secureApproach": "tracking security invariants before and after refactors",
  "riskyShortcut": "rewriting first and rediscovering controls later",
  "prerequisites": [
    {
      "labId": "review-comments-security",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
