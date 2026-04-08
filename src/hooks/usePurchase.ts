import { useCallback, useState } from "react";
import { Purchases } from "@revenuecat/purchases-capacitor";
import { useAuth } from "../contexts/AuthContext";
import { ENTITLEMENT_ID, PRODUCT_ID } from "../config/revenuecat";
import { setPremiumStatus } from "./usePremiumStatus";

export type PurchaseError =
  | "cancelled"
  | "already_owned"
  | "network"
  | "unknown";

interface PurchaseResult {
  success: boolean;
  error?: PurchaseError;
}

interface UsePurchase {
  purchase: () => Promise<PurchaseResult>;
  restore: () => Promise<PurchaseResult>;
  isPurchasing: boolean;
  isRestoring: boolean;
}

export function usePurchase(): UsePurchase {
  const { uid } = useAuth();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);

  const purchase = useCallback(async (): Promise<PurchaseResult> => {
    setIsPurchasing(true);

    try {
      const { customerInfo } = await Purchases.purchaseStoreProduct({
        product: {
          identifier: PRODUCT_ID,
        } as never,
      });

      const isPremium =
        customerInfo.entitlements.active[ENTITLEMENT_ID] !== undefined;

      if (isPremium) {
        await setPremiumStatus(true, uid);
        return { success: true };
      }

      return { success: false, error: "unknown" };
    } catch (error: unknown) {
      const purchaseError = error as { code?: string; userCancelled?: boolean };

      if (purchaseError.userCancelled || purchaseError.code === "1") {
        return { success: false, error: "cancelled" };
      }

      if (purchaseError.code === "7") {
        await setPremiumStatus(true, uid);
        return { success: true, error: "already_owned" };
      }

      console.error("[CodeForge] Purchase failed:", error);
      return { success: false, error: "network" };
    } finally {
      setIsPurchasing(false);
    }
  }, [uid]);

  const restore = useCallback(async (): Promise<PurchaseResult> => {
    setIsRestoring(true);

    try {
      const { customerInfo } = await Purchases.restorePurchases();
      const isPremium =
        customerInfo.entitlements.active[ENTITLEMENT_ID] !== undefined;

      if (isPremium) {
        await setPremiumStatus(true, uid);
        return { success: true };
      }

      // No active entitlement — clear local premium cache (handles refunds)
      await setPremiumStatus(false, uid);
      return { success: false, error: "unknown" };
    } catch (error) {
      console.error("[CodeForge] Restore failed:", error);
      return { success: false, error: "network" };
    } finally {
      setIsRestoring(false);
    }
  }, [uid]);

  return { purchase, restore, isPurchasing, isRestoring };
}
