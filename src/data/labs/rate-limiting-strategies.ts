import { createCodeForgeLab, type LabSeed } from "./shared";

export const rateLimitingStrategiesLab = createCodeForgeLab({
  "id": "rate-limiting-strategies",
  "title": "Rate Limiting Strategies",
  "track": "api-backend-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 73,
  "description": "Practice rate limiting strategies in a public API edge policy by comparing design rate limiting that resists abuse without breaking legitimate traffic, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "api",
    "backend",
    "security",
    "rate",
    "limiting",
    "strategies",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how rate limiting strategies supports design rate limiting that resists abuse without breaking legitimate traffic.",
    "Identify where a public API edge policy needs an explicit engineering control instead of reviewer memory.",
    "Choose identity-aware throttles with abuse telemetry over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure Code Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Rate Limiting Strategies builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "design rate limiting that resists abuse without breaking legitimate traffic",
  "surface": "a public API edge policy",
  "secureApproach": "identity-aware throttles with abuse telemetry",
  "riskyShortcut": "one global limit for every caller and action",
  "prerequisites": [
    {
      "labId": "authorization-check-order",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
