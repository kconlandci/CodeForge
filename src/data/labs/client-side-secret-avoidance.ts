import { createCodeForgeLab, type LabSeed } from "./shared";

export const clientSideSecretAvoidanceLab = createCodeForgeLab({
  "id": "client-side-secret-avoidance",
  "title": "Client-Side Secret Avoidance",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 97,
  "description": "Practice client-side secret avoidance in a mobile configuration system by comparing keep durable secrets out of distributed mobile binaries, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "side",
    "secret",
    "avoidance",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how client-side secret avoidance supports keep durable secrets out of distributed mobile binaries.",
    "Identify where a mobile configuration system needs an explicit engineering control instead of reviewer memory.",
    "Choose server-issued short-lived credentials and remote configuration over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure Code Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Client-Side Secret Avoidance builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "keep durable secrets out of distributed mobile binaries",
  "surface": "a mobile configuration system",
  "secureApproach": "server-issued short-lived credentials and remote configuration",
  "riskyShortcut": "embedding API secrets and signing keys in the app",
  "prerequisites": [
    {
      "labId": "rooted-device-detection",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
