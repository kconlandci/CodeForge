import { createCodeForgeLab, type LabSeed } from "./shared";

export const authBypassPullRequestsLab = createCodeForgeLab({
  "id": "auth-bypass-pull-requests",
  "title": "Auth Bypass in Pull Requests",
  "track": "code-review-analysis",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 41,
  "description": "Practice auth bypass in pull requests in a pull request for an admin controller by comparing spot authorization bypasses hidden in seemingly harmless diffs, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "code",
    "review",
    "analysis",
    "auth",
    "bypass",
    "pull",
    "requests",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how auth bypass in pull requests supports spot authorization bypasses hidden in seemingly harmless diffs.",
    "Identify where a pull request for an admin controller needs an explicit engineering control instead of reviewer memory.",
    "Choose reviewing every trust boundary and policy check touched by the diff over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "Semgrep",
    "ESLint",
    "Dependency Scanners",
    "Secure Code Review"
  ],
  "careerInsight": "Code Review & Analysis skills show up in pull requests, release reviews, and incident follow-ups. Auth Bypass in Pull Requests builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "spot authorization bypasses hidden in seemingly harmless diffs",
  "surface": "a pull request for an admin controller",
  "secureApproach": "reviewing every trust boundary and policy check touched by the diff",
  "riskyShortcut": "approving because tests still pass",
  "prerequisites": []
} satisfies LabSeed);
