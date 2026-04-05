import { createCodeForgeLab, type LabSeed } from "./shared";

export const storedXssCommentModerationLab = createCodeForgeLab({
  "id": "stored-xss-comment-moderation",
  "title": "Stored XSS Comment Moderation",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 22,
  "description": "Practice stored xss comment moderation in a community discussion feed by comparing neutralize persisted comment content before reuse, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "stored",
    "xss",
    "comment",
    "moderation",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how stored xss comment moderation supports neutralize persisted comment content before reuse.",
    "Identify where a community discussion feed needs an explicit engineering control instead of reviewer memory.",
    "Choose sanitized rich-text pipelines with safe renderers over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Policy as Code"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Stored XSS Comment Moderation builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "neutralize persisted comment content before reuse",
  "surface": "a community discussion feed",
  "secureApproach": "sanitized rich-text pipelines with safe renderers",
  "riskyShortcut": "storing and replaying raw HTML fragments",
  "prerequisites": [
    {
      "labId": "reflected-xss-prevention",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
