import { createCodeForgeLab, type LabSeed } from "./shared";

export const apiVersioningSecurityLab = createCodeForgeLab({
  "id": "api-versioning-security",
  "title": "API Versioning & Security",
  "track": "api-backend-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 84,
  "description": "Practice api versioning & security in an API deprecation program by comparing roll API versions without reopening old security assumptions, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "api",
    "backend",
    "security",
    "versioning",
    "triage",
    "remediate",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how api versioning & security supports roll API versions without reopening old security assumptions.",
    "Identify where an API deprecation program needs an explicit engineering control instead of reviewer memory.",
    "Choose version-specific policy checks and safe defaults over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. API Versioning & Security builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "roll API versions without reopening old security assumptions",
  "surface": "an API deprecation program",
  "secureApproach": "version-specific policy checks and safe defaults",
  "riskyShortcut": "copying legacy insecure behavior into new versions",
  "prerequisites": [
    {
      "labId": "multi-tenant-data-isolation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
