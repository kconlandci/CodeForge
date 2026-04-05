import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureCookieHardeningLab = createCodeForgeLab({
  "id": "secure-cookie-hardening",
  "title": "Secure Cookie Hardening",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 30,
  "description": "Practice secure cookie hardening in a login response pipeline by comparing harden session cookies against theft and downgrade attacks, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "secure",
    "cookie",
    "hardening",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure cookie hardening supports harden session cookies against theft and downgrade attacks.",
    "Identify where a login response pipeline needs an explicit engineering control instead of reviewer memory.",
    "Choose secure transport-only cookies with tight scope over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Policy as Code"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Secure Cookie Hardening builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "harden session cookies against theft and downgrade attacks",
  "surface": "a login response pipeline",
  "secureApproach": "secure transport-only cookies with tight scope",
  "riskyShortcut": "reusing permissive cookies across subdomains",
  "prerequisites": [
    {
      "labId": "clickjacking-frame-ancestors",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
