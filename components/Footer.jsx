import Link from "next/link";
import DATA from "@/lib/data.json";
export default function Footer({ path }) {
  const slug = path.startsWith("/works/") ? path.split("/")[2] : null;
  const index = DATA.projects.findIndex((p) => p.slug === slug);
  const project =
    index >= 0 ? DATA.projects[(index + 1) % DATA.projects.length] : null;
  const next = project
    ? {
        label: project.title,
        href: "/works/" + project.slug,
        kicker: "Next project",
      }
    : { ...(DATA.nextPage[path] || DATA.nextPage["/"]), kicker: "Next" };
  return (
    <footer className={"on-dark bg-night text-ink"}>
      <Link className={"group block border-b border-ink/15"} href={next.href}>
        <div className={"shell py-[clamp(4rem,10vw,9rem)]"}>
          <p className={"t-label mb-4"}>{next.kicker}</p>
          <p className={"t-h1 flex items-end justify-between gap-6"}>
            <span
              className={
                "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2vw]"
              }
            >
              {next.label}
            </span>
            <svg
              aria-hidden={"true"}
              viewBox={"0 0 48 48"}
              className={
                "mb-[0.1em] h-[0.6em] w-[0.6em] shrink-0 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:-rotate-45"
              }
            >
              <path
                d={"M4 24h38M28 10l14 14-14 14"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"3"}
              ></path>
            </svg>
          </p>
        </div>
      </Link>
      <div className={"shell grid-12 gap-y-12 py-[clamp(3rem,7vw,6rem)]"}>
        <div className={"col-span-12 lg:col-span-5"}>
          <p className={"t-h3 max-w-[16ch]"}>
            {"Working on a product? Let's talk."}
          </p>
          <div className={"mt-8 flex flex-wrap gap-3"}>
            <Link className={"btn btn-solid"} href={"/contact-us"}>
              {"Get in touch"}
            </Link>
          </div>
          <a
            href={"mailto:invensibleaziz@gmail.com"}
            className={"link-line t-lead mt-8 inline-block"}
          >
            {"invensibleaziz@gmail.com"}
          </a>
        </div>
        <div className={"col-span-12 lg:col-span-4"}>
          <p className={"t-meta flex items-start gap-3 "}>
            <span
              className={"relative mt-[0.35em] flex h-2 w-2 shrink-0"}
              aria-hidden={"true"}
            >
              <span
                className={
                  "avail-ping absolute inset-0 rounded-full bg-[#f07a2a]"
                }
              ></span>
              <span
                className={"relative h-2 w-2 rounded-full bg-[#f07a2a]"}
              ></span>
            </span>
            <span>
              <span className={"block"}>{"Available for new work"}</span>
              <span className={"block text-graphite"}>
                {"Based in Pakistan, working globally"}
              </span>
            </span>
          </p>
        </div>
        <div className={"col-span-12 lg:col-span-3 lg:col-start-10"}>
          <ul className={"t-meta space-y-2 text-[1rem]"}>
            <li>
              <a
                href={"https://www.linkedin.com/in/abdulazizuiux"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"link-line capitalize"}
              >
                {"linkedin"}
              </a>
            </li>
            <li>
              <a
                href={"https://www.behance.net/abdulaziz32"}
                target={"_blank"}
                rel={"noopener noreferrer"}
                className={"link-line capitalize"}
              >
                {"behance"}
              </a>
            </li>
            <li>
              <Link className={"link-line"} href={"/resume"}>
                {"Resume"}
              </Link>
            </li>
            <li>
              <a
                href={"/Abdul_Aziz_CV.pdf"}
                className={"link-line"}
                download={"Abdul_Aziz_CV.pdf"}
                data-no-transition={""}
              >
                {"Download resume (PDF)"}
              </a>
            </li>
            <li>
              <Link className={"link-line"} href={"/legal-notice"}>
                {"Legal notice"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          "shell flex items-center justify-between border-t border-ink/15 py-6 t-meta text-ink/60"
        }
      >
        <p>
          {"© "}
          {"2026"} {"Abdul Aziz"}
        </p>
        <button type={"button"} className={"link-line text-ink"}>
          {"Back to top"}
        </button>
      </div>
    </footer>
  );
}
