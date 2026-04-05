import { createCodeForgeLab, type LabSeed } from "./shared";

export const pathTraversalDefenseLab = createCodeForgeLab({
  "id": "path-traversal-defense",
  "title": "Path Traversal Defense",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 15,
  "description": "Practice path traversal defense in a download endpoint by comparing resolve user-controlled file access safely, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "path",
    "traversal",
    "defense",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how path traversal defense supports resolve user-controlled file access safely.",
    "Identify where a download endpoint needs an explicit engineering control instead of reviewer memory.",
    "Choose resolve, normalize, and enforce base-directory checks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Path Traversal Defense builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "resolve user-controlled file access safely",
  "surface": "a download endpoint",
  "secureApproach": "resolve, normalize, and enforce base-directory checks",
  "riskyShortcut": "substring blocklists for ../ patterns",
  "prerequisites": [
    {
      "labId": "insecure-deserialization-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
