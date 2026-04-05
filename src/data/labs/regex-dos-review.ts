import { createCodeForgeLab, type LabSeed } from "./shared";

export const regexDosReviewLab = createCodeForgeLab({
  "id": "regex-dos-review",
  "title": "Regex DoS Review",
  "track": "code-review-analysis",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 44,
  "description": "Practice regex dos review in an input validation helper by comparing identify regex patterns that can trigger catastrophic backtracking, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "code",
    "review",
    "analysis",
    "regex",
    "dos",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how regex dos review supports identify regex patterns that can trigger catastrophic backtracking.",
    "Identify where an input validation helper needs an explicit engineering control instead of reviewer memory.",
    "Choose bounded patterns and safer parsing strategies over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Regex DoS Review builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "identify regex patterns that can trigger catastrophic backtracking",
  "surface": "an input validation helper",
  "secureApproach": "bounded patterns and safer parsing strategies",
  "riskyShortcut": "shipping nested quantifiers without adversarial tests",
  "prerequisites": [
    {
      "labId": "taint-flow-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
