import Link from "next/link";
export default function Header({ path }) {
  return path.startsWith("/works/") ? (
    <header
      className={"pointer-events-none fixed inset-x-0 top-0 z-50 text-ink"}
      style={{
        height: "calc(var(--header-h) + env(safe-area-inset-top, 0px))",
        paddingTop: "env(safe-area-inset-top, 0px)",
        background:
          "linear-gradient(to bottom, color-mix(in srgb, var(--color-fog) 80%, transparent), transparent)",
      }}
    >
      <div className={"shell flex h-full items-center justify-between"}>
        <Link
          aria-label={"Abdul Aziz, home"}
          className={
            "pointer-events-auto text-[clamp(1.45rem,1.9vw,1.85rem)] leading-none"
          }
          href={"/"}
        >
          <span className={"wordmark "}>{"Abdul Aziz"}</span>
        </Link>
        <Link
          className={"pointer-events-auto group flex items-center gap-3 t-meta"}
          aria-label={"Close case study and return to all work"}
          href={"/works"}
        >
          <span className={"hidden sm:inline link-line"}>
            {"All case studies"}
          </span>
          <span
            className={
              "relative block h-9 w-9 rounded-full border border-current transition-transform duration-500 group-hover:rotate-90"
            }
          >
            <span
              className={
                "absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current"
              }
            ></span>
            <span
              className={
                "absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current"
              }
            ></span>
          </span>
        </Link>
      </div>
    </header>
  ) : (
    <header
      className={"pointer-events-none fixed inset-x-0 top-0 z-50 text-ink"}
      style={{
        height: "calc(var(--header-h) + env(safe-area-inset-top, 0px))",
        paddingTop: "env(safe-area-inset-top, 0px)",
        background:
          "linear-gradient(to bottom, color-mix(in srgb, var(--color-fog) 80%, transparent), transparent)",
      }}
    >
      <div className={"shell flex h-full items-center justify-between"}>
        <Link
          aria-label={"Abdul Aziz, home"}
          className={
            "pointer-events-auto text-[clamp(1.45rem,1.9vw,1.85rem)] leading-none"
          }
          href={"/"}
        >
          <span className={"wordmark "}>{"Abdul Aziz"}</span>
        </Link>
        <nav
          aria-label={"Main"}
          className={"pointer-events-auto hidden md:block"}
        >
          <ul
            className={
              "flex items-center gap-[clamp(1.5rem,2.6vw,2.6rem)] text-[0.95rem]"
            }
          >
            <li>
              <Link
                className={"nav-link"}
                href={"/works"}
                aria-current={path === "/works" ? "page" : undefined}
              >
                {"Work"}
              </Link>
            </li>
            <li>
              <Link
                className={"nav-link"}
                href={"/about-us"}
                aria-current={path === "/about-us" ? "page" : undefined}
              >
                {"About"}
              </Link>
            </li>
            <li>
              <Link
                className={"nav-link"}
                href={"/resume"}
                aria-current={path === "/resume" ? "page" : undefined}
              >
                {"Experience"}
              </Link>
            </li>
            <li>
              <Link
                className={"nav-link"}
                href={"/contact-us"}
                aria-current={path === "/contact-us" ? "page" : undefined}
              >
                {"Contact"}
              </Link>
            </li>
          </ul>
        </nav>
        <button
          type={"button"}
          className={"pointer-events-auto t-meta md:hidden"}
          aria-expanded={"false"}
          aria-controls={"mobile-menu"}
        >
          {"Menu"}
        </button>
      </div>
    </header>
  );
}
