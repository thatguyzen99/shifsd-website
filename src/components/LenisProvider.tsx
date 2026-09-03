"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Same-page hash links: intercept clicks and hand off to Lenis so it
    // scrolls smoothly and respects our sticky-navbar offset.
    function onAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest?.(
        "a[href]"
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;

      // Only care about hash links on the same page ("#foo" or "/current-path#foo")
      const url = new URL(anchor.href, window.location.origin);
      if (url.pathname !== window.location.pathname || !url.hash) return;

      const target = document.querySelector(url.hash);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
      history.replaceState(null, "", url.hash);
    }
    document.addEventListener("click", onAnchorClick);

    // Cross-page navigation to a hash: after route change, resolve #target
    // and jump there. Runs once per pathname change.
    const initialHash = window.location.hash;
    if (initialHash) {
      // Give Next.js one frame to paint the new page before scrolling.
      requestAnimationFrame(() => {
        const target = document.querySelector(initialHash);
        if (target) {
          lenis.scrollTo(target as HTMLElement, {
            offset: -96,
            immediate: false,
          });
        }
      });
    }

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
