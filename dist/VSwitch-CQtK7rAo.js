import { ref as T, computed as V, createVNode as t, mergeProps as g, Fragment as j } from "vue";
import { i as G, p as H, l as w, aE as K, a6 as O, aw as W, k as $, u as q, n as J, o as y, j as C, L as Q, aF as X, K as Y, aG as Z, aH as ee, m as te, t as ae } from "./main-DaW4PQ0p.js";
const le = H({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...ae(),
  ...te()
}, "VSwitch"), ne = G()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: le(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, b) {
    let {
      attrs: S,
      slots: a
    } = b;
    const n = w(e, "indeterminate"), o = w(e, "modelValue"), {
      loaderClasses: P
    } = K(e), {
      isFocused: _,
      focus: F,
      blur: I
    } = O(e), m = T(), h = W && window.matchMedia("(forced-colors: active)").matches, x = V(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), A = $(), B = V(() => e.id || `switch-${A}`);
    function p() {
      n.value && (n.value = !1);
    }
    function R(i) {
      var u, r;
      i.stopPropagation(), i.preventDefault(), (r = (u = m.value) == null ? void 0 : u.input) == null || r.click();
    }
    return q(() => {
      const [i, u] = J(S), r = y.filterProps(e), z = C.filterProps(e);
      return t(y, g({
        class: ["v-switch", {
          "v-switch--flat": e.flat
        }, {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": n.value
        }, P.value, e.class]
      }, i, r, {
        modelValue: o.value,
        "onUpdate:modelValue": (c) => o.value = c,
        id: B.value,
        focused: _.value,
        style: e.style
      }), {
        ...a,
        default: (c) => {
          let {
            id: D,
            messagesId: L,
            isDisabled: M,
            isReadonly: N,
            isValid: k
          } = c;
          const d = {
            model: o,
            isValid: k
          };
          return t(C, g({
            ref: m
          }, z, {
            modelValue: o.value,
            "onUpdate:modelValue": [(s) => o.value = s, p],
            id: D.value,
            "aria-describedby": L.value,
            type: "checkbox",
            "aria-checked": n.value ? "mixed" : void 0,
            disabled: M.value,
            readonly: N.value,
            onFocus: F,
            onBlur: I
          }, u), {
            ...a,
            default: (s) => {
              let {
                backgroundColorClasses: v,
                backgroundColorStyles: l
              } = s;
              return t("div", {
                class: ["v-switch__track", h ? void 0 : v.value],
                style: l.value,
                onClick: R
              }, [a["track-true"] && t("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](d)]), a["track-false"] && t("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](d)])]);
            },
            input: (s) => {
              let {
                inputNode: v,
                icon: l,
                backgroundColorClasses: U,
                backgroundColorStyles: E
              } = s;
              return t(j, null, [v, t("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": l || e.loading
                }, e.inset || h ? void 0 : U.value],
                style: e.inset ? void 0 : E.value
              }, [a.thumb ? t(Q, {
                defaults: {
                  VIcon: {
                    icon: l,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...d,
                  icon: l
                })]
              }) : t(X, null, {
                default: () => [e.loading ? t(Z, {
                  name: "v-switch",
                  active: !0,
                  color: k.value === !1 ? void 0 : x.value
                }, {
                  default: (f) => a.loader ? a.loader(f) : t(ee, {
                    active: f.isActive,
                    color: f.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : l && t(Y, {
                  key: String(l),
                  icon: l,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
});
export {
  ne as V
};
