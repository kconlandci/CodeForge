import { createCodeForgeLab, type LabSeed } from "./shared";

export const shiftLeftSecurityTestsLab = createCodeForgeLab({
  "id": "shift-left-security-tests",
  "title": "Shift-Left Security Tests",
  "track": "devsecops-practices",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 64,
  "description": "Practice shift-left security tests in a pre-merge validation suite by comparing run security tests early enough to stop regressions before release, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "devsecops",
    "practices",
    "shift",
    "left",
    "security",
    "tests",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how shift-left security tests supports run security tests early enough to stop regressions before release.",
    "Identify where a pre-merge validation suite needs an explicit engineering control instead of reviewer memory.",
    "Choose fast targeted security tests on every pull request over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "GitHub Actions",
    "Trivy",
    "Policy as Code",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "DevSecOps Practices skills show up in pull requests, release reviews, and incident follow-ups. Shift-Left Security Tests builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "run security tests early enough to stop regressions before release",
  "surface": "a pre-merge validation suite",
  "secureApproach": "fast targeted security tests on every pull request",
  "riskyShortcut": "deferring all security testing to the release branch",
  "prerequisites": [
    {
      "labId": "policy-as-code-guardrails",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
