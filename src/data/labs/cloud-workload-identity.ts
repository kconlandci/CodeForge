import { createCodeForgeLab, type LabSeed } from "./shared";

export const cloudWorkloadIdentityLab = createCodeForgeLab({
  "id": "cloud-workload-identity",
  "title": "Cloud Workload Identity",
  "track": "devsecops-practices",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 69,
  "description": "Practice cloud workload identity in a cloud deployment flow by comparing replace static cloud credentials with workload identity federation, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "devsecops",
    "practices",
    "cloud",
    "workload",
    "identity",
    "action",
    "rationale",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how cloud workload identity supports replace static cloud credentials with workload identity federation.",
    "Identify where a cloud deployment flow needs an explicit engineering control instead of reviewer memory.",
    "Choose federated identity tokens bound to workload claims over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure Code Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Cloud Workload Identity builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "replace static cloud credentials with workload identity federation",
  "surface": "a cloud deployment flow",
  "secureApproach": "federated identity tokens bound to workload claims",
  "riskyShortcut": "long-lived cloud access keys in CI variables",
  "prerequisites": [
    {
      "labId": "release-approval-controls",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
