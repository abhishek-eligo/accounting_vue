import { ref as x, computed as b, resolveComponent as p, createElementBlock as m, openBlock as r, createVNode as a, withCtx as s, normalizeClass as c, createElementVNode as t, normalizeStyle as G, createBlock as l, createCommentVNode as _, toDisplayString as i, createTextVNode as T, Transition as h, resolveDynamicComponent as W, mergeProps as J } from "vue";
import { _ as ne } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { V as j, a as I } from "./VRow-DeLLEu_l.js";
import { V as F, a as X } from "./VCard-BbSjOW7e.js";
import { V as q } from "./VDataTable-CiZmSBL8.js";
import { d as K, V, h as Q, b as ae } from "./main-V1ksYwjH.js";
import { V as se } from "./VSwitch-CwhgJImZ.js";
const re = { class: "account_ui_vcard" }, oe = { class: "d-flex align-center gap-2" }, ce = { class: "py-1" }, le = { class: "account_vcard_menu_item" }, ie = { class: "account_vcard_menu_item" }, ue = { class: "account_vcard_menu_item" }, de = { class: "py-1" }, pe = { class: "account_vcard_menu_item" }, _e = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, me = {
  key: 0,
  class: "text-end"
}, ve = {
  key: 0,
  class: "text-end"
}, ge = {
  key: 0,
  class: "text-end"
}, he = { class: "d-flex justify-end align-center gap-2" }, ye = { class: "d-flex justify-end mb-3 px-4" }, fe = { style: { "min-width": "100%" } }, xe = { class: "font-weight-medium" }, be = { class: "text-end amount_inc_current_item" }, we = {
  key: 0,
  class: "text-end amount_inc_previous_item"
}, ke = {
  key: 0,
  class: "text-end d-flex align-center amount_inc_change_item justify-end gap-2"
}, Ce = {
  key: 0,
  class: "text-end"
}, Ie = {
  key: 1,
  class: "text-end"
}, Fe = {
  key: 0,
  class: "text-end"
}, Ve = { class: "d-flex justify-end align-center gap-2" }, De = { class: "d-flex justify-end mb-3 px-4" }, Ae = { style: { "min-width": "100%" } }, Le = { class: "font-weight-medium" }, ze = {
  key: 0,
  class: "text-end amount_inc_previous_item"
}, Se = {
  key: 0,
  class: "text-end d-flex align-center justify-end amount_inc_change_item gap-2"
}, Te = {
  class: "d-flex justify-space-between align-center px-4 py-3 rounded",
  style: { "background-color": "#e0f7fa", border: "1px solid #4dd0e1" }
}, Pe = { class: "account_assets_title" }, $e = {
  __name: "index",
  setup(je) {
    const B = x([
      {
        name: "Fixed Assets",
        percent: "65.42%",
        current: "₹8,00,000.00",
        previous: "₹7,50,000.00",
        change: "6.7%",
        type: "group",
        children: [
          {
            name: "Land & Building",
            percent: "40.85%",
            current: "₹5,00,000.00",
            previous: "₹4,80,000.00",
            change: "4.2%",
            type: "ledger"
          },
          {
            name: "Plant & Machinery",
            percent: "16.34%",
            current: "₹2,00,000.00",
            previous: "₹1,80,000.00",
            change: "11.1%",
            type: "ledger"
          },
          {
            name: "Furniture & Fixtures",
            percent: "4.89%",
            current: "₹60,000.00",
            previous: "₹55,000.00",
            change: "9.1%",
            type: "ledger"
          },
          {
            name: "Computers",
            percent: "3.26%",
            current: "₹40,000.00",
            previous: "₹35,000.00",
            change: "14.3%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Investments",
        percent: "9.78%",
        current: "₹1,20,000.00",
        previous: "₹1,10,000.00",
        change: "9.1%",
        type: "group",
        children: [
          {
            name: "Shares",
            percent: "6.52%",
            current: "₹80,000.00",
            previous: "₹75,000.00",
            change: "6.7%",
            type: "ledger"
          },
          {
            name: "Mutual Funds",
            percent: "3.26%",
            current: "₹40,000.00",
            previous: "₹35,000.00",
            change: "14.3%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Current Assets",
        percent: "18.37%",
        current: "₹2,25,000.00",
        previous: "₹2,10,000.00",
        change: "7.1%",
        type: "group",
        children: [
          {
            name: "Cash-in-Hand",
            percent: "4.07%",
            current: "₹50,000.00",
            previous: "₹45,000.00",
            change: "11.1%",
            type: "ledger"
          },
          {
            name: "Bank Accounts",
            percent: "10.20%",
            current: "₹1,25,000.00",
            previous: "₹1,10,000.00",
            change: "13.6%",
            type: "ledger"
          },
          {
            name: "Sundry Debtors",
            percent: "4.89%",
            current: "₹60,000.00",
            previous: "₹55,000.00",
            change: "9.1%",
            type: "group",
            children: [
              {
                name: "e.g., Customer A",
                percent: "3.26%",
                current: "₹40,000.00",
                previous: "₹35,000.00",
                change: "14.3%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Advance to Supplier",
            percent: "1.22%",
            current: "₹15,000.00",
            previous: "₹12,000.00",
            change: "25.0%",
            type: "ledger"
          },
          {
            name: "GST Input Credit",
            percent: "0.61%",
            current: "₹7,500.00",
            previous: "₹7,000.00",
            change: "7.1%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Loans & Advances (Asset)",
        percent: "4.89%",
        current: "₹60,000.00",
        previous: "₹55,000.00",
        change: "9.1%",
        type: "group",
        children: [
          {
            name: "Loans to Employees",
            percent: "3.26%",
            current: "₹40,000.00",
            previous: "₹35,000.00",
            change: "14.3%",
            type: "ledger"
          },
          {
            name: "Advance to Others",
            percent: "1.22%",
            current: "₹15,000.00",
            previous: "₹15,000.00",
            change: "0.0%",
            type: "ledger"
          },
          {
            name: "Security Deposits",
            percent: "0.41%",
            current: "₹5,000.00",
            previous: "₹5,000.00",
            change: "0.0%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Misc. Expenses (Asset)",
        percent: "1.63%",
        current: "₹20,000.00",
        previous: "₹15,000.00",
        change: "33.3%",
        type: "group",
        children: [
          {
            name: "Preliminary Expenses",
            percent: "1.22%",
            current: "₹15,000.00",
            previous: "₹12,000.00",
            change: "25.0%",
            type: "ledger"
          },
          {
            name: "Deferred Revenue Expenses",
            percent: "0.41%",
            current: "₹5,000.00",
            previous: "₹3,000.00",
            change: "66.7%",
            type: "ledger"
          }
        ]
      }
    ]), E = x([
      {
        name: "Capital Account",
        percent: "65.42%",
        current: "₹8,00,000.00",
        previous: "₹7,50,000.00",
        change: "6.7%",
        type: "group",
        children: [
          {
            name: "Capital",
            percent: "57.72%",
            current: "₹7,06,000.00",
            previous: "₹6,50,000.00",
            change: "8.6%",
            type: "ledger"
          },
          {
            name: "Partner's Capital",
            percent: "8.15%",
            current: "₹1,00,000.00",
            previous: "₹1,05,000.00",
            change: "-4.8%",
            type: "ledger"
          },
          {
            name: "Drawings",
            percent: "-0.41%",
            current: "₹(6,000.00)",
            previous: "₹(5,000.00)",
            change: "20.0%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Loans (Liability)",
        percent: "16.34%",
        current: "₹2,00,000.00",
        previous: "₹1,90,000.00",
        change: "5.3%",
        type: "group",
        children: [
          {
            name: "Secured Loans",
            percent: "14.70%",
            current: "₹1,80,000.00",
            previous: "₹1,70,000.00",
            change: "5.9%",
            type: "group",
            children: [
              {
                name: "e.g., Bank Term Loan",
                percent: "14.70%",
                current: "₹1,80,000.00",
                previous: "₹1,70,000.00",
                change: "5.9%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Unsecured Loans",
            percent: "1.63%",
            current: "₹20,000.00",
            previous: "₹20,000.00",
            change: "0.0%",
            type: "group",
            children: [
              {
                name: "e.g., Loan from Director",
                percent: "1.63%",
                current: "₹20,000.00",
                previous: "₹20,000.00",
                change: "0.0%",
                type: "ledger"
              },
              {
                name: "Bank ODCC",
                percent: "0.0%",
                current: "₹0.00",
                previous: "₹0.00",
                change: "-",
                type: "ledger"
              }
            ]
          }
        ]
      },
      {
        name: "Current Liabilities",
        percent: "12.24%",
        current: "₹1,50,000.00",
        previous: "₹1,40,000.00",
        change: "7.1%",
        type: "group",
        children: [
          {
            name: "Sundry Creditors",
            percent: "8.15%",
            current: "₹1,00,000.00",
            previous: "₹95,000.00",
            change: "5.3%",
            type: "group",
            children: [
              {
                name: "e.g., Vendor A",
                percent: "4.89%",
                current: "₹60,000.00",
                previous: "₹55,000.00",
                change: "9.1%",
                type: "ledger"
              }
            ]
          },
          {
            name: "Outstanding Expenses",
            percent: "2.44%",
            current: "₹30,000.00",
            previous: "₹25,000.00",
            change: "20.0%",
            type: "ledger"
          },
          {
            name: "Advance Received",
            percent: "1.63%",
            current: "₹20,000.00",
            previous: "₹20,000.00",
            change: "0.0%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Duties & Taxes",
        percent: "4.89%",
        current: "₹60,000.00",
        previous: "₹55,000.00",
        change: "9.1%",
        type: "group",
        children: [
          {
            name: "GST Payable",
            percent: "3.26%",
            current: "₹40,000.00",
            previous: "₹35,000.00",
            change: "14.3%",
            type: "ledger"
          },
          {
            name: "TDS Payable",
            percent: "1.22%",
            current: "₹15,000.00",
            previous: "₹15,000.00",
            change: "0.0%",
            type: "ledger"
          },
          {
            name: "Other Statutory Dues",
            percent: "0.41%",
            current: "₹5,000.00",
            previous: "₹5,000.00",
            change: "0.0%",
            type: "ledger"
          }
        ]
      },
      {
        name: "Provisions",
        percent: "1.22%",
        current: "₹15,000.00",
        previous: "₹12,000.00",
        change: "25.0%",
        type: "group",
        children: [
          {
            name: "Provision for Tax",
            percent: "0.81%",
            current: "₹10,000.00",
            previous: "₹8,000.00",
            change: "25.0%",
            type: "ledger"
          },
          {
            name: "Provision for Expenses",
            percent: "0.41%",
            current: "₹5,000.00",
            previous: "₹4,000.00",
            change: "25.0%",
            type: "ledger"
          }
        ]
      }
    ]), Y = b(() => [
      {
        title: "Assets",
        value: "name",
        width: "550px",
        align: "start",
        visible: !0
      },
      {
        title: o.value ? "Current" : "",
        value: "current",
        width: "",
        align: "end",
        visible: !0
      },
      {
        title: "Previous",
        value: "previous",
        width: "",
        align: "end",
        visible: o.value
      },
      {
        title: "Change",
        value: "change",
        width: "",
        align: "end",
        visible: o.value
      }
    ].filter((d) => d.visible)), Z = b(() => [
      {
        title: "Liabilities",
        value: "name",
        width: "550px",
        align: "start",
        visible: !0
      },
      {
        title: o.value ? "Current" : "",
        value: "current",
        width: "",
        align: "end",
        visible: !0
      },
      {
        title: "Previous",
        value: "previous",
        width: "",
        align: "end",
        visible: o.value
      },
      {
        title: "Change",
        value: "change",
        width: "",
        align: "end",
        visible: o.value
      }
    ].filter((d) => d.visible));
    function P(d, n = 0, f = "") {
      const g = [];
      for (const v of d)
        g.push({
          ...v,
          level: n,
          parentType: f
        }), v.children && v.children.length && g.push(...P(v.children, n + 1, v.type));
      return g;
    }
    const ee = b(() => P([...B.value])), te = b(
      () => P([...E.value])
    ), u = x(!1), o = x(!1), D = x(!1), N = (d) => {
      let n = {
        current: 0,
        previous: 0
      };
      function f(v) {
        var k, A, L;
        for (const y of v) {
          if (y.type === "ledger") {
            const z = parseFloat(((k = y.current) == null ? void 0 : k.replace(/[^0-9.-]+/g, "")) || 0), S = parseFloat(((A = y.previous) == null ? void 0 : A.replace(/[^0-9.-]+/g, "")) || 0);
            n.current += z, n.previous += S;
          }
          (L = y.children) != null && L.length && f(y.children);
        }
      }
      f(d);
      const g = n.previous === 0 ? 0 : (n.current - n.previous) / n.previous * 100;
      return {
        currentFormatted: `₹${n.current.toLocaleString("en-IN", {
          minimumFractionDigits: 2
        })}`,
        previousFormatted: `₹${n.previous.toLocaleString("en-IN", {
          minimumFractionDigits: 2
        })}`,
        changeFormatted: `${g.toFixed(1)}%`,
        isIncrease: g >= 0
      };
    }, w = b(() => N(B.value)), R = b(() => N(E.value)), $ = x(!1);
    function M(d) {
      $.value = !1, console.log("Download as", d);
    }
    return (d, n) => {
      const f = p("IconCalendar"), g = p("v-date-input"), v = p("IconSettings"), k = p("IconCheck"), A = p("IconDownload"), L = p("IconChevronRight"), y = p("IconPrinter"), z = p("IconFolder"), S = p("IconFileText"), U = p("IconStar"), O = p("IconArrowUp"), H = p("IconArrowDown");
      return r(), m("div", re, [
        a(j, null, {
          default: s(() => [
            a(I, { cols: "12" }, {
              default: s(() => [
                a(F, {
                  class: "account_vcard_border shadow-none",
                  title: "Balance Sheet",
                  subtitle: "As at Jul 09, 2025"
                }, {
                  append: s(() => [
                    t("div", oe, [
                      a(se, {
                        modelValue: D.value,
                        "onUpdate:modelValue": n[0] || (n[0] = (e) => D.value = e),
                        density: "compact",
                        inset: "",
                        label: "Show %",
                        class: "account_swtich_btn mr-4",
                        style: { "min-width": "121px" },
                        color: "primary",
                        "hide-details": ""
                      }, null, 8, ["modelValue"]),
                      a(g, {
                        class: "accounting_date_input",
                        "cancel-text": "Close",
                        style: { width: "300px" },
                        multiple: "range",
                        "ok-text": "Apply"
                      }, {
                        "prepend-inner": s(() => [
                          a(f, { size: "20" })
                        ]),
                        _: 1
                      }),
                      a(Q, {
                        location: "start",
                        transition: "slide-y-transition",
                        "offset-y": "",
                        "close-on-content-click": !1
                      }, {
                        activator: s(({ props: e }) => [
                          a(ae, J(e, {
                            class: "account_v_btn_outlined",
                            variant: "outlined",
                            size: "34",
                            rounded: "2"
                          }), {
                            default: s(() => [
                              a(v, { size: "22" })
                            ]),
                            _: 2
                          }, 1040)
                        ]),
                        default: s(() => [
                          a(F, { class: "account_vcard_menu account_vcard_border" }, {
                            default: s(() => [
                              t("div", ce, [
                                t("div", le, [
                                  t("div", {
                                    class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                    onClick: n[1] || (n[1] = (e) => u.value = !u.value)
                                  }, [
                                    u.value ? (r(), l(k, {
                                      key: 0,
                                      size: "16"
                                    })) : _("", !0),
                                    t("span", {
                                      class: c(u.value ? "" : "ml-6")
                                    }, "Full Width View", 2)
                                  ])
                                ]),
                                t("div", ie, [
                                  t("div", {
                                    class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                    onClick: n[2] || (n[2] = (e) => o.value = !o.value)
                                  }, [
                                    o.value ? (r(), l(k, {
                                      key: 0,
                                      size: "16"
                                    })) : _("", !0),
                                    t("span", {
                                      class: c(o.value ? "" : "ml-6")
                                    }, "Compare Periods", 2)
                                  ])
                                ]),
                                a(V, { class: "my-2" }),
                                t("div", ue, [
                                  a(Q, {
                                    modelValue: $.value,
                                    "onUpdate:modelValue": n[5] || (n[5] = (e) => $.value = e),
                                    location: "end",
                                    offset: "10",
                                    transition: "slide-y-transition",
                                    "close-on-content-click": !1
                                  }, {
                                    activator: s(({ props: e }) => [
                                      t("div", J(e, { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }), [
                                        a(A, { size: "16" }),
                                        n[6] || (n[6] = t("span", null, "Download", -1)),
                                        a(L, {
                                          size: "14",
                                          class: "ml-auto"
                                        })
                                      ], 16)
                                    ]),
                                    default: s(() => [
                                      a(F, {
                                        class: "account_vcard_menu account_vcard_border",
                                        width: "120"
                                      }, {
                                        default: s(() => [
                                          t("div", de, [
                                            t("div", {
                                              class: "account_vcard_menu_item field_list_title cursor-pointer px-3 py-1",
                                              onClick: n[3] || (n[3] = (e) => M("pdf"))
                                            }, n[7] || (n[7] = [
                                              t("span", null, "PDF", -1)
                                            ])),
                                            t("div", {
                                              class: "account_vcard_menu_item field_list_title cursor-pointer px-3 py-1",
                                              onClick: n[4] || (n[4] = (e) => M("xls"))
                                            }, n[8] || (n[8] = [
                                              t("span", null, "XLS", -1)
                                            ]))
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"])
                                ]),
                                t("div", pe, [
                                  t("div", _e, [
                                    a(y, { size: "16" }),
                                    n[9] || (n[9] = t("span", null, "Print", -1))
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
                  default: s(() => [
                    a(X, null, {
                      default: s(() => [
                        a(j, null, {
                          default: s(() => [
                            a(I, {
                              cols: 12,
                              lg: u.value ? 12 : 6,
                              md: u.value ? 12 : 6,
                              sm: u.value ? 12 : 6,
                              class: c(["col-transition", u.value ? "col-expand" : "col-shrink"])
                            }, {
                              default: s(() => [
                                a(F, {
                                  variant: "text",
                                  class: "h-100 account_vcard_border card-content-transition account_income_card shadow-none"
                                }, {
                                  default: s(() => [
                                    a(q, {
                                      headers: Y.value,
                                      items: ee.value,
                                      class: "account_income_table",
                                      "hide-default-footer": "",
                                      "item-value": "name"
                                    }, {
                                      item: s(({ item: e }) => {
                                        var C;
                                        return [
                                          t("tr", {
                                            class: c(
                                              e.type === "group" ? e.level === 0 ? "amount_income_item_title" : "amount_income_overlay_item_title" : ""
                                            )
                                          }, [
                                            t("td", null, [
                                              t("div", {
                                                class: "d-flex align-center gap-2",
                                                style: G({ paddingLeft: `${e.level * 24}px` })
                                              }, [
                                                e.type === "group" ? (r(), l(z, {
                                                  key: 0,
                                                  size: "16"
                                                })) : (r(), l(S, {
                                                  key: 1,
                                                  size: "16"
                                                })),
                                                t("p", {
                                                  class: c([
                                                    "mb-0 amount_income_group_item",
                                                    e.type === "ledger" ? "account_ledger_secondary" : (C = e.name) != null && C.toLowerCase().includes("liability") ? "account_group_error" : "account_group_primary"
                                                  ])
                                                }, i(e.name), 3),
                                                e.percent && D.value ? (r(), l(K, {
                                                  key: 2,
                                                  density: "compact",
                                                  variant: "tonal",
                                                  class: c([
                                                    "account_income_chip py-1 px-1",
                                                    e.type === "ledger" ? "account_chip_outline" : "account_chip_secondary"
                                                  ])
                                                }, {
                                                  default: s(() => [
                                                    T(" (" + i(e.percent) + ") ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : _("", !0)
                                              ], 4)
                                            ]),
                                            (r(), m("td", me, [
                                              t("p", {
                                                class: c([
                                                  "mb-0 amount_inc_current_item",
                                                  e.level === 0 && e.type === "group" ? "amount_inc_current_font_wght" : ""
                                                ])
                                              }, i(e.current), 3)
                                            ])),
                                            a(h, { name: "slide-fade" }, {
                                              default: s(() => [
                                                o.value ? (r(), m("td", ve, [
                                                  t("p", {
                                                    class: c([
                                                      "mb-0 amount_inc_previous_item",
                                                      e.level > 0 && e.type === "group" ? "amount_inc_previous_font_wght" : ""
                                                    ])
                                                  }, i(e.previous), 3)
                                                ])) : _("", !0)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            a(h, { name: "slide-fade" }, {
                                              default: s(() => [
                                                o.value ? (r(), m("td", ge, [
                                                  t("div", he, [
                                                    t("p", {
                                                      class: c(["mb-0 amount_inc_change_item", [
                                                        e.type === "ledger" ? "amount_inc_change_font_wght" : "",
                                                        parseFloat(e.change) > 0 ? "text-success" : parseFloat(e.change) < 0 ? "text-error" : "text-medium-emphasis"
                                                      ]])
                                                    }, i(e.change), 3),
                                                    e.new ? (r(), l(U, {
                                                      key: 0,
                                                      size: "12",
                                                      class: "text-info"
                                                    })) : (r(), l(W(d.$renderTablerIcon(parseFloat(e.change) < 0 ? "arrow-down" : "arrow-up")), {
                                                      key: 1,
                                                      size: "12",
                                                      class: c(parseFloat(e.change) < 0 ? "text-error" : "text-success")
                                                    }, null, 8, ["class"]))
                                                  ])
                                                ])) : _("", !0)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 2)
                                        ];
                                      }),
                                      _: 1
                                    }, 8, ["headers", "items"]),
                                    a(V, { class: "my-2" }),
                                    t("div", ye, [
                                      t("table", fe, [
                                        t("tr", xe, [
                                          n[10] || (n[10] = t("td", {
                                            style: { "min-width": "240px" },
                                            class: "text-start"
                                          }, " Total Assets ", -1)),
                                          t("td", be, i(w.value.currentFormatted), 1),
                                          a(h, { name: "slide-fade" }, {
                                            default: s(() => [
                                              o.value ? (r(), m("td", we, i(w.value.previousFormatted), 1)) : _("", !0)
                                            ]),
                                            _: 1
                                          }),
                                          a(h, { name: "slide-fade" }, {
                                            default: s(() => [
                                              o.value ? (r(), m("td", ke, [
                                                T(i(w.value.changeFormatted) + " ", 1),
                                                w.value.isIncrease ? (r(), l(O, {
                                                  key: 0,
                                                  size: "12",
                                                  class: "text-success"
                                                })) : (r(), l(H, {
                                                  key: 1,
                                                  size: "12",
                                                  class: "text-error"
                                                }))
                                              ])) : _("", !0)
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
                            }, 8, ["lg", "md", "sm", "class"]),
                            a(I, {
                              cols: 12,
                              lg: u.value ? 12 : 6,
                              md: u.value ? 12 : 6,
                              sm: u.value ? 12 : 6,
                              class: c(["col-transition", u.value ? "col-expand" : "col-shrink"])
                            }, {
                              default: s(() => [
                                a(F, {
                                  variant: "text",
                                  class: "h-100 account_vcard_border card-content-transition account_expense_card shadow-none"
                                }, {
                                  default: s(() => [
                                    a(q, {
                                      headers: Z.value,
                                      items: te.value,
                                      class: "account_income_table account_expense_table",
                                      "hide-default-footer": "",
                                      "item-value": "name"
                                    }, {
                                      item: s(({ item: e }) => {
                                        var C;
                                        return [
                                          t("tr", {
                                            class: c(
                                              e.type === "group" ? e.level === 0 ? "amount_income_item_title" : "amount_income_overlay_item_title" : ""
                                            )
                                          }, [
                                            t("td", null, [
                                              t("div", {
                                                class: "d-flex align-center gap-2",
                                                style: G({ paddingLeft: `${e.level * 24}px` })
                                              }, [
                                                e.type === "group" ? (r(), l(z, {
                                                  key: 0,
                                                  size: "16"
                                                })) : (r(), l(S, {
                                                  key: 1,
                                                  size: "16"
                                                })),
                                                t("p", {
                                                  class: c([
                                                    "mb-0 amount_income_group_item",
                                                    e.type === "ledger" ? "account_ledger_secondary" : (C = e.name) != null && C.toLowerCase().includes("asset") ? "account_group_success" : "account_group_error"
                                                  ])
                                                }, i(e.name), 3),
                                                e.percent && D.value ? (r(), l(K, {
                                                  key: 2,
                                                  density: "compact",
                                                  variant: "tonal",
                                                  class: c([
                                                    "account_income_chip py-1 px-1",
                                                    e.type === "ledger" ? "account_chip_outline" : "account_chip_secondary"
                                                  ])
                                                }, {
                                                  default: s(() => [
                                                    T(" (" + i(e.percent) + ") ", 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])) : _("", !0)
                                              ], 4)
                                            ]),
                                            (r(), m("td", Ce, [
                                              t("p", {
                                                class: c([
                                                  "mb-0 amount_inc_current_item",
                                                  e.level === 0 && e.type === "group" ? "amount_inc_current_font_wght" : ""
                                                ])
                                              }, i(e.current), 3)
                                            ])),
                                            o.value ? (r(), m("td", Ie, [
                                              a(h, { name: "slide-fade" }, {
                                                default: s(() => [
                                                  t("p", {
                                                    class: c([
                                                      "mb-0 amount_inc_previous_item",
                                                      e.level > 0 && e.type === "group" ? "amount_inc_previous_font_wght" : ""
                                                    ])
                                                  }, i(e.previous), 3)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : _("", !0),
                                            a(h, { name: "slide-fade" }, {
                                              default: s(() => [
                                                o.value ? (r(), m("td", Fe, [
                                                  t("div", Ve, [
                                                    t("p", {
                                                      class: c(["mb-0 amount_inc_change_item", [
                                                        e.type === "ledger" ? "amount_inc_change_font_wght" : "",
                                                        parseFloat(e.change) > 0 ? "text-success" : parseFloat(e.change) < 0 ? "text-error" : "text-medium-emphasis"
                                                      ]])
                                                    }, i(e.change), 3),
                                                    e.new ? (r(), l(U, {
                                                      key: 0,
                                                      size: "12",
                                                      class: "text-info"
                                                    })) : (r(), l(W(d.$renderTablerIcon(parseFloat(e.change) < 0 ? "arrow-down" : "arrow-up")), {
                                                      key: 1,
                                                      size: "12",
                                                      class: c(parseFloat(e.change) < 0 ? "text-error" : "text-success")
                                                    }, null, 8, ["class"]))
                                                  ])
                                                ])) : _("", !0)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ], 2)
                                        ];
                                      }),
                                      _: 1
                                    }, 8, ["headers", "items"]),
                                    a(V, { class: "my-2" }),
                                    t("div", De, [
                                      t("table", Ae, [
                                        t("tr", Le, [
                                          n[11] || (n[11] = t("td", {
                                            style: { "min-width": "240px" },
                                            class: "text-start"
                                          }, " Total Liabilities ", -1)),
                                          n[12] || (n[12] = t("td", { class: "text-end amount_inc_current_item" }, " ₹12,37,500.00 ", -1)),
                                          a(h, { name: "slide-fade" }, {
                                            default: s(() => [
                                              o.value ? (r(), m("td", ze, " ₹11,39,000.00 ")) : _("", !0)
                                            ]),
                                            _: 1
                                          }),
                                          a(h, { name: "slide-fade" }, {
                                            default: s(() => [
                                              o.value ? (r(), m("td", Se, [
                                                T(i(R.value.changeFormatted) + " ", 1),
                                                R.value.isIncrease ? (r(), l(O, {
                                                  key: 0,
                                                  size: "12",
                                                  class: "text-success"
                                                })) : (r(), l(H, {
                                                  key: 1,
                                                  size: "12",
                                                  class: "text-error"
                                                }))
                                              ])) : _("", !0)
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
                            }, 8, ["lg", "md", "sm", "class"])
                          ]),
                          _: 1
                        }),
                        a(V, { class: "mt-3 mb-0" }),
                        a(j, { class: "justify-end mt-2" }, {
                          default: s(() => [
                            a(I, {
                              cols: "12",
                              lg: "6",
                              md: "6"
                            }, {
                              default: s(() => [
                                t("div", Te, [
                                  n[13] || (n[13] = t("div", { class: "d-flex align-center gap-2" }, [
                                    t("h5", { class: "mb-0 account_assets_title" }, "Total Assets")
                                  ], -1)),
                                  t("div", null, [
                                    t("span", Pe, i(w.value.currentFormatted), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            a(I, {
                              cols: "12",
                              lg: "6",
                              md: "6"
                            }, {
                              default: s(() => n[14] || (n[14] = [
                                t("div", {
                                  class: "d-flex justify-space-between align-center px-4 py-3 rounded",
                                  style: { "background-color": "#ffebee", border: "1px solid #ef5350" }
                                }, [
                                  t("div", null, [
                                    t("h5", { class: "mb-0 account_liabilities_title" }, " Total Liabilities ")
                                  ]),
                                  t("div", null, [
                                    t("span", { class: "account_liabilities_title" }, "₹12,37,500.00")
                                  ])
                                ], -1)
                              ])),
                              _: 1,
                              __: [14]
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    a(V),
                    a(X, { class: "account_note_section pt-1 px-4" }, {
                      default: s(() => n[15] || (n[15] = [
                        t("p", { class: "mb-0" }, "Notes:", -1),
                        t("ul", { class: "px-5" }, [
                          t("li", { class: "mb-1" }, " All figures are in Indian Rupees (INR) unless otherwise stated. "),
                          t("li", { class: "mb-1" }, " This is an unaudited statement generated for internal review purposes. ")
                        ], -1)
                      ])),
                      _: 1,
                      __: [15]
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
}, He = /* @__PURE__ */ ne($e, [["__scopeId", "data-v-e5a45814"]]);
export {
  He as default
};
