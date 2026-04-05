import { createCodeForgeLab, type LabSeed } from "./shared";

export const sessionFixationDefenseLab = createCodeForgeLab({
  "id": "session-fixation-defense",
  "title": "Session Fixation Defense",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 8,
  "description": "Practice session fixation defense in a web session manager by comparing rotate sessions after privilege changes, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "session",
    "fixation",
    "defense",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how session fixation defense supports rotate sessions after privilege changes.",
    "Identify where a web session manager needs an explicit engineering control instead of reviewer memory.",
    "Choose issue fresh sessions after login and elevation over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Session Fixation Defense builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "rotate sessions after privilege changes",
  "surface": "a web session manager",
  "secureApproach": "issue fresh sessions after login and elevation",
  "riskyShortcut": "reusing pre-auth session identifiers",
  "prerequisites": [
    {
      "labId": "session-id-generation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
