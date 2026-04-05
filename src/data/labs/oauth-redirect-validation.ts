import { createCodeForgeLab, type LabSeed } from "./shared";

export const oauthRedirectValidationLab = createCodeForgeLab({
  "id": "oauth-redirect-validation",
  "title": "OAuth Redirect Validation",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 77,
  "description": "Practice oauth redirect validation in an OAuth callback controller by comparing prevent abuse in OAuth login and consent flows, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "oauth",
    "redirect",
    "validation",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how oauth redirect validation supports prevent abuse in OAuth login and consent flows.",
    "Identify where an OAuth callback controller needs an explicit engineering control instead of reviewer memory.",
    "Choose exact redirect URI matching and state validation over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure Code Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. OAuth Redirect Validation builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "prevent abuse in OAuth login and consent flows",
  "surface": "an OAuth callback controller",
  "secureApproach": "exact redirect URI matching and state validation",
  "riskyShortcut": "prefix-matching redirect URIs from request parameters",
  "prerequisites": [
    {
      "labId": "refresh-token-rotation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
