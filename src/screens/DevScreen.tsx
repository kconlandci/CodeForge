import { useState } from "react";
import { Link } from "react-router-dom";
import { labCatalog } from "../data/catalog";
import { useAuth } from "../contexts/AuthContext";
import { useProgress } from "../hooks/useProgress";
import { LabManifestSchema } from "../types/manifest";
import type { LabManifest, RendererType } from "../types/manifest";

function ValidateButton({ manifest }: { manifest: LabManifest }) {
  const [result, setResult] = useState<{ ok: boolean; error?: string } | null>(
    null
  );

  const validate = () => {
    try {
      LabManifestSchema.parse(manifest);
      setResult({ ok: true });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error ?? "Unknown error");
      setResult({ ok: false, error: message });
    }
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={validate}
        className="px-3 py-1.5 rounded bg-slate-700 text-slate-200 text-xs font-medium hover:bg-slate-600 transition-colors"
      >
        Validate
      </button>
      {result !== null && (
        <span
          className={`text-xs font-mono ${
            result.ok ? "text-green-400" : "text-red-400"
          }`}
        >
          {result.ok ? "PASS" : "FAIL"}
        </span>
      )}
      {result && !result.ok && (
        <pre className="text-[10px] text-red-300 max-w-xs truncate">
          {result.error}
        </pre>
      )}
    </div>
  );
}

function countBy<T>(items: T[], key: (item: T) => string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const item of items) {
    const value = key(item);
    counts[value] = (counts[value] || 0) + 1;
  }
  return counts;
}

export default function DevScreen() {
  const { uid } = useAuth();
  const { progress, resetProgress, getTotalCompleted } = useProgress(uid);

  const rendererCounts = countBy(labCatalog, (lab) => lab.rendererType);
  const difficultyCounts = countBy(labCatalog, (lab) => lab.difficulty);
  const trackCounts = countBy(labCatalog, (lab) => lab.track);
  const accessCounts = countBy(labCatalog, (lab) => lab.accessLevel);
  const totalScenarios = labCatalog.reduce(
    (sum, lab) => sum + lab.scenarios.length,
    0
  );

  const allRenderers: RendererType[] = [
    "action-rationale",
    "toggle-config",
    "investigate-decide",
    "triage-remediate",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-4 pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-bold text-white">
              CodeForge Dev Preview
            </h1>
            <p className="text-xs text-slate-400">
              {labCatalog.length} manifests loaded
            </p>
          </div>
          <Link to="/" className="text-xs text-rose-400 hover:underline">
            Home
          </Link>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6 space-y-4">
          <h2 className="text-sm font-semibold text-white">Content Coverage</h2>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase mb-1">
              By Renderer ({totalScenarios} total scenarios)
            </h3>
            <div className="flex flex-wrap gap-2">
              {allRenderers.map((renderer) => (
                <span
                  key={renderer}
                  className={`px-2 py-1 rounded text-xs font-mono ${
                    (rendererCounts[renderer] || 0) < 2
                      ? "bg-yellow-900/30 text-yellow-400 border border-yellow-500/30"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {renderer}: {rendererCounts[renderer] || 0}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase mb-1">
              By Difficulty
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(difficultyCounts).map(([key, value]) => (
                <span
                  key={key}
                  className="px-2 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300"
                >
                  {key}: {value}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase mb-1">
              By Track
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(trackCounts).map(([key, value]) => (
                <span
                  key={key}
                  className="px-2 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300"
                >
                  {key}: {value}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase mb-1">
              By Access Level
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(accessCounts).map(([key, value]) => (
                <span
                  key={key}
                  className="px-2 py-1 rounded text-xs font-mono bg-slate-800 text-slate-300"
                >
                  {key}: {value}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">
              Progress Inspector
            </h2>
            <button
              onClick={resetProgress}
              className="px-3 py-1.5 rounded bg-red-900/30 text-red-400 text-xs font-medium hover:bg-red-900/50 transition-colors border border-red-500/30"
            >
              Reset Progress
            </button>
          </div>
          <div className="flex gap-4 text-xs text-slate-400">
            <span>XP: {progress.xp}</span>
            <span>Streak: {progress.streakDays}d</span>
            <span>Completed: {getTotalCompleted()}</span>
          </div>
          <pre className="text-[10px] text-slate-400 bg-slate-950 rounded p-3 overflow-auto max-h-48 font-mono">
            {JSON.stringify(progress, null, 2)}
          </pre>
        </div>

        <h2 className="text-sm font-semibold text-white mb-3">Lab Manifests</h2>
        <div className="space-y-3">
          {labCatalog.map((lab) => (
            <div
              key={lab.id}
              className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold text-white">
                    {lab.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-1 text-[10px] font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {lab.tier}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {lab.track}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-rose-300">
                      {lab.rendererType}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded ${
                        lab.status === "published"
                          ? "bg-green-900/30 text-green-400"
                          : "bg-yellow-900/30 text-yellow-400"
                      }`}
                    >
                      {lab.status}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {lab.scenarios.length} scenarios
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      {lab.accessLevel}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/lab/${lab.id}`}
                  className="shrink-0 px-3 py-1.5 rounded bg-rose-500 text-white text-xs font-semibold hover:bg-rose-600 transition-colors"
                >
                  Play
                </Link>
              </div>
              <ValidateButton manifest={lab} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
