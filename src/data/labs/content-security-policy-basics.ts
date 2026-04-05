import { createCodeForgeLab, type LabSeed } from "./shared";

export const contentSecurityPolicyBasicsLab = createCodeForgeLab({
  "id": "content-security-policy-basics",
  "title": "Content Security Policy Basics",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 28,
  "description": "Practice content security policy basics in a web application response policy by comparing deploy CSP headers that constrain injected script execution, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "content",
    "policy",
    "basics",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how content security policy basics supports deploy CSP headers that constrain injected script execution.",
    "Identify where a web application response policy needs an explicit engineering control instead of reviewer memory.",
    "Choose strict CSP with nonces and explicit script sources over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Content Security Policy Basics builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "deploy CSP headers that constrain injected script execution",
  "surface": "a web application response policy",
  "secureApproach": "strict CSP with nonces and explicit script sources",
  "riskyShortcut": "wildcard script allowances to avoid breakage",
  "prerequisites": [
    {
      "labId": "orm-query-builder-safety",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
