import Link from "next/link";
export default function MobileMenu() {
  return (
    <div
      id={"mobile-menu"}
      role={"dialog"}
      aria-modal={"true"}
      aria-label={"Menu"}
      hidden={true}
      className={"on-dark fixed inset-0 z-[70] bg-night text-ink md:hidden"}
    >
      <div
        className={"shell flex items-center justify-between"}
        style={{ height: "var(--header-h)" }}
      >
        <Link className={"text-[1.6rem]"} href={"/"}>
          <span className={"wordmark "}>{"Abdul Aziz"}</span>
        </Link>
        <button type={"button"} className={"t-meta"}>
          {"Close"}
        </button>
      </div>
      <nav aria-label={"Mobile"} className={"shell mt-[12vh]"}>
        <ul className={"space-y-2"}>
          <li>
            <Link className={"t-h1"} aria-current={"page"} href={"/"}>
              {"Home"}
            </Link>
          </li>
          <li>
            <Link className={"t-h1"} href={"/works"}>
              {"Work"}
            </Link>
          </li>
          <li>
            <Link className={"t-h1"} href={"/about-us"}>
              {"About"}
            </Link>
          </li>
          <li>
            <Link className={"t-h1"} href={"/resume"}>
              {"Experience"}
            </Link>
          </li>
          <li>
            <Link className={"t-h1"} href={"/contact-us"}>
              {"Contact"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
