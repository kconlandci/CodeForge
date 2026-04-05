import {
  createContext,
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { App as CapApp } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { Purchases } from "@revenuecat/purchases-capacitor";
import BottomNav from "./components/BottomNav";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { disclaimer, privacyPolicy, termsOfService } from "./data/legal";
import { trackAppOpened, trackSessionEnd } from "./hooks/useAnalytics";
import { useAndroidBackButton } from "./hooks/useAndroidBackButton";
import { REVENUECAT_API_KEY } from "./config/revenuecat";
import { IS_DEV } from "./config";
import HomeScreen from "./screens/HomeScreen";
import LabScreen from "./screens/LabScreen";
import ProgressScreen from "./screens/ProgressScreen";
import SettingsScreen from "./screens/SettingsScreen";

const RevenueCatReadyContext = createContext(false);

export function useRevenueCatReady() {
  return useContext(RevenueCatReadyContext);
}

const DevScreen = lazy(() => import("./screens/DevScreen"));
const UpgradeScreen = lazy(() => import("./screens/UpgradeScreen"));
const AnalyticsScreen = lazy(() => import("./screens/AnalyticsScreen"));
const LegalTextViewer = lazy(() => import("./components/LegalTextViewer"));

function LazyFallback() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-rose-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AuthGate({ children }: { children: ReactNode }) {
  const { isAuthReady } = useAuth();

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mx-auto mb-3">
            <div className="w-4 h-4 border-2 border-rose-400 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-xs text-slate-500">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

function AppLayout() {
  const location = useLocation();
  useAndroidBackButton();

  const hideNav =
    location.pathname.startsWith("/lab/") ||
    location.pathname.startsWith("/settings/") ||
    location.pathname === "/upgrade";

  return (
    <AuthGate>
      <Suspense fallback={<LazyFallback />}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/lab/:labId" element={<LabScreen />} />
          <Route path="/progress" element={<ProgressScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route
            path="/settings/privacy"
            element={
              <LegalTextViewer title="Privacy Policy" content={privacyPolicy} />
            }
          />
          <Route
            path="/settings/terms"
            element={
              <LegalTextViewer title="Terms of Service" content={termsOfService} />
            }
          />
          <Route
            path="/settings/disclaimer"
            element={
              <LegalTextViewer title="Disclaimer" content={disclaimer} />
            }
          />
          <Route path="/upgrade" element={<UpgradeScreen />} />
          <Route path="/settings/analytics" element={<AnalyticsScreen />} />
          {IS_DEV && <Route path="/dev" element={<DevScreen />} />}
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </Suspense>
      {!hideNav && <BottomNav />}
    </AuthGate>
  );
}

export default function App() {
  const [isRevenueCatReady, setIsRevenueCatReady] = useState(
    !Capacitor.isNativePlatform()
  );

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    Purchases.configure({ apiKey: REVENUECAT_API_KEY })
      .then(() => setIsRevenueCatReady(true))
      .catch((error) => {
        console.error("[CodeForge] RevenueCat init failed:", error);
        setIsRevenueCatReady(true);
      });
  }, []);

  useEffect(() => {
    trackAppOpened();

    const pauseListener = CapApp.addListener("pause", () => {
      trackSessionEnd();
    });
    const resumeListener = CapApp.addListener("resume", () => {
      trackAppOpened();
    });

    const handleUnload = () => trackSessionEnd();
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      pauseListener.then((listener) => listener.remove());
      resumeListener.then((listener) => listener.remove());
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <ErrorBoundary>
      <RevenueCatReadyContext.Provider value={isRevenueCatReady}>
        <AuthProvider>
          <BrowserRouter>
            <AppLayout />
          </BrowserRouter>
        </AuthProvider>
      </RevenueCatReadyContext.Provider>
    </ErrorBoundary>
  );
}
