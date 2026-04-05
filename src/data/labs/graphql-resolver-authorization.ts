import { createCodeForgeLab, type LabSeed } from "./shared";

export const graphqlResolverAuthorizationLab = createCodeForgeLab({
  "id": "graphql-resolver-authorization",
  "title": "GraphQL Resolver Authorization",
  "track": "api-backend-security",
  "tier": "intermediate",
  "difficulty": "moderate",
  "accessLevel": "free",
  "rendererType": "investigate-decide",
  "sortOrder": 79,
  "description": "Practice graphql resolver authorization in a GraphQL API by comparing enforce authorization at GraphQL resolver boundaries, investigating evidence before deciding on a fix, and the difference between a durable secure control and a risky shortcut.",
  "estimatedMinutes": 12,
  "tags": [
    "api",
    "backend",
    "security",
    "graphql",
    "resolver",
    "authorization",
    "investigate",
    "decide",
    "intermediate",
    "moderate",
    "free",
    "secure-coding"
  ],
  "learningObjectives": [
    "Explain how graphql resolver authorization supports enforce authorization at GraphQL resolver boundaries.",
    "Identify where a GraphQL API needs an explicit engineering control instead of reviewer memory.",
    "Choose field-aware authorization in resolvers and loaders over brittle convenience paths.",
    "Translate the finding into a repeatable team habit and regression check."
  ],
  "toolRelevance": [
    "OpenAPI",
    "JWT Libraries",
    "API Gateways",
    "Code Search & Diff Review"
  ],
  "careerInsight": "API & Backend Security skills show up in pull requests, release reviews, and incident follow-ups. GraphQL Resolver Authorization builds judgment around investigating evidence before deciding on a fix when delivery pressure is high.",
  "focus": "enforce authorization at GraphQL resolver boundaries",
  "surface": "a GraphQL API",
  "secureApproach": "field-aware authorization in resolvers and loaders",
  "riskyShortcut": "assuming top-level schema access is enough",
  "prerequisites": [
    {
      "labId": "service-to-service-auth",
      "minScore": 60
    }
  ]
} satisfies LabSeed);
