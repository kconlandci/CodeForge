import { createCodeForgeLab, type LabSeed } from "./shared";

export const unsafeCryptoReviewLab = createCodeForgeLab({
  "id": "unsafe-crypto-review",
  "title": "Unsafe Crypto Review",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 48,
  "description": "Practice unsafe crypto review in a data protection helper by comparing flag weak or homegrown cryptography during review, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "unsafe",
    "crypto",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how unsafe crypto review supports flag weak or homegrown cryptography during review.",
    "Identify where a data protection helper needs an explicit engineering control instead of reviewer memory.",
    "Choose approved algorithms, libraries, and key handling over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Unsafe Crypto Review builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "flag weak or homegrown cryptography during review",
  "surface": "a data protection helper",
  "secureApproach": "approved algorithms, libraries, and key handling",
  "riskyShortcut": "custom encryption utilities for convenience",
  "prerequisites": [
    {
      "labId": "code-smell-risk-ranking",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
