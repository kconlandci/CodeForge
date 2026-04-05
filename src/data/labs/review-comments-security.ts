import { createCodeForgeLab, type LabSeed } from "./shared";

export const reviewCommentsSecurityLab = createCodeForgeLab({
  "id": "review-comments-security",
  "title": "Review Comments for Security",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 52,
  "description": "Practice review comments for security in a peer review conversation by comparing write review comments that drive secure fixes instead of vague warnings, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "comments",
    "security",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how review comments for security supports write review comments that drive secure fixes instead of vague warnings.",
    "Identify where a peer review conversation needs an explicit engineering control instead of reviewer memory.",
    "Choose specific remediation guidance tied to risk and code location over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Review Comments for Security builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "write review comments that drive secure fixes instead of vague warnings",
  "surface": "a peer review conversation",
  "secureApproach": "specific remediation guidance tied to risk and code location",
  "riskyShortcut": "leaving generic 'security?' comments with no direction",
  "prerequisites": [
    {
      "labId": "secrets-detection-prs",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
