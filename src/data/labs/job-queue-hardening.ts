import { createCodeForgeLab, type LabSeed } from "./shared";

export const jobQueueHardeningLab = createCodeForgeLab({
  "id": "job-queue-hardening",
  "title": "Job Queue Hardening",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 82,
  "description": "Practice job queue hardening in a background task processor by comparing secure asynchronous jobs and worker queues against abuse, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "job",
    "queue",
    "hardening",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how job queue hardening supports secure asynchronous jobs and worker queues against abuse.",
    "Identify where a background task processor needs an explicit engineering control instead of reviewer memory.",
    "Choose validated job payloads with scoped worker permissions over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Policy as Code"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Job Queue Hardening builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "secure asynchronous jobs and worker queues against abuse",
  "surface": "a background task processor",
  "secureApproach": "validated job payloads with scoped worker permissions",
  "riskyShortcut": "letting any producer enqueue arbitrary work",
  "prerequisites": [
    {
      "labId": "idempotency-replay-defense",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
