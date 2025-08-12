import { ref as F, computed as I, resolveComponent as v, createElementBlock as m, openBlock as r, createVNode as s, withCtx as a, createElementVNode as e, unref as c, normalizeClass as l, normalizeStyle as X, createBlock as d, createCommentVNode as p, toDisplayString as i, createTextVNode as k, Transition as h, resolveDynamicComponent as $, mergeProps as q } from "vue";
import { _ as se } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { V as P, a as x } from "./VRow-Bnh7mzWV.js";
import { V as C, a as G } from "./VCard-BuMrnEL1.js";
import { V as K } from "./VDataTable-C7AYZo_S.js";
import { d as O, V as j, h as Q, b as ae } from "./main-u1Mo8sLp.js";
import { V as re } from "./VSwitch-Qz3vO7-X.js";
const oe = { class: "account_ui_vcard" }, ce = { class: "d-flex align-center gap-2" }, le = { class: "py-1" }, ie = { class: "account_vcard_menu_item" }, ue = { class: "account_vcard_menu_item" }, de = { class: "account_vcard_menu_item" }, pe = { class: "py-1" }, _e = { class: "account_vcard_menu_item" }, me = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, ge = {
  key: 0,
  class: "text-end"
}, ve = {
  key: 0,
  class: "text-end"
}, fe = {
  key: 0,
  class: "text-end"
}, he = { class: "d-flex justify-end align-center gap-2" }, ye = { class: "d-flex justify-end mb-3 px-4" }, xe = { style: { "min-width": "100%" } }, we = { class: "font-weight-medium" }, be = { class: "text-end amount_inc_current_item" }, Ie = {
  key: 0,
  class: "text-end amount_inc_previous_item"
}, Fe = {
  key: 0,
  class: "text-end d-flex align-center amount_inc_change_item justify-end gap-2"
}, ke = {
  key: 0,
  class: "text-end"
}, Ce = {
  key: 1,
  class: "text-end"
}, De = {
  key: 0,
  class: "text-end"
}, Ve = { class: "d-flex justify-end align-center gap-2" }, Se = { class: "d-flex justify-end mb-3 px-4" }, ze = { style: { "min-width": "100%" } }, Te = { class: "font-weight-medium" }, $e = { class: "text-end amount_inc_current_item" }, Pe = {
  key: 0,
  class: "text-end amount_inc_previous_item"
}, je = {
  key: 0,
  class: "text-end d-flex align-center justify-end amount_inc_change_item gap-2"
}, Ee = { class: "d-flex align-center gap-2" }, Le = { class: "d-flex justify-end align-center gap-2" }, Ne = {
  class: "d-flex justify-space-between align-center px-4 py-2 rounded",
  style: { "background-color": "#e6fff0" }
}, Re = { class: "d-flex align-center gap-2" }, Ae = { class: "d-flex align-center gap-4" }, Oe = {
  key: 0,
  class: "px-2 py-1",
  style: { "background-color": "#f5d6c6", "border-radius": "4px" }
}, Be = { class: "font-weight-medium" }, Me = { class: "text-success font-weight-bold" }, Ue = {
  key: 1,
  class: "d-flex align-center gap-1"
}, We = {
  __name: "index",
  setup(Ge) {
    const B = F([
      {
        name: "Income (Direct)",
        percent: "95.03%",
        current: "₹16,25,000.00",
        previous: "₹14,40,000.00",
        change: "12.8%",
        type: "group",
        children: [
          {
            name: "Revenue from Operations",
            percent: "93.57%",
            current: "₹16,00,000.00",
            previous: "₹14,20,000.00",
            change: "12.7%",
            type: "group",
            children: [
              {
                name: "Domestic Sales",
                percent: "73.10%",
                current: "₹12,50,000.00",
                previous: "₹11,00,000.00",
                change: "13.6%",
                type: "ledger"
              },
              {
                name: "Export Sales",
                percent: "20.47%",
                current: "₹3,50,000.00",
                previous: "₹3,20,000.00",
                change: "9.4%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Other Direct Income",
            percent: "1.46%",
            current: "₹25,000.00",
            previous: "₹20,000.00",
            change: "25.0%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Income (Indirect)",
        percent: "4.97%",
        current: "₹85,000.00",
        previous: "₹70,000.00",
        change: "21.4%",
        type: "group",
        children: [
          {
            name: "Interest Received",
            percent: "0.88%",
            current: "₹15,000.00",
            previous: "₹12,000.00",
            change: "25.0%",
            type: "ledger"
          },
          {
            name: "Commission Received",
            percent: "2.63%",
            current: "₹45,000.00",
            previous: "₹40,000.00",
            change: "12.5%",
            type: "ledger"
          },
          {
            name: "Dividend Received",
            percent: "1.17%",
            current: "₹20,000.00",
            previous: "₹18,000.00",
            change: "11.1%",
            type: "ledger"
          },
          {
            name: "Gain on Sale of Asset",
            percent: "0.29%",
            current: "₹5,000.00",
            previous: "₹0.00",
            change: "New",
            type: "ledger",
            new: !0
          }
        ]
      }
    ]), M = F([
      {
        name: "Expenses (Direct)",
        percent: "20.00%",
        current: "₹3,42,000.00",
        previous: "₹3,25,000.00",
        change: "5.2%",
        type: "group",
        children: [
          {
            name: "Cost of Goods Sold",
            percent: "14.16%",
            current: "₹2,42,000.00",
            previous: "₹2,30,000.00",
            change: "5.2%",
            type: "group",
            children: [
              {
                name: "Opening Stock",
                percent: "5.31%",
                current: "₹91,000.00",
                previous: "₹85,000.00",
                change: "7.1%",
                type: "ledger"
              },
              {
                name: "Purchases",
                percent: "12.30%",
                current: "₹2,10,000.00",
                previous: "₹2,00,000.00",
                change: "5.0%",
                type: "ledger"
              },
              {
                name: "Closing Stock",
                percent: "-7.08%",
                current: "₹1,21,000.00",
                previous: "₹1,10,000.00",
                change: "-9.1%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Factory Overheads",
            percent: "5.31%",
            current: "₹91,000.00",
            previous: "₹88,000.00",
            change: "3.4%",
            type: "group",
            children: [
              {
                name: "Factory Rent",
                percent: "1.76%",
                current: "₹30,000.00",
                previous: "₹30,000.00",
                change: "-",
                type: "ledger"
              },
              {
                name: "Wages",
                percent: "3.54%",
                current: "₹60,000.00",
                previous: "₹57,000.00",
                change: "5.3%",
                type: "ledger"
              },
              {
                name: "Other Direct Expenses",
                percent: "0.53%",
                current: "₹9,000.00",
                previous: "₹7,000.00",
                change: "28.6%",
                type: "ledger"
              }
            ]
          }
        ]
      },
      {
        name: "Expenses (Indirect)",
        percent: "25.80%",
        current: "₹4,41,000.00",
        previous: "₹4,12,000.00",
        change: "7.0%",
        type: "group",
        children: [
          {
            name: "Operating Expenses",
            percent: "15.62%",
            current: "₹2,67,000.00",
            previous: "₹2,50,000.00",
            change: "6.8%",
            type: "group",
            children: [
              {
                name: "Salaries & Wages",
                percent: "8.84%",
                current: "₹1,51,000.00",
                previous: "₹1,40,000.00",
                change: "7.9%",
                type: "ledger"
              },
              {
                name: "Rent & Rates",
                percent: "4.24%",
                current: "₹72,500.00",
                previous: "₹72,500.00",
                change: "-",
                type: "ledger"
              },
              {
                name: "Printing & Stationery",
                percent: "1.24%",
                current: "₹21,000.00",
                previous: "₹18,000.00",
                change: "16.7%",
                type: "ledger"
              },
              {
                name: "Telephone & Internet",
                percent: "0.88%",
                current: "₹15,000.00",
                previous: "₹13,000.00",
                change: "15.4%",
                type: "ledger"
              },
              {
                name: "Miscellaneous Operating Expenses",
                percent: "0.41%",
                current: "₹7,000.00",
                previous: "₹6,000.00",
                change: "16.7%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Financial Expenses",
            percent: "2.29%",
            current: "₹39,000.00",
            previous: "₹40,000.00",
            change: "-2.5%",
            type: "group",
            children: [
              {
                name: "Bank Charges",
                percent: "0.18%",
                current: "₹3,000.00",
                previous: "₹2,700.00",
                change: "11.1%",
                type: "ledger"
              },
              {
                name: "Interest on Loans",
                percent: "2.12%",
                current: "₹36,000.00",
                previous: "₹37,000.00",
                change: "-2.7%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Selling & Distribution",
            percent: "5.48%",
            current: "₹94,000.00",
            previous: "₹87,000.00",
            change: "8.0%",
            type: "group",
            children: [
              {
                name: "Advertising & Marketing",
                percent: "2.65%",
                current: "₹45,000.00",
                previous: "₹42,000.00",
                change: "7.1%",
                type: "ledger"
              },
              {
                name: "Freight Outward",
                percent: "1.06%",
                current: "₹18,000.00",
                previous: "₹17,000.00",
                change: "5.9%",
                type: "ledger"
              },
              {
                name: "Sales Commission",
                percent: "1.76%",
                current: "₹30,000.00",
                previous: "₹27,000.00",
                change: "11.1%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Depreciation & Amortization",
            percent: "2.12%",
            current: "₹36,000.00",
            previous: "₹32,000.00",
            change: "12.5%",
            type: "group",
            children: [
              {
                name: "Depreciation on Computers",
                percent: "1.41%",
                current: "₹24,000.00",
                previous: "₹21,000.00",
                change: "14.3%",
                type: "ledger"
              }
            ]
          }
        ]
      }
    ]), Y = I(() => [
      { title: "Income Type", value: "name", width: "550px", align: "start", visible: !0 },
      { title: o.value ? "Current" : "", value: "current", width: "", align: "end", visible: !0 },
      { title: "Previous", value: "previous", width: "", align: "end", visible: o.value },
      { title: "Change", value: "change", width: "", align: "end", visible: o.value }
    ].filter((u) => u.visible)), Z = I(() => [
      { title: "Expense Type", value: "name", width: "550px", align: "start", visible: !0 },
      { title: o.value ? "Current" : "", value: "current", width: "", align: "end", visible: !0 },
      { title: "Previous", value: "previous", width: "", align: "end", visible: o.value },
      { title: "Change", value: "change", width: "", align: "end", visible: o.value }
    ].filter((u) => u.visible));
    function U(u, n = 0, y = "") {
      const _ = [];
      for (const g of u)
        _.push({
          ...g,
          level: n,
          parentType: y
        }), g.children && g.children.length && _.push(...U(g.children, n + 1, g.type));
      return _;
    }
    const ee = I(() => U([...B.value])), te = I(() => U([...M.value])), f = F(!1), o = F(!1), D = F(!1), E = (u) => {
      let n = {
        current: 0,
        previous: 0
      };
      function y(g) {
        var z, L, N;
        for (const b of g) {
          if (b.type === "ledger") {
            const R = parseFloat(((z = b.current) == null ? void 0 : z.replace(/[^0-9.-]+/g, "")) || 0), A = parseFloat(((L = b.previous) == null ? void 0 : L.replace(/[^0-9.-]+/g, "")) || 0);
            n.current += R, n.previous += A;
          }
          (N = b.children) != null && N.length && y(b.children);
        }
      }
      y(u);
      const _ = n.previous === 0 ? 0 : (n.current - n.previous) / n.previous * 100;
      return {
        currentFormatted: `₹${n.current.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`,
        previousFormatted: `₹${n.previous.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`,
        changeFormatted: `${_.toFixed(1)}%`,
        isIncrease: _ >= 0
      };
    }, V = I(() => E(B.value)), S = I(() => E(M.value)), w = I(() => {
      const u = E(B.value), n = E(M.value), y = parseFloat(u.currentFormatted.replace(/[^0-9.-]+/g, "")) - parseFloat(n.currentFormatted.replace(/[^0-9.-]+/g, "")), _ = parseFloat(u.previousFormatted.replace(/[^0-9.-]+/g, "")) - parseFloat(n.previousFormatted.replace(/[^0-9.-]+/g, "")), g = _ === 0 ? 0 : (y - _) / _ * 100;
      return {
        percent: `${g.toFixed(1)}%`,
        currentFormatted: `₹${y.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`,
        previousFormatted: `₹${_.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`,
        isIncrease: g >= 0
      };
    }), W = F(!1);
    function H(u) {
      W.value = !1, console.log("Download as", u);
    }
    return (u, n) => {
      const y = v("IconCalendar"), _ = v("v-date-input"), g = v("IconSettings"), z = v("IconCheck"), L = v("IconDownload"), N = v("IconChevronRight"), b = v("IconPrinter"), R = v("IconFolder"), A = v("IconFileText"), J = v("IconStar"), ne = v("IconArrowUp");
      return r(), m("div", oe, [
        s(P, null, {
          default: a(() => [
            s(x, { cols: "12" }, {
              default: a(() => [
                s(C, {
                  class: "account_vcard_border shadow-none",
                  title: "Profit & Loss Statement",
                  subtitle: "For the period of Jan 01, 2025 to Jul 07, 2025"
                }, {
                  append: a(() => [
                    e("div", ce, [
                      s(re, {
                        modelValue: D.value,
                        "onUpdate:modelValue": n[0] || (n[0] = (t) => D.value = t),
                        density: "compact",
                        inset: "",
                        label: "Show %",
                        class: "account_swtich_btn mr-4",
                        style: { "min-width": "121px" },
                        color: "primary",
                        "hide-details": ""
                      }, null, 8, ["modelValue"]),
                      s(_, {
                        class: "accounting_date_input",
                        "cancel-text": "Close",
                        style: { width: "300px" },
                        multiple: "range",
                        "ok-text": "Apply"
                      }, {
                        "prepend-inner": a(() => [
                          s(y, { size: "20" })
                        ]),
                        _: 1
                      }),
                      s(Q, {
                        location: "start",
                        transition: "slide-y-transition",
                        "offset-y": "",
                        "close-on-content-click": !1
                      }, {
                        activator: a(({ props: t }) => [
                          s(ae, q(t, {
                            class: "account_v_btn_outlined",
                            variant: "outlined",
                            size: "34",
                            rounded: "2"
                          }), {
                            default: a(() => [
                              s(g, { size: "22" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: a(() => [
                          s(C, { class: "account_vcard_menu account_vcard_border" }, {
                            default: a(() => [
                              e("div", le, [
                                e("div", ie, [
                                  e("div", {
                                    class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                    onClick: n[1] || (n[1] = (t) => f.value = !f.value)
                                  }, [
                                    f.value ? (r(), d(z, {
                                      key: 0,
                                      size: "16"
                                    })) : p("", !0),
                                    e("span", {
                                      class: l(f.value ? "" : "ml-6")
                                    }, "Full Width View", 2)
                                  ])
                                ]),
                                e("div", ue, [
                                  e("div", {
                                    class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                    onClick: n[2] || (n[2] = (t) => o.value = !o.value)
                                  }, [
                                    o.value ? (r(), d(z, {
                                      key: 0,
                                      size: "16"
                                    })) : p("", !0),
                                    e("span", {
                                      class: l(o.value ? "" : "ml-6")
                                    }, "Compare Periods", 2)
                                  ])
                                ]),
                                s(j, { class: "my-2" }),
                                e("div", de, [
                                  s(Q, {
                                    modelValue: W.value,
                                    "onUpdate:modelValue": n[5] || (n[5] = (t) => W.value = t),
                                    location: "end",
                                    offset: "10",
                                    transition: "slide-y-transition",
                                    "close-on-content-click": !1
                                  }, {
                                    activator: a(({ props: t }) => [
                                      e("div", q(t, { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }), [
                                        s(L, { size: "16" }),
                                        n[6] || (n[6] = e("span", null, "Download", -1)),
                                        s(N, {
                                          size: "14",
                                          class: "ml-auto"
                                        })
                                      ], 16)
                                    ]),
                                    default: a(() => [
                                      s(C, {
                                        class: "account_vcard_menu account_vcard_border",
                                        width: "120"
                                      }, {
                                        default: a(() => [
                                          e("div", pe, [
                                            e("div", {
                                              class: "account_vcard_menu_item field_list_title cursor-pointer px-3 py-1",
                                              onClick: n[3] || (n[3] = (t) => H("pdf"))
                                            }, n[7] || (n[7] = [
                                              e("span", null, "PDF", -1)
                                            ])),
                                            e("div", {
                                              class: "account_vcard_menu_item field_list_title cursor-pointer px-3 py-1",
                                              onClick: n[4] || (n[4] = (t) => H("xls"))
                                            }, n[8] || (n[8] = [
                                              e("span", null, "XLS", -1)
                                            ]))
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"])
                                ]),
                                e("div", _e, [
                                  e("div", me, [
                                    s(b, { size: "16" }),
                                    n[9] || (n[9] = e("span", null, "Print", -1))
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: a(() => [
                    s(G, null, {
                      default: a(() => [
                        s(P, null, {
                          default: a(() => [
                            s(x, {
                              cols: 12,
                              lg: f.value ? 12 : 6,
                              md: f.value ? 12 : 6,
                              sm: f.value ? 12 : 6
                            }, {
                              default: a(() => [
                                s(C, {
                                  variant: "text",
                                  class: "h-100 account_vcard_border account_income_card shadow-none"
                                }, {
                                  default: a(() => [
                                    s(K, {
                                      headers: c(Y),
                                      items: c(ee),
                                      class: "account_income_table",
                                      "hide-default-footer": "",
                                      "item-value": "name"
                                    }, {
                                      item: a(({ item: t }) => {
                                        var T;
                                        return [
                                          e("tr", {
                                            class: l(t.type === "group" ? t.level === 0 ? "amount_income_item_title" : "amount_income_overlay_item_title" : "")
                                          }, [
                                            e("td", null, [
                                              e("div", {
                                                class: "d-flex align-center gap-2",
                                                style: X({ paddingLeft: `${t.level * 24}px` })
                                              }, [
                                                t.type === "group" ? (r(), d(R, {
                                                  key: 0,
                                                  size: "16"
                                                })) : (r(), d(A, {
                                                  key: 1,
                                                  size: "16"
                                                })),
                                                e("p", {
                                                  class: l(["mb-0 amount_income_group_item", t.type === "ledger" ? "account_ledger_secondary" : (T = t.name) != null && T.toLowerCase().includes("expense") ? "account_group_error" : "account_group_primary"])
                                                }, i(t.name), 3),
                                                t.percent && D.value ? (r(), d(O, {
                                                  key: 2,
                                                  density: "compact",
                                                  variant: "tonal",
                                                  class: l(["account_income_chip py-1 px-1", t.type === "ledger" ? "account_chip_outline" : "account_chip_secondary"])
                                                }, {
                                                  default: a(() => [
                                                    k(" (" + i(t.percent) + ") ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : p("", !0)
                                              ], 4)
                                            ]),
                                            (r(), m("td", ge, [
                                              e("p", {
                                                class: l(["mb-0 amount_inc_current_item", t.level === 0 && t.type === "group" ? "amount_inc_current_font_wght" : ""])
                                              }, i(t.current), 3)
                                            ])),
                                            s(h, { name: "slide-fade" }, {
                                              default: a(() => [
                                                o.value ? (r(), m("td", ve, [
                                                  e("p", {
                                                    class: l(["mb-0 amount_inc_previous_item", t.level > 0 && t.type === "group" ? "amount_inc_previous_font_wght" : ""])
                                                  }, i(t.previous), 3)
                                                ])) : p("", !0)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            s(h, { name: "slide-fade" }, {
                                              default: a(() => [
                                                o.value ? (r(), m("td", fe, [
                                                  e("div", he, [
                                                    e("p", {
                                                      class: l(["mb-0 amount_inc_change_item", [
                                                        t.type === "ledger" ? "amount_inc_change_font_wght" : "",
                                                        parseFloat(t.change) > 0 ? "text-success" : parseFloat(t.change) < 0 ? "text-error" : "text-medium-emphasis"
                                                      ]])
                                                    }, i(t.change), 3),
                                                    t.new ? (r(), d(J, {
                                                      key: 0,
                                                      size: "12",
                                                      class: "text-info"
                                                    })) : (r(), d($(u.$renderTablerIcon(parseFloat(t.change) < 0 ? "arrow-down" : "arrow-up")), {
                                                      key: 1,
                                                      size: "12",
                                                      class: l(parseFloat(t.change) < 0 ? "text-error" : "text-success")
                                                    }, null, 8, ["class"]))
                                                  ])
                                                ])) : p("", !0)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 2)
                                        ];
                                      }),
                                      _: 1
                                    }, 8, ["headers", "items"]),
                                    s(j, { class: "my-2" }),
                                    e("div", ye, [
                                      e("table", xe, [
                                        e("tr", we, [
                                          n[10] || (n[10] = e("td", {
                                            style: { "min-width": "240px" },
                                            class: "text-start"
                                          }, "Total Income", -1)),
                                          e("td", be, i(c(V).currentFormatted), 1),
                                          s(h, { name: "slide-fade" }, {
                                            default: a(() => [
                                              o.value ? (r(), m("td", Ie, i(c(V).previousFormatted), 1)) : p("", !0)
                                            ]),
                                            _: 1
                                          }),
                                          s(h, { name: "slide-fade" }, {
                                            default: a(() => [
                                              o.value ? (r(), m("td", Fe, [
                                                k(i(c(V).changeFormatted) + " ", 1),
                                                (r(), d($(u.$renderTablerIcon(c(V).isIncrease ? "arrow-up" : "arrow-down")), {
                                                  size: "12",
                                                  class: l(c(V).isIncrease ? "text-success" : "text-error")
                                                }, null, 8, ["class"]))
                                              ])) : p("", !0)
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["lg", "md", "sm"]),
                            s(x, {
                              cols: 12,
                              lg: f.value ? 12 : 6,
                              md: f.value ? 12 : 6,
                              sm: f.value ? 12 : 6
                            }, {
                              default: a(() => [
                                s(C, {
                                  variant: "text",
                                  class: "h-100 account_vcard_border account_expense_card shadow-none"
                                }, {
                                  default: a(() => [
                                    s(K, {
                                      headers: c(Z),
                                      items: c(te),
                                      class: "account_income_table account_expense_table",
                                      "hide-default-footer": "",
                                      "item-value": "name"
                                    }, {
                                      item: a(({ item: t }) => {
                                        var T;
                                        return [
                                          e("tr", {
                                            class: l(t.type === "group" ? t.level === 0 ? "amount_income_item_title" : "amount_income_overlay_item_title" : "")
                                          }, [
                                            e("td", null, [
                                              e("div", {
                                                class: "d-flex align-center gap-2",
                                                style: X({ paddingLeft: `${t.level * 24}px` })
                                              }, [
                                                t.type === "group" ? (r(), d(R, {
                                                  key: 0,
                                                  size: "16"
                                                })) : (r(), d(A, {
                                                  key: 1,
                                                  size: "16"
                                                })),
                                                e("p", {
                                                  class: l(["mb-0 amount_income_group_item", t.type === "ledger" ? "account_ledger_secondary" : (T = t.name) != null && T.toLowerCase().includes("income") ? "account_group_success" : "account_group_error"])
                                                }, i(t.name), 3),
                                                t.percent && D.value ? (r(), d(O, {
                                                  key: 2,
                                                  density: "compact",
                                                  variant: "tonal",
                                                  class: l(["account_income_chip py-1 px-1", t.type === "ledger" ? "account_chip_outline" : "account_chip_secondary"])
                                                }, {
                                                  default: a(() => [
                                                    k(" (" + i(t.percent) + ") ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : p("", !0)
                                              ], 4)
                                            ]),
                                            (r(), m("td", ke, [
                                              e("p", {
                                                class: l(["mb-0 amount_inc_current_item", t.level === 0 && t.type === "group" ? "amount_inc_current_font_wght" : ""])
                                              }, i(t.current), 3)
                                            ])),
                                            o.value ? (r(), m("td", Ce, [
                                              s(h, { name: "slide-fade" }, {
                                                default: a(() => [
                                                  e("p", {
                                                    class: l(["mb-0 amount_inc_previous_item", t.level > 0 && t.type === "group" ? "amount_inc_previous_font_wght" : ""])
                                                  }, i(t.previous), 3)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : p("", !0),
                                            s(h, { name: "slide-fade" }, {
                                              default: a(() => [
                                                o.value ? (r(), m("td", De, [
                                                  e("div", Ve, [
                                                    e("p", {
                                                      class: l(["mb-0 amount_inc_change_item", [
                                                        t.type === "ledger" ? "amount_inc_change_font_wght" : "",
                                                        parseFloat(t.change) > 0 ? "text-success" : parseFloat(t.change) < 0 ? "text-error" : "text-medium-emphasis"
                                                      ]])
                                                    }, i(t.change), 3),
                                                    t.new ? (r(), d(J, {
                                                      key: 0,
                                                      size: "12",
                                                      class: "text-info"
                                                    })) : (r(), d($(u.$renderTablerIcon(parseFloat(t.change) < 0 ? "arrow-down" : "arrow-up")), {
                                                      key: 1,
                                                      size: "12",
                                                      class: l(parseFloat(t.change) < 0 ? "text-error" : "text-success")
                                                    }, null, 8, ["class"]))
                                                  ])
                                                ])) : p("", !0)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 2)
                                        ];
                                      }),
                                      _: 1
                                    }, 8, ["headers", "items"]),
                                    s(j, { class: "my-2" }),
                                    e("div", Se, [
                                      e("table", ze, [
                                        e("tr", Te, [
                                          n[11] || (n[11] = e("td", {
                                            style: { "min-width": "240px" },
                                            class: "text-start"
                                          }, "Total Expenses", -1)),
                                          e("td", $e, i(c(S).currentFormatted), 1),
                                          s(h, { name: "slide-fade" }, {
                                            default: a(() => [
                                              o.value ? (r(), m("td", Pe, i(c(S).previousFormatted), 1)) : p("", !0)
                                            ]),
                                            _: 1
                                          }),
                                          s(h, { name: "slide-fade" }, {
                                            default: a(() => [
                                              o.value ? (r(), m("td", je, [
                                                k(i(c(S).changeFormatted) + " ", 1),
                                                (r(), d($(u.$renderTablerIcon(c(S).isIncrease ? "arrow-up" : "arrow-down")), {
                                                  size: "12",
                                                  class: l(c(S).isIncrease ? "text-success" : "text-error")
                                                }, null, 8, ["class"]))
                                              ])) : p("", !0)
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["lg", "md", "sm"])
                          ]),
                          _: 1
                        }),
                        s(j, { class: "my-3" }),
                        s(P, { class: "justify-end" }, {
                          default: a(() => [
                            s(x, {
                              cols: "12",
                              lg: "6",
                              md: "6"
                            }, {
                              default: a(() => [
                                s(C, {
                                  variant: "text",
                                  class: "account_vcard_border account_expense_card shadow-none"
                                }, {
                                  default: a(() => [
                                    s(G, { class: "" }, {
                                      default: a(() => [
                                        s(P, { class: "justify-content-between" }, {
                                          default: a(() => [
                                            s(x, { cols: "7" }, {
                                              default: a(() => [
                                                e("div", Ee, [
                                                  n[13] || (n[13] = e("h5", { class: "mb-0" }, "Profit Before Tax", -1)),
                                                  D.value ? (r(), d(O, {
                                                    key: 0,
                                                    density: "compact",
                                                    class: "account_chip account_chip_outlined py-1 px-1"
                                                  }, {
                                                    default: a(() => n[12] || (n[12] = [
                                                      k(" 12.5% ", -1)
                                                    ])),
                                                    _: 1,
                                                    __: [12]
                                                  })) : p("", !0)
                                                ]),
                                                n[14] || (n[14] = e("p", { class: "mb-0 mt-2" }, "Less: Income Tax", -1))
                                              ]),
                                              _: 1,
                                              __: [14]
                                            }),
                                            s(x, {
                                              class: "px-0",
                                              cols: "2"
                                            }, {
                                              default: a(() => n[15] || (n[15] = [
                                                e("div", { class: "d-flex justify-end flex-column" }, [
                                                  e("p", { class: "mb-0 amount_inc_current_item" }, "₹4,16,000.00"),
                                                  e("p", { class: "mb-0 mt-2" }, "(₹85,000.00)")
                                                ], -1)
                                              ])),
                                              _: 1,
                                              __: [15]
                                            }),
                                            s(h, { name: "slide-fade" }, {
                                              default: a(() => [
                                                o.value ? (r(), d(x, {
                                                  key: 0,
                                                  class: "px-0",
                                                  cols: "2"
                                                }, {
                                                  default: a(() => n[16] || (n[16] = [
                                                    e("div", { class: "d-flex justify-end flex-column" }, [
                                                      e("p", { class: "mb-0 amount_inc_previous_item" }, "₹2,91,500.00"),
                                                      e("p", { class: "mb-0 mt-2" }, "(₹75,000.00)")
                                                    ], -1)
                                                  ])),
                                                  _: 1,
                                                  __: [16]
                                                })) : p("", !0)
                                              ]),
                                              _: 1
                                            }),
                                            s(h, { name: "slide-fade" }, {
                                              default: a(() => [
                                                o.value ? (r(), d(x, {
                                                  key: 0,
                                                  class: "px-0",
                                                  cols: "1"
                                                }, {
                                                  default: a(() => [
                                                    e("div", Le, [
                                                      n[17] || (n[17] = e("p", { class: "mb-0 amount_inc_change_item" }, "42.7%", -1)),
                                                      s(ne, {
                                                        size: "12",
                                                        class: "text-success"
                                                      })
                                                    ])
                                                  ]),
                                                  _: 1
                                                })) : p("", !0)
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
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        s(P, { class: "justify-end mt-2" }, {
                          default: a(() => [
                            s(x, { cols: "12" }, {
                              default: a(() => [
                                e("div", Ne, [
                                  e("div", Re, [
                                    n[18] || (n[18] = e("h5", { class: "mb-0 text-success font-weight-bold" }, "Net Profit", -1)),
                                    s(O, {
                                      density: "compact",
                                      class: "py-1 px-2 text-success",
                                      variant: "outlined"
                                    }, {
                                      default: a(() => [
                                        k(i(c(w).percent), 1)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  e("div", Ae, [
                                    o.value ? (r(), m("div", Oe, [
                                      e("span", Be, i(c(w).previousFormatted), 1)
                                    ])) : p("", !0),
                                    e("div", null, [
                                      e("span", Me, i(c(w).currentFormatted), 1)
                                    ]),
                                    o.value ? (r(), m("div", Ue, [
                                      e("span", {
                                        class: l(c(w).isIncrease ? "text-success" : "text-error")
                                      }, i(c(w).percent), 3),
                                      (r(), d($(u.$renderTablerIcon(c(w).isIncrease ? "arrow-up" : "arrow-down")), {
                                        size: "14",
                                        class: l(c(w).isIncrease ? "text-success" : "text-error")
                                      }, null, 8, ["class"]))
                                    ])) : p("", !0)
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    s(j, { class: "my-2" }),
                    s(G, { class: "account_note_section pt-1 px-4" }, {
                      default: a(() => n[19] || (n[19] = [
                        e("p", { class: "mb-0" }, "Notes:", -1),
                        e("ul", { class: "px-5" }, [
                          e("li", { class: "mb-1" }, "All figures are in Indian Rupee (INR) unless otherwise stated."),
                          e("li", { class: "mb-1" }, "This is an unaudited statement generated for internal review purposes."),
                          e("li", { class: "mb-1" }, "GST collected and paid are accounted for under Duties & Taxes and do not affect the profit calculation directly.")
                        ], -1)
                      ])),
                      _: 1,
                      __: [19]
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
}, Ze = /* @__PURE__ */ se(We, [["__scopeId", "data-v-222bae99"]]);
export {
  Ze as default
};
