import { _ as Ce } from "./DynamicDataTable-s1EmKkRe.js";
import { ref as v, computed as B, resolveComponent as p, createElementBlock as y, openBlock as n, createVNode as t, withCtx as a, createBlock as u, createCommentVNode as c, createElementVNode as l, createTextVNode as g, normalizeClass as S, Fragment as ae, renderList as le, toDisplayString as h, resolveDynamicComponent as ke, onMounted as Ve, withModifiers as Ie, mergeProps as De } from "vue";
import { V as A, a as ne, b as f, c as Ne, d as xe, e as b, f as Ae, g as Te, h as Pe } from "./main-u1Mo8sLp.js";
import { V as C, a as d } from "./VRow-Bnh7mzWV.js";
import { V as M, a as G, b as H, c as Se } from "./VCard-BuMrnEL1.js";
import { V as Be } from "./VDataTable-C7AYZo_S.js";
import { V as he } from "./VDialog-CTlIykqf.js";
import { V as ie } from "./VTextarea-Dc6MPKZX.js";
import { _ as Fe } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { V as ue } from "./VCheckbox-DqY53STU.js";
const Me = { class: "d-flex align-center gap-2" }, we = { class: "d-flex align-center gap-2" }, Le = { class: "d-flex align-center gap-2" }, Ue = { class: "pa-4" }, ze = {
  __name: "AccountCustomerPortfolio",
  setup(de) {
    const k = v(!1), V = v(!1), I = v("in"), D = v("ledger"), j = B(
      () => I.value === "in" ? "Add Payment In from Nexus Group" : "Record Payment Out for Nexus Group"
    ), x = B(
      () => I.value === "in" ? "Record a payment received from this customer. This will be an on-account payment." : "Record a payment made to this customer or on their behalf."
    ), m = B(() => D.value === "ledger" ? [
      { title: "TOTAL DEBITS", value: "₹1,22,249.00", icon: "IconTrendingUp" },
      { title: "TOTAL CREDITS", value: "₹1,13,808.00", icon: "IconCoin" },
      { title: "CLOSING BALANCE", value: "₹8,441.00", extra: "Dr", icon: "IconScale" }
    ] : [
      { title: "TOTAL BILLED", value: "₹17,98,275.00", icon: "IconFileText" },
      { title: "TOTAL RECEIVED", value: "₹5,43,419.24", icon: "IconCreditCard" },
      { title: "TOTAL DUE", value: "₹12,54,855.76", icon: "IconFileAlert" }
    ]), W = B(() => D.value === "ledger" ? [
      { title: "Date", value: "date" },
      { title: "Description", value: "description" },
      { title: "Ref #", value: "ref" },
      { title: "Debit", value: "debit" },
      { title: "Credit", value: "credit" },
      { title: "Balance", value: "balance" }
    ] : [
      { title: "Invoice #", value: "invoice" },
      { title: "Date", value: "date" },
      { title: "Due Date", value: "dueDate" },
      { title: "Amount", value: "amount" },
      { title: "Amount Due", value: "due" },
      { title: "Status", value: "status" }
    ]), N = B(() => D.value === "ledger" ? [
      { date: "09-Jan-25", description: "Payment received for invoice", ref: "INV-2024-109", debit: "-", credit: "₹9,172.00", balance: "₹9,172.00 Cr" },
      { date: "11-Jan-25", description: "Payment received for invoice", ref: "INV-2024-114", debit: "-", credit: "₹3,411.00", balance: "₹12,583.00 Cr" },
      { date: "19-Jan-25", description: "Payment received for invoice", ref: "INV-2024-108", debit: "-", credit: "₹1,855.00", balance: "₹14,438.00 Cr" },
      { date: "19-Jan-25", description: "Sale of goods on credit", ref: "INV-2024-117", debit: "₹8,866.00", credit: "-", balance: "₹5,572.00 Cr" },
      { date: "26-Jan-25", description: "Sale of goods on credit", ref: "INV-2024-118", debit: "₹6,400.00", credit: "-", balance: "₹828.00 Dr" },
      { date: "01-Feb-25", description: "Payment received for invoice", ref: "INV-2024-122", debit: "-", credit: "₹14,871.00", balance: "₹14,043.00 Cr" },
      { date: "03-Feb-25", description: "Sale of goods on credit", ref: "INV-2024-125", debit: "₹6,344.00", credit: "-", balance: "₹7,699.00 Cr" },
      { date: "11-Feb-25", description: "Sale of goods on credit", ref: "INV-2024-111", debit: "₹12,746.00", credit: "-", balance: "₹5,047.00 Dr" }
    ] : [
      { invoice: "INV-1010", date: "27-May-2025", dueDate: "12-May-2025", amount: "₹2,08,750.00", due: "₹0.00", status: "Paid" },
      { invoice: "INV-1015", date: "02-Jul-2025", dueDate: "01-Aug-2025", amount: "₹3,34,000.00", due: "₹3,34,000.00", status: "Outstanding" },
      { invoice: "INV-1018", date: "06-Jul-2025", dueDate: "05-Aug-2025", amount: "₹1,67,000.00", due: "₹1,46,065.00", status: "Outstanding" },
      { invoice: "INV-1020", date: "20-Jun-2025", dueDate: "05-Jun-2025", amount: "₹4,500.00", due: "₹1,619.66", status: "Overdue" },
      { invoice: "INV-1032", date: "19-Jun-2025", dueDate: "19-Jul-2025", amount: "₹2,08,725.00", due: "₹2,08,725.00", status: "Outstanding" },
      { invoice: "INV-1039", date: "18-Jun-2025", dueDate: "18-Jul-2025", amount: "₹1,95,112.50", due: "₹35,930.42", status: "Partially Paid" },
      { invoice: "INV-1041", date: "22-May-2025", dueDate: "21-Jun-2025", amount: "₹12,250.00", due: "₹0.00", status: "Paid" },
      { invoice: "INV-1043", date: "17-Jun-2025", dueDate: "02-Jun-2025", amount: "₹5,21,812.50", due: "₹3,61,455.68", status: "Overdue" },
      { invoice: "INV-1044", date: "25-Jun-2025", dueDate: "25-Jul-2025", amount: "₹1,46,125.00", due: "₹1,46,125.00", status: "Outstanding" }
    ]);
    return (oe, s) => {
      const O = p("IconCirclePlus"), K = p("IconChevronUp"), w = p("IconChevronDown"), E = p("IconFileText"), Z = p("IconPhone"), L = p("IconMapPin"), R = p("IconSearch"), F = p("IconCalendar"), J = p("v-date-input"), q = p("IconDownload");
      return n(), y("div", null, [
        t(C, null, {
          default: a(() => [
            t(d, { cols: "12" }, {
              default: a(() => [
                t(M, {
                  class: "account_vcard_border account_ui_vcard pa-2",
                  title: "Jessica Brown",
                  subtitle: "Nexus Group"
                }, {
                  prepend: a(() => [
                    t(Ne, {
                      size: "64",
                      rounded: "circle",
                      variant: "outlined"
                    }, {
                      default: a(() => s[8] || (s[8] = [
                        g(" JB ", -1)
                      ])),
                      _: 1,
                      __: [8]
                    })
                  ]),
                  append: a(() => [
                    l("div", Me, [
                      t(f, {
                        onClick: s[0] || (s[0] = (_) => {
                          I.value = "in", V.value = !0;
                        }),
                        class: "account_v_btn_primary"
                      }, {
                        prepend: a(() => [
                          t(O, { size: "20" })
                        ]),
                        default: a(() => [
                          s[9] || (s[9] = g(" Payment In ", -1))
                        ]),
                        _: 1,
                        __: [9]
                      }),
                      t(f, {
                        onClick: s[1] || (s[1] = (_) => {
                          I.value = "out", V.value = !0;
                        }),
                        class: "account_v_btn_error"
                      }, {
                        prepend: a(() => [
                          t(O, { size: "20" })
                        ]),
                        default: a(() => [
                          s[10] || (s[10] = g(" Payment Out ", -1))
                        ]),
                        _: 1,
                        __: [10]
                      }),
                      t(f, {
                        onClick: s[2] || (s[2] = (_) => k.value = !k.value),
                        variant: "text",
                        size: "x-small",
                        rounded: "",
                        class: "account_vcard_close_btn"
                      }, {
                        prepend: a(() => [
                          k.value ? (n(), u(K, {
                            key: 0,
                            size: "15"
                          })) : (n(), u(w, {
                            key: 1,
                            size: "15"
                          }))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: a(() => [
                    t(G, { class: "mt-2" }, {
                      default: a(() => [
                        t(C, null, {
                          default: a(() => [
                            t(d, {
                              class: "d-flex align-center gap-2",
                              cols: "12",
                              lg: "4",
                              md: "4"
                            }, {
                              default: a(() => [
                                t(E, {
                                  class: "account_info_icon",
                                  size: "20"
                                }),
                                s[11] || (s[11] = l("p", { class: "mb-0 account_info_text" }, "GSTIN: 27ABCDE1000F1Z1", -1))
                              ]),
                              _: 1,
                              __: [11]
                            }),
                            t(d, {
                              class: "d-flex align-center gap-2",
                              cols: "12",
                              lg: "4",
                              md: "4"
                            }, {
                              default: a(() => [
                                t(Z, {
                                  class: "account_info_icon",
                                  size: "20"
                                }),
                                s[12] || (s[12] = l("p", { class: "mb-0 account_info_text" }, "(628) 527-7859", -1))
                              ]),
                              _: 1,
                              __: [12]
                            }),
                            t(d, {
                              class: "d-flex align-center gap-2",
                              cols: "12",
                              lg: "4",
                              md: "4"
                            }, {
                              default: a(() => [
                                t(L, {
                                  class: "account_info_icon",
                                  size: "20"
                                }),
                                s[13] || (s[13] = l("p", { class: "mb-0 account_info_text" }, "Jaipur, Maharashtra", -1))
                              ]),
                              _: 1,
                              __: [13]
                            })
                          ]),
                          _: 1
                        }),
                        k.value ? (n(), u(A, {
                          key: 0,
                          class: "my-3"
                        })) : c("", !0),
                        t(ne, null, {
                          default: a(() => [
                            k.value ? (n(), u(C, { key: 0 }, {
                              default: a(() => [
                                t(d, { cols: "12" }, {
                                  default: a(() => s[14] || (s[14] = [
                                    l("div", { class: "mb-2" }, [
                                      l("p", { class: "mb-0 account_info_label" }, "Full Address"),
                                      l("p", { class: "mb-0 account_info_subLabel" }, "537 River Rd, Jaipur, Maharashtra - 37679")
                                    ], -1),
                                    l("div", null, [
                                      l("p", { class: "mb-0 account_info_label" }, "Bio"),
                                      l("p", {
                                        style: { "font-style": "italic" },
                                        class: "mb-0 account_info_subLabel"
                                      }, "Experienced in client relations and project management, always aiming for excellence.")
                                    ], -1)
                                  ])),
                                  _: 1,
                                  __: [14]
                                })
                              ]),
                              _: 1
                            })) : c("", !0)
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
            t(d, { cols: "12" }, {
              default: a(() => [
                l("div", we, [
                  t(f, {
                    onClick: s[3] || (s[3] = (_) => D.value = "ledger"),
                    size: "small",
                    class: S(D.value === "ledger" ? "account_v_btn_primary" : "account_v_btn_outlined")
                  }, {
                    default: a(() => s[15] || (s[15] = [
                      g("Ledger", -1)
                    ])),
                    _: 1,
                    __: [15]
                  }, 8, ["class"]),
                  t(f, {
                    onClick: s[4] || (s[4] = (_) => D.value = "invoices"),
                    size: "small",
                    class: S(D.value === "invoices" ? "account_v_btn_primary" : "account_v_btn_outlined")
                  }, {
                    default: a(() => s[16] || (s[16] = [
                      g("Invoices", -1)
                    ])),
                    _: 1,
                    __: [16]
                  }, 8, ["class"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        t(C, null, {
          default: a(() => [
            (n(!0), y(ae, null, le(m.value, (_, i) => (n(), u(d, {
              key: i,
              cols: "12",
              lg: "4",
              md: "4"
            }, {
              default: a(() => [
                t(M, {
                  subtitle: _.title,
                  class: S(["account_widget_vcard account_vcard_border", i === 0 ? "account_v_card_dark" : ""])
                }, {
                  append: a(() => [
                    (n(), u(ke(_.icon), {
                      size: "16",
                      class: S(i === 0 ? "account_v_card_dark_icon" : "")
                    }, null, 8, ["class"]))
                  ]),
                  default: a(() => [
                    t(G, null, {
                      default: a(() => [
                        l("h5", {
                          class: S([i === 0 ? "account_text_white" : "account_text_dark", "account_texth5 mb-0 font-weight-bold"])
                        }, h(_.value) + " " + h(_.extra || ""), 3)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["subtitle", "class"])
              ]),
              _: 2
            }, 1024))), 128))
          ]),
          _: 1
        }),
        t(C, null, {
          default: a(() => [
            t(d, { cols: "12" }, {
              default: a(() => [
                t(M, {
                  class: "account_ui_vcard account_vcard_border pa-1",
                  title: "Customer Ledger",
                  subtitle: "A detailed view of all transactions."
                }, {
                  append: a(() => [
                    l("div", Le, [
                      t(b, {
                        style: { "min-inline-size": "250px" },
                        class: "accouting_field accouting_active_field",
                        variant: "outlined",
                        density: "compact",
                        placeholder: "Filter description..."
                      }, {
                        "prepend-inner": a(() => [
                          t(R, { size: "20" })
                        ]),
                        _: 1
                      }),
                      t(J, {
                        class: "accounting_date_input",
                        placeholder: "Select date range",
                        style: { "min-inline-size": "300px" },
                        "cancel-text": "Close",
                        "ok-text": "Apply",
                        multiple: "range"
                      }, {
                        "prepend-inner": a(() => [
                          t(F, { size: "20" })
                        ]),
                        _: 1
                      }),
                      t(f, { class: "account_v_btn_outlined" }, {
                        prepend: a(() => [
                          t(q, { size: "20" })
                        ]),
                        default: a(() => [
                          s[17] || (s[17] = g(" Export ", -1))
                        ]),
                        _: 1,
                        __: [17]
                      })
                    ])
                  ]),
                  default: a(() => [
                    l("div", Ue, [
                      t(Be, {
                        class: "account_dynamic_table",
                        headers: W.value,
                        items: N.value
                      }, {
                        "item.status": a(({ item: _ }) => [
                          t(xe, {
                            class: S([{
                              account_chip_primary: _.status === "Paid",
                              account_chip_secondary: _.status === "Partially Paid",
                              account_chip_outline: _.status === "Outstanding",
                              account_chip_error: _.status === "Overdue"
                            }, "account_table_chip"]),
                            size: "small",
                            text: _.status
                          }, null, 8, ["class", "text"])
                        ]),
                        _: 1
                      }, 8, ["headers", "items"])
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
        t(he, {
          modelValue: V.value,
          "onUpdate:modelValue": s[7] || (s[7] = (_) => V.value = _),
          "max-width": "600"
        }, {
          default: a(() => [
            t(M, { class: "pa-2 account_vcard_border shadow-none" }, {
              title: a(() => [
                g(h(j.value), 1)
              ]),
              subtitle: a(() => [
                g(h(x.value), 1)
              ]),
              append: a(() => [
                t(f, {
                  icon: "mdi-close",
                  variant: "text",
                  size: "x-small",
                  onClick: s[5] || (s[5] = (_) => V.value = !1),
                  class: "account_vcard_close_btn"
                })
              ]),
              default: a(() => [
                t(G, null, {
                  default: a(() => [
                    t(C, null, {
                      default: a(() => [
                        t(d, { cols: "12" }, {
                          default: a(() => [
                            s[18] || (s[18] = l("label", { class: "account_label mb-2" }, "Amount", -1)),
                            t(b, {
                              class: "accouting_field accouting_active_field",
                              type: "number",
                              variant: "outlined",
                              density: "compact",
                              placeholder: "Enter amount"
                            })
                          ]),
                          _: 1,
                          __: [18]
                        }),
                        t(d, { cols: "12" }, {
                          default: a(() => [
                            s[19] || (s[19] = l("label", { class: "account_label mb-2" }, "Payment Mode", -1)),
                            t(H, {
                              class: "accouting_field accouting_active_field",
                              variant: "outlined",
                              density: "compact",
                              items: ["Bank Transfer", "Cash", "UPI", "Cheque"],
                              placeholder: "Select mode"
                            })
                          ]),
                          _: 1,
                          __: [19]
                        }),
                        I.value === "out" ? (n(), u(d, {
                          key: 0,
                          cols: "12"
                        }, {
                          default: a(() => [
                            s[20] || (s[20] = l("label", { class: "account_label mb-2" }, "Reason", -1)),
                            t(ie, {
                              class: "accounting_v_textarea",
                              variant: "outlined",
                              density: "compact",
                              placeholder: "Reason for payment out (e.g., refund, advance settlement)",
                              "auto-grow": ""
                            })
                          ]),
                          _: 1,
                          __: [20]
                        })) : c("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                t(Se, { class: "justify-end" }, {
                  default: a(() => [
                    t(f, {
                      class: "account_v_btn_outlined",
                      onClick: s[6] || (s[6] = (_) => V.value = !1)
                    }, {
                      default: a(() => s[21] || (s[21] = [
                        g("Cancel", -1)
                      ])),
                      _: 1,
                      __: [21]
                    }),
                    t(f, { class: "account_v_btn_primary" }, {
                      default: a(() => s[22] || (s[22] = [
                        g("Save Payment", -1)
                      ])),
                      _: 1,
                      __: [22]
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
      ]);
    };
  }
}, Oe = { class: "account_customers_list" }, Ee = { key: 0 }, Re = { class: "d-flex align-center gap-2 mb-4" }, Je = { key: 0 }, $e = { class: "account_ui_vcard" }, Ge = { class: "d-flex align-center gap-2" }, He = { class: "account_vcard_menu_items py-1" }, je = ["onClick"], We = { class: "font-weight-bold" }, Ke = ["onClick"], Ze = {
  key: 0,
  class: "account_primary_color"
}, qe = { class: "custom_option align-center" }, Xe = { class: "d-flex align-center justify-end mt-4" }, Ye = {
  __name: "index",
  setup(de) {
    const k = v([
      // Core Information
      { section: "Core Information", label: "GSTIN/UIN", key: "gstin", visible: !0 },
      { section: "Core Information", label: "Name", key: "name", visible: !0 },
      { section: "Core Information", label: "Mobile", key: "mobile", visible: !0 },
      { section: "Core Information", label: "Opening Balance", key: "openingBalance", visible: !0 },
      // Contact Details
      { section: "Contact Details", label: "Mailing Name", key: "mailingName", visible: !0 },
      { section: "Contact Details", label: "Email", key: "email", visible: !0 },
      { section: "Contact Details", label: "Address", key: "address", visible: !0 },
      { section: "Contact Details", label: "State", key: "state", visible: !0 },
      { section: "Contact Details", label: "Pincode", key: "pincode", visible: !0 },
      { section: "Contact Details", label: "Country", key: "country", visible: !0 },
      // Tax & Compliance
      { section: "Tax & Compliance", label: "PAN", key: "pan", visible: !0 },
      { section: "Tax & Compliance", label: "Tax Registration Number", key: "taxReg", visible: !0 },
      { section: "Tax & Compliance", label: "TDS Applicable", key: "tds", visible: !0 },
      // Financial Controls
      { section: "Financial Controls", label: "Credit Limit", key: "creditLimit", visible: !0 },
      { section: "Financial Controls", label: "Credit Period (Days)", key: "creditPeriod", visible: !0 },
      { section: "Financial Controls", label: "Maintain Bill-wise Details", key: "billWise", visible: !0 },
      // Banking Details
      { section: "Banking Details", label: "Bank Name", key: "bankName", visible: !0 },
      { section: "Banking Details", label: "Account Number", key: "accountNumber", visible: !0 },
      { section: "Banking Details", label: "IFSC Code", key: "ifscCode", visible: !0 },
      // Additional Fields
      { section: "Additional Fields", label: "Additional Country 1", key: "addCountry1", visible: !0 },
      { section: "Additional Fields", label: "Place of Supply", key: "state", visible: !0 },
      { section: "Additional Fields", label: "Ship-to Address", key: "shipToAddress", visible: !0 }
    ]), V = v([
      { title: "Andhra Pradesh", value: "Andhra Pradesh" },
      { title: "Arunachal Pradesh", value: "Arunachal Pradesh" },
      { title: "Assam", value: "Assam" },
      { title: "Bihar", value: "Bihar" },
      { title: "Chhattisgarh", value: "Chhattisgarh" },
      { title: "Goa", value: "Goa" },
      { title: "Gujarat", value: "Gujarat" },
      { title: "Haryana", value: "Haryana" },
      { title: "Himachal Pradesh", value: "Himachal Pradesh" },
      { title: "Jharkhand", value: "Jharkhand" },
      { title: "Karnataka", value: "Karnataka" },
      { title: "Kerala", value: "Kerala" },
      { title: "Madhya Pradesh", value: "Madhya Pradesh" },
      { title: "Maharashtra", value: "Maharashtra" },
      { title: "Manipur", value: "Manipur" },
      { title: "Meghalaya", value: "Meghalaya" },
      { title: "Mizoram", value: "Mizoram" },
      { title: "Nagaland", value: "Nagaland" },
      { title: "Odisha", value: "Odisha" },
      { title: "Punjab", value: "Punjab" },
      { title: "Rajasthan", value: "Rajasthan" },
      { title: "Sikkim", value: "Sikkim" },
      { title: "Tamil Nadu", value: "Tamil Nadu" },
      { title: "Telangana", value: "Telangana" },
      { title: "Tripura", value: "Tripura" },
      { title: "Uttar Pradesh", value: "Uttar Pradesh" },
      { title: "Uttarakhand", value: "Uttarakhand" },
      { title: "West Bengal", value: "West Bengal" },
      { title: "Andaman and Nicobar Islands", value: "Andaman and Nicobar Islands" },
      { title: "Chandigarh", value: "Chandigarh" },
      { title: "Dadra and Nagar Haveli and Daman and Diu", value: "Dadra and Nagar Haveli and Daman and Diu" },
      { title: "Delhi", value: "Delhi" },
      { title: "Jammu and Kashmir", value: "Jammu and Kashmir" },
      { title: "Ladakh", value: "Ladakh" },
      { title: "Lakshadweep", value: "Lakshadweep" },
      { title: "Puducherry", value: "Puducherry" }
    ]), I = B(() => {
      const r = {};
      return k.value.forEach((e) => {
        r[e.section] || (r[e.section] = []), r[e.section].push(e);
      }), r;
    }), D = (r) => I.value[r].every((T) => T.visible), j = (r) => {
      const e = I.value[r], T = e.every((z) => z.visible);
      e.forEach((z) => {
        z.visible = !T;
      });
    }, x = (r) => k.value.some((e) => e.section === r && e.visible), m = (r) => {
      var e;
      return (e = k.value.find((T) => T.key === r)) == null ? void 0 : e.visible;
    }, W = v([
      { title: "Customer Name", align: "start", sortable: !1, value: "customerName", visible: !0 },
      { title: "Customer Type", value: "customerType", visible: !0 },
      { title: "Total Orders", value: "totalOrders", visible: !0 },
      { title: "Last Order Date", value: "lastOrderDate", visible: !0 },
      { title: "Status", value: "status", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]), N = v(Array.from({ length: 100 }, (r, e) => ({
      customerName: `Customer ${e + 1}`,
      customerEmail: `customer${e + 1}@test.com`,
      customerType: ["Individual", "Business"][Math.floor(Math.random() * 2)],
      totalOrders: Math.floor(Math.random() * 20),
      lastOrderDate: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
      status: ["Active", "Pending", "Inactive"][Math.floor(Math.random() * 3)]
    }))), oe = v([
      { title: "Status", checked: !1 },
      { title: "Customer Type", checked: !1 },
      { title: "Last Order From", checked: !1 },
      { title: "Last Order To", checked: !1 }
    ]), s = v([
      { title: "Active", value: "Active" },
      { title: "Pending", value: "Pending" },
      { title: "Inactive", value: "Inactive" }
    ]), O = v([
      { title: "Individual", value: "Individual" },
      { title: "Business", value: "Business" }
    ]), K = B(() => ({
      totalRecords: N.value.length,
      avgSale: N.value.reduce((r, e) => r + e.totalOrders * 100, 0) / N.value.length,
      top10AvgSale: N.value.sort((r, e) => e.totalOrders - r.totalOrders).slice(0, Math.ceil(N.value.length * 0.1)).reduce((r, e) => r + e.totalOrders * 100, 0) / Math.ceil(N.value.length * 0.1),
      avgRating: 4.2
    })), w = v(!1), E = () => {
      w.value = !w.value;
    }, Z = v([
      { title: "Credit", value: "credit" },
      { title: "Debit", value: "debit" }
    ]), L = v("credit"), R = v(0), F = v(!1), J = v(null), q = (r) => {
      J.value = r, F.value = !0;
    }, _ = () => {
      F.value = !1, J.value = null;
    }, i = v({
      gstin: "",
      name: "",
      mobile: "",
      openingBalance: "",
      mailingName: "",
      email: "",
      address: "",
      state: "",
      pincode: "",
      country: "",
      pan: "",
      taxReg: "",
      tds: !1,
      creditLimit: "",
      creditPeriod: "",
      billWise: !1,
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      addCountry1: "",
      shipToAddress: ""
    }), X = {
      gstin: "02ABCDE1234F1Z5",
      name: "Dummy Company Ltd",
      mobile: "9876543210",
      openingBalance: "1000",
      mailingName: "Dummy Mailing",
      email: "dummy@example.com",
      address: "123 Dummy Street, Dummy City",
      state: "Delhi",
      pincode: "110001",
      country: "India",
      pan: "ABCDE1234F",
      taxReg: "123456789",
      tds: !0,
      creditLimit: "50000",
      creditPeriod: "30",
      billWise: !0,
      bankName: "Dummy Bank",
      accountNumber: "123456789012",
      ifscCode: "DUMY0000001",
      addCountry1: "India",
      shipToAddress: "456 Ship Street, Dummy City",
      selectedBalanceType: "credit"
    }, Y = v("02ABCDE1234F1Z5"), Q = v(!1), ee = v(!1), U = v(!0), te = v(!1), ce = () => {
      i.value.gstin && (Q.value = !0, setTimeout(() => {
        Q.value = !1, i.value.gstin === "02ABCDE1234F1Z5" ? (ee.value = !0, Object.keys(X).forEach((r) => {
          r !== "gstin" && r !== "selectedBalanceType" && (i.value[r] = X[r]);
        }), L.value = X.selectedBalanceType) : (U.value = !1, Y.value = "No data found for this GSTIN/UIN");
      }, 1e3));
    }, re = () => {
      ee.value = !1, U.value || (U.value = !0, Y.value = "02ABCDE1234F1Z5");
    };
    return Ve(() => {
      setInterval(() => {
        R.value++;
      }, 3e3);
    }), (r, e) => {
      const T = p("IconArrowLeft"), z = ze, me = p("IconSettings"), se = p("IconCheck"), ve = p("IconSquare"), _e = p("IconX"), pe = p("IconCircleArrowRight"), be = p("IconCircleDashedCheck"), fe = p("IconDeviceFloppy"), ge = Ce, ye = p("IconCirclePlus");
      return n(), y("div", Oe, [
        t(ne, null, {
          default: a(() => [
            F.value ? (n(), y("div", Ee, [
              t(C, null, {
                default: a(() => [
                  t(d, { cols: "12" }, {
                    default: a(() => [
                      l("div", Re, [
                        t(f, {
                          onClick: _,
                          variant: "text",
                          class: "account_v_btn_outlined"
                        }, {
                          prepend: a(() => [
                            t(T, { size: "20" })
                          ]),
                          default: a(() => [
                            e[25] || (e[25] = g(" Back to Customer List ", -1))
                          ]),
                          _: 1,
                          __: [25]
                        })
                      ]),
                      t(z)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : c("", !0)
          ]),
          _: 1
        }),
        t(ne, null, {
          default: a(() => [
            F.value ? c("", !0) : (n(), y("div", Je, [
              w.value ? (n(), u(C, {
                key: 0,
                class: "justify-center"
              }, {
                default: a(() => [
                  t(d, { cols: "12" }, {
                    default: a(() => [
                      l("div", $e, [
                        t(M, {
                          title: "Create a New Customer",
                          class: "pa-2 account_vcard_border",
                          subtitle: "Fill in the details below to add a new customer to your records."
                        }, {
                          append: a(() => [
                            l("div", Ge, [
                              t(Pe, {
                                location: "start",
                                transition: "slide-y-transition",
                                "offset-y": "",
                                "close-on-content-click": !1
                              }, {
                                activator: a(({ props: o }) => [
                                  t(f, De(o, {
                                    variant: "text",
                                    size: "x-small",
                                    rounded: ""
                                  }), {
                                    default: a(() => [
                                      t(me, { size: "20" })
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                default: a(() => [
                                  t(M, {
                                    class: "account_vcard_menu account_vcard_border",
                                    width: "250px"
                                  }, {
                                    default: a(() => [
                                      e[26] || (e[26] = l("div", { class: "account_vcard_menu_hdng" }, "Show/Hide Optional Fields", -1)),
                                      t(A, { class: "my-1 mt-0" }),
                                      l("div", He, [
                                        (n(!0), y(ae, null, le(I.value, (o, $) => (n(), y("div", { key: $ }, [
                                          l("div", {
                                            class: "field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                            onClick: (P) => j($)
                                          }, [
                                            D($) ? (n(), u(se, {
                                              key: 0,
                                              size: "20"
                                            })) : (n(), u(ve, {
                                              key: 1,
                                              size: "20"
                                            })),
                                            l("span", We, h($), 1)
                                          ], 8, je),
                                          (n(!0), y(ae, null, le(o, (P) => (n(), y("div", {
                                            key: P.key,
                                            class: "account_vcard_menu_item",
                                            style: { "padding-left": "10px" }
                                          }, [
                                            l("div", {
                                              class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                              onClick: Ie((Qe) => P.visible = !P.visible, ["stop"])
                                            }, [
                                              P.visible ? (n(), u(se, {
                                                key: 0,
                                                size: "20"
                                              })) : c("", !0),
                                              l("span", {
                                                class: S(P.visible ? "" : "field_list_dynamic_ml")
                                              }, h(P.label), 3)
                                            ], 8, Ke)
                                          ]))), 128))
                                        ]))), 128))
                                      ])
                                    ]),
                                    _: 1,
                                    __: [26]
                                  })
                                ]),
                                _: 1
                              }),
                              t(f, {
                                onClick: E,
                                variant: "text",
                                size: "x-small",
                                rounded: "",
                                class: "account_vcard_close_btn"
                              }, {
                                default: a(() => [
                                  t(_e, { size: "20" })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          default: a(() => [
                            t(G, null, {
                              default: a(() => [
                                t(C, null, {
                                  default: a(() => [
                                    x("Core Information") ? (n(), u(d, {
                                      key: 0,
                                      cols: "12",
                                      class: "pb-0"
                                    }, {
                                      default: a(() => [
                                        e[27] || (e[27] = l("h5", { class: "account_form_info_hdng" }, "Core Information", -1)),
                                        t(A, { class: "mb-2 mt-1" })
                                      ]),
                                      _: 1,
                                      __: [27]
                                    })) : c("", !0),
                                    m("gstin") ? (n(), u(d, {
                                      key: 1,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[28] || (e[28] = l("label", { class: "account_label mb-2" }, "GSTIN/UIN", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          onFocus: e[0] || (e[0] = (o) => te.value = !0),
                                          onBlur: e[1] || (e[1] = (o) => te.value = !1),
                                          placeholder: "15-digit GSTIN",
                                          modelValue: i.value.gstin,
                                          "onUpdate:modelValue": e[2] || (e[2] = (o) => i.value.gstin = o),
                                          onInput: re
                                        }, {
                                          append: a(() => [
                                            t(Ae, { mode: "out-in" }, {
                                              default: a(() => [
                                                U.value ? (n(), u(f, {
                                                  key: 0,
                                                  class: "account_v_btn_outlined",
                                                  rounded: "1",
                                                  size: "default",
                                                  loading: Q.value,
                                                  onClick: ce
                                                }, {
                                                  default: a(() => [
                                                    ee.value ? (n(), u(be, {
                                                      key: 1,
                                                      size: "20"
                                                    })) : (n(), u(pe, {
                                                      key: 0,
                                                      size: "20"
                                                    }))
                                                  ]),
                                                  _: 1
                                                }, 8, ["loading"])) : c("", !0)
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue"]),
                                        t(Te, { mode: "out-in" }, {
                                          default: a(() => [
                                            te.value || !U.value ? (n(), y("small", Ze, h(Y.value), 1)) : c("", !0)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1,
                                      __: [28]
                                    })) : c("", !0),
                                    m("name") ? (n(), u(d, {
                                      key: 2,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[29] || (e[29] = l("label", { class: "account_label mb-2" }, "Name (Mandatory)", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          hint: "02ABCDE1234F1Z5",
                                          placeholder: "Customer's Full Name or Company Name",
                                          modelValue: i.value.name,
                                          "onUpdate:modelValue": e[3] || (e[3] = (o) => i.value.name = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [29]
                                    })) : c("", !0),
                                    m("mobile") ? (n(), u(d, {
                                      key: 3,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[30] || (e[30] = l("label", { class: "account_label mb-2" }, "Mobile", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          type: "number",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "9876543210",
                                          modelValue: i.value.mobile,
                                          "onUpdate:modelValue": e[4] || (e[4] = (o) => i.value.mobile = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [30]
                                    })) : c("", !0),
                                    m("openingBalance") ? (n(), u(d, {
                                      key: 4,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[31] || (e[31] = l("label", { class: "account_label mb-2" }, "Opening Balance", -1)),
                                        l("div", qe, [
                                          t(b, {
                                            class: "custom_option_field accouting_field accouting_active_field",
                                            type: "number",
                                            variant: "outlined",
                                            density: "compact",
                                            placeholder: "0",
                                            modelValue: i.value.openingBalance,
                                            "onUpdate:modelValue": e[5] || (e[5] = (o) => i.value.openingBalance = o)
                                          }, null, 8, ["modelValue"]),
                                          t(H, {
                                            class: "custom_option_select accouting_field accouting_active_field",
                                            modelValue: L.value,
                                            "onUpdate:modelValue": e[6] || (e[6] = (o) => L.value = o),
                                            items: Z.value,
                                            variant: "outlined",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "items"])
                                        ])
                                      ]),
                                      _: 1,
                                      __: [31]
                                    })) : c("", !0),
                                    x("Contact Details") ? (n(), u(d, {
                                      key: 5,
                                      cols: "12",
                                      class: "pb-0"
                                    }, {
                                      default: a(() => [
                                        e[32] || (e[32] = l("h5", { class: "account_form_info_hdng" }, "Contact Details", -1)),
                                        t(A, { class: "mb-2 mt-1" })
                                      ]),
                                      _: 1,
                                      __: [32]
                                    })) : c("", !0),
                                    m("mailingName") ? (n(), u(d, {
                                      key: 6,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[33] || (e[33] = l("label", { class: "account_label mb-2" }, "Mailing Name", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "Name for correspondence",
                                          modelValue: i.value.mailingName,
                                          "onUpdate:modelValue": e[7] || (e[7] = (o) => i.value.mailingName = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [33]
                                    })) : c("", !0),
                                    m("email") ? (n(), u(d, {
                                      key: 7,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[34] || (e[34] = l("label", { class: "account_label mb-2" }, "Email", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "customer@example.com",
                                          modelValue: i.value.email,
                                          "onUpdate:modelValue": e[8] || (e[8] = (o) => i.value.email = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [34]
                                    })) : c("", !0),
                                    m("address") ? (n(), u(d, {
                                      key: 8,
                                      cols: "12",
                                      lg: "12",
                                      md: "12"
                                    }, {
                                      default: a(() => [
                                        e[35] || (e[35] = l("label", { class: "account_label mb-2" }, "Address", -1)),
                                        t(ie, {
                                          class: "accounting_v_textarea",
                                          placeholder: "Full address",
                                          variant: "outlined",
                                          modelValue: i.value.address,
                                          "onUpdate:modelValue": e[9] || (e[9] = (o) => i.value.address = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [35]
                                    })) : c("", !0),
                                    m("state") ? (n(), u(d, {
                                      key: 9,
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: a(() => [
                                        e[36] || (e[36] = l("label", { class: "account_label mb-2" }, "State", -1)),
                                        t(H, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          items: V.value,
                                          placeholder: "Select State",
                                          modelValue: i.value.state,
                                          "onUpdate:modelValue": e[10] || (e[10] = (o) => i.value.state = o)
                                        }, null, 8, ["items", "modelValue"])
                                      ]),
                                      _: 1,
                                      __: [36]
                                    })) : c("", !0),
                                    m("pincode") ? (n(), u(d, {
                                      key: 10,
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: a(() => [
                                        e[37] || (e[37] = l("label", { class: "account_label mb-2" }, "Pincode", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          placeholder: "e.g. 400001",
                                          modelValue: i.value.pincode,
                                          "onUpdate:modelValue": e[11] || (e[11] = (o) => i.value.pincode = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [37]
                                    })) : c("", !0),
                                    m("country") ? (n(), u(d, {
                                      key: 11,
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: a(() => [
                                        e[38] || (e[38] = l("label", { class: "account_label mb-2" }, "Country", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "India",
                                          modelValue: i.value.country,
                                          "onUpdate:modelValue": e[12] || (e[12] = (o) => i.value.country = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [38]
                                    })) : c("", !0),
                                    x("Tax & Compliance") ? (n(), u(d, {
                                      key: 12,
                                      cols: "12",
                                      class: "pb-0"
                                    }, {
                                      default: a(() => [
                                        e[39] || (e[39] = l("h5", { class: "account_form_info_hdng" }, "Tax & Compliance", -1)),
                                        t(A, { class: "mb-2 mt-1" })
                                      ]),
                                      _: 1,
                                      __: [39]
                                    })) : c("", !0),
                                    m("pan") ? (n(), u(d, {
                                      key: 13,
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: a(() => [
                                        e[40] || (e[40] = l("label", { class: "account_label mb-2" }, "PAN", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "15-digit PAN",
                                          modelValue: i.value.pan,
                                          "onUpdate:modelValue": e[13] || (e[13] = (o) => i.value.pan = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [40]
                                    })) : c("", !0),
                                    m("taxReg") ? (n(), u(d, {
                                      key: 14,
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: a(() => [
                                        e[41] || (e[41] = l("label", { class: "account_label mb-2" }, "Tax Registration Number", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "If applicable",
                                          modelValue: i.value.taxReg,
                                          "onUpdate:modelValue": e[14] || (e[14] = (o) => i.value.taxReg = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [41]
                                    })) : c("", !0),
                                    m("tds") ? (n(), u(d, {
                                      key: 15,
                                      class: "d-flex align-center",
                                      cols: "12",
                                      lg: "12",
                                      md: "12"
                                    }, {
                                      default: a(() => [
                                        t(ue, {
                                          density: "compact",
                                          class: "account_v_checkbox",
                                          label: "TDS Applicable",
                                          modelValue: i.value.tds,
                                          "onUpdate:modelValue": e[15] || (e[15] = (o) => i.value.tds = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1
                                    })) : c("", !0),
                                    x("Financial Controls") ? (n(), u(d, {
                                      key: 16,
                                      cols: "12",
                                      class: "pb-0"
                                    }, {
                                      default: a(() => [
                                        e[42] || (e[42] = l("h5", { class: "account_form_info_hdng" }, "Financial Controls", -1)),
                                        t(A, { class: "mb-2 mt-1" })
                                      ]),
                                      _: 1,
                                      __: [42]
                                    })) : c("", !0),
                                    m("creditLimit") ? (n(), u(d, {
                                      key: 17,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[43] || (e[43] = l("label", { class: "account_label mb-2" }, "Credit Limit", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          type: "number",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "0",
                                          modelValue: i.value.creditLimit,
                                          "onUpdate:modelValue": e[16] || (e[16] = (o) => i.value.creditLimit = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [43]
                                    })) : c("", !0),
                                    m("creditPeriod") ? (n(), u(d, {
                                      key: 18,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[44] || (e[44] = l("label", { class: "account_label mb-2" }, "Credit Period (Days)", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          type: "number",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "0",
                                          modelValue: i.value.creditPeriod,
                                          "onUpdate:modelValue": e[17] || (e[17] = (o) => i.value.creditPeriod = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [44]
                                    })) : c("", !0),
                                    m("billWise") ? (n(), u(d, {
                                      key: 19,
                                      class: "d-flex align-center",
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        t(ue, {
                                          density: "compact",
                                          class: "account_v_checkbox",
                                          label: "Maintain Bill-wise Details",
                                          modelValue: i.value.billWise,
                                          "onUpdate:modelValue": e[18] || (e[18] = (o) => i.value.billWise = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1
                                    })) : c("", !0),
                                    x("Banking Details") ? (n(), u(d, {
                                      key: 20,
                                      cols: "12",
                                      class: "pb-0"
                                    }, {
                                      default: a(() => [
                                        e[45] || (e[45] = l("h5", { class: "account_form_info_hdng" }, "Banking Details", -1)),
                                        t(A, { class: "mb-2 mt-1" })
                                      ]),
                                      _: 1,
                                      __: [45]
                                    })) : c("", !0),
                                    m("bankName") ? (n(), u(d, {
                                      key: 21,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[46] || (e[46] = l("label", { class: "account_label mb-2" }, "Bank Name", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "e.g. HDFC Bank",
                                          modelValue: i.value.bankName,
                                          "onUpdate:modelValue": e[19] || (e[19] = (o) => i.value.bankName = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [46]
                                    })) : c("", !0),
                                    m("accountNumber") ? (n(), u(d, {
                                      key: 22,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[47] || (e[47] = l("label", { class: "account_label mb-2" }, "Account Number", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "Bank Account Number",
                                          modelValue: i.value.accountNumber,
                                          "onUpdate:modelValue": e[20] || (e[20] = (o) => i.value.accountNumber = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [47]
                                    })) : c("", !0),
                                    m("ifscCode") ? (n(), u(d, {
                                      key: 23,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[48] || (e[48] = l("label", { class: "account_label mb-2" }, "IFSC Code", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "e.g. HDFC0000001",
                                          modelValue: i.value.ifscCode,
                                          "onUpdate:modelValue": e[21] || (e[21] = (o) => i.value.ifscCode = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [48]
                                    })) : c("", !0),
                                    x("Additional Fields") ? (n(), u(d, {
                                      key: 24,
                                      cols: "12",
                                      class: "pb-0"
                                    }, {
                                      default: a(() => [
                                        e[49] || (e[49] = l("h5", { class: "account_form_info_hdng" }, "Additional Fields", -1)),
                                        t(A, { class: "mb-2 mt-1" })
                                      ]),
                                      _: 1,
                                      __: [49]
                                    })) : c("", !0),
                                    m("addCountry1") ? (n(), u(d, {
                                      key: 25,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[50] || (e[50] = l("label", { class: "account_label mb-2" }, "Country", -1)),
                                        t(b, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          placeholder: "India",
                                          modelValue: i.value.addCountry1,
                                          "onUpdate:modelValue": e[22] || (e[22] = (o) => i.value.addCountry1 = o)
                                        }, null, 8, ["modelValue"])
                                      ]),
                                      _: 1,
                                      __: [50]
                                    })) : c("", !0),
                                    m("state") ? (n(), u(d, {
                                      key: 26,
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: a(() => [
                                        e[51] || (e[51] = l("label", { class: "account_label mb-2" }, "Place of Supply", -1)),
                                        t(H, {
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          items: V.value,
                                          placeholder: "Select State",
                                          modelValue: i.value.state,
                                          "onUpdate:modelValue": e[23] || (e[23] = (o) => i.value.state = o)
                                        }, null, 8, ["items", "modelValue"])
                                      ]),
                                      _: 1,
                                      __: [51]
                                    })) : c("", !0),
                                    m("shipToAddress") ? (n(), u(d, {
                                      key: 27,
                                      cols: "12",
                                      lg: "12",
                                      md: "12"
                                    }, {
                                      default: a(() => [
                                        e[53] || (e[53] = l("label", { class: "account_label mb-2" }, "Ship-to Address", -1)),
                                        t(ie, {
                                          class: "accounting_v_textarea",
                                          placeholder: "Optional delivery address",
                                          variant: "outlined",
                                          modelValue: i.value.shipToAddress,
                                          "onUpdate:modelValue": e[24] || (e[24] = (o) => i.value.shipToAddress = o)
                                        }, null, 8, ["modelValue"]),
                                        l("div", Xe, [
                                          t(f, { class: "account_v_btn_primary" }, {
                                            prepend: a(() => [
                                              t(fe, { size: "20" })
                                            ]),
                                            default: a(() => [
                                              e[52] || (e[52] = g(" Save Customer ", -1))
                                            ]),
                                            _: 1,
                                            __: [52]
                                          })
                                        ])
                                      ]),
                                      _: 1,
                                      __: [53]
                                    })) : c("", !0)
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
              })) : c("", !0),
              t(C, null, {
                default: a(() => [
                  t(d, { cols: "12" }, {
                    default: a(() => [
                      t(ge, {
                        headers: W.value,
                        items: N.value,
                        filters: oe.value,
                        title: "Customer",
                        "status-items": s.value,
                        "account-type-items": O.value,
                        "currency-items": [],
                        widgets: K.value,
                        "item-value-key": "customerName",
                        enableViewAction: !0,
                        onViewItem: q
                      }, null, 8, ["headers", "items", "filters", "status-items", "account-type-items", "widgets"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (n(), u(f, {
                onClick: E,
                key: R.value,
                class: "account_add_new_btn bounce"
              }, {
                prepend: a(() => [
                  t(ye, { size: "20" })
                ]),
                default: a(() => [
                  e[54] || (e[54] = g(" Add Customer ", -1))
                ]),
                _: 1,
                __: [54]
              }))
            ]))
          ]),
          _: 1
        })
      ]);
    };
  }
}, ct = /* @__PURE__ */ Fe(Ye, [["__scopeId", "data-v-34cc7ec4"]]);
export {
  ct as default
};
