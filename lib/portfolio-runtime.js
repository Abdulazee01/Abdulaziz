import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "lenis";
import TesselLib from "./tessel";
import DATA from "./data.json";

let transitioning = false;
let transitions = null;

// DOM-only animation work is scoped to this route and disposed on navigation.
// The original SVG artwork and React-rendered content are never replaced.
export function startPortfolio(path, navigate) {
  const main = document.getElementById("main");
  if (!main) return () => {};
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cleanups = [];
  const controller = new AbortController();
  const signal = controller.signal;
  let footerClockTimer = null;
  gsap.registerPlugin(ScrollTrigger, Flip);
  let lenis = null;
  if (!reduce && !matchMedia("(pointer: coarse)").matches) {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    cleanups.push(() => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    });
  }
  const scrollTo = (target, immediate = false) => {
    if (lenis)
      lenis.scrollTo(target, { immediate, force: true, duration: 1.4 });
    else if (typeof target === "number")
      window.scrollTo({
        top: target,
        behavior: immediate || reduce ? "auto" : "smooth",
      });
    else
      target.scrollIntoView({
        behavior: immediate || reduce ? "auto" : "smooth",
      });
  };
  const T = (transitions ??= TesselLib.createTransitions(gsap, main));
  const menu = document.getElementById("mobile-menu");
  let menuPrev = null;
  const closeMenu = () => {
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    document.documentElement.style.overflow = "";
    lenis?.start();
    document
      .querySelector('[aria-controls="mobile-menu"]')
      ?.setAttribute("aria-expanded", "false");
    menuPrev?.focus?.();
  };
  const openMenu = () => {
    menuPrev = document.activeElement;
    menu.hidden = false;
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();
    document
      .querySelector('[aria-controls="mobile-menu"]')
      ?.setAttribute("aria-expanded", "true");
    menu.querySelector("a, button")?.focus();
  };
  document
    .querySelector('[aria-controls="mobile-menu"]')
    ?.addEventListener("click", openMenu, { signal });
  menu
    ?.querySelector("button")
    ?.addEventListener("click", closeMenu, { signal });
  document.querySelectorAll("#mobile-menu nav a").forEach((a) => {
    const href = a.getAttribute("href");
    const active =
      href === path || (href !== "/" && path.startsWith(href + "/"));
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
    if (href !== "/")
      [
        "underline",
        "decoration-cobalt",
        "decoration-[6px]",
        "underline-offset-[10px]",
      ].forEach((c) => a.classList.toggle(c, active));
  });
  document.addEventListener(
    "keydown",
    (e) => {
      if (!menu || menu.hidden) return;
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab") {
        const items = [...menu.querySelectorAll("a, button")],
          first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    { signal },
  );
  document.addEventListener(
    "click",
    (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const a = e.target.closest?.("a");
      if (!a || a.hasAttribute("download") || a.target === "_blank") return;
      const href = a.getAttribute("href") || "";
      if (
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !/\.[a-z0-9]+$/i.test(href)
      ) {
        e.preventDefault();
        closeMenu();
        if (href === path) {
          scrollTo(0);
          return;
        }
        if (transitioning) return;
        transitioning = true;
        T.leave(T.sourceFor(a))
          .then(() => navigate(href))
          .catch(() => {
            transitioning = false;
            navigate(href);
          });
      } else if (href.startsWith("#") && href.length > 1) {
        const element = document.getElementById(href.slice(1));
        if (element) {
          e.preventDefault();
          scrollTo(element);
          if (href === "#main") element.focus();
        }
      }
    },
    { capture: true, signal },
  );
  document.querySelector("footer")?.addEventListener(
    "click",
    (e) => {
      if (
        e.target.closest("button") &&
        /Back to top/.test(e.target.textContent)
      )
        scrollTo(0);
    },
    { signal },
  );
  function initClocks(root, isFooter) {
    const els = [...root.querySelectorAll("time")];
    const tick = () =>
      els.forEach((el) => {
        const ctx = el.parentElement.textContent;
        const loc = DATA.locations.find((l) => ctx.includes(l.city));
        if (loc)
          el.textContent = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: loc.timeZone,
          }).format(new Date());
      });
    tick();
    const id = setInterval(tick, 15000);
    if (isFooter) {
      clearInterval(footerClockTimer);
      footerClockTimer = id;
    } else cleanups.push(() => clearInterval(id));
  }

  function initReveals(root) {
    if (reduce) return;
    const lag = "transitioning" in document.documentElement.dataset ? 0.45 : 0;
    const trig = (el) =>
      el.hasAttribute("data-immediate")
        ? {}
        : {
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          };
    root.querySelectorAll('[data-reveal="lines"]').forEach((el) =>
      gsap.to(el.querySelectorAll(".word-mask > span"), {
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.035,
        delay: el.hasAttribute("data-immediate") ? 0.25 + lag : 0,
        ...trig(el),
      }),
    );
    root.querySelectorAll('[data-reveal="fade"]').forEach((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          delay: el.hasAttribute("data-immediate") ? 0.5 + lag : 0,
          ...trig(el),
        },
      ),
    );
    root.querySelectorAll('[data-reveal="clip"]').forEach((el) => {
      const tl = gsap.timeline(trig(el));
      tl.to(el, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.3,
        ease: "expo.out",
      });
      const inner = el.querySelector(".media-inner");
      if (inner)
        tl.fromTo(
          inner,
          { scale: 1.18 },
          {
            scale: 1,
            duration: 1.8,
            ease: "expo.out",
            clearProps: "transform",
          },
          0,
        );
    });
    root.querySelectorAll("[data-parallax]").forEach((el) => {
      const a = parseFloat(el.dataset.parallax || "0.1") * 100;
      gsap.fromTo(
        el,
        { yPercent: -a / 2 },
        {
          yPercent: a / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
  }

  const SPANS = [
    { cls: "md:col-span-7", aspect: "4 / 3" },
    { cls: "md:col-span-5 md:mt-[14vh]", aspect: "4 / 5" },
    { cls: "md:col-span-5", aspect: "4 / 5" },
    { cls: "md:col-span-7 md:mt-[8vh]", aspect: "4 / 3" },
  ];
  function initWorks(root) {
    const list =
      root.querySelector("ul.grid-12[class*='pt-']") ||
      [...root.querySelectorAll("ul")].find((u) =>
        u.querySelector("[data-flip]"),
      );
    if (!list) return;
    const groups = root.querySelectorAll('[role="group"]');
    const live = root.querySelector('[aria-live="polite"]');
    const P = DATA.projects;
    let category = "All",
      industry = "All";
    const q = new URLSearchParams(location.search);

    const empty = document.createElement("div");
    empty.className = "py-[clamp(4rem,10vw,8rem)]";
    empty.hidden = true;
    empty.innerHTML =
      '<p class="t-h3 max-w-[22ch]">No projects match both filters. Clear one to see more.</p><button type="button" class="btn btn-ghost mt-8">Clear filters</button>';
    list.before(empty);
    cleanups.push(() => empty.remove());
    empty.querySelector("button").onclick = () => set("All", "All");

    const filterBox = groups[0].parentElement;
    const clear = document.createElement("button");
    clear.type = "button";
    clear.className = "link-line t-meta";
    clear.textContent = "Clear filters";
    clear.hidden = true;
    clear.onclick = () => set("All", "All");
    filterBox.appendChild(clear);
    cleanups.push(() => clear.remove());

    const chipSet = (btn, active, count) => {
      btn.setAttribute("aria-pressed", String(active));
      btn.disabled = count === 0 && !active;
      ["border-ink", "bg-ink", "text-paper"].forEach((c) =>
        btn.classList.toggle(c, active),
      );
      ["border-line", "hover:border-ink"].forEach((c) =>
        btn.classList.toggle(c, !active),
      );
      const n = btn.querySelector("span");
      n.textContent = count;
      n.classList.toggle("text-paper/60", active);
      n.classList.toggle("text-graphite", !active);
    };
    const label = (btn) => btn.firstChild.textContent.trim();

    function paint() {
      const byInd =
        industry === "All" ? P : P.filter((p) => p.industry === industry);
      const byCat =
        category === "All"
          ? P
          : P.filter((p) => p.categories.includes(category));
      groups[0].querySelectorAll("button").forEach((b) => {
        const l = label(b);
        chipSet(
          b,
          l === category,
          l === "All"
            ? byInd.length
            : byInd.filter((p) => p.categories.includes(l)).length,
        );
      });
      if (groups[1])
        groups[1].querySelectorAll("button").forEach((b) => {
          const l = label(b);
          chipSet(
            b,
            l === industry,
            l === "All"
              ? byCat.length
              : byCat.filter((p) => p.industry === l).length,
          );
        });
      const visible = P.filter(
        (p) =>
          (category === "All" || p.categories.includes(category)) &&
          (industry === "All" || p.industry === industry),
      );
      const vi = new Map(visible.map((p, i) => [p.slug, i]));
      list.querySelectorAll("[data-flip]").forEach((li) => {
        const i = vi.get(li.dataset.flipId);
        li.hidden = i === undefined;
        const s = SPANS[(i || 0) % 4];
        li.className = "col-span-12 " + s.cls;
        const box = li.querySelector('[style*="aspect-ratio"]');
        if (box) box.style.aspectRatio = s.aspect;
      });
      empty.hidden = visible.length > 0;
      clear.hidden = category === "All" && industry === "All";
      live.textContent = `Showing ${visible.length} of ${P.length} projects`;
    }
    function set(c, i) {
      const state = reduce
        ? null
        : Flip.getState(list.querySelectorAll("[data-flip]"));
      category = c;
      industry = i;
      paint();
      if (state)
        Flip.from(state, {
          duration: 0.8,
          ease: "expo.out",
          absolute: true,
          nested: true,
          onEnter: (els) =>
            gsap.fromTo(
              els,
              { opacity: 0, y: 40 },
              { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
            ),
          onComplete: () => ScrollTrigger.refresh(),
        });
    }
    groups[0].addEventListener(
      "click",
      (e) => {
        const b = e.target.closest("button");
        if (b) set(label(b), industry);
      },
      { signal },
    );
    if (groups[1])
      groups[1].addEventListener(
        "click",
        (e) => {
          const b = e.target.closest("button");
          if (b) set(category, label(b));
        },
        { signal },
      );
    const qc = q.get("category"),
      qi = q.get("industry");
    if (
      (qc && DATA.categories.includes(qc)) ||
      (qi && DATA.industries.includes(qi))
    ) {
      category = qc || "All";
      industry = qi || "All";
    }
    paint();
  }

  function initContact(root) {
    const form = root.querySelector("form");
    if (!form) return;
    const rules = {
      name: (v) => (v.trim().length < 2 ? "Enter your full name." : ""),
      email: (v) =>
        !v.trim()
          ? "Enter your email address."
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
            ? ""
            : "Enter an email address like name@company.com.",
      company: (v) => (!v.trim() ? "Enter your company or organisation." : ""),
      projectType: (v) => (!v ? "Choose a project type." : ""),
      message: (v) =>
        !v.trim()
          ? "Tell us about the project."
          : v.trim().length < 20
            ? "Tell us a little more: at least 20 characters."
            : "",
    };
    const setErr = (name, msg) => {
      const el = form.elements[name],
        p = form.querySelector("#" + name + "-error");
      p.textContent = msg;
      msg ? p.setAttribute("role", "alert") : p.removeAttribute("role");
      el.toggleAttribute("aria-invalid", !!msg);
      el.classList.toggle("border-[#b3261e]", !!msg);
      el.classList.toggle("border-ink/30", !msg);
    };
    Object.keys(rules).forEach((n) =>
      form.elements[n].addEventListener("input", () => setErr(n, ""), {
        signal,
      }),
    );
    form.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        let first = null;
        for (const [n, r] of Object.entries(rules)) {
          const m = r(form.elements[n].value);
          setErr(n, m);
          if (m && !first) first = n;
        }
        const status = form.querySelector("#form-status");
        if (first) {
          form.elements[first].focus();
          status.textContent = "";
          return;
        }
        const btn = form.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.innerHTML =
          '<span class="h-3 w-3 animate-spin rounded-full border-2 border-paper/40 border-t-paper" aria-hidden="true"></span>Sending';
        const timeout = setTimeout(() => {
          btn.disabled = false;
          btn.textContent = "Send message";
          status.innerHTML =
            "<span>This is a preview, so nothing was sent. In the deployed site this posts to /api/contact and emails " +
            DATA.email +
            ".</span>";
          status.focus();
        }, 700);
        cleanups.push(() => clearTimeout(timeout));
      },
      { signal },
    );
  }

  function initPage(path) {
    main.querySelectorAll("canvas[data-tilefield]").forEach((c) => {
      const dark = c.closest(".on-dark");
      cleanups.push(
        TesselLib.createTileField(c, {
          base: [236, 228, 220],
          accent: [255, 160, 90],
          glow: dark ? null : [240, 122, 42],
          tile: 44,
          radius: 5,
        }),
      );
    });
    main.querySelectorAll("[data-cine]").forEach((root) => {
      cleanups.push(
        TesselLib.initCinematicHero(root, gsap, ScrollTrigger, {
          art: { width: 1672, height: 831 },
          focus: { desktop: { x: 0.5, y: 0.5 }, mobile: { x: 0.66, y: 0.42 } },
        }),
      );
    });
    main.querySelectorAll('[aria-roledescription="carousel"]').forEach((g) => {
      cleanups.push(
        TesselLib.initGallery(g, {
          href: (slug) => "/works/" + slug,
          scrollTo: (y) => scrollTo(y),
        }),
      );
    });
    initClocks(main, false);
    initReveals(main);
    if (path === "/works") initWorks(main);
    if (path === "/contact-us") initContact(main);
  }

  scrollTo(0, true);
  document.documentElement.classList.add("js");
  const context = gsap.context(() => initPage(path), main);
  let frame = requestAnimationFrame(() => {
    if (transitioning) {
      T.enter();
      transitioning = false;
    }
    ScrollTrigger.refresh();
  });
  document.fonts?.ready.then(() => {
    if (!signal.aborted) ScrollTrigger.refresh();
  });
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad, { signal });
  return () => {
    closeMenu();
    controller.abort();
    cancelAnimationFrame(frame);
    cleanups.reverse().forEach((fn) => fn());
    clearInterval(footerClockTimer);
    context.revert();
  };
}
