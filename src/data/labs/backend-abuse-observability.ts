import { createCodeForgeLab, type LabSeed } from "./shared";

export const backendAbuseObservabilityLab = createCodeForgeLab({
  "id": "backend-abuse-observability",
  "title": "Backend Abuse Observability",
  "track": "api-backend-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 85,
  "description": "Practice backend abuse observability in an API telemetry pipeline by comparing instrument backend abuse signals that help defenders react quickly, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "api",
    "backend",
    "security",
    "abuse",
    "observability",
    "action",
    "rationale",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how backend abuse observability supports instrument backend abuse signals that help defenders react quickly.",
    "Identify where an API telemetry pipeline needs an explicit engineering control instead of reviewer memory.",
    "Choose structured abuse signals rate data and actor context over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure Code Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Backend Abuse Observability builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "instrument backend abuse signals that help defenders react quickly",
  "surface": "an API telemetry pipeline",
  "secureApproach": "structured abuse signals rate data and actor context",
  "riskyShortcut": "only logging success metrics and generic errors",
  "prerequisites": [
    {
      "labId": "api-versioning-security",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
