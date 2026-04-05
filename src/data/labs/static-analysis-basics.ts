import { createCodeForgeLab, type LabSeed } from "./shared";

export const staticAnalysisBasicsLab = createCodeForgeLab({
  "id": "static-analysis-basics",
  "title": "Static Analysis Basics",
  "track": "code-review-analysis",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 45,
  "description": "Practice static analysis basics in a Semgrep triage session by comparing interpret static analysis findings without dismissing real defects, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "code",
    "review",
    "analysis",
    "static",
    "basics",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how static analysis basics supports interpret static analysis findings without dismissing real defects.",
    "Identify where a Semgrep triage session needs an explicit engineering control instead of reviewer memory.",
    "Choose using taint-aware findings to drive code fixes over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure Code Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Static Analysis Basics builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "interpret static analysis findings without dismissing real defects",
  "surface": "a Semgrep triage session",
  "secureApproach": "using taint-aware findings to drive code fixes",
  "riskyShortcut": "auto-closing alerts as noisy without reading context",
  "prerequisites": [
    {
      "labId": "regex-dos-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
