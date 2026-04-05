import { createCodeForgeLab, type LabSeed } from "./shared";

export const idempotencyReplayDefenseLab = createCodeForgeLab({
  "id": "idempotency-replay-defense",
  "title": "Idempotency & Replay Defense",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 81,
  "description": "Practice idempotency & replay defense in a funds transfer endpoint by comparing design write APIs that survive retries without duplicating side effects, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "idempotency",
    "replay",
    "defense",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how idempotency & replay defense supports design write APIs that survive retries without duplicating side effects.",
    "Identify where a funds transfer endpoint needs an explicit engineering control instead of reviewer memory.",
    "Choose idempotency keys tied to caller and intent over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure Code Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Idempotency & Replay Defense builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "design write APIs that survive retries without duplicating side effects",
  "surface": "a funds transfer endpoint",
  "secureApproach": "idempotency keys tied to caller and intent",
  "riskyShortcut": "relying on client retry behavior to stay well-behaved",
  "prerequisites": [
    {
      "labId": "webhook-signature-verification",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
