import { createCodeForgeLab, type LabSeed } from "./shared";

export const dependencyBoundaryChecksLab = createCodeForgeLab({
  "id": "dependency-boundary-checks",
  "title": "Dependency Boundary Checks",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 11,
  "description": "Practice dependency boundary checks in an internal event consumer by comparing treat internal and partner data as untrusted until verified, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "dependency",
    "boundary",
    "checks",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how dependency boundary checks supports treat internal and partner data as untrusted until verified.",
    "Identify where an internal event consumer needs an explicit engineering control instead of reviewer memory.",
    "Choose validate every message at the service boundary over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Dependency Boundary Checks builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "treat internal and partner data as untrusted until verified",
  "surface": "an internal event consumer",
  "secureApproach": "validate every message at the service boundary",
  "riskyShortcut": "skipping validation because the producer is internal",
  "prerequisites": [
    {
      "labId": "secure-logging-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
