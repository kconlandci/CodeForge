import { createCodeForgeLab, type LabSeed } from "./shared";

export const inputValidationBasicsLab = createCodeForgeLab({
  "id": "input-validation-basics",
  "title": "Input Validation Basics",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 1,
  "description": "Practice input validation basics in an Express signup handler by comparing validate and normalize untrusted form input, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "input",
    "validation",
    "basics",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how input validation basics supports validate and normalize untrusted form input.",
    "Identify where an Express signup handler needs an explicit engineering control instead of reviewer memory.",
    "Choose schema-based server validation before business logic over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure Code Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Input Validation Basics builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "validate and normalize untrusted form input",
  "surface": "an Express signup handler",
  "secureApproach": "schema-based server validation before business logic",
  "riskyShortcut": "trusting client-side checks and coercing values inline",
  "prerequisites": []
} satisfies LabSeed);
