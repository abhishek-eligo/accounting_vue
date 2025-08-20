import { capitalize as Tl, reactive as pt, computed as h, watchEffect as Me, toRefs as vn, Fragment as ee, shallowRef as Y, warn as fn, getCurrentInstance as Mo, ref as H, unref as Pe, provide as we, inject as ae, defineComponent as Do, h as yt, camelize as Bl, isRef as ft, watch as q, onScopeDispose as Ie, effectScope as Qn, toRaw as Se, toRef as F, createVNode as s, onBeforeUnmount as He, onMounted as Ye, onUpdated as Oo, mergeProps as z, Text as $o, readonly as Zn, Transition as Je, resolveDynamicComponent as Lo, nextTick as he, withDirectives as ve, TransitionGroup as Jn, vShow as We, onBeforeMount as pl, resolveDirective as $e, createTextVNode as Tn, Teleport as No, cloneVNode as Fo, withModifiers as Ro, resolveComponent as Ho, render as Ml } from "vue";
import { createVuetify as Wo } from "vuetify";
const Ce = typeof window < "u", ea = Ce && "IntersectionObserver" in window;
function Dl(e, n, t) {
  const a = n.length - 1;
  if (a < 0) return e === void 0 ? t : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return t;
    e = e[n[l]];
  }
  return e == null || e[n[a]] === void 0 ? t : e[n[a]];
}
function nt(e, n) {
  if (e === n) return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length !== Object.keys(n).length ? !1 : t.every((a) => nt(e[a], n[a]));
}
function zo(e, n, t) {
  return e == null || !n || typeof n != "string" ? t : e[n] !== void 0 ? e[n] : (n = n.replace(/\[(\w+)\]/g, ".$1"), n = n.replace(/^\./, ""), Dl(e, n.split("."), t));
}
function Oe(e, n, t) {
  if (n === !0) return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean") return t;
  if (e !== Object(e)) {
    if (typeof n != "function") return t;
    const l = n(e, t);
    return typeof l > "u" ? t : l;
  }
  if (typeof n == "string") return zo(e, n, t);
  if (Array.isArray(n)) return Dl(e, n, t);
  if (typeof n != "function") return t;
  const a = n(e, t);
  return typeof a > "u" ? t : a;
}
function Mt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (t, a) => n + a);
}
function U(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Qt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function ta(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const Ba = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
function Ol(e) {
  return Object.keys(e);
}
function Cn(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function na(e, n) {
  const t = {}, a = new Set(Object.keys(e));
  for (const l of n)
    a.has(l) && (t[l] = e[l]);
  return t;
}
function Bn(e, n, t) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((o) => o instanceof RegExp ? o.test(i) : o === i) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function oe(e, n) {
  const t = {
    ...e
  };
  return n.forEach((a) => delete t[a]), t;
}
function $l(e, n) {
  const t = {};
  return n.forEach((a) => t[a] = e[a]), t;
}
const Ll = /^on[^a-z]/, aa = (e) => Ll.test(e), jo = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function Nl(e) {
  const [n, t] = Bn(e, [Ll]), a = oe(n, jo), [l, i] = Bn(t, ["class", "style", "id", /^data-/]);
  return Object.assign(l, n), Object.assign(i, a), [l, i];
}
function ge(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function et(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function pa(e) {
  const n = e.toString().trim();
  return n.includes(".") ? n.length - n.indexOf(".") - 1 : 0;
}
function Ma(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + t.repeat(Math.max(0, n - e.length));
}
function Yo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const t = [];
  let a = 0;
  for (; a < e.length; )
    t.push(e.substr(a, n)), a += n;
  return t;
}
function Go(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Array.from({
    length: Math.ceil(e.length / n)
  }, (t, a) => e.slice(a * n, a * n + n));
}
function Re() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in n) {
    const i = e[l], o = n[l];
    if (Qt(i) && Qt(o)) {
      a[l] = Re(i, o, t);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(o) && t) {
      a[l] = t(i, o);
      continue;
    }
    a[l] = o;
  }
  return a;
}
function Fl(e) {
  return e.map((n) => n.type === ee ? Fl(n.children) : n).flat();
}
function Xe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Xe.cache.has(e)) return Xe.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Xe.cache.set(e, n), n;
}
Xe.cache = /* @__PURE__ */ new Map();
function Ct(e, n) {
  if (!n || typeof n != "object") return [];
  if (Array.isArray(n))
    return n.map((t) => Ct(e, t)).flat(1);
  if (n.suspense)
    return Ct(e, n.ssContent);
  if (Array.isArray(n.children))
    return n.children.map((t) => Ct(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Ct(e, n.component.subTree).flat(1);
  }
  return [];
}
function la(e) {
  const n = pt({}), t = h(e);
  return Me(() => {
    for (const a in t.value)
      n[a] = t.value[a];
  }, {
    flush: "sync"
  }), vn(n);
}
function Zt(e, n) {
  return e.includes(n);
}
function Rl(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const be = () => [Function, Array];
function Da(e, n) {
  return n = "on" + Tl(n), !!(e[n] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Uo(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...t);
  else typeof e == "function" && e(...t);
}
function Jt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function Hl(e, n, t) {
  let a, l = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((t == null ? void 0 : t(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function en(e, n) {
  var a, l, i, o;
  const t = Jt(e);
  if (!n)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = t[0]) == null || a.focus());
  else if (n === "first")
    (l = t[0]) == null || l.focus();
  else if (n === "last")
    (i = t.at(-1)) == null || i.focus();
  else if (typeof n == "number")
    (o = t[n]) == null || o.focus();
  else {
    const r = Hl(t, n);
    r ? r.focus() : en(e, n === "next" ? "first" : "last");
  }
}
function Wl(e, n) {
  if (!(Ce && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${n})`))) return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function qo(e, n) {
  if (!Ce || e === 0)
    return n(), () => {
    };
  const t = window.setTimeout(n, e);
  return () => window.clearTimeout(t);
}
function Ko(e, n) {
  const t = e.clientX, a = e.clientY, l = n.getBoundingClientRect(), i = l.left, o = l.top, r = l.right, u = l.bottom;
  return t >= i && t <= r && a >= o && a <= u;
}
function tn() {
  const e = Y(), n = (t) => {
    e.value = t;
  };
  return Object.defineProperty(n, "value", {
    enumerable: !0,
    get: () => e.value,
    set: (t) => e.value = t
  }), Object.defineProperty(n, "el", {
    enumerable: !0,
    get: () => ta(e.value)
  }), n;
}
const zl = ["top", "bottom"], Xo = ["start", "end", "left", "right"];
function pn(e, n) {
  let [t, a] = e.split(" ");
  return a || (a = Zt(zl, t) ? "start" : Zt(Xo, t) ? "top" : "center"), {
    side: Oa(t, n),
    align: Oa(a, n)
  };
}
function Oa(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function wn(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function xn(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function $a(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function La(e) {
  return Zt(zl, e.side) ? "y" : "x";
}
class Qe {
  constructor(n) {
    let {
      x: t,
      y: a,
      width: l,
      height: i
    } = n;
    this.x = t, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function Na(e, n) {
  return {
    x: {
      before: Math.max(0, n.left - e.left),
      after: Math.max(0, e.right - n.right)
    },
    y: {
      before: Math.max(0, n.top - e.top),
      after: Math.max(0, e.bottom - n.bottom)
    }
  };
}
function jl(e) {
  return Array.isArray(e) ? new Qe({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function ia(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), a = t.transform;
  if (a) {
    let l, i, o, r, u;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], o = +l[5], r = +l[12], u = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], o = +l[3], r = +l[4], u = +l[5];
    else
      return new Qe(n);
    const c = t.transformOrigin, f = n.x - r - (1 - i) * parseFloat(c), m = n.y - u - (1 - o) * parseFloat(c.slice(c.indexOf(" ") + 1)), g = i ? n.width / i : e.offsetWidth + 1, d = o ? n.height / o : e.offsetHeight + 1;
    return new Qe({
      x: f,
      y: m,
      width: g,
      height: d
    });
  } else
    return new Qe(n);
}
function dt(e, n, t) {
  if (typeof e.animate > "u") return {
    finished: Promise.resolve()
  };
  let a;
  try {
    a = e.animate(n, t);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Ut = /* @__PURE__ */ new WeakMap();
function Qo(e, n) {
  Object.keys(n).forEach((t) => {
    if (aa(t)) {
      const a = Rl(t), l = Ut.get(e);
      if (n[t] == null)
        l == null || l.forEach((i) => {
          const [o, r] = i;
          o === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === n[t])) {
        e.addEventListener(a, n[t]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, n[t]]), Ut.has(e) || Ut.set(e, i);
      }
    } else
      n[t] == null ? e.removeAttribute(t) : e.setAttribute(t, n[t]);
  });
}
function Zo(e, n) {
  Object.keys(n).forEach((t) => {
    if (aa(t)) {
      const a = Rl(t), l = Ut.get(e);
      l == null || l.forEach((i) => {
        const [o, r] = i;
        o === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(t);
  });
}
const ct = 2.4, Fa = 0.2126729, Ra = 0.7151522, Ha = 0.072175, Jo = 0.55, er = 0.58, tr = 0.57, nr = 0.62, jt = 0.03, Wa = 1.45, ar = 5e-4, lr = 1.25, ir = 1.25, za = 0.078, ja = 12.82051282051282, Yt = 0.06, Ya = 1e-3;
function Ga(e, n) {
  const t = (e.r / 255) ** ct, a = (e.g / 255) ** ct, l = (e.b / 255) ** ct, i = (n.r / 255) ** ct, o = (n.g / 255) ** ct, r = (n.b / 255) ** ct;
  let u = t * Fa + a * Ra + l * Ha, c = i * Fa + o * Ra + r * Ha;
  if (u <= jt && (u += (jt - u) ** Wa), c <= jt && (c += (jt - c) ** Wa), Math.abs(c - u) < ar) return 0;
  let f;
  if (c > u) {
    const m = (c ** Jo - u ** er) * lr;
    f = m < Ya ? 0 : m < za ? m - m * ja * Yt : m - Yt;
  } else {
    const m = (c ** nr - u ** tr) * ir;
    f = m > -Ya ? 0 : m > -za ? m - m * ja * Yt : m + Yt;
  }
  return f * 100;
}
function Ze(e) {
  fn(`Vuetify: ${e}`);
}
function or(e) {
  fn(`Vuetify error: ${e}`);
}
function rr(e, n) {
  n = Array.isArray(n) ? n.slice(0, -1).map((t) => `'${t}'`).join(", ") + ` or '${n.at(-1)}'` : `'${n}'`, fn(`[Vuetify UPGRADE] '${e}' is deprecated, use ${n} instead.`);
}
function Mn(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ur(e) {
  return Mn(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ua = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, sr = {
  rgb: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  rgba: (e, n, t, a) => ({
    r: e,
    g: n,
    b: t,
    a
  }),
  hsl: (e, n, t, a) => qa({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsla: (e, n, t, a) => qa({
    h: e,
    s: n,
    l: t,
    a
  }),
  hsv: (e, n, t, a) => xt({
    h: e,
    s: n,
    v: t,
    a
  }),
  hsva: (e, n, t, a) => xt({
    h: e,
    s: n,
    v: t,
    a
  })
};
function wt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Ze(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Ua.test(e)) {
    const {
      groups: n
    } = e.match(Ua), {
      fn: t,
      values: a
    } = n, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return sr[t](...l);
  } else if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((a) => a + a).join("") : [6, 8].includes(n.length) || Ze(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Ze(`'${e}' is not a valid hex(a) color`), cr(n);
  } else if (typeof e == "object") {
    if (Cn(e, ["r", "g", "b"]))
      return e;
    if (Cn(e, ["h", "s", "l"]))
      return xt(Yl(e));
    if (Cn(e, ["h", "s", "v"]))
      return xt(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function xt(e) {
  const {
    h: n,
    s: t,
    v: a,
    a: l
  } = e, i = (r) => {
    const u = (r + n / 60) % 6;
    return a - a * t * Math.max(Math.min(u, 4 - u, 1), 0);
  }, o = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: o[0],
    g: o[1],
    b: o[2],
    a: l
  };
}
function qa(e) {
  return xt(Yl(e));
}
function Yl(e) {
  const {
    h: n,
    s: t,
    l: a,
    a: l
  } = e, i = a + t * Math.min(a, 1 - a), o = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: n,
    s: o,
    v: i,
    a: l
  };
}
function cr(e) {
  e = dr(e);
  let [n, t, a, l] = Yo(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: n,
    g: t,
    b: a,
    a: l
  };
}
function dr(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((n) => n + n).join("")), e.length !== 6 && (e = Ma(Ma(e, 6), 8, "F")), e;
}
function vr(e) {
  const n = Math.abs(Ga(wt(0), wt(e)));
  return Math.abs(Ga(wt(16777215), wt(e))) > Math.min(n, 50) ? "#fff" : "#000";
}
function E(e, n) {
  return (t) => Object.keys(e).reduce((a, l) => {
    const o = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return t && l in t ? a[l] = {
      ...o,
      default: t[l]
    } : a[l] = o, n && !a[l].source && (a[l].source = n), a;
  }, {});
}
const Q = E({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component");
function fe(e, n) {
  const t = Mo();
  if (!t)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return t;
}
function Le() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const n = fe(e).type;
  return Xe((n == null ? void 0 : n.aliasName) || (n == null ? void 0 : n.name));
}
let Gl = 0, qt = /* @__PURE__ */ new WeakMap();
function Ne() {
  const e = fe("getUid");
  if (qt.has(e)) return qt.get(e);
  {
    const n = Gl++;
    return qt.set(e, n), n;
  }
}
Ne.reset = () => {
  Gl = 0, qt = /* @__PURE__ */ new WeakMap();
};
function fr(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fe("injectSelf");
  const {
    provides: t
  } = n;
  if (t && e in t)
    return t[e];
}
const nn = Symbol.for("vuetify:defaults");
function oa() {
  const e = ae(nn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ze(e, n) {
  const t = oa(), a = H(e), l = h(() => {
    if (Pe(n == null ? void 0 : n.disabled)) return t.value;
    const o = Pe(n == null ? void 0 : n.scoped), r = Pe(n == null ? void 0 : n.reset), u = Pe(n == null ? void 0 : n.root);
    if (a.value == null && !(o || r || u)) return t.value;
    let c = Re(a.value, {
      prev: t.value
    });
    if (o) return c;
    if (r || u) {
      const f = Number(r || 1 / 0);
      for (let m = 0; m <= f && !(!c || !("prev" in c)); m++)
        c = c.prev;
      return c && typeof u == "string" && u in c && (c = Re(Re(c, {
        prev: c
      }), c[u])), c;
    }
    return c.prev ? Re(c.prev, c) : c;
  });
  return we(nn, l), l;
}
function mr(e, n) {
  var t, a;
  return typeof ((t = e.props) == null ? void 0 : t[n]) < "u" || typeof ((a = e.props) == null ? void 0 : a[Xe(n)]) < "u";
}
function gr() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : oa();
  const a = fe("useDefaults");
  if (n = n ?? a.type.name ?? a.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const l = h(() => {
    var u;
    return (u = t.value) == null ? void 0 : u[e._as ?? n];
  }), i = new Proxy(e, {
    get(u, c) {
      var m, g, d, y, v, b, S;
      const f = Reflect.get(u, c);
      return c === "class" || c === "style" ? [(m = l.value) == null ? void 0 : m[c], f].filter((k) => k != null) : typeof c == "string" && !mr(a.vnode, c) ? ((g = l.value) == null ? void 0 : g[c]) !== void 0 ? (d = l.value) == null ? void 0 : d[c] : ((v = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : v[c]) !== void 0 ? (S = (b = t.value) == null ? void 0 : b.global) == null ? void 0 : S[c] : f : f;
    }
  }), o = Y();
  Me(() => {
    if (l.value) {
      const u = Object.entries(l.value).filter((c) => {
        let [f] = c;
        return f.startsWith(f[0].toUpperCase());
      });
      o.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      o.value = void 0;
  });
  function r() {
    const u = fr(nn, a);
    we(nn, h(() => o.value ? Re((u == null ? void 0 : u.value) ?? {}, o.value) : u == null ? void 0 : u.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
function Dt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Ze("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = E(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(a) {
      return na(a, n);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = oa();
      if (!i.value) return e._setup(a, l);
      const {
        props: o,
        provideSubDefaults: r
      } = gr(a, a._as ?? e.name, i), u = e._setup(o, l);
      return r(), u;
    };
  }
  return e;
}
function L() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (n) => (e ? Dt : Do)(n);
}
function mn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return L()({
    name: t ?? Tl(Bl(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: n
      },
      ...Q()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var o;
        return yt(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (o = i.default) == null ? void 0 : o.call(i));
      };
    }
  });
}
function Ul(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; ) e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({
    composed: !0
  }) !== document ? null : n;
}
const an = "cubic-bezier(0.4, 0, 0.2, 1)", yr = "cubic-bezier(0.0, 0, 0.2, 1)", hr = "cubic-bezier(0.4, 0, 1, 1)";
function br(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (n ? kr(e) : ra(e)) return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Vt(e, n) {
  const t = [];
  if (n && e && !n.contains(e)) return t;
  for (; e && (ra(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function ra(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function kr(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE) return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function Sr(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function R(e) {
  const n = fe("useRender");
  n.render = e;
}
const ht = E({
  border: [Boolean, Number, String]
}, "border");
function bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    borderClasses: h(() => {
      const a = ft(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${n}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
function ua(e) {
  return la(() => {
    const n = [], t = {};
    if (e.value.background)
      if (Mn(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && ur(e.value.background)) {
          const a = wt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = vr(a);
            t.color = l, t.caretColor = l;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    return e.value.text && (Mn(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), {
      colorClasses: n,
      colorStyles: t
    };
  });
}
function De(e, n) {
  const t = h(() => ({
    text: ft(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = ua(t);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function ke(e, n) {
  const t = h(() => ({
    background: ft(e) ? e.value : n ? e[n] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = ua(t);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const at = E({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function lt(e) {
  return {
    dimensionStyles: h(() => {
      const t = {}, a = U(e.height), l = U(e.maxHeight), i = U(e.maxWidth), o = U(e.minHeight), r = U(e.minWidth), u = U(e.width);
      return a != null && (t.height = a), l != null && (t.maxHeight = l), i != null && (t.maxWidth = i), o != null && (t.minHeight = o), r != null && (t.minWidth = r), u != null && (t.width = u), t;
    })
  };
}
const it = E({
  elevation: {
    type: [Number, String],
    validator(e) {
      const n = parseInt(e);
      return !isNaN(n) && n >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      n <= 24;
    }
  }
}, "elevation");
function ot(e) {
  return {
    elevationClasses: h(() => {
      const t = ft(e) ? e.value : e.elevation, a = [];
      return t == null || a.push(`elevation-${t}`), a;
    })
  };
}
function tt(e, n) {
  let t;
  function a() {
    t = Qn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), a();
    }) : n());
  }
  q(e, (l) => {
    l && !t ? a() : l || (t == null || t.stop(), t = void 0);
  }, {
    immediate: !0
  }), Ie(() => {
    t == null || t.stop();
  });
}
function J(e, n, t) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const i = fe("useProxiedModel"), o = H(e[n] !== void 0 ? e[n] : t), r = Xe(n), c = r !== n ? h(() => {
    var m, g, d, y;
    return e[n], !!(((m = i.vnode.props) != null && m.hasOwnProperty(n) || (g = i.vnode.props) != null && g.hasOwnProperty(r)) && ((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : h(() => {
    var m, g;
    return e[n], !!((m = i.vnode.props) != null && m.hasOwnProperty(n) && ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${n}`)));
  });
  tt(() => !c.value, () => {
    q(() => e[n], (m) => {
      o.value = m;
    });
  });
  const f = h({
    get() {
      const m = e[n];
      return a(c.value ? m : o.value);
    },
    set(m) {
      const g = l(m), d = Se(c.value ? e[n] : o.value);
      d === g || a(d) === m || (o.value = g, i == null || i.emit(`update:${n}`, g));
    }
  });
  return Object.defineProperty(f, "externalValue", {
    get: () => c.value ? e[n] : o.value
  }), f;
}
const ql = Symbol.for("vuetify:locale");
function Ae() {
  const e = ae(ql);
  if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ge() {
  const e = ae(ql);
  if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Ka = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ot = E({
  location: String
}, "location");
function gn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = Ge();
  return {
    locationStyles: h(() => {
      if (!e.location) return {};
      const {
        side: i,
        align: o
      } = pn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return t ? t(c) : 0;
      }
      const u = {};
      return i !== "center" && (n ? u[Ka[i]] = `calc(100% - ${r(i)}px)` : u[i] = 0), o !== "center" ? n ? u[Ka[o]] = `calc(100% - ${r(o)}px)` : u[o] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", u.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), u;
    })
  };
}
const Cr = ["static", "relative", "fixed", "absolute", "sticky"], sa = E({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => Cr.includes(e)
    )
  }
}, "position");
function ca(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    positionClasses: h(() => e.position ? `${n}--${e.position}` : void 0)
  };
}
const Ee = E({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  },
  tile: Boolean
}, "rounded");
function Te(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    roundedClasses: h(() => {
      const a = ft(e) ? e.value : e.rounded, l = ft(e) ? e.value : e.tile, i = [];
      if (a === !0 || a === "")
        i.push(`${n}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const o of String(a).split(" "))
          i.push(`rounded-${o}`);
      else (l || a === !1) && i.push("rounded-0");
      return i;
    })
  };
}
const ce = E({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Dn = Symbol.for("vuetify:theme"), re = E({
  theme: String
}, "theme");
function me(e) {
  fe("provideTheme");
  const n = ae(Dn, null);
  if (!n) throw new Error("Could not find Vuetify theme injection");
  const t = h(() => e.theme ?? n.name.value), a = h(() => n.themes.value[t.value]), l = h(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = {
    ...n,
    name: t,
    current: a,
    themeClasses: l
  };
  return we(Dn, i), i;
}
function wr() {
  fe("useTheme");
  const e = ae(Dn, null);
  if (!e) throw new Error("Could not find Vuetify theme injection");
  return e;
}
const da = E({
  color: String,
  ...ht(),
  ...Q(),
  ...at(),
  ...it(),
  ...Ot(),
  ...sa(),
  ...Ee(),
  ...ce(),
  ...re()
}, "VSheet"), _t = L()({
  name: "VSheet",
  props: da(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = me(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = ke(F(e, "color")), {
      borderClasses: o
    } = bt(e), {
      dimensionStyles: r
    } = lt(e), {
      elevationClasses: u
    } = ot(e), {
      locationStyles: c
    } = gn(e), {
      positionClasses: f
    } = ca(e), {
      roundedClasses: m
    } = Te(e);
    return R(() => s(e.tag, {
      class: ["v-sheet", a.value, l.value, o.value, u.value, f.value, m.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, t)), {};
  }
}), xr = Symbol.for("vuetify:date-options");
function Vr(e, n) {
  const t = pt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[n.current.value] ?? n.current.value,
    formats: e.formats
  }) : e.adapter);
  return q(n.current, (a) => {
    t.locale = e.locale[a] ?? a ?? t.locale;
  }), t;
}
function Fe() {
  const e = ae(xr);
  if (!e) throw new Error("[Vuetify] Could not find injected date options");
  const n = Ae();
  return Vr(e, n);
}
function _r(e, n) {
  const t = e.toJsDate(n);
  let a = t.getFullYear(), l = new Date(a, 0, 1);
  if (t < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    t >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(t.getTime() - l.getTime()), o = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(o / 7) + 1;
}
const Pr = E({
  allDay: Boolean,
  interval: Object,
  intervalDivisions: {
    type: Number,
    required: !0
  },
  intervalDuration: {
    type: Number,
    required: !0
  },
  intervalHeight: {
    type: Number,
    required: !0
  },
  event: Object
}, "VCalendarIntervalEvent"), On = L()({
  name: "VCalendarIntervalEvent",
  props: Pr(),
  setup(e) {
    const n = Fe(), t = () => {
      var a, l, i, o;
      if (!((a = e.event) != null && a.first) && !((l = e.event) != null && l.last) || n.isEqual((i = e.event) == null ? void 0 : i.start, (o = e.interval) == null ? void 0 : o.start))
        return {
          height: "100%",
          margin: U(0)
        };
      {
        const {
          height: r,
          margin: u
        } = Array.from({
          length: e.intervalDivisions
        }, (c) => c * (e.intervalDuration / e.intervalDivisions)).reduce((c, f, m) => {
          var g, d;
          return n.isBefore(n.addMinutes((g = e.interval) == null ? void 0 : g.start, f), (d = e.event) == null ? void 0 : d.start) ? {
            height: U(e.intervalHeight / e.intervalDivisions * m),
            margin: U(e.intervalHeight / e.intervalDivisions * m)
          } : {
            height: c.height,
            margin: c.margin
          };
        }, {
          height: "",
          margin: ""
        });
        return {
          height: r,
          margin: u
        };
      }
    };
    return R(() => {
      var a, l, i, o, r;
      return s(_t, {
        height: t().height,
        density: "comfortable",
        style: `margin-top: ${t().margin}`,
        class: "v-calendar-internal-event",
        color: ((a = e.event) == null ? void 0 : a.color) ?? void 0,
        rounded: (l = e.event) != null && l.first && ((i = e.event) != null && i.last) ? !0 : (o = e.event) != null && o.first ? "t" : (r = e.event) != null && r.last ? "b" : !1
      }, {
        default: () => {
          var u, c;
          return [(u = e.event) != null && u.first ? (c = e.event) == null ? void 0 : c.title : ""];
        }
      });
    }), {};
  }
}), Kl = E({
  day: {
    type: Object,
    default: () => ({})
  },
  dayIndex: Number,
  events: Array,
  intervalDivisions: {
    type: Number,
    default: 2
  },
  intervalDuration: {
    type: Number,
    default: 60
  },
  intervalHeight: {
    type: Number,
    default: 48
  },
  intervalFormat: {
    type: [String, Function],
    default: "fullTime12h"
  },
  intervalStart: {
    type: Number,
    default: 0
  }
}, "VCalendarInterval"), $n = L()({
  name: "VCalendarInterval",
  props: {
    index: {
      type: Number,
      required: !0
    },
    ...Kl()
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fe(), i = h(() => {
      const o = l.addMinutes(l.startOfDay(e.day.date), e.intervalDuration * (e.index + e.intervalStart)), r = l.addMinutes(l.startOfDay(e.day.date), e.intervalDuration * (e.index + e.intervalStart + 1) - 1);
      return {
        ...e.day,
        label: l.format(o, "fullTime24h"),
        start: o,
        end: r,
        events: e.events ? e.events.filter((u) => !u.allDay && (l.isEqual(o, u.start) || l.isWithinRange(u.start, [o, r]) || l.isWithinRange(o, [u.start, u.end]) || l.isEqual(r, u.end))).map((u) => ({
          ...u,
          first: l.isEqual(o, u.start) || l.isWithinRange(u.start, [o, r]),
          last: l.isEqual(r, u.end) || l.isWithinRange(u.end, [o, r])
        })) : []
      };
    });
    return R(() => {
      var o, r;
      return e.dayIndex === 0 ? s("div", {
        class: "v-calendar-day__row-with-label",
        style: `height: ${U(e.intervalHeight)}`
      }, [s("div", {
        class: "v-calendar-day__row-label"
      }, [s("slot", {
        name: "intervalFormat",
        interval: i.value
      }, [e.index ? e.intervalFormat ? typeof e.intervalFormat == "string" ? l.format(i.value.start, "hours12h") : e.intervalFormat(i.value) : i.value.label : ""])]), s("div", {
        class: "v-calendar-day__row-hairline"
      }, null), s("div", {
        class: ["v-calendar-day__row-content", i.value.events.some((u) => !u.last) ? "v-calendar-day__row-content-through" : ""]
      }, [s("slot", {
        name: "intervalBody",
        interval: i.value
      }, [(o = i.value.events) == null ? void 0 : o.map((u) => s(On, {
        event: u,
        interval: i.value,
        intervalDivisions: e.intervalDivisions,
        intervalDuration: e.intervalDuration,
        intervalHeight: e.intervalHeight
      }, null))])])]) : s("div", {
        class: "v-calendar-day__row-without-label",
        style: `height: ${U(e.intervalHeight)}`
      }, [s("div", {
        class: ["v-calendar-day__row-content", i.value.events.some((u) => !u.last) ? "v-calendar-day__row-content-through" : ""]
      }, [s("slot", {
        name: "intervalBody",
        interval: i.value
      }, [(r = i.value.events) == null ? void 0 : r.filter((u) => !u.allDay).map((u) => s(On, {
        event: u,
        interval: i.value,
        intervalDivisions: e.intervalDivisions,
        intervalDuration: e.intervalDuration,
        intervalHeight: e.intervalHeight
      }, null))])])]);
    }), {
      interval: i
    };
  }
}), Ir = [null, "default", "comfortable", "compact"], Ue = E({
  density: {
    type: String,
    default: "default",
    validator: (e) => Ir.includes(e)
  }
}, "density");
function je(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    densityClasses: h(() => `${n}--density-${e.density}`)
  };
}
const Ar = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function rt(e, n) {
  return s(ee, null, [e && s("span", {
    key: "overlay",
    class: `${n}__overlay`
  }, null), s("span", {
    key: "underlay",
    class: `${n}__underlay`
  }, null)]);
}
const qe = E({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => Ar.includes(e)
  }
}, "variant");
function $t(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = h(() => {
    const {
      variant: i
    } = Pe(e);
    return `${n}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = ua(h(() => {
    const {
      variant: i,
      color: o
    } = Pe(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: o
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: t
  };
}
const Xl = E({
  baseColor: String,
  divided: Boolean,
  ...ht(),
  ...Q(),
  ...Ue(),
  ...it(),
  ...Ee(),
  ...ce(),
  ...re(),
  ...qe()
}, "VBtnGroup"), Xa = L()({
  name: "VBtnGroup",
  props: Xl(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = me(e), {
      densityClasses: l
    } = je(e), {
      borderClasses: i
    } = bt(e), {
      elevationClasses: o
    } = ot(e), {
      roundedClasses: r
    } = Te(e);
    ze({
      VBtn: {
        height: "auto",
        baseColor: F(e, "baseColor"),
        color: F(e, "color"),
        density: F(e, "density"),
        flat: !0,
        variant: F(e, "variant")
      }
    }), R(() => s(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, o.value, r.value, e.class],
      style: e.style
    }, t));
  }
}), Lt = E({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Nt = E({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Ft(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = fe("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = Ne();
  we(Symbol.for(`${n.description}:id`), l);
  const i = ae(n, null);
  if (!i) {
    if (!t) return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const o = F(e, "value"), r = h(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: o,
    disabled: r
  }, a), He(() => {
    i.unregister(l);
  });
  const u = h(() => i.isSelected(l)), c = h(() => i.items.value[0].id === l), f = h(() => i.items.value[i.items.value.length - 1].id === l), m = h(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return q(u, (g) => {
    a.emit("group:selected", {
      value: g
    });
  }, {
    flush: "sync"
  }), {
    id: l,
    isSelected: u,
    isFirst: c,
    isLast: f,
    toggle: () => i.select(l, !u.value),
    select: (g) => i.select(l, g),
    selectedClass: m,
    value: o,
    disabled: r,
    group: i
  };
}
function kt(e, n) {
  let t = !1;
  const a = pt([]), l = J(e, "modelValue", [], (g) => g == null ? [] : Ql(a, ge(g)), (g) => {
    const d = Tr(a, g);
    return e.multiple ? d : d[0];
  }), i = fe("useGroup");
  function o(g, d) {
    const y = g, v = Symbol.for(`${n.description}:id`), S = Ct(v, i == null ? void 0 : i.vnode).indexOf(d);
    Pe(y.value) == null && (y.value = S, y.useIndexAsValue = !0), S > -1 ? a.splice(S, 0, y) : a.push(y);
  }
  function r(g) {
    if (t) return;
    u();
    const d = a.findIndex((y) => y.id === g);
    a.splice(d, 1);
  }
  function u() {
    const g = a.find((d) => !d.disabled);
    g && e.mandatory === "force" && !l.value.length && (l.value = [g.id]);
  }
  Ye(() => {
    u();
  }), He(() => {
    t = !0;
  }), Oo(() => {
    for (let g = 0; g < a.length; g++)
      a[g].useIndexAsValue && (a[g].value = g);
  });
  function c(g, d) {
    const y = a.find((v) => v.id === g);
    if (!(d && (y != null && y.disabled)))
      if (e.multiple) {
        const v = l.value.slice(), b = v.findIndex((k) => k === g), S = ~b;
        if (d = d ?? !S, S && e.mandatory && v.length <= 1 || !S && e.max != null && v.length + 1 > e.max) return;
        b < 0 && d ? v.push(g) : b >= 0 && !d && v.splice(b, 1), l.value = v;
      } else {
        const v = l.value.includes(g);
        if (e.mandatory && v) return;
        l.value = d ?? !v ? [g] : [];
      }
  }
  function f(g) {
    if (e.multiple && Ze('This method is not supported when using "multiple" prop'), l.value.length) {
      const d = l.value[0], y = a.findIndex((S) => S.id === d);
      let v = (y + g) % a.length, b = a[v];
      for (; b.disabled && v !== y; )
        v = (v + g) % a.length, b = a[v];
      if (b.disabled) return;
      l.value = [a[v].id];
    } else {
      const d = a.find((y) => !y.disabled);
      d && (l.value = [d.id]);
    }
  }
  const m = {
    register: o,
    unregister: r,
    selected: l,
    select: c,
    disabled: F(e, "disabled"),
    prev: () => f(a.length - 1),
    next: () => f(1),
    isSelected: (g) => l.value.includes(g),
    selectedClass: h(() => e.selectedClass),
    items: h(() => a),
    getItemIndex: (g) => Er(a, g)
  };
  return we(n, m), m;
}
function Er(e, n) {
  const t = Ql(e, [n]);
  return t.length ? e.findIndex((a) => a.id === t[0]) : -1;
}
function Ql(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.find((o) => nt(a, o.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? t.push(l.id) : i != null && t.push(i.id);
  }), t;
}
function Tr(e, n) {
  const t = [];
  return n.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      t.push(i.value != null ? i.value : l);
    }
  }), t;
}
const Zl = Symbol.for("vuetify:v-btn-toggle"), Br = E({
  ...Xl(),
  ...Lt()
}, "VBtnToggle");
L()({
  name: "VBtnToggle",
  props: Br(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: o,
      selected: r
    } = kt(e, Zl);
    return R(() => {
      const u = Xa.filterProps(e);
      return s(Xa, z({
        class: ["v-btn-toggle", e.class]
      }, u, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = t.default) == null ? void 0 : c.call(t, {
            isSelected: a,
            next: l,
            prev: i,
            select: o,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: o
    };
  }
});
const pr = E({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), ne = L(!1)({
  name: "VDefaultsProvider",
  props: pr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: o,
      scoped: r
    } = vn(e);
    return ze(a, {
      reset: i,
      root: o,
      scoped: r,
      disabled: l
    }), () => {
      var u;
      return (u = t.default) == null ? void 0 : u.call(t);
    };
  }
}), Mr = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  eyeDropper: "mdi-eyedropper"
}, Dr = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => yt(Lr, {
    ...e,
    class: "mdi"
  })
}, Z = [String, Function, Object, Array], Or = Symbol.for("vuetify:icons"), yn = E({
  icon: {
    type: Z
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Qa = L()({
  name: "VComponentIcon",
  props: yn(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return () => {
      const a = e.icon;
      return s(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? s(a, null, null) : (l = t.default) == null ? void 0 : l.call(t)];
        }
      });
    };
  }
}), $r = Dt({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: yn(),
  setup(e, n) {
    let {
      attrs: t
    } = n;
    return () => s(e.tag, z(t, {
      style: null
    }), {
      default: () => [s("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? s("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : s("path", {
        d: a
      }, null)) : s("path", {
        d: e.icon
      }, null)])]
    });
  }
});
Dt({
  name: "VLigatureIcon",
  props: yn(),
  setup(e) {
    return () => s(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Lr = Dt({
  name: "VClassIcon",
  props: yn(),
  setup(e) {
    return () => s(e.tag, {
      class: e.icon
    }, null);
  }
}), Nr = (e) => {
  const n = ae(Or);
  if (!n) throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var u;
      const a = Pe(e);
      if (!a) return {
        component: Qa
      };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (u = n.aliases) == null ? void 0 : u[l.slice(1)])), l || Ze(`Could not find aliased icon "${a}"`), Array.isArray(l))
        return {
          component: $r,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Qa,
          icon: l
        };
      const i = Object.keys(n.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), o = i ? l.slice(i.length + 1) : l;
      return {
        component: n.sets[i ?? n.defaultSet].component,
        icon: o
      };
    })
  };
}, Fr = ["x-small", "small", "default", "large", "x-large"], Rt = E({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function Ht(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return la(() => {
    let t, a;
    return Zt(Fr, e.size) ? t = `${n}--size-${e.size}` : e.size && (a = {
      width: U(e.size),
      height: U(e.size)
    }), {
      sizeClasses: t,
      sizeStyles: a
    };
  });
}
const Rr = E({
  color: String,
  disabled: Boolean,
  start: Boolean,
  end: Boolean,
  icon: Z,
  ...Q(),
  ...Rt(),
  ...ce({
    tag: "i"
  }),
  ...re()
}, "VIcon"), de = L()({
  name: "VIcon",
  props: Rr(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const l = H(), {
      themeClasses: i
    } = me(e), {
      iconData: o
    } = Nr(h(() => l.value || e.icon)), {
      sizeClasses: r
    } = Ht(e), {
      textColorClasses: u,
      textColorStyles: c
    } = De(F(e, "color"));
    return R(() => {
      var g, d;
      const f = (g = a.default) == null ? void 0 : g.call(a);
      f && (l.value = (d = Fl(f).filter((y) => y.type === $o && y.children && typeof y.children == "string")[0]) == null ? void 0 : d.children);
      const m = !!(t.onClick || t.onClickOnce);
      return s(o.value.component, {
        tag: e.tag,
        icon: o.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, u.value, {
          "v-icon--clickable": m,
          "v-icon--disabled": e.disabled,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: U(e.size),
          height: U(e.size),
          width: U(e.size)
        }, c.value, e.style],
        role: m ? "button" : void 0,
        "aria-hidden": !m,
        tabindex: m ? e.disabled ? -1 : 0 : void 0
      }, {
        default: () => [f]
      });
    }), {};
  }
});
function Jl(e, n) {
  const t = H(), a = Y(!1);
  if (ea) {
    const l = new IntersectionObserver((i) => {
      a.value = !!i.find((o) => o.isIntersecting);
    }, n);
    He(() => {
      l.disconnect();
    }), q(t, (i, o) => {
      o && (l.unobserve(o), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: t,
    isIntersecting: a
  };
}
function Ln(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = tn(), a = H();
  if (Ce) {
    const l = new ResizeObserver((i) => {
      i.length && (n === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    He(() => {
      l.disconnect();
    }), q(() => t.el, (i, o) => {
      o && (l.unobserve(o), a.value = void 0), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: t,
    contentRect: Zn(a)
  };
}
const Hr = E({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...Q(),
  ...Rt(),
  ...ce({
    tag: "div"
  }),
  ...re()
}, "VProgressCircular"), ln = L()({
  name: "VProgressCircular",
  props: Hr(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = 20, l = 2 * Math.PI * a, i = H(), {
      themeClasses: o
    } = me(e), {
      sizeClasses: r,
      sizeStyles: u
    } = Ht(e), {
      textColorClasses: c,
      textColorStyles: f
    } = De(F(e, "color")), {
      textColorClasses: m,
      textColorStyles: g
    } = De(F(e, "bgColor")), {
      intersectionRef: d,
      isIntersecting: y
    } = Jl(), {
      resizeRef: v,
      contentRect: b
    } = Ln(), S = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), k = h(() => Number(e.width)), w = h(() => u.value ? Number(e.size) : b.value ? b.value.width : Math.max(k.value, 32)), V = h(() => a / (1 - k.value / w.value) * 2), P = h(() => k.value / w.value * V.value), _ = h(() => U((100 - S.value) / 100 * l));
    return Me(() => {
      d.value = i.value, v.value = i.value;
    }), R(() => s(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, o.value, r.value, c.value, e.class],
      style: [u.value, f.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : S.value
    }, {
      default: () => [s("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${V.value} ${V.value}`
      }, [s("circle", {
        class: ["v-progress-circular__underlay", m.value],
        style: g.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), s("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": _.value
      }, null)]), t.default && s("div", {
        class: "v-progress-circular__content"
      }, [t.default({
        value: S.value
      })])]
    })), {};
  }
}), Wr = E({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  bufferColor: String,
  bufferOpacity: [Number, String],
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  opacity: [Number, String],
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...Q(),
  ...Ot({
    location: "top"
  }),
  ...Ee(),
  ...ce(),
  ...re()
}, "VProgressLinear"), ei = L()({
  name: "VProgressLinear",
  props: Wr(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    var O;
    let {
      slots: t
    } = n;
    const a = J(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = Ge(), {
      themeClasses: o
    } = me(e), {
      locationStyles: r
    } = gn(e), {
      textColorClasses: u,
      textColorStyles: c
    } = De(e, "color"), {
      backgroundColorClasses: f,
      backgroundColorStyles: m
    } = ke(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: g,
      backgroundColorStyles: d
    } = ke(h(() => e.bufferColor || e.bgColor || e.color)), {
      backgroundColorClasses: y,
      backgroundColorStyles: v
    } = ke(e, "color"), {
      roundedClasses: b
    } = Te(e), {
      intersectionRef: S,
      isIntersecting: k
    } = Jl(), w = h(() => parseFloat(e.max)), V = h(() => parseFloat(e.height)), P = h(() => et(parseFloat(e.bufferValue) / w.value * 100, 0, 100)), _ = h(() => et(parseFloat(a.value) / w.value * 100, 0, 100)), x = h(() => l.value !== e.reverse), $ = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), I = Ce && ((O = window.matchMedia) == null ? void 0 : O.call(window, "(forced-colors: active)").matches);
    function D(C) {
      if (!S.value) return;
      const {
        left: T,
        right: B,
        width: M
      } = S.value.getBoundingClientRect(), W = x.value ? M - C.clientX + (B - M) : C.clientX - T;
      a.value = Math.round(W / M * w.value);
    }
    return R(() => s(e.tag, {
      ref: S,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && k.value,
        "v-progress-linear--reverse": x.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, b.value, o.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? U(V.value) : 0,
        "--v-progress-linear-height": U(V.value),
        ...e.absolute ? r.value : {}
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : _.value,
      onClick: e.clickable && D
    }, {
      default: () => [e.stream && s("div", {
        key: "stream",
        class: ["v-progress-linear__stream", u.value],
        style: {
          ...c.value,
          [x.value ? "left" : "right"]: U(-V.value),
          borderTop: `${U(V.value / 2)} dotted`,
          opacity: parseFloat(e.bufferOpacity),
          top: `calc(50% - ${U(V.value / 4)})`,
          width: U(100 - P.value, "%"),
          "--v-progress-linear-stream-to": U(V.value * (x.value ? 1 : -1))
        }
      }, null), s("div", {
        class: ["v-progress-linear__background", I ? void 0 : f.value],
        style: [m.value, {
          opacity: parseFloat(e.bgOpacity),
          width: e.stream ? 0 : void 0
        }]
      }, null), s("div", {
        class: ["v-progress-linear__buffer", I ? void 0 : g.value],
        style: [d.value, {
          opacity: parseFloat(e.bufferOpacity),
          width: U(P.value, "%")
        }]
      }, null), s(Je, {
        name: $.value
      }, {
        default: () => [e.indeterminate ? s("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((C) => s("div", {
          key: C,
          class: ["v-progress-linear__indeterminate", C, I ? void 0 : y.value],
          style: v.value
        }, null))]) : s("div", {
          class: ["v-progress-linear__determinate", I ? void 0 : y.value],
          style: [v.value, {
            width: U(_.value, "%")
          }]
        }, null)]
      }), t.default && s("div", {
        class: "v-progress-linear__content"
      }, [t.default({
        value: _.value,
        buffer: P.value
      })])]
    })), {};
  }
}), ti = E({
  loading: [Boolean, String]
}, "loader");
function ni(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  return {
    loaderClasses: h(() => ({
      [`${n}--loading`]: e.loading
    }))
  };
}
function zr(e, n) {
  var a;
  let {
    slots: t
  } = n;
  return s("div", {
    class: `${e.name}__loader`
  }, [((a = t.default) == null ? void 0 : a.call(t, {
    color: e.color,
    isActive: e.active
  })) || s(ei, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
function jr() {
  const e = fe("useRoute");
  return h(() => {
    var n;
    return (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$route;
  });
}
function Yr() {
  var e, n;
  return (n = (e = fe("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : n.$router;
}
function hn(e, n) {
  var c, f;
  const t = Lo("RouterLink"), a = h(() => !!(e.href || e.to)), l = h(() => (a == null ? void 0 : a.value) || Da(n, "click") || Da(e, "click"));
  if (typeof t == "string" || !("useLink" in t))
    return {
      isLink: a,
      isClickable: l,
      href: F(e, "href")
    };
  const i = h(() => ({
    ...e,
    to: F(() => e.to || "")
  })), o = t.useLink(i.value), r = h(() => e.to ? o : void 0), u = jr();
  return {
    isLink: a,
    isClickable: l,
    route: (c = r.value) == null ? void 0 : c.route,
    navigate: (f = r.value) == null ? void 0 : f.navigate,
    isActive: h(() => {
      var m, g, d;
      return r.value ? e.exact ? u.value ? ((d = r.value.isExactActive) == null ? void 0 : d.value) && nt(r.value.route.value.query, u.value.query) : ((g = r.value.isExactActive) == null ? void 0 : g.value) ?? !1 : ((m = r.value.isActive) == null ? void 0 : m.value) ?? !1 : !1;
    }),
    href: h(() => {
      var m;
      return e.to ? (m = r.value) == null ? void 0 : m.route.value.href : e.href;
    })
  };
}
const va = E({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Vn = !1;
function Gr(e, n) {
  let t = !1, a, l;
  Ce && (he(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((o, r, u) => {
      Vn ? t ? n(u) : u() : setTimeout(() => t ? n(u) : u()), Vn = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Vn = !1;
    });
  }), Ie(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(o) {
    var r;
    (r = o.state) != null && r.replaced || (t = !0, setTimeout(() => t = !1));
  }
}
function Ur(e, n) {
  q(() => {
    var t;
    return (t = e.isActive) == null ? void 0 : t.value;
  }, (t) => {
    e.isLink.value && t && n && he(() => {
      n(!0);
    });
  }, {
    immediate: !0
  });
}
const Nn = Symbol("rippleStop"), qr = 80;
function Za(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Fn(e) {
  return e.constructor.name === "TouchEvent";
}
function ai(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Kr = function(e, n) {
  var m;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!ai(e)) {
    const g = n.getBoundingClientRect(), d = Fn(e) ? e.touches[e.touches.length - 1] : e;
    a = d.clientX - g.left, l = d.clientY - g.top;
  }
  let i = 0, o = 0.3;
  (m = n._ripple) != null && m.circle ? (o = 0.15, i = n.clientWidth / 2, i = t.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(n.clientWidth ** 2 + n.clientHeight ** 2) / 2;
  const r = `${(n.clientWidth - i * 2) / 2}px`, u = `${(n.clientHeight - i * 2) / 2}px`, c = t.center ? r : `${a - i}px`, f = t.center ? u : `${l - i}px`;
  return {
    radius: i,
    scale: o,
    x: c,
    y: f,
    centerX: r,
    centerY: u
  };
}, on = {
  /* eslint-disable max-statements */
  show(e, n) {
    var d;
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((d = n == null ? void 0 : n._ripple) != null && d.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", t.class && (a.className += ` ${t.class}`);
    const {
      radius: i,
      scale: o,
      x: r,
      y: u,
      centerX: c,
      centerY: f
    } = Kr(e, n, t), m = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = m, l.style.height = m, n.appendChild(a);
    const g = window.getComputedStyle(n);
    g && g.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Za(l, `translate(${r}, ${u}) scale3d(${o},${o},${o})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Za(l, `translate(${c}, ${f}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled)) return;
    const n = e.getElementsByClassName("v-ripple__animation");
    if (n.length === 0) return;
    const t = n[n.length - 1];
    if (t.dataset.isHiding) return;
    t.dataset.isHiding = "true";
    const a = performance.now() - Number(t.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
      }, 300);
    }, l);
  }
};
function li(e) {
  return typeof e > "u" || !!e;
}
function Pt(e) {
  const n = {}, t = e.currentTarget;
  if (!(!(t != null && t._ripple) || t._ripple.touched || e[Nn])) {
    if (e[Nn] = !0, Fn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch) return;
    if (n.center = t._ripple.centered || ai(e), t._ripple.class && (n.class = t._ripple.class), Fn(e)) {
      if (t._ripple.showTimerCommit) return;
      t._ripple.showTimerCommit = () => {
        on.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = t == null ? void 0 : t._ripple) != null && a.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, qr);
    } else
      on.show(e, t, n);
  }
}
function Ja(e) {
  e[Nn] = !0;
}
function _e(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit) {
      n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, n._ripple.showTimer = window.setTimeout(() => {
        _e(e);
      });
      return;
    }
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), on.hide(n);
  }
}
function ii(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let It = !1;
function oi(e) {
  !It && (e.keyCode === Ba.enter || e.keyCode === Ba.space) && (It = !0, Pt(e));
}
function ri(e) {
  It = !1, _e(e);
}
function ui(e) {
  It && (It = !1, _e(e));
}
function si(e, n, t) {
  const {
    value: a,
    modifiers: l
  } = n, i = li(a);
  if (i || on.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Qt(a) && a.class && (e._ripple.class = a.class), i && !t) {
    if (l.stop) {
      e.addEventListener("touchstart", Ja, {
        passive: !0
      }), e.addEventListener("mousedown", Ja);
      return;
    }
    e.addEventListener("touchstart", Pt, {
      passive: !0
    }), e.addEventListener("touchend", _e, {
      passive: !0
    }), e.addEventListener("touchmove", ii, {
      passive: !0
    }), e.addEventListener("touchcancel", _e), e.addEventListener("mousedown", Pt), e.addEventListener("mouseup", _e), e.addEventListener("mouseleave", _e), e.addEventListener("keydown", oi), e.addEventListener("keyup", ri), e.addEventListener("blur", ui), e.addEventListener("dragstart", _e, {
      passive: !0
    });
  } else !i && t && ci(e);
}
function ci(e) {
  e.removeEventListener("mousedown", Pt), e.removeEventListener("touchstart", Pt), e.removeEventListener("touchend", _e), e.removeEventListener("touchmove", ii), e.removeEventListener("touchcancel", _e), e.removeEventListener("mouseup", _e), e.removeEventListener("mouseleave", _e), e.removeEventListener("keydown", oi), e.removeEventListener("keyup", ri), e.removeEventListener("dragstart", _e), e.removeEventListener("blur", ui);
}
function Xr(e, n) {
  si(e, n, !1);
}
function Qr(e) {
  delete e._ripple, ci(e);
}
function Zr(e, n) {
  if (n.value === n.oldValue)
    return;
  const t = li(n.oldValue);
  si(e, n, t);
}
const ut = {
  mounted: Xr,
  unmounted: Qr,
  updated: Zr
}, Jr = E({
  active: {
    type: Boolean,
    default: void 0
  },
  baseColor: String,
  symbol: {
    type: null,
    default: Zl
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: Z,
  appendIcon: Z,
  block: Boolean,
  readonly: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...ht(),
  ...Q(),
  ...Ue(),
  ...at(),
  ...it(),
  ...Nt(),
  ...ti(),
  ...Ot(),
  ...sa(),
  ...Ee(),
  ...va(),
  ...Rt(),
  ...ce({
    tag: "button"
  }),
  ...re(),
  ...qe({
    variant: "elevated"
  })
}, "VBtn"), te = L()({
  name: "VBtn",
  props: Jr(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = me(e), {
      borderClasses: i
    } = bt(e), {
      densityClasses: o
    } = je(e), {
      dimensionStyles: r
    } = lt(e), {
      elevationClasses: u
    } = ot(e), {
      loaderClasses: c
    } = ni(e), {
      locationStyles: f
    } = gn(e), {
      positionClasses: m
    } = ca(e), {
      roundedClasses: g
    } = Te(e), {
      sizeClasses: d,
      sizeStyles: y
    } = Ht(e), v = Ft(e, e.symbol, !1), b = hn(e, t), S = h(() => {
      var D;
      return e.active !== void 0 ? e.active : b.isLink.value ? (D = b.isActive) == null ? void 0 : D.value : v == null ? void 0 : v.isSelected.value;
    }), k = h(() => {
      var O, C;
      return {
        color: (v == null ? void 0 : v.isSelected.value) && (!b.isLink.value || ((O = b.isActive) == null ? void 0 : O.value)) || !v || ((C = b.isActive) == null ? void 0 : C.value) ? e.color ?? e.baseColor : e.baseColor,
        variant: e.variant
      };
    }), {
      colorClasses: w,
      colorStyles: V,
      variantClasses: P
    } = $t(k), _ = h(() => (v == null ? void 0 : v.disabled.value) || e.disabled), x = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), $ = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function I(D) {
      var O;
      _.value || b.isLink.value && (D.metaKey || D.ctrlKey || D.shiftKey || D.button !== 0 || t.target === "_blank") || ((O = b.navigate) == null || O.call(b, D), v == null || v.toggle());
    }
    return Ur(b, v == null ? void 0 : v.select), R(() => {
      const D = b.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || a.prepend), C = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== !0);
      return ve(s(D, {
        type: D === "a" ? void 0 : "button",
        class: ["v-btn", v == null ? void 0 : v.selectedClass.value, {
          "v-btn--active": S.value,
          "v-btn--block": e.block,
          "v-btn--disabled": _.value,
          "v-btn--elevated": x.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--readonly": e.readonly,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, w.value, o.value, u.value, c.value, m.value, g.value, d.value, P.value, e.class],
        style: [V.value, r.value, f.value, y.value, e.style],
        "aria-busy": e.loading ? !0 : void 0,
        disabled: _.value || void 0,
        href: b.href.value,
        tabindex: e.loading || e.readonly ? -1 : void 0,
        onClick: I,
        value: $.value
      }, {
        default: () => {
          var B;
          return [rt(!0, "v-btn"), !e.icon && O && s("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? s(ne, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : s(de, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), s("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && T ? s(de, {
            key: "content-icon",
            icon: e.icon
          }, null) : s(ne, {
            key: "content-defaults",
            disabled: !T,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var M;
              return [((M = a.default) == null ? void 0 : M.call(a)) ?? e.text];
            }
          })]), !e.icon && C && s("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? s(ne, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : s(de, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && s("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((B = a.loader) == null ? void 0 : B.call(a)) ?? s(ln, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            width: "2"
          }, null)])];
        }
      }), [[ut, !_.value && !!e.ripple, "", {
        center: !!e.icon
      }]]);
    }), {
      group: v
    };
  }
}), di = E({
  hideDayHeader: Boolean,
  intervals: {
    type: Number,
    default: 24
  },
  ...Kl()
}, "VCalendarDay"), Kt = L()({
  name: "VCalendarDay",
  props: di(),
  setup(e) {
    const n = Fe(), t = h(() => [...Array.from({
      length: e.intervals
    }, (a, l) => l).filter((a, l) => e.intervalDuration * (l + e.intervalStart) < 1440)]);
    return R(() => {
      const a = $n.filterProps(e);
      return s("div", {
        class: "v-calendar-day__container"
      }, [!e.hideDayHeader && s("div", {
        key: "calender-week-name",
        class: "v-calendar-weekly__head-weekday"
      }, [n.format(e.day.date, "weekdayShort"), s("div", null, [s(te, {
        icon: !0,
        text: n.format(e.day.date, "dayOfMonth"),
        variant: "text"
      }, null)])]), t.value.map((l, i) => s($n, z({
        index: i
      }, a), null))]);
    }), {
      intervals: t
    };
  }
}), vi = E({
  nextIcon: {
    type: String,
    default: "$next"
  },
  prevIcon: {
    type: String,
    default: "$prev"
  },
  title: String,
  text: {
    type: String,
    default: "$vuetify.calendar.today"
  },
  viewMode: {
    type: String,
    default: "month"
  }
}, "VCalendarHeader"), Rn = L()({
  name: "VCalendarHeader",
  props: vi(),
  emits: {
    "click:next": () => !0,
    "click:prev": () => !0,
    "click:toToday": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const {
      t: a
    } = Ae();
    function l() {
      t("click:prev");
    }
    function i() {
      t("click:next");
    }
    function o() {
      t("click:toToday");
    }
    return R(() => s("div", {
      class: "v-calendar-header"
    }, [e.text && s(te, {
      key: "today",
      class: "v-calendar-header__today",
      text: a(e.text),
      variant: "outlined",
      onClick: o
    }, null), s(te, {
      density: "comfortable",
      icon: e.prevIcon,
      variant: "text",
      onClick: l
    }, null), s(te, {
      density: "comfortable",
      icon: e.nextIcon,
      variant: "text",
      onClick: i
    }, null), s("div", {
      class: "v-calendar-header__title"
    }, [e.title])])), {};
  }
}), Wt = E({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), pe = (e, n) => {
  let {
    slots: t
  } = n;
  const {
    transition: a,
    disabled: l,
    group: i,
    ...o
  } = e, {
    component: r = i ? Jn : Je,
    ...u
  } = typeof a == "object" ? a : {};
  return yt(r, z(typeof a == "string" ? {
    name: l ? "" : a
  } : u, typeof a == "string" ? {} : Object.fromEntries(Object.entries({
    disabled: l,
    group: i
  }).filter((c) => {
    let [f, m] = c;
    return m !== void 0;
  })), o), t);
}, eu = E({
  bordered: Boolean,
  color: String,
  content: [Number, String],
  dot: Boolean,
  floating: Boolean,
  icon: Z,
  inline: Boolean,
  label: {
    type: String,
    default: "$vuetify.badge"
  },
  max: [Number, String],
  modelValue: {
    type: Boolean,
    default: !0
  },
  offsetX: [Number, String],
  offsetY: [Number, String],
  textColor: String,
  ...Q(),
  ...Ot({
    location: "top end"
  }),
  ...Ee(),
  ...ce(),
  ...re(),
  ...Wt({
    transition: "scale-rotate-transition"
  })
}, "VBadge"), tu = L()({
  name: "VBadge",
  inheritAttrs: !1,
  props: eu(),
  setup(e, n) {
    const {
      backgroundColorClasses: t,
      backgroundColorStyles: a
    } = ke(F(e, "color")), {
      roundedClasses: l
    } = Te(e), {
      t: i
    } = Ae(), {
      textColorClasses: o,
      textColorStyles: r
    } = De(F(e, "textColor")), {
      themeClasses: u
    } = wr(), {
      locationStyles: c
    } = gn(e, !0, (f) => (e.floating ? e.dot ? 2 : 4 : e.dot ? 8 : 12) + (["top", "bottom"].includes(f) ? +(e.offsetY ?? 0) : ["left", "right"].includes(f) ? +(e.offsetX ?? 0) : 0));
    return R(() => {
      const f = Number(e.content), m = !e.max || isNaN(f) ? e.content : f <= +e.max ? f : `${e.max}+`, [g, d] = Bn(n.attrs, ["aria-atomic", "aria-label", "aria-live", "role", "title"]);
      return s(e.tag, z({
        class: ["v-badge", {
          "v-badge--bordered": e.bordered,
          "v-badge--dot": e.dot,
          "v-badge--floating": e.floating,
          "v-badge--inline": e.inline
        }, e.class]
      }, d, {
        style: e.style
      }), {
        default: () => {
          var y, v;
          return [s("div", {
            class: "v-badge__wrapper"
          }, [(v = (y = n.slots).default) == null ? void 0 : v.call(y), s(pe, {
            transition: e.transition
          }, {
            default: () => {
              var b, S;
              return [ve(s("span", z({
                class: ["v-badge__badge", u.value, t.value, l.value, o.value],
                style: [a.value, r.value, e.inline ? {} : c.value],
                "aria-atomic": "true",
                "aria-label": i(e.label, f),
                "aria-live": "polite",
                role: "status"
              }, g), [e.dot ? void 0 : n.slots.badge ? (S = (b = n.slots).badge) == null ? void 0 : S.call(b) : e.icon ? s(de, {
                icon: e.icon
              }, null) : m]), [[We, e.modelValue]])];
            }
          })])];
        }
      });
    }), {};
  }
}), nu = E({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Be(e, n, t) {
  return L()({
    name: e,
    props: nu({
      mode: t,
      origin: n
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: u,
              offsetLeft: c,
              offsetWidth: f,
              offsetHeight: m
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${u}px`, r.style.left = `${c}px`, r.style.width = `${f}px`, r.style.height = `${m}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: u,
              top: c,
              left: f,
              width: m,
              height: g
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = u || "", r.style.top = c || "", r.style.left = f || "", r.style.width = m || "", r.style.height = g || "";
          }
        }
      };
      return () => {
        const r = a.group ? Jn : Je;
        return yt(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : o
        }, i.default);
      };
    }
  });
}
function fi(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return L()({
    name: e,
    props: {
      mode: {
        type: String,
        default: t
      },
      disabled: Boolean,
      group: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      const o = a.group ? Jn : Je;
      return () => yt(o, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : n
      }, i.default);
    }
  });
}
function mi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = Bl(`offset-${t}`);
  return {
    onBeforeEnter(o) {
      o._parent = o.parentNode, o._initialStyle = {
        transition: o.style.transition,
        overflow: o.style.overflow,
        [t]: o.style[t]
      };
    },
    onEnter(o) {
      const r = o._initialStyle;
      o.style.setProperty("transition", "none", "important"), o.style.overflow = "hidden";
      const u = `${o[a]}px`;
      o.style[t] = "0", o.offsetHeight, o.style.transition = r.transition, e && o._parent && o._parent.classList.add(e), requestAnimationFrame(() => {
        o.style[t] = u;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(o) {
      o._initialStyle = {
        transition: "",
        overflow: o.style.overflow,
        [t]: o.style[t]
      }, o.style.overflow = "hidden", o.style[t] = `${o[a]}px`, o.offsetHeight, requestAnimationFrame(() => o.style[t] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(o) {
    e && o._parent && o._parent.classList.remove(e), i(o);
  }
  function i(o) {
    const r = o._initialStyle[t];
    o.style.overflow = o._initialStyle.overflow, r != null && (o.style[t] = r), delete o._initialStyle;
  }
}
const au = E({
  target: [Object, Array]
}, "v-dialog-transition"), lu = L()({
  name: "VDialogTransition",
  props: au(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var g;
        await new Promise((d) => requestAnimationFrame(d)), await new Promise((d) => requestAnimationFrame(d)), l.style.visibility = "";
        const {
          x: o,
          y: r,
          sx: u,
          sy: c,
          speed: f
        } = tl(e.target, l), m = dt(l, [{
          transform: `translate(${o}px, ${r}px) scale(${u}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * f,
          easing: yr
        });
        (g = el(l)) == null || g.forEach((d) => {
          dt(d, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 450 * f,
            easing: an
          });
        }), m.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var g;
        await new Promise((d) => requestAnimationFrame(d));
        const {
          x: o,
          y: r,
          sx: u,
          sy: c,
          speed: f
        } = tl(e.target, l);
        dt(l, [{}, {
          transform: `translate(${o}px, ${r}px) scale(${u}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * f,
          easing: hr
        }).finished.then(() => i()), (g = el(l)) == null || g.forEach((d) => {
          dt(d, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 250 * f,
            easing: an
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? s(Je, z({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), t) : s(Je, {
      name: "dialog-transition"
    }, t);
  }
});
function el(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function tl(e, n) {
  const t = jl(e), a = ia(n), [l, i] = getComputedStyle(n).transformOrigin.split(" ").map((S) => parseFloat(S)), [o, r] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = t.left + t.width / 2;
  o === "left" || r === "left" ? u -= t.width / 2 : (o === "right" || r === "right") && (u += t.width / 2);
  let c = t.top + t.height / 2;
  o === "top" || r === "top" ? c -= t.height / 2 : (o === "bottom" || r === "bottom") && (c += t.height / 2);
  const f = t.width / a.width, m = t.height / a.height, g = Math.max(1, f, m), d = f / g || 0, y = m / g || 0, v = a.width * a.height / (window.innerWidth * window.innerHeight), b = v > 0.12 ? Math.min(1.5, (v - 0.12) * 10 + 1) : 1;
  return {
    x: u - (l + a.left),
    y: c - (i + a.top),
    sx: d,
    sy: y,
    speed: b
  };
}
Be("fab-transition", "center center", "out-in");
Be("dialog-bottom-transition");
Be("dialog-top-transition");
const Hn = Be("fade-transition");
Be("scale-transition");
Be("scroll-x-transition");
Be("scroll-x-reverse-transition");
Be("scroll-y-transition");
Be("scroll-y-reverse-transition");
Be("slide-x-transition");
Be("slide-x-reverse-transition");
const gi = Be("slide-y-transition");
Be("slide-y-reverse-transition");
const yi = fi("expand-transition", mi()), hi = fi("expand-x-transition", mi("", !0));
function iu(e) {
  return {
    aspectStyles: h(() => {
      const n = Number(e.aspectRatio);
      return n ? {
        paddingBottom: String(1 / n * 100) + "%"
      } : void 0;
    })
  };
}
const bi = E({
  aspectRatio: [String, Number],
  contentClass: null,
  inline: Boolean,
  ...Q(),
  ...at()
}, "VResponsive"), nl = L()({
  name: "VResponsive",
  props: bi(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      aspectStyles: a
    } = iu(e), {
      dimensionStyles: l
    } = lt(e);
    return R(() => {
      var i;
      return s("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [s("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && s("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [t.default()])]);
    }), {};
  }
});
function ou(e, n) {
  if (!ea) return;
  const t = n.modifiers || {}, a = n.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, o = new IntersectionObserver(function() {
    var m;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const c = (m = e._observe) == null ? void 0 : m[n.instance.$.uid];
    if (!c) return;
    const f = r.some((g) => g.isIntersecting);
    l && (!t.quiet || c.init) && (!t.once || f || c.init) && l(f, r, u), f && t.once ? ki(e, n) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = {
    init: !1,
    observer: o
  }, o.observe(e);
}
function ki(e, n) {
  var a;
  const t = (a = e._observe) == null ? void 0 : a[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const fa = {
  mounted: ou,
  unmounted: ki
}, ru = E({
  alt: String,
  cover: Boolean,
  color: String,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...bi(),
  ...Q(),
  ...Ee(),
  ...Wt()
}, "VImg"), uu = L()({
  name: "VImg",
  directives: {
    intersect: fa
  },
  props: ru(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = ke(F(e, "color")), {
      roundedClasses: o
    } = Te(e), r = fe("VImg"), u = Y(""), c = H(), f = Y(e.eager ? "loading" : "idle"), m = Y(), g = Y(), d = h(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), y = h(() => d.value.aspect || m.value / g.value || 0);
    q(() => e.src, () => {
      v(f.value !== "idle");
    }), q(y, (C, T) => {
      !C && T && c.value && V(c.value);
    }), pl(() => v());
    function v(C) {
      if (!(e.eager && C) && !(ea && !C && !e.eager)) {
        if (f.value = "loading", d.value.lazySrc) {
          const T = new Image();
          T.src = d.value.lazySrc, V(T, null);
        }
        d.value.src && he(() => {
          var T;
          t("loadstart", ((T = c.value) == null ? void 0 : T.currentSrc) || d.value.src), setTimeout(() => {
            var B;
            if (!r.isUnmounted)
              if ((B = c.value) != null && B.complete) {
                if (c.value.naturalWidth || S(), f.value === "error") return;
                y.value || V(c.value, null), f.value === "loading" && b();
              } else
                y.value || V(c.value), k();
          });
        });
      }
    }
    function b() {
      var C;
      r.isUnmounted || (k(), V(c.value), f.value = "loaded", t("load", ((C = c.value) == null ? void 0 : C.currentSrc) || d.value.src));
    }
    function S() {
      var C;
      r.isUnmounted || (f.value = "error", t("error", ((C = c.value) == null ? void 0 : C.currentSrc) || d.value.src));
    }
    function k() {
      const C = c.value;
      C && (u.value = C.currentSrc || C.src);
    }
    let w = -1;
    He(() => {
      clearTimeout(w);
    });
    function V(C) {
      let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const B = () => {
        if (clearTimeout(w), r.isUnmounted) return;
        const {
          naturalHeight: M,
          naturalWidth: W
        } = C;
        M || W ? (m.value = W, g.value = M) : !C.complete && f.value === "loading" && T != null ? w = window.setTimeout(B, T) : (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (m.value = 1, g.value = 1);
      };
      B();
    }
    const P = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), _ = () => {
      var B;
      if (!d.value.src || f.value === "idle") return null;
      const C = s("img", {
        class: ["v-img__img", P.value],
        style: {
          objectPosition: e.position
        },
        src: d.value.src,
        srcset: d.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: b,
        onError: S
      }, null), T = (B = a.sources) == null ? void 0 : B.call(a);
      return s(pe, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [ve(T ? s("picture", {
          class: "v-img__picture"
        }, [T, C]) : C, [[We, f.value === "loaded"]])]
      });
    }, x = () => s(pe, {
      transition: e.transition
    }, {
      default: () => [d.value.lazySrc && f.value !== "loaded" && s("img", {
        class: ["v-img__img", "v-img__img--preload", P.value],
        style: {
          objectPosition: e.position
        },
        src: d.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), $ = () => a.placeholder ? s(pe, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(f.value === "loading" || f.value === "error" && !a.error) && s("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, I = () => a.error ? s(pe, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [f.value === "error" && s("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, D = () => e.gradient ? s("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, O = Y(!1);
    {
      const C = q(y, (T) => {
        T && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            O.value = !0;
          });
        }), C());
      });
    }
    return R(() => {
      const C = nl.filterProps(e);
      return ve(s(nl, z({
        class: ["v-img", {
          "v-img--booting": !O.value
        }, l.value, o.value, e.class],
        style: [{
          width: U(e.width === "auto" ? m.value : e.width)
        }, i.value, e.style]
      }, C, {
        aspectRatio: y.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => s(ee, null, [s(_, null, null), s(x, null, null), s(D, null, null), s($, null, null), s(I, null, null)]),
        default: a.default
      }), [[$e("intersect"), {
        handler: v,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: u,
      image: c,
      state: f,
      naturalWidth: m,
      naturalHeight: g
    };
  }
}), su = E({
  start: Boolean,
  end: Boolean,
  icon: Z,
  image: String,
  text: String,
  ...Q(),
  ...Ue(),
  ...Ee(),
  ...Rt(),
  ...ce(),
  ...re(),
  ...qe({
    variant: "flat"
  })
}, "VAvatar"), mt = L()({
  name: "VAvatar",
  props: su(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = me(e), {
      colorClasses: l,
      colorStyles: i,
      variantClasses: o
    } = $t(e), {
      densityClasses: r
    } = je(e), {
      roundedClasses: u
    } = Te(e), {
      sizeClasses: c,
      sizeStyles: f
    } = Ht(e);
    return R(() => s(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, r.value, u.value, c.value, o.value, e.class],
      style: [i.value, f.value, e.style]
    }, {
      default: () => [t.default ? s(ne, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            image: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [t.default()]
      }) : e.image ? s(uu, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? s(de, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, rt(!1, "v-avatar")]
    })), {};
  }
}), cu = Symbol.for("vuetify:display"), Si = E({
  mobile: {
    type: Boolean,
    default: !1
  },
  mobileBreakpoint: [Number, String]
}, "display");
function ma() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = ae(cu);
  if (!t) throw new Error("Could not find Vuetify display injection");
  const a = h(() => {
    if (e.mobile != null) return e.mobile;
    if (!e.mobileBreakpoint) return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), l = h(() => n ? {
    [`${n}--mobile`]: a.value
  } : {});
  return {
    ...t,
    displayClasses: l,
    mobile: a
  };
}
const du = Symbol.for("vuetify:goto");
function vu() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: {
      linear: (e) => e,
      easeInQuad: (e) => e ** 2,
      easeOutQuad: (e) => e * (2 - e),
      easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
      easeInCubic: (e) => e ** 3,
      easeOutCubic: (e) => --e ** 3 + 1,
      easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
      easeInQuart: (e) => e ** 4,
      easeOutQuart: (e) => 1 - --e ** 4,
      easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
      easeInQuint: (e) => e ** 5,
      easeOutQuint: (e) => 1 + --e ** 5,
      easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
    }
  };
}
function fu(e) {
  return ga(e) ?? (document.scrollingElement || document.body);
}
function ga(e) {
  return typeof e == "string" ? document.querySelector(e) : ta(e);
}
function _n(e, n, t) {
  if (typeof e == "number") return n && t ? -e : e;
  let a = ga(e), l = 0;
  for (; a; )
    l += n ? a.offsetLeft : a.offsetTop, a = a.offsetParent;
  return l;
}
async function al(e, n, t, a) {
  const l = t ? "scrollLeft" : "scrollTop", i = Re((a == null ? void 0 : a.options) ?? vu(), n), o = a == null ? void 0 : a.rtl.value, r = (typeof e == "number" ? e : ga(e)) ?? 0, u = i.container === "parent" && r instanceof HTMLElement ? r.parentElement : fu(i.container), c = typeof i.easing == "function" ? i.easing : i.patterns[i.easing];
  if (!c) throw new TypeError(`Easing function "${i.easing}" not found.`);
  let f;
  if (typeof r == "number")
    f = _n(r, t, o);
  else if (f = _n(r, t, o) - _n(u, t, o), i.layout) {
    const y = window.getComputedStyle(r).getPropertyValue("--v-layout-top");
    y && (f -= parseInt(y, 10));
  }
  f += i.offset, f = gu(u, f, !!o, !!t);
  const m = u[l] ?? 0;
  if (f === m) return Promise.resolve(f);
  const g = performance.now();
  return new Promise((d) => requestAnimationFrame(function y(v) {
    const S = (v - g) / i.duration, k = Math.floor(m + (f - m) * c(et(S, 0, 1)));
    if (u[l] = k, S >= 1 && Math.abs(k - u[l]) < 10)
      return d(f);
    if (S > 2)
      return Ze("Scroll target is not reachable"), d(u[l]);
    requestAnimationFrame(y);
  }));
}
function mu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = ae(du), {
    isRtl: t
  } = Ge();
  if (!n) throw new Error("[Vuetify] Could not find injected goto instance");
  const a = {
    ...n,
    // can be set via VLocaleProvider
    rtl: h(() => n.rtl.value || t.value)
  };
  async function l(i, o) {
    return al(i, Re(e, o), !1, a);
  }
  return l.horizontal = async (i, o) => al(i, Re(e, o), !0, a), l;
}
function gu(e, n, t, a) {
  const {
    scrollWidth: l,
    scrollHeight: i
  } = e, [o, r] = e === document.scrollingElement ? [window.innerWidth, window.innerHeight] : [e.offsetWidth, e.offsetHeight];
  let u, c;
  return a ? t ? (u = -(l - o), c = 0) : (u = 0, c = l - o) : (u = 0, c = i + -r), Math.max(Math.min(n, c), u);
}
function yu(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isRtl: a,
    isHorizontal: l
  } = e;
  const i = At(l, t), o = Ci(l, a, t), r = At(l, n), u = wi(l, n), c = r * 0.4;
  return o > u ? u - c : o + i < u + r ? u - i + r + c : o;
}
function hu(e) {
  let {
    selectedElement: n,
    containerElement: t,
    isHorizontal: a
  } = e;
  const l = At(a, t), i = wi(a, n), o = At(a, n);
  return i - l / 2 + o / 2;
}
function ll(e, n) {
  const t = e ? "scrollWidth" : "scrollHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function bu(e, n) {
  const t = e ? "clientWidth" : "clientHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function Ci(e, n, t) {
  if (!t)
    return 0;
  const {
    scrollLeft: a,
    offsetWidth: l,
    scrollWidth: i
  } = t;
  return e ? n ? i - l + a : a : t.scrollTop;
}
function At(e, n) {
  const t = e ? "offsetWidth" : "offsetHeight";
  return (n == null ? void 0 : n[t]) || 0;
}
function wi(e, n) {
  const t = e ? "offsetLeft" : "offsetTop";
  return (n == null ? void 0 : n[t]) || 0;
}
const ku = Symbol.for("vuetify:v-slide-group"), xi = E({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: ku
  },
  nextIcon: {
    type: Z,
    default: "$next"
  },
  prevIcon: {
    type: Z,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...Q(),
  ...Si({
    mobile: null
  }),
  ...ce(),
  ...Lt({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), il = L()({
  name: "VSlideGroup",
  props: xi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isRtl: a
    } = Ge(), {
      displayClasses: l,
      mobile: i
    } = ma(e), o = kt(e, e.symbol), r = Y(!1), u = Y(0), c = Y(0), f = Y(0), m = h(() => e.direction === "horizontal"), {
      resizeRef: g,
      contentRect: d
    } = Ln(), {
      resizeRef: y,
      contentRect: v
    } = Ln(), b = mu(), S = h(() => ({
      container: g.el,
      duration: 200,
      easing: "easeOutQuart"
    })), k = h(() => o.selected.value.length ? o.items.value.findIndex((A) => A.id === o.selected.value[0]) : -1), w = h(() => o.selected.value.length ? o.items.value.findIndex((A) => A.id === o.selected.value[o.selected.value.length - 1]) : -1);
    if (Ce) {
      let A = -1;
      q(() => [o.selected.value, d.value, v.value, m.value], () => {
        cancelAnimationFrame(A), A = requestAnimationFrame(() => {
          if (d.value && v.value) {
            const N = m.value ? "width" : "height";
            c.value = d.value[N], f.value = v.value[N], r.value = c.value + 1 < f.value;
          }
          if (k.value >= 0 && y.el) {
            const N = y.el.children[w.value];
            P(N, e.centerActive);
          }
        });
      });
    }
    const V = Y(!1);
    function P(A, N) {
      let G = 0;
      N ? G = hu({
        containerElement: g.el,
        isHorizontal: m.value,
        selectedElement: A
      }) : G = yu({
        containerElement: g.el,
        isHorizontal: m.value,
        isRtl: a.value,
        selectedElement: A
      }), _(G);
    }
    function _(A) {
      if (!Ce || !g.el) return;
      const N = At(m.value, g.el), G = Ci(m.value, a.value, g.el);
      if (!(ll(m.value, g.el) <= N || // Prevent scrolling by only a couple of pixels, which doesn't look smooth
      Math.abs(A - G) < 16)) {
        if (m.value && a.value && g.el) {
          const {
            scrollWidth: ye,
            offsetWidth: X
          } = g.el;
          A = ye - X - A;
        }
        m.value ? b.horizontal(A, S.value) : b(A, S.value);
      }
    }
    function x(A) {
      const {
        scrollTop: N,
        scrollLeft: G
      } = A.target;
      u.value = m.value ? G : N;
    }
    function $(A) {
      if (V.value = !0, !(!r.value || !y.el)) {
        for (const N of A.composedPath())
          for (const G of y.el.children)
            if (G === N) {
              P(G);
              return;
            }
      }
    }
    function I(A) {
      V.value = !1;
    }
    let D = !1;
    function O(A) {
      var N;
      !D && !V.value && !(A.relatedTarget && ((N = y.el) != null && N.contains(A.relatedTarget))) && B(), D = !1;
    }
    function C() {
      D = !0;
    }
    function T(A) {
      if (!y.el) return;
      function N(G) {
        A.preventDefault(), B(G);
      }
      m.value ? A.key === "ArrowRight" ? N(a.value ? "prev" : "next") : A.key === "ArrowLeft" && N(a.value ? "next" : "prev") : A.key === "ArrowDown" ? N("next") : A.key === "ArrowUp" && N("prev"), A.key === "Home" ? N("first") : A.key === "End" && N("last");
    }
    function B(A) {
      var G, ue;
      if (!y.el) return;
      let N;
      if (!A)
        N = Jt(y.el)[0];
      else if (A === "next") {
        if (N = (G = y.el.querySelector(":focus")) == null ? void 0 : G.nextElementSibling, !N) return B("first");
      } else if (A === "prev") {
        if (N = (ue = y.el.querySelector(":focus")) == null ? void 0 : ue.previousElementSibling, !N) return B("last");
      } else A === "first" ? N = y.el.firstElementChild : A === "last" && (N = y.el.lastElementChild);
      N && N.focus({
        preventScroll: !0
      });
    }
    function M(A) {
      const N = m.value && a.value ? -1 : 1, G = (A === "prev" ? -N : N) * c.value;
      let ue = u.value + G;
      if (m.value && a.value && g.el) {
        const {
          scrollWidth: ye,
          offsetWidth: X
        } = g.el;
        ue += ye - X;
      }
      _(ue);
    }
    const W = h(() => ({
      next: o.next,
      prev: o.prev,
      select: o.select,
      isSelected: o.isSelected
    })), K = h(() => {
      switch (e.showArrows) {
        // Always show arrows on desktop & mobile
        case "always":
          return !0;
        // Always show arrows on desktop
        case "desktop":
          return !i.value;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior
        case !0:
          return r.value || Math.abs(u.value) > 0;
        // Always show on mobile
        case "mobile":
          return i.value || r.value || Math.abs(u.value) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop
        default:
          return !i.value && (r.value || Math.abs(u.value) > 0);
      }
    }), p = h(() => Math.abs(u.value) > 1), j = h(() => {
      if (!g.value) return !1;
      const A = ll(m.value, g.el), N = bu(m.value, g.el);
      return A - N - Math.abs(u.value) > 1;
    });
    return R(() => s(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !m.value,
        "v-slide-group--has-affixes": K.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: V.value || o.selected.value.length ? -1 : 0,
      onFocus: O
    }, {
      default: () => {
        var A, N, G;
        return [K.value && s("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !p.value
          }],
          onMousedown: C,
          onClick: () => p.value && M("prev")
        }, [((A = t.prev) == null ? void 0 : A.call(t, W.value)) ?? s(Hn, null, {
          default: () => [s(de, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), s("div", {
          key: "container",
          ref: g,
          class: "v-slide-group__container",
          onScroll: x
        }, [s("div", {
          ref: y,
          class: "v-slide-group__content",
          onFocusin: $,
          onFocusout: I,
          onKeydown: T
        }, [(N = t.default) == null ? void 0 : N.call(t, W.value)])]), K.value && s("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !j.value
          }],
          onMousedown: C,
          onClick: () => j.value && M("next")
        }, [((G = t.next) == null ? void 0 : G.call(t, W.value)) ?? s(Hn, null, {
          default: () => [s(de, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: o.selected,
      scrollTo: M,
      scrollOffset: u,
      focus: B
    };
  }
}), Vi = Symbol.for("vuetify:v-chip-group"), Su = E({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: nt
  },
  ...xi(),
  ...Q(),
  ...Lt({
    selectedClass: "v-chip--selected"
  }),
  ...ce(),
  ...re(),
  ...qe({
    variant: "tonal"
  })
}, "VChipGroup");
L()({
  name: "VChipGroup",
  props: Su(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = me(e), {
      isSelected: l,
      select: i,
      next: o,
      prev: r,
      selected: u
    } = kt(e, Vi);
    return ze({
      VChip: {
        color: F(e, "color"),
        disabled: F(e, "disabled"),
        filter: F(e, "filter"),
        variant: F(e, "variant")
      }
    }), R(() => {
      const c = il.filterProps(e);
      return s(il, z(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var f;
          return [(f = t.default) == null ? void 0 : f.call(t, {
            isSelected: l,
            select: i,
            next: o,
            prev: r,
            selected: u.value
          })];
        }
      });
    }), {};
  }
});
const Cu = E({
  activeClass: String,
  appendAvatar: String,
  appendIcon: Z,
  closable: Boolean,
  closeIcon: {
    type: Z,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: Z,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: be(),
  onClickOnce: be(),
  ...ht(),
  ...Q(),
  ...Ue(),
  ...it(),
  ...Nt(),
  ...Ee(),
  ...va(),
  ...Rt(),
  ...ce({
    tag: "span"
  }),
  ...re(),
  ...qe({
    variant: "tonal"
  })
}, "VChip"), wu = L()({
  name: "VChip",
  directives: {
    Ripple: ut
  },
  props: Cu(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      t: i
    } = Ae(), {
      borderClasses: o
    } = bt(e), {
      colorClasses: r,
      colorStyles: u,
      variantClasses: c
    } = $t(e), {
      densityClasses: f
    } = je(e), {
      elevationClasses: m
    } = ot(e), {
      roundedClasses: g
    } = Te(e), {
      sizeClasses: d
    } = Ht(e), {
      themeClasses: y
    } = me(e), v = J(e, "modelValue"), b = Ft(e, Vi, !1), S = hn(e, t), k = h(() => e.link !== !1 && S.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (!!b || e.link || S.isClickable.value)), V = h(() => ({
      "aria-label": i(e.closeLabel),
      onClick(x) {
        x.preventDefault(), x.stopPropagation(), v.value = !1, a("click:close", x);
      }
    }));
    function P(x) {
      var $;
      a("click", x), w.value && (($ = S.navigate) == null || $.call(S, x), b == null || b.toggle());
    }
    function _(x) {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), P(x));
    }
    return () => {
      const x = S.isLink.value ? "a" : e.tag, $ = !!(e.appendIcon || e.appendAvatar), I = !!($ || l.append), D = !!(l.close || e.closable), O = !!(l.filter || e.filter) && b, C = !!(e.prependIcon || e.prependAvatar), T = !!(C || l.prepend), B = !b || b.isSelected.value;
      return v.value && ve(s(x, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": w.value,
          "v-chip--filter": O,
          "v-chip--pill": e.pill
        }, y.value, o.value, B ? r.value : void 0, f.value, m.value, g.value, d.value, c.value, b == null ? void 0 : b.selectedClass.value, e.class],
        style: [B ? u.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: S.href.value,
        tabindex: w.value ? 0 : void 0,
        onClick: P,
        onKeydown: w.value && !k.value && _
      }, {
        default: () => {
          var M;
          return [rt(w.value, "v-chip"), O && s(hi, {
            key: "filter"
          }, {
            default: () => [ve(s("div", {
              class: "v-chip__filter"
            }, [l.filter ? s(ne, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : s(de, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[We, b.isSelected.value]])]
          }), T && s("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? s(ne, {
            key: "prepend-defaults",
            disabled: !C,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : s(ee, null, [e.prependIcon && s(de, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && s(mt, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), s("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((M = l.default) == null ? void 0 : M.call(l, {
            isSelected: b == null ? void 0 : b.isSelected.value,
            selectedClass: b == null ? void 0 : b.selectedClass.value,
            select: b == null ? void 0 : b.select,
            toggle: b == null ? void 0 : b.toggle,
            value: b == null ? void 0 : b.value.value,
            disabled: e.disabled
          })) ?? e.text]), I && s("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? s(ne, {
            key: "append-defaults",
            disabled: !$,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : s(ee, null, [e.appendIcon && s(de, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && s(mt, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), D && s("button", z({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, V.value), [l.close ? s(ne, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : s(de, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[$e("ripple"), w.value && e.ripple, null]]);
    };
  }
}), xu = E({
  allDay: Boolean,
  day: Object,
  event: Object
}, "VCalendarEvent"), ol = L()({
  name: "VCalendarEvent",
  props: xu(),
  setup(e) {
    return R(() => s(wu, {
      color: e.allDay ? "primary" : void 0,
      density: "comfortable",
      label: e.allDay,
      width: "100%"
    }, {
      default: () => {
        var n, t;
        return [s(tu, {
          inline: !0,
          dot: !0,
          color: (n = e.event) == null ? void 0 : n.color
        }, null), (t = e.event) == null ? void 0 : t.title];
      }
    })), {};
  }
}), Vu = E({
  active: Boolean,
  color: String,
  day: Object,
  disabled: Boolean,
  events: Array,
  title: [Number, String]
}, "VCalendarMonthDay"), _i = L()({
  name: "VCalendarMonthDay",
  props: Vu(),
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    return R(() => {
      var i, o, r, u, c, f, m, g, d, y, v;
      const l = !!(e.title || (i = a.title) != null && i.call(a, {
        title: e.title
      }));
      return s("div", {
        class: ["v-calendar-month__day"]
      }, [!((o = e.day) != null && o.isHidden) && l && s("div", {
        key: "title",
        class: "v-calendar-weekly__day-label"
      }, [((r = a.title) == null ? void 0 : r.call(a, {
        title: e.title
      })) ?? s(te, {
        class: (u = e.day) != null && u.isToday ? "v-calendar-weekly__day-label__today" : void 0,
        color: e.color,
        disabled: e.disabled,
        icon: !0,
        size: "x-small",
        variant: (c = e.day) != null && c.isToday ? void 0 : "flat"
      }, {
        default: () => [e.title]
      })]), !((f = e.day) != null && f.isHidden) && s("div", {
        key: "content",
        class: "v-calendar-weekly__day-content"
      }, [((m = a.content) == null ? void 0 : m.call(a)) ?? s("div", null, [s("div", {
        class: "v-calendar-weekly__day-alldayevents-container"
      }, [(g = e.events) == null ? void 0 : g.filter((b) => b.allDay).map((b) => a.event ? a.event({
        day: e.day,
        allDay: !0,
        event: b
      }) : s(ol, {
        day: e.day,
        event: b,
        allDay: !0
      }, null))]), s("div", {
        class: "v-calendar-weekly__day-events-container"
      }, [(d = e.events) == null ? void 0 : d.filter((b) => !b.allDay).map((b) => a.event ? a.event({
        day: e.day,
        event: b,
        allDay: !1
      }) : s(ol, {
        day: e.day,
        event: b
      }, null))])])]), !((y = e.day) != null && y.isHidden) && ((v = a.default) == null ? void 0 : v.call(a))]);
    }), {};
  }
}), Pi = E({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  },
  weeksInMonth: {
    type: String,
    default: "dynamic"
  },
  firstDayOfWeek: [Number, String]
}, "calendar");
function Ii(e) {
  const n = Fe(), t = J(e, "modelValue", [], (d) => ge(d)), a = h(() => e.displayValue ? n.date(e.displayValue) : t.value.length > 0 ? n.date(t.value[0]) : e.min ? n.date(e.min) : Array.isArray(e.allowedDates) ? n.date(e.allowedDates[0]) : n.date()), l = J(e, "year", void 0, (d) => {
    const y = d != null ? Number(d) : n.getYear(a.value);
    return n.startOfYear(n.setYear(n.date(), y));
  }, (d) => n.getYear(d)), i = J(e, "month", void 0, (d) => {
    const y = d != null ? Number(d) : n.getMonth(a.value), v = n.setYear(n.startOfMonth(n.date()), n.getYear(l.value));
    return n.setMonth(v, y);
  }, (d) => n.getMonth(d)), o = h(() => {
    const d = Number(e.firstDayOfWeek ?? 0);
    return e.weekdays.map((y) => (y + d) % 7);
  }), r = h(() => {
    const d = n.getWeekArray(i.value, e.firstDayOfWeek), y = d.flat(), v = 42;
    if (e.weeksInMonth === "static" && y.length < v) {
      const b = y[y.length - 1];
      let S = [];
      for (let k = 1; k <= v - y.length; k++)
        S.push(n.addDays(b, k)), k % 7 === 0 && (d.push(S), S = []);
    }
    return d;
  });
  function u(d, y) {
    return d.filter((v) => o.value.includes(n.toJsDate(v).getDay())).map((v, b) => {
      const S = n.toISO(v), k = !n.isSameMonth(v, i.value), w = n.isSameDay(v, n.startOfMonth(i.value)), V = n.isSameDay(v, n.endOfMonth(i.value)), P = n.isSameDay(v, i.value);
      return {
        date: v,
        isoDate: S,
        formatted: n.format(v, "keyboardDate"),
        year: n.getYear(v),
        month: n.getMonth(v),
        isDisabled: g(v),
        isWeekStart: b % 7 === 0,
        isWeekEnd: b % 7 === 6,
        isToday: n.isSameDay(v, y),
        isAdjacent: k,
        isHidden: k && !e.showAdjacentMonths,
        isStart: w,
        isSelected: t.value.some((_) => n.isSameDay(v, _)),
        isEnd: V,
        isSame: P,
        localized: n.format(v, "dayOfMonth")
      };
    });
  }
  const c = h(() => {
    const d = n.startOfWeek(a.value, e.firstDayOfWeek), y = [];
    for (let b = 0; b <= 6; b++)
      y.push(n.addDays(d, b));
    const v = n.date();
    return u(y, v);
  }), f = h(() => {
    const d = r.value.flat(), y = n.date();
    return u(d, y);
  }), m = h(() => r.value.map((d) => d.length ? _r(n, d[0]) : null));
  function g(d) {
    if (e.disabled) return !0;
    const y = n.date(d);
    return e.min && n.isAfter(n.date(e.min), y) || e.max && n.isAfter(y, n.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((v) => n.isSameDay(n.date(v), y)) : typeof e.allowedDates == "function" ? !e.allowedDates(y) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: f,
    daysInWeek: c,
    genDays: u,
    model: t,
    weeksInMonth: r,
    weekDays: o,
    weekNumbers: m
  };
}
const _u = E({
  hideHeader: Boolean,
  hideWeekNumber: Boolean,
  ...Pi(),
  ...di(),
  ...vi()
}, "VCalender"), Pu = L()({
  name: "VCalendar",
  props: _u(),
  emits: {
    next: null,
    prev: null,
    "update:modelValue": null
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fe(), {
      daysInMonth: i,
      daysInWeek: o,
      genDays: r,
      model: u,
      displayValue: c,
      weekNumbers: f,
      weekDays: m
    } = Ii(e), g = l.getWeekdays();
    function d() {
      e.viewMode === "month" && (u.value = [l.addMonths(c.value, 1)]), e.viewMode === "week" && (u.value = [l.addDays(c.value, 7)]), e.viewMode === "day" && (u.value = [l.addDays(c.value, 1)]);
    }
    function y() {
      e.viewMode === "month" && (u.value = [l.addMonths(c.value, -1)]), e.viewMode === "week" && (u.value = [l.addDays(c.value, -7)]), e.viewMode === "day" && (u.value = [l.addDays(c.value, -1)]);
    }
    function v() {
      u.value = [l.date()];
    }
    const b = h(() => l.format(c.value, "monthAndYear"));
    return R(() => {
      var w;
      const S = Kt.filterProps(e), k = Rn.filterProps(e);
      return s("div", {
        class: ["v-calendar", {
          "v-calendar-monthly": e.viewMode === "month",
          "v-calendar-weekly": e.viewMode === "week",
          "v-calendar-day": e.viewMode === "day"
        }]
      }, [s("div", null, [!e.hideHeader && (a.header ? a.header({
        title: b.value
      }) : s(Rn, z({
        key: "calendar-header"
      }, k, {
        title: b.value,
        "onClick:next": d,
        "onClick:prev": y,
        "onClick:toToday": v
      }), null))]), s("div", {
        class: ["v-calendar__container", `days__${m.value.length}`]
      }, [e.viewMode === "month" && !e.hideDayHeader && s("div", {
        class: ["v-calendar-weekly__head", `days__${m.value.length}`, ...e.hideWeekNumber ? [] : ["v-calendar-weekly__head-weeknumbers"]],
        key: "calenderWeeklyHead"
      }, [e.hideWeekNumber ? "" : s("div", {
        key: "weekNumber0",
        class: "v-calendar-weekly__head-weeknumber"
      }, null), m.value.map((V) => s("div", {
        class: `v-calendar-weekly__head-weekday${e.hideWeekNumber ? "" : "-with-weeknumber"}`
      }, [g[V]]))]), e.viewMode === "month" && s("div", {
        key: "VCalendarMonth",
        class: ["v-calendar-month__days", `days${e.hideWeekNumber ? "" : "-with-weeknumbers"}__${m.value.length}`, ...e.hideWeekNumber ? [] : ["v-calendar-month__weeknumbers"]]
      }, [Go(i.value, m.value.length).map((V, P) => [e.hideWeekNumber ? "" : s("div", {
        class: "v-calendar-month__weeknumber"
      }, [f.value[P]]), V.map((_) => {
        var x;
        return s(_i, {
          color: l.isSameDay(l.date(), _.date) ? "primary" : void 0,
          day: _,
          title: _ ? l.format(_.date, "dayOfMonth") : "NaN",
          events: (x = e.events) == null ? void 0 : x.filter(($) => l.isSameDay(_.date, $.start) || l.isSameDay(_.date, $.end))
        }, {
          event: a.event
        });
      })])]), e.viewMode === "week" && o.value.map((V, P) => {
        var _;
        return s(Kt, z(S, {
          day: V,
          dayIndex: P,
          events: (_ = e.events) == null ? void 0 : _.filter((x) => l.isSameDay(x.start, V.date) || l.isSameDay(x.end, V.date))
        }), null);
      }), e.viewMode === "day" && s(Kt, z(S, {
        day: r([c.value], l.date())[0],
        dayIndex: 0,
        events: (w = e.events) == null ? void 0 : w.filter((V) => l.isSameDay(V.start, r([c.value], l.date())[0].date) || l.isSameDay(V.end, r([c.value], l.date())[0].date))
      }), null)])]);
    }), {
      daysInMonth: i,
      daysInWeek: o,
      genDays: r
    };
  }
}), Ai = Symbol.for("vuetify:layout");
function Iu() {
  const e = ae(Ai);
  if (!e) throw new Error("[Vuetify] Could not find injected layout");
  return {
    layoutIsReady: he(),
    getLayoutItem: e.getLayoutItem,
    mainRect: e.mainRect,
    mainStyles: e.mainStyles
  };
}
const Ei = E({
  modelValue: null,
  color: String,
  cancelText: {
    type: String,
    default: "$vuetify.confirmEdit.cancel"
  },
  okText: {
    type: String,
    default: "$vuetify.confirmEdit.ok"
  }
}, "VConfirmEdit"), rl = L()({
  name: "VConfirmEdit",
  props: Ei(),
  emits: {
    cancel: () => !0,
    save: (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = J(e, "modelValue"), i = H();
    Me(() => {
      i.value = structuredClone(Se(l.value));
    });
    const {
      t: o
    } = Ae(), r = h(() => nt(l.value, i.value));
    function u() {
      l.value = i.value, t("save", i.value);
    }
    function c() {
      i.value = structuredClone(Se(l.value)), t("cancel");
    }
    let f = !1;
    return R(() => {
      var g;
      const m = s(ee, null, [s(te, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: c,
        text: o(e.cancelText)
      }, null), s(te, {
        disabled: r.value,
        variant: "text",
        color: e.color,
        onClick: u,
        text: o(e.okText)
      }, null)]);
      return s(ee, null, [(g = a.default) == null ? void 0 : g.call(a, {
        model: i,
        save: u,
        cancel: c,
        isPristine: r.value,
        get actions() {
          return f = !0, m;
        }
      }), !f && m]);
    }), {
      save: u,
      cancel: c,
      isPristine: r
    };
  }
}), Au = mn("v-spacer", "div", "VSpacer"), Ti = E({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: Z,
    default: "$next"
  },
  prevIcon: {
    type: Z,
    default: "$prev"
  },
  modeIcon: {
    type: Z,
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), ul = L()({
  name: "VDatePickerControls",
  props: Ti(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = h(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = h(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = h(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), o = h(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      t("click:prev");
    }
    function u() {
      t("click:next");
    }
    function c() {
      t("click:year");
    }
    function f() {
      t("click:month");
    }
    return R(() => s("div", {
      class: ["v-date-picker-controls"]
    }, [s(te, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: f
    }, null), s(te, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), s(Au, {
      key: "mode-spacer"
    }, null), s("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [s(te, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), s(te, {
      disabled: o.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: u
    }, null)])])), {};
  }
}), Eu = E({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: be()
}, "VDatePickerHeader"), sl = L()({
  name: "VDatePickerHeader",
  props: Eu(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = ke(e, "color");
    function o() {
      t("click");
    }
    function r() {
      t("click:append");
    }
    return R(() => {
      const u = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return s("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: o
      }, [a.prepend && s("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), u && s(pe, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var f;
          return [s("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((f = a.default) == null ? void 0 : f.call(a)) ?? e.header])];
        }
      }), c && s("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? s(ne, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var f;
          return [(f = a.append) == null ? void 0 : f.call(a)];
        }
      }) : s(te, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
}), Bi = E({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  transition: {
    type: String,
    default: "picker-transition"
  },
  reverseTransition: {
    type: String,
    default: "picker-reverse-transition"
  },
  ...Pi()
}, "VDatePickerMonth"), cl = L()({
  name: "VDatePickerMonth",
  props: Bi(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = H(), {
      daysInMonth: i,
      model: o,
      weekNumbers: r
    } = Ii(e), u = Fe(), c = Y(), f = Y(), m = Y(!1), g = h(() => m.value ? e.reverseTransition : e.transition);
    e.multiple === "range" && o.value.length > 0 && (c.value = o.value[0], o.value.length > 1 && (f.value = o.value[o.value.length - 1]));
    const d = h(() => {
      const S = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return o.value.length >= S;
    });
    q(i, (S, k) => {
      k && (m.value = u.isBefore(S[0].date, k[0].date));
    });
    function y(S) {
      const k = u.startOfDay(S);
      if (o.value.length === 0 ? c.value = void 0 : o.value.length === 1 && (c.value = o.value[0], f.value = void 0), !c.value)
        c.value = k, o.value = [c.value];
      else if (f.value)
        c.value = S, f.value = void 0, o.value = [c.value];
      else {
        if (u.isSameDay(k, c.value)) {
          c.value = void 0, o.value = [];
          return;
        } else u.isBefore(k, c.value) ? (f.value = u.endOfDay(c.value), c.value = k) : f.value = u.endOfDay(k);
        const w = u.getDiff(f.value, c.value, "days"), V = [c.value];
        for (let P = 1; P < w; P++) {
          const _ = u.addDays(c.value, P);
          V.push(_);
        }
        V.push(f.value), o.value = V;
      }
    }
    function v(S) {
      const k = o.value.findIndex((w) => u.isSameDay(w, S));
      if (k === -1)
        o.value = [...o.value, S];
      else {
        const w = [...o.value];
        w.splice(k, 1), o.value = w;
      }
    }
    function b(S) {
      e.multiple === "range" ? y(S) : e.multiple ? v(S) : o.value = [S];
    }
    return () => s("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && s("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && s("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [Tn(" ")]), r.value.map((S) => s("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [S]))]), s(pe, {
      name: g.value
    }, {
      default: () => {
        var S;
        return [s("div", {
          ref: l,
          key: (S = i.value[0].date) == null ? void 0 : S.toString(),
          class: "v-date-picker-month__days"
        }, [!e.hideWeekdays && u.getWeekdays(e.firstDayOfWeek).map((k) => s("div", {
          class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
        }, [k])), i.value.map((k, w) => {
          const V = {
            props: {
              onClick: () => b(k.date)
            },
            item: k,
            i: w
          };
          return d.value && !k.isSelected && (k.isDisabled = !0), s("div", {
            class: ["v-date-picker-month__day", {
              "v-date-picker-month__day--adjacent": k.isAdjacent,
              "v-date-picker-month__day--hide-adjacent": k.isHidden,
              "v-date-picker-month__day--selected": k.isSelected,
              "v-date-picker-month__day--week-end": k.isWeekEnd,
              "v-date-picker-month__day--week-start": k.isWeekStart
            }],
            "data-v-date": k.isDisabled ? void 0 : k.isoDate
          }, [(e.showAdjacentMonths || !k.isAdjacent) && s(ne, {
            defaults: {
              VBtn: {
                class: "v-date-picker-month__day-btn",
                color: (k.isSelected || k.isToday) && !k.isDisabled ? e.color : void 0,
                disabled: k.isDisabled,
                icon: !0,
                ripple: !1,
                text: k.localized,
                variant: k.isDisabled ? k.isToday ? "outlined" : "text" : k.isToday && !k.isSelected ? "outlined" : "flat",
                onClick: () => b(k.date)
              }
            }
          }, {
            default: () => {
              var P;
              return [((P = a.day) == null ? void 0 : P.call(a, V)) ?? s(te, V.props, null)];
            }
          })]);
        })])];
      }
    })]);
  }
}), pi = E({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number,
  year: Number
}, "VDatePickerMonths"), dl = L()({
  name: "VDatePickerMonths",
  props: pi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fe(), i = J(e, "modelValue"), o = h(() => {
      let r = l.startOfYear(l.date());
      return e.year && (r = l.setYear(r, e.year)), Mt(12).map((u) => {
        const c = l.format(r, "monthShort"), f = !!(e.min && l.isAfter(l.startOfMonth(l.date(e.min)), r) || e.max && l.isAfter(r, l.startOfMonth(l.date(e.max))));
        return r = l.getNextMonth(r), {
          isDisabled: f,
          text: c,
          value: u
        };
      });
    });
    return Me(() => {
      i.value = i.value ?? l.getMonth(l.date());
    }), R(() => s("div", {
      class: "v-date-picker-months",
      style: {
        height: U(e.height)
      }
    }, [s("div", {
      class: "v-date-picker-months__content"
    }, [o.value.map((r, u) => {
      var m;
      const c = {
        active: i.value === u,
        color: i.value === u ? e.color : void 0,
        disabled: r.isDisabled,
        rounded: !0,
        text: r.text,
        variant: i.value === r.value ? "flat" : "text",
        onClick: () => f(u)
      };
      function f(g) {
        if (i.value === g) {
          t("update:modelValue", i.value);
          return;
        }
        i.value = g;
      }
      return ((m = a.month) == null ? void 0 : m.call(a, {
        month: r,
        i: u,
        props: c
      })) ?? s(te, z({
        key: "month"
      }, c), null);
    })])])), {};
  }
}), Mi = E({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), vl = L()({
  name: "VDatePickerYears",
  props: Mi(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fe(), i = J(e, "modelValue"), o = h(() => {
      const u = l.getYear(l.date());
      let c = u - 100, f = u + 52;
      e.min && (c = l.getYear(l.date(e.min))), e.max && (f = l.getYear(l.date(e.max)));
      let m = l.startOfYear(l.date());
      return m = l.setYear(m, c), Mt(f - c + 1, c).map((g) => {
        const d = l.format(m, "year");
        return m = l.setYear(m, l.getYear(m) + 1), {
          text: d,
          value: g
        };
      });
    });
    Me(() => {
      i.value = i.value ?? l.getYear(l.date());
    });
    const r = tn();
    return Ye(async () => {
      var u;
      await he(), (u = r.el) == null || u.scrollIntoView({
        block: "center"
      });
    }), R(() => s("div", {
      class: "v-date-picker-years",
      style: {
        height: U(e.height)
      }
    }, [s("div", {
      class: "v-date-picker-years__content"
    }, [o.value.map((u, c) => {
      var m;
      const f = {
        ref: i.value === u.value ? r : void 0,
        active: i.value === u.value,
        color: i.value === u.value ? e.color : void 0,
        rounded: !0,
        text: u.text,
        variant: i.value === u.value ? "flat" : "text",
        onClick: () => {
          if (i.value === u.value) {
            t("update:modelValue", i.value);
            return;
          }
          i.value = u.value;
        }
      };
      return ((m = a.year) == null ? void 0 : m.call(a, {
        year: u,
        i: c,
        props: f
      })) ?? s(te, z({
        key: "month"
      }, f), null);
    })])])), {};
  }
}), Di = mn("v-picker-title"), ya = E({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...da()
}, "VPicker"), Et = L()({
  name: "VPicker",
  props: ya(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = ke(F(e, "color"));
    return R(() => {
      const i = _t.filterProps(e), o = !!(e.title || t.title);
      return s(_t, z(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!t.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && s("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [o && s(Di, {
            key: "picker-title"
          }, {
            default: () => {
              var u;
              return [((u = t.title) == null ? void 0 : u.call(t)) ?? e.title];
            }
          }), t.header && s("div", {
            class: "v-picker__header"
          }, [t.header()])]), s("div", {
            class: "v-picker__body"
          }, [(r = t.default) == null ? void 0 : r.call(t)]), t.actions && s(ne, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [s("div", {
              class: "v-picker__actions"
            }, [t.actions()])]
          })];
        }
      });
    }), {};
  }
}), Oi = E({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...Ti(),
  ...Bi({
    weeksInMonth: "static"
  }),
  ...oe(pi(), ["modelValue"]),
  ...oe(Mi(), ["modelValue"]),
  ...ya({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), fl = L()({
  name: "VDatePicker",
  props: Oi(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Fe(), {
      t: i
    } = Ae(), o = J(e, "modelValue", void 0, (I) => ge(I), (I) => e.multiple ? I : I[0]), r = J(e, "viewMode"), u = h(() => {
      var D;
      const I = l.date((D = o.value) == null ? void 0 : D[0]);
      return I && l.isValid(I) ? I : l.date();
    }), c = H(Number(e.month ?? l.getMonth(l.startOfMonth(u.value)))), f = H(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(u.value, c.value))))), m = Y(!1), g = h(() => e.multiple && o.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", o.value.length) : o.value[0] && l.isValid(o.value[0]) ? l.format(l.date(o.value[0]), "normalDateWithWeekday") : i(e.header)), d = h(() => {
      let I = l.date();
      return I = l.setDate(I, 1), I = l.setMonth(I, c.value), I = l.setYear(I, f.value), l.format(I, "monthAndYear");
    }), y = h(() => `date-picker-header${m.value ? "-reverse" : ""}-transition`), v = h(() => {
      const I = l.date(e.min);
      return e.min && l.isValid(I) ? I : null;
    }), b = h(() => {
      const I = l.date(e.max);
      return e.max && l.isValid(I) ? I : null;
    }), S = h(() => {
      if (e.disabled) return !0;
      const I = [];
      if (r.value !== "month")
        I.push("prev", "next");
      else {
        let D = l.date();
        if (D = l.setYear(D, f.value), D = l.setMonth(D, c.value), v.value) {
          const O = l.addDays(l.startOfMonth(D), -1);
          l.isAfter(v.value, O) && I.push("prev");
        }
        if (b.value) {
          const O = l.addDays(l.endOfMonth(D), 1);
          l.isAfter(O, b.value) && I.push("next");
        }
      }
      return I;
    });
    function k() {
      c.value < 11 ? c.value++ : (f.value++, c.value = 0, $(f.value)), x(c.value);
    }
    function w() {
      c.value > 0 ? c.value-- : (f.value--, c.value = 11, $(f.value)), x(c.value);
    }
    function V() {
      r.value = "month";
    }
    function P() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function _() {
      r.value = r.value === "year" ? "month" : "year";
    }
    function x(I) {
      r.value === "months" && P(), t("update:month", I);
    }
    function $(I) {
      r.value === "year" && _(), t("update:year", I);
    }
    return q(o, (I, D) => {
      const O = ge(D), C = ge(I);
      if (!C.length) return;
      const T = l.date(O[O.length - 1]), B = l.date(C[C.length - 1]), M = l.getMonth(B), W = l.getYear(B);
      M !== c.value && (c.value = M, x(c.value)), W !== f.value && (f.value = W, $(f.value)), m.value = l.isBefore(T, B);
    }), R(() => {
      const I = Et.filterProps(e), D = ul.filterProps(e), O = sl.filterProps(e), C = cl.filterProps(e), T = oe(dl.filterProps(e), ["modelValue"]), B = oe(vl.filterProps(e), ["modelValue"]), M = {
        header: g.value,
        transition: y.value
      };
      return s(Et, z(I, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var W;
          return ((W = a.title) == null ? void 0 : W.call(a)) ?? s("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? s(ne, {
          defaults: {
            VDatePickerHeader: {
              ...M
            }
          }
        }, {
          default: () => {
            var W;
            return [(W = a.header) == null ? void 0 : W.call(a, M)];
          }
        }) : s(sl, z({
          key: "header"
        }, O, M, {
          onClick: r.value !== "month" ? V : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => s(ee, null, [s(ul, z(D, {
          disabled: S.value,
          text: d.value,
          "onClick:next": k,
          "onClick:prev": w,
          "onClick:month": P,
          "onClick:year": _
        }), null), s(Hn, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? s(dl, z({
            key: "date-picker-months"
          }, T, {
            modelValue: c.value,
            "onUpdate:modelValue": [(W) => c.value = W, x],
            min: v.value,
            max: b.value,
            year: f.value
          }), null) : r.value === "year" ? s(vl, z({
            key: "date-picker-years"
          }, B, {
            modelValue: f.value,
            "onUpdate:modelValue": [(W) => f.value = W, $],
            min: v.value,
            max: b.value
          }), null) : s(cl, z({
            key: "date-picker-month"
          }, C, {
            modelValue: o.value,
            "onUpdate:modelValue": (W) => o.value = W,
            month: c.value,
            "onUpdate:month": [(W) => c.value = W, x],
            year: f.value,
            "onUpdate:year": [(W) => f.value = W, $],
            min: v.value,
            max: b.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
});
function Pn(e, n) {
  return {
    x: e.x + n.x,
    y: e.y + n.y
  };
}
function Tu(e, n) {
  return {
    x: e.x - n.x,
    y: e.y - n.y
  };
}
function ml(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: t,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? n.width / 2 : a === "right" ? n.width : a, i = t === "top" ? 0 : t === "bottom" ? n.height : t;
    return Pn({
      x: l,
      y: i
    }, n);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: t,
      align: a
    } = e, l = t === "left" ? 0 : t === "right" ? n.width : t, i = a === "top" ? 0 : a === "center" ? n.height / 2 : a === "bottom" ? n.height : a;
    return Pn({
      x: l,
      y: i
    }, n);
  }
  return Pn({
    x: n.width / 2,
    y: n.height / 2
  }, n);
}
const $i = {
  static: Mu,
  // specific viewport position, usually centered
  connected: Ou
  // connected to a certain element
}, Bu = E({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in $i
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function pu(e, n) {
  const t = H({}), a = H();
  Ce && tt(() => !!(n.isActive.value && e.locationStrategy), (i) => {
    var o, r;
    q(() => e.locationStrategy, i), Ie(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (o = e.locationStrategy(n, e, t)) == null ? void 0 : o.updateLocation : a.value = (r = $i[e.locationStrategy](n, e, t)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var o;
    (o = a.value) == null || o.call(a, i);
  }
  return {
    contentStyles: t,
    updateLocation: a
  };
}
function Mu() {
}
function Du(e, n) {
  n ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const t = ia(e);
  return n ? t.x += parseFloat(e.style.right || 0) : t.x -= parseFloat(e.style.left || 0), t.y -= parseFloat(e.style.top || 0), t;
}
function Ou(e, n, t) {
  (Array.isArray(e.target.value) || Sr(e.target.value)) && Object.assign(t.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = la(() => {
    const y = pn(n.location, e.isRtl.value), v = n.origin === "overlap" ? y : n.origin === "auto" ? wn(y) : pn(n.origin, e.isRtl.value);
    return y.side === v.side && y.align === xn(v).align ? {
      preferredAnchor: $a(y),
      preferredOrigin: $a(v)
    } : {
      preferredAnchor: y,
      preferredOrigin: v
    };
  }), [o, r, u, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => h(() => {
    const v = parseFloat(n[y]);
    return isNaN(v) ? 1 / 0 : v;
  })), f = h(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const y = n.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let m = !1;
  const g = new ResizeObserver(() => {
    m && d();
  });
  q([e.target, e.contentEl], (y, v) => {
    let [b, S] = y, [k, w] = v;
    k && !Array.isArray(k) && g.unobserve(k), b && !Array.isArray(b) && g.observe(b), w && g.unobserve(w), S && g.observe(S);
  }, {
    immediate: !0
  }), Ie(() => {
    g.disconnect();
  });
  function d() {
    if (m = !1, requestAnimationFrame(() => m = !0), !e.target.value || !e.contentEl.value) return;
    const y = jl(e.target.value), v = Du(e.contentEl.value, e.isRtl.value), b = Vt(e.contentEl.value), S = 12;
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (v.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), v.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const k = b.reduce((O, C) => {
      const T = C.getBoundingClientRect(), B = new Qe({
        x: C === document.documentElement ? 0 : T.x,
        y: C === document.documentElement ? 0 : T.y,
        width: C.clientWidth,
        height: C.clientHeight
      });
      return O ? new Qe({
        x: Math.max(O.left, B.left),
        y: Math.max(O.top, B.top),
        width: Math.min(O.right, B.right) - Math.max(O.left, B.left),
        height: Math.min(O.bottom, B.bottom) - Math.max(O.top, B.top)
      }) : B;
    }, void 0);
    k.x += S, k.y += S, k.width -= S * 2, k.height -= S * 2;
    let w = {
      anchor: l.value,
      origin: i.value
    };
    function V(O) {
      const C = new Qe(v), T = ml(O.anchor, y), B = ml(O.origin, C);
      let {
        x: M,
        y: W
      } = Tu(T, B);
      switch (O.anchor.side) {
        case "top":
          W -= f.value[0];
          break;
        case "bottom":
          W += f.value[0];
          break;
        case "left":
          M -= f.value[0];
          break;
        case "right":
          M += f.value[0];
          break;
      }
      switch (O.anchor.align) {
        case "top":
          W -= f.value[1];
          break;
        case "bottom":
          W += f.value[1];
          break;
        case "left":
          M -= f.value[1];
          break;
        case "right":
          M += f.value[1];
          break;
      }
      return C.x += M, C.y += W, C.width = Math.min(C.width, u.value), C.height = Math.min(C.height, c.value), {
        overflows: Na(C, k),
        x: M,
        y: W
      };
    }
    let P = 0, _ = 0;
    const x = {
      x: 0,
      y: 0
    }, $ = {
      x: !1,
      y: !1
    };
    let I = -1;
    for (; ; ) {
      if (I++ > 10) {
        or("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: O,
        y: C,
        overflows: T
      } = V(w);
      P += O, _ += C, v.x += O, v.y += C;
      {
        const B = La(w.anchor), M = T.x.before || T.x.after, W = T.y.before || T.y.after;
        let K = !1;
        if (["x", "y"].forEach((p) => {
          if (p === "x" && M && !$.x || p === "y" && W && !$.y) {
            const j = {
              anchor: {
                ...w.anchor
              },
              origin: {
                ...w.origin
              }
            }, A = p === "x" ? B === "y" ? xn : wn : B === "y" ? wn : xn;
            j.anchor = A(j.anchor), j.origin = A(j.origin);
            const {
              overflows: N
            } = V(j);
            (N[p].before <= T[p].before && N[p].after <= T[p].after || N[p].before + N[p].after < (T[p].before + T[p].after) / 2) && (w = j, K = $[p] = !0);
          }
        }), K) continue;
      }
      T.x.before && (P += T.x.before, v.x += T.x.before), T.x.after && (P -= T.x.after, v.x -= T.x.after), T.y.before && (_ += T.y.before, v.y += T.y.before), T.y.after && (_ -= T.y.after, v.y -= T.y.after);
      {
        const B = Na(v, k);
        x.x = k.width - B.x.before - B.x.after, x.y = k.height - B.y.before - B.y.after, P += B.x.before, v.x += B.x.before, _ += B.y.before, v.y += B.y.before;
      }
      break;
    }
    const D = La(w.anchor);
    return Object.assign(t.value, {
      "--v-overlay-anchor-origin": `${w.anchor.side} ${w.anchor.align}`,
      transformOrigin: `${w.origin.side} ${w.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: U(In(_)),
      left: e.isRtl.value ? void 0 : U(In(P)),
      right: e.isRtl.value ? U(In(-P)) : void 0,
      minWidth: U(D === "y" ? Math.min(o.value, y.width) : o.value),
      maxWidth: U(gl(et(x.x, o.value === 1 / 0 ? 0 : o.value, u.value))),
      maxHeight: U(gl(et(x.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: x,
      contentBox: v
    };
  }
  return q(() => [l.value, i.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => d()), he(() => {
    const y = d();
    if (!y) return;
    const {
      available: v,
      contentBox: b
    } = y;
    b.height > v.y && requestAnimationFrame(() => {
      d(), requestAnimationFrame(() => {
        d();
      });
    });
  }), {
    updateLocation: d
  };
}
function In(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function gl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Wn = !0;
const rn = [];
function $u(e) {
  !Wn || rn.length ? (rn.push(e), zn()) : (Wn = !1, e(), zn());
}
let yl = -1;
function zn() {
  cancelAnimationFrame(yl), yl = requestAnimationFrame(() => {
    const e = rn.shift();
    e && e(), rn.length ? zn() : Wn = !0;
  });
}
const Xt = {
  none: null,
  close: Fu,
  block: Ru,
  reposition: Hu
}, Lu = E({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Xt
  }
}, "VOverlay-scroll-strategies");
function Nu(e, n) {
  if (!Ce) return;
  let t;
  Me(async () => {
    t == null || t.stop(), n.isActive.value && e.scrollStrategy && (t = Qn(), await new Promise((a) => setTimeout(a)), t.active && t.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(n, e, t) : (a = Xt[e.scrollStrategy]) == null || a.call(Xt, n, e, t);
    }));
  }), Ie(() => {
    t == null || t.stop();
  });
}
function Fu(e) {
  function n(t) {
    e.isActive.value = !1;
  }
  Li(e.targetEl.value ?? e.contentEl.value, n);
}
function Ru(e, n) {
  var o;
  const t = (o = e.root.value) == null ? void 0 : o.offsetParent, a = [.../* @__PURE__ */ new Set([...Vt(e.targetEl.value, n.contained ? t : void 0), ...Vt(e.contentEl.value, n.contained ? t : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => ra(r) && r)(t || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, u) => {
    r.style.setProperty("--v-body-scroll-x", U(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", U(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", U(l)), r.classList.add("v-overlay-scroll-blocked");
  }), Ie(() => {
    a.forEach((r, u) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), m = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -f, r.style.scrollBehavior = m;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function Hu(e, n, t) {
  let a = !1, l = -1, i = -1;
  function o(r) {
    $u(() => {
      var f, m;
      const u = performance.now();
      (m = (f = e.updateLocation).value) == null || m.call(f, r), a = (performance.now() - u) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    t.run(() => {
      Li(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            o(r);
          });
        })) : o(r);
      });
    });
  }), Ie(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Li(e, n) {
  const t = [document, ...Vt(e)];
  t.forEach((a) => {
    a.addEventListener("scroll", n, {
      passive: !0
    });
  }), Ie(() => {
    t.forEach((a) => {
      a.removeEventListener("scroll", n);
    });
  });
}
const jn = Symbol.for("vuetify:v-menu"), Wu = E({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function zu(e, n) {
  let t = () => {
  };
  function a(o) {
    t == null || t();
    const r = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((u) => {
      t = qo(r, () => {
        n == null || n(o), u(o);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: t,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const ju = E({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...Wu()
}, "VOverlay-activator");
function Yu(e, n) {
  let {
    isActive: t,
    isTop: a
  } = n;
  const l = fe("useActivator"), i = H();
  let o = !1, r = !1, u = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), f = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: m,
    runCloseDelay: g
  } = zu(e, (x) => {
    x === (e.openOnHover && o || c.value && r) && !(e.openOnHover && t.value && !a.value) && (t.value !== x && (u = !0), t.value = x);
  }), d = H(), y = {
    onClick: (x) => {
      x.stopPropagation(), i.value = x.currentTarget || x.target, t.value || (d.value = [x.clientX, x.clientY]), t.value = !t.value;
    },
    onMouseenter: (x) => {
      var $;
      ($ = x.sourceCapabilities) != null && $.firesTouchEvents || (o = !0, i.value = x.currentTarget || x.target, m());
    },
    onMouseleave: (x) => {
      o = !1, g();
    },
    onFocus: (x) => {
      Wl(x.target, ":focus-visible") !== !1 && (r = !0, x.stopPropagation(), i.value = x.currentTarget || x.target, m());
    },
    onBlur: (x) => {
      r = !1, x.stopPropagation(), g();
    }
  }, v = h(() => {
    const x = {};
    return f.value && (x.onClick = y.onClick), e.openOnHover && (x.onMouseenter = y.onMouseenter, x.onMouseleave = y.onMouseleave), c.value && (x.onFocus = y.onFocus, x.onBlur = y.onBlur), x;
  }), b = h(() => {
    const x = {};
    if (e.openOnHover && (x.onMouseenter = () => {
      o = !0, m();
    }, x.onMouseleave = () => {
      o = !1, g();
    }), c.value && (x.onFocusin = () => {
      r = !0, m();
    }, x.onFocusout = () => {
      r = !1, g();
    }), e.closeOnContentClick) {
      const $ = ae(jn, null);
      x.onClick = () => {
        t.value = !1, $ == null || $.closeParents();
      };
    }
    return x;
  }), S = h(() => {
    const x = {};
    return e.openOnHover && (x.onMouseenter = () => {
      u && (o = !0, u = !1, m());
    }, x.onMouseleave = () => {
      o = !1, g();
    }), x;
  });
  q(a, (x) => {
    x && (e.openOnHover && !o && (!c.value || !r) || c.value && !r && (!e.openOnHover || !o)) && (t.value = !1);
  }), q(t, (x) => {
    x || setTimeout(() => {
      d.value = void 0;
    });
  }, {
    flush: "post"
  });
  const k = tn();
  Me(() => {
    k.value && he(() => {
      i.value = k.el;
    });
  });
  const w = tn(), V = h(() => e.target === "cursor" && d.value ? d.value : w.value ? w.el : Ni(e.target, l) || i.value), P = h(() => Array.isArray(V.value) ? void 0 : V.value);
  let _;
  return q(() => !!e.activator, (x) => {
    x && Ce ? (_ = Qn(), _.run(() => {
      Gu(e, l, {
        activatorEl: i,
        activatorEvents: v
      });
    })) : _ && _.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ie(() => {
    _ == null || _.stop();
  }), {
    activatorEl: i,
    activatorRef: k,
    target: V,
    targetEl: P,
    targetRef: w,
    activatorEvents: v,
    contentEvents: b,
    scrimEvents: S
  };
}
function Gu(e, n, t) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = t;
  q(() => e.activator, (u, c) => {
    if (c && u !== c) {
      const f = r(c);
      f && o(f);
    }
    u && he(() => i());
  }, {
    immediate: !0
  }), q(() => e.activatorProps, () => {
    i();
  }), Ie(() => {
    o();
  });
  function i() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Qo(u, z(l.value, c));
  }
  function o() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    u && Zo(u, z(l.value, c));
  }
  function r() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Ni(u, n);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Ni(e, n) {
  var a, l;
  if (!e) return;
  let t;
  if (e === "parent") {
    let i = (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else typeof e == "string" ? t = document.querySelector(e) : "$el" in e ? t = e.$el : t = e;
  return t;
}
function Uu() {
  if (!Ce) return Y(!1);
  const {
    ssr: e
  } = ma();
  if (e) {
    const n = Y(!1);
    return Ye(() => {
      n.value = !0;
    }), n;
  } else
    return Y(!0);
}
const ha = E({
  eager: Boolean
}, "lazy");
function ba(e, n) {
  const t = Y(!1), a = h(() => t.value || e.eager || n.value);
  q(n, () => t.value = !0);
  function l() {
    e.eager || (t.value = !1);
  }
  return {
    isBooted: t,
    hasContent: a,
    onAfterLeave: l
  };
}
function bn() {
  const n = fe("useScopeId").vnode.scopeId;
  return {
    scopeId: n ? {
      [n]: ""
    } : void 0
  };
}
const hl = Symbol.for("vuetify:stack"), St = pt([]);
function qu(e, n, t) {
  const a = fe("useStack"), l = !t, i = ae(hl, void 0), o = pt({
    activeChildren: /* @__PURE__ */ new Set()
  });
  we(hl, o);
  const r = Y(+n.value);
  tt(e, () => {
    var m;
    const f = (m = St.at(-1)) == null ? void 0 : m[1];
    r.value = f ? f + 10 : +n.value, l && St.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), Ie(() => {
      if (l) {
        const g = Se(St).findIndex((d) => d[0] === a.uid);
        St.splice(g, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const u = Y(!0);
  l && Me(() => {
    var m;
    const f = ((m = St.at(-1)) == null ? void 0 : m[0]) === a.uid;
    setTimeout(() => u.value = f);
  });
  const c = h(() => !o.activeChildren.size);
  return {
    globalTop: Zn(u),
    localTop: c,
    stackStyles: h(() => ({
      zIndex: r.value
    }))
  };
}
function Ku(e) {
  return {
    teleportTarget: h(() => {
      const t = e();
      if (t === !0 || !Ce) return;
      const a = t === !1 ? document.body : typeof t == "string" ? document.querySelector(t) : t;
      if (a == null) {
        fn(`Unable to locate target ${t}`);
        return;
      }
      let l = a.querySelector(":scope > .v-overlay-container");
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Xu() {
  return !0;
}
function Fi(e, n, t) {
  if (!e || Ri(e, t) === !1) return !1;
  const a = Ul(n);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target) return !1;
  const l = (typeof t.value == "object" && t.value.include || (() => []))();
  return l.push(n), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Ri(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Xu)(e);
}
function Qu(e, n, t) {
  const a = typeof t.value == "function" ? t.value : t.value.handler;
  n._clickOutside.lastMousedownWasOutside && Fi(e, n, t) && setTimeout(() => {
    Ri(e, t) && a && a(e);
  }, 0);
}
function bl(e, n) {
  const t = Ul(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Hi = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, n) {
    const t = (l) => Qu(l, e, n), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = Fi(l, e, n);
    };
    bl(e, (l) => {
      l.addEventListener("click", t, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[n.instance.$.uid] = {
      onClick: t,
      onMousedown: a
    };
  },
  unmounted(e, n) {
    e._clickOutside && (bl(e, (t) => {
      var i;
      if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid])) return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[n.instance.$.uid];
      t.removeEventListener("click", a, !0), t.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[n.instance.$.uid]);
  }
};
function Zu(e) {
  const {
    modelValue: n,
    color: t,
    ...a
  } = e;
  return s(Je, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && s("div", z({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const kn = E({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...ju(),
  ...Q(),
  ...at(),
  ...ha(),
  ...Bu(),
  ...Lu(),
  ...re(),
  ...Wt()
}, "VOverlay"), gt = L()({
  name: "VOverlay",
  directives: {
    ClickOutside: Hi
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...kn()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterEnter: () => !0,
    afterLeave: () => !0
  },
  setup(e, n) {
    let {
      slots: t,
      attrs: a,
      emit: l
    } = n;
    const i = J(e, "modelValue"), o = h({
      get: () => i.value,
      set: (X) => {
        X && e.disabled || (i.value = X);
      }
    }), {
      themeClasses: r
    } = me(e), {
      rtlClasses: u,
      isRtl: c
    } = Ge(), {
      hasContent: f,
      onAfterLeave: m
    } = ba(e, o), g = ke(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: d,
      localTop: y,
      stackStyles: v
    } = qu(o, F(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: b,
      activatorRef: S,
      target: k,
      targetEl: w,
      targetRef: V,
      activatorEvents: P,
      contentEvents: _,
      scrimEvents: x
    } = Yu(e, {
      isActive: o,
      isTop: y
    }), {
      teleportTarget: $
    } = Ku(() => {
      var Ve;
      const X = e.attach || e.contained;
      if (X) return X;
      const ie = (Ve = b == null ? void 0 : b.value) == null ? void 0 : Ve.getRootNode();
      return ie instanceof ShadowRoot ? ie : !1;
    }), {
      dimensionStyles: I
    } = lt(e), D = Uu(), {
      scopeId: O
    } = bn();
    q(() => e.disabled, (X) => {
      X && (o.value = !1);
    });
    const C = H(), T = H(), B = H(), {
      contentStyles: M,
      updateLocation: W
    } = pu(e, {
      isRtl: c,
      contentEl: B,
      target: k,
      isActive: o
    });
    Nu(e, {
      root: C,
      contentEl: B,
      targetEl: w,
      isActive: o,
      updateLocation: W
    });
    function K(X) {
      l("click:outside", X), e.persistent ? G() : o.value = !1;
    }
    function p(X) {
      return o.value && d.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!e.scrim || X.target === T.value);
    }
    Ce && q(o, (X) => {
      X ? window.addEventListener("keydown", j) : window.removeEventListener("keydown", j);
    }, {
      immediate: !0
    }), He(() => {
      Ce && window.removeEventListener("keydown", j);
    });
    function j(X) {
      var ie, Ve;
      X.key === "Escape" && d.value && (e.persistent ? G() : (o.value = !1, (ie = B.value) != null && ie.contains(document.activeElement) && ((Ve = b.value) == null || Ve.focus())));
    }
    const A = Yr();
    tt(() => e.closeOnBack, () => {
      Gr(A, (X) => {
        d.value && o.value ? (X(!1), e.persistent ? G() : o.value = !1) : X();
      });
    });
    const N = H();
    q(() => o.value && (e.absolute || e.contained) && $.value == null, (X) => {
      if (X) {
        const ie = br(C.value);
        ie && ie !== document.scrollingElement && (N.value = ie.scrollTop);
      }
    });
    function G() {
      e.noClickAnimation || B.value && dt(B.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: an
      });
    }
    function ue() {
      l("afterEnter");
    }
    function ye() {
      m(), l("afterLeave");
    }
    return R(() => {
      var X;
      return s(ee, null, [(X = t.activator) == null ? void 0 : X.call(t, {
        isActive: o.value,
        targetRef: V,
        props: z({
          ref: S
        }, P.value, e.activatorProps)
      }), D.value && f.value && s(No, {
        disabled: !$.value,
        to: $.value
      }, {
        default: () => [s("div", z({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": o.value,
            "v-overlay--contained": e.contained
          }, r.value, u.value, e.class],
          style: [v.value, {
            "--v-overlay-opacity": e.opacity,
            top: U(N.value)
          }, e.style],
          ref: C
        }, O, a), [s(Zu, z({
          color: g,
          modelValue: o.value && !!e.scrim,
          ref: T
        }, x.value), null), s(pe, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: k.value,
          onAfterEnter: ue,
          onAfterLeave: ye
        }, {
          default: () => {
            var ie;
            return [ve(s("div", z({
              ref: B,
              class: ["v-overlay__content", e.contentClass],
              style: [I.value, M.value]
            }, _.value, e.contentProps), [(ie = t.default) == null ? void 0 : ie.call(t, {
              isActive: o
            })]), [[We, o.value], [$e("click-outside"), {
              handler: K,
              closeConditional: p,
              include: () => [b.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: b,
      scrimEl: T,
      target: k,
      animateClick: G,
      contentEl: B,
      globalTop: d,
      localTop: y,
      updateLocation: W
    };
  }
}), An = Symbol("Forwarded refs");
function En(e, n) {
  let t = e;
  for (; t; ) {
    const a = Reflect.getOwnPropertyDescriptor(t, n);
    if (a) return a;
    t = Object.getPrototypeOf(t);
  }
}
function Sn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    t[a - 1] = arguments[a];
  return e[An] = t, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of t)
          if (o.value && Reflect.has(o.value, i)) {
            const r = Reflect.get(o.value, i);
            return typeof r == "function" ? r.bind(o.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const o of t)
        if (o.value && Reflect.has(o.value, i))
          return !0;
      return !1;
    },
    set(l, i, o) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, o);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__")) return !1;
      for (const r of t)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, o);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const o = Reflect.getOwnPropertyDescriptor(l, i);
      if (o) return o;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const u of t) {
          if (!u.value) continue;
          const c = En(u.value, i) ?? ("_" in u.value ? En((r = u.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c) return c;
        }
        for (const u of t) {
          const c = u.value && u.value[An];
          if (!c) continue;
          const f = c.slice();
          for (; f.length; ) {
            const m = f.shift(), g = En(m.value, i);
            if (g) return g;
            const d = m.value && m.value[An];
            d && f.push(...d);
          }
        }
      }
    }
  });
}
const Ju = E({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...oe(kn({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: lu
    }
  }), ["absolute"])
}, "VMenu"), es = L()({
  name: "VMenu",
  props: Ju(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = J(e, "modelValue"), {
      scopeId: l
    } = bn(), i = Ne(), o = h(() => e.id || `v-menu-${i}`), r = H(), u = ae(jn, null), c = Y(0);
    we(jn, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents(v) {
        setTimeout(() => {
          !c.value && !e.persistent && (v == null || v && !Ko(v, r.value.contentEl)) && (a.value = !1, u == null || u.closeParents());
        }, 40);
      }
    });
    async function f(v) {
      var k, w, V;
      const b = v.relatedTarget, S = v.target;
      await he(), a.value && b !== S && ((k = r.value) != null && k.contentEl) && // We're the topmost menu
      ((w = r.value) != null && w.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(S) && // It isn't inside the menu body
      !r.value.contentEl.contains(S) && ((V = Jt(r.value.contentEl)[0]) == null || V.focus());
    }
    q(a, (v) => {
      v ? (u == null || u.register(), document.addEventListener("focusin", f, {
        once: !0
      })) : (u == null || u.unregister(), document.removeEventListener("focusin", f));
    });
    function m(v) {
      u == null || u.closeParents(v);
    }
    function g(v) {
      var b, S, k;
      if (!e.disabled)
        if (v.key === "Tab" || v.key === "Enter" && !e.closeOnContentClick) {
          if (v.key === "Enter" && (v.target instanceof HTMLTextAreaElement || v.target instanceof HTMLInputElement && v.target.closest("form"))) return;
          v.key === "Enter" && v.preventDefault(), Hl(Jt((b = r.value) == null ? void 0 : b.contentEl, !1), v.shiftKey ? "prev" : "next", (V) => V.tabIndex >= 0) || (a.value = !1, (k = (S = r.value) == null ? void 0 : S.activatorEl) == null || k.focus());
        } else ["Enter", " "].includes(v.key) && e.closeOnContentClick && (a.value = !1, u == null || u.closeParents());
    }
    function d(v) {
      var S;
      if (e.disabled) return;
      const b = (S = r.value) == null ? void 0 : S.contentEl;
      b && a.value ? v.key === "ArrowDown" ? (v.preventDefault(), en(b, "next")) : v.key === "ArrowUp" && (v.preventDefault(), en(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(v.key) && (a.value = !0, v.preventDefault(), setTimeout(() => setTimeout(() => d(v))));
    }
    const y = h(() => z({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": o.value,
      onKeydown: d
    }, e.activatorProps));
    return R(() => {
      const v = gt.filterProps(e);
      return s(gt, z({
        ref: r,
        id: o.value,
        class: ["v-menu", e.class],
        style: e.style
      }, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (b) => a.value = b,
        absolute: !0,
        activatorProps: y.value,
        "onClick:outside": m,
        onKeydown: g
      }, l), {
        activator: t.activator,
        default: function() {
          for (var b = arguments.length, S = new Array(b), k = 0; k < b; k++)
            S[k] = arguments[k];
          return s(ne, {
            root: "VMenu"
          }, {
            default: () => {
              var w;
              return [(w = t.default) == null ? void 0 : w.call(t, ...S)];
            }
          });
        }
      });
    }), Sn({
      id: o,
      ΨopenChildren: c
    }, r);
  }
}), ts = E({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...Q(),
  ...Wt({
    transition: {
      component: gi
    }
  })
}, "VCounter"), ns = L()({
  name: "VCounter",
  functional: !0,
  props: ts(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = h(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return R(() => s(pe, {
      transition: e.transition
    }, {
      default: () => [ve(s("div", {
        class: ["v-counter", {
          "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
        }, e.class],
        style: e.style
      }, [t.default ? t.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[We, e.active]])]
    })), {};
  }
}), as = E({
  text: String,
  onClick: be(),
  ...Q(),
  ...re()
}, "VLabel"), Wi = L()({
  name: "VLabel",
  props: as(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      var a;
      return s("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = t.default) == null ? void 0 : a.call(t)]);
    }), {};
  }
}), ls = E({
  floating: Boolean,
  ...Q()
}, "VFieldLabel"), Gt = L()({
  name: "VFieldLabel",
  props: ls(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => s(Wi, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, t)), {};
  }
});
function zi(e) {
  const {
    t: n
  } = Ae();
  function t(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], o = e[`onClick:${l}`], r = o && i ? n(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return s(de, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: o
    }, null);
  }
  return {
    InputIcon: t
  };
}
const ka = E({
  focused: Boolean,
  "onUpdate:focused": be()
}, "focus");
function Sa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le();
  const t = J(e, "focused"), a = h(() => ({
    [`${n}--focused`]: t.value
  }));
  function l() {
    t.value = !0;
  }
  function i() {
    t.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: t,
    focus: l,
    blur: i
  };
}
const is = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ji = E({
  appendInnerIcon: Z,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: Z,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: Z,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => is.includes(e)
  },
  "onClick:clear": be(),
  "onClick:appendInner": be(),
  "onClick:prependInner": be(),
  ...Q(),
  ...ti(),
  ...Ee(),
  ...re()
}, "VField"), Yi = L()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...ka(),
    ...ji()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const {
      themeClasses: i
    } = me(e), {
      loaderClasses: o
    } = ni(e), {
      focusClasses: r,
      isFocused: u,
      focus: c,
      blur: f
    } = Sa(e), {
      InputIcon: m
    } = zi(e), {
      roundedClasses: g
    } = Te(e), {
      rtlClasses: d
    } = Ge(), y = h(() => e.dirty || e.active), v = h(() => !e.singleLine && !!(e.label || l.label)), b = Ne(), S = h(() => e.id || `input-${b}`), k = h(() => `${S.value}-messages`), w = H(), V = H(), P = H(), _ = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: x,
      backgroundColorStyles: $
    } = ke(F(e, "bgColor")), {
      textColorClasses: I,
      textColorStyles: D
    } = De(h(() => e.error || e.disabled ? void 0 : y.value && u.value ? e.color : e.baseColor));
    q(y, (B) => {
      if (v.value) {
        const M = w.value.$el, W = V.value.$el;
        requestAnimationFrame(() => {
          const K = ia(M), p = W.getBoundingClientRect(), j = p.x - K.x, A = p.y - K.y - (K.height / 2 - p.height / 2), N = p.width / 0.75, G = Math.abs(N - K.width) > 1 ? {
            maxWidth: U(N)
          } : void 0, ue = getComputedStyle(M), ye = getComputedStyle(W), X = parseFloat(ue.transitionDuration) * 1e3 || 150, ie = parseFloat(ye.getPropertyValue("--v-field-label-scale")), Ve = ye.getPropertyValue("color");
          M.style.visibility = "visible", W.style.visibility = "hidden", dt(M, {
            transform: `translate(${j}px, ${A}px) scale(${ie})`,
            color: Ve,
            ...G
          }, {
            duration: X,
            easing: an,
            direction: B ? "normal" : "reverse"
          }).finished.then(() => {
            M.style.removeProperty("visibility"), W.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const O = h(() => ({
      isActive: y,
      isFocused: u,
      controlRef: P,
      blur: f,
      focus: c
    }));
    function C(B) {
      B.target !== document.activeElement && B.preventDefault();
    }
    function T(B) {
      var M;
      B.key !== "Enter" && B.key !== " " || (B.preventDefault(), B.stopPropagation(), (M = e["onClick:clear"]) == null || M.call(e, new MouseEvent("click")));
    }
    return R(() => {
      var j, A, N;
      const B = e.variant === "outlined", M = !!(l["prepend-inner"] || e.prependInnerIcon), W = !!(e.clearable || l.clear), K = !!(l["append-inner"] || e.appendInnerIcon || W), p = () => l.label ? l.label({
        ...O.value,
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label;
      return s("div", z({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": K,
          "v-field--center-affix": e.centerAffix ?? !_.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": M,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !p(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, x.value, r.value, o.value, g.value, d.value, e.class],
        style: [$.value, e.style],
        onClick: C
      }, t), [s("div", {
        class: "v-field__overlay"
      }, null), s(zr, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), M && s("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && s(m, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (j = l["prepend-inner"]) == null ? void 0 : j.call(l, O.value)]), s("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && v.value && s(Gt, {
        key: "floating-label",
        ref: V,
        class: [I.value],
        floating: !0,
        for: S.value,
        style: D.value
      }, {
        default: () => [p()]
      }), s(Gt, {
        ref: w,
        for: S.value
      }, {
        default: () => [p()]
      }), (A = l.default) == null ? void 0 : A.call(l, {
        ...O.value,
        props: {
          id: S.value,
          class: "v-field__input",
          "aria-describedby": k.value
        },
        focus: c,
        blur: f
      })]), W && s(hi, {
        key: "clear"
      }, {
        default: () => [ve(s("div", {
          class: "v-field__clearable",
          onMousedown: (G) => {
            G.preventDefault(), G.stopPropagation();
          }
        }, [s(ne, {
          defaults: {
            VIcon: {
              icon: e.clearIcon
            }
          }
        }, {
          default: () => [l.clear ? l.clear({
            ...O.value,
            props: {
              onKeydown: T,
              onFocus: c,
              onBlur: f,
              onClick: e["onClick:clear"]
            }
          }) : s(m, {
            name: "clear",
            onKeydown: T,
            onFocus: c,
            onBlur: f
          }, null)]
        })]), [[We, e.dirty]])]
      }), K && s("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(N = l["append-inner"]) == null ? void 0 : N.call(l, O.value), e.appendInnerIcon && s(m, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), s("div", {
        class: ["v-field__outline", I.value],
        style: D.value
      }, [B && s(ee, null, [s("div", {
        class: "v-field__outline__start"
      }, null), v.value && s("div", {
        class: "v-field__outline__notch"
      }, [s(Gt, {
        ref: V,
        floating: !0,
        for: S.value
      }, {
        default: () => [p()]
      })]), s("div", {
        class: "v-field__outline__end"
      }, null)]), _.value && v.value && s(Gt, {
        ref: V,
        floating: !0,
        for: S.value
      }, {
        default: () => [p()]
      })])]);
    }), {
      controlRef: P
    };
  }
});
function os(e) {
  const n = Object.keys(Yi.props).filter((t) => !aa(t) && t !== "class" && t !== "style");
  return na(e, n);
}
const rs = E({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...Q(),
  ...Wt({
    transition: {
      component: gi,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), us = L()({
  name: "VMessages",
  props: rs(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = h(() => ge(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = De(h(() => e.color));
    return R(() => s(pe, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((o, r) => s("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [t.message ? t.message({
        message: o
      }) : o]))]
    })), {};
  }
}), ss = Symbol.for("vuetify:form");
function Gi() {
  return ae(ss, null);
}
const cs = E({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...ka()
}, "validation");
function ds(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le(), t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ne();
  const a = J(e, "modelValue"), l = h(() => e.validationValue === void 0 ? a.value : e.validationValue), i = Gi(), o = H([]), r = Y(!0), u = h(() => !!(ge(a.value === "" ? null : a.value).length || ge(l.value === "" ? null : l.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), f = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), m = h(() => {
    var P;
    return (P = e.errorMessages) != null && P.length ? ge(e.errorMessages).concat(o.value).slice(0, Math.max(0, +e.maxErrors)) : o.value;
  }), g = h(() => {
    let P = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    P === "lazy" && (P = "input lazy");
    const _ = new Set((P == null ? void 0 : P.split(" ")) ?? []);
    return {
      blur: _.has("blur") || _.has("input"),
      input: _.has("input"),
      submit: _.has("submit"),
      lazy: _.has("lazy")
    };
  }), d = h(() => {
    var P;
    return e.error || (P = e.errorMessages) != null && P.length ? !1 : e.rules.length ? r.value ? o.value.length || g.value.lazy ? null : !0 : !o.value.length : !0;
  }), y = Y(!1), v = h(() => ({
    [`${n}--error`]: d.value === !1,
    [`${n}--dirty`]: u.value,
    [`${n}--disabled`]: c.value,
    [`${n}--readonly`]: f.value
  })), b = fe("validation"), S = h(() => e.name ?? Pe(t));
  pl(() => {
    i == null || i.register({
      id: S.value,
      vm: b,
      validate: V,
      reset: k,
      resetValidation: w
    });
  }), He(() => {
    i == null || i.unregister(S.value);
  }), Ye(async () => {
    g.value.lazy || await V(!0), i == null || i.update(S.value, d.value, m.value);
  }), tt(() => g.value.input, () => {
    q(l, () => {
      if (l.value != null)
        V();
      else if (e.focused) {
        const P = q(() => e.focused, (_) => {
          _ || V(), P();
        });
      }
    });
  }), tt(() => g.value.blur, () => {
    q(() => e.focused, (P) => {
      P || V();
    });
  }), q([d, m], () => {
    i == null || i.update(S.value, d.value, m.value);
  });
  async function k() {
    a.value = null, await he(), await w();
  }
  async function w() {
    r.value = !0, g.value.lazy ? o.value = [] : await V(!0);
  }
  async function V() {
    let P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const _ = [];
    y.value = !0;
    for (const x of e.rules) {
      if (_.length >= +(e.maxErrors ?? 1))
        break;
      const I = await (typeof x == "function" ? x : () => x)(l.value);
      if (I !== !0) {
        if (I !== !1 && typeof I != "string") {
          console.warn(`${I} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        _.push(I || "");
      }
    }
    return o.value = _, y.value = !1, r.value = P, o.value;
  }
  return {
    errorMessages: m,
    isDirty: u,
    isDisabled: c,
    isReadonly: f,
    isPristine: r,
    isValid: d,
    isValidating: y,
    reset: k,
    resetValidation: w,
    validate: V,
    validationClasses: v
  };
}
const Ui = E({
  id: String,
  appendIcon: Z,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: Z,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": be(),
  "onClick:append": be(),
  ...Q(),
  ...Ue(),
  ...$l(at(), ["maxWidth", "minWidth", "width"]),
  ...re(),
  ...cs()
}, "VInput"), kl = L()({
  name: "VInput",
  props: {
    ...Ui()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const {
      densityClasses: i
    } = je(e), {
      dimensionStyles: o
    } = lt(e), {
      themeClasses: r
    } = me(e), {
      rtlClasses: u
    } = Ge(), {
      InputIcon: c
    } = zi(e), f = Ne(), m = h(() => e.id || `input-${f}`), g = h(() => `${m.value}-messages`), {
      errorMessages: d,
      isDirty: y,
      isDisabled: v,
      isReadonly: b,
      isPristine: S,
      isValid: k,
      isValidating: w,
      reset: V,
      resetValidation: P,
      validate: _,
      validationClasses: x
    } = ds(e, "v-input", m), $ = h(() => ({
      id: m,
      messagesId: g,
      isDirty: y,
      isDisabled: v,
      isReadonly: b,
      isPristine: S,
      isValid: k,
      isValidating: w,
      reset: V,
      resetValidation: P,
      validate: _
    })), I = h(() => {
      var D;
      return (D = e.errorMessages) != null && D.length || !S.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return R(() => {
      var B, M, W, K;
      const D = !!(a.prepend || e.prependIcon), O = !!(a.append || e.appendIcon), C = I.value.length > 0, T = !e.hideDetails || e.hideDetails === "auto" && (C || !!a.details);
      return s("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, r.value, u.value, x.value, e.class],
        style: [o.value, e.style]
      }, [D && s("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(B = a.prepend) == null ? void 0 : B.call(a, $.value), e.prependIcon && s(c, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && s("div", {
        class: "v-input__control"
      }, [(M = a.default) == null ? void 0 : M.call(a, $.value)]), O && s("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && s(c, {
        key: "append-icon",
        name: "append"
      }, null), (W = a.append) == null ? void 0 : W.call(a, $.value)]), T && s("div", {
        class: "v-input__details"
      }, [s(us, {
        id: g.value,
        active: C,
        messages: I.value
      }, {
        message: a.message
      }), (K = a.details) == null ? void 0 : K.call(a, $.value)])]);
    }), {
      reset: V,
      resetValidation: P,
      validate: _,
      isValid: k,
      errorMessages: d
    };
  }
}), vs = ["color", "file", "time", "date", "datetime-local", "week", "month"], Ca = E({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...Ui(),
  ...ji()
}, "VTextField"), un = L()({
  name: "VTextField",
  directives: {
    Intersect: fa
  },
  inheritAttrs: !1,
  props: Ca(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = J(e, "modelValue"), {
      isFocused: o,
      focus: r,
      blur: u
    } = Sa(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), f = h(() => {
      if (t.maxlength) return t.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), m = h(() => ["plain", "underlined"].includes(e.variant));
    function g(_, x) {
      var $, I;
      !e.autofocus || !_ || (I = ($ = x[0].target) == null ? void 0 : $.focus) == null || I.call($);
    }
    const d = H(), y = H(), v = H(), b = h(() => vs.includes(e.type) || e.persistentPlaceholder || o.value || e.active);
    function S() {
      var _;
      v.value !== document.activeElement && ((_ = v.value) == null || _.focus()), o.value || r();
    }
    function k(_) {
      a("mousedown:control", _), _.target !== v.value && (S(), _.preventDefault());
    }
    function w(_) {
      S(), a("click:control", _);
    }
    function V(_) {
      _.stopPropagation(), S(), he(() => {
        i.value = null, Uo(e["onClick:clear"], _);
      });
    }
    function P(_) {
      var $;
      const x = _.target;
      if (i.value = x.value, ($ = e.modelModifiers) != null && $.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const I = [x.selectionStart, x.selectionEnd];
        he(() => {
          x.selectionStart = I[0], x.selectionEnd = I[1];
        });
      }
    }
    return R(() => {
      const _ = !!(l.counter || e.counter !== !1 && e.counter != null), x = !!(_ || l.details), [$, I] = Nl(t), {
        modelValue: D,
        ...O
      } = kl.filterProps(e), C = os(e);
      return s(kl, z({
        ref: d,
        modelValue: i.value,
        "onUpdate:modelValue": (T) => i.value = T,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": m.value
        }, e.class],
        style: e.style
      }, $, O, {
        centerAffix: !m.value,
        focused: o.value
      }), {
        ...l,
        default: (T) => {
          let {
            id: B,
            isDisabled: M,
            isDirty: W,
            isReadonly: K,
            isValid: p
          } = T;
          return s(Yi, z({
            ref: y,
            onMousedown: k,
            onClick: w,
            "onClick:clear": V,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, C, {
            id: B.value,
            active: b.value || W.value,
            dirty: W.value || e.dirty,
            disabled: M.value,
            focused: o.value,
            error: p.value === !1
          }), {
            ...l,
            default: (j) => {
              let {
                props: {
                  class: A,
                  ...N
                }
              } = j;
              const G = ve(s("input", z({
                ref: v,
                value: i.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: K.value,
                disabled: M.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: S,
                onBlur: u
              }, N, I), null), [[$e("intersect"), {
                handler: g
              }, null, {
                once: !0
              }]]);
              return s(ee, null, [e.prefix && s("span", {
                class: "v-text-field__prefix"
              }, [s("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? s("div", {
                class: A,
                "data-no-activator": ""
              }, [l.default(), G]) : Fo(G, {
                class: A
              }), e.suffix && s("span", {
                class: "v-text-field__suffix"
              }, [s("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: x ? (T) => {
          var B;
          return s(ee, null, [(B = l.details) == null ? void 0 : B.call(l, T), _ && s(ee, null, [s("span", null, null), s(ns, {
            active: e.persistentCounter || o.value,
            value: c.value,
            max: f.value,
            disabled: e.disabled
          }, l.counter)])]);
        } : void 0
      });
    }), Sn({}, d, y, v);
  }
}), fs = E({
  hideActions: Boolean,
  ...ka(),
  ...Ei(),
  ...Ca({
    placeholder: "mm/dd/yyyy",
    prependIcon: "$calendar"
  }),
  ...oe(Oi({
    weeksInMonth: "dynamic",
    hideHeader: !0
  }), ["active"])
}, "VDateInput"), ms = L()({
  name: "VDateInput",
  props: fs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      t: a
    } = Ae(), l = Fe(), {
      isFocused: i,
      focus: o,
      blur: r
    } = Sa(e), u = J(e, "modelValue", e.multiple ? [] : null), c = Y(!1), f = h(() => {
      const v = ge(u.value);
      if (!v.length) return null;
      if (e.multiple === !0)
        return a("$vuetify.datePicker.itemsSelected", v.length);
      if (e.multiple === "range") {
        const b = v[0], S = v[v.length - 1];
        return l.isValid(b) && l.isValid(S) ? `${l.format(b, "keyboardDate")} - ${l.format(S, "keyboardDate")}` : "";
      }
      return l.isValid(u.value) ? l.format(u.value, "keyboardDate") : "";
    }), m = h(() => !e.disabled && !e.readonly);
    function g(v) {
      if (v.key !== "Enter") return;
      if (!c.value || !i.value) {
        c.value = !0;
        return;
      }
      const b = v.target;
      u.value = l.date(b.value);
    }
    function d(v) {
      v.preventDefault(), v.stopPropagation(), c.value = !0;
    }
    function y() {
      c.value = !1;
    }
    R(() => {
      const v = rl.filterProps(e), b = fl.filterProps(oe(e, ["active"])), S = un.filterProps(e);
      return s(un, z(S, {
        class: e.class,
        style: e.style,
        modelValue: f.value,
        onKeydown: m.value ? g : void 0,
        focused: c.value || i.value,
        onFocus: o,
        onBlur: r,
        "onClick:control": m.value ? d : void 0,
        "onClick:prepend": m.value ? d : void 0
      }), {
        default: () => {
          var k;
          return [s(es, {
            modelValue: c.value,
            "onUpdate:modelValue": (w) => c.value = w,
            activator: "parent",
            "min-width": "0",
            closeOnContentClick: !1,
            openOnClick: !1
          }, {
            default: () => [s(rl, z(v, {
              modelValue: u.value,
              "onUpdate:modelValue": (w) => u.value = w,
              onSave: y
            }), {
              default: (w) => {
                let {
                  actions: V,
                  model: P
                } = w;
                return s(fl, z(b, {
                  modelValue: e.hideActions ? u.value : P.value,
                  "onUpdate:modelValue": (_) => {
                    e.hideActions ? (u.value = _, e.multiple || (c.value = !1)) : P.value = _;
                  },
                  onMousedown: (_) => _.preventDefault()
                }), {
                  actions: e.hideActions ? void 0 : () => V
                });
              }
            })]
          }), (k = t.default) == null ? void 0 : k.call(t)];
        }
      });
    });
  }
}), gs = E({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...Q(),
  ...re()
}, "VDivider"), vt = L()({
  name: "VDivider",
  props: gs(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      themeClasses: l
    } = me(e), {
      textColorClasses: i,
      textColorStyles: o
    } = De(F(e, "color")), r = h(() => {
      const u = {};
      return e.length && (u[e.vertical ? "height" : "width"] = U(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = U(e.thickness)), u;
    });
    return R(() => {
      const u = s("hr", {
        class: [{
          "v-divider": !0,
          "v-divider--inset": e.inset,
          "v-divider--vertical": e.vertical
        }, l.value, i.value, e.class],
        style: [r.value, o.value, {
          "--v-border-opacity": e.opacity
        }, e.style],
        "aria-orientation": !t.role || t.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
        role: `${t.role || "separator"}`
      }, null);
      return a.default ? s("div", {
        class: ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": e.vertical,
          "v-divider__wrapper--inset": e.inset
        }]
      }, [u, s("div", {
        class: "v-divider__content"
      }, [a.default()]), u]) : u;
    }), {};
  }
}), ys = E({
  controlVariant: {
    type: String,
    default: "default"
  },
  inset: Boolean,
  hideInput: Boolean,
  min: {
    type: Number,
    default: -1 / 0
  },
  max: {
    type: Number,
    default: 1 / 0
  },
  step: {
    type: Number,
    default: 1
  },
  ...oe(Ca(), ["appendInnerIcon", "prependInnerIcon"])
}, "VNumberInput"), hs = L()({
  name: "VNumberInput",
  props: {
    ...ys()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      emit: a,
      slots: l
    } = n;
    const i = J(e, "modelValue"), o = h(() => pa(e.step)), r = h(() => i.value != null ? pa(i.value) : 0), u = Gi(), c = h(() => e.disabled || e.readonly || (u == null ? void 0 : u.isReadonly.value)), f = h(() => c.value ? !1 : i.value == null ? !0 : i.value + e.step <= e.max), m = h(() => c.value ? !1 : i.value == null ? !0 : i.value - e.step >= e.min);
    Me(() => {
      c.value || i.value != null && (i.value < e.min || i.value > e.max) && (i.value = et(i.value, e.min, e.max));
    });
    const g = h(() => e.hideInput ? "stacked" : e.controlVariant), d = h(() => g.value === "split" ? "$plus" : "$collapse"), y = h(() => g.value === "split" ? "$minus" : "$expand"), v = h(() => g.value === "split" ? "default" : "small"), b = h(() => g.value === "stacked" ? "auto" : "100%"), S = h(() => ({
      click: V
    })), k = h(() => ({
      click: P
    }));
    function w() {
      let I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
      if (c.value) return;
      if (i.value == null) {
        i.value = 0;
        return;
      }
      const D = Math.max(r.value, o.value);
      I ? f.value && (i.value = +(i.value + e.step).toFixed(D)) : m.value && (i.value = +(i.value - e.step).toFixed(D));
    }
    function V(I) {
      I.stopPropagation(), w();
    }
    function P(I) {
      I.stopPropagation(), w(!1);
    }
    function _(I) {
      if (!(["Enter", "ArrowLeft", "ArrowRight", "Backspace", "Delete", "Tab"].includes(I.key) || I.ctrlKey)) {
        if (["ArrowDown"].includes(I.key)) {
          I.preventDefault(), w(!1);
          return;
        }
        if (["ArrowUp"].includes(I.key)) {
          I.preventDefault(), w();
          return;
        }
        /^[0-9\-+.]+$/.test(I.key) || I.preventDefault();
      }
    }
    function x(I) {
      i.value = I ? +I : void 0;
    }
    function $(I) {
      I.stopPropagation();
    }
    R(() => {
      const {
        modelValue: I,
        ...D
      } = un.filterProps(e);
      function O() {
        return l.increment ? s(ne, {
          key: "increment-defaults",
          defaults: {
            VBtn: {
              disabled: !f.value,
              flat: !0,
              height: b.value,
              size: v.value,
              icon: d.value
            }
          }
        }, {
          default: () => [l.increment(S.value)]
        }) : s(te, {
          disabled: !f.value,
          flat: !0,
          key: "increment-btn",
          height: b.value,
          name: "increment-btn",
          icon: d.value,
          onClick: V,
          onMousedown: $,
          size: v.value,
          tabindex: "-1"
        }, null);
      }
      function C() {
        return l.decrement ? s(ne, {
          key: "decrement-defaults",
          defaults: {
            VBtn: {
              disabled: !m.value,
              flat: !0,
              height: b.value,
              size: v.value,
              icon: y.value
            }
          }
        }, {
          default: () => [l.decrement(k.value)]
        }) : s(te, {
          disabled: !m.value,
          flat: !0,
          key: "decrement-btn",
          height: b.value,
          name: "decrement-btn",
          icon: y.value,
          size: v.value,
          tabindex: "-1",
          onClick: P,
          onMousedown: $
        }, null);
      }
      function T() {
        return s("div", {
          class: "v-number-input__control"
        }, [C(), s(vt, {
          vertical: g.value !== "stacked"
        }, null), O()]);
      }
      function B() {
        return !e.hideInput && !e.inset ? s(vt, {
          vertical: !0
        }, null) : void 0;
      }
      const M = g.value === "split" ? s("div", {
        class: "v-number-input__control"
      }, [s(vt, {
        vertical: !0
      }, null), O()]) : e.reverse ? void 0 : s(ee, null, [B(), T()]), W = l["append-inner"] || M, K = g.value === "split" ? s("div", {
        class: "v-number-input__control"
      }, [C(), s(vt, {
        vertical: !0
      }, null)]) : e.reverse ? s(ee, null, [T(), B()]) : void 0, p = l["prepend-inner"] || K;
      return s(un, z({
        modelValue: i.value,
        "onUpdate:modelValue": x,
        onKeydown: _,
        class: ["v-number-input", {
          "v-number-input--default": g.value === "default",
          "v-number-input--hide-input": e.hideInput,
          "v-number-input--inset": e.inset,
          "v-number-input--reverse": e.reverse,
          "v-number-input--split": g.value === "split",
          "v-number-input--stacked": g.value === "stacked"
        }, e.class]
      }, D, {
        style: e.style,
        inputmode: "decimal"
      }), {
        ...l,
        "append-inner": W ? function() {
          var G;
          for (var j = arguments.length, A = new Array(j), N = 0; N < j; N++)
            A[N] = arguments[N];
          return s(ee, null, [(G = l["append-inner"]) == null ? void 0 : G.call(l, ...A), M]);
        } : void 0,
        "prepend-inner": p ? function() {
          var G;
          for (var j = arguments.length, A = new Array(j), N = 0; N < j; N++)
            A[N] = arguments[N];
          return s(ee, null, [K, (G = l["prepend-inner"]) == null ? void 0 : G.call(l, ...A)]);
        } : void 0
      });
    });
  }
}), wa = E({
  color: String,
  disabled: {
    type: [Boolean, String],
    default: !1
  },
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  }
}, "VStepperActions"), Yn = L()({
  name: "VStepperActions",
  props: wa(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ae();
    function i() {
      t("click:prev");
    }
    function o() {
      t("click:next");
    }
    return R(() => {
      const r = {
        onClick: i
      }, u = {
        onClick: o
      };
      return s("div", {
        class: "v-stepper-actions"
      }, [s(ne, {
        defaults: {
          VBtn: {
            disabled: ["prev", !0].includes(e.disabled),
            text: l(e.prevText),
            variant: "text"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.prev) == null ? void 0 : c.call(a, {
            props: r
          })) ?? s(te, r, null)];
        }
      }), s(ne, {
        defaults: {
          VBtn: {
            color: e.color,
            disabled: ["next", !0].includes(e.disabled),
            text: l(e.nextText),
            variant: "tonal"
          }
        }
      }, {
        default: () => {
          var c;
          return [((c = a.next) == null ? void 0 : c.call(a, {
            props: u
          })) ?? s(te, u, null)];
        }
      })]);
    }), {};
  }
}), bs = E({
  ...wa()
}, "VStepperActions"), qi = L()({
  name: "VStepperVerticalActions",
  props: bs(),
  emits: {
    "click:prev": () => !0,
    "click:next": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    function l() {
      t("click:prev");
    }
    function i() {
      t("click:next");
    }
    return R(() => {
      const o = Yn.filterProps(e);
      return s(Yn, z({
        class: "v-stepper-vertical-actions"
      }, o, {
        "onClick:prev": l,
        "onClick:next": i
      }), a);
    }), {};
  }
}), Tt = Symbol.for("vuetify:v-expansion-panel"), Ki = E({
  ...Q(),
  ...ha()
}, "VExpansionPanelText"), Sl = L()({
  name: "VExpansionPanelText",
  props: Ki(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(Tt);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");
    const {
      hasContent: l,
      onAfterLeave: i
    } = ba(e, a.isSelected);
    return R(() => s(yi, {
      onAfterLeave: i
    }, {
      default: () => {
        var o;
        return [ve(s("div", {
          class: ["v-expansion-panel-text", e.class],
          style: e.style
        }, [t.default && l.value && s("div", {
          class: "v-expansion-panel-text__wrapper"
        }, [(o = t.default) == null ? void 0 : o.call(t)])]), [[We, a.isSelected.value]])];
      }
    })), {};
  }
}), Xi = E({
  color: String,
  expandIcon: {
    type: Z,
    default: "$expand"
  },
  collapseIcon: {
    type: Z,
    default: "$collapse"
  },
  hideActions: Boolean,
  focusable: Boolean,
  static: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !1
  },
  readonly: Boolean,
  ...Q()
}, "VExpansionPanelTitle"), Cl = L()({
  name: "VExpansionPanelTitle",
  directives: {
    Ripple: ut
  },
  props: Xi(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(Tt);
    if (!a) throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = ke(e, "color"), o = h(() => ({
      collapseIcon: e.collapseIcon,
      disabled: a.disabled.value,
      expanded: a.isSelected.value,
      expandIcon: e.expandIcon,
      readonly: e.readonly
    })), r = h(() => a.isSelected.value ? e.collapseIcon : e.expandIcon);
    return R(() => {
      var u;
      return ve(s("button", {
        class: ["v-expansion-panel-title", {
          "v-expansion-panel-title--active": a.isSelected.value,
          "v-expansion-panel-title--focusable": e.focusable,
          "v-expansion-panel-title--static": e.static
        }, l.value, e.class],
        style: [i.value, e.style],
        type: "button",
        tabindex: a.disabled.value ? -1 : void 0,
        disabled: a.disabled.value,
        "aria-expanded": a.isSelected.value,
        onClick: e.readonly ? void 0 : a.toggle
      }, [s("span", {
        class: "v-expansion-panel-title__overlay"
      }, null), (u = t.default) == null ? void 0 : u.call(t, o.value), !e.hideActions && s(ne, {
        defaults: {
          VIcon: {
            icon: r.value
          }
        }
      }, {
        default: () => {
          var c;
          return [s("span", {
            class: "v-expansion-panel-title__icon"
          }, [((c = t.actions) == null ? void 0 : c.call(t, o.value)) ?? s(de, null, null)])];
        }
      })]), [[$e("ripple"), e.ripple]]);
    }), {};
  }
}), xa = E({
  title: String,
  text: String,
  bgColor: String,
  ...it(),
  ...Nt(),
  ...Ee(),
  ...ce(),
  ...Xi(),
  ...Ki()
}, "VExpansionPanel"), wl = L()({
  name: "VExpansionPanel",
  props: xa(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ft(e, Tt), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = ke(e, "bgColor"), {
      elevationClasses: o
    } = ot(e), {
      roundedClasses: r
    } = Te(e), u = h(() => (a == null ? void 0 : a.disabled.value) || e.disabled), c = h(() => a.group.items.value.reduce((g, d, y) => (a.group.selected.value.includes(d.id) && g.push(y), g), [])), f = h(() => {
      const g = a.group.items.value.findIndex((d) => d.id === a.id);
      return !a.isSelected.value && c.value.some((d) => d - g === 1);
    }), m = h(() => {
      const g = a.group.items.value.findIndex((d) => d.id === a.id);
      return !a.isSelected.value && c.value.some((d) => d - g === -1);
    });
    return we(Tt, a), R(() => {
      const g = !!(t.text || e.text), d = !!(t.title || e.title), y = Cl.filterProps(e), v = Sl.filterProps(e);
      return s(e.tag, {
        class: ["v-expansion-panel", {
          "v-expansion-panel--active": a.isSelected.value,
          "v-expansion-panel--before-active": f.value,
          "v-expansion-panel--after-active": m.value,
          "v-expansion-panel--disabled": u.value
        }, r.value, l.value, e.class],
        style: [i.value, e.style]
      }, {
        default: () => [s("div", {
          class: ["v-expansion-panel__shadow", ...o.value]
        }, null), s(ne, {
          defaults: {
            VExpansionPanelTitle: {
              ...y
            },
            VExpansionPanelText: {
              ...v
            }
          }
        }, {
          default: () => {
            var b;
            return [d && s(Cl, {
              key: "title"
            }, {
              default: () => [t.title ? t.title() : e.title]
            }), g && s(Sl, {
              key: "text"
            }, {
              default: () => [t.text ? t.text() : e.text]
            }), (b = t.default) == null ? void 0 : b.call(t)];
          }
        })]
      });
    }), {
      groupItem: a
    };
  }
}), Va = Symbol.for("vuetify:v-stepper"), Qi = E({
  color: String,
  title: String,
  subtitle: String,
  complete: Boolean,
  completeIcon: {
    type: String,
    default: "$complete"
  },
  editable: Boolean,
  editIcon: {
    type: String,
    default: "$edit"
  },
  error: Boolean,
  errorIcon: {
    type: String,
    default: "$error"
  },
  icon: String,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  rules: {
    type: Array,
    default: () => []
  }
}, "StepperItem"), ks = E({
  ...Qi(),
  ...Nt()
}, "VStepperItem"), Ss = L()({
  name: "VStepperItem",
  directives: {
    Ripple: ut
  },
  props: ks(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = Ft(e, Va, !0), l = h(() => (a == null ? void 0 : a.value.value) ?? e.value), i = h(() => e.rules.every((g) => g() === !0)), o = h(() => !e.disabled && e.editable), r = h(() => !e.disabled && e.editable), u = h(() => e.error || !i.value), c = h(() => e.complete || e.rules.length > 0 && i.value), f = h(() => u.value ? e.errorIcon : c.value ? e.completeIcon : a.isSelected.value && e.editable ? e.editIcon : e.icon), m = h(() => ({
      canEdit: r.value,
      hasError: u.value,
      hasCompleted: c.value,
      title: e.title,
      subtitle: e.subtitle,
      step: l.value,
      value: e.value
    }));
    return R(() => {
      var b, S, k;
      const g = (!a || a.isSelected.value || c.value || r.value) && !u.value && !e.disabled, d = !!(e.title != null || t.title), y = !!(e.subtitle != null || t.subtitle);
      function v() {
        a == null || a.toggle();
      }
      return ve(s("button", {
        class: ["v-stepper-item", {
          "v-stepper-item--complete": c.value,
          "v-stepper-item--disabled": e.disabled,
          "v-stepper-item--error": u.value
        }, a == null ? void 0 : a.selectedClass.value],
        disabled: !e.editable,
        onClick: v
      }, [o.value && rt(!0, "v-stepper-item"), s(mt, {
        key: "stepper-avatar",
        class: "v-stepper-item__avatar",
        color: g ? e.color : void 0,
        size: 24
      }, {
        default: () => {
          var w;
          return [((w = t.icon) == null ? void 0 : w.call(t, m.value)) ?? (f.value ? s(de, {
            icon: f.value
          }, null) : l.value)];
        }
      }), s("div", {
        class: "v-stepper-item__content"
      }, [d && s("div", {
        key: "title",
        class: "v-stepper-item__title"
      }, [((b = t.title) == null ? void 0 : b.call(t, m.value)) ?? e.title]), y && s("div", {
        key: "subtitle",
        class: "v-stepper-item__subtitle"
      }, [((S = t.subtitle) == null ? void 0 : S.call(t, m.value)) ?? e.subtitle]), (k = t.default) == null ? void 0 : k.call(t, m.value)])]), [[$e("ripple"), e.ripple && e.editable, null]]);
    }), {};
  }
}), Cs = E({
  hideActions: Boolean,
  ...Qi(),
  ...oe(xa({
    expandIcon: "",
    collapseIcon: ""
  }), ["hideActions"])
}, "VStepperVerticalItem"), Zi = L()({
  name: "VStepperVerticalItem",
  props: Cs(),
  emits: {
    "click:next": () => !0,
    "click:prev": () => !0,
    "click:finish": () => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = H(), i = h(() => isNaN(parseInt(e.value)) ? e.value : Number(e.value)), o = h(() => {
      var k;
      return (k = l.value) == null ? void 0 : k.groupItem;
    }), r = h(() => {
      var k;
      return ((k = o.value) == null ? void 0 : k.isSelected.value) ?? !1;
    }), u = h(() => r.value ? e.rules.every((k) => k() === !0) : null), c = h(() => !e.disabled && e.editable), f = h(() => e.error || r.value && !u.value), m = h(() => e.complete || e.rules.length > 0 && u.value === !0), g = h(() => {
      var k;
      return e.disabled ? e.disabled : (k = o.value) != null && k.isFirst.value ? "prev" : !1;
    }), d = h(() => {
      var k;
      return f.value ? e.errorIcon : m.value ? e.completeIcon : (k = o.value) != null && k.isSelected.value && e.editable ? e.editIcon : e.icon;
    }), y = h(() => ({
      canEdit: c.value,
      hasError: f.value,
      hasCompleted: m.value,
      title: e.title,
      subtitle: e.subtitle,
      step: i.value,
      value: e.value
    })), v = h(() => ({
      ...y.value,
      prev: S,
      next: b
    }));
    function b() {
      var k;
      t("click:next"), !((k = o.value) != null && k.isLast.value) && o.value.group.next();
    }
    function S() {
      t("click:prev"), o.value.group.prev();
    }
    return R(() => {
      var P;
      const k = (m.value || ((P = o.value) == null ? void 0 : P.isSelected.value)) && !f.value && !e.disabled, w = !e.hideActions || !!a.actions, V = wl.filterProps(e);
      return s(wl, z({
        _as: "VStepperVerticalItem",
        ref: l
      }, V, {
        class: ["v-stepper-vertical-item", {
          "v-stepper-vertical-item--complete": m.value,
          "v-stepper-vertical-item--disabled": e.disabled,
          "v-stepper-vertical-item--editable": c.value,
          "v-stepper-vertical-item--error": f.value
        }, e.class],
        readonly: !e.editable,
        style: e.style,
        color: "",
        "hide-actions": !1,
        value: i.value
      }), {
        title: () => {
          var _, x;
          return s(ee, null, [s(mt, {
            key: "stepper-avatar",
            class: "v-stepper-vertical-item__avatar",
            color: k ? e.color : void 0,
            size: 24,
            start: !0
          }, {
            default: () => {
              var $;
              return [(($ = a.icon) == null ? void 0 : $.call(a, y.value)) ?? (d.value ? s(de, {
                icon: d.value
              }, null) : i.value)];
            }
          }), s("div", null, [s("div", {
            class: "v-stepper-vertical-item__title"
          }, [((_ = a.title) == null ? void 0 : _.call(a, y.value)) ?? e.title]), s("div", {
            class: "v-stepper-vertical-item__subtitle"
          }, [((x = a.subtitle) == null ? void 0 : x.call(a, y.value)) ?? e.subtitle])])]);
        },
        text: () => {
          var _, x;
          return s(ee, null, [((_ = a.default) == null ? void 0 : _.call(a, y.value)) ?? e.text, w && s(ne, {
            defaults: {
              VStepperVerticalActions: {
                disabled: g.value,
                finish: (x = o.value) == null ? void 0 : x.isLast.value
              }
            }
          }, {
            default: () => {
              var $;
              return [(($ = a.actions) == null ? void 0 : $.call(a, v.value)) ?? s(qi, {
                "onClick:next": b,
                "onClick:prev": S
              }, {
                prev: a.prev ? () => {
                  var I;
                  return (I = a.prev) == null ? void 0 : I.call(a, v.value);
                } : void 0,
                next: a.next ? () => {
                  var I;
                  return (I = a.next) == null ? void 0 : I.call(a, v.value);
                } : void 0
              })];
            }
          })]);
        }
      });
    }), {};
  }
}), ws = ["default", "accordion", "inset", "popout"], Ji = E({
  flat: Boolean,
  ...Lt(),
  ...na(xa(), ["bgColor", "collapseIcon", "color", "eager", "elevation", "expandIcon", "focusable", "hideActions", "readonly", "ripple", "rounded", "tile", "static"]),
  ...re(),
  ...Q(),
  ...ce(),
  variant: {
    type: String,
    default: "default",
    validator: (e) => ws.includes(e)
  }
}, "VExpansionPanels"), xl = L()({
  name: "VExpansionPanels",
  props: Ji(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      next: a,
      prev: l
    } = kt(e, Tt), {
      themeClasses: i
    } = me(e), o = h(() => e.variant && `v-expansion-panels--variant-${e.variant}`);
    return ze({
      VExpansionPanel: {
        bgColor: F(e, "bgColor"),
        collapseIcon: F(e, "collapseIcon"),
        color: F(e, "color"),
        eager: F(e, "eager"),
        elevation: F(e, "elevation"),
        expandIcon: F(e, "expandIcon"),
        focusable: F(e, "focusable"),
        hideActions: F(e, "hideActions"),
        readonly: F(e, "readonly"),
        ripple: F(e, "ripple"),
        rounded: F(e, "rounded"),
        static: F(e, "static")
      }
    }), R(() => s(e.tag, {
      class: ["v-expansion-panels", {
        "v-expansion-panels--flat": e.flat,
        "v-expansion-panels--tile": e.tile
      }, i.value, o.value, e.class],
      style: e.style
    }, {
      default: () => {
        var r;
        return [(r = t.default) == null ? void 0 : r.call(t, {
          prev: l,
          next: a
        })];
      }
    })), {
      next: a,
      prev: l
    };
  }
}), xs = mn("v-stepper-header"), Vs = (e) => {
  const {
    touchstartX: n,
    touchendX: t,
    touchstartY: a,
    touchendY: l
  } = e, i = 0.5, o = 16;
  e.offsetX = t - n, e.offsetY = l - a, Math.abs(e.offsetY) < i * Math.abs(e.offsetX) && (e.left && t < n - o && e.left(e), e.right && t > n + o && e.right(e)), Math.abs(e.offsetX) < i * Math.abs(e.offsetY) && (e.up && l < a - o && e.up(e), e.down && l > a + o && e.down(e));
};
function _s(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchstartX = t.clientX, n.touchstartY = t.clientY, (a = n.start) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function Ps(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchendX = t.clientX, n.touchendY = t.clientY, (a = n.end) == null || a.call(n, {
    originalEvent: e,
    ...n
  }), Vs(n);
}
function Is(e, n) {
  var a;
  const t = e.changedTouches[0];
  n.touchmoveX = t.clientX, n.touchmoveY = t.clientY, (a = n.move) == null || a.call(n, {
    originalEvent: e,
    ...n
  });
}
function As() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const n = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: e.left,
    right: e.right,
    up: e.up,
    down: e.down,
    start: e.start,
    move: e.move,
    end: e.end
  };
  return {
    touchstart: (t) => _s(t, n),
    touchend: (t) => Ps(t, n),
    touchmove: (t) => Is(t, n)
  };
}
function Es(e, n) {
  var r;
  const t = n.value, a = t != null && t.parent ? e.parentElement : e, l = (t == null ? void 0 : t.options) ?? {
    passive: !0
  }, i = (r = n.instance) == null ? void 0 : r.$.uid;
  if (!a || !i) return;
  const o = As(n.value);
  a._touchHandlers = a._touchHandlers ?? /* @__PURE__ */ Object.create(null), a._touchHandlers[i] = o, Ol(o).forEach((u) => {
    a.addEventListener(u, o[u], l);
  });
}
function Ts(e, n) {
  var i, o;
  const t = (i = n.value) != null && i.parent ? e.parentElement : e, a = (o = n.instance) == null ? void 0 : o.$.uid;
  if (!(t != null && t._touchHandlers) || !a) return;
  const l = t._touchHandlers[a];
  Ol(l).forEach((r) => {
    t.removeEventListener(r, l[r]);
  }), delete t._touchHandlers[a];
}
const _a = {
  mounted: Es,
  unmounted: Ts
}, eo = Symbol.for("vuetify:v-window"), to = Symbol.for("vuetify:v-window-group"), no = E({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || e === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...Q(),
  ...ce(),
  ...re()
}, "VWindow"), Vl = L()({
  name: "VWindow",
  directives: {
    Touch: _a
  },
  props: no(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      themeClasses: a
    } = me(e), {
      isRtl: l
    } = Ge(), {
      t: i
    } = Ae(), o = kt(e, to), r = H(), u = h(() => l.value ? !e.reverse : e.reverse), c = Y(!1), f = h(() => {
      const V = e.direction === "vertical" ? "y" : "x", _ = (u.value ? !c.value : c.value) ? "-reverse" : "";
      return `v-window-${V}${_}-transition`;
    }), m = Y(0), g = H(void 0), d = h(() => o.items.value.findIndex((V) => o.selected.value.includes(V.id)));
    q(d, (V, P) => {
      const _ = o.items.value.length, x = _ - 1;
      _ <= 2 ? c.value = V < P : V === x && P === 0 ? c.value = !0 : V === 0 && P === x ? c.value = !1 : c.value = V < P;
    }), we(eo, {
      transition: f,
      isReversed: c,
      transitionCount: m,
      transitionHeight: g,
      rootRef: r
    });
    const y = h(() => e.continuous || d.value !== 0), v = h(() => e.continuous || d.value !== o.items.value.length - 1);
    function b() {
      y.value && o.prev();
    }
    function S() {
      v.value && o.next();
    }
    const k = h(() => {
      const V = [], P = {
        icon: l.value ? e.nextIcon : e.prevIcon,
        class: `v-window__${u.value ? "right" : "left"}`,
        onClick: o.prev,
        "aria-label": i("$vuetify.carousel.prev")
      };
      V.push(y.value ? t.prev ? t.prev({
        props: P
      }) : s(te, P, null) : s("div", null, null));
      const _ = {
        icon: l.value ? e.prevIcon : e.nextIcon,
        class: `v-window__${u.value ? "left" : "right"}`,
        onClick: o.next,
        "aria-label": i("$vuetify.carousel.next")
      };
      return V.push(v.value ? t.next ? t.next({
        props: _
      }) : s(te, _, null) : s("div", null, null)), V;
    }), w = h(() => e.touch === !1 ? e.touch : {
      ...{
        left: () => {
          u.value ? b() : S();
        },
        right: () => {
          u.value ? S() : b();
        },
        start: (P) => {
          let {
            originalEvent: _
          } = P;
          _.stopPropagation();
        }
      },
      ...e.touch === !0 ? {} : e.touch
    });
    return R(() => ve(s(e.tag, {
      ref: r,
      class: ["v-window", {
        "v-window--show-arrows-on-hover": e.showArrows === "hover"
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var V, P;
        return [s("div", {
          class: "v-window__container",
          style: {
            height: g.value
          }
        }, [(V = t.default) == null ? void 0 : V.call(t, {
          group: o
        }), e.showArrows !== !1 && s("div", {
          class: "v-window__controls"
        }, [k.value])]), (P = t.additional) == null ? void 0 : P.call(t, {
          group: o
        })];
      }
    }), [[$e("touch"), w.value]])), {
      group: o
    };
  }
}), Bs = E({
  ...oe(no(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VStepperWindow"), ps = L()({
  name: "VStepperWindow",
  props: Bs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(Va, null), l = J(e, "modelValue"), i = h({
      get() {
        var o;
        return l.value != null || !a ? l.value : (o = a.items.value.find((r) => a.selected.value.includes(r.id))) == null ? void 0 : o.value;
      },
      set(o) {
        l.value = o;
      }
    });
    return R(() => {
      const o = Vl.filterProps(e);
      return s(Vl, z({
        _as: "VStepperWindow"
      }, o, {
        modelValue: i.value,
        "onUpdate:modelValue": (r) => i.value = r,
        class: ["v-stepper-window", e.class],
        style: e.style,
        mandatory: !1,
        touch: !1
      }), t);
    }), {};
  }
});
function ao() {
  const e = Y(!1);
  return Ye(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: h(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: Zn(e)
  };
}
const lo = E({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...Q(),
  ...Nt(),
  ...ha()
}, "VWindowItem"), _l = L()({
  name: "VWindowItem",
  directives: {
    Touch: _a
  },
  props: lo(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = ae(eo), l = Ft(e, to), {
      isBooted: i
    } = ao();
    if (!a || !l) throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const o = Y(!1), r = h(() => i.value && (a.isReversed.value ? e.reverseTransition !== !1 : e.transition !== !1));
    function u() {
      !o.value || !a || (o.value = !1, a.transitionCount.value > 0 && (a.transitionCount.value -= 1, a.transitionCount.value === 0 && (a.transitionHeight.value = void 0)));
    }
    function c() {
      var y;
      o.value || !a || (o.value = !0, a.transitionCount.value === 0 && (a.transitionHeight.value = U((y = a.rootRef.value) == null ? void 0 : y.clientHeight)), a.transitionCount.value += 1);
    }
    function f() {
      u();
    }
    function m(y) {
      o.value && he(() => {
        !r.value || !o.value || !a || (a.transitionHeight.value = U(y.clientHeight));
      });
    }
    const g = h(() => {
      const y = a.isReversed.value ? e.reverseTransition : e.transition;
      return r.value ? {
        name: typeof y != "string" ? a.transition.value : y,
        onBeforeEnter: c,
        onAfterEnter: u,
        onEnterCancelled: f,
        onBeforeLeave: c,
        onAfterLeave: u,
        onLeaveCancelled: f,
        onEnter: m
      } : !1;
    }), {
      hasContent: d
    } = ba(e, l.isSelected);
    return R(() => s(pe, {
      transition: g.value,
      disabled: !i.value
    }, {
      default: () => {
        var y;
        return [ve(s("div", {
          class: ["v-window-item", l.selectedClass.value, e.class],
          style: e.style
        }, [d.value && ((y = t.default) == null ? void 0 : y.call(t))]), [[We, l.isSelected.value]])];
      }
    })), {
      groupItem: l
    };
  }
}), Ms = E({
  ...lo()
}, "VStepperWindowItem"), Ds = L()({
  name: "VStepperWindowItem",
  props: Ms(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => {
      const a = _l.filterProps(e);
      return s(_l, z({
        _as: "VStepperWindowItem"
      }, a, {
        class: ["v-stepper-window-item", e.class],
        style: e.style
      }), t);
    }), {};
  }
}), io = E({
  altLabels: Boolean,
  bgColor: String,
  completeIcon: String,
  editIcon: String,
  editable: Boolean,
  errorIcon: String,
  hideActions: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: String,
    default: "title"
  },
  itemValue: {
    type: String,
    default: "value"
  },
  nonLinear: Boolean,
  flat: Boolean,
  ...Si()
}, "Stepper"), Os = E({
  ...io(),
  ...Lt({
    mandatory: "force",
    selectedClass: "v-stepper-item--selected"
  }),
  ...da(),
  ...$l(wa(), ["prevText", "nextText"])
}, "VStepper");
L()({
  name: "VStepper",
  props: Os(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a,
      next: l,
      prev: i,
      selected: o
    } = kt(e, Va), {
      displayClasses: r,
      mobile: u
    } = ma(e), {
      completeIcon: c,
      editIcon: f,
      errorIcon: m,
      color: g,
      editable: d,
      prevText: y,
      nextText: v
    } = vn(e), b = h(() => e.items.map((w, V) => {
      const P = Oe(w, e.itemTitle, w), _ = Oe(w, e.itemValue, V + 1);
      return {
        title: P,
        value: _,
        raw: w
      };
    })), S = h(() => a.value.findIndex((w) => o.value.includes(w.id))), k = h(() => e.disabled ? e.disabled : S.value === 0 ? "prev" : S.value === a.value.length - 1 ? "next" : !1);
    return ze({
      VStepperItem: {
        editable: d,
        errorIcon: m,
        completeIcon: c,
        editIcon: f,
        prevText: y,
        nextText: v
      },
      VStepperActions: {
        color: g,
        disabled: k,
        prevText: y,
        nextText: v
      }
    }), R(() => {
      const w = _t.filterProps(e), V = !!(t.header || e.items.length), P = e.items.length > 0, _ = !e.hideActions && !!(P || t.actions);
      return s(_t, z(w, {
        color: e.bgColor,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": u.value
        }, r.value, e.class],
        style: e.style
      }), {
        default: () => {
          var x, $;
          return [V && s(xs, {
            key: "stepper-header"
          }, {
            default: () => [b.value.map((I, D) => {
              let {
                raw: O,
                ...C
              } = I;
              return s(ee, null, [!!D && s(vt, null, null), s(Ss, C, {
                default: t[`header-item.${C.value}`] ?? t.header,
                icon: t.icon,
                title: t.title,
                subtitle: t.subtitle
              })]);
            })]
          }), P && s(ps, {
            key: "stepper-window"
          }, {
            default: () => [b.value.map((I) => s(Ds, {
              value: I.value
            }, {
              default: () => {
                var D, O;
                return ((D = t[`item.${I.value}`]) == null ? void 0 : D.call(t, I)) ?? ((O = t.item) == null ? void 0 : O.call(t, I));
              }
            }))]
          }), (x = t.default) == null ? void 0 : x.call(t, {
            prev: i,
            next: l
          }), _ && ((($ = t.actions) == null ? void 0 : $.call(t, {
            next: l,
            prev: i
          })) ?? s(Yn, {
            key: "stepper-actions",
            "onClick:prev": i,
            "onClick:next": l
          }, t))];
        }
      });
    }), {
      prev: i,
      next: l
    };
  }
});
const $s = E({
  prevText: {
    type: String,
    default: "$vuetify.stepper.prev"
  },
  nextText: {
    type: String,
    default: "$vuetify.stepper.next"
  },
  ...io(),
  ...oe(Ji({
    mandatory: "force",
    variant: "accordion"
  }), ["static"])
}, "VStepperVertical"), Ls = L()({
  name: "VStepperVertical",
  props: $s(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = H(), {
      color: l,
      eager: i,
      editable: o,
      prevText: r,
      nextText: u,
      hideActions: c
    } = vn(e), f = J(e, "modelValue"), m = h(() => e.items.map((g, d) => {
      const y = Oe(g, e.itemTitle, g), v = Oe(g, e.itemValue, d + 1);
      return {
        title: y,
        value: v,
        raw: g
      };
    }));
    return ze({
      VStepperVerticalItem: {
        color: l,
        eager: i,
        editable: o,
        prevText: r,
        nextText: u,
        hideActions: c,
        static: !0
      },
      VStepperActions: {
        color: l
      }
    }), R(() => {
      const g = xl.filterProps(e);
      return s(xl, z(g, {
        modelValue: f.value,
        "onUpdate:modelValue": (d) => f.value = d,
        ref: a,
        class: ["v-stepper", {
          "v-stepper--alt-labels": e.altLabels,
          "v-stepper--flat": e.flat,
          "v-stepper--non-linear": e.nonLinear,
          "v-stepper--mobile": e.mobile
        }, e.class],
        style: e.style
      }), {
        ...t,
        default: (d) => {
          var b;
          let {
            prev: y,
            next: v
          } = d;
          return s(ee, null, [m.value.map((S) => {
            let {
              raw: k,
              ...w
            } = S;
            return s(Zi, w, {
              ...t,
              default: t[`item.${w.value}`]
            });
          }), (b = t.default) == null ? void 0 : b.call(t, {
            prev: y,
            next: v,
            step: f.value
          })]);
        }
      });
    }), {};
  }
}), Ns = L()({
  name: "VPullToRefresh",
  props: {
    pullDownThreshold: {
      type: Number,
      default: 64
    }
  },
  emits: {
    load: (e) => !0
  },
  setup(e, n) {
    let {
      slots: t,
      emit: a
    } = n, l = 0, i = [];
    const o = Y(0), r = H(), u = Y(!1), c = Y(!1), f = Y(!1), m = h(() => o.value >= e.pullDownThreshold && !u.value), g = h(() => et(o.value, 0, e.pullDownThreshold));
    function d(b) {
      u.value || (f.value = !0, l = "clientY" in b ? b.clientY : b.touches[0].clientY);
    }
    function y(b) {
      if (u.value || !f.value) return;
      const S = "clientY" in b ? b.clientY : b.touches[0].clientY;
      i.length && !i[0].scrollTop && (o.value = S - l);
    }
    function v(b) {
      u.value || (f.value = !1, m.value ? (a("load", {
        done: function() {
          u.value && (o.value = 0, u.value = !1);
        }
      }), u.value = !0) : o.value = 0);
    }
    Ye(() => {
      i = Vt(r.value);
    }), q([g, u], () => {
      if (i.length) {
        const b = g.value && !u.value;
        i.forEach((S) => S.style.overflow = b ? "hidden" : "auto");
      }
    }), q(g, (b, S) => {
      c.value = b < S;
    }), R(() => {
      var b;
      return s("div", {
        class: ["v-pull-to-refresh"],
        onTouchstart: d,
        onTouchmove: y,
        onTouchend: v,
        onMousedown: d,
        onMouseup: v,
        onMouseleave: v,
        onMousemove: y,
        ref: r
      }, [s("div", {
        class: ["v-pull-to-refresh__pull-down", {
          "v-pull-to-refresh__pull-down--touching": f.value
        }],
        style: {
          top: U(-1 * e.pullDownThreshold + g.value),
          height: U(e.pullDownThreshold)
        }
      }, [t.pullDownPanel ? t.pullDownPanel({
        canRefresh: m.value,
        goingUp: c.value,
        refreshing: u.value
      }) : s("div", {
        class: ["v-pull-to-refresh__pull-down-default"]
      }, [u.value ? s(ln, {
        indeterminate: !0,
        active: !1
      }, null) : s(de, {
        icon: m.value || c.value ? "$sortAsc" : "$sortDesc"
      }, null)])]), s("div", {
        class: ["v-pull-to-refresh__scroll-container", {
          "v-pull-to-refresh__scroll-container--touching": f.value
        }],
        style: {
          top: U(g.value)
        }
      }, [(b = t.default) == null ? void 0 : b.call(t)])]);
    });
  }
});
function Fs(e) {
  const n = Y(e);
  let t = -1;
  function a() {
    clearInterval(t);
  }
  function l() {
    a(), he(() => n.value = e);
  }
  function i(o) {
    const r = o ? getComputedStyle(o) : {
      transitionDuration: 0.2
    }, u = parseFloat(r.transitionDuration) * 1e3 || 200;
    if (a(), n.value <= 0) return;
    const c = performance.now();
    t = window.setInterval(() => {
      const f = performance.now() - c + u;
      n.value = Math.max(e - f, 0), n.value <= 0 && a();
    }, u);
  }
  return Ie(a), {
    clear: a,
    time: n,
    start: i,
    reset: l
  };
}
const oo = E({
  multiLine: Boolean,
  text: String,
  timer: [Boolean, String],
  timeout: {
    type: [Number, String],
    default: 5e3
  },
  vertical: Boolean,
  ...Ot({
    location: "bottom"
  }),
  ...sa(),
  ...Ee(),
  ...qe(),
  ...re(),
  ...oe(kn({
    transition: "v-snackbar-transition"
  }), ["persistent", "noClickAnimation", "scrim", "scrollStrategy"])
}, "VSnackbar"), Pl = L()({
  name: "VSnackbar",
  props: oo(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = J(e, "modelValue"), {
      positionClasses: l
    } = ca(e), {
      scopeId: i
    } = bn(), {
      themeClasses: o
    } = me(e), {
      colorClasses: r,
      colorStyles: u,
      variantClasses: c
    } = $t(e), {
      roundedClasses: f
    } = Te(e), m = Fs(Number(e.timeout)), g = H(), d = H(), y = Y(!1), v = Y(0), b = H(), S = ae(Ai, void 0);
    tt(() => !!S, () => {
      const D = Iu();
      Me(() => {
        b.value = D.mainStyles.value;
      });
    }), q(a, w), q(() => e.timeout, w), Ye(() => {
      a.value && w();
    });
    let k = -1;
    function w() {
      m.reset(), window.clearTimeout(k);
      const D = Number(e.timeout);
      if (!a.value || D === -1) return;
      const O = ta(d.value);
      m.start(O), k = window.setTimeout(() => {
        a.value = !1;
      }, D);
    }
    function V() {
      m.reset(), window.clearTimeout(k);
    }
    function P() {
      y.value = !0, V();
    }
    function _() {
      y.value = !1, w();
    }
    function x(D) {
      v.value = D.touches[0].clientY;
    }
    function $(D) {
      Math.abs(v.value - D.changedTouches[0].clientY) > 50 && (a.value = !1);
    }
    const I = h(() => e.location.split(" ").reduce((D, O) => (D[`v-snackbar--${O}`] = !0, D), {}));
    return R(() => {
      const D = gt.filterProps(e), O = !!(t.default || t.text || e.text);
      return s(gt, z({
        ref: g,
        class: ["v-snackbar", {
          "v-snackbar--active": a.value,
          "v-snackbar--multi-line": e.multiLine && !e.vertical,
          "v-snackbar--timer": !!e.timer,
          "v-snackbar--vertical": e.vertical
        }, I.value, l.value, e.class],
        style: [b.value, e.style]
      }, D, {
        modelValue: a.value,
        "onUpdate:modelValue": (C) => a.value = C,
        contentProps: z({
          class: ["v-snackbar__wrapper", o.value, r.value, f.value, c.value],
          style: [u.value],
          onPointerenter: P,
          onPointerleave: _
        }, D.contentProps),
        persistent: !0,
        noClickAnimation: !0,
        scrim: !1,
        scrollStrategy: "none",
        _disableGlobalStack: !0,
        onTouchstartPassive: x,
        onTouchend: $
      }, i), {
        default: () => {
          var C, T;
          return [rt(!1, "v-snackbar"), e.timer && !y.value && s("div", {
            key: "timer",
            class: "v-snackbar__timer"
          }, [s(ei, {
            ref: d,
            color: typeof e.timer == "string" ? e.timer : "info",
            max: e.timeout,
            "model-value": m.time.value
          }, null)]), O && s("div", {
            key: "content",
            class: "v-snackbar__content",
            role: "status",
            "aria-live": "polite"
          }, [((C = t.text) == null ? void 0 : C.call(t)) ?? e.text, (T = t.default) == null ? void 0 : T.call(t)]), t.actions && s(ne, {
            defaults: {
              VBtn: {
                variant: "text",
                ripple: !1,
                slim: !0
              }
            }
          }, {
            default: () => [s("div", {
              class: "v-snackbar__actions"
            }, [t.actions({
              isActive: a
            })])]
          })];
        },
        activator: t.activator
      });
    }), Sn({}, g);
  }
}), Rs = E({
  // TODO: Port this to Snackbar on dev
  closable: [Boolean, String],
  closeText: {
    type: String,
    default: "$vuetify.dismiss"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  ...oe(oo(), ["modelValue"])
}, "VSnackbarQueue"), Hs = L()({
  name: "VSnackbarQueue",
  props: Rs(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ae(), i = Y(!1), o = Y(!1), r = Y();
    q(() => e.modelValue.length, (g, d) => {
      !o.value && g > d && c();
    }), q(i, (g) => {
      g && (o.value = !0);
    });
    function u() {
      e.modelValue.length ? c() : (r.value = void 0, o.value = !1);
    }
    function c() {
      const [g, ...d] = e.modelValue;
      t("update:modelValue", d), r.value = typeof g == "string" ? {
        text: g
      } : g, he(() => {
        i.value = !0;
      });
    }
    function f() {
      i.value = !1;
    }
    const m = h(() => ({
      color: typeof e.closable == "string" ? e.closable : void 0,
      text: l(e.closeText)
    }));
    R(() => {
      const g = !!(e.closable || a.actions), {
        modelValue: d,
        ...y
      } = Pl.filterProps(e);
      return s(ee, null, [o.value && !!r.value && (a.default ? s(ne, {
        defaults: {
          VSnackbar: r.value
        }
      }, {
        default: () => [a.default({
          item: r.value
        })]
      }) : s(Pl, z(y, r.value, {
        modelValue: i.value,
        "onUpdate:modelValue": (v) => i.value = v,
        onAfterLeave: u
      }), {
        text: a.text ? () => {
          var v;
          return (v = a.text) == null ? void 0 : v.call(a, {
            item: r.value
          });
        } : void 0,
        actions: g ? () => s(ee, null, [a.actions ? s(ne, {
          defaults: {
            VBtn: m.value
          }
        }, {
          default: () => [a.actions({
            item: r.value,
            props: {
              onClick: f
            }
          })]
        }) : s(te, z(m.value, {
          onClick: f
        }), null)]) : void 0
      }))]);
    });
  }
}), Ws = E({
  allowedValues: Function,
  ampm: Boolean,
  color: String,
  disabled: Boolean,
  displayedValue: null,
  double: Boolean,
  format: {
    type: Function,
    default: (e) => e
  },
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  scrollable: Boolean,
  readonly: Boolean,
  rotate: {
    type: Number,
    default: 0
  },
  step: {
    type: Number,
    default: 1
  },
  modelValue: {
    type: Number
  }
}, "VTimePickerClock"), Gn = L()({
  name: "VTimePickerClock",
  props: Ws(),
  emits: {
    change: (e) => !0,
    input: (e) => !0
  },
  setup(e, n) {
    let {
      emit: t
    } = n;
    const a = H(null), l = H(null), i = H(void 0), o = H(!1), r = H(null), u = H(null), {
      textColorClasses: c,
      textColorStyles: f
    } = De(F(e, "color")), {
      backgroundColorClasses: m,
      backgroundColorStyles: g
    } = ke(F(e, "color")), d = h(() => e.max - e.min + 1), y = h(() => e.double ? d.value / 2 : d.value), v = h(() => 360 / y.value), b = h(() => v.value * Math.PI / 180), S = h(() => e.modelValue == null ? e.min : e.modelValue), k = h(() => 0.62), w = h(() => {
      const p = [];
      for (let j = e.min; j <= e.max; j = j + e.step)
        p.push(j);
      return p;
    });
    q(() => e.modelValue, (p) => {
      i.value = p;
    });
    function V(p) {
      i.value !== p && (i.value = p), t("input", p);
    }
    function P(p) {
      return !e.allowedValues || e.allowedValues(p);
    }
    function _(p) {
      if (!e.scrollable || e.disabled) return;
      p.preventDefault();
      const j = Math.sign(-p.deltaY || 1);
      let A = S.value;
      do
        A = A + j, A = (A - e.min + d.value) % d.value + e.min;
      while (!P(A) && A !== S.value);
      A !== e.displayedValue && V(A);
    }
    function x(p) {
      return e.double && p - e.min >= y.value;
    }
    function $(p) {
      return x(p) ? k.value : 1;
    }
    function I(p) {
      const j = e.rotate * Math.PI / 180;
      return {
        x: Math.sin((p - e.min) * b.value + j) * $(p),
        y: -Math.cos((p - e.min) * b.value + j) * $(p)
      };
    }
    function D(p, j) {
      const A = (Math.round(p / v.value) + (j ? y.value : 0)) % d.value + e.min;
      return p < 360 - v.value / 2 ? A : j ? e.max - y.value + 1 : e.min;
    }
    function O(p) {
      const {
        x: j,
        y: A
      } = I(p);
      return {
        left: `${50 + j * 50}%`,
        top: `${50 + A * 50}%`
      };
    }
    function C(p, j) {
      const A = j.x - p.x, N = j.y - p.y;
      return Math.sqrt(A * A + N * N);
    }
    function T(p, j) {
      const A = 2 * Math.atan2(j.y - p.y - C(p, j), j.x - p.x);
      return Math.abs(A * 180 / Math.PI);
    }
    function B(p) {
      r.value === null && (r.value = p), u.value = p, V(p);
    }
    function M(p) {
      var Ea, Ta;
      if (p.preventDefault(), !o.value && p.type !== "click" || !a.value) return;
      const {
        width: j,
        top: A,
        left: N
      } = (Ea = a.value) == null ? void 0 : Ea.getBoundingClientRect(), {
        width: G
      } = ((Ta = l.value) == null ? void 0 : Ta.getBoundingClientRect()) ?? {
        width: 0
      }, {
        clientX: ue,
        clientY: ye
      } = "touches" in p ? p.touches[0] : p, X = {
        x: j / 2,
        y: -j / 2
      }, ie = {
        x: ue - N,
        y: A - ye
      }, Ve = Math.round(T(X, ie) - e.rotate + 360) % 360, xe = e.double && C(X, ie) < (G + G * k.value) / 4, po = Math.ceil(15 / v.value);
      let st;
      for (let zt = 0; zt < po; zt++)
        if (st = D(Ve + zt * v.value, xe), P(st) || (st = D(Ve - zt * v.value, xe), P(st))) return B(st);
    }
    function W(p) {
      e.disabled || (p.preventDefault(), window.addEventListener("mousemove", M), window.addEventListener("touchmove", M), window.addEventListener("mouseup", K), window.addEventListener("touchend", K), r.value = null, u.value = null, o.value = !0, M(p));
    }
    function K(p) {
      p.stopPropagation(), window.removeEventListener("mousemove", M), window.removeEventListener("touchmove", M), window.removeEventListener("mouseup", K), window.removeEventListener("touchend", K), o.value = !1, u.value !== null && P(u.value) && t("change", u.value);
    }
    R(() => s("div", {
      class: [{
        "v-time-picker-clock": !0,
        "v-time-picker-clock--indeterminate": e.modelValue == null,
        "v-time-picker-clock--readonly": e.readonly
      }],
      onMousedown: W,
      onTouchstart: W,
      onWheel: _,
      ref: a
    }, [s("div", {
      class: "v-time-picker-clock__inner",
      ref: l
    }, [s("div", {
      class: [{
        "v-time-picker-clock__hand": !0,
        "v-time-picker-clock__hand--inner": x(e.modelValue)
      }, c.value],
      style: [{
        transform: `rotate(${e.rotate + v.value * (S.value - e.min)}deg) scaleY(${$(S.value)})`
      }, f.value]
    }, null), w.value.map((p) => {
      const j = p === S.value;
      return s("div", {
        class: [{
          "v-time-picker-clock__item": !0,
          "v-time-picker-clock__item--active": j,
          "v-time-picker-clock__item--disabled": e.disabled || !P(p)
        }, j && m.value],
        style: [O(p), j && g.value]
      }, [s("span", null, [e.format(p)])]);
    })])]));
  }
}), zs = (e, n, t) => (n = n >> 0, e = String(e), t = String(t), e.length > n ? String(e) : (n = n - e.length, n > t.length && (t += t.repeat(n / t.length)), t.slice(0, n) + String(e))), Ke = function(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
  return zs(e, n, "0");
};
var le = /* @__PURE__ */ function(e) {
  return e[e.Hour = 1] = "Hour", e[e.Minute = 2] = "Minute", e[e.Second = 3] = "Second", e;
}(le || {});
const js = E({
  ampm: Boolean,
  ampmInTitle: Boolean,
  ampmReadonly: Boolean,
  color: String,
  disabled: Boolean,
  hour: Number,
  minute: Number,
  second: Number,
  period: String,
  readonly: Boolean,
  useSeconds: Boolean,
  selecting: Number,
  value: Number
}, "VTimePickerControls"), Un = L()({
  name: "VTimePickerControls",
  props: js(),
  emits: {
    "update:period": (e) => !0,
    "update:selecting": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ae();
    return R(() => {
      let i = e.hour;
      return e.ampm && (i = i ? (i - 1) % 12 + 1 : 12), s("div", {
        class: "v-time-picker-controls"
      }, [s("div", {
        class: {
          "v-time-picker-controls__time": !0,
          "v-time-picker-controls__time--with-seconds": e.useSeconds
        }
      }, [s(te, {
        active: e.selecting === 1,
        color: e.selecting === 1 ? e.color : void 0,
        disabled: e.disabled,
        variant: "tonal",
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        text: e.hour == null ? "--" : Ke(`${i}`),
        onClick: () => t("update:selecting", le.Hour)
      }, null), s("span", {
        class: ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }]
      }, [Tn(":")]), s(te, {
        active: e.selecting === 2,
        color: e.selecting === 2 ? e.color : void 0,
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.selecting === 2,
          "v-time-picker-controls__time--with-ampm__btn": e.ampm,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        disabled: e.disabled,
        variant: "tonal",
        text: e.minute == null ? "--" : Ke(e.minute),
        onClick: () => t("update:selecting", le.Minute)
      }, null), e.useSeconds && s("span", {
        class: ["v-time-picker-controls__time__separator", {
          "v-time-picker-controls--with-seconds__time__separator": e.useSeconds
        }],
        key: "secondsDivider"
      }, [Tn(":")]), e.useSeconds && s(te, {
        key: "secondsVal",
        variant: "tonal",
        onClick: () => t("update:selecting", le.Second),
        class: {
          "v-time-picker-controls__time__btn": !0,
          "v-time-picker-controls__time__btn__active": e.selecting === 3,
          "v-time-picker-controls__time--with-seconds__btn": e.useSeconds
        },
        disabled: e.disabled,
        text: e.second == null ? "--" : Ke(e.second)
      }, null), e.ampm && e.ampmInTitle && s("div", {
        class: ["v-time-picker-controls__ampm", {
          "v-time-picker-controls__ampm--readonly": e.ampmReadonly
        }]
      }, [s(te, {
        active: e.period === "am",
        color: e.period === "am" ? e.color : void 0,
        class: {
          "v-time-picker-controls__ampm__am": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "am"
        },
        disabled: e.disabled,
        text: l("$vuetify.timePicker.am"),
        variant: e.disabled && e.period === "am" ? "elevated" : "tonal",
        onClick: () => e.period !== "am" ? t("update:period", "am") : null
      }, null), s(te, {
        active: e.period === "pm",
        color: e.period === "pm" ? e.color : void 0,
        class: {
          "v-time-picker-controls__ampm__pm": !0,
          "v-time-picker-controls__ampm__btn": !0,
          "v-time-picker-controls__ampm__btn__active": e.period === "pm"
        },
        disabled: e.disabled,
        text: l("$vuetify.timePicker.pm"),
        variant: e.disabled && e.period === "pm" ? "elevated" : "tonal",
        onClick: () => e.period !== "pm" ? t("update:period", "pm") : null
      }, null)])])]);
    }), {};
  }
}), Ys = Mt(24), ro = Mt(12), Gs = ro.map((e) => e + 12);
Mt(60);
const Us = {
  1: "hour",
  2: "minute",
  3: "second"
}, qs = E({
  allowedHours: [Function, Array],
  allowedMinutes: [Function, Array],
  allowedSeconds: [Function, Array],
  ampmInTitle: Boolean,
  disabled: Boolean,
  format: {
    type: String,
    default: "ampm"
  },
  max: String,
  min: String,
  modelValue: null,
  readonly: Boolean,
  scrollable: Boolean,
  useSeconds: Boolean,
  ...oe(ya({
    title: "$vuetify.timePicker.title"
  }), ["landscape"])
}, "VTimePicker"), Ks = L()({
  name: "VTimePicker",
  props: qs(),
  emits: {
    "update:hour": (e) => !0,
    "update:minute": (e) => !0,
    "update:period": (e) => !0,
    "update:second": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const {
      t: l
    } = Ae(), i = H(null), o = H(null), r = H(null), u = H(null), c = H(null), f = H(null), m = H("am"), g = H(le.Hour), d = H(null), y = H(null), v = h(() => {
      let C;
      if (e.allowedHours instanceof Array ? C = (M) => e.allowedHours.includes(M) : C = e.allowedHours, !e.min && !e.max) return C;
      const T = e.min ? Number(e.min.split(":")[0]) : 0, B = e.max ? Number(e.max.split(":")[0]) : 23;
      return (M) => M >= T * 1 && M <= B * 1 && (!C || C(M));
    }), b = h(() => {
      let C;
      const T = !v.value || i.value === null || v.value(i.value);
      if (e.allowedMinutes instanceof Array ? C = (A) => e.allowedMinutes.includes(A) : C = e.allowedMinutes, !e.min && !e.max)
        return T ? C : () => !1;
      const [B, M] = e.min ? e.min.split(":").map(Number) : [0, 0], [W, K] = e.max ? e.max.split(":").map(Number) : [23, 59], p = B * 60 + M * 1, j = W * 60 + K * 1;
      return (A) => {
        const N = 60 * i.value + A;
        return N >= p && N <= j && T && (!C || C(A));
      };
    }), S = h(() => {
      let C;
      const B = (!v.value || i.value === null || v.value(i.value)) && (!b.value || o.value === null || b.value(o.value));
      if (e.allowedSeconds instanceof Array ? C = (ue) => e.allowedSeconds.includes(ue) : C = e.allowedSeconds, !e.min && !e.max)
        return B ? C : () => !1;
      const [M, W, K] = e.min ? e.min.split(":").map(Number) : [0, 0, 0], [p, j, A] = e.max ? e.max.split(":").map(Number) : [23, 59, 59], N = M * 3600 + W * 60 + (K || 0) * 1, G = p * 3600 + j * 60 + (A || 0) * 1;
      return (ue) => {
        const ye = 3600 * i.value + 60 * o.value + ue;
        return ye >= N && ye <= G && B && (!C || C(ue));
      };
    }), k = h(() => e.format === "ampm");
    q(() => e.modelValue, (C) => x(C)), Ye(() => {
      x(e.modelValue);
    });
    function w() {
      return i.value != null && o.value != null && (!e.useSeconds || r.value != null) ? `${Ke(i.value)}:${Ke(o.value)}` + (e.useSeconds ? `:${Ke(r.value)}` : "") : null;
    }
    function V() {
      const C = w();
      C !== null && t("update:modelValue", C);
    }
    function P(C) {
      return C ? (C - 1) % 12 + 1 : 12;
    }
    function _(C, T) {
      return C % 12 + (T === "pm" ? 12 : 0);
    }
    function x(C) {
      if (C == null || C === "")
        i.value = null, o.value = null, r.value = null;
      else if (C instanceof Date)
        i.value = C.getHours(), o.value = C.getMinutes(), r.value = C.getSeconds();
      else {
        const [T, , B, , M, W] = C.trim().toLowerCase().match(/^(\d+):(\d+)(:(\d+))?([ap]m)?$/) || new Array(6);
        i.value = W ? _(parseInt(T, 10), W) : parseInt(T, 10), o.value = parseInt(B, 10), r.value = parseInt(M || 0, 10);
      }
      m.value = i.value == null || i.value < 12 ? "am" : "pm";
    }
    function $(C, T) {
      const B = v.value;
      if (!B) return T;
      const M = k.value ? T < 12 ? ro : Gs : Ys;
      return ((M.find((K) => B((K + T) % M.length + M[0])) || 0) + T) % M.length + M[0];
    }
    function I(C) {
      if (m.value = C, i.value != null) {
        const T = i.value + (m.value === "am" ? -12 : 12);
        i.value = $("hour", T);
      }
      return t("update:period", C), V(), !0;
    }
    function D(C) {
      g.value === le.Hour ? i.value = k.value ? _(C, m.value) : C : g.value === le.Minute ? o.value = C : r.value = C;
    }
    function O(C) {
      switch (Us[g.value]) {
        case "hour":
          t("update:hour", C);
          break;
        case "minute":
          t("update:minute", C);
          break;
        case "second":
          t("update:second", C);
          break;
      }
      const T = g.value === (e.useSeconds ? le.Second : le.Minute);
      g.value === le.Hour ? g.value = le.Minute : e.useSeconds && g.value === le.Minute && (g.value = le.Second), !(i.value === u.value && o.value === c.value && (!e.useSeconds || r.value === f.value) || w() === null) && (u.value = i.value, c.value = o.value, e.useSeconds && (f.value = r.value), T && V());
    }
    R(() => {
      const C = Et.filterProps(e), T = Un.filterProps(e), B = Gn.filterProps(oe(e, ["format", "modelValue", "min", "max"]));
      return s(Et, z(C, {
        color: void 0,
        class: ["v-time-picker", e.class],
        style: e.style
      }), {
        title: () => {
          var M;
          return ((M = a.title) == null ? void 0 : M.call(a)) ?? s("div", {
            class: "v-time-picker__title"
          }, [l(e.title)]);
        },
        header: () => s(Un, z(T, {
          ampm: k.value || e.ampmInTitle,
          ampmReadonly: k.value && !e.ampmInTitle,
          hour: i.value,
          minute: o.value,
          period: m.value,
          second: r.value,
          selecting: g.value,
          "onUpdate:period": (M) => I(M),
          "onUpdate:selecting": (M) => g.value = M,
          ref: d
        }), null),
        default: () => s(Gn, z(B, {
          allowedValues: g.value === le.Hour ? v.value : g.value === le.Minute ? b.value : S.value,
          double: g.value === le.Hour && !k.value,
          format: g.value === le.Hour ? k.value ? P : (M) => M : (M) => Ke(M, 2),
          max: g.value === le.Hour ? k.value && m.value === "am" ? 11 : 23 : 59,
          min: g.value === le.Hour && k.value && m.value === "pm" ? 12 : 0,
          size: 20,
          step: g.value === le.Hour ? 1 : 5,
          modelValue: g.value === le.Hour ? i.value : g.value === le.Minute ? o.value : r.value,
          onChange: O,
          onInput: D,
          ref: y
        }), null),
        actions: a.actions
      });
    });
  }
}), qn = Symbol.for("vuetify:list");
function uo() {
  const e = ae(qn, {
    hasPrepend: Y(!1),
    updateHasPrepend: () => null
  }), n = {
    hasPrepend: Y(!1),
    updateHasPrepend: (t) => {
      t && (n.hasPrepend.value = t);
    }
  };
  return we(qn, n), e;
}
function so() {
  return ae(qn, null);
}
const Pa = (e) => {
  const n = {
    activate: (t) => {
      let {
        id: a,
        value: l,
        activated: i
      } = t;
      return a = Se(a), e && !l && i.size === 1 && i.has(a) || (l ? i.add(a) : i.delete(a)), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Set();
      if (t != null)
        for (const o of ge(t))
          i = n.activate({
            id: o,
            value: !0,
            activated: new Set(i),
            children: a,
            parents: l
          });
      return i;
    },
    out: (t) => Array.from(t)
  };
  return n;
}, co = (e) => {
  const n = Pa(e);
  return {
    activate: (a) => {
      let {
        activated: l,
        id: i,
        ...o
      } = a;
      i = Se(i);
      const r = l.has(i) ? /* @__PURE__ */ new Set([i]) : /* @__PURE__ */ new Set();
      return n.activate({
        ...o,
        id: i,
        activated: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Set();
      if (a != null) {
        const r = ge(a);
        r.length && (o = n.in(r.slice(0, 1), l, i));
      }
      return o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, Xs = (e) => {
  const n = Pa(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Se(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Qs = (e) => {
  const n = co(e);
  return {
    activate: (a) => {
      let {
        id: l,
        activated: i,
        children: o,
        ...r
      } = a;
      return l = Se(l), o.has(l) ? i : n.activate({
        id: l,
        activated: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, Zs = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      const i = /* @__PURE__ */ new Set();
      i.add(n);
      let o = l.get(n);
      for (; o != null; )
        i.add(o), o = l.get(o);
      return i;
    } else
      return a.delete(n), a;
  },
  select: () => null
}, vo = {
  open: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (t) {
      let i = l.get(n);
      for (a.add(n); i != null && i !== n; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(n);
    return a;
  },
  select: () => null
}, Js = {
  open: vo.open,
  select: (e) => {
    let {
      id: n,
      value: t,
      opened: a,
      parents: l
    } = e;
    if (!t) return a;
    const i = [];
    let o = l.get(n);
    for (; o != null; )
      i.push(o), o = l.get(o);
    return new Set(i);
  }
}, Ia = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i
      } = t;
      if (a = Se(a), e && !l) {
        const o = Array.from(i.entries()).reduce((r, u) => {
          let [c, f] = u;
          return f === "on" && r.push(c), r;
        }, []);
        if (o.length === 1 && o[0] === a) return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t) => {
      const a = [];
      for (const [l, i] of t.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return n;
}, fo = (e) => {
  const n = Ia(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...o
      } = a;
      i = Se(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return n.select({
        ...o,
        id: i,
        selected: r
      });
    },
    in: (a, l, i) => {
      let o = /* @__PURE__ */ new Map();
      return a != null && a.length && (o = n.in(a.slice(0, 1), l, i)), o;
    },
    out: (a, l, i) => n.out(a, l, i)
  };
}, ec = (e) => {
  const n = Ia(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Se(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, tc = (e) => {
  const n = fo(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: o,
        ...r
      } = a;
      return l = Se(l), o.has(l) ? i : n.select({
        id: l,
        selected: i,
        children: o,
        ...r
      });
    },
    in: n.in,
    out: n.out
  };
}, nc = (e) => {
  const n = {
    select: (t) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: o,
        parents: r
      } = t;
      a = Se(a);
      const u = new Map(i), c = [a];
      for (; c.length; ) {
        const m = c.shift();
        i.set(m, l ? "on" : "off"), o.has(m) && c.push(...o.get(m));
      }
      let f = r.get(a);
      for (; f; ) {
        const m = o.get(f), g = m.every((y) => i.get(y) === "on"), d = m.every((y) => !i.has(y) || i.get(y) === "off");
        i.set(f, g ? "on" : d ? "off" : "indeterminate"), f = r.get(f);
      }
      return e && !l && Array.from(i.entries()).reduce((g, d) => {
        let [y, v] = d;
        return v === "on" && g.push(y), g;
      }, []).length === 0 ? u : i;
    },
    in: (t, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const o of t || [])
        i = n.select({
          id: o,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (t, a) => {
      const l = [];
      for (const [i, o] of t.entries())
        o === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return n;
}, Bt = Symbol.for("vuetify:nested"), mo = {
  id: Y(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: H(/* @__PURE__ */ new Map()),
    children: H(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: H(!1),
    selectable: H(!1),
    opened: H(/* @__PURE__ */ new Set()),
    activated: H(/* @__PURE__ */ new Set()),
    selected: H(/* @__PURE__ */ new Map()),
    selectedValues: H([])
  }
}, ac = E({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested"), lc = (e) => {
  let n = !1;
  const t = H(/* @__PURE__ */ new Map()), a = H(/* @__PURE__ */ new Map()), l = J(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = h(() => {
    if (typeof e.activeStrategy == "object") return e.activeStrategy;
    if (typeof e.activeStrategy == "function") return e.activeStrategy(e.mandatory);
    switch (e.activeStrategy) {
      case "leaf":
        return Xs(e.mandatory);
      case "single-leaf":
        return Qs(e.mandatory);
      case "independent":
        return Pa(e.mandatory);
      case "single-independent":
      default:
        return co(e.mandatory);
    }
  }), o = h(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    if (typeof e.selectStrategy == "function") return e.selectStrategy(e.mandatory);
    switch (e.selectStrategy) {
      case "single-leaf":
        return tc(e.mandatory);
      case "leaf":
        return ec(e.mandatory);
      case "independent":
        return Ia(e.mandatory);
      case "single-independent":
        return fo(e.mandatory);
      case "classic":
      default:
        return nc(e.mandatory);
    }
  }), r = h(() => {
    if (typeof e.openStrategy == "object") return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Js;
      case "single":
        return Zs;
      case "multiple":
      default:
        return vo;
    }
  }), u = J(e, "activated", e.activated, (d) => i.value.in(d, t.value, a.value), (d) => i.value.out(d, t.value, a.value)), c = J(e, "selected", e.selected, (d) => o.value.in(d, t.value, a.value), (d) => o.value.out(d, t.value, a.value));
  He(() => {
    n = !0;
  });
  function f(d) {
    const y = [];
    let v = d;
    for (; v != null; )
      y.unshift(v), v = a.value.get(v);
    return y;
  }
  const m = fe("nested"), g = {
    id: Y(),
    root: {
      opened: l,
      activatable: F(e, "activatable"),
      selectable: F(e, "selectable"),
      activated: u,
      selected: c,
      selectedValues: h(() => {
        const d = [];
        for (const [y, v] of c.value.entries())
          v === "on" && d.push(y);
        return d;
      }),
      register: (d, y, v) => {
        y && d !== y && a.value.set(d, y), v && t.value.set(d, []), y != null && t.value.set(y, [...t.value.get(y) || [], d]);
      },
      unregister: (d) => {
        if (n) return;
        t.value.delete(d);
        const y = a.value.get(d);
        if (y) {
          const v = t.value.get(y) ?? [];
          t.value.set(y, v.filter((b) => b !== d));
        }
        a.value.delete(d), l.value.delete(d);
      },
      open: (d, y, v) => {
        m.emit("click:open", {
          id: d,
          value: y,
          path: f(d),
          event: v
        });
        const b = r.value.open({
          id: d,
          value: y,
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: v
        });
        b && (l.value = b);
      },
      openOnSelect: (d, y, v) => {
        const b = r.value.select({
          id: d,
          value: y,
          selected: new Map(c.value),
          opened: new Set(l.value),
          children: t.value,
          parents: a.value,
          event: v
        });
        b && (l.value = b);
      },
      select: (d, y, v) => {
        m.emit("click:select", {
          id: d,
          value: y,
          path: f(d),
          event: v
        });
        const b = o.value.select({
          id: d,
          value: y,
          selected: new Map(c.value),
          children: t.value,
          parents: a.value,
          event: v
        });
        b && (c.value = b), g.root.openOnSelect(d, y, v);
      },
      activate: (d, y, v) => {
        if (!e.activatable)
          return g.root.select(d, !0, v);
        m.emit("click:activate", {
          id: d,
          value: y,
          path: f(d),
          event: v
        });
        const b = i.value.activate({
          id: d,
          value: y,
          activated: new Set(u.value),
          children: t.value,
          parents: a.value,
          event: v
        });
        b && (u.value = b);
      },
      children: t,
      parents: a
    }
  };
  return we(Bt, g), g.root;
}, Aa = (e, n) => {
  const t = ae(Bt, mo), a = Symbol(Ne()), l = h(() => e.value !== void 0 ? e.value : a), i = {
    ...t,
    id: l,
    open: (o, r) => t.root.open(l.value, o, r),
    openOnSelect: (o, r) => t.root.openOnSelect(l.value, o, r),
    isOpen: h(() => t.root.opened.value.has(l.value)),
    parent: h(() => t.root.parents.value.get(l.value)),
    activate: (o, r) => t.root.activate(l.value, o, r),
    isActivated: h(() => t.root.activated.value.has(Se(l.value))),
    select: (o, r) => t.root.select(l.value, o, r),
    isSelected: h(() => t.root.selected.value.get(Se(l.value)) === "on"),
    isIndeterminate: h(() => t.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: h(() => !t.root.children.value.get(l.value)),
    isGroupActivator: t.isGroupActivator
  };
  return !t.isGroupActivator && t.root.register(l.value, t.id.value, n), He(() => {
    !t.isGroupActivator && t.root.unregister(l.value);
  }), n && we(Bt, i), i;
}, ic = () => {
  const e = ae(Bt, mo);
  we(Bt, {
    ...e,
    isGroupActivator: !0
  });
}, oc = Dt({
  name: "VListGroupActivator",
  setup(e, n) {
    let {
      slots: t
    } = n;
    return ic(), () => {
      var a;
      return (a = t.default) == null ? void 0 : a.call(t);
    };
  }
}), go = E({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: Z,
    default: "$collapse"
  },
  expandIcon: {
    type: Z,
    default: "$expand"
  },
  prependIcon: Z,
  appendIcon: Z,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...Q(),
  ...ce()
}, "VListGroup"), sn = L()({
  name: "VListGroup",
  props: go(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Aa(F(e, "value"), !0), o = h(() => `v-list-group--id-${String(i.value)}`), r = so(), {
      isBooted: u
    } = ao();
    function c(d) {
      d.stopPropagation(), l(!a.value, d);
    }
    const f = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: o.value
    })), m = h(() => a.value ? e.collapseIcon : e.expandIcon), g = h(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && m.value,
        appendIcon: e.appendIcon || !e.subgroup && m.value,
        title: e.title,
        value: e.value
      }
    }));
    return R(() => s(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [t.activator && s(ne, {
        defaults: g.value
      }, {
        default: () => [s(oc, null, {
          default: () => [t.activator({
            props: f.value,
            isOpen: a.value
          })]
        })]
      }), s(pe, {
        transition: {
          component: yi
        },
        disabled: !u.value
      }, {
        default: () => {
          var d;
          return [ve(s("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": o.value
          }, [(d = t.default) == null ? void 0 : d.call(t)]), [[We, a.value]])];
        }
      })]
    })), {
      isOpen: a
    };
  }
}), rc = E({
  ...oe(go({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand"
  }), ["subgroup"])
}, "VTreeviewGroup"), Kn = L()({
  name: "VTreeviewGroup",
  props: rc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = H(), l = h(() => {
      var o;
      return (o = a.value) != null && o.isOpen ? e.collapseIcon : e.expandIcon;
    }), i = h(() => {
      var o;
      return {
        VTreeviewItem: {
          prependIcon: void 0,
          appendIcon: void 0,
          active: (o = a.value) == null ? void 0 : o.isOpen,
          toggleIcon: l.value
        }
      };
    });
    return R(() => {
      const o = sn.filterProps(e);
      return s(sn, z(o, {
        ref: a,
        class: ["v-treeview-group", e.class],
        subgroup: !0
      }), {
        ...t,
        activator: t.activator ? (r) => s(ee, null, [s(ne, {
          defaults: i.value
        }, {
          default: () => {
            var u;
            return [(u = t.activator) == null ? void 0 : u.call(t, r)];
          }
        })]) : void 0
      });
    }), {};
  }
}), uc = E({
  opacity: [Number, String],
  ...Q(),
  ...ce()
}, "VListItemSubtitle"), yo = L()({
  name: "VListItemSubtitle",
  props: uc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => s(e.tag, {
      class: ["v-list-item-subtitle", e.class],
      style: [{
        "--v-list-item-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), ho = mn("v-list-item-title"), bo = E({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: Z,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: Z,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: be(),
  onClickOnce: be(),
  ...ht(),
  ...Q(),
  ...Ue(),
  ...at(),
  ...it(),
  ...Ee(),
  ...va(),
  ...ce(),
  ...re(),
  ...qe({
    variant: "text"
  })
}, "VListItem"), cn = L()({
  name: "VListItem",
  directives: {
    Ripple: ut
  },
  props: bo(),
  emits: {
    click: (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = hn(e, t), o = h(() => e.value === void 0 ? i.href.value : e.value), {
      activate: r,
      isActivated: u,
      select: c,
      isSelected: f,
      isIndeterminate: m,
      isGroupActivator: g,
      root: d,
      parent: y,
      openOnSelect: v
    } = Aa(o, !1), b = so(), S = h(() => {
      var A;
      return e.active !== !1 && (e.active || ((A = i.isActive) == null ? void 0 : A.value) || (d.activatable.value ? u.value : f.value));
    }), k = h(() => e.link !== !1 && i.isLink.value), w = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || !!b && (d.selectable.value || d.activatable.value || e.value != null))), V = h(() => e.rounded || e.nav), P = h(() => e.color ?? e.activeColor), _ = h(() => ({
      color: S.value ? P.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    q(() => {
      var A;
      return (A = i.isActive) == null ? void 0 : A.value;
    }, (A) => {
      A && y.value != null && d.open(y.value, !0), A && v(A);
    }, {
      immediate: !0
    });
    const {
      themeClasses: x
    } = me(e), {
      borderClasses: $
    } = bt(e), {
      colorClasses: I,
      colorStyles: D,
      variantClasses: O
    } = $t(_), {
      densityClasses: C
    } = je(e), {
      dimensionStyles: T
    } = lt(e), {
      elevationClasses: B
    } = ot(e), {
      roundedClasses: M
    } = Te(V), W = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), K = h(() => ({
      isActive: S.value,
      select: c,
      isSelected: f.value,
      isIndeterminate: m.value
    }));
    function p(A) {
      var N;
      l("click", A), w.value && ((N = i.navigate) == null || N.call(i, A), !g && (d.activatable.value ? r(!u.value, A) : (d.selectable.value || e.value != null) && c(!f.value, A)));
    }
    function j(A) {
      (A.key === "Enter" || A.key === " ") && (A.preventDefault(), p(A));
    }
    return R(() => {
      const A = k.value ? "a" : e.tag, N = a.title || e.title != null, G = a.subtitle || e.subtitle != null, ue = !!(e.appendAvatar || e.appendIcon), ye = !!(ue || a.append), X = !!(e.prependAvatar || e.prependIcon), ie = !!(X || a.prepend);
      return b == null || b.updateHasPrepend(ie), e.activeColor && rr("active-color", ["color", "base-color"]), ve(s(A, {
        class: ["v-list-item", {
          "v-list-item--active": S.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": w.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !ie && (b == null ? void 0 : b.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && S.value
        }, x.value, $.value, I.value, C.value, B.value, W.value, M.value, O.value, e.class],
        style: [D.value, T.value, e.style],
        href: i.href.value,
        tabindex: w.value ? b ? -2 : 0 : void 0,
        onClick: p,
        onKeydown: w.value && !k.value && j
      }, {
        default: () => {
          var Ve;
          return [rt(w.value || S.value, "v-list-item"), ie && s("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? s(ne, {
            key: "prepend-defaults",
            disabled: !X,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var xe;
              return [(xe = a.prepend) == null ? void 0 : xe.call(a, K.value)];
            }
          }) : s(ee, null, [e.prependAvatar && s(mt, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && s(de, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), s("div", {
            class: "v-list-item__spacer"
          }, null)]), s("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [N && s(ho, {
            key: "title"
          }, {
            default: () => {
              var xe;
              return [((xe = a.title) == null ? void 0 : xe.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), G && s(yo, {
            key: "subtitle"
          }, {
            default: () => {
              var xe;
              return [((xe = a.subtitle) == null ? void 0 : xe.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (Ve = a.default) == null ? void 0 : Ve.call(a, K.value)]), ye && s("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? s(ne, {
            key: "append-defaults",
            disabled: !ue,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var xe;
              return [(xe = a.append) == null ? void 0 : xe.call(a, K.value)];
            }
          }) : s(ee, null, [e.appendIcon && s(de, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && s(mt, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), s("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[$e("ripple"), w.value && e.ripple]]);
    }), {
      activate: r,
      isActivated: u,
      isGroupActivator: g,
      isSelected: f,
      list: b,
      select: c
    };
  }
}), sc = E({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...Q(),
  ...ce()
}, "VListSubheader"), cc = L()({
  name: "VListSubheader",
  props: sc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = De(F(e, "color"));
    return R(() => {
      const i = !!(t.default || e.title);
      return s(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var o;
          return [i && s("div", {
            class: "v-list-subheader__text"
          }, [((o = t.default) == null ? void 0 : o.call(t)) ?? e.title])];
        }
      });
    }), {};
  }
}), dc = E({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), ko = L()({
  name: "VListChildren",
  props: dc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return uo(), () => {
      var a, l;
      return ((a = t.default) == null ? void 0 : a.call(t)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var g, d;
        let {
          children: o,
          props: r,
          type: u,
          raw: c
        } = i;
        if (u === "divider")
          return ((g = t.divider) == null ? void 0 : g.call(t, {
            props: r
          })) ?? s(vt, r, null);
        if (u === "subheader")
          return ((d = t.subheader) == null ? void 0 : d.call(t, {
            props: r
          })) ?? s(cc, r, null);
        const f = {
          subtitle: t.subtitle ? (y) => {
            var v;
            return (v = t.subtitle) == null ? void 0 : v.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: t.prepend ? (y) => {
            var v;
            return (v = t.prepend) == null ? void 0 : v.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          append: t.append ? (y) => {
            var v;
            return (v = t.append) == null ? void 0 : v.call(t, {
              ...y,
              item: c
            });
          } : void 0,
          title: t.title ? (y) => {
            var v;
            return (v = t.title) == null ? void 0 : v.call(t, {
              ...y,
              item: c
            });
          } : void 0
        }, m = sn.filterProps(r);
        return o ? s(sn, z({
          value: r == null ? void 0 : r.value
        }, m), {
          activator: (y) => {
            let {
              props: v
            } = y;
            const b = {
              ...r,
              ...v,
              value: e.returnObject ? c : r.value
            };
            return t.header ? t.header({
              props: b
            }) : s(cn, b, f);
          },
          default: () => s(ko, {
            items: o,
            returnObject: e.returnObject
          }, t)
        }) : t.item ? t.item({
          props: r
        }) : s(cn, z(r, {
          value: e.returnObject ? c : r.value
        }), f);
      }));
    };
  }
}), vc = E({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: nt
  }
}, "list-items");
function fc(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function mc(e, n) {
  const t = Oe(n, e.itemType, "item"), a = fc(n) ? n : Oe(n, e.itemTitle), l = Oe(n, e.itemValue, void 0), i = Oe(n, e.itemChildren), o = e.itemProps === !0 ? oe(n, ["children"]) : Oe(n, e.itemProps), r = {
    title: a,
    value: l,
    ...o
  };
  return {
    type: t,
    title: r.title,
    value: r.value,
    props: r,
    children: t === "item" && i ? So(e, i) : void 0,
    raw: n
  };
}
function So(e, n) {
  const t = [];
  for (const a of n)
    t.push(mc(e, a));
  return t;
}
function Co(e) {
  return {
    items: h(() => So(e, e.items))
  };
}
const wo = E({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": be(),
  "onClick:select": be(),
  "onUpdate:opened": be(),
  ...ac({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...ht(),
  ...Q(),
  ...Ue(),
  ...at(),
  ...it(),
  itemType: {
    type: String,
    default: "type"
  },
  ...vc(),
  ...Ee(),
  ...ce(),
  ...re(),
  ...qe({
    variant: "text"
  })
}, "VList"), Il = L()({
  name: "VList",
  props: wo(),
  emits: {
    "update:selected": (e) => !0,
    "update:activated": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:activate": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = Co(e), {
      themeClasses: l
    } = me(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: o
    } = ke(F(e, "bgColor")), {
      borderClasses: r
    } = bt(e), {
      densityClasses: u
    } = je(e), {
      dimensionStyles: c
    } = lt(e), {
      elevationClasses: f
    } = ot(e), {
      roundedClasses: m
    } = Te(e), {
      children: g,
      open: d,
      parents: y,
      select: v
    } = lc(e), b = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), S = F(e, "activeColor"), k = F(e, "baseColor"), w = F(e, "color");
    uo(), ze({
      VListGroup: {
        activeColor: S,
        baseColor: k,
        color: w,
        expandIcon: F(e, "expandIcon"),
        collapseIcon: F(e, "collapseIcon")
      },
      VListItem: {
        activeClass: F(e, "activeClass"),
        activeColor: S,
        baseColor: k,
        color: w,
        density: F(e, "density"),
        disabled: F(e, "disabled"),
        lines: F(e, "lines"),
        nav: F(e, "nav"),
        slim: F(e, "slim"),
        variant: F(e, "variant")
      }
    });
    const V = Y(!1), P = H();
    function _(C) {
      V.value = !0;
    }
    function x(C) {
      V.value = !1;
    }
    function $(C) {
      var T;
      !V.value && !(C.relatedTarget && ((T = P.value) != null && T.contains(C.relatedTarget))) && O();
    }
    function I(C) {
      const T = C.target;
      if (!(!P.value || ["INPUT", "TEXTAREA"].includes(T.tagName))) {
        if (C.key === "ArrowDown")
          O("next");
        else if (C.key === "ArrowUp")
          O("prev");
        else if (C.key === "Home")
          O("first");
        else if (C.key === "End")
          O("last");
        else
          return;
        C.preventDefault();
      }
    }
    function D(C) {
      V.value = !0;
    }
    function O(C) {
      if (P.value)
        return en(P.value, C);
    }
    return R(() => s(e.tag, {
      ref: P,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, u.value, f.value, b.value, m.value, e.class],
      style: [o.value, c.value, e.style],
      tabindex: e.disabled || V.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: _,
      onFocusout: x,
      onFocus: $,
      onKeydown: I,
      onMousedown: D
    }, {
      default: () => [s(ko, {
        items: a.value,
        returnObject: e.returnObject
      }, t)]
    })), {
      open: d,
      select: v,
      focus: O,
      children: g,
      parents: y
    };
  }
}), gc = E({
  start: Boolean,
  end: Boolean,
  ...Q(),
  ...ce()
}, "VListItemAction"), Al = L()({
  name: "VListItemAction",
  props: gc(),
  setup(e, n) {
    let {
      slots: t
    } = n;
    return R(() => s(e.tag, {
      class: ["v-list-item-action", {
        "v-list-item-action--start": e.start,
        "v-list-item-action--end": e.end
      }, e.class],
      style: e.style
    }, t)), {};
  }
}), xo = Symbol.for("vuetify:v-treeview"), yc = E({
  loading: Boolean,
  toggleIcon: Z,
  ...bo({
    slim: !0
  })
}, "VTreeviewItem"), Xn = L()({
  name: "VTreeviewItem",
  props: yc(),
  setup(e, n) {
    let {
      attrs: t,
      slots: a,
      emit: l
    } = n;
    const i = hn(e, t), o = h(() => e.value === void 0 ? i.href.value : e.value), r = H(), {
      activate: u,
      isActivated: c,
      select: f,
      isSelected: m,
      isIndeterminate: g,
      isGroupActivator: d,
      root: y,
      id: v
    } = Aa(o, !1), b = h(() => y.activatable.value && d), {
      densityClasses: S
    } = je(e, "v-list-item"), k = h(() => ({
      isActive: c.value,
      select: f,
      isSelected: m.value,
      isIndeterminate: g.value
    })), w = h(() => {
      var x;
      return !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!((x = r.value) != null && x.list));
    });
    function V(x) {
      var $, I;
      !w.value || !b.value && d || y.activatable.value && (b.value ? u(!c.value, x) : (I = r.value) == null || I.activate(!(($ = r.value) != null && $.isActivated), x));
    }
    function P(x) {
      (x.key === "Enter" || x.key === " ") && (x.preventDefault(), V(x));
    }
    const _ = ae(xo, {
      visibleIds: H()
    }).visibleIds;
    return R(() => {
      var O;
      const x = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, I = cn.filterProps(e), D = a.prepend || e.toggleIcon;
      return b.value ? ve(s("div", {
        class: ["v-list-item", "v-list-item--one-line", "v-treeview-item", "v-treeview-item--activetable-group-activator", {
          "v-list-item--active": c.value || m.value,
          "v-treeview-item--filtered": _.value && !_.value.has(v.value)
        }, S.value, e.class],
        onClick: V
      }, [s(ee, null, [rt(c.value || m.value, "v-list-item"), e.toggleIcon && s(Al, {
        start: !1
      }, {
        default: () => [s(te, {
          density: "compact",
          icon: e.toggleIcon,
          loading: e.loading,
          variant: "text",
          onClick: e.onClick
        }, {
          loader() {
            return s(ln, {
              indeterminate: "disable-shrink",
              size: "20",
              width: "2"
            }, null);
          }
        })]
      })]), s("div", {
        class: "v-list-item__content",
        "data-no-activator": ""
      }, [x && s(ho, {
        key: "title"
      }, {
        default: () => {
          var C;
          return [((C = a.title) == null ? void 0 : C.call(a, {
            title: e.title
          })) ?? e.title];
        }
      }), $ && s(yo, {
        key: "subtitle"
      }, {
        default: () => {
          var C;
          return [((C = a.subtitle) == null ? void 0 : C.call(a, {
            subtitle: e.subtitle
          })) ?? e.subtitle];
        }
      }), (O = a.default) == null ? void 0 : O.call(a, k.value)])]), [[$e("ripple"), w.value && e.ripple]]) : s(cn, z({
        ref: r
      }, I, {
        class: ["v-treeview-item", {
          "v-treeview-item--filtered": _.value && !_.value.has(v.value)
        }, e.class],
        value: v.value,
        onClick: V,
        onKeydown: w.value && P
      }), {
        ...a,
        prepend: D ? (C) => {
          var T;
          return s(ee, null, [e.toggleIcon && s(Al, {
            start: !1
          }, {
            default: () => [s(te, {
              density: "compact",
              icon: e.toggleIcon,
              loading: e.loading,
              variant: "text"
            }, {
              loader() {
                return s(ln, {
                  indeterminate: "disable-shrink",
                  size: "20",
                  width: "2"
                }, null);
              }
            })]
          }), (T = a.prepend) == null ? void 0 : T.call(a, C)]);
        } : void 0
      });
    }), {};
  }
}), Vo = Symbol.for("vuetify:selection-control-group"), _o = E({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: Z,
  trueIcon: Z,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: nt
  },
  ...Q(),
  ...Ue(),
  ...re()
}, "SelectionControlGroup"), hc = E({
  ..._o({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
L()({
  name: "VSelectionControlGroup",
  props: hc(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = J(e, "modelValue"), l = Ne(), i = h(() => e.id || `v-selection-control-group-${l}`), o = h(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return we(Vo, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((u) => u());
      },
      onForceUpdate: (u) => {
        r.add(u), Ie(() => {
          r.delete(u);
        });
      }
    }), ze({
      [e.defaultsTarget]: {
        color: F(e, "color"),
        disabled: F(e, "disabled"),
        density: F(e, "density"),
        error: F(e, "error"),
        inline: F(e, "inline"),
        modelValue: a,
        multiple: h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: o,
        falseIcon: F(e, "falseIcon"),
        trueIcon: F(e, "trueIcon"),
        readonly: F(e, "readonly"),
        ripple: F(e, "ripple"),
        type: F(e, "type"),
        valueComparator: F(e, "valueComparator")
      }
    }), R(() => {
      var u;
      return s("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(u = t.default) == null ? void 0 : u.call(t)]);
    }), {};
  }
});
const Po = E({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...Q(),
  ..._o()
}, "VSelectionControl");
function bc(e) {
  const n = ae(Vo, void 0), {
    densityClasses: t
  } = je(e), a = J(e, "modelValue"), l = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), o = h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = h({
    get() {
      const d = n ? n.modelValue.value : a.value;
      return o.value ? ge(d).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(d, l.value);
    },
    set(d) {
      if (e.readonly) return;
      const y = d ? l.value : i.value;
      let v = y;
      o.value && (v = d ? [...ge(a.value), y] : ge(a.value).filter((b) => !e.valueComparator(b, l.value))), n ? n.modelValue.value = v : a.value = v;
    }
  }), {
    textColorClasses: u,
    textColorStyles: c
  } = De(h(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: f,
    backgroundColorStyles: m
  } = ke(h(() => r.value && !e.error && !e.disabled ? e.color : e.baseColor)), g = h(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: n,
    densityClasses: t,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: u,
    textColorStyles: c,
    backgroundColorClasses: f,
    backgroundColorStyles: m,
    icon: g
  };
}
const El = L()({
  name: "VSelectionControl",
  directives: {
    Ripple: ut
  },
  inheritAttrs: !1,
  props: Po(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      attrs: t,
      slots: a
    } = n;
    const {
      group: l,
      densityClasses: i,
      icon: o,
      model: r,
      textColorClasses: u,
      textColorStyles: c,
      backgroundColorClasses: f,
      backgroundColorStyles: m,
      trueValue: g
    } = bc(e), d = Ne(), y = Y(!1), v = Y(!1), b = H(), S = h(() => e.id || `input-${d}`), k = h(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      b.value && (b.value.checked = r.value);
    });
    function w(x) {
      k.value && (y.value = !0, Wl(x.target, ":focus-visible") !== !1 && (v.value = !0));
    }
    function V() {
      y.value = !1, v.value = !1;
    }
    function P(x) {
      x.stopPropagation();
    }
    function _(x) {
      if (!k.value) {
        b.value && (b.value.checked = r.value);
        return;
      }
      e.readonly && l && he(() => l.forceUpdate()), r.value = x.target.checked;
    }
    return R(() => {
      var O, C;
      const x = a.label ? a.label({
        label: e.label,
        props: {
          for: S.value
        }
      }) : e.label, [$, I] = Nl(t), D = s("input", z({
        ref: b,
        checked: r.value,
        disabled: !!e.disabled,
        id: S.value,
        onBlur: V,
        onFocus: w,
        onInput: _,
        "aria-disabled": !!e.disabled,
        "aria-label": e.label,
        type: e.type,
        value: g.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, I), null);
      return s("div", z({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": v.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, $, {
        style: e.style
      }), [s("div", {
        class: ["v-selection-control__wrapper", u.value],
        style: c.value
      }, [(O = a.default) == null ? void 0 : O.call(a, {
        backgroundColorClasses: f,
        backgroundColorStyles: m
      }), ve(s("div", {
        class: ["v-selection-control__input"]
      }, [((C = a.input) == null ? void 0 : C.call(a, {
        model: r,
        textColorClasses: u,
        textColorStyles: c,
        backgroundColorClasses: f,
        backgroundColorStyles: m,
        inputNode: D,
        icon: o.value,
        props: {
          onFocus: w,
          onBlur: V,
          id: S.value
        }
      })) ?? s(ee, null, [o.value && s(de, {
        key: "icon",
        icon: o.value
      }, null), D])]), [[$e("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), x && s(Wi, {
        for: S.value,
        onClick: P
      }, {
        default: () => [x]
      })]);
    }), {
      isFocused: y,
      input: b
    };
  }
}), kc = E({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: Z,
    default: "$checkboxIndeterminate"
  },
  ...Po({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Sc = L()({
  name: "VCheckboxBtn",
  props: kc(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = J(e, "indeterminate"), l = J(e, "modelValue");
    function i(u) {
      a.value && (a.value = !1);
    }
    const o = h(() => a.value ? e.indeterminateIcon : e.falseIcon), r = h(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return R(() => {
      const u = oe(El.filterProps(e), ["modelValue"]);
      return s(El, z(u, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: o.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), t);
    }), {};
  }
}), Io = E({
  loadChildren: Function,
  loadingIcon: {
    type: String,
    default: "$loading"
  },
  items: Array,
  selectable: Boolean,
  selectStrategy: [String, Function, Object]
}, "VTreeviewChildren"), dn = L()({
  name: "VTreeviewChildren",
  props: Io(),
  setup(e, n) {
    let {
      emit: t,
      slots: a
    } = n;
    const l = Y(null);
    function i(r) {
      return new Promise((u) => {
        var c, f;
        if (!((c = e.items) != null && c.length) || !e.loadChildren) return u();
        if (((f = r == null ? void 0 : r.children) == null ? void 0 : f.length) === 0) {
          l.value = r.value, e.loadChildren(r).then(u);
          return;
        }
        u();
      }).finally(() => {
        l.value = null;
      });
    }
    function o(r, u) {
      e.selectable && r(!u);
    }
    return () => {
      var r, u;
      return ((r = a.default) == null ? void 0 : r.call(a)) ?? ((u = e.items) == null ? void 0 : u.map((c) => {
        var S;
        let {
          children: f,
          props: m,
          raw: g
        } = c;
        const d = l.value === g.value, y = {
          prepend: (k) => {
            var w;
            return s(ee, null, [e.selectable && (!f || f && !["leaf", "single-leaf"].includes(e.selectStrategy)) && s("div", null, [s(Sc, {
              key: g.value,
              modelValue: k.isSelected,
              loading: d,
              indeterminate: k.isIndeterminate,
              onClick: Ro(() => o(k.select, k.isSelected), ["stop"]),
              onKeydown: (V) => {
                ["Enter", "Space"].includes(V.key) && (V.stopPropagation(), o(k.select, k.isSelected));
              }
            }, null)]), (w = a.prepend) == null ? void 0 : w.call(a, {
              ...k,
              item: g
            })]);
          },
          append: a.append ? (k) => {
            var w;
            return (w = a.append) == null ? void 0 : w.call(a, {
              ...k,
              item: g
            });
          } : void 0,
          title: a.title ? (k) => {
            var w;
            return (w = a.title) == null ? void 0 : w.call(a, {
              ...k,
              item: g
            });
          } : void 0
        }, v = Kn.filterProps(m), b = dn.filterProps(e);
        return f ? s(Kn, z({
          value: m == null ? void 0 : m.value
        }, v), {
          activator: (k) => {
            let {
              props: w
            } = k;
            const V = {
              ...m,
              ...w,
              value: m == null ? void 0 : m.value
            };
            return s(Xn, z(V, {
              loading: d,
              onClick: () => i(g)
            }), y);
          },
          default: () => s(dn, z(b, {
            items: f
          }), a)
        }) : ((S = a.item) == null ? void 0 : S.call(a, {
          props: m
        })) ?? s(Xn, m, y);
      }));
    };
  }
}), Cc = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), wc = E({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function xc(e, n, t) {
  var r;
  const a = [], l = (t == null ? void 0 : t.default) ?? Cc, i = t != null && t.filterKeys ? ge(t.filterKeys) : !1, o = Object.keys((t == null ? void 0 : t.customKeyFilter) ?? {}).length;
  if (!(e != null && e.length)) return a;
  e: for (let u = 0; u < e.length; u++) {
    const [c, f = c] = ge(e[u]), m = {}, g = {};
    let d = -1;
    if ((n || o > 0) && !(t != null && t.noFilter)) {
      if (typeof c == "object") {
        const b = i || Object.keys(f);
        for (const S of b) {
          const k = Oe(f, S), w = (r = t == null ? void 0 : t.customKeyFilter) == null ? void 0 : r[S];
          if (d = w ? w(k, n, c) : l(k, n, c), d !== -1 && d !== !1)
            w ? m[S] = d : g[S] = d;
          else if ((t == null ? void 0 : t.filterMode) === "every")
            continue e;
        }
      } else
        d = l(c, n, c), d !== -1 && d !== !1 && (g.title = d);
      const y = Object.keys(g).length, v = Object.keys(m).length;
      if (!y && !v || (t == null ? void 0 : t.filterMode) === "union" && v !== o && !y || (t == null ? void 0 : t.filterMode) === "intersection" && (v !== o || !y)) continue;
    }
    a.push({
      index: u,
      matches: {
        ...g,
        ...m
      }
    });
  }
  return a;
}
function Vc(e, n, t, a) {
  const l = H([]), i = H(/* @__PURE__ */ new Map()), o = h(() => Pe(n));
  Me(() => {
    const u = typeof t == "function" ? t() : Pe(t), c = typeof u != "string" && typeof u != "number" ? "" : String(u), f = xc(o.value, c, {
      customKeyFilter: {
        ...e.customKeyFilter,
        ...Pe(a == null ? void 0 : a.customKeyFilter)
      },
      default: e.customFilter,
      filterKeys: e.filterKeys,
      filterMode: e.filterMode,
      noFilter: e.noFilter
    }), m = Pe(n), g = [], d = /* @__PURE__ */ new Map();
    f.forEach((y) => {
      let {
        index: v,
        matches: b
      } = y;
      const S = m[v];
      g.push(S), d.set(S.value, b);
    }), l.value = g, i.value = d;
  });
  function r(u) {
    return i.value.get(u.value);
  }
  return {
    filteredItems: l,
    filteredMatches: i,
    getMatches: r
  };
}
function Ao(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  for (const t of e)
    n.push(t), t.children && Ao(t.children, n);
  return n;
}
const _c = E({
  openAll: Boolean,
  search: String,
  ...wc({
    filterKeys: ["title"]
  }),
  ...Io(),
  ...oe(wo({
    collapseIcon: "$treeviewCollapse",
    expandIcon: "$treeviewExpand",
    slim: !0
  }), ["nav"])
}, "VTreeview"), Pc = L()({
  name: "VTreeview",
  props: _c(),
  emits: {
    "update:opened": (e) => !0,
    "update:activated": (e) => !0,
    "update:selected": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const {
      items: a
    } = Co(e), l = F(e, "activeColor"), i = F(e, "baseColor"), o = F(e, "color"), r = J(e, "activated"), u = J(e, "selected"), c = H(), f = h(() => e.openAll ? S(a.value) : e.opened), m = h(() => Ao(a.value)), g = F(e, "search"), {
      filteredItems: d
    } = Vc(e, m, g), y = h(() => g.value ? new Set(d.value.flatMap((k) => [...v(k.props.value), ...b(k.props.value)])) : null);
    function v(k) {
      var P;
      const w = [];
      let V = k;
      for (; V != null; )
        w.unshift(V), V = (P = c.value) == null ? void 0 : P.parents.get(V);
      return w;
    }
    function b(k) {
      var P, _;
      const w = [], V = (((P = c.value) == null ? void 0 : P.children.get(k)) ?? []).slice();
      for (; V.length; ) {
        const x = V.shift();
        x && (w.push(x), V.push(...(((_ = c.value) == null ? void 0 : _.children.get(x)) ?? []).slice()));
      }
      return w;
    }
    function S(k) {
      let w = [];
      for (const V of k)
        V.children && (w.push(V.value), V.children && (w = w.concat(S(V.children))));
      return w;
    }
    return we(xo, {
      visibleIds: y
    }), ze({
      VTreeviewGroup: {
        activeColor: l,
        baseColor: i,
        color: o,
        collapseIcon: F(e, "collapseIcon"),
        expandIcon: F(e, "expandIcon")
      },
      VTreeviewItem: {
        activeClass: F(e, "activeClass"),
        activeColor: l,
        baseColor: i,
        color: o,
        density: F(e, "density"),
        disabled: F(e, "disabled"),
        lines: F(e, "lines"),
        variant: F(e, "variant")
      }
    }), R(() => {
      const k = Il.filterProps(e), w = dn.filterProps(e);
      return s(Il, z({
        ref: c
      }, k, {
        class: ["v-treeview", e.class],
        style: e.style,
        opened: f.value,
        activated: r.value,
        "onUpdate:activated": (V) => r.value = V,
        selected: u.value,
        "onUpdate:selected": (V) => u.value = V
      }), {
        default: () => [s(dn, z(w, {
          items: a.value
        }), t)]
      });
    }), {
      open
    };
  }
}), Ic = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VCalendar: Pu,
  VCalendarDay: Kt,
  VCalendarHeader: Rn,
  VCalendarInterval: $n,
  VCalendarIntervalEvent: On,
  VCalendarMonthDay: _i,
  VDateInput: ms,
  VNumberInput: hs,
  VPicker: Et,
  VPickerTitle: Di,
  VPullToRefresh: Ns,
  VSnackbarQueue: Hs,
  VStepperVertical: Ls,
  VStepperVerticalActions: qi,
  VStepperVerticalItem: Zi,
  VTimePicker: Ks,
  VTimePickerClock: Gn,
  VTimePickerControls: Un,
  VTreeview: Pc,
  VTreeviewGroup: Kn,
  VTreeviewItem: Xn
}, Symbol.toStringTag, { value: "Module" })), Ac = E({
  id: String,
  text: String,
  ...oe(kn({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), Ec = L()({
  name: "VTooltip",
  props: Ac(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, n) {
    let {
      slots: t
    } = n;
    const a = J(e, "modelValue"), {
      scopeId: l
    } = bn(), i = Ne(), o = h(() => e.id || `v-tooltip-${i}`), r = H(), u = h(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = h(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), f = h(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), m = h(() => z({
      "aria-describedby": o.value
    }, e.activatorProps));
    return R(() => {
      const g = gt.filterProps(e);
      return s(gt, z({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: o.value
      }, g, {
        modelValue: a.value,
        "onUpdate:modelValue": (d) => a.value = d,
        transition: f.value,
        absolute: !0,
        location: u.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: m.value,
        _disableGlobalStack: !0
      }, l), {
        activator: t.activator,
        default: function() {
          var b;
          for (var d = arguments.length, y = new Array(d), v = 0; v < d; v++)
            y[v] = arguments[v];
          return ((b = t.default) == null ? void 0 : b.call(t, ...y)) ?? e.text;
        }
      });
    }), Sn({}, r);
  }
});
function Tc(e, n) {
  const t = n.modifiers || {}, a = n.value, {
    once: l,
    immediate: i,
    ...o
  } = t, r = !Object.keys(o).length, {
    handler: u,
    options: c
  } = typeof a == "object" ? a : {
    handler: a,
    options: {
      attributes: (o == null ? void 0 : o.attr) ?? r,
      characterData: (o == null ? void 0 : o.char) ?? r,
      childList: (o == null ? void 0 : o.child) ?? r,
      subtree: (o == null ? void 0 : o.sub) ?? r
    }
  }, f = new MutationObserver(function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], g = arguments.length > 1 ? arguments[1] : void 0;
    u == null || u(m, g), l && Eo(e, n);
  });
  i && (u == null || u([], f)), e._mutate = Object(e._mutate), e._mutate[n.instance.$.uid] = {
    observer: f
  }, f.observe(e, c);
}
function Eo(e, n) {
  var t;
  (t = e._mutate) != null && t[n.instance.$.uid] && (e._mutate[n.instance.$.uid].observer.disconnect(), delete e._mutate[n.instance.$.uid]);
}
const Bc = {
  mounted: Tc,
  unmounted: Eo
};
function pc(e, n) {
  var l, i;
  const t = n.value, a = {
    passive: !((l = n.modifiers) != null && l.active)
  };
  window.addEventListener("resize", t, a), e._onResize = Object(e._onResize), e._onResize[n.instance.$.uid] = {
    handler: t,
    options: a
  }, (i = n.modifiers) != null && i.quiet || t();
}
function Mc(e, n) {
  var l;
  if (!((l = e._onResize) != null && l[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a
  } = e._onResize[n.instance.$.uid];
  window.removeEventListener("resize", t, a), delete e._onResize[n.instance.$.uid];
}
const Dc = {
  mounted: pc,
  unmounted: Mc
};
function To(e, n) {
  const {
    self: t = !1
  } = n.modifiers ?? {}, a = n.value, l = typeof a == "object" && a.options || {
    passive: !0
  }, i = typeof a == "function" || "handleEvent" in a ? a : a.handler, o = t ? e : n.arg ? document.querySelector(n.arg) : window;
  o && (o.addEventListener("scroll", i, l), e._onScroll = Object(e._onScroll), e._onScroll[n.instance.$.uid] = {
    handler: i,
    options: l,
    // Don't reference self
    target: t ? void 0 : o
  });
}
function Bo(e, n) {
  var i;
  if (!((i = e._onScroll) != null && i[n.instance.$.uid])) return;
  const {
    handler: t,
    options: a,
    target: l = e
  } = e._onScroll[n.instance.$.uid];
  l.removeEventListener("scroll", t, a), delete e._onScroll[n.instance.$.uid];
}
function Oc(e, n) {
  n.value !== n.oldValue && (Bo(e, n), To(e, n));
}
const $c = {
  mounted: To,
  unmounted: Bo,
  updated: Oc
};
function Lc(e, n) {
  const t = typeof e == "string" ? Ho(e) : e, a = Nc(t, n);
  return {
    mounted: a,
    updated: a,
    unmounted(l) {
      Ml(null, l);
    }
  };
}
function Nc(e, n) {
  return function(t, a, l) {
    var m, g, d;
    const i = typeof n == "function" ? n(a) : n, o = ((m = a.value) == null ? void 0 : m.text) ?? a.value ?? (i == null ? void 0 : i.text), r = Qt(a.value) ? a.value : {}, u = () => o ?? t.innerHTML, c = (l.ctx === a.instance.$ ? (g = Fc(l, a.instance.$)) == null ? void 0 : g.provides : (d = l.ctx) == null ? void 0 : d.provides) ?? a.instance.$.provides, f = yt(e, z(i, r), u);
    f.appContext = Object.assign(/* @__PURE__ */ Object.create(null), a.instance.$.appContext, {
      provides: c
    }), Ml(f, t);
  };
}
function Fc(e, n) {
  const t = /* @__PURE__ */ new Set(), a = (i) => {
    var o, r;
    for (const u of i) {
      if (!u) continue;
      if (u === e)
        return !0;
      t.add(u);
      let c;
      if (u.suspense ? c = a([u.ssContent]) : Array.isArray(u.children) ? c = a(u.children) : (o = u.component) != null && o.vnode && (c = a([(r = u.component) == null ? void 0 : r.subTree])), c)
        return c;
      t.delete(u);
    }
    return !1;
  };
  if (!a([n.subTree]))
    throw new Error("Could not find original vnode");
  const l = Array.from(t).reverse();
  for (const i of l)
    if (i.component)
      return i.component;
  return n;
}
const Rc = Lc(Ec, (e) => {
  var n;
  return {
    activator: "parent",
    location: ((n = e.arg) == null ? void 0 : n.replace("-", " ")) ?? "top",
    text: typeof e.value == "boolean" ? void 0 : e.value
  };
}), Hc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickOutside: Hi,
  Intersect: fa,
  Mutate: Bc,
  Resize: Dc,
  Ripple: ut,
  Scroll: $c,
  Tooltip: Rc,
  Touch: _a
}, Symbol.toStringTag, { value: "Module" })), Yc = Wo({
  components: {
    ...Ic
  },
  directives: Hc,
  icons: {
    defaultSet: "mdi",
    // keep mdi as default
    aliases: {
      ...Mr
    },
    sets: {
      mdi: Dr
      // built-in
      // tabler: tablerIconSet,  // custom (removed)
    }
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: !1,
        colors: {
          primary: "#2196f3",
          secondary: "#f5f5f5",
          background: "#f5f5f5"
        }
      }
    }
  }
});
function Wc(e) {
  if (e === 0) return "zero";
  const n = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ], t = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ], a = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  function l(f) {
    if (f === 0) return "";
    if (f < 10) return n[f];
    if (f < 20) return a[f - 10];
    if (f < 100)
      return t[Math.floor(f / 10)] + (f % 10 !== 0 ? " " + n[f % 10] : "");
    if (f < 1e3)
      return n[Math.floor(f / 100)] + " hundred" + (f % 100 !== 0 ? " and " + l(f % 100) : "");
  }
  function i(f) {
    if (f === 0) return "zero";
    const m = Math.floor(f / 1e7), g = Math.floor(f % 1e7 / 1e5), d = Math.floor(f % 1e5 / 1e3), y = f % 1e3;
    let v = "";
    return m > 0 && (v += l(m) + " crore"), g > 0 && (v !== "" && (v += " "), v += l(g) + " lakh"), d > 0 && (v !== "" && (v += " "), v += l(d) + " thousand"), y > 0 && (v !== "" && (v += " "), v += l(y)), v;
  }
  const o = e.toString().split("."), r = parseInt(o[0]), u = o[1] ? parseInt(o[1]) : 0;
  let c = i(r);
  return u > 0 && (c += " and " + i(u) + " paise"), c.charAt(0).toUpperCase() + c.slice(1);
}
function Gc(e, n = "₹") {
  const t = parseFloat(e) || 0, a = Wc(t);
  return {
    amount: t,
    formattedAmount: `${n}${t.toLocaleString("en-IN", {
      minimumFractionDigits: 2
    })}`,
    words: `${a} rupees only`,
    wordsOnly: a
  };
}
const se = {
  // Required field validation
  required: (e) => !e || typeof e == "string" && e.trim() === "" ? "This field is required" : !0,
  // Email validation
  email: (e) => e ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? !0 : "Please enter a valid email address" : !0,
  // Phone number validation (Indian format)
  phone: (e) => e ? /^[6-9]\d{9}$/.test(e.replace(/\s/g, "")) ? !0 : "Please enter a valid 10-digit phone number" : !0,
  // PAN validation
  pan: (e) => e ? /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(e.toUpperCase()) ? !0 : "Please enter a valid PAN number" : !0,
  // GSTIN validation
  gstin: (e) => e ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(e.toUpperCase()) ? !0 : "Please enter a valid GSTIN" : !0,
  // Pincode validation
  pincode: (e) => e ? /^[1-9][0-9]{5}$/.test(e) ? !0 : "Please enter a valid 6-digit pincode" : !0,
  // Amount validation (positive number)
  amount: (e) => {
    if (!e) return !0;
    const n = parseFloat(e);
    return isNaN(n) || n < 0 ? "Please enter a valid positive amount" : !0;
  },
  // Percentage validation (0-100)
  percentage: (e) => {
    if (!e) return !0;
    const n = parseFloat(e);
    return isNaN(n) || n < 0 || n > 100 ? "Please enter a valid percentage between 0 and 100" : !0;
  },
  // Minimum length validation
  minLength: (e) => (n) => n && n.length < e ? `Minimum ${e} characters required` : !0,
  // Maximum length validation
  maxLength: (e) => (n) => n && n.length > e ? `Maximum ${e} characters allowed` : !0,
  // Date validation
  date: (e) => {
    if (!e) return !0;
    const n = new Date(e);
    return isNaN(n.getTime()) ? "Please enter a valid date" : !0;
  },
  // Future date validation
  futureDate: (e) => {
    if (!e) return !0;
    const n = new Date(e), t = /* @__PURE__ */ new Date();
    return t.setHours(0, 0, 0, 0), n < t ? "Date cannot be in the past" : !0;
  },
  // Past date validation
  pastDate: (e) => {
    if (!e) return !0;
    const n = new Date(e), t = /* @__PURE__ */ new Date();
    return t.setHours(0, 0, 0, 0), n > t ? "Date cannot be in the future" : !0;
  }
}, Uc = {
  // Date validation for journal entries
  entryDate: (e) => {
    const n = se.required(e);
    if (n !== !0) return n;
    const t = se.date(e);
    return t !== !0 ? t : !0;
  },
  // Account validation
  account: (e) => {
    const n = se.required(e);
    return n !== !0 ? n : !0;
  },
  // Amount validation for journal entries
  entryAmount: (e) => {
    const n = se.required(e);
    if (n !== !0) return n;
    const t = se.amount(e);
    return t !== !0 ? t : !0;
  },
  // Description validation
  description: (e) => {
    const n = se.required(e);
    if (n !== !0) return n;
    const t = se.minLength(10)(e);
    if (t !== !0) return t;
    const a = se.maxLength(254)(e);
    return a !== !0 ? a : !0;
  },
  // Voucher type validation
  voucherType: (e) => {
    const n = se.required(e);
    return n !== !0 ? n : !0;
  }
}, qc = {
  // Ledger name validation
  ledgerName: (e) => {
    const n = se.required(e);
    if (n !== !0) return n;
    const t = se.minLength(2)(e);
    if (t !== !0) return t;
    const a = se.maxLength(100)(e);
    return a !== !0 ? a : !0;
  },
  // Parent group validation
  parentGroup: (e) => {
    const n = se.required(e);
    return n !== !0 ? n : !0;
  }
}, Kc = {
  // Customer name validation
  customerName: (e) => {
    const n = se.required(e);
    if (n !== !0) return n;
    const t = se.minLength(2)(e);
    return t !== !0 ? t : !0;
  },
  // Customer email validation
  customerEmail: (e) => e ? se.email(e) : !0,
  // Customer phone validation
  customerPhone: (e) => e ? se.phone(e) : !0,
  // Customer GSTIN validation
  customerGSTIN: (e) => e ? se.gstin(e) : !0,
  // Customer PAN validation
  customerPAN: (e) => e ? se.pan(e) : !0,
  // Opening balance validation
  openingBalance: (e) => e ? se.amount(e) : !0
}, Xc = (e, n) => {
  const t = {};
  for (const [a, l] of Object.entries(e))
    if (n[a]) {
      const i = n[a](l);
      i !== !0 && (t[a] = i);
    }
  return {
    isValid: Object.keys(t).length === 0,
    errors: t
  };
}, Qc = (e, n) => n(e);
export {
  se as commonValidations,
  Kc as customerValidations,
  Gc as formatAmountWithWords,
  Uc as journalEntryValidations,
  qc as ledgerValidations,
  Wc as numberToWords,
  Qc as validateField,
  Xc as validateForm,
  Yc as vuetify
};
