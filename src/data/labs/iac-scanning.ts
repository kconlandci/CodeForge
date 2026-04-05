import { createCodeForgeLab, type LabSeed } from "./shared";

export const iacScanningLab = createCodeForgeLab({
  "id": "iac-scanning",
  "title": "Infrastructure as Code Scanning",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 62,
  "description": "Practice infrastructure as code scanning in a Terraform module by comparing scan infrastructure definitions for risky cloud defaults, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "iac",
    "scanning",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how infrastructure as code scanning supports scan infrastructure definitions for risky cloud defaults.",
    "Identify where a Terraform module needs an explicit engineering control instead of reviewer memory.",
    "Choose policy scanning and secure baseline modules over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Infrastructure as Code Scanning builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "scan infrastructure definitions for risky cloud defaults",
  "surface": "a Terraform module",
  "secureApproach": "policy scanning and secure baseline modules",
  "riskyShortcut": "reviewing IaC only after resources are live",
  "prerequisites": [
    {
      "labId": "kubernetes-manifest-security",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
