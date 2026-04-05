import { createCodeForgeLab, type LabSeed } from "./shared";

export const corsOriginReviewLab = createCodeForgeLab({
  "id": "cors-origin-review",
  "title": "CORS Origin Review",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 35,
  "description": "Practice cors origin review in an API gateway policy by comparing configure CORS so trusted clients can call APIs safely, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "cors",
    "origin",
    "review",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how cors origin review supports configure CORS so trusted clients can call APIs safely.",
    "Identify where an API gateway policy needs an explicit engineering control instead of reviewer memory.",
    "Choose precise origin allowlists with correct credential rules over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. CORS Origin Review builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "configure CORS so trusted clients can call APIs safely",
  "surface": "an API gateway policy",
  "secureApproach": "precise origin allowlists with correct credential rules",
  "riskyShortcut": "reflecting any Origin header",
  "prerequisites": [
    {
      "labId": "ssrf-guardrails",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
