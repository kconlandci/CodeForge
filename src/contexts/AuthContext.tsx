import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { Preferences } from "@capacitor/preferences";
import { auth } from "../config/firebase";

interface AuthContextType {
  uid: string | null;
  isAuthReady: boolean;
}

const AuthContext = createContext<AuthContextType>({
  uid: null,
  isAuthReady: false,
});

const UID_STORAGE_KEY = "codeforge_firebase_uid";

async function getStoredUid(): Promise<string | null> {
  const { value } = await Preferences.get({ key: UID_STORAGE_KEY });
  return value;
}

async function storeUid(uid: string): Promise<void> {
  await Preferences.set({ key: UID_STORAGE_KEY, value: uid });
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [uid, setUid] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const currentUid = user.uid;
          setUid(currentUid);

          const storedUid = await getStoredUid();
          if (storedUid && storedUid !== currentUid) {
            console.warn(
              `[CodeForge] UID changed: stored=${storedUid}, current=${currentUid}. ` +
                `User may have lost progress. Previous purchases may need restoration.`
            );
          }

          await storeUid(currentUid);
        } catch (error) {
          console.error("[CodeForge] UID persistence failed:", error);
        } finally {
          setIsAuthReady(true);
        }
      } else {
        try {
          await signInAnonymously(auth);
          return;
        } catch (error) {
          console.error("[CodeForge] Anonymous sign-in failed:", error);
          setUid(null);
          setIsAuthReady(true);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ uid, isAuthReady }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
