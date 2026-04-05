import { createCodeForgeLab, type LabSeed } from "./shared";

export const insecureRandomnessReviewLab = createCodeForgeLab({
  "id": "insecure-randomness-review",
  "title": "Insecure Randomness Review",
  "track": "code-review-analysis",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 42,
  "description": "Practice insecure randomness review in a password reset utility by comparing detect weak randomness in tokens and identifiers, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "code",
    "review",
    "analysis",
    "insecure",
    "randomness",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how insecure randomness review supports detect weak randomness in tokens and identifiers.",
    "Identify where a password reset utility needs an explicit engineering control instead of reviewer memory.",
    "Choose cryptographically secure random generators for secrets over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Policy as Code"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Insecure Randomness Review builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "detect weak randomness in tokens and identifiers",
  "surface": "a password reset utility",
  "secureApproach": "cryptographically secure random generators for secrets",
  "riskyShortcut": "using convenience randomness helpers for security tokens",
  "prerequisites": [
    {
      "labId": "auth-bypass-pull-requests",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
