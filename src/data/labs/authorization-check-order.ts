import { createCodeForgeLab, type LabSeed } from "./shared";

export const authorizationCheckOrderLab = createCodeForgeLab({
  "id": "authorization-check-order",
  "title": "Authorization Check Order",
  "track": "api-backend-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 72,
  "description": "Practice authorization check order in a service method handling account updates by comparing apply authorization before sensitive data fetches and side effects, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "api",
    "backend",
    "security",
    "authorization",
    "check",
    "order",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how authorization check order supports apply authorization before sensitive data fetches and side effects.",
    "Identify where a service method handling account updates needs an explicit engineering control instead of reviewer memory.",
    "Choose early authorization gates before data access over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Authorization Check Order builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "apply authorization before sensitive data fetches and side effects",
  "surface": "a service method handling account updates",
  "secureApproach": "early authorization gates before data access",
  "riskyShortcut": "checking permissions after the object is already loaded or changed",
  "prerequisites": [
    {
      "labId": "api-authentication-patterns",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
