import { ref as L, watch as d, nextTick as D, mergeProps as f, createVNode as m } from "vue";
import { i as h, p as x, l as A, al as S, aw as w, u as B, aL as g, L as F, a3 as I, aM as O, aN as R, aO as T } from "./main-V1ksYwjH.js";
const N = x({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...O({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: R
    },
    zIndex: 2400
  })
}, "VDialog"), k = h()({
  name: "VDialog",
  props: N(),
  emits: {
    "update:modelValue": (a) => !0,
    afterLeave: () => !0
  },
  setup(a, p) {
    let {
      emit: E,
      slots: u
    } = p;
    const r = A(a, "modelValue"), {
      scopeId: V
    } = S(), e = L();
    function v(t) {
      var l, s;
      const n = t.relatedTarget, c = t.target;
      if (n !== c && ((l = e.value) != null && l.contentEl) && // We're the topmost dialog
      ((s = e.value) != null && s.globalTop) && // It isn't the document or the dialog body
      ![document, e.value.contentEl].includes(c) && // It isn't inside the dialog body
      !e.value.contentEl.contains(c)) {
        const o = T(e.value.contentEl);
        if (!o.length) return;
        const i = o[0], y = o[o.length - 1];
        n === i ? y.focus() : i.focus();
      }
    }
    w && d(() => r.value && a.retainFocus, (t) => {
      t ? document.addEventListener("focusin", v) : document.removeEventListener("focusin", v);
    }, {
      immediate: !0
    });
    function P() {
      var t;
      (t = e.value) != null && t.contentEl && !e.value.contentEl.contains(document.activeElement) && e.value.contentEl.focus({
        preventScroll: !0
      });
    }
    function b() {
      E("afterLeave");
    }
    return d(r, async (t) => {
      var n;
      t || (await D(), (n = e.value.activatorEl) == null || n.focus({
        preventScroll: !0
      }));
    }), B(() => {
      const t = g.filterProps(a), n = f({
        "aria-haspopup": "dialog",
        "aria-expanded": String(r.value)
      }, a.activatorProps), c = f({
        tabindex: -1
      }, a.contentProps);
      return m(g, f({
        ref: e,
        class: ["v-dialog", {
          "v-dialog--fullscreen": a.fullscreen,
          "v-dialog--scrollable": a.scrollable
        }, a.class],
        style: a.style
      }, t, {
        modelValue: r.value,
        "onUpdate:modelValue": (l) => r.value = l,
        "aria-modal": "true",
        activatorProps: n,
        contentProps: c,
        role: "dialog",
        onAfterEnter: P,
        onAfterLeave: b
      }, V), {
        activator: u.activator,
        default: function() {
          for (var l = arguments.length, s = new Array(l), o = 0; o < l; o++)
            s[o] = arguments[o];
          return m(F, {
            root: "VDialog"
          }, {
            default: () => {
              var i;
              return [(i = u.default) == null ? void 0 : i.call(u, ...s)];
            }
          });
        }
      });
    }), I({}, e);
  }
});
export {
  k as V
};
