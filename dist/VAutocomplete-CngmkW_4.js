import { ref as _, shallowRef as A, computed as g, watch as R, nextTick as j, createVNode as o, mergeProps as b, Fragment as M, createTextVNode as Ve } from "vue";
import { u as ke, f as we, m as Ce } from "./VCard-DwrOBi19.js";
import { i as Se, p as xe, H as be, l as z, at as Fe, G as Ae, a5 as Ie, au as Pe, av as De, aw as _e, u as Re, e as J, K as Q, ax as Me, h as Te, Z as Le, _ as X, ay as Be, c as Ee, az as Ke, d as Ne, L as Oe, a3 as Ue, aA as ze, s as He, aB as qe, aC as Ge, aD as Y } from "./main-DaW4PQ0p.js";
function We(e, y, u) {
  if (y == null) return e;
  if (Array.isArray(y)) throw new Error("Multiple matches is not implemented");
  return typeof y == "number" && ~y ? o(M, null, [o("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(0, y)]), o("span", {
    class: "v-autocomplete__mask"
  }, [e.substr(y, u)]), o("span", {
    class: "v-autocomplete__unmask"
  }, [e.substr(y + u)])]) : e;
}
const Ze = xe({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  clearOnSelect: Boolean,
  search: String,
  ...qe({
    filterKeys: ["title"]
  }),
  ...Ce(),
  ...He(Ge({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...ze({
    transition: !1
  })
}, "VAutocomplete"), Qe = Se()({
  name: "VAutocomplete",
  props: Ze(),
  emits: {
    "update:focused": (e) => !0,
    "update:search": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, y) {
    let {
      slots: u
    } = y;
    const {
      t: T
    } = be(), h = _(), V = A(!1), w = A(!0), L = A(!1), H = _(), q = _(), B = z(e, "menu"), c = g({
      get: () => B.value,
      set: (l) => {
        var t;
        B.value && !l && ((t = H.value) != null && t.ΨopenChildren) || (B.value = l);
      }
    }), r = A(-1), ee = g(() => {
      var l;
      return (l = h.value) == null ? void 0 : l.color;
    }), G = g(() => c.value ? e.closeText : e.openText), {
      items: W,
      transformIn: le,
      transformOut: te
    } = Fe(e), {
      textColorClasses: ae,
      textColorStyles: ue
    } = Ae(ee), v = z(e, "search", ""), n = z(e, "modelValue", [], (l) => le(l === null ? [null] : Ie(l)), (l) => {
      const t = te(l);
      return e.multiple ? t : t[0] ?? null;
    }), ne = g(() => typeof e.counterValue == "function" ? e.counterValue(n.value) : typeof e.counterValue == "number" ? e.counterValue : n.value.length), x = Pe(), {
      filteredItems: E,
      getMatches: oe
    } = De(e, W, () => w.value ? "" : v.value), k = g(() => e.hideSelected ? E.value.filter((l) => !n.value.some((t) => t.value === l.value)) : E.value), I = g(() => !!(e.chips || u.chip)), F = g(() => I.value || !!u.selection), ie = g(() => n.value.map((l) => l.props.value)), K = g(() => {
      var t;
      return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && v.value === ((t = k.value[0]) == null ? void 0 : t.title)) && k.value.length > 0 && !w.value && !L.value;
    }), N = g(() => e.hideNoData && !k.value.length || e.readonly || (x == null ? void 0 : x.isReadonly.value)), O = _(), {
      onListScroll: se,
      onListKeydown: re
    } = ke(O, h);
    function ce(l) {
      e.openOnClear && (c.value = !0), v.value = "";
    }
    function ve() {
      N.value || (c.value = !0);
    }
    function de(l) {
      N.value || (V.value && (l.preventDefault(), l.stopPropagation()), c.value = !c.value);
    }
    function fe(l) {
      var a, i, m;
      if (e.readonly || x != null && x.isReadonly.value) return;
      const t = h.value.selectionStart, s = n.value.length;
      if ((r.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(l.key)) && l.preventDefault(), ["Enter", "ArrowDown"].includes(l.key) && (c.value = !0), ["Escape"].includes(l.key) && (c.value = !1), K.value && ["Enter", "Tab"].includes(l.key) && !n.value.some((d) => {
        let {
          value: f
        } = d;
        return f === k.value[0].value;
      }) && C(k.value[0]), l.key === "ArrowDown" && K.value && ((a = O.value) == null || a.focus("next")), ["Backspace", "Delete"].includes(l.key)) {
        if (!e.multiple && F.value && n.value.length > 0 && !v.value) return C(n.value[0], !1);
        if (~r.value) {
          const d = r.value;
          C(n.value[r.value], !1), r.value = d >= s - 1 ? s - 2 : d;
        } else l.key === "Backspace" && !v.value && (r.value = s - 1);
      }
      if (e.multiple) {
        if (l.key === "ArrowLeft") {
          if (r.value < 0 && t > 0) return;
          const d = r.value > -1 ? r.value - 1 : s - 1;
          n.value[d] ? r.value = d : (r.value = -1, h.value.setSelectionRange((i = v.value) == null ? void 0 : i.length, (m = v.value) == null ? void 0 : m.length));
        }
        if (l.key === "ArrowRight") {
          if (r.value < 0) return;
          const d = r.value + 1;
          n.value[d] ? r.value = d : (r.value = -1, h.value.setSelectionRange(0, 0));
        }
      }
    }
    function me(l) {
      if (Y(h.value, ":autofill") || Y(h.value, ":-webkit-autofill")) {
        const t = W.value.find((s) => s.title === l.target.value);
        t && C(t);
      }
    }
    function pe() {
      var l;
      V.value && (w.value = !0, (l = h.value) == null || l.focus());
    }
    function he(l) {
      V.value = !0, setTimeout(() => {
        L.value = !0;
      });
    }
    function ge(l) {
      L.value = !1;
    }
    function ye(l) {
      (l == null || l === "" && !e.multiple && !F.value) && (n.value = []);
    }
    const U = A(!1);
    function C(l) {
      let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      if (!(!l || l.props.disabled))
        if (e.multiple) {
          const s = n.value.findIndex((i) => e.valueComparator(i.value, l.value)), a = t ?? !~s;
          if (~s) {
            const i = a ? [...n.value, l] : [...n.value];
            i.splice(s, 1), n.value = i;
          } else a && (n.value = [...n.value, l]);
          e.clearOnSelect && (v.value = "");
        } else {
          const s = t !== !1;
          n.value = s ? [l] : [], v.value = s && !F.value ? l.title : "", j(() => {
            c.value = !1, w.value = !0;
          });
        }
    }
    return R(V, (l, t) => {
      var s;
      l !== t && (l ? (U.value = !0, v.value = e.multiple || F.value ? "" : String(((s = n.value.at(-1)) == null ? void 0 : s.props.title) ?? ""), w.value = !0, j(() => U.value = !1)) : (!e.multiple && v.value == null && (n.value = []), c.value = !1, n.value.some((a) => {
        let {
          title: i
        } = a;
        return i === v.value;
      }) || (v.value = ""), r.value = -1));
    }), R(v, (l) => {
      !V.value || U.value || (l && (c.value = !0), w.value = !l);
    }), R(c, () => {
      if (!e.hideSelected && c.value && n.value.length) {
        const l = k.value.findIndex((t) => n.value.some((s) => t.value === s.value));
        _e && window.requestAnimationFrame(() => {
          var t;
          l >= 0 && ((t = q.value) == null || t.scrollToIndex(l));
        });
      }
    }), R(() => e.items, (l, t) => {
      c.value || V.value && !t.length && l.length && (c.value = !0);
    }), Re(() => {
      const l = !!(!e.hideNoData || k.value.length || u["prepend-item"] || u["append-item"] || u["no-data"]), t = n.value.length > 0, s = J.filterProps(e);
      return o(J, b({
        ref: h
      }, s, {
        modelValue: v.value,
        "onUpdate:modelValue": [(a) => v.value = a, ye],
        focused: V.value,
        "onUpdate:focused": (a) => V.value = a,
        validationValue: n.externalValue,
        counterValue: ne.value,
        dirty: t,
        onChange: me,
        class: ["v-autocomplete", `v-autocomplete--${e.multiple ? "multiple" : "single"}`, {
          "v-autocomplete--active-menu": c.value,
          "v-autocomplete--chips": !!e.chips,
          "v-autocomplete--selection-slot": !!F.value,
          "v-autocomplete--selecting-index": r.value > -1
        }, e.class],
        style: e.style,
        readonly: e.readonly,
        placeholder: t ? void 0 : e.placeholder,
        "onClick:clear": ce,
        "onMousedown:control": ve,
        onKeydown: fe
      }), {
        ...u,
        default: () => o(M, null, [o(Te, b({
          ref: H,
          modelValue: c.value,
          "onUpdate:modelValue": (a) => c.value = a,
          activator: "parent",
          contentClass: "v-autocomplete__content",
          disabled: N.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: pe
        }, e.menuProps), {
          default: () => [l && o(Le, b({
            ref: O,
            selected: ie.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (a) => a.preventDefault(),
            onKeydown: re,
            onFocusin: he,
            onFocusout: ge,
            onScrollPassive: se,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var a, i, m;
              return [(a = u["prepend-item"]) == null ? void 0 : a.call(u), !k.value.length && !e.hideNoData && (((i = u["no-data"]) == null ? void 0 : i.call(u)) ?? o(X, {
                title: T(e.noDataText)
              }, null)), o(we, {
                ref: q,
                renderless: !0,
                items: k.value
              }, {
                default: (d) => {
                  var $;
                  let {
                    item: f,
                    index: S,
                    itemRef: p
                  } = d;
                  const Z = b(f.props, {
                    ref: p,
                    key: S,
                    active: K.value && S === 0 ? !0 : void 0,
                    onClick: () => C(f, null)
                  });
                  return (($ = u.item) == null ? void 0 : $.call(u, {
                    item: f,
                    index: S,
                    props: Z
                  })) ?? o(X, b(Z, {
                    role: "option"
                  }), {
                    prepend: (P) => {
                      let {
                        isSelected: D
                      } = P;
                      return o(M, null, [e.multiple && !e.hideSelected ? o(Be, {
                        key: f.value,
                        modelValue: D,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, f.props.prependAvatar && o(Ee, {
                        image: f.props.prependAvatar
                      }, null), f.props.prependIcon && o(Q, {
                        icon: f.props.prependIcon
                      }, null)]);
                    },
                    title: () => {
                      var P, D;
                      return w.value ? f.title : We(f.title, (P = oe(f)) == null ? void 0 : P.title, ((D = v.value) == null ? void 0 : D.length) ?? 0);
                    }
                  });
                }
              }), (m = u["append-item"]) == null ? void 0 : m.call(u)];
            }
          })]
        }), n.value.map((a, i) => {
          function m(p) {
            p.stopPropagation(), p.preventDefault(), C(a, !1);
          }
          const d = {
            "onClick:close": m,
            onKeydown(p) {
              p.key !== "Enter" && p.key !== " " || (p.preventDefault(), p.stopPropagation(), m(p));
            },
            onMousedown(p) {
              p.preventDefault(), p.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, f = I.value ? !!u.chip : !!u.selection, S = f ? Ke(I.value ? u.chip({
            item: a,
            index: i,
            props: d
          }) : u.selection({
            item: a,
            index: i
          })) : void 0;
          if (!(f && !S))
            return o("div", {
              key: a.value,
              class: ["v-autocomplete__selection", i === r.value && ["v-autocomplete__selection--selected", ae.value]],
              style: i === r.value ? ue.value : {}
            }, [I.value ? u.chip ? o(Oe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: a.title
                }
              }
            }, {
              default: () => [S]
            }) : o(Ne, b({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: a.title,
              disabled: a.props.disabled
            }, d), null) : S ?? o("span", {
              class: "v-autocomplete__selection-text"
            }, [a.title, e.multiple && i < n.value.length - 1 && o("span", {
              class: "v-autocomplete__selection-comma"
            }, [Ve(",")])])]);
        })]),
        "append-inner": function() {
          var d;
          for (var a = arguments.length, i = new Array(a), m = 0; m < a; m++)
            i[m] = arguments[m];
          return o(M, null, [(d = u["append-inner"]) == null ? void 0 : d.call(u, ...i), e.menuIcon ? o(Q, {
            class: "v-autocomplete__menu-icon",
            icon: e.menuIcon,
            onMousedown: de,
            onClick: Me,
            "aria-label": T(G.value),
            title: T(G.value),
            tabindex: "-1"
          }, null) : void 0]);
        }
      });
    }), Ue({
      isFocused: V,
      isPristine: w,
      menu: c,
      search: v,
      filteredItems: E,
      select: C
    }, h);
  }
});
export {
  Qe as V
};
