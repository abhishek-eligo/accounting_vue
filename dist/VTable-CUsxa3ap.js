import { createVNode as t } from "vue";
import { i as m, p as h, y as d, A as b, u as v, ao as f, N as u, O as c, U as g, W as x } from "./main-u1Mo8sLp.js";
const y = h({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...x(),
  ...g(),
  ...c(),
  ...u()
}, "VTable"), k = m()({
  name: "VTable",
  props: y(),
  setup(a, r) {
    let {
      slots: e,
      emit: T
    } = r;
    const {
      themeClasses: i
    } = d(a), {
      densityClasses: n
    } = b(a);
    return v(() => t(a.tag, {
      class: ["v-table", {
        "v-table--fixed-height": !!a.height,
        "v-table--fixed-header": a.fixedHeader,
        "v-table--fixed-footer": a.fixedFooter,
        "v-table--has-top": !!e.top,
        "v-table--has-bottom": !!e.bottom,
        "v-table--hover": a.hover
      }, i.value, n.value, a.class],
      style: a.style
    }, {
      default: () => {
        var o, l, s;
        return [(o = e.top) == null ? void 0 : o.call(e), e.default ? t("div", {
          class: "v-table__wrapper",
          style: {
            height: f(a.height)
          }
        }, [t("table", null, [e.default()])]) : (l = e.wrapper) == null ? void 0 : l.call(e), (s = e.bottom) == null ? void 0 : s.call(e)];
      }
    })), {};
  }
});
export {
  k as V,
  y as m
};
