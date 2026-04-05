import { createCodeForgeLab, type LabSeed } from "./shared";

export const deepLinkValidationLab = createCodeForgeLab({
  "id": "deep-link-validation",
  "title": "Deep Link Validation",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 95,
  "description": "Practice deep link validation in a mobile navigation handler by comparing validate deep links and intents before using client-side parameters, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "deep",
    "link",
    "validation",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how deep link validation supports validate deep links and intents before using client-side parameters.",
    "Identify where a mobile navigation handler needs an explicit engineering control instead of reviewer memory.",
    "Choose allowlisted schemes hosts and signed parameters over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Deep Link Validation builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "validate deep links and intents before using client-side parameters",
  "surface": "a mobile navigation handler",
  "secureApproach": "allowlisted schemes hosts and signed parameters",
  "riskyShortcut": "trusting any deep link data from the device",
  "prerequisites": [
    {
      "labId": "clipboard-screenshot-hygiene",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
