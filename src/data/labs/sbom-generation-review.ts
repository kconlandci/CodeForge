import { createCodeForgeLab, type LabSeed } from "./shared";

export const sbomGenerationReviewLab = createCodeForgeLab({
  "id": "sbom-generation-review",
  "title": "SBOM Generation & Review",
  "track": "devsecops-practices",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 58,
  "description": "Practice sbom generation & review in a release pipeline by comparing generate and review SBOMs as part of release readiness, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "devsecops",
    "practices",
    "sbom",
    "generation",
    "review",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how sbom generation & review supports generate and review SBOMs as part of release readiness.",
    "Identify where a release pipeline needs an explicit engineering control instead of reviewer memory.",
    "Choose automated SBOM publication with dependency attestations over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. SBOM Generation & Review builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "generate and review SBOMs as part of release readiness",
  "surface": "a release pipeline",
  "secureApproach": "automated SBOM publication with dependency attestations",
  "riskyShortcut": "shipping releases without provenance visibility",
  "prerequisites": [
    {
      "labId": "build-agent-secrets-management",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
