import { createCodeForgeLab, type LabSeed } from "./shared";

export const reflectedXssPreventionLab = createCodeForgeLab({
  "id": "reflected-xss-prevention",
  "title": "Reflected XSS Prevention",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 21,
  "description": "Practice reflected xss prevention in a server-rendered search page by comparing encode untrusted search text before rendering HTML responses, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "reflected",
    "xss",
    "prevention",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how reflected xss prevention supports encode untrusted search text before rendering HTML responses.",
    "Identify where a server-rendered search page needs an explicit engineering control instead of reviewer memory.",
    "Choose context-aware output encoding plus framework auto-escaping over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure Code Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Reflected XSS Prevention builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "encode untrusted search text before rendering HTML responses",
  "surface": "a server-rendered search page",
  "secureApproach": "context-aware output encoding plus framework auto-escaping",
  "riskyShortcut": "building response HTML with string concatenation",
  "prerequisites": []
} satisfies LabSeed);
