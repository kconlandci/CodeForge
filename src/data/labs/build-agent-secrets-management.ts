import { createCodeForgeLab, type LabSeed } from "./shared";

export const buildAgentSecretsManagementLab = createCodeForgeLab({
  "id": "build-agent-secrets-management",
  "title": "Build Agent Secrets Management",
  "track": "devsecops-practices",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 57,
  "description": "Practice build agent secrets management in a CI runner configuration by comparing handle secrets safely inside build and deploy jobs, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "devsecops",
    "practices",
    "build",
    "agent",
    "secrets",
    "management",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how build agent secrets management supports handle secrets safely inside build and deploy jobs.",
    "Identify where a CI runner configuration needs an explicit engineering control instead of reviewer memory.",
    "Choose ephemeral secret injection with masked logs over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure Code Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Build Agent Secrets Management builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "handle secrets safely inside build and deploy jobs",
  "surface": "a CI runner configuration",
  "secureApproach": "ephemeral secret injection with masked logs",
  "riskyShortcut": "writing credentials to plain-text env dumps",
  "prerequisites": [
    {
      "labId": "ci-pipeline-least-privilege",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
