import { computed as y, ref as v, shallowRef as p, watchEffect as ee, onMounted as te, watch as x, onBeforeUnmount as ae, createVNode as l, mergeProps as R, Fragment as b, withDirectives as _, resolveDirective as ne, vModelText as le, nextTick as S } from "vue";
import { i as oe, p as ue, ar as ie, l as re, a6 as se, u as ce, n as de, o as G, a8 as fe, a9 as ve, aa as xe, a3 as me, ab as ge, t as he, ao as we, as as Ve, ac as ye } from "./main-V1ksYwjH.js";
const Fe = ue({
  autoGrow: Boolean,
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  noResize: Boolean,
  rows: {
    type: [Number, String],
    default: 5,
    validator: (e) => !isNaN(parseFloat(e))
  },
  maxRows: {
    type: [Number, String],
    validator: (e) => !isNaN(parseFloat(e))
  },
  suffix: String,
  modelModifiers: Object,
  ...he(),
  ...ge()
}, "VTextarea"), ke = oe()({
  name: "VTextarea",
  directives: {
    Intersect: ie
  },
  inheritAttrs: !1,
  props: Fe(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, D) {
    let {
      attrs: F,
      emit: M,
      slots: i
    } = D;
    const o = re(e, "modelValue"), {
      isFocused: f,
      focus: E,
      blur: U
    } = se(e), O = y(() => typeof e.counterValue == "function" ? e.counterValue(o.value) : (o.value || "").toString().length), $ = y(() => {
      if (F.maxlength) return F.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    });
    function j(t, n) {
      var a, u;
      !e.autofocus || !t || (u = (a = n[0].target) == null ? void 0 : a.focus) == null || u.call(a);
    }
    const B = v(), m = v(), H = p(""), g = v(), q = y(() => e.persistentPlaceholder || f.value || e.active);
    function C() {
      var t;
      g.value !== document.activeElement && ((t = g.value) == null || t.focus()), f.value || E();
    }
    function J(t) {
      C(), M("click:control", t);
    }
    function K(t) {
      M("mousedown:control", t);
    }
    function L(t) {
      t.stopPropagation(), C(), S(() => {
        o.value = "", ye(e["onClick:clear"], t);
      });
    }
    function Q(t) {
      var a;
      const n = t.target;
      if (o.value = n.value, (a = e.modelModifiers) != null && a.trim) {
        const u = [n.selectionStart, n.selectionEnd];
        S(() => {
          n.selectionStart = u[0], n.selectionEnd = u[1];
        });
      }
    }
    const c = v(), h = v(+e.rows), P = y(() => ["plain", "underlined"].includes(e.variant));
    ee(() => {
      e.autoGrow || (h.value = +e.rows);
    });
    function d() {
      e.autoGrow && S(() => {
        if (!c.value || !m.value) return;
        const t = getComputedStyle(c.value), n = getComputedStyle(m.value.$el), a = parseFloat(t.getPropertyValue("--v-field-padding-top")) + parseFloat(t.getPropertyValue("--v-input-padding-top")) + parseFloat(t.getPropertyValue("--v-field-padding-bottom")), u = c.value.scrollHeight, w = parseFloat(t.lineHeight), k = Math.max(parseFloat(e.rows) * w + a, parseFloat(n.getPropertyValue("--v-input-control-height"))), I = parseFloat(e.maxRows) * w + a || 1 / 0, s = Ve(u ?? 0, k, I);
        h.value = Math.floor((s - a) / w), H.value = we(s);
      });
    }
    te(d), x(o, d), x(() => e.rows, d), x(() => e.maxRows, d), x(() => e.density, d);
    let r;
    return x(c, (t) => {
      t ? (r = new ResizeObserver(d), r.observe(c.value)) : r == null || r.disconnect();
    }), ae(() => {
      r == null || r.disconnect();
    }), ce(() => {
      const t = !!(i.counter || e.counter || e.counterValue), n = !!(t || i.details), [a, u] = de(F), {
        modelValue: w,
        ...k
      } = G.filterProps(e), I = fe(e);
      return l(G, R({
        ref: B,
        modelValue: o.value,
        "onUpdate:modelValue": (s) => o.value = s,
        class: ["v-textarea v-text-field", {
          "v-textarea--prefixed": e.prefix,
          "v-textarea--suffixed": e.suffix,
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-textarea--auto-grow": e.autoGrow,
          "v-textarea--no-resize": e.noResize || e.autoGrow,
          "v-input--plain-underlined": P.value
        }, e.class],
        style: e.style
      }, a, k, {
        centerAffix: h.value === 1 && !P.value,
        focused: f.value
      }), {
        ...i,
        default: (s) => {
          let {
            id: V,
            isDisabled: N,
            isDirty: z,
            isReadonly: W,
            isValid: X
          } = s;
          return l(xe, R({
            ref: m,
            style: {
              "--v-textarea-control-height": H.value
            },
            onClick: J,
            onMousedown: K,
            "onClick:clear": L,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"]
          }, I, {
            id: V.value,
            active: q.value || z.value,
            centerAffix: h.value === 1 && !P.value,
            dirty: z.value || e.dirty,
            disabled: N.value,
            focused: f.value,
            error: X.value === !1
          }), {
            ...i,
            default: (Y) => {
              let {
                props: {
                  class: A,
                  ...T
                }
              } = Y;
              return l(b, null, [e.prefix && l("span", {
                class: "v-text-field__prefix"
              }, [e.prefix]), _(l("textarea", R({
                ref: g,
                class: A,
                value: o.value,
                onInput: Q,
                autofocus: e.autofocus,
                readonly: W.value,
                disabled: N.value,
                placeholder: e.placeholder,
                rows: e.rows,
                name: e.name,
                onFocus: C,
                onBlur: U
              }, T, u), null), [[ne("intersect"), {
                handler: j
              }, null, {
                once: !0
              }]]), e.autoGrow && _(l("textarea", {
                class: [A, "v-textarea__sizer"],
                id: `${T.id}-sizer`,
                "onUpdate:modelValue": (Z) => o.value = Z,
                ref: c,
                readonly: !0,
                "aria-hidden": "true"
              }, null), [[le, o.value]]), e.suffix && l("span", {
                class: "v-text-field__suffix"
              }, [e.suffix])]);
            }
          });
        },
        details: n ? (s) => {
          var V;
          return l(b, null, [(V = i.details) == null ? void 0 : V.call(i, s), t && l(b, null, [l("span", null, null), l(ve, {
            active: e.persistentCounter || f.value,
            value: O.value,
            max: $.value,
            disabled: e.disabled
          }, i.counter)])]);
        } : void 0
      });
    }), me({}, B, m, g);
  }
});
export {
  ke as V
};
