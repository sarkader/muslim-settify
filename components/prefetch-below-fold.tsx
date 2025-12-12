"use client";

import { useEffect } from "react";

import { CASE_LOGOS } from "@/components/ui/cases-with-infinite-scroll";
import { LOOM_THUMBNAILS, YOUTUBE_VIDEO_IDS } from "@/components/video-testimonials";

type NetworkInformationLike = {
  saveData?: boolean;
  effectiveType?: string;
};

function getConnection(): NetworkInformationLike | undefined {
  const nav = navigator as unknown as { connection?: NetworkInformationLike };
  return nav.connection;
}

function isSlowConnection(connection?: NetworkInformationLike): boolean {
  if (!connection) {
    return false;
  }
  if (connection.saveData) {
    return true;
  }
  const t = connection.effectiveType ?? "";
  return t === "slow-2g" || t === "2g";
}

function prefetchImage(url: string) {
  const img = new Image();
  img.decoding = "async";
  img.src = url;
}

function scheduleIdle(work: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => work(), { timeout: 2500 });
    return;
  }
  window.setTimeout(work, 1200);
}

export function PrefetchBelowFold() {
  useEffect(() => {
    // Only in the browser.
    const connection = getConnection();
    const slow = isSlowConnection(connection);
    const effectiveType = connection?.effectiveType ?? "";
    const allowExternal = !slow && (effectiveType === "" || effectiveType === "4g");

    scheduleIdle(() => {
      // 1) Local carousel/logo assets.
      for (const { image } of CASE_LOGOS) {
        prefetchImage(image);
      }

      // 2) Video poster thumbnails (cache-warm for when sections/iframes mount).
      if (allowExternal) {
        for (const id of YOUTUBE_VIDEO_IDS) {
          prefetchImage(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
        }

        // Loom thumbnails can be heavier (often GIFs) — cap the count.
        let count = 0;
        for (const url of Object.values(LOOM_THUMBNAILS)) {
          prefetchImage(url);
          count += 1;
          if (count >= 2) {
            break;
          }
        }
      }
    });
  }, []);

  return null;
}

