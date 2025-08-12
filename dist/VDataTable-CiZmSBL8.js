import { toRef as T, provide as q, inject as K, ref as M, computed as I, watch as Be, watchEffect as Ce, onBeforeUpdate as ft, shallowRef as vt, createVNode as o, mergeProps as F, nextTick as Pe, capitalize as gt, Fragment as z, createTextVNode as xe, withModifiers as Se, toDisplayString as mt, toRefs as bt } from "vue";
import { aP as ht, l as H, p as B, aQ as ae, aR as Ae, aS as $e, as as ue, a5 as oe, H as Y, aT as J, i as j, aU as yt, y as pt, aV as ne, am as de, aW as Pt, aX as ee, u as U, b as G, M as xt, N as St, O as wt, aY as kt, P as It, S as Dt, U as Vt, W as Tt, aZ as _t, I as $, a_ as we, a$ as Ft, ao as O, b0 as Bt, aE as Ct, ak as At, aG as $t, b1 as Lt, b2 as fe, d as Rt, K as ke, ay as ve, b3 as ie, b4 as te, av as Ot, V as Nt, aB as Et } from "./main-V1ksYwjH.js";
import { b as Le } from "./VCard-BbSjOW7e.js";
import { V as Ie, m as Mt } from "./VTable-_YnAegHv.js";
function De(e, l, a) {
  return Object.keys(e).filter((t) => ht(t) && t.endsWith(l)).reduce((t, n) => (t[n.slice(0, -l.length)] = (r) => e[n](r, a(r)), t), {});
}
const Gt = B({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand"), Re = Symbol.for("vuetify:datatable:expanded");
function Ht(e) {
  const l = T(e, "expandOnClick"), a = H(e, "expanded", e.expanded, (s) => new Set(s), (s) => [...s.values()]);
  function t(s, c) {
    const f = new Set(a.value);
    c ? f.add(s.value) : f.delete(s.value), a.value = f;
  }
  function n(s) {
    return a.value.has(s.value);
  }
  function r(s) {
    t(s, !n(s));
  }
  const u = {
    expand: t,
    expanded: a,
    expandOnClick: l,
    isExpanded: n,
    toggleExpand: r
  };
  return q(Re, u), u;
}
function Oe() {
  const e = K(Re);
  if (!e) throw new Error("foo");
  return e;
}
const jt = B({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group"), Ne = Symbol.for("vuetify:data-table-group");
function Wt(e) {
  return {
    groupBy: H(e, "groupBy")
  };
}
function zt(e) {
  const {
    disableSort: l,
    groupBy: a,
    sortBy: t
  } = e, n = M(/* @__PURE__ */ new Set()), r = I(() => a.value.map((g) => ({
    ...g,
    order: g.order ?? !1
  })).concat(l != null && l.value ? [] : t.value));
  function u(g) {
    return n.value.has(g.id);
  }
  function s(g) {
    const y = new Set(n.value);
    u(g) ? y.delete(g.id) : y.add(g.id), n.value = y;
  }
  function c(g) {
    function y(v) {
      const P = [];
      for (const b of v.items)
        "type" in b && b.type === "group" ? P.push(...y(b)) : P.push(b);
      return P;
    }
    return y({
      items: g
    });
  }
  const f = {
    sortByWithGroups: r,
    toggleGroup: s,
    opened: n,
    groupBy: a,
    extractRows: c,
    isGroupOpen: u
  };
  return q(Ne, f), f;
}
function Ee() {
  const e = K(Ne);
  if (!e) throw new Error("Missing group!");
  return e;
}
function qt(e, l) {
  if (!e.length) return [];
  const a = /* @__PURE__ */ new Map();
  for (const t of e) {
    const n = ae(t.raw, l);
    a.has(n) || a.set(n, []), a.get(n).push(t);
  }
  return a;
}
function Me(e, l) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!l.length) return [];
  const n = qt(e, l[0]), r = [], u = l.slice(1);
  return n.forEach((s, c) => {
    const f = l[0], g = `${t}_${f}_${c}`;
    r.push({
      depth: a,
      id: g,
      key: f,
      value: c,
      items: u.length ? Me(s, u, a + 1, g) : s,
      type: "group"
    });
  }), r;
}
function Ge(e, l) {
  const a = [];
  for (const t of e)
    "type" in t && t.type === "group" ? (t.value != null && a.push(t), (l.has(t.id) || t.value == null) && a.push(...Ge(t.items, l))) : a.push(t);
  return a;
}
function Kt(e, l, a) {
  return {
    flatItems: I(() => {
      if (!l.value.length) return e.value;
      const n = Me(e.value, l.value.map((r) => r.key));
      return Ge(n, a.value);
    })
  };
}
function Ut(e) {
  let {
    page: l,
    itemsPerPage: a,
    sortBy: t,
    groupBy: n,
    search: r
  } = e;
  const u = Ae("VDataTable"), s = I(() => ({
    page: l.value,
    itemsPerPage: a.value,
    sortBy: t.value,
    groupBy: n.value,
    search: r.value
  }));
  let c = null;
  Be(s, () => {
    $e(c, s.value) || (c && c.search !== s.value.search && (l.value = 1), u.emit("update:options", s.value), c = s.value);
  }, {
    deep: !0,
    immediate: !0
  });
}
const Qt = B({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate"), He = Symbol.for("vuetify:data-table-pagination");
function Xt(e) {
  const l = H(e, "page", void 0, (t) => +(t ?? 1)), a = H(e, "itemsPerPage", void 0, (t) => +(t ?? 10));
  return {
    page: l,
    itemsPerPage: a
  };
}
function Yt(e) {
  const {
    page: l,
    itemsPerPage: a,
    itemsLength: t
  } = e, n = I(() => a.value === -1 ? 0 : a.value * (l.value - 1)), r = I(() => a.value === -1 ? t.value : Math.min(t.value, n.value + a.value)), u = I(() => a.value === -1 || t.value === 0 ? 1 : Math.ceil(t.value / a.value));
  Ce(() => {
    l.value > u.value && (l.value = u.value);
  });
  function s(v) {
    a.value = v, l.value = 1;
  }
  function c() {
    l.value = ue(l.value + 1, 1, u.value);
  }
  function f() {
    l.value = ue(l.value - 1, 1, u.value);
  }
  function g(v) {
    l.value = ue(v, 1, u.value);
  }
  const y = {
    page: l,
    itemsPerPage: a,
    startIndex: n,
    stopIndex: r,
    pageCount: u,
    itemsLength: t,
    nextPage: c,
    prevPage: f,
    setPage: g,
    setItemsPerPage: s
  };
  return q(He, y), y;
}
function Zt() {
  const e = K(He);
  if (!e) throw new Error("Missing pagination!");
  return e;
}
function Jt(e) {
  const l = Ae("usePaginatedItems"), {
    items: a,
    startIndex: t,
    stopIndex: n,
    itemsPerPage: r
  } = e, u = I(() => r.value <= 0 ? a.value : a.value.slice(t.value, n.value));
  return Be(u, (s) => {
    l.emit("update:currentItems", s);
  }), {
    paginatedItems: u
  };
}
const ea = {
  showSelectAll: !1,
  allSelected: () => [],
  select: (e) => {
    var t;
    let {
      items: l,
      value: a
    } = e;
    return new Set(a ? [(t = l[0]) == null ? void 0 : t.value] : []);
  },
  selectAll: (e) => {
    let {
      selected: l
    } = e;
    return l;
  }
}, je = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      currentPage: l
    } = e;
    return l;
  },
  select: (e) => {
    let {
      items: l,
      value: a,
      selected: t
    } = e;
    for (const n of l)
      a ? t.add(n.value) : t.delete(n.value);
    return t;
  },
  selectAll: (e) => {
    let {
      value: l,
      currentPage: a,
      selected: t
    } = e;
    return je.select({
      items: a,
      value: l,
      selected: t
    });
  }
}, We = {
  showSelectAll: !0,
  allSelected: (e) => {
    let {
      allItems: l
    } = e;
    return l;
  },
  select: (e) => {
    let {
      items: l,
      value: a,
      selected: t
    } = e;
    for (const n of l)
      a ? t.add(n.value) : t.delete(n.value);
    return t;
  },
  selectAll: (e) => {
    let {
      value: l,
      allItems: a,
      selected: t
    } = e;
    return We.select({
      items: a,
      value: l,
      selected: t
    });
  }
}, ta = B({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  valueComparator: {
    type: Function,
    default: $e
  }
}, "DataTable-select"), ze = Symbol.for("vuetify:data-table-selection");
function aa(e, l) {
  let {
    allItems: a,
    currentPage: t
  } = l;
  const n = H(e, "modelValue", e.modelValue, (p) => new Set(oe(p).map((d) => {
    var V;
    return ((V = a.value.find((C) => e.valueComparator(d, C.value))) == null ? void 0 : V.value) ?? d;
  })), (p) => [...p.values()]), r = I(() => a.value.filter((p) => p.selectable)), u = I(() => t.value.filter((p) => p.selectable)), s = I(() => {
    if (typeof e.selectStrategy == "object") return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single":
        return ea;
      case "all":
        return We;
      case "page":
      default:
        return je;
    }
  });
  function c(p) {
    return oe(p).every((d) => n.value.has(d.value));
  }
  function f(p) {
    return oe(p).some((d) => n.value.has(d.value));
  }
  function g(p, d) {
    const V = s.value.select({
      items: p,
      value: d,
      selected: new Set(n.value)
    });
    n.value = V;
  }
  function y(p) {
    g([p], !c([p]));
  }
  function v(p) {
    const d = s.value.selectAll({
      value: p,
      allItems: r.value,
      currentPage: u.value,
      selected: new Set(n.value)
    });
    n.value = d;
  }
  const P = I(() => n.value.size > 0), b = I(() => {
    const p = s.value.allSelected({
      allItems: r.value,
      currentPage: u.value
    });
    return !!p.length && c(p);
  }), x = I(() => s.value.showSelectAll), m = {
    toggleSelect: y,
    select: g,
    selectAll: v,
    isSelected: c,
    isSomeSelected: f,
    someSelected: P,
    allSelected: b,
    showSelectAll: x
  };
  return q(ze, m), m;
}
function re() {
  const e = K(ze);
  if (!e) throw new Error("Missing selection!");
  return e;
}
const la = B({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort"), qe = Symbol.for("vuetify:data-table-sort");
function na(e) {
  const l = H(e, "sortBy"), a = T(e, "mustSort"), t = T(e, "multiSort");
  return {
    sortBy: l,
    mustSort: a,
    multiSort: t
  };
}
function ra(e) {
  const {
    sortBy: l,
    mustSort: a,
    multiSort: t,
    page: n
  } = e, r = (c) => {
    if (c.key == null) return;
    let f = l.value.map((y) => ({
      ...y
    })) ?? [];
    const g = f.find((y) => y.key === c.key);
    g ? g.order === "desc" ? a.value ? g.order = "asc" : f = f.filter((y) => y.key !== c.key) : g.order = "desc" : t.value ? f = [...f, {
      key: c.key,
      order: "asc"
    }] : f = [{
      key: c.key,
      order: "asc"
    }], l.value = f, n && (n.value = 1);
  };
  function u(c) {
    return !!l.value.find((f) => f.key === c.key);
  }
  const s = {
    sortBy: l,
    toggleSort: r,
    isSorted: u
  };
  return q(qe, s), s;
}
function Ke() {
  const e = K(qe);
  if (!e) throw new Error("Missing sort!");
  return e;
}
function sa(e, l, a, t) {
  const n = Y();
  return {
    sortedItems: I(() => {
      var u, s;
      return a.value.length ? ua(l.value, a.value, n.current.value, {
        transform: t == null ? void 0 : t.transform,
        sortFunctions: {
          ...e.customKeySort,
          ...(u = t == null ? void 0 : t.sortFunctions) == null ? void 0 : u.value
        },
        sortRawFunctions: (s = t == null ? void 0 : t.sortRawFunctions) == null ? void 0 : s.value
      }) : l.value;
    })
  };
}
function ua(e, l, a, t) {
  const n = new Intl.Collator(a, {
    sensitivity: "accent",
    usage: "sort"
  });
  return e.map((u) => [u, t != null && t.transform ? t.transform(u) : u]).sort((u, s) => {
    var c, f;
    for (let g = 0; g < l.length; g++) {
      let y = !1;
      const v = l[g].key, P = l[g].order ?? "asc";
      if (P === !1) continue;
      let b = ae(u[1], v), x = ae(s[1], v), m = u[0].raw, p = s[0].raw;
      if (P === "desc" && ([b, x] = [x, b], [m, p] = [p, m]), (c = t == null ? void 0 : t.sortRawFunctions) != null && c[v]) {
        const d = t.sortRawFunctions[v](m, p);
        if (d == null) continue;
        if (y = !0, d) return d;
      }
      if ((f = t == null ? void 0 : t.sortFunctions) != null && f[v]) {
        const d = t.sortFunctions[v](b, x);
        if (d == null) continue;
        if (y = !0, d) return d;
      }
      if (!y) {
        if (b instanceof Date && x instanceof Date)
          return b.getTime() - x.getTime();
        if ([b, x] = [b, x].map((d) => d != null ? d.toString().toLocaleLowerCase() : d), b !== x)
          return J(b) && J(x) ? 0 : J(b) ? -1 : J(x) ? 1 : !isNaN(b) && !isNaN(x) ? Number(b) - Number(x) : n.compare(b, x);
      }
    }
    return 0;
  }).map((u) => {
    let [s] = u;
    return s;
  });
}
function oa() {
  const e = M([]);
  ft(() => e.value = []);
  function l(a, t) {
    e.value[t] = a;
  }
  return {
    refs: e,
    updateRef: l
  };
}
const ia = B({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: (e) => e.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: (e) => e % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: $,
    default: "$first"
  },
  prevIcon: {
    type: $,
    default: "$prev"
  },
  nextIcon: {
    type: $,
    default: "$next"
  },
  lastIcon: {
    type: $,
    default: "$last"
  },
  ariaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.root"
  },
  pageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.page"
  },
  currentPageAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.currentPage"
  },
  firstAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.first"
  },
  previousAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.previous"
  },
  nextAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.next"
  },
  lastAriaLabel: {
    type: String,
    default: "$vuetify.pagination.ariaLabel.last"
  },
  ellipsis: {
    type: String,
    default: "..."
  },
  showFirstLastPage: Boolean,
  ..._t(),
  ...Tt(),
  ...Vt(),
  ...Dt(),
  ...It(),
  ...kt(),
  ...wt({
    tag: "nav"
  }),
  ...St(),
  ...xt({
    variant: "text"
  })
}, "VPagination"), Ve = j()({
  name: "VPagination",
  props: ia(),
  emits: {
    "update:modelValue": (e) => !0,
    first: (e) => !0,
    prev: (e) => !0,
    next: (e) => !0,
    last: (e) => !0
  },
  setup(e, l) {
    let {
      slots: a,
      emit: t
    } = l;
    const n = H(e, "modelValue"), {
      t: r,
      n: u
    } = Y(), {
      isRtl: s
    } = yt(), {
      themeClasses: c
    } = pt(e), {
      width: f
    } = ne(), g = vt(-1);
    de(void 0, {
      scoped: !0
    });
    const {
      resizeRef: y
    } = Pt((h) => {
      if (!h.length) return;
      const {
        target: i,
        contentRect: S
      } = h[0], w = i.querySelector(".v-pagination__list > *");
      if (!w) return;
      const D = S.width, _ = w.offsetWidth + parseFloat(getComputedStyle(w).marginRight) * 2;
      g.value = x(D, _);
    }), v = I(() => parseInt(e.length, 10)), P = I(() => parseInt(e.start, 10)), b = I(() => e.totalVisible != null ? parseInt(e.totalVisible, 10) : g.value >= 0 ? g.value : x(f.value, 58));
    function x(h, i) {
      const S = e.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
        // Round to two decimal places to avoid floating point errors
        +((h - i * S) / i).toFixed(2)
      ));
    }
    const m = I(() => {
      if (v.value <= 0 || isNaN(v.value) || v.value > Number.MAX_SAFE_INTEGER) return [];
      if (b.value <= 0) return [];
      if (b.value === 1) return [n.value];
      if (v.value <= b.value)
        return ee(v.value, P.value);
      const h = b.value % 2 === 0, i = h ? b.value / 2 : Math.floor(b.value / 2), S = h ? i : i + 1, w = v.value - i;
      if (S - n.value >= 0)
        return [...ee(Math.max(1, b.value - 1), P.value), e.ellipsis, v.value];
      if (n.value - w >= (h ? 1 : 0)) {
        const D = b.value - 1, _ = v.value - D + P.value;
        return [P.value, e.ellipsis, ...ee(D, _)];
      } else {
        const D = Math.max(1, b.value - 3), _ = D === 1 ? n.value : n.value - Math.ceil(D / 2) + P.value;
        return [P.value, e.ellipsis, ...ee(D, _), e.ellipsis, v.value];
      }
    });
    function p(h, i, S) {
      h.preventDefault(), n.value = i, S && t(S, i);
    }
    const {
      refs: d,
      updateRef: V
    } = oa();
    de({
      VPaginationBtn: {
        color: T(e, "color"),
        border: T(e, "border"),
        density: T(e, "density"),
        size: T(e, "size"),
        variant: T(e, "variant"),
        rounded: T(e, "rounded"),
        elevation: T(e, "elevation")
      }
    });
    const C = I(() => m.value.map((h, i) => {
      const S = (w) => V(w, i);
      if (typeof h == "string")
        return {
          isActive: !1,
          key: `ellipsis-${i}`,
          page: h,
          props: {
            ref: S,
            ellipsis: !0,
            icon: !0,
            disabled: !0
          }
        };
      {
        const w = h === n.value;
        return {
          isActive: w,
          key: h,
          page: u(h),
          props: {
            ref: S,
            ellipsis: !1,
            icon: !0,
            disabled: !!e.disabled || +e.length < 2,
            color: w ? e.activeColor : e.color,
            "aria-current": w,
            "aria-label": r(w ? e.currentPageAriaLabel : e.pageAriaLabel, h),
            onClick: (D) => p(D, h)
          }
        };
      }
    })), k = I(() => {
      const h = !!e.disabled || n.value <= P.value, i = !!e.disabled || n.value >= P.value + v.value - 1;
      return {
        first: e.showFirstLastPage ? {
          icon: s.value ? e.lastIcon : e.firstIcon,
          onClick: (S) => p(S, P.value, "first"),
          disabled: h,
          "aria-label": r(e.firstAriaLabel),
          "aria-disabled": h
        } : void 0,
        prev: {
          icon: s.value ? e.nextIcon : e.prevIcon,
          onClick: (S) => p(S, n.value - 1, "prev"),
          disabled: h,
          "aria-label": r(e.previousAriaLabel),
          "aria-disabled": h
        },
        next: {
          icon: s.value ? e.prevIcon : e.nextIcon,
          onClick: (S) => p(S, n.value + 1, "next"),
          disabled: i,
          "aria-label": r(e.nextAriaLabel),
          "aria-disabled": i
        },
        last: e.showFirstLastPage ? {
          icon: s.value ? e.firstIcon : e.lastIcon,
          onClick: (S) => p(S, P.value + v.value - 1, "last"),
          disabled: i,
          "aria-label": r(e.lastAriaLabel),
          "aria-disabled": i
        } : void 0
      };
    });
    function L() {
      var i;
      const h = n.value - P.value;
      (i = d.value[h]) == null || i.$el.focus();
    }
    function N(h) {
      h.key === we.left && !e.disabled && n.value > +e.start ? (n.value = n.value - 1, Pe(L)) : h.key === we.right && !e.disabled && n.value < P.value + v.value - 1 && (n.value = n.value + 1, Pe(L));
    }
    return U(() => o(e.tag, {
      ref: y,
      class: ["v-pagination", c.value, e.class],
      style: e.style,
      role: "navigation",
      "aria-label": r(e.ariaLabel),
      onKeydown: N,
      "data-test": "v-pagination-root"
    }, {
      default: () => [o("ul", {
        class: "v-pagination__list"
      }, [e.showFirstLastPage && o("li", {
        key: "first",
        class: "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [a.first ? a.first(k.value.first) : o(G, F({
        _as: "VPaginationBtn"
      }, k.value.first), null)]), o("li", {
        key: "prev",
        class: "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [a.prev ? a.prev(k.value.prev) : o(G, F({
        _as: "VPaginationBtn"
      }, k.value.prev), null)]), C.value.map((h, i) => o("li", {
        key: h.key,
        class: ["v-pagination__item", {
          "v-pagination__item--is-active": h.isActive
        }],
        "data-test": "v-pagination-item"
      }, [a.item ? a.item(h) : o(G, F({
        _as: "VPaginationBtn"
      }, h.props), {
        default: () => [h.page]
      })])), o("li", {
        key: "next",
        class: "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [a.next ? a.next(k.value.next) : o(G, F({
        _as: "VPaginationBtn"
      }, k.value.next), null)]), e.showFirstLastPage && o("li", {
        key: "last",
        class: "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [a.last ? a.last(k.value.last) : o(G, F({
        _as: "VPaginationBtn"
      }, k.value.last), null)])])]
    })), {};
  }
}), Ue = B({
  prevIcon: {
    type: $,
    default: "$prev"
  },
  nextIcon: {
    type: $,
    default: "$next"
  },
  firstIcon: {
    type: $,
    default: "$first"
  },
  lastIcon: {
    type: $,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter"), Te = j()({
  name: "VDataTableFooter",
  props: Ue(),
  setup(e, l) {
    let {
      slots: a
    } = l;
    const {
      t
    } = Y(), {
      page: n,
      pageCount: r,
      startIndex: u,
      stopIndex: s,
      itemsLength: c,
      itemsPerPage: f,
      setItemsPerPage: g
    } = Zt(), y = I(() => e.itemsPerPageOptions.map((v) => typeof v == "number" ? {
      value: v,
      title: v === -1 ? t("$vuetify.dataFooter.itemsPerPageAll") : String(v)
    } : {
      ...v,
      title: isNaN(Number(v.title)) ? t(v.title) : v.title
    }));
    return U(() => {
      var P;
      const v = Ve.filterProps(e);
      return o("div", {
        class: "v-data-table-footer"
      }, [(P = a.prepend) == null ? void 0 : P.call(a), o("div", {
        class: "v-data-table-footer__items-per-page"
      }, [o("span", null, [t(e.itemsPerPageText)]), o(Le, {
        items: y.value,
        modelValue: f.value,
        "onUpdate:modelValue": (b) => g(Number(b)),
        density: "compact",
        variant: "outlined",
        "hide-details": !0
      }, null)]), o("div", {
        class: "v-data-table-footer__info"
      }, [o("div", null, [t(e.pageText, c.value ? u.value + 1 : 0, s.value, c.value)])]), o("div", {
        class: "v-data-table-footer__pagination"
      }, [o(Ve, F({
        modelValue: n.value,
        "onUpdate:modelValue": (b) => n.value = b,
        density: "comfortable",
        "first-aria-label": e.firstPageLabel,
        "last-aria-label": e.lastPageLabel,
        length: r.value,
        "next-aria-label": e.nextPageLabel,
        "previous-aria-label": e.prevPageLabel,
        rounded: !0,
        "show-first-last-page": !0,
        "total-visible": e.showCurrentPage ? 1 : 0,
        variant: "plain"
      }, v), null)])]);
    }), {};
  }
}), le = Ft({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String],
  maxWidth: [Number, String],
  nowrap: Boolean
}, (e, l) => {
  let {
    slots: a
  } = l;
  const t = e.tag ?? "td";
  return o(t, {
    class: ["v-data-table__td", {
      "v-data-table-column--fixed": e.fixed,
      "v-data-table-column--last-fixed": e.lastFixed,
      "v-data-table-column--no-padding": e.noPadding,
      "v-data-table-column--nowrap": e.nowrap
    }, `v-data-table-column--align-${e.align}`],
    style: {
      height: O(e.height),
      width: O(e.width),
      maxWidth: O(e.maxWidth),
      left: O(e.fixedOffset || null)
    }
  }, {
    default: () => {
      var n;
      return [(n = a.default) == null ? void 0 : n.call(a)];
    }
  });
}), da = B({
  headers: Array
}, "DataTable-header"), Qe = Symbol.for("vuetify:data-table-headers"), Xe = {
  title: "",
  sortable: !1
}, ca = {
  ...Xe,
  width: 48
};
function fa() {
  const l = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map((a) => ({
    element: a,
    priority: 0
  }));
  return {
    enqueue: (a, t) => {
      let n = !1;
      for (let r = 0; r < l.length; r++)
        if (l[r].priority > t) {
          l.splice(r, 0, {
            element: a,
            priority: t
          }), n = !0;
          break;
        }
      n || l.push({
        element: a,
        priority: t
      });
    },
    size: () => l.length,
    count: () => {
      let a = 0;
      if (!l.length) return 0;
      const t = Math.floor(l[0].priority);
      for (let n = 0; n < l.length; n++)
        Math.floor(l[n].priority) === t && (a += 1);
      return a;
    },
    dequeue: () => l.shift()
  };
}
function ce(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  if (!e.children)
    l.push(e);
  else
    for (const a of e.children)
      ce(a, l);
  return l;
}
function Ye(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new Set();
  for (const a of e)
    a.key && l.add(a.key), a.children && Ye(a.children, l);
  return l;
}
function va(e) {
  if (e.key) {
    if (e.key === "data-table-group") return Xe;
    if (["data-table-expand", "data-table-select"].includes(e.key)) return ca;
  }
}
function ge(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.children ? Math.max(l, ...e.children.map((a) => ge(a, l + 1))) : l;
}
function ga(e) {
  let l = !1;
  function a(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (r)
      if (u && (r.fixed = !0), r.fixed)
        if (r.children)
          for (let s = r.children.length - 1; s >= 0; s--)
            a(r.children[s], !0);
        else
          l ? isNaN(+r.width) && Bt(`Multiple fixed columns should have a static width (key: ${r.key})`) : r.lastFixed = !0, l = !0;
      else if (r.children)
        for (let s = r.children.length - 1; s >= 0; s--)
          a(r.children[s]);
      else
        l = !1;
  }
  for (let r = e.length - 1; r >= 0; r--)
    a(e[r]);
  function t(r) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (!r) return u;
    if (r.children) {
      r.fixedOffset = u;
      for (const s of r.children)
        u = t(s, u);
    } else r.fixed && (r.fixedOffset = u, u += parseFloat(r.width || "0") || 0);
    return u;
  }
  let n = 0;
  for (const r of e)
    n = t(r, n);
}
function ma(e, l) {
  const a = [];
  let t = 0;
  const n = fa(e);
  for (; n.size() > 0; ) {
    let u = n.count();
    const s = [];
    let c = 1;
    for (; u > 0; ) {
      const {
        element: f,
        priority: g
      } = n.dequeue(), y = l - t - ge(f);
      if (s.push({
        ...f,
        rowspan: y ?? 1,
        colspan: f.children ? ce(f).length : 1
      }), f.children)
        for (const v of f.children) {
          const P = g % 1 + c / Math.pow(10, t + 2);
          n.enqueue(v, t + y + P);
        }
      c += 1, u -= 1;
    }
    t += 1, a.push(s);
  }
  return {
    columns: e.map((u) => ce(u)).flat(),
    headers: a
  };
}
function Ze(e) {
  const l = [];
  for (const a of e) {
    const t = {
      ...va(a),
      ...a
    }, n = t.key ?? (typeof t.value == "string" ? t.value : null), r = t.value ?? n ?? null, u = {
      ...t,
      key: n,
      value: r,
      sortable: t.sortable ?? (t.key != null || !!t.sort),
      children: t.children ? Ze(t.children) : void 0
    };
    l.push(u);
  }
  return l;
}
function ba(e, l) {
  const a = M([]), t = M([]), n = M({}), r = M({}), u = M({});
  Ce(() => {
    var x, m, p;
    const f = (e.headers || Object.keys(e.items[0] ?? {}).map((d) => ({
      key: d,
      title: gt(d)
    }))).slice(), g = Ye(f);
    (x = l == null ? void 0 : l.groupBy) != null && x.value.length && !g.has("data-table-group") && f.unshift({
      key: "data-table-group",
      title: "Group"
    }), (m = l == null ? void 0 : l.showSelect) != null && m.value && !g.has("data-table-select") && f.unshift({
      key: "data-table-select"
    }), (p = l == null ? void 0 : l.showExpand) != null && p.value && !g.has("data-table-expand") && f.push({
      key: "data-table-expand"
    });
    const y = Ze(f);
    ga(y);
    const v = Math.max(...y.map((d) => ge(d))) + 1, P = ma(y, v);
    a.value = P.headers, t.value = P.columns;
    const b = P.headers.flat(1);
    for (const d of b)
      d.key && (d.sortable && (d.sort && (n.value[d.key] = d.sort), d.sortRaw && (r.value[d.key] = d.sortRaw)), d.filter && (u.value[d.key] = d.filter));
  });
  const s = {
    headers: a,
    columns: t,
    sortFunctions: n,
    sortRawFunctions: r,
    filterFunctions: u
  };
  return q(Qe, s), s;
}
function se() {
  const e = K(Qe);
  if (!e) throw new Error("Missing headers!");
  return e;
}
const Je = B({
  color: String,
  sticky: Boolean,
  disableSort: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: $,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: $,
    default: "$sortDesc"
  },
  headerProps: {
    type: Object
  },
  ...fe(),
  ...Lt()
}, "VDataTableHeaders"), _e = j()({
  name: "VDataTableHeaders",
  props: Je(),
  setup(e, l) {
    let {
      slots: a
    } = l;
    const {
      t
    } = Y(), {
      toggleSort: n,
      sortBy: r,
      isSorted: u
    } = Ke(), {
      someSelected: s,
      allSelected: c,
      selectAll: f,
      showSelectAll: g
    } = re(), {
      columns: y,
      headers: v
    } = se(), {
      loaderClasses: P
    } = Ct(e);
    function b(h, i) {
      if (!(!e.sticky && !h.fixed))
        return {
          position: "sticky",
          left: h.fixed ? O(h.fixedOffset) : void 0,
          top: e.sticky ? `calc(var(--v-table-header-height) * ${i})` : void 0
        };
    }
    function x(h) {
      const i = r.value.find((S) => S.key === h.key);
      return i ? i.order === "asc" ? e.sortAscIcon : e.sortDescIcon : e.sortAscIcon;
    }
    const {
      backgroundColorClasses: m,
      backgroundColorStyles: p
    } = At(e, "color"), {
      displayClasses: d,
      mobile: V
    } = ne(e), C = I(() => ({
      headers: v.value,
      columns: y.value,
      toggleSort: n,
      isSorted: u,
      sortBy: r.value,
      someSelected: s.value,
      allSelected: c.value,
      selectAll: f,
      getSortIcon: x
    })), k = I(() => ["v-data-table__th", {
      "v-data-table__th--sticky": e.sticky
    }, d.value, P.value]), L = (h) => {
      let {
        column: i,
        x: S,
        y: w
      } = h;
      const D = i.key === "data-table-select" || i.key === "data-table-expand", _ = F(e.headerProps ?? {}, i.headerProps ?? {});
      return o(le, F({
        tag: "th",
        align: i.align,
        class: [{
          "v-data-table__th--sortable": i.sortable && !e.disableSort,
          "v-data-table__th--sorted": u(i),
          "v-data-table__th--fixed": i.fixed
        }, ...k.value],
        style: {
          width: O(i.width),
          minWidth: O(i.minWidth),
          maxWidth: O(i.maxWidth),
          ...b(i, w)
        },
        colspan: i.colspan,
        rowspan: i.rowspan,
        onClick: i.sortable ? () => n(i) : void 0,
        fixed: i.fixed,
        nowrap: i.nowrap,
        lastFixed: i.lastFixed,
        noPadding: D
      }, _), {
        default: () => {
          var W;
          const E = `header.${i.key}`, Z = {
            column: i,
            selectAll: f,
            isSorted: u,
            toggleSort: n,
            sortBy: r.value,
            someSelected: s.value,
            allSelected: c.value,
            getSortIcon: x
          };
          return a[E] ? a[E](Z) : i.key === "data-table-select" ? ((W = a["header.data-table-select"]) == null ? void 0 : W.call(a, Z)) ?? (g.value && o(ve, {
            modelValue: c.value,
            indeterminate: s.value && !c.value,
            "onUpdate:modelValue": f
          }, null)) : o("div", {
            class: "v-data-table-header__content"
          }, [o("span", null, [i.title]), i.sortable && !e.disableSort && o(ke, {
            key: "icon",
            class: "v-data-table-header__sort-icon",
            icon: x(i)
          }, null), e.multiSort && u(i) && o("div", {
            key: "badge",
            class: ["v-data-table-header__sort-badge", ...m.value],
            style: p.value
          }, [r.value.findIndex((Q) => Q.key === i.key) + 1])]);
        }
      });
    }, N = () => {
      const h = F(e.headerProps ?? {} ?? {}), i = I(() => y.value.filter((w) => (w == null ? void 0 : w.sortable) && !e.disableSort)), S = I(() => {
        if (y.value.find((D) => D.key === "data-table-select") != null)
          return c.value ? "$checkboxOn" : s.value ? "$checkboxIndeterminate" : "$checkboxOff";
      });
      return o(le, F({
        tag: "th",
        class: [...k.value],
        colspan: v.value.length + 1
      }, h), {
        default: () => [o("div", {
          class: "v-data-table-header__content"
        }, [o(Le, {
          chips: !0,
          class: "v-data-table__td-sort-select",
          clearable: !0,
          density: "default",
          items: i.value,
          label: t("$vuetify.dataTable.sortBy"),
          multiple: e.multiSort,
          variant: "underlined",
          "onClick:clear": () => r.value = [],
          appendIcon: S.value,
          "onClick:append": () => f(!c.value)
        }, {
          ...a,
          chip: (w) => {
            var D;
            return o(Rt, {
              onClick: (D = w.item.raw) != null && D.sortable ? () => n(w.item.raw) : void 0,
              onMousedown: (_) => {
                _.preventDefault(), _.stopPropagation();
              }
            }, {
              default: () => [w.item.title, o(ke, {
                class: ["v-data-table__td-sort-icon", u(w.item.raw) && "v-data-table__td-sort-icon-active"],
                icon: x(w.item.raw),
                size: "small"
              }, null)]
            });
          }
        })])]
      });
    };
    U(() => V.value ? o("tr", null, [o(N, null, null)]) : o(z, null, [a.headers ? a.headers(C.value) : v.value.map((h, i) => o("tr", null, [h.map((S, w) => o(L, {
      column: S,
      x: w,
      y: i
    }, null))])), e.loading && o("tr", {
      class: "v-data-table-progress"
    }, [o("th", {
      colspan: y.value.length
    }, [o($t, {
      name: "v-data-table-progress",
      absolute: !0,
      active: !0,
      color: typeof e.loading == "boolean" ? void 0 : e.loading,
      indeterminate: !0
    }, {
      default: a.loader
    })])])]));
  }
}), ha = B({
  item: {
    type: Object,
    required: !0
  }
}, "VDataTableGroupHeaderRow"), ya = j()({
  name: "VDataTableGroupHeaderRow",
  props: ha(),
  setup(e, l) {
    let {
      slots: a
    } = l;
    const {
      isGroupOpen: t,
      toggleGroup: n,
      extractRows: r
    } = Ee(), {
      isSelected: u,
      isSomeSelected: s,
      select: c
    } = re(), {
      columns: f
    } = se(), g = I(() => r([e.item]));
    return () => o("tr", {
      class: "v-data-table-group-header-row",
      style: {
        "--v-data-table-group-header-row-depth": e.item.depth
      }
    }, [f.value.map((y) => {
      var v, P;
      if (y.key === "data-table-group") {
        const b = t(e.item) ? "$expand" : "$next", x = () => n(e.item);
        return ((v = a["data-table-group"]) == null ? void 0 : v.call(a, {
          item: e.item,
          count: g.value.length,
          props: {
            icon: b,
            onClick: x
          }
        })) ?? o(le, {
          class: "v-data-table-group-header-row__column"
        }, {
          default: () => [o(G, {
            size: "small",
            variant: "text",
            icon: b,
            onClick: x
          }, null), o("span", null, [e.item.value]), o("span", null, [xe("("), g.value.length, xe(")")])]
        });
      }
      if (y.key === "data-table-select") {
        const b = u(g.value), x = s(g.value) && !b, m = (p) => c(g.value, p);
        return ((P = a["data-table-select"]) == null ? void 0 : P.call(a, {
          props: {
            modelValue: b,
            indeterminate: x,
            "onUpdate:modelValue": m
          }
        })) ?? o("td", null, [o(ve, {
          modelValue: b,
          indeterminate: x,
          "onUpdate:modelValue": m
        }, null)]);
      }
      return o("td", null, null);
    })]);
  }
}), pa = B({
  index: Number,
  item: Object,
  cellProps: [Object, Function],
  onClick: ie(),
  onContextmenu: ie(),
  onDblclick: ie(),
  ...fe()
}, "VDataTableRow"), Pa = j()({
  name: "VDataTableRow",
  props: pa(),
  setup(e, l) {
    let {
      slots: a
    } = l;
    const {
      displayClasses: t,
      mobile: n
    } = ne(e, "v-data-table__tr"), {
      isSelected: r,
      toggleSelect: u,
      someSelected: s,
      allSelected: c,
      selectAll: f
    } = re(), {
      isExpanded: g,
      toggleExpand: y
    } = Oe(), {
      toggleSort: v,
      sortBy: P,
      isSorted: b
    } = Ke(), {
      columns: x
    } = se();
    U(() => o("tr", {
      class: ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!(e.onClick || e.onContextmenu || e.onDblclick)
      }, t.value],
      onClick: e.onClick,
      onContextmenu: e.onContextmenu,
      onDblclick: e.onDblclick
    }, [e.item && x.value.map((m, p) => {
      const d = e.item, V = `item.${m.key}`, C = `header.${m.key}`, k = {
        index: e.index,
        item: d.raw,
        internalItem: d,
        value: ae(d.columns, m.key),
        column: m,
        isSelected: r,
        toggleSelect: u,
        isExpanded: g,
        toggleExpand: y
      }, L = {
        column: m,
        selectAll: f,
        isSorted: b,
        toggleSort: v,
        sortBy: P.value,
        someSelected: s.value,
        allSelected: c.value,
        getSortIcon: () => ""
      }, N = typeof e.cellProps == "function" ? e.cellProps({
        index: k.index,
        item: k.item,
        internalItem: k.internalItem,
        value: k.value,
        column: m
      }) : e.cellProps, h = typeof m.cellProps == "function" ? m.cellProps({
        index: k.index,
        item: k.item,
        internalItem: k.internalItem,
        value: k.value
      }) : m.cellProps;
      return o(le, F({
        align: m.align,
        class: {
          "v-data-table__td--expanded-row": m.key === "data-table-expand",
          "v-data-table__td--select-row": m.key === "data-table-select"
        },
        fixed: m.fixed,
        fixedOffset: m.fixedOffset,
        lastFixed: m.lastFixed,
        maxWidth: n.value ? void 0 : m.maxWidth,
        noPadding: m.key === "data-table-select" || m.key === "data-table-expand",
        nowrap: m.nowrap,
        width: n.value ? void 0 : m.width
      }, N, h), {
        default: () => {
          var S, w, D, _, E;
          if (a[V] && !n.value) return (S = a[V]) == null ? void 0 : S.call(a, k);
          if (m.key === "data-table-select")
            return ((w = a["item.data-table-select"]) == null ? void 0 : w.call(a, k)) ?? o(ve, {
              disabled: !d.selectable,
              modelValue: r([d]),
              onClick: Se(() => u(d), ["stop"])
            }, null);
          if (m.key === "data-table-expand")
            return ((D = a["item.data-table-expand"]) == null ? void 0 : D.call(a, k)) ?? o(G, {
              icon: g(d) ? "$collapse" : "$expand",
              size: "small",
              variant: "text",
              onClick: Se(() => y(d), ["stop"])
            }, null);
          const i = mt(k.value);
          return n.value ? o(z, null, [o("div", {
            class: "v-data-table__td-title"
          }, [((_ = a[C]) == null ? void 0 : _.call(a, L)) ?? m.title]), o("div", {
            class: "v-data-table__td-value"
          }, [((E = a[V]) == null ? void 0 : E.call(a, k)) ?? i])]) : i;
        }
      });
    })]));
  }
}), et = B({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  ...fe()
}, "VDataTableRows"), Fe = j()({
  name: "VDataTableRows",
  inheritAttrs: !1,
  props: et(),
  setup(e, l) {
    let {
      attrs: a,
      slots: t
    } = l;
    const {
      columns: n
    } = se(), {
      expandOnClick: r,
      toggleExpand: u,
      isExpanded: s
    } = Oe(), {
      isSelected: c,
      toggleSelect: f
    } = re(), {
      toggleGroup: g,
      isGroupOpen: y
    } = Ee(), {
      t: v
    } = Y(), {
      mobile: P
    } = ne(e);
    return U(() => {
      var b, x;
      return e.loading && (!e.items.length || t.loading) ? o("tr", {
        class: "v-data-table-rows-loading",
        key: "loading"
      }, [o("td", {
        colspan: n.value.length
      }, [((b = t.loading) == null ? void 0 : b.call(t)) ?? v(e.loadingText)])]) : !e.loading && !e.items.length && !e.hideNoData ? o("tr", {
        class: "v-data-table-rows-no-data",
        key: "no-data"
      }, [o("td", {
        colspan: n.value.length
      }, [((x = t["no-data"]) == null ? void 0 : x.call(t)) ?? v(e.noDataText)])]) : o(z, null, [e.items.map((m, p) => {
        var C;
        if (m.type === "group") {
          const k = {
            index: p,
            item: m,
            columns: n.value,
            isExpanded: s,
            toggleExpand: u,
            isSelected: c,
            toggleSelect: f,
            toggleGroup: g,
            isGroupOpen: y
          };
          return t["group-header"] ? t["group-header"](k) : o(ya, F({
            key: `group-header_${m.id}`,
            item: m
          }, De(a, ":group-header", () => k)), t);
        }
        const d = {
          index: p,
          item: m.raw,
          internalItem: m,
          columns: n.value,
          isExpanded: s,
          toggleExpand: u,
          isSelected: c,
          toggleSelect: f
        }, V = {
          ...d,
          props: F({
            key: `item_${m.key ?? m.index}`,
            onClick: r.value ? () => {
              u(m);
            } : void 0,
            index: p,
            item: m,
            cellProps: e.cellProps,
            mobile: P.value
          }, De(a, ":row", () => d), typeof e.rowProps == "function" ? e.rowProps({
            item: d.item,
            index: d.index,
            internalItem: d.internalItem
          }) : e.rowProps)
        };
        return o(z, {
          key: V.props.key
        }, [t.item ? t.item(V) : o(Pa, V.props, t), s(m) && ((C = t["expanded-row"]) == null ? void 0 : C.call(t, d))]);
      })]);
    }), {};
  }
}), xa = B({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  rowProps: [Object, Function],
  cellProps: [Object, Function],
  returnObject: Boolean
}, "DataTable-items");
function Sa(e, l, a, t) {
  const n = e.returnObject ? l : te(l, e.itemValue), r = te(l, e.itemSelectable, !0), u = t.reduce((s, c) => (c.key != null && (s[c.key] = te(l, c.value)), s), {});
  return {
    type: "item",
    key: e.returnObject ? te(l, e.itemValue) : n,
    index: a,
    value: n,
    selectable: r,
    columns: u,
    raw: l
  };
}
function wa(e, l, a) {
  return l.map((t, n) => Sa(e, t, n, a));
}
function ka(e, l) {
  return {
    items: I(() => wa(e, e.items, l.value))
  };
}
const Ia = B({
  ...et(),
  hideDefaultBody: Boolean,
  hideDefaultFooter: Boolean,
  hideDefaultHeader: Boolean,
  width: [String, Number],
  search: String,
  ...Gt(),
  ...jt(),
  ...da(),
  ...xa(),
  ...ta(),
  ...la(),
  ...Je(),
  ...Mt()
}, "DataTable"), Da = B({
  ...Qt(),
  ...Ia(),
  ...Et(),
  ...Ue()
}, "VDataTable"), Ba = j()({
  name: "VDataTable",
  props: Da(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:page": (e) => !0,
    "update:itemsPerPage": (e) => !0,
    "update:sortBy": (e) => !0,
    "update:options": (e) => !0,
    "update:groupBy": (e) => !0,
    "update:expanded": (e) => !0,
    "update:currentItems": (e) => !0
  },
  setup(e, l) {
    let {
      attrs: a,
      slots: t
    } = l;
    const {
      groupBy: n
    } = Wt(e), {
      sortBy: r,
      multiSort: u,
      mustSort: s
    } = na(e), {
      page: c,
      itemsPerPage: f
    } = Xt(e), {
      disableSort: g
    } = bt(e), {
      columns: y,
      headers: v,
      sortFunctions: P,
      sortRawFunctions: b,
      filterFunctions: x
    } = ba(e, {
      groupBy: n,
      showSelect: T(e, "showSelect"),
      showExpand: T(e, "showExpand")
    }), {
      items: m
    } = ka(e, y), p = T(e, "search"), {
      filteredItems: d
    } = Ot(e, m, p, {
      transform: (R) => R.columns,
      customKeyFilter: x
    }), {
      toggleSort: V
    } = ra({
      sortBy: r,
      multiSort: u,
      mustSort: s,
      page: c
    }), {
      sortByWithGroups: C,
      opened: k,
      extractRows: L,
      isGroupOpen: N,
      toggleGroup: h
    } = zt({
      groupBy: n,
      sortBy: r,
      disableSort: g
    }), {
      sortedItems: i
    } = sa(e, d, C, {
      transform: (R) => ({
        ...R.raw,
        ...R.columns
      }),
      sortFunctions: P,
      sortRawFunctions: b
    }), {
      flatItems: S
    } = Kt(i, n, k), w = I(() => S.value.length), {
      startIndex: D,
      stopIndex: _,
      pageCount: E,
      setItemsPerPage: Z
    } = Yt({
      page: c,
      itemsPerPage: f,
      itemsLength: w
    }), {
      paginatedItems: W
    } = Jt({
      items: S,
      startIndex: D,
      stopIndex: _,
      itemsPerPage: f
    }), Q = I(() => L(W.value)), {
      isSelected: tt,
      select: at,
      selectAll: lt,
      toggleSelect: nt,
      someSelected: rt,
      allSelected: st
    } = aa(e, {
      allItems: m,
      currentPage: Q
    }), {
      isExpanded: ut,
      toggleExpand: ot
    } = Ht(e);
    Ut({
      page: c,
      itemsPerPage: f,
      sortBy: r,
      groupBy: n,
      search: p
    }), de({
      VDataTableRows: {
        hideNoData: T(e, "hideNoData"),
        noDataText: T(e, "noDataText"),
        loading: T(e, "loading"),
        loadingText: T(e, "loadingText")
      }
    });
    const A = I(() => ({
      page: c.value,
      itemsPerPage: f.value,
      sortBy: r.value,
      pageCount: E.value,
      toggleSort: V,
      setItemsPerPage: Z,
      someSelected: rt.value,
      allSelected: st.value,
      isSelected: tt,
      select: at,
      selectAll: lt,
      toggleSelect: nt,
      isExpanded: ut,
      toggleExpand: ot,
      isGroupOpen: N,
      toggleGroup: h,
      items: Q.value.map((R) => R.raw),
      internalItems: Q.value,
      groupedItems: W.value,
      columns: y.value,
      headers: v.value
    }));
    return U(() => {
      const R = Te.filterProps(e), it = _e.filterProps(e), dt = Fe.filterProps(e), ct = Ie.filterProps(e);
      return o(Ie, F({
        class: ["v-data-table", {
          "v-data-table--show-select": e.showSelect,
          "v-data-table--loading": e.loading
        }, e.class],
        style: e.style
      }, ct), {
        top: () => {
          var X;
          return (X = t.top) == null ? void 0 : X.call(t, A.value);
        },
        default: () => {
          var X, me, be, he, ye, pe;
          return t.default ? t.default(A.value) : o(z, null, [(X = t.colgroup) == null ? void 0 : X.call(t, A.value), !e.hideDefaultHeader && o("thead", {
            key: "thead"
          }, [o(_e, it, t)]), (me = t.thead) == null ? void 0 : me.call(t, A.value), !e.hideDefaultBody && o("tbody", null, [(be = t["body.prepend"]) == null ? void 0 : be.call(t, A.value), t.body ? t.body(A.value) : o(Fe, F(a, dt, {
            items: W.value
          }), t), (he = t["body.append"]) == null ? void 0 : he.call(t, A.value)]), (ye = t.tbody) == null ? void 0 : ye.call(t, A.value), (pe = t.tfoot) == null ? void 0 : pe.call(t, A.value)]);
        },
        bottom: () => t.bottom ? t.bottom(A.value) : !e.hideDefaultFooter && o(z, null, [o(Nt, null, null), o(Te, R, {
          prepend: t["footer.prepend"]
        })])
      });
    }), {};
  }
});
export {
  Ba as V,
  Ve as a,
  na as b,
  Wt as c,
  ba as d,
  zt as e,
  sa as f,
  Kt as g,
  aa as h,
  Ht as i,
  Ut as j,
  _e as k,
  Fe as l,
  Pa as m,
  jt as n,
  Ia as o,
  ra as p,
  ka as u
};
