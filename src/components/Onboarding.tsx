import { useState, type ReactNode } from "react";
import { CheckCircle, Code, ShieldCheck } from "lucide-react";
import BrandMark from "./BrandMark";

const ONBOARDING_KEY = "codeforge_onboarding_complete";

export function isOnboardingComplete(): boolean {
  return localStorage.getItem(ONBOARDING_KEY) === "true";
}

function markOnboardingComplete() {
  localStorage.setItem(ONBOARDING_KEY, "true");
}

interface OnboardingProps {
  onComplete: () => void;
}

interface OnboardingScreen {
  title: string;
  body: string;
  icon: ReactNode;
  isFinal?: boolean;
  requiresConsent?: boolean;
}

const screens: OnboardingScreen[] = [
  {
    title: "Welcome to CodeForge",
    body: "Practice secure coding and software development judgment through short, hands-on labs.",
    icon: (
      <div className="mb-4 flex justify-center">
        <BrandMark size="lg" />
      </div>
    ),
  },
  {
    title: "How It Works",
    body: "Inspect the code or configuration, decide on the safest path, and get immediate feedback on why it works.",
    icon: (
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center">
          <Code className="text-slate-300" size={24} />
        </div>
        <div className="text-slate-500 text-lg">-&gt;</div>
        <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center">
          <ShieldCheck className="text-rose-400" size={24} />
        </div>
        <div className="text-slate-500 text-lg">-&gt;</div>
        <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center">
          <CheckCircle className="text-green-400" size={24} />
        </div>
      </div>
    ),
  },
  {
    title: "Start Your First Lab",
    body: "CodeForge is for education and practice only. Labs are simulated and designed to build secure engineering instincts, not to replace professional review or formal training.",
    icon: null,
    isFinal: true,
    requiresConsent: true,
  },
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [page, setPage] = useState(0);
  const [consentChecked, setConsentChecked] = useState(false);

  const finish = () => {
    markOnboardingComplete();
    onComplete();
  };

  const screen = screens[page];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-6">
      {!screen.requiresConsent && (
        <button
          onClick={finish}
          className="absolute top-4 right-4 text-xs text-slate-500 min-h-[48px] min-w-[48px] flex items-center justify-center"
        >
          Skip
        </button>
      )}

      <div className="flex flex-col items-center text-center max-w-sm">
        {screen.icon}
        <h1 className="text-2xl font-bold text-white mb-3">{screen.title}</h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          {screen.body}
        </p>
      </div>

      {screen.requiresConsent && (
        <label className="flex items-center gap-3 mb-4 max-w-xs cursor-pointer">
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(event) => setConsentChecked(event.target.checked)}
            className="w-5 h-5 rounded accent-rose-500 shrink-0"
          />
          <span className="text-xs text-slate-400 text-left">
            I understand this app is for educational practice and does not
            replace professional review or production approval.
          </span>
        </label>
      )}

      <div className="flex gap-2 mb-6">
        {screens.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === page ? "bg-rose-400" : "bg-slate-700"
            }`}
          />
        ))}
      </div>

      {screen.isFinal ? (
        <button
          onClick={finish}
          disabled={screen.requiresConsent && !consentChecked}
          className={`w-full max-w-xs py-4 rounded-xl font-semibold text-base transition-colors min-h-[48px] ${
            screen.requiresConsent && !consentChecked
              ? "bg-slate-700 text-slate-500 cursor-not-allowed"
              : "bg-rose-500 hover:bg-rose-600 text-white"
          }`}
        >
          Let's Go
        </button>
      ) : (
        <button
          onClick={() => setPage((current) => current + 1)}
          className="w-full max-w-xs py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base transition-colors min-h-[48px]"
        >
          Next
        </button>
      )}
    </div>
  );
}
