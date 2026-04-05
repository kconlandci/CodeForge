import { createCodeForgeLab, type LabSeed } from "./shared";

export const secretsInCodeReviewLab = createCodeForgeLab({
  "id": "secrets-in-code-review",
  "title": "Secrets in Code Review",
  "track": "secure-coding-fundamentals",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 17,
  "description": "Practice secrets in code review in a repository bootstrap flow by comparing keep credentials out of repos and build-time configs, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "secrets",
    "in",
    "code",
    "review",
    "action",
    "rationale",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secrets in code review supports keep credentials out of repos and build-time configs.",
    "Identify where a repository bootstrap flow needs an explicit engineering control instead of reviewer memory.",
    "Choose load secrets from managed stores and environment injection over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure Code Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Secrets in Code Review builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "keep credentials out of repos and build-time configs",
  "surface": "a repository bootstrap flow",
  "secureApproach": "load secrets from managed stores and environment injection",
  "riskyShortcut": "checking API keys into source for faster setup",
  "prerequisites": [
    {
      "labId": "command-injection-guardrails",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
