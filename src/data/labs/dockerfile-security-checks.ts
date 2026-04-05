import { createCodeForgeLab, type LabSeed } from "./shared";

export const dockerfileSecurityChecksLab = createCodeForgeLab({
  "id": "dockerfile-security-checks",
  "title": "Dockerfile Security Checks",
  "track": "devsecops-practices",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 60,
  "description": "Practice dockerfile security checks in a service container definition by comparing review Dockerfiles for privilege and filesystem hardening, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "devsecops",
    "practices",
    "dockerfile",
    "security",
    "checks",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how dockerfile security checks supports review Dockerfiles for privilege and filesystem hardening.",
    "Identify where a service container definition needs an explicit engineering control instead of reviewer memory.",
    "Choose non-root execution with explicit file ownership over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Dockerfile Security Checks builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "review Dockerfiles for privilege and filesystem hardening",
  "surface": "a service container definition",
  "secureApproach": "non-root execution with explicit file ownership",
  "riskyShortcut": "running as root with copied secrets and caches",
  "prerequisites": [
    {
      "labId": "container-base-image-hardening",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
