import Link from "next/link";

export default function LegalNoticeContent() {
  return (
    <>
      <div id={"page"}>
        <section
          className={
            "shell grid-12 gap-y-12 pb-[var(--section-y)] pt-[calc(var(--header-h)+clamp(3rem,10vh,7rem))]"
          }
        >
          <div className={"col-span-12 lg:col-span-4"}>
            <h1 className={"t-h2"}>{"Legal notice"}</h1>
            <p className={"t-meta mt-4 text-graphite"}>
              {"Last updated: "}
              {"Replace with date"}
            </p>
          </div>
          <div className={"col-span-12 lg:col-span-7 lg:col-start-6"}>
            <section
              className={"border-t border-line py-8"}
              aria-labelledby={"legal-publisher"}
            >
              <h2
                id={"legal-publisher"}
                className={"t-h3 text-[var(--step-1)]"}
              >
                {"Publisher"}
              </h2>
              <div className={"t-body mt-4 max-w-[62ch] space-y-3"}>
                <p>
                  {
                    "This website is published by Abdul Aziz, independent product designer."
                  }
                </p>
                <p>
                  {
                    "Address: [your business address, if required in your country]. Business registration: [number, if applicable]."
                  }
                </p>
                <p>{"Contact: invensibleaziz@gmail.com."}</p>
              </div>
            </section>
            <section
              className={"border-t border-line py-8"}
              aria-labelledby={"legal-hosting"}
            >
              <h2 id={"legal-hosting"} className={"t-h3 text-[var(--step-1)]"}>
                {"Hosting"}
              </h2>
              <div className={"t-body mt-4 max-w-[62ch] space-y-3"}>
                <p>
                  {"[Hosting provider name], [address], [website or phone]."}
                </p>
              </div>
            </section>
            <section
              className={"border-t border-line py-8"}
              aria-labelledby={"legal-privacy-and-analytics"}
            >
              <h2
                id={"legal-privacy-and-analytics"}
                className={"t-h3 text-[var(--step-1)]"}
              >
                {"Privacy and analytics"}
              </h2>
              <div className={"t-body mt-4 max-w-[62ch] space-y-3"}>
                <p>
                  {
                    "Describe what personal data the contact form collects, why, how long it is kept, and who processes it."
                  }
                </p>
                <p>
                  {
                    "Describe any analytics or cookies used, and how visitors can opt out or exercise their data rights."
                  }
                </p>
              </div>
            </section>
            <section
              className={"border-t border-line py-8"}
              aria-labelledby={"legal-music-and-sound-design"}
            >
              <h2
                id={"legal-music-and-sound-design"}
                className={"t-h3 text-[var(--step-1)]"}
              >
                {"Music and sound design"}
              </h2>
              <div className={"t-body mt-4 max-w-[62ch] space-y-3"}>
                <p>
                  {
                    "Credit any licensed music or sound used on this site, with licence details."
                  }
                </p>
              </div>
            </section>
            <section
              className={"border-t border-line py-8"}
              aria-labelledby={"legal-copyright"}
            >
              <h2
                id={"legal-copyright"}
                className={"t-h3 text-[var(--step-1)]"}
              >
                {"Copyright"}
              </h2>
              <div className={"t-body mt-4 max-w-[62ch] space-y-3"}>
                <p>
                  {
                    "All content on this site, including text, images, video and code, is protected by copyright and belongs to Abdul Aziz or to the clients and employers whose work is shown, and appears with their permission. Reproduction requires written permission."
                  }
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
