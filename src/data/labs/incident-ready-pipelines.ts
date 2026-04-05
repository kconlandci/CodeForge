import { createCodeForgeLab, type LabSeed } from "./shared";

export const incidentReadyPipelinesLab = createCodeForgeLab({
  "id": "incident-ready-pipelines",
  "title": "Incident-Ready Pipelines",
  "track": "devsecops-practices",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 70,
  "description": "Practice incident-ready pipelines in a deployment audit trail by comparing capture pipeline evidence that helps incident response and rollback, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "devsecops",
    "practices",
    "incident",
    "ready",
    "pipelines",
    "toggle",
    "config",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how incident-ready pipelines supports capture pipeline evidence that helps incident response and rollback.",
    "Identify where a deployment audit trail needs an explicit engineering control instead of reviewer memory.",
    "Choose immutable build, deploy, and rollback metadata over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Incident-Ready Pipelines builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "capture pipeline evidence that helps incident response and rollback",
  "surface": "a deployment audit trail",
  "secureApproach": "immutable build, deploy, and rollback metadata",
  "riskyShortcut": "ad hoc release notes without authoritative logs",
  "prerequisites": [
    {
      "labId": "cloud-workload-identity",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
