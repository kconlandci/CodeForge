import { createCodeForgeLab, type LabSeed } from "./shared";

export const localDataEncryptionLab = createCodeForgeLab({
  "id": "local-data-encryption",
  "title": "Local Data Encryption",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 92,
  "description": "Practice local data encryption in an offline mobile cache by comparing encrypt locally cached sensitive data with sound key handling, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "local",
    "data",
    "encryption",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how local data encryption supports encrypt locally cached sensitive data with sound key handling.",
    "Identify where an offline mobile cache needs an explicit engineering control instead of reviewer memory.",
    "Choose app-level encryption backed by platform key stores over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Local Data Encryption builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "encrypt locally cached sensitive data with sound key handling",
  "surface": "an offline mobile cache",
  "secureApproach": "app-level encryption backed by platform key stores",
  "riskyShortcut": "custom encryption with keys stored alongside data",
  "prerequisites": [
    {
      "labId": "secure-mobile-networking",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
