import { createCodeForgeLab, type LabSeed } from "./shared";

export const leastPrivilegeDefaultsLab = createCodeForgeLab({
  "id": "least-privilege-defaults",
  "title": "Least-Privilege Defaults",
  "track": "secure-coding-fundamentals",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 12,
  "description": "Practice least-privilege defaults in a feature flag service by comparing choose secure defaults that deny unsafe behavior by default, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "least",
    "privilege",
    "defaults",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how least-privilege defaults supports choose secure defaults that deny unsafe behavior by default.",
    "Identify where a feature flag service needs an explicit engineering control instead of reviewer memory.",
    "Choose deny-by-default policies with explicit allow rules over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Least-Privilege Defaults builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "choose secure defaults that deny unsafe behavior by default",
  "surface": "a feature flag service",
  "secureApproach": "deny-by-default policies with explicit allow rules",
  "riskyShortcut": "allowing everything first and patching exceptions later",
  "prerequisites": [
    {
      "labId": "dependency-boundary-checks",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
