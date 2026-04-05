import { createCodeForgeLab, type LabSeed } from "./shared";

export const sessionIdGenerationLab = createCodeForgeLab({
  "id": "session-id-generation",
  "title": "Session ID Generation",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 7,
  "description": "Practice session id generation in a session middleware layer by comparing issue unpredictable session identifiers, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "session",
    "id",
    "generation",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how session id generation supports issue unpredictable session identifiers.",
    "Identify where a session middleware layer needs an explicit engineering control instead of reviewer memory.",
    "Choose cryptographically secure, rotated session identifiers over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Session ID Generation builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "issue unpredictable session identifiers",
  "surface": "a session middleware layer",
  "secureApproach": "cryptographically secure, rotated session identifiers",
  "riskyShortcut": "deterministic or timestamp-based tokens",
  "prerequisites": [
    {
      "labId": "registration-rate-limits",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
