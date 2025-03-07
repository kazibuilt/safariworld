(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [901],
    {
      6500: (t, e, r) => {
        "use strict";
        r.d(e, { L: () => tA });
        var n,
          i,
          s,
          a,
          o,
          l,
          u,
          c = r(4612),
          f = r(8774),
          p = {},
          d = 180 / Math.PI,
          h = Math.PI / 180,
          g = Math.atan2,
          m = /([A-Z])/g,
          y = /(left|right|width|margin|padding|x)/i,
          v = /[\s,\(]\S/,
          x = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          b = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
              e
            );
          },
          _ = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
              e
            );
          },
          O = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
              e
            );
          },
          w = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          M = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          E = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          P = function (t, e, r) {
            return (t.style[e] = r);
          },
          A = function (t, e, r) {
            return t.style.setProperty(e, r);
          },
          N = function (t, e, r) {
            return (t._gsap[e] = r);
          },
          S = function (t, e, r) {
            return (t._gsap.scaleX = t._gsap.scaleY = r);
          },
          C = function (t, e, r, n, i) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
          },
          T = function (t, e, r, n, i) {
            var s = t._gsap;
            (s[e] = r), s.renderTransform(i, s);
          },
          z = "transform",
          F = z + "Origin",
          B = function t(e, r) {
            var n = this,
              i = this.target,
              s = i.style,
              a = i._gsap;
            if (e in p && s) {
              if (((this.tfm = this.tfm || {}), "transform" === e))
                return x.transform.split(",").forEach(function (e) {
                  return t.call(n, e, r);
                });
              if (
                (~(e = x[e] || e).indexOf(",")
                  ? e.split(",").forEach(function (t) {
                      return (n.tfm[t] = Q(i, t));
                    })
                  : (this.tfm[e] = a.x ? a[e] : Q(i, e)),
                e === F && (this.tfm.zOrigin = a.zOrigin),
                this.props.indexOf(z) >= 0)
              )
                return;
              a.svg &&
                ((this.svgo = i.getAttribute("data-svg-origin")),
                this.props.push(F, r, "")),
                (e = z);
            }
            (s || r) && this.props.push(e, r, s[e]);
          },
          Y = function (t) {
            t.translate &&
              (t.removeProperty("translate"),
              t.removeProperty("scale"),
              t.removeProperty("rotate"));
          },
          R = function () {
            var t,
              e,
              r = this.props,
              n = this.target,
              i = n.style,
              s = n._gsap;
            for (t = 0; t < r.length; t += 3)
              r[t + 1]
                ? (n[r[t]] = r[t + 2])
                : r[t + 2]
                ? (i[r[t]] = r[t + 2])
                : i.removeProperty(
                    "--" === r[t].substr(0, 2)
                      ? r[t]
                      : r[t].replace(m, "-$1").toLowerCase()
                  );
            if (this.tfm) {
              for (e in this.tfm) s[e] = this.tfm[e];
              s.svg &&
                (s.renderTransform(),
                n.setAttribute("data-svg-origin", this.svgo || "")),
                ((t = l()) && t.isStart) ||
                  i[z] ||
                  (Y(i),
                  s.zOrigin &&
                    i[F] &&
                    ((i[F] += " " + s.zOrigin + "px"),
                    (s.zOrigin = 0),
                    s.renderTransform()),
                  (s.uncache = 1));
            }
          },
          k = function (t, e) {
            var r = { target: t, props: [], revert: R, save: B };
            return (
              t._gsap || f.os.core.getCache(t),
              e &&
                e.split(",").forEach(function (t) {
                  return r.save(t);
                }),
              r
            );
          },
          X = function (t, e) {
            var r = n.createElementNS
              ? n.createElementNS(
                  (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                  t
                )
              : n.createElement(t);
            return r && r.style ? r : n.createElement(t);
          },
          $ = function t(e, r, n) {
            var i = getComputedStyle(e);
            return (
              i[r] ||
              i.getPropertyValue(r.replace(m, "-$1").toLowerCase()) ||
              i.getPropertyValue(r) ||
              (!n && t(e, I(r) || r, 1)) ||
              ""
            );
          },
          j = "O,Moz,ms,Ms,Webkit".split(","),
          I = function (t, e, r) {
            var n = (e || a).style,
              i = 5;
            if (t in n && !r) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              i-- && !(j[i] + t in n);
  
            );
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? j[i] : "") + t;
          },
          D = function () {
            "undefined" != typeof window &&
              window.document &&
              ((i = (n = window.document).documentElement),
              (a = X("div") || { style: {} }),
              X("div"),
              (F = (z = I(z)) + "Origin"),
              (a.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (u = !!I("perspective")),
              (l = f.os.core.reverting),
              (s = 1));
          },
          H = function t(e) {
            var r,
              n = X(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              s = this.parentNode,
              a = this.nextSibling,
              o = this.style.cssText;
            if (
              (i.appendChild(n),
              n.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (r = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (t) {}
            else this._gsapBBox && (r = this._gsapBBox());
            return (
              s && (a ? s.insertBefore(this, a) : s.appendChild(this)),
              i.removeChild(n),
              (this.style.cssText = o),
              r
            );
          },
          W = function (t, e) {
            for (var r = e.length; r--; )
              if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
          },
          L = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (r) {
              e = H.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === H ||
                (e = H.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +W(t, ["x", "cx", "x1"]) || 0,
                    y: +W(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          V = function (t) {
            return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && L(t));
          },
          U = function (t, e) {
            if (e) {
              var r,
                n = t.style;
              e in p && e !== F && (e = z),
                n.removeProperty
                  ? (("ms" === (r = e.substr(0, 2)) ||
                      "webkit" === e.substr(0, 6)) &&
                      (e = "-" + e),
                    n.removeProperty(
                      "--" === r ? e : e.replace(m, "-$1").toLowerCase()
                    ))
                  : n.removeAttribute(e);
            }
          },
          G = function (t, e, r, n, i, s) {
            var a = new f.J7(t._pt, e, r, 0, 1, s ? E : M);
            return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
          },
          q = { deg: 1, rad: 1, turn: 1 },
          J = { grid: 1, flex: 1 },
          Z = function t(e, r, i, s) {
            var o,
              l,
              u,
              c,
              d = parseFloat(i) || 0,
              h = (i + "").trim().substr((d + "").length) || "px",
              g = a.style,
              m = y.test(r),
              v = "svg" === e.tagName.toLowerCase(),
              x = (v ? "client" : "offset") + (m ? "Width" : "Height"),
              b = "px" === s,
              _ = "%" === s;
            if (s === h || !d || q[s] || q[h]) return d;
            if (
              ("px" === h || b || (d = t(e, r, i, "px")),
              (c = e.getCTM && V(e)),
              (_ || "%" === h) && (p[r] || ~r.indexOf("adius")))
            )
              return (
                (o = c ? e.getBBox()[m ? "width" : "height"] : e[x]),
                (0, f.E_)(_ ? (d / o) * 100 : (d / 100) * o)
              );
            if (
              ((g[m ? "width" : "height"] = 100 + (b ? h : s)),
              (l =
                ~r.indexOf("adius") || ("em" === s && e.appendChild && !v)
                  ? e
                  : e.parentNode),
              c && (l = (e.ownerSVGElement || {}).parentNode),
              (l && l !== n && l.appendChild) || (l = n.body),
              (u = l._gsap) &&
                _ &&
                u.width &&
                m &&
                u.time === f.au.time &&
                !u.uncache)
            )
              return (0, f.E_)((d / u.width) * 100);
            if (_ && ("height" === r || "width" === r)) {
              var O = e.style[r];
              (e.style[r] = 100 + s), (o = e[x]), O ? (e.style[r] = O) : U(e, r);
            } else
              (_ || "%" === h) &&
                !J[$(l, "display")] &&
                (g.position = $(e, "position")),
                l === e && (g.position = "static"),
                l.appendChild(a),
                (o = a[x]),
                l.removeChild(a),
                (g.position = "absolute");
            return (
              m && _ && (((u = (0, f.a0)(l)).time = f.au.time), (u.width = l[x])),
              (0, f.E_)(b ? (o * d) / 100 : o && d ? (100 / o) * d : 0)
            );
          },
          Q = function (t, e, r, n) {
            var i;
            return (
              s || D(),
              e in x &&
                "transform" !== e &&
                ~(e = x[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              p[e] && "transform" !== e
                ? ((i = tc(t, n)),
                  (i =
                    "transformOrigin" !== e
                      ? i[e]
                      : i.svg
                      ? i.origin
                      : tf($(t, F)) + " " + i.zOrigin + "px"))
                : (!(i = t.style[e]) ||
                    "auto" === i ||
                    n ||
                    ~(i + "").indexOf("calc(")) &&
                  (i =
                    (tn[e] && tn[e](t, e, r)) ||
                    $(t, e) ||
                    (0, f.n)(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              r && !~(i + "").trim().indexOf(" ") ? Z(t, e, i, r) + r : i
            );
          },
          K = function (t, e, r, n) {
            if (!r || "none" === r) {
              var i = I(e, t, 1),
                s = i && $(t, i, 1);
              s && s !== r
                ? ((e = i), (r = s))
                : "borderColor" === e && (r = $(t, "borderTopColor"));
            }
            var a,
              o,
              l,
              u,
              c,
              p,
              d,
              h,
              g,
              m,
              y,
              v = new f.J7(this._pt, t.style, e, 0, 1, f.l1),
              x = 0,
              b = 0;
            if (
              ((v.b = r),
              (v.e = n),
              (r += ""),
              "auto" == (n += "") &&
                ((p = t.style[e]),
                (t.style[e] = n),
                (n = $(t, e) || n),
                p ? (t.style[e] = p) : U(t, e)),
              (a = [r, n]),
              (0, f.Uc)(a),
              (r = a[0]),
              (n = a[1]),
              (l = r.match(f.vM) || []),
              (n.match(f.vM) || []).length)
            ) {
              for (; (o = f.vM.exec(n)); )
                (d = o[0]),
                  (g = n.substring(x, o.index)),
                  c
                    ? (c = (c + 1) % 5)
                    : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) &&
                      (c = 1),
                  d !== (p = l[b++] || "") &&
                    ((u = parseFloat(p) || 0),
                    (y = p.substr((u + "").length)),
                    "=" === d.charAt(1) && (d = (0, f.B0)(u, d) + y),
                    (h = parseFloat(d)),
                    (m = d.substr((h + "").length)),
                    (x = f.vM.lastIndex - m.length),
                    m ||
                      ((m = m || f.Yz.units[e] || y),
                      x !== n.length || ((n += m), (v.e += m))),
                    y !== m && (u = Z(t, e, p, m) || 0),
                    (v._pt = {
                      _next: v._pt,
                      p: g || 1 === b ? g : ",",
                      s: u,
                      c: h - u,
                      m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                    }));
              v.c = x < n.length ? n.substring(x, n.length) : "";
            } else v.r = "display" === e && "none" === n ? E : M;
            return f.Ks.test(n) && (v.e = 0), (this._pt = v), v;
          },
          tt = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          te = function (t) {
            var e = t.split(" "),
              r = e[0],
              n = e[1] || "50%";
            return (
              ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
                ((t = r), (r = n), (n = t)),
              (e[0] = tt[r] || r),
              (e[1] = tt[n] || n),
              e.join(" ")
            );
          },
          tr = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var r,
                n,
                i,
                s = e.t,
                a = s.style,
                o = e.u,
                l = s._gsap;
              if ("all" === o || !0 === o) (a.cssText = ""), (n = 1);
              else
                for (i = (o = o.split(",")).length; --i > -1; )
                  p[(r = o[i])] &&
                    ((n = 1), (r = "transformOrigin" === r ? F : z)),
                    U(s, r);
              n &&
                (U(s, z),
                l &&
                  (l.svg && s.removeAttribute("transform"),
                  tc(s, 1),
                  (l.uncache = 1),
                  Y(a)));
            }
          },
          tn = {
            clearProps: function (t, e, r, n, i) {
              if ("isFromStart" !== i.data) {
                var s = (t._pt = new f.J7(t._pt, e, r, 0, 0, tr));
                return (
                  (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
                );
              }
            },
          },
          ti = [1, 0, 0, 1, 0, 0],
          ts = {},
          ta = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          to = function (t) {
            var e = $(t, z);
            return ta(e) ? ti : e.substr(7).match(f.vX).map(f.E_);
          },
          tl = function (t, e) {
            var r,
              n,
              s,
              a,
              o = t._gsap || (0, f.a0)(t),
              l = t.style,
              u = to(t);
            return o.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (u = [
                  (s = t.transform.baseVal.consolidate().matrix).a,
                  s.b,
                  s.c,
                  s.d,
                  s.e,
                  s.f,
                ]).join(",")
                ? ti
                : u
              : (u !== ti ||
                  t.offsetParent ||
                  t === i ||
                  o.svg ||
                  ((s = l.display),
                  (l.display = "block"),
                  ((r = t.parentNode) && t.offsetParent) ||
                    ((a = 1), (n = t.nextElementSibling), i.appendChild(t)),
                  (u = to(t)),
                  s ? (l.display = s) : U(t, "display"),
                  a &&
                    (n
                      ? r.insertBefore(t, n)
                      : r
                      ? r.appendChild(t)
                      : i.removeChild(t))),
                e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
          },
          tu = function (t, e, r, n, i, s) {
            var a,
              o,
              l,
              u,
              c = t._gsap,
              f = i || tl(t, !0),
              p = c.xOrigin || 0,
              d = c.yOrigin || 0,
              h = c.xOffset || 0,
              g = c.yOffset || 0,
              m = f[0],
              y = f[1],
              v = f[2],
              x = f[3],
              b = f[4],
              _ = f[5],
              O = e.split(" "),
              w = parseFloat(O[0]) || 0,
              M = parseFloat(O[1]) || 0;
            r
              ? f !== ti &&
                (o = m * x - y * v) &&
                ((l = (x / o) * w + (-v / o) * M + (v * _ - x * b) / o),
                (u = (-y / o) * w + (m / o) * M - (m * _ - y * b) / o),
                (w = l),
                (M = u))
              : ((w =
                  (a = L(t)).x + (~O[0].indexOf("%") ? (w / 100) * a.width : w)),
                (M =
                  a.y +
                  (~(O[1] || O[0]).indexOf("%") ? (M / 100) * a.height : M))),
              n || (!1 !== n && c.smooth)
                ? ((b = w - p),
                  (_ = M - d),
                  (c.xOffset = h + (b * m + _ * v) - b),
                  (c.yOffset = g + (b * y + _ * x) - _))
                : (c.xOffset = c.yOffset = 0),
              (c.xOrigin = w),
              (c.yOrigin = M),
              (c.smooth = !!n),
              (c.origin = e),
              (c.originIsAbsolute = !!r),
              (t.style[F] = "0px 0px"),
              s &&
                (G(s, c, "xOrigin", p, w),
                G(s, c, "yOrigin", d, M),
                G(s, c, "xOffset", h, c.xOffset),
                G(s, c, "yOffset", g, c.yOffset)),
              t.setAttribute("data-svg-origin", w + " " + M);
          },
          tc = function (t, e) {
            var r = t._gsap || new f.n6(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n,
              i,
              s,
              a,
              o,
              l,
              c,
              p,
              m,
              y,
              v,
              x,
              b,
              _,
              O,
              w,
              M,
              E,
              P,
              A,
              N,
              S,
              C,
              T,
              B,
              Y,
              R,
              k,
              X,
              j,
              I,
              D,
              H = t.style,
              W = r.scaleX < 0,
              L = getComputedStyle(t),
              U = $(t, F) || "0";
            return (
              (n = i = s = l = c = p = m = y = v = 0),
              (a = o = 1),
              (r.svg = !!(t.getCTM && V(t))),
              L.translate &&
                (("none" !== L.translate ||
                  "none" !== L.scale ||
                  "none" !== L.rotate) &&
                  (H[z] =
                    ("none" !== L.translate
                      ? "translate3d(" +
                        (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                        ") "
                      : "") +
                    ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") +
                    ("none" !== L.scale
                      ? "scale(" + L.scale.split(" ").join(",") + ") "
                      : "") +
                    ("none" !== L[z] ? L[z] : "")),
                (H.scale = H.rotate = H.translate = "none")),
              (_ = tl(t, r.svg)),
              r.svg &&
                (r.uncache
                  ? ((B = t.getBBox()),
                    (U = r.xOrigin - B.x + "px " + (r.yOrigin - B.y) + "px"),
                    (T = ""))
                  : (T = !e && t.getAttribute("data-svg-origin")),
                tu(t, T || U, !!T || r.originIsAbsolute, !1 !== r.smooth, _)),
              (x = r.xOrigin || 0),
              (b = r.yOrigin || 0),
              _ !== ti &&
                ((E = _[0]),
                (P = _[1]),
                (A = _[2]),
                (N = _[3]),
                (n = S = _[4]),
                (i = C = _[5]),
                6 === _.length
                  ? ((a = Math.sqrt(E * E + P * P)),
                    (o = Math.sqrt(N * N + A * A)),
                    (l = E || P ? g(P, E) * d : 0),
                    (m = A || N ? g(A, N) * d + l : 0) &&
                      (o *= Math.abs(Math.cos(m * h))),
                    r.svg &&
                      ((n -= x - (x * E + b * A)), (i -= b - (x * P + b * N))))
                  : ((D = _[6]),
                    (j = _[7]),
                    (R = _[8]),
                    (k = _[9]),
                    (X = _[10]),
                    (I = _[11]),
                    (n = _[12]),
                    (i = _[13]),
                    (s = _[14]),
                    (c = (O = g(D, X)) * d),
                    O &&
                      ((T = S * (w = Math.cos(-O)) + R * (M = Math.sin(-O))),
                      (B = C * w + k * M),
                      (Y = D * w + X * M),
                      (R = -(S * M) + R * w),
                      (k = -(C * M) + k * w),
                      (X = -(D * M) + X * w),
                      (I = -(j * M) + I * w),
                      (S = T),
                      (C = B),
                      (D = Y)),
                    (p = (O = g(-A, X)) * d),
                    O &&
                      ((T = E * (w = Math.cos(-O)) - R * (M = Math.sin(-O))),
                      (B = P * w - k * M),
                      (Y = A * w - X * M),
                      (I = N * M + I * w),
                      (E = T),
                      (P = B),
                      (A = Y)),
                    (l = (O = g(P, E)) * d),
                    O &&
                      ((T = E * (w = Math.cos(O)) + P * (M = Math.sin(O))),
                      (B = S * w + C * M),
                      (P = P * w - E * M),
                      (C = C * w - S * M),
                      (E = T),
                      (S = B)),
                    c &&
                      Math.abs(c) + Math.abs(l) > 359.9 &&
                      ((c = l = 0), (p = 180 - p)),
                    (a = (0, f.E_)(Math.sqrt(E * E + P * P + A * A))),
                    (o = (0, f.E_)(Math.sqrt(C * C + D * D))),
                    (m = Math.abs((O = g(S, C))) > 2e-4 ? O * d : 0),
                    (v = I ? 1 / (I < 0 ? -I : I) : 0)),
                r.svg &&
                  ((T = t.getAttribute("transform")),
                  (r.forceCSS = t.setAttribute("transform", "") || !ta($(t, z))),
                  T && t.setAttribute("transform", T))),
              Math.abs(m) > 90 &&
                270 > Math.abs(m) &&
                (W
                  ? ((a *= -1),
                    (m += l <= 0 ? 180 : -180),
                    (l += l <= 0 ? 180 : -180))
                  : ((o *= -1), (m += m <= 0 ? 180 : -180))),
              (e = e || r.uncache),
              (r.x =
                n -
                ((r.xPercent =
                  n &&
                  ((!e && r.xPercent) ||
                    (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                  ? (t.offsetWidth * r.xPercent) / 100
                  : 0) +
                "px"),
              (r.y =
                i -
                ((r.yPercent =
                  i &&
                  ((!e && r.yPercent) ||
                    (Math.round(t.offsetHeight / 2) === Math.round(-i)
                      ? -50
                      : 0)))
                  ? (t.offsetHeight * r.yPercent) / 100
                  : 0) +
                "px"),
              (r.z = s + "px"),
              (r.scaleX = (0, f.E_)(a)),
              (r.scaleY = (0, f.E_)(o)),
              (r.rotation = (0, f.E_)(l) + "deg"),
              (r.rotationX = (0, f.E_)(c) + "deg"),
              (r.rotationY = (0, f.E_)(p) + "deg"),
              (r.skewX = m + "deg"),
              (r.skewY = y + "deg"),
              (r.transformPerspective = v + "px"),
              (r.zOrigin =
                parseFloat(U.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
                (H[F] = tf(U)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = f.Yz.force3D),
              (r.renderTransform = r.svg ? tm : u ? tg : td),
              (r.uncache = 0),
              r
            );
          },
          tf = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          tp = function (t, e, r) {
            var n = (0, f.l_)(e);
            return (
              (0, f.E_)(parseFloat(e) + parseFloat(Z(t, "x", r + "px", n))) + n
            );
          },
          td = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              tg(t, e);
          },
          th = "0deg",
          tg = function (t, e) {
            var r = e || this,
              n = r.xPercent,
              i = r.yPercent,
              s = r.x,
              a = r.y,
              o = r.z,
              l = r.rotation,
              u = r.rotationY,
              c = r.rotationX,
              f = r.skewX,
              p = r.skewY,
              d = r.scaleX,
              g = r.scaleY,
              m = r.transformPerspective,
              y = r.force3D,
              v = r.target,
              x = r.zOrigin,
              b = "",
              _ = ("auto" === y && t && 1 !== t) || !0 === y;
            if (x && (c !== th || u !== th)) {
              var O,
                w = parseFloat(u) * h,
                M = Math.sin(w),
                E = Math.cos(w);
              (s = tp(v, s, -(M * (O = Math.cos((w = parseFloat(c) * h))) * x))),
                (a = tp(v, a, -(-Math.sin(w) * x))),
                (o = tp(v, o, -(E * O * x) + x));
            }
            "0px" !== m && (b += "perspective(" + m + ") "),
              (n || i) && (b += "translate(" + n + "%, " + i + "%) "),
              (_ || "0px" !== s || "0px" !== a || "0px" !== o) &&
                (b +=
                  "0px" !== o || _
                    ? "translate3d(" + s + ", " + a + ", " + o + ") "
                    : "translate(" + s + ", " + a + ") "),
              l !== th && (b += "rotate(" + l + ") "),
              u !== th && (b += "rotateY(" + u + ") "),
              c !== th && (b += "rotateX(" + c + ") "),
              (f !== th || p !== th) && (b += "skew(" + f + ", " + p + ") "),
              (1 !== d || 1 !== g) && (b += "scale(" + d + ", " + g + ") "),
              (v.style[z] = b || "translate(0, 0)");
          },
          tm = function (t, e) {
            var r,
              n,
              i,
              s,
              a,
              o = e || this,
              l = o.xPercent,
              u = o.yPercent,
              c = o.x,
              p = o.y,
              d = o.rotation,
              g = o.skewX,
              m = o.skewY,
              y = o.scaleX,
              v = o.scaleY,
              x = o.target,
              b = o.xOrigin,
              _ = o.yOrigin,
              O = o.xOffset,
              w = o.yOffset,
              M = o.forceCSS,
              E = parseFloat(c),
              P = parseFloat(p);
            (d = parseFloat(d)),
              (g = parseFloat(g)),
              (m = parseFloat(m)) && ((g += m = parseFloat(m)), (d += m)),
              d || g
                ? ((d *= h),
                  (g *= h),
                  (r = Math.cos(d) * y),
                  (n = Math.sin(d) * y),
                  (i = -(Math.sin(d - g) * v)),
                  (s = Math.cos(d - g) * v),
                  g &&
                    ((m *= h),
                    (i *= a = Math.sqrt(1 + (a = Math.tan(g - m)) * a)),
                    (s *= a),
                    m &&
                      ((r *= a = Math.sqrt(1 + (a = Math.tan(m)) * a)),
                      (n *= a))),
                  (r = (0, f.E_)(r)),
                  (n = (0, f.E_)(n)),
                  (i = (0, f.E_)(i)),
                  (s = (0, f.E_)(s)))
                : ((r = y), (s = v), (n = i = 0)),
              ((E && !~(c + "").indexOf("px")) ||
                (P && !~(p + "").indexOf("px"))) &&
                ((E = Z(x, "x", c, "px")), (P = Z(x, "y", p, "px"))),
              (b || _ || O || w) &&
                ((E = (0, f.E_)(E + b - (b * r + _ * i) + O)),
                (P = (0, f.E_)(P + _ - (b * n + _ * s) + w))),
              (l || u) &&
                ((a = x.getBBox()),
                (E = (0, f.E_)(E + (l / 100) * a.width)),
                (P = (0, f.E_)(P + (u / 100) * a.height))),
              (a =
                "matrix(" +
                r +
                "," +
                n +
                "," +
                i +
                "," +
                s +
                "," +
                E +
                "," +
                P +
                ")"),
              x.setAttribute("transform", a),
              M && (x.style[z] = a);
          },
          ty = function (t, e, r, n, i) {
            var s,
              a,
              o = (0, f.vQ)(i),
              l = parseFloat(i) * (o && ~i.indexOf("rad") ? d : 1) - n,
              u = n + l + "deg";
            return (
              o &&
                ("short" === (s = i.split("_")[1]) &&
                  (l %= 360) != l % 180 &&
                  (l += l < 0 ? 360 : -360),
                "cw" === s && l < 0
                  ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                  : "ccw" === s &&
                    l > 0 &&
                    (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
              (t._pt = a = new f.J7(t._pt, e, r, n, l, _)),
              (a.e = u),
              (a.u = "deg"),
              t._props.push(r),
              a
            );
          },
          tv = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          tx = function (t, e, r) {
            var n,
              i,
              s,
              a,
              o,
              l,
              u,
              c = tv({}, r._gsap),
              d = r.style;
            for (i in (c.svg
              ? ((s = r.getAttribute("transform")),
                r.setAttribute("transform", ""),
                (d[z] = e),
                (n = tc(r, 1)),
                U(r, z),
                r.setAttribute("transform", s))
              : ((s = getComputedStyle(r)[z]),
                (d[z] = e),
                (n = tc(r, 1)),
                (d[z] = s)),
            p))
              (s = c[i]) !== (a = n[i]) &&
                0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
                ((o =
                  (0, f.l_)(s) !== (u = (0, f.l_)(a))
                    ? Z(r, i, s, u)
                    : parseFloat(s)),
                (l = parseFloat(a)),
                (t._pt = new f.J7(t._pt, n, i, o, l - o, b)),
                (t._pt.u = u || 0),
                t._props.push(i));
            tv(n, c);
          };
        (0, f.fA)("padding,margin,Width,Radius", function (t, e) {
          var r = "Right",
            n = "Bottom",
            i = "Left",
            s = (
              e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
            ).map(function (r) {
              return e < 2 ? t + r : "border" + r + t;
            });
          tn[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
            var a, o;
            if (arguments.length < 4)
              return 5 ===
                (o = (a = s.map(function (e) {
                  return Q(t, e, r);
                })).join(" ")).split(a[0]).length
                ? a[0]
                : o;
            (a = (n + "").split(" ")),
              (o = {}),
              s.forEach(function (t, e) {
                return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
              }),
              t.init(e, o, i);
          };
        });
        var tb = {
          name: "css",
          register: D,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, n, i) {
            var a,
              o,
              l,
              u,
              c,
              d,
              h,
              g,
              m,
              y,
              _,
              M,
              E,
              P,
              A,
              N,
              S = this._props,
              C = t.style,
              T = r.vars.startAt;
            for (h in (s || D(),
            (this.styles = this.styles || k(t)),
            (N = this.styles.props),
            (this.tween = r),
            e))
              if (
                "autoRound" !== h &&
                ((o = e[h]), !(f.wU[h] && (0, f.Zm)(h, e, r, n, t, i)))
              ) {
                if (
                  ((c = typeof o),
                  (d = tn[h]),
                  "function" === c && (c = typeof (o = o.call(r, n, t, i))),
                  "string" === c && ~o.indexOf("random(") && (o = (0, f.Vy)(o)),
                  d)
                )
                  d(this, t, h, o, r) && (A = 1);
                else if ("--" === h.substr(0, 2))
                  (a = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                    (o += ""),
                    (f.qA.lastIndex = 0),
                    f.qA.test(a) || ((g = (0, f.l_)(a)), (m = (0, f.l_)(o))),
                    m ? g !== m && (a = Z(t, h, a, m) + m) : g && (o += g),
                    this.add(C, "setProperty", a, o, n, i, 0, 0, h),
                    S.push(h),
                    N.push(h, 0, C[h]);
                else if ("undefined" !== c) {
                  if (
                    (T && h in T
                      ? ((a =
                          "function" == typeof T[h]
                            ? T[h].call(r, n, t, i)
                            : T[h]),
                        (0, f.vQ)(a) &&
                          ~a.indexOf("random(") &&
                          (a = (0, f.Vy)(a)),
                        (0, f.l_)(a + "") ||
                          "auto" === a ||
                          (a += f.Yz.units[h] || (0, f.l_)(Q(t, h)) || ""),
                        "=" === (a + "").charAt(1) && (a = Q(t, h)))
                      : (a = Q(t, h)),
                    (u = parseFloat(a)),
                    (y =
                      "string" === c && "=" === o.charAt(1) && o.substr(0, 2)) &&
                      (o = o.substr(2)),
                    (l = parseFloat(o)),
                    h in x &&
                      ("autoAlpha" === h &&
                        (1 === u &&
                          "hidden" === Q(t, "visibility") &&
                          l &&
                          (u = 0),
                        N.push("visibility", 0, C.visibility),
                        G(
                          this,
                          C,
                          "visibility",
                          u ? "inherit" : "hidden",
                          l ? "inherit" : "hidden",
                          !l
                        )),
                      "scale" !== h &&
                        "transform" !== h &&
                        ~(h = x[h]).indexOf(",") &&
                        (h = h.split(",")[0])),
                    (_ = h in p))
                  ) {
                    if (
                      (this.styles.save(h),
                      M ||
                        (((E = t._gsap).renderTransform && !e.parseTransform) ||
                          tc(t, e.parseTransform),
                        (P = !1 !== e.smoothOrigin && E.smooth),
                        ((M = this._pt =
                          new f.J7(
                            this._pt,
                            C,
                            z,
                            0,
                            1,
                            E.renderTransform,
                            E,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === h)
                    )
                      (this._pt = new f.J7(
                        this._pt,
                        E,
                        "scaleY",
                        E.scaleY,
                        (y ? (0, f.B0)(E.scaleY, y + l) : l) - E.scaleY || 0,
                        b
                      )),
                        (this._pt.u = 0),
                        S.push("scaleY", h),
                        (h += "X");
                    else if ("transformOrigin" === h) {
                      N.push(F, 0, C[F]),
                        (o = te(o)),
                        E.svg
                          ? tu(t, o, 0, P, 0, this)
                          : ((m = parseFloat(o.split(" ")[2]) || 0) !==
                              E.zOrigin && G(this, E, "zOrigin", E.zOrigin, m),
                            G(this, C, h, tf(a), tf(o)));
                      continue;
                    } else if ("svgOrigin" === h) {
                      tu(t, o, 1, P, 0, this);
                      continue;
                    } else if (h in ts) {
                      ty(this, E, h, u, y ? (0, f.B0)(u, y + o) : o);
                      continue;
                    } else if ("smoothOrigin" === h) {
                      G(this, E, "smooth", E.smooth, o);
                      continue;
                    } else if ("force3D" === h) {
                      E[h] = o;
                      continue;
                    } else if ("transform" === h) {
                      tx(this, o, t);
                      continue;
                    }
                  } else h in C || (h = I(h) || h);
                  if (
                    _ ||
                    ((l || 0 === l) && (u || 0 === u) && !v.test(o) && h in C)
                  )
                    (g = (a + "").substr((u + "").length)),
                      l || (l = 0),
                      (m = (0, f.l_)(o) || (h in f.Yz.units ? f.Yz.units[h] : g)),
                      g !== m && (u = Z(t, h, a, m)),
                      (this._pt = new f.J7(
                        this._pt,
                        _ ? E : C,
                        h,
                        u,
                        (y ? (0, f.B0)(u, y + l) : l) - u,
                        _ || ("px" !== m && "zIndex" !== h) || !1 === e.autoRound
                          ? b
                          : w
                      )),
                      (this._pt.u = m || 0),
                      g !== m &&
                        "%" !== m &&
                        ((this._pt.b = a), (this._pt.r = O));
                  else if (h in C) K.call(this, t, h, a, y ? y + o : o);
                  else if (h in t) this.add(t, h, a || t[h], y ? y + o : o, n, i);
                  else if ("parseTransform" !== h) {
                    (0, f.dg)(h, o);
                    continue;
                  }
                  _ || (h in C ? N.push(h, 0, C[h]) : N.push(h, 1, a || t[h])),
                    S.push(h);
                }
              }
            A && (0, f.St)(this);
          },
          render: function (t, e) {
            if (e.tween._time || !l())
              for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
            else e.styles.revert();
          },
          get: Q,
          aliases: x,
          getSetter: function (t, e, r) {
            var n = x[e];
            return (
              n && 0 > n.indexOf(",") && (e = n),
              e in p && e !== F && (t._gsap.x || Q(t, "x"))
                ? r && o === r
                  ? "scale" === e
                    ? S
                    : N
                  : ((o = r || {}), "scale" === e ? C : T)
                : t.style && !(0, f.OF)(t.style[e])
                ? P
                : ~e.indexOf("-")
                ? A
                : (0, f.Dx)(t, e)
            );
          },
          core: { _removeProperty: U, _getMatrix: tl },
        };
        (f.os.utils.checkPrefix = I),
          (f.os.core.getStyleSaver = k),
          (function (t, e, r, n) {
            var i = (0, f.fA)(t + "," + e + "," + r, function (t) {
              p[t] = 1;
            });
            (0, f.fA)(e, function (t) {
              (f.Yz.units[t] = "deg"), (ts[t] = 1);
            }),
              (x[i[13]] = t + "," + e),
              (0, f.fA)(n, function (t) {
                var e = t.split(":");
                x[e[1]] = i[e[0]];
              });
          })(
            "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
            "rotation,rotationX,rotationY,skewX,skewY",
            "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
            "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
          ),
          (0, f.fA)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              f.Yz.units[t] = "px";
            }
          ),
          f.os.registerPlugin(tb);
        var t_ = f.os.registerPlugin(tb) || f.os;
        t_.core.Tween;
        let tO = "undefined" != typeof window ? c.useLayoutEffect : c.useEffect,
          tw = (t) => t && !Array.isArray(t) && "object" == typeof t,
          tM = [],
          tE = {},
          tP = t_,
          tA = (t, e = tM) => {
            let r = tE;
            tw(t)
              ? ((r = t),
                (t = null),
                (e = "dependencies" in r ? r.dependencies : tM))
              : tw(e) && (e = "dependencies" in (r = e) ? r.dependencies : tM),
              t &&
                "function" != typeof t &&
                console.warn(
                  "First parameter must be a function or config object"
                );
            let { scope: n, revertOnUpdate: i } = r,
              s = (0, c.useRef)(!1),
              a = (0, c.useRef)(tP.context(() => {}, n)),
              o = (0, c.useRef)((t) => a.current.add(null, t)),
              l = e && e.length && !i;
            return (
              tO(() => {
                if ((t && a.current.add(t, n), !l || !s.current))
                  return () => a.current.revert();
              }, e),
              l && tO(() => ((s.current = !0), () => a.current.revert()), tM),
              { context: a.current, contextSafe: o.current }
            );
          };
        (tA.register = (t) => {
          tP = t;
        }),
          (tA.headless = !0);
      },
      3713: (t) => {
        t.exports = {
          style: { fontFamily: "'gtPlanar', 'gtPlanar Fallback'" },
          className: "__className_17ed70",
          variable: "__variable_17ed70",
        };
      },
      3982: (t) => {
        t.exports = {
          style: {
            fontFamily: "'ppFraktionMono', 'ppFraktionMono Fallback'",
            fontWeight: 400,
            fontStyle: "normal",
          },
          className: "__className_86dfa2",
          variable: "__variable_86dfa2",
        };
      },
      8007: (t, e, r) => {
        "use strict";
        r.d(e, { $e: () => s });
        let n = (t) => parseFloat(t.toFixed(4)),
          i = ({
            lineHeight: t,
            fontSize: e,
            capHeightTrim: r,
            baselineTrim: n,
          }) => ({
            fontSize: e,
            lineHeight: t,
            "::before": { content: "''", marginBottom: r, display: "table" },
            "::after": { content: "''", marginTop: n, display: "table" },
          });
        function s(t, e) {
          let {
              "::before": r,
              "::after": s,
              ...a
            } = "capHeightTrim" in e
              ? i(e)
              : i(
                  (function (t) {
                    let {
                        fontSize: e,
                        lineHeight: r,
                        fontMetrics: i,
                      } = (function (t) {
                        let e, r, n;
                        if ("leading" in t && "lineGap" in t)
                          throw Error(
                            "Only a single line height style can be provided. Please pass either `lineGap` OR `leading`."
                          );
                        if ("capHeight" in t && "fontSize" in t)
                          throw Error(
                            "Please pass either `capHeight` OR `fontSize`, not both."
                          );
                        let { fontMetrics: i } = t,
                          s = i.capHeight / i.unitsPerEm;
                        if ("capHeight" in t)
                          (e = t.capHeight / s), (r = t.capHeight);
                        else if ("fontSize" in t)
                          (e = t.fontSize), (r = t.fontSize * s);
                        else
                          throw Error(
                            "Please pass either `capHeight` OR `fontSize`."
                          );
                        return (
                          "lineGap" in t
                            ? (n = r + t.lineGap)
                            : "leading" in t && (n = t.leading),
                          { fontSize: e, lineHeight: n, fontMetrics: i }
                        );
                      })(t),
                      s = Math.abs(i.descent),
                      a = i.capHeight / i.unitsPerEm,
                      o = s / i.unitsPerEm,
                      l = i.ascent / i.unitsPerEm,
                      u = i.lineGap / i.unitsPerEm,
                      c = ((i.ascent + i.lineGap + s) / i.unitsPerEm) * e,
                      f = (t) => (r ? t - (c - r) / 2 / e : t),
                      p = -1 * f(l - a + u / 2),
                      d = -1 * f(o + u / 2);
                    return {
                      fontSize: `${n(e)}px`,
                      lineHeight: r ? `${n(r)}px` : "normal",
                      capHeightTrim: `${n(p)}em`,
                      baselineTrim: `${n(d)}em`,
                    };
                  })(e)
                ),
            o = (e, r) => `
  .${t}${r ? `::${r}` : ""} {
  ${Object.keys(e)
    .map(
      (t) =>
        `  ${t.replace(/[A-Z]/g, "-$&").toLowerCase()}: ${e[t].replace(
          /'/g,
          '"'
        )}`
    )
    .join(";\n")};
  }`;
          return [o(a), o(r, "before"), o(s, "after")].join("\n");
        }
      },
      1277: (t, e, r) => {
        "use strict";
        function n(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
          return function (n) {
            if ((t?.(n), !1 === r || !n.defaultPrevented)) return e?.(n);
          };
        }
        r.d(e, { m: () => n });
      },
      1864: (t, e, r) => {
        "use strict";
        r.d(e, { s: () => a, t: () => s });
        var n = r(4612);
        function i(t, e) {
          if ("function" == typeof t) return t(e);
          null != t && (t.current = e);
        }
        function s(...t) {
          return (e) => {
            let r = !1,
              n = t.map((t) => {
                let n = i(t, e);
                return r || "function" != typeof n || (r = !0), n;
              });
            if (r)
              return () => {
                for (let e = 0; e < n.length; e++) {
                  let r = n[e];
                  "function" == typeof r ? r() : i(t[e], null);
                }
              };
          };
        }
        function a(...t) {
          return n.useCallback(s(...t), t);
        }
      },
      9894: (t, e, r) => {
        "use strict";
        r.d(e, { A: () => s });
        var n = r(4612),
          i = r(2104);
        function s(t, e = []) {
          let r = [],
            a = () => {
              let e = r.map((t) => n.createContext(t));
              return function (r) {
                let i = r?.[t] || e;
                return n.useMemo(
                  () => ({ [`__scope${t}`]: { ...r, [t]: i } }),
                  [r, i]
                );
              };
            };
          return (
            (a.scopeName = t),
            [
              function (e, s) {
                let a = n.createContext(s),
                  o = r.length;
                r = [...r, s];
                let l = (e) => {
                  let { scope: r, children: s, ...l } = e,
                    u = r?.[t]?.[o] || a,
                    c = n.useMemo(() => l, Object.values(l));
                  return (0, i.jsx)(u.Provider, { value: c, children: s });
                };
                return (
                  (l.displayName = e + "Provider"),
                  [
                    l,
                    function (r, i) {
                      let l = i?.[t]?.[o] || a,
                        u = n.useContext(l);
                      if (u) return u;
                      if (void 0 !== s) return s;
                      throw Error(`\`${r}\` must be used within \`${e}\``);
                    },
                  ]
                );
              },
              (function (...t) {
                let e = t[0];
                if (1 === t.length) return e;
                let r = () => {
                  let r = t.map((t) => ({
                    useScope: t(),
                    scopeName: t.scopeName,
                  }));
                  return function (t) {
                    let i = r.reduce((e, { useScope: r, scopeName: n }) => {
                      let i = r(t)[`__scope${n}`];
                      return { ...e, ...i };
                    }, {});
                    return n.useMemo(
                      () => ({ [`__scope${e.scopeName}`]: i }),
                      [i]
                    );
                  };
                };
                return (r.scopeName = e.scopeName), r;
              })(a, ...e),
            ]
          );
        }
      },
      3201: (t, e, r) => {
        "use strict";
        r.d(e, { B: () => l });
        var n,
          i = r(4612),
          s = r(2969),
          a = (n || (n = r.t(i, 2)))["useId".toString()] || (() => void 0),
          o = 0;
        function l(t) {
          let [e, r] = i.useState(a());
          return (
            (0, s.N)(() => {
              t || r((t) => t ?? String(o++));
            }, [t]),
            t || (e ? `radix-${e}` : "")
          );
        }
      },
      9247: (t, e, r) => {
        "use strict";
        r.d(e, { C: () => a });
        var n = r(4612),
          i = r(1864),
          s = r(2969),
          a = (t) => {
            let { present: e, children: r } = t,
              a = (function (t) {
                var e, r;
                let [i, a] = n.useState(),
                  l = n.useRef({}),
                  u = n.useRef(t),
                  c = n.useRef("none"),
                  [f, p] =
                    ((e = t ? "mounted" : "unmounted"),
                    (r = {
                      mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended",
                      },
                      unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted",
                      },
                      unmounted: { MOUNT: "mounted" },
                    }),
                    n.useReducer((t, e) => r[t][e] ?? t, e));
                return (
                  n.useEffect(() => {
                    let t = o(l.current);
                    c.current = "mounted" === f ? t : "none";
                  }, [f]),
                  (0, s.N)(() => {
                    let e = l.current,
                      r = u.current;
                    if (r !== t) {
                      let n = c.current,
                        i = o(e);
                      t
                        ? p("MOUNT")
                        : "none" === i || e?.display === "none"
                        ? p("UNMOUNT")
                        : r && n !== i
                        ? p("ANIMATION_OUT")
                        : p("UNMOUNT"),
                        (u.current = t);
                    }
                  }, [t, p]),
                  (0, s.N)(() => {
                    if (i) {
                      let t;
                      let e = i.ownerDocument.defaultView ?? window,
                        r = (r) => {
                          let n = o(l.current).includes(r.animationName);
                          if (
                            r.target === i &&
                            n &&
                            (p("ANIMATION_END"), !u.current)
                          ) {
                            let r = i.style.animationFillMode;
                            (i.style.animationFillMode = "forwards"),
                              (t = e.setTimeout(() => {
                                "forwards" === i.style.animationFillMode &&
                                  (i.style.animationFillMode = r);
                              }));
                          }
                        },
                        n = (t) => {
                          t.target === i && (c.current = o(l.current));
                        };
                      return (
                        i.addEventListener("animationstart", n),
                        i.addEventListener("animationcancel", r),
                        i.addEventListener("animationend", r),
                        () => {
                          e.clearTimeout(t),
                            i.removeEventListener("animationstart", n),
                            i.removeEventListener("animationcancel", r),
                            i.removeEventListener("animationend", r);
                        }
                      );
                    }
                    p("ANIMATION_END");
                  }, [i, p]),
                  {
                    isPresent: ["mounted", "unmountSuspended"].includes(f),
                    ref: n.useCallback((t) => {
                      t && (l.current = getComputedStyle(t)), a(t);
                    }, []),
                  }
                );
              })(e),
              l =
                "function" == typeof r
                  ? r({ present: a.isPresent })
                  : n.Children.only(r),
              u = (0, i.s)(
                a.ref,
                (function (t) {
                  let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
                    r = e && "isReactWarning" in e && e.isReactWarning;
                  return r
                    ? t.ref
                    : (r =
                        (e = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? t.props.ref
                    : t.props.ref || t.ref;
                })(l)
              );
            return "function" == typeof r || a.isPresent
              ? n.cloneElement(l, { ref: u })
              : null;
          };
        function o(t) {
          return t?.animationName || "none";
        }
        a.displayName = "Presence";
      },
      8932: (t, e, r) => {
        "use strict";
        r.d(e, { hO: () => l, sG: () => o });
        var n = r(4612),
          i = r(357),
          s = r(8641),
          a = r(2104),
          o = [
            "a",
            "button",
            "div",
            "form",
            "h2",
            "h3",
            "img",
            "input",
            "label",
            "li",
            "nav",
            "ol",
            "p",
            "span",
            "svg",
            "ul",
          ].reduce((t, e) => {
            let r = n.forwardRef((t, r) => {
              let { asChild: n, ...i } = t,
                o = n ? s.DX : e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, a.jsx)(o, { ...i, ref: r })
              );
            });
            return (r.displayName = `Primitive.${e}`), { ...t, [e]: r };
          }, {});
        function l(t, e) {
          t && i.flushSync(() => t.dispatchEvent(e));
        }
      },
      8641: (t, e, r) => {
        "use strict";
        r.d(e, { DX: () => a });
        var n = r(4612),
          i = r(1864),
          s = r(2104),
          a = n.forwardRef((t, e) => {
            let { children: r, ...i } = t,
              a = n.Children.toArray(r),
              l = a.find(u);
            if (l) {
              let t = l.props.children,
                r = a.map((e) =>
                  e !== l
                    ? e
                    : n.Children.count(t) > 1
                    ? n.Children.only(null)
                    : n.isValidElement(t)
                    ? t.props.children
                    : null
                );
              return (0, s.jsx)(o, {
                ...i,
                ref: e,
                children: n.isValidElement(t)
                  ? n.cloneElement(t, void 0, r)
                  : null,
              });
            }
            return (0, s.jsx)(o, { ...i, ref: e, children: r });
          });
        a.displayName = "Slot";
        var o = n.forwardRef((t, e) => {
          let { children: r, ...s } = t;
          if (n.isValidElement(r)) {
            let t = (function (t) {
              let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
                r = e && "isReactWarning" in e && e.isReactWarning;
              return r
                ? t.ref
                : (r =
                    (e = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? t.props.ref
                : t.props.ref || t.ref;
            })(r);
            return n.cloneElement(r, {
              ...(function (t, e) {
                let r = { ...e };
                for (let n in e) {
                  let i = t[n],
                    s = e[n];
                  /^on[A-Z]/.test(n)
                    ? i && s
                      ? (r[n] = (...t) => {
                          s(...t), i(...t);
                        })
                      : i && (r[n] = i)
                    : "style" === n
                    ? (r[n] = { ...i, ...s })
                    : "className" === n &&
                      (r[n] = [i, s].filter(Boolean).join(" "));
                }
                return { ...t, ...r };
              })(s, r.props),
              ref: e ? (0, i.t)(e, t) : t,
            });
          }
          return n.Children.count(r) > 1 ? n.Children.only(null) : null;
        });
        o.displayName = "SlotClone";
        var l = ({ children: t }) => (0, s.jsx)(s.Fragment, { children: t });
        function u(t) {
          return n.isValidElement(t) && t.type === l;
        }
      },
      8457: (t, e, r) => {
        "use strict";
        r.d(e, { c: () => i });
        var n = r(4612);
        function i(t) {
          let e = n.useRef(t);
          return (
            n.useEffect(() => {
              e.current = t;
            }),
            n.useMemo(
              () =>
                (...t) =>
                  e.current?.(...t),
              []
            )
          );
        }
      },
      2625: (t, e, r) => {
        "use strict";
        r.d(e, { i: () => s });
        var n = r(4612),
          i = r(8457);
        function s({ prop: t, defaultProp: e, onChange: r = () => {} }) {
          let [s, a] = (function ({ defaultProp: t, onChange: e }) {
              let r = n.useState(t),
                [s] = r,
                a = n.useRef(s),
                o = (0, i.c)(e);
              return (
                n.useEffect(() => {
                  a.current !== s && (o(s), (a.current = s));
                }, [s, a, o]),
                r
              );
            })({ defaultProp: e, onChange: r }),
            o = void 0 !== t,
            l = o ? t : s,
            u = (0, i.c)(r);
          return [
            l,
            n.useCallback(
              (e) => {
                if (o) {
                  let r = "function" == typeof e ? e(t) : e;
                  r !== t && u(r);
                } else a(e);
              },
              [o, t, a, u]
            ),
          ];
        }
      },
      2969: (t, e, r) => {
        "use strict";
        r.d(e, { N: () => i });
        var n = r(4612),
          i = globalThis?.document ? n.useLayoutEffect : () => {};
      },
      3957: (t, e, r) => {
        "use strict";
        r.d(e, { X: () => s });
        var n = r(4612),
          i = r(2969);
        function s(t) {
          let [e, r] = n.useState(void 0);
          return (
            (0, i.N)(() => {
              if (t) {
                r({ width: t.offsetWidth, height: t.offsetHeight });
                let e = new ResizeObserver((e) => {
                  let n, i;
                  if (!Array.isArray(e) || !e.length) return;
                  let s = e[0];
                  if ("borderBoxSize" in s) {
                    let t = s.borderBoxSize,
                      e = Array.isArray(t) ? t[0] : t;
                    (n = e.inlineSize), (i = e.blockSize);
                  } else (n = t.offsetWidth), (i = t.offsetHeight);
                  r({ width: n, height: i });
                });
                return e.observe(t, { box: "border-box" }), () => e.unobserve(t);
              }
              r(void 0);
            }, [t]),
            e
          );
        }
      },
      4316: (t, e, r) => {
        "use strict";
        r.d(e, { Ay: () => s });
        var n = r(8769),
          i = r(204),
          s = n.os.registerPlugin(i.H0) || n.os;
        s.core.Tween;
      },
    },
  ]);
  