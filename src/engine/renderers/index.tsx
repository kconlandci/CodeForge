import type { ComponentType } from "react";
import type { RendererType } from "../../types/manifest";
import type { RendererProps } from "../LabEngine";
import ActionRationaleRenderer from "./ActionRationaleRenderer";
import InvestigateDecideRenderer from "./InvestigateDecideRenderer";
import ToggleConfigRenderer from "./ToggleConfigRenderer";
import TriageRemediateRenderer from "./TriageRemediateRenderer";

export const RENDERERS: Record<RendererType, ComponentType<RendererProps>> = {
  "action-rationale": ActionRationaleRenderer,
  "toggle-config": ToggleConfigRenderer,
  "investigate-decide": InvestigateDecideRenderer,
  "triage-remediate": TriageRemediateRenderer,
};
