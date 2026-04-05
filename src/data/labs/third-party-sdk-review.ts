import { createCodeForgeLab, type LabSeed } from "./shared";

export const thirdPartySdkReviewLab = createCodeForgeLab({
  "id": "third-party-sdk-review",
  "title": "Third-Party SDK Review",
  "track": "mobile-client-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 99,
  "description": "Practice third-party sdk review in a mobile dependency intake process by comparing review mobile SDKs for privacy storage and network behavior, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "mobile",
    "client",
    "security",
    "third",
    "party",
    "sdk",
    "review",
    "investigate",
    "decide",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how third-party sdk review supports review mobile SDKs for privacy storage and network behavior.",
    "Identify where a mobile dependency intake process needs an explicit engineering control instead of reviewer memory.",
    "Choose SDK review sandboxing and permission minimization over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Third-Party SDK Review builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "review mobile SDKs for privacy storage and network behavior",
  "surface": "a mobile dependency intake process",
  "secureApproach": "SDK review sandboxing and permission minimization",
  "riskyShortcut": "dropping tracking SDKs in without network or storage review",
  "prerequisites": [
    {
      "labId": "biometric-fallback-security",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
