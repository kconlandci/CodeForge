import { useCallback, useEffect, useState } from "react";
import { Preferences } from "@capacitor/preferences";
import { Purchases } from "@revenuecat/purchases-capacitor";
import { useRevenueCatReady } from "../App";
import { ENTITLEMENT_ID } from "../config/revenuecat";

const PREMIUM_KEY_PREFIX = "codeforge_is_premium";
const PREMIUM_CACHE_TIME_PREFIX = "codeforge_premium_cache_time";
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

interface PremiumStatus {
  isPremium: boolean;
  isLoading: boolean;
  refreshPremiumStatus: () => Promise<void>;
}

function prefixedKey(base: string, uid: string | null): string {
  return uid ? `${base}_${uid}` : base;
}

async function checkRevenueCat(): Promise<boolean | null> {
  try {
    const { isConfigured } = await Purchases.isConfigured();
    if (!isConfigured) {
      return null;
    }

    const { customerInfo } = await Purchases.getCustomerInfo();
    return customerInfo.entitlements.active[ENTITLEMENT_ID] !== undefined;
  } catch {
    return null;
  }
}

async function readCache(uid: string | null): Promise<boolean> {
  try {
    const premiumKey = prefixedKey(PREMIUM_KEY_PREFIX, uid);
    const premiumCacheTimeKey = prefixedKey(PREMIUM_CACHE_TIME_PREFIX, uid);
    const { value: premiumValue } = await Preferences.get({ key: premiumKey });
    const { value: cacheTimeValue } = await Preferences.get({
      key: premiumCacheTimeKey,
    });

    if (premiumValue !== "true") {
      return false;
    }

    const cacheTime = cacheTimeValue ? parseInt(cacheTimeValue, 10) : 0;
    const isExpired = Date.now() - cacheTime > CACHE_TTL_MS;

    if (isExpired) {
      console.warn(
        "[CodeForge] Premium cache expired, treating as non-premium until verified."
      );
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

export function usePremiumStatus(uid?: string | null): PremiumStatus {
  const isRevenueCatReady = useRevenueCatReady();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkPremiumStatus = useCallback(async () => {
    setIsLoading(true);

    try {
      const revenueCatResult = await checkRevenueCat();

      if (revenueCatResult !== null) {
        setIsPremium(revenueCatResult);
        await setPremiumStatus(revenueCatResult, uid ?? null);
        return;
      }

      console.warn(
        "[CodeForge] RevenueCat unavailable, falling back to premium cache."
      );
      const cached = await readCache(uid ?? null);
      setIsPremium(cached);
    } catch (error) {
      console.error("[CodeForge] Failed to check premium status:", error);
      const cached = await readCache(uid ?? null);
      setIsPremium(cached);
    } finally {
      setIsLoading(false);
    }
  }, [uid]);

  useEffect(() => {
    if (!isRevenueCatReady) {
      setIsLoading(true);
      return;
    }

    checkPremiumStatus();
  }, [checkPremiumStatus, isRevenueCatReady]);

  return {
    isPremium,
    isLoading: isLoading || !isRevenueCatReady,
    refreshPremiumStatus: checkPremiumStatus,
  };
}

export async function setPremiumStatus(
  isPremium: boolean,
  uid?: string | null
): Promise<void> {
  const premiumKey = prefixedKey(PREMIUM_KEY_PREFIX, uid ?? null);
  const premiumCacheTimeKey = prefixedKey(
    PREMIUM_CACHE_TIME_PREFIX,
    uid ?? null
  );

  await Preferences.set({
    key: premiumKey,
    value: isPremium ? "true" : "false",
  });
  await Preferences.set({
    key: premiumCacheTimeKey,
    value: Date.now().toString(),
  });
}
