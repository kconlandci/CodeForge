import { createCodeForgeLab, type LabSeed } from "./shared";

export const secretsDetectionPrsLab = createCodeForgeLab({
  "id": "secrets-detection-prs",
  "title": "Secrets Detection in PRs",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 51,
  "description": "Practice secrets detection in prs in a feature branch review by comparing catch credentials before they land in version control, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "secrets",
    "detection",
    "prs",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secrets detection in prs supports catch credentials before they land in version control.",
    "Identify where a feature branch review needs an explicit engineering control instead of reviewer memory.",
    "Choose blocking secrets with scanners and secure configuration patterns over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Secrets Detection in PRs builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "catch credentials before they land in version control",
  "surface": "a feature branch review",
  "secureApproach": "blocking secrets with scanners and secure configuration patterns",
  "riskyShortcut": "removing the secret later after merge",
  "prerequisites": [
    {
      "labId": "logging-gap-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
