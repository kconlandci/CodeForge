import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureMobileNetworkingLab = createCodeForgeLab({
  "id": "secure-mobile-networking",
  "title": "Secure Mobile Networking",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 91,
  "description": "Practice secure mobile networking in a client networking layer by comparing protect mobile API calls on hostile networks, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "secure",
    "networking",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure mobile networking supports protect mobile API calls on hostile networks.",
    "Identify where a client networking layer needs an explicit engineering control instead of reviewer memory.",
    "Choose TLS validation retries and trust controls that protect data in transit over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Secure Mobile Networking builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "protect mobile API calls on hostile networks",
  "surface": "a client networking layer",
  "secureApproach": "TLS validation retries and trust controls that protect data in transit",
  "riskyShortcut": "disabling strict transport checks to support old proxies",
  "prerequisites": [
    {
      "labId": "obfuscation-symbol-stripping",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
