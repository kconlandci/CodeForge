import { createCodeForgeLab, type LabSeed } from "./shared";

export const safeDomUpdatesLab = createCodeForgeLab({
  "id": "safe-dom-updates",
  "title": "Safe DOM Updates",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 4,
  "description": "Practice safe dom updates in a profile customization widget by comparing keep client-side rendering free of injection sinks, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "safe",
    "dom",
    "updates",
    "triage",
    "remediate",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how safe dom updates supports keep client-side rendering free of injection sinks.",
    "Identify where a profile customization widget needs an explicit engineering control instead of reviewer memory.",
    "Choose bind text through safe DOM APIs and component props over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Safe DOM Updates builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "keep client-side rendering free of injection sinks",
  "surface": "a profile customization widget",
  "secureApproach": "bind text through safe DOM APIs and component props",
  "riskyShortcut": "writing attacker-controlled values into innerHTML",
  "prerequisites": [
    {
      "labId": "output-encoding-templates",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
