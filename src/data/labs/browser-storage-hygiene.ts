import { createCodeForgeLab, type LabSeed } from "./shared";

export const browserStorageHygieneLab = createCodeForgeLab({
  "id": "browser-storage-hygiene",
  "title": "Browser Storage Hygiene",
  "track": "web-application-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "investigate-decide",
  "sortOrder": 39,
  "description": "Practice browser storage hygiene in a single-page application auth layer by comparing keep browser-side storage from leaking tokens and secrets, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "web",
    "application",
    "security",
    "browser",
    "storage",
    "hygiene",
    "investigate",
    "decide",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how browser storage hygiene supports keep browser-side storage from leaking tokens and secrets.",
    "Identify where a single-page application auth layer needs an explicit engineering control instead of reviewer memory.",
    "Choose short-lived memory storage with backend session support over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Browser Storage Hygiene builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "keep browser-side storage from leaking tokens and secrets",
  "surface": "a single-page application auth layer",
  "secureApproach": "short-lived memory storage with backend session support",
  "riskyShortcut": "persisting long-lived tokens in localStorage",
  "prerequisites": [
    {
      "labId": "third-party-script-governance",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
