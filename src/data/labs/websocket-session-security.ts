import { createCodeForgeLab, type LabSeed } from "./shared";

export const websocketSessionSecurityLab = createCodeForgeLab({
  "id": "websocket-session-security",
  "title": "WebSocket Session Security",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 36,
  "description": "Practice websocket session security in a live collaboration channel by comparing bind real-time connections to authenticated session state, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "websocket",
    "session",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how websocket session security supports bind real-time connections to authenticated session state.",
    "Identify where a live collaboration channel needs an explicit engineering control instead of reviewer memory.",
    "Choose short-lived auth tokens with server-side channel authorization over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. WebSocket Session Security builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "bind real-time connections to authenticated session state",
  "surface": "a live collaboration channel",
  "secureApproach": "short-lived auth tokens with server-side channel authorization",
  "riskyShortcut": "trusting room IDs alone for access control",
  "prerequisites": [
    {
      "labId": "cors-origin-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
