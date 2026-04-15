(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  88143,
  (e, t, s) => {
    "use strict";
    function a({
      widthInt: e,
      heightInt: t,
      blurWidth: s,
      blurHeight: a,
      blurDataURL: r,
      objectFit: l,
    }) {
      let n = s ? 40 * s : e,
        i = a ? 40 * a : t,
        o = n && i ? `viewBox='0 0 ${n} ${i}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        o
          ? "none"
          : "contain" === l
          ? "xMidYMid"
          : "cover" === l
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${r}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
  },
  87690,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      VALID_LOADERS: function () {
        return l;
      },
      imageConfigDefault: function () {
        return n;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    let l = ["default", "imgix", "cloudinary", "akamai", "custom"],
      n = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  8927,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "getImgProps", {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      e.r(33525);
    let a = e.r(43369),
      r = e.r(88143),
      l = e.r(87690),
      n = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function i(e) {
      return void 0 !== e.default;
    }
    function o(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function c(
      {
        src: e,
        sizes: t,
        unoptimized: s = !1,
        priority: c = !1,
        preload: d = !1,
        loading: m,
        className: x,
        quality: u,
        width: h,
        height: p,
        fill: f = !1,
        style: b,
        overrideSrc: g,
        onLoad: j,
        onLoadingComplete: w,
        placeholder: v = "empty",
        blurDataURL: y,
        fetchPriority: N,
        decoding: k = "async",
        layout: C,
        objectFit: E,
        objectPosition: S,
        lazyBoundary: M,
        lazyRoot: T,
        ...O
      },
      L
    ) {
      var _;
      let W,
        A,
        R,
        { imgConf: P, showAltText: z, blurComplete: B, defaultLoader: $ } = L,
        I = P || l.imageConfigDefault;
      if ("allSizes" in I) W = I;
      else {
        let e = [...I.deviceSizes, ...I.imageSizes].sort((e, t) => e - t),
          t = I.deviceSizes.sort((e, t) => e - t),
          s = I.qualities?.sort((e, t) => e - t);
        W = { ...I, allSizes: e, deviceSizes: t, qualities: s };
      }
      if (void 0 === $)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let F = O.loader || $;
      delete O.loader, delete O.srcSet;
      let D = "__next_img_default" in F;
      if (D) {
        if ("custom" === W.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = F;
        F = (t) => {
          let { config: s, ...a } = t;
          return e(a);
        };
      }
      if (C) {
        "fill" === C && (f = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[C];
        e && (b = { ...b, ...e });
        let s = { responsive: "100vw", fill: "100vw" }[C];
        s && !t && (t = s);
      }
      let H = "",
        G = o(h),
        J = o(p);
      if ((_ = e) && "object" == typeof _ && (i(_) || void 0 !== _.src)) {
        let t = i(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((A = t.blurWidth),
          (R = t.blurHeight),
          (y = y || t.blurDataURL),
          (H = t.src),
          !f)
        )
          if (G || J) {
            if (G && !J) {
              let e = G / t.width;
              J = Math.round(t.height * e);
            } else if (!G && J) {
              let e = J / t.height;
              G = Math.round(t.width * e);
            }
          } else (G = t.width), (J = t.height);
      }
      let K = !c && !d && ("lazy" === m || void 0 === m);
      (!(e = "string" == typeof e ? e : H) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((s = !0), (K = !1)),
        W.unoptimized && (s = !0),
        D &&
          !W.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (s = !0);
      let U = o(u),
        V = Object.assign(
          f
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: E,
                objectPosition: S,
              }
            : {},
          z ? {} : { color: "transparent" },
          b
        ),
        q =
          B || "empty" === v
            ? null
            : "blur" === v
            ? `url("data:image/svg+xml;charset=utf-8,${(0, r.getImageBlurSvg)({
                widthInt: G,
                heightInt: J,
                blurWidth: A,
                blurHeight: R,
                blurDataURL: y || "",
                objectFit: V.objectFit,
              })}")`
            : `url("${v}")`,
        Y = n.includes(V.objectFit)
          ? "fill" === V.objectFit
            ? "100% 100%"
            : "cover"
          : V.objectFit,
        X = q
          ? {
              backgroundSize: Y,
              backgroundPosition: V.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: q,
            }
          : {},
        Q = (function ({
          config: e,
          src: t,
          unoptimized: s,
          width: r,
          quality: l,
          sizes: n,
          loader: i,
        }) {
          if (s) {
            let e = (0, a.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//") && e) {
              let s = t.includes("?") ? "&" : "?";
              t = `${t}${s}dpl=${e}`;
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: o, kind: c } = (function (
              { deviceSizes: e, allSizes: t },
              s,
              a
            ) {
              if (a) {
                let s = /(^|\s)(1?\d?\d)vw/g,
                  r = [];
                for (let e; (e = s.exec(a)); ) r.push(parseInt(e[2]));
                if (r.length) {
                  let s = 0.01 * Math.min(...r);
                  return { widths: t.filter((t) => t >= e[0] * s), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof s
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [s, 2 * s].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, r, n),
            d = o.length - 1;
          return {
            sizes: n || "w" !== c ? n : "100vw",
            srcSet: o
              .map(
                (s, a) =>
                  `${i({ config: e, src: t, quality: l, width: s })} ${
                    "w" === c ? s : a + 1
                  }${c}`
              )
              .join(", "),
            src: i({ config: e, src: t, quality: l, width: o[d] }),
          };
        })({
          config: W,
          src: e,
          unoptimized: s,
          width: G,
          quality: U,
          sizes: t,
          loader: F,
        }),
        Z = K ? "lazy" : m;
      return {
        props: {
          ...O,
          loading: Z,
          fetchPriority: N,
          width: G,
          height: J,
          decoding: k,
          className: x,
          style: { ...V, ...X },
          sizes: Q.sizes,
          srcSet: Q.srcSet,
          src: g || Q.src,
        },
        meta: { unoptimized: s, preload: d || c, placeholder: v, fill: f },
      };
    }
  },
  98879,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let a = e.r(71645),
      r = "u" < typeof window,
      l = r ? () => {} : a.useLayoutEffect,
      n = r ? () => {} : a.useEffect;
    function i(e) {
      let { headManager: t, reduceComponentsToState: s } = e;
      function i() {
        if (t && t.mountedInstances) {
          let e = a.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(s(e));
        }
      }
      return (
        r && (t?.mountedInstances?.add(e.children), i()),
        l(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        l(
          () => (
            t && (t._pendingUpdate = i),
            () => {
              t && (t._pendingUpdate = i);
            }
          )
        ),
        n(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  25633,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return p;
      },
      defaultHead: function () {
        return m;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    let l = e.r(55682),
      n = e.r(90809),
      i = e.r(43476),
      o = n._(e.r(71645)),
      c = l._(e.r(98879)),
      d = e.r(42732);
    function m() {
      return [
        (0, i.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, i.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function x(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === o.default.Fragment
        ? e.concat(
            o.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(33525);
    let u = ["name", "httpEquiv", "charSet", "itemProp"];
    function h(e) {
      let t, s, a, r;
      return e
        .reduce(x, [])
        .reverse()
        .concat(m().reverse())
        .filter(
          ((t = new Set()),
          (s = new Set()),
          (a = new Set()),
          (r = {}),
          (e) => {
            let l = !0,
              n = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              n = !0;
              let s = e.key.slice(e.key.indexOf("$") + 1);
              t.has(s) ? (l = !1) : t.add(s);
            }
            switch (e.type) {
              case "title":
              case "base":
                s.has(e.type) ? (l = !1) : s.add(e.type);
                break;
              case "meta":
                for (let t = 0, s = u.length; t < s; t++) {
                  let s = u[t];
                  if (e.props.hasOwnProperty(s))
                    if ("charSet" === s) a.has(s) ? (l = !1) : a.add(s);
                    else {
                      let t = e.props[s],
                        a = r[s] || new Set();
                      ("name" !== s || !n) && a.has(t)
                        ? (l = !1)
                        : (a.add(t), (r[s] = a));
                    }
                }
            }
            return l;
          })
        )
        .reverse()
        .map((e, t) => {
          let s = e.key || t;
          return o.default.cloneElement(e, { key: s });
        });
    }
    let p = function ({ children: e }) {
      let t = (0, o.useContext)(d.HeadManagerContext);
      return (0, i.jsx)(c.default, {
        reduceComponentsToState: h,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof s.default ||
      ("object" == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, "__esModule", { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  18556,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let a = e.r(55682)._(e.r(71645)),
      r = e.r(87690),
      l = a.default.createContext(r.imageConfigDefault);
  },
  65856,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "RouterContext", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let a = e.r(55682)._(e.r(71645)).default.createContext(null);
  },
  70965,
  (e, t, s) => {
    "use strict";
    function a(e, t) {
      let s = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - s) < Math.abs(e - s) ? t : e),
            0
          )
        : s;
    }
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
  },
  1948,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let a = e.r(70965),
      r = e.r(43369);
    function l({ config: e, src: t, width: s, quality: l }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let n = (0, a.findClosestQuality)(l, e),
        i = (0, r.getDeploymentId)();
      return `${e.path}${t}`;
    }
    l.__next_img_default = !0;
    let n = l;
  },
  18581,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let a = e.r(71645);
    function r(e, t) {
      let s = (0, a.useRef)(null),
        r = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = s.current;
            e && ((s.current = null), e());
            let t = r.current;
            t && ((r.current = null), t());
          } else e && (s.current = l(e, a)), t && (r.current = l(t, a));
        },
        [e, t]
      );
    }
    function l(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let s = e(t);
        return "function" == typeof s ? s : () => e(null);
      }
    }
    ("function" == typeof s.default ||
      ("object" == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, "__esModule", { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  5500,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "Image", {
        enumerable: !0,
        get: function () {
          return w;
        },
      });
    let a = e.r(55682),
      r = e.r(90809),
      l = e.r(43476),
      n = r._(e.r(71645)),
      i = a._(e.r(74080)),
      o = a._(e.r(25633)),
      c = e.r(8927),
      d = e.r(87690),
      m = e.r(18556);
    e.r(33525);
    let x = e.r(65856),
      u = a._(e.r(1948)),
      h = e.r(18581),
      p = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function f(e, t, s, a, r, l, n) {
      let i = e?.src;
      e &&
        e["data-loaded-src"] !== i &&
        ((e["data-loaded-src"] = i),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && r(!0), s?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let a = !1,
                  r = !1;
                s.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => a,
                  isPropagationStopped: () => r,
                  persist: () => {},
                  preventDefault: () => {
                    (a = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (r = !0), t.stopPropagation();
                  },
                });
              }
              a?.current && a.current(e);
            }
          }));
    }
    function b(e) {
      return n.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let g = (0, n.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: s,
          height: a,
          width: r,
          decoding: i,
          className: o,
          style: c,
          fetchPriority: d,
          placeholder: m,
          loading: x,
          unoptimized: u,
          fill: p,
          onLoadRef: g,
          onLoadingCompleteRef: j,
          setBlurComplete: w,
          setShowAltText: v,
          sizesInput: y,
          onLoad: N,
          onError: k,
          ...C
        },
        E
      ) => {
        let S = (0, n.useCallback)(
            (e) => {
              e && (k && (e.src = e.src), e.complete && f(e, m, g, j, w, u, y));
            },
            [e, m, g, j, w, k, u, y]
          ),
          M = (0, h.useMergedRef)(E, S);
        return (0, l.jsx)("img", {
          ...C,
          ...b(d),
          loading: x,
          width: r,
          height: a,
          decoding: i,
          "data-nimg": p ? "fill" : "1",
          className: o,
          style: c,
          sizes: s,
          srcSet: t,
          src: e,
          ref: M,
          onLoad: (e) => {
            f(e.currentTarget, m, g, j, w, u, y);
          },
          onError: (e) => {
            v(!0), "empty" !== m && w(!0), k && k(e);
          },
        });
      }
    );
    function j({ isAppRouter: e, imgAttributes: t }) {
      let s = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...b(t.fetchPriority),
      };
      return e && i.default.preload
        ? (i.default.preload(t.src, s), null)
        : (0, l.jsx)(o.default, {
            children: (0, l.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...s },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let w = (0, n.forwardRef)((e, t) => {
      let s = (0, n.useContext)(x.RouterContext),
        a = (0, n.useContext)(m.ImageConfigContext),
        r = (0, n.useMemo)(() => {
          let e = p || a || d.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            s = e.deviceSizes.sort((e, t) => e - t),
            r = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: s,
            qualities: r,
            localPatterns:
              "u" < typeof window ? a?.localPatterns : e.localPatterns,
          };
        }, [a]),
        { onLoad: i, onLoadingComplete: o } = e,
        h = (0, n.useRef)(i);
      (0, n.useEffect)(() => {
        h.current = i;
      }, [i]);
      let f = (0, n.useRef)(o);
      (0, n.useEffect)(() => {
        f.current = o;
      }, [o]);
      let [b, w] = (0, n.useState)(!1),
        [v, y] = (0, n.useState)(!1),
        { props: N, meta: k } = (0, c.getImgProps)(e, {
          defaultLoader: u.default,
          imgConf: r,
          blurComplete: b,
          showAltText: v,
        });
      return (0, l.jsxs)(l.Fragment, {
        children: [
          (0, l.jsx)(g, {
            ...N,
            unoptimized: k.unoptimized,
            placeholder: k.placeholder,
            fill: k.fill,
            onLoadRef: h,
            onLoadingCompleteRef: f,
            setBlurComplete: w,
            setShowAltText: y,
            sizesInput: e.sizes,
            ref: t,
          }),
          k.preload
            ? (0, l.jsx)(j, { isAppRouter: !s, imgAttributes: N })
            : null,
        ],
      });
    });
    ("function" == typeof s.default ||
      ("object" == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, "__esModule", { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  94909,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return d;
      },
      getImageProps: function () {
        return c;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    let l = e.r(55682),
      n = e.r(8927),
      i = e.r(5500),
      o = l._(e.r(1948));
    function c(e) {
      let { props: t } = (0, n.getImgProps)(e, {
        defaultLoader: o.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, s] of Object.entries(t)) void 0 === s && delete t[e];
      return { props: t };
    }
    let d = i.Image;
  },
  57688,
  (e, t, s) => {
    t.exports = e.r(94909);
  },
  31713,
  (e) => {
    "use strict";
    var t = e.i(43476),
      s = e.i(71645);
    let a = (0, s.createContext)({
      degenMode: !1,
      toggleDegenMode: () => {},
      setDegenMode: () => {},
    });
    function r({ children: e }) {
      let [r, l] = (0, s.useState)(!1),
        n = (0, s.useCallback)(() => l((e) => !e), []);
      return (0, t.jsx)(a.Provider, {
        value: { degenMode: r, toggleDegenMode: n, setDegenMode: l },
        children: e,
      });
    }
    function l() {
      return (0, s.useContext)(a);
    }
    var n = e.i(57688);
    function i() {
      let { degenMode: e, toggleDegenMode: s } = l();
      return (0, t.jsx)("button", {
        onClick: s,
        className: `px-3 py-1 text-xs font-bold uppercase tracking-wider border-2 transition-all duration-300 ${
          e
            ? "bg-[#178d19] text-black border-[#178d19] neon-border animate-pulse"
            : "bg-transparent text-white/60 border-white/20 hover:border-[#178d19]/50 hover:text-[#178d19]"
        }`,
        children: e ? "CHAOS" : "CHILL",
      });
    }
    let o = [
      { href: "#about", label: "About" },
      { href: "#tokenomics", label: "Tokenomics" },
      { href: "#how-to-buy", label: "How to Buy" },
      { href: "#memes", label: "Memes" },
      { href: "#community", label: "Community" },
    ];
    function c() {
      let [e, a] = (0, s.useState)(!1),
        [r, l] = (0, s.useState)(!1);
      return (
        (0, s.useEffect)(() => {
          let e = () => {
            a(window.scrollY > 50);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
        (0, t.jsx)("nav", {
          className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            e
              ? "bg-black/90 backdrop-blur-md border-b border-[#178d19]/30"
              : "bg-transparent"
          }`,
          children: (0, t.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center justify-between h-16 sm:h-20",
                children: [
                  (0, t.jsxs)("a", {
                    href: "#",
                    className:
                      "hover:scale-105 transition-transform flex items-center gap-2",
                    children: [
                      (0, t.jsx)(n.default, {
                        src: "/logo.webp",
                        alt: "Wojak logo",
                        width: 64,
                        height: 64,
                        className: "w-14 h-14 sm:w-16 sm:h-16",
                      }),
                      (0, t.jsxs)("span", {
                        className:
                          "font-[family-name:var(--font-display)] text-2xl sm:text-3xl text-[#178d19] neon-text-subtle flex items-center gap-2",
                        children: [
                          "Wojakcoin",
                          (0, t.jsx)("span", {
                            className:
                              "text-[10px] sm:text-xs bg-[#178d19]/20 text-[#178d19] px-1.5 py-0.5 border border-[#178d19]/40 tracking-wider font-semibold",
                            children: "OG",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "hidden md:flex items-center gap-8",
                    children: [
                      o.map((e) =>
                        (0, t.jsx)(
                          "a",
                          {
                            href: e.href,
                            className:
                              "text-white/80 hover:text-[#178d19] transition-colors text-sm uppercase tracking-wider font-semibold",
                            children: e.label,
                          },
                          e.href
                        )
                      ),
                      (0, t.jsx)(i, {}),
                      (0, t.jsx)("a", {
                        href: "https://app.uniswap.org/explore/tokens/ethereum/0xComingSoon",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-primary text-sm",
                        children: "Buy Now",
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    onClick: () => l(!r),
                    className: "md:hidden text-[#178d19] p-2",
                    "aria-label": "Toggle menu",
                    children: (0, t.jsx)("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: r
                        ? (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M6 18L18 6M6 6l12 12",
                          })
                        : (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M4 6h16M4 12h16M4 18h16",
                          }),
                    }),
                  }),
                ],
              }),
              r &&
                (0, t.jsx)("div", {
                  className:
                    "md:hidden bg-black/95 border-t border-[#178d19]/30",
                  children: (0, t.jsxs)("div", {
                    className: "px-4 py-4 space-y-3",
                    children: [
                      o.map((e) =>
                        (0, t.jsx)(
                          "a",
                          {
                            href: e.href,
                            onClick: () => l(!1),
                            className:
                              "block text-white/80 hover:text-[#178d19] transition-colors text-sm uppercase tracking-wider font-semibold py-2",
                            children: e.label,
                          },
                          e.href
                        )
                      ),
                      (0, t.jsxs)("div", {
                        className: "flex items-center gap-3 mt-4",
                        children: [
                          (0, t.jsx)(i, {}),
                          (0, t.jsx)("a", {
                            href: "https://app.uniswap.org/explore/tokens/ethereum/0xComingSoon",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "btn-primary text-sm block text-center flex-1",
                            children: "Buy Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        })
      );
    }
    let d = [
      "tfw no gf",
      "why even live",
      "it's over",
      "this is fine",
      "pain.",
      "that feel when...",
      "i know that feel",
      "feels bad man",
      "just be yourself bro",
      "we are all wojak",
    ];
    function m() {
      let [e, a] = (0, s.useState)(!1),
        [r, l] = (0, s.useState)(!1),
        [i, o] = (0, s.useState)(!1),
        [c, m] = (0, s.useState)(!1),
        [x, u] = (0, s.useState)(!1),
        [h, p] = (0, s.useState)(!1),
        [f, b] = (0, s.useState)(0),
        [g, j] = (0, s.useState)("hidden"),
        [w, v] = (0, s.useState)([]),
        [y, N] = (0, s.useState)(!1);
      (0, s.useEffect)(() => {
        let e = setTimeout(() => {
          a(!0),
            m(!0),
            l(!0),
            o(!0),
            setTimeout(() => m(!1), 400),
            setTimeout(() => l(!1), 800),
            setTimeout(() => o(!1), 500);
        }, 1500);
        return () => clearTimeout(e);
      }, []),
        (0, s.useEffect)(() => {
          if (!e) return;
          let t = setTimeout(() => {
              j("pop-in"), setTimeout(() => j("visible"), 300);
            }, 500),
            s = setInterval(() => {
              j("fade-out"),
                setTimeout(() => {
                  b((e) => (e + 1) % d.length),
                    j("pop-in"),
                    setTimeout(() => j("visible"), 300);
                }, 300);
            }, 3e3);
          return () => {
            clearTimeout(t), clearInterval(s);
          };
        }, [e]);
      let k = (0, s.useCallback)(() => {
          if (x) return;
          u(!0);
          let e = Date.now();
          v((t) => [...t, e]),
            setTimeout(() => {
              u(!1), v((t) => t.filter((t) => t !== e));
            }, 800);
        }, [x]),
        C = () =>
          "pop-in" === g
            ? "bubble-pop-in"
            : "fade-out" === g
            ? "bubble-fade-out"
            : "visible" === g
            ? "opacity-100"
            : "opacity-0";
      return (0, t.jsxs)("section", {
        className: `relative min-h-screen flex items-center justify-center overflow-hidden grid-bg ${
          i ? "screen-shake" : ""
        }`,
        children: [
          (0, t.jsxs)("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
              (0, t.jsx)("div", {
                className:
                  "absolute top-20 left-10 w-20 h-20 border-2 border-[#178d19]/20 rotate-45 float",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute top-40 right-20 w-32 h-32 border-2 border-[#178d19]/10 rounded-full float-delay-1",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute bottom-40 left-1/4 w-16 h-16 bg-[#178d19]/5 rotate-12 float-delay-2",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute bottom-20 right-1/3 w-24 h-24 border border-[#178d19]/20 spin-slow",
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 scanlines pointer-events-none opacity-30",
          }),
          (0, t.jsx)("div", {
            className:
              "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12",
            children: (0, t.jsxs)("div", {
              className:
                "flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16",
              children: [
                (0, t.jsxs)("div", {
                  className: "text-center lg:text-left max-w-xl",
                  children: [
                    
                    (0, t.jsx)("h1", {
                      className:
                        "font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#178d19] mb-4",
                      children: "WOJAK",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-xl sm:text-2xl md:text-3xl text-white/90 font-bold mb-2",
                      children:
                        "The original and very first Wojak memecoin. Created in 2023.",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-lg sm:text-xl text-[#178d19] italic mb-6",
                      children: '"I know that feel, bro"',
                    }),
                    (0, t.jsxs)("button", {
                      onClick: async () => {
                        try {
                          await navigator.clipboard.writeText(
                            "0xComingSoon"
                          );
                        } catch {
                          let e = document.createElement("textarea");
                          (e.value =
                            "0xComingSoon"),
                            (e.style.position = "fixed"),
                            (e.style.opacity = "0"),
                            document.body.appendChild(e),
                            e.select(),
                            document.execCommand("copy"),
                            document.body.removeChild(e);
                        }
                        N(!0), setTimeout(() => N(!1), 2e3);
                      },
                      className:
                        "mb-6 max-w-md mx-auto lg:mx-0 text-left group cursor-pointer",
                      children: [
                        (0, t.jsx)("p", {
                          className:
                            "text-white/40 text-xs uppercase tracking-wider mb-1",
                          children: "Contract Address",
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, t.jsx)("code", {
                              className:
                                "text-[#178d19]/80 text-xs sm:text-sm font-mono break-all",
                              children:
                                "0xComingSoon",
                            }),
                            (0, t.jsx)("span", {
                              className: `shrink-0 transition-all ${
                                y
                                  ? "text-[#178d19]"
                                  : "text-white/40 group-hover:text-[#178d19]"
                              }`,
                              children: y
                                ? (0, t.jsx)("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M5 13l4 4L19 7",
                                    }),
                                  })
                                : (0, t.jsx)("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
                                    }),
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("p", {
                      className:
                        "text-white/70 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0",
                      children: [
                        'The most recognized face on the internet. Wojak or "Feels Guy" spawned a whole generation of memes. In 2023, he was brought on-chain and immortalized in meme history as Wojakcoin. There\'s no second-best.',
                        " ",
                        (0, t.jsx)("span", {
                          className: "text-[#178d19] font-semibold",
                          children: "We are all Wojak",
                        }),
                        ".",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                      children: [
                        (0, t.jsx)("a", {
                          href: "https://app.uniswap.org/explore/tokens/ethereum/0xComingSoon",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "btn-primary text-lg px-8 py-4 pulse-neon",
                          children: "Buy WOJAK",
                        }),
                        (0, t.jsx)("a", {
                          href: "https://t.me/Wojak_Portal",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "btn-secondary text-lg px-8 py-4",
                          children: "Join Telegram",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "flex flex-wrap gap-6 mt-10 justify-center lg:justify-start",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, t.jsx)("p", {
                              className:
                                "text-[#178d19] font-[family-name:var(--font-display)] text-2xl",
                              children: "1B",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-white/60 text-sm",
                              children: "Total Supply",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, t.jsx)("p", {
                              className:
                                "text-[#178d19] font-[family-name:var(--font-display)] text-2xl",
                              children: "0%",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-white/60 text-sm",
                              children: "Tax",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, t.jsx)("p", {
                              className:
                                "text-[#178d19] font-[family-name:var(--font-display)] text-2xl",
                              children: "100%",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-white/60 text-sm",
                              children: "Feels",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "relative cursor-pointer select-none",
                  onMouseEnter: () => {
                    e && !x && p(!0);
                  },
                  onMouseLeave: () => p(!1),
                  onClick: k,
                  children: [
                    (0, t.jsxs)("div", {
                      className: `relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 ${
                        !e
                          ? "wojak-entrance"
                          : x
                          ? "wojak-rocket"
                          : c
                          ? "wojak-squish"
                          : h
                          ? "wojak-panic"
                          : "wojak-idle"
                      }`,
                      children: [
                        (0, t.jsx)("div", {
                          className: `absolute inset-0 bg-[#178d19]/20 rounded-full blur-3xl transition-all duration-300 ${
                            h ? "glow-pulse-intense" : "glow-pulse"
                          }`,
                        }),
                        (0, t.jsx)("div", {
                          className: "relative w-full h-full",
                          children: (0, t.jsx)(n.default, {
                            src: "/images/faces/green-wojak.webp",
                            alt: "Wojak - The Original Feels Guy — hover to scare him, click to launch!",
                            fill: !0,
                            className:
                              "object-contain drop-shadow-[0_0_20px_rgba(23,141,25,0.3)]",
                            sizes:
                              "(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px",
                            priority: !0,
                            draggable: !1,
                          }),
                        }),
                      ],
                    }),
                    r && (0, t.jsx)("div", { className: "shockwave" }),
                    w.map((e) =>
                      (0, t.jsx)(
                        "div",
                        {
                          className:
                            "absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none",
                          children: [0, 1, 2].map((e) =>
                            (0, t.jsx)(
                              "div",
                              {
                                className:
                                  "absolute w-3 h-3 rounded-full bg-[#178d19]",
                                style: {
                                  left: `${(e - 1) * 12}px`,
                                  animation: `rocket-trail 0.5s ease-out ${
                                    0.1 * e
                                  }s forwards`,
                                  opacity: 0.8,
                                },
                              },
                              e
                            )
                          ),
                        },
                        e
                      )
                    ),
                    e &&
                      "hidden" !== g &&
                      (0, t.jsx)("div", {
                        className: `absolute -top-4 -right-4 bg-[#178d19] text-black px-3 py-1 text-sm font-bold whitespace-nowrap ${C()}`,
                        style: { "--bubble-rotate": "12deg" },
                        children: d[f],
                      }),
                    e &&
                      "hidden" !== g &&
                      (0, t.jsx)("div", {
                        className: `absolute -bottom-2 -left-4 bg-white text-black px-3 py-1 text-sm font-bold whitespace-nowrap ${C()}`,
                        style: { "--bubble-rotate": "-6deg" },
                        children: d[(f + 5) % d.length],
                      }),
                  ],
                }),
              ],
            }),
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2",
            children: [
              (0, t.jsx)("span", {
                className: "text-white/50 text-sm uppercase tracking-widest",
                children: "Scroll",
              }),
              (0, t.jsx)("div", {
                className:
                  "w-6 h-10 border-2 border-[#178d19]/50 rounded-full flex items-start justify-center p-2",
                children: (0, t.jsx)("div", {
                  className:
                    "w-1.5 h-3 bg-[#178d19] rounded-full animate-bounce",
                }),
              }),
            ],
          }),
        ],
      });
    }
    let x = [
      "/images/faces/green-wojak.webp",
      "/images/faces/doomer.webp",
      "/images/faces/bloomer.webp",
      "/images/faces/zoomer.webp",
      "/images/faces/npc.webp",
      "/images/faces/boomer.webp",
      "/images/faces/coomer.webp",
      "/images/faces/pink.webp",
    ];
    function u() {
      let e = [
        "THE OG",
        "WOJAK",
        "FEELS",
        "SINCE 2023",
        "THE ORIGINAL",
        "FEELS GUY",
        "THAT FEEL WHEN",
        "WOJAK",
        "I KNOW THAT FEEL",
        "BRO",
        "THE FIRST",
        "WE ARE ALL WOJAK",
        "MEME LORE",
        "ON CHAIN",
        "FOREVER",
        "WOJAK",
      ];
      return (0, t.jsx)("div", {
        className: "relative overflow-hidden bg-[#178d19] py-2",
        children: (0, t.jsx)("div", {
          className: "animate-marquee flex whitespace-nowrap items-center",
          children: [...e, ...e].map((e, s) =>
            (0, t.jsxs)(
              "span",
              {
                className:
                  "mx-6 text-black font-[family-name:var(--font-display)] text-lg sm:text-xl inline-flex items-center gap-4",
                children: [
                  e,
                  (0, t.jsx)(n.default, {
                    src: x[s % x.length],
                    alt: "",
                    width: 32,
                    height: 32,
                    className: "w-8 h-8 object-contain mix-blend-multiply",
                  }),
                ],
              },
              s
            )
          ),
        }),
      });
    }
    function h(e = 0.15) {
      let t = (0, s.useRef)(null),
        [a, r] = (0, s.useState)(!1);
      return (
        (0, s.useEffect)(() => {
          let s = t.current;
          if (!s) return;
          let a = new IntersectionObserver(
            ([e]) => {
              e.isIntersecting && (r(!0), a.unobserve(s));
            },
            { threshold: e }
          );
          return a.observe(s), () => a.disconnect();
        }, [e]),
        { ref: t, isVisible: a }
      );
    }
    let p = {
      up: "translate-y-10",
      down: "-translate-y-10",
      left: "translate-x-10",
      right: "-translate-x-10",
    };
    function f({ children: e, direction: s = "up", delay: a = 0 }) {
      let { ref: r, isVisible: l } = h(0.1);
      return (0, t.jsx)("div", {
        ref: r,
        className: `transition-all duration-700 ease-out ${
          l ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${p[s]}`
        }`,
        style: { transitionDelay: `${a}ms` },
        children: e,
      });
    }
    function b() {
      return (0, t.jsx)("section", {
        id: "about",
        className: "py-20 sm:py-32 relative",
        children: (0, t.jsx)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: (0, t.jsxs)("div", {
            className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            children: [
              (0, t.jsx)(f, {
                direction: "left",
                delay: 200,
                children: (0, t.jsx)("div", {
                  className: "relative order-2 lg:order-1",
                  children: (0, t.jsx)("div", {
                    className:
                      "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4",
                    children: [
                      {
                        src: "/images/faces/green-wojak.webp",
                        name: "Original Wojak",
                        tag: "That feel, bro",
                      },
                      {
                        src: "/images/faces/doomer.webp",
                        name: "Doomer",
                        tag: "It's all pointless",
                      },
                      {
                        src: "/images/faces/bloomer.webp",
                        name: "Bloomer",
                        tag: "Life is beautiful",
                      },
                      {
                        src: "/images/faces/zoomer.webp",
                        name: "Galaxy Brain",
                        tag: "Cosmic feels",
                      },
                      {
                        src: "/images/faces/npc.webp",
                        name: "NPC",
                        tag: "No thoughts",
                      },
                      {
                        src: "/images/faces/boomer.webp",
                        name: "Boomer",
                        tag: "Back in my day",
                      },
                      {
                        src: "/images/faces/coomer.webp",
                        name: "Coomer",
                        tag: "Down bad",
                      },
                      {
                        src: "/images/faces/pink.webp",
                        name: "Pink Wojak",
                        tag: "AHHH my portfolio!",
                      },
                    ].map((e, s) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: `wojak-card p-2 text-center ${
                            s % 3 == 0
                              ? "float"
                              : s % 3 == 1
                              ? "float-delay-1"
                              : "float-delay-2"
                          }`,
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "relative aspect-square mb-2 overflow-hidden bg-black/30",
                              children: (0, t.jsx)(n.default, {
                                src: e.src,
                                alt: e.name,
                                fill: !0,
                                className: "object-contain",
                                sizes:
                                  "(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 20vw",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              className: "text-white/80 font-semibold text-sm",
                              children: e.name,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-[#178d19]/60 text-xs italic",
                              children: e.tag,
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
                  }),
                }),
              }),
              (0, t.jsx)(f, {
                direction: "right",
                delay: 400,
                children: (0, t.jsxs)("div", {
                  className: "order-1 lg:order-2",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "inline-block px-4 py-1 bg-[#178d19]/10 border border-[#178d19]/30 text-[#178d19] text-xs uppercase tracking-widest font-semibold mb-4",
                      children: "The Lore",
                    }),
                    (0, t.jsxs)("h2", {
                      className:
                        "font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white mb-6",
                      children: [
                        "What is ",
                        (0, t.jsx)("span", {
                          className: "text-[#178d19] neon-text-subtle",
                          children: "WOJAK",
                        }),
                        "?",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "space-y-4 text-white/70 text-lg",
                      children: [
                        (0, t.jsxs)("p", {
                          children: [
                            (0, t.jsx)("span", {
                              className: "text-[#178d19] font-bold",
                              children: "Wojak",
                            }),
                            ". Feels Guy. The bald MS Paint man who's been making the internet feel something since 2010.",
                          ],
                        }),
                        (0, t.jsx)("p", {
                          children:
                            'First posted on a Polish imageboard, it was then shared to a German imageboard by user "Wojak." It took off on 4chan soon after and spread to every corner of the internet. By 2011, it was already going viral everywhere with stories posted with the template "that feel when…"',
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "Since then, Wojak has grown to become his own meme universe. There's the Zoomer, the Doomer, the NPC, the Soyjak, the Chudjak, Brainlets, and so many other variations. He's often drawn with his close friend Pepe the frog. There's really ",
                            (0, t.jsx)("span", {
                              className: "text-white font-semibold",
                              children: "no internet culture without Wojak",
                            }),
                            ".",
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "Shortly after the launch of the memecoin PEPE in 2023, this meme lore was brought onchain.",
                            (0, t.jsx)("span", {
                              className: "text-[#178d19] font-bold",
                              children: "Wojakcoin (WOJAK)",
                            }),
                            " is the first community-led memecoin on Ethereum for the Wojak meme.",
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "Wojakcoin isn't just meme lore, he's also core crypto lore. ",
                            (0, t.jsx)("span", {
                              className: "text-white font-semibold",
                              children: "Wojakcoin is forever",
                            }),
                            ".",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "mt-8 p-6 bg-[#178d19]/5 border-l-4 border-[#178d19]",
                      children: [
                        (0, t.jsx)("p", {
                          className:
                            "text-white/90 text-xl italic font-semibold",
                          children: '"I know that feel, bro. We all do."',
                        }),
                        (0, t.jsx)("p", {
                          className: "text-[#178d19] mt-2",
                          children: "— Wojak",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-wrap gap-4 mt-8",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2 text-white/80",
                          children: [
                            (0, t.jsx)("svg", {
                              className: "w-5 h-5 text-[#178d19]",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              children: (0, t.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                clipRule: "evenodd",
                              }),
                            }),
                            (0, t.jsx)("span", { children: "Community Owned" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2 text-white/80",
                          children: [
                            (0, t.jsx)("svg", {
                              className: "w-5 h-5 text-[#178d19]",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              children: (0, t.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                clipRule: "evenodd",
                              }),
                            }),
                            (0, t.jsx)("span", { children: "LP Burnt" }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2 text-white/80",
                          children: [
                            (0, t.jsx)("svg", {
                              className: "w-5 h-5 text-[#178d19]",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              children: (0, t.jsx)("path", {
                                fillRule: "evenodd",
                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                clipRule: "evenodd",
                              }),
                            }),
                            (0, t.jsx)("span", {
                              children: "Contract Renounced",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
    }
    function g({ target: e, suffix: a = "", decimals: r = 0 }) {
      let { ref: l, isVisible: n } = h(0.3),
        [i, o] = (0, s.useState)("0"),
        c = (0, s.useRef)(!1);
      return (
        (0, s.useEffect)(() => {
          if (!n || c.current) return;
          c.current = !0;
          let t = performance.now(),
            s = (a) => {
              let l = Math.min((a - t) / 2e3, 1);
              o(((1 - Math.pow(1 - l, 4)) * e).toFixed(r)),
                l < 1 && requestAnimationFrame(s);
            };
          requestAnimationFrame(s);
        }, [n, e, r]),
        (0, t.jsxs)("span", { ref: l, children: [i, a] })
      );
    }
    function j() {
      let [e, a] = (0, s.useState)("");
      return (
        (0, s.useEffect)(() => {
          let e = new Date("2100-01-01T00:00:00Z").getTime(),
            t = () => {
              let t = e - Date.now();
              if (t <= 0) return void a("0s");
              let s = Math.floor(t / 315576e5),
                r = Math.floor((t % 315576e5) / 864e5),
                l = Math.floor((t % 864e5) / 36e5),
                n = Math.floor((t % 36e5) / 6e4),
                i = Math.floor((t % 6e4) / 1e3);
              a(
                `${s}y ${r}d ${l}h ${String(n).padStart(2, "0")}m ${String(
                  i
                ).padStart(2, "0")}s`
              );
            };
          t();
          let s = setInterval(t, 1e3);
          return () => clearInterval(s);
        }, []),
        (0, t.jsx)("span", { className: "tabular-nums", children: e })
      );
    }
    function w() {
      let [e, a] = (0, s.useState)(!1),
        [r, l] = (0, s.useState)(!1),
        n = (0, s.useRef)(null),
        i = "0xComingSoon",
        o = (0, s.useCallback)(() => {
          let e = n.current;
          if (!e) return;
          let t = e.getBoundingClientRect(),
            s = e.parentElement;
          if (s)
            for (let e = 0; e < 15; e++) {
              let a = document.createElement("div");
              a.className = "copy-particle";
              let r = (2 * Math.PI * e) / 15,
                l = 40 + 40 * Math.random();
              a.style.setProperty("--tx", `${Math.cos(r) * l}px`),
                a.style.setProperty("--ty", `${Math.sin(r) * l}px`),
                (a.style.left = `${
                  t.left - s.getBoundingClientRect().left + t.width / 2
                }px`),
                (a.style.top = `${
                  t.top - s.getBoundingClientRect().top + t.height / 2
                }px`),
                s.appendChild(a),
                setTimeout(() => a.remove(), 600);
            }
        }, []),
        c = async () => {
          try {
            await navigator.clipboard.writeText(i),
              a(!0),
              l(!0),
              o(),
              setTimeout(() => a(!1), 2e3),
              setTimeout(() => l(!1), 1500);
          } catch {
            let e = document.createElement("textarea");
            (e.value = i),
              (e.style.position = "fixed"),
              (e.style.opacity = "0"),
              document.body.appendChild(e),
              e.select(),
              document.execCommand("copy"),
              document.body.removeChild(e),
              a(!0),
              setTimeout(() => a(!1), 2e3);
          }
        };
      return (0, t.jsx)("section", {
        id: "tokenomics",
        className:
          "py-20 sm:py-32 relative bg-gradient-to-b from-transparent via-[#178d19]/5 to-transparent",
        children: (0, t.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            (0, t.jsx)(f, {
              children: (0, t.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "inline-block px-4 py-1 bg-[#178d19]/10 border border-[#178d19]/30 text-[#178d19] text-xs uppercase tracking-widest font-semibold mb-4",
                    children: "Token Info",
                  }),
                  (0, t.jsxs)("h2", {
                    className:
                      "font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white",
                    children: [
                      (0, t.jsx)("span", {
                        className: "text-[#178d19] neon-text-subtle",
                        children: "WOJAK",
                      }),
                      "NOMICS",
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)(f, {
              delay: 100,
              children: (0, t.jsxs)("div", {
                className: "max-w-3xl mx-auto mb-16",
                children: [
                  (0, t.jsx)("p", {
                    className:
                      "text-white/60 text-sm uppercase tracking-wider mb-2 text-center",
                    children: "Contract Address",
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "flex items-center justify-center gap-2 bg-black/50 border-2 border-[#178d19]/30 p-4 rounded-lg relative",
                    children: [
                      (0, t.jsx)("code", {
                        className:
                          "text-[#178d19] text-sm sm:text-base break-all font-mono",
                        children: i,
                      }),
                      (0, t.jsx)("button", {
                        ref: n,
                        onClick: c,
                        className: `shrink-0 px-4 py-2 text-sm font-bold uppercase transition-all ${
                          e
                            ? "bg-[#178d19] text-black"
                            : "bg-[#178d19]/20 text-[#178d19] hover:bg-[#178d19] hover:text-black"
                        }`,
                        children: e ? "Copied!" : "Copy",
                      }),
                      r &&
                        (0, t.jsx)("span", {
                          className:
                            "absolute -top-8 left-1/2 -translate-x-1/2 text-[#178d19] font-bold text-lg bubble-pop-in",
                          children: "WAGMI!",
                        }),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)(f, {
              delay: 200,
              children: (0, t.jsxs)("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                  (0, t.jsxs)("div", {
                    className: "wojak-card p-6 sm:p-8 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-[#178d19] font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl mb-2",
                        children: (0, t.jsx)(g, {
                          target: 1,
                          suffix: "B",
                          decimals: 0,
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white/80 font-semibold uppercase tracking-wider text-sm",
                        children: "Total Supply",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "wojak-card p-6 sm:p-8 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-[#178d19] font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl mb-2",
                        children: (0, t.jsx)(g, { target: 0, suffix: "%" }),
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white/80 font-semibold uppercase tracking-wider text-sm",
                        children: "Buy/Sell Tax",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "wojak-card p-6 sm:p-8 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-[#178d19] font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl mb-2",
                        children: "Burnt",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white/80 font-semibold uppercase tracking-wider text-sm",
                        children: "Liquidity Tokens",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "wojak-card p-6 sm:p-8 text-center",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-[#178d19] font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl mb-2",
                        children: (0, t.jsx)(g, { target: 100, suffix: "%" }),
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white/80 font-semibold uppercase tracking-wider text-sm",
                        children: "Feels",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)(f, {
              delay: 300,
              children: (0, t.jsxs)("div", {
                className: "mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "text-center p-4 border border-[#178d19]/20 bg-[#178d19]/5",
                    children: [
                      (0, t.jsx)("svg", {
                        className: "w-8 h-8 text-[#178d19] mx-auto mb-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className: "text-white font-semibold",
                        children: "Contract Renounced",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-white/60 text-sm mt-1",
                        children: "No one controls it",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("a", {
                    href: "https://app.uncx.network/lockers/univ2/chain/1/address/0xComingSoon/lock/0",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-center p-4 border border-[#178d19]/20 bg-[#178d19]/5 hover:bg-[#178d19]/10 hover:border-[#178d19]/40 transition-all group",
                    children: [
                      (0, t.jsx)("svg", {
                        className: "w-8 h-8 text-[#178d19] mx-auto mb-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white font-semibold group-hover:text-[#178d19] transition-colors",
                        children: "LP Burnt",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-white/60 text-sm mt-1",
                        children: "Your grandkids can't rug either",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "text-center p-4 border border-[#178d19]/20 bg-[#178d19]/5",
                    children: [
                      (0, t.jsx)("svg", {
                        className: "w-8 h-8 text-[#178d19] mx-auto mb-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className: "text-white font-semibold",
                        children: "Community Owned",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-white/60 text-sm mt-1",
                        children: "By the people, for the feels",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    function v() {
      let e = [
        {
          number: "01",
          title: "Create a Wallet",
          description:
            "Download MetaMask or your preferred Ethereum wallet. Create a new wallet or import an existing one.",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
            }),
          }),
        },
        {
          number: "02",
          title: "Get Some ETH",
          description:
            "Buy ETH from an exchange like Coinbase or Binance and send it to your wallet address.",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            }),
          }),
        },
        {
          number: "03",
          title: "Go to Uniswap",
          description:
            "Connect your wallet to Uniswap. Paste the WOJAK contract address.",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
            }),
          }),
        },
        {
          number: "04",
          title: "Swap for WOJAK",
          description:
            "Enter the amount you want to swap and confirm the transaction. Welcome to the feels, fren.",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            }),
          }),
        },
      ];
      return (0, t.jsx)("section", {
        id: "how-to-buy",
        className: "py-20 sm:py-32 relative",
        children: (0, t.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            (0, t.jsxs)("div", {
              className: "text-center mb-16",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "inline-block px-4 py-1 bg-[#178d19]/10 border border-[#178d19]/30 text-[#178d19] text-xs uppercase tracking-widest font-semibold mb-4",
                  children: "Get Started",
                }),
                (0, t.jsxs)("h2", {
                  className:
                    "font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white",
                  children: [
                    "How to ",
                    (0, t.jsx)("span", {
                      className: "text-[#178d19] neon-text-subtle",
                      children: "Buy",
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "text-white/60 mt-4 text-lg max-w-xl mx-auto",
                  children:
                    "Join the community in 4 simple steps. Even a brainlet can do it.",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
              children: e.map((e, s) =>
                (0, t.jsx)(
                  f,
                  {
                    direction: "up",
                    delay: 150 * s,
                    children: (0, t.jsx)("div", {
                      className: "relative group",
                      children: (0, t.jsxs)("div", {
                        className:
                          "wojak-card p-6 h-full relative z-10 bg-black/50",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "absolute -top-4 -left-4 w-12 h-12 bg-[#178d19] text-black font-[family-name:var(--font-display)] text-xl flex items-center justify-center",
                            children: e.number,
                          }),
                          (0, t.jsx)("div", {
                            className: "text-[#178d19] mb-4 mt-4",
                            children: e.icon,
                          }),
                          (0, t.jsx)("h3", {
                            className: "text-white font-bold text-xl mb-2",
                            children: e.title,
                          }),
                          (0, t.jsx)("p", {
                            className: "text-white/60 text-sm",
                            children: e.description,
                          }),
                        ],
                      }),
                    }),
                  },
                  e.number
                )
              ),
            }),
            (0, t.jsxs)("div", {
              className: "flex flex-wrap gap-4 justify-center mt-12",
              children: [
                (0, t.jsxs)("a", {
                  href: "https://app.uniswap.org/explore/tokens/ethereum/0xComingSoon",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "btn-primary text-lg px-8 py-4 flex items-center gap-2",
                  children: [
                    (0, t.jsx)("span", { children: "Buy on Uniswap" }),
                    (0, t.jsx)("svg", {
                      className: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("a", {
                  href: "https://dexscreener.com/ethereum/0xComingSoon",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "btn-secondary text-lg px-8 py-4 flex items-center gap-2",
                  children: [
                    (0, t.jsx)("span", { children: "View on DexScreener" }),
                    (0, t.jsx)("svg", {
                      className: "w-5 h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: (0, t.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "mt-12 max-w-2xl mx-auto text-center",
              children: (0, t.jsx)("p", {
                className: "text-white/40 text-sm",
                children:
                  "Always set slippage to 1-5%. If transaction fails, try increasing slippage. DYOR and never invest more than you can afford to lose. This is a meme coin, fren.",
              }),
            }),
          ],
        }),
      });
    }
    function y({ meme: e, onClick: a }) {
      let [r, l] = (0, s.useState)(!1),
        i = (0, s.useCallback)((e) => {
          let t = e.currentTarget,
            s = t.getBoundingClientRect(),
            a = e.clientX - s.left,
            r = e.clientY - s.top,
            l = s.width / 2,
            n = s.height / 2;
          t.style.transform = `perspective(600px) rotateX(${-(
            ((r - n) / n) *
            8
          )}deg) rotateY(${((a - l) / l) * 8}deg) scale(1.05)`;
        }, []),
        o = (0, s.useCallback)((e) => {
          (e.currentTarget.style.transform = ""), l(!1);
        }, []);
      return (0, t.jsxs)("div", {
        className:
          "relative group cursor-pointer transition-transform duration-200",
        onMouseMove: i,
        onMouseEnter: () => l(!0),
        onMouseLeave: o,
        onClick: a,
        style: { transformStyle: "preserve-3d" },
        children: [
          (0, t.jsx)("div", {
            className: `
          aspect-square bg-black/50 border-4 border-[#178d19]/30
          relative overflow-hidden transition-colors duration-300
          ${r ? "border-[#178d19]" : ""}
        `,
            style: {
              boxShadow: r ? "0 0 20px rgba(23, 141, 25, 0.2)" : "none",
            },
            children: (0, t.jsx)(n.default, {
              src: e.src,
              alt: e.name,
              fill: !0,
              className: "object-cover",
              sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
            }),
          }),
          (0, t.jsxs)("div", {
            className: `
          absolute inset-0 bg-black/80 flex flex-col items-center justify-center
          transition-opacity duration-300
          ${r ? "opacity-100" : "opacity-0"}
        `,
            children: [
              (0, t.jsx)("p", {
                className: "text-white font-bold text-center px-2 text-lg",
                children: e.name,
              }),
              (0, t.jsxs)("span", {
                className: "text-[#178d19] text-sm mt-1",
                children: ["#", e.tag],
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className:
              "absolute top-2 right-2 px-2 py-1 bg-black/70 text-[#178d19] text-xs font-semibold",
            children: ["#", e.tag],
          }),
        ],
      });
    }
    function N() {
      let [e, a] = (0, s.useState)(null);
      return (
        (0, s.useEffect)(() => {
          if (!e) return;
          document.body.style.overflow = "hidden";
          let t = (e) => {
            "Escape" === e.key && a(null);
          };
          return (
            window.addEventListener("keydown", t),
            () => {
              (document.body.style.overflow = ""),
                window.removeEventListener("keydown", t);
            }
          );
        }, [e]),
        (0, t.jsxs)("section", {
          id: "memes",
          className:
            "py-20 sm:py-32 relative bg-gradient-to-b from-transparent via-[#178d19]/5 to-transparent",
          children: [
            (0, t.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                (0, t.jsx)(f, {
                  children: (0, t.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                      (0, t.jsx)("span", {
                        className:
                          "inline-block px-4 py-1 bg-[#178d19]/10 border border-[#178d19]/30 text-[#178d19] text-xs uppercase tracking-widest font-semibold mb-4",
                        children: "Gallery",
                      }),
                      (0, t.jsxs)("h2", {
                        className:
                          "font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white",
                        children: [
                          "The Many Faces of ",
                          (0, t.jsx)("span", {
                            className: "text-[#178d19] neon-text-subtle",
                            children: "WOJAK",
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-white/60 mt-4 text-lg max-w-xl mx-auto",
                        children:
                          "From the original Feels Guy to countless variations, Wojak has a face for every emotion.",
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6",
                  children: [
                    {
                      id: 1,
                      src: "/images/memes/wojak-hug.webp",
                      name: "I Know That Feel",
                      tag: "Frens",
                    },
                    {
                      id: 2,
                      src: "/images/memes/wojak-classic.webp",
                      name: "The Original",
                      tag: "OG Feels",
                    },
                    {
                      id: 3,
                      src: "/images/memes/wojak-fiction.webp",
                      name: "Wojak Fiction",
                      tag: "Say What Again",
                    },
                    {
                      id: 4,
                      src: "/images/memes/wojak-money-printer.webp",
                      name: "Money Printer Go BRRR",
                      tag: "Drone Show",
                    },
                    {
                      id: 5,
                      src: "/images/memes/wojak-npc.webp",
                      name: "NPC Mode",
                      tag: "Blank Stare",
                    },
                    {
                      id: 6,
                      src: "/images/memes/wojak-cycle.webp",
                      name: "The Eternal Cycle",
                      tag: "We're So Back",
                    },
                    {
                      id: 7,
                      src: "/images/memes/wojak-doomer.webp",
                      name: "Doomer Wojak",
                      tag: "Late Night",
                    },
                    {
                      id: 8,
                      src: "/images/memes/wojak-green-pump.webp",
                      name: "Green Candles Only",
                      tag: "Pumping",
                    },
                    {
                      id: 9,
                      src: "/images/memes/wojak-group-hug.webp",
                      name: "We're All Gonna Make It",
                      tag: "WAGMI",
                    },
                    {
                      id: 10,
                      src: "/images/memes/wojak-journey.webp",
                      name: "The Wojak Journey",
                      tag: "Hero Arc",
                    },
                    {
                      id: 11,
                      src: "/images/memes/wojak-sunset.webp",
                      name: "Sunset Feels",
                      tag: "Bittersweet",
                    },
                    {
                      id: 12,
                      src: "/images/memes/wojak-soyjaks.webp",
                      name: "Soy Party",
                      tag: "Pointing",
                    },
                  ].map((e, s) =>
                    (0, t.jsx)(
                      f,
                      {
                        direction: "up",
                        delay: 60 * s,
                        children: (0, t.jsx)(y, {
                          meme: e,
                          onClick: () => a(e),
                        }),
                      },
                      e.id
                    )
                  ),
                }),
                (0, t.jsx)(f, {
                  delay: 300,
                  children: (0, t.jsxs)("div", {
                    className: "text-center mt-12",
                    children: [
                      (0, t.jsx)("p", {
                        className: "text-white/60 text-lg mb-6",
                        children:
                          "Know the feels? Share your own Wojak memes with the community!",
                      }),
                      (0, t.jsxs)("a", {
                        href: "https://t.me/Wojak_Portal",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "btn-secondary inline-flex items-center gap-2",
                        children: [
                          (0, t.jsx)("span", {
                            children: "Join Telegram to Share",
                          }),
                          (0, t.jsx)("svg", {
                            className: "w-5 h-5",
                            fill: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, t.jsx)("path", {
                              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e &&
              (0, t.jsxs)("div", {
                className:
                  "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4",
                onClick: () => a(null),
                children: [
                  (0, t.jsx)("button", {
                    className:
                      "absolute top-4 right-4 text-white/80 hover:text-[#178d19] text-4xl font-bold z-50",
                    onClick: () => a(null),
                    children: "×",
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative max-w-4xl max-h-[85vh] w-full",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      (0, t.jsx)("div", {
                        className: "relative w-full h-[75vh]",
                        children: (0, t.jsx)(n.default, {
                          src: e.src,
                          alt: e.name,
                          fill: !0,
                          className: "object-contain",
                          sizes: "100vw",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-center mt-4",
                        children: [
                          (0, t.jsx)("p", {
                            className: "text-white font-bold text-xl",
                            children: e.name,
                          }),
                          (0, t.jsxs)("span", {
                            className: "text-[#178d19] text-sm",
                            children: ["#", e.tag],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      );
    }
    function k() {
      let e = [
        {
          name: "Telegram",
          description: "Join the feels chat",
          href: "https://t.me/Wojak_Portal",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z",
            }),
          }),
          color: "hover:bg-blue-500/20 hover:border-blue-500",
        },
        {
          name: "X (Twitter)",
          description: "Follow for updates",
          href: "https://x.com/Wojaktoken_Eth",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            }),
          }),
          color: "hover:bg-white/20 hover:border-white",
        },
        {
          name: "DexScreener",
          description: "Track the chart",
          href: "https://dexscreener.com/ethereum/0xComingSoon",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
            }),
          }),
          color: "hover:bg-[#178d19]/20 hover:border-[#178d19]",
        },
        {
          name: "DexTools",
          description: "View on Dextools",
          href: "https://www.dextools.io/app/ether/pair-explorer/0xComingSoon",
          icon: (0, t.jsx)("svg", {
            className: "w-8 h-8",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z",
            }),
          }),
          color: "hover:bg-green-500/20 hover:border-green-500",
        },
      ];
      return (0, t.jsx)("section", {
        id: "community",
        className: "py-20 sm:py-32 relative",
        children: (0, t.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            (0, t.jsxs)("div", {
              className: "text-center mb-16",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "inline-block px-4 py-1 bg-[#178d19]/10 border border-[#178d19]/30 text-[#178d19] text-xs uppercase tracking-widest font-semibold mb-4",
                  children: "Community",
                }),
                (0, t.jsxs)("h2", {
                  className:
                    "font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white mb-4",
                  children: [
                    "Join the ",
                    (0, t.jsx)("span", {
                      className: "text-[#178d19] neon-text-subtle",
                      children: "FEELS",
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "text-white/60 text-lg max-w-xl mx-auto",
                  children:
                    "Become part of the most based community in crypto. We know that feel, bro.",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto",
              children: e.map((e, s) =>
                (0, t.jsx)(
                  f,
                  {
                    direction: "up",
                    delay: 100 * s,
                    children: (0, t.jsxs)("a", {
                      href: e.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: `
                p-6 text-center border-2 border-white/10 bg-black/50
                transition-all duration-300 group bounce-hover block
                ${e.color}
              `,
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "text-[#178d19] group-hover:scale-110 transition-transform mx-auto w-fit mb-4",
                          children: e.icon,
                        }),
                        (0, t.jsx)("h3", {
                          className: "text-white font-bold text-lg mb-1",
                          children: e.name,
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white/60 text-sm",
                          children: e.description,
                        }),
                      ],
                    }),
                  },
                  e.name
                )
              ),
            }),
            
            (0, t.jsx)("div", {
              className: "mt-16 text-center",
              children: (0, t.jsxs)("div", {
                className:
                  "inline-block p-8 border-4 border-[#178d19]/30 bg-[#178d19]/5 max-w-2xl",
                children: [
                  (0, t.jsx)("p", {
                    className: "text-2xl sm:text-3xl text-white font-bold mb-4",
                    children: '"I know that feel, bro"',
                  }),
                  (0, t.jsx)("p", {
                    className: "text-white/70 mb-6",
                    children:
                      "We are all like Wojak. Join the community and just be yourself. All frens welcome.",
                  }),
                  (0, t.jsx)("a", {
                    href: "https://t.me/Wojak_Portal",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 inline-block",
                    children: "Join Us",
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    function C() {
      return (0, t.jsx)("footer", {
        className: "py-12 border-t border-[#178d19]/20 bg-black",
        children: (0, t.jsxs)("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            (0, t.jsxs)("div", {
              className:
                "flex flex-col md:flex-row items-center justify-between gap-8",
              children: [
                (0, t.jsxs)("div", {
                  className: "text-center md:text-left",
                  children: [
                    (0, t.jsx)("a", {
                      href: "#",
                      className:
                        "font-[family-name:var(--font-display)] text-3xl text-[#178d19] neon-text-subtle",
                      children: "WOJAK",
                    }),
                    (0, t.jsx)("p", {
                      className: "text-white/60 text-sm mt-2",
                      children: "The Original Feels Guy",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-wrap justify-center gap-6 text-sm",
                  children: [
                    (0, t.jsx)("a", {
                      href: "#about",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      children: "About",
                    }),
                    (0, t.jsx)("a", {
                      href: "#tokenomics",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      children: "Tokenomics",
                    }),
                    (0, t.jsx)("a", {
                      href: "#how-to-buy",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      children: "How to Buy",
                    }),
                    (0, t.jsx)("a", {
                      href: "#memes",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      children: "Memes",
                    }),
                    (0, t.jsx)("a", {
                      href: "#community",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      children: "Community",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, t.jsx)("a", {
                      href: "https://t.me/Wojak_Portal",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      "aria-label": "Telegram",
                      children: (0, t.jsx)("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                          d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z",
                        }),
                      }),
                    }),
                    (0, t.jsx)("a", {
                      href: "https://x.com/Wojaktoken_Eth",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white/60 hover:text-[#178d19] transition-colors",
                      "aria-label": "Twitter",
                      children: (0, t.jsx)("svg", {
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, t.jsx)("path", {
                          d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                        }),
                      }),
                    }),
                    
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", { className: "section-divider my-8" }),
            (0, t.jsx)("div", {
              className: "text-center",
              children: (0, t.jsx)("p", {
                className:
                  "text-white/40 text-xs max-w-3xl mx-auto leading-relaxed",
                children:
                  "WOJAK is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only. Do your own research and never invest more than you can afford to lose. Crypto is risky. We know that feel, bro.",
              }),
            }),
            (0, t.jsxs)("div", {
              className: "mt-8 text-center",
              children: [
                (0, t.jsxs)("p", {
                  className: "text-white/30 text-sm",
                  children: [
                    "© ",
                    new Date().getFullYear(),
                    " WOJAK • Built by the community, for the feels",
                  ],
                }),
                (0, t.jsx)("p", {
                  className: "text-[#178d19]/50 text-xs mt-2",
                  children: "😢 I know that feel, bro 😢",
                }),
              ],
            }),
          ],
        }),
      });
    }
    function E() {
      let e = (0, s.useRef)(null),
        { degenMode: a } = l(),
        r = (0, s.useRef)(a);
      return (
        (r.current = a),
        (0, s.useEffect)(() => {
          let t = e.current;
          if (!t) return;
          let s = t.querySelectorAll("[data-speed]"),
            a = !1,
            l = () => {
              a ||
                ((a = !0),
                requestAnimationFrame(() => {
                  let e = window.scrollY;
                  s.forEach((t) => {
                    let s =
                      parseFloat(t.dataset.speed || "0") * (r.current ? 2 : 1);
                    t.style.transform = `translateY(${e * s}px)`;
                  }),
                    (a = !1);
                }));
            };
          return (
            window.addEventListener("scroll", l, { passive: !0 }),
            () => window.removeEventListener("scroll", l)
          );
        }, []),
        (0, t.jsxs)("div", {
          ref: e,
          className: "fixed inset-0 pointer-events-none z-0 overflow-hidden",
          children: [
            (0, t.jsxs)("div", {
              "data-speed": "-0.05",
              className: "absolute inset-0",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[15%] left-[10%] w-32 h-32 border border-[#178d19]/10 rounded-full",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[60%] right-[15%] w-24 h-24 border border-[#178d19]/8 rotate-45",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              "data-speed": "-0.15",
              className: "absolute inset-0",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[30%] right-[20%] w-16 h-16 bg-[#178d19]/3 rounded-full",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[70%] left-[25%] w-20 h-20 border border-[#178d19]/5 rotate-12",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[45%] left-[60%] w-12 h-12 bg-[#178d19]/3 rounded-full",
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              "data-speed": "-0.3",
              className: "absolute inset-0",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[20%] left-[40%] w-8 h-8 bg-[#178d19]/5 rounded-full",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[55%] right-[35%] w-10 h-10 border border-[#178d19]/8 rotate-45 rounded-sm",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute top-[80%] left-[50%] w-6 h-6 bg-[#178d19]/4 rounded-full",
                }),
              ],
            }),
          ],
        })
      );
    }
    function S() {
      let e = (0, s.useRef)(null),
        a = (0, s.useRef)([]),
        r = (0, s.useRef)(0),
        { degenMode: n } = l(),
        i = (0, s.useRef)(n);
      return (
        (i.current = n),
        (0, s.useEffect)(() => {
          let t,
            s = e.current;
          if (!s || window.matchMedia("(pointer: coarse)").matches) return;
          let l = [];
          for (let e = 0; e < 30; e++) {
            let e = document.createElement("div");
            (e.className = "cursor-particle"),
              s.appendChild(e),
              l.push(e),
              a.current.push({ x: -100, y: -100 });
          }
          let n = (e) => {
              (a.current[r.current] = { x: e.clientX, y: e.clientY }),
                (r.current = (r.current + 1) % 30);
            },
            o = () => {
              let e = i.current,
                s = e ? 30 : 20;
              for (let t = 0; t < 30; t++) {
                let n = (r.current - t + 30) % 30,
                  i = a.current[(r.current - 1 - t + 30) % 30],
                  o = l[t];
                if (t >= s || n > s) {
                  o.style.opacity = "0";
                  continue;
                }
                let c = 1 - n / s;
                if (
                  ((o.style.opacity = String(0.8 * c)),
                  (o.style.transform = `translate(${i.x - 4}px, ${
                    i.y - 4
                  }px) scale(${c})`),
                  e)
                ) {
                  let e = (Date.now() / 10 + 20 * t) % 360;
                  (o.style.background = `hsl(${e}, 100%, 50%)`),
                    (o.style.boxShadow = `0 0 6px hsl(${e}, 100%, 50%), 0 0 12px hsl(${e}, 100%, 50%)`);
                } else (o.style.background = ""), (o.style.boxShadow = "");
              }
              t = requestAnimationFrame(o);
            };
          return (
            window.addEventListener("mousemove", n, { passive: !0 }),
            (t = requestAnimationFrame(o)),
            () => {
              window.removeEventListener("mousemove", n),
                cancelAnimationFrame(t),
                l.forEach((e) => e.remove());
            }
          );
        }, []),
        (0, t.jsx)("div", { ref: e })
      );
    }
    let M = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    function T() {
      let { setDegenMode: e } = l(),
        [a, r] = (0, s.useState)(!1),
        [n, i] = (0, s.useState)(!1),
        o = (0, s.useRef)(0);
      if (
        ((0, s.useEffect)(() => {
          let t = (t) => {
            t.key.toLowerCase() === M[o.current].toLowerCase()
              ? (o.current++,
                o.current === M.length &&
                  ((o.current = 0),
                  r(!0),
                  i(!0),
                  e(!0),
                  setTimeout(() => i(!1), 4e3),
                  setTimeout(() => r(!1), 3500)))
              : (o.current = 0);
          };
          return (
            window.addEventListener("keydown", t),
            () => window.removeEventListener("keydown", t)
          );
        }, [e]),
        !a && !n)
      )
        return null;
      let c = [
        "#178d19",
        "#ff0000",
        "#ffff00",
        "#00ffff",
        "#ff00ff",
        "#ff8000",
      ];
      return (0, t.jsxs)(t.Fragment, {
        children: [
          a &&
            (0, t.jsx)("div", {
              className: "fixed inset-0 pointer-events-none z-[9997]",
              children: Array.from({ length: 50 }).map((e, s) =>
                (0, t.jsx)(
                  "div",
                  {
                    className: "confetti-piece",
                    style: {
                      left: `${100 * Math.random()}vw`,
                      animationDelay: `${+Math.random()}s`,
                      animationDuration: `${2 + 2 * Math.random()}s`,
                      width: `${8 + 12 * Math.random()}px`,
                      height: `${8 + 12 * Math.random()}px`,
                      backgroundColor: c[s % c.length],
                      borderRadius: Math.random() > 0.5 ? "50%" : "0",
                    },
                  },
                  s
                )
              ),
            }),
          n &&
            (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none",
              children: (0, t.jsxs)("div", {
                className:
                  "secret-popup bg-black/95 border-4 border-[#178d19] p-8 sm:p-12 text-center max-w-md mx-4",
                children: [
                  (0, t.jsx)("p", {
                    className: "text-6xl mb-4",
                    children: "🤓",
                  }),
                  (0, t.jsx)("h3", {
                    className:
                      "font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#178d19] mb-4",
                    children: "CHAOS MODE",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-2xl sm:text-3xl text-white font-bold mb-2",
                    children: "UNLOCKED",
                  }),
                  (0, t.jsx)("p", {
                    className: "text-white/60 text-sm",
                    children:
                      "You found the secret code. Things are about to get weird.",
                  }),
                ],
              }),
            }),
        ],
      });
    }
    let O = [
      "I KNOW THAT FEEL",
      "IT'S OVER",
      "THIS IS FINE",
      "TFW NO GF",
      "WHY EVEN LIVE",
      "FEELS BAD MAN",
      "THAT FEEL WHEN...",
      "WE ARE ALL WOJAK",
      "TOUCH GRASS",
      "PAIN.",
      "COPE HARDER",
      "JUST BE YOURSELF BRO",
    ];
    function L() {
      let { degenMode: e } = l(),
        [a, r] = (0, s.useState)([]),
        n = (0, s.useRef)(0);
      return ((0, s.useEffect)(() => {
        if (!e) return;
        let t = null,
          s = 0,
          a = () => {
            let e = Date.now();
            e - s < 500 ||
              ((s = e),
              document.body.classList.add("screen-shake"),
              t && clearTimeout(t),
              (t = setTimeout(
                () => document.body.classList.remove("screen-shake"),
                500
              )));
          };
        return (
          window.addEventListener("scroll", a, { passive: !0 }),
          () => {
            window.removeEventListener("scroll", a),
              document.body.classList.remove("screen-shake"),
              t && clearTimeout(t);
          }
        );
      }, [e]),
      (0, s.useEffect)(() => {
        let t;
        if (!e) return void r([]);
        let s = () => {
          r((e) =>
            e.length >= 3
              ? e
              : [
                  ...e,
                  {
                    id: n.current++,
                    text: O[Math.floor(Math.random() * O.length)],
                    x: 10 + 70 * Math.random(),
                    y: 10 + 70 * Math.random(),
                  },
                ]
          ),
            (t = setTimeout(s, 3e3 + 2e3 * Math.random()));
        };
        return (
          (t = setTimeout(s, 3e3 + 2e3 * Math.random())), () => clearTimeout(t)
        );
      }, [e]),
      (0, s.useEffect)(() => {
        if (0 === a.length) return;
        let e = setTimeout(() => {
          r((e) => e.slice(1));
        }, 2500);
        return () => clearTimeout(e);
      }, [a]),
      e)
        ? (0, t.jsx)("div", {
            className: "fixed inset-0 pointer-events-none z-[9990]",
            children: a.map((e) =>
              (0, t.jsx)(
                "div",
                {
                  className:
                    "absolute meme-popup font-bold text-xl sm:text-2xl text-[#178d19] neon-text-subtle",
                  style: {
                    left: `${e.x}%`,
                    top: `${e.y}%`,
                    transform: "translate(-50%, -50%)",
                  },
                  children: e.text,
                },
                e.id
              )
            ),
          })
        : null;
    }
    function _() {
      let [e, a] = (0, s.useState)(!1),
        [r, l] = (0, s.useState)("idle"),
        [i, o] = (0, s.useState)(0),
        [c, d] = (0, s.useState)(10),
        [m, x] = (0, s.useState)(!1),
        u = (0, s.useRef)(null),
        h = (0, s.useCallback)(() => {
          o(0),
            d(10),
            l("ready"),
            setTimeout(() => {
              l("playing");
            }, 1e3);
        }, []);
      (0, s.useEffect)(() => {
        if ("playing" === r)
          return (
            (u.current = setInterval(() => {
              d((e) =>
                e <= 1 ? (clearInterval(u.current), l("results"), 0) : e - 1
              );
            }, 1e3)),
            () => {
              u.current && clearInterval(u.current);
            }
          );
      }, [r]);
      let p = (0, s.useCallback)(() => {
          "playing" === r &&
            (o((e) => e + 1), x(!0), setTimeout(() => x(!1), 100));
        }, [r]),
        f = (0, s.useCallback)(() => {
          a(!1), l("idle"), o(0), d(10), u.current && clearInterval(u.current);
        }, []);
      (0, s.useEffect)(() => {
        if (!e) return;
        document.body.style.overflow = "hidden";
        let t = (e) => {
          "Escape" === e.key && f();
        };
        return (
          window.addEventListener("keydown", t),
          () => {
            (document.body.style.overflow = ""),
              window.removeEventListener("keydown", t);
          }
        );
      }, [e, f]);
      let b =
        i >= 81
          ? {
              title: "Absolute Legend",
              face: "/images/faces/zoomer.webp",
              color: "text-purple-400",
            }
          : i >= 61
          ? {
              title: "True Wojak",
              face: "/images/faces/green-wojak.webp",
              color: "text-[#178d19]",
            }
          : i >= 41
          ? {
              title: "Based Clicker",
              face: "/images/faces/bloomer.webp",
              color: "text-yellow-400",
            }
          : i >= 20
          ? {
              title: "Average Fren",
              face: "/images/faces/npc.webp",
              color: "text-gray-400",
            }
          : {
              title: "Barely Trying",
              face: "/images/faces/pink.webp",
              color: "text-pink-400",
            };
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)("button", {
            onClick: () => a(!0),
            className:
              "fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#178d19] text-black rounded-full flex items-center justify-center fab-pulse hover:scale-110 transition-transform text-2xl font-bold",
            "aria-label": "Click game",
            children: "👉",
          }),
          e &&
            (0, t.jsxs)("div", {
              className:
                "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",
              children: [
                (0, t.jsx)("button", {
                  className:
                    "absolute top-20 right-4 sm:top-4 text-white/80 hover:text-[#178d19] text-4xl font-bold z-[60]",
                  onClick: f,
                  children: "×",
                }),
                (0, t.jsxs)("div", {
                  className: "text-center max-w-md w-full",
                  children: [
                    "idle" === r &&
                      (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, t.jsx)("h3", {
                            className:
                              "font-[family-name:var(--font-display)] text-3xl sm:text-4xl text-[#178d19] neon-text-subtle",
                            children: "CLICK CHALLENGE",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-white/60 text-lg",
                            children: "How fast can you click in 10 seconds?",
                          }),
                          (0, t.jsx)("button", {
                            onClick: h,
                            className: "btn-primary text-xl px-10 py-4",
                            children: "START",
                          }),
                        ],
                      }),
                    "ready" === r &&
                      (0, t.jsx)("div", {
                        className: "space-y-4",
                        children: (0, t.jsx)("p", {
                          className:
                            "text-white font-bold text-6xl animate-pulse",
                          children: "GET READY...",
                        }),
                      }),
                    "playing" === r &&
                      (0, t.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex justify-between items-center text-xl font-bold",
                            children: [
                              (0, t.jsxs)("span", {
                                className: "text-[#178d19]",
                                children: ["Clicks: ", i],
                              }),
                              (0, t.jsxs)("span", {
                                className: `${
                                  c <= 3
                                    ? "text-red-500 animate-pulse"
                                    : "text-white"
                                }`,
                                children: [c, "s"],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: `relative w-48 h-48 mx-auto cursor-pointer select-none ${
                              m ? "click-shrink" : ""
                            }`,
                            onPointerDown: p,
                            children: (0, t.jsx)(n.default, {
                              src: "/images/faces/green-wojak.webp",
                              alt: "Click me!",
                              fill: !0,
                              className: "object-contain pointer-events-none",
                              draggable: !1,
                            }),
                          }),
                          (0, t.jsx)("p", {
                            className: "text-white/40 text-sm",
                            children: "TAP THE WOJAK!",
                          }),
                          (0, t.jsx)("button", {
                            onClick: f,
                            className: "btn-secondary text-sm mt-4",
                            children: "Close",
                          }),
                        ],
                      }),
                    "results" === r &&
                      (0, t.jsxs)("div", {
                        className: "space-y-6 bubble-pop-in",
                        children: [
                          (0, t.jsx)("div", {
                            className: "relative w-32 h-32 mx-auto",
                            children: (0, t.jsx)(n.default, {
                              src: b.face,
                              alt: b.title,
                              fill: !0,
                              className: "object-contain",
                            }),
                          }),
                          (0, t.jsx)("p", {
                            className: `font-[family-name:var(--font-display)] text-3xl sm:text-4xl ${b.color}`,
                            children: b.title,
                          }),
                          (0, t.jsxs)("p", {
                            className: "text-white text-5xl font-bold",
                            children: [
                              i,
                              " ",
                              (0, t.jsx)("span", {
                                className: "text-lg text-white/60",
                                children: "clicks",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex gap-4 justify-center",
                            children: [
                              (0, t.jsx)("button", {
                                onClick: h,
                                className: "btn-primary text-sm",
                                children: "Try Again",
                              }),
                              (0, t.jsx)("button", {
                                onClick: f,
                                className: "btn-secondary text-sm",
                                children: "Close",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
        ],
      });
    }
    function W() {
      let { degenMode: e } = l();
      return (0, t.jsxs)("main", {
        className: `min-h-screen bg-[#0a0a0a] relative noise-overlay ${
          e ? "degen-mode" : ""
        }`,
        children: [
          (0, t.jsx)(E, {}),
          (0, t.jsx)(S, {}),
          (0, t.jsx)(T, {}),
          (0, t.jsx)(L, {}),
          (0, t.jsx)(_, {}),
          (0, t.jsx)(c, {}),
          (0, t.jsx)(m, {}),
          (0, t.jsx)(u, {}),
          (0, t.jsx)(b, {}),
          (0, t.jsx)("div", { className: "section-divider" }),
          (0, t.jsx)(w, {}),
          (0, t.jsx)(v, {}),
          (0, t.jsx)("div", { className: "section-divider" }),
          (0, t.jsx)(N, {}),
          (0, t.jsx)(k, {}),
          (0, t.jsx)(C, {}),
        ],
      });
    }
    function A() {
      return (0, t.jsx)(r, { children: (0, t.jsx)(W, {}) });
    }
    e.s(["default", () => A], 31713);
  },
]);
