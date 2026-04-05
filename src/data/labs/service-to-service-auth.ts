import { createCodeForgeLab, type LabSeed } from "./shared";

export const serviceToServiceAuthLab = createCodeForgeLab({
  "id": "service-to-service-auth",
  "title": "Service-to-Service Auth",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 78,
  "description": "Practice service-to-service auth in a backend integration layer by comparing secure machine-to-machine API calls between internal services, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "service",
    "to",
    "auth",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how service-to-service auth supports secure machine-to-machine API calls between internal services.",
    "Identify where a backend integration layer needs an explicit engineering control instead of reviewer memory.",
    "Choose scoped service identity and mutual trust controls over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Policy as Code"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Service-to-Service Auth builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "secure machine-to-machine API calls between internal services",
  "surface": "a backend integration layer",
  "secureApproach": "scoped service identity and mutual trust controls",
  "riskyShortcut": "shared static tokens across services",
  "prerequisites": [
    {
      "labId": "oauth-redirect-validation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
