import { createCodeForgeLab, type LabSeed } from "./shared";

export const sameSiteCookiePoliciesLab = createCodeForgeLab({
  "id": "same-site-cookie-policies",
  "title": "SameSite Cookie Policies",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 25,
  "description": "Practice samesite cookie policies in a session middleware configuration by comparing set cookie policies that resist CSRF and session leakage, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "same",
    "site",
    "cookie",
    "policies",
    "action",
    "rationale",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how samesite cookie policies supports set cookie policies that resist CSRF and session leakage.",
    "Identify where a session middleware configuration needs an explicit engineering control instead of reviewer memory.",
    "Choose SameSite, Secure, and HttpOnly defaults for sensitive cookies over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure Code Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. SameSite Cookie Policies builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "set cookie policies that resist CSRF and session leakage",
  "surface": "a session middleware configuration",
  "secureApproach": "SameSite, Secure, and HttpOnly defaults for sensitive cookies",
  "riskyShortcut": "shipping auth cookies with broad default attributes",
  "prerequisites": [
    {
      "labId": "csrf-token-rotation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
