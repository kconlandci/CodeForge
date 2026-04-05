import { createCodeForgeLab, type LabSeed } from "./shared";

export const obfuscationSymbolStrippingLab = createCodeForgeLab({
  "id": "obfuscation-symbol-stripping",
  "title": "Obfuscation & Symbol Stripping",
  "track": "mobile-client-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 90,
  "description": "Practice obfuscation & symbol stripping in an Android release configuration by comparing use obfuscation and symbol stripping without breaking observability, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "mobile",
    "client",
    "security",
    "obfuscation",
    "symbol",
    "stripping",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how obfuscation & symbol stripping supports use obfuscation and symbol stripping without breaking observability.",
    "Identify where an Android release configuration needs an explicit engineering control instead of reviewer memory.",
    "Choose targeted obfuscation with secure mapping file handling over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Policy as Code"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Obfuscation & Symbol Stripping builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "use obfuscation and symbol stripping without breaking observability",
  "surface": "an Android release configuration",
  "secureApproach": "targeted obfuscation with secure mapping file handling",
  "riskyShortcut": "shipping rich debug symbols in production",
  "prerequisites": [
    {
      "labId": "reverse-engineering-risk-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
