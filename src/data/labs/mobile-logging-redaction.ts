import { createCodeForgeLab, type LabSeed } from "./shared";

export const mobileLoggingRedactionLab = createCodeForgeLab({
  "id": "mobile-logging-redaction",
  "title": "Mobile Logging Redaction",
  "track": "mobile-client-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "action-rationale",
  "sortOrder": 93,
  "description": "Practice mobile logging redaction in a mobile logging framework by comparing keep mobile logs from leaking secrets PII and session context, choosing the safest implementation path, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "mobile",
    "client",
    "security",
    "logging",
    "redaction",
    "action",
    "rationale",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how mobile logging redaction supports keep mobile logs from leaking secrets PII and session context.",
    "Identify where a mobile logging framework needs an explicit engineering control instead of reviewer memory.",
    "Choose structured redaction and debug-only logging controls over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP MASVS",
    "Android Keystore",
    "Charles Proxy",
    "Secure Code Review"
  ],
  "careerInsight": "Mobile & Client Security skills show up in pull requests, release reviews, and incident follow-ups. Mobile Logging Redaction builds judgment around choosing the safest implementation path when delivery pressure is high.",
  "focus": "keep mobile logs from leaking secrets PII and session context",
  "surface": "a mobile logging framework",
  "secureApproach": "structured redaction and debug-only logging controls",
  "riskyShortcut": "verbose production logs with request bodies and tokens",
  "prerequisites": [
    {
      "labId": "local-data-encryption",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
