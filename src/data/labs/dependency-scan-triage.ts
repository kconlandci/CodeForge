import { createCodeForgeLab, type LabSeed } from "./shared";

export const dependencyScanTriageLab = createCodeForgeLab({
  "id": "dependency-scan-triage",
  "title": "Dependency Scan Triage",
  "track": "code-review-analysis",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 46,
  "description": "Practice dependency scan triage in an npm dependency review by comparing rank dependency findings by exploitability and reachability, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "code",
    "review",
    "analysis",
    "dependency",
    "scan",
    "triage",
    "toggle",
    "config",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how dependency scan triage supports rank dependency findings by exploitability and reachability.",
    "Identify where an npm dependency review needs an explicit engineering control instead of reviewer memory.",
    "Choose prioritizing reachable vulnerable packages with upgrade plans over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Policy as Code"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Dependency Scan Triage builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "rank dependency findings by exploitability and reachability",
  "surface": "an npm dependency review",
  "secureApproach": "prioritizing reachable vulnerable packages with upgrade plans",
  "riskyShortcut": "sorting only by CVSS score",
  "prerequisites": [
    {
      "labId": "static-analysis-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
