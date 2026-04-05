import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowRight, Lock, PartyPopper } from "lucide-react";
import ErrorBoundary from "../components/ErrorBoundary";
import { useAuth } from "../contexts/AuthContext";
import { labCatalog } from "../data/catalog";
import LabEngine from "../engine/LabEngine";
import type { GradeResult } from "../engine/LabEngine";
import { RENDERERS } from "../engine/renderers";
import {
  trackHintUsed,
  trackLabCompleted,
  trackLabStarted,
} from "../hooks/useAnalytics";
import { useAppReview } from "../hooks/useAppReview";
import { usePremiumStatus } from "../hooks/usePremiumStatus";
import { useProgress } from "../hooks/useProgress";
import { useRecommendedLab } from "../hooks/useRecommendedLab";

export default function LabScreen() {
  const { labId } = useParams<{ labId: string }>();
  const navigate = useNavigate();
  const { uid } = useAuth();
  const { progress, recordLabCompletion } = useProgress(uid);
  const { isPremium, isLoading: isPremiumLoading } = usePremiumStatus(uid);
  const { maybeRequestReview } = useAppReview();

  const labStartTime = useRef(0);
  const hasTrackedStart = useRef(false);
  const [justCompletedId, setJustCompletedId] = useState<string | null>(null);

  useEffect(() => {
    hasTrackedStart.current = false;
    labStartTime.current = 0;
    setJustCompletedId(null);
  }, [labId]);

  useEffect(() => {
    if (labId && !hasTrackedStart.current) {
      labStartTime.current = Date.now();
      hasTrackedStart.current = true;
      trackLabStarted(labId);
    }
  }, [labId]);

  const manifest = labCatalog.find((lab) => lab.id === labId);
  const completedLabIds = Object.keys(progress.labs).filter(
    (id) => progress.labs[id]?.completed
  );
  const allCompletedIds =
    justCompletedId && !completedLabIds.includes(justCompletedId)
      ? [...completedLabIds, justCompletedId]
      : completedLabIds;
  const recommendation = useRecommendedLab(labId ?? "", allCompletedIds);

  if (!manifest) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Lab not found.</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-xl bg-rose-500 text-white font-medium"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (manifest.accessLevel === "premium" && isPremiumLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (manifest.accessLevel === "premium" && !isPremium) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <Lock size={32} className="text-slate-500 mx-auto mb-3" />
          <p className="text-sm font-medium text-white mb-1">Premium Lab</p>
          <p className="text-xs text-slate-400 mb-4">
            This lab requires CodeForge Premium.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate("/upgrade")}
              className="px-4 py-2 rounded-xl bg-rose-500 text-white font-medium text-sm min-h-[44px]"
            >
              View Premium
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-xl bg-slate-700 text-slate-300 font-medium text-sm min-h-[44px]"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const Renderer = RENDERERS[manifest.rendererType];

  const handleLabComplete = (score: number, history: GradeResult[]) => {
    recordLabCompletion(
      manifest.id,
      score,
      history.map((result, index) => ({
        scenarioIndex: index,
        grade: result.type,
      }))
    );

    const durationSeconds = Math.round(
      (Date.now() - labStartTime.current) / 1000
    );
    trackLabCompleted(manifest.id, score, durationSeconds);
    setJustCompletedId(manifest.id);

    const alreadyCounted = progress.labs[manifest.id]?.completed ?? false;
    const totalCompleted =
      Object.values(progress.labs).filter((lab) => lab.completed).length +
      (alreadyCounted ? 0 : 1);
    maybeRequestReview(totalCompleted);
  };

  const handleHintUsed = (scenarioIndex: number) => {
    trackHintUsed(manifest.id, scenarioIndex);
  };

  const handleRetry = () => {
    labStartTime.current = Date.now();
    trackLabStarted(manifest.id);
  };

  const renderUpNext = () => {
    if (!recommendation) {
      return (
        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <PartyPopper size={24} className="text-rose-400 mx-auto mb-2" />
          <p className="text-sm font-semibold text-white mb-1">
            You've completed all available labs!
          </p>
          <p className="text-xs text-slate-400 mb-3">
            More labs are on the roadmap. Revisit a favorite and keep your streak
            alive.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-lg bg-rose-500 text-white text-sm font-medium min-h-[44px]"
          >
            Browse All Labs
          </button>
        </div>
      );
    }

    const isRecommendedPremium =
      recommendation.lab.accessLevel === "premium" && !isPremium;

    return (
      <div className="bg-slate-800 rounded-xl p-4">
        <p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold mb-1">
          Up Next
        </p>
        <p className="text-sm font-semibold text-white mb-0.5">
          {recommendation.lab.title}
        </p>
        <p className="text-xs text-slate-400 mb-3">{recommendation.reason}</p>
        {isRecommendedPremium ? (
          <button
            onClick={() => navigate("/upgrade")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 text-rose-300 text-sm font-medium min-h-[44px]"
          >
            <Lock size={14} /> Unlock with Premium
          </button>
        ) : (
          <button
            onClick={() => navigate(`/lab/${recommendation.lab.id}`)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500 text-white text-sm font-medium min-h-[44px]"
          >
            Start Lab <ArrowRight size={14} />
          </button>
        )}
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <LabEngine
        manifest={manifest}
        renderer={Renderer}
        onExit={() => navigate("/")}
        onLabComplete={handleLabComplete}
        onHintUsed={handleHintUsed}
        onRetry={handleRetry}
        renderAfterResults={renderUpNext}
      />
    </ErrorBoundary>
  );
}
