import { createCodeForgeLab, type LabSeed } from "./shared";

export const webhookSignatureVerificationLab = createCodeForgeLab({
  "id": "webhook-signature-verification",
  "title": "Webhook Signature Verification",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "triage-remediate",
  "sortOrder": 80,
  "description": "Practice webhook signature verification in a payment webhook handler by comparing verify webhook origin and replay resistance before processing, prioritizing and remediating the right issue first, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "webhook",
    "signature",
    "verification",
    "triage",
    "remediate",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how webhook signature verification supports verify webhook origin and replay resistance before processing.",
    "Identify where a payment webhook handler needs an explicit engineering control instead of reviewer memory.",
    "Choose signed requests with timestamp and replay checks over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Secure SDLC Checklist"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. Webhook Signature Verification builds judgment around prioritizing and remediating the right issue first when delivery pressure is high.",
  "focus": "verify webhook origin and replay resistance before processing",
  "surface": "a payment webhook handler",
  "secureApproach": "signed requests with timestamp and replay checks",
  "riskyShortcut": "trusting IP allowlists alone",
  "prerequisites": [
    {
      "labId": "graphql-resolver-authorization",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
