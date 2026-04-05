import { createCodeForgeLab, type LabSeed } from "./shared";

export const ssrfGuardrailsLab = createCodeForgeLab({
  "id": "ssrf-guardrails",
  "title": "SSRF Guardrails",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 34,
  "description": "Practice ssrf guardrails in a webhook preview service by comparing prevent server-side request forgery in outbound fetch features, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "ssrf",
    "guardrails",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how ssrf guardrails supports prevent server-side request forgery in outbound fetch features.",
    "Identify where a webhook preview service needs an explicit engineering control instead of reviewer memory.",
    "Choose allowlisted destinations plus network egress controls over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Policy as Code"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. SSRF Guardrails builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "prevent server-side request forgery in outbound fetch features",
  "surface": "a webhook preview service",
  "secureApproach": "allowlisted destinations plus network egress controls",
  "riskyShortcut": "letting users fetch arbitrary URLs from the backend",
  "prerequisites": [
    {
      "labId": "open-redirect-controls",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
