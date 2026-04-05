import { createCodeForgeLab, type LabSeed } from "./shared";

export const kubernetesManifestSecurityLab = createCodeForgeLab({
  "id": "kubernetes-manifest-security",
  "title": "Kubernetes Manifest Security",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 61,
  "description": "Practice kubernetes manifest security in a Helm values review by comparing secure Kubernetes manifests before deployment, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "kubernetes",
    "manifest",
    "security",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how kubernetes manifest security supports secure Kubernetes manifests before deployment.",
    "Identify where a Helm values review needs an explicit engineering control instead of reviewer memory.",
    "Choose tight service accounts, network rules, and pod security settings over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure Code Review"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Kubernetes Manifest Security builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "secure Kubernetes manifests before deployment",
  "surface": "a Helm values review",
  "secureApproach": "tight service accounts, network rules, and pod security settings",
  "riskyShortcut": "default service accounts and permissive pods",
  "prerequisites": [
    {
      "labId": "dockerfile-security-checks",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
