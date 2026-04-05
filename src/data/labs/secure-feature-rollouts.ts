import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureFeatureRolloutsLab = createCodeForgeLab({
  "id": "secure-feature-rollouts",
  "title": "Secure Feature Rollouts",
  "track": "secure-coding-fundamentals",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 19,
  "description": "Practice secure feature rollouts in a rollout configuration system by comparing release sensitive controls with safe fallback and telemetry, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "feature",
    "rollouts",
    "investigate",
    "decide",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure feature rollouts supports release sensitive controls with safe fallback and telemetry.",
    "Identify where a rollout configuration system needs an explicit engineering control instead of reviewer memory.",
    "Choose phased rollout with telemetry and rollback hooks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Secure Feature Rollouts builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "release sensitive controls with safe fallback and telemetry",
  "surface": "a rollout configuration system",
  "secureApproach": "phased rollout with telemetry and rollback hooks",
  "riskyShortcut": "big-bang enablement without guardrails",
  "prerequisites": [
    {
      "labId": "memory-safe-string-handling",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
