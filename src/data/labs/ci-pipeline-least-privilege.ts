import { createCodeForgeLab, type LabSeed } from "./shared";

export const ciPipelineLeastPrivilegeLab = createCodeForgeLab({
  "id": "ci-pipeline-least-privilege",
  "title": "CI Pipeline Least Privilege",
  "track": "devsecops-practices",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 56,
  "description": "Practice ci pipeline least privilege in a GitHub Actions workflow by comparing scope CI identities and tokens to the minimum required permissions, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "devsecops",
    "practices",
    "ci",
    "pipeline",
    "least",
    "privilege",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how ci pipeline least privilege supports scope CI identities and tokens to the minimum required permissions.",
    "Identify where a GitHub Actions workflow needs an explicit engineering control instead of reviewer memory.",
    "Choose short-lived least-privilege credentials per job over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. CI Pipeline Least Privilege builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "scope CI identities and tokens to the minimum required permissions",
  "surface": "a GitHub Actions workflow",
  "secureApproach": "short-lived least-privilege credentials per job",
  "riskyShortcut": "reusing broad repo-admin tokens across every step",
  "prerequisites": []
} satisfies LabSeed);
