import { createCodeForgeLab, type LabSeed } from "./shared";

export const secureStorageBasicsLab = createCodeForgeLab({
  "id": "secure-storage-basics",
  "title": "Secure Storage Basics",
  "track": "mobile-client-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 86,
  "description": "Practice secure storage basics in an Android client session manager by comparing store mobile secrets and tokens in protected platform storage, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "mobile",
    "client",
    "security",
    "secure",
    "storage",
    "basics",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how secure storage basics supports store mobile secrets and tokens in protected platform storage.",
    "Identify where an Android client session manager needs an explicit engineering control instead of reviewer memory.",
    "Choose OS-backed secure storage for sensitive client secrets over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Policy as Code"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Secure Storage Basics builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "store mobile secrets and tokens in protected platform storage",
  "surface": "an Android client session manager",
  "secureApproach": "OS-backed secure storage for sensitive client secrets",
  "riskyShortcut": "storing auth tokens in plain shared preferences",
  "prerequisites": []
} satisfies LabSeed);
