import { createCodeForgeLab, type LabSeed } from "./shared";

export const artifactSigningVerificationLab = createCodeForgeLab({
  "id": "artifact-signing-verification",
  "title": "Artifact Signing & Verification",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 65,
  "description": "Practice artifact signing & verification in an artifact repository workflow by comparing sign and verify build artifacts throughout release promotion, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "artifact",
    "signing",
    "verification",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how artifact signing & verification supports sign and verify build artifacts throughout release promotion.",
    "Identify where an artifact repository workflow needs an explicit engineering control instead of reviewer memory.",
    "Choose cryptographic signing with verification at every environment hop over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure Code Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Artifact Signing & Verification builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "sign and verify build artifacts throughout release promotion",
  "surface": "an artifact repository workflow",
  "secureApproach": "cryptographic signing with verification at every environment hop",
  "riskyShortcut": "trusting artifact names and tags alone",
  "prerequisites": [
    {
      "labId": "shift-left-security-tests",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
