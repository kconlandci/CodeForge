import { createCodeForgeLab, type LabSeed } from "./shared";

export const owaspTop10MappingLab = createCodeForgeLab({
  "id": "owasp-top10-mapping",
  "title": "OWASP Top 10 Mapping",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 13,
  "description": "Practice owasp top 10 mapping in an architecture review board by comparing map code changes to the most common modern web risks, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "owasp",
    "top10",
    "mapping",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how owasp top 10 mapping supports map code changes to the most common modern web risks.",
    "Identify where an architecture review board needs an explicit engineering control instead of reviewer memory.",
    "Choose translate feature work into explicit OWASP control checks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure Code Review"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. OWASP Top 10 Mapping builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "map code changes to the most common modern web risks",
  "surface": "an architecture review board",
  "secureApproach": "translate feature work into explicit OWASP control checks",
  "riskyShortcut": "treating OWASP as documentation only",
  "prerequisites": [
    {
      "labId": "least-privilege-defaults",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
