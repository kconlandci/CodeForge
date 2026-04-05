import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Code,
  CreditCard,
  Loader2,
  Lock,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import BrandMark from "../components/BrandMark";
import { labCatalog } from "../data/catalog";
import { learningPaths } from "../data/paths";
import { useAuth } from "../contexts/AuthContext";
import { usePremiumStatus } from "../hooks/usePremiumStatus";
import { usePurchase } from "../hooks/usePurchase";
import { navigateBack } from "../utils/navigation";

export default function UpgradeScreen() {
  const navigate = useNavigate();
  const { uid } = useAuth();
  const { purchase, restore, isPurchasing, isRestoring } = usePurchase();
  const { isPremium, refreshPremiumStatus } = usePremiumStatus(uid);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const premiumLabs = labCatalog.filter(
    (lab) => lab.accessLevel === "premium" && lab.status === "published"
  );

  const valueProps = [
    {
      icon: Code,
      text: `${premiumLabs.length} premium labs across secure coding, web security, APIs, mobile, and DevSecOps`,
    },
    {
      icon: ShieldCheck,
      text: "Deeper practice in secure defaults, code review, and production-ready remediation",
    },
    {
      icon: Workflow,
      text: `${learningPaths.length} learning paths that build from fundamentals into advanced delivery pressure scenarios`,
    },
    {
      icon: Server,
      text: "A one-time unlock for the full CodeForge catalog",
    },
    {
      icon: CreditCard,
      text: "No subscription required",
    },
  ];

  const handlePurchase = async () => {
    setErrorMsg(null);
    const result = await purchase();

    if (result.success) {
      await refreshPremiumStatus();
      setPurchaseSuccess(true);
    } else if (result.error === "network") {
      setErrorMsg("Purchase failed. Check your connection and try again.");
    } else if (result.error !== "cancelled") {
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const handleRestore = async () => {
    setErrorMsg(null);
    const result = await restore();

    if (result.success) {
      await refreshPremiumStatus();
      setPurchaseSuccess(true);
    } else if (result.error === "network") {
      setErrorMsg("Restore failed. Check your connection and try again.");
    } else {
      setErrorMsg("No previous purchase found.");
    }
  };

  const isBusy = isPurchasing || isRestoring;

  if (isPremium || purchaseSuccess) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Header navigate={navigate} title="CodeForge Premium" />
        <div className="max-w-lg mx-auto p-4 pt-16 text-center">
          <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">
            Premium Unlocked
          </h2>
          <p className="text-sm text-slate-400 mb-8">
            All premium CodeForge labs are now available on this account.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-rose-500 text-white font-semibold text-sm"
          >
            Explore the Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header navigate={navigate} title="CodeForge Premium" />

      <div className="max-w-lg mx-auto p-4 pb-12">
        <div className="text-center mb-8 pt-4">
          <div className="flex justify-center mb-4">
            <BrandMark size="lg" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Unlock the Full CodeForge Catalog
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
            Get lifetime access to every premium lab focused on secure coding,
            code review, delivery hardening, backend security, and mobile risk
            reduction.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {valueProps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-slate-800 rounded-xl p-3"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-rose-400" />
                </div>
                <span className="text-sm text-slate-300">{item.text}</span>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800 border-2 border-rose-500 rounded-xl p-6 text-center mb-6 relative">
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-rose-500 text-[9px] font-bold text-white whitespace-nowrap">
            One-Time Unlock
          </div>
          <div className="text-4xl font-bold text-white mt-2">$14.99</div>
          <div className="text-xs text-rose-300 mt-1">
            lifetime premium access
          </div>
        </div>

        {errorMsg && (
          <p className="text-xs text-red-400 text-center mb-3">{errorMsg}</p>
        )}

        <button
          onClick={handlePurchase}
          disabled={isBusy}
          className="w-full py-3.5 rounded-xl bg-rose-500 text-white font-semibold text-base mb-2 active:bg-rose-600 disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {isPurchasing ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Processing...
            </>
          ) : (
            "Unlock Premium - $14.99"
          )}
        </button>
        <p className="text-[10px] text-slate-500 text-center mb-4">
          Secured by Google Play through RevenueCat.
        </p>

        <button
          onClick={handleRestore}
          disabled={isBusy}
          className="w-full text-center text-xs text-slate-500 py-2 min-h-[48px] disabled:opacity-40 flex items-center justify-center gap-1"
        >
          {isRestoring ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Restoring...
            </>
          ) : (
            "Restore Purchase"
          )}
        </button>

        {premiumLabs.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
              What You'll Unlock
            </h3>
            <div className="space-y-2">
              {premiumLabs.map((lab) => {
                const tierColor =
                  lab.difficulty === "easy"
                    ? "bg-green-500/15 text-green-400"
                    : lab.difficulty === "moderate"
                      ? "bg-sky-500/15 text-sky-400"
                      : "bg-rose-500/15 text-rose-300";

                return (
                  <div
                    key={lab.id}
                    className="bg-slate-800 rounded-xl p-3 flex items-start gap-3"
                  >
                    <Lock
                      size={14}
                      className="text-slate-500 mt-0.5 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white truncate">
                        {lab.title}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${tierColor}`}
                        >
                          {lab.difficulty}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {lab.description.split(".")[0]}.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Header({
  navigate,
  title,
}: {
  navigate: ReturnType<typeof useNavigate>;
  title: string;
}) {
  return (
    <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 py-3">
      <div className="max-w-lg mx-auto flex items-center gap-3">
        <button
          onClick={() => navigateBack(navigate)}
          aria-label="Go back"
          className="min-w-[48px] min-h-[48px] flex items-center justify-center -ml-2"
        >
          <ArrowLeft size={20} className="text-slate-400" />
        </button>
        <h1 className="text-sm font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
}
