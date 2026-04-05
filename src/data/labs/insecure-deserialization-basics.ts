import { createCodeForgeLab, type LabSeed } from "./shared";

export const insecureDeserializationBasicsLab = createCodeForgeLab({
  "id": "insecure-deserialization-basics",
  "title": "Insecure Deserialization Basics",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 14,
  "description": "Practice insecure deserialization basics in a background job worker by comparing parse complex input without reviving attacker-controlled objects, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "insecure",
    "deserialization",
    "basics",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how insecure deserialization basics supports parse complex input without reviving attacker-controlled objects.",
    "Identify where a background job worker needs an explicit engineering control instead of reviewer memory.",
    "Choose strict typed parsing with safe serialization formats over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Policy as Code"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Insecure Deserialization Basics builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "parse complex input without reviving attacker-controlled objects",
  "surface": "a background job worker",
  "secureApproach": "strict typed parsing with safe serialization formats",
  "riskyShortcut": "blindly deserializing user-supplied objects",
  "prerequisites": [
    {
      "labId": "owasp-top10-mapping",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
