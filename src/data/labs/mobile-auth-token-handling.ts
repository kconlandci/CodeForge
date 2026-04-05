import { createCodeForgeLab, type LabSeed } from "./shared";

export const mobileAuthTokenHandlingLab = createCodeForgeLab({
  "id": "mobile-auth-token-handling",
  "title": "Mobile Auth Token Handling",
  "track": "mobile-client-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 88,
  "description": "Practice mobile auth token handling in a mobile authentication flow by comparing handle mobile auth tokens across foreground background and logout flows, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "mobile",
    "client",
    "security",
    "auth",
    "token",
    "handling",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how mobile auth token handling supports handle mobile auth tokens across foreground background and logout flows.",
    "Identify where a mobile authentication flow needs an explicit engineering control instead of reviewer memory.",
    "Choose short-lived tokens with explicit wipe and reauth behavior over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Mobile Auth Token Handling builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "handle mobile auth tokens across foreground background and logout flows",
  "surface": "a mobile authentication flow",
  "secureApproach": "short-lived tokens with explicit wipe and reauth behavior",
  "riskyShortcut": "caching tokens indefinitely across app states",
  "prerequisites": [
    {
      "labId": "certificate-pinning-decisions",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
