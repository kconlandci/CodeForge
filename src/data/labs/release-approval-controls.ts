import { createCodeForgeLab, type LabSeed } from "./shared";

export const releaseApprovalControlsLab = createCodeForgeLab({
  "id": "release-approval-controls",
  "title": "Release Approval Controls",
  "track": "devsecops-practices",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 68,
  "description": "Practice release approval controls in a deployment orchestration flow by comparing build release approvals that verify security gates and ownership, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "devsecops",
    "practices",
    "release",
    "approval",
    "controls",
    "triage",
    "remediate",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how release approval controls supports build release approvals that verify security gates and ownership.",
    "Identify where a deployment orchestration flow needs an explicit engineering control instead of reviewer memory.",
    "Choose risk-based approvals backed by automated evidence over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Release Approval Controls builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "build release approvals that verify security gates and ownership",
  "surface": "a deployment orchestration flow",
  "secureApproach": "risk-based approvals backed by automated evidence",
  "riskyShortcut": "single-click production deploys with no gate context",
  "prerequisites": [
    {
      "labId": "dependency-cache-hardening",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
