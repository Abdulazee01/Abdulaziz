import Link from "next/link";

export default function ContactUsContent() {
  return (
    <>
      <div id={"page"}>
        <section
          className={
            "shell pb-[var(--section-y)] pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))]"
          }
        >
          <h1
            className={"t-h1 max-w-[13ch]"}
            data-reveal={"lines"}
            data-immediate={""}
            aria-label={"Let's build something people love using"}
          >
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"Let's"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"build"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"something"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"people"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"love"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"using"}</span>
              </span>
            </span>
          </h1>
          <div className={"grid-12 mt-[clamp(3rem,7vw,6rem)] gap-y-14"}>
            <aside
              className={"col-span-12 space-y-8 lg:col-span-4"}
              data-reveal={"fade"}
              data-immediate={""}
            >
              <p className={"t-lead"}>
                {
                  "Hiring for a product design role, or have a project in mind? Send a few lines and I'll reply within two working days."
                }
              </p>
              <div>
                <p className={"t-label mb-2"}>{"Email"}</p>
                <a
                  href={"mailto:invensibleaziz@gmail.com"}
                  className={"link-line t-body"}
                >
                  {"invensibleaziz@gmail.com"}
                </a>
              </div>
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
              <div>
                <p className={"t-label mb-3"}>{"Resume"}</p>
                <a
                  href={"/Abdul_Aziz_CV.pdf"}
                  download={"Abdul_Aziz_CV.pdf"}
                  data-no-transition={""}
                  className={"btn btn-ghost"}
                >
                  {"Download resume (PDF)"}
                </a>
              </div>
              <ul className={"t-meta flex gap-6"}>
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
              </ul>
            </aside>
            <div className={"col-span-12 lg:col-span-7 lg:col-start-6"}>
              <form
                noValidate={true}
                className={
                  "grid gap-x-[var(--column-gap)] gap-y-4 md:grid-cols-2"
                }
                aria-describedby={"form-status"}
              >
                <div>
                  <label
                    htmlFor={"name"}
                    className={"t-meta flex justify-between"}
                  >
                    <span>{"Full name"}</span>
                  </label>
                  <input
                    id={"name"}
                    autoComplete={"name"}
                    required={true}
                    className={
                      "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none border-ink/30"
                    }
                    aria-describedby={"name-error"}
                    name={"name"}
                  />
                  <p
                    id={"name-error"}
                    className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                  ></p>
                </div>
                <div>
                  <label
                    htmlFor={"email"}
                    className={"t-meta flex justify-between"}
                  >
                    <span>{"Email"}</span>
                  </label>
                  <input
                    id={"email"}
                    type={"email"}
                    autoComplete={"email"}
                    required={true}
                    className={
                      "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none border-ink/30"
                    }
                    aria-describedby={"email-error"}
                    name={"email"}
                  />
                  <p
                    id={"email-error"}
                    className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                  ></p>
                </div>
                <div>
                  <label
                    htmlFor={"company"}
                    className={"t-meta flex justify-between"}
                  >
                    <span>{"Company or organisation"}</span>
                  </label>
                  <input
                    id={"company"}
                    autoComplete={"organization"}
                    required={true}
                    className={
                      "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none border-ink/30"
                    }
                    aria-describedby={"company-error"}
                    name={"company"}
                  />
                  <p
                    id={"company-error"}
                    className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                  ></p>
                </div>
                <div>
                  <label
                    htmlFor={"projectType"}
                    className={"t-meta flex justify-between"}
                  >
                    <span>{"Project type"}</span>
                  </label>
                  <select
                    id={"projectType"}
                    name={"projectType"}
                    required={true}
                    className={
                      "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none border-ink/30"
                    }
                    aria-describedby={"projectType-error"}
                    defaultValue={""}
                  >
                    <option value={""} disabled={true}>
                      {"Choose one"}
                    </option>
                    <option>{"Full-time role"}</option>
                    <option>{"Freelance project"}</option>
                    <option>{"Design system work"}</option>
                    <option>{"UX audit or research"}</option>
                    <option>{"Something else"}</option>
                  </select>
                  <p
                    id={"projectType-error"}
                    className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                  ></p>
                </div>
                <div>
                  <label
                    htmlFor={"budget"}
                    className={"t-meta flex justify-between"}
                  >
                    <span>{"Estimated budget"}</span>
                    <span className={"text-graphite"}>{"Optional"}</span>
                  </label>
                  <select
                    id={"budget"}
                    name={"budget"}
                    className={
                      "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none border-ink/30"
                    }
                    aria-describedby={"budget-error"}
                    defaultValue={""}
                  >
                    <option value={""}>{"Prefer not to say"}</option>
                    <option>{"Under $10k"}</option>
                    <option>{"$10k – $30k"}</option>
                    <option>{"$30k – $75k"}</option>
                    <option>{"Over $75k"}</option>
                    <option>{"Not sure yet"}</option>
                    <option>{"Not applicable"}</option>
                  </select>
                  <p
                    id={"budget-error"}
                    className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                  ></p>
                </div>
                <div>
                  <label
                    htmlFor={"timeline"}
                    className={"t-meta flex justify-between"}
                  >
                    <span>{"Preferred timeline"}</span>
                    <span className={"text-graphite"}>{"Optional"}</span>
                  </label>
                  <select
                    id={"timeline"}
                    name={"timeline"}
                    className={
                      "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none border-ink/30"
                    }
                    aria-describedby={"timeline-error"}
                    defaultValue={""}
                  >
                    <option value={""}>{"No preference"}</option>
                    <option>{"As soon as possible"}</option>
                    <option>{"Within 3 months"}</option>
                    <option>{"3 – 6 months"}</option>
                    <option>{"Flexible"}</option>
                  </select>
                  <p
                    id={"timeline-error"}
                    className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                  ></p>
                </div>
                <div className={"md:col-span-2"}>
                  <div>
                    <label
                      htmlFor={"message"}
                      className={"t-meta flex justify-between"}
                    >
                      <span>{"About the project"}</span>
                    </label>
                    <textarea
                      id={"message"}
                      name={"message"}
                      rows={"6"}
                      required={true}
                      placeholder={
                        "What are you making, who is it for, and what would a great result look like?"
                      }
                      className={
                        "t-body w-full border-0 border-b bg-transparent px-0 py-3 outline-none transition-colors placeholder:text-graphite/70 focus:border-cobalt focus-visible:outline-none resize-y border-ink/30"
                      }
                      aria-describedby={"message-error"}
                    ></textarea>
                    <p
                      id={"message-error"}
                      className={"t-meta mt-2 min-h-[1.35em] text-[#ff8a7a]"}
                    ></p>
                  </div>
                </div>
                <div
                  aria-hidden={"true"}
                  className={
                    "absolute -left-[9999px] h-px w-px overflow-hidden"
                  }
                >
                  <label htmlFor={"website"}>{"Website"}</label>
                  <input
                    id={"website"}
                    tabIndex={"-1"}
                    autoComplete={"off"}
                    name={"website"}
                  />
                </div>
                <div
                  className={"flex flex-wrap items-center gap-6 md:col-span-2"}
                >
                  <button
                    type={"submit"}
                    className={"btn btn-solid min-w-[11rem] justify-center"}
                    aria-busy={"false"}
                  >
                    {"Send message"}
                  </button>
                  <div
                    id={"form-status"}
                    tabIndex={"-1"}
                    aria-live={"polite"}
                    className={"t-meta max-w-[48ch] outline-none"}
                  ></div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
