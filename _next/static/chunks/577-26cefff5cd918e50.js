"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [577],
  {
    118: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return y;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let r = n(3295),
        o = n(5228),
        i = n(2104),
        a = r._(n(357)),
        l = o._(n(4612)),
        u = n(9877),
        c = n(7125),
        s = n(4025),
        f = new Map(),
        d = new Set(),
        p = (e) => {
          if (a.default.preinit) {
            e.forEach((e) => {
              a.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        h = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: o = null,
              dangerouslySetInnerHTML: i,
              children: a = "",
              strategy: l = "afterInteractive",
              onError: u,
              stylesheets: s,
            } = e,
            h = n || t;
          if (h && d.has(h)) return;
          if (f.has(t)) {
            d.add(h), f.get(t).then(r, u);
            return;
          }
          let m = () => {
              o && o(), d.add(h);
            },
            g = document.createElement("script"),
            v = new Promise((e, t) => {
              g.addEventListener("load", function (t) {
                e(), r && r.call(this, t), m();
              }),
                g.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          i
            ? ((g.innerHTML = i.__html || ""), m())
            : a
            ? ((g.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              m())
            : t && ((g.src = t), f.set(t, v)),
            (0, c.setAttributesFromProps)(g, e),
            "worker" === l && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", l),
            s && p(s),
            document.body.appendChild(g);
        };
      function m(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, s.requestIdleCallback)(() => h(e));
            })
          : h(e);
      }
      function g(e) {
        e.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            d.add(t);
          });
      }
      function v(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: o = null,
            strategy: c = "afterInteractive",
            onError: f,
            stylesheets: p,
            ...m
          } = e,
          {
            updateScripts: g,
            scripts: v,
            getIsSsr: y,
            appDir: w,
            nonce: b,
          } = (0, l.useContext)(u.HeadManagerContext),
          x = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let e = t || n;
          x.current || (o && e && d.has(e) && o(), (x.current = !0));
        }, [o, t, n]);
        let E = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            !E.current &&
              ("afterInteractive" === c
                ? h(e)
                : "lazyOnload" === c &&
                  ("complete" === document.readyState
                    ? (0, s.requestIdleCallback)(() => h(e))
                    : window.addEventListener("load", () => {
                        (0, s.requestIdleCallback)(() => h(e));
                      })),
              (E.current = !0));
          }, [e, c]),
          ("beforeInteractive" === c || "worker" === c) &&
            (g
              ? ((v[c] = (v[c] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: o, onError: f, ...m },
                ])),
                g(v))
              : y && y()
              ? d.add(t || n)
              : y && !y() && h(e)),
          w)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                a.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === c)
          )
            return n
              ? (a.default.preload(
                  n,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: b,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: b, crossOrigin: m.crossOrigin }
                ),
                (0, i.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...m, id: t }]) +
                      ")",
                  },
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, i.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === c &&
            n &&
            a.default.preload(
              n,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: b,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: b, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(v, "__nextScript", { value: !0 });
      let y = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7125: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        r = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function o(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function i(e, t) {
        for (let [i, a] of Object.entries(t)) {
          if (!t.hasOwnProperty(i) || r.includes(i) || void 0 === a) continue;
          let l = n[i] || i.toLowerCase();
          "SCRIPT" === e.tagName && o(l)
            ? (e[l] = !!a)
            : e.setAttribute(l, String(a)),
            (!1 === a ||
              ("SCRIPT" === e.tagName && o(l) && (!a || "false" === a))) &&
              (e.setAttribute(l, ""), e.removeAttribute(l));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6395: (e, t, n) => {
      n.d(t, { Mz: () => np, UC: () => nm, bL: () => nd, l9: () => nh });
      var r,
        o,
        i,
        a = n(4612),
        l = n(1277),
        u = n(1864),
        c = n(9894),
        s = n(8932),
        f = n(8457),
        d = n(2104),
        p = "dismissableLayer.update",
        h = a.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        m = a.forwardRef((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: r,
              onPointerDownOutside: i,
              onFocusOutside: c,
              onInteractOutside: m,
              onDismiss: y,
              ...w
            } = e,
            b = a.useContext(h),
            [x, E] = a.useState(null),
            C = x?.ownerDocument ?? globalThis?.document,
            [, S] = a.useState({}),
            R = (0, u.s)(t, (e) => E(e)),
            A = Array.from(b.layers),
            [P] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1),
            L = A.indexOf(P),
            O = x ? A.indexOf(x) : -1,
            T = b.layersWithOutsidePointerEventsDisabled.size > 0,
            k = O >= L,
            M = (function (e, t = globalThis?.document) {
              let n = (0, f.c)(e),
                r = a.useRef(!1),
                o = a.useRef(() => {});
              return (
                a.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = function () {
                            v("dismissableLayer.pointerDownOutside", n, i, {
                              discrete: !0,
                            });
                          },
                          i = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = r),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : r();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...b.branches].some((e) => e.contains(t));
              !k || n || (i?.(e), m?.(e), e.defaultPrevented || y?.());
            }, C),
            N = (function (e, t = globalThis?.document) {
              let n = (0, f.c)(e),
                r = a.useRef(!1);
              return (
                a.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...b.branches].some((e) => e.contains(t)) ||
                (c?.(e), m?.(e), e.defaultPrevented || y?.());
            }, C);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, f.c)(e);
              a.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              O !== b.layers.size - 1 ||
                (r?.(e), !e.defaultPrevented && y && (e.preventDefault(), y()));
            }, C),
            a.useEffect(() => {
              if (x)
                return (
                  n &&
                    (0 === b.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = C.body.style.pointerEvents),
                      (C.body.style.pointerEvents = "none")),
                    b.layersWithOutsidePointerEventsDisabled.add(x)),
                  b.layers.add(x),
                  g(),
                  () => {
                    n &&
                      1 === b.layersWithOutsidePointerEventsDisabled.size &&
                      (C.body.style.pointerEvents = o);
                  }
                );
            }, [x, C, n, b]),
            a.useEffect(
              () => () => {
                x &&
                  (b.layers.delete(x),
                  b.layersWithOutsidePointerEventsDisabled.delete(x),
                  g());
              },
              [x, b]
            ),
            a.useEffect(() => {
              let e = () => S({});
              return (
                document.addEventListener(p, e),
                () => document.removeEventListener(p, e)
              );
            }, []),
            (0, d.jsx)(s.sG.div, {
              ...w,
              ref: R,
              style: {
                pointerEvents: T ? (k ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, l.m)(e.onFocusCapture, N.onFocusCapture),
              onBlurCapture: (0, l.m)(e.onBlurCapture, N.onBlurCapture),
              onPointerDownCapture: (0, l.m)(
                e.onPointerDownCapture,
                M.onPointerDownCapture
              ),
            })
          );
        });
      function g() {
        let e = new CustomEvent(p);
        document.dispatchEvent(e);
      }
      function v(e, t, n, { discrete: r }) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && o.addEventListener(e, t, { once: !0 }),
          r ? (0, s.hO)(o, i) : o.dispatchEvent(i);
      }
      (m.displayName = "DismissableLayer"),
        (a.forwardRef((e, t) => {
          let n = a.useContext(h),
            r = a.useRef(null),
            o = (0, u.s)(t, r);
          return (
            a.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, d.jsx)(s.sG.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var y = 0;
      function w() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var b = "focusScope.autoFocusOnMount",
        x = "focusScope.autoFocusOnUnmount",
        E = { bubbles: !1, cancelable: !0 },
        C = a.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...l
            } = e,
            [c, p] = a.useState(null),
            h = (0, f.c)(o),
            m = (0, f.c)(i),
            g = a.useRef(null),
            v = (0, u.s)(t, (e) => p(e)),
            y = a.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          a.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (y.paused || !c) return;
                  let t = e.target;
                  c.contains(t)
                    ? (g.current = t)
                    : A(g.current, { select: !0 });
                },
                t = function (e) {
                  if (y.paused || !c) return;
                  let t = e.relatedTarget;
                  null === t || c.contains(t) || A(g.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && A(c);
              });
              return (
                c && n.observe(c, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, c, y.paused]),
            a.useEffect(() => {
              if (c) {
                P.add(y);
                let e = document.activeElement;
                if (!c.contains(e)) {
                  let t = new CustomEvent(b, E);
                  c.addEventListener(b, h),
                    c.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, { select: t = !1 } = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if (
                            (A(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        S(c).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && A(c));
                }
                return () => {
                  c.removeEventListener(b, h),
                    setTimeout(() => {
                      let t = new CustomEvent(x, E);
                      c.addEventListener(x, m),
                        c.dispatchEvent(t),
                        t.defaultPrevented ||
                          A(e ?? document.body, { select: !0 }),
                        c.removeEventListener(x, m),
                        P.remove(y);
                    }, 0);
                };
              }
            }, [c, h, m, y]);
          let w = a.useCallback(
            (e) => {
              if ((!n && !r) || y.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = S(e);
                    return [R(t, e), R(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && A(i, { select: !0 }))
                    : (e.preventDefault(), n && A(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, y.paused]
          );
          return (0, d.jsx)(s.sG.div, {
            tabIndex: -1,
            ...l,
            ref: v,
            onKeyDown: w,
          });
        });
      function S(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function R(e, t) {
        for (let n of e)
          if (
            !(function (e, { upTo: t }) {
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function A(e, { select: t = !1 } = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      C.displayName = "FocusScope";
      var P = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            t !== n && n?.pause(), (e = L(e, t)).unshift(t);
          },
          remove(t) {
            (e = L(e, t)), e[0]?.resume();
          },
        };
      })();
      function L(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var O = n(3201);
      let T = ["top", "right", "bottom", "left"],
        k = Math.min,
        M = Math.max,
        N = Math.round,
        j = Math.floor,
        D = (e) => ({ x: e, y: e }),
        _ = { left: "right", right: "left", bottom: "top", top: "bottom" },
        F = { start: "end", end: "start" };
      function I(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function W(e) {
        return e.split("-")[0];
      }
      function H(e) {
        return e.split("-")[1];
      }
      function B(e) {
        return "x" === e ? "y" : "x";
      }
      function q(e) {
        return "y" === e ? "height" : "width";
      }
      function $(e) {
        return ["top", "bottom"].includes(W(e)) ? "y" : "x";
      }
      function z(e) {
        return e.replace(/start|end/g, (e) => F[e]);
      }
      function U(e) {
        return e.replace(/left|right|bottom|top/g, (e) => _[e]);
      }
      function X(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function Y(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function K(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          a = $(t),
          l = B($(t)),
          u = q(l),
          c = W(t),
          s = "y" === a,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (c) {
          case "top":
            r = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: f, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: d };
            break;
          case "left":
            r = { x: o.x - i.width, y: d };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (H(t)) {
          case "start":
            r[l] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[l] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let V = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: a,
          } = n,
          l = i.filter(Boolean),
          u = await (null == a.isRTL ? void 0 : a.isRTL(t)),
          c = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: f } = K(c, r, u),
          d = r,
          p = {},
          h = 0;
        for (let n = 0; n < l.length; n++) {
          let { name: i, fn: m } = l[n],
            {
              x: g,
              y: v,
              data: y,
              reset: w,
            } = await m({
              x: s,
              y: f,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: a,
              elements: { reference: e, floating: t },
            });
          (s = null != g ? g : s),
            (f = null != v ? v : f),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              h <= 50 &&
              (h++,
              "object" == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await a.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: f } = K(c, d, u))),
              (n = -1));
        }
        return { x: s, y: f, placement: d, strategy: o, middlewareData: p };
      };
      async function G(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: a, elements: l, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: f = "floating",
            altBoundary: d = !1,
            padding: p = 0,
          } = I(t, e),
          h = X(p),
          m = l[d ? ("floating" === f ? "reference" : "floating") : f],
          g = Y(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(m))) ||
                n
                  ? m
                  : m.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(l.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          v =
            "floating" === f
              ? {
                  x: r,
                  y: o,
                  width: a.floating.width,
                  height: a.floating.height,
                }
              : a.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(l.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = Y(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: l,
                  rect: v,
                  offsetParent: y,
                  strategy: u,
                })
              : v
          );
        return {
          top: (g.top - b.top + h.top) / w.y,
          bottom: (b.bottom - g.bottom + h.bottom) / w.y,
          left: (g.left - b.left + h.left) / w.x,
          right: (b.right - g.right + h.right) / w.x,
        };
      }
      function Z(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function J(e) {
        return T.some((t) => e[t] >= 0);
      }
      async function Q(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          a = W(n),
          l = H(n),
          u = "y" === $(n),
          c = ["left", "top"].includes(a) ? -1 : 1,
          s = i && u ? -1 : 1,
          f = I(t, e),
          {
            mainAxis: d,
            crossAxis: p,
            alignmentAxis: h,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis,
              };
        return (
          l && "number" == typeof h && (p = "end" === l ? -1 * h : h),
          u ? { x: p * s, y: d * c } : { x: d * c, y: p * s }
        );
      }
      function ee() {
        return "undefined" != typeof window;
      }
      function et(e) {
        return eo(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function en(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function er(e) {
        var t;
        return null ==
          (t = (eo(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function eo(e) {
        return !!ee() && (e instanceof Node || e instanceof en(e).Node);
      }
      function ei(e) {
        return !!ee() && (e instanceof Element || e instanceof en(e).Element);
      }
      function ea(e) {
        return (
          !!ee() && (e instanceof HTMLElement || e instanceof en(e).HTMLElement)
        );
      }
      function el(e) {
        return (
          !!ee() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof en(e).ShadowRoot)
        );
      }
      function eu(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = ep(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function ec(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function es(e) {
        let t = ef(),
          n = ei(e) ? ep(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e]
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function ef() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function ed(e) {
        return ["html", "body", "#document"].includes(et(e));
      }
      function ep(e) {
        return en(e).getComputedStyle(e);
      }
      function eh(e) {
        return ei(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function em(e) {
        if ("html" === et(e)) return e;
        let t = e.assignedSlot || e.parentNode || (el(e) && e.host) || er(e);
        return el(t) ? t.host : t;
      }
      function eg(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = em(t);
            return ed(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : ea(n) && eu(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = en(o);
        if (i) {
          let e = ev(a);
          return t.concat(
            a,
            a.visualViewport || [],
            eu(o) ? o : [],
            e && n ? eg(e) : []
          );
        }
        return t.concat(o, eg(o, [], n));
      }
      function ev(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function ey(e) {
        let t = ep(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = ea(e),
          i = o ? e.offsetWidth : n,
          a = o ? e.offsetHeight : r,
          l = N(n) !== i || N(r) !== a;
        return l && ((n = i), (r = a)), { width: n, height: r, $: l };
      }
      function ew(e) {
        return ei(e) ? e : e.contextElement;
      }
      function eb(e) {
        let t = ew(e);
        if (!ea(t)) return D(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = ey(t),
          a = (i ? N(n.width) : n.width) / r,
          l = (i ? N(n.height) : n.height) / o;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (l && Number.isFinite(l)) || (l = 1),
          { x: a, y: l }
        );
      }
      let ex = D(0);
      function eE(e) {
        let t = en(e);
        return ef() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : ex;
      }
      function eC(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          a = ew(e),
          l = D(1);
        t && (r ? ei(r) && (l = eb(r)) : (l = eb(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === en(a)) && o)
            ? eE(a)
            : D(0),
          c = (i.left + u.x) / l.x,
          s = (i.top + u.y) / l.y,
          f = i.width / l.x,
          d = i.height / l.y;
        if (a) {
          let e = en(a),
            t = r && ei(r) ? en(r) : r,
            n = e,
            o = ev(n);
          for (; o && r && t !== n; ) {
            let e = eb(o),
              t = o.getBoundingClientRect(),
              r = ep(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (f *= e.x),
              (d *= e.y),
              (c += i),
              (s += a),
              (o = ev((n = en(o))));
          }
        }
        return Y({ width: f, height: d, x: c, y: s });
      }
      function eS(e, t) {
        let n = eh(e).scrollLeft;
        return t ? t.left + n : eC(er(e)).left + n;
      }
      function eR(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : eS(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      function eA(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = en(e),
              r = er(e),
              o = n.visualViewport,
              i = r.clientWidth,
              a = r.clientHeight,
              l = 0,
              u = 0;
            if (o) {
              (i = o.width), (a = o.height);
              let e = ef();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: a, x: l, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = er(e),
              n = eh(e),
              r = e.ownerDocument.body,
              o = M(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = M(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -n.scrollLeft + eS(e),
              l = -n.scrollTop;
            return (
              "rtl" === ep(r).direction &&
                (a += M(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: l }
            );
          })(er(e));
        else if (ei(t))
          r = (function (e, t) {
            let n = eC(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = ea(e) ? eb(e) : D(1),
              a = e.clientWidth * i.x;
            return {
              width: a,
              height: e.clientHeight * i.y,
              x: o * i.x,
              y: r * i.y,
            };
          })(t, n);
        else {
          let n = eE(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return Y(r);
      }
      function eP(e) {
        return "static" === ep(e).position;
      }
      function eL(e, t) {
        if (!ea(e) || "fixed" === ep(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return er(e) === n && (n = n.ownerDocument.body), n;
      }
      function eO(e, t) {
        let n = en(e);
        if (ec(e)) return n;
        if (!ea(e)) {
          let t = em(e);
          for (; t && !ed(t); ) {
            if (ei(t) && !eP(t)) return t;
            t = em(t);
          }
          return n;
        }
        let r = eL(e, t);
        for (; r && ["table", "td", "th"].includes(et(r)) && eP(r); )
          r = eL(r, t);
        return r && ed(r) && eP(r) && !es(r)
          ? n
          : r ||
              (function (e) {
                let t = em(e);
                for (; ea(t) && !ed(t); ) {
                  if (es(t)) return t;
                  if (ec(t)) break;
                  t = em(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eT = async function (e) {
          let t = this.getOffsetParent || eO,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = ea(t),
                o = er(t),
                i = "fixed" === n,
                a = eC(e, !0, i, t),
                l = { scrollLeft: 0, scrollTop: 0 },
                u = D(0);
              if (r || (!r && !i)) {
                if ((("body" !== et(t) || eu(o)) && (l = eh(t)), r)) {
                  let e = eC(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = eS(o));
              }
              let c = !o || r || i ? D(0) : eR(o, l);
              return {
                x: a.left + l.scrollLeft - u.x - c.x,
                y: a.top + l.scrollTop - u.y - c.y,
                width: a.width,
                height: a.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ek = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              a = er(r),
              l = !!t && ec(t.floating);
            if (r === a || (l && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = D(1),
              s = D(0),
              f = ea(r);
            if (
              (f || (!f && !i)) &&
              (("body" !== et(r) || eu(a)) && (u = eh(r)), ea(r))
            ) {
              let e = eC(r);
              (c = eb(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop);
            }
            let d = !a || f || i ? D(0) : eR(a, u, !0);
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x + d.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y + d.y,
            };
          },
          getDocumentElement: er,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? ec(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eg(e, [], !1).filter(
                            (e) => ei(e) && "body" !== et(e)
                          ),
                          o = null,
                          i = "fixed" === ep(e).position,
                          a = i ? em(e) : e;
                        for (; ei(a) && !ed(a); ) {
                          let t = ep(a),
                            n = es(a);
                          n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (eu(a) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = em(t);
                                      return (
                                        !(r === n || !ei(r) || ed(r)) &&
                                        ("fixed" === ep(r).position || e(r, n))
                                      );
                                    })(e, a))
                            )
                              ? (r = r.filter((e) => e !== a))
                              : (o = t),
                            (a = em(a));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              a = i[0],
              l = i.reduce((e, n) => {
                let r = eA(t, n, o);
                return (
                  (e.top = M(r.top, e.top)),
                  (e.right = k(r.right, e.right)),
                  (e.bottom = k(r.bottom, e.bottom)),
                  (e.left = M(r.left, e.left)),
                  e
                );
              }, eA(t, a, o));
            return {
              width: l.right - l.left,
              height: l.bottom - l.top,
              x: l.left,
              y: l.top,
            };
          },
          getOffsetParent: eO,
          getElementRects: eT,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = ey(e);
            return { width: t, height: n };
          },
          getScale: eb,
          isElement: ei,
          isRTL: function (e) {
            return "rtl" === ep(e).direction;
          },
        };
      function eM(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let eN = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: a,
                elements: l,
                middlewareData: u,
              } = t,
              { element: c, padding: s = 0 } = I(e, t) || {};
            if (null == c) return {};
            let f = X(s),
              d = { x: n, y: r },
              p = B($(o)),
              h = q(p),
              m = await a.getDimensions(c),
              g = "y" === p,
              v = g ? "clientHeight" : "clientWidth",
              y = i.reference[h] + i.reference[p] - d[p] - i.floating[h],
              w = d[p] - i.reference[p],
              b = await (null == a.getOffsetParent
                ? void 0
                : a.getOffsetParent(c)),
              x = b ? b[v] : 0;
            (x && (await (null == a.isElement ? void 0 : a.isElement(b)))) ||
              (x = l.floating[v] || i.floating[h]);
            let E = x / 2 - m[h] / 2 - 1,
              C = k(f[g ? "top" : "left"], E),
              S = k(f[g ? "bottom" : "right"], E),
              R = x - m[h] - S,
              A = x / 2 - m[h] / 2 + (y / 2 - w / 2),
              P = M(C, k(A, R)),
              L =
                !u.arrow &&
                null != H(o) &&
                A !== P &&
                i.reference[h] / 2 - (A < C ? C : S) - m[h] / 2 < 0,
              O = L ? (A < C ? A - C : A - R) : 0;
            return {
              [p]: d[p] + O,
              data: {
                [p]: P,
                centerOffset: A - P - O,
                ...(L && { alignmentOffset: O }),
              },
              reset: L,
            };
          },
        }),
        ej = (e, t, n) => {
          let r = new Map(),
            o = { platform: ek, ...n },
            i = { ...o.platform, _c: r };
          return V(e, t, { ...o, platform: i });
        };
      var eD = n(357),
        e_ = "undefined" != typeof document ? a.useLayoutEffect : a.useEffect;
      function eF(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eF(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eF(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eI(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eW(e, t) {
        let n = eI(e);
        return Math.round(t * n) / n;
      }
      function eH(e) {
        let t = a.useRef(e);
        return (
          e_(() => {
            t.current = e;
          }),
          t
        );
      }
      let eB = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? eN({ element: n.current, padding: r }).fn(t)
                : {}
              : n
              ? eN({ element: n, padding: r }).fn(t)
              : {};
          },
        }),
        eq = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: i, placement: a, middlewareData: l } = t,
                    u = await Q(t, e);
                  return a ===
                    (null == (n = l.offset) ? void 0 : n.placement) &&
                    null != (r = l.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + u.x, y: i + u.y, data: { ...u, placement: a } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        e$ = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: i = !0,
                      crossAxis: a = !1,
                      limiter: l = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...u
                    } = I(e, t),
                    c = { x: n, y: r },
                    s = await G(t, u),
                    f = $(W(o)),
                    d = B(f),
                    p = c[d],
                    h = c[f];
                  if (i) {
                    let e = "y" === d ? "top" : "left",
                      t = "y" === d ? "bottom" : "right",
                      n = p + s[e],
                      r = p - s[t];
                    p = M(n, k(p, r));
                  }
                  if (a) {
                    let e = "y" === f ? "top" : "left",
                      t = "y" === f ? "bottom" : "right",
                      n = h + s[e],
                      r = h - s[t];
                    h = M(n, k(h, r));
                  }
                  let m = l.fn({ ...t, [d]: p, [f]: h });
                  return {
                    ...m,
                    data: {
                      x: m.x - n,
                      y: m.y - r,
                      enabled: { [d]: i, [f]: a },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ez = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      middlewareData: a,
                    } = t,
                    {
                      offset: l = 0,
                      mainAxis: u = !0,
                      crossAxis: c = !0,
                    } = I(e, t),
                    s = { x: n, y: r },
                    f = $(o),
                    d = B(f),
                    p = s[d],
                    h = s[f],
                    m = I(l, t),
                    g =
                      "number" == typeof m
                        ? { mainAxis: m, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...m };
                  if (u) {
                    let e = "y" === d ? "height" : "width",
                      t = i.reference[d] - i.floating[e] + g.mainAxis,
                      n = i.reference[d] + i.reference[e] - g.mainAxis;
                    p < t ? (p = t) : p > n && (p = n);
                  }
                  if (c) {
                    var v, y;
                    let e = "y" === d ? "width" : "height",
                      t = ["top", "left"].includes(W(o)),
                      n =
                        i.reference[f] -
                        i.floating[e] +
                        ((t && (null == (v = a.offset) ? void 0 : v[f])) || 0) +
                        (t ? 0 : g.crossAxis),
                      r =
                        i.reference[f] +
                        i.reference[e] +
                        (t
                          ? 0
                          : (null == (y = a.offset) ? void 0 : y[f]) || 0) -
                        (t ? g.crossAxis : 0);
                    h < n ? (h = n) : h > r && (h = r);
                  }
                  return { [d]: p, [f]: h };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eU = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r, o, i, a;
                  let {
                      placement: l,
                      middlewareData: u,
                      rects: c,
                      initialPlacement: s,
                      platform: f,
                      elements: d,
                    } = t,
                    {
                      mainAxis: p = !0,
                      crossAxis: h = !0,
                      fallbackPlacements: m,
                      fallbackStrategy: g = "bestFit",
                      fallbackAxisSideDirection: v = "none",
                      flipAlignment: y = !0,
                      ...w
                    } = I(e, t);
                  if (null != (n = u.arrow) && n.alignmentOffset) return {};
                  let b = W(l),
                    x = $(s),
                    E = W(s) === s,
                    C = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                    S =
                      m ||
                      (E || !y
                        ? [U(s)]
                        : (function (e) {
                            let t = U(e);
                            return [z(e), t, z(t)];
                          })(s)),
                    R = "none" !== v;
                  !m &&
                    R &&
                    S.push(
                      ...(function (e, t, n, r) {
                        let o = H(e),
                          i = (function (e, t, n) {
                            let r = ["left", "right"],
                              o = ["right", "left"];
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                              case "left":
                              case "right":
                                return t
                                  ? ["top", "bottom"]
                                  : ["bottom", "top"];
                              default:
                                return [];
                            }
                          })(W(e), "start" === n, r);
                        return (
                          o &&
                            ((i = i.map((e) => e + "-" + o)),
                            t && (i = i.concat(i.map(z)))),
                          i
                        );
                      })(s, y, v, C)
                    );
                  let A = [s, ...S],
                    P = await G(t, w),
                    L = [],
                    O = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                  if ((p && L.push(P[b]), h)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = H(e),
                        o = B($(e)),
                        i = q(o),
                        a =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                            ? "bottom"
                            : "top";
                      return (
                        t.reference[i] > t.floating[i] && (a = U(a)), [a, U(a)]
                      );
                    })(l, c, C);
                    L.push(P[e[0]], P[e[1]]);
                  }
                  if (
                    ((O = [...O, { placement: l, overflows: L }]),
                    !L.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                      t = A[e];
                    if (t)
                      return {
                        data: { index: e, overflows: O },
                        reset: { placement: t },
                      };
                    let n =
                      null ==
                      (i = O.filter((e) => e.overflows[0] <= 0).sort(
                        (e, t) => e.overflows[1] - t.overflows[1]
                      )[0])
                        ? void 0
                        : i.placement;
                    if (!n)
                      switch (g) {
                        case "bestFit": {
                          let e =
                            null ==
                            (a = O.filter((e) => {
                              if (R) {
                                let t = $(e.placement);
                                return t === x || "y" === t;
                              }
                              return !0;
                            })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : a[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = s;
                      }
                    if (l !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eX = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var n, r;
                  let o, i;
                  let { placement: a, rects: l, platform: u, elements: c } = t,
                    { apply: s = () => {}, ...f } = I(e, t),
                    d = await G(t, f),
                    p = W(a),
                    h = H(a),
                    m = "y" === $(a),
                    { width: g, height: v } = l.floating;
                  "top" === p || "bottom" === p
                    ? ((o = p),
                      (i =
                        h ===
                        ((await (null == u.isRTL
                          ? void 0
                          : u.isRTL(c.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((i = p), (o = "end" === h ? "top" : "bottom"));
                  let y = v - d.top - d.bottom,
                    w = g - d.left - d.right,
                    b = k(v - d[o], y),
                    x = k(g - d[i], w),
                    E = !t.middlewareData.shift,
                    C = b,
                    S = x;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (S = w),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (C = y),
                    E && !h)
                  ) {
                    let e = M(d.left, 0),
                      t = M(d.right, 0),
                      n = M(d.top, 0),
                      r = M(d.bottom, 0);
                    m
                      ? (S =
                          g -
                          2 * (0 !== e || 0 !== t ? e + t : M(d.left, d.right)))
                      : (C =
                          v -
                          2 *
                            (0 !== n || 0 !== r ? n + r : M(d.top, d.bottom)));
                  }
                  await s({ ...t, availableWidth: S, availableHeight: C });
                  let R = await u.getDimensions(c.floating);
                  return g !== R.width || v !== R.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eY = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = I(e, t);
                  switch (r) {
                    case "referenceHidden": {
                      let e = Z(
                        await G(t, { ...o, elementContext: "reference" }),
                        n.reference
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: J(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = Z(
                        await G(t, { ...o, altBoundary: !0 }),
                        n.floating
                      );
                      return { data: { escapedOffsets: e, escaped: J(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eK = (e, t) => ({ ...eB(e), options: [e, t] });
      var eV = a.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: o = 5, ...i } = e;
        return (0, d.jsx)(s.sG.svg, {
          ...i,
          ref: t,
          width: r,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : (0, d.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      eV.displayName = "Arrow";
      var eG = n(2969),
        eZ = n(3957),
        eJ = "Popper",
        [eQ, e0] = (0, c.A)(eJ),
        [e1, e2] = eQ(eJ),
        e5 = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = a.useState(null);
          return (0, d.jsx)(e1, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n,
          });
        };
      e5.displayName = eJ;
      var e4 = "PopperAnchor",
        e3 = a.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            i = e2(e4, n),
            l = a.useRef(null),
            c = (0, u.s)(t, l);
          return (
            a.useEffect(() => {
              i.onAnchorChange(r?.current || l.current);
            }),
            r ? null : (0, d.jsx)(s.sG.div, { ...o, ref: c })
          );
        });
      e3.displayName = e4;
      var e7 = "PopperContent",
        [e9, e6] = eQ(e7),
        e8 = a.forwardRef((e, t) => {
          let {
              __scopePopper: n,
              side: r = "bottom",
              sideOffset: o = 0,
              align: i = "center",
              alignOffset: l = 0,
              arrowPadding: c = 0,
              avoidCollisions: p = !0,
              collisionBoundary: h = [],
              collisionPadding: m = 0,
              sticky: g = "partial",
              hideWhenDetached: v = !1,
              updatePositionStrategy: y = "optimized",
              onPlaced: w,
              ...b
            } = e,
            x = e2(e7, n),
            [E, C] = a.useState(null),
            S = (0, u.s)(t, (e) => C(e)),
            [R, A] = a.useState(null),
            P = (0, eZ.X)(R),
            L = P?.width ?? 0,
            O = P?.height ?? 0,
            T =
              "number" == typeof m
                ? m
                : { top: 0, right: 0, bottom: 0, left: 0, ...m },
            N = Array.isArray(h) ? h : [h],
            D = N.length > 0,
            _ = { padding: T, boundary: N.filter(tr), altBoundary: D },
            {
              refs: F,
              floatingStyles: I,
              placement: W,
              isPositioned: H,
              middlewareData: B,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: i, floating: l } = {},
                  transform: u = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [f, d] = a.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = a.useState(r);
              eF(p, r) || h(r);
              let [m, g] = a.useState(null),
                [v, y] = a.useState(null),
                w = a.useCallback((e) => {
                  e !== C.current && ((C.current = e), g(e));
                }, []),
                b = a.useCallback((e) => {
                  e !== S.current && ((S.current = e), y(e));
                }, []),
                x = i || m,
                E = l || v,
                C = a.useRef(null),
                S = a.useRef(null),
                R = a.useRef(f),
                A = null != c,
                P = eH(c),
                L = eH(o),
                O = eH(s),
                T = a.useCallback(() => {
                  if (!C.current || !S.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  L.current && (e.platform = L.current),
                    ej(C.current, S.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== O.current };
                      k.current &&
                        !eF(R.current, t) &&
                        ((R.current = t),
                        eD.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, L, O]);
              e_(() => {
                !1 === s &&
                  R.current.isPositioned &&
                  ((R.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let k = a.useRef(!1);
              e_(
                () => (
                  (k.current = !0),
                  () => {
                    k.current = !1;
                  }
                ),
                []
              ),
                e_(() => {
                  if ((x && (C.current = x), E && (S.current = E), x && E)) {
                    if (P.current) return P.current(x, E, T);
                    T();
                  }
                }, [x, E, T, P, A]);
              let M = a.useMemo(
                  () => ({
                    reference: C,
                    floating: S,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b]
                ),
                N = a.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                j = a.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!N.floating) return e;
                  let t = eW(N.floating, f.x),
                    r = eW(N.floating, f.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eI(N.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, N.floating, f.x, f.y]);
              return a.useMemo(
                () => ({
                  ...f,
                  update: T,
                  refs: M,
                  elements: N,
                  floatingStyles: j,
                }),
                [f, T, M, N, j]
              );
            })({
              strategy: "fixed",
              placement: r + ("center" !== i ? "-" + i : ""),
              whileElementsMounted: (...e) =>
                (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: a = !0,
                      elementResize: l = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    s = ew(e),
                    f = i || a ? [...(s ? eg(s) : []), ...eg(t)] : [];
                  f.forEach((e) => {
                    i && e.addEventListener("scroll", n, { passive: !0 }),
                      a && e.addEventListener("resize", n);
                  });
                  let d =
                      s && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = er(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function a(l, u) {
                                void 0 === l && (l = !1),
                                  void 0 === u && (u = 1),
                                  i();
                                let c = e.getBoundingClientRect(),
                                  { left: s, top: f, width: d, height: p } = c;
                                if ((l || t(), !d || !p)) return;
                                let h = j(f),
                                  m = j(o.clientWidth - (s + d)),
                                  g = {
                                    rootMargin:
                                      -h +
                                      "px " +
                                      -m +
                                      "px " +
                                      -j(o.clientHeight - (f + p)) +
                                      "px " +
                                      -j(s) +
                                      "px",
                                    threshold: M(0, k(1, u)) || 1,
                                  },
                                  v = !0;
                                function y(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== u) {
                                    if (!v) return a();
                                    r
                                      ? a(!1, r)
                                      : (n = setTimeout(() => {
                                          a(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  1 !== r ||
                                    eM(c, e.getBoundingClientRect()) ||
                                    a(),
                                    (v = !1);
                                }
                                try {
                                  r = new IntersectionObserver(y, {
                                    ...g,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(y, g);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    h = null;
                  l &&
                    ((h = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === s &&
                        h &&
                        (h.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = h) || e.observe(t);
                        }))),
                        n();
                    })),
                    s && !c && h.observe(s),
                    h.observe(t));
                  let m = c ? eC(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = eC(e);
                        m && !eM(m, r) && n(),
                          (m = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      f.forEach((e) => {
                        i && e.removeEventListener("scroll", n),
                          a && e.removeEventListener("resize", n);
                      }),
                        null == d || d(),
                        null == (e = h) || e.disconnect(),
                        (h = null),
                        c && cancelAnimationFrame(o);
                    }
                  );
                })(...e, { animationFrame: "always" === y }),
              elements: { reference: x.anchor },
              middleware: [
                eq({ mainAxis: o + O, alignmentAxis: l }),
                p &&
                  e$({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === g ? ez() : void 0,
                    ..._,
                  }),
                p && eU({ ..._ }),
                eX({
                  ..._,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let { width: o, height: i } = t.reference,
                      a = e.floating.style;
                    a.setProperty("--radix-popper-available-width", `${n}px`),
                      a.setProperty(
                        "--radix-popper-available-height",
                        `${r}px`
                      ),
                      a.setProperty("--radix-popper-anchor-width", `${o}px`),
                      a.setProperty("--radix-popper-anchor-height", `${i}px`);
                  },
                }),
                R && eK({ element: R, padding: c }),
                to({ arrowWidth: L, arrowHeight: O }),
                v && eY({ strategy: "referenceHidden", ..._ }),
              ],
            }),
            [q, $] = ti(W),
            z = (0, f.c)(w);
          (0, eG.N)(() => {
            H && z?.();
          }, [H, z]);
          let U = B.arrow?.x,
            X = B.arrow?.y,
            Y = B.arrow?.centerOffset !== 0,
            [K, V] = a.useState();
          return (
            (0, eG.N)(() => {
              E && V(window.getComputedStyle(E).zIndex);
            }, [E]),
            (0, d.jsx)("div", {
              ref: F.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...I,
                transform: H ? I.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: K,
                "--radix-popper-transform-origin": [
                  B.transformOrigin?.x,
                  B.transformOrigin?.y,
                ].join(" "),
                ...(B.hide?.referenceHidden && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, d.jsx)(e9, {
                scope: n,
                placedSide: q,
                onArrowChange: A,
                arrowX: U,
                arrowY: X,
                shouldHideArrow: Y,
                children: (0, d.jsx)(s.sG.div, {
                  "data-side": q,
                  "data-align": $,
                  ...b,
                  ref: S,
                  style: { ...b.style, animation: H ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      e8.displayName = e7;
      var te = "PopperArrow",
        tt = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tn = a.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = e6(te, n),
            i = tt[o.placedSide];
          return (0,
          d.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, d.jsx)(eV, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function tr(e) {
        return null !== e;
      }
      tn.displayName = te;
      var to = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          let { placement: n, rects: r, middlewareData: o } = t,
            i = o.arrow?.centerOffset !== 0,
            a = i ? 0 : e.arrowWidth,
            l = i ? 0 : e.arrowHeight,
            [u, c] = ti(n),
            s = { start: "0%", center: "50%", end: "100%" }[c],
            f = (o.arrow?.x ?? 0) + a / 2,
            d = (o.arrow?.y ?? 0) + l / 2,
            p = "",
            h = "";
          return (
            "bottom" === u
              ? ((p = i ? s : `${f}px`), (h = `${-l}px`))
              : "top" === u
              ? ((p = i ? s : `${f}px`), (h = `${r.floating.height + l}px`))
              : "right" === u
              ? ((p = `${-l}px`), (h = i ? s : `${d}px`))
              : "left" === u &&
                ((p = `${r.floating.width + l}px`), (h = i ? s : `${d}px`)),
            { data: { x: p, y: h } }
          );
        },
      });
      function ti(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      a.forwardRef((e, t) => {
        let { container: n, ...r } = e,
          [o, i] = a.useState(!1);
        (0, eG.N)(() => i(!0), []);
        let l = n || (o && globalThis?.document?.body);
        return l
          ? eD.createPortal((0, d.jsx)(s.sG.div, { ...r, ref: t }), l)
          : null;
      }).displayName = "Portal";
      var ta = n(9247),
        tl = n(8641),
        tu = n(2625),
        tc = new WeakMap(),
        ts = new WeakMap(),
        tf = {},
        td = 0,
        tp = function (e) {
          return e && (e.host || tp(e.parentNode));
        },
        th = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = tp(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tf[n] || (tf[n] = new WeakMap());
          var i = tf[n],
            a = [],
            l = new Set(),
            u = new Set(o),
            c = function (e) {
              !e || l.has(e) || (l.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      u = (tc.get(e) || 0) + 1,
                      c = (i.get(e) || 0) + 1;
                    tc.set(e, u),
                      i.set(e, c),
                      a.push(e),
                      1 === u && o && ts.set(e, !0),
                      1 === c && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            s(t),
            l.clear(),
            td++,
            function () {
              a.forEach(function (e) {
                var t = tc.get(e) - 1,
                  o = i.get(e) - 1;
                tc.set(e, t),
                  i.set(e, o),
                  t || (ts.has(e) || e.removeAttribute(r), ts.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --td ||
                  ((tc = new WeakMap()),
                  (tc = new WeakMap()),
                  (ts = new WeakMap()),
                  (tf = {}));
            }
          );
        },
        tm = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r,
            o = Array.from(Array.isArray(e) ? e : [e]),
            i =
              t ||
              ((r = e),
              "undefined" == typeof document
                ? null
                : (Array.isArray(r) ? r[0] : r).ownerDocument.body);
          return i
            ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))),
              th(o, i, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        tg = function () {
          return (tg =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function tv(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create, Object.create;
      var ty =
          ("function" == typeof SuppressedError && SuppressedError,
          "right-scroll-bar-position"),
        tw = "width-before-scroll-bar";
      function tb(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var tx = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        tE = new WeakMap();
      function tC(e) {
        return e;
      }
      var tS = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = tC),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    (n = []), t.forEach(e);
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    (n = []), o.forEach(e), (t = n);
                  }
                  var i = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  a(),
                    (n = {
                      push: function (e) {
                        t.push(e), a();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), n;
                      },
                    });
                },
              });
          return (o.options = tg({ async: !0, ssr: !1 }, e)), o;
        })(),
        tR = function () {},
        tA = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            l = a.useRef(null),
            u = a.useState({
              onScrollCapture: tR,
              onWheelCapture: tR,
              onTouchMoveCapture: tR,
            }),
            c = u[0],
            s = u[1],
            f = e.forwardProps,
            d = e.children,
            p = e.className,
            h = e.removeScrollBar,
            m = e.enabled,
            g = e.shards,
            v = e.sideCar,
            y = e.noIsolation,
            w = e.inert,
            b = e.allowPinchZoom,
            x = e.as,
            E = e.gapMode,
            C = tv(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            S =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return tb(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              tx(
                function () {
                  var e = tE.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || tb(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || tb(e, o);
                      });
                  }
                  tE.set(i, n);
                },
                [n]
              ),
              i),
            R = tg(tg({}, C), c);
          return a.createElement(
            a.Fragment,
            null,
            m &&
              a.createElement(v, {
                sideCar: tS,
                removeScrollBar: h,
                shards: g,
                noIsolation: y,
                inert: w,
                setCallbacks: s,
                allowPinchZoom: !!b,
                lockRef: l,
                gapMode: E,
              }),
            f
              ? a.cloneElement(a.Children.only(d), tg(tg({}, R), { ref: S }))
              : a.createElement(
                  void 0 === x ? "div" : x,
                  tg({}, R, { className: p, ref: S }),
                  d
                )
          );
        });
      (tA.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (tA.classNames = { fullWidth: tw, zeroRight: ty });
      var tP = function (e) {
        var t = e.sideCar,
          n = tv(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, tg({}, n));
      };
      tP.isSideCarExport = !0;
      var tL = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = i || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var o, a;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        tO = function () {
          var e = tL();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        tT = function () {
          var e = tO();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        tk = { left: 0, top: 0, right: 0, gap: 0 },
        tM = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        tN = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [tM(n), tM(r), tM(o)];
        },
        tj = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return tk;
          var t = tN(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        tD = tT(),
        t_ = "data-scroll-locked",
        tF = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(t_, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(ty, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tw, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(ty, " .")
              .concat(ty, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(tw, " .")
              .concat(tw, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(t_, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        tI = function () {
          var e = parseInt(document.body.getAttribute(t_) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        tW = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(t_, (tI() + 1).toString()),
              function () {
                var e = tI() - 1;
                e <= 0
                  ? document.body.removeAttribute(t_)
                  : document.body.setAttribute(t_, e.toString());
              }
            );
          }, []);
        },
        tH = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          tW();
          var i = a.useMemo(
            function () {
              return tj(o);
            },
            [o]
          );
          return a.createElement(tD, {
            styles: tF(i, !t, o, n ? "" : "!important"),
          });
        },
        tB = !1;
      if ("undefined" != typeof window)
        try {
          var tq = Object.defineProperty({}, "passive", {
            get: function () {
              return (tB = !0), !0;
            },
          });
          window.addEventListener("test", tq, tq),
            window.removeEventListener("test", tq, tq);
        } catch (e) {
          tB = !1;
        }
      var t$ = !!tB && { passive: !1 },
        tz = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        tU = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              tX(e, r))
            ) {
              var o = tY(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        tX = function (e, t) {
          return "v" === e ? tz(t, "overflowY") : tz(t, "overflowX");
        },
        tY = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        tK = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            f = l > 0,
            d = 0,
            p = 0;
          do {
            var h = tY(e, u),
              m = h[0],
              g = h[1] - h[2] - a * m;
            (m || g) && tX(e, u) && ((d += g), (p += m)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            f && ((o && 1 > Math.abs(d)) || (!o && l > d))
              ? (s = !0)
              : !f && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        tV = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        tG = function (e) {
          return [e.deltaX, e.deltaY];
        },
        tZ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        tJ = 0,
        tQ = [];
      let t0 =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(tJ++)[0],
            i = a.useState(tT)[0],
            l = a.useRef(e);
          a.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, i = t.length; o < i; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(tZ), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                i = tV(e),
                a = n.current,
                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                s = e.target,
                f = Math.abs(u) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === f && "range" === s.type) return !1;
              var d = tU(f, s);
              if (!d) return !0;
              if (
                (d ? (o = f) : ((o = "v" === f ? "h" : "v"), (d = tU(f, s))),
                !d)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return tK(p, t, e, "h" === p ? u : c, !0);
            }, []),
            c = a.useCallback(function (e) {
              if (tQ.length && tQ[tQ.length - 1] === i) {
                var n = "deltaY" in e ? tG(e) : tV(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(tZ)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = a.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            f = a.useCallback(function (e) {
              (n.current = tV(e)), (r.current = void 0);
            }, []),
            d = a.useCallback(function (t) {
              s(t.type, tG(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              s(t.type, tV(t), t.target, u(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              tQ.push(i),
              e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", c, t$),
              document.addEventListener("touchmove", c, t$),
              document.addEventListener("touchstart", f, t$),
              function () {
                (tQ = tQ.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", c, t$),
                  document.removeEventListener("touchmove", c, t$),
                  document.removeEventListener("touchstart", f, t$);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            h ? a.createElement(tH, { gapMode: e.gapMode }) : null
          );
        }),
        tS.useMedium(r),
        tP);
      var t1 = a.forwardRef(function (e, t) {
        return a.createElement(tA, tg({}, e, { ref: t, sideCar: t0 }));
      });
      t1.classNames = tA.classNames;
      var t2 = "Popover",
        [t5, t4] = (0, c.A)(t2, [e0]),
        t3 = e0(),
        [t7, t9] = t5(t2),
        t6 = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              modal: l = !1,
            } = e,
            u = t3(t),
            c = a.useRef(null),
            [s, f] = a.useState(!1),
            [p = !1, h] = (0, tu.i)({ prop: r, defaultProp: o, onChange: i });
          return (0, d.jsx)(e5, {
            ...u,
            children: (0, d.jsx)(t7, {
              scope: t,
              contentId: (0, O.B)(),
              triggerRef: c,
              open: p,
              onOpenChange: h,
              onOpenToggle: a.useCallback(() => h((e) => !e), [h]),
              hasCustomAnchor: s,
              onCustomAnchorAdd: a.useCallback(() => f(!0), []),
              onCustomAnchorRemove: a.useCallback(() => f(!1), []),
              modal: l,
              children: n,
            }),
          });
        };
      t6.displayName = t2;
      var t8 = "PopoverAnchor",
        ne = a.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = t9(t8, n),
            i = t3(n),
            { onCustomAnchorAdd: l, onCustomAnchorRemove: u } = o;
          return (
            a.useEffect(() => (l(), () => u()), [l, u]),
            (0, d.jsx)(e3, { ...i, ...r, ref: t })
          );
        });
      ne.displayName = t8;
      var nt = "PopoverTrigger",
        nn = a.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = t9(nt, n),
            i = t3(n),
            a = (0, u.s)(t, o.triggerRef),
            c = (0, d.jsx)(s.sG.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": nf(o.open),
              ...r,
              ref: a,
              onClick: (0, l.m)(e.onClick, o.onOpenToggle),
            });
          return o.hasCustomAnchor
            ? c
            : (0, d.jsx)(e3, { asChild: !0, ...i, children: c });
        });
      nn.displayName = nt;
      var [nr, no] = t5("PopoverPortal", { forceMount: void 0 }),
        ni = "PopoverContent",
        na = a.forwardRef((e, t) => {
          let n = no(ni, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            i = t9(ni, e.__scopePopover);
          return (0, d.jsx)(ta.C, {
            present: r || i.open,
            children: i.modal
              ? (0, d.jsx)(nl, { ...o, ref: t })
              : (0, d.jsx)(nu, { ...o, ref: t }),
          });
        });
      na.displayName = ni;
      var nl = a.forwardRef((e, t) => {
          let n = t9(ni, e.__scopePopover),
            r = a.useRef(null),
            o = (0, u.s)(t, r),
            i = a.useRef(!1);
          return (
            a.useEffect(() => {
              let e = r.current;
              if (e) return tm(e);
            }, []),
            (0, d.jsx)(t1, {
              as: tl.DX,
              allowPinchZoom: !0,
              children: (0, d.jsx)(nc, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, l.m)(e.onCloseAutoFocus, (e) => {
                  e.preventDefault(),
                    i.current || n.triggerRef.current?.focus();
                }),
                onPointerDownOutside: (0, l.m)(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey,
                      r = 2 === t.button || n;
                    i.current = r;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: (0, l.m)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          );
        }),
        nu = a.forwardRef((e, t) => {
          let n = t9(ni, e.__scopePopover),
            r = a.useRef(!1),
            o = a.useRef(!1);
          return (0, d.jsx)(nc, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              e.onCloseAutoFocus?.(t),
                t.defaultPrevented ||
                  (r.current || n.triggerRef.current?.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1);
            },
            onInteractOutside: (t) => {
              e.onInteractOutside?.(t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (o.current = !0));
              let i = t.target;
              n.triggerRef.current?.contains(i) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  o.current &&
                  t.preventDefault();
            },
          });
        }),
        nc = a.forwardRef((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: i,
              disableOutsidePointerEvents: l,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: s,
              onInteractOutside: f,
              ...p
            } = e,
            h = t9(ni, n),
            g = t3(n);
          return (
            a.useEffect(() => {
              let e = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", e[0] ?? w()),
                document.body.insertAdjacentElement("beforeend", e[1] ?? w()),
                y++,
                () => {
                  1 === y &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    y--;
                }
              );
            }, []),
            (0, d.jsx)(C, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              children: (0, d.jsx)(m, {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onInteractOutside: f,
                onEscapeKeyDown: u,
                onPointerDownOutside: c,
                onFocusOutside: s,
                onDismiss: () => h.onOpenChange(!1),
                children: (0, d.jsx)(e8, {
                  "data-state": nf(h.open),
                  role: "dialog",
                  id: h.contentId,
                  ...g,
                  ...p,
                  ref: t,
                  style: {
                    ...p.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        ns = "PopoverClose";
      function nf(e) {
        return e ? "open" : "closed";
      }
      (a.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = t9(ns, n);
        return (0, d.jsx)(s.sG.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: (0, l.m)(e.onClick, () => o.onOpenChange(!1)),
        });
      }).displayName = ns),
        (a.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = t3(n);
          return (0, d.jsx)(tn, { ...o, ...r, ref: t });
        }).displayName = "PopoverArrow");
      var nd = t6,
        np = ne,
        nh = nn,
        nm = na;
    },
    7139: (e, t, n) => {
      n.d(t, { N: () => c });
      var r,
        o = n(4612),
        i = {
          404: "nuqs requires an adapter to work with your framework.",
          409: "Multiple versions of the library are loaded. This may lead to unexpected behavior. Currently using `%s`, but `%s` (via the %s adapter) was about to load on top.",
          414: "Max safe URL length exceeded. Some browsers may not be able to accept this URL. Consider limiting the amount of state stored in the URL.",
          429: "URL update rate-limited by the browser. Consider increasing `throttleMs` for key(s) `%s`. %O",
          500: "Empty search params cache. Search params can't be accessed in Layouts.",
          501: "Search params cache already populated. Have you called `parse` twice?",
        },
        a = (0, o.createContext)({
          useAdapter() {
            throw Error(`[nuqs] ${i[404]}
  See https://err.47ng.com/NUQS-404`);
          },
        });
      a.displayName = "NuqsAdapterContext";
      var l = (function () {
          try {
            if ("undefined" == typeof localStorage) return !1;
            let e = "nuqs-localStorage-test";
            localStorage.setItem(e, e);
            let t = localStorage.getItem(e) === e;
            if ((localStorage.removeItem(e), !t)) return !1;
          } catch (e) {
            return (
              console.error(
                "[nuqs]: debug mode is disabled (localStorage unavailable).",
                e
              ),
              !1
            );
          }
          return (localStorage.getItem("debug") ?? "").includes("nuqs");
        })(),
        u = n(4152),
        c =
          ((r = function () {
            let e = (0, u.useRouter)(),
              t = (0, u.useSearchParams)(),
              [n, r] = (0, o.useOptimistic)(t);
            return {
              searchParams: n,
              updateUrl: (0, o.useCallback)((t, n) => {
                (0, o.startTransition)(() => {
                  var o, i;
                  n.shallow || r(t);
                  let a =
                    ((o = location.origin + location.pathname),
                    (i = t),
                    (o.split("#")[0] ?? "") +
                      (function (e) {
                        if (0 === e.size) return "";
                        let t = [];
                        for (let [n, r] of e.entries()) {
                          let e = n
                            .replace(/#/g, "#")
                            .replace(/&/g, "%26")
                            .replace(/\+/g, "%2B")
                            .replace(/=/g, "%3D")
                            .replace(/\?/g, "%3F");
                          t.push(
                            `${e}=${r
                              .replace(/%/g, "%")
                              .replace(/\+/g, "%2B")
                              .replace(/ /g, "+")
                              .replace(/#/g, "#")
                              .replace(/&/g, "%26")
                              .replace(/"/g, "%22")
                              .replace(/'/g, "%27")
                              .replace(/`/g, "%60")
                              .replace(/</g, "<")
                              .replace(/>/g, ">")
                              .replace(/[\x00-\x1F]/g, (e) =>
                                encodeURIComponent(e)
                              )}`
                          );
                        }
                        return "?" + t.join("&");
                      })(i) +
                      location.hash);
                  (function (e, ...t) {
                    if (!l) return;
                    let n = (function (e, ...t) {
                      return e.replace(/%[sfdO]/g, (e) => {
                        let n = t.shift();
                        return "%O" === e && n
                          ? JSON.stringify(n).replace(/"([^"]+)":/g, "$1:")
                          : String(n);
                      });
                    })(e, ...t);
                    performance.mark(n), console.log(e, ...t);
                  })("[nuqs queue (app)] Updating url: %s", a),
                    ("push" === n.history
                      ? history.pushState
                      : history.replaceState
                    ).call(history, null, "", a),
                    n.scroll && window.scrollTo(0, 0),
                    n.shallow || e.replace(a, { scroll: !1 });
                });
              }, []),
              rateLimitFactor: 2,
            };
          }),
          ({ children: e, ...t }) =>
            (0, o.createElement)(
              a.Provider,
              { ...t, value: { useAdapter: r } },
              e
            ));
    },
  },
]);
