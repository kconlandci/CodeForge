import { createCodeForgeLab, type LabSeed } from "./shared";

export const domXssClientRenderingLab = createCodeForgeLab({
  "id": "dom-xss-client-rendering",
  "title": "DOM XSS in Client Rendering",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 23,
  "description": "Practice dom xss in client rendering in a profile customization widget by comparing keep client-side rendering free of DOM injection sinks, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "dom",
    "xss",
    "client",
    "rendering",
    "investigate",
    "decide",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how dom xss in client rendering supports keep client-side rendering free of DOM injection sinks.",
    "Identify where a profile customization widget needs an explicit engineering control instead of reviewer memory.",
    "Choose bind text through safe DOM APIs and component props over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. DOM XSS in Client Rendering builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "keep client-side rendering free of DOM injection sinks",
  "surface": "a profile customization widget",
  "secureApproach": "bind text through safe DOM APIs and component props",
  "riskyShortcut": "writing attacker-controlled values into innerHTML",
  "prerequisites": [
    {
      "labId": "stored-xss-comment-moderation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
