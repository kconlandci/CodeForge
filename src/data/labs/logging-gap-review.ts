import { createCodeForgeLab, type LabSeed } from "./shared";

export const loggingGapReviewLab = createCodeForgeLab({
  "id": "logging-gap-review",
  "title": "Logging Gap Review",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 50,
  "description": "Practice logging gap review in an administrative workflow review by comparing spot missing audit trails around privileged actions, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "logging",
    "gap",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how logging gap review supports spot missing audit trails around privileged actions.",
    "Identify where an administrative workflow review needs an explicit engineering control instead of reviewer memory.",
    "Choose structured audit events for security-sensitive actions over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Policy as Code"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Logging Gap Review builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "spot missing audit trails around privileged actions",
  "surface": "an administrative workflow review",
  "secureApproach": "structured audit events for security-sensitive actions",
  "riskyShortcut": "adding business logs but no security trail",
  "prerequisites": [
    {
      "labId": "access-control-diff-analysis",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
