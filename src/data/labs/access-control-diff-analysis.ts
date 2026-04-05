import { createCodeForgeLab, type LabSeed } from "./shared";

export const accessControlDiffAnalysisLab = createCodeForgeLab({
  "id": "access-control-diff-analysis",
  "title": "Access Control Diff Analysis",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 49,
  "description": "Practice access control diff analysis in a REST resource controller diff by comparing verify object-level authorization survives refactors, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "access",
    "control",
    "diff",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how access control diff analysis supports verify object-level authorization survives refactors.",
    "Identify where a REST resource controller diff needs an explicit engineering control instead of reviewer memory.",
    "Choose checking resource ownership and tenant guards in every branch over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure Code Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Access Control Diff Analysis builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "verify object-level authorization survives refactors",
  "surface": "a REST resource controller diff",
  "secureApproach": "checking resource ownership and tenant guards in every branch",
  "riskyShortcut": "assuming route middleware covers every case",
  "prerequisites": [
    {
      "labId": "unsafe-crypto-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
