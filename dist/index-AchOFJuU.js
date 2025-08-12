import { computed as E, ref as A, watch as Ie, createVNode as t, mergeProps as M, Fragment as W, nextTick as Pe, inject as ze, toRef as j, reactive as Ae, onMounted as Ne, resolveComponent as D, createElementBlock as le, openBlock as d, withCtx as l, createElementVNode as o, createTextVNode as y, renderList as oe, createBlock as f, createCommentVNode as b, unref as g, normalizeClass as Be, toDisplayString as Re } from "vue";
import { _ as $e } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { V as G, a as K, d as Fe, e as Ee, c as Me } from "./VCard-BbSjOW7e.js";
import { V as fe, a as p } from "./VRow-DeLLEu_l.js";
import { i as Q, p as Z, H as Ue, l as de, a5 as Ve, a6 as Ge, a7 as pe, u as ee, n as Le, o as ge, a8 as De, a9 as We, aa as je, d as Oe, a3 as Se, ab as Ye, t as He, ac as qe, G as Xe, b as k, s as Ce, ad as Je, ae as Ke, af as Qe, ag as ue, ah as Ze, ai as O, aj as et, A as tt, ak as at, al as lt, am as nt, an as be, ao as st, O as ot, U as it, ap as ut, aq as dt, h as rt, V as ct, e as h } from "./main-V1ksYwjH.js";
import { V as ie } from "./VAutocomplete-Bjt6c7VC.js";
import { V as ye } from "./VSwitch-CwhgJImZ.js";
import { V as mt } from "./VDataTable-CiZmSBL8.js";
import { V as vt } from "./VDialog-Cf8Ibzul.js";
import { V as _t } from "./VTextarea-BHgSALa4.js";
const ft = Z({
  chips: Boolean,
  counter: Boolean,
  counterSizeString: {
    type: String,
    default: "$vuetify.fileInput.counterSize"
  },
  counterString: {
    type: String,
    default: "$vuetify.fileInput.counter"
  },
  hideInput: Boolean,
  multiple: Boolean,
  showSize: {
    type: [Boolean, Number, String],
    default: !1,
    validator: (a) => typeof a == "boolean" || [1e3, 1024].includes(Number(a))
  },
  ...He({
    prependIcon: "$file"
  }),
  modelValue: {
    type: [Array, Object],
    default: (a) => a.multiple ? [] : null,
    validator: (a) => Ve(a).every((_) => _ != null && typeof _ == "object")
  },
  ...Ye({
    clearable: !0
  })
}, "VFileInput"), pt = Q()({
  name: "VFileInput",
  inheritAttrs: !1,
  props: ft(),
  emits: {
    "click:control": (a) => !0,
    "mousedown:control": (a) => !0,
    "update:focused": (a) => !0,
    "update:modelValue": (a) => !0
  },
  setup(a, _) {
    let {
      attrs: C,
      emit: n,
      slots: m
    } = _;
    const {
      t: N
    } = Ue(), u = de(a, "modelValue", a.modelValue, (i) => Ve(i), (i) => a.multiple || Array.isArray(a.modelValue) ? i : i[0] ?? null), {
      isFocused: w,
      focus: x,
      blur: I
    } = Ge(a), R = E(() => typeof a.showSize != "boolean" ? a.showSize : void 0), P = E(() => (u.value ?? []).reduce((i, s) => {
      let {
        size: S = 0
      } = s;
      return i + S;
    }, 0)), v = E(() => pe(P.value, R.value)), r = E(() => (u.value ?? []).map((i) => {
      const {
        name: s = "",
        size: S = 0
      } = i;
      return a.showSize ? `${s} (${pe(S, R.value)})` : s;
    })), B = E(() => {
      var s;
      const i = ((s = u.value) == null ? void 0 : s.length) ?? 0;
      return a.showSize ? N(a.counterSizeString, i, v.value) : N(a.counterString, i);
    }), V = A(), c = A(), e = A(), T = E(() => w.value || a.active), $ = E(() => ["plain", "underlined"].includes(a.variant));
    function F() {
      var i;
      e.value !== document.activeElement && ((i = e.value) == null || i.focus()), w.value || x();
    }
    function U(i) {
      var s;
      (s = e.value) == null || s.click();
    }
    function Y(i) {
      n("mousedown:control", i);
    }
    function z(i) {
      var s;
      (s = e.value) == null || s.click(), n("click:control", i);
    }
    function H(i) {
      i.stopPropagation(), F(), Pe(() => {
        u.value = [], qe(a["onClick:clear"], i);
      });
    }
    return Ie(u, (i) => {
      (!Array.isArray(i) || !i.length) && e.value && (e.value.value = "");
    }), ee(() => {
      const i = !!(m.counter || a.counter), s = !!(i || m.details), [S, ne] = Le(C), {
        modelValue: ce,
        ...se
      } = ge.filterProps(a), te = De(a);
      return t(ge, M({
        ref: V,
        modelValue: u.value,
        "onUpdate:modelValue": (X) => u.value = X,
        class: ["v-file-input", {
          "v-file-input--chips": !!a.chips,
          "v-file-input--hide": a.hideInput,
          "v-input--plain-underlined": $.value
        }, a.class],
        style: a.style,
        "onClick:prepend": U
      }, S, se, {
        centerAffix: !$.value,
        focused: w.value
      }), {
        ...m,
        default: (X) => {
          let {
            id: ae,
            isDisabled: J,
            isDirty: me,
            isReadonly: ve,
            isValid: we
          } = X;
          return t(je, M({
            ref: c,
            "prepend-icon": a.prependIcon,
            onMousedown: Y,
            onClick: z,
            "onClick:clear": H,
            "onClick:prependInner": a["onClick:prependInner"],
            "onClick:appendInner": a["onClick:appendInner"]
          }, te, {
            id: ae.value,
            active: T.value || me.value,
            dirty: me.value || a.dirty,
            disabled: J.value,
            focused: w.value,
            error: we.value === !1
          }), {
            ...m,
            default: (Te) => {
              var _e;
              let {
                props: {
                  class: ke,
                  ...he
                }
              } = Te;
              return t(W, null, [t("input", M({
                ref: e,
                type: "file",
                readonly: ve.value,
                disabled: J.value,
                multiple: a.multiple,
                name: a.name,
                onClick: (L) => {
                  L.stopPropagation(), ve.value && L.preventDefault(), F();
                },
                onChange: (L) => {
                  if (!L.target) return;
                  const xe = L.target;
                  u.value = [...xe.files ?? []];
                },
                onFocus: F,
                onBlur: I
              }, he, ne), null), t("div", {
                class: ke
              }, [!!((_e = u.value) != null && _e.length) && !a.hideInput && (m.selection ? m.selection({
                fileNames: r.value,
                totalBytes: P.value,
                totalBytesReadable: v.value
              }) : a.chips ? r.value.map((L) => t(Oe, {
                key: L,
                size: "small",
                text: L
              }, null)) : r.value.join(", "))])]);
            }
          });
        },
        details: s ? (X) => {
          var ae, J;
          return t(W, null, [(ae = m.details) == null ? void 0 : ae.call(m, X), i && t(W, null, [t("span", null, null), t(We, {
            active: !!((J = u.value) != null && J.length),
            value: B.value,
            disabled: a.disabled
          }, m.counter)])]);
        } : void 0
      });
    }), Se({}, V, c, e);
  }
}), re = Symbol.for("vuetify:v-tabs"), gt = Z({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  ...Ce(Je({
    selectedClass: "v-tab--selected",
    variant: "text"
  }), ["active", "block", "flat", "location", "position", "symbol"])
}, "VTab"), q = Q()({
  name: "VTab",
  props: gt(),
  setup(a, _) {
    let {
      slots: C,
      attrs: n
    } = _;
    const {
      textColorClasses: m,
      textColorStyles: N
    } = Xe(a, "sliderColor"), u = A(), w = A(), x = E(() => a.direction === "horizontal"), I = E(() => {
      var P, v;
      return ((v = (P = u.value) == null ? void 0 : P.group) == null ? void 0 : v.isSelected.value) ?? !1;
    });
    function R(P) {
      var r, B;
      let {
        value: v
      } = P;
      if (v) {
        const V = (B = (r = u.value) == null ? void 0 : r.$el.parentElement) == null ? void 0 : B.querySelector(".v-tab--selected .v-tab__slider"), c = w.value;
        if (!V || !c) return;
        const e = getComputedStyle(V).color, T = V.getBoundingClientRect(), $ = c.getBoundingClientRect(), F = x.value ? "x" : "y", U = x.value ? "X" : "Y", Y = x.value ? "right" : "bottom", z = x.value ? "width" : "height", H = T[F], i = $[F], s = H > i ? T[Y] - $[Y] : T[F] - $[F], S = Math.sign(s) > 0 ? x.value ? "right" : "bottom" : Math.sign(s) < 0 ? x.value ? "left" : "top" : "center", ce = (Math.abs(s) + (Math.sign(s) < 0 ? T[z] : $[z])) / Math.max(T[z], $[z]) || 0, se = T[z] / $[z] || 0, te = 1.5;
        Ke(c, {
          backgroundColor: [e, "currentcolor"],
          transform: [`translate${U}(${s}px) scale${U}(${se})`, `translate${U}(${s / te}px) scale${U}(${(ce - 1) / te + 1})`, "none"],
          transformOrigin: Array(3).fill(S)
        }, {
          duration: 225,
          easing: Qe
        });
      }
    }
    return ee(() => {
      const P = k.filterProps(a);
      return t(k, M({
        symbol: re,
        ref: u,
        class: ["v-tab", a.class],
        style: a.style,
        tabindex: I.value ? 0 : -1,
        role: "tab",
        "aria-selected": String(I.value),
        active: !1
      }, P, n, {
        block: a.fixed,
        maxWidth: a.fixed ? 300 : void 0,
        "onGroup:selected": R
      }), {
        ...C,
        default: () => {
          var v;
          return t(W, null, [((v = C.default) == null ? void 0 : v.call(C)) ?? a.text, !a.hideSlider && t("div", {
            ref: w,
            class: ["v-tab__slider", m.value],
            style: N.value
          }, null)]);
        }
      });
    }), Se({}, u);
  }
}), bt = Z({
  ...Ce(Ze(), ["continuous", "nextIcon", "prevIcon", "showArrows", "touch", "mandatory"])
}, "VTabsWindow"), yt = Q()({
  name: "VTabsWindow",
  props: bt(),
  emits: {
    "update:modelValue": (a) => !0
  },
  setup(a, _) {
    let {
      slots: C
    } = _;
    const n = ze(re, null), m = de(a, "modelValue"), N = E({
      get() {
        var u;
        return m.value != null || !n ? m.value : (u = n.items.value.find((w) => n.selected.value.includes(w.id))) == null ? void 0 : u.value;
      },
      set(u) {
        m.value = u;
      }
    });
    return ee(() => {
      const u = ue.filterProps(a);
      return t(ue, M({
        _as: "VTabsWindow"
      }, u, {
        modelValue: N.value,
        "onUpdate:modelValue": (w) => N.value = w,
        class: ["v-tabs-window", a.class],
        style: a.style,
        mandatory: !1,
        touch: !1
      }), C);
    }), {};
  }
}), Vt = Z({
  ...et()
}, "VTabsWindowItem"), St = Q()({
  name: "VTabsWindowItem",
  props: Vt(),
  setup(a, _) {
    let {
      slots: C
    } = _;
    return ee(() => {
      const n = O.filterProps(a);
      return t(O, M({
        _as: "VTabsWindowItem"
      }, n, {
        class: ["v-tabs-window-item", a.class],
        style: a.style
      }), C);
    }), {};
  }
});
function Ct(a) {
  return a ? a.map((_) => dt(_) ? _ : {
    text: _,
    value: _
  }) : [];
}
const wt = Z({
  alignTabs: {
    type: String,
    default: "start"
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: void 0
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...ut({
    mandatory: "force",
    selectedClass: "v-tab-item--selected"
  }),
  ...it(),
  ...ot()
}, "VTabs"), Tt = Q()({
  name: "VTabs",
  props: wt(),
  emits: {
    "update:modelValue": (a) => !0
  },
  setup(a, _) {
    let {
      attrs: C,
      slots: n
    } = _;
    const m = de(a, "modelValue"), N = E(() => Ct(a.items)), {
      densityClasses: u
    } = tt(a), {
      backgroundColorClasses: w,
      backgroundColorStyles: x
    } = at(j(a, "bgColor")), {
      scopeId: I
    } = lt();
    return nt({
      VTab: {
        color: j(a, "color"),
        direction: j(a, "direction"),
        stacked: j(a, "stacked"),
        fixed: j(a, "fixedTabs"),
        sliderColor: j(a, "sliderColor"),
        hideSlider: j(a, "hideSlider")
      }
    }), ee(() => {
      const R = be.filterProps(a), P = !!(n.window || a.items.length > 0);
      return t(W, null, [t(be, M(R, {
        modelValue: m.value,
        "onUpdate:modelValue": (v) => m.value = v,
        class: ["v-tabs", `v-tabs--${a.direction}`, `v-tabs--align-tabs-${a.alignTabs}`, {
          "v-tabs--fixed-tabs": a.fixedTabs,
          "v-tabs--grow": a.grow,
          "v-tabs--stacked": a.stacked
        }, u.value, w.value, a.class],
        style: [{
          "--v-tabs-height": st(a.height)
        }, x.value, a.style],
        role: "tablist",
        symbol: re
      }, I, C), {
        default: () => {
          var v;
          return [((v = n.default) == null ? void 0 : v.call(n)) ?? N.value.map((r) => {
            var B;
            return ((B = n.tab) == null ? void 0 : B.call(n, {
              item: r
            })) ?? t(q, M(r, {
              key: r.text,
              value: r.value
            }), {
              default: n[`tab.${r.value}`] ? () => {
                var V;
                return (V = n[`tab.${r.value}`]) == null ? void 0 : V.call(n, {
                  item: r
                });
              } : void 0
            });
          })];
        }
      }), P && t(yt, M({
        modelValue: m.value,
        "onUpdate:modelValue": (v) => m.value = v,
        key: "tabs-window"
      }, I), {
        default: () => {
          var v;
          return [N.value.map((r) => {
            var B;
            return ((B = n.item) == null ? void 0 : B.call(n, {
              item: r
            })) ?? t(St, {
              value: r.value
            }, {
              default: () => {
                var V;
                return (V = n[`item.${r.value}`]) == null ? void 0 : V.call(n, {
                  item: r
                });
              }
            });
          }), (v = n.window) == null ? void 0 : v.call(n)];
        }
      })]);
    }), {};
  }
}), kt = { class: "account_ui_vcard" }, ht = { class: "d-flex align-center justify-space-between" }, xt = { class: "account_vcard_menu_items py-1" }, It = ["onClick"], Pt = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, zt = { class: "mt-8" }, At = { class: "mt-8" }, Nt = { class: "pa-4 d-flex align-center justify-end" }, Bt = { class: "d-flex align-center justify-space-between" }, Rt = { class: "px-3" }, $t = { class: "account_vcard_border" }, Ft = { class: "mt-3" }, Et = { class: "d-flex align-center gap-2" }, Mt = { class: "pa-4 d-flex align-center justify-end" }, Ut = { class: "mt-8" }, Gt = { class: "pa-4 d-flex align-center justify-end" }, Lt = "net30", Dt = {
  __name: "index",
  setup(a) {
    const _ = A(""), C = A([]), n = Ae({
      gstin: !0,
      legalName: !0,
      tradingName: !0,
      businessType: !0,
      state: !0,
      address1: !0,
      address2: !0,
      city: !0,
      pincode: !0,
      contactEmail: !0,
      phone: !0,
      website: !0,
      pan: !0,
      fyStart: !0,
      fyEnd: !0,
      baseCurrency: !0,
      decimalPlaces: !0,
      thousandSeparator: !0,
      companyLogo: !0
    }), m = {
      gstin: "GSTIN",
      legalName: "Legal Name",
      tradingName: "Trading Name",
      businessType: "Business Type",
      state: "State",
      address1: "Address Line 1",
      address2: "Address Line 2",
      city: "City",
      pincode: "Pincode",
      contactEmail: "Contact Email",
      phone: "Phone Number",
      website: "Website",
      pan: "PAN",
      fyStart: "Financial Year Start",
      fyEnd: "Financial Year End",
      baseCurrency: "Base Currency",
      decimalPlaces: "Decimal Places",
      thousandSeparator: "Thousand Separator",
      companyLogo: "Company Logo"
    }, N = (c) => {
      n[c] = !n[c];
    };
    Ne(async () => {
      try {
        const e = await (await fetch("https://countriesnow.space/api/v0.1/countries/states", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ country: "India" })
        })).json();
        console.log("the data is :", e), C.value = e.data.states.map((T) => T.name);
      } catch (c) {
        console.error("Failed to fetch states:", c);
      }
    });
    const u = A([
      { title: "Travel Module", value: "travel_module", description: "Enable features for managing hotels, cabs, and trips.", active: !0 },
      { title: "Advanced Accounting View", value: "advanced_accounting_view", description: "Show detailed accounting views and reports.", active: !0 },
      { title: "Integrate Inventory with Accounts", value: "integrate_inventory_with_accounts", description: "Automatically create accounting entries for inventory transactions.", active: !0 }
    ]), w = A([
      { title: "Rate (%)", value: "rate", visible: !0 },
      { title: "CGST (%)", value: "cgst", visible: !0 },
      { title: "SGST (%)", value: "sgst", visible: !0 },
      { title: "IGST (%)", value: "igst", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]), x = A([
      { rate: 18, cgst: 9, sgst: 9, igst: 18 },
      { rate: 12, cgst: 6, sgst: 6, igst: 12 },
      { rate: 5, cgst: 2.5, sgst: 2.5, igst: 5 },
      { rate: 28, cgst: 14, sgst: 14, igst: 28 },
      { rate: 0, cgst: 0, sgst: 0, igst: 0 },
      { rate: 3, cgst: 1.5, sgst: 1.5, igst: 3 }
    ]), I = A(!1), R = A(null), P = () => {
      const c = parseFloat(R.value);
      if (!isNaN(c)) {
        const e = {
          rate: c,
          cgst: c / 2,
          sgst: c / 2,
          igst: c
        };
        x.value.push(e), R.value = null, I.value = !1;
      }
    }, v = {
      net30: `Payment is due within 30 days.
Please include the invoice number on your payment.`,
      dueOnReceipt: "Payment is due immediately upon receipt of this invoice.",
      upfront50: "50% of the total amount is due upon signing the contract. The remaining 50% is due upon project completion."
    }, r = A(v[Lt]), B = (c) => v[c] || "", V = (c) => {
      const e = B(c), T = r.value.trim();
      r.value = T ? `${T}

${e}` : e;
    };
    return (c, e) => {
      const T = D("IconSettings"), $ = D("IconCheck"), F = D("IconCalendar"), U = D("v-date-input"), Y = D("IconUpload"), z = D("IconDeviceFloppy"), H = D("IconCirclePlus"), i = D("IconTrash");
      return d(), le("div", kt, [
        t(G, {
          title: "Settings",
          subtitle: "Manage your company settings and preferences.",
          class: "account_vcard_border"
        }, {
          default: l(() => [
            t(K, { class: "pa-6" }, {
              default: l(() => [
                t(fe, null, {
                  default: l(() => [
                    t(p, {
                      cols: "12",
                      lg: "2",
                      md: "2",
                      sm: "12"
                    }, {
                      default: l(() => [
                        o("div", null, [
                          t(Tt, {
                            modelValue: _.value,
                            "onUpdate:modelValue": e[0] || (e[0] = (s) => _.value = s),
                            direction: "vertical",
                            class: "company_setting_tabs tabs_pill"
                          }, {
                            default: l(() => [
                              t(q, { value: 0 }, {
                                default: l(() => e[10] || (e[10] = [
                                  y("Company", -1)
                                ])),
                                _: 1,
                                __: [10]
                              }),
                              t(q, { value: 1 }, {
                                default: l(() => e[11] || (e[11] = [
                                  y("Software", -1)
                                ])),
                                _: 1,
                                __: [11]
                              }),
                              t(q, { value: 2 }, {
                                default: l(() => e[12] || (e[12] = [
                                  y("GST Type", -1)
                                ])),
                                _: 1,
                                __: [12]
                              }),
                              t(q, { value: 3 }, {
                                default: l(() => e[13] || (e[13] = [
                                  y("Payment Terms", -1)
                                ])),
                                _: 1,
                                __: [13]
                              }),
                              t(q, { value: 4 }, {
                                default: l(() => e[14] || (e[14] = [
                                  y("Integration", -1)
                                ])),
                                _: 1,
                                __: [14]
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    t(p, {
                      cols: "12",
                      lg: "10",
                      md: "10",
                      sm: "12"
                    }, {
                      default: l(() => [
                        t(ue, {
                          modelValue: _.value,
                          "onUpdate:modelValue": e[9] || (e[9] = (s) => _.value = s)
                        }, {
                          default: l(() => [
                            t(O, { value: 0 }, {
                              default: l(() => [
                                o("div", ht, [
                                  e[16] || (e[16] = o("div", null, [
                                    o("h3", { class: "company-setting-heading m-0" }, "Company Settings")
                                  ], -1)),
                                  o("div", null, [
                                    t(rt, {
                                      location: "start",
                                      transition: "slide-y-transition",
                                      "offset-y": "",
                                      "close-on-content-click": !1
                                    }, {
                                      activator: l(({ props: s }) => [
                                        t(k, M(s, {
                                          variant: "text",
                                          size: "x-small",
                                          rounded: ""
                                        }), {
                                          default: l(() => [
                                            t(T, { size: "20" })
                                          ]),
                                          _: 2
                                        }, 1040)
                                      ]),
                                      default: l(() => [
                                        t(G, { class: "account_vcard_menu account_vcard_border" }, {
                                          default: l(() => [
                                            e[15] || (e[15] = o("div", { class: "account_vcard_menu_hdng" }, "Show/Hide Optional Fields", -1)),
                                            t(ct, { class: "my-1 mt-0" }),
                                            o("div", xt, [
                                              (d(), le(W, null, oe(m, (s, S) => o("div", {
                                                key: S,
                                                onClick: (ne) => N(S)
                                              }, [
                                                o("div", Pt, [
                                                  g(n)[S] ? (d(), f($, {
                                                    key: 0,
                                                    size: "16"
                                                  })) : b("", !0),
                                                  o("span", {
                                                    class: Be(g(n)[S] ? "" : "field_list_dynamic_ml")
                                                  }, Re(s), 3)
                                                ])
                                              ], 8, It)), 64))
                                            ])
                                          ]),
                                          _: 1,
                                          __: [15]
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                o("div", zt, [
                                  t(fe, null, {
                                    default: l(() => [
                                      g(n).gstin ? (d(), f(p, {
                                        key: 0,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[17] || (e[17] = o("label", { class: "account_label mb-1" }, "GSTIN", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "15-digit GSTIN"
                                          })
                                        ]),
                                        _: 1,
                                        __: [17]
                                      })) : b("", !0),
                                      g(n).legalName ? (d(), f(p, {
                                        key: 1,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[18] || (e[18] = o("label", { class: "account_label mb-1" }, "Legal Name", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "Your Company Inc."
                                          })
                                        ]),
                                        _: 1,
                                        __: [18]
                                      })) : b("", !0),
                                      g(n).tradingName ? (d(), f(p, {
                                        key: 2,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[19] || (e[19] = o("label", { class: "account_label mb-1" }, "Trading Name", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "Brand Name"
                                          })
                                        ]),
                                        _: 1,
                                        __: [19]
                                      })) : b("", !0),
                                      g(n).businessType ? (d(), f(p, {
                                        key: 3,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[20] || (e[20] = o("label", { class: "account_label mb-1" }, "Business Type", -1)),
                                          t(ie, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            placeholder: "Select Business Type",
                                            items: [
                                              "Proprietorship",
                                              "Partnership",
                                              "Private Limited Company",
                                              "Public Limited Company",
                                              "Limited Liability Partnership (LLP)",
                                              "Other"
                                            ]
                                          })
                                        ]),
                                        _: 1,
                                        __: [20]
                                      })) : b("", !0),
                                      g(n).state ? (d(), f(p, {
                                        key: 4,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[21] || (e[21] = o("label", { class: "account_label mb-1" }, "State", -1)),
                                          t(ie, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            placeholder: "Select State",
                                            items: C.value
                                          }, null, 8, ["items"])
                                        ]),
                                        _: 1,
                                        __: [21]
                                      })) : b("", !0),
                                      g(n).address1 ? (d(), f(p, {
                                        key: 5,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[22] || (e[22] = o("label", { class: "account_label mb-1" }, "Address Line 1", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "123 Main St"
                                          })
                                        ]),
                                        _: 1,
                                        __: [22]
                                      })) : b("", !0),
                                      g(n).address2 ? (d(), f(p, {
                                        key: 6,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[23] || (e[23] = o("label", { class: "account_label mb-1" }, "Address Line 2", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "Suite 4B"
                                          })
                                        ]),
                                        _: 1,
                                        __: [23]
                                      })) : b("", !0),
                                      g(n).city ? (d(), f(p, {
                                        key: 7,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[24] || (e[24] = o("label", { class: "account_label mb-1" }, "City", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "Mumbai"
                                          })
                                        ]),
                                        _: 1,
                                        __: [24]
                                      })) : b("", !0),
                                      g(n).pincode ? (d(), f(p, {
                                        key: 8,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[25] || (e[25] = o("label", { class: "account_label mb-1" }, "Pincode", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "400001"
                                          })
                                        ]),
                                        _: 1,
                                        __: [25]
                                      })) : b("", !0),
                                      g(n).contactEmail ? (d(), f(p, {
                                        key: 9,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[26] || (e[26] = o("label", { class: "account_label mb-1" }, "Contact Email", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "contact@company.com"
                                          })
                                        ]),
                                        _: 1,
                                        __: [26]
                                      })) : b("", !0),
                                      g(n).phone ? (d(), f(p, {
                                        key: 10,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[27] || (e[27] = o("label", { class: "account_label mb-1" }, "Phone Number", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "+91 12345 67890"
                                          })
                                        ]),
                                        _: 1,
                                        __: [27]
                                      })) : b("", !0),
                                      g(n).website ? (d(), f(p, {
                                        key: 11,
                                        cols: "12",
                                        lg: "12",
                                        md: "12"
                                      }, {
                                        default: l(() => [
                                          e[28] || (e[28] = o("label", { class: "account_label mb-1" }, "Website", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "https://company.com"
                                          })
                                        ]),
                                        _: 1,
                                        __: [28]
                                      })) : b("", !0),
                                      g(n).pan ? (d(), f(p, {
                                        key: 12,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[29] || (e[29] = o("label", { class: "account_label mb-1" }, "PAN", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "10-digit PAN"
                                          })
                                        ]),
                                        _: 1,
                                        __: [29]
                                      })) : b("", !0),
                                      g(n).fyStart ? (d(), f(p, {
                                        key: 13,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[30] || (e[30] = o("label", { class: "account_label mb-1" }, "Financial Year Start", -1)),
                                          t(U, {
                                            class: "accounting_date_input",
                                            "cancel-text": "Close",
                                            "ok-text": "Apply"
                                          }, {
                                            "prepend-inner": l(() => [
                                              t(F, { size: "20" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1,
                                        __: [30]
                                      })) : b("", !0),
                                      g(n).fyEnd ? (d(), f(p, {
                                        key: 14,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[31] || (e[31] = o("label", { class: "account_label mb-1" }, "Financial Year End", -1)),
                                          t(U, {
                                            class: "accounting_date_input",
                                            "cancel-text": "Close",
                                            "ok-text": "Apply"
                                          }, {
                                            "prepend-inner": l(() => [
                                              t(F, { size: "20" })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1,
                                        __: [31]
                                      })) : b("", !0),
                                      g(n).baseCurrency ? (d(), f(p, {
                                        key: 15,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[32] || (e[32] = o("label", { class: "account_label mb-1" }, "Base Currency", -1)),
                                          t(ie, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            placeholder: "Select Currency",
                                            items: [
                                              "INR",
                                              "USD",
                                              "EUR",
                                              "GBP"
                                            ]
                                          })
                                        ]),
                                        _: 1,
                                        __: [32]
                                      })) : b("", !0),
                                      g(n).decimalPlaces ? (d(), f(p, {
                                        key: 16,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[33] || (e[33] = o("label", { class: "account_label mb-1" }, "Decimal Places", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "Number",
                                            type: "number"
                                          })
                                        ]),
                                        _: 1,
                                        __: [33]
                                      })) : b("", !0),
                                      g(n).thousandSeparator ? (d(), f(p, {
                                        key: 17,
                                        cols: "12",
                                        lg: "6",
                                        md: "6"
                                      }, {
                                        default: l(() => [
                                          e[34] || (e[34] = o("label", { class: "account_label mb-1" }, "Thousand Separator", -1)),
                                          t(h, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: ","
                                          })
                                        ]),
                                        _: 1,
                                        __: [34]
                                      })) : b("", !0),
                                      g(n).companyLogo ? (d(), f(p, {
                                        key: 18,
                                        cols: "12",
                                        lg: "12",
                                        md: "12"
                                      }, {
                                        default: l(() => [
                                          e[35] || (e[35] = o("label", { class: "account_label mb-1" }, "Company Logo", -1)),
                                          t(pt, {
                                            class: "accouting_field align-center accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            "prepend-icon": "",
                                            placeholder: "Upload company logo"
                                          }, {
                                            prepend: l(() => [
                                              t(k, {
                                                class: "account_v_btn_outlined",
                                                variant: "outlined",
                                                size: "64",
                                                rounded: ""
                                              }, {
                                                default: l(() => [
                                                  t(Y, { size: "32" })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1,
                                        __: [35]
                                      })) : b("", !0),
                                      t(p, {
                                        cols: "12",
                                        class: "d-flex justify-end"
                                      }, {
                                        default: l(() => [
                                          t(k, {
                                            class: "account_v_btn_primary save_btn_height",
                                            variant: "outlined",
                                            size: "large",
                                            rounded: "3",
                                            color: "primary"
                                          }, {
                                            prepend: l(() => [
                                              t(z, {
                                                size: "22",
                                                style: { "margin-right": "6px" }
                                              })
                                            ]),
                                            default: l(() => [
                                              e[36] || (e[36] = y(" Save Changes ", -1))
                                            ]),
                                            _: 1,
                                            __: [36]
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }),
                            t(O, { value: 1 }, {
                              default: l(() => [
                                e[38] || (e[38] = o("div", null, [
                                  o("h3", { class: "company-setting-heading m-0" }, "Software Settings")
                                ], -1)),
                                o("div", At, [
                                  t(G, {
                                    class: "account_vcard_border shadow-none pa-2",
                                    variant: "text",
                                    title: "Module Management",
                                    subtitle: "Enable or disable major features of the application."
                                  }, {
                                    default: l(() => [
                                      t(K, null, {
                                        default: l(() => [
                                          (d(!0), le(W, null, oe(u.value, (s) => (d(), f(G, {
                                            key: s.title,
                                            class: "account_vcard_border account_module_card mt-4 shadow-none",
                                            title: s.title,
                                            subtitle: s.description
                                          }, {
                                            append: l(() => [
                                              t(ye, {
                                                density: "compact",
                                                modelValue: s.active,
                                                "onUpdate:modelValue": (S) => s.active = S,
                                                inset: "",
                                                class: "account_swtich_btn",
                                                color: "primary",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1032, ["title", "subtitle"]))), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  o("div", Nt, [
                                    t(k, {
                                      class: "account_v_btn_primary save_btn_height",
                                      variant: "outlined",
                                      size: "default",
                                      rounded: "3",
                                      color: "primary"
                                    }, {
                                      prepend: l(() => [
                                        t(z, {
                                          size: "22",
                                          style: { "margin-right": "6px" }
                                        })
                                      ]),
                                      default: l(() => [
                                        e[37] || (e[37] = y(" Save Software Settings ", -1))
                                      ]),
                                      _: 1,
                                      __: [37]
                                    })
                                  ])
                                ])
                              ]),
                              _: 1,
                              __: [38]
                            }),
                            t(O, { value: 2 }, {
                              default: l(() => [
                                o("div", Bt, [
                                  e[40] || (e[40] = o("h3", { class: "company-setting-heading m-0" }, "GST Settings", -1)),
                                  t(k, {
                                    class: "account_v_btn_primary save_btn_height",
                                    variant: "outlined",
                                    color: "primary",
                                    onClick: e[1] || (e[1] = (s) => I.value = !0)
                                  }, {
                                    prepend: l(() => [
                                      t(H, {
                                        size: "22",
                                        style: { "margin-right": "6px" }
                                      })
                                    ]),
                                    default: l(() => [
                                      e[39] || (e[39] = y(" Add New GST Rate ", -1))
                                    ]),
                                    _: 1,
                                    __: [39]
                                  })
                                ]),
                                t(G, {
                                  class: "account_vcard_border shadow-none mt-3 pa-2",
                                  variant: "text",
                                  title: "Available GST Rates",
                                  subtitle: "Manage the GST rates used across your invoices."
                                }, {
                                  default: l(() => [
                                    o("div", Rt, [
                                      o("div", $t, [
                                        t(mt, {
                                          headers: w.value,
                                          items: x.value,
                                          class: "account_dynamic_table shadow-none"
                                        }, {
                                          "item.actions": l(({ item: s }) => [
                                            t(k, {
                                              variant: "text",
                                              size: "x-small",
                                              color: "error",
                                              class: "trash_error_color"
                                            }, {
                                              default: l(() => [
                                                t(i, { size: "16" })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["headers", "items"])
                                      ])
                                    ]),
                                    t(vt, {
                                      class: "account_add_dialog",
                                      modelValue: I.value,
                                      "onUpdate:modelValue": e[4] || (e[4] = (s) => I.value = s),
                                      "max-width": "400"
                                    }, {
                                      default: l(() => [
                                        t(G, { class: "pa-2" }, {
                                          default: l(() => [
                                            t(Fe, null, {
                                              default: l(() => e[41] || (e[41] = [
                                                y("Add New GST Rate", -1)
                                              ])),
                                              _: 1,
                                              __: [41]
                                            }),
                                            t(Ee, { class: "mb-1" }, {
                                              default: l(() => e[42] || (e[42] = [
                                                y("Enter the new GST percentage you want to add.", -1)
                                              ])),
                                              _: 1,
                                              __: [42]
                                            }),
                                            t(K, null, {
                                              default: l(() => [
                                                e[43] || (e[43] = o("label", { class: "account_label mb-1" }, "Rate", -1)),
                                                t(h, {
                                                  modelValue: R.value,
                                                  "onUpdate:modelValue": e[2] || (e[2] = (s) => R.value = s),
                                                  type: "number",
                                                  class: "accouting_field accouting_active_field",
                                                  variant: "outlined",
                                                  density: "compact",
                                                  placeholder: "e.g. 18"
                                                }, null, 8, ["modelValue"])
                                              ]),
                                              _: 1,
                                              __: [43]
                                            }),
                                            t(Me, { class: "justify-end" }, {
                                              default: l(() => [
                                                t(k, {
                                                  class: "account_v_btn_outlined",
                                                  variant: "outlined",
                                                  onClick: e[3] || (e[3] = (s) => I.value = !1)
                                                }, {
                                                  default: l(() => e[44] || (e[44] = [
                                                    y("Cancel", -1)
                                                  ])),
                                                  _: 1,
                                                  __: [44]
                                                }),
                                                t(k, {
                                                  color: "primary",
                                                  variant: "outlined",
                                                  class: "account_v_btn_primary",
                                                  onClick: P
                                                }, {
                                                  prepend: l(() => [
                                                    t(H, {
                                                      size: "20",
                                                      style: { "margin-right": "6px" }
                                                    })
                                                  ]),
                                                  default: l(() => [
                                                    e[45] || (e[45] = y(" Add Rate ", -1))
                                                  ]),
                                                  _: 1,
                                                  __: [45]
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            t(O, { value: 3 }, {
                              default: l(() => [
                                e[52] || (e[52] = o("div", null, [
                                  o("h3", { class: "company-setting-heading m-0" }, "Payment Terms")
                                ], -1)),
                                t(G, {
                                  class: "account_vcard_border shadow-none mt-3 pa-2",
                                  title: "Default Payment Terms",
                                  variant: "text",
                                  subtitle: "Set the default terms and conditions that will appear on your invoices. You can use one of the templates or write your own."
                                }, {
                                  default: l(() => [
                                    t(K, { class: "mt-2" }, {
                                      default: l(() => [
                                        e[50] || (e[50] = o("label", { class: "account_label mb-1" }, "Terms & Conditions", -1)),
                                        t(_t, {
                                          modelValue: r.value,
                                          "onUpdate:modelValue": e[5] || (e[5] = (s) => r.value = s),
                                          class: "accounting_v_textarea",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue"]),
                                        o("div", Ft, [
                                          e[49] || (e[49] = o("label", { class: "account_label mb-1" }, "Insert Template", -1)),
                                          o("div", Et, [
                                            t(k, {
                                              class: "account_v_btn_outlined",
                                              variant: "outlined",
                                              size: "default",
                                              rounded: "2",
                                              onClick: e[6] || (e[6] = (s) => V("net30"))
                                            }, {
                                              default: l(() => e[46] || (e[46] = [
                                                y(" Net 30 ", -1)
                                              ])),
                                              _: 1,
                                              __: [46]
                                            }),
                                            t(k, {
                                              class: "account_v_btn_outlined",
                                              variant: "outlined",
                                              size: "default",
                                              rounded: "2",
                                              onClick: e[7] || (e[7] = (s) => V("dueOnReceipt"))
                                            }, {
                                              default: l(() => e[47] || (e[47] = [
                                                y(" Due on Receipt ", -1)
                                              ])),
                                              _: 1,
                                              __: [47]
                                            }),
                                            t(k, {
                                              class: "account_v_btn_outlined",
                                              variant: "outlined",
                                              size: "default",
                                              rounded: "2",
                                              onClick: e[8] || (e[8] = (s) => V("upfront50"))
                                            }, {
                                              default: l(() => e[48] || (e[48] = [
                                                y(" 50% Upfront ", -1)
                                              ])),
                                              _: 1,
                                              __: [48]
                                            })
                                          ])
                                        ])
                                      ]),
                                      _: 1,
                                      __: [50]
                                    })
                                  ]),
                                  _: 1
                                }),
                                o("div", Mt, [
                                  t(k, {
                                    class: "account_v_btn_primary save_btn_height",
                                    variant: "outlined",
                                    size: "default",
                                    rounded: "3",
                                    color: "primary"
                                  }, {
                                    prepend: l(() => [
                                      t(z, {
                                        size: "22",
                                        style: { "margin-right": "6px" }
                                      })
                                    ]),
                                    default: l(() => [
                                      e[51] || (e[51] = y(" Save Terms ", -1))
                                    ]),
                                    _: 1,
                                    __: [51]
                                  })
                                ])
                              ]),
                              _: 1,
                              __: [52]
                            }),
                            t(O, { value: 4 }, {
                              default: l(() => [
                                e[54] || (e[54] = o("div", null, [
                                  o("h3", { class: "company-setting-heading m-0" }, "Integration Settings")
                                ], -1)),
                                o("div", Ut, [
                                  t(G, {
                                    class: "account_vcard_border shadow-none pa-2",
                                    variant: "text",
                                    title: "Integration Management",
                                    subtitle: "Manage integrations with third-party services."
                                  }, {
                                    default: l(() => [
                                      t(K, null, {
                                        default: l(() => [
                                          (d(!0), le(W, null, oe(c.integrations, (s) => (d(), f(G, {
                                            key: s.title,
                                            class: "account_vcard_border account_module_card mt-4 shadow-none",
                                            title: s.title,
                                            subtitle: s.description
                                          }, {
                                            append: l(() => [
                                              t(ye, {
                                                density: "compact",
                                                modelValue: s.active,
                                                "onUpdate:modelValue": (S) => s.active = S,
                                                inset: "",
                                                class: "account_swtich_btn",
                                                color: "primary",
                                                "hide-details": ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 2
                                          }, 1032, ["title", "subtitle"]))), 128))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  o("div", Gt, [
                                    t(k, {
                                      class: "account_v_btn_primary save_btn_height",
                                      variant: "outlined",
                                      size: "default",
                                      rounded: "3",
                                      color: "primary"
                                    }, {
                                      prepend: l(() => [
                                        t(z, {
                                          size: "22",
                                          style: { "margin-right": "6px" }
                                        })
                                      ]),
                                      default: l(() => [
                                        e[53] || (e[53] = y(" Save Integration Settings ", -1))
                                      ]),
                                      _: 1,
                                      __: [53]
                                    })
                                  ])
                                ])
                              ]),
                              _: 1,
                              __: [54]
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}, Zt = /* @__PURE__ */ $e(Dt, [["__scopeId", "data-v-160c6c3f"]]);
export {
  Zt as default
};
