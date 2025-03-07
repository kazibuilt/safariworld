"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [134],
  {
    7199: (e, t, n) => {
      n.d(t, { bL: () => b, zi: () => M });
      var r = n(4612),
        s = n(1277),
        i = n(1864),
        a = n(9894),
        o = n(2625),
        h = n(1421),
        l = n(3957),
        c = n(8932),
        u = n(2104),
        f = "Switch",
        [d, g] = (0, a.A)(f),
        [p, y] = d(f),
        x = r.forwardRef((e, t) => {
          let {
              __scopeSwitch: n,
              name: a,
              checked: h,
              defaultChecked: l,
              required: f,
              disabled: d,
              value: g = "on",
              onCheckedChange: y,
              form: x,
              ...v
            } = e,
            [w, b] = r.useState(null),
            M = (0, i.s)(t, (e) => b(e)),
            k = r.useRef(!1),
            P = !w || x || !!w.closest("form"),
            [C = !1, S] = (0, o.i)({ prop: h, defaultProp: l, onChange: y });
          return (0, u.jsxs)(p, {
            scope: n,
            checked: C,
            disabled: d,
            children: [
              (0, u.jsx)(c.sG.button, {
                type: "button",
                role: "switch",
                "aria-checked": C,
                "aria-required": f,
                "data-state": m(C),
                "data-disabled": d ? "" : void 0,
                disabled: d,
                value: g,
                ...v,
                ref: M,
                onClick: (0, s.m)(e.onClick, (e) => {
                  S((e) => !e),
                    P &&
                      ((k.current = e.isPropagationStopped()),
                      k.current || e.stopPropagation());
                }),
              }),
              P &&
                (0, u.jsx)(_, {
                  control: w,
                  bubbles: !k.current,
                  name: a,
                  value: g,
                  checked: C,
                  required: f,
                  disabled: d,
                  form: x,
                  style: { transform: "translateX(-100%)" },
                }),
            ],
          });
        });
      x.displayName = f;
      var v = "SwitchThumb",
        w = r.forwardRef((e, t) => {
          let { __scopeSwitch: n, ...r } = e,
            s = y(v, n);
          return (0, u.jsx)(c.sG.span, {
            "data-state": m(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...r,
            ref: t,
          });
        });
      w.displayName = v;
      var _ = (e) => {
        let { control: t, checked: n, bubbles: s = !0, ...i } = e,
          a = r.useRef(null),
          o = (0, h.Z)(n),
          c = (0, l.X)(t);
        return (
          r.useEffect(() => {
            let e = a.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked"
              ).set;
            if (o !== n && t) {
              let r = new Event("click", { bubbles: s });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [o, n, s]),
          (0, u.jsx)("input", {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: n,
            ...i,
            tabIndex: -1,
            ref: a,
            style: {
              ...e.style,
              ...c,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
            },
          })
        );
      };
      function m(e) {
        return e ? "checked" : "unchecked";
      }
      var b = x,
        M = w;
    },
    4894: (e, t, n) => {
      n.d(t, { M: () => m });
      var r,
        s,
        i = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        a = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        o = Math.PI / 180,
        h = Math.sin,
        l = Math.cos,
        c = Math.abs,
        u = Math.sqrt,
        f = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        d = function () {
          return (
            r ||
            ("undefined" != typeof window &&
              (r = window.gsap) &&
              r.registerPlugin &&
              r)
          );
        },
        g = function () {
          (r = d())
            ? (r.registerEase("_CE", m.create), (s = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        },
        p = function (e) {
          return ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3;
        },
        y = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
        x = /[cLlsSaAhHvVtTqQ]/g,
        v = function (e) {
          var t,
            n = e.length,
            r = 1e20;
          for (t = 1; t < n; t += 6) +e[t] < r && (r = +e[t]);
          return r;
        },
        w = function (e, t, n) {
          n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
          var r,
            s = -1 * +e[0],
            i = -n,
            a = e.length,
            o = 1 / (+e[a - 2] + s),
            h =
              -t ||
              (Math.abs(+e[a - 1] - +e[1]) < 0.01 * (+e[a - 2] - +e[0])
                ? v(e) + i
                : +e[a - 1] + i);
          for (r = 0, h = h ? 1 / h : -o; r < a; r += 2)
            (e[r] = (+e[r] + s) * o), (e[r + 1] = (+e[r + 1] + i) * h);
        },
        _ = function e(t, n, r, s, i, a, o, h, l, c, u) {
          var f,
            d = (t + r) / 2,
            g = (n + s) / 2,
            p = (r + i) / 2,
            y = (s + a) / 2,
            x = (i + o) / 2,
            v = (a + h) / 2,
            w = (d + p) / 2,
            _ = (g + y) / 2,
            m = (p + x) / 2,
            b = (y + v) / 2,
            M = (w + m) / 2,
            k = (_ + b) / 2,
            P = o - t,
            C = h - n,
            S = Math.abs((r - o) * C - (s - h) * P),
            E = Math.abs((i - o) * C - (a - h) * P);
          return (
            c ||
              ((c = [
                { x: t, y: n },
                { x: o, y: h },
              ]),
              (u = 1)),
            c.splice(u || c.length - 1, 0, { x: M, y: k }),
            (S + E) * (S + E) > l * (P * P + C * C) &&
              ((f = c.length),
              e(t, n, d, g, w, _, M, k, l, c, u),
              e(M, k, m, b, x, v, o, h, l, c, u + 1 + (c.length - f))),
            c
          );
        },
        m = (function () {
          function e(e, t, n) {
            s || g(), (this.id = e), this.setData(t, n);
          }
          var t = e.prototype;
          return (
            (t.setData = function (e, t) {
              t = t || {};
              var n,
                s,
                f,
                d,
                g,
                p,
                v,
                m,
                b,
                M = (e = e || "0,0,1,1").match(y),
                k = 1,
                P = [],
                C = [],
                S = t.precision || 1,
                E = S <= 1;
              if (
                ((this.data = e),
                (x.test(e) || (~e.indexOf("M") && 0 > e.indexOf("C"))) &&
                  (M = (function (e) {
                    var t,
                      n,
                      r,
                      s,
                      f,
                      d,
                      g,
                      p,
                      y,
                      x,
                      v,
                      w,
                      _,
                      m,
                      b,
                      M =
                        (e + "")
                          .replace(a, function (e) {
                            var t = +e;
                            return t < 1e-4 && t > -1e-4 ? 0 : t;
                          })
                          .match(i) || [],
                      k = [],
                      P = 0,
                      C = 0,
                      S = 2 / 3,
                      E = M.length,
                      D = 0,
                      T = "ERROR: malformed path: " + e,
                      A = function (e, t, n, r) {
                        (x = (n - e) / 3),
                          (v = (r - t) / 3),
                          g.push(e + x, t + v, n - x, r - v, n, r);
                      };
                    if (!e || !isNaN(M[0]) || isNaN(M[1]))
                      return console.log(T), k;
                    for (t = 0; t < E; t++)
                      if (
                        ((_ = f),
                        isNaN(M[t])
                          ? (d = (f = M[t].toUpperCase()) !== M[t])
                          : t--,
                        (r = +M[t + 1]),
                        (s = +M[t + 2]),
                        d && ((r += P), (s += C)),
                        t || ((p = r), (y = s)),
                        "M" === f)
                      )
                        g && (g.length < 8 ? (k.length -= 1) : (D += g.length)),
                          (P = p = r),
                          (C = y = s),
                          (g = [r, s]),
                          k.push(g),
                          (t += 2),
                          (f = "L");
                      else if ("C" === f)
                        g || (g = [0, 0]),
                          d || (P = C = 0),
                          g.push(
                            r,
                            s,
                            P + 1 * M[t + 3],
                            C + 1 * M[t + 4],
                            (P += 1 * M[t + 5]),
                            (C += 1 * M[t + 6])
                          ),
                          (t += 6);
                      else if ("S" === f)
                        (x = P),
                          (v = C),
                          ("C" === _ || "S" === _) &&
                            ((x += P - g[g.length - 4]),
                            (v += C - g[g.length - 3])),
                          d || (P = C = 0),
                          g.push(
                            x,
                            v,
                            r,
                            s,
                            (P += 1 * M[t + 3]),
                            (C += 1 * M[t + 4])
                          ),
                          (t += 4);
                      else if ("Q" === f)
                        (x = P + (r - P) * S),
                          (v = C + (s - C) * S),
                          d || (P = C = 0),
                          (P += 1 * M[t + 3]),
                          (C += 1 * M[t + 4]),
                          g.push(x, v, P + (r - P) * S, C + (s - C) * S, P, C),
                          (t += 4);
                      else if ("T" === f)
                        (x = P - g[g.length - 4]),
                          (v = C - g[g.length - 3]),
                          g.push(
                            P + x,
                            C + v,
                            r + (P + 1.5 * x - r) * S,
                            s + (C + 1.5 * v - s) * S,
                            (P = r),
                            (C = s)
                          ),
                          (t += 2);
                      else if ("H" === f) A(P, C, (P = r), C), (t += 1);
                      else if ("V" === f)
                        A(P, C, P, (C = r + (d ? C - P : 0))), (t += 1);
                      else if ("L" === f || "Z" === f)
                        "Z" === f && ((r = p), (s = y), (g.closed = !0)),
                          ("L" === f || c(P - r) > 0.5 || c(C - s) > 0.5) &&
                            (A(P, C, r, s), "L" === f && (t += 2)),
                          (P = r),
                          (C = s);
                      else if ("A" === f) {
                        if (
                          ((m = M[t + 4]),
                          (b = M[t + 5]),
                          (x = M[t + 6]),
                          (v = M[t + 7]),
                          (n = 7),
                          m.length > 1 &&
                            (m.length < 3
                              ? ((v = x), (x = b), n--)
                              : ((v = b), (x = m.substr(2)), (n -= 2)),
                            (b = m.charAt(1)),
                            (m = m.charAt(0))),
                          (w = (function (e, t, n, r, s, i, a, f, d) {
                            if (e !== f || t !== d) {
                              (n = c(n)), (r = c(r));
                              var g = (s % 360) * o,
                                p = l(g),
                                y = h(g),
                                x = Math.PI,
                                v = 2 * x,
                                w = (e - f) / 2,
                                _ = (t - d) / 2,
                                m = p * w + y * _,
                                b = -y * w + p * _,
                                M = m * m,
                                k = b * b,
                                P = M / (n * n) + k / (r * r);
                              P > 1 && ((n = u(P) * n), (r = u(P) * r));
                              var C = n * n,
                                S = r * r,
                                E = (C * S - C * k - S * M) / (C * k + S * M);
                              E < 0 && (E = 0);
                              var D = (i === a ? -1 : 1) * u(E),
                                T = ((n * b) / r) * D,
                                A = -(((r * m) / n) * D),
                                N = (e + f) / 2 + (p * T - y * A),
                                O = (t + d) / 2 + (y * T + p * A),
                                L = (m - T) / n,
                                j = (b - A) / r,
                                G = (-m - T) / n,
                                R = (-b - A) / r,
                                V = L * L + j * j,
                                I = (j < 0 ? -1 : 1) * Math.acos(L / u(V)),
                                q =
                                  (L * R - j * G < 0 ? -1 : 1) *
                                  Math.acos(
                                    (L * G + j * R) / u(V * (G * G + R * R))
                                  );
                              isNaN(q) && (q = x),
                                !a && q > 0 ? (q -= v) : a && q < 0 && (q += v),
                                (I %= v);
                              var B,
                                z = Math.ceil(c((q %= v)) / (v / 4)),
                                H = [],
                                Z = q / z,
                                Q = ((4 / 3) * h(Z / 2)) / (1 + l(Z / 2)),
                                X = p * n,
                                F = y * n,
                                U = -(y * r),
                                W = p * r;
                              for (B = 0; B < z; B++)
                                (m = l((s = I + B * Z))),
                                  (b = h(s)),
                                  (L = l((s += Z))),
                                  (j = h(s)),
                                  H.push(
                                    m - Q * b,
                                    b + Q * m,
                                    L + Q * j,
                                    j - Q * L,
                                    L,
                                    j
                                  );
                              for (B = 0; B < H.length; B += 2)
                                (m = H[B]),
                                  (b = H[B + 1]),
                                  (H[B] = m * X + b * U + N),
                                  (H[B + 1] = m * F + b * W + O);
                              return (H[B - 2] = f), (H[B - 1] = d), H;
                            }
                          })(
                            P,
                            C,
                            +M[t + 1],
                            +M[t + 2],
                            +M[t + 3],
                            +m,
                            +b,
                            (d ? P : 0) + 1 * x,
                            (d ? C : 0) + 1 * v
                          )),
                          (t += n),
                          w)
                        )
                          for (n = 0; n < w.length; n++) g.push(w[n]);
                        (P = g[g.length - 2]), (C = g[g.length - 1]);
                      } else console.log(T);
                    return (
                      (t = g.length) < 6
                        ? (k.pop(), (t = 0))
                        : g[0] === g[t - 2] &&
                          g[1] === g[t - 1] &&
                          (g.closed = !0),
                      (k.totalPoints = D + t),
                      k
                    );
                  })(e)[0]),
                4 === (n = M.length))
              )
                M.unshift(0, 0), M.push(1, 1), (n = 8);
              else if ((n - 2) % 6) throw "Invalid CustomEase";
              for (
                (0 != +M[0] || 1 != +M[n - 2]) && w(M, t.height, t.originY),
                  this.segment = M,
                  d = 2;
                d < n;
                d += 6
              )
                (s = { x: +M[d - 2], y: +M[d - 1] }),
                  (f = { x: +M[d + 4], y: +M[d + 5] }),
                  P.push(s, f),
                  _(
                    s.x,
                    s.y,
                    +M[d],
                    +M[d + 1],
                    +M[d + 2],
                    +M[d + 3],
                    f.x,
                    f.y,
                    1 / (2e5 * S),
                    P,
                    P.length - 1
                  );
              for (d = 0, n = P.length; d < n; d++)
                (v = P[d]),
                  (m = P[d - 1] || v),
                  (v.x > m.x || (m.y !== v.y && m.x === v.x) || v === m) &&
                  v.x <= 1
                    ? ((m.cx = v.x - m.x),
                      (m.cy = v.y - m.y),
                      (m.n = v),
                      (m.nx = v.x),
                      E &&
                        d > 1 &&
                        Math.abs(m.cy / m.cx - P[d - 2].cy / P[d - 2].cx) > 2 &&
                        (E = 0),
                      m.cx < k &&
                        (m.cx
                          ? (k = m.cx)
                          : ((m.cx = 0.001),
                            d === n - 1 &&
                              ((m.x -= 0.001),
                              (k = Math.min(k, 0.001)),
                              (E = 0)))))
                    : (P.splice(d--, 1), n--);
              if (((g = 1 / (n = (1 / k + 1) | 0)), (p = 0), (v = P[0]), E)) {
                for (d = 0; d < n; d++)
                  (b = d * g),
                    v.nx < b && (v = P[++p]),
                    (s = v.y + ((b - v.x) / v.cx) * v.cy),
                    (C[d] = { x: b, cx: g, y: s, cy: 0, nx: 9 }),
                    d && (C[d - 1].cy = s - C[d - 1].y);
                C[n - 1].cy = P[P.length - 1].y - s;
              } else {
                for (d = 0; d < n; d++)
                  v.nx < d * g && (v = P[++p]), (C[d] = v);
                p < P.length - 1 && (C[d - 1] = P[P.length - 2]);
              }
              return (
                (this.ease = function (e) {
                  var t = C[(e * n) | 0] || C[n - 1];
                  return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
                }),
                (this.ease.custom = this),
                this.id && r && r.registerEase(this.id, this.ease),
                this
              );
            }),
            (t.getSVGData = function (t) {
              return e.getSVGData(this, t);
            }),
            (e.create = function (t, n, r) {
              return new e(t, n, r).ease;
            }),
            (e.register = function (e) {
              (r = e), g();
            }),
            (e.get = function (e) {
              return r.parseEase(e);
            }),
            (e.getSVGData = function (t, n) {
              var s,
                i,
                a,
                o,
                h,
                l,
                c,
                u,
                d,
                g,
                y = (n = n || {}).width || 100,
                x = n.height || 100,
                v = n.x || 0,
                w = (n.y || 0) + x,
                _ = r.utils.toArray(n.path)[0];
              if (
                (n.invert && ((x = -x), (w = 0)),
                "string" == typeof t && (t = r.parseEase(t)),
                t.custom && (t = t.custom),
                t instanceof e)
              )
                s = (function (e) {
                  "number" == typeof e[0] && (e = [e]);
                  var t,
                    n,
                    r,
                    s,
                    i = "",
                    a = e.length;
                  for (n = 0; n < a; n++) {
                    for (
                      i += "M" + f((s = e[n])[0]) + "," + f(s[1]) + " C",
                        t = s.length,
                        r = 2;
                      r < t;
                      r++
                    )
                      i +=
                        f(s[r++]) +
                        "," +
                        f(s[r++]) +
                        " " +
                        f(s[r++]) +
                        "," +
                        f(s[r++]) +
                        " " +
                        f(s[r++]) +
                        "," +
                        f(s[r]) +
                        " ";
                    s.closed && (i += "z");
                  }
                  return i;
                })(
                  (function (e, t, n, r, s, i, a) {
                    for (var o, h, l, c, u, f = e.length; --f > -1; )
                      for (l = 0, h = (o = e[f]).length; l < h; l += 2)
                        (c = o[l]),
                          (u = o[l + 1]),
                          (o[l] = c * t + 0 * u + i),
                          (o[l + 1] = 0 * c + u * s + a);
                    return (e._dirty = 1), e;
                  })([t.segment], y, 0, 0, -x, v, w)
                );
              else {
                for (
                  s = [v, w],
                    o = 1 / (c = Math.max(5, 200 * (n.precision || 1))),
                    c += 2,
                    u = 5 / c,
                    d = p(v + o * y),
                    i = ((g = p(w + -(t(o) * x))) - w) / (d - v),
                    a = 2;
                  a < c;
                  a++
                )
                  (h = p(v + a * o * y)),
                    (Math.abs(
                      ((l = p(w + -(t(a * o) * x))) - g) / (h - d) - i
                    ) > u ||
                      a === c - 1) &&
                      (s.push(d, g), (i = (l - g) / (h - d))),
                    (d = h),
                    (g = l);
                s = "M" + s.join(",");
              }
              return _ && _.setAttribute("d", s), s;
            }),
            e
          );
        })();
      d() && r.registerPlugin(m), (m.version = "3.12.5");
    },
    7011: (e, t, n) => {
      n.d(t, { A: () => S });
      var r,
        s,
        i,
        a,
        o,
        h,
        l,
        c,
        u = function () {
          return "undefined" != typeof window;
        },
        f = function () {
          return r || (u() && (r = window.gsap) && r.registerPlugin && r);
        },
        d = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        g = {
          rect: ["width", "height"],
          circle: ["r", "r"],
          ellipse: ["rx", "ry"],
          line: ["x2", "y2"],
        },
        p = function (e) {
          return Math.round(1e4 * e) / 1e4;
        },
        y = function (e) {
          return parseFloat(e) || 0;
        },
        x = function (e, t) {
          var n = y(e);
          return ~e.indexOf("%") ? (n / 100) * t : n;
        },
        v = function (e, t) {
          return y(e.getAttribute(t));
        },
        w = Math.sqrt,
        _ = function (e, t, n, r, s, i) {
          return w(
            Math.pow((y(n) - y(e)) * s, 2) + Math.pow((y(r) - y(t)) * i, 2)
          );
        },
        m = function (e) {
          return console.warn(e);
        },
        b = function (e) {
          return "non-scaling-stroke" === e.getAttribute("vector-effect");
        },
        M = function (e, t, n) {
          var r,
            s,
            i = e.indexOf(" ");
          return (
            i < 0
              ? ((r = void 0 !== n ? n + "" : e), (s = e))
              : ((r = e.substr(0, i)), (s = e.substr(i + 1))),
            (r = x(r, t)) > (s = x(s, t)) ? [s, r] : [r, s]
          );
        },
        k = function (e) {
          if (!(e = s(e)[0])) return 0;
          var t,
            n,
            r,
            i,
            a,
            o,
            l,
            c = e.tagName.toLowerCase(),
            u = e.style,
            f = 1,
            y = 1;
          b(e) &&
            ((f = w((y = e.getScreenCTM()).a * y.a + y.b * y.b)),
            (y = w(y.d * y.d + y.c * y.c)));
          try {
            n = e.getBBox();
          } catch (e) {
            m(
              "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
            );
          }
          var x = n || { x: 0, y: 0, width: 0, height: 0 },
            M = x.x,
            k = x.y,
            P = x.width,
            C = x.height;
          if (
            ((n && (P || C)) ||
              !g[c] ||
              ((P = v(e, g[c][0])),
              (C = v(e, g[c][1])),
              "rect" !== c && "line" !== c && ((P *= 2), (C *= 2)),
              "line" === c &&
                ((M = v(e, "x1")),
                (k = v(e, "y1")),
                (P = Math.abs(P - M)),
                (C = Math.abs(C - k)))),
            "path" === c)
          )
            (i = u.strokeDasharray),
              (u.strokeDasharray = "none"),
              (t = e.getTotalLength() || 0),
              p(f) !== p(y) &&
                !h &&
                (h = 1) &&
                m(
                  "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
                ),
              (t *= (f + y) / 2),
              (u.strokeDasharray = i);
          else if ("rect" === c) t = 2 * P * f + 2 * C * y;
          else if ("line" === c) t = _(M, k, M + P, k + C, f, y);
          else if ("polyline" === c || "polygon" === c)
            for (
              r = e.getAttribute("points").match(d) || [],
                "polygon" === c && r.push(r[0], r[1]),
                t = 0,
                a = 2;
              a < r.length;
              a += 2
            )
              t += _(r[a - 2], r[a - 1], r[a], r[a + 1], f, y) || 0;
          else
            ("circle" === c || "ellipse" === c) &&
              (t =
                Math.PI *
                (3 * ((o = (P / 2) * f) + (l = (C / 2) * y)) -
                  w((3 * o + l) * (o + 3 * l))));
          return t || 0;
        },
        P = function (e, t) {
          if (!(e = s(e)[0])) return [0, 0];
          t || (t = k(e) + 1);
          var n = i.getComputedStyle(e),
            r = n.strokeDasharray || "",
            a = y(n.strokeDashoffset),
            o = r.indexOf(",");
          return (
            o < 0 && (o = r.indexOf(" ")),
            (r = o < 0 ? t : y(r.substr(0, o))) > t && (r = t),
            [-a || 0, r - a || 0]
          );
        },
        C = function () {
          u() &&
            (document,
            (i = window),
            (o = r = f()),
            (s = r.utils.toArray),
            (l = r.core.getStyleSaver),
            (c = r.core.reverting || function () {}),
            (a = -1 !== ((i.navigator || {}).userAgent || "").indexOf("Edge")));
        },
        S = {
          version: "3.12.5",
          name: "drawSVG",
          register: function (e) {
            (r = e), C();
          },
          init: function (e, t, n, r, s) {
            if (!e.getBBox) return !1;
            o || C();
            var h,
              c,
              u,
              f = k(e);
            return (
              (this.styles =
                l && l(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit")),
              (this.tween = n),
              (this._style = e.style),
              (this._target = e),
              t + "" == "true"
                ? (t = "0 100%")
                : t
                ? -1 === (t + "").indexOf(" ") && (t = "0 " + t)
                : (t = "0 0"),
              (h = P(e, f)),
              (c = M(t, f, h[0])),
              (this._length = p(f)),
              (this._dash = p(h[1] - h[0])),
              (this._offset = p(-h[0])),
              (this._dashPT = this.add(
                this,
                "_dash",
                this._dash,
                p(c[1] - c[0]),
                0,
                0,
                0,
                0,
                0,
                1
              )),
              (this._offsetPT = this.add(
                this,
                "_offset",
                this._offset,
                p(-c[0]),
                0,
                0,
                0,
                0,
                0,
                1
              )),
              a &&
                (u = i.getComputedStyle(e)).strokeLinecap !==
                  u.strokeLinejoin &&
                ((c = y(u.strokeMiterlimit)),
                this.add(e.style, "strokeMiterlimit", c, c + 0.01)),
              (this._live = b(e) || ~(t + "").indexOf("live")),
              (this._nowrap = ~(t + "").indexOf("nowrap")),
              this._props.push("drawSVG"),
              1
            );
          },
          render: function (e, t) {
            if (t.tween._time || !c()) {
              var n,
                r,
                s,
                i,
                a = t._pt,
                o = t._style;
              if (a) {
                for (
                  t._live &&
                  (n = k(t._target)) !== t._length &&
                  ((r = n / t._length),
                  (t._length = n),
                  t._offsetPT && ((t._offsetPT.s *= r), (t._offsetPT.c *= r)),
                  t._dashPT
                    ? ((t._dashPT.s *= r), (t._dashPT.c *= r))
                    : (t._dash *= r));
                  a;

                )
                  a.r(e, a.d), (a = a._next);
                (s = t._dash || (e && 1 !== e && 1e-4) || 0),
                  (n = t._length - s + 0.1),
                  (i = t._offset),
                  s &&
                    i &&
                    s + Math.abs(i % t._length) > t._length - 0.2 &&
                    (i += i < 0 ? 0.1 : -0.1) &&
                    (n += 0.1),
                  (o.strokeDashoffset = s ? i : i + 0.001),
                  (o.strokeDasharray =
                    n < 0.2
                      ? "none"
                      : s
                      ? s + "px," + (t._nowrap ? 999999 : n) + "px"
                      : "0px, 999999px");
              }
            } else t.styles.revert();
          },
          getLength: k,
          getPosition: P,
        };
      f() && r.registerPlugin(S);
    },
  },
]);
