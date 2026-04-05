import { createCodeForgeLab, type LabSeed } from "./shared";

export const csrfTokenRotationLab = createCodeForgeLab({
  "id": "csrf-token-rotation",
  "title": "CSRF Token Rotation",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 24,
  "description": "Practice csrf token rotation in an account settings form by comparing protect state-changing requests from cross-site request forgery, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "csrf",
    "token",
    "rotation",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how csrf token rotation supports protect state-changing requests from cross-site request forgery.",
    "Identify where an account settings form needs an explicit engineering control instead of reviewer memory.",
    "Choose per-session CSRF tokens with origin validation over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. CSRF Token Rotation builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "protect state-changing requests from cross-site request forgery",
  "surface": "an account settings form",
  "secureApproach": "per-session CSRF tokens with origin validation",
  "riskyShortcut": "assuming same-origin cookies are enough",
  "prerequisites": [
    {
      "labId": "dom-xss-client-rendering",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
