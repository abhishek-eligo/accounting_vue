import { ref as p, createVNode as v } from "vue";
import { i as b, p as F, a2 as V, u as y, a3 as h, a4 as R, W as P } from "./main-u1Mo8sLp.js";
const k = F({
  ...P(),
  ...R()
}, "VForm"), S = b()({
  name: "VForm",
  props: k(),
  emits: {
    "update:modelValue": (o) => !0,
    submit: (o) => !0
  },
  setup(o, i) {
    let {
      slots: n,
      emit: f
    } = i;
    const r = V(o), s = p();
    function u(t) {
      t.preventDefault(), r.reset();
    }
    function l(t) {
      const a = t, e = r.validate();
      a.then = e.then.bind(e), a.catch = e.catch.bind(e), a.finally = e.finally.bind(e), f("submit", a), a.defaultPrevented || e.then((c) => {
        var m;
        let {
          valid: d
        } = c;
        d && ((m = s.value) == null || m.submit());
      }), a.preventDefault();
    }
    return y(() => {
      var t;
      return v("form", {
        ref: s,
        class: ["v-form", o.class],
        style: o.style,
        novalidate: !0,
        onReset: u,
        onSubmit: l
      }, [(t = n.default) == null ? void 0 : t.call(n, r)]);
    }), h(r, s);
  }
});
export {
  S as V
};
