import { createCodeForgeLab, type LabSeed } from "./shared";

export const openRedirectControlsLab = createCodeForgeLab({
  "id": "open-redirect-controls",
  "title": "Open Redirect Controls",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 33,
  "description": "Practice open redirect controls in a redirect helper by comparing block open redirects in login and deep-link flows, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "open",
    "redirect",
    "controls",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how open redirect controls supports block open redirects in login and deep-link flows.",
    "Identify where a redirect helper needs an explicit engineering control instead of reviewer memory.",
    "Choose allowlisted return destinations with canonical URL checks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure Code Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Open Redirect Controls builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "block open redirects in login and deep-link flows",
  "surface": "a redirect helper",
  "secureApproach": "allowlisted return destinations with canonical URL checks",
  "riskyShortcut": "redirecting to arbitrary next parameters",
  "prerequisites": [
    {
      "labId": "template-injection-defense",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
