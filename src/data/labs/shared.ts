import {
  LabManifestSchema,
  type AccessLevel,
  type DifficultyLabel,
  type LabManifest,
  type RendererType,
  type Tier,
  type Track,
} from "../../types/manifest";

export interface LabSeed {
  id: string;
  title: string;
  track: Track;
  tier: Tier;
  difficulty: DifficultyLabel;
  accessLevel: AccessLevel;
  rendererType: RendererType;
  sortOrder: number;
  description: string;
  estimatedMinutes: number;
  tags: string[];
  learningObjectives: string[];
  toolRelevance: string[];
  careerInsight: string;
  focus: string;
  surface: string;
  secureApproach: string;
  riskyShortcut: string;
  prerequisites?: Array<{ labId: string; minScore?: number }>;
}

const TRACK_LABELS: Record<Track, string> = {
  "secure-coding-fundamentals": "Secure Coding Fundamentals",
  "web-application-security": "Web Application Security",
  "code-review-analysis": "Code Review & Analysis",
  "devsecops-practices": "DevSecOps Practices",
  "api-backend-security": "API & Backend Security",
  "mobile-client-security": "Mobile & Client Security",
};

const DATE_STAMP = "2026-03-31";

const SCORING = {
  maxScore: 100 as const,
  hintPenalty: 5,
  penalties: { perfect: 0 as const, partial: 10, wrong: 20 },
  passingThresholds: { pass: 75, partial: 50 },
};

const sentence = (value: string) =>
  /[.!?]$/.test(value) ? value : `${value}.`;

const emphasisFor = (difficulty: DifficultyLabel) =>
  difficulty === "challenging"
    ? "critical"
    : difficulty === "moderate"
      ? "warn"
      : "normal";

const actionFeedback = (seed: LabSeed) => ({
  perfect: `Correct. ${sentence(seed.secureApproach)} That is the option most likely to keep ${seed.surface} resilient as the code evolves.`,
  partial: `Close. The safer answer is still to apply ${seed.secureApproach} rather than depend on ${seed.riskyShortcut}.`,
  wrong: `That choice leaves ${seed.surface} leaning on ${seed.riskyShortcut}. The stronger move is to adopt ${seed.secureApproach}.`,
});

const toggleFeedback = (seed: LabSeed) => ({
  perfect: `Nice work. You hardened the settings around ${seed.surface} so ${seed.focus} can happen with explicit guardrails.`,
  partial: `Partly right. Some of the controls around ${seed.surface} are improved, but the safer baseline still needs the remaining hardening changes.`,
  wrong: `Those settings keep too much room for ${seed.riskyShortcut}. Revisit the configuration with ${seed.secureApproach} as the default.`,
});

const triageFeedback = (seed: LabSeed) => ({
  perfect: `Correct. You classified the issue proportionally and chose remediation that replaces ${seed.riskyShortcut} with ${seed.secureApproach}.`,
  partial: `You captured part of the risk, but the best answer still pairs the right priority with a remediation that scales beyond a one-off fix.`,
  wrong: `That response underestimates the engineering risk. The secure path is to treat ${seed.riskyShortcut} as debt and replace it with ${seed.secureApproach}.`,
});

export function createCodeForgeLab(seed: LabSeed): LabManifest {
  return LabManifestSchema.parse({
    schemaVersion: "1.1",
    id: seed.id,
    version: 1,
    title: seed.title,
    tier: seed.tier,
    track: seed.track,
    difficulty: seed.difficulty,
    accessLevel: seed.accessLevel,
    tags: seed.tags,
    description: seed.description,
    estimatedMinutes: seed.estimatedMinutes,
    learningObjectives: seed.learningObjectives,
    sortOrder: seed.sortOrder,
    status: "published",
    prerequisites: seed.prerequisites ?? [],
    rendererType: seed.rendererType,
    scenarios: buildScenarios(seed),
    hints: buildHints(seed),
    scoring: SCORING,
    careerInsight: seed.careerInsight,
    toolRelevance: seed.toolRelevance,
    createdAt: DATE_STAMP,
    updatedAt: DATE_STAMP,
  });
}

function buildScenarios(seed: LabSeed) {
  if (seed.rendererType === "action-rationale") {
    return buildActionRationale(seed);
  }
  if (seed.rendererType === "toggle-config") {
    return buildToggleConfig(seed);
  }
  if (seed.rendererType === "investigate-decide") {
    return buildInvestigateDecide(seed);
  }
  return buildTriageRemediate(seed);
}

function buildActionRationale(seed: LabSeed) {
  const feedback = actionFeedback(seed);
  const secureActionId = "apply-secure-approach";
  const partialActionId = "monitor-and-revisit";
  const riskyActionId = "ship-risky-shortcut";
  const secureRationaleId = "secure-rationale";

  const actions = [
    {
      id: secureActionId,
      label: `Implement ${seed.secureApproach}.`,
      color: "green" as const,
    },
    {
      id: partialActionId,
      label: "Add monitoring, document the risk, and revisit later.",
      color: "yellow" as const,
    },
    {
      id: riskyActionId,
      label: `Keep ${seed.riskyShortcut} so the team can ship faster.`,
      color: "red" as const,
    },
  ];

  const rationales = [
    {
      id: secureRationaleId,
      text: `${sentence(seed.secureApproach)} It creates a repeatable control at ${seed.surface} instead of depending on memory or manual clean-up.`,
    },
    {
      id: "telemetry-rationale",
      text: "Telemetry helps detect regressions, but it does not neutralize an unsafe implementation choice once it lands.",
    },
    {
      id: "shortcut-rationale",
      text: `${sentence(seed.riskyShortcut)} That shortcut may look fast now, but it spreads review debt and keeps the same weakness available to future changes.`,
    },
  ];

  return [
    {
      type: "action-rationale" as const,
      id: `${seed.id}-scenario-1`,
      title: "Choose the safer implementation path",
      context: `The team is updating ${seed.surface} to ${seed.focus}. A reviewer notices a proposal that relies on ${seed.riskyShortcut}. Pick the approach that best protects the feature before it ships.`,
      displayFields: [
        { label: "Track", value: TRACK_LABELS[seed.track] },
        { label: "Surface", value: seed.surface },
        { label: "Risk level", value: seed.difficulty, emphasis: emphasisFor(seed.difficulty) },
      ],
      evidence: [
        `Goal: ${sentence(seed.focus)}`,
        `Recommended control: ${sentence(seed.secureApproach)}`,
      ],
      actions,
      correctActionId: secureActionId,
      rationales,
      correctRationaleId: secureRationaleId,
      feedback,
    },
    {
      type: "action-rationale" as const,
      id: `${seed.id}-scenario-2`,
      title: "Respond to the pull request tradeoff",
      context: `A pull request for ${seed.surface} claims that ${seed.riskyShortcut} will be easier to maintain than ${seed.secureApproach}. Decide how to respond in review.`,
      displayFields: [
        { label: "Reviewer focus", value: "Boundary safety" },
        { label: "Expected outcome", value: "Repeatable control" },
        { label: "Pressure", value: "Release this sprint", emphasis: "warn" },
      ],
      actions,
      correctActionId: secureActionId,
      rationales,
      correctRationaleId: secureRationaleId,
      feedback,
    },
    {
      type: "action-rationale" as const,
      id: `${seed.id}-scenario-3`,
      title: "Set the release-ready decision",
      context: `Before release, the team wants the quickest path through ${seed.surface}. Choose the option that keeps ${TRACK_LABELS[seed.track]} aligned with production-ready engineering practice.`,
      displayFields: [
        { label: "What must hold", value: sentence(seed.focus) },
        { label: "Preferred control", value: sentence(seed.secureApproach) },
        { label: "Unsafe shortcut", value: sentence(seed.riskyShortcut), emphasis: "critical" },
      ],
      actions,
      correctActionId: secureActionId,
      rationales,
      correctRationaleId: secureRationaleId,
      feedback,
    },
  ];
}

function buildToggleConfig(seed: LabSeed) {
  return [
    {
      type: "toggle-config" as const,
      id: `${seed.id}-scenario-1`,
      title: "Baseline hardening profile",
      description: `Set the default controls for ${seed.surface} so the team can ${seed.focus} without leaving the risky path enabled by default.`,
      targetSystem: `${seed.surface} defaults`,
      items: [
        {
          id: "control-mode",
          label: "Primary control mode",
          detail: `Choose how strongly the system enforces ${seed.secureApproach}.`,
          currentState: "optional",
          correctState: "required",
          states: ["disabled", "optional", "required"],
          rationaleId: "enforce-boundary",
        },
        {
          id: "failure-path",
          label: "Failure handling",
          detail: `Pick the fallback behavior when the protection around ${seed.surface} cannot be verified.`,
          currentState: "warn only",
          correctState: "block and log",
          states: ["allow silently", "warn only", "block and log"],
          rationaleId: "fail-safe",
        },
        {
          id: "security-evidence",
          label: "Security telemetry",
          detail: "Capture enough evidence for review without leaking secrets or sensitive payloads.",
          currentState: "full payloads",
          correctState: "redacted events",
          states: ["disabled", "full payloads", "redacted events"],
          rationaleId: "redacted-telemetry",
        },
      ],
      rationales: [
        { id: "enforce-boundary", text: "Security-critical controls should be enforced, not left to optional team discipline." },
        { id: "fail-safe", text: "When protection cannot be verified, the safe default is to stop the risky action and create an auditable signal." },
        { id: "redacted-telemetry", text: "Telemetry should help responders without dumping secrets, tokens, or full payloads into logs." },
      ],
      feedback: toggleFeedback(seed),
    },
    {
      type: "toggle-config" as const,
      id: `${seed.id}-scenario-2`,
      title: "Pull request quality gate",
      description: `Tune the review and release settings so ${seed.riskyShortcut} cannot slip through ${seed.surface} as a convenience change.`,
      targetSystem: `${seed.surface} review gate`,
      items: [
        {
          id: "negative-cases",
          label: "Abuse-case coverage",
          detail: `Select how reviewers prove that ${seed.focus} still holds under misuse conditions.`,
          currentState: "happy path only",
          correctState: "negative + abuse cases",
          states: ["skipped", "happy path only", "negative + abuse cases"],
          rationaleId: "test-like-an-attacker",
        },
        {
          id: "merge-policy",
          label: "Merge policy",
          detail: "Choose how the team handles findings tied to secure coding controls.",
          currentState: "manual follow-up",
          correctState: "block on violations",
          states: ["allow with TODO", "manual follow-up", "block on violations"],
          rationaleId: "stop-regressions-early",
        },
        {
          id: "rollback-path",
          label: "Rollback readiness",
          detail: "Set the standard for reversing a risky change if the control fails in production.",
          currentState: "document later",
          correctState: "rehearsed rollback",
          states: ["none", "document later", "rehearsed rollback"],
          rationaleId: "rollback-confidence",
        },
      ],
      rationales: [
        { id: "test-like-an-attacker", text: "Security behavior needs misuse-focused tests, not only happy-path checks." },
        { id: "stop-regressions-early", text: "Blocking unsafe changes before merge is cheaper and more reliable than chasing them after release." },
        { id: "rollback-confidence", text: "Sensitive changes need a rollback path that has been thought through before production pressure arrives." },
      ],
      feedback: toggleFeedback(seed),
    },
    {
      type: "toggle-config" as const,
      id: `${seed.id}-scenario-3`,
      title: "Runtime exposure settings",
      description: `Finalize runtime defaults for ${seed.surface} so the secure path is the path engineers and users hit first.`,
      targetSystem: `${seed.surface} runtime profile`,
      items: [
        {
          id: "default-exposure",
          label: "Default exposure",
          detail: "Choose the default availability of the capability until explicit approval is present.",
          currentState: "broad access",
          correctState: "least privilege",
          states: ["broad access", "limited access", "least privilege"],
          rationaleId: "least-privilege",
        },
        {
          id: "exception-window",
          label: "Exception lifetime",
          detail: "Pick how long temporary exceptions stay active around the control.",
          currentState: "permanent",
          correctState: "one deployment",
          states: ["permanent", "30 days", "one deployment"],
          rationaleId: "short-lived-exceptions",
        },
        {
          id: "user-errors",
          label: "User-facing failures",
          detail: "Decide what users should see when the control stops an unsafe action.",
          currentState: "stack traces",
          correctState: "generic message + correlation id",
          states: ["stack traces", "generic message + correlation id", "silent failure"],
          rationaleId: "safe-error-handling",
        },
      ],
      rationales: [
        { id: "least-privilege", text: "Defaulting to least privilege keeps new code paths from inheriting unnecessary power." },
        { id: "short-lived-exceptions", text: "Temporary exceptions should expire quickly so they do not become the new normal." },
        { id: "safe-error-handling", text: "Users need actionable but sanitized failures, while detailed diagnostics stay on the server side." },
      ],
      feedback: toggleFeedback(seed),
    },
  ];
}

function buildInvestigateDecide(seed: LabSeed) {
  const feedback = actionFeedback(seed);
  const secureActionId = "replace-shortcut";
  const secureRationaleId = "boundary-rationale";

  return [
    {
      type: "investigate-decide" as const,
      id: `${seed.id}-scenario-1`,
      title: "Investigate the code review finding",
      objective: `Review the evidence and decide how the team should handle a proposed implementation for ${seed.surface}.`,
      investigationData: [
        {
          id: "code-diff",
          label: "Code diff",
          content: `// ${seed.title}\n// Proposed shortcut:\n${seed.riskyShortcut}\n\n// Expected direction:\n${seed.secureApproach}`,
          isCritical: true,
        },
        {
          id: "reviewer-note",
          label: "Reviewer note",
          content: `The change touches ${seed.surface}. We need to ${seed.focus}, but the current diff relies on a shortcut that bypasses the intended guardrail.`,
        },
        {
          id: "test-output",
          label: "Test output",
          content: "Happy-path tests pass, but there are no adversarial cases proving the secure control still holds under malformed or abusive input.",
        },
      ],
      actions: [
        { id: secureActionId, label: `Replace the shortcut with ${seed.secureApproach}.`, color: "green" },
        { id: "ship-and-monitor", label: "Ship it now and rely on telemetry to catch misuse.", color: "yellow" },
        { id: "document-and-accept", label: "Document the shortcut as known risk and move on.", color: "red" },
      ],
      correctActionId: secureActionId,
      rationales: [
        { id: secureRationaleId, text: `${sentence(seed.secureApproach)} That fixes the problem at the boundary instead of asking reviewers to remember special cases.` },
        { id: "monitoring-rationale", text: "Monitoring is useful, but it cannot repair a control gap once unsafe behavior is already reachable." },
        { id: "acceptance-rationale", text: "Documentation records the risk but does not eliminate the exploit path or the maintenance debt." },
      ],
      correctRationaleId: secureRationaleId,
      feedback,
    },
    {
      type: "investigate-decide" as const,
      id: `${seed.id}-scenario-2`,
      title: "Analyze the production signal",
      objective: `Inspect the runtime evidence and choose the strongest follow-up for ${seed.surface}.`,
      investigationData: [
        {
          id: "audit-log",
          label: "Audit log",
          content: `[audit] control=${seed.id} surface="${seed.surface}" event="unsafe_path_attempted" note="${seed.riskyShortcut}"`,
          isCritical: true,
        },
        {
          id: "incident-summary",
          label: "Incident summary",
          content: `Engineers confirmed that the risky path was still reachable when pressure increased during rollout. The secure approach was not fully enforced.`,
        },
        {
          id: "ops-note",
          label: "Ops note",
          content: "Telemetry exists, but responders had to manually reconstruct what happened because the fallback was too permissive.",
        },
      ],
      actions: [
        { id: secureActionId, label: "Tighten the control and make the secure path mandatory.", color: "green" },
        { id: "raise-alert-threshold", label: "Keep the behavior and just alert on it more aggressively.", color: "yellow" },
        { id: "hide-the-signal", label: "Reduce the logging noise so teams are not distracted.", color: "red" },
      ],
      correctActionId: secureActionId,
      rationales: [
        { id: secureRationaleId, text: "A repeated runtime signal means the guardrail should be enforced, not merely observed." },
        { id: "alerting-rationale", text: "More alerts can help responders, but they still leave the unsafe implementation reachable." },
        { id: "noise-rationale", text: "Suppressing the signal reduces visibility without reducing risk." },
      ],
      correctRationaleId: secureRationaleId,
      feedback,
    },
    {
      type: "investigate-decide" as const,
      id: `${seed.id}-scenario-3`,
      title: "Decide the release response",
      objective: `Use the release evidence to decide whether ${seed.surface} is ready to ship with the current implementation.`,
      investigationData: [
        {
          id: "release-checklist",
          label: "Release checklist",
          content: `Required for sign-off:\n- ${sentence(seed.secureApproach)}\n- Abuse-case coverage\n- Rollback plan`,
          isCritical: true,
        },
        {
          id: "delivery-pressure",
          label: "Delivery pressure",
          content: "Product wants the feature enabled today, but the current branch still depends on the shortcut for edge cases.",
        },
        {
          id: "security-review",
          label: "Security review",
          content: `Recommendation: do not ship ${seed.riskyShortcut} as a permanent exception; convert it into an enforceable control now.`,
        },
      ],
      actions: [
        { id: secureActionId, label: "Hold the release until the secure approach is in place.", color: "green" },
        { id: "time-box-waiver", label: "Ship with a waiver and fix it after launch.", color: "yellow" },
        { id: "ignore-review", label: "Ship as-is because the happy path already works.", color: "red" },
      ],
      correctActionId: secureActionId,
      rationales: [
        { id: secureRationaleId, text: "Security controls should be release criteria when they protect real production paths." },
        { id: "waiver-rationale", text: "A waiver can buy time, but it should not replace the actual engineering fix for a shipping control gap." },
        { id: "happy-path-rationale", text: "Happy-path success does not prove the system is resilient under misuse, failure, or abuse." },
      ],
      correctRationaleId: secureRationaleId,
      feedback,
    },
  ];
}

function buildTriageRemediate(seed: LabSeed) {
  const feedback = triageFeedback(seed);

  return [
    {
      type: "triage-remediate" as const,
      id: `${seed.id}-scenario-1`,
      title: "Triage the active control gap",
      description: `A review of ${seed.surface} found that engineers can still use ${seed.riskyShortcut} while trying to ${seed.focus}.`,
      evidence: [
        { type: "Code review", content: `Finding: ${seed.riskyShortcut}` },
        { type: "Expected control", content: `Required: ${seed.secureApproach}` },
        { type: "Business note", content: "The affected flow is active in production and used by customer-facing features." },
      ],
      classifications: [
        { id: "high-priority-defect", label: "High-priority secure coding defect", description: "A production-facing weakness that should be remediated before it spreads." },
        { id: "planned-hardening", label: "Planned hardening item", description: "Important debt, but safe to schedule behind production fixes." },
        { id: "false-positive", label: "False positive", description: "No meaningful risk remains after review." },
      ],
      correctClassificationId: "high-priority-defect",
      remediations: [
        { id: "replace-now", label: `Replace the shortcut with ${seed.secureApproach}`, description: "Fix the implementation and add regression coverage before release." },
        { id: "todo-later", label: "Add a TODO and revisit next quarter", description: "Track the debt but keep the current implementation live." },
        { id: "train-only", label: "Rely on team guidance only", description: "Explain the preferred approach in docs without changing the code." },
      ],
      correctRemediationId: "replace-now",
      rationales: [
        { id: "systemic-fix", text: "A production-facing shortcut should be treated as an engineering defect and replaced with a control that holds under repeat use." },
        { id: "delay-fix", text: "Scheduling the work later keeps the same unsafe behavior reachable today." },
        { id: "docs-only", text: "Documentation helps alignment, but it is not a substitute for changing the implementation." },
      ],
      correctRationaleId: "systemic-fix",
      feedback,
    },
    {
      type: "triage-remediate" as const,
      id: `${seed.id}-scenario-2`,
      title: "Classify the compensating-control case",
      description: `The team has temporary safeguards around ${seed.surface}, but the underlying implementation still leans on ${seed.riskyShortcut}.`,
      evidence: [
        { type: "Compensating control", content: "Additional review and monitoring are present today, but they are manual and team-dependent." },
        { type: "Implementation note", content: `The long-term target remains ${seed.secureApproach}.` },
        { type: "Risk note", content: "The current path is behind limited access, but the pattern could be copied into broader surfaces." },
      ],
      classifications: [
        { id: "high-priority-defect", label: "High-priority secure coding defect", description: "A defect that must block the current release." },
        { id: "planned-hardening", label: "Planned hardening item", description: "A real issue with partial mitigations that still needs a scheduled engineering fix." },
        { id: "accept-risk", label: "Accept the risk", description: "Good enough as long as the mitigations stay manual." },
      ],
      correctClassificationId: "planned-hardening",
      remediations: [
        { id: "schedule-secure-refactor", label: `Schedule a refactor to ${seed.secureApproach}`, description: "Time-box the exception and add tests before the next release window." },
        { id: "leave-mitigations", label: "Keep the manual mitigations indefinitely", description: "Depend on monitoring and reviewer memory as the permanent control." },
        { id: "remove-logging", label: "Remove the alerts to reduce noise", description: "Lower the visible friction without changing the risk." },
      ],
      correctRemediationId: "schedule-secure-refactor",
      rationales: [
        { id: "fix-before-copying", text: "Compensating controls buy time, but the engineering goal is still to replace the shortcut before the pattern spreads." },
        { id: "manual-controls", text: "Manual controls decay quickly because they depend on consistent human follow-through." },
        { id: "hide-signals", text: "Reducing the signal hides the debt instead of reducing the exposure." },
      ],
      correctRationaleId: "fix-before-copying",
      feedback,
    },
    {
      type: "triage-remediate" as const,
      id: `${seed.id}-scenario-3`,
      title: "Remediate the shared pattern",
      description: `A follow-up search found the same ${seed.riskyShortcut} pattern in multiple services connected to ${seed.surface}.`,
      evidence: [
        { type: "Search results", content: "The shortcut appears in a shared helper and in two recently merged feature branches." },
        { type: "Secure target", content: `Teams were expected to standardize on ${seed.secureApproach}.` },
        { type: "Engineering impact", content: "A single fix in the shared abstraction would eliminate the issue across the current rollout." },
      ],
      classifications: [
        { id: "systemic-defect", label: "Systemic defect", description: "A repeated pattern that should be fixed at the shared abstraction." },
        { id: "isolated-finding", label: "Isolated finding", description: "A one-off issue local to a single feature branch." },
        { id: "false-positive", label: "False positive", description: "The pattern is harmless when used carefully." },
      ],
      correctClassificationId: "systemic-defect",
      remediations: [
        { id: "fix-shared-layer", label: "Fix the shared layer and backfill affected call sites", description: "Remove the pattern centrally and add tests that keep it from returning." },
        { id: "patch-one-service", label: "Patch only the currently active service", description: "Reduce the immediate surface but leave the shared helper unchanged." },
        { id: "broadcast-guidance", label: "Send guidance and ask teams to self-correct", description: "Rely on each team to fix the issue on its own timeline." },
      ],
      correctRemediationId: "fix-shared-layer",
      rationales: [
        { id: "shared-abstraction", text: "When a risky pattern lives in shared code, the best fix is the one that removes it once and protects all dependents." },
        { id: "local-patch", text: "A local patch leaves the shared defect ready to reappear anywhere else it is consumed." },
        { id: "guidance-only", text: "Guidance improves awareness, but it does not guarantee a consistent or timely code fix." },
      ],
      correctRationaleId: "shared-abstraction",
      feedback,
    },
  ];
}

function buildHints(seed: LabSeed): [string, string, string] {
  return [
    `Start by naming the trust boundary in ${seed.surface} and asking what could go wrong if it relies on ${seed.riskyShortcut}.`,
    `Compare ${seed.secureApproach} against the shortcut in terms of enforcement, reviewability, and rollback safety.`,
    "Choose the answer that scales into a team habit, not just the fastest one-off patch.",
  ];
}
