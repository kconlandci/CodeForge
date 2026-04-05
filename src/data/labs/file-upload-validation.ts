import { createCodeForgeLab, type LabSeed } from "./shared";

export const fileUploadValidationLab = createCodeForgeLab({
  "id": "file-upload-validation",
  "title": "File Upload Validation",
  "track": "web-application-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 31,
  "description": "Practice file upload validation in a document upload endpoint by comparing validate uploaded files beyond extension checks, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "web",
    "application",
    "security",
    "file",
    "upload",
    "validation",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how file upload validation supports validate uploaded files beyond extension checks.",
    "Identify where a document upload endpoint needs an explicit engineering control instead of reviewer memory.",
    "Choose content-type, magic-byte, and quarantine validation over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Code Search & Diff Review"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. File Upload Validation builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "validate uploaded files beyond extension checks",
  "surface": "a document upload endpoint",
  "secureApproach": "content-type, magic-byte, and quarantine validation",
  "riskyShortcut": "trusting filenames and browser MIME types",
  "prerequisites": [
    {
      "labId": "secure-cookie-hardening",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
