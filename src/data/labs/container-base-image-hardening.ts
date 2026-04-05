import { createCodeForgeLab, type LabSeed } from "./shared";

export const containerBaseImageHardeningLab = createCodeForgeLab({
  "id": "container-base-image-hardening",
  "title": "Container Base Image Hardening",
  "track": "devsecops-practices",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 59,
  "description": "Practice container base image hardening in a Docker build process by comparing choose and maintain hardened container base images, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "devsecops",
    "practices",
    "container",
    "base",
    "image",
    "hardening",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how container base image hardening supports choose and maintain hardened container base images.",
    "Identify where a Docker build process needs an explicit engineering control instead of reviewer memory.",
    "Choose minimal regularly patched base images with pinned digests over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Code Search & Diff Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Container Base Image Hardening builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "choose and maintain hardened container base images",
  "surface": "a Docker build process",
  "secureApproach": "minimal regularly patched base images with pinned digests",
  "riskyShortcut": "using sprawling latest tags from public registries",
  "prerequisites": [
    {
      "labId": "sbom-generation-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
