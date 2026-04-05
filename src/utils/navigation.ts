import type { NavigateFunction } from "react-router-dom";

export function canNavigateBack(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const historyState = window.history.state as { idx?: number } | null;
  if (typeof historyState?.idx === "number") {
    return historyState.idx > 0;
  }

  return window.history.length > 1;
}

export function navigateBack(navigate: NavigateFunction, fallback = "/") {
  if (canNavigateBack()) {
    navigate(-1);
    return;
  }

  navigate(fallback);
}
