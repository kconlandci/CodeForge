import { createCodeForgeLab, type LabSeed } from "./shared";

export const apiAuthenticationPatternsLab = createCodeForgeLab({
  "id": "api-authentication-patterns",
  "title": "API Authentication Patterns",
  "track": "api-backend-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 71,
  "description": "Practice api authentication patterns in an API gateway design review by comparing choose authentication patterns that fit public and internal APIs, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "api",
    "backend",
    "security",
    "authentication",
    "patterns",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how api authentication patterns supports choose authentication patterns that fit public and internal APIs.",
    "Identify where an API gateway design review needs an explicit engineering control instead of reviewer memory.",
    "Choose explicit auth schemes with consistent token handling over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Code Search & Diff Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. API Authentication Patterns builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "choose authentication patterns that fit public and internal APIs",
  "surface": "an API gateway design review",
  "secureApproach": "explicit auth schemes with consistent token handling",
  "riskyShortcut": "mixing anonymous and privileged flows in the same endpoints",
  "prerequisites": []
} satisfies LabSeed);
