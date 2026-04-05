import { createCodeForgeLab, type LabSeed } from "./shared";

export const thirdPartyScriptGovernanceLab = createCodeForgeLab({
  "id": "third-party-script-governance",
  "title": "Third-Party Script Governance",
  "track": "web-application-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 38,
  "description": "Practice third-party script governance in a production storefront by comparing control the risk of analytics and marketing scripts, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "web",
    "application",
    "security",
    "third",
    "party",
    "script",
    "governance",
    "toggle",
    "config",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how third-party script governance supports control the risk of analytics and marketing scripts.",
    "Identify where a production storefront needs an explicit engineering control instead of reviewer memory.",
    "Choose strict review, integrity, and consent gating over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Policy as Code"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Third-Party Script Governance builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "control the risk of analytics and marketing scripts",
  "surface": "a production storefront",
  "secureApproach": "strict review, integrity, and consent gating",
  "riskyShortcut": "dropping remote scripts into templates without review",
  "prerequisites": [
    {
      "labId": "cache-poisoning-defense",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
