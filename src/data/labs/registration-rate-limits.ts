import { createCodeForgeLab, type LabSeed } from "./shared";

export const registrationRateLimitsLab = createCodeForgeLab({
  "id": "registration-rate-limits",
  "title": "Registration & Login Rate Limits",
  "track": "secure-coding-fundamentals",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 6,
  "description": "Practice registration & login rate limits in a login API by comparing throttle abusive authentication traffic without blocking real users, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "secure",
    "coding",
    "fundamentals",
    "registration",
    "rate",
    "limits",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how registration & login rate limits supports throttle abusive authentication traffic without blocking real users.",
    "Identify where a login API needs an explicit engineering control instead of reviewer memory.",
    "Choose rate limits with lockout telemetry and abuse signals over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ASVS",
    "Zod",
    "TypeScript",
    "Policy as Code"
  ],
  "careerInsight": "Secure Coding Fundamentals skills show up in pull requests, release reviews, and incident follow-ups. Registration & Login Rate Limits builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "throttle abusive authentication traffic without blocking real users",
  "surface": "a login API",
  "secureApproach": "rate limits with lockout telemetry and abuse signals",
  "riskyShortcut": "unlimited retries with only client-side delays",
  "prerequisites": [
    {
      "labId": "authentication-basics",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
