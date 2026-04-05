import { createCodeForgeLab, type LabSeed } from "./shared";

export const clipboardScreenshotHygieneLab = createCodeForgeLab({
  "id": "clipboard-screenshot-hygiene",
  "title": "Clipboard & Screenshot Hygiene",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 94,
  "description": "Practice clipboard & screenshot hygiene in a sensitive mobile workflow by comparing reduce accidental data leakage through clipboard and screenshots, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "clipboard",
    "screenshot",
    "hygiene",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how clipboard & screenshot hygiene supports reduce accidental data leakage through clipboard and screenshots.",
    "Identify where a sensitive mobile workflow needs an explicit engineering control instead of reviewer memory.",
    "Choose sensitive-view protections and minimal clipboard exposure over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Policy as Code"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Clipboard & Screenshot Hygiene builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "reduce accidental data leakage through clipboard and screenshots",
  "surface": "a sensitive mobile workflow",
  "secureApproach": "sensitive-view protections and minimal clipboard exposure",
  "riskyShortcut": "copying secrets freely and allowing unrestricted screenshots",
  "prerequisites": [
    {
      "labId": "mobile-logging-redaction",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
