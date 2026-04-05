import { createCodeForgeLab, type LabSeed } from "./shared";

export const canonicalizationNormalizationLab = createCodeForgeLab({
  "id": "canonicalization-normalization",
  "title": "Canonicalization & Normalization",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 2,
  "description": "Practice canonicalization & normalization in a file upload service by comparing canonicalize paths and encodings before validation, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "canonicalization",
    "normalization",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how canonicalization & normalization supports canonicalize paths and encodings before validation.",
    "Identify where a file upload service needs an explicit engineering control instead of reviewer memory.",
    "Choose normalize input first and then apply allowlisted validation over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Policy as Code"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Canonicalization & Normalization builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "canonicalize paths and encodings before validation",
  "surface": "a file upload service",
  "secureApproach": "normalize input first and then apply allowlisted validation",
  "riskyShortcut": "comparing raw user input directly against blocklists",
  "prerequisites": [
    {
      "labId": "input-validation-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
