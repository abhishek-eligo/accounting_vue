import { ref as c, computed as F, resolveComponent as b, createElementBlock as e, openBlock as t, createVNode as a, withCtx as s, createCommentVNode as V, createElementVNode as n, createTextVNode as P, Fragment as u, renderList as i, toDisplayString as m, normalizeClass as I } from "vue";
import { b as O, V as Z, a1 as L } from "./main-V1ksYwjH.js";
import { _ as U } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { V as x, a as y } from "./VRow-DeLLEu_l.js";
import { V as D, b as $ } from "./VCard-BbSjOW7e.js";
import { V as j } from "./VDataTable-CiZmSBL8.js";
const H = { class: "d-flex align-center gap-3" }, M = { key: 0 }, X = { class: "gst_report_title mb-2" }, Y = { class: "group-header-row" }, q = ["colspan"], J = {
  key: 2,
  class: "font-weight-bold bg-grey-lighten-3"
}, K = {
  __name: "index",
  setup(Q) {
    const _ = c(), R = c(["GSTR-1", "GSTR-2", "GSTR-3B"]), v = c(""), f = c(!1), C = c([
      {
        title: "GSTR-3B",
        summary_report: "Monthly Summary Return",
        table: [
          {
            title: "3.1 Details of Outward Supplies and inward supplies liable to reverse charge",
            headers: [
              { title: "Nature of Supplies", value: "nature_of_supplies", type: "string" },
              { title: "Taxable Value", value: "taxable_value", type: "string" },
              { title: "IGST", value: "igst", type: "string" },
              { title: "CGST", value: "cgst", type: "string" },
              { title: "SGST", value: "sgst", type: "string" }
            ],
            tableData: [
              {
                nature_of_supplies: "(a) Outward taxable supplies (other than zero rated, nil rated and exempted)",
                taxable_value: "₹5,85,000.50",
                igst: "₹54,900.09",
                cgst: "₹25,425.05",
                sgst: "₹25,425.05"
              },
              {
                nature_of_supplies: "(d) Inward supplies (liable to reverse charge)",
                taxable_value: "₹75,000.00",
                igst: "₹0.00",
                cgst: "₹6,750.00",
                sgst: "₹6,750.00"
              }
            ]
          },
          {
            title: "4. Eligible ITC",
            headers: [
              { title: "Details", value: "details", type: "string" },
              { title: "Amount (INR)", value: "amount_ind", type: "string", align: "end" }
            ],
            tableData: [
              {
                group: "(A) ITC Available (whether in full or part)",
                rows: [
                  { details: "(1) Import of goods", amount_ind: "₹12,000.00" },
                  { details: "(2) Import of services", amount_ind: "₹5,000.00" },
                  { details: "(3) Inward supplies liable to reverse charge", amount_ind: "₹13,500.00" },
                  { details: "(4) Inward supplies from ISD", amount_ind: "₹2,500.00" },
                  { details: "(5) All other ITC", amount_ind: "₹45,000.00" }
                ]
              }
            ],
            totalRow: {
              details: "Total ITC Available",
              amount_ind: "₹78,000.00",
              is_total: !0
            }
          }
        ]
      },
      {
        title: "GSTR-1",
        summary_report: "Outward Supplies Summary",
        table: [
          {
            title: "B2B Invoices",
            headers: [
              { title: "Invoice Number", value: "invoice_number", type: "string" },
              { title: "Customer GSTIN", value: "gstin", type: "string" },
              { title: "Invoice Amount", value: "amount", type: "string" }
            ],
            tableData: [
              {
                invoice_number: "INV-001",
                gstin: "29ABCDE1234F2Z5",
                amount: "₹1,50,000.00"
              },
              {
                invoice_number: "INV-002",
                gstin: "27ABCDE4567H9Z6",
                amount: "₹2,20,000.00"
              }
            ]
          }
        ]
      },
      {
        title: "GSTR-2",
        summary_report: "Inward Supplies Summary",
        table: [
          {
            title: "Purchases from Registered Dealers",
            headers: [
              { title: "Vendor Name", value: "vendor", type: "string" },
              { title: "Invoice Amount", value: "amount", type: "string" },
              { title: "GST Paid", value: "gst", type: "string" }
            ],
            tableData: [
              {
                vendor: "ABC Traders",
                amount: "₹55,000.00",
                gst: "₹9,900.00"
              },
              {
                vendor: "XYZ Distributors",
                amount: "₹75,000.00",
                gst: "₹13,500.00"
              }
            ]
          }
        ]
      }
    ]), T = F(() => C.value.find((d) => d.title === v.value));
    function G() {
      var d, l;
      v.value && ((d = _.value) != null && d[0]) && ((l = _.value) != null && l[1]) ? f.value = !0 : (f.value = !1, L.error("Please select report type and date range."));
    }
    return (d, l) => {
      const k = b("IconFileAnalytics"), A = b("IconCalendar"), N = b("v-date-input"), B = b("IconDownload");
      return t(), e("div", null, [
        a(x, null, {
          default: s(() => [
            a(y, { cols: "12" }, {
              default: s(() => [
                a(D, { class: "account_vcard_border shadow-none gst_reports_vcard pa-6" }, {
                  default: s(() => [
                    n("div", H, [
                      a(k, {
                        class: "account_icon_color",
                        size: "38",
                        style: { "margin-right": "6px" }
                      }),
                      l[2] || (l[2] = n("div", null, [
                        n("h5", { class: "gst_reports_title mb-0" }, "GST Report Generator"),
                        n("p", { class: "account_text_subtitle mb-0" }, "Select a report type and date range to generate your GST compliance reports.")
                      ], -1))
                    ]),
                    a(x, { class: "mt-3" }, {
                      default: s(() => [
                        a(y, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: s(() => [
                            l[3] || (l[3] = n("label", { class: "account_label mb-2" }, "Report Type", -1)),
                            a($, {
                              class: "accouting_field accouting_active_field",
                              variant: "outlined",
                              placeholder: "Select a report to generate",
                              items: R.value,
                              modelValue: v.value,
                              "onUpdate:modelValue": l[0] || (l[0] = (r) => v.value = r)
                            }, null, 8, ["items", "modelValue"])
                          ]),
                          _: 1,
                          __: [3]
                        }),
                        a(y, {
                          cols: "12",
                          md: "6"
                        }, {
                          default: s(() => [
                            l[4] || (l[4] = n("label", { class: "account_label mb-2 w-100" }, "Date Range", -1)),
                            a(N, {
                              class: "accounting_date_input w-100",
                              placeholder: "Pick a date range",
                              modelValue: _.value,
                              "onUpdate:modelValue": l[1] || (l[1] = (r) => _.value = r),
                              multiple: "range"
                            }, {
                              "prepend-inner": s(() => [
                                a(A, { size: "20" })
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1,
                          __: [4]
                        }),
                        a(y, {
                          cols: "12",
                          class: "d-flex justify-end"
                        }, {
                          default: s(() => [
                            a(O, {
                              class: "account_v_btn_primary",
                              rounded: "1",
                              onClick: G
                            }, {
                              prepend: s(() => [
                                a(B, { size: "18" })
                              ]),
                              default: s(() => [
                                l[5] || (l[5] = P(" Generate Reports ", -1))
                              ]),
                              _: 1,
                              __: [5]
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
                a(Z, { class: "my-5" }),
                f.value && T.value ? (t(), e("div", M, [
                  (t(!0), e(u, null, i(T.value.table, (r, z) => (t(), e("div", {
                    key: z,
                    class: "mb-6"
                  }, [
                    n("h4", X, m(r.title), 1),
                    a(D, { class: "account_vcard_border shadow-none gst_reports_table_vcard mt-3" }, {
                      default: s(() => [
                        a(j, {
                          headers: r.headers,
                          items: [],
                          class: "account_dynamic_table",
                          "hide-default-footer": ""
                        }, {
                          body: s(() => {
                            var w, S;
                            return [
                              (S = (w = r.tableData) == null ? void 0 : w[0]) != null && S.group ? (t(!0), e(u, { key: 0 }, i(r.tableData, (o, g) => (t(), e(u, { key: g }, [
                                n("tr", Y, [
                                  n("td", {
                                    colspan: r.headers.length,
                                    class: "text-medium-emphasis font-weight-bold"
                                  }, m(o.group), 9, q)
                                ]),
                                (t(!0), e(u, null, i(o.rows, (p, E) => (t(), e("tr", {
                                  key: `${g}-${E}`
                                }, [
                                  (t(!0), e(u, null, i(r.headers, (h) => (t(), e("td", {
                                    key: h.value
                                  }, [
                                    n("p", {
                                      class: I([h.align === "end" ? "text-end pr-4" : "pl-6", "mb-0"])
                                    }, m(p[h.value] || "-"), 3)
                                  ]))), 128))
                                ]))), 128))
                              ], 64))), 128)) : (t(!0), e(u, { key: 1 }, i(r.tableData, (o, g) => (t(), e("tr", { key: g }, [
                                (t(!0), e(u, null, i(r.headers, (p) => (t(), e("td", {
                                  key: p.value,
                                  class: I(p.align === "end" ? "text-end pr-4" : "pl-4")
                                }, m(o[p.value] || "-"), 3))), 128))
                              ]))), 128)),
                              r.totalRow ? (t(), e("tr", J, [
                                (t(!0), e(u, null, i(r.headers, (o) => (t(), e("td", {
                                  key: o.value,
                                  class: I(o.align === "end" ? "text-end pr-4" : "pl-4")
                                }, m(r.totalRow[o.value] || ""), 3))), 128))
                              ])) : V("", !0)
                            ];
                          }),
                          _: 2
                        }, 1032, ["headers"])
                      ]),
                      _: 2
                    }, 1024)
                  ]))), 128))
                ])) : V("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
}, se = /* @__PURE__ */ U(K, [["__scopeId", "data-v-fefc3e8f"]]);
export {
  se as default
};
