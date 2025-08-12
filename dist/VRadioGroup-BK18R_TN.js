import { createVNode as t, mergeProps as d, computed as C, Fragment as $ } from "vue";
import { i as f, p as V, u as y, j as i, m as A, k as O, l as h, n as U, o as m, q as x, r as F, I as p, s as N, t as j, v as q } from "./main-u1Mo8sLp.js";
const D = V({
  ...A({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), w = f()({
  name: "VRadio",
  props: D(),
  setup(e, l) {
    let {
      slots: r
    } = l;
    return y(() => {
      const a = i.filterProps(e);
      return t(i, d(a, {
        class: ["v-radio", e.class],
        style: e.style,
        type: "radio"
      }), r);
    }), {};
  }
}), L = V({
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...j(),
  ...N(q(), ["multiple"]),
  trueIcon: {
    type: p,
    default: "$radioOn"
  },
  falseIcon: {
    type: p,
    default: "$radioOff"
  },
  type: {
    type: String,
    default: "radio"
  }
}, "VRadioGroup"), z = f()({
  name: "VRadioGroup",
  inheritAttrs: !1,
  props: L(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, l) {
    let {
      attrs: r,
      slots: a
    } = l;
    const v = O(), c = C(() => e.id || `radio-group-${v}`), o = h(e, "modelValue");
    return y(() => {
      const [b, I] = U(r), P = m.filterProps(e), g = i.filterProps(e), s = a.label ? a.label({
        label: e.label,
        props: {
          for: c.value
        }
      }) : e.label;
      return t(m, d({
        class: ["v-radio-group", e.class],
        style: e.style
      }, b, P, {
        modelValue: o.value,
        "onUpdate:modelValue": (u) => o.value = u,
        id: c.value
      }), {
        ...a,
        default: (u) => {
          let {
            id: n,
            messagesId: R,
            isDisabled: k,
            isReadonly: G
          } = u;
          return t($, null, [s && t(x, {
            id: n.value
          }, {
            default: () => [s]
          }), t(F, d(g, {
            id: n.value,
            "aria-describedby": R.value,
            defaultsTarget: "VRadio",
            trueIcon: e.trueIcon,
            falseIcon: e.falseIcon,
            type: e.type,
            disabled: k.value,
            readonly: G.value,
            "aria-labelledby": s ? n.value : void 0,
            multiple: !1
          }, I, {
            modelValue: o.value,
            "onUpdate:modelValue": (S) => o.value = S
          }), a)]);
        }
      });
    }), {};
  }
});
export {
  z as V,
  w as a
};
