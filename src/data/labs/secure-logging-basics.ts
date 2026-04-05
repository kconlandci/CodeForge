import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureLoggingBasicsLab = createCodeForgeLab({
  "id": "secure-logging-basics",
  "title": "Secure Logging Basics",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 10,
  "description": "Practice secure logging basics in a payment service logging pipeline by comparing log enough to investigate issues without exposing secrets or PII, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "logging",
    "basics",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure logging basics supports log enough to investigate issues without exposing secrets or PII.",
    "Identify where a payment service logging pipeline needs an explicit engineering control instead of reviewer memory.",
    "Choose structured redaction before logs are emitted over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Policy as Code"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Secure Logging Basics builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "log enough to investigate issues without exposing secrets or PII",
  "surface": "a payment service logging pipeline",
  "secureApproach": "structured redaction before logs are emitted",
  "riskyShortcut": "logging full request bodies for troubleshooting",
  "prerequisites": [
    {
      "labId": "secure-error-handling",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
