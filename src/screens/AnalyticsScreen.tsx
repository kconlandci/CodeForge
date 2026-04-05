import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  Clock,
  Target,
  Trash2,
  Trophy,
} from "lucide-react";
import { Dialog } from "@capacitor/dialog";
import { labCatalog } from "../data/catalog";
import { clearAnalytics, getAnalyticsSummary } from "../hooks/useAnalytics";
import { navigateBack } from "../utils/navigation";

function formatDuration(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  if (minutes < 60) return `${minutes}m ${remainder}s`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ${minutes % 60}m`;
}

function getLabTitle(labId: string): string {
  return labCatalog.find((lab) => lab.id === labId)?.title ?? labId;
}

export default function AnalyticsScreen() {
  const navigate = useNavigate();
  const [summary, setSummary] = useState(() => getAnalyticsSummary());

  const maxPerDay = Math.max(...summary.labsPerDay.map((day) => day.count), 1);

  const handleClear = async () => {
    try {
      const { value } = await Dialog.confirm({
        title: "Clear Analytics?",
        message: "This will delete all usage tracking data. This cannot be undone.",
        okButtonTitle: "Clear Data",
        cancelButtonTitle: "Cancel",
      });

      if (value) {
        clearAnalytics();
        setSummary(getAnalyticsSummary());
      }
    } catch {
      const confirmed = window.confirm(
        "Clear all analytics data? This cannot be undone."
      );
      if (confirmed) {
        clearAnalytics();
        setSummary(getAnalyticsSummary());
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4 pb-24">
      <div className="max-w-lg mx-auto pt-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigateBack(navigate)}
            aria-label="Go back"
            className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center active:bg-slate-700 transition-colors"
          >
            <ArrowLeft size={18} className="text-slate-400" />
          </button>
          <div>
            <h1 className="text-lg font-bold text-white">Usage Stats</h1>
            <p className="text-xs text-slate-500">Local analytics data</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatCard
            icon={<BarChart3 size={16} className="text-blue-400" />}
            label="Sessions"
            value={String(summary.totalSessions)}
          />
          <StatCard
            icon={<Clock size={16} className="text-purple-400" />}
            label="Avg Session"
            value={formatDuration(summary.avgSessionSeconds)}
          />
          <StatCard
            icon={<Trophy size={16} className="text-rose-400" />}
            label="Avg Score"
            value={summary.labsCompleted > 0 ? `${summary.avgScore}/100` : "-"}
          />
          <StatCard
            icon={<Target size={16} className="text-green-400" />}
            label="Completion Rate"
            value={summary.labsStarted > 0 ? `${summary.completionRate}%` : "-"}
          />
        </div>

        <div className="bg-slate-800 rounded-xl p-4 mb-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Lab Funnel
          </h2>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <div className="text-2xl font-bold text-white">
                {summary.labsStarted}
              </div>
              <div className="text-xs text-slate-500">Started</div>
            </div>
            <div className="text-slate-600 text-lg">-&gt;</div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-green-400">
                {summary.labsCompleted}
              </div>
              <div className="text-xs text-slate-500">Completed</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-4 mb-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
            Labs Completed (Last 14 Days)
          </h2>
          <div className="flex items-end gap-1" style={{ height: 100 }}>
            {summary.labsPerDay.map((day) => {
              const height =
                day.count > 0 ? Math.max((day.count / maxPerDay) * 100, 4) : 2;
              return (
                <div
                  key={day.date}
                  className="flex-1 flex flex-col items-center justify-end"
                  style={{ height: "100%" }}
                >
                  <div
                    className={`w-full rounded-t ${
                      day.count > 0 ? "bg-rose-500" : "bg-slate-700"
                    }`}
                    style={{ height: `${height}%`, minWidth: 4 }}
                    title={`${day.date}: ${day.count} labs`}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-slate-600">
              {summary.labsPerDay[0]?.date.slice(5)}
            </span>
            <span className="text-[9px] text-slate-600">
              {summary.labsPerDay[summary.labsPerDay.length - 1]?.date.slice(5)}
            </span>
          </div>
        </div>

        {summary.topLabs.length > 0 && (
          <div className="bg-slate-800 rounded-xl p-4 mb-6">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Most Played Labs
            </h2>
            <div className="space-y-2">
              {summary.topLabs.map((lab, index) => (
                <div key={lab.labId} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-slate-400 font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-xs text-white flex-1 truncate">
                    {getLabTitle(lab.labId)}
                  </span>
                  <span className="text-xs text-slate-500">{lab.count}x</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleClear}
          className="flex items-center gap-3 w-full bg-slate-800 rounded-xl p-4 min-h-[48px] active:bg-slate-700 transition-colors text-left"
        >
          <Trash2 size={16} className="text-red-400" />
          <span className="text-sm font-medium text-red-400">
            Clear Analytics Data
          </span>
        </button>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">{icon}</div>
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-[10px] text-slate-500 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
