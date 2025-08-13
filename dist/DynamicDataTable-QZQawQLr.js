import { computed as I, toRef as _e, createVNode as e, mergeProps as N, ref as w, resolveComponent as r, createElementBlock as B, openBlock as u, withCtx as t, createElementVNode as c, toDisplayString as v, Fragment as ee, renderList as te, withModifiers as ae, createTextVNode as Y, createBlock as g, createCommentVNode as V, normalizeClass as ve } from "vue";
import { _ as pe } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { x as fe, i as ye, p as ge, l as be, y as xe, z as Ve, A as he, B as ke, C as Ce, D as we, E as Ie, F as ze, G as Te, H as Pe, J as Se, K as Ae, L as le, b as p, M as De, N as Fe, O as $e, P as Le, Q as Re, R as Be, S as Ue, T as Ee, U as Ne, W as Me, I as Oe, e as qe, X as je, h as J, V as ne, Y as Ge, Z as Ke, _ as Q, w as Xe, d as He } from "./main-DaW4PQ0p.js";
import { V as A, a as d } from "./VRow-CgaVC7ay.js";
import { V as h, a as U, d as Ye, b as Je } from "./VCard-DwrOBi19.js";
import { V as oe } from "./VSwitch-CQtK7rAo.js";
import { V as Qe } from "./VCheckbox-Cg1rOSBP.js";
import { V as E } from "./VAutocomplete-CngmkW_4.js";
import { V as We, a as Ze } from "./VDataTable-j6B5KFVH.js";
const et = fe("v-alert-title"), tt = ["success", "info", "warning", "error"], at = ge({
  border: {
    type: [Boolean, String],
    validator: (l) => typeof l == "boolean" || ["top", "end", "bottom", "start"].includes(l)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: Oe,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (l) => tt.includes(l)
  },
  ...Me(),
  ...Ne(),
  ...Ee(),
  ...Ue(),
  ...Be(),
  ...Re(),
  ...Le(),
  ...$e(),
  ...Fe(),
  ...De({
    variant: "flat"
  })
}, "VAlert"), lt = ye()({
  name: "VAlert",
  props: at(),
  emits: {
    "click:close": (l) => !0,
    "update:modelValue": (l) => !0
  },
  setup(l, M) {
    let {
      emit: i,
      slots: s
    } = M;
    const f = be(l, "modelValue"), z = I(() => {
      if (l.icon !== !1)
        return l.type ? l.icon ?? `$${l.type}` : l.icon;
    }), O = I(() => ({
      color: l.color ?? l.type,
      variant: l.variant
    })), {
      themeClasses: q
    } = xe(l), {
      colorClasses: D,
      colorStyles: _,
      variantClasses: F
    } = Ve(O), {
      densityClasses: b
    } = he(l), {
      dimensionStyles: S
    } = ke(l), {
      elevationClasses: T
    } = Ce(l), {
      locationStyles: x
    } = we(l), {
      positionClasses: j
    } = Ie(l), {
      roundedClasses: G
    } = ze(l), {
      textColorClasses: K,
      textColorStyles: X
    } = Te(_e(l, "borderColor")), {
      t: $
    } = Pe(), o = I(() => ({
      "aria-label": $(l.closeLabel),
      onClick(a) {
        f.value = !1, i("click:close", a);
      }
    }));
    return () => {
      const a = !!(s.prepend || z.value), m = !!(s.title || l.title), H = !!(s.close || l.closable);
      return f.value && e(l.tag, {
        class: ["v-alert", l.border && {
          "v-alert--border": !!l.border,
          [`v-alert--border-${l.border === !0 ? "start" : l.border}`]: !0
        }, {
          "v-alert--prominent": l.prominent
        }, q.value, D.value, b.value, T.value, j.value, G.value, F.value, l.class],
        style: [_.value, S.value, x.value, l.style],
        role: "alert"
      }, {
        default: () => {
          var L, R;
          return [Se(!1, "v-alert"), l.border && e("div", {
            key: "border",
            class: ["v-alert__border", K.value],
            style: X.value
          }, null), a && e("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [s.prepend ? e(le, {
            key: "prepend-defaults",
            disabled: !z.value,
            defaults: {
              VIcon: {
                density: l.density,
                icon: z.value,
                size: l.prominent ? 44 : 28
              }
            }
          }, s.prepend) : e(Ae, {
            key: "prepend-icon",
            density: l.density,
            icon: z.value,
            size: l.prominent ? 44 : 28
          }, null)]), e("div", {
            class: "v-alert__content"
          }, [m && e(et, {
            key: "title"
          }, {
            default: () => {
              var k;
              return [((k = s.title) == null ? void 0 : k.call(s)) ?? l.title];
            }
          }), ((L = s.text) == null ? void 0 : L.call(s)) ?? l.text, (R = s.default) == null ? void 0 : R.call(s)]), s.append && e("div", {
            key: "append",
            class: "v-alert__append"
          }, [s.append()]), H && e("div", {
            key: "close",
            class: "v-alert__close"
          }, [s.close ? e(le, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: l.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var k;
              return [(k = s.close) == null ? void 0 : k.call(s, {
                props: o.value
              })];
            }
          }) : e(p, N({
            key: "close-btn",
            icon: l.closeIcon,
            size: "x-small",
            variant: "text"
          }, o.value), null)])];
        }
      });
    };
  }
}), nt = { class: "account" }, ot = { class: "account_texth5 mb-0 font-weight-bold" }, st = { class: "account_texth5 mb-0 font-weight-bold" }, it = { class: "account_texth5 mb-0 font-weight-bold" }, ct = { class: "d-flex align-center gap-2" }, rt = { class: "account_table_filter_menu py-1" }, dt = ["onClick"], ut = { class: "d-flex align-center justify-space-between" }, mt = { class: "mb-0" }, _t = { class: "d-flex align-center gap-2" }, vt = { class: "d-flex align-center gap-2" }, pt = { class: "d-flex align-center gap-2" }, ft = { class: "d-flex flex-column gap-1" }, yt = { class: "mb-0" }, gt = { class: "mb-0 secondary_email" }, bt = { class: "d-flex align-center justify-space-between" }, xt = { class: "d-flex align-center gap-2" }, Vt = { class: "account_table_pagination_text mb-0" }, ht = { class: "d-flex align-center gap-1" }, kt = {
  __name: "DynamicDataTable",
  props: {
    title: {
      type: String,
      required: !0
    },
    headers: {
      type: Array,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    filters: {
      type: Array,
      required: !0
    },
    statusItems: {
      type: Array,
      default: () => []
    },
    accountTypeItems: {
      type: Array,
      default: () => []
    },
    currencyItems: {
      type: Array,
      default: () => []
    },
    widgets: {
      type: Object,
      required: !0
    },
    itemValueKey: {
      type: String,
      default: "id"
      // fallback to 'id' if not specified
    },
    // Event props for view functionality
    enableViewAction: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["view-item"],
  setup(l, { emit: M }) {
    const i = l, s = w(1), f = w(10), z = M, O = (o) => {
      i.enableViewAction && z("view-item", o);
    }, q = I(() => i.headers.filter((o) => o.visible !== !1)), D = I(() => i.filters.some((o) => _(o.title)));
    w(!1);
    const _ = (o) => {
      var a;
      return ((a = i.filters.find((m) => m.title === o)) == null ? void 0 : a.checked) || !1;
    }, F = (o) => {
      const a = i.filters.find((m) => m.title === o);
      a && (a.checked = !a.checked);
    }, b = (o) => {
      const a = i.filters.find((m) => m.title === o);
      a && (a.checked = !1);
    }, S = w(!1);
    w(!1);
    const T = w(!1), x = w(null), j = (o, a) => {
      if (!T.value) {
        o.preventDefault();
        return;
      }
      x.value = a, o.dataTransfer.effectAllowed = "move";
    }, G = (o, a) => {
      if (x.value === null || x.value === a) return;
      const m = i.headers[x.value];
      i.headers[x.value] = i.headers[a], i.headers[a] = m, x.value = null, T.value = !1;
    }, K = (o) => {
      switch (o == null ? void 0 : o.toLowerCase()) {
        case "active":
          return "active";
        case "inactive":
          return "inactive";
        case "pending":
          return "pending";
        default:
          return "";
      }
    }, X = I(() => {
      const o = (s.value - 1) * f.value, a = o + f.value;
      return i.items.slice(o, a);
    }), $ = I(() => Math.ceil(i.items.length / f.value));
    return (o, a) => {
      const m = r("IconUsers"), H = r("IconCurrencyRupee"), L = r("IconTrendingUp"), R = r("IconStar"), k = r("IconSearch"), se = r("IconFilter"), ie = r("IconColumns3"), ce = r("IconGripVertical"), re = r("IconDownload"), P = r("IconCircleDashedX"), W = r("IconCalendar"), Z = r("v-date-input"), de = r("IconEye"), ue = r("IconEdit"), me = r("IconTrash");
      return u(), B("div", nt, [
        e(A, { class: "" }, {
          default: t(() => [
            e(d, {
              cols: "12",
              md: "3"
            }, {
              default: t(() => [
                e(h, {
                  subtitle: "Total Records",
                  class: "account_v_card_dark account_widget_vcard account_vcard_border"
                }, {
                  append: t(() => [
                    e(m, {
                      style: { color: "white" },
                      size: "20"
                    })
                  ]),
                  default: t(() => [
                    e(U, null, {
                      default: t(() => a[13] || (a[13] = [
                        c("h5", { class: "account_texth5 mb-0 account_text_white font-weight-bold" }, "10,000", -1)
                      ])),
                      _: 1,
                      __: [13]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e(d, {
              cols: "12",
              md: "3"
            }, {
              default: t(() => [
                e(h, {
                  subtitle: "Average Purchase",
                  class: "account_vcard_border account_widget_vcard"
                }, {
                  append: t(() => [
                    e(H, { size: "20" })
                  ]),
                  default: t(() => [
                    e(U, null, {
                      default: t(() => [
                        c("h5", ot, "$" + v(i.widgets.avgPurchase ? i.widgets.avgPurchase.toFixed(2) : "0.00"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e(d, {
              cols: "12",
              md: "3"
            }, {
              default: t(() => [
                e(h, {
                  subtitle: "Top 10% Avg. Purchase",
                  class: "account_vcard_border account_widget_vcard"
                }, {
                  append: t(() => [
                    e(L, { size: "20" })
                  ]),
                  default: t(() => [
                    e(U, null, {
                      default: t(() => [
                        c("h5", st, " ₹" + v(typeof i.widgets.top10AvgPurchase == "number" ? i.widgets.top10AvgPurchase.toFixed(2) : "0.00"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e(d, {
              cols: "12",
              md: "3"
            }, {
              default: t(() => [
                e(h, {
                  subtitle: "Average Rating",
                  class: "account_vcard_border account_widget_vcard"
                }, {
                  append: t(() => [
                    e(R, { size: "20" })
                  ]),
                  default: t(() => [
                    e(U, null, {
                      default: t(() => [
                        c("h5", it, v(typeof i.widgets.avgRating == "number" ? i.widgets.avgRating.toFixed(1) + " / 5.0" : "0.0 / 5.0"), 1)
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
        }),
        e(A, { class: "" }, {
          default: t(() => [
            e(d, {
              cols: "12",
              class: "d-flex align-center"
            }, {
              default: t(() => [
                e(qe, {
                  class: "accouting_field accouting_active_field",
                  variant: "outlined",
                  density: "compact",
                  style: { "max-inline-size": "377px" },
                  placeholder: l.title === "Accounting" ? "Search by Name" : "Search by Customer Name"
                }, {
                  "prepend-inner": t(() => [
                    e(k, { size: "20" })
                  ]),
                  _: 1
                }, 8, ["placeholder"]),
                e(je),
                c("div", ct, [
                  e(oe, {
                    density: "compact",
                    inset: "",
                    class: "account_swtich_btn mr-3",
                    color: "primary",
                    "hide-details": "",
                    label: "Compact View",
                    modelValue: S.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (n) => S.value = n)
                  }, null, 8, ["modelValue"]),
                  e(J, {
                    location: "bottom",
                    "close-on-content-click": !1
                  }, {
                    activator: t(({ props: n }) => [
                      e(Ge, {
                        text: "Filters list",
                        location: "top"
                      }, {
                        activator: t(({ props: y }) => [
                          e(p, N({ ...n, ...y }, {
                            variant: "text",
                            class: "account_filter_btn_color",
                            rounded: "1",
                            size: "36"
                          }), {
                            default: t(() => [
                              e(se, { size: "20" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    default: t(() => [
                      e(h, { class: "account_vcard_menu account_vcard_border" }, {
                        default: t(() => [
                          a[14] || (a[14] = c("div", { class: "account_vcard_menu_hdng px-4" }, "Add Filters", -1)),
                          e(ne, { class: "my-1 mt-0" }),
                          c("div", rt, [
                            (u(!0), B(ee, null, te(l.filters, (n) => (u(), B("div", {
                              class: "account_vcard_menu_item",
                              key: n.title
                            }, [
                              c("div", {
                                class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                onClick: (y) => F(n.title)
                              }, [
                                e(Qe, {
                                  "model-value": _(n.title),
                                  "onUpdate:modelValue": (y) => F(n.title),
                                  class: "account_v_checkbox account_filter_menu_checkbox",
                                  density: "compact",
                                  onClick: a[1] || (a[1] = ae(() => {
                                  }, ["stop"]))
                                }, null, 8, ["model-value", "onUpdate:modelValue"]),
                                c("span", null, v(n.title), 1)
                              ], 8, dt)
                            ]))), 128))
                          ])
                        ]),
                        _: 1,
                        __: [14]
                      })
                    ]),
                    _: 1
                  }),
                  e(J, {
                    width: "300px",
                    location: "bottom",
                    "close-on-content-click": !1
                  }, {
                    activator: t(({ props: n }) => [
                      e(p, N(n, {
                        class: "account_filter_btn_color",
                        variant: "text",
                        rounded: "1",
                        size: "36"
                      }), {
                        default: t(() => [
                          e(ie, { size: "20" })
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: t(() => [
                      e(h, null, {
                        default: t(() => [
                          e(Ye, null, {
                            default: t(() => a[15] || (a[15] = [
                              Y("Toggle and Reorder", -1)
                            ])),
                            _: 1,
                            __: [15]
                          }),
                          e(ne, { class: "mb-2 ma-0" }),
                          e(A, { class: "ma-0" }, {
                            default: t(() => [
                              (u(!0), B(ee, null, te(i.headers, (n, y) => (u(), g(d, {
                                cols: "12",
                                class: "py-1 draggable-header",
                                key: n.value,
                                draggable: "true",
                                onDragstart: (C) => j(C, y),
                                onDragover: a[4] || (a[4] = ae(() => {
                                }, ["prevent"])),
                                onDrop: (C) => G(C, y)
                              }, {
                                default: t(() => [
                                  c("div", ut, [
                                    c("div", {
                                      class: "d-flex align-center w-100 gap-1 cursor-grab",
                                      onMousedown: a[2] || (a[2] = (C) => T.value = !0),
                                      onMouseup: a[3] || (a[3] = (C) => T.value = !1)
                                    }, [
                                      e(ce, {
                                        style: { "font-size": "18px" },
                                        class: "drag-icon"
                                      }),
                                      c("p", mt, v(n.title), 1)
                                    ], 32),
                                    e(oe, {
                                      density: "compact",
                                      color: "primary",
                                      "hide-details": "",
                                      class: "account_swtich_btn",
                                      inset: "",
                                      modelValue: i.headers[y].visible,
                                      "onUpdate:modelValue": (C) => i.headers[y].visible = C
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["onDragstart", "onDrop"]))), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(J, {
                    width: "110px",
                    location: "bottom",
                    "close-on-content-click": !1
                  }, {
                    activator: t(({ props: n }) => [
                      e(p, N(n, {
                        class: "account_filter_btn_color",
                        variant: "text",
                        rounded: "1",
                        size: "36"
                      }), {
                        default: t(() => [
                          e(re, { size: "20" })
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: t(() => [
                      e(h, { class: "account_vcard_border" }, {
                        default: t(() => [
                          e(Ke, null, {
                            default: t(() => [
                              e(Q, {
                                title: "PDF",
                                link: ""
                              }),
                              e(Q, {
                                title: "Excel",
                                link: ""
                              }),
                              e(Q, {
                                title: "CSV",
                                link: ""
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
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(Xe, { mode: "in-out" }, {
          default: t(() => [
            D.value ? (u(), g(A, { key: 0 }, {
              default: t(() => [
                D.value ? V("", !0) : (u(), g(d, {
                  key: 0,
                  cols: "12"
                }, {
                  default: t(() => [
                    e(lt, {
                      type: "info",
                      variant: "tonal"
                    }, {
                      default: t(() => a[16] || (a[16] = [
                        Y(" No filters selected. Please select a filter to apply. ", -1)
                      ])),
                      _: 1,
                      __: [16]
                    })
                  ]),
                  _: 1
                })),
                _("Status") ? (u(), g(d, {
                  key: 1,
                  cols: "12",
                  lg: "3",
                  md: "3"
                }, {
                  default: t(() => [
                    e(E, {
                      class: "accouting_field accouting_active_field",
                      variant: "outlined",
                      placeholder: "Status",
                      items: l.statusItems,
                      "item-title": "title",
                      density: "compact",
                      "item-value": "value"
                    }, {
                      append: t(() => [
                        e(p, {
                          variant: "text",
                          size: "small",
                          onClick: a[5] || (a[5] = (n) => b("Status"))
                        }, {
                          default: t(() => [
                            e(P, { style: { "font-size": "20px" } })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ]),
                  _: 1
                })) : V("", !0),
                _("Account Type") ? (u(), g(d, {
                  key: 2,
                  cols: "12",
                  lg: "3",
                  md: "3"
                }, {
                  default: t(() => [
                    e(E, {
                      class: "accouting_field accouting_active_field",
                      variant: "outlined",
                      placeholder: "Account Type",
                      items: l.accountTypeItems,
                      "item-title": "title",
                      density: "compact",
                      "item-value": "value"
                    }, {
                      append: t(() => [
                        e(p, {
                          variant: "text",
                          size: "small",
                          onClick: a[6] || (a[6] = (n) => b("Account Type"))
                        }, {
                          default: t(() => [
                            e(P, { style: { "font-size": "20px" } })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ]),
                  _: 1
                })) : V("", !0),
                _("Customer Type") ? (u(), g(d, {
                  key: 3,
                  cols: "12",
                  lg: "3",
                  md: "3"
                }, {
                  default: t(() => [
                    e(E, {
                      class: "accouting_field accouting_active_field",
                      variant: "outlined",
                      placeholder: "Customer Type",
                      items: l.accountTypeItems,
                      "item-title": "title",
                      density: "compact",
                      "item-value": "value"
                    }, {
                      append: t(() => [
                        e(p, {
                          variant: "text",
                          size: "small",
                          onClick: a[7] || (a[7] = (n) => b("Customer Type"))
                        }, {
                          default: t(() => [
                            e(P, { style: { "font-size": "20px" } })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ]),
                  _: 1
                })) : V("", !0),
                _("Currency") ? (u(), g(d, {
                  key: 4,
                  cols: "12",
                  lg: "3",
                  md: "3"
                }, {
                  default: t(() => [
                    e(E, {
                      class: "accouting_field accouting_active_field",
                      variant: "outlined",
                      placeholder: "Currency",
                      items: l.currencyItems,
                      "item-title": "title",
                      density: "compact",
                      "item-value": "value"
                    }, {
                      append: t(() => [
                        e(p, {
                          variant: "text",
                          size: "small",
                          onClick: a[8] || (a[8] = (n) => b("Currency"))
                        }, {
                          default: t(() => [
                            e(P, { style: { "font-size": "20px" } })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["items"])
                  ]),
                  _: 1
                })) : V("", !0),
                _("Last Transaction From") ? (u(), g(d, {
                  key: 5,
                  cols: "12",
                  lg: "3",
                  md: "3"
                }, {
                  default: t(() => [
                    c("div", _t, [
                      e(Z, {
                        class: "accounting_date_input",
                        placeholder: "Last Transaction From",
                        "max-width": "368",
                        "cancel-text": "Close",
                        "ok-text": "Apply",
                        multiple: "range"
                      }, {
                        "prepend-inner": t(() => [
                          e(W, { style: { "font-size": "20px" } })
                        ]),
                        _: 1
                      }),
                      e(p, {
                        variant: "text",
                        size: "small",
                        onClick: a[9] || (a[9] = (n) => b("Last Transaction From"))
                      }, {
                        default: t(() => [
                          e(P, { style: { "font-size": "20px" } })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : V("", !0),
                _("Last Order From") ? (u(), g(d, {
                  key: 6,
                  cols: "12",
                  lg: "3",
                  md: "3"
                }, {
                  default: t(() => [
                    c("div", vt, [
                      e(Z, {
                        class: "accounting_date_input",
                        placeholder: "Last Order From",
                        "max-width": "368",
                        multiple: "range"
                      }, {
                        "prepend-inner": t(() => [
                          e(W, { style: { "font-size": "20px" } })
                        ]),
                        _: 1
                      }),
                      e(p, {
                        variant: "text",
                        size: "small",
                        onClick: a[10] || (a[10] = (n) => b("Last Order From"))
                      }, {
                        default: t(() => [
                          e(P, { style: { "font-size": "20px" } })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : V("", !0)
              ]),
              _: 1
            })) : V("", !0)
          ]),
          _: 1
        }),
        e(h, { class: "mt-4 account_vcard_border" }, {
          default: t(() => [
            e(We, {
              headers: q.value,
              items: X.value,
              "items-per-page": f.value,
              "show-select": "",
              "item-value": l.itemValueKey,
              density: S.value ? "compact" : "default",
              class: "elevation-1 border rounded account_dynamic_table"
            }, {
              "item.actions": t(({ item: n }) => [
                c("div", pt, [
                  e(de, {
                    class: "account_v_btn_color",
                    size: "20",
                    style: { cursor: "pointer" },
                    onClick: (y) => O(n)
                  }, null, 8, ["onClick"]),
                  e(ue, {
                    class: "account_v_btn_color",
                    size: "20",
                    style: { cursor: "pointer" }
                  }),
                  e(me, {
                    class: "account_v_btn_color",
                    style: { cursor: "pointer", color: "red" },
                    size: "20"
                  })
                ])
              ]),
              "item.status": t(({ item: n }) => [
                e(He, {
                  class: ve(["account_table_chip", K(n.status)]),
                  size: "small"
                }, {
                  default: t(() => [
                    Y(v(n.status), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              "item.customerName": t(({ item: n }) => [
                c("div", ft, [
                  c("p", yt, v(n.customerName), 1),
                  c("p", gt, v(n.customerEmail), 1)
                ])
              ]),
              _: 1
            }, 8, ["headers", "items", "items-per-page", "item-value", "density"])
          ]),
          _: 1
        }),
        e(A, null, {
          default: t(() => [
            e(d, {
              class: "mt-3",
              cols: "12"
            }, {
              default: t(() => [
                c("div", bt, [
                  c("div", xt, [
                    c("p", Vt, "Page " + v(s.value) + " of " + v($.value), 1),
                    c("div", ht, [
                      a[17] || (a[17] = c("p", { class: "mb-0 account_table_pagination_text" }, "Rows per page:", -1)),
                      e(Je, {
                        class: "accouting_field accouting_active_field",
                        variant: "outlined",
                        density: "compact",
                        items: [5, 10, 15, 20, 25, 30, 50],
                        modelValue: f.value,
                        "onUpdate:modelValue": a[11] || (a[11] = (n) => f.value = n)
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  e(Ze, {
                    class: "account_pagination_bg",
                    modelValue: s.value,
                    "onUpdate:modelValue": a[12] || (a[12] = (n) => s.value = n),
                    "total-visible": 3,
                    "next-icon": "mdi-arrow-right-drop-circle-outline",
                    "prev-icon": "mdi-arrow-left-drop-circle-outline",
                    length: $.value
                  }, null, 8, ["modelValue", "length"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}, Ft = /* @__PURE__ */ pe(kt, [["__scopeId", "data-v-c4b95228"]]);
export {
  Ft as _
};
