"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [857],
  {
    4227: (e, t, n) => {
      n.d(t, { default: () => o.a });
      var r = n(7928),
        o = n.n(r);
    },
    7928: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return l;
          },
        });
      let r = n(3295),
        o = n(1356),
        i = n(7760),
        a = r._(n(9240));
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let s = i.Image;
    },
    5254: (e, t, n) => {
      n.d(t, { UC: () => eo, q7: () => en, bL: () => et, l9: () => er });
      var r = n(4612),
        o = n(9894),
        i = n(6895),
        a = n(1864),
        l = n(1277),
        s = n(2625),
        c = n(8932),
        u = n(2969),
        d = n(9247),
        p = n(3201),
        f = n(2104),
        h = "Collapsible",
        [g, m] = (0, o.A)(h),
        [v, x] = g(h),
        y = r.forwardRef((e, t) => {
          let {
              __scopeCollapsible: n,
              open: o,
              defaultOpen: i,
              disabled: a,
              onOpenChange: l,
              ...u
            } = e,
            [d = !1, h] = (0, s.i)({ prop: o, defaultProp: i, onChange: l });
          return (0, f.jsx)(v, {
            scope: n,
            disabled: a,
            contentId: (0, p.B)(),
            open: d,
            onOpenToggle: r.useCallback(() => h((e) => !e), [h]),
            children: (0, f.jsx)(c.sG.div, {
              "data-state": E(d),
              "data-disabled": a ? "" : void 0,
              ...u,
              ref: t,
            }),
          });
        });
      y.displayName = h;
      var w = "CollapsibleTrigger",
        b = r.forwardRef((e, t) => {
          let { __scopeCollapsible: n, ...r } = e,
            o = x(w, n);
          return (0, f.jsx)(c.sG.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": E(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: (0, l.m)(e.onClick, o.onOpenToggle),
          });
        });
      b.displayName = w;
      var T = "CollapsibleContent",
        k = r.forwardRef((e, t) => {
          let { forceMount: n, ...r } = e,
            o = x(T, e.__scopeCollapsible);
          return (0, f.jsx)(d.C, {
            present: n || o.open,
            children: ({ present: e }) =>
              (0, f.jsx)(C, { ...r, ref: t, present: e }),
          });
        });
      k.displayName = T;
      var C = r.forwardRef((e, t) => {
        let { __scopeCollapsible: n, present: o, children: i, ...l } = e,
          s = x(T, n),
          [d, p] = r.useState(o),
          h = r.useRef(null),
          g = (0, a.s)(t, h),
          m = r.useRef(0),
          v = m.current,
          y = r.useRef(0),
          w = y.current,
          b = s.open || d,
          k = r.useRef(b),
          C = r.useRef(void 0);
        return (
          r.useEffect(() => {
            let e = requestAnimationFrame(() => (k.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, u.N)(() => {
            let e = h.current;
            if (e) {
              (C.current = C.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none");
              let t = e.getBoundingClientRect();
              (m.current = t.height),
                (y.current = t.width),
                k.current ||
                  ((e.style.transitionDuration = C.current.transitionDuration),
                  (e.style.animationName = C.current.animationName)),
                p(o);
            }
          }, [s.open, o]),
          (0, f.jsx)(c.sG.div, {
            "data-state": E(s.open),
            "data-disabled": s.disabled ? "" : void 0,
            id: s.contentId,
            hidden: !b,
            ...l,
            ref: g,
            style: {
              "--radix-collapsible-content-height": v ? `${v}px` : void 0,
              "--radix-collapsible-content-width": w ? `${w}px` : void 0,
              ...e.style,
            },
            children: b && i,
          })
        );
      });
      function E(e) {
        return e ? "open" : "closed";
      }
      var M = n(3549),
        N = "Accordion",
        _ = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [S, P, D] = (0, i.N)(N),
        [X, R] = (0, o.A)(N, [D, m]),
        A = m(),
        Y = r.forwardRef((e, t) => {
          let { type: n, ...r } = e;
          return (0, f.jsx)(S.Provider, {
            scope: e.__scopeAccordion,
            children:
              "multiple" === n
                ? (0, f.jsx)(j, { ...r, ref: t })
                : (0, f.jsx)(F, { ...r, ref: t }),
          });
        });
      Y.displayName = N;
      var [L, O] = X(N),
        [I, B] = X(N, { collapsible: !1 }),
        F = r.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: o,
              onValueChange: i = () => {},
              collapsible: a = !1,
              ...l
            } = e,
            [c, u] = (0, s.i)({ prop: n, defaultProp: o, onChange: i });
          return (0, f.jsx)(L, {
            scope: e.__scopeAccordion,
            value: c ? [c] : [],
            onItemOpen: u,
            onItemClose: r.useCallback(() => a && u(""), [a, u]),
            children: (0, f.jsx)(I, {
              scope: e.__scopeAccordion,
              collapsible: a,
              children: (0, f.jsx)(z, { ...l, ref: t }),
            }),
          });
        }),
        j = r.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: o,
              onValueChange: i = () => {},
              ...a
            } = e,
            [l = [], c] = (0, s.i)({ prop: n, defaultProp: o, onChange: i }),
            u = r.useCallback((e) => c((t = []) => [...t, e]), [c]),
            d = r.useCallback(
              (e) => c((t = []) => t.filter((t) => t !== e)),
              [c]
            );
          return (0, f.jsx)(L, {
            scope: e.__scopeAccordion,
            value: l,
            onItemOpen: u,
            onItemClose: d,
            children: (0, f.jsx)(I, {
              scope: e.__scopeAccordion,
              collapsible: !0,
              children: (0, f.jsx)(z, { ...a, ref: t }),
            }),
          });
        }),
        [H, W] = X(N),
        z = r.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: o,
              dir: i,
              orientation: s = "vertical",
              ...u
            } = e,
            d = r.useRef(null),
            p = (0, a.s)(d, t),
            h = P(n),
            g = "ltr" === (0, M.jH)(i),
            m = (0, l.m)(e.onKeyDown, (e) => {
              if (!_.includes(e.key)) return;
              let t = e.target,
                n = h().filter((e) => !e.ref.current?.disabled),
                r = n.findIndex((e) => e.ref.current === t),
                o = n.length;
              if (-1 === r) return;
              e.preventDefault();
              let i = r,
                a = o - 1,
                l = () => {
                  (i = r + 1) > a && (i = 0);
                },
                c = () => {
                  (i = r - 1) < 0 && (i = a);
                };
              switch (e.key) {
                case "Home":
                  i = 0;
                  break;
                case "End":
                  i = a;
                  break;
                case "ArrowRight":
                  "horizontal" === s && (g ? l() : c());
                  break;
                case "ArrowDown":
                  "vertical" === s && l();
                  break;
                case "ArrowLeft":
                  "horizontal" === s && (g ? c() : l());
                  break;
                case "ArrowUp":
                  "vertical" === s && c();
              }
              let u = i % o;
              n[u].ref.current?.focus();
            });
          return (0, f.jsx)(H, {
            scope: n,
            disabled: o,
            direction: i,
            orientation: s,
            children: (0, f.jsx)(S.Slot, {
              scope: n,
              children: (0, f.jsx)(c.sG.div, {
                ...u,
                "data-orientation": s,
                ref: p,
                onKeyDown: o ? void 0 : m,
              }),
            }),
          });
        }),
        V = "AccordionItem",
        [G, U] = X(V),
        K = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: r, ...o } = e,
            i = W(V, n),
            a = O(V, n),
            l = A(n),
            s = (0, p.B)(),
            c = (r && a.value.includes(r)) || !1,
            u = i.disabled || e.disabled;
          return (0, f.jsx)(G, {
            scope: n,
            open: c,
            disabled: u,
            triggerId: s,
            children: (0, f.jsx)(y, {
              "data-orientation": i.orientation,
              "data-state": ee(c),
              ...l,
              ...o,
              ref: t,
              disabled: u,
              open: c,
              onOpenChange: (e) => {
                e ? a.onItemOpen(r) : a.onItemClose(r);
              },
            }),
          });
        });
      K.displayName = V;
      var q = "AccordionHeader";
      r.forwardRef((e, t) => {
        let { __scopeAccordion: n, ...r } = e,
          o = W(N, n),
          i = U(q, n);
        return (0, f.jsx)(c.sG.h3, {
          "data-orientation": o.orientation,
          "data-state": ee(i.open),
          "data-disabled": i.disabled ? "" : void 0,
          ...r,
          ref: t,
        });
      }).displayName = q;
      var $ = "AccordionTrigger",
        Z = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = W(N, n),
            i = U($, n),
            a = B($, n),
            l = A(n);
          return (0, f.jsx)(S.ItemSlot, {
            scope: n,
            children: (0, f.jsx)(b, {
              "aria-disabled": (i.open && !a.collapsible) || void 0,
              "data-orientation": o.orientation,
              id: i.triggerId,
              ...l,
              ...r,
              ref: t,
            }),
          });
        });
      Z.displayName = $;
      var J = "AccordionContent",
        Q = r.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...r } = e,
            o = W(N, n),
            i = U(J, n),
            a = A(n);
          return (0, f.jsx)(k, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": o.orientation,
            ...a,
            ...r,
            ref: t,
            style: {
              "--radix-accordion-content-height":
                "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width":
                "var(--radix-collapsible-content-width)",
              ...e.style,
            },
          });
        });
      function ee(e) {
        return e ? "open" : "closed";
      }
      Q.displayName = J;
      var et = Y,
        en = K,
        er = Z,
        eo = Q;
    },
    6895: (e, t, n) => {
      n.d(t, { N: () => s });
      var r = n(4612),
        o = n(9894),
        i = n(1864),
        a = n(8641),
        l = n(2104);
      function s(e) {
        let t = e + "CollectionProvider",
          [n, s] = (0, o.A)(t),
          [c, u] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = (e) => {
            let { scope: t, children: n } = e,
              o = r.useRef(null),
              i = r.useRef(new Map()).current;
            return (0, l.jsx)(c, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n,
            });
          };
        d.displayName = t;
        let p = e + "CollectionSlot",
          f = r.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = u(p, n),
              s = (0, i.s)(t, o.collectionRef);
            return (0, l.jsx)(a.DX, { ref: s, children: r });
          });
        f.displayName = p;
        let h = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          m = r.forwardRef((e, t) => {
            let { scope: n, children: o, ...s } = e,
              c = r.useRef(null),
              d = (0, i.s)(t, c),
              p = u(h, n);
            return (
              r.useEffect(
                () => (
                  p.itemMap.set(c, { ref: c, ...s }),
                  () => void p.itemMap.delete(c)
                )
              ),
              (0, l.jsx)(a.DX, { [g]: "", ref: d, children: o })
            );
          });
        return (
          (m.displayName = h),
          [
            { Provider: d, Slot: f, ItemSlot: m },
            function (t) {
              let n = u(e + "CollectionConsumer", t);
              return r.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${g}]`));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            s,
          ]
        );
      }
    },
    3549: (e, t, n) => {
      n.d(t, { jH: () => i });
      var r = n(4612);
      n(2104);
      var o = r.createContext(void 0);
      function i(e) {
        let t = r.useContext(o);
        return e || t || "ltr";
      }
    },
    1421: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(4612);
      function o(e) {
        let t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    6352: (e, t, n) => {
      n.d(t, { s: () => e$ });
      var r,
        o,
        i,
        a,
        l,
        s,
        c,
        u,
        d,
        p = "transform",
        f = p + "Origin",
        h = function (e) {
          var t = e.ownerDocument || e;
          for (
            !(p in e.style) &&
            ("msTransform" in e.style) &&
            (f = (p = "msTransform") + "Origin");
            t.parentNode && (t = t.parentNode);

          );
          if (((o = window), (c = new C()), t)) {
            (r = t),
              (i = t.documentElement),
              (a = t.body),
              ((u = r.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
              )).style.transform = "none");
            var n = t.createElement("div"),
              l = t.createElement("div"),
              s = t && (t.body || t.firstElementChild);
            s &&
              s.appendChild &&
              (s.appendChild(n),
              n.appendChild(l),
              n.setAttribute(
                "style",
                "position:static;transform:translate3d(0,0,1px)"
              ),
              (d = l.offsetParent !== n),
              s.removeChild(n));
          }
          return t;
        },
        g = function (e) {
          for (var t, n; e && e !== a; )
            (n = e._gsap) && n.uncache && n.get(e, "x"),
              n &&
                !n.scaleX &&
                !n.scaleY &&
                n.renderTransform &&
                ((n.scaleX = n.scaleY = 1e-4),
                n.renderTransform(1, n),
                t ? t.push(n) : (t = [n])),
              (e = e.parentNode);
          return t;
        },
        m = [],
        v = [],
        x = function (e) {
          return (
            e.ownerSVGElement ||
            ("svg" === (e.tagName + "").toLowerCase() ? e : null)
          );
        },
        y = function e(t, n) {
          if (t.parentNode && (r || h(t))) {
            var o = x(t),
              i = o
                ? o.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                : "http://www.w3.org/1999/xhtml",
              a = o ? (n ? "rect" : "g") : "div",
              c = 2 !== n ? 0 : 100,
              u = 3 === n ? 100 : 0,
              d =
                "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
              p = r.createElementNS
                ? r.createElementNS(i.replace(/^https/, "http"), a)
                : r.createElement(a);
            return (
              n &&
                (o
                  ? (s || (s = e(t)),
                    p.setAttribute("width", 0.01),
                    p.setAttribute("height", 0.01),
                    p.setAttribute(
                      "transform",
                      "translate(" + c + "," + u + ")"
                    ),
                    s.appendChild(p))
                  : (l || ((l = e(t)).style.cssText = d),
                    (p.style.cssText =
                      d +
                      "width:0.1px;height:0.1px;top:" +
                      u +
                      "px;left:" +
                      c +
                      "px"),
                    l.appendChild(p))),
              p
            );
          }
          throw "Need document and parent.";
        },
        w = function (e) {
          for (var t = new C(), n = 0; n < e.numberOfItems; n++)
            t.multiply(e.getItem(n).matrix);
          return t;
        },
        b = function (e) {
          var t,
            n = e.getCTM();
          return (
            n ||
              ((t = e.style[p]),
              (e.style[p] = "none"),
              e.appendChild(u),
              (n = u.getCTM()),
              e.removeChild(u),
              t
                ? (e.style[p] = t)
                : e.style.removeProperty(
                    p.replace(/([A-Z])/g, "-$1").toLowerCase()
                  )),
            n || c.clone()
          );
        },
        T = function (e, t) {
          var n,
            r,
            i,
            a,
            u,
            h,
            g = x(e),
            T = e === g,
            k = g ? m : v,
            E = e.parentNode;
          if (e === o) return e;
          if (
            (k.length || k.push(y(e, 1), y(e, 2), y(e, 3)), (n = g ? s : l), g)
          )
            T
              ? ((a = -(i = b(e)).e / i.a), (u = -i.f / i.d), (r = c))
              : e.getBBox
              ? ((i = e.getBBox()),
                (a =
                  (r = (r = e.transform ? e.transform.baseVal : {})
                    .numberOfItems
                    ? r.numberOfItems > 1
                      ? w(r)
                      : r.getItem(0).matrix
                    : c).a *
                    i.x +
                  r.c * i.y),
                (u = r.b * i.x + r.d * i.y))
              : ((r = new C()), (a = u = 0)),
              t && "g" === e.tagName.toLowerCase() && (a = u = 0),
              (T ? g : E).appendChild(n),
              n.setAttribute(
                "transform",
                "matrix(" +
                  r.a +
                  "," +
                  r.b +
                  "," +
                  r.c +
                  "," +
                  r.d +
                  "," +
                  (r.e + a) +
                  "," +
                  (r.f + u) +
                  ")"
              );
          else {
            if (((a = u = 0), d))
              for (
                r = e.offsetParent, i = e;
                i && (i = i.parentNode) && i !== r && i.parentNode;

              )
                (o.getComputedStyle(i)[p] + "").length > 4 &&
                  ((a = i.offsetLeft), (u = i.offsetTop), (i = 0));
            if (
              "absolute" !== (h = o.getComputedStyle(e)).position &&
              "fixed" !== h.position
            )
              for (r = e.offsetParent; E && E !== r; )
                (a += E.scrollLeft || 0),
                  (u += E.scrollTop || 0),
                  (E = E.parentNode);
            ((i = n.style).top = e.offsetTop - u + "px"),
              (i.left = e.offsetLeft - a + "px"),
              (i[p] = h[p]),
              (i[f] = h[f]),
              (i.position = "fixed" === h.position ? "fixed" : "absolute"),
              e.parentNode.appendChild(n);
          }
          return n;
        },
        k = function (e, t, n, r, o, i, a) {
          return (
            (e.a = t), (e.b = n), (e.c = r), (e.d = o), (e.e = i), (e.f = a), e
          );
        },
        C = (function () {
          function e(e, t, n, r, o, i) {
            void 0 === e && (e = 1),
              void 0 === t && (t = 0),
              void 0 === n && (n = 0),
              void 0 === r && (r = 1),
              void 0 === o && (o = 0),
              void 0 === i && (i = 0),
              k(this, e, t, n, r, o, i);
          }
          var t = e.prototype;
          return (
            (t.inverse = function () {
              var e = this.a,
                t = this.b,
                n = this.c,
                r = this.d,
                o = this.e,
                i = this.f,
                a = e * r - t * n || 1e-10;
              return k(
                this,
                r / a,
                -t / a,
                -n / a,
                e / a,
                (n * i - r * o) / a,
                -(e * i - t * o) / a
              );
            }),
            (t.multiply = function (e) {
              var t = this.a,
                n = this.b,
                r = this.c,
                o = this.d,
                i = this.e,
                a = this.f,
                l = e.a,
                s = e.c,
                c = e.b,
                u = e.d,
                d = e.e,
                p = e.f;
              return k(
                this,
                l * t + c * r,
                l * n + c * o,
                s * t + u * r,
                s * n + u * o,
                i + d * t + p * r,
                a + d * n + p * o
              );
            }),
            (t.clone = function () {
              return new e(this.a, this.b, this.c, this.d, this.e, this.f);
            }),
            (t.equals = function (e) {
              var t = this.a,
                n = this.b,
                r = this.c,
                o = this.d,
                i = this.e,
                a = this.f;
              return (
                t === e.a &&
                n === e.b &&
                r === e.c &&
                o === e.d &&
                i === e.e &&
                a === e.f
              );
            }),
            (t.apply = function (e, t) {
              void 0 === t && (t = {});
              var n = e.x,
                r = e.y,
                o = this.a,
                i = this.b,
                a = this.c,
                l = this.d,
                s = this.e,
                c = this.f;
              return (
                (t.x = n * o + r * a + s || 0),
                (t.y = n * i + r * l + c || 0),
                t
              );
            }),
            e
          );
        })();
      function E(e, t, n, l) {
        if (!e || !e.parentNode || (r || h(e)).documentElement === e)
          return new C();
        var s = g(e),
          c = x(e) ? m : v,
          u = T(e, n),
          d = c[0].getBoundingClientRect(),
          p = c[1].getBoundingClientRect(),
          f = c[2].getBoundingClientRect(),
          y = u.parentNode,
          w =
            !l &&
            (function e(t) {
              return (
                "fixed" === o.getComputedStyle(t).position ||
                ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
              );
            })(e),
          b = new C(
            (p.left - d.left) / 100,
            (p.top - d.top) / 100,
            (f.left - d.left) / 100,
            (f.top - d.top) / 100,
            d.left +
              (w
                ? 0
                : o.pageXOffset ||
                  r.scrollLeft ||
                  i.scrollLeft ||
                  a.scrollLeft ||
                  0),
            d.top +
              (w
                ? 0
                : o.pageYOffset ||
                  r.scrollTop ||
                  i.scrollTop ||
                  a.scrollTop ||
                  0)
          );
        if ((y.removeChild(u), s))
          for (d = s.length; d--; )
            ((p = s[d]).scaleX = p.scaleY = 0), p.renderTransform(1, p);
        return t ? b.inverse() : b;
      }
      function M(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      var N,
        _,
        S,
        P,
        D,
        X,
        R,
        A,
        Y,
        L,
        O,
        I,
        B,
        F,
        j,
        H,
        W,
        z,
        V,
        G,
        U,
        K,
        q = 0,
        $ = function () {
          return "undefined" != typeof window;
        },
        Z = function () {
          return N || ($() && (N = window.gsap) && N.registerPlugin && N);
        },
        J = function (e) {
          return "function" == typeof e;
        },
        Q = function (e) {
          return "object" == typeof e;
        },
        ee = function (e) {
          return void 0 === e;
        },
        et = function () {
          return !1;
        },
        en = "transform",
        er = "transformOrigin",
        eo = function (e) {
          return Math.round(1e4 * e) / 1e4;
        },
        ei = Array.isArray,
        ea = function (e, t) {
          var n = S.createElementNS
            ? S.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : S.createElement(e);
          return n.style ? n : S.createElement(e);
        },
        el = 180 / Math.PI,
        es = new C(),
        ec =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        eu = [],
        ed = {},
        ep = 0,
        ef = /^(?:a|input|textarea|button|select)$/i,
        eh = 0,
        eg = {},
        em = {},
        ev = function (e, t) {
          var n,
            r = {};
          for (n in e) r[n] = t ? e[n] * t : e[n];
          return r;
        },
        ex = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        ey = function e(t, n) {
          for (var r, o = t.length; o--; )
            n
              ? (t[o].style.touchAction = n)
              : t[o].style.removeProperty("touch-action"),
              (r = t[o].children) && r.length && e(r, n);
        },
        ew = function () {
          return eu.forEach(function (e) {
            return e();
          });
        },
        eb = function (e) {
          eu.push(e), 1 === eu.length && N.ticker.add(ew);
        },
        eT = function () {
          return !eu.length && N.ticker.remove(ew);
        },
        ek = function (e) {
          for (var t = eu.length; t--; ) eu[t] === e && eu.splice(t, 1);
          N.to(eT, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: eT,
            data: "_draggable",
          });
        },
        eC = function (e, t, n, r) {
          if (e.addEventListener) {
            var o = B[t];
            (r = r || (O ? { passive: !1 } : null)),
              e.addEventListener(o || t, n, r),
              o && t !== o && e.addEventListener(t, n, r);
          }
        },
        eE = function (e, t, n, r) {
          if (e.removeEventListener) {
            var o = B[t];
            e.removeEventListener(o || t, n, r),
              o && t !== o && e.removeEventListener(t, n, r);
          }
        },
        eM = function (e) {
          e.preventDefault && e.preventDefault(),
            e.preventManipulation && e.preventManipulation();
        },
        eN = function (e, t) {
          for (var n = e.length; n--; ) if (e[n].identifier === t) return !0;
        },
        e_ = function e(t) {
          (F = t.touches && q < t.touches.length), eE(t.target, "touchend", e);
        },
        eS = function (e) {
          (F = e.touches && q < e.touches.length), eC(e.target, "touchend", e_);
        },
        eP = function (e) {
          return (
            _.pageYOffset ||
            e.scrollTop ||
            e.documentElement.scrollTop ||
            e.body.scrollTop ||
            0
          );
        },
        eD = function (e) {
          return (
            _.pageXOffset ||
            e.scrollLeft ||
            e.documentElement.scrollLeft ||
            e.body.scrollLeft ||
            0
          );
        },
        eX = function e(t, n) {
          eC(t, "scroll", n), eA(t.parentNode) || e(t.parentNode, n);
        },
        eR = function e(t, n) {
          eE(t, "scroll", n), eA(t.parentNode) || e(t.parentNode, n);
        },
        eA = function (e) {
          return !!(
            !e ||
            e === P ||
            9 === e.nodeType ||
            e === S.body ||
            e === _ ||
            !e.nodeType ||
            !e.parentNode
          );
        },
        eY = function (e, t) {
          var n = "x" === t ? "Width" : "Height",
            r = "scroll" + n,
            o = "client" + n;
          return Math.max(
            0,
            eA(e)
              ? Math.max(P[r], D[r]) - (_["inner" + n] || P[o] || D[o])
              : e[r] - e[o]
          );
        },
        eL = function e(t, n) {
          var r = eY(t, "x"),
            o = eY(t, "y");
          eA(t) ? (t = em) : e(t.parentNode, n),
            (t._gsMaxScrollX = r),
            (t._gsMaxScrollY = o),
            n ||
              ((t._gsScrollX = t.scrollLeft || 0),
              (t._gsScrollY = t.scrollTop || 0));
        },
        eO = function (e, t, n) {
          var r = e.style;
          r &&
            (ee(r[t]) && (t = Y(t, e) || t),
            null == n
              ? r.removeProperty &&
                r.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
              : (r[t] = n));
        },
        eI = function (e) {
          return _.getComputedStyle(
            e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
          );
        },
        eB = {},
        eF = function (e) {
          if (e === _)
            return (
              (eB.left = eB.top = 0),
              (eB.width = eB.right =
                P.clientWidth || e.innerWidth || D.clientWidth || 0),
              (eB.height = eB.bottom =
                (e.innerHeight || 0) - 20 < P.clientHeight
                  ? P.clientHeight
                  : e.innerHeight || D.clientHeight || 0),
              eB
            );
          var t = e.ownerDocument || S,
            n = ee(e.pageX)
              ? e.nodeType || ee(e.left) || ee(e.top)
                ? L(e)[0].getBoundingClientRect()
                : e
              : {
                  left: e.pageX - eD(t),
                  top: e.pageY - eP(t),
                  right: e.pageX - eD(t) + 1,
                  bottom: e.pageY - eP(t) + 1,
                };
          return (
            ee(n.right) && !ee(n.width)
              ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
              : ee(n.width) &&
                (n = {
                  width: n.right - n.left,
                  height: n.bottom - n.top,
                  right: n.right,
                  left: n.left,
                  bottom: n.bottom,
                  top: n.top,
                }),
            n
          );
        },
        ej = function (e, t, n) {
          var r,
            o = e.vars,
            i = o[n],
            a = e._listeners[t];
          return (
            J(i) &&
              (r = i.apply(
                o.callbackScope || e,
                o[n + "Params"] || [e.pointerEvent]
              )),
            a && !1 === e.dispatchEvent(t) && (r = !1),
            r
          );
        },
        eH = function (e, t) {
          var n,
            r,
            o,
            i = L(e)[0];
          return i.nodeType || i === _
            ? ez(i, t)
            : ee(e.left)
            ? {
                left: (r = e.min || e.minX || e.minRotation || 0),
                top: (n = e.min || e.minY || 0),
                width: (e.max || e.maxX || e.maxRotation || 0) - r,
                height: (e.max || e.maxY || 0) - n,
              }
            : ((o = { x: 0, y: 0 }),
              {
                left: e.left - o.x,
                top: e.top - o.y,
                width: e.width,
                height: e.height,
              });
        },
        eW = {},
        ez = function (e, t) {
          t = L(t)[0];
          var n,
            r,
            o,
            i,
            a,
            l,
            s,
            c,
            u,
            d,
            p,
            f,
            h,
            g = e.getBBox && e.ownerSVGElement,
            m = e.ownerDocument || S;
          if (e === _)
            (o = eP(m)),
              (r =
                (n = eD(m)) +
                (m.documentElement.clientWidth ||
                  e.innerWidth ||
                  m.body.clientWidth ||
                  0)),
              (i =
                o +
                ((e.innerHeight || 0) - 20 < m.documentElement.clientHeight
                  ? m.documentElement.clientHeight
                  : e.innerHeight || m.body.clientHeight || 0));
          else {
            if (t === _ || ee(t)) return e.getBoundingClientRect();
            (n = o = 0),
              g
                ? ((p = (d = e.getBBox()).width), (f = d.height))
                : (e.viewBox &&
                    (d = e.viewBox.baseVal) &&
                    ((n = d.x || 0),
                    (o = d.y || 0),
                    (p = d.width),
                    (f = d.height)),
                  p ||
                    ((d = "border-box" === (h = eI(e)).boxSizing),
                    (p =
                      (parseFloat(h.width) || e.clientWidth || 0) +
                      (d
                        ? 0
                        : parseFloat(h.borderLeftWidth) +
                          parseFloat(h.borderRightWidth))),
                    (f =
                      (parseFloat(h.height) || e.clientHeight || 0) +
                      (d
                        ? 0
                        : parseFloat(h.borderTopWidth) +
                          parseFloat(h.borderBottomWidth))))),
              (r = p),
              (i = f);
          }
          return e === t
            ? { left: n, top: o, width: r - n, height: i - o }
            : ((l = (a = E(t, !0).multiply(E(e))).apply({ x: n, y: o })),
              (s = a.apply({ x: r, y: o })),
              (c = a.apply({ x: r, y: i })),
              (u = a.apply({ x: n, y: i })),
              {
                left: (n = Math.min(l.x, s.x, c.x, u.x)),
                top: (o = Math.min(l.y, s.y, c.y, u.y)),
                width: Math.max(l.x, s.x, c.x, u.x) - n,
                height: Math.max(l.y, s.y, c.y, u.y) - o,
              });
        },
        eV = function (e, t, n, r, o, i) {
          var a,
            l,
            s,
            c = {};
          if (t) {
            if (1 !== o && t instanceof Array) {
              if (((c.end = a = []), (s = t.length), Q(t[0])))
                for (l = 0; l < s; l++) a[l] = ev(t[l], o);
              else for (l = 0; l < s; l++) a[l] = t[l] * o;
              (n += 1.1), (r -= 1.1);
            } else
              J(t)
                ? (c.end = function (n) {
                    var r,
                      i,
                      a = t.call(e, n);
                    if (1 !== o) {
                      if (Q(a)) {
                        for (i in ((r = {}), a)) r[i] = a[i] * o;
                        a = r;
                      } else a *= o;
                    }
                    return a;
                  })
                : (c.end = t);
          }
          return (
            (n || 0 === n) && (c.max = n),
            (r || 0 === r) && (c.min = r),
            i && (c.velocity = 0),
            c
          );
        },
        eG = function e(t) {
          var n;
          return (
            !!t &&
            !!t.getAttribute &&
            t !== D &&
            (!!(
              "true" === (n = t.getAttribute("data-clickable")) ||
              ("false" !== n &&
                (ef.test(t.nodeName + "") ||
                  "true" === t.getAttribute("contentEditable")))
            ) ||
              e(t.parentNode))
          );
        },
        eU = function (e, t) {
          for (var n, r = e.length; r--; )
            ((n = e[r]).ondragstart = n.onselectstart = t ? null : et),
              N.set(n, { lazy: !0, userSelect: t ? "text" : "none" });
        },
        eK = function (e, t) {
          (e = N.utils.toArray(e)[0]), (t = t || {});
          var n,
            r,
            o,
            i,
            a,
            l,
            s = document.createElement("div"),
            c = s.style,
            u = e.firstChild,
            d = 0,
            p = 0,
            f = e.scrollTop,
            h = e.scrollLeft,
            g = e.scrollWidth,
            m = e.scrollHeight,
            v = 0,
            x = 0,
            y = 0;
          U && !1 !== t.force3D
            ? ((a = "translate3d("), (l = "px,0px)"))
            : en && ((a = "translate("), (l = "px)")),
            (this.scrollTop = function (e, t) {
              if (!arguments.length) return -this.top();
              this.top(-e, t);
            }),
            (this.scrollLeft = function (e, t) {
              if (!arguments.length) return -this.left();
              this.left(-e, t);
            }),
            (this.left = function (n, r) {
              if (!arguments.length) return -(e.scrollLeft + p);
              var o = e.scrollLeft - h,
                i = p;
              if ((o > 2 || o < -2) && !r) {
                (h = e.scrollLeft),
                  N.killTweensOf(this, { left: 1, scrollLeft: 1 }),
                  this.left(-h),
                  t.onKill && t.onKill();
                return;
              }
              (n = -n) < 0
                ? ((p = (n - 0.5) | 0), (n = 0))
                : n > x
                ? ((p = (n - x) | 0), (n = x))
                : (p = 0),
                (p || i) &&
                  (this._skip || (c[en] = a + -p + "px," + -d + l),
                  p + v >= 0 && (c.paddingRight = p + v + "px")),
                (e.scrollLeft = 0 | n),
                (h = e.scrollLeft);
            }),
            (this.top = function (n, r) {
              if (!arguments.length) return -(e.scrollTop + d);
              var o = e.scrollTop - f,
                i = d;
              if ((o > 2 || o < -2) && !r) {
                (f = e.scrollTop),
                  N.killTweensOf(this, { top: 1, scrollTop: 1 }),
                  this.top(-f),
                  t.onKill && t.onKill();
                return;
              }
              (n = -n) < 0
                ? ((d = (n - 0.5) | 0), (n = 0))
                : n > y
                ? ((d = (n - y) | 0), (n = y))
                : (d = 0),
                (d || i) && !this._skip && (c[en] = a + -p + "px," + -d + l),
                (e.scrollTop = 0 | n),
                (f = e.scrollTop);
            }),
            (this.maxScrollTop = function () {
              return y;
            }),
            (this.maxScrollLeft = function () {
              return x;
            }),
            (this.disable = function () {
              for (u = s.firstChild; u; )
                (i = u.nextSibling), e.appendChild(u), (u = i);
              e === s.parentNode && e.removeChild(s);
            }),
            (this.enable = function () {
              if ((u = e.firstChild) !== s) {
                for (; u; ) (i = u.nextSibling), s.appendChild(u), (u = i);
                e.appendChild(s), this.calibrate();
              }
            }),
            (this.calibrate = function (t) {
              var i,
                a,
                l,
                u = e.clientWidth === n;
              (f = e.scrollTop),
                (h = e.scrollLeft),
                (!u ||
                  e.clientHeight !== r ||
                  s.offsetHeight !== o ||
                  g !== e.scrollWidth ||
                  m !== e.scrollHeight ||
                  t) &&
                  ((d || p) &&
                    ((a = this.left()),
                    (l = this.top()),
                    this.left(-e.scrollLeft),
                    this.top(-e.scrollTop)),
                  (i = eI(e)),
                  (!u || t) &&
                    ((c.display = "block"),
                    (c.width = "auto"),
                    (c.paddingRight = "0px"),
                    (v = Math.max(0, e.scrollWidth - e.clientWidth)) &&
                      (v +=
                        parseFloat(i.paddingLeft) +
                        (K ? parseFloat(i.paddingRight) : 0))),
                  (c.display = "inline-block"),
                  (c.position = "relative"),
                  (c.overflow = "visible"),
                  (c.verticalAlign = "top"),
                  (c.boxSizing = "content-box"),
                  (c.width = "100%"),
                  (c.paddingRight = v + "px"),
                  K && (c.paddingBottom = i.paddingBottom),
                  (n = e.clientWidth),
                  (r = e.clientHeight),
                  (g = e.scrollWidth),
                  (m = e.scrollHeight),
                  (x = e.scrollWidth - n),
                  (y = e.scrollHeight - r),
                  (o = s.offsetHeight),
                  (c.display = "block"),
                  (a || l) && (this.left(a), this.top(l)));
            }),
            (this.content = s),
            (this.element = e),
            (this._skip = !1),
            this.enable();
        },
        eq = function (e) {
          if ($() && document.body) {
            var t,
              n,
              r,
              o,
              i,
              a = window && window.navigator;
            (_ = window),
              (P = (S = document).documentElement),
              (D = S.body),
              (X = ea("div")),
              (z = !!window.PointerEvent),
              ((R = ea("div")).style.cssText =
                "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
              (W = "grab" === R.style.cursor ? "grab" : "move"),
              (j = a && -1 !== a.userAgent.toLowerCase().indexOf("android")),
              (I =
                ("ontouchstart" in P && "orientation" in _) ||
                (a && (a.MaxTouchPoints > 0 || a.msMaxTouchPoints > 0))),
              (n = ea("div")),
              (o = (r = ea("div")).style),
              (i = D),
              (o.display = "inline-block"),
              (o.position = "relative"),
              (n.style.cssText =
                "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
              n.appendChild(r),
              i.appendChild(n),
              (t = r.offsetHeight + 18 > n.scrollHeight),
              i.removeChild(n),
              (K = t),
              (B = (function (e) {
                for (
                  var t = e.split(","),
                    n = (
                      ("onpointerdown" in X)
                        ? "pointerdown,pointermove,pointerup,pointercancel"
                        : ("onmspointerdown" in X)
                        ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                        : e
                    ).split(","),
                    r = {},
                    o = 4;
                  --o > -1;

                )
                  (r[t[o]] = n[o]), (r[n[o]] = t[o]);
                try {
                  P.addEventListener(
                    "test",
                    null,
                    Object.defineProperty({}, "passive", {
                      get: function () {
                        O = 1;
                      },
                    })
                  );
                } catch (e) {}
                return r;
              })("touchstart,touchmove,touchend,touchcancel")),
              eC(S, "touchcancel", et),
              eC(_, "touchmove", et),
              D && D.addEventListener("touchstart", et),
              eC(S, "contextmenu", function () {
                for (var e in ed) ed[e].isPressed && ed[e].endDrag();
              }),
              (N = A = Z());
          }
          N
            ? ((H = N.plugins.inertia),
              (V = N.core.context || function () {}),
              (en = (Y = N.utils.checkPrefix)(en)),
              (er = Y(er)),
              (L = N.utils.toArray),
              (G = N.core.getStyleSaver),
              (U = !!Y("perspective")))
            : e && console.warn("Please gsap.registerPlugin(Draggable)");
        },
        e$ = (function (e) {
          function t(n, r) {
            (o = e.call(this) || this),
              A || eq(1),
              (n = L(n)[0]),
              (o.styles = G && G(n, "transform,left,top")),
              H || (H = N.plugins.inertia),
              (o.vars = r = ev(r || {})),
              (o.target = n),
              (o.x = o.y = o.rotation = 0),
              (o.dragResistance = parseFloat(r.dragResistance) || 0),
              (o.edgeResistance = isNaN(r.edgeResistance)
                ? 1
                : parseFloat(r.edgeResistance) || 0),
              (o.lockAxis = r.lockAxis),
              (o.autoScroll = r.autoScroll || 0),
              (o.lockedAxis = null),
              (o.allowEventDefault = !!r.allowEventDefault),
              N.getProperty(n, "x");
            var o,
              i,
              a,
              l,
              s,
              c,
              u,
              d,
              p,
              f,
              h,
              g,
              m,
              v,
              x,
              y,
              w,
              b,
              T,
              k,
              D,
              X,
              Y,
              O,
              U,
              K,
              $,
              Z,
              et,
              en,
              ea,
              eu,
              ef,
              ew,
              eT = (r.type || "x,y").toLowerCase(),
              e_ = ~eT.indexOf("x") || ~eT.indexOf("y"),
              eY = -1 !== eT.indexOf("rotation"),
              eB = eY ? "rotation" : e_ ? "x" : "left",
              ez = e_ ? "y" : "top",
              e$ = !!(
                ~eT.indexOf("x") ||
                ~eT.indexOf("left") ||
                "scroll" === eT
              ),
              eZ = !!(
                ~eT.indexOf("y") ||
                ~eT.indexOf("top") ||
                "scroll" === eT
              ),
              eJ = r.minimumMovement || 2,
              eQ = M(o),
              e0 = L(r.trigger || r.handle || n),
              e1 = {},
              e2 = 0,
              e3 = !1,
              e4 = r.autoScrollMarginTop || 40,
              e5 = r.autoScrollMarginRight || 40,
              e9 = r.autoScrollMarginBottom || 40,
              e6 = r.autoScrollMarginLeft || 40,
              e8 = r.clickableTest || eG,
              e7 = 0,
              te = n._gsap || N.core.getCache(n),
              tt = (function e(t) {
                return (
                  "fixed" === eI(t).position ||
                  ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
                );
              })(n),
              tn = function (e, t) {
                return parseFloat(te.get(n, e, t));
              },
              tr = n.ownerDocument || S,
              to = function (e) {
                return (
                  eM(e),
                  e.stopImmediatePropagation && e.stopImmediatePropagation(),
                  !1
                );
              },
              ti = function e(t) {
                if (eQ.autoScroll && eQ.isDragging && (e3 || b)) {
                  var r,
                    o,
                    i,
                    l,
                    s,
                    c,
                    u,
                    d,
                    f = n,
                    h = 15 * eQ.autoScroll;
                  for (
                    e3 = !1,
                      em.scrollTop =
                        null != _.pageYOffset
                          ? _.pageYOffset
                          : null != tr.documentElement.scrollTop
                          ? tr.documentElement.scrollTop
                          : tr.body.scrollTop,
                      em.scrollLeft =
                        null != _.pageXOffset
                          ? _.pageXOffset
                          : null != tr.documentElement.scrollLeft
                          ? tr.documentElement.scrollLeft
                          : tr.body.scrollLeft,
                      l = eQ.pointerX - em.scrollLeft,
                      s = eQ.pointerY - em.scrollTop;
                    f && !o;

                  )
                    (r = (o = eA(f.parentNode)) ? em : f.parentNode),
                      (i = o
                        ? {
                            bottom: Math.max(
                              P.clientHeight,
                              _.innerHeight || 0
                            ),
                            right: Math.max(P.clientWidth, _.innerWidth || 0),
                            left: 0,
                            top: 0,
                          }
                        : r.getBoundingClientRect()),
                      (c = u = 0),
                      eZ &&
                        ((d = r._gsMaxScrollY - r.scrollTop) < 0
                          ? (u = d)
                          : s > i.bottom - e9 && d
                          ? ((e3 = !0),
                            (u = Math.min(
                              d,
                              (h * (1 - Math.max(0, i.bottom - s) / e9)) | 0
                            )))
                          : s < i.top + e4 &&
                            r.scrollTop &&
                            ((e3 = !0),
                            (u = -Math.min(
                              r.scrollTop,
                              (h * (1 - Math.max(0, s - i.top) / e4)) | 0
                            ))),
                        u && (r.scrollTop += u)),
                      e$ &&
                        ((d = r._gsMaxScrollX - r.scrollLeft) < 0
                          ? (c = d)
                          : l > i.right - e5 && d
                          ? ((e3 = !0),
                            (c = Math.min(
                              d,
                              (h * (1 - Math.max(0, i.right - l) / e5)) | 0
                            )))
                          : l < i.left + e6 &&
                            r.scrollLeft &&
                            ((e3 = !0),
                            (c = -Math.min(
                              r.scrollLeft,
                              (h * (1 - Math.max(0, l - i.left) / e6)) | 0
                            ))),
                        c && (r.scrollLeft += c)),
                      o &&
                        (c || u) &&
                        (_.scrollTo(r.scrollLeft, r.scrollTop),
                        tx(eQ.pointerX + c, eQ.pointerY + u)),
                      (f = r);
                }
                if (b) {
                  var g = eQ.x,
                    m = eQ.y;
                  eY
                    ? ((eQ.deltaX = g - parseFloat(te.rotation)),
                      (eQ.rotation = g),
                      (te.rotation = g + "deg"),
                      te.renderTransform(1, te))
                    : a
                    ? (eZ && ((eQ.deltaY = m - a.top()), a.top(m)),
                      e$ && ((eQ.deltaX = g - a.left()), a.left(g)))
                    : e_
                    ? (eZ &&
                        ((eQ.deltaY = m - parseFloat(te.y)), (te.y = m + "px")),
                      e$ &&
                        ((eQ.deltaX = g - parseFloat(te.x)), (te.x = g + "px")),
                      te.renderTransform(1, te))
                    : (eZ &&
                        ((eQ.deltaY = m - parseFloat(n.style.top || 0)),
                        (n.style.top = m + "px")),
                      e$ &&
                        ((eQ.deltaX = g - parseFloat(n.style.left || 0)),
                        (n.style.left = g + "px"))),
                    !p ||
                      t ||
                      et ||
                      ((et = !0),
                      !1 === ej(eQ, "drag", "onDrag") &&
                        (e$ && (eQ.x -= eQ.deltaX),
                        eZ && (eQ.y -= eQ.deltaY),
                        e(!0)),
                      (et = !1));
                }
                b = !1;
              },
              ta = function (e, t) {
                var r,
                  o,
                  i = eQ.x,
                  l = eQ.y;
                n._gsap || (te = N.core.getCache(n)),
                  te.uncache && N.getProperty(n, "x"),
                  e_
                    ? ((eQ.x = parseFloat(te.x)), (eQ.y = parseFloat(te.y)))
                    : eY
                    ? (eQ.x = eQ.rotation = parseFloat(te.rotation))
                    : a
                    ? ((eQ.y = a.top()), (eQ.x = a.left()))
                    : ((eQ.y =
                        parseFloat(n.style.top || ((o = eI(n)) && o.top)) || 0),
                      (eQ.x = parseFloat(n.style.left || (o || {}).left) || 0)),
                  (k || D || X) &&
                    !t &&
                    (eQ.isDragging || eQ.isThrowing) &&
                    (X &&
                      ((eg.x = eQ.x),
                      (eg.y = eQ.y),
                      (r = X(eg)).x !== eQ.x && ((eQ.x = r.x), (b = !0)),
                      r.y !== eQ.y && ((eQ.y = r.y), (b = !0))),
                    k &&
                      (r = k(eQ.x)) !== eQ.x &&
                      ((eQ.x = r), eY && (eQ.rotation = r), (b = !0)),
                    D && ((r = D(eQ.y)) !== eQ.y && (eQ.y = r), (b = !0))),
                  b && ti(!0),
                  e ||
                    ((eQ.deltaX = eQ.x - i),
                    (eQ.deltaY = eQ.y - l),
                    ej(eQ, "throwupdate", "onThrowUpdate"));
              },
              tl = function (e, t, n, r) {
                return (null == t && (t = -1e20), null == n && (n = 1e20), J(e))
                  ? function (o) {
                      var i = eQ.isPressed ? 1 - eQ.edgeResistance : 1;
                      return (
                        e.call(
                          eQ,
                          (o > n
                            ? n + (o - n) * i
                            : o < t
                            ? t + (o - t) * i
                            : o) * r
                        ) * r
                      );
                    }
                  : ei(e)
                  ? function (r) {
                      for (var o, i, a = e.length, l = 0, s = 1e20; --a > -1; )
                        (i = (o = e[a]) - r) < 0 && (i = -i),
                          i < s && o >= t && o <= n && ((l = a), (s = i));
                      return e[l];
                    }
                  : isNaN(e)
                  ? function (e) {
                      return e;
                    }
                  : function () {
                      return e * r;
                    };
              },
              ts = function () {
                var e, t, o, i, l, s, c, u, p, f, x;
                (d = !1),
                  a
                    ? (a.calibrate(),
                      (eQ.minX = g = -a.maxScrollLeft()),
                      (eQ.minY = v = -a.maxScrollTop()),
                      (eQ.maxX = h = eQ.maxY = m = 0),
                      (d = !0))
                    : r.bounds &&
                      ((e = eH(r.bounds, n.parentNode)),
                      eY
                        ? ((eQ.minX = g = e.left),
                          (eQ.maxX = h = e.left + e.width),
                          (eQ.minY = v = eQ.maxY = m = 0))
                        : ee(r.bounds.maxX) && ee(r.bounds.maxY)
                        ? ((t = eH(n, n.parentNode)),
                          (eQ.minX = g =
                            Math.round(tn(eB, "px") + e.left - t.left)),
                          (eQ.minY = v =
                            Math.round(tn(ez, "px") + e.top - t.top)),
                          (eQ.maxX = h = Math.round(g + (e.width - t.width))),
                          (eQ.maxY = m = Math.round(v + (e.height - t.height))))
                        : ((e = r.bounds),
                          (eQ.minX = g = e.minX),
                          (eQ.minY = v = e.minY),
                          (eQ.maxX = h = e.maxX),
                          (eQ.maxY = m = e.maxY)),
                      g > h &&
                        ((eQ.minX = h), (eQ.maxX = h = g), (g = eQ.minX)),
                      v > m &&
                        ((eQ.minY = m), (eQ.maxY = m = v), (v = eQ.minY)),
                      eY && ((eQ.minRotation = g), (eQ.maxRotation = h)),
                      (d = !0)),
                  r.liveSnap &&
                    (((i =
                      ei((o = !0 === r.liveSnap ? r.snap || {} : r.liveSnap)) ||
                      J(o)),
                    eY)
                      ? ((k = tl(i ? o : o.rotation, g, h, 1)), (D = null))
                      : o.points
                      ? ((l = i ? o : o.points),
                        (s = g),
                        (c = h),
                        (u = v),
                        (p = m),
                        (f = o.radius),
                        (x = a ? -1 : 1),
                        (f = f && f < 1e20 ? f * f : 1e20),
                        (X = J(l)
                          ? function (e) {
                              var t,
                                n,
                                r,
                                o = eQ.isPressed ? 1 - eQ.edgeResistance : 1,
                                i = e.x,
                                a = e.y;
                              return (
                                (e.x = i =
                                  i > c
                                    ? c + (i - c) * o
                                    : i < s
                                    ? s + (i - s) * o
                                    : i),
                                (e.y = a =
                                  a > p
                                    ? p + (a - p) * o
                                    : a < u
                                    ? u + (a - u) * o
                                    : a),
                                (t = l.call(eQ, e)) !== e &&
                                  ((e.x = t.x), (e.y = t.y)),
                                1 !== x && ((e.x *= x), (e.y *= x)),
                                f < 1e20 &&
                                  (n = e.x - i) * n + (r = e.y - a) * r > f &&
                                  ((e.x = i), (e.y = a)),
                                e
                              );
                            }
                          : ei(l)
                          ? function (e) {
                              for (
                                var t, n, r, o, i = l.length, a = 0, s = 1e20;
                                --i > -1;

                              )
                                (o =
                                  (t = (r = l[i]).x - e.x) * t +
                                  (n = r.y - e.y) * n) < s &&
                                  ((a = i), (s = o));
                              return s <= f ? l[a] : e;
                            }
                          : function (e) {
                              return e;
                            }))
                      : (e$ &&
                          (k = tl(
                            i ? o : o.x || o.left || o.scrollLeft,
                            g,
                            h,
                            a ? -1 : 1
                          )),
                        eZ &&
                          (D = tl(
                            i ? o : o.y || o.top || o.scrollTop,
                            v,
                            m,
                            a ? -1 : 1
                          ))));
              },
              tc = function () {
                (eQ.isThrowing = !1),
                  ej(eQ, "throwcomplete", "onThrowComplete");
              },
              tu = function () {
                eQ.isThrowing = !1;
              },
              td = function (e, t) {
                var o, i, l, s;
                e && H
                  ? (!0 === e &&
                      ((i = ei((o = r.snap || r.liveSnap || {})) || J(o)),
                      (e = {
                        resistance:
                          (r.throwResistance || r.resistance || 1e3) /
                          (eY ? 10 : 1),
                      }),
                      eY
                        ? (e.rotation = eV(eQ, i ? o : o.rotation, h, g, 1, t))
                        : (e$ &&
                            (e[eB] = eV(
                              eQ,
                              i ? o : o.points || o.x || o.left,
                              h,
                              g,
                              a ? -1 : 1,
                              t || "x" === eQ.lockedAxis
                            )),
                          eZ &&
                            (e[ez] = eV(
                              eQ,
                              i ? o : o.points || o.y || o.top,
                              m,
                              v,
                              a ? -1 : 1,
                              t || "y" === eQ.lockedAxis
                            )),
                          (o.points || (ei(o) && Q(o[0]))) &&
                            ((e.linkedProps = eB + "," + ez),
                            (e.radius = o.radius)))),
                    (eQ.isThrowing = !0),
                    (s = isNaN(r.overshootTolerance)
                      ? 1 === r.edgeResistance
                        ? 0
                        : 1 - eQ.edgeResistance + 0.2
                      : r.overshootTolerance),
                    e.duration ||
                      (e.duration = {
                        max: Math.max(
                          r.minDuration || 0,
                          "maxDuration" in r ? r.maxDuration : 2
                        ),
                        min: isNaN(r.minDuration)
                          ? 0 === s || (Q(e) && e.resistance > 1e3)
                            ? 0
                            : 0.5
                          : r.minDuration,
                        overshoot: s,
                      }),
                    (eQ.tween = l =
                      N.to(a || n, {
                        inertia: e,
                        data: "_draggable",
                        inherit: !1,
                        onComplete: tc,
                        onInterrupt: tu,
                        onUpdate: r.fastMode ? ej : ta,
                        onUpdateParams: r.fastMode
                          ? [eQ, "onthrowupdate", "onThrowUpdate"]
                          : o && o.radius
                          ? [!1, !0]
                          : [],
                      })),
                    !r.fastMode &&
                      (a && (a._skip = !0),
                      l.render(1e9, !0, !0),
                      ta(!0, !0),
                      (eQ.endX = eQ.x),
                      (eQ.endY = eQ.y),
                      eY && (eQ.endRotation = eQ.x),
                      l.play(0),
                      ta(!0, !0),
                      a && (a._skip = !1)))
                  : d && eQ.applyBounds();
              },
              tp = function (e) {
                var t,
                  r = U;
                (U = E(n.parentNode, !0)),
                  e &&
                    eQ.isPressed &&
                    !U.equals(r || new C()) &&
                    ((t = r.inverse().apply({ x: l, y: s })),
                    U.apply(t, t),
                    (l = t.x),
                    (s = t.y)),
                  U.equals(es) && (U = null);
              },
              tf = function () {
                var e,
                  t,
                  r,
                  o = 1 - eQ.edgeResistance,
                  i = tt ? eD(tr) : 0,
                  p = tt ? eP(tr) : 0;
                e_ &&
                  ((te.x = tn(eB, "px") + "px"),
                  (te.y = tn(ez, "px") + "px"),
                  te.renderTransform()),
                  tp(!1),
                  (eW.x = eQ.pointerX - i),
                  (eW.y = eQ.pointerY - p),
                  U && U.apply(eW, eW),
                  (l = eW.x),
                  (s = eW.y),
                  b && (tx(eQ.pointerX, eQ.pointerY), ti(!0)),
                  (ef = E(n)),
                  a
                    ? (ts(), (u = a.top()), (c = a.left()))
                    : (th() ? (ta(!0, !0), ts()) : eQ.applyBounds(),
                      eY
                        ? ((e = n.ownerSVGElement
                            ? [
                                te.xOrigin - n.getBBox().x,
                                te.yOrigin - n.getBBox().y,
                              ]
                            : (eI(n)[er] || "0 0").split(" ")),
                          (w = eQ.rotationOrigin =
                            E(n).apply({
                              x: parseFloat(e[0]) || 0,
                              y: parseFloat(e[1]) || 0,
                            })),
                          ta(!0, !0),
                          (t = eQ.pointerX - w.x - i),
                          (r = w.y - eQ.pointerY + p),
                          (c = eQ.x),
                          (u = eQ.y = Math.atan2(r, t) * el))
                        : ((u = tn(ez, "px")), (c = tn(eB, "px")))),
                  d &&
                    o &&
                    (c > h
                      ? (c = h + (c - h) / o)
                      : c < g && (c = g - (g - c) / o),
                    !eY &&
                      (u > m
                        ? (u = m + (u - m) / o)
                        : u < v && (u = v - (v - u) / o))),
                  (eQ.startX = c = eo(c)),
                  (eQ.startY = u = eo(u));
              },
              th = function () {
                return eQ.tween && eQ.tween.isActive();
              },
              tg = function () {
                !R.parentNode ||
                  th() ||
                  eQ.isDragging ||
                  R.parentNode.removeChild(R);
              },
              tm = function (e, o) {
                var c;
                if (
                  !i ||
                  eQ.isPressed ||
                  !e ||
                  (("mousedown" === e.type || "pointerdown" === e.type) &&
                    !o &&
                    ec() - e7 < 30 &&
                    B[eQ.pointerEvent.type])
                ) {
                  eu && e && i && eM(e);
                  return;
                }
                if (
                  ((K = th()),
                  (ew = !1),
                  (eQ.pointerEvent = e),
                  B[e.type]
                    ? (eC(
                        (O = ~e.type.indexOf("touch")
                          ? e.currentTarget || e.target
                          : tr),
                        "touchend",
                        ty
                      ),
                      eC(O, "touchmove", tv),
                      eC(O, "touchcancel", ty),
                      eC(tr, "touchstart", eS))
                    : ((O = null), eC(tr, "mousemove", tv)),
                  (Z = null),
                  (!z || !O) &&
                    (eC(tr, "mouseup", ty),
                    e && e.target && eC(e.target, "mouseup", ty)),
                  (Y = e8.call(eQ, e.target) && !1 === r.dragClickables && !o))
                ) {
                  eC(e.target, "change", ty),
                    ej(eQ, "pressInit", "onPressInit"),
                    ej(eQ, "press", "onPress"),
                    eU(e0, !0),
                    (eu = !1);
                  return;
                }
                if (
                  ((eu =
                    !($ =
                      !!O &&
                      e$ !== eZ &&
                      !1 !== eQ.vars.allowNativeTouchScrolling &&
                      (!eQ.vars.allowContextMenu ||
                        !e ||
                        (!e.ctrlKey && !(e.which > 2))) &&
                      (e$ ? "y" : "x")) && !eQ.allowEventDefault) &&
                    (eM(e), eC(_, "touchforcechange", eM)),
                  e.changedTouches
                    ? (y = (e = x = e.changedTouches[0]).identifier)
                    : e.pointerId
                    ? (y = e.pointerId)
                    : (x = y = null),
                  q++,
                  eb(ti),
                  (s = eQ.pointerY = e.pageY),
                  (l = eQ.pointerX = e.pageX),
                  ej(eQ, "pressInit", "onPressInit"),
                  ($ || eQ.autoScroll) && eL(n.parentNode),
                  !n.parentNode ||
                    !eQ.autoScroll ||
                    a ||
                    eY ||
                    !n.parentNode._gsMaxScrollX ||
                    R.parentNode ||
                    n.getBBox ||
                    ((R.style.width = n.parentNode.scrollWidth + "px"),
                    n.parentNode.appendChild(R)),
                  tf(),
                  eQ.tween && eQ.tween.kill(),
                  (eQ.isThrowing = !1),
                  N.killTweensOf(a || n, e1, !0),
                  a && N.killTweensOf(n, { scrollTo: 1 }, !0),
                  (eQ.tween = eQ.lockedAxis = null),
                  (!r.zIndexBoost && (eY || a || !1 === r.zIndexBoost)) ||
                    (n.style.zIndex = t.zIndex++),
                  (eQ.isPressed = !0),
                  (p = !!(r.onDrag || eQ._listeners.drag)),
                  (f = !!(r.onMove || eQ._listeners.move)),
                  !1 !== r.cursor || r.activeCursor)
                )
                  for (c = e0.length; --c > -1; )
                    N.set(e0[c], {
                      cursor:
                        r.activeCursor ||
                        r.cursor ||
                        ("grab" === W ? "grabbing" : W),
                    });
                ej(eQ, "press", "onPress");
              },
              tv = function (e) {
                var t,
                  r,
                  o,
                  a,
                  c,
                  u,
                  d = e;
                if (!i || F || !eQ.isPressed || !e) {
                  eu && e && i && eM(e);
                  return;
                }
                if (((eQ.pointerEvent = e), (t = e.changedTouches))) {
                  if ((e = t[0]) !== x && e.identifier !== y) {
                    for (
                      a = t.length;
                      --a > -1 && (e = t[a]).identifier !== y && e.target !== n;

                    );
                    if (a < 0) return;
                  }
                } else if (e.pointerId && y && e.pointerId !== y) return;
                if (
                  O &&
                  $ &&
                  !Z &&
                  ((eW.x = e.pageX - (tt ? eD(tr) : 0)),
                  (eW.y = e.pageY - (tt ? eP(tr) : 0)),
                  U && U.apply(eW, eW),
                  (r = eW.x),
                  (o = eW.y),
                  (((c = Math.abs(r - l)) !== (u = Math.abs(o - s)) &&
                    (c > eJ || u > eJ)) ||
                    (j && $ === Z)) &&
                    ((Z = c > u && e$ ? "x" : "y"),
                    $ && Z !== $ && eC(_, "touchforcechange", eM),
                    !1 !== eQ.vars.lockAxisOnTouchScroll &&
                      e$ &&
                      eZ &&
                      ((eQ.lockedAxis = "x" === Z ? "y" : "x"),
                      J(eQ.vars.onLockAxis) && eQ.vars.onLockAxis.call(eQ, d)),
                    j && $ === Z))
                ) {
                  ty(d);
                  return;
                }
                eQ.allowEventDefault ||
                ($ && (!Z || $ === Z)) ||
                !1 === d.cancelable
                  ? eu && (eu = !1)
                  : (eM(d), (eu = !0)),
                  eQ.autoScroll && (e3 = !0),
                  tx(e.pageX, e.pageY, f);
              },
              tx = function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  p,
                  f,
                  x = 1 - eQ.dragResistance,
                  y = 1 - eQ.edgeResistance,
                  T = eQ.pointerX,
                  C = eQ.pointerY,
                  E = u,
                  M = eQ.x,
                  N = eQ.y,
                  _ = eQ.endX,
                  S = eQ.endY,
                  P = eQ.endRotation,
                  R = b;
                (eQ.pointerX = e),
                  (eQ.pointerY = t),
                  tt && ((e -= eD(tr)), (t -= eP(tr))),
                  eY
                    ? ((a = Math.atan2(w.y - t, e - w.x) * el),
                      (p = eQ.y - a) > 180
                        ? ((u -= 360), (eQ.y = a))
                        : p < -180 && ((u += 360), (eQ.y = a)),
                      eQ.x !== c || Math.abs(u - a) > eJ
                        ? ((eQ.y = a), (i = c + (u - a) * x))
                        : (i = c))
                    : (U &&
                        ((f = e * U.a + t * U.c + U.e),
                        (t = e * U.b + t * U.d + U.f),
                        (e = f)),
                      (o = t - s) < eJ && o > -eJ && (o = 0),
                      (r = e - l) < eJ && r > -eJ && (r = 0),
                      (eQ.lockAxis || eQ.lockedAxis) &&
                        (r || o) &&
                        (!(f = eQ.lockedAxis) &&
                          ((eQ.lockedAxis = f =
                            e$ && Math.abs(r) > Math.abs(o)
                              ? "y"
                              : eZ
                              ? "x"
                              : null),
                          f &&
                            J(eQ.vars.onLockAxis) &&
                            eQ.vars.onLockAxis.call(eQ, eQ.pointerEvent)),
                        "y" === f ? (o = 0) : "x" === f && (r = 0)),
                      (i = eo(c + r * x)),
                      (a = eo(u + o * x))),
                  (k || D || X) &&
                    (eQ.x !== i || (eQ.y !== a && !eY)) &&
                    (X &&
                      ((eg.x = i),
                      (eg.y = a),
                      (i = eo((f = X(eg)).x)),
                      (a = eo(f.y))),
                    k && (i = eo(k(i))),
                    D && (a = eo(D(a)))),
                  d &&
                    (i > h
                      ? (i = h + Math.round((i - h) * y))
                      : i < g && (i = g + Math.round((i - g) * y)),
                    !eY &&
                      (a > m
                        ? (a = Math.round(m + (a - m) * y))
                        : a < v && (a = Math.round(v + (a - v) * y)))),
                  (eQ.x === i && (eQ.y === a || eY)) ||
                    (eY
                      ? ((eQ.endRotation = eQ.x = eQ.endX = i), (b = !0))
                      : (eZ && ((eQ.y = eQ.endY = a), (b = !0)),
                        e$ && ((eQ.x = eQ.endX = i), (b = !0))),
                    n && !1 === ej(eQ, "move", "onMove")
                      ? ((eQ.pointerX = T),
                        (eQ.pointerY = C),
                        (u = E),
                        (eQ.x = M),
                        (eQ.y = N),
                        (eQ.endX = _),
                        (eQ.endY = S),
                        (eQ.endRotation = P),
                        (b = R))
                      : !eQ.isDragging &&
                        eQ.isPressed &&
                        ((eQ.isDragging = ew = !0),
                        ej(eQ, "dragstart", "onDragStart")));
              },
              ty = function e(t, o) {
                if (
                  !i ||
                  !eQ.isPressed ||
                  (t &&
                    null != y &&
                    !o &&
                    ((t.pointerId && t.pointerId !== y && t.target !== n) ||
                      (t.changedTouches && !eN(t.changedTouches, y))))
                ) {
                  eu && t && i && eM(t);
                  return;
                }
                eQ.isPressed = !1;
                var a,
                  l,
                  s,
                  c,
                  u,
                  d = t,
                  p = eQ.isDragging,
                  f =
                    eQ.vars.allowContextMenu && t && (t.ctrlKey || t.which > 2),
                  h = N.delayedCall(0.001, tg);
                if (
                  (O
                    ? (eE(O, "touchend", e),
                      eE(O, "touchmove", tv),
                      eE(O, "touchcancel", e),
                      eE(tr, "touchstart", eS))
                    : eE(tr, "mousemove", tv),
                  eE(_, "touchforcechange", eM),
                  (!z || !O) &&
                    (eE(tr, "mouseup", e),
                    t && t.target && eE(t.target, "mouseup", e)),
                  (b = !1),
                  p && ((e2 = eh = ec()), (eQ.isDragging = !1)),
                  ek(ti),
                  Y && !f)
                ) {
                  t && (eE(t.target, "change", e), (eQ.pointerEvent = d)),
                    eU(e0, !1),
                    ej(eQ, "release", "onRelease"),
                    ej(eQ, "click", "onClick"),
                    (Y = !1);
                  return;
                }
                for (l = e0.length; --l > -1; )
                  eO(e0[l], "cursor", r.cursor || (!1 !== r.cursor ? W : null));
                if ((q--, t)) {
                  if (
                    (a = t.changedTouches) &&
                    (t = a[0]) !== x &&
                    t.identifier !== y
                  ) {
                    for (
                      l = a.length;
                      --l > -1 && (t = a[l]).identifier !== y && t.target !== n;

                    );
                    if (l < 0 && !o) return;
                  }
                  (eQ.pointerEvent = d),
                    (eQ.pointerX = t.pageX),
                    (eQ.pointerY = t.pageY);
                }
                return (
                  f && d
                    ? (eM(d), (eu = !0), ej(eQ, "release", "onRelease"))
                    : d && !p
                    ? ((eu = !1),
                      K &&
                        (r.snap || r.bounds) &&
                        td(r.inertia || r.throwProps),
                      ej(eQ, "release", "onRelease"),
                      (j && "touchmove" === d.type) ||
                        -1 !== d.type.indexOf("cancel") ||
                        (ej(eQ, "click", "onClick"),
                        ec() - e7 < 300 &&
                          ej(eQ, "doubleclick", "onDoubleClick"),
                        (c = d.target || n),
                        (e7 = ec()),
                        (u = function () {
                          e7 !== en &&
                            eQ.enabled() &&
                            !eQ.isPressed &&
                            !d.defaultPrevented &&
                            (c.click
                              ? c.click()
                              : tr.createEvent &&
                                ((s =
                                  tr.createEvent("MouseEvents")).initMouseEvent(
                                  "click",
                                  !0,
                                  !0,
                                  _,
                                  1,
                                  eQ.pointerEvent.screenX,
                                  eQ.pointerEvent.screenY,
                                  eQ.pointerX,
                                  eQ.pointerY,
                                  !1,
                                  !1,
                                  !1,
                                  !1,
                                  0,
                                  null
                                ),
                                c.dispatchEvent(s)));
                        }),
                        j || d.defaultPrevented || N.delayedCall(0.05, u)))
                    : (td(r.inertia || r.throwProps),
                      !eQ.allowEventDefault &&
                      d &&
                      (!1 !== r.dragClickables || !e8.call(eQ, d.target)) &&
                      p &&
                      (!$ || (Z && $ === Z)) &&
                      !1 !== d.cancelable
                        ? ((eu = !0), eM(d))
                        : (eu = !1),
                      ej(eQ, "release", "onRelease")),
                  th() && h.duration(eQ.tween.duration()),
                  p && ej(eQ, "dragend", "onDragEnd"),
                  !0
                );
              },
              tw = function (e) {
                if (e && eQ.isDragging && !a) {
                  var t = e.target || n.parentNode,
                    r = t.scrollLeft - t._gsScrollX,
                    o = t.scrollTop - t._gsScrollY;
                  (r || o) &&
                    (U
                      ? ((l -= r * U.a + o * U.c), (s -= o * U.d + r * U.b))
                      : ((l -= r), (s -= o)),
                    (t._gsScrollX += r),
                    (t._gsScrollY += o),
                    tx(eQ.pointerX, eQ.pointerY));
                }
              },
              tb = function (e) {
                var t = ec(),
                  n = t - e7 < 100,
                  r = t - e2 < 50,
                  o = n && en === e7,
                  i = eQ.pointerEvent && eQ.pointerEvent.defaultPrevented,
                  a = n && ea === e7,
                  l = e.isTrusted || (null == e.isTrusted && n && o);
                if (
                  ((o || (r && !1 !== eQ.vars.suppressClickOnDrag)) &&
                    e.stopImmediatePropagation &&
                    e.stopImmediatePropagation(),
                  n &&
                    !(eQ.pointerEvent && eQ.pointerEvent.defaultPrevented) &&
                    (!o || (l && !a)))
                ) {
                  l && o && (ea = e7), (en = e7);
                  return;
                }
                (eQ.isPressed || r || n) &&
                  (!l || !e.detail || !n || i) &&
                  eM(e),
                  n ||
                    r ||
                    ew ||
                    (e && e.target && (eQ.pointerEvent = e),
                    ej(eQ, "click", "onClick"));
              },
              tT = function (e) {
                return U
                  ? {
                      x: e.x * U.a + e.y * U.c + U.e,
                      y: e.x * U.b + e.y * U.d + U.f,
                    }
                  : { x: e.x, y: e.y };
              };
            return (
              (T = t.get(n)) && T.kill(),
              (o.startDrag = function (e, t) {
                var r, o, i, a;
                tm(e || eQ.pointerEvent, !0),
                  t &&
                    !eQ.hitTest(e || eQ.pointerEvent) &&
                    ((r = eF(e || eQ.pointerEvent)),
                    (o = eF(n)),
                    (i = tT({
                      x: r.left + r.width / 2,
                      y: r.top + r.height / 2,
                    })),
                    (a = tT({
                      x: o.left + o.width / 2,
                      y: o.top + o.height / 2,
                    })),
                    (l -= i.x - a.x),
                    (s -= i.y - a.y)),
                  eQ.isDragging ||
                    ((eQ.isDragging = ew = !0),
                    ej(eQ, "dragstart", "onDragStart"));
              }),
              (o.drag = tv),
              (o.endDrag = function (e) {
                return ty(e || eQ.pointerEvent, !0);
              }),
              (o.timeSinceDrag = function () {
                return eQ.isDragging ? 0 : (ec() - e2) / 1e3;
              }),
              (o.timeSinceClick = function () {
                return (ec() - e7) / 1e3;
              }),
              (o.hitTest = function (e, n) {
                return t.hitTest(eQ.target, e, n);
              }),
              (o.getDirection = function (e, t) {
                var r,
                  o,
                  i,
                  a,
                  l,
                  s,
                  d =
                    "velocity" === e && H
                      ? e
                      : Q(e) && !eY
                      ? "element"
                      : "start";
                return ("element" === d && ((l = eF(eQ.target)), (s = eF(e))),
                (r =
                  "start" === d
                    ? eQ.x - c
                    : "velocity" === d
                    ? H.getVelocity(n, eB)
                    : l.left + l.width / 2 - (s.left + s.width / 2)),
                eY)
                  ? r < 0
                    ? "counter-clockwise"
                    : "clockwise"
                  : ((t = t || 2),
                    (a =
                      (i = Math.abs(
                        r /
                          (o =
                            "start" === d
                              ? eQ.y - u
                              : "velocity" === d
                              ? H.getVelocity(n, ez)
                              : l.top + l.height / 2 - (s.top + s.height / 2))
                      )) <
                      1 / t
                        ? ""
                        : r < 0
                        ? "left"
                        : "right"),
                    i < t &&
                      ("" !== a && (a += "-"), (a += o < 0 ? "up" : "down")),
                    a);
              }),
              (o.applyBounds = function (e, t) {
                var o, i, a, l, s, c;
                if (e && r.bounds !== e)
                  return (r.bounds = e), eQ.update(!0, t);
                if ((ta(!0), ts(), d && !th())) {
                  if (
                    ((o = eQ.x),
                    (i = eQ.y),
                    o > h ? (o = h) : o < g && (o = g),
                    i > m ? (i = m) : i < v && (i = v),
                    (eQ.x !== o || eQ.y !== i) &&
                      ((a = !0),
                      (eQ.x = eQ.endX = o),
                      eY ? (eQ.endRotation = o) : (eQ.y = eQ.endY = i),
                      (b = !0),
                      ti(!0),
                      eQ.autoScroll && !eQ.isDragging))
                  )
                    for (
                      eL(n.parentNode),
                        l = n,
                        em.scrollTop =
                          null != _.pageYOffset
                            ? _.pageYOffset
                            : null != tr.documentElement.scrollTop
                            ? tr.documentElement.scrollTop
                            : tr.body.scrollTop,
                        em.scrollLeft =
                          null != _.pageXOffset
                            ? _.pageXOffset
                            : null != tr.documentElement.scrollLeft
                            ? tr.documentElement.scrollLeft
                            : tr.body.scrollLeft;
                      l && !c;

                    )
                      (s = (c = eA(l.parentNode)) ? em : l.parentNode),
                        eZ &&
                          s.scrollTop > s._gsMaxScrollY &&
                          (s.scrollTop = s._gsMaxScrollY),
                        e$ &&
                          s.scrollLeft > s._gsMaxScrollX &&
                          (s.scrollLeft = s._gsMaxScrollX),
                        (l = s);
                  eQ.isThrowing &&
                    (a ||
                      eQ.endX > h ||
                      eQ.endX < g ||
                      eQ.endY > m ||
                      eQ.endY < v) &&
                    td(r.inertia || r.throwProps, a);
                }
                return eQ;
              }),
              (o.update = function (e, t, r) {
                if (t && eQ.isPressed) {
                  var o = E(n),
                    i = ef.apply({ x: eQ.x - c, y: eQ.y - u }),
                    a = E(n.parentNode, !0);
                  a.apply({ x: o.e - i.x, y: o.f - i.y }, i),
                    (eQ.x -= i.x - a.e),
                    (eQ.y -= i.y - a.f),
                    ti(!0),
                    tf();
                }
                var l = eQ.x,
                  s = eQ.y;
                return (
                  tp(!t),
                  e ? eQ.applyBounds() : (b && r && ti(!0), ta(!0)),
                  t && (tx(eQ.pointerX, eQ.pointerY), b && ti(!0)),
                  eQ.isPressed &&
                    !t &&
                    ((e$ && Math.abs(l - eQ.x) > 0.01) ||
                      (eZ && Math.abs(s - eQ.y) > 0.01 && !eY)) &&
                    tf(),
                  eQ.autoScroll &&
                    (eL(n.parentNode, eQ.isDragging),
                    (e3 = eQ.isDragging),
                    ti(!0),
                    eR(n, tw),
                    eX(n, tw)),
                  eQ
                );
              }),
              (o.enable = function (e) {
                var t,
                  o,
                  l,
                  s = { lazy: !0 };
                if (
                  (!1 !== r.cursor && (s.cursor = r.cursor || W),
                  N.utils.checkPrefix("touchCallout") &&
                    (s.touchCallout = "none"),
                  "soft" !== e)
                ) {
                  for (
                    ey(
                      e0,
                      e$ === eZ
                        ? "none"
                        : (r.allowNativeTouchScrolling &&
                            (n.scrollHeight === n.clientHeight) ==
                              (n.scrollWidth === n.clientHeight)) ||
                          r.allowEventDefault
                        ? "manipulation"
                        : e$
                        ? "pan-y"
                        : "pan-x"
                    ),
                      o = e0.length;
                    --o > -1;

                  )
                    (l = e0[o]),
                      z || eC(l, "mousedown", tm),
                      eC(l, "touchstart", tm),
                      eC(l, "click", tb, !0),
                      N.set(l, s),
                      l.getBBox &&
                        l.ownerSVGElement &&
                        e$ !== eZ &&
                        N.set(l.ownerSVGElement, {
                          touchAction:
                            r.allowNativeTouchScrolling || r.allowEventDefault
                              ? "manipulation"
                              : e$
                              ? "pan-y"
                              : "pan-x",
                        }),
                      r.allowContextMenu || eC(l, "contextmenu", to);
                  eU(e0, !1);
                }
                return (
                  eX(n, tw),
                  (i = !0),
                  H &&
                    "soft" !== e &&
                    H.track(a || n, e_ ? "x,y" : eY ? "rotation" : "top,left"),
                  (n._gsDragID = t = "d" + ep++),
                  (ed[t] = eQ),
                  a && (a.enable(), (a.element._gsDragID = t)),
                  (r.bounds || eY) && tf(),
                  r.bounds && eQ.applyBounds(),
                  eQ
                );
              }),
              (o.disable = function (e) {
                for (var t, r = eQ.isDragging, o = e0.length; --o > -1; )
                  eO(e0[o], "cursor", null);
                if ("soft" !== e) {
                  for (ey(e0, null), o = e0.length; --o > -1; )
                    eO((t = e0[o]), "touchCallout", null),
                      eE(t, "mousedown", tm),
                      eE(t, "touchstart", tm),
                      eE(t, "click", tb, !0),
                      eE(t, "contextmenu", to);
                  eU(e0, !0),
                    O &&
                      (eE(O, "touchcancel", ty),
                      eE(O, "touchend", ty),
                      eE(O, "touchmove", tv)),
                    eE(tr, "mouseup", ty),
                    eE(tr, "mousemove", tv);
                }
                return (
                  eR(n, tw),
                  (i = !1),
                  H &&
                    "soft" !== e &&
                    (H.untrack(
                      a || n,
                      e_ ? "x,y" : eY ? "rotation" : "top,left"
                    ),
                    eQ.tween && eQ.tween.kill()),
                  a && a.disable(),
                  ek(ti),
                  (eQ.isDragging = eQ.isPressed = Y = !1),
                  r && ej(eQ, "dragend", "onDragEnd"),
                  eQ
                );
              }),
              (o.enabled = function (e, t) {
                return arguments.length
                  ? e
                    ? eQ.enable(t)
                    : eQ.disable(t)
                  : i;
              }),
              (o.kill = function () {
                return (
                  (eQ.isThrowing = !1),
                  eQ.tween && eQ.tween.kill(),
                  eQ.disable(),
                  N.set(e0, { clearProps: "userSelect" }),
                  delete ed[n._gsDragID],
                  eQ
                );
              }),
              (o.revert = function () {
                this.kill(), this.styles && this.styles.revert();
              }),
              ~eT.indexOf("scroll") &&
                ((a = o.scrollProxy =
                  new eK(
                    n,
                    ex(
                      {
                        onKill: function () {
                          eQ.isPressed && ty(null);
                        },
                      },
                      r
                    )
                  )),
                (n.style.overflowY = eZ && !I ? "auto" : "hidden"),
                (n.style.overflowX = e$ && !I ? "auto" : "hidden"),
                (n = a.content)),
              eY ? (e1.rotation = 1) : (e$ && (e1[eB] = 1), eZ && (e1[ez] = 1)),
              (te.force3D = !("force3D" in r) || r.force3D),
              V(M(o)),
              o.enable(),
              o
            );
          }
          return (
            (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e),
            (t.register = function (e) {
              (N = e), eq();
            }),
            (t.create = function (e, n) {
              return (
                A || eq(!0),
                L(e).map(function (e) {
                  return new t(e, n);
                })
              );
            }),
            (t.get = function (e) {
              return ed[(L(e)[0] || {})._gsDragID];
            }),
            (t.timeSinceDrag = function () {
              return (ec() - eh) / 1e3;
            }),
            (t.hitTest = function (e, t, n) {
              if (e === t) return !1;
              var r,
                o,
                i,
                a = eF(e),
                l = eF(t),
                s = a.top,
                c = a.left,
                u = a.right,
                d = a.bottom,
                p = a.width,
                f = a.height,
                h = l.left > u || l.right < c || l.top > d || l.bottom < s;
              return h || !n
                ? !h
                : ((i = -1 !== (n + "").indexOf("%")),
                  (n = parseFloat(n) || 0),
                  ((r = {
                    left: Math.max(c, l.left),
                    top: Math.max(s, l.top),
                  }).width = Math.min(u, l.right) - r.left),
                  (r.height = Math.min(d, l.bottom) - r.top),
                  !(r.width < 0) &&
                    !(r.height < 0) &&
                    (i
                      ? ((n *= 0.01),
                        (o = r.width * r.height) >= p * f * n ||
                          o >= l.width * l.height * n)
                      : r.width > n && r.height > n));
            }),
            t
          );
        })(
          (function () {
            function e(e) {
              (this._listeners = {}), (this.target = e || this);
            }
            var t = e.prototype;
            return (
              (t.addEventListener = function (e, t) {
                var n = this._listeners[e] || (this._listeners[e] = []);
                ~n.indexOf(t) || n.push(t);
              }),
              (t.removeEventListener = function (e, t) {
                var n = this._listeners[e],
                  r = n && n.indexOf(t);
                r >= 0 && n.splice(r, 1);
              }),
              (t.dispatchEvent = function (e) {
                var t,
                  n = this;
                return (
                  (this._listeners[e] || []).forEach(function (r) {
                    return (
                      !1 === r.call(n, { type: e, target: n.target }) &&
                      (t = !1)
                    );
                  }),
                  t
                );
              }),
              e
            );
          })()
        );
      !(function (e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
      })(e$.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1,
      }),
        (e$.zIndex = 1e3),
        (e$.version = "3.12.5"),
        Z() && N.registerPlugin(e$);
    },
    1237: (e, t, n) => {
      n.d(t, { w6: () => J });
      var r,
        o,
        i,
        a,
        l,
        s,
        c,
        u,
        d = function () {
          return r || ("undefined" != typeof window && (r = window.gsap));
        },
        p = {},
        f = function (e) {
          return u(e).id;
        },
        h = function (e) {
          return p[f("string" == typeof e ? i(e)[0] : e)];
        },
        g = function (e) {
          var t,
            n = l;
          if (e - c >= 0.05)
            for (c = e; n; )
              ((t = n.g(n.t, n.p)) !== n.v1 || e - n.t1 > 0.2) &&
                ((n.v2 = n.v1), (n.v1 = t), (n.t2 = n.t1), (n.t1 = e)),
                (n = n._next);
        },
        m = { deg: 360, rad: 2 * Math.PI },
        v = function () {
          (r = d()) &&
            ((i = r.utils.toArray),
            (a = r.utils.getUnit),
            (u = r.core.getCache),
            (s = r.ticker),
            (o = 1));
        },
        x = function (e, t, n, r) {
          (this.t = e),
            (this.p = t),
            (this.g = e._gsap.get),
            (this.rCap = m[n || a(this.g(e, t))]),
            (this.v1 = this.v2 = 0),
            (this.t1 = this.t2 = s.time),
            r && ((this._next = r), (r._prev = this));
        },
        y = (function () {
          function e(e, t) {
            o || v(),
              (this.target = i(e)[0]),
              (p[f(this.target)] = this),
              (this._props = {}),
              t && this.add(t);
          }
          e.register = function (e) {
            (r = e), v();
          };
          var t = e.prototype;
          return (
            (t.get = function (e, t) {
              var n,
                r,
                o =
                  this._props[e] ||
                  console.warn("Not tracking " + e + " velocity.");
              return (
                (n = parseFloat(t ? o.v1 : o.g(o.t, o.p)) - parseFloat(o.v2)),
                (r = o.rCap) &&
                  (n %= r) != n % (r / 2) &&
                  (n = n < 0 ? n + r : n - r),
                Math.round(1e4 * (n / ((t ? o.t1 : s.time) - o.t2))) / 1e4
              );
            }),
            (t.getAll = function () {
              var e,
                t = {},
                n = this._props;
              for (e in n) t[e] = this.get(e);
              return t;
            }),
            (t.isTracking = function (e) {
              return e in this._props;
            }),
            (t.add = function (e, t) {
              e in this._props ||
                (l || (s.add(g), (c = s.time)),
                (l = this._props[e] = new x(this.target, e, t, l)));
            }),
            (t.remove = function (e) {
              var t,
                n,
                r = this._props[e];
              r &&
                ((t = r._prev),
                (n = r._next),
                t && (t._next = n),
                n ? (n._prev = t) : l === r && (s.remove(g), (l = 0)),
                delete this._props[e]);
            }),
            (t.kill = function (e) {
              for (var t in this._props) this.remove(t);
              e || delete p[f(this.target)];
            }),
            (e.track = function (t, n, r) {
              o || v();
              for (
                var a,
                  l,
                  s = [],
                  c = i(t),
                  u = n.split(","),
                  d = (r || "").split(","),
                  p = c.length;
                p--;

              ) {
                for (a = h(c[p]) || new e(c[p]), l = u.length; l--; )
                  a.add(u[l], d[l] || d[0]);
                s.push(a);
              }
              return s;
            }),
            (e.untrack = function (e, t) {
              var n = (t || "").split(",");
              i(e).forEach(function (e) {
                var t = h(e);
                t &&
                  (n.length
                    ? n.forEach(function (e) {
                        return t.remove(e);
                      })
                    : t.kill(1));
              });
            }),
            (e.isTracking = function (e, t) {
              var n = h(e);
              return n && n.isTracking(t);
            }),
            (e.getVelocity = function (e, t) {
              var n = h(e);
              return n && n.isTracking(t)
                ? n.get(t)
                : console.warn("Not tracking velocity of " + t);
            }),
            e
          );
        })();
      (y.getByTarget = h), d() && r.registerPlugin(y);
      var w,
        b,
        T,
        k,
        C,
        E,
        M,
        N,
        _,
        S,
        P,
        D,
        X,
        R,
        A = y.getByTarget,
        Y = function () {
          return (
            w ||
            ("undefined" != typeof window &&
              (w = window.gsap) &&
              w.registerPlugin &&
              w)
          );
        },
        L = function (e) {
          return "number" == typeof e;
        },
        O = function (e) {
          return "object" == typeof e;
        },
        I = function (e) {
          return "function" == typeof e;
        },
        B = Array.isArray,
        F = function (e) {
          return e;
        },
        j = function (e, t, n) {
          for (var r in t) r in e || r === n || (e[r] = t[r]);
          return e;
        },
        H = function e(t) {
          var n,
            r,
            o = {};
          for (n in t) o[n] = O((r = t[n])) && !B(r) ? e(r) : r;
          return o;
        },
        W = function (e, t, n, r, o) {
          var i,
            a,
            l,
            s,
            c = t.length,
            u = 0,
            d = 1e10;
          if (O(e)) {
            for (; c--; ) {
              for (l in ((i = t[c]), (a = 0), e)) a += (s = i[l] - e[l]) * s;
              a < d && ((u = c), (d = a));
            }
            if (1e10 > (o || 1e10) && o < Math.sqrt(d)) return e;
          } else
            for (; c--; )
              (a = (i = t[c]) - e) < 0 && (a = -a),
                a < d && i >= r && i <= n && ((u = c), (d = a));
          return t[u];
        },
        z = function (e, t, n, r, o, i, a) {
          if ("auto" === e.end) return e;
          var l,
            s,
            c = e.end;
          if (((n = isNaN(n) ? 1e10 : n), (r = isNaN(r) ? -1e10 : r), O(t))) {
            if (
              ((l = t.calculated
                ? t
                : (I(c) ? c(t, a) : W(t, c, n, r, i)) || t),
              !t.calculated)
            ) {
              for (s in l) t[s] = l[s];
              t.calculated = !0;
            }
            l = l[o];
          } else l = I(c) ? c(t, a) : B(c) ? W(t, c, n, r, i) : parseFloat(c);
          return (
            l > n ? (l = n) : l < r && (l = r),
            { max: l, min: l, unitFactor: e.unitFactor }
          );
        },
        V = function (e, t, n) {
          return isNaN(e[t]) ? n : +e[t];
        },
        G = function (e, t) {
          return (0.05 * t * e) / S;
        },
        U = function (e, t, n) {
          return Math.abs(((t - e) * S) / n / 0.05);
        },
        K = {
          resistance: 1,
          checkpoint: 1,
          preventOvershoot: 1,
          linkedProps: 1,
          radius: 1,
          duration: 1,
        },
        q = function (e, t, n, r) {
          if (t.linkedProps) {
            var o,
              i,
              a,
              l,
              s,
              c,
              u = t.linkedProps.split(","),
              d = {};
            for (o = 0; o < u.length; o++)
              (a = t[(i = u[o])]) &&
                ((c = Math.abs(
                  (l = L(a.velocity)
                    ? a.velocity
                    : (s = s || A(e)) && s.isTracking(i)
                    ? s.get(i)
                    : 0) / V(a, "resistance", r)
                )),
                (d[i] = parseFloat(n(e, i)) + G(l, c)));
            return d;
          }
        },
        $ = function (e, t, n, r, o, i) {
          if (
            (void 0 === n && (n = 10),
            void 0 === r && (r = 0.2),
            void 0 === o && (o = 1),
            void 0 === i && (i = 0),
            "string" == typeof e && (e = k(e)[0]),
            !e)
          )
            return 0;
          var a,
            l,
            s,
            c,
            u,
            d,
            p,
            f,
            h,
            g,
            m = 0,
            v = 1e10,
            x = t.inertia || t,
            y = _(e).get,
            w = V(x, "resistance", E.resistance);
          for (a in ((g = q(e, x, y, w)), x))
            !K[a] &&
              (O((l = x[a])) ||
                ((f = f || A(e)) && f.isTracking(a)
                  ? (l = L(l) ? { velocity: l } : { velocity: f.get(a) })
                  : (s = Math.abs((c = +l || 0) / w))),
              O(l) &&
                ((c = L(l.velocity)
                  ? l.velocity
                  : (f = f || A(e)) && f.isTracking(a)
                  ? f.get(a)
                  : 0),
                (s = P(r, n, Math.abs(c / V(l, "resistance", w)))),
                (d = (u = parseFloat(y(e, a)) || 0) + G(c, s)),
                "end" in l &&
                  ((l = z(
                    l,
                    g && a in g ? g : d,
                    l.max,
                    l.min,
                    a,
                    x.radius,
                    c
                  )),
                  i && (D === t && (D = x = H(t)), (x[a] = j(l, x[a], "end")))),
                "max" in l && d > +l.max + 1e-10
                  ? ((h = l.unitFactor || E.unitFactors[a] || 1),
                    (p =
                      (u > l.max && l.min !== l.max) ||
                      (c * h > -15 && c * h < 45)
                        ? r + (n - r) * 0.1
                        : U(u, l.max, c)) +
                      o <
                      v && (v = p + o))
                  : "min" in l &&
                    d < +l.min - 1e-10 &&
                    ((h = l.unitFactor || E.unitFactors[a] || 1),
                    (p =
                      (u < l.min && l.min !== l.max) ||
                      (c * h > -45 && c * h < 15)
                        ? r + (n - r) * 0.1
                        : U(u, l.min, c)) +
                      o <
                      v && (v = p + o)),
                p > m && (m = p)),
              s > m && (m = s));
          return m > v && (m = v), m > n ? n : m < r ? r : m;
        },
        Z = function () {
          (w = Y()) &&
            ((T = w.parseEase),
            (k = w.utils.toArray),
            (M = w.utils.getUnit),
            (_ = w.core.getCache),
            (P = w.utils.clamp),
            (X = w.core.getStyleSaver),
            (R = w.core.reverting || function () {}),
            (S = (C = T("power3"))(0.05)),
            (N = w.core.PropTween),
            w.config({
              resistance: 100,
              unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3,
              },
            }),
            (E = w.config()),
            w.registerPlugin(y),
            (b = 1));
        },
        J = {
          version: "3.12.5",
          name: "inertia",
          register: function (e) {
            (w = e), Z();
          },
          init: function (e, t, n, r, o) {
            b || Z();
            var i = A(e);
            if ("auto" === t) {
              if (!i) {
                console.warn(
                  "No inertia tracking on " +
                    e +
                    ". InertiaPlugin.track(target) first."
                );
                return;
              }
              t = i.getAll();
            }
            (this.styles = X && "object" == typeof e.style && X(e)),
              (this.target = e),
              (this.tween = n),
              (D = t);
            var a,
              l,
              s,
              c,
              u,
              d,
              p,
              f,
              h,
              g = e._gsap,
              m = g.get,
              v = t.duration,
              x = O(v),
              y = t.preventOvershoot || (x && 0 === v.overshoot),
              w = V(t, "resistance", E.resistance),
              T = L(v)
                ? v
                : $(
                    e,
                    t,
                    (x && v.max) || 10,
                    (x && v.min) || 0.2,
                    x && "overshoot" in v ? +v.overshoot : y ? 0 : 1,
                    !0
                  );
            for (a in ((t = D), (D = 0), (h = q(e, t, m, w)), t))
              K[a] ||
                (I((l = t[a])) && (l = l(r, e, o)),
                L(l)
                  ? (u = l)
                  : O(l) && !isNaN(l.velocity)
                  ? (u = +l.velocity)
                  : i && i.isTracking(a)
                  ? (u = i.get(a))
                  : console.warn(
                      "ERROR: No velocity was defined for " +
                        e +
                        " property: " +
                        a
                    ),
                (d = G(u, T)),
                (f = 0),
                (s = m(e, a)),
                (c = M(s)),
                (s = parseFloat(s)),
                O(l) &&
                  ((p = s + d),
                  "end" in l &&
                    (l = z(
                      l,
                      h && a in h ? h : p,
                      l.max,
                      l.min,
                      a,
                      t.radius,
                      u
                    )),
                  "max" in l && +l.max < p
                    ? y || l.preventOvershoot
                      ? (d = l.max - s)
                      : (f = l.max - s - d)
                    : "min" in l &&
                      +l.min > p &&
                      (y || l.preventOvershoot
                        ? (d = l.min - s)
                        : (f = l.min - s - d))),
                this._props.push(a),
                this.styles && this.styles.save(a),
                (this._pt = new N(
                  this._pt,
                  e,
                  a,
                  s,
                  0,
                  F,
                  0,
                  g.set(e, a, this)
                )),
                (this._pt.u = c || 0),
                (this._pt.c1 = d),
                (this._pt.c2 = f));
            return n.duration(T), 1;
          },
          render: function (e, t) {
            var n = t._pt;
            if ((e = C(t.tween._time / t.tween._dur)) || !R())
              for (; n; )
                n.set(
                  n.t,
                  n.p,
                  Math.round(1e4 * (n.s + n.c1 * e + n.c2 * e * e)) / 1e4 + n.u,
                  n.d,
                  e
                ),
                  (n = n._next);
            else t.styles.revert();
          },
        };
      "track,untrack,isTracking,getVelocity,getByTarget"
        .split(",")
        .forEach(function (e) {
          return (J[e] = y[e]);
        }),
        Y() && w.registerPlugin(J);
    },
  },
]);
