import { createCodeForgeLab, type LabSeed } from "./shared";

export const sqlParameterizedQueriesLab = createCodeForgeLab({
  "id": "sql-parameterized-queries",
  "title": "SQL Parameterized Queries",
  "track": "web-application-security",
  "tier": "beginner",
  "difficulty": "easy",
  "accessLevel": "free",
  "rendererType": "toggle-config",
  "sortOrder": 26,
  "description": "Practice sql parameterized queries in a reporting endpoint by comparing parameterize SQL queries that read filtered business data, hardening the right defaults, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 10,
  "tags": [
    "web",
    "application",
    "security",
    "sql",
    "parameterized",
    "queries",
    "toggle",
    "config",
    "beginner",
    "easy",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how sql parameterized queries supports parameterize SQL queries that read filtered business data.",
    "Identify where a reporting endpoint needs an explicit engineering control instead of reviewer memory.",
    "Choose prepared statements with bound parameters over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OWASP ZAP",
    "Content Security Policy",
    "Browser DevTools",
    "Policy as Code"
  ],
  "careerInsight": "Web Application Security skills show up in pull requests, release reviews, and incident follow-ups. SQL Parameterized Queries builds judgment around hardening the right defaults when delivery pressure is high.",
  "focus": "parameterize SQL queries that read filtered business data",
  "surface": "a reporting endpoint",
  "secureApproach": "prepared statements with bound parameters",
  "riskyShortcut": "string interpolation inside WHERE clauses",
  "prerequisites": [
    {
      "labId": "same-site-cookie-policies",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
