import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/tw-elements/js/tw-elements.es.min.js
var Yn = Object.defineProperty;
var Kn = (i, t, e) => t in i ? Yn(i, t, { enumerable: true, configurable: true, writable: true, value: e }) : i[t] = e;
var Ne = (i, t, e) => (Kn(i, typeof t != "symbol" ? t + "" : t, e), e);
var Se = /* @__PURE__ */ (() => {
  const i = {};
  let t = 1;
  return {
    set(e, s, n) {
      typeof e[s] > "u" && (e[s] = {
        key: s,
        id: t
      }, t++), i[e[s].id] = n;
    },
    get(e, s) {
      if (!e || typeof e[s] > "u")
        return null;
      const n = e[s];
      return n.key === s ? i[n.id] : null;
    },
    delete(e, s) {
      if (typeof e[s] > "u")
        return;
      const n = e[s];
      n.key === s && (delete i[n.id], delete e[s]);
    }
  };
})();
var V = {
  setData(i, t, e) {
    Se.set(i, t, e);
  },
  getData(i, t) {
    return Se.get(i, t);
  },
  removeData(i, t) {
    Se.delete(i, t);
  }
};
var zn = 1e6;
var qn = 1e3;
var Ze = "transitionend";
var Xn = (i) => i == null ? `${i}` : {}.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
var Gn = (i) => {
  do
    i += Math.floor(Math.random() * zn);
  while (document.getElementById(i));
  return i;
};
var ks = (i) => {
  let t = i.getAttribute("data-twe-target");
  if (!t || t === "#") {
    let e = i.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? e.trim() : null;
  }
  return t;
};
var ci = (i) => {
  const t = ks(i);
  return t && document.querySelector(t) ? t : null;
};
var nt = (i) => {
  const t = ks(i);
  return t ? document.querySelector(t) : null;
};
var Je = (i) => {
  if (!i)
    return 0;
  let { transitionDuration: t, transitionDelay: e } = window.getComputedStyle(i);
  const s = Number.parseFloat(t), n = Number.parseFloat(e);
  return !s && !n ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * qn);
};
var Ps = (i) => {
  i.dispatchEvent(new Event(Ze));
};
var St = (i) => !i || typeof i != "object" ? false : (typeof i.jquery < "u" && (i = i[0]), typeof i.nodeType < "u");
var rt = (i) => St(i) ? i.jquery ? i[0] : i : typeof i == "string" && i.length > 0 ? document.querySelector(i) : null;
var R = (i, t, e) => {
  Object.keys(e).forEach((s) => {
    const n = e[s], r = t[s], o = r && St(r) ? "element" : Xn(r);
    if (!new RegExp(n).test(o))
      throw new Error(
        `${i.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`
      );
  });
};
var kt = (i) => {
  if (!i)
    return false;
  if (i.style && i.parentNode && i.parentNode.style) {
    const t = getComputedStyle(i), e = getComputedStyle(i.parentNode);
    return t.display !== "none" && e.display !== "none" && t.visibility !== "hidden";
  }
  return false;
};
var gt = (i) => !i || i.nodeType !== Node.ELEMENT_NODE || i.classList.contains("disabled") ? true : typeof i.disabled < "u" ? i.disabled : i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false";
var Ms = (i) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof i.getRootNode == "function") {
    const t = i.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return i instanceof ShadowRoot ? i : i.parentNode ? Ms(i.parentNode) : null;
};
var me = () => function() {
};
var Xt = (i) => {
  i.offsetHeight;
};
var Hs = () => {
  const { jQuery: i } = window;
  return i && !document.body.hasAttribute("data-twe-no-jquery") ? i : null;
};
var Le = [];
var Vs = (i) => {
  document.readyState === "loading" ? (Le.length || document.addEventListener("DOMContentLoaded", () => {
    Le.forEach((t) => t());
  }), Le.push(i)) : i();
};
var M = () => document.documentElement.dir === "rtl";
var Ft = (i) => document.createElement(i);
var _t = (i) => {
  typeof i == "function" && i();
};
var Ws = (i, t, e = true) => {
  if (!e) {
    _t(i);
    return;
  }
  const s = 5, n = Je(t) + s;
  let r = false;
  const o = ({ target: a }) => {
    a === t && (r = true, t.removeEventListener(Ze, o), _t(i));
  };
  t.addEventListener(Ze, o), setTimeout(() => {
    r || Ps(t);
  }, n);
};
var Bs = (i, t, e, s) => {
  let n = i.indexOf(t);
  if (n === -1)
    return i[!e && s ? i.length - 1 : 0];
  const r = i.length;
  return n += e ? 1 : -1, s && (n = (n + r) % r), i[Math.max(0, Math.min(n, r - 1))];
};
var Qn = /[^.]*(?=\..*)\.|.*/;
var Zn = /\..*/;
var Jn = /::\d+$/;
var $e = {};
var ki = 1;
var tr = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
};
var er = /^(mouseenter|mouseleave)/i;
var js = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function Us(i, t) {
  return t && `${t}::${ki++}` || i.uidEvent || ki++;
}
function Fs(i) {
  const t = Us(i);
  return i.uidEvent = t, $e[t] = $e[t] || {}, $e[t];
}
function ir(i, t) {
  return function e(s) {
    return s.delegateTarget = i, e.oneOff && d.off(i, s.type, t), t.apply(i, [s]);
  };
}
function sr(i, t, e) {
  return function s(n) {
    const r = i.querySelectorAll(t);
    for (let { target: o } = n; o && o !== this; o = o.parentNode)
      for (let a = r.length; a--; "")
        if (r[a] === o)
          return n.delegateTarget = o, s.oneOff && d.off(i, n.type, e), e.apply(o, [n]);
    return null;
  };
}
function Ys(i, t, e = null) {
  const s = Object.keys(i);
  for (let n = 0, r = s.length; n < r; n++) {
    const o = i[s[n]];
    if (o.originalHandler === t && o.delegationSelector === e)
      return o;
  }
  return null;
}
function Ks(i, t, e) {
  const s = typeof t == "string", n = s ? e : t;
  let r = zs(i);
  return js.has(r) || (r = i), [s, n, r];
}
function Pi(i, t, e, s, n) {
  if (typeof t != "string" || !i)
    return;
  if (e || (e = s, s = null), er.test(t)) {
    const g = (O) => function(T) {
      if (!T.relatedTarget || T.relatedTarget !== T.delegateTarget && !T.delegateTarget.contains(T.relatedTarget))
        return O.call(this, T);
    };
    s ? s = g(s) : e = g(e);
  }
  const [r, o, a] = Ks(
    t,
    e,
    s
  ), l = Fs(i), u = l[a] || (l[a] = {}), c = Ys(
    u,
    o,
    r ? e : null
  );
  if (c) {
    c.oneOff = c.oneOff && n;
    return;
  }
  const f = Us(
    o,
    t.replace(Qn, "")
  ), v = r ? sr(i, e, s) : ir(i, e);
  v.delegationSelector = r ? e : null, v.originalHandler = o, v.oneOff = n, v.uidEvent = f, u[f] = v, i.addEventListener(a, v, r);
}
function ti(i, t, e, s, n) {
  const r = Ys(t[e], s, n);
  r && (i.removeEventListener(e, r, !!n), delete t[e][r.uidEvent]);
}
function nr(i, t, e, s) {
  const n = t[e] || {};
  Object.keys(n).forEach((r) => {
    if (r.includes(s)) {
      const o = n[r];
      ti(
        i,
        t,
        e,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function zs(i) {
  return i = i.replace(Zn, ""), tr[i] || i;
}
var d = {
  on(i, t, e, s) {
    Pi(i, t, e, s, false);
  },
  one(i, t, e, s) {
    Pi(i, t, e, s, true);
  },
  off(i, t, e, s) {
    if (typeof t != "string" || !i)
      return;
    const [n, r, o] = Ks(
      t,
      e,
      s
    ), a = o !== t, l = Fs(i), u = t.startsWith(".");
    if (typeof r < "u") {
      if (!l || !l[o])
        return;
      ti(
        i,
        l,
        o,
        r,
        n ? e : null
      );
      return;
    }
    u && Object.keys(l).forEach((f) => {
      nr(
        i,
        l,
        f,
        t.slice(1)
      );
    });
    const c = l[o] || {};
    Object.keys(c).forEach((f) => {
      const v = f.replace(Jn, "");
      if (!a || t.includes(v)) {
        const g = c[f];
        ti(
          i,
          l,
          o,
          g.originalHandler,
          g.delegationSelector
        );
      }
    });
  },
  trigger(i, t, e) {
    if (typeof t != "string" || !i)
      return null;
    const s = Hs(), n = zs(t), r = t !== n, o = js.has(n);
    let a, l = true, u = true, c = false, f = null;
    return r && s && (a = s.Event(t, e), s(i).trigger(a), l = !a.isPropagationStopped(), u = !a.isImmediatePropagationStopped(), c = a.isDefaultPrevented()), o ? (f = document.createEvent("HTMLEvents"), f.initEvent(n, l, true)) : f = new CustomEvent(t, {
      bubbles: l,
      cancelable: true
    }), typeof e < "u" && Object.keys(e).forEach((v) => {
      Object.defineProperty(f, v, {
        get() {
          return e[v];
        }
      });
    }), c && f.preventDefault(), u && i.dispatchEvent(f), f.defaultPrevented && typeof a < "u" && a.preventDefault(), f;
  }
};
var rr = "5.1.3";
var tt = class {
  constructor(t) {
    t = rt(t), t && (this._element = t, V.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    V.removeData(this._element, this.constructor.DATA_KEY), d.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t) => {
      this[t] = null;
    });
  }
  _queueCallback(t, e, s = true) {
    Ws(t, e, s);
  }
  /** Static */
  static getInstance(t) {
    return V.getData(rt(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return rr;
  }
  static get NAME() {
    throw new Error(
      'You have to implement the static method "NAME", for each component!'
    );
  }
  static get DATA_KEY() {
    return `twe.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
};
var or = "button";
var ar = "active";
var qs = class _qs extends tt {
  // Getters
  static get NAME() {
    return or;
  }
  // Public
  toggle() {
    this._element.setAttribute(
      "aria-pressed",
      this._element.classList.toggle(ar)
    );
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _qs.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
};
var k = "top";
var W = "bottom";
var B = "right";
var P = "left";
var ve = "auto";
var Pt = [k, W, B, P];
var Et = "start";
var Lt = "end";
var Xs = "clippingParents";
var di = "viewport";
var Ct = "popper";
var Gs = "reference";
var ei = Pt.reduce(function(i, t) {
  return i.concat([t + "-" + Et, t + "-" + Lt]);
}, []);
var ui = [].concat(Pt, [ve]).reduce(function(i, t) {
  return i.concat([t, t + "-" + Et, t + "-" + Lt]);
}, []);
var Qs = "beforeRead";
var Zs = "read";
var Js = "afterRead";
var tn = "beforeMain";
var en = "main";
var sn = "afterMain";
var nn = "beforeWrite";
var rn = "write";
var on = "afterWrite";
var an = [Qs, Zs, Js, tn, en, sn, nn, rn, on];
function Q(i) {
  return i ? (i.nodeName || "").toLowerCase() : null;
}
function j(i) {
  if (i == null)
    return window;
  if (i.toString() !== "[object Window]") {
    var t = i.ownerDocument;
    return t && t.defaultView || window;
  }
  return i;
}
function vt(i) {
  var t = j(i).Element;
  return i instanceof t || i instanceof Element;
}
function F(i) {
  var t = j(i).HTMLElement;
  return i instanceof t || i instanceof HTMLElement;
}
function hi(i) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = j(i).ShadowRoot;
  return i instanceof t || i instanceof ShadowRoot;
}
function lr(i) {
  var t = i.state;
  Object.keys(t.elements).forEach(function(e) {
    var s = t.styles[e] || {}, n = t.attributes[e] || {}, r = t.elements[e];
    !F(r) || !Q(r) || (Object.assign(r.style, s), Object.keys(n).forEach(function(o) {
      var a = n[o];
      a === false ? r.removeAttribute(o) : r.setAttribute(o, a === true ? "" : a);
    }));
  });
}
function cr(i) {
  var t = i.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(s) {
      var n = t.elements[s], r = t.attributes[s] || {}, o = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : e[s]), a = o.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !F(n) || !Q(n) || (Object.assign(n.style, a), Object.keys(r).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
var fi = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: lr,
  effect: cr,
  requires: ["computeStyles"]
};
function G(i) {
  return i.split("-")[0];
}
var mt = Math.max;
var Ee = Math.min;
var $t = Math.round;
function ii() {
  var i = navigator.userAgentData;
  return i != null && i.brands && Array.isArray(i.brands) ? i.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ln() {
  return !/^((?!chrome|android).)*safari/i.test(ii());
}
function It(i, t, e) {
  t === void 0 && (t = false), e === void 0 && (e = false);
  var s = i.getBoundingClientRect(), n = 1, r = 1;
  t && F(i) && (n = i.offsetWidth > 0 && $t(s.width) / i.offsetWidth || 1, r = i.offsetHeight > 0 && $t(s.height) / i.offsetHeight || 1);
  var o = vt(i) ? j(i) : window, a = o.visualViewport, l = !ln() && e, u = (s.left + (l && a ? a.offsetLeft : 0)) / n, c = (s.top + (l && a ? a.offsetTop : 0)) / r, f = s.width / n, v = s.height / r;
  return {
    width: f,
    height: v,
    top: c,
    right: u + f,
    bottom: c + v,
    left: u,
    x: u,
    y: c
  };
}
function pi(i) {
  var t = It(i), e = i.offsetWidth, s = i.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: i.offsetLeft,
    y: i.offsetTop,
    width: e,
    height: s
  };
}
function cn(i, t) {
  var e = t.getRootNode && t.getRootNode();
  if (i.contains(t))
    return true;
  if (e && hi(e)) {
    var s = t;
    do {
      if (s && i.isSameNode(s))
        return true;
      s = s.parentNode || s.host;
    } while (s);
  }
  return false;
}
function J(i) {
  return j(i).getComputedStyle(i);
}
function dr(i) {
  return ["table", "td", "th"].indexOf(Q(i)) >= 0;
}
function ot(i) {
  return ((vt(i) ? i.ownerDocument : (
    // $FlowFixMe[prop-missing]
    i.document
  )) || window.document).documentElement;
}
function be(i) {
  return Q(i) === "html" ? i : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    i.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    i.parentNode || // DOM Element detected
    (hi(i) ? i.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ot(i)
  );
}
function Mi(i) {
  return !F(i) || // https://github.com/popperjs/popper-core/issues/837
  J(i).position === "fixed" ? null : i.offsetParent;
}
function ur(i) {
  var t = /firefox/i.test(ii()), e = /Trident/i.test(ii());
  if (e && F(i)) {
    var s = J(i);
    if (s.position === "fixed")
      return null;
  }
  var n = be(i);
  for (hi(n) && (n = n.host); F(n) && ["html", "body"].indexOf(Q(n)) < 0; ) {
    var r = J(n);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function Gt(i) {
  for (var t = j(i), e = Mi(i); e && dr(e) && J(e).position === "static"; )
    e = Mi(e);
  return e && (Q(e) === "html" || Q(e) === "body" && J(e).position === "static") ? t : e || ur(i) || t;
}
function _i(i) {
  return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
}
function zt(i, t, e) {
  return mt(i, Ee(t, e));
}
function hr(i, t, e) {
  var s = zt(i, t, e);
  return s > e ? e : s;
}
function dn() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function un(i) {
  return Object.assign({}, dn(), i);
}
function hn(i, t) {
  return t.reduce(function(e, s) {
    return e[s] = i, e;
  }, {});
}
var fr = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, un(typeof t != "number" ? t : hn(t, Pt));
};
function pr(i) {
  var t, e = i.state, s = i.name, n = i.options, r = e.elements.arrow, o = e.modifiersData.popperOffsets, a = G(e.placement), l = _i(a), u = [P, B].indexOf(a) >= 0, c = u ? "height" : "width";
  if (!(!r || !o)) {
    var f = fr(n.padding, e), v = pi(r), g = l === "y" ? k : P, O = l === "y" ? W : B, T = e.rects.reference[c] + e.rects.reference[l] - o[l] - e.rects.popper[c], A = o[l] - e.rects.reference[l], D = Gt(r), L = D ? l === "y" ? D.clientHeight || 0 : D.clientWidth || 0 : 0, m = T / 2 - A / 2, p = f[g], _ = L - v[c] - f[O], b = L / 2 - v[c] / 2 + m, w = zt(p, b, _), C = l;
    e.modifiersData[s] = (t = {}, t[C] = w, t.centerOffset = w - b, t);
  }
}
function _r(i) {
  var t = i.state, e = i.options, s = e.element, n = s === void 0 ? "[data-popper-arrow]" : s;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || cn(t.elements.popper, n) && (t.elements.arrow = n));
}
var fn = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: pr,
  effect: _r,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Rt(i) {
  return i.split("-")[1];
}
var gr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mr(i, t) {
  var e = i.x, s = i.y, n = t.devicePixelRatio || 1;
  return {
    x: $t(e * n) / n || 0,
    y: $t(s * n) / n || 0
  };
}
function Hi(i) {
  var t, e = i.popper, s = i.popperRect, n = i.placement, r = i.variation, o = i.offsets, a = i.position, l = i.gpuAcceleration, u = i.adaptive, c = i.roundOffsets, f = i.isFixed, v = o.x, g = v === void 0 ? 0 : v, O = o.y, T = O === void 0 ? 0 : O, A = typeof c == "function" ? c({
    x: g,
    y: T
  }) : {
    x: g,
    y: T
  };
  g = A.x, T = A.y;
  var D = o.hasOwnProperty("x"), L = o.hasOwnProperty("y"), m = P, p = k, _ = window;
  if (u) {
    var b = Gt(e), w = "clientHeight", C = "clientWidth";
    if (b === j(e) && (b = ot(e), J(b).position !== "static" && a === "absolute" && (w = "scrollHeight", C = "scrollWidth")), b = b, n === k || (n === P || n === B) && r === Lt) {
      p = W;
      var y = f && b === _ && _.visualViewport ? _.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[w]
      );
      T -= y - s.height, T *= l ? 1 : -1;
    }
    if (n === P || (n === k || n === W) && r === Lt) {
      m = B;
      var N = f && b === _ && _.visualViewport ? _.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[C]
      );
      g -= N - s.width, g *= l ? 1 : -1;
    }
  }
  var S = Object.assign({
    position: a
  }, u && gr), x = c === true ? mr({
    x: g,
    y: T
  }, j(e)) : {
    x: g,
    y: T
  };
  if (g = x.x, T = x.y, l) {
    var I;
    return Object.assign({}, S, (I = {}, I[p] = L ? "0" : "", I[m] = D ? "0" : "", I.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + T + "px)" : "translate3d(" + g + "px, " + T + "px, 0)", I));
  }
  return Object.assign({}, S, (t = {}, t[p] = L ? T + "px" : "", t[m] = D ? g + "px" : "", t.transform = "", t));
}
function Er(i) {
  var t = i.state, e = i.options, s = e.gpuAcceleration, n = s === void 0 ? true : s, r = e.adaptive, o = r === void 0 ? true : r, a = e.roundOffsets, l = a === void 0 ? true : a, u = {
    placement: G(t.placement),
    variation: Rt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hi(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hi(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var gi = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: Er,
  data: {}
};
var se = {
  passive: true
};
function vr(i) {
  var t = i.state, e = i.instance, s = i.options, n = s.scroll, r = n === void 0 ? true : n, o = s.resize, a = o === void 0 ? true : o, l = j(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && u.forEach(function(c) {
    c.addEventListener("scroll", e.update, se);
  }), a && l.addEventListener("resize", e.update, se), function() {
    r && u.forEach(function(c) {
      c.removeEventListener("scroll", e.update, se);
    }), a && l.removeEventListener("resize", e.update, se);
  };
}
var mi = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: vr,
  data: {}
};
var br = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ue(i) {
  return i.replace(/left|right|bottom|top/g, function(t) {
    return br[t];
  });
}
var wr = {
  start: "end",
  end: "start"
};
function Vi(i) {
  return i.replace(/start|end/g, function(t) {
    return wr[t];
  });
}
function Ei(i) {
  var t = j(i), e = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: s
  };
}
function vi(i) {
  return It(ot(i)).left + Ei(i).scrollLeft;
}
function Tr(i, t) {
  var e = j(i), s = ot(i), n = e.visualViewport, r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (n) {
    r = n.width, o = n.height;
    var u = ln();
    (u || !u && t === "fixed") && (a = n.offsetLeft, l = n.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a + vi(i),
    y: l
  };
}
function yr(i) {
  var t, e = ot(i), s = Ei(i), n = (t = i.ownerDocument) == null ? void 0 : t.body, r = mt(e.scrollWidth, e.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), o = mt(e.scrollHeight, e.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -s.scrollLeft + vi(i), l = -s.scrollTop;
  return J(n || e).direction === "rtl" && (a += mt(e.clientWidth, n ? n.clientWidth : 0) - r), {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function bi(i) {
  var t = J(i), e = t.overflow, s = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + n + s);
}
function pn(i) {
  return ["html", "body", "#document"].indexOf(Q(i)) >= 0 ? i.ownerDocument.body : F(i) && bi(i) ? i : pn(be(i));
}
function qt(i, t) {
  var e;
  t === void 0 && (t = []);
  var s = pn(i), n = s === ((e = i.ownerDocument) == null ? void 0 : e.body), r = j(s), o = n ? [r].concat(r.visualViewport || [], bi(s) ? s : []) : s, a = t.concat(o);
  return n ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(qt(be(o)))
  );
}
function si(i) {
  return Object.assign({}, i, {
    left: i.x,
    top: i.y,
    right: i.x + i.width,
    bottom: i.y + i.height
  });
}
function Ar(i, t) {
  var e = It(i, false, t === "fixed");
  return e.top = e.top + i.clientTop, e.left = e.left + i.clientLeft, e.bottom = e.top + i.clientHeight, e.right = e.left + i.clientWidth, e.width = i.clientWidth, e.height = i.clientHeight, e.x = e.left, e.y = e.top, e;
}
function Wi(i, t, e) {
  return t === di ? si(Tr(i, e)) : vt(t) ? Ar(t, e) : si(yr(ot(i)));
}
function Cr(i) {
  var t = qt(be(i)), e = ["absolute", "fixed"].indexOf(J(i).position) >= 0, s = e && F(i) ? Gt(i) : i;
  return vt(s) ? t.filter(function(n) {
    return vt(n) && cn(n, s) && Q(n) !== "body";
  }) : [];
}
function Or(i, t, e, s) {
  var n = t === "clippingParents" ? Cr(i) : [].concat(t), r = [].concat(n, [e]), o = r[0], a = r.reduce(function(l, u) {
    var c = Wi(i, u, s);
    return l.top = mt(c.top, l.top), l.right = Ee(c.right, l.right), l.bottom = Ee(c.bottom, l.bottom), l.left = mt(c.left, l.left), l;
  }, Wi(i, o, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function _n(i) {
  var t = i.reference, e = i.element, s = i.placement, n = s ? G(s) : null, r = s ? Rt(s) : null, o = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (n) {
    case k:
      l = {
        x: o,
        y: t.y - e.height
      };
      break;
    case W:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case B:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case P:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = n ? _i(n) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (r) {
      case Et:
        l[u] = l[u] - (t[c] / 2 - e[c] / 2);
        break;
      case Lt:
        l[u] = l[u] + (t[c] / 2 - e[c] / 2);
        break;
    }
  }
  return l;
}
function xt(i, t) {
  t === void 0 && (t = {});
  var e = t, s = e.placement, n = s === void 0 ? i.placement : s, r = e.strategy, o = r === void 0 ? i.strategy : r, a = e.boundary, l = a === void 0 ? Xs : a, u = e.rootBoundary, c = u === void 0 ? di : u, f = e.elementContext, v = f === void 0 ? Ct : f, g = e.altBoundary, O = g === void 0 ? false : g, T = e.padding, A = T === void 0 ? 0 : T, D = un(typeof A != "number" ? A : hn(A, Pt)), L = v === Ct ? Gs : Ct, m = i.rects.popper, p = i.elements[O ? L : v], _ = Or(vt(p) ? p : p.contextElement || ot(i.elements.popper), l, c, o), b = It(i.elements.reference), w = _n({
    reference: b,
    element: m,
    strategy: "absolute",
    placement: n
  }), C = si(Object.assign({}, m, w)), y = v === Ct ? C : b, N = {
    top: _.top - y.top + D.top,
    bottom: y.bottom - _.bottom + D.bottom,
    left: _.left - y.left + D.left,
    right: y.right - _.right + D.right
  }, S = i.modifiersData.offset;
  if (v === Ct && S) {
    var x = S[n];
    Object.keys(N).forEach(function(I) {
      var at = [B, W].indexOf(I) >= 0 ? 1 : -1, lt = [k, W].indexOf(I) >= 0 ? "y" : "x";
      N[I] += x[lt] * at;
    });
  }
  return N;
}
function Dr(i, t) {
  t === void 0 && (t = {});
  var e = t, s = e.placement, n = e.boundary, r = e.rootBoundary, o = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, u = l === void 0 ? ui : l, c = Rt(s), f = c ? a ? ei : ei.filter(function(O) {
    return Rt(O) === c;
  }) : Pt, v = f.filter(function(O) {
    return u.indexOf(O) >= 0;
  });
  v.length === 0 && (v = f);
  var g = v.reduce(function(O, T) {
    return O[T] = xt(i, {
      placement: T,
      boundary: n,
      rootBoundary: r,
      padding: o
    })[G(T)], O;
  }, {});
  return Object.keys(g).sort(function(O, T) {
    return g[O] - g[T];
  });
}
function Nr(i) {
  if (G(i) === ve)
    return [];
  var t = ue(i);
  return [Vi(i), t, Vi(t)];
}
function Sr(i) {
  var t = i.state, e = i.options, s = i.name;
  if (!t.modifiersData[s]._skip) {
    for (var n = e.mainAxis, r = n === void 0 ? true : n, o = e.altAxis, a = o === void 0 ? true : o, l = e.fallbackPlacements, u = e.padding, c = e.boundary, f = e.rootBoundary, v = e.altBoundary, g = e.flipVariations, O = g === void 0 ? true : g, T = e.allowedAutoPlacements, A = t.options.placement, D = G(A), L = D === A, m = l || (L || !O ? [ue(A)] : Nr(A)), p = [A].concat(m).reduce(function(wt, et) {
      return wt.concat(G(et) === ve ? Dr(t, {
        placement: et,
        boundary: c,
        rootBoundary: f,
        padding: u,
        flipVariations: O,
        allowedAutoPlacements: T
      }) : et);
    }, []), _ = t.rects.reference, b = t.rects.popper, w = /* @__PURE__ */ new Map(), C = true, y = p[0], N = 0; N < p.length; N++) {
      var S = p[N], x = G(S), I = Rt(S) === Et, at = [k, W].indexOf(x) >= 0, lt = at ? "width" : "height", H = xt(t, {
        placement: S,
        boundary: c,
        rootBoundary: f,
        altBoundary: v,
        padding: u
      }), Y = at ? I ? B : P : I ? W : k;
      _[lt] > b[lt] && (Y = ue(Y));
      var Zt = ue(Y), ct = [];
      if (r && ct.push(H[x] <= 0), a && ct.push(H[Y] <= 0, H[Zt] <= 0), ct.every(function(wt) {
        return wt;
      })) {
        y = S, C = false;
        break;
      }
      w.set(S, ct);
    }
    if (C)
      for (var Jt = O ? 3 : 1, Ae = function(et) {
        var Vt = p.find(function(ee) {
          var dt = w.get(ee);
          if (dt)
            return dt.slice(0, et).every(function(Ce) {
              return Ce;
            });
        });
        if (Vt)
          return y = Vt, "break";
      }, Ht = Jt; Ht > 0; Ht--) {
        var te = Ae(Ht);
        if (te === "break")
          break;
      }
    t.placement !== y && (t.modifiersData[s]._skip = true, t.placement = y, t.reset = true);
  }
}
var gn = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Sr,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function Bi(i, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: i.top - t.height - e.y,
    right: i.right - t.width + e.x,
    bottom: i.bottom - t.height + e.y,
    left: i.left - t.width - e.x
  };
}
function ji(i) {
  return [k, B, W, P].some(function(t) {
    return i[t] >= 0;
  });
}
function Lr(i) {
  var t = i.state, e = i.name, s = t.rects.reference, n = t.rects.popper, r = t.modifiersData.preventOverflow, o = xt(t, {
    elementContext: "reference"
  }), a = xt(t, {
    altBoundary: true
  }), l = Bi(o, s), u = Bi(a, n, r), c = ji(l), f = ji(u);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": f
  });
}
var mn = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Lr
};
function $r(i, t, e) {
  var s = G(i), n = [P, k].indexOf(s) >= 0 ? -1 : 1, r = typeof e == "function" ? e(Object.assign({}, t, {
    placement: i
  })) : e, o = r[0], a = r[1];
  return o = o || 0, a = (a || 0) * n, [P, B].indexOf(s) >= 0 ? {
    x: a,
    y: o
  } : {
    x: o,
    y: a
  };
}
function Ir(i) {
  var t = i.state, e = i.options, s = i.name, n = e.offset, r = n === void 0 ? [0, 0] : n, o = ui.reduce(function(c, f) {
    return c[f] = $r(f, t.rects, r), c;
  }, {}), a = o[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[s] = o;
}
var En = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ir
};
function Rr(i) {
  var t = i.state, e = i.name;
  t.modifiersData[e] = _n({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var wi = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Rr,
  data: {}
};
function xr(i) {
  return i === "x" ? "y" : "x";
}
function kr(i) {
  var t = i.state, e = i.options, s = i.name, n = e.mainAxis, r = n === void 0 ? true : n, o = e.altAxis, a = o === void 0 ? false : o, l = e.boundary, u = e.rootBoundary, c = e.altBoundary, f = e.padding, v = e.tether, g = v === void 0 ? true : v, O = e.tetherOffset, T = O === void 0 ? 0 : O, A = xt(t, {
    boundary: l,
    rootBoundary: u,
    padding: f,
    altBoundary: c
  }), D = G(t.placement), L = Rt(t.placement), m = !L, p = _i(D), _ = xr(p), b = t.modifiersData.popperOffsets, w = t.rects.reference, C = t.rects.popper, y = typeof T == "function" ? T(Object.assign({}, t.rects, {
    placement: t.placement
  })) : T, N = typeof y == "number" ? {
    mainAxis: y,
    altAxis: y
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, y), S = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = {
    x: 0,
    y: 0
  };
  if (b) {
    if (r) {
      var I, at = p === "y" ? k : P, lt = p === "y" ? W : B, H = p === "y" ? "height" : "width", Y = b[p], Zt = Y + A[at], ct = Y - A[lt], Jt = g ? -C[H] / 2 : 0, Ae = L === Et ? w[H] : C[H], Ht = L === Et ? -C[H] : -w[H], te = t.elements.arrow, wt = g && te ? pi(te) : {
        width: 0,
        height: 0
      }, et = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : dn(), Vt = et[at], ee = et[lt], dt = zt(0, w[H], wt[H]), Ce = m ? w[H] / 2 - Jt - dt - Vt - N.mainAxis : Ae - dt - Vt - N.mainAxis, Vn = m ? -w[H] / 2 + Jt + dt + ee + N.mainAxis : Ht + dt + ee + N.mainAxis, Oe = t.elements.arrow && Gt(t.elements.arrow), Wn = Oe ? p === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, Oi = (I = S == null ? void 0 : S[p]) != null ? I : 0, Bn = Y + Ce - Oi - Wn, jn = Y + Vn - Oi, Di = zt(g ? Ee(Zt, Bn) : Zt, Y, g ? mt(ct, jn) : ct);
      b[p] = Di, x[p] = Di - Y;
    }
    if (a) {
      var Ni, Un = p === "x" ? k : P, Fn = p === "x" ? W : B, ut = b[_], ie = _ === "y" ? "height" : "width", Si = ut + A[Un], Li = ut - A[Fn], De = [k, P].indexOf(D) !== -1, $i = (Ni = S == null ? void 0 : S[_]) != null ? Ni : 0, Ii = De ? Si : ut - w[ie] - C[ie] - $i + N.altAxis, Ri = De ? ut + w[ie] + C[ie] - $i - N.altAxis : Li, xi = g && De ? hr(Ii, ut, Ri) : zt(g ? Ii : Si, ut, g ? Ri : Li);
      b[_] = xi, x[_] = xi - ut;
    }
    t.modifiersData[s] = x;
  }
}
var vn = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: kr,
  requiresIfExists: ["offset"]
};
function Pr(i) {
  return {
    scrollLeft: i.scrollLeft,
    scrollTop: i.scrollTop
  };
}
function Mr(i) {
  return i === j(i) || !F(i) ? Ei(i) : Pr(i);
}
function Hr(i) {
  var t = i.getBoundingClientRect(), e = $t(t.width) / i.offsetWidth || 1, s = $t(t.height) / i.offsetHeight || 1;
  return e !== 1 || s !== 1;
}
function Vr(i, t, e) {
  e === void 0 && (e = false);
  var s = F(t), n = F(t) && Hr(t), r = ot(t), o = It(i, n, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !e) && ((Q(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  bi(r)) && (a = Mr(t)), F(t) ? (l = It(t, true), l.x += t.clientLeft, l.y += t.clientTop) : r && (l.x = vi(r))), {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Wr(i) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), s = [];
  i.forEach(function(r) {
    t.set(r.name, r);
  });
  function n(r) {
    e.add(r.name);
    var o = [].concat(r.requires || [], r.requiresIfExists || []);
    o.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && n(l);
      }
    }), s.push(r);
  }
  return i.forEach(function(r) {
    e.has(r.name) || n(r);
  }), s;
}
function Br(i) {
  var t = Wr(i);
  return an.reduce(function(e, s) {
    return e.concat(t.filter(function(n) {
      return n.phase === s;
    }));
  }, []);
}
function jr(i) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(i());
      });
    })), t;
  };
}
function Ur(i) {
  var t = i.reduce(function(e, s) {
    var n = e[s.name];
    return e[s.name] = n ? Object.assign({}, n, s, {
      options: Object.assign({}, n.options, s.options),
      data: Object.assign({}, n.data, s.data)
    }) : s, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var Ui = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fi() {
  for (var i = arguments.length, t = new Array(i), e = 0; e < i; e++)
    t[e] = arguments[e];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function we(i) {
  i === void 0 && (i = {});
  var t = i, e = t.defaultModifiers, s = e === void 0 ? [] : e, n = t.defaultOptions, r = n === void 0 ? Ui : n;
  return function(a, l, u) {
    u === void 0 && (u = r);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ui, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, f = [], v = false, g = {
      state: c,
      setOptions: function(D) {
        var L = typeof D == "function" ? D(c.options) : D;
        T(), c.options = Object.assign({}, r, c.options, L), c.scrollParents = {
          reference: vt(a) ? qt(a) : a.contextElement ? qt(a.contextElement) : [],
          popper: qt(l)
        };
        var m = Br(Ur([].concat(s, c.options.modifiers)));
        return c.orderedModifiers = m.filter(function(p) {
          return p.enabled;
        }), O(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var D = c.elements, L = D.reference, m = D.popper;
          if (Fi(L, m)) {
            c.rects = {
              reference: Vr(L, Gt(m), c.options.strategy === "fixed"),
              popper: pi(m)
            }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(N) {
              return c.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var p = 0; p < c.orderedModifiers.length; p++) {
              if (c.reset === true) {
                c.reset = false, p = -1;
                continue;
              }
              var _ = c.orderedModifiers[p], b = _.fn, w = _.options, C = w === void 0 ? {} : w, y = _.name;
              typeof b == "function" && (c = b({
                state: c,
                options: C,
                name: y,
                instance: g
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: jr(function() {
        return new Promise(function(A) {
          g.forceUpdate(), A(c);
        });
      }),
      destroy: function() {
        T(), v = true;
      }
    };
    if (!Fi(a, l))
      return g;
    g.setOptions(u).then(function(A) {
      !v && u.onFirstUpdate && u.onFirstUpdate(A);
    });
    function O() {
      c.orderedModifiers.forEach(function(A) {
        var D = A.name, L = A.options, m = L === void 0 ? {} : L, p = A.effect;
        if (typeof p == "function") {
          var _ = p({
            state: c,
            name: D,
            instance: g,
            options: m
          }), b = function() {
          };
          f.push(_ || b);
        }
      });
    }
    function T() {
      f.forEach(function(A) {
        return A();
      }), f = [];
    }
    return g;
  };
}
var Fr = we();
var Yr = [mi, wi, gi, fi];
var Kr = we({
  defaultModifiers: Yr
});
var zr = [mi, wi, gi, fi, En, gn, vn, fn, mn];
var Ti = we({
  defaultModifiers: zr
});
var bn = Object.freeze(Object.defineProperty({
  __proto__: null,
  afterMain: sn,
  afterRead: Js,
  afterWrite: on,
  applyStyles: fi,
  arrow: fn,
  auto: ve,
  basePlacements: Pt,
  beforeMain: tn,
  beforeRead: Qs,
  beforeWrite: nn,
  bottom: W,
  clippingParents: Xs,
  computeStyles: gi,
  createPopper: Ti,
  createPopperBase: Fr,
  createPopperLite: Kr,
  detectOverflow: xt,
  end: Lt,
  eventListeners: mi,
  flip: gn,
  hide: mn,
  left: P,
  main: en,
  modifierPhases: an,
  offset: En,
  placements: ui,
  popper: Ct,
  popperGenerator: we,
  popperOffsets: wi,
  preventOverflow: vn,
  read: Zs,
  reference: Gs,
  right: B,
  start: Et,
  top: k,
  variationPlacements: ei,
  viewport: di,
  write: rn
}, Symbol.toStringTag, { value: "Module" }));
function Ie(i) {
  return i === "true" ? true : i === "false" ? false : i === Number(i).toString() ? Number(i) : i === "" || i === "null" ? null : i;
}
function Re(i) {
  return i.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
var E = {
  setDataAttribute(i, t, e) {
    i.setAttribute(`data-twe-${Re(t)}`, e);
  },
  removeDataAttribute(i, t) {
    i.removeAttribute(`data-twe-${Re(t)}`);
  },
  getDataAttributes(i) {
    if (!i)
      return {};
    const t = {};
    return Object.keys(i.dataset).filter((e) => e.startsWith("twe")).forEach((e) => {
      if (e.startsWith("tweClass"))
        return;
      let s = e.replace(/^twe/, "");
      s = s.charAt(0).toLowerCase() + s.slice(1, s.length), t[s] = Ie(i.dataset[e]);
    }), t;
  },
  getDataClassAttributes(i) {
    if (!i)
      return {};
    const t = __spreadValues({}, i.dataset);
    return Object.keys(t).filter((e) => e.startsWith("tweClass")).forEach((e) => {
      let s = e.replace(/^tweClass/, "");
      s = s.charAt(0).toLowerCase() + s.slice(1, s.length), t[s] = Ie(t[e]);
    }), t;
  },
  getDataAttribute(i, t) {
    return Ie(
      i.getAttribute(`data-twe-${Re(t)}`)
    );
  },
  offset(i) {
    const t = i.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position(i) {
    return {
      top: i.offsetTop,
      left: i.offsetLeft
    };
  },
  style(i, t) {
    Object.assign(i.style, t);
  },
  toggleClass(i, t) {
    i && xe(t).forEach((e) => {
      i.classList.contains(e) ? i.classList.remove(e) : i.classList.add(e);
    });
  },
  addClass(i, t) {
    xe(t).forEach(
      (e) => !i.classList.contains(e) && i.classList.add(e)
    );
  },
  addStyle(i, t) {
    Object.keys(t).forEach((e) => {
      i.style[e] = t[e];
    });
  },
  removeClass(i, t) {
    xe(t).forEach(
      (e) => i.classList.contains(e) && i.classList.remove(e)
    );
  },
  hasClass(i, t) {
    return i.classList.contains(t);
  },
  maxOffset(i) {
    const t = i.getBoundingClientRect();
    return {
      top: t.top + Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        window.scrollY
      ),
      left: t.left + Math.max(
        document.body.scrollLeft,
        document.documentElement.scrollLeft,
        window.scrollX
      )
    };
  }
};
function xe(i) {
  return typeof i == "string" ? i.split(" ") : Array.isArray(i) ? i : false;
}
var qr = 3;
var h = {
  closest(i, t) {
    return i.closest(t);
  },
  matches(i, t) {
    return i.matches(t);
  },
  find(i, t = document.documentElement) {
    return [].concat(
      ...Element.prototype.querySelectorAll.call(t, i)
    );
  },
  findOne(i, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, i);
  },
  children(i, t) {
    return [].concat(...i.children).filter((s) => s.matches(t));
  },
  parents(i, t) {
    const e = [];
    let s = i.parentNode;
    for (; s && s.nodeType === Node.ELEMENT_NODE && s.nodeType !== qr; )
      this.matches(s, t) && e.push(s), s = s.parentNode;
    return e;
  },
  prev(i, t) {
    let e = i.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  next(i, t) {
    let e = i.nextElementSibling;
    for (; e; ) {
      if (this.matches(e, t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(i) {
    const t = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "details",
      "[tabindex]",
      '[contenteditable="true"]'
    ].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
    return this.find(t, i).filter(
      (e) => !gt(e) && kt(e)
    );
  }
};
var ke = "dropdown";
var Xr = "twe.dropdown";
var bt = `.${Xr}`;
var yi = ".data-api";
var he = "Escape";
var Yi = "Space";
var Ki = "Tab";
var ni = "ArrowUp";
var fe = "ArrowDown";
var Gr = 2;
var Qr = new RegExp(
  `${ni}|${fe}|${he}`
);
var Zr = `hide${bt}`;
var Jr = `hidden${bt}`;
var to = `show${bt}`;
var eo = `shown${bt}`;
var io = `click${bt}${yi}`;
var zi = `keydown${bt}${yi}`;
var so = `keyup${bt}${yi}`;
var it = "show";
var no = "dropup";
var ro = "dropend";
var oo = "dropstart";
var ao = "[data-twe-navbar-ref]";
var ne = "[data-twe-dropdown-toggle-ref]";
var Pe = "[data-twe-dropdown-menu-ref]";
var lo = "[data-twe-navbar-nav-ref]";
var co = "[data-twe-dropdown-menu-ref] [data-twe-dropdown-item-ref]:not(.disabled):not(:disabled)";
var uo = M() ? "top-end" : "top-start";
var ho = M() ? "top-start" : "top-end";
var fo = M() ? "bottom-end" : "bottom-start";
var po = M() ? "bottom-start" : "bottom-end";
var _o = M() ? "left-start" : "right-start";
var go = M() ? "right-start" : "left-start";
var mo = [{ opacity: "0" }, { opacity: "1" }];
var Eo = [{ opacity: "1" }, { opacity: "0" }];
var qi = {
  iterations: 1,
  easing: "ease",
  fill: "both"
};
var vo = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: true,
  dropdownAnimation: "on",
  animationDuration: 550
};
var bo = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)",
  dropdownAnimation: "string",
  animationDuration: "number"
};
var X = class _X extends tt {
  constructor(t, e) {
    super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._fadeOutAnimate = null;
    const s = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    this._animationCanPlay = this._config.dropdownAnimation === "on" && !s, this._didInit = false, this._init();
  }
  // Getters
  static get Default() {
    return vo;
  }
  static get DefaultType() {
    return bo;
  }
  static get NAME() {
    return ke;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (gt(this._element) || this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    if (d.trigger(
      this._element,
      to,
      t
    ).defaultPrevented)
      return;
    const s = _X.getParentFromElement(this._element);
    this._inNavbar ? E.setDataAttribute(this._menu, "popper", "none") : this._createPopper(s), "ontouchstart" in document.documentElement && !s.closest(lo) && [].concat(...document.body.children).forEach((n) => d.on(n, "mouseover", me)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.setAttribute(`data-twe-dropdown-${it}`, ""), this._animationCanPlay && this._menu.animate(mo, __spreadProps(__spreadValues({}, qi), {
      duration: this._config.animationDuration
    })), this._element.setAttribute(`data-twe-dropdown-${it}`, ""), setTimeout(
      () => {
        d.trigger(this._element, eo, t);
      },
      this._animationCanPlay ? this._config.animationDuration : 0
    );
  }
  hide() {
    if (gt(this._element) || !this._isShown(this._menu))
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _init() {
    this._didInit || (d.on(
      document,
      zi,
      ne,
      _X.dataApiKeydownHandler
    ), d.on(
      document,
      zi,
      Pe,
      _X.dataApiKeydownHandler
    ), d.on(document, io, _X.clearMenus), d.on(document, so, _X.clearMenus), this._didInit = true);
  }
  _completeHide(t) {
    this._fadeOutAnimate && this._fadeOutAnimate.playState === "running" || d.trigger(
      this._element,
      Zr,
      t
    ).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((s) => d.off(s, "mouseover", me)), this._animationCanPlay && (this._fadeOutAnimate = this._menu.animate(Eo, __spreadProps(__spreadValues({}, qi), {
      duration: this._config.animationDuration
    }))), setTimeout(
      () => {
        this._popper && this._popper.destroy(), this._menu.removeAttribute(`data-twe-dropdown-${it}`), this._element.removeAttribute(`data-twe-dropdown-${it}`), this._element.setAttribute("aria-expanded", "false"), E.removeDataAttribute(this._menu, "popper"), d.trigger(this._element, Jr, t);
      },
      this._animationCanPlay ? this._config.animationDuration : 0
    ));
  }
  _getConfig(t) {
    if (t = __spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), E.getDataAttributes(this._element)), t), R(ke, t, this.constructor.DefaultType), typeof t.reference == "object" && !St(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(
        `${ke.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      );
    return t;
  }
  _createPopper(t) {
    if (typeof bn > "u")
      throw new TypeError(
        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
      );
    let e = this._element;
    this._config.reference === "parent" ? e = t : St(this._config.reference) ? e = rt(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
    const s = this._getPopperConfig(), n = s.modifiers.find(
      (r) => r.name === "applyStyles" && r.enabled === false
    );
    this._popper = Ti(
      e,
      this._menu,
      s
    ), n && E.setDataAttribute(this._menu, "popper", "static");
  }
  _isShown(t = this._element) {
    return t.dataset[`tweDropdown${it.charAt(0).toUpperCase() + it.slice(1)}`] === "";
  }
  _getMenuElement() {
    return h.next(this._element, Pe)[0];
  }
  _getPlacement() {
    const t = this._element.parentNode;
    if (t.dataset.tweDropdownPosition === ro)
      return _o;
    if (t.dataset.tweDropdownPosition === oo)
      return go;
    const e = t.dataset.tweDropdownAlignment === "end";
    return t.dataset.tweDropdownPosition === no ? e ? ho : uo : e ? po : fo;
  }
  _detectNavbar() {
    return this._element.closest(ao) !== null;
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }
      ]
    };
    return this._config.display === "static" && (t.modifiers = [
      {
        name: "applyStyles",
        enabled: false
      }
    ]), __spreadValues(__spreadValues({}, t), typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig);
  }
  _selectMenuItem({ key: t, target: e }) {
    const s = h.find(
      co,
      this._menu
    ).filter(kt);
    s.length && Bs(
      s,
      e,
      t === fe,
      !s.includes(e)
    ).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _X.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t && (t.button === Gr || t.type === "keyup" && t.key !== Ki))
      return;
    const e = h.find(ne);
    for (let s = 0, n = e.length; s < n; s++) {
      const r = _X.getInstance(e[s]);
      if (!r || r._config.autoClose === false || !r._isShown())
        continue;
      const o = {
        relatedTarget: r._element
      };
      if (t) {
        const a = t.composedPath(), l = a.includes(r._menu);
        if (a.includes(r._element) || r._config.autoClose === "inside" && !l || r._config.autoClose === "outside" && l || r._menu.contains(t.target) && (t.type === "keyup" && t.key === Ki || /input|select|option|textarea|form/i.test(t.target.tagName)))
          continue;
        t.type === "click" && (o.clickEvent = t);
      }
      r._completeHide(o);
    }
  }
  static getParentFromElement(t) {
    return nt(t) || t.parentNode;
  }
  static dataApiKeydownHandler(t) {
    if (/input|textarea/i.test(t.target.tagName) ? t.key === Yi || t.key !== he && (t.key !== fe && t.key !== ni || t.target.closest(Pe)) : !Qr.test(t.key))
      return;
    const e = this.dataset[`tweDropdown${it.charAt(0).toUpperCase() + it.slice(1)}`] === "";
    if (!e && t.key === he || (t.preventDefault(), t.stopPropagation(), gt(this)))
      return;
    const s = this.matches(ne) ? this : h.prev(this, ne)[0], n = _X.getOrCreateInstance(s);
    if (t.key === he) {
      n.hide();
      return;
    }
    if (t.key === ni || t.key === fe) {
      e || n.show(), n._selectMenuItem(t);
      return;
    }
    (!e || t.key === Yi) && _X.clearMenus();
  }
};
var Me = "collapse";
var wn = "twe.collapse";
var Te = `.${wn}`;
var Xi = {
  toggle: true,
  parent: null
};
var wo = {
  toggle: "boolean",
  parent: "(null|element)"
};
var To = `show${Te}`;
var yo = `shown${Te}`;
var Ao = `hide${Te}`;
var Co = `hidden${Te}`;
var He = "data-twe-collapse-show";
var Gi = "data-twe-collapse-collapsed";
var re = "data-twe-collapse-collapsing";
var Oo = "data-twe-collapse-horizontal";
var Nt = "data-twe-collapse-item";
var Qi = `:scope [${Nt}] [${Nt}]`;
var Do = "width";
var No = "height";
var So = "[data-twe-collapse-item][data-twe-collapse-show], [data-twe-collapse-item][data-twe-collapse-collapsing]";
var Zi = "[data-twe-collapse-init]";
var Lo = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
};
var $o = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
var pe = class _pe extends tt {
  constructor(t, e, s) {
    super(t), this._isTransitioning = false, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._triggerArray = [];
    const n = h.find(Zi);
    for (let r = 0, o = n.length; r < o; r++) {
      const a = n[r], l = ci(a), u = h.find(l).filter(
        (c) => c === this._element
      );
      l !== null && u.length && (this._selector = l, this._triggerArray.push(a));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Xi;
  }
  static get NAME() {
    return Me;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [], e;
    if (this._config.parent) {
      const c = h.find(
        Qi,
        this._config.parent
      );
      t = h.find(
        So,
        this._config.parent
      ).filter((f) => !c.includes(f));
    }
    const s = h.findOne(this._selector);
    if (t.length) {
      const c = t.find((f) => s !== f);
      if (e = c ? _pe.getInstance(c) : null, e && e._isTransitioning)
        return;
    }
    if (d.trigger(this._element, To).defaultPrevented)
      return;
    t.forEach((c) => {
      s !== c && _pe.getOrCreateInstance(c, { toggle: false }).hide(), e || V.setData(c, wn, null);
    });
    const r = this._getDimension(), o = r === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    E.removeClass(this._element, this._classes.visible), E.removeClass(this._element, this._classes.hidden), E.addClass(this._element, o), this._element.removeAttribute(Nt), this._element.setAttribute(re, ""), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
    const a = () => {
      this._isTransitioning = false, E.removeClass(this._element, this._classes.hidden), E.removeClass(this._element, o), E.addClass(this._element, this._classes.visible), this._element.removeAttribute(re), this._element.setAttribute(Nt, ""), this._element.setAttribute(He, ""), this._element.style[r] = "", d.trigger(this._element, yo);
    }, u = `scroll${r[0].toUpperCase() + r.slice(1)}`;
    this._queueCallback(a, this._element, true), this._element.style[r] = `${this._element[u]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || d.trigger(this._element, Ao).defaultPrevented)
      return;
    const e = this._getDimension(), s = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Xt(this._element), E.addClass(this._element, s), E.removeClass(this._element, this._classes.visible), E.removeClass(this._element, this._classes.hidden), this._element.setAttribute(re, ""), this._element.removeAttribute(Nt), this._element.removeAttribute(He);
    const n = this._triggerArray.length;
    for (let o = 0; o < n; o++) {
      const a = this._triggerArray[o], l = nt(a);
      l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], false);
    }
    this._isTransitioning = true;
    const r = () => {
      this._isTransitioning = false, E.removeClass(this._element, s), E.addClass(this._element, this._classes.visible), E.addClass(this._element, this._classes.hidden), this._element.removeAttribute(re), this._element.setAttribute(Nt, ""), d.trigger(this._element, Co);
    };
    this._element.style[e] = "", this._queueCallback(r, this._element, true);
  }
  _isShown(t = this._element) {
    return t.hasAttribute(He);
  }
  // Private
  _getConfig(t) {
    return t = __spreadValues(__spreadValues(__spreadValues({}, Xi), E.getDataAttributes(this._element)), t), t.toggle = !!t.toggle, t.parent = rt(t.parent), R(Me, t, wo), t;
  }
  _getClasses(t) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, Lo), e), t), R(Me, t, $o), t;
  }
  _getDimension() {
    return this._element.hasAttribute(Oo) ? Do : No;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = h.find(
      Qi,
      this._config.parent
    );
    h.find(Zi, this._config.parent).filter((e) => !t.includes(e)).forEach((e) => {
      const s = nt(e);
      s && this._addAriaAndCollapsedClass([e], this._isShown(s));
    });
  }
  _addAriaAndCollapsedClass(t, e) {
    t.length && t.forEach((s) => {
      e ? s.removeAttribute(Gi) : s.setAttribute(`${Gi}`, ""), s.setAttribute("aria-expanded", e);
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = {};
      typeof t == "string" && /show|hide/.test(t) && (e.toggle = false);
      const s = _pe.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
};
var Ji = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
var ts = ".sticky-top";
var ri = class {
  constructor() {
    this._element = document.body;
  }
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(
      this._element,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      Ji,
      "paddingRight",
      (e) => e + t
    ), this._setElementAttributes(
      ts,
      "marginRight",
      (e) => e - t
    );
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, s) {
    const n = this.getWidth(), r = (o) => {
      if (o !== this._element && window.innerWidth > o.clientWidth + n)
        return;
      this._saveInitialAttribute(o, e);
      const a = window.getComputedStyle(o)[e];
      o.style[e] = `${s(
        Number.parseFloat(a)
      )}px`;
    };
    this._applyManipulationCallback(t, r);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Ji, "paddingRight"), this._resetElementAttributes(ts, "marginRight");
  }
  _saveInitialAttribute(t, e) {
    const s = t.style[e];
    s && E.setDataAttribute(t, e, s);
  }
  _resetElementAttributes(t, e) {
    const s = (n) => {
      const r = E.getDataAttribute(n, e);
      typeof r > "u" ? n.style.removeProperty(e) : (E.removeDataAttribute(n, e), n.style[e] = r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, e) {
    St(t) ? e(t) : h.find(t, this._element).forEach(e);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
};
var Io = {
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  isAnimated: false,
  rootElement: "body",
  // give the choice to place backdrop under different elements
  clickCallback: null,
  backdropClasses: null
};
var Ro = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "(element|string)",
  clickCallback: "(function|null)",
  backdropClasses: "(array|string|null)"
};
var Tn = "backdrop";
var es = `mousedown.twe.${Tn}`;
var yn = class {
  constructor(t) {
    this._config = this._getConfig(t), this._isAppended = false, this._element = null;
  }
  show(t) {
    if (!this._config.isVisible) {
      _t(t);
      return;
    }
    this._append(), this._config.isAnimated && Xt(this._getElement());
    const e = this._config.backdropClasses || [
      "opacity-50",
      "transition-all",
      "duration-300",
      "ease-in-out",
      "fixed",
      "top-0",
      "left-0",
      "z-[1040]",
      "bg-black",
      "w-screen",
      "h-screen"
    ];
    E.removeClass(this._getElement(), "opacity-0"), E.addClass(this._getElement(), e), this._element.setAttribute("data-twe-backdrop-show", ""), this._emulateAnimation(() => {
      _t(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      _t(t);
      return;
    }
    this._element.removeAttribute("data-twe-backdrop-show"), this._getElement().classList.add("opacity-0"), this._getElement().classList.remove("opacity-50"), this._emulateAnimation(() => {
      this.dispose(), _t(t);
    });
  }
  update(t = {}) {
    this._config = this._getConfig(__spreadValues(__spreadValues({}, this._config), t));
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      this._element = t;
    }
    return this._element;
  }
  _getConfig(t) {
    return t = __spreadValues(__spreadValues({}, Io), typeof t == "object" ? t : {}), t.rootElement = rt(t.rootElement), R(Tn, t, Ro), t;
  }
  _append() {
    this._isAppended || (this._config.rootElement.append(this._getElement()), d.on(this._getElement(), es, () => {
      _t(this._config.clickCallback);
    }), this._isAppended = true);
  }
  dispose() {
    this._isAppended && (d.off(this._element, es), this._element.remove(), this._isAppended = false);
  }
  _emulateAnimation(t) {
    Ws(
      t,
      this._getElement(),
      this._config.isAnimated
    );
  }
};
var An = class {
  constructor(t, e = {}, s) {
    this._element = t, this._toggler = s, this._event = e.event || "blur", this._condition = e.condition || (() => true), this._selector = e.selector || 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])', this._onlyVisible = e.onlyVisible || false, this._focusableElements = [], this._firstElement = null, this._lastElement = null, this.handler = (n) => {
      this._condition(n) && !n.shiftKey && n.target === this._lastElement ? (n.preventDefault(), this._firstElement.focus()) : this._condition(n) && n.shiftKey && n.target === this._firstElement && (n.preventDefault(), this._lastElement.focus());
    };
  }
  trap() {
    this._setElements(), this._init(), this._setFocusTrap();
  }
  disable() {
    this._focusableElements.forEach((t) => {
      t.removeEventListener(this._event, this.handler);
    }), this._toggler && this._toggler.focus();
  }
  update() {
    this._setElements(), this._setFocusTrap();
  }
  _init() {
    const t = (e) => {
      !this._firstElement || e.key !== "Tab" || this._focusableElements.includes(e.target) || (e.preventDefault(), this._firstElement.focus(), window.removeEventListener("keydown", t));
    };
    window.addEventListener("keydown", t);
  }
  _filterVisible(t) {
    return t.filter((e) => {
      if (!kt(e))
        return false;
      const s = h.parents(e, "*");
      for (let n = 0; n < s.length; n++) {
        const r = window.getComputedStyle(s[n]);
        if (r && (r.display === "none" || r.visibility === "hidden"))
          return false;
      }
      return true;
    });
  }
  _setElements() {
    const t = h.find(this._selector, this._element);
    this._focusableElements = t.filter((e) => {
      const s = e.getAttribute("data-twe-disabled") === "true" || e.hasAttribute("disabled");
      return e.disabled || s ? null : e;
    }), this._onlyVisible && (this._focusableElements = this._filterVisible(this._focusableElements)), this._firstElement = this._focusableElements[0], this._lastElement = this._focusableElements[this._focusableElements.length - 1];
  }
  _setFocusTrap() {
    this._focusableElements.forEach((t, e) => {
      e === this._focusableElements.length - 1 || e === 0 ? t.addEventListener(this._event, this.handler) : t.removeEventListener(this._event, this.handler);
    });
  }
};
var is = [];
var Cn = (i, t = "hide") => {
  const e = `click.dismiss${i.EVENT_KEY}`, s = i.NAME;
  is.includes(s) || (is.push(s), d.on(
    document,
    e,
    `[data-twe-${s}-dismiss]`,
    function(n) {
      if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), gt(this))
        return;
      const r = nt(this) || this.closest(`.${s}`) || this.closest(`[data-twe-${s}-init]`);
      if (!r)
        return;
      i.getOrCreateInstance(r)[t]();
    }
  ));
};
var xo = 9;
var ss = "offcanvas";
var ko = "twe.offcanvas";
var Mt = `.${ko}`;
var Po = ".data-api";
var Mo = `load${Mt}${Po}`;
var Ho = "Escape";
var ns = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
var Vo = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
};
var rs = "show";
var Wo = "[data-twe-offcanvas-init][data-twe-offcanvas-show]";
var Bo = `show${Mt}`;
var jo = `shown${Mt}`;
var Uo = `hide${Mt}`;
var Fo = `hidden${Mt}`;
var Yo = `keydown.dismiss${Mt}`;
var _e = class __e extends tt {
  constructor(t, e) {
    super(t), this._config = this._getConfig(e), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners(), this._didInit = false, this._init();
  }
  // Getters
  static get NAME() {
    return ss;
  }
  static get Default() {
    return ns;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || d.trigger(this._element, Bo, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new ri().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`data-twe-offcanvas-${rs}`, "");
    const s = () => {
      this._config.scroll || this._focustrap.trap(), d.trigger(this._element, jo, { relatedTarget: t });
    };
    this._queueCallback(s, this._element, true);
  }
  hide() {
    if (!this._isShown || d.trigger(this._element, Uo).defaultPrevented)
      return;
    this._focustrap.disable(), this._element.blur(), this._isShown = false, this._element.removeAttribute(`data-twe-offcanvas-${rs}`), this._backdrop.hide();
    const e = () => {
      this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new ri().reset(), d.trigger(this._element, Fo);
    };
    this._queueCallback(e, this._element, true);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (d.on(
      window,
      Mo,
      () => h.find(Wo).forEach(
        (t) => __e.getOrCreateInstance(t).show()
      )
    ), this._didInit = true, Cn(__e));
  }
  _getConfig(t) {
    return t = __spreadValues(__spreadValues(__spreadValues({}, ns), E.getDataAttributes(this._element)), typeof t == "object" ? t : {}), R(ss, t, Vo), t;
  }
  _initializeBackDrop() {
    return new yn({
      isVisible: this._config.backdrop,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: () => this.hide()
    });
  }
  _initializeFocusTrap() {
    return new An(this._element, {
      event: "keydown",
      condition: (t) => t.keyCode === xo,
      onlyVisible: true
    });
  }
  _addEventListeners() {
    d.on(this._element, Yo, (t) => {
      this._config.keyboard && t.key === Ho && this.hide();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = __e.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
};
var Ve = "carousel";
var Ko = "twe.carousel";
var U = `.${Ko}`;
var On = ".data-api";
var zo = "ArrowLeft";
var qo = "ArrowRight";
var Xo = 500;
var Go = 40;
var os = {
  interval: 5e3,
  keyboard: true,
  ride: false,
  pause: "hover",
  wrap: true,
  touch: true
};
var Qo = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  ride: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
};
var Zo = {
  pointer: "touch-pan-y",
  block: "!block",
  visible: "data-[twe-carousel-fade]:opacity-100 data-[twe-carousel-fade]:z-[1]",
  invisible: "data-[twe-carousel-fade]:z-0 data-[twe-carousel-fade]:opacity-0 data-[twe-carousel-fade]:duration-[600ms] data-[twe-carousel-fade]:delay-600",
  slideRight: "translate-x-full",
  slideLeft: "-translate-x-full"
};
var Jo = {
  pointer: "string",
  block: "string",
  visible: "string",
  invisible: "string",
  slideRight: "string",
  slideLeft: "string"
};
var ht = "next";
var ft = "prev";
var pt = "left";
var Yt = "right";
var ta = {
  [zo]: Yt,
  [qo]: pt
};
var ea = `slide${U}`;
var We = `slid${U}`;
var ia = `keydown${U}`;
var sa = `mouseenter${U}`;
var na = `mouseleave${U}`;
var ra = `touchstart${U}`;
var oa = `touchmove${U}`;
var aa = `touchend${U}`;
var la = `pointerdown${U}`;
var ca = `pointerup${U}`;
var da = `dragstart${U}`;
var as = `load${U}${On}`;
var ls = `click${U}${On}`;
var Wt = "data-twe-carousel-active";
var ua = "data-twe-carousel-item-end";
var Be = "data-twe-carousel-item-start";
var ha = "data-twe-carousel-item-next";
var fa = "data-twe-carousel-item-prev";
var pa = "data-twe-carousel-pointer-event";
var _a = "[data-twe-carousel-init]";
var Dn = "[data-twe-carousel-active]";
var Ai = "[data-twe-carousel-item]";
var Tt = `${Dn}${Ai}`;
var ga = `${Ai} img`;
var ma = "[data-twe-carousel-item-next], [data-twe-carousel-item-prev]";
var Ea = "[data-twe-carousel-indicators]";
var va = "[data-twe-target]";
var cs = "[data-twe-slide], [data-twe-slide-to]";
var ba = "touch";
var wa = "pen";
var Z = class _Z extends tt {
  constructor(t, e, s) {
    super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._indicatorsElement = h.findOne(
      Ea,
      this._element
    ), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = !!window.PointerEvent, this._setActiveElementClass(), this._addEventListeners(), this._didInit = false, this._init(), this._config.ride === "carousel" && this.cycle();
  }
  // Getters
  static get Default() {
    return os;
  }
  static get NAME() {
    return Ve;
  }
  // Public
  next() {
    this._slide(ht);
  }
  nextWhenVisible() {
    !document.hidden && kt(this._element) && this.next();
  }
  prev() {
    this._slide(ft);
  }
  pause(t) {
    t || (this._isPaused = true), h.findOne(ma, this._element) && (Ps(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
  }
  cycle(t) {
    t || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval(
      (document.visibilityState ? this.nextWhenVisible : this.next).bind(
        this
      ),
      this._config.interval
    ));
  }
  to(t) {
    this._activeElement = h.findOne(
      Tt,
      this._element
    );
    const e = this._getItemIndex(this._activeElement);
    if (t > this._items.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      d.one(this._element, We, () => this.to(t));
      return;
    }
    if (e === t) {
      this.pause(), this.cycle();
      return;
    }
    const s = t > e ? ht : ft;
    this._slide(s, this._items[t]);
  }
  dispose() {
    d.off(
      document,
      ls,
      cs,
      _Z.dataApiClickHandler
    ), d.off(window, as), super.dispose();
  }
  // Private
  _init() {
    this._didInit || (d.on(
      document,
      ls,
      cs,
      _Z.dataApiClickHandler
    ), d.on(window, as, () => {
      const t = h.find(_a);
      for (let e = 0, s = t.length; e < s; e++)
        _Z.carouselInterface(
          t[e],
          _Z.getInstance(t[e])
        );
    }), this._didInit = true);
  }
  _getConfig(t) {
    return t = __spreadValues(__spreadValues(__spreadValues({}, os), E.getDataAttributes(this._element)), typeof t == "object" ? t : {}), R(Ve, t, Qo), t;
  }
  _getClasses(t) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, Zo), e), t), R(Ve, t, Jo), t;
  }
  _enableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        d.one(this._element, We, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  _applyInitialClasses() {
    const t = h.findOne(
      Tt,
      this._element
    );
    t.classList.add(
      this._classes.block,
      ...this._classes.visible.split(" ")
    ), this._setActiveIndicatorElement(t);
  }
  _handleSwipe() {
    const t = Math.abs(this.touchDeltaX);
    if (t <= Go)
      return;
    const e = t / this.touchDeltaX;
    this.touchDeltaX = 0, e && this._slide(e > 0 ? Yt : pt);
  }
  _setActiveElementClass() {
    this._activeElement = h.findOne(
      Tt,
      this._element
    ), E.addClass(this._activeElement, "hidden");
  }
  _addEventListeners() {
    this._config.keyboard && d.on(
      this._element,
      ia,
      (t) => this._keydown(t)
    ), this._config.pause === "hover" && (d.on(
      this._element,
      sa,
      (t) => this.pause(t)
    ), d.on(
      this._element,
      na,
      (t) => this._enableCycle(t)
    )), this._config.touch && this._touchSupported && this._addTouchEventListeners(), this._applyInitialClasses();
  }
  _addTouchEventListeners() {
    const t = (r) => this._pointerEvent && (r.pointerType === wa || r.pointerType === ba), e = (r) => {
      t(r) ? this.touchStartX = r.clientX : this._pointerEvent || (this.touchStartX = r.touches[0].clientX);
    }, s = (r) => {
      this.touchDeltaX = r.touches && r.touches.length > 1 ? 0 : r.touches[0].clientX - this.touchStartX;
    }, n = (r) => {
      t(r) && (this.touchDeltaX = r.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(
        (o) => this._enableCycle(o),
        Xo + this._config.interval
      ));
    };
    h.find(ga, this._element).forEach(
      (r) => {
        d.on(
          r,
          da,
          (o) => o.preventDefault()
        );
      }
    ), this._pointerEvent ? (d.on(
      this._element,
      la,
      (r) => e(r)
    ), d.on(this._element, ca, (r) => n(r)), this._element.classList.add(this._classes.pointer), this._element.setAttribute(`${pa}`, "")) : (d.on(this._element, ra, (r) => e(r)), d.on(this._element, oa, (r) => s(r)), d.on(this._element, aa, (r) => n(r)));
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = ta[t.key];
    e && (t.preventDefault(), this._slide(e));
  }
  _getItemIndex(t) {
    return this._items = t && t.parentNode ? h.find(Ai, t.parentNode) : [], this._items.indexOf(t);
  }
  _getItemByOrder(t, e) {
    const s = t === ht;
    return Bs(
      this._items,
      e,
      s,
      this._config.wrap
    );
  }
  _triggerSlideEvent(t, e) {
    const s = this._getItemIndex(t), n = this._getItemIndex(
      h.findOne(Tt, this._element)
    );
    return d.trigger(this._element, ea, {
      relatedTarget: t,
      direction: e,
      from: n,
      to: s
    });
  }
  _setActiveIndicatorElement(t) {
    if (this._indicatorsElement) {
      const e = h.findOne(
        Dn,
        this._indicatorsElement
      );
      e.removeAttribute(Wt), e.removeAttribute("aria-current"), e.classList.remove("!opacity-100");
      const s = h.find(
        va,
        this._indicatorsElement
      );
      for (let n = 0; n < s.length; n++)
        if (Number.parseInt(
          s[n].getAttribute("data-twe-slide-to"),
          10
        ) === this._getItemIndex(t)) {
          s[n].setAttribute(`${Wt}`, ""), s[n].setAttribute("aria-current", "true"), s[n].classList.add("!opacity-100");
          break;
        }
    }
  }
  _updateInterval() {
    const t = this._activeElement || h.findOne(Tt, this._element);
    if (!t)
      return;
    const e = Number.parseInt(
      t.getAttribute("data-twe-interval"),
      10
    );
    e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
  }
  _slide(t, e) {
    const s = this._directionToOrder(t), n = h.findOne(
      Tt,
      this._element
    ), r = this._getItemIndex(n), o = e || this._getItemByOrder(s, n), a = this._getItemIndex(o), l = !!this._interval, u = s === ht, c = u ? Be : ua, f = u ? ha : fa, v = this._orderToDirection(s), g = c === Be ? this._classes.slideLeft : this._classes.slideRight, O = c !== Be ? this._classes.slideLeft : this._classes.slideRight;
    if (o && o.hasAttribute(Wt)) {
      this._isSliding = false;
      return;
    }
    if (this._isSliding || this._triggerSlideEvent(o, v).defaultPrevented || !n || !o)
      return;
    this._isSliding = true, l && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
    const A = () => {
      d.trigger(this._element, We, {
        relatedTarget: o,
        direction: v,
        from: r,
        to: a
      });
    };
    o.setAttribute(`${f}`, ""), o.classList.add(this._classes.block, O), Xt(o), n.setAttribute(`${c}`, ""), n.classList.add(
      g,
      ...this._classes.invisible.split(" ")
    ), n.classList.remove(...this._classes.visible.split(" ")), o.setAttribute(`${c}`, ""), o.classList.add(...this._classes.visible.split(" ")), o.classList.remove(
      this._classes.slideRight,
      this._classes.slideLeft
    );
    const D = () => {
      o.removeAttribute(c), o.removeAttribute(f), o.setAttribute(`${Wt}`, ""), n.removeAttribute(Wt), n.classList.remove(
        g,
        ...this._classes.invisible.split(" "),
        this._classes.block
      ), n.removeAttribute(f), n.removeAttribute(c), this._isSliding = false, setTimeout(A, 0);
    };
    this._queueCallback(D, n, true), (l || this._config.ride === true) && this.cycle();
  }
  _directionToOrder(t) {
    return [Yt, pt].includes(t) ? M() ? t === pt ? ft : ht : t === pt ? ht : ft : t;
  }
  _orderToDirection(t) {
    return [ht, ft].includes(t) ? M() ? t === ft ? pt : Yt : t === ft ? Yt : pt : t;
  }
  // Static
  static carouselInterface(t, e) {
    const s = _Z.getOrCreateInstance(t, e);
    let { _config: n } = s;
    typeof e == "object" && (n = __spreadValues(__spreadValues({}, n), e));
    const r = typeof e == "string" ? e : e.slide;
    if (typeof e == "number") {
      s.to(e);
      return;
    }
    if (typeof r == "string") {
      if (typeof s[r] > "u")
        throw new TypeError(`No method named "${r}"`);
      s[r]();
    } else
      n.interval && n.ride === true && s.pause();
  }
  static jQueryInterface(t) {
    return this.each(function() {
      let e = _Z.getOrCreateInstance(this);
      if (typeof t == "number") {
        e.to(t);
        return;
      }
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static dataApiClickHandler(t) {
    const e = nt(this);
    if (!e)
      return;
    const s = __spreadValues(__spreadValues({}, E.getDataAttributes(e)), E.getDataAttributes(this)), n = this.getAttribute("data-twe-slide-to");
    n && (s.interval = false), _Z.carouselInterface(e, s), n && _Z.getInstance(e).to(n), t.preventDefault();
  }
};
var Ta = /* @__PURE__ */ new Set([
  "background",
  "cite",
  "href",
  "itemtype",
  "longdesc",
  "poster",
  "src",
  "xlink:href"
]);
var ya = /^aria-[\w-]*$/i;
var Aa = /^data-twe-[\w-]*$/i;
var Ca = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
var Oa = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
var Da = (i, t) => {
  const e = i.nodeName.toLowerCase();
  if (t.includes(e))
    return Ta.has(e) ? !!(Ca.test(i.nodeValue) || Oa.test(i.nodeValue)) : true;
  const s = t.filter(
    (n) => n instanceof RegExp
  );
  for (let n = 0, r = s.length; n < r; n++)
    if (s[n].test(e))
      return true;
  return false;
};
var Na = {
  // Global attributes allowed on any supplied element below.
  "*": [
    "class",
    "dir",
    "id",
    "lang",
    "role",
    ya,
    Aa
  ],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function ds(i, t, e) {
  if (!i.length)
    return i;
  if (e && typeof e == "function")
    return e(i);
  const n = new window.DOMParser().parseFromString(i, "text/html"), r = [].concat(...n.body.querySelectorAll("*"));
  for (let o = 0, a = r.length; o < a; o++) {
    const l = r[o], u = l.nodeName.toLowerCase();
    if (!Object.keys(t).includes(u)) {
      l.remove();
      continue;
    }
    const c = [].concat(...l.attributes), f = [].concat(
      t["*"] || [],
      t[u] || []
    );
    c.forEach((v) => {
      Da(v, f) || l.removeAttribute(v.nodeName);
    });
  }
  return n.body.innerHTML;
}
var us = "tooltip";
var Sa = "twe.tooltip";
var z = `.${Sa}`;
var La = "te-tooltip";
var $a = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
var Ia = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
};
var Ra = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: M() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: M() ? "right" : "left"
};
var xa = {
  animation: true,
  template: `
    <div class="opacity-0 transition-opacity duration-300 ease-in-out absolute z-[1080] block m-0 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal" role="tooltip">
      <div data-twe-tooltip-inner-ref class="max-w-[200px] text-sm py-1.5 px-4 text-white text-center bg-[#6d6d6d] rounded"></div>
    </div>
    `,
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: false,
  selector: false,
  placement: "top",
  offset: [0, 0],
  container: false,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: true,
  sanitizeFn: null,
  allowList: Na,
  popperConfig: { hide: true }
};
var ka = {
  HIDE: `hide${z}`,
  HIDDEN: `hidden${z}`,
  SHOW: `show${z}`,
  SHOWN: `shown${z}`,
  INSERTED: `inserted${z}`,
  CLICK: `click${z}`,
  FOCUSIN: `focusin${z}`,
  FOCUSOUT: `focusout${z}`,
  MOUSEENTER: `mouseenter${z}`,
  MOUSELEAVE: `mouseleave${z}`
};
var Pa = "fade";
var Ma = "modal";
var je = "show";
var Bt = "show";
var Ue = "out";
var hs = "[data-twe-tooltip-inner-ref]";
var fs = `.${Ma}`;
var ps = "hide.twe.modal";
var jt = "hover";
var Fe = "focus";
var Ha = "click";
var Va = "manual";
var Qt = class _Qt extends tt {
  constructor(t, e) {
    if (typeof bn > "u")
      throw new TypeError(
        "Bootstrap's tooltips require Popper (https://popper.js.org)"
      );
    super(t), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners();
  }
  // Getters
  static get Default() {
    return xa;
  }
  static get NAME() {
    return us;
  }
  static get Event() {
    return ka;
  }
  static get DefaultType() {
    return Ia;
  }
  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle(t) {
    if (this._isEnabled)
      if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
      } else {
        if (this.getTipElement().classList.contains(je)) {
          this._leave(null, this);
          return;
        }
        this._enter(null, this);
      }
  }
  dispose() {
    clearTimeout(this._timeout), d.off(
      this._element.closest(fs),
      ps,
      this._hideModalHandler
    ), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this.isWithContent() && this._isEnabled))
      return;
    const t = d.trigger(
      this._element,
      this.constructor.Event.SHOW
    ), e = Ms(this._element), s = e === null ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this.constructor.NAME === "tooltip" && this.tip && this.getTitle() !== this.tip.querySelector(hs).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
    const n = this.getTipElement(), r = Gn(this.constructor.NAME);
    n.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && setTimeout(() => {
      this.tip.classList.add("opacity-100"), this.tip.classList.remove("opacity-0");
    }, 100);
    const o = typeof this._config.placement == "function" ? this._config.placement.call(this, n, this._element) : this._config.placement, a = this._getAttachment(o);
    this._addAttachmentClass(a);
    const { container: l } = this._config;
    if (V.setData(n, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n), d.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Ti(
      this._element,
      n,
      this._getPopperConfig(a)
    ), n.getAttribute("id").includes("tooltip"))
      switch (o) {
        case "bottom":
          n.classList.add("py-[0.4rem]");
          break;
        case "left":
          n.classList.add("px-[0.4rem]");
          break;
        case "right":
          n.classList.add("px-[0.4rem]");
          break;
        default:
          n.classList.add("py-[0.4rem]");
          break;
      }
    const c = this._resolvePossibleFunction(this._config.customClass);
    c && n.classList.add(...c.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((g) => {
      d.on(g, "mouseover", me);
    });
    const f = () => {
      const g = this._hoverState;
      this._hoverState = null, d.trigger(this._element, this.constructor.Event.SHOWN), g === Ue && this._leave(null, this);
    }, v = this.tip.classList.contains("transition-opacity");
    this._queueCallback(f, this.tip, v);
  }
  hide() {
    if (!this._popper)
      return;
    const t = this.getTipElement(), e = () => {
      this._isWithActiveTrigger() || (this._hoverState !== Bt && t.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), d.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
    };
    if (d.trigger(
      this._element,
      this.constructor.Event.HIDE
    ).defaultPrevented)
      return;
    t.classList.add("opacity-0"), t.classList.remove("opacity-100"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((r) => d.off(r, "mouseover", me)), this._activeTrigger[Ha] = false, this._activeTrigger[Fe] = false, this._activeTrigger[jt] = false;
    const n = this.tip.classList.contains("opacity-0");
    this._queueCallback(e, this.tip, n), this._hoverState = "";
  }
  update() {
    this._popper !== null && this._popper.update();
  }
  // Protected
  isWithContent() {
    return !!this.getTitle();
  }
  getTipElement() {
    if (this.tip)
      return this.tip;
    const t = document.createElement("div");
    t.innerHTML = this._config.template;
    const e = t.children[0];
    return this.setContent(e), e.classList.remove(Pa, je), this.tip = e, this.tip;
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), hs);
  }
  _sanitizeAndSetContent(t, e, s) {
    const n = h.findOne(s, t);
    if (!e && n) {
      n.remove();
      return;
    }
    this.setElementContent(n, e);
  }
  setElementContent(t, e) {
    if (t !== null) {
      if (St(e)) {
        e = rt(e), this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.append(e)) : t.textContent = e.textContent;
        return;
      }
      this._config.html ? (this._config.sanitize && (e = ds(
        e,
        this._config.allowList,
        this._config.sanitizeFn
      )), t.innerHTML = e) : t.textContent = e;
    }
  }
  getTitle() {
    const t = this._element.getAttribute("data-twe-original-title") || this._config.title;
    return this._resolvePossibleFunction(t);
  }
  updateAttachment(t) {
    return t === "right" ? "end" : t === "left" ? "start" : t;
  }
  // Private
  _initializeOnDelegatedTarget(t, e) {
    return e || this.constructor.getOrCreateInstance(
      t.delegateTarget,
      this._getDelegateConfig()
    );
  }
  _getOffset() {
    const { offset: t } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return typeof t == "function" ? t.call(this._element) : t;
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [
        {
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        },
        {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        },
        {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        },
        {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        },
        {
          name: "onChange",
          enabled: true,
          phase: "afterWrite",
          fn: (s) => this._handlePopperPlacementChange(s)
        }
      ],
      onFirstUpdate: (s) => {
        s.options.placement !== s.placement && this._handlePopperPlacementChange(s);
      }
    };
    return __spreadValues(__spreadValues({}, e), typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig);
  }
  _addAttachmentClass(t) {
    this.getTipElement().classList.add(
      `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
    );
  }
  _getAttachment(t) {
    return Ra[t.toUpperCase()];
  }
  _setListeners() {
    this._config.trigger.split(" ").forEach((e) => {
      if (e === "click")
        d.on(
          this._element,
          this.constructor.Event.CLICK,
          this._config.selector,
          (s) => this.toggle(s)
        );
      else if (e !== Va) {
        const s = e === jt ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, n = e === jt ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
        d.on(
          this._element,
          s,
          this._config.selector,
          (r) => this._enter(r)
        ), d.on(
          this._element,
          n,
          this._config.selector,
          (r) => this._leave(r)
        );
      }
    }), this._hideModalHandler = () => {
      this._element && this.hide();
    }, d.on(
      this._element.closest(fs),
      ps,
      this._hideModalHandler
    ), this._config.selector ? this._config = __spreadProps(__spreadValues({}, this._config), {
      trigger: "manual",
      selector: ""
    }) : this._fixTitle();
  }
  _fixTitle() {
    const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute(
      "data-twe-original-title"
    );
    (t || e !== "string") && (this._element.setAttribute("data-twe-original-title", t || ""), t && !this._element.getAttribute("aria-label") && !this._element.textContent && this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
  }
  _enter(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusin" ? Fe : jt] = true), e.getTipElement().classList.contains(je) || e._hoverState === Bt) {
      e._hoverState = Bt;
      return;
    }
    if (clearTimeout(e._timeout), e._hoverState = Bt, !e._config.delay || !e._config.delay.show) {
      e.show();
      return;
    }
    e._timeout = setTimeout(() => {
      e._hoverState === Bt && e.show();
    }, e._config.delay.show);
  }
  _leave(t, e) {
    if (e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger[t.type === "focusout" ? Fe : jt] = e._element.contains(t.relatedTarget)), !e._isWithActiveTrigger()) {
      if (clearTimeout(e._timeout), e._hoverState = Ue, !e._config.delay || !e._config.delay.hide) {
        e.hide();
        return;
      }
      e._timeout = setTimeout(() => {
        e._hoverState === Ue && e.hide();
      }, e._config.delay.hide);
    }
  }
  _isWithActiveTrigger() {
    for (const t in this._activeTrigger)
      if (this._activeTrigger[t])
        return true;
    return false;
  }
  _getConfig(t) {
    const e = E.getDataAttributes(this._element);
    return Object.keys(e).forEach((s) => {
      $a.has(s) && delete e[s];
    }), t = __spreadValues(__spreadValues(__spreadValues({}, this.constructor.Default), e), typeof t == "object" && t ? t : {}), t.container = t.container === false ? document.body : rt(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), R(us, t, this.constructor.DefaultType), t.sanitize && (t.template = ds(
      t.template,
      t.allowList,
      t.sanitizeFn
    )), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const e in this._config)
      this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
    return t;
  }
  _cleanTipClass() {
    const t = this.getTipElement(), e = new RegExp(
      `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
      "g"
    ), s = t.getAttribute("class").match(e);
    s !== null && s.length > 0 && s.map((n) => n.trim()).forEach((n) => t.classList.remove(n));
  }
  _getBasicClassPrefix() {
    return La;
  }
  _handlePopperPlacementChange(t) {
    const { state: e } = t;
    e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Qt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var Wa = "popover";
var Ba = "twe.popover";
var q = `.${Ba}`;
var ja = "te-popover";
var Ua = __spreadProps(__spreadValues({}, Qt.Default), {
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: `
    <div class="opacity-0 transition-opacity duration-150 ease-in-out absolute top-0 left-0 z-[1070] block max-w-[267px] break-words bg-white bg-clip-padding border border-neutral-100 rounded-lg shadow-2 text-sm not-italic font-normal text-left no-underline underline-offset-auto normal-case leading-6 tracking-normal break-normal whitespace-normal dark:border-white/10 dark:bg-surface-dark dark:text-white data-[popper-reference-hidden]:hidden" role="tooltip">
      <h3 data-twe-popover-header-ref class="py-2 px-4 mb-0 border-b-2 border-neutral-100 rounded-t-lg font-medium empty:hidden dark:border-white/10"></h3>
      <div data-twe-popover-body-ref class="p-4 text-surface dark:text-white"></div>
    </div>
    `
});
var Fa = __spreadProps(__spreadValues({}, Qt.DefaultType), {
  content: "(string|element|function)"
});
var Ya = {
  HIDE: `hide${q}`,
  HIDDEN: `hidden${q}`,
  SHOW: `show${q}`,
  SHOWN: `shown${q}`,
  INSERTED: `inserted${q}`,
  CLICK: `click${q}`,
  FOCUSIN: `focusin${q}`,
  FOCUSOUT: `focusout${q}`,
  MOUSEENTER: `mouseenter${q}`,
  MOUSELEAVE: `mouseleave${q}`
};
var Ka = "[data-twe-popover-header-ref]";
var za = "[data-twe-popover-body-ref]";
var Nn = class _Nn extends Qt {
  // Getters
  static get Default() {
    return Ua;
  }
  static get NAME() {
    return Wa;
  }
  static get Event() {
    return Ya;
  }
  static get DefaultType() {
    return Fa;
  }
  // Overrides
  isWithContent() {
    return this.getTitle() || this._getContent();
  }
  setContent(t) {
    this._sanitizeAndSetContent(t, this.getTitle(), Ka), this._sanitizeAndSetContent(t, this._getContent(), za);
  }
  // Private
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  _getBasicClassPrefix() {
    return ja;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Nn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var Ye = "scrollspy";
var qa = "twe.scrollspy";
var Ci = `.${qa}`;
var _s = {
  offset: 10,
  method: "auto",
  target: ""
};
var Xa = {
  offset: "number",
  method: "string",
  target: "(string|element)"
};
var Ga = {
  active: "!text-primary font-semibold border-s-[0.125rem] border-solid border-primary"
};
var Qa = {
  active: "string"
};
var Ke = `activate${Ci}`;
var Za = `scroll${Ci}`;
var Kt = "data-twe-nav-link-active";
var Sn = "data-twe-collapsible-scrollspy-ref";
var Ln = "[data-twe-dropdown-item-ref]";
var Ja = "[data-twe-nav-list-ref]";
var oi = "[data-twe-nav-link-ref]";
var tl = "[data-twe-nav-item-ref]";
var $n = "[data-twe-list-group-item-ref]";
var ze = `${oi}, ${$n}, ${Ln}`;
var el = "[data-twe-dropdown-ref]";
var il = "[data-twe-dropdown-toggle-ref]";
var gs = `[${Sn}]`;
var sl = `[${Kt}]`;
var qe = "ul";
var nl = "maxOffset";
var ms = "position";
var In = class _In extends tt {
  constructor(t, e, s) {
    super(t), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e), this._classes = this._getClasses(s), this._offsets = [], this._targets = [], this._collapsibles = [], this._activeTarget = null, this._scrollHeight = 0, d.on(this._scrollElement, Za, () => this._process()), this.refresh(), this._process(), this._bindActivateEvent(), this._getCollapsibles(), this._collapsibles.length !== 0 && (this._showSubsection(), this._hideSubsection());
  }
  // Getters
  static get Default() {
    return _s;
  }
  static get NAME() {
    return Ye;
  }
  // Public
  refresh() {
    const t = this._scrollElement === this._scrollElement.window ? nl : ms, e = this._config.method === "auto" ? t : this._config.method, s = e === ms ? this._getScrollTop() : 0;
    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), h.find(
      ze,
      this._config.target
    ).map((r) => {
      const o = ci(r), a = o ? h.findOne(o) : null;
      if (a) {
        const l = a.getBoundingClientRect();
        if (l.width || l.height)
          return [
            E[e](a).top + s,
            o
          ];
      }
      return null;
    }).filter((r) => r).sort((r, o) => r[0] - o[0]).forEach((r) => {
      this._offsets.push(r[0]), this._targets.push(r[1]);
    });
  }
  dispose() {
    d.off(this._scrollElement, Ci), d.off(this._scrollElement, Ke), super.dispose();
  }
  // Private
  _getConfig(t) {
    return t = __spreadValues(__spreadValues(__spreadValues({}, _s), E.getDataAttributes(this._element)), typeof t == "object" && t ? t : {}), t.target = rt(t.target) || document.documentElement, R(Ye, t, Xa), t;
  }
  _getClasses(t) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, Ga), e), t), R(Ye, t, Qa), t;
  }
  _getScrollTop() {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }
  _getScrollHeight() {
    return this._scrollElement.scrollHeight || Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
  }
  _getOffsetHeight() {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }
  _process() {
    const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), s = this._config.offset + e - this._getOffsetHeight();
    if (this._scrollHeight !== e && this.refresh(), t >= s) {
      const n = this._targets[this._targets.length - 1];
      this._activeTarget !== n && this._activate(n);
      return;
    }
    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
      this._activeTarget = null, this._clear();
      return;
    }
    for (let n = this._offsets.length; n--; )
      this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (typeof this._offsets[n + 1] > "u" || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
  }
  _activate(t) {
    this._activeTarget = t, this._clear();
    const e = ze.split(",").map(
      (n) => `${n}[data-twe-target="${t}"],${n}[href="${t}"]`
    ), s = h.findOne(e.join(","), this._config.target);
    s.classList.add(...this._classes.active.split(" ")), s.setAttribute(Kt, ""), s.getAttribute(Ln) ? h.findOne(
      il,
      s.closest(el)
    ).classList.add(...this._classes.active.split(" ")) : h.parents(s, Ja).forEach(
      (n) => {
        h.prev(
          n,
          `${oi}, ${$n}`
        ).forEach((r) => {
          r.classList.add(...this._classes.active.split(" ")), r.setAttribute(Kt, "");
        }), h.prev(n, tl).forEach(
          (r) => {
            h.children(r, oi).forEach(
              (o) => o.classList.add(...this._classes.active.split(" "))
            );
          }
        );
      }
    ), d.trigger(this._scrollElement, Ke, {
      relatedTarget: t
    });
  }
  _clear() {
    h.find(ze, this._config.target).filter(
      (t) => t.classList.contains(...this._classes.active.split(" "))
    ).forEach((t) => {
      t.classList.remove(...this._classes.active.split(" ")), t.removeAttribute(Kt);
    });
  }
  _hide(t) {
    const e = h.findOne(
      qe,
      t.parentNode
    );
    e.style.overflow = "hidden", e.style.height = "0px";
  }
  _show(t, e) {
    t.style.height = e;
  }
  _getCollapsibles() {
    const t = h.find(
      gs
    );
    t && t.forEach((e) => {
      const s = e.parentNode, n = h.findOne(qe, s), r = n.offsetHeight || n.scrollHeight;
      this._collapsibles.push({
        element: n,
        relatedTarget: e.getAttribute("href"),
        height: `${r}px`
      });
    });
  }
  _showSubsection() {
    h.find(sl).filter((s) => s.hasAttribute(Sn)).forEach((s) => {
      const n = h.findOne(qe, s.parentNode), r = this._collapsibles.find((o) => o.relatedTarget = s.getAttribute("href")).height;
      this._show(n, r);
    });
  }
  _hideSubsection() {
    h.find(
      gs
    ).filter((e) => e.hasAttribute(Kt) === false).forEach((e) => {
      this._hide(e);
    });
  }
  _bindActivateEvent() {
    d.on(this._element, Ke, () => {
      this._showSubsection(), this._hideSubsection();
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _In.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
var Es = "tab";
var rl = "twe.tab";
var ye = `.${rl}`;
var ol = `hide${ye}`;
var al = `hidden${ye}`;
var ll = `show${ye}`;
var cl = `shown${ye}`;
var dl = "data-twe-dropdown-menu-ref";
var Ot = "data-twe-tab-active";
var ge = "data-twe-nav-active";
var ul = "[data-twe-dropdown-ref]";
var hl = "[data-twe-nav-ref]";
var vs = `[${Ot}]`;
var fl = `[${ge}]`;
var bs = ":scope > li > .active";
var pl = "[data-twe-dropdown-toggle-ref]";
var _l = ":scope > [data-twe-dropdown-menu-ref] [data-twe-dropdown-show]";
var gl = {
  show: "opacity-100",
  hide: "opacity-0"
};
var ml = {
  show: "string",
  hide: "string"
};
var Rn = class _Rn extends tt {
  constructor(t, e) {
    super(t), this._classes = this._getClasses(e);
  }
  // Getters
  static get NAME() {
    return Es;
  }
  // Public
  show() {
    if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.getAttribute(ge) === "")
      return;
    let t;
    const e = nt(this._element), s = this._element.closest(hl), n = h.findOne(
      fl,
      s
    );
    if (s) {
      const l = s.nodeName === "UL" || s.nodeName === "OL" ? bs : vs;
      t = h.find(l, s), t = t[t.length - 1];
    }
    const r = t ? d.trigger(t, ol, {
      relatedTarget: this._element
    }) : null;
    if (d.trigger(this._element, ll, {
      relatedTarget: t
    }).defaultPrevented || r !== null && r.defaultPrevented)
      return;
    this._activate(
      this._element,
      s,
      null,
      n,
      this._element
    );
    const a = () => {
      d.trigger(t, al, {
        relatedTarget: this._element
      }), d.trigger(this._element, cl, {
        relatedTarget: t
      });
    };
    e ? this._activate(
      e,
      e.parentNode,
      a,
      n,
      this._element
    ) : a();
  }
  // Private
  _getClasses(t) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, gl), e), t), R(Es, t, ml), t;
  }
  _activate(t, e, s, n, r) {
    const a = (e && (e.nodeName === "UL" || e.nodeName === "OL") ? h.find(bs, e) : h.children(e, vs))[0], l = s && a && a.hasAttribute(Ot), u = () => this._transitionComplete(
      t,
      a,
      s,
      n,
      r
    );
    a && l ? (E.removeClass(a, this._classes.show), E.addClass(a, this._classes.hide), this._queueCallback(u, t, true)) : u();
  }
  _transitionComplete(t, e, s, n, r) {
    if (e && n) {
      e.removeAttribute(Ot), n.removeAttribute(ge);
      const a = h.findOne(
        _l,
        e.parentNode
      );
      a && a.removeAttribute(Ot), e.getAttribute("role") === "tab" && e.setAttribute("aria-selected", false);
    }
    t.setAttribute(Ot, ""), r.setAttribute(ge, ""), t.getAttribute("role") === "tab" && t.setAttribute("aria-selected", true), Xt(t), t.classList.contains(this._classes.hide) && (E.removeClass(t, this._classes.hide), E.addClass(t, this._classes.show));
    let o = t.parentNode;
    if (o && o.nodeName === "LI" && (o = o.parentNode), o && o.hasAttribute(dl)) {
      const a = t.closest(ul);
      a && h.find(pl, a).forEach(
        (l) => l.setAttribute(Ot, "")
      ), t.setAttribute("aria-expanded", true);
    }
    s && s();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = _Rn.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (typeof e[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
};
(() => {
  var i = { 454: (s, n, r) => {
    r.d(n, { Z: () => l });
    var o = r(645), a = r.n(o)()(function(u) {
      return u[1];
    });
    a.push([s.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const l = a;
  }, 645: (s) => {
    s.exports = function(n) {
      var r = [];
      return r.toString = function() {
        return this.map(function(o) {
          var a = n(o);
          return o[2] ? "@media ".concat(o[2], " {").concat(a, "}") : a;
        }).join("");
      }, r.i = function(o, a, l) {
        typeof o == "string" && (o = [[null, o, ""]]);
        var u = {};
        if (l)
          for (var c = 0; c < this.length; c++) {
            var f = this[c][0];
            f != null && (u[f] = true);
          }
        for (var v = 0; v < o.length; v++) {
          var g = [].concat(o[v]);
          l && u[g[0]] || (a && (g[2] ? g[2] = "".concat(a, " and ").concat(g[2]) : g[2] = a), r.push(g));
        }
      }, r;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var s = new window.CustomEvent("test", { cancelable: true });
          if (s.preventDefault(), s.defaultPrevented !== true)
            throw new Error("Could not prevent default");
        } catch {
          var n = function(o, a) {
            var l, u;
            return (a = a || {}).bubbles = !!a.bubbles, a.cancelable = !!a.cancelable, (l = document.createEvent("CustomEvent")).initCustomEvent(o, a.bubbles, a.cancelable, a.detail), u = l.preventDefault, l.preventDefault = function() {
              u.call(this);
              try {
                Object.defineProperty(this, "defaultPrevented", { get: function() {
                  return true;
                } });
              } catch {
                this.defaultPrevented = true;
              }
            }, l;
          };
          n.prototype = window.Event.prototype, window.CustomEvent = n;
        }
    })();
  }, 379: (s, n, r) => {
    var o, a = /* @__PURE__ */ function() {
      var m = {};
      return function(p) {
        if (m[p] === void 0) {
          var _ = document.querySelector(p);
          if (window.HTMLIFrameElement && _ instanceof window.HTMLIFrameElement)
            try {
              _ = _.contentDocument.head;
            } catch {
              _ = null;
            }
          m[p] = _;
        }
        return m[p];
      };
    }(), l = [];
    function u(m) {
      for (var p = -1, _ = 0; _ < l.length; _++)
        if (l[_].identifier === m) {
          p = _;
          break;
        }
      return p;
    }
    function c(m, p) {
      for (var _ = {}, b = [], w = 0; w < m.length; w++) {
        var C = m[w], y = p.base ? C[0] + p.base : C[0], N = _[y] || 0, S = "".concat(y, " ").concat(N);
        _[y] = N + 1;
        var x = u(S), I = { css: C[1], media: C[2], sourceMap: C[3] };
        x !== -1 ? (l[x].references++, l[x].updater(I)) : l.push({ identifier: S, updater: L(I, p), references: 1 }), b.push(S);
      }
      return b;
    }
    function f(m) {
      var p = document.createElement("style"), _ = m.attributes || {};
      if (_.nonce === void 0) {
        var b = r.nc;
        b && (_.nonce = b);
      }
      if (Object.keys(_).forEach(function(C) {
        p.setAttribute(C, _[C]);
      }), typeof m.insert == "function")
        m.insert(p);
      else {
        var w = a(m.insert || "head");
        if (!w)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        w.appendChild(p);
      }
      return p;
    }
    var v, g = (v = [], function(m, p) {
      return v[m] = p, v.filter(Boolean).join(`
`);
    });
    function O(m, p, _, b) {
      var w = _ ? "" : b.media ? "@media ".concat(b.media, " {").concat(b.css, "}") : b.css;
      if (m.styleSheet)
        m.styleSheet.cssText = g(p, w);
      else {
        var C = document.createTextNode(w), y = m.childNodes;
        y[p] && m.removeChild(y[p]), y.length ? m.insertBefore(C, y[p]) : m.appendChild(C);
      }
    }
    function T(m, p, _) {
      var b = _.css, w = _.media, C = _.sourceMap;
      if (w ? m.setAttribute("media", w) : m.removeAttribute("media"), C && typeof btoa < "u" && (b += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(C)))), " */")), m.styleSheet)
        m.styleSheet.cssText = b;
      else {
        for (; m.firstChild; )
          m.removeChild(m.firstChild);
        m.appendChild(document.createTextNode(b));
      }
    }
    var A = null, D = 0;
    function L(m, p) {
      var _, b, w;
      if (p.singleton) {
        var C = D++;
        _ = A || (A = f(p)), b = O.bind(null, _, C, false), w = O.bind(null, _, C, true);
      } else
        _ = f(p), b = T.bind(null, _, p), w = function() {
          (function(y) {
            if (y.parentNode === null)
              return false;
            y.parentNode.removeChild(y);
          })(_);
        };
      return b(m), function(y) {
        if (y) {
          if (y.css === m.css && y.media === m.media && y.sourceMap === m.sourceMap)
            return;
          b(m = y);
        } else
          w();
      };
    }
    s.exports = function(m, p) {
      (p = p || {}).singleton || typeof p.singleton == "boolean" || (p.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var _ = c(m = m || [], p);
      return function(b) {
        if (b = b || [], Object.prototype.toString.call(b) === "[object Array]") {
          for (var w = 0; w < _.length; w++) {
            var C = u(_[w]);
            l[C].references--;
          }
          for (var y = c(b, p), N = 0; N < _.length; N++) {
            var S = u(_[N]);
            l[S].references === 0 && (l[S].updater(), l.splice(S, 1));
          }
          _ = y;
        }
      };
    };
  } }, t = {};
  function e(s) {
    var n = t[s];
    if (n !== void 0)
      return n.exports;
    var r = t[s] = { id: s, exports: {} };
    return i[s](r, r.exports, e), r.exports;
  }
  e.n = (s) => {
    var n = s && s.__esModule ? () => s.default : () => s;
    return e.d(n, { a: n }), n;
  }, e.d = (s, n) => {
    for (var r in n)
      e.o(n, r) && !e.o(s, r) && Object.defineProperty(s, r, { enumerable: true, get: n[r] });
  }, e.o = (s, n) => Object.prototype.hasOwnProperty.call(s, n), (() => {
    var s = e(379), n = e.n(s), r = e(454);
    function o(l) {
      if (!l.hasAttribute("autocompleted")) {
        l.setAttribute("autocompleted", "");
        var u = new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: true, detail: null });
        l.dispatchEvent(u) || (l.value = "");
      }
    }
    function a(l) {
      l.hasAttribute("autocompleted") && (l.removeAttribute("autocompleted"), l.dispatchEvent(new window.CustomEvent("onautocomplete", { bubbles: true, cancelable: false, detail: null })));
    }
    n()(r.Z, { insert: "head", singleton: false }), r.Z.locals, e(810), document.addEventListener("animationstart", function(l) {
      l.animationName === "onautofillstart" ? o(l.target) : a(l.target);
    }, true), document.addEventListener("input", function(l) {
      l.inputType !== "insertReplacementText" && "data" in l ? a(l.target) : o(l.target);
    }, true);
  })();
})();
var Xe = "input";
var oe = "twe.input";
var xn = "data-twe-input-wrapper-init";
var kn = "data-twe-input-notch-ref";
var Pn = "data-twe-input-notch-leading-ref";
var Mn = "data-twe-input-notch-middle-ref";
var El = "data-twe-input-notch-trailing-ref";
var vl = "data-twe-input-helper-ref";
var bl = "data-twe-input-placeholder-active";
var st = "data-twe-input-state-active";
var ws = "data-twe-input-focused";
var Ts = "data-twe-input-form-counter";
var ae = `[${xn}] input`;
var le = `[${xn}] textarea`;
var yt = `[${kn}]`;
var ys = `[${Pn}]`;
var As = `[${Mn}]`;
var wl = `[${vl}]`;
var Tl = {
  inputFormWhite: false
};
var yl = {
  inputFormWhite: "(boolean)"
};
var Al = {
  notch: "group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",
  notchLeading: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-e-0 rounded-s-[0.25rem] group-data-[twe-input-focused]:border-e-0 group-data-[twe-input-state-active]:border-e-0",
  notchLeadingNormal: "border-secondary-500 dark:border-neutral-400 group-data-[twe-input-focused]:shadow-notch-1 group-data-[twe-input-focused]:border-primary",
  notchLeadingWhite: "border-neutral-200 group-data-[twe-input-focused]:shadow-notch-1 group-data-[twe-input-focused]:shadow-white group-data-[twe-input-focused]:border-white",
  notchMiddle: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-e-0 border-s-0 group-data-[twe-input-focused]:border-x-0 group-data-[twe-input-state-active]:border-x-0 group-data-[twe-input-focused]:border-t group-data-[twe-input-state-active]:border-t group-data-[twe-input-focused]:border-solid group-data-[twe-input-state-active]:border-solid group-data-[twe-input-focused]:border-t-transparent group-data-[twe-input-state-active]:border-t-transparent",
  notchMiddleNormal: "border-secondary-500 dark:border-neutral-400 group-data-[twe-input-focused]:shadow-notch-2 group-data-[twe-input-focused]:border-primary",
  notchMiddleWhite: "border-neutral-200 group-data-[twe-input-focused]:shadow-notch-2 group-data-[twe-input-focused]:shadow-white group-data-[twe-input-focused]:border-white",
  notchTrailing: "pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-s-0 rounded-e-[0.25rem] group-data-[twe-input-focused]:border-s-0 group-data-[twe-input-state-active]:border-s-0",
  notchTrailingNormal: "border-secondary-500 dark:border-neutral-400 group-data-[twe-input-focused]:shadow-notch-3 group-data-[twe-input-focused]:border-primary",
  notchTrailingWhite: "border-neutral-200 group-data-[twe-input-focused]:shadow-notch-3 group-data-[twe-input-focused]:shadow-white group-data-[twe-input-focused]:border-white",
  counter: "text-right leading-[1.6]"
};
var Cl = {
  notch: "string",
  notchLeading: "string",
  notchLeadingNormal: "string",
  notchLeadingWhite: "string",
  notchMiddle: "string",
  notchMiddleNormal: "string",
  notchMiddleWhite: "string",
  notchTrailing: "string",
  notchTrailingNormal: "string",
  notchTrailingWhite: "string",
  counter: "string"
};
var $ = class _$ {
  constructor(t, e, s) {
    this._config = this._getConfig(e, t), this._element = t, this._classes = this._getClasses(s), this._label = null, this._labelWidth = 0, this._labelMarginLeft = 0, this._notchLeading = null, this._notchMiddle = null, this._notchTrailing = null, this._initiated = false, this._helper = null, this._counter = false, this._counterElement = null, this._maxLength = 0, this._leadingIcon = null, this._element && (V.setData(t, oe, this), this.init());
  }
  // Getters
  static get NAME() {
    return Xe;
  }
  get input() {
    return h.findOne("input", this._element) || h.findOne("textarea", this._element);
  }
  // Public
  init() {
    this._initiated || (this._getLabelData(), this._applyDivs(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter(), this._getEvents(), this._initiated = true);
  }
  update() {
    this._getLabelData(), this._getNotchData(), this._applyNotch(), this._activate(), this._getHelper(), this._getCounter();
  }
  forceActive() {
    this.input.setAttribute(st, ""), h.findOne(yt, this.input.parentNode).setAttribute(
      st,
      ""
    );
  }
  forceInactive() {
    this.input.removeAttribute(st), h.findOne(
      yt,
      this.input.parentNode
    ).removeAttribute(st);
  }
  dispose() {
    this._removeBorder(), V.removeData(this._element, oe), this._element = null;
  }
  // Private
  _getConfig(t, e) {
    return t = __spreadValues(__spreadValues(__spreadValues({}, Tl), E.getDataAttributes(e)), typeof t == "object" ? t : {}), R(Xe, t, yl), t;
  }
  _getClasses(t) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, Al), e), t), R(Xe, t, Cl), t;
  }
  _getLabelData() {
    this._label = h.findOne("label", this._element), this._label === null ? this._showPlaceholder() : (this._getLabelWidth(), this._getLabelPositionInInputGroup(), this._toggleDefaultDatePlaceholder());
  }
  _getHelper() {
    this._helper = h.findOne(wl, this._element);
  }
  _getCounter() {
    this._counter = E.getDataAttribute(
      this.input,
      "inputShowcounter"
    ), this._counter && (this._maxLength = this.input.maxLength, this._showCounter());
  }
  _getEvents() {
    d.on(
      this._element,
      "focus",
      "input",
      _$.activate(new _$())
    ), d.on(
      this._element,
      "input",
      "input",
      _$.activate(new _$())
    ), d.on(
      this._element,
      "blur",
      "input",
      _$.deactivate(new _$())
    ), d.on(
      this._element,
      "focus",
      "textarea",
      _$.activate(new _$())
    ), d.on(
      this._element,
      "input",
      "textarea",
      _$.activate(new _$())
    ), d.on(
      this._element,
      "blur",
      "textarea",
      _$.deactivate(new _$())
    ), d.on(window, "shown.twe.modal", (t) => {
      h.find(ae, t.target).forEach(
        (e) => {
          const s = _$.getInstance(e.parentNode);
          s && s.update();
        }
      ), h.find(le, t.target).forEach(
        (e) => {
          const s = _$.getInstance(e.parentNode);
          s && s.update();
        }
      );
    }), d.on(window, "shown.twe.dropdown", (t) => {
      const e = t.target.parentNode.querySelector(
        "[data-twe-dropdown-menu-ref]"
      );
      e && (h.find(ae, e).forEach(
        (s) => {
          const n = _$.getInstance(s.parentNode);
          n && n.update();
        }
      ), h.find(le, e).forEach(
        (s) => {
          const n = _$.getInstance(s.parentNode);
          n && n.update();
        }
      ));
    }), d.on(window, "shown.twe.tab", (t) => {
      let e;
      t.target.href ? e = t.target.href.split("#")[1] : e = E.getDataAttribute(t.target, "target").split(
        "#"
      )[1];
      const s = h.findOne(`#${e}`);
      h.find(ae, s).forEach((n) => {
        const r = _$.getInstance(n.parentNode);
        r && r.update();
      }), h.find(le, s).forEach(
        (n) => {
          const r = _$.getInstance(n.parentNode);
          r && r.update();
        }
      );
    }), d.on(window, "reset", (t) => {
      h.find(ae, t.target).forEach(
        (e) => {
          const s = _$.getInstance(e.parentNode);
          s && s.forceInactive();
        }
      ), h.find(le, t.target).forEach(
        (e) => {
          const s = _$.getInstance(e.parentNode);
          s && s.forceInactive();
        }
      );
    }), d.on(window, "onautocomplete", (t) => {
      const e = _$.getInstance(t.target.parentNode);
      !e || !t.cancelable || e.forceActive();
    });
  }
  _showCounter() {
    if (h.find(
      `[${Ts}]`,
      this._element
    ).length > 0)
      return;
    this._counterElement = document.createElement("div"), E.addClass(this._counterElement, this._classes.counter), this._counterElement.setAttribute(Ts, "");
    const e = this.input.value.length;
    this._counterElement.innerHTML = `${e} / ${this._maxLength}`, this._helper.appendChild(this._counterElement), this._bindCounter();
  }
  _bindCounter() {
    d.on(this.input, "input", () => {
      const t = this.input.value.length;
      this._counterElement.innerHTML = `${t} / ${this._maxLength}`;
    });
  }
  _toggleDefaultDatePlaceholder(t = this.input) {
    if (!(t.getAttribute("type") === "date"))
      return;
    !(document.activeElement === t) && !t.value ? t.style.opacity = 0 : t.style.opacity = 1;
  }
  _showPlaceholder() {
    this.input.setAttribute(bl, "");
  }
  _getNotchData() {
    this._notchMiddle = h.findOne(
      As,
      this._element
    ), this._notchLeading = h.findOne(
      ys,
      this._element
    );
  }
  _getLabelWidth() {
    this._labelWidth = this._label.clientWidth * 0.8 + 8;
  }
  _getLabelPositionInInputGroup() {
    if (this._labelMarginLeft = 0, !this._element.hasAttribute("data-twe-input-group-ref"))
      return;
    const t = this.input, e = h.prev(
      t,
      "[data-twe-input-group-text-ref]"
    )[0];
    e === void 0 ? this._labelMarginLeft = 0 : this._labelMarginLeft = e.offsetWidth - 1;
  }
  _applyDivs() {
    const t = this._config.inputFormWhite ? this._classes.notchLeadingWhite : this._classes.notchLeadingNormal, e = this._config.inputFormWhite ? this._classes.notchMiddleWhite : this._classes.notchMiddleNormal, s = this._config.inputFormWhite ? this._classes.notchTrailingWhite : this._classes.notchTrailingNormal, n = h.find(yt, this._element), r = Ft("div");
    E.addClass(r, this._classes.notch), r.setAttribute(kn, ""), this._notchLeading = Ft("div"), E.addClass(
      this._notchLeading,
      `${this._classes.notchLeading} ${t}`
    ), this._notchLeading.setAttribute(Pn, ""), this._notchMiddle = Ft("div"), E.addClass(
      this._notchMiddle,
      `${this._classes.notchMiddle} ${e}`
    ), this._notchMiddle.setAttribute(Mn, ""), this._notchTrailing = Ft("div"), E.addClass(
      this._notchTrailing,
      `${this._classes.notchTrailing} ${s}`
    ), this._notchTrailing.setAttribute(El, ""), !(n.length >= 1) && (r.append(this._notchLeading), r.append(this._notchMiddle), r.append(this._notchTrailing), this._element.append(r), r.dir = "ltr");
  }
  _applyNotch() {
    this._notchMiddle.style.width = `${this._labelWidth}px`, this._notchLeading.style.width = `${this._labelMarginLeft + 9}px`, this._label !== null && (this._label.style.marginLeft = `${this._labelMarginLeft}px`);
  }
  _removeBorder() {
    const t = h.findOne(yt, this._element);
    t && t.remove();
  }
  _activate(t) {
    Vs(() => {
      this._getElements(t);
      const e = t ? t.target : this.input, s = h.findOne(
        yt,
        this._element
      );
      t && t.type === "focus" && s && s.setAttribute(ws, ""), e.value !== "" && (e.setAttribute(st, ""), s && s.setAttribute(st, "")), this._toggleDefaultDatePlaceholder(e);
    });
  }
  _getElements(t) {
    if (t && (this._element = t.target.parentNode, this._label = h.findOne("label", this._element)), t && this._label) {
      const e = this._labelWidth;
      this._getLabelData(), e !== this._labelWidth && (this._notchMiddle = h.findOne(
        As,
        t.target.parentNode
      ), this._notchLeading = h.findOne(
        ys,
        t.target.parentNode
      ), this._applyNotch());
    }
  }
  _deactivate(t) {
    const e = t ? t.target : this.input;
    if (e.getAttribute("aria-expanded") === "true")
      return;
    const s = h.findOne(
      yt,
      e.parentNode
    );
    s.removeAttribute(ws), e.value === "" && (e.removeAttribute(st), s.removeAttribute(st)), this._toggleDefaultDatePlaceholder(e);
  }
  static activate(t) {
    return function(e) {
      t._activate(e);
    };
  }
  static deactivate(t) {
    return function(e) {
      t._deactivate(e);
    };
  }
  static jQueryInterface(t, e) {
    return this.each(function() {
      let s = V.getData(this, oe);
      const n = typeof t == "object" && t;
      if (!(!s && /dispose/.test(t)) && (s || (s = new _$(this, n)), typeof t == "string")) {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](e);
      }
    });
  }
  static getInstance(t) {
    return V.getData(t, oe);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Ol = {
  property: "color",
  defaultValue: null,
  inherit: true
};
var At = (i, t) => {
  const { property: e, defaultValue: s, inherit: n } = __spreadValues(__spreadValues({}, Ol), t), r = document.createElement("div");
  r.classList.add(i), document.body.appendChild(r);
  const a = window.getComputedStyle(r)[e] || s, u = window.getComputedStyle(r.parentElement)[e];
  return document.body.removeChild(r), !n && u && a === u ? s : a || s;
};
var Ge = "ripple";
var ce = "twe.ripple";
var Dl = "rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%";
var Nl = ["[data-twe-ripple-init]"];
var de = [0, 0, 0];
var Sl = [
  {
    name: "primary",
    gradientColor: At("text-primary", { defaultValue: "#3B71CA", inherit: false })
  },
  {
    name: "secondary",
    gradientColor: At("text-primary-100", { defaultValue: "#9FA6B2", inherit: false })
  },
  {
    name: "success",
    gradientColor: At("text-success", { defaultValue: "#14A44D", inherit: false })
  },
  {
    name: "danger",
    gradientColor: At("text-danger", { defaultValue: "#DC4C64", inherit: false })
  },
  {
    name: "warning",
    gradientColor: At("text-warning", { defaultValue: "#E4A11B", inherit: false })
  },
  {
    name: "info",
    gradientColor: At("text-info", { defaultValue: "#54B4D3", inherit: false })
  },
  {
    name: "light",
    gradientColor: "#fbfbfb"
  },
  {
    name: "dark",
    gradientColor: "#262626"
  }
];
var Cs = 0.5;
var Ll = {
  rippleCentered: false,
  rippleColor: "",
  rippleColorDark: "",
  rippleDuration: "500ms",
  rippleRadius: 0,
  rippleUnbound: false
};
var $l = {
  rippleCentered: "boolean",
  rippleColor: "string",
  rippleColorDark: "string",
  rippleDuration: "string",
  rippleRadius: "number",
  rippleUnbound: "boolean"
};
var Il = {
  ripple: "relative overflow-hidden inline-block align-bottom",
  rippleWave: "rounded-[50%] opacity-50 pointer-events-none absolute touch-none scale-0 transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999]",
  unbound: "overflow-visible"
};
var Rl = {
  ripple: "string",
  rippleWave: "string",
  unbound: "string"
};
var Hn = class _Hn {
  constructor(t, e, s) {
    this._element = t, this._options = this._getConfig(e), this._classes = this._getClasses(s), this._currentColor = this._options.rippleColor, this._element && (V.setData(t, ce, this), E.addClass(this._element, this._classes.ripple)), this._clickHandler = this._createRipple.bind(this), this._rippleTimer = null, this._isMinWidthSet = false, this._initialClasses = null, this.init();
  }
  // Getters
  static get NAME() {
    return Ge;
  }
  // Public
  init() {
    this._addClickEvent(this._element);
  }
  dispose() {
    V.removeData(this._element, ce), d.off(this._element, "mousedown", this._clickHandler), this._element = null, this._options = null;
  }
  // Private
  _autoInit(t) {
    Nl.forEach((e) => {
      h.closest(t.target, e) && (this._element = h.closest(t.target, e));
    }), this._element.style.minWidth || (E.style(this._element, {
      "min-width": getComputedStyle(this._element).width
    }), this._isMinWidthSet = true), this._options = this._getConfig(), this._classes = this._getClasses(), this._initialClasses = [...this._element.classList], E.addClass(this._element, this._classes.ripple), this._createRipple(t);
  }
  _addClickEvent(t) {
    d.on(t, "mousedown", this._clickHandler);
  }
  _createRipple(t) {
    this._element.className.indexOf(this._classes.ripple) < 0 && E.addClass(this._element, this._classes.ripple);
    const { layerX: e, layerY: s } = t, n = t.offsetX || e, r = t.offsetY || s, o = this._element.offsetHeight, a = this._element.offsetWidth, l = this._durationToMsNumber(this._options.rippleDuration), u = {
      offsetX: this._options.rippleCentered ? o / 2 : n,
      offsetY: this._options.rippleCentered ? a / 2 : r,
      height: o,
      width: a
    }, c = this._getDiameter(u), f = this._options.rippleRadius || c / 2, v = {
      delay: l * Cs,
      duration: l - l * Cs
    }, g = {
      left: this._options.rippleCentered ? `${a / 2 - f}px` : `${n - f}px`,
      top: this._options.rippleCentered ? `${o / 2 - f}px` : `${r - f}px`,
      height: `${this._options.rippleRadius * 2 || c}px`,
      width: `${this._options.rippleRadius * 2 || c}px`,
      transitionDelay: `0s, ${v.delay}ms`,
      transitionDuration: `${l}ms, ${v.duration}ms`
    }, O = Ft("div");
    this._createHTMLRipple({
      wrapper: this._element,
      ripple: O,
      styles: g
    }), this._removeHTMLRipple({ ripple: O, duration: l });
  }
  _createHTMLRipple({ wrapper: t, ripple: e, styles: s }) {
    Object.keys(s).forEach(
      (n) => e.style[n] = s[n]
    ), E.addClass(e, this._classes.rippleWave), e.setAttribute("data-twe-ripple-ref", ""), this._addColor(e, t), this._toggleUnbound(t), this._appendRipple(e, t);
  }
  _removeHTMLRipple({ ripple: t, duration: e }) {
    this._rippleTimer && (clearTimeout(this._rippleTimer), this._rippleTimer = null), t && setTimeout(() => {
      t.classList.add("!opacity-0");
    }, 10), this._rippleTimer = setTimeout(() => {
      if (t && (t.remove(), this._element)) {
        h.find("[data-twe-ripple-ref]", this._element).forEach(
          (n) => {
            n.remove();
          }
        ), this._isMinWidthSet && (E.style(this._element, { "min-width": "" }), this._isMinWidthSet = false);
        const s = this._initialClasses ? this._addedNewRippleClasses(
          this._classes.ripple,
          this._initialClasses
        ) : this._classes.ripple.split(" ");
        E.removeClass(this._element, s);
      }
    }, e);
  }
  _addedNewRippleClasses(t, e) {
    return t.split(" ").filter(
      (s) => e.findIndex((n) => s === n) === -1
    );
  }
  _durationToMsNumber(t) {
    return Number(t.replace("ms", "").replace("s", "000"));
  }
  _getConfig(t = {}) {
    const e = E.getDataAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, Ll), e), t), R(Ge, t, $l), t;
  }
  _getClasses(t = {}) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, Il), e), t), R(Ge, t, Rl), t;
  }
  _getDiameter({ offsetX: t, offsetY: e, height: s, width: n }) {
    const r = e <= s / 2, o = t <= n / 2, a = (v, g) => Math.sqrt(v ** 2 + g ** 2), l = e === s / 2 && t === n / 2, u = {
      first: r === true && o === false,
      second: r === true && o === true,
      third: r === false && o === true,
      fourth: r === false && o === false
    }, c = {
      topLeft: a(t, e),
      topRight: a(n - t, e),
      bottomLeft: a(t, s - e),
      bottomRight: a(n - t, s - e)
    };
    let f = 0;
    return l || u.fourth ? f = c.topLeft : u.third ? f = c.topRight : u.second ? f = c.bottomRight : u.first && (f = c.bottomLeft), f * 2;
  }
  _appendRipple(t, e) {
    e.appendChild(t), setTimeout(() => {
      E.addClass(t, "opacity-0 scale-100");
    }, 50);
  }
  _toggleUnbound(t) {
    this._options.rippleUnbound === true ? E.addClass(t, this._classes.unbound) : E.removeClass(t, this._classes.unbound);
  }
  _addColor(t) {
    let e = this._options.rippleColor || "rgb(0,0,0)";
    (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) && (e = this._options.rippleColorDark || this._options.rippleColor);
    const s = Sl.find(
      (o) => o.name === e.toLowerCase()
    ), n = s ? this._colorToRGB(s.gradientColor).join(",") : this._colorToRGB(e).join(","), r = Dl.split("{{color}}").join(`${n}`);
    t.style.backgroundImage = `radial-gradient(circle, ${r})`;
  }
  _colorToRGB(t) {
    function e(r) {
      return r.length < 7 && (r = `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`), [
        parseInt(r.substr(1, 2), 16),
        parseInt(r.substr(3, 2), 16),
        parseInt(r.substr(5, 2), 16)
      ];
    }
    function s(r) {
      const o = document.body.appendChild(
        document.createElement("fictum")
      ), a = "rgb(1, 2, 3)";
      return o.style.color = a, o.style.color !== a || (o.style.color = r, o.style.color === a || o.style.color === "") ? de : (r = getComputedStyle(o).color, document.body.removeChild(o), r);
    }
    function n(r) {
      return r = r.match(/[.\d]+/g).map((o) => +Number(o)), r.length = 3, r;
    }
    return t.toLowerCase() === "transparent" ? de : t[0] === "#" ? e(t) : (t.indexOf("rgb") === -1 && (t = s(t)), t.indexOf("rgb") === 0 ? n(t) : de);
  }
  // Static
  static autoInitial(t) {
    return function(e) {
      t._autoInit(e);
    };
  }
  static jQueryInterface(t) {
    return this.each(function() {
      return V.getData(this, ce) ? null : new _Hn(this, t);
    });
  }
  static getInstance(t) {
    return V.getData(t, ce);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
};
var Qe = "modal";
var xl = "twe.modal";
var K = `.${xl}`;
var Os = "Escape";
var Ds = {
  backdrop: true,
  keyboard: true,
  focus: true
};
var Ns = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
};
var kl = {
  show: "transform-none",
  static: "scale-[1.02]",
  staticProperties: "transition-scale duration-300 ease-in-out",
  backdrop: "opacity-50 transition-all duration-300 ease-in-out fixed top-0 left-0 z-[1040] bg-black w-screen h-screen"
};
var Pl = {
  show: "string",
  static: "string",
  staticProperties: "string",
  backdrop: "string"
};
var Ml = `hide${K}`;
var Hl = `hidePrevented${K}`;
var Vl = `hidden${K}`;
var Wl = `show${K}`;
var Bl = `shown${K}`;
var Ss = `resize${K}`;
var Ls = `click.dismiss${K}`;
var $s = `keydown.dismiss${K}`;
var jl = `mouseup.dismiss${K}`;
var Is = `mousedown.dismiss${K}`;
var Rs = "data-twe-modal-open";
var xs = "data-twe-open";
var Ut = "[data-twe-modal-dialog-ref]";
var Ul = "[data-twe-modal-body-ref]";
var ai = class _ai extends tt {
  constructor(t, e, s) {
    super(t), this._config = this._getConfig(e), this._classes = this._getClasses(s), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._scrollBar = new ri(), this._dialog = h.findOne(Ut, this._element), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._didInit = false, this._init();
  }
  // Getters
  static get NAME() {
    return Qe;
  }
  static get Default() {
    return Ds;
  }
  static get getDefaultType() {
    return Ns;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || d.trigger(this._element, Wl, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.setAttribute(Rs, "true"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), d.on(this._dialog, Is, () => {
      d.one(this._element, jl, (s) => {
        s.target === this._element && (this._ignoreBackdropClick = true);
      });
    }), this._showElement(t), this._showBackdrop());
  }
  hide() {
    if (!this._isShown || this._isTransitioning || d.trigger(this._element, Ml).defaultPrevented)
      return;
    this._isShown = false;
    const e = this._isAnimated();
    e && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.disable(), h.findOne(Ut, this._element).classList.remove(this._classes.show), d.off(this._element, Ls), d.off(this._dialog, Is), this._queueCallback(() => this._hideModal(), this._element, e), this._element.removeAttribute(xs);
  }
  dispose() {
    [window, document, this._dialog].forEach(
      (t) => d.off(t, K)
    ), this._backdrop.dispose(), this._focustrap.disable(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _init() {
    this._didInit || (Cn(_ai), this._didInit = true);
  }
  _initializeBackDrop() {
    return new yn({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value
      isAnimated: this._isAnimated(),
      backdropClasses: this._classes.backdrop
    });
  }
  _initializeFocusTrap() {
    return new An(this._element, {
      event: "keydown",
      condition: (t) => t.key === "Tab"
    });
  }
  _showElement(t) {
    const e = this._isAnimated(), s = h.findOne(Ul, this._dialog);
    (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) && document.body.append(this._element), this._element.style.display = "block", this._element.classList.remove("hidden"), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.setAttribute(`${xs}`, "true"), this._element.scrollTop = 0;
    const n = h.findOne(Ut, this._element);
    n.classList.add(this._classes.show), n.classList.remove("opacity-0"), n.classList.add("opacity-100"), s && (s.scrollTop = 0), e && Xt(this._element);
    const r = () => {
      this._config.focus && this._focustrap.trap(), this._isTransitioning = false, d.trigger(this._element, Bl, {
        relatedTarget: t
      });
    };
    this._queueCallback(r, this._dialog, e);
  }
  _setEscapeEvent() {
    this._isShown ? d.on(document, $s, (t) => {
      this._config.keyboard && t.key === Os ? (t.preventDefault(), this.hide()) : !this._config.keyboard && t.key === Os && this._triggerBackdropTransition();
    }) : d.off(this._element, $s);
  }
  _setResizeEvent() {
    this._isShown ? d.on(window, Ss, () => this._adjustDialog()) : d.off(window, Ss);
  }
  _hideModal() {
    const t = h.findOne(Ut, this._element);
    t.classList.remove(this._classes.show), t.classList.remove("opacity-100"), t.classList.add("opacity-0");
    const e = Je(t);
    setTimeout(() => {
      this._element.style.display = "none";
    }, e), this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
      document.body.removeAttribute(Rs), this._resetAdjustments(), this._scrollBar.reset(), d.trigger(this._element, Vl);
    });
  }
  _showBackdrop(t) {
    d.on(this._element, Ls, (e) => {
      if (this._ignoreBackdropClick) {
        this._ignoreBackdropClick = false;
        return;
      }
      e.target === e.currentTarget && (this._config.backdrop === true ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
    }), this._backdrop.show(t);
  }
  _isAnimated() {
    return !!h.findOne(Ut, this._element);
  }
  _triggerBackdropTransition() {
    if (d.trigger(this._element, Hl).defaultPrevented)
      return;
    const { classList: e, scrollHeight: s, style: n } = this._element, r = s > document.documentElement.clientHeight;
    if (!r && n.overflowY === "hidden" || e.contains(this._classes.static))
      return;
    r || (n.overflowY = "hidden"), e.add(...this._classes.static.split(" ")), e.add(...this._classes.staticProperties.split(" "));
    const o = Je(this._element);
    this._queueCallback(() => {
      e.remove(this._classes.static), setTimeout(() => {
        e.remove(...this._classes.staticProperties.split(" "));
      }, o), r || this._queueCallback(() => {
        n.overflowY = "";
      }, this._dialog);
    }, this._dialog), this._element.focus();
  }
  _getConfig(t) {
    return t = __spreadValues(__spreadValues(__spreadValues({}, Ds), E.getDataAttributes(this._element)), typeof t == "object" ? t : {}), R(Qe, t, Ns), t;
  }
  _getClasses(t) {
    const e = E.getDataClassAttributes(this._element);
    return t = __spreadValues(__spreadValues(__spreadValues({}, kl), e), t), R(Qe, t, Pl), t;
  }
  // ----------------------------------------------------------------------
  // the following methods are used to handle overflowing modals
  // ----------------------------------------------------------------------
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), s = e > 0;
    (!s && t && !M() || s && !t && M()) && (this._element.style.paddingLeft = `${e}px`), (s && !t && !M() || !s && t && M()) && (this._element.style.paddingRight = `${e}px`);
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const s = _ai.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] > "u")
          throw new TypeError(`No method named "${t}"`);
        s[t](e);
      }
    });
  }
};
var Fl = (i, t) => {
  d.on(
    document,
    `click.twe.${i.NAME}`,
    t,
    function(e) {
      e.preventDefault(), i.getOrCreateInstance(this).toggle();
    }
  );
};
var Yl = (i, t) => {
  d.on(
    document,
    `click.twe.${i.NAME}.data-api`,
    t,
    function(e) {
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), gt(this))
        return;
      i.getOrCreateInstance(this).show();
    }
  );
};
var Kl = (i, t) => {
  d.on(
    document,
    `click.twe.${i.NAME}.data-api`,
    t,
    function(e) {
      const s = nt(this);
      if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), gt(this))
        return;
      d.one(s, i.EVENT_HIDDEN, () => {
        kt(this) && this.focus();
      });
      const n = h.findOne(i.OPEN_SELECTOR);
      n && n !== s && i.getInstance(n).hide(), i.getOrCreateInstance(s).toggle(this);
    }
  );
};
var zl = (i, t) => {
  d.on(
    document,
    `click.twe.${i.NAME}`,
    t,
    (e) => {
      e.preventDefault();
      const s = e.target.closest(t);
      i.getOrCreateInstance(s).toggle();
    }
  );
};
var ql = (i, t) => {
  d.one(
    document,
    "mousedown",
    t,
    i.autoInitial(new i())
  );
};
var Xl = (i, t) => {
  d.on(
    document,
    `click.twe.${i.NAME}.data-api`,
    t,
    function(e) {
      (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") && e.preventDefault();
      const s = ci(this);
      h.find(s).forEach((r) => {
        i.getOrCreateInstance(r, { toggle: false }).toggle();
      });
    }
  );
};
var Gl = (i, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(s) {
    return new i(s);
  });
};
var Ql = (i, t) => {
  [].slice.call(
    document.querySelectorAll(t)
  ).map(function(s) {
    return new i(s);
  });
};
var Zl = (i, t) => {
  d.on(
    document,
    `click.twe.${i.NAME}`,
    t,
    function(e) {
      const s = nt(this);
      ["A", "AREA"].includes(this.tagName) && e.preventDefault(), d.one(s, i.EVENT_SHOW, (o) => {
        o.defaultPrevented || d.one(s, i.EVENT_HIDDEN, () => {
          kt(this) && this.focus();
        });
      });
      const n = h.findOne(
        `[${i.OPEN_SELECTOR}="true"]`
      );
      n && i.getInstance(n).hide(), i.getOrCreateInstance(s).toggle(this);
    }
  );
};
var Jl = {
  carousel: {
    name: "Carousel",
    selector: "[data-twe-carousel-init]",
    isToggler: false
  },
  input: {
    name: "Input",
    selector: "[data-twe-input-wrapper-init]",
    isToggler: false
  },
  scrollspy: {
    name: "ScrollSpy",
    selector: "[data-twe-spy='scroll']",
    isToggler: false
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-twe-toggle='button']",
    isToggler: true,
    callback: zl
  },
  collapse: {
    name: "Collapse",
    selector: "[data-twe-collapse-init]",
    isToggler: true,
    callback: Xl
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-twe-dropdown-toggle-ref]",
    isToggler: true,
    callback: Fl
  },
  ripple: {
    name: "Ripple",
    selector: "[data-twe-ripple-init]",
    isToggler: true,
    callback: ql
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-twe-offcanvas-toggle]",
    isToggler: true,
    callback: Kl
  },
  tab: {
    name: "Tab",
    selector: "[data-twe-toggle='tab'], [data-twe-toggle='pill'], [data-twe-toggle='list']",
    isToggler: true,
    callback: Yl
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-twe-toggle='tooltip']",
    isToggler: false,
    callback: Gl
  },
  popover: {
    name: "Popover",
    selector: "[data-twe-toggle='popover']",
    isToggler: true,
    callback: Ql
  },
  modal: {
    name: "Modal",
    selector: "[data-twe-toggle='modal']",
    isToggler: true,
    callback: Zl
  }
};
var tc = (i) => {
  Vs(() => {
    const t = Hs();
    if (t) {
      const e = i.NAME, s = t.fn[e];
      t.fn[e] = i.jQueryInterface, t.fn[e].Constructor = i, t.fn[e].noConflict = () => (t.fn[e] = s, i.jQueryInterface);
    }
  });
};
var ec = class {
  constructor() {
    this.inits = [];
  }
  get initialized() {
    return this.inits;
  }
  isInited(t) {
    return this.inits.includes(t);
  }
  add(t) {
    this.isInited(t) || this.inits.push(t);
  }
};
var li = new ec();
var Dt;
var ic = (i) => Dt[i.NAME] || null;
var sc = (i, t) => {
  if (!i || !t.allowReinits && li.isInited(i.NAME))
    return;
  li.add(i.NAME);
  const e = ic(i), s = (e == null ? void 0 : e.isToggler) || false;
  if (tc(i), e != null && e.advanced) {
    e == null || e.advanced(i, e == null ? void 0 : e.selector);
    return;
  }
  if (s) {
    e == null || e.callback(i, e == null ? void 0 : e.selector);
    return;
  }
  h.find(e == null ? void 0 : e.selector).forEach((n) => {
    let r = i.getInstance(n);
    r || (r = new i(n), e != null && e.onInit && r[e.onInit]());
  });
};
var nc = {
  allowReinits: false,
  checkOtherImports: false
};
var rc = class {
  constructor(t) {
    Ne(this, "init", (t2, e) => {
      t2.forEach((s) => sc(s, e));
    });
    Ne(this, "initTWE", (t2, e) => {
      const s = __spreadValues(__spreadValues({}, nc), e), n = Object.keys(Dt).map((r) => {
        if (!!document.querySelector(Dt[r].selector)) {
          const a = t2[Dt[r].name];
          return !a && !li.isInited(r) && s.checkOtherImports && console.warn(
            `Please import ${Dt[r].name} from "tw-elements" package and add it to a object parameter inside "initTWE" function`
          ), a;
        }
      });
      this.init(n, s);
    });
    Dt = t;
  }
};
var oc = new rc(Jl);
var lc = oc.initTWE;
export {
  qs as Button,
  Z as Carousel,
  pe as Collapse,
  X as Dropdown,
  $ as Input,
  ai as Modal,
  _e as Offcanvas,
  Nn as Popover,
  Hn as Ripple,
  In as ScrollSpy,
  Rn as Tab,
  Qt as Tooltip,
  lc as initTWE
};
/*! Bundled license information:

tw-elements/js/tw-elements.es.min.js:
  (*!
  * TW Elements
  * Version: FREE 2.0.0
  * 
  * Copyright: Material Design for Bootstrap
  * https://mdbootstrap.com/
  * 
  * Read the license: https://tw-elements.com/license/
  *
  *
  * Documentation: https://tw-elements.com/
  *
  * Support: https://mdbootstrap.com/support/cat/twe
  *
  * Contact: tailwind@mdbootstrap.com
  * 
  *)
*/
//# sourceMappingURL=tw-elements.js.map
