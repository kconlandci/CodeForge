import { createCodeForgeLab, type LabSeed } from "./shared";

export const ephemeralEnvironmentSecurityLab = createCodeForgeLab({
  "id": "ephemeral-environment-security",
  "title": "Ephemeral Environment Security",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 66,
  "description": "Practice ephemeral environment security in a review app platform by comparing secure preview and ephemeral environments used for testing, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "ephemeral",
    "environment",
    "security",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how ephemeral environment security supports secure preview and ephemeral environments used for testing.",
    "Identify where a review app platform needs an explicit engineering control instead of reviewer memory.",
    "Choose isolated short-lived environments with scrubbed data over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Ephemeral Environment Security builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "secure preview and ephemeral environments used for testing",
  "surface": "a review app platform",
  "secureApproach": "isolated short-lived environments with scrubbed data",
  "riskyShortcut": "shared preview infrastructure backed by production-like secrets",
  "prerequisites": [
    {
      "labId": "artifact-signing-verification",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
