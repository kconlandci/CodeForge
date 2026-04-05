import { createCodeForgeLab, type LabSeed } from "./shared";

export const dependencyCacheHardeningLab = createCodeForgeLab({
  "id": "dependency-cache-hardening",
  "title": "Dependency Cache Hardening",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 67,
  "description": "Practice dependency cache hardening in a package cache strategy by comparing protect build caches from poisoning and stale vulnerable artifacts, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "dependency",
    "cache",
    "hardening",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how dependency cache hardening supports protect build caches from poisoning and stale vulnerable artifacts.",
    "Identify where a package cache strategy needs an explicit engineering control instead of reviewer memory.",
    "Choose scoped caches with integrity verification and rotation over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Code Search & Diff Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Dependency Cache Hardening builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "protect build caches from poisoning and stale vulnerable artifacts",
  "surface": "a package cache strategy",
  "secureApproach": "scoped caches with integrity verification and rotation",
  "riskyShortcut": "cross-project shared caches with no integrity checks",
  "prerequisites": [
    {
      "labId": "ephemeral-environment-security",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
