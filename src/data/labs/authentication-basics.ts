import { createCodeForgeLab, type LabSeed } from "./shared";

export const authenticationBasicsLab = createCodeForgeLab({
  "id": "authentication-basics",
  "title": "Authentication Basics",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 5,
  "description": "Practice authentication basics in an authentication service by comparing implement password verification with strong primitives, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "authentication",
    "basics",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how authentication basics supports implement password verification with strong primitives.",
    "Identify where an authentication service needs an explicit engineering control instead of reviewer memory.",
    "Choose adaptive password hashing with strict comparison over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure Code Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Authentication Basics builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "implement password verification with strong primitives",
  "surface": "an authentication service",
  "secureApproach": "adaptive password hashing with strict comparison",
  "riskyShortcut": "custom hashing and string comparison shortcuts",
  "prerequisites": [
    {
      "labId": "safe-dom-updates",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
