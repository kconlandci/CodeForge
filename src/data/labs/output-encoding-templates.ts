import { createCodeForgeLab, type LabSeed } from "./shared";

export const outputEncodingTemplatesLab = createCodeForgeLab({
  "id": "output-encoding-templates",
  "title": "Output Encoding in Templates",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 3,
  "description": "Practice output encoding in templates in a server-rendered checkout page by comparing encode untrusted values for the correct rendering context, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "output",
    "encoding",
    "templates",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how output encoding in templates supports encode untrusted values for the correct rendering context.",
    "Identify where a server-rendered checkout page needs an explicit engineering control instead of reviewer memory.",
    "Choose context-aware output encoding plus framework auto-escaping over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Output Encoding in Templates builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "encode untrusted values for the correct rendering context",
  "surface": "a server-rendered checkout page",
  "secureApproach": "context-aware output encoding plus framework auto-escaping",
  "riskyShortcut": "reusing one generic escape helper everywhere",
  "prerequisites": [
    {
      "labId": "canonicalization-normalization",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
