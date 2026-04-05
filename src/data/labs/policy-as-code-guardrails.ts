import { createCodeForgeLab, type LabSeed } from "./shared";

export const policyAsCodeGuardrailsLab = createCodeForgeLab({
  "id": "policy-as-code-guardrails",
  "title": "Policy as Code Guardrails",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 63,
  "description": "Practice policy as code guardrails in an admission and CI policy set by comparing enforce cloud and pipeline guardrails with policy as code, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "policy",
    "as",
    "code",
    "guardrails",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how policy as code guardrails supports enforce cloud and pipeline guardrails with policy as code.",
    "Identify where an admission and CI policy set needs an explicit engineering control instead of reviewer memory.",
    "Choose versioned policy checks that fail unsafe changes early over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Code Search & Diff Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Policy as Code Guardrails builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "enforce cloud and pipeline guardrails with policy as code",
  "surface": "an admission and CI policy set",
  "secureApproach": "versioned policy checks that fail unsafe changes early",
  "riskyShortcut": "manual checklist approvals without automated enforcement",
  "prerequisites": [
    {
      "labId": "iac-scanning",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
