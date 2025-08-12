import { computed as A, createVNode as t, mergeProps as l } from "vue";
import { i as F, p as I, l as B, a6 as U, k as R, u as D, n as K, o as u, ay as r, s as M, t as N, aK as $ } from "./main-u1Mo8sLp.js";
const j = I({
  ...N(),
  ...M($(), ["inline"])
}, "VCheckbox"), z = F()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: j(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, d) {
    let {
      attrs: c,
      slots: a
    } = d;
    const s = B(e, "modelValue"), {
      isFocused: n,
      focus: i,
      blur: m
    } = U(e), V = R(), p = A(() => e.id || `checkbox-${V}`);
    return D(() => {
      const [b, k] = K(c), v = u.filterProps(e), f = r.filterProps(e);
      return t(u, l({
        class: ["v-checkbox", e.class]
      }, b, v, {
        modelValue: s.value,
        "onUpdate:modelValue": (o) => s.value = o,
        id: p.value,
        focused: n.value,
        style: e.style
      }), {
        ...a,
        default: (o) => {
          let {
            id: x,
            messagesId: h,
            isDisabled: P,
            isReadonly: y,
            isValid: C
          } = o;
          return t(r, l(f, {
            id: x.value,
            "aria-describedby": h.value,
            disabled: P.value,
            readonly: y.value
          }, k, {
            error: C.value === !1,
            modelValue: s.value,
            "onUpdate:modelValue": (g) => s.value = g,
            onFocus: i,
            onBlur: m
          }), a);
        }
      });
    }), {};
  }
});
export {
  z as V
};
