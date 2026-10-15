// Original animation engine from the supplied portfolio. Preserved to maintain motion fidelity.
var TesselLib = (() => {
  var oe = Object.defineProperty;
  var le = Object.getOwnPropertyDescriptor;
  var ue = Object.getOwnPropertyNames;
  var me = Object.prototype.hasOwnProperty;
  var pe = (o, t) => {
      for (var a in t) oe(o, a, { get: t[a], enumerable: !0 });
    },
    fe = (o, t, a, m) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let l of ue(t))
          !me.call(o, l) &&
            l !== a &&
            oe(o, l, {
              get: () => t[l],
              enumerable: !(m = le(t, l)) || m.enumerable,
            });
      return o;
    };
  var ye = (o) => fe(oe({}, "__esModule", { value: !0 }), o);
  var he = {};
  pe(he, {
    createTileField: () => ie,
    createTransitions: () => se,
    initCinematicHero: () => ce,
    initGallery: () => ae,
  });
  function ie(o, t) {
    var j, Z;
    let a = o.getContext("2d");
    if (!a) return () => {};
    let m = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      l = (j = t.tile) != null ? j : 44,
      P = (Z = t.radius) != null ? Z : 5,
      b = 0,
      v = 0,
      g = 1,
      s = l,
      p = 0,
      u = 0,
      r = 0,
      f = !0,
      c = new Float32Array(0),
      O = performance.now(),
      x = { x: -9999, y: -9999, active: !1, last: 0 },
      d = { x: 0, y: 0, init: !1 },
      M = (h) => {
        (a.setTransform(g, 0, 0, g, 0, 0), a.clearRect(0, 0, b, v));
        let C = (h - O) / 1e3,
          Y = x.x,
          W = x.y;
        if (
          ((!x.active || h - x.last > 2500) &&
            ((Y = b * (0.62 + 0.25 * Math.sin(C * 0.21))),
            (W = v * (0.42 + 0.22 * Math.sin(C * 0.33 + 1.2)))),
          (!d.init || m) && ((d.x = Y), (d.y = W), (d.init = !0)),
          (d.x += (Y - d.x) * 0.08),
          (d.y += (W - d.y) * 0.08),
          t.glow)
        ) {
          let q = Math.max(b, v) * 0.55,
            E = a.createRadialGradient(d.x, d.y, 0, d.x, d.y, q),
            [S, B, z] = t.glow;
          (E.addColorStop(0, `rgba(${S},${B},${z},0.22)`),
            E.addColorStop(0.45, `rgba(${S},${B},${z},0.07)`),
            E.addColorStop(1, `rgba(${S},${B},${z},0)`),
            (a.fillStyle = E),
            a.fillRect(0, 0, b, v));
        }
        let J = s * P;
        for (let q = 0; q < u; q++)
          for (let E = 0; E < p; E++) {
            let S = q * p + E,
              B = E * s + s / 2,
              z = q * s + s / 2,
              Q = Math.max(0, 1 - Math.hypot(B - Y, z - W) / J);
            c[S] += (Q - c[S]) * (m ? 1 : Q > c[S] ? 0.18 : 0.035);
            let F = c[S],
              D = m ? 0 : 0.5 + 0.5 * Math.sin(C * 0.8 - (E + q) * 0.35),
              n = s * (0.1 + 0.05 * D + 0.64 * F * F),
              y = (Math.PI / 4) * Math.min(1, F * 1.4),
              e = Math.min(1, F * 1.6),
              i = t.base.map((R, w) => Math.round(R + (t.accent[w] - R) * e)),
              L = 0.07 + 0.04 * D + 0.89 * Math.min(1, F * 1.3);
            (a.save(),
              a.translate(B, z),
              a.rotate(y),
              (a.fillStyle = `rgba(${i[0]},${i[1]},${i[2]},${L})`),
              a.fillRect(-n / 2, -n / 2, n, n),
              a.restore());
          }
      },
      G = () => {
        let h = o.getBoundingClientRect();
        ((g = Math.min(window.devicePixelRatio || 1, 2)),
          (b = h.width),
          (v = h.height),
          (o.width = Math.round(b * g)),
          (o.height = Math.round(v * g)),
          (s = Math.max(26, l * (b / 1440))),
          (p = Math.ceil(b / s) + 1),
          (u = Math.ceil(v / s) + 1),
          (c = new Float32Array(p * u)),
          m && M(performance.now()));
      },
      I = (h) => {
        (f && !document.hidden && M(h), (r = requestAnimationFrame(I)));
      },
      A = (h) => {
        if (h.pointerType !== "mouse") return;
        let C = o.getBoundingClientRect();
        ((x.x = h.clientX - C.left),
          (x.y = h.clientY - C.top),
          (x.active = !0),
          (x.last = performance.now()));
      };
    G();
    let V = new ResizeObserver(G);
    V.observe(o);
    let H = new IntersectionObserver(([h]) => (f = h.isIntersecting));
    return (
      H.observe(o),
      m ||
        (window.addEventListener("pointermove", A, { passive: !0 }),
        (r = requestAnimationFrame(I))),
      () => {
        (cancelAnimationFrame(r),
          V.disconnect(),
          H.disconnect(),
          window.removeEventListener("pointermove", A));
      }
    );
  }
  var _ = (o, t, a) => Math.min(a, Math.max(t, o));
  function ae(o, t) {
    let a = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      m = Array.from(o.querySelectorAll("[data-panel]")),
      l = m.length;
    if (!l) return () => {};
    let P = (n) => o.querySelector(n),
      b = P("[data-stage]"),
      v = P("[data-g-title]"),
      g = P("[data-g-meta]"),
      s = P("[data-g-count]"),
      p = P("[data-g-open]"),
      u = P("[data-g-prev]"),
      r = P("[data-g-next]"),
      f = P("[data-g-live]"),
      c = 0,
      O = 1,
      x = 0,
      d = 0,
      M = -1,
      G = 0,
      I = !1,
      A = () => {
        ((c = o.getBoundingClientRect().top + window.scrollY),
          (O = window.innerHeight),
          V());
      },
      V = () => {
        x = _((window.scrollY - c) / O, 0, l - 1);
      },
      H = (n) => t.scrollTo(c + _(n, 0, l - 1) * O + 1),
      j = (n) => String(n).padStart(2, "0"),
      Z = (n) => {
        var L, R, w, k, N, X, $;
        if (n === M) return;
        M = n;
        let y = m[n].dataset;
        ((v.textContent = (L = y.title) != null ? L : ""),
          (g.textContent = (R = y.meta) != null ? R : ""),
          (s.textContent = `${j(n + 1)} / ${j(l)}`),
          (p.href = t.href((w = y.slug) != null ? w : "")),
          p.setAttribute("aria-label", `Open case study: ${y.title}`));
        let e = (k = m[n - 1]) == null ? void 0 : k.dataset,
          i = (N = m[n + 1]) == null ? void 0 : N.dataset;
        if (
          ((u.hidden = !e),
          (r.hidden = !i),
          e &&
            (u.querySelector("[data-name]").textContent =
              (X = e.title) != null ? X : ""),
          i &&
            (r.querySelector("[data-name]").textContent =
              ($ = i.title) != null ? $ : ""),
          (f.textContent = `Project ${n + 1} of ${l}: ${y.title}`),
          m.forEach((T, U) => T.toggleAttribute("data-active", U === n)),
          !a && v.animate)
        ) {
          let T = [
            { opacity: 0, transform: "translateY(0.25em)" },
            { opacity: 1, transform: "none" },
          ];
          (v.animate(T, {
            duration: 700,
            easing: "cubic-bezier(0.16,1,0.3,1)",
          }),
            g.animate(T, {
              duration: 700,
              delay: 80,
              easing: "cubic-bezier(0.16,1,0.3,1)",
              fill: "backwards",
            }));
        }
      },
      h = () => {
        let n = window.innerWidth < 768;
        for (let y = 0; y < l; y++) {
          let e = y - d,
            i = Math.abs(e),
            L = e * (n ? 92 : 70),
            R = _(-e * (n ? 12 : 26), -60, 60),
            w = -Math.min(i, 3) * (n ? 120 : 260),
            k = m[y];
          ((k.style.transform = `translate(-50%, -50%) translateX(${L}vw) translateZ(${w}px) rotateY(${R}deg)`),
            (k.style.opacity = String(_(1.7 - i * 0.6, 0, 1))),
            k.style.setProperty("--dim", String(_(i * 0.7, 0, 0.75))),
            (k.style.zIndex = String(100 - Math.round(i * 10))),
            (k.style.visibility = i > 2.6 ? "hidden" : "visible"));
        }
        Z(Math.round(d));
      },
      C = () => {
        let n = x - d;
        ((d = a || Math.abs(n) < 5e-4 ? x : d + n * 0.12),
          h(),
          (G = I ? requestAnimationFrame(C) : 0));
      },
      Y = () => {
        !G && I && (G = requestAnimationFrame(C));
      },
      W = new IntersectionObserver(([n]) => {
        ((I = n.isIntersecting), Y());
      });
    W.observe(o);
    let J = (n) => {
        !I ||
          n.defaultPrevented ||
          n.target.closest("input, textarea, select, [contenteditable]") ||
          (n.key === "ArrowRight" && (n.preventDefault(), H(M + 1)),
          n.key === "ArrowLeft" && (n.preventDefault(), H(M - 1)));
      },
      q = 0,
      E = 0,
      S = !1,
      B = (n) => {
        n.pointerType !== "mouse" &&
          ((q = n.clientX), (E = n.clientY), (S = !0));
      },
      z = (n) => {
        if (!S) return;
        S = !1;
        let y = n.clientX - q,
          e = n.clientY - E;
        Math.abs(y) > 50 &&
          Math.abs(y) > Math.abs(e) * 1.5 &&
          H(M + (y < 0 ? 1 : -1));
      },
      Q = (n) => {
        let y = n.target.closest("[data-panel]");
        if (!y) return;
        let e = m.indexOf(y);
        e === M ? p.click() : H(e);
      };
    (u.addEventListener("click", () => H(M - 1)),
      r.addEventListener("click", () => H(M + 1)),
      b.addEventListener("click", Q),
      b.addEventListener("pointerdown", B),
      b.addEventListener("pointerup", z));
    let F = () => {
      (V(), Y());
    };
    (window.addEventListener("scroll", F, { passive: !0 }),
      window.addEventListener("resize", A),
      document.addEventListener("keydown", J));
    let D = new ResizeObserver(A);
    return (
      D.observe(document.body),
      A(),
      (d = x),
      h(),
      () => {
        (cancelAnimationFrame(G),
          W.disconnect(),
          D.disconnect(),
          window.removeEventListener("resize", A),
          window.removeEventListener("scroll", F),
          document.removeEventListener("keydown", J));
      }
    );
  }
  function se(o, t) {
    let a = null,
      m = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      l = (s) => {
        s
          ? (document.documentElement.dataset.transitioning = "")
          : delete document.documentElement.dataset.transitioning;
      };
    function P(s) {
      return (
        l(!0),
        m()
          ? Promise.resolve()
          : new Promise((p) => {
              let u = !1,
                r = () => {
                  u || ((u = !0), p());
                };
              (window.setTimeout(r, 1600), b(s, r));
            })
      );
    }
    function b(s, p) {
      o.killTweensOf(t);
      let u = window.innerWidth,
        r = window.innerHeight;
      if (s instanceof HTMLElement) {
        let f = s.getBoundingClientRect();
        if (f.width > 40 && f.bottom > 0 && f.top < r) {
          let c = document.createElement("div");
          ((c.className = "zoom-overlay"),
            c.setAttribute("aria-hidden", "true"),
            Object.assign(c.style, {
              left: `${f.left}px`,
              top: `${f.top}px`,
              width: `${f.width}px`,
              height: `${f.height}px`,
            }),
            (c.innerHTML = s.innerHTML),
            c.querySelectorAll("video").forEach((d) => {
              var M;
              ((d.muted = !0),
                (M = d.play) == null || M.call(d).catch(() => {}));
            }),
            document.body.appendChild(c),
            (s.style.visibility = "hidden"),
            (a = c));
          let O = o.timeline({ onComplete: p, onInterrupt: p });
          (O.to(t, { opacity: 0, duration: 0.45, ease: "power2.out" }, 0),
            O.to(
              c,
              {
                left: 0,
                top: 0,
                width: u,
                height: r,
                borderRadius: 0,
                duration: 0.95,
                ease: "expo.inOut",
              },
              0,
            ));
          let x = c.querySelector(".media-inner");
          x &&
            O.fromTo(
              x,
              { scale: 1 },
              { scale: 1.08, duration: 0.95, ease: "expo.inOut" },
              0,
            );
          return;
        }
      }
      o.to(t, {
        opacity: 0,
        y: -60,
        scale: 0.96,
        transformOrigin: `50% ${window.scrollY + r / 2}px`,
        duration: 0.55,
        ease: "power3.in",
        onComplete: p,
        onInterrupt: p,
      });
    }
    function v() {
      if ((o.killTweensOf(t), m())) {
        (o.set(t, { clearProps: "all" }),
          a == null || a.remove(),
          (a = null),
          l(!1));
        return;
      }
      if (a) {
        let s = a;
        ((a = null), o.set(t, { clearProps: "all" }));
        let p = t.querySelector("[data-hero-media]"),
          u = o.timeline({
            onComplete: () => {
              (s.remove(), l(!1));
            },
          });
        if (p) {
          let r = p.getBoundingClientRect();
          u.to(
            s,
            {
              left: r.left,
              top: r.top,
              width: r.width,
              height: r.height,
              duration: 1,
              ease: "expo.inOut",
            },
            0.05,
          );
          let f = s.querySelector(".media-inner");
          (f && u.to(f, { scale: 1, duration: 1, ease: "expo.inOut" }, 0.05),
            u.to(
              s,
              { opacity: 0, duration: 0.4, ease: "power1.out" },
              ">-0.15",
            ));
        } else u.to(s, { opacity: 0, duration: 0.6 });
        return;
      }
      o.fromTo(
        t,
        { opacity: 0, y: 70, scale: 1.02, transformOrigin: "50% 0%" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "expo.out",
          clearProps: "all",
          onComplete: () => l(!1),
        },
      );
    }
    function g(s) {
      var p, u;
      return s.matches("[data-g-open]")
        ? (u =
            (p = s.closest('[aria-roledescription="carousel"]')) == null
              ? void 0
              : p.querySelector("[data-panel][data-active]")) != null
          ? u
          : null
        : s.querySelector("[data-zoom]");
    }
    return { leave: P, enter: v, sourceFor: g };
  }
  function ce(o, t, a, m = {}) {
    var D, n, y;
    let l = (D = m.art) != null ? D : { width: 1672, height: 831 },
      P =
        (n = m.focus) != null
          ? n
          : { desktop: { x: 0.5, y: 0.5 }, mobile: { x: 0.66, y: 0.42 } },
      b = l.width / l.height,
      v = (y = m.subject) != null ? y : [1039, 171, 150, 404],
      g = (e) => o.querySelector(e),
      s = (e) => Array.from(o.querySelectorAll(e)),
      p = g("[data-stage]"),
      u = g("[data-sticky]"),
      r = (e) => g(`[data-layer="${e}"]`),
      f = (e) => r(e).querySelector(":scope > [data-par]"),
      c = (e) => r(e).querySelector("img"),
      O = g("[data-par-char] img"),
      x = g("[data-rise]"),
      d = g(".cine-copy"),
      M = g("[data-shade]"),
      G = g("[data-wipe]"),
      I = s("[data-line] > span"),
      A = s("[data-copy]"),
      V = g("[data-headline]"),
      H = g("[data-cue]"),
      j = document.querySelector("body > header, header.fixed"),
      Z = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      h = [],
      C = () => {
        let e = u.clientWidth,
          i = u.clientHeight,
          L = e / i < 1.2,
          R = Math.max(64, Math.min(88, e * 0.06)),
          [w, k, N, X] = v,
          $,
          T,
          U,
          ee;
        if (L) {
          ((T = Math.max(i * 1.2, (e * 1.06) / b)), ($ = T * b));
          let K = (w + N / 2) / l.width;
          ((U = Math.min(0, Math.max(e - $, e / 2 - $ * K))),
            (ee = Math.min(0, Math.max(i - T, R + 18 - (k / l.height) * T))));
        } else {
          let K = P.desktop,
            ne = 1.06;
          (($ = Math.max(e, i * b) * ne),
            (T = $ / b),
            T < i * ne && ((T = i * ne), ($ = T * b)),
            (U = Math.min(0, Math.max(e - $, e / 2 - $ * K.x))),
            (ee = Math.min(0, Math.max(i - T, i / 2 - T * K.y))));
        }
        Object.assign(p.style, {
          width: `${$}px`,
          height: `${T}px`,
          left: `${U}px`,
          top: `${ee}px`,
        });
        let te = $ / l.width,
          de = U + w * te - (L ? 0 : N * te * 0.15),
          re = ee + (k + X) * te;
        if ((o.toggleAttribute("data-portrait", L), L)) {
          (o.style.setProperty("--copy-max", "100%"),
            o.style.setProperty("--copy-top", `${Math.round(re + 8)}px`),
            o.removeAttribute("data-compact"));
          let K = i - re - 16;
          d.getBoundingClientRect().height > K &&
            o.setAttribute("data-compact", "");
        } else {
          let K = d.getBoundingClientRect().left || e * 0.06;
          (o.style.setProperty("--copy-max", `${Math.max(280, de - K - 40)}px`),
            o.removeAttribute("data-compact"));
        }
      };
    C();
    let Y = new ResizeObserver(() => {
      (C(), a.refresh());
    });
    (Y.observe(u), h.push(() => Y.disconnect()));
    let W = t.matchMedia(),
      J = () => {
        o.setAttribute("data-loaded", "");
        let e = t.timeline({ defaults: { ease: "power3.out" } });
        (e
          .fromTo(
            M,
            { opacity: 0.85 },
            { opacity: 0, duration: 1.8, ease: "power2.out" },
            0,
          )
          .fromTo(
            c("clouds-back"),
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.8 },
            0.05,
          )
          .fromTo(
            c("clouds-front"),
            { x: 70, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.8 },
            0.15,
          )
          .fromTo(
            c("distant"),
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5 },
            0.25,
          )
          .fromTo(x, { y: 70 }, { y: 0, duration: 1.6, ease: "expo.out" }, 0.3)
          .fromTo(
            [c("foreground-left"), c("foreground-right")],
            { y: 60 },
            { y: 0, duration: 1.6, ease: "expo.out" },
            0.3,
          )
          .fromTo(O, { opacity: 0 }, { opacity: 1, duration: 1.1 }, 0.7)
          .fromTo(
            I,
            { yPercent: 110 },
            { yPercent: 0, duration: 1.1, stagger: 0.12, ease: "expo.out" },
            0.6,
          )
          .fromTo(
            A,
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.08 },
            1,
          ),
          j &&
            e.fromTo(
              j,
              { y: -12, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                clearProps: "transform,opacity",
              },
              0.9,
            ),
          e.fromTo(
            H,
            { opacity: 0, y: -8 },
            { opacity: 1, y: 0, duration: 0.7 },
            1.55,
          ),
          h.push(() => {
            (e.kill(),
              t.set(x, { clearProps: "transform" }),
              j && t.set(j, { clearProps: "transform,opacity" }));
          }));
      },
      q = () => {
        (o.setAttribute("data-loaded", ""),
          t.set([M], { opacity: 0 }),
          t.set([...I], { yPercent: 0 }),
          t.set(
            [...A, H, O, c("clouds-back"), c("clouds-front"), c("distant")],
            { opacity: 1, x: 0, y: 0 },
          ));
      },
      E = (e) => {
        let i = t.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: o,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.1,
            invalidateOnRefresh: !0,
          },
        });
        return (
          i.set({}, {}, 1),
          i
            .to(
              A,
              {
                y: -e.text * 0.6,
                opacity: 0,
                duration: 0.2,
                ease: "power1.in",
              },
              0.16,
            )
            .to(
              V,
              { y: -e.text, opacity: 0, duration: 0.25, ease: "power1.in" },
              0.2,
            )
            .to(H, { opacity: 0, duration: 0.08 }, 0.18)
            .to(r("sky"), { yPercent: -e.sky, duration: 1 }, 0)
            .to(
              r("clouds-back"),
              {
                xPercent: -e.clouds * 0.5,
                yPercent: -e.sky * 1.4,
                duration: 0.85,
              },
              0.15,
            )
            .to(
              r("clouds-front"),
              { xPercent: e.clouds, yPercent: -e.sky * 2.2, duration: 0.85 },
              0.15,
            )
            .to(
              r("distant"),
              { yPercent: -e.dist, scale: 1.04, duration: 0.8 },
              0.2,
            )
            .to(
              r("summit"),
              { scale: e.push, duration: 0.5, ease: "power1.inOut" },
              0.28,
            )
            .to(
              r("foreground-left"),
              {
                xPercent: -e.fgSpread,
                scale: e.fg,
                duration: 0.45,
                ease: "power1.in",
              },
              0.4,
            )
            .to(
              r("foreground-right"),
              {
                xPercent: e.fgSpread,
                scale: e.fg,
                duration: 0.45,
                ease: "power1.in",
              },
              0.4,
            )
            .to(
              r("summit"),
              { yPercent: -e.group, duration: 0.27, ease: "power2.in" },
              0.73,
            )
            .to(
              [r("summit"), r("foreground-left"), r("foreground-right")],
              { opacity: 0, duration: 0.18, ease: "power1.in" },
              0.82,
            )
            .to(
              r("foreground-left"),
              { scale: e.fg * 1.9, duration: 0.25, ease: "power2.in" },
              0.75,
            )
            .to(
              r("foreground-right"),
              { scale: e.fg * 1.9, duration: 0.25, ease: "power2.in" },
              0.75,
            )
            .fromTo(
              G,
              { yPercent: 100, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.3, ease: "power1.out" },
              0.7,
            ),
          i
        );
      },
      S = () => {
        let e = [
            [f("sky"), 3],
            [f("clouds-back"), 6],
            [f("clouds-front"), 10],
            [f("distant"), 4],
            [f("summit"), 8],
            [f("foreground-left"), 15],
            [f("foreground-right"), 15],
          ],
          i = e.map(([w, k]) => ({
            a: k,
            x: t.quickTo(w, "x", { duration: 1.1, ease: "power3" }),
            y: t.quickTo(w, "y", { duration: 1.1, ease: "power3" }),
          })),
          L = (w) => {
            if (w.pointerType !== "mouse") return;
            let k = (w.clientX / window.innerWidth) * 2 - 1,
              N = (w.clientY / window.innerHeight) * 2 - 1;
            for (let X of i) (X.x(-k * X.a), X.y(-N * X.a * 0.6));
          },
          R = () => {
            for (let w of i) (w.x(0), w.y(0));
          };
        return (
          window.addEventListener("pointermove", L, { passive: !0 }),
          document.documentElement.addEventListener("pointerleave", R),
          () => {
            (window.removeEventListener("pointermove", L),
              document.documentElement.removeEventListener("pointerleave", R),
              t.set(
                e.map(([w]) => w),
                { x: 0, y: 0 },
              ));
          }
        );
      };
    (t.set(r("summit"), { transformOrigin: "66% 18%" }),
      t.set(r("distant"), { transformOrigin: "60% 70%" }),
      t.set(r("foreground-left"), { transformOrigin: "0% 100%" }),
      t.set(r("foreground-right"), { transformOrigin: "100% 100%" }),
      W.add(
        {
          desktop:
            "(min-aspect-ratio: 6/5) and (prefers-reduced-motion: no-preference)",
          mobile:
            "(max-aspect-ratio: 6/5) and (prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
          fine: "(hover: hover) and (pointer: fine)",
        },
        (e) => {
          let i = e.conditions;
          if (i.reduce) {
            t.timeline({
              scrollTrigger: {
                trigger: o,
                start: "top top",
                end: "bottom bottom",
                scrub: !0,
              },
            })
              .set({}, {}, 1)
              .to([V, ...A, H], { opacity: 0, duration: 0.3 }, 0.15)
              .fromTo(
                G,
                { yPercent: 0, opacity: 0 },
                { opacity: 1, duration: 0.3 },
                0.7,
              );
            return;
          }
          if (
            (E(
              i.desktop
                ? {
                    push: 1.25,
                    group: 6,
                    fg: 1.35,
                    fgSpread: 3,
                    sky: 4,
                    clouds: 6,
                    dist: 8,
                    text: 90,
                  }
                : {
                    push: 1.1,
                    group: 10,
                    fg: 1.2,
                    fgSpread: 2,
                    sky: 3,
                    clouds: 4,
                    dist: 5,
                    text: 60,
                  },
            ),
            i.desktop && i.fine)
          )
            return S();
        },
      ),
      h.push(() => W.revert()));
    let B = !1,
      z = () => {
        B || ((B = !0), Z ? q() : J(), a.refresh());
      },
      Q = s("img").map((e) =>
        e.decode ? e.decode().catch(() => {}) : Promise.resolve(),
      ),
      F = window.setTimeout(z, 2500);
    return (
      Promise.all(Q).then(() => {
        (window.clearTimeout(F), z());
      }),
      h.push(() => window.clearTimeout(F)),
      () => h.reverse().forEach((e) => e())
    );
  }
  return ye(he);
})();

export default TesselLib;
