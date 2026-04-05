import { createCodeForgeLab, type LabSeed } from "./shared";

export const certificatePinningDecisionsLab = createCodeForgeLab({
  "id": "certificate-pinning-decisions",
  "title": "Certificate Pinning Decisions",
  "track": "mobile-client-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 87,
  "description": "Practice certificate pinning decisions in a mobile networking stack by comparing decide when and how to use certificate pinning safely, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "mobile",
    "client",
    "security",
    "certificate",
    "pinning",
    "decisions",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how certificate pinning decisions supports decide when and how to use certificate pinning safely.",
    "Identify where a mobile networking stack needs an explicit engineering control instead of reviewer memory.",
    "Choose pinned trust with rotation planning and fallback strategy over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Certificate Pinning Decisions builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "decide when and how to use certificate pinning safely",
  "surface": "a mobile networking stack",
  "secureApproach": "pinned trust with rotation planning and fallback strategy",
  "riskyShortcut": "hardcoding fragile certificates with no renewal plan",
  "prerequisites": [
    {
      "labId": "secure-storage-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
