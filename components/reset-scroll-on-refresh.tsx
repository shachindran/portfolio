"use client";

import { useEffect } from "react";

export function ResetScrollOnRefresh() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const reset = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    reset();
    requestAnimationFrame(reset);
    window.addEventListener("load", reset, { once: true });

    return () => {
      window.removeEventListener("load", reset);
    };
  }, []);

  return null;
}
