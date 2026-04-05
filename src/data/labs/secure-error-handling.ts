import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureErrorHandlingLab = createCodeForgeLab({
  "id": "secure-error-handling",
  "title": "Secure Error Handling",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 9,
  "description": "Practice secure error handling in an API error layer by comparing return safe user errors while keeping rich internal diagnostics, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "error",
    "handling",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure error handling supports return safe user errors while keeping rich internal diagnostics.",
    "Identify where an API error layer needs an explicit engineering control instead of reviewer memory.",
    "Choose sanitized user-facing errors with server-side correlation IDs over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure Code Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Secure Error Handling builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "return safe user errors while keeping rich internal diagnostics",
  "surface": "an API error layer",
  "secureApproach": "sanitized user-facing errors with server-side correlation IDs",
  "riskyShortcut": "returning raw stack traces to speed debugging",
  "prerequisites": [
    {
      "labId": "session-fixation-defense",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
