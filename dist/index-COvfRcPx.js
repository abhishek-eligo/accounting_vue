import { ref as r, watchEffect as J, computed as A, resolveComponent as k, createElementBlock as F, openBlock as c, createVNode as l, withCtx as t, createCommentVNode as m, createBlock as y, createElementVNode as n, normalizeClass as z, createTextVNode as U, createSlots as ve, toDisplayString as h, Fragment as ce, renderList as me, mergeProps as pe, unref as _e } from "vue";
import { b as V, e as v, V as S, h as fe, $ as ye } from "./main-u1Mo8sLp.js";
import { V as w, a as i } from "./VRow-Bnh7mzWV.js";
import { V as B, a as Z, b as be, c as ge } from "./VCard-BuMrnEL1.js";
import { V as Q } from "./VAutocomplete-DWGRBOQT.js";
import { V as Ve } from "./VDataTable-C7AYZo_S.js";
import { V as W } from "./VTextarea-Dc6MPKZX.js";
import { V as ke } from "./VDialog-CTlIykqf.js";
const he = { class: "account_vcard_menu_items py-1" }, Ne = ["onClick"], Ce = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, xe = {
  key: 0,
  class: "d-flex gap-2 mb-2"
}, Ae = { class: "d-flex flex-column align-end" }, Se = { class: "d-flex justify-space-between w-100 mb-1" }, we = { class: "d-flex justify-space-between w-100 mb-1" }, Ie = { class: "d-flex justify-space-between w-100 mb-1" }, Ue = { class: "d-flex justify-space-between w-100 mb-1" }, Pe = { class: "d-flex justify-space-between w-100 font-weight-bold" }, Te = {
  key: 0,
  class: "account_ui_vcard"
}, Re = {
  __name: "index",
  setup(Fe) {
    const G = r([
      { title: "Vendor 1", value: "vendor1", gstin: "22AAAAA0000A1Z5", state: "Maharashtra" },
      { title: "Vendor 2", value: "vendor2", gstin: "33BBBBB1111B2Z6", state: "Tamil Nadu" }
    ]), D = r(null), P = r("");
    r("");
    const T = r(""), j = r("");
    r(""), r("");
    const I = r(!1);
    J(() => {
      const _ = G.value.find((e) => e.value === D.value);
      _ ? (P.value = _.gstin, T.value = _.state) : (P.value = "", T.value = "");
    });
    const X = [
      { label: "Assets & Inventory", value: "both" },
      { label: "Assets Only", value: "asset" },
      { label: "Inventory Only", value: "inventory" }
    ], b = r("both"), q = r(!1), u = r("inventory"), H = [
      { title: "Item", value: "item", width: "300px" },
      { title: "Account", value: "account", width: "250px" },
      { title: "HSN/SAC", value: "hsn", width: "150px" },
      { title: "Qty", value: "qty" },
      { title: "Rate", value: "rate" },
      { title: "GST%", value: "gst" },
      { title: "Amount", value: "amount" },
      { title: "", value: "actions" }
    ], R = [
      { title: "Item", value: "item", width: "300px" },
      { title: "HSN/SAC", value: "hsn", width: "150px" },
      { title: "Qty", value: "qty" },
      { title: "Rate", value: "rate" },
      { title: "GST%", value: "gst" },
      { title: "Amount", value: "amount" },
      { title: "", value: "actions" }
    ];
    function L() {
      return { item: "", account: "", hsn: "", qty: 1, rate: 0, gst: 18, amount: 0 };
    }
    function E() {
      return { item: "", hsn: "", qty: 1, rate: 0, gst: 18, amount: 0 };
    }
    const o = r([L()]), s = r([E()]);
    function Y() {
      u.value === "inventory" ? o.value.push(L()) : s.value.push(E());
    }
    function ee(_) {
      u.value === "inventory" ? o.value.length > 1 && o.value.splice(_, 1) : s.value.length > 1 && s.value.splice(_, 1);
    }
    function le() {
      (u.value === "inventory" ? o.value : s.value).forEach((e) => {
        const f = parseFloat(e.qty) || 0, N = parseFloat(e.rate) || 0, C = parseFloat(e.gst) || 0, x = f * N;
        e.amount = (x * (1 + C / 100)).toFixed(2);
      });
    }
    J(le);
    const O = A(() => (u.value === "inventory" ? o.value : s.value).reduce((e, f) => e + (parseFloat(f.qty) * parseFloat(f.rate) || 0), 0)), M = A(() => (u.value === "inventory" ? o.value : s.value).reduce((e, f) => {
      const N = parseFloat(f.qty) || 0, C = parseFloat(f.rate) || 0, x = parseFloat(f.gst) || 0;
      return e + N * C * x / 100;
    }, 0)), ae = A(() => M.value / 2), te = A(() => M.value / 2), ne = A(() => 0), ue = A(() => O.value + M.value), $ = r(""), oe = r([
      { title: "Purchase A/c", value: "purchase" },
      { title: "Expense A/c", value: "expense" }
    ]), se = r([
      { label: "First Name", key: "firstName", visible: !0 },
      { label: "Last Name", key: "lastName", visible: !0 },
      { label: "Company Name", key: "companyName", visible: !0 },
      { label: "Email Address", key: "email", visible: !0 },
      { label: "Phone Number", key: "phone", visible: !0 },
      { label: "Street Address", key: "streetAddress", visible: !0 },
      { label: "City", key: "city", visible: !0 },
      { label: "State", key: "state", visible: !0 },
      { label: "ZIP Code", key: "zipCode", visible: !0 },
      { label: "GSTIN (Optional)", key: "gstin", visible: !0 }
    ]), g = (_) => {
      var e;
      return (e = se.value.find((f) => f.key === _)) == null ? void 0 : e.visible;
    }, d = r({}), ie = r([
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
    ]);
    return (_, e) => {
      const f = k("IconCheck"), N = k("IconCirclePlus"), C = k("IconCalendar"), x = k("v-date-input"), de = k("IconTrash"), K = k("IconDeviceFloppy"), re = k("IconX");
      return c(), F("div", null, [
        l(w, { class: "justify-center" }, {
          default: t(() => [
            l(i, { cols: "12" }, {
              default: t(() => [
                l(B, {
                  class: "account_ui_vcard account_vcard_border",
                  title: "New Purchase Bill",
                  subtitle: "Enter the details from your vendor's bill."
                }, {
                  append: t(() => [
                    l(fe, {
                      modelValue: q.value,
                      "onUpdate:modelValue": e[0] || (e[0] = (a) => q.value = a),
                      location: "bottom end",
                      "offset-y": "",
                      transition: "slide-y-transition",
                      "close-on-content-click": !1
                    }, {
                      activator: t(({ props: a }) => [
                        l(V, pe(a, {
                          variant: "text",
                          size: "x-small",
                          rounded: ""
                        }), {
                          default: t(() => [
                            l(_e(ye), { size: "20" })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: t(() => [
                        l(B, { class: "account_vcard_menu account_vcard_border" }, {
                          default: t(() => [
                            e[21] || (e[21] = n("div", { class: "account_vcard_menu_hdng" }, "Purchase Mode", -1)),
                            l(S, { class: "my-1 mt-0" }),
                            n("div", he, [
                              (c(), F(ce, null, me(X, (a) => n("div", {
                                key: a.value,
                                class: "account_vcard_menu_item",
                                onClick: (p) => b.value = a.value
                              }, [
                                n("div", Ce, [
                                  b.value === a.value ? (c(), y(f, {
                                    key: 0,
                                    size: "16"
                                  })) : m("", !0),
                                  n("span", {
                                    class: z(b.value === a.value ? "" : "field_list_dynamic_ml")
                                  }, h(a.label), 3)
                                ])
                              ], 8, Ne)), 64))
                            ])
                          ]),
                          _: 1,
                          __: [21]
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  default: t(() => [
                    l(Z, null, {
                      default: t(() => [
                        l(w, null, {
                          default: t(() => [
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                e[22] || (e[22] = n("label", { class: "account_label mb-2" }, "Vendor", -1)),
                                l(Q, {
                                  modelValue: D.value,
                                  "onUpdate:modelValue": e[2] || (e[2] = (a) => D.value = a),
                                  items: G.value,
                                  placeholder: "Select a vendor",
                                  variant: "outlined",
                                  class: "accouting_field accouting_active_field"
                                }, {
                                  append: t(() => [
                                    l(V, {
                                      class: "account_v_btn_outlined",
                                      onClick: e[1] || (e[1] = (a) => I.value = !0),
                                      rounded: "2"
                                    }, {
                                      default: t(() => [
                                        l(N, { size: "20" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "items"])
                              ]),
                              _: 1,
                              __: [22]
                            }),
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                e[23] || (e[23] = n("label", { class: "account_label mb-2" }, "Bill Number", -1)),
                                l(v, {
                                  modelValue: j.value,
                                  "onUpdate:modelValue": e[3] || (e[3] = (a) => j.value = a),
                                  variant: "outlined",
                                  class: "accouting_field accouting_active_field"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1,
                              __: [23]
                            }),
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                e[24] || (e[24] = n("label", { class: "account_label mb-2" }, "Vendor GSTIN", -1)),
                                l(v, {
                                  modelValue: P.value,
                                  "onUpdate:modelValue": e[4] || (e[4] = (a) => P.value = a),
                                  variant: "outlined",
                                  readonly: "",
                                  placeholder: "15-digit GSTIN",
                                  class: "accouting_field accouting_active_field"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1,
                              __: [24]
                            }),
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                e[25] || (e[25] = n("label", { class: "account_label mb-2" }, "Bill Date", -1)),
                                l(x, {
                                  class: "accounting_date_input",
                                  "cancel-text": "Close",
                                  "ok-text": "Apply"
                                }, {
                                  "prepend-inner": t(() => [
                                    l(C, { size: "20" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1,
                              __: [25]
                            }),
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                e[26] || (e[26] = n("label", { class: "account_label mb-2" }, "Place of Supply (Vendor's State)", -1)),
                                l(Q, {
                                  items: ie.value,
                                  modelValue: T.value,
                                  "onUpdate:modelValue": e[5] || (e[5] = (a) => T.value = a),
                                  variant: "outlined",
                                  placeholder: "Select state",
                                  class: "accouting_field accouting_active_field"
                                }, null, 8, ["items", "modelValue"])
                              ]),
                              _: 1,
                              __: [26]
                            }),
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                e[27] || (e[27] = n("label", { class: "account_label mb-2" }, "Due Date", -1)),
                                l(x, {
                                  class: "accounting_date_input",
                                  "cancel-text": "Close",
                                  "ok-text": "Apply"
                                }, {
                                  "prepend-inner": t(() => [
                                    l(C, { size: "20" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1,
                              __: [27]
                            })
                          ]),
                          _: 1
                        }),
                        l(S, { class: "my-4" }),
                        b.value === "both" ? (c(), F("div", xe, [
                          l(V, {
                            class: z(u.value === "inventory" ? "account_v_btn_primary" : "account_v_btn_outlined"),
                            onClick: e[6] || (e[6] = (a) => u.value = "inventory")
                          }, {
                            default: t(() => e[28] || (e[28] = [
                              U("Inventory Purchase", -1)
                            ])),
                            _: 1,
                            __: [28]
                          }, 8, ["class"]),
                          l(V, {
                            class: z(u.value === "asset" ? "account_v_btn_primary" : "account_v_btn_outlined"),
                            onClick: e[7] || (e[7] = (a) => u.value = "asset")
                          }, {
                            default: t(() => e[29] || (e[29] = [
                              U("Asset Purchase", -1)
                            ])),
                            _: 1,
                            __: [29]
                          }, 8, ["class"])
                        ])) : m("", !0),
                        b.value === "both" || (b.value === "asset" ? u.value = "asset" : u.value = "inventory") ? (c(), y(Ve, {
                          key: 1,
                          headers: b.value === "both" ? u.value === "inventory" ? H : R : b.value === "asset" ? R : H,
                          items: b.value === "both" ? u.value === "inventory" ? o.value : s.value : b.value === "asset" ? s.value : o.value,
                          class: "account_dynamic_table account_invoice_table",
                          "hide-default-footer": ""
                        }, ve({
                          "item.item": t(({ index: a }) => [
                            l(v, {
                              modelValue: (u.value === "inventory" ? o.value : s.value)[a].item,
                              "onUpdate:modelValue": (p) => (u.value === "inventory" ? o.value : s.value)[a].item = p,
                              placeholder: "Item name",
                              variant: "outlined",
                              class: "accouting_field accouting_active_field"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          "item.hsn": t(({ index: a }) => [
                            l(v, {
                              modelValue: (u.value === "inventory" ? o.value : s.value)[a].hsn,
                              "onUpdate:modelValue": (p) => (u.value === "inventory" ? o.value : s.value)[a].hsn = p,
                              placeholder: "HSN Code",
                              variant: "outlined",
                              class: "accouting_field accouting_active_field"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          "item.qty": t(({ index: a }) => [
                            l(v, {
                              modelValue: (u.value === "inventory" ? o.value : s.value)[a].qty,
                              "onUpdate:modelValue": (p) => (u.value === "inventory" ? o.value : s.value)[a].qty = p,
                              type: "number",
                              variant: "outlined",
                              class: "accouting_field accouting_active_field"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          "item.rate": t(({ index: a }) => [
                            l(v, {
                              modelValue: (u.value === "inventory" ? o.value : s.value)[a].rate,
                              "onUpdate:modelValue": (p) => (u.value === "inventory" ? o.value : s.value)[a].rate = p,
                              type: "number",
                              variant: "outlined",
                              class: "accouting_field accouting_active_field"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          "item.gst": t(({ index: a }) => [
                            l(v, {
                              modelValue: (u.value === "inventory" ? o.value : s.value)[a].gst,
                              "onUpdate:modelValue": (p) => (u.value === "inventory" ? o.value : s.value)[a].gst = p,
                              type: "number",
                              variant: "outlined",
                              class: "accouting_field accouting_active_field"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          "item.amount": t(({ index: a }) => [
                            n("span", null, "₹" + h((u.value === "inventory" ? o.value : s.value)[a].amount), 1)
                          ]),
                          "item.actions": t(({ index: a }) => [
                            l(de, {
                              class: z(["text-error cursor-pointer table_row_icon", {
                                "opacity-50": (u.value === "inventory" ? o.value : s.value).length === 1,
                                "cursor-not-allowed": (u.value === "inventory" ? o.value : s.value).length === 1
                              }]),
                              disabled: (u.value === "inventory" ? o.value : s.value).length === 1,
                              onClick: (p) => ee(a),
                              size: "20"
                            }, null, 8, ["class", "disabled", "onClick"])
                          ]),
                          _: 2
                        }, [
                          u.value === "inventory" ? {
                            name: "item.account",
                            fn: t(({ index: a }) => [
                              l(be, {
                                modelValue: o.value[a].account,
                                "onUpdate:modelValue": (p) => o.value[a].account = p,
                                items: oe.value,
                                placeholder: "Select account",
                                variant: "outlined",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                            ]),
                            key: "0"
                          } : void 0
                        ]), 1032, ["headers", "items"])) : m("", !0),
                        l(V, {
                          class: "account_v_btn_outlined mt-3",
                          variant: "text",
                          onClick: Y
                        }, {
                          prepend: t(() => [
                            l(N, {
                              size: "20",
                              style: { "margin-right": "6px" }
                            })
                          ]),
                          default: t(() => [
                            e[30] || (e[30] = U(" Add Item ", -1))
                          ]),
                          _: 1,
                          __: [30]
                        }),
                        l(S, { class: "my-4" }),
                        l(w, null, {
                          default: t(() => [
                            l(i, { cols: "12" }, {
                              default: t(() => [
                                l(W, {
                                  modelValue: $.value,
                                  "onUpdate:modelValue": e[8] || (e[8] = (a) => $.value = a),
                                  placeholder: "Notes",
                                  variant: "outlined",
                                  class: "accounting_v_textarea"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        l(S, { class: "my-4" }),
                        l(w, null, {
                          default: t(() => [
                            l(i, {
                              cols: "12",
                              md: "6"
                            }),
                            l(i, {
                              cols: "12",
                              md: "6"
                            }, {
                              default: t(() => [
                                n("div", Ae, [
                                  n("div", Se, [
                                    e[31] || (e[31] = n("span", null, "Subtotal", -1)),
                                    n("span", null, "₹" + h(O.value.toFixed(2)), 1)
                                  ]),
                                  n("div", we, [
                                    e[32] || (e[32] = n("span", null, "CGST", -1)),
                                    n("span", null, "₹" + h(ae.value.toFixed(2)), 1)
                                  ]),
                                  n("div", Ie, [
                                    e[33] || (e[33] = n("span", null, "SGST", -1)),
                                    n("span", null, "₹" + h(te.value.toFixed(2)), 1)
                                  ]),
                                  n("div", Ue, [
                                    e[34] || (e[34] = n("span", null, "IGST", -1)),
                                    n("span", null, "₹" + h(ne.value.toFixed(2)), 1)
                                  ])
                                ]),
                                l(S, { class: "my-2" }),
                                n("div", Pe, [
                                  e[35] || (e[35] = n("span", null, "Total Amount", -1)),
                                  n("span", null, "₹" + h(ue.value.toFixed(2)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        l(S),
                        l(w, null, {
                          default: t(() => [
                            l(i, { cols: "12" }, {
                              default: t(() => [
                                e[36] || (e[36] = n("label", { class: "account_label mb-2" }, "Notes", -1)),
                                l(W, {
                                  class: "accounting_v_textarea",
                                  placeholder: "Any notes related to this purchase bill",
                                  variant: "outlined"
                                })
                              ]),
                              _: 1,
                              __: [36]
                            }),
                            l(i, {
                              cols: "12",
                              class: "d-flex align-center justify-end"
                            }, {
                              default: t(() => [
                                l(V, { class: "account_v_btn_primary" }, {
                                  prepend: t(() => [
                                    l(K, {
                                      size: "20",
                                      style: { "margin-right": "6px" }
                                    })
                                  ]),
                                  default: t(() => [
                                    e[37] || (e[37] = U(" Save Purchase Bill ", -1))
                                  ]),
                                  _: 1,
                                  __: [37]
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
            })
          ]),
          _: 1
        }),
        l(ke, {
          "max-width": "700",
          modelValue: I.value,
          "onUpdate:modelValue": e[20] || (e[20] = (a) => I.value = a)
        }, {
          default: t(() => [
            I.value ? (c(), F("div", Te, [
              l(B, {
                title: "Create a New Vendor",
                class: "pa-2 account_vcard_border shadow-none",
                subtitle: "Fill in the details below to add a new vendor to your records."
              }, {
                append: t(() => [
                  l(V, {
                    onClick: e[9] || (e[9] = (a) => I.value = !1),
                    variant: "text",
                    size: "x-small",
                    rounded: "",
                    class: "account_vcard_close_btn"
                  }, {
                    default: t(() => [
                      l(re, { size: "20" })
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  l(Z, null, {
                    default: t(() => [
                      l(w, null, {
                        default: t(() => [
                          g("firstName") ? (c(), y(i, {
                            key: 0,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[38] || (e[38] = n("label", { class: "account_label mb-2" }, "First Name", -1)),
                              l(v, {
                                modelValue: d.value.firstName,
                                "onUpdate:modelValue": e[10] || (e[10] = (a) => d.value.firstName = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "John",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [38]
                          })) : m("", !0),
                          g("lastName") ? (c(), y(i, {
                            key: 1,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[39] || (e[39] = n("label", { class: "account_label mb-2" }, "Last Name", -1)),
                              l(v, {
                                modelValue: d.value.lastName,
                                "onUpdate:modelValue": e[11] || (e[11] = (a) => d.value.lastName = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Doe",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [39]
                          })) : m("", !0),
                          g("companyName") ? (c(), y(i, {
                            key: 2,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[40] || (e[40] = n("label", { class: "account_label mb-2" }, "Company Name", -1)),
                              l(v, {
                                modelValue: d.value.companyName,
                                "onUpdate:modelValue": e[12] || (e[12] = (a) => d.value.companyName = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Innovate Inc.",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [40]
                          })) : m("", !0),
                          g("email") ? (c(), y(i, {
                            key: 3,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[41] || (e[41] = n("label", { class: "account_label mb-2" }, "Email Address", -1)),
                              l(v, {
                                modelValue: d.value.email,
                                "onUpdate:modelValue": e[13] || (e[13] = (a) => d.value.email = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "john.doe@example.com",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [41]
                          })) : m("", !0),
                          g("phone") ? (c(), y(i, {
                            key: 4,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[42] || (e[42] = n("label", { class: "account_label mb-2" }, "Phone Number", -1)),
                              l(v, {
                                modelValue: d.value.phone,
                                "onUpdate:modelValue": e[14] || (e[14] = (a) => d.value.phone = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "(123) 456-7890",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [42]
                          })) : m("", !0),
                          g("streetAddress") ? (c(), y(i, {
                            key: 5,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[43] || (e[43] = n("label", { class: "account_label mb-2" }, "Street Address", -1)),
                              l(v, {
                                modelValue: d.value.streetAddress,
                                "onUpdate:modelValue": e[15] || (e[15] = (a) => d.value.streetAddress = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "123 Main St",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [43]
                          })) : m("", !0),
                          g("city") ? (c(), y(i, {
                            key: 6,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[44] || (e[44] = n("label", { class: "account_label mb-2" }, "City", -1)),
                              l(v, {
                                modelValue: d.value.city,
                                "onUpdate:modelValue": e[16] || (e[16] = (a) => d.value.city = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Mumbai",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [44]
                          })) : m("", !0),
                          g("state") ? (c(), y(i, {
                            key: 7,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[45] || (e[45] = n("label", { class: "account_label mb-2" }, "State", -1)),
                              l(v, {
                                modelValue: d.value.state,
                                "onUpdate:modelValue": e[17] || (e[17] = (a) => d.value.state = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Select a state",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [45]
                          })) : m("", !0),
                          g("zipCode") ? (c(), y(i, {
                            key: 8,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[46] || (e[46] = n("label", { class: "account_label mb-2" }, "ZIP Code", -1)),
                              l(v, {
                                modelValue: d.value.zipCode,
                                "onUpdate:modelValue": e[18] || (e[18] = (a) => d.value.zipCode = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "400001",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [46]
                          })) : m("", !0),
                          g("gstin") ? (c(), y(i, {
                            key: 9,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[47] || (e[47] = n("label", { class: "account_label mb-2" }, "GSTIN (Optional)", -1)),
                              l(v, {
                                modelValue: d.value.gstin,
                                "onUpdate:modelValue": e[19] || (e[19] = (a) => d.value.gstin = a),
                                variant: "outlined",
                                density: "compact",
                                placeholder: "15-digit GST Identification Number",
                                class: "accouting_field accouting_active_field"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1,
                            __: [47]
                          })) : m("", !0)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  l(ge, { class: "justify-end" }, {
                    default: t(() => [
                      l(V, {
                        color: "success",
                        class: "account_v_btn_primary"
                      }, {
                        prepend: t(() => [
                          l(K, {
                            size: "20",
                            style: { "margin-right": "6px" }
                          })
                        ]),
                        default: t(() => [
                          e[48] || (e[48] = U(" Save Vendor ", -1))
                        ]),
                        _: 1,
                        __: [48]
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : m("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
export {
  Re as default
};
