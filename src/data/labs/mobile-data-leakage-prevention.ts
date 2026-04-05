import { createCodeForgeLab, type LabSeed } from "./shared";

export const mobileDataLeakagePreventionLab = createCodeForgeLab({
  "id": "mobile-data-leakage-prevention",
  "title": "Mobile Data Leakage Prevention",
  "track": "mobile-client-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 100,
  "description": "Practice mobile data leakage prevention in a document sharing feature by comparing prevent sensitive mobile data from leaking through sync backups and shares, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "mobile",
    "client",
    "security",
    "data",
    "leakage",
    "prevention",
    "triage",
    "remediate",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how mobile data leakage prevention supports prevent sensitive mobile data from leaking through sync backups and shares.",
    "Identify where a document sharing feature needs an explicit engineering control instead of reviewer memory.",
    "Choose classification-aware sharing controls and backup exclusions over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Mobile Data Leakage Prevention builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "prevent sensitive mobile data from leaking through sync backups and shares",
  "surface": "a document sharing feature",
  "secureApproach": "classification-aware sharing controls and backup exclusions",
  "riskyShortcut": "syncing and exporting sensitive data by default",
  "prerequisites": [
    {
      "labId": "third-party-sdk-review",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
