import { createCodeForgeLab, type LabSeed } from "./shared";

export const jwtValidationBasicsLab = createCodeForgeLab({
  "id": "jwt-validation-basics",
  "title": "JWT Validation Basics",
  "track": "api-backend-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 75,
  "description": "Practice jwt validation basics in a bearer token middleware by comparing validate JWT signatures claims and audiences correctly, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "api",
    "backend",
    "security",
    "jwt",
    "validation",
    "basics",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how jwt validation basics supports validate JWT signatures claims and audiences correctly.",
    "Identify where a bearer token middleware needs an explicit engineering control instead of reviewer memory.",
    "Choose strict signature issuer audience and expiry checks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Code Search & Diff Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. JWT Validation Basics builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "validate JWT signatures claims and audiences correctly",
  "surface": "a bearer token middleware",
  "secureApproach": "strict signature issuer audience and expiry checks",
  "riskyShortcut": "accepting tokens because they parse successfully",
  "prerequisites": [
    {
      "labId": "json-input-sanitization",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
