import { createCodeForgeLab, type LabSeed } from "./shared";

export const templateInjectionDefenseLab = createCodeForgeLab({
  "id": "template-injection-defense",
  "title": "Template Injection Defense",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 32,
  "description": "Practice template injection defense in a customizable email template service by comparing avoid server-side template injection in dynamic views, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "template",
    "injection",
    "defense",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how template injection defense supports avoid server-side template injection in dynamic views.",
    "Identify where a customizable email template service needs an explicit engineering control instead of reviewer memory.",
    "Choose separating trusted templates from untrusted data placeholders over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Template Injection Defense builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "avoid server-side template injection in dynamic views",
  "surface": "a customizable email template service",
  "secureApproach": "separating trusted templates from untrusted data placeholders",
  "riskyShortcut": "evaluating user-supplied template expressions",
  "prerequisites": [
    {
      "labId": "file-upload-validation",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
