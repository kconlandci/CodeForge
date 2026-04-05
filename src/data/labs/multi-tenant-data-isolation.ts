import { createCodeForgeLab, type LabSeed } from "./shared";

export const multiTenantDataIsolationLab = createCodeForgeLab({
  "id": "multi-tenant-data-isolation",
  "title": "Multi-Tenant Data Isolation",
  "track": "api-backend-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 83,
  "description": "Practice multi-tenant data isolation in a SaaS account service by comparing keep tenant data isolated across API and persistence layers, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "api",
    "backend",
    "security",
    "multi",
    "tenant",
    "data",
    "isolation",
    "investigate",
    "decide",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how multi-tenant data isolation supports keep tenant data isolated across API and persistence layers.",
    "Identify where a SaaS account service needs an explicit engineering control instead of reviewer memory.",
    "Choose tenant context propagation and per-request isolation checks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Code Search & Diff Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Multi-Tenant Data Isolation builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "keep tenant data isolated across API and persistence layers",
  "surface": "a SaaS account service",
  "secureApproach": "tenant context propagation and per-request isolation checks",
  "riskyShortcut": "filtering tenant IDs only in the UI layer",
  "prerequisites": [
    {
      "labId": "job-queue-hardening",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
