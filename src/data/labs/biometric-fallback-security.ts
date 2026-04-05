import { createCodeForgeLab, type LabSeed } from "./shared";

export const biometricFallbackSecurityLab = createCodeForgeLab({
  "id": "biometric-fallback-security",
  "title": "Biometric Fallback Security",
  "track": "mobile-client-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "toggle-config",
  "sortOrder": 98,
  "description": "Practice biometric fallback security in a biometric unlock flow by comparing design biometric login fallbacks that preserve account security, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "mobile",
    "client",
    "security",
    "biometric",
    "fallback",
    "toggle",
    "config",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how biometric fallback security supports design biometric login fallbacks that preserve account security.",
    "Identify where a biometric unlock flow needs an explicit engineering control instead of reviewer memory.",
    "Choose explicit reauthentication rules and secure fallback paths over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Policy as Code"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Biometric Fallback Security builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "design biometric login fallbacks that preserve account security",
  "surface": "a biometric unlock flow",
  "secureApproach": "explicit reauthentication rules and secure fallback paths",
  "riskyShortcut": "treating any device unlock as full account reauth",
  "prerequisites": [
    {
      "labId": "client-side-secret-avoidance",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
