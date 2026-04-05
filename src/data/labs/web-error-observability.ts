import { createCodeForgeLab, type LabSeed } from "./shared";

export const webErrorObservabilityLab = createCodeForgeLab({
  "id": "web-error-observability",
  "title": "Web Error Observability",
  "track": "web-application-security",
  "tier": "advanced",
  "difficulty": "challenging",
  "accessLevel": "premium",
  "rendererType": "triage-remediate",
  "sortOrder": 40,
  "description": "Practice web error observability in a frontend error pipeline by comparing capture web attack telemetry without exposing sensitive details, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 15,
  "tags": [
    "web",
    "application",
    "security",
    "error",
    "observability",
    "triage",
    "remediate",
    "advanced",
    "challenging",
    "premium",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how web error observability supports capture web attack telemetry without exposing sensitive details.",
    "Identify where a frontend error pipeline needs an explicit engineering control instead of reviewer memory.",
    "Choose sanitized client telemetry with server correlation IDs over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. Web Error Observability builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "capture web attack telemetry without exposing sensitive details",
  "surface": "a frontend error pipeline",
  "secureApproach": "sanitized client telemetry with server correlation IDs",
  "riskyShortcut": "sending raw stack traces and request bodies to the browser",
  "prerequisites": [
    {
      "labId": "browser-storage-hygiene",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
