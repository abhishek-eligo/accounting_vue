import { watch as z, createVNode as i, Fragment as $, mergeProps as q, shallowRef as N, watchEffect as me, ref as X, computed as B, onScopeDispose as be, nextTick as Ve, toRef as xe, onMounted as Ae, createTextVNode as Te, withDirectives as Re, resolveDirective as De } from "vue";
import { i as H, p as O, aW as ke, u as U, W, aV as Be, b5 as _e, as as se, aw as re, aR as Le, B as Se, b6 as Fe, b7 as Oe, ao as ne, T as Ce, H as Me, l as ge, at as Ee, a5 as Ne, au as He, e as he, K as le, h as Ue, Z as Ke, _ as ye, ay as qe, c as ce, az as ze, d as $e, L as ie, a3 as We, aA as je, s as Ze, aN as Ge, aC as Je, aD as pe, b8 as Qe, I as ee, am as Xe, O as de, x as Ye, U as Pe, b9 as et, y as tt, ba as at, z as nt, A as lt, C as it, aE as ot, D as st, E as ut, F as rt, bb as ct, J as dt, bc as vt, aG as ft, M as mt, N as gt, bd as ht, P as yt, Q as pt, R as bt, b1 as Vt, S as kt, aZ as St } from "./main-u1Mo8sLp.js";
const Ct = O({
  renderless: Boolean,
  ...W()
}, "VVirtualScrollItem"), Pt = H()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Ct(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, r) {
    let {
      attrs: t,
      emit: n,
      slots: u
    } = r;
    const {
      resizeRef: v,
      contentRect: y
    } = ke(void 0, "border");
    z(() => {
      var s;
      return (s = y.value) == null ? void 0 : s.height;
    }, (s) => {
      s != null && n("update:height", s);
    }), U(() => {
      var s, o;
      return e.renderless ? i($, null, [(s = u.default) == null ? void 0 : s.call(u, {
        itemRef: v
      })]) : i("div", q({
        ref: v,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, t), [(o = u.default) == null ? void 0 : o.call(u)]);
    });
  }
}), It = -1, wt = 1, ue = 100, xt = O({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function At(e, r) {
  const t = Be(), n = N(0);
  me(() => {
    n.value = parseFloat(e.itemHeight || 0);
  });
  const u = N(0), v = N(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || t.height.value) / (n.value || 16)
  ) || 1), y = N(0), s = N(0), o = X(), h = X();
  let b = 0;
  const {
    resizeRef: _,
    contentRect: d
  } = ke();
  me(() => {
    _.value = o.value;
  });
  const S = B(() => {
    var a;
    return o.value === document.documentElement ? t.height.value : ((a = d.value) == null ? void 0 : a.height) || parseInt(e.height) || 0;
  }), C = B(() => !!(o.value && h.value && S.value && n.value));
  let w = Array.from({
    length: r.value.length
  }), f = Array.from({
    length: r.value.length
  });
  const x = N(0);
  let P = -1;
  function j(a) {
    return w[a] || n.value;
  }
  const R = _e(() => {
    const a = performance.now();
    f[0] = 0;
    const c = r.value.length;
    for (let V = 1; V <= c - 1; V++)
      f[V] = (f[V - 1] || 0) + j(V - 1);
    x.value = Math.max(x.value, performance.now() - a);
  }, x), Z = z(C, (a) => {
    a && (Z(), b = h.value.offsetTop, R.immediate(), E(), ~P && Ve(() => {
      re && window.requestAnimationFrame(() => {
        ae(P), P = -1;
      });
    }));
  });
  be(() => {
    R.clear();
  });
  function Y(a, c) {
    const V = w[a], p = n.value;
    n.value = p ? Math.min(n.value, c) : c, (V !== c || p !== n.value) && (w[a] = c, R());
  }
  function I(a) {
    return a = se(a, 0, r.value.length - 1), f[a] || 0;
  }
  function G(a) {
    return Tt(f, a);
  }
  let M = 0, L = 0, K = 0;
  z(S, (a, c) => {
    c && (E(), a < c && requestAnimationFrame(() => {
      L = 0, E();
    }));
  });
  function J() {
    if (!o.value || !h.value) return;
    const a = o.value.scrollTop, c = performance.now();
    c - K > 500 ? (L = Math.sign(a - M), b = h.value.offsetTop) : L = a - M, M = a, K = c, E();
  }
  function F() {
    !o.value || !h.value || (L = 0, K = 0, E());
  }
  let te = -1;
  function E() {
    cancelAnimationFrame(te), te = requestAnimationFrame(oe);
  }
  function oe() {
    if (!o.value || !S.value) return;
    const a = M - b, c = Math.sign(L), V = Math.max(0, a - ue), p = se(G(V), 0, r.value.length), m = a + S.value + ue, k = se(G(m) + 1, p + 1, r.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (c !== It || p < u.value) && (c !== wt || k > v.value)
    ) {
      const g = I(u.value) - I(p), A = I(k) - I(v.value);
      Math.max(g, A) > ue ? (u.value = p, v.value = k) : (p <= 0 && (u.value = p), k >= r.value.length && (v.value = k));
    }
    y.value = I(u.value), s.value = I(r.value.length) - I(v.value);
  }
  function ae(a) {
    const c = I(a);
    !o.value || a && !c ? P = a : o.value.scrollTop = c;
  }
  const l = B(() => r.value.slice(u.value, v.value).map((a, c) => ({
    raw: a,
    index: c + u.value
  })));
  return z(r, () => {
    w = Array.from({
      length: r.value.length
    }), f = Array.from({
      length: r.value.length
    }), R.immediate(), E();
  }, {
    deep: !0
  }), {
    containerRef: o,
    markerRef: h,
    computedItems: l,
    paddingTop: y,
    paddingBottom: s,
    scrollToIndex: ae,
    handleScroll: J,
    handleScrollend: F,
    handleItemResize: Y
  };
}
function Tt(e, r) {
  let t = e.length - 1, n = 0, u = 0, v = null, y = -1;
  if (e[t] < r)
    return t;
  for (; n <= t; )
    if (u = n + t >> 1, v = e[u], v > r)
      t = u - 1;
    else if (v < r)
      y = u, n = u + 1;
    else return v === r ? u : n;
  return y;
}
const Rt = O({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...xt(),
  ...W(),
  ...Ce()
}, "VVirtualScroll"), Dt = H()({
  name: "VVirtualScroll",
  props: Rt(),
  setup(e, r) {
    let {
      slots: t
    } = r;
    const n = Le("VVirtualScroll"), {
      dimensionStyles: u
    } = Se(e), {
      containerRef: v,
      markerRef: y,
      handleScroll: s,
      handleScrollend: o,
      handleItemResize: h,
      scrollToIndex: b,
      paddingTop: _,
      paddingBottom: d,
      computedItems: S
    } = At(e, xe(e, "items"));
    return Fe(() => e.renderless, () => {
      function C() {
        var x, P;
        const f = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        v.value === document.documentElement ? (document[f]("scroll", s, {
          passive: !0
        }), document[f]("scrollend", o)) : ((x = v.value) == null || x[f]("scroll", s, {
          passive: !0
        }), (P = v.value) == null || P[f]("scrollend", o));
      }
      Ae(() => {
        v.value = Oe(n.vnode.el, !0), C(!0);
      }), be(C);
    }), U(() => {
      const C = S.value.map((w) => i(Pt, {
        key: w.index,
        renderless: e.renderless,
        "onUpdate:height": (f) => h(w.index, f)
      }, {
        default: (f) => {
          var x;
          return (x = t.default) == null ? void 0 : x.call(t, {
            item: w.raw,
            index: w.index,
            ...f
          });
        }
      }));
      return e.renderless ? i($, null, [i("div", {
        ref: y,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: ne(_.value)
        }
      }, null), C, i("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: ne(d.value)
        }
      }, null)]) : i("div", {
        ref: v,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: s,
        onScrollend: o,
        style: [u.value, e.style]
      }, [i("div", {
        ref: y,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: ne(_.value),
          paddingBottom: ne(d.value)
        }
      }, [C])]);
    }), {
      scrollToIndex: b
    };
  }
});
function Bt(e, r) {
  const t = N(!1);
  let n;
  function u(s) {
    cancelAnimationFrame(n), t.value = !0, n = requestAnimationFrame(() => {
      n = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }
  async function v() {
    await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => requestAnimationFrame(s)), await new Promise((s) => {
      if (t.value) {
        const o = z(t, () => {
          o(), s();
        });
      } else s();
    });
  }
  async function y(s) {
    var b, _;
    if (s.key === "Tab" && ((b = r.value) == null || b.focus()), !["PageDown", "PageUp", "Home", "End"].includes(s.key)) return;
    const o = (_ = e.value) == null ? void 0 : _.$el;
    if (!o) return;
    (s.key === "Home" || s.key === "End") && o.scrollTo({
      top: s.key === "Home" ? 0 : o.scrollHeight,
      behavior: "smooth"
    }), await v();
    const h = o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (s.key === "PageDown" || s.key === "Home") {
      const d = o.getBoundingClientRect().top;
      for (const S of h)
        if (S.getBoundingClientRect().top >= d) {
          S.focus();
          break;
        }
    } else {
      const d = o.getBoundingClientRect().bottom;
      for (const S of [...h].reverse())
        if (S.getBoundingClientRect().bottom <= d) {
          S.focus();
          break;
        }
    }
  }
  return {
    onListScroll: u,
    onListKeydown: y
  };
}
const _t = O({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: ee,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...Qe({
    itemChildren: !1
  })
}, "Select"), Lt = O({
  ..._t(),
  ...Ze(Je({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...je({
    transition: {
      component: Ge
    }
  })
}, "VSelect"), Wt = H()({
  name: "VSelect",
  props: Lt(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, r) {
    let {
      slots: t
    } = r;
    const {
      t: n
    } = Me(), u = X(), v = X(), y = X(), s = ge(e, "menu"), o = B({
      get: () => s.value,
      set: (l) => {
        var a;
        s.value && !l && ((a = v.value) != null && a.ΨopenChildren) || (s.value = l);
      }
    }), {
      items: h,
      transformIn: b,
      transformOut: _
    } = Ee(e), d = ge(e, "modelValue", [], (l) => b(l === null ? [null] : Ne(l)), (l) => {
      const a = _(l);
      return e.multiple ? a : a[0] ?? null;
    }), S = B(() => typeof e.counterValue == "function" ? e.counterValue(d.value) : typeof e.counterValue == "number" ? e.counterValue : d.value.length), C = He(), w = B(() => d.value.map((l) => l.value)), f = N(!1), x = B(() => o.value ? e.closeText : e.openText);
    let P = "", j;
    const R = B(() => e.hideSelected ? h.value.filter((l) => !d.value.some((a) => e.valueComparator(a, l))) : h.value), Z = B(() => e.hideNoData && !R.value.length || e.readonly || (C == null ? void 0 : C.isReadonly.value)), Y = B(() => {
      var l;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((l = e.menuProps) == null ? void 0 : l.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), I = X(), {
      onListScroll: G,
      onListKeydown: M
    } = Bt(I, u);
    function L(l) {
      e.openOnClear && (o.value = !0);
    }
    function K() {
      Z.value || (o.value = !o.value);
    }
    function J(l) {
      var m, k;
      if (!l.key || e.readonly || C != null && C.isReadonly.value) return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(l.key) && l.preventDefault(), ["Enter", "ArrowDown", " "].includes(l.key) && (o.value = !0), ["Escape", "Tab"].includes(l.key) && (o.value = !1), l.key === "Home" ? (m = I.value) == null || m.focus("first") : l.key === "End" && ((k = I.value) == null || k.focus("last"));
      const a = 1e3;
      function c(g) {
        const A = g.key.length === 1, T = !g.ctrlKey && !g.metaKey && !g.altKey;
        return A && T;
      }
      if (e.multiple || !c(l)) return;
      const V = performance.now();
      V - j > a && (P = ""), P += l.key.toLowerCase(), j = V;
      const p = h.value.find((g) => g.title.toLowerCase().startsWith(P));
      if (p !== void 0) {
        d.value = [p];
        const g = R.value.indexOf(p);
        re && window.requestAnimationFrame(() => {
          var A;
          g >= 0 && ((A = y.value) == null || A.scrollToIndex(g));
        });
      }
    }
    function F(l) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!l.props.disabled)
        if (e.multiple) {
          const c = d.value.findIndex((p) => e.valueComparator(p.value, l.value)), V = a ?? !~c;
          if (~c) {
            const p = V ? [...d.value, l] : [...d.value];
            p.splice(c, 1), d.value = p;
          } else V && (d.value = [...d.value, l]);
        } else {
          const c = a !== !1;
          d.value = c ? [l] : [], Ve(() => {
            o.value = !1;
          });
        }
    }
    function te(l) {
      var a;
      (a = I.value) != null && a.$el.contains(l.relatedTarget) || (o.value = !1);
    }
    function E() {
      var l;
      f.value && ((l = u.value) == null || l.focus());
    }
    function oe(l) {
      f.value = !0;
    }
    function ae(l) {
      if (l == null) d.value = [];
      else if (pe(u.value, ":autofill") || pe(u.value, ":-webkit-autofill")) {
        const a = h.value.find((c) => c.title === l);
        a && F(a);
      } else u.value && (u.value.value = "");
    }
    return z(o, () => {
      if (!e.hideSelected && o.value && d.value.length) {
        const l = R.value.findIndex((a) => d.value.some((c) => e.valueComparator(c.value, a.value)));
        re && window.requestAnimationFrame(() => {
          var a;
          l >= 0 && ((a = y.value) == null || a.scrollToIndex(l));
        });
      }
    }), z(() => e.items, (l, a) => {
      o.value || f.value && !a.length && l.length && (o.value = !0);
    }), U(() => {
      const l = !!(e.chips || t.chip), a = !!(!e.hideNoData || R.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), c = d.value.length > 0, V = he.filterProps(e), p = c || !f.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return i(he, q({
        ref: u
      }, V, {
        modelValue: d.value.map((m) => m.props.value).join(", "),
        "onUpdate:modelValue": ae,
        focused: f.value,
        "onUpdate:focused": (m) => f.value = m,
        validationValue: d.externalValue,
        counterValue: S.value,
        dirty: c,
        class: ["v-select", {
          "v-select--active-menu": o.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": d.value.length,
          "v-select--selection-slot": !!t.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: p,
        "onClick:clear": L,
        "onMousedown:control": K,
        onBlur: te,
        onKeydown: J,
        "aria-label": n(x.value),
        title: n(x.value)
      }), {
        ...t,
        default: () => i($, null, [i(Ue, q({
          ref: v,
          modelValue: o.value,
          "onUpdate:modelValue": (m) => o.value = m,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: Z.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: E
        }, Y.value), {
          default: () => [a && i(Ke, q({
            ref: I,
            selected: w.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (m) => m.preventDefault(),
            onKeydown: M,
            onFocusin: oe,
            onScrollPassive: G,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var m, k, g;
              return [(m = t["prepend-item"]) == null ? void 0 : m.call(t), !R.value.length && !e.hideNoData && (((k = t["no-data"]) == null ? void 0 : k.call(t)) ?? i(ye, {
                title: n(e.noDataText)
              }, null)), i(Dt, {
                ref: y,
                renderless: !0,
                items: R.value
              }, {
                default: (A) => {
                  var fe;
                  let {
                    item: T,
                    index: Q,
                    itemRef: D
                  } = A;
                  const ve = q(T.props, {
                    ref: D,
                    key: Q,
                    onClick: () => F(T, null)
                  });
                  return ((fe = t.item) == null ? void 0 : fe.call(t, {
                    item: T,
                    index: Q,
                    props: ve
                  })) ?? i(ye, q(ve, {
                    role: "option"
                  }), {
                    prepend: (Ie) => {
                      let {
                        isSelected: we
                      } = Ie;
                      return i($, null, [e.multiple && !e.hideSelected ? i(qe, {
                        key: T.value,
                        modelValue: we,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, T.props.prependAvatar && i(ce, {
                        image: T.props.prependAvatar
                      }, null), T.props.prependIcon && i(le, {
                        icon: T.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (g = t["append-item"]) == null ? void 0 : g.call(t)];
            }
          })]
        }), d.value.map((m, k) => {
          function g(D) {
            D.stopPropagation(), D.preventDefault(), F(m, !1);
          }
          const A = {
            "onClick:close": g,
            onKeydown(D) {
              D.key !== "Enter" && D.key !== " " || (D.preventDefault(), D.stopPropagation(), g(D));
            },
            onMousedown(D) {
              D.preventDefault(), D.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, T = l ? !!t.chip : !!t.selection, Q = T ? ze(l ? t.chip({
            item: m,
            index: k,
            props: A
          }) : t.selection({
            item: m,
            index: k
          })) : void 0;
          if (!(T && !Q))
            return i("div", {
              key: m.value,
              class: "v-select__selection"
            }, [l ? t.chip ? i(ie, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: m.title
                }
              }
            }, {
              default: () => [Q]
            }) : i($e, q({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: m.title,
              disabled: m.props.disabled
            }, A), null) : Q ?? i("span", {
              class: "v-select__selection-text"
            }, [m.title, e.multiple && k < d.value.length - 1 && i("span", {
              class: "v-select__selection-comma"
            }, [Te(",")])])]);
        })]),
        "append-inner": function() {
          var A;
          for (var m = arguments.length, k = new Array(m), g = 0; g < m; g++)
            k[g] = arguments[g];
          return i($, null, [(A = t["append-inner"]) == null ? void 0 : A.call(t, ...k), e.menuIcon ? i(le, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), We({
      isFocused: f,
      menu: o,
      select: F
    }, u);
  }
}), Ft = H()({
  name: "VCardActions",
  props: W(),
  setup(e, r) {
    let {
      slots: t
    } = r;
    return Xe({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), U(() => {
      var n;
      return i("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(n = t.default) == null ? void 0 : n.call(t)]);
    }), {};
  }
}), Ot = O({
  opacity: [Number, String],
  ...W(),
  ...de()
}, "VCardSubtitle"), Mt = H()({
  name: "VCardSubtitle",
  props: Ot(),
  setup(e, r) {
    let {
      slots: t
    } = r;
    return U(() => i(e.tag, {
      class: ["v-card-subtitle", e.class],
      style: [{
        "--v-card-subtitle-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), Et = Ye("v-card-title"), Nt = O({
  appendAvatar: String,
  appendIcon: ee,
  prependAvatar: String,
  prependIcon: ee,
  subtitle: [String, Number],
  title: [String, Number],
  ...W(),
  ...Pe()
}, "VCardItem"), Ht = H()({
  name: "VCardItem",
  props: Nt(),
  setup(e, r) {
    let {
      slots: t
    } = r;
    return U(() => {
      var h;
      const n = !!(e.prependAvatar || e.prependIcon), u = !!(n || t.prepend), v = !!(e.appendAvatar || e.appendIcon), y = !!(v || t.append), s = !!(e.title != null || t.title), o = !!(e.subtitle != null || t.subtitle);
      return i("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [u && i("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [t.prepend ? i(ie, {
        key: "prepend-defaults",
        disabled: !n,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, t.prepend) : i($, null, [e.prependAvatar && i(ce, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && i(le, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), i("div", {
        class: "v-card-item__content"
      }, [s && i(Et, {
        key: "title"
      }, {
        default: () => {
          var b;
          return [((b = t.title) == null ? void 0 : b.call(t)) ?? e.title];
        }
      }), o && i(Mt, {
        key: "subtitle"
      }, {
        default: () => {
          var b;
          return [((b = t.subtitle) == null ? void 0 : b.call(t)) ?? e.subtitle];
        }
      }), (h = t.default) == null ? void 0 : h.call(t)]), y && i("div", {
        key: "append",
        class: "v-card-item__append"
      }, [t.append ? i(ie, {
        key: "append-defaults",
        disabled: !v,
        defaults: {
          VAvatar: {
            density: e.density,
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, t.append) : i($, null, [e.appendIcon && i(le, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && i(ce, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Ut = O({
  opacity: [Number, String],
  ...W(),
  ...de()
}, "VCardText"), Kt = H()({
  name: "VCardText",
  props: Ut(),
  setup(e, r) {
    let {
      slots: t
    } = r;
    return U(() => i(e.tag, {
      class: ["v-card-text", e.class],
      style: [{
        "--v-card-text-opacity": e.opacity
      }, e.style]
    }, t)), {};
  }
}), qt = O({
  appendAvatar: String,
  appendIcon: ee,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ee,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...St(),
  ...W(),
  ...Pe(),
  ...Ce(),
  ...kt(),
  ...Vt(),
  ...bt(),
  ...pt(),
  ...yt(),
  ...ht(),
  ...de(),
  ...gt(),
  ...mt({
    variant: "elevated"
  })
}, "VCard"), jt = H()({
  name: "VCard",
  directives: {
    Ripple: et
  },
  props: qt(),
  setup(e, r) {
    let {
      attrs: t,
      slots: n
    } = r;
    const {
      themeClasses: u
    } = tt(e), {
      borderClasses: v
    } = at(e), {
      colorClasses: y,
      colorStyles: s,
      variantClasses: o
    } = nt(e), {
      densityClasses: h
    } = lt(e), {
      dimensionStyles: b
    } = Se(e), {
      elevationClasses: _
    } = it(e), {
      loaderClasses: d
    } = ot(e), {
      locationStyles: S
    } = st(e), {
      positionClasses: C
    } = ut(e), {
      roundedClasses: w
    } = rt(e), f = ct(e, t), x = B(() => e.link !== !1 && f.isLink.value), P = B(() => !e.disabled && e.link !== !1 && (e.link || f.isClickable.value));
    return U(() => {
      const j = x.value ? "a" : e.tag, R = !!(n.title || e.title != null), Z = !!(n.subtitle || e.subtitle != null), Y = R || Z, I = !!(n.append || e.appendAvatar || e.appendIcon), G = !!(n.prepend || e.prependAvatar || e.prependIcon), M = !!(n.image || e.image), L = Y || G || I, K = !!(n.text || e.text != null);
      return Re(i(j, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": P.value
        }, u.value, v.value, y.value, h.value, _.value, d.value, C.value, w.value, o.value, e.class],
        style: [s.value, b.value, S.value, e.style],
        href: f.href.value,
        onClick: P.value && f.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var J;
          return [M && i("div", {
            key: "image",
            class: "v-card__image"
          }, [n.image ? i(ie, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, n.image) : i(vt, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), i(ft, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: n.loader
          }), L && i(Ht, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: n.item,
            prepend: n.prepend,
            title: n.title,
            subtitle: n.subtitle,
            append: n.append
          }), K && i(Kt, {
            key: "text"
          }, {
            default: () => {
              var F;
              return [((F = n.text) == null ? void 0 : F.call(n)) ?? e.text];
            }
          }), (J = n.default) == null ? void 0 : J.call(n), n.actions && i(Ft, null, {
            default: n.actions
          }), dt(P.value, "v-card")];
        }
      }), [[De("ripple"), P.value && e.ripple]]);
    }), {};
  }
});
export {
  jt as V,
  Kt as a,
  Wt as b,
  Ft as c,
  Et as d,
  Mt as e,
  Dt as f,
  At as g,
  Pt as h,
  xt as i,
  _t as m,
  Bt as u
};
