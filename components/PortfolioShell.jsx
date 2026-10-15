"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

export default function PortfolioShell({ children }) {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;
    let dispose;
    // Browser animation dependencies are loaded after mount to keep SSR safe.
    import("@/lib/portfolio-runtime")
      .then(({ startPortfolio }) => {
        if (!cancelled)
          dispose = startPortfolio(path, (href) =>
            router.push(href, { scroll: false }),
          );
      })
      .catch((error) => {
        // Keep every page readable if animation loading fails.
        document.documentElement.classList.remove("js");
        console.error("Portfolio animations could not initialize", error);
      });
    return () => {
      cancelled = true;
      dispose?.();
    };
  }, [path, router]);

  return (
    <>
      <a
        href="#main"
        className="sr-only-focusable fixed left-4 top-4 z-[80] rounded bg-ink px-4 py-2 text-paper"
      >
        Skip to content
      </a>
      <Header path={path} />
      <MobileMenu />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer path={path} />
    </>
  );
}
