"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HOME_ANCHORS = new Set(["menu", "contact", "reviews", "top"]);

function scrollWindowToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Keep page loads and route changes pinned to the top of the viewport. */
export function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");

    // Clear leftover menu-category hashes so the browser does not jump mid-page.
    if (pathname === "/" && hash && !HOME_ANCHORS.has(hash)) {
      history.replaceState(null, "", pathname + window.location.search);
      scrollWindowToTop();
      return;
    }

    if (pathname === "/" && HOME_ANCHORS.has(hash)) return;

    scrollWindowToTop();
    // Beat late browser scroll restoration / hash jumps.
    const frame = requestAnimationFrame(() => {
      scrollWindowToTop();
      requestAnimationFrame(scrollWindowToTop);
    });
    const timeout = window.setTimeout(scrollWindowToTop, 50);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
