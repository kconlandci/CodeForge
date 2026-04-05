import { createCodeForgeLab, type LabSeed } from "./shared";

export const jsonInputSanitizationLab = createCodeForgeLab({
  "id": "json-input-sanitization",
  "title": "JSON Input Sanitization",
  "track": "api-backend-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 74,
  "description": "Practice json input sanitization in a JSON REST handler by comparing validate structured JSON payloads before they reach business logic, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "api",
    "backend",
    "security",
    "json",
    "input",
    "sanitization",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how json input sanitization supports validate structured JSON payloads before they reach business logic.",
    "Identify where a JSON REST handler needs an explicit engineering control instead of reviewer memory.",
    "Choose schema validation and strict field handling over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Policy as Code"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. JSON Input Sanitization builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "validate structured JSON payloads before they reach business logic",
  "surface": "a JSON REST handler",
  "secureApproach": "schema validation and strict field handling",
  "riskyShortcut": "deserializing flexible payloads into trusted objects",
  "prerequisites": [
    {
      "labId": "rate-limiting-strategies",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
