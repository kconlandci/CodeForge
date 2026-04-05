import { createCodeForgeLab, type LabSeed } from "./shared";

export const commandInjectionGuardrailsLab = createCodeForgeLab({
  "id": "command-injection-guardrails",
  "title": "Command Injection Guardrails",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 16,
  "description": "Practice command injection guardrails in a report export service by comparing keep shell access away from untrusted input, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "command",
    "injection",
    "guardrails",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how command injection guardrails supports keep shell access away from untrusted input.",
    "Identify where a report export service needs an explicit engineering control instead of reviewer memory.",
    "Choose use safe library APIs and fixed argument lists over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Command Injection Guardrails builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "keep shell access away from untrusted input",
  "surface": "a report export service",
  "secureApproach": "use safe library APIs and fixed argument lists",
  "riskyShortcut": "string-building shell commands with user input",
  "prerequisites": [
    {
      "labId": "path-traversal-defense",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
