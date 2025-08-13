import { i as C, p as S, O as b, W as k, aI as i } from "./main-DaW4PQ0p.js";
import { computed as N, h as j, capitalize as u } from "vue";
const V = i.reduce((t, a) => (t[a] = {
  type: [Boolean, String, Number],
  default: !1
}, t), {}), v = i.reduce((t, a) => {
  const e = "offset" + u(a);
  return t[e] = {
    type: [String, Number],
    default: null
  }, t;
}, {}), L = i.reduce((t, a) => {
  const e = "order" + u(a);
  return t[e] = {
    type: [String, Number],
    default: null
  }, t;
}, {}), y = {
  col: Object.keys(V),
  offset: Object.keys(v),
  order: Object.keys(L)
};
function G(t, a, e) {
  let l = t;
  if (!(e == null || e === !1)) {
    if (a) {
      const n = a.replace(t, "");
      l += `-${n}`;
    }
    return t === "col" && (l = "v-" + l), t === "col" && (e === "" || e === !0) || (l += `-${e}`), l.toLowerCase();
  }
}
const I = ["auto", "start", "end", "center", "baseline", "stretch"], _ = S({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...V,
  offset: {
    type: [String, Number],
    default: null
  },
  ...v,
  order: {
    type: [String, Number],
    default: null
  },
  ...L,
  alignSelf: {
    type: String,
    default: null,
    validator: (t) => I.includes(t)
  },
  ...k(),
  ...b()
}, "VCol"), W = C()({
  name: "VCol",
  props: _(),
  setup(t, a) {
    let {
      slots: e
    } = a;
    const l = N(() => {
      const n = [];
      let s;
      for (s in y)
        y[s].forEach((o) => {
          const c = t[o], g = G(s, o, c);
          g && n.push(g);
        });
      const r = n.some((o) => o.startsWith("v-col-"));
      return n.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !r || !t.cols,
        [`v-col-${t.cols}`]: t.cols,
        [`offset-${t.offset}`]: t.offset,
        [`order-${t.order}`]: t.order,
        [`align-self-${t.alignSelf}`]: t.alignSelf
      }), n;
    });
    return () => {
      var n;
      return j(t.tag, {
        class: [l.value, t.class],
        style: t.style
      }, (n = e.default) == null ? void 0 : n.call(e));
    };
  }
}), f = ["start", "end", "center"], $ = ["space-between", "space-around", "space-evenly"];
function d(t, a) {
  return i.reduce((e, l) => {
    const n = t + u(l);
    return e[n] = a(), e;
  }, {});
}
const R = [...f, "baseline", "stretch"], h = (t) => R.includes(t), w = d("align", () => ({
  type: String,
  default: null,
  validator: h
})), T = [...f, ...$], P = (t) => T.includes(t), E = d("justify", () => ({
  type: String,
  default: null,
  validator: P
})), U = [...f, ...$, "stretch"], A = (t) => U.includes(t), O = d("alignContent", () => ({
  type: String,
  default: null,
  validator: A
})), m = {
  align: Object.keys(w),
  justify: Object.keys(E),
  alignContent: Object.keys(O)
}, B = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function M(t, a, e) {
  let l = B[t];
  if (e != null) {
    if (a) {
      const n = a.replace(t, "");
      l += `-${n}`;
    }
    return l += `-${e}`, l.toLowerCase();
  }
}
const F = S({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: h
  },
  ...w,
  justify: {
    type: String,
    default: null,
    validator: P
  },
  ...E,
  alignContent: {
    type: String,
    default: null,
    validator: A
  },
  ...O,
  ...k(),
  ...b()
}, "VRow"), z = C()({
  name: "VRow",
  props: F(),
  setup(t, a) {
    let {
      slots: e
    } = a;
    const l = N(() => {
      const n = [];
      let s;
      for (s in m)
        m[s].forEach((r) => {
          const o = t[r], c = M(s, r, o);
          c && n.push(c);
        });
      return n.push({
        "v-row--no-gutters": t.noGutters,
        "v-row--dense": t.dense,
        [`align-${t.align}`]: t.align,
        [`justify-${t.justify}`]: t.justify,
        [`align-content-${t.alignContent}`]: t.alignContent
      }), n;
    });
    return () => {
      var n;
      return j(t.tag, {
        class: ["v-row", l.value, t.class],
        style: t.style
      }, (n = e.default) == null ? void 0 : n.call(e));
    };
  }
});
export {
  z as V,
  W as a
};
