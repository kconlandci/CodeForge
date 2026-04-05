import { createCodeForgeLab, type LabSeed } from "./shared";

export const memorySafeStringHandlingLab = createCodeForgeLab({
  "id": "memory-safe-string-handling",
  "title": "Memory-Safe String Handling",
  "track": "secure-coding-fundamentals",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 18,
  "description": "Practice memory-safe string handling in a parser utility by comparing handle lengths and buffers without unsafe assumptions, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "memory",
    "safe",
    "string",
    "handling",
    "toggle",
    "config",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how memory-safe string handling supports handle lengths and buffers without unsafe assumptions.",
    "Identify where a parser utility needs an explicit engineering control instead of reviewer memory.",
    "Choose length-aware APIs and bounds-checked parsing over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Policy as Code"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Memory-Safe String Handling builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "handle lengths and buffers without unsafe assumptions",
  "surface": "a parser utility",
  "secureApproach": "length-aware APIs and bounds-checked parsing",
  "riskyShortcut": "manual slicing based on assumed delimiters",
  "prerequisites": [
    {
      "labId": "secrets-in-code-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
