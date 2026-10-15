import Link from "next/link";

export default function ResumeContent() {
  return (
    <>
      <div id={"page"}>
        <div
          className={
            "resume shell pb-[var(--section-y)] pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))]"
          }
        >
          <header
            className={"grid-12 mb-[clamp(3rem,6vw,5rem)] items-end gap-y-8"}
          >
            <div className={"col-span-12 lg:col-span-8"}>
              <p className={"t-meta mb-4 text-graphite"}>
                {"Senior UI/UX Designer | Product Designer"}
              </p>
              <h1
                className={"t-h1"}
                data-reveal={"lines"}
                data-immediate={""}
                aria-label={"Abdul Aziz"}
              >
                <span aria-hidden={"true"}>
                  <span className={"word-mask"}>
                    <span>{"Abdul"}</span>
                  </span>{" "}
                </span>
                <span aria-hidden={"true"}>
                  <span className={"word-mask"}>
                    <span>{"Aziz"}</span>
                  </span>
                </span>
              </h1>
              <p
                className={"t-lead mt-8 max-w-[52ch]"}
                data-reveal={"fade"}
                data-immediate={""}
              >
                {
                  "Senior UI/UX & Product Designer with 6+ years of experience designing fintech, SaaS, web, and mobile products. Experienced in UX research, interaction design, design systems, prototyping, stakeholder collaboration, and leading design teams."
                }
              </p>
            </div>
            <div
              className={
                "no-print col-span-12 flex flex-wrap gap-3 lg:col-span-4 lg:justify-end"
              }
              data-reveal={"fade"}
              data-immediate={""}
            >
              <a
                href={"/Abdul_Aziz_CV.pdf"}
                download={"Abdul_Aziz_CV.pdf"}
                data-no-transition={""}
                className={"btn btn-solid"}
              >
                {"Download resume (PDF)"}
              </a>
              <button
                type={"button"}
                className={"btn btn-ghost"}
                data-print={""}
              >
                {"Print or save as PDF"}
              </button>
              <Link className={"btn btn-ghost"} href={"/contact-us"}>
                {"Get in touch"}
              </Link>
            </div>
            <ul
              className={
                "t-meta col-span-12 flex flex-wrap gap-x-8 gap-y-2 text-graphite"
              }
            >
              <li>
                <a
                  href={"mailto:invensibleaziz@gmail.com"}
                  className={"link-line text-ink"}
                >
                  {"invensibleaziz@gmail.com"}
                </a>
              </li>
              <li>
                {"Available for new work"}
                {", "}
                {"based in pakistan, working globally"}
              </li>
              <li>
                <a
                  href={"https://www.linkedin.com/in/abdulazizuiux"}
                  className={"link-line capitalize text-ink"}
                >
                  {"linkedin"}
                </a>
              </li>
              <li>
                <a
                  href={"https://www.behance.net/abdulaziz32"}
                  className={"link-line capitalize text-ink"}
                >
                  {"behance"}
                </a>
              </li>
            </ul>
          </header>
          <section
            aria-labelledby={"r-experience"}
            className={"mb-[clamp(2rem,4vw,3rem)]"}
          >
            <h2 id={"r-experience"} className={"t-h2 mb-8"}>
              {"Experience"}
            </h2>
            <ol className={"border-b border-line"}>
              <li
                className={
                  "grid-12 gap-y-3 border-t border-line py-[clamp(1.5rem,3vw,2.25rem)]"
                }
                data-reveal={"fade"}
              >
                <p
                  className={
                    "t-meta col-span-12 tabular-nums text-graphite md:col-span-3"
                  }
                >
                  {"Feb 2026"}
                  {" to "}
                  {"Present"}
                </p>
                <div className={"col-span-12 md:col-span-5"}>
                  <h3 className={"t-h3 text-[clamp(1.35rem,1.1rem+1vw,2rem)]"}>
                    {"Team Lead UI/UX"}
                  </h3>
                  <p className={"t-meta mt-1 text-graphite"}>{"EVRIM Tech"}</p>
                </div>
                <div className={"col-span-12 md:col-span-4"}>
                  <p className={"t-body"}>
                    {
                      "Leading the UI/UX team designing modern mobile and web applications."
                    }
                  </p>
                  <ul
                    className={
                      "t-body mt-3 list-disc space-y-1.5 pl-5 text-graphite marker:text-line"
                    }
                  >
                    <li>
                      {
                        "Lead the UI/UX team in designing modern mobile & web applications."
                      }
                    </li>
                    <li>
                      {
                        "Manage project timelines, design quality, and cross-functional collaboration."
                      }
                    </li>
                    <li>
                      {"Conduct design reviews and mentor junior designers."}
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={
                  "grid-12 gap-y-3 border-t border-line py-[clamp(1.5rem,3vw,2.25rem)]"
                }
                data-reveal={"fade"}
              >
                <p
                  className={
                    "t-meta col-span-12 tabular-nums text-graphite md:col-span-3"
                  }
                >
                  {"Feb 2024"}
                  {" to "}
                  {"Jan 2026"}
                </p>
                <div className={"col-span-12 md:col-span-5"}>
                  <h3 className={"t-h3 text-[clamp(1.35rem,1.1rem+1vw,2rem)]"}>
                    {"Sr. UI/UX Designer"}
                  </h3>
                  <p className={"t-meta mt-1 text-graphite"}>{"App In Snap"}</p>
                </div>
                <div className={"col-span-12 md:col-span-4"}>
                  <p className={"t-body"}>
                    {
                      "Designed user experiences for websites and SaaS applications, from research to developer handoff."
                    }
                  </p>
                  <ul
                    className={
                      "t-body mt-3 list-disc space-y-1.5 pl-5 text-graphite marker:text-line"
                    }
                  >
                    <li>
                      {
                        "Designed intuitive user experiences for website and SaaS applications."
                      }
                    </li>
                    <li>
                      {
                        "Conducted user research and translated business requirements into user-centered solutions."
                      }
                    </li>
                    <li>
                      {
                        "Built wireframes, interactive prototypes, and responsive UI designs."
                      }
                    </li>
                    <li>
                      {
                        "Worked closely with developers during design handoff using Figma."
                      }
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={
                  "grid-12 gap-y-3 border-t border-line py-[clamp(1.5rem,3vw,2.25rem)]"
                }
                data-reveal={"fade"}
              >
                <p
                  className={
                    "t-meta col-span-12 tabular-nums text-graphite md:col-span-3"
                  }
                >
                  {"2021"}
                  {" to "}
                  {"2024"}
                </p>
                <div className={"col-span-12 md:col-span-5"}>
                  <h3 className={"t-h3 text-[clamp(1.35rem,1.1rem+1vw,2rem)]"}>
                    {"UI/UX Designer"}
                  </h3>
                  <p className={"t-meta mt-1 text-graphite"}>
                    {"Data Apps Studio"}
                  </p>
                </div>
                <div className={"col-span-12 md:col-span-4"}>
                  <p className={"t-body"}>
                    {
                      "Led UI/UX design for multiple Android and iOS applications."
                    }
                  </p>
                  <ul
                    className={
                      "t-body mt-3 list-disc space-y-1.5 pl-5 text-graphite marker:text-line"
                    }
                  >
                    <li>
                      {
                        "Led UI/UX design for multiple Android and iOS applications."
                      }
                    </li>
                    <li>
                      {
                        "Created responsive user interfaces following Material Design and Apple Human Interface Guidelines."
                      }
                    </li>
                    <li>
                      {
                        "Collaborated with product owners and developers throughout the product lifecycle."
                      }
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className={
                  "grid-12 gap-y-3 border-t border-line py-[clamp(1.5rem,3vw,2.25rem)]"
                }
                data-reveal={"fade"}
              >
                <p
                  className={
                    "t-meta col-span-12 tabular-nums text-graphite md:col-span-3"
                  }
                >
                  {"2020"}
                  {" to "}
                  {"2021"}
                </p>
                <div className={"col-span-12 md:col-span-5"}>
                  <h3 className={"t-h3 text-[clamp(1.35rem,1.1rem+1vw,2rem)]"}>
                    {"Graphic Designer"}
                  </h3>
                  <p className={"t-meta mt-1 text-graphite"}>{"AW Groups"}</p>
                </div>
                <div className={"col-span-12 md:col-span-4"}>
                  <p className={"t-body"}>
                    {
                      "Designed marketing campaigns and brand materials for digital and print."
                    }
                  </p>
                  <ul
                    className={
                      "t-body mt-3 list-disc space-y-1.5 pl-5 text-graphite marker:text-line"
                    }
                  >
                    <li>
                      {
                        "Designed marketing campaigns for digital and print platforms."
                      }
                    </li>
                    <li>
                      {
                        "Produced branding materials, social media creatives, and promotional graphics."
                      }
                    </li>
                    <li>
                      {
                        "Collaborated with marketing teams to maintain consistent brand identity."
                      }
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </section>
          <section
            className={
              "grid-12 gap-y-6 border-t border-line py-[clamp(2rem,4vw,3.5rem)]"
            }
            aria-labelledby={"r-Skills"}
          >
            <h2 id={"r-Skills"} className={"t-label col-span-12 md:col-span-3"}>
              {"Skills"}
            </h2>
            <div className={"col-span-12 md:col-span-9"}>
              <ul className={"flex flex-wrap gap-2"}>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Product Design"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"UI/UX Design"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"UX Research"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"User Flows"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Journey Mapping"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Wireframing"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Prototyping"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Design Systems"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Information Architecture"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Interaction Design"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Responsive Design"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Accessibility (WCAG)"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Mobile App Design"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Dashboard Design"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"SaaS"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"FinTech"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Agile"}
                </li>
              </ul>
            </div>
          </section>
          <section
            className={
              "grid-12 gap-y-6 border-t border-line py-[clamp(2rem,4vw,3.5rem)]"
            }
            aria-labelledby={"r-Tools"}
          >
            <h2 id={"r-Tools"} className={"t-label col-span-12 md:col-span-3"}>
              {"Tools"}
            </h2>
            <div className={"col-span-12 md:col-span-9"}>
              <ul className={"flex flex-wrap gap-2"}>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Figma"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"FigJam"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Adobe XD"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Photoshop"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Illustrator"}
                </li>
                <li
                  className={"t-meta rounded-full border border-line px-4 py-2"}
                >
                  {"Miro"}
                </li>
              </ul>
            </div>
          </section>
          <section
            className={
              "grid-12 gap-y-6 border-t border-line py-[clamp(2rem,4vw,3.5rem)]"
            }
            aria-labelledby={"r-Education"}
          >
            <h2
              id={"r-Education"}
              className={"t-label col-span-12 md:col-span-3"}
            >
              {"Education"}
            </h2>
            <div className={"col-span-12 md:col-span-9"}>
              <ul className={"space-y-4"}>
                <li>
                  <p className={"t-h3 text-[var(--step-1)]"}>
                    {"BS Software Engineering"}
                  </p>
                  <p className={"t-meta mt-1 text-graphite"}>
                    {"The University of Lahore, Islamabad"}
                    {", "}
                    {"2014 – 2018"}
                  </p>
                </li>
                <li>
                  <p className={"t-h3 text-[var(--step-1)]"}>
                    {"F.Sc Pre-Engineering"}
                  </p>
                  <p className={"t-meta mt-1 text-graphite"}>
                    {"Punjab College of Information Technology"}
                    {", "}
                    {"2012 – 2014"}
                  </p>
                </li>
                <li>
                  <p className={"t-h3 text-[var(--step-1)]"}>
                    {"Matriculation"}
                  </p>
                  <p className={"t-meta mt-1 text-graphite"}>
                    {"Ideal Education System, Rawalpindi"}
                    {", "}
                    {"2011 – 2012"}
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
