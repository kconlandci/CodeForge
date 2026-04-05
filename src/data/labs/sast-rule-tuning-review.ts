import { createCodeForgeLab, type LabSeed } from "./shared";

export const sastRuleTuningReviewLab = createCodeForgeLab({
  "id": "sast-rule-tuning-review",
  "title": "SAST Rule Tuning Review",
  "track": "code-review-analysis",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 55,
  "description": "Practice sast rule tuning review in a security tooling pull request by comparing tune static analysis rules to reduce noise without losing signal, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "code",
    "review",
    "analysis",
    "sast",
    "rule",
    "tuning",
    "investigate",
    "decide",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how sast rule tuning review supports tune static analysis rules to reduce noise without losing signal.",
    "Identify where a security tooling pull request needs an explicit engineering control instead of reviewer memory.",
    "Choose tight rule patterns backed by exploit examples and tests over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. SAST Rule Tuning Review builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "tune static analysis rules to reduce noise without losing signal",
  "surface": "a security tooling pull request",
  "secureApproach": "tight rule patterns backed by exploit examples and tests",
  "riskyShortcut": "disabling broad rule classes because of a few false positives",
  "prerequisites": [
    {
      "labId": "architecture-hotspots-analysis",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
