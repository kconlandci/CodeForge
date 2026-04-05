import { createCodeForgeLab, type LabSeed } from "./shared";

export const rootedDeviceDetectionLab = createCodeForgeLab({
  "id": "rooted-device-detection",
  "title": "Rooted Device Detection",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 96,
  "description": "Practice rooted device detection in a mobile risk engine by comparing handle rooted or jailbroken device signals proportionally, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "rooted",
    "device",
    "detection",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how rooted device detection supports handle rooted or jailbroken device signals proportionally.",
    "Identify where a mobile risk engine needs an explicit engineering control instead of reviewer memory.",
    "Choose risk-based controls and server-side enforcement for compromised devices over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Rooted Device Detection builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "handle rooted or jailbroken device signals proportionally",
  "surface": "a mobile risk engine",
  "secureApproach": "risk-based controls and server-side enforcement for compromised devices",
  "riskyShortcut": "fully trusting device integrity without additional checks",
  "prerequisites": [
    {
      "labId": "deep-link-validation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
