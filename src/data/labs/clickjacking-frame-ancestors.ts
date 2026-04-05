import { createCodeForgeLab, type LabSeed } from "./shared";

export const clickjackingFrameAncestorsLab = createCodeForgeLab({
  "id": "clickjacking-frame-ancestors",
  "title": "Clickjacking & Frame Ancestors",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 29,
  "description": "Practice clickjacking & frame ancestors in an admin portal by comparing prevent hostile embedding of sensitive application screens, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "clickjacking",
    "frame",
    "ancestors",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how clickjacking & frame ancestors supports prevent hostile embedding of sensitive application screens.",
    "Identify where an admin portal needs an explicit engineering control instead of reviewer memory.",
    "Choose frame-ancestors and X-Frame-Options defenses over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure Code Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Clickjacking & Frame Ancestors builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "prevent hostile embedding of sensitive application screens",
  "surface": "an admin portal",
  "secureApproach": "frame-ancestors and X-Frame-Options defenses",
  "riskyShortcut": "allowing any partner site to embed the app",
  "prerequisites": [
    {
      "labId": "content-security-policy-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
