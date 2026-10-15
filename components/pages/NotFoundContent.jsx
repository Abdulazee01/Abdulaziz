import Link from "next/link";

export default function NotFoundContent() {
  return (
    <>
      <div id={"page"}>
        <section
          className={
            "shell grid-12 min-h-[90svh] content-end gap-y-10 pb-[var(--section-y)] pt-[calc(var(--header-h)+4rem)]"
          }
        >
          <h1
            className={"t-h1 col-span-12 lg:col-span-9"}
            data-reveal={"lines"}
            data-immediate={""}
            aria-label={"This page isn't here."}
          >
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"This"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"page"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"isn't"}</span>
              </span>{" "}
            </span>
            <span aria-hidden={"true"}>
              <span className={"word-mask"}>
                <span>{"here."}</span>
              </span>
            </span>
          </h1>
          <div
            className={"col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-9"}
            data-reveal={"fade"}
            data-immediate={""}
          >
            <p className={"t-body text-graphite"}>
              {
                "The link may be out of date, or the project may have moved. Try one of these instead."
              }
            </p>
            <div className={"mt-6 flex flex-wrap gap-3"}>
              <Link className={"btn btn-solid"} href={"/"}>
                {"Go to home"}
              </Link>
              <Link className={"btn btn-ghost"} href={"/works"}>
                {"See all work"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
