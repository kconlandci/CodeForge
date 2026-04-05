import { createCodeForgeLab, type LabSeed } from "./shared";

export const refreshTokenRotationLab = createCodeForgeLab({
  "id": "refresh-token-rotation",
  "title": "Refresh Token Rotation",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 76,
  "description": "Practice refresh token rotation in a session refresh endpoint by comparing rotate refresh tokens to limit replay and theft impact, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "refresh",
    "token",
    "rotation",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how refresh token rotation supports rotate refresh tokens to limit replay and theft impact.",
    "Identify where a session refresh endpoint needs an explicit engineering control instead of reviewer memory.",
    "Choose single-use rotation with reuse detection over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Refresh Token Rotation builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "rotate refresh tokens to limit replay and theft impact",
  "surface": "a session refresh endpoint",
  "secureApproach": "single-use rotation with reuse detection",
  "riskyShortcut": "long-lived reusable refresh tokens",
  "prerequisites": [
    {
      "labId": "jwt-validation-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
