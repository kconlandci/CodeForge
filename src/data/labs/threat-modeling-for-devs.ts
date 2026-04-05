import { createCodeForgeLab, type LabSeed } from "./shared";

export const threatModelingForDevsLab = createCodeForgeLab({
  "id": "threat-modeling-for-devs",
  "title": "Threat Modeling for Developers",
  "track": "secure-coding-fundamentals",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 20,
  "description": "Practice threat modeling for developers in a sprint planning workflow by comparing turn threat-model findings into concrete engineering tasks, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "threat",
    "modeling",
    "for",
    "devs",
    "triage",
    "remediate",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how threat modeling for developers supports turn threat-model findings into concrete engineering tasks.",
    "Identify where a sprint planning workflow needs an explicit engineering control instead of reviewer memory.",
    "Choose derive abuse cases and backlog controls before coding over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Threat Modeling for Developers builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "turn threat-model findings into concrete engineering tasks",
  "surface": "a sprint planning workflow",
  "secureApproach": "derive abuse cases and backlog controls before coding",
  "riskyShortcut": "leaving threat notes out of the backlog",
  "prerequisites": [
    {
      "labId": "secure-feature-rollouts",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
