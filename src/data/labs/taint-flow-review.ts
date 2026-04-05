import { createCodeForgeLab, type LabSeed } from "./shared";

export const taintFlowReviewLab = createCodeForgeLab({
  "id": "taint-flow-review",
  "title": "Taint Flow Review",
  "track": "code-review-analysis",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 43,
  "description": "Practice taint flow review in a service layer refactor by comparing trace untrusted data from entry points to dangerous sinks, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "code",
    "review",
    "analysis",
    "taint",
    "flow",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how taint flow review supports trace untrusted data from entry points to dangerous sinks.",
    "Identify where a service layer refactor needs an explicit engineering control instead of reviewer memory.",
    "Choose following tainted data through validation and encoding boundaries over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Taint Flow Review builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "trace untrusted data from entry points to dangerous sinks",
  "surface": "a service layer refactor",
  "secureApproach": "following tainted data through validation and encoding boundaries",
  "riskyShortcut": "reviewing each helper in isolation",
  "prerequisites": [
    {
      "labId": "insecure-randomness-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
