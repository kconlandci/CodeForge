import { createCodeForgeLab, type LabSeed } from "./shared";

export const cachePoisoningDefenseLab = createCodeForgeLab({
  "id": "cache-poisoning-defense",
  "title": "Cache Poisoning Defense",
  "track": "web-application-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "action-rationale",
  "sortOrder": 37,
  "description": "Practice cache poisoning defense in an edge caching layer by comparing keep shared caches from serving attacker-influenced content, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "web",
    "application",
    "security",
    "cache",
    "poisoning",
    "defense",
    "action",
    "rationale",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how cache poisoning defense supports keep shared caches from serving attacker-influenced content.",
    "Identify where an edge caching layer needs an explicit engineering control instead of reviewer memory.",
    "Choose normalized cache keys with explicit vary rules over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure Code Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Cache Poisoning Defense builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "keep shared caches from serving attacker-influenced content",
  "surface": "an edge caching layer",
  "secureApproach": "normalized cache keys with explicit vary rules",
  "riskyShortcut": "caching responses that mix user input into keys",
  "prerequisites": [
    {
      "labId": "websocket-session-security",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
