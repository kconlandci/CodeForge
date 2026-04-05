import { createCodeForgeLab, type LabSeed } from "./shared";

export const reverseEngineeringRiskReviewLab = createCodeForgeLab({
  "id": "reverse-engineering-risk-review",
  "title": "Reverse Engineering Risk Review",
  "track": "mobile-client-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 89,
  "description": "Practice reverse engineering risk review in a production mobile build by comparing raise the cost of reverse engineering sensitive client logic, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "mobile",
    "client",
    "security",
    "reverse",
    "engineering",
    "risk",
    "review",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how reverse engineering risk review supports raise the cost of reverse engineering sensitive client logic.",
    "Identify where a production mobile build needs an explicit engineering control instead of reviewer memory.",
    "Choose move secrets server-side and harden client exposure points over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure Code Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Reverse Engineering Risk Review builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "raise the cost of reverse engineering sensitive client logic",
  "surface": "a production mobile build",
  "secureApproach": "move secrets server-side and harden client exposure points",
  "riskyShortcut": "assuming compiled binaries hide everything",
  "prerequisites": [
    {
      "labId": "mobile-auth-token-handling",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
