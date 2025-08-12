import { _ as U } from "./DynamicDataTable-s1EmKkRe.js";
import { ref as o, computed as M, onMounted as W, resolveComponent as f, createElementBlock as h, openBlock as l, createVNode as a, createBlock as n, withCtx as t, createCommentVNode as c, createElementVNode as s, createTextVNode as T, Fragment as x, renderList as D, toDisplayString as w, withModifiers as Z, normalizeClass as q, mergeProps as X } from "vue";
import { _ as Y } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { w as Q, V as y, e as u, b as g, h as ee } from "./main-u1Mo8sLp.js";
import { V, a as r } from "./VRow-Bnh7mzWV.js";
import { V as B, a as ae, b as te, c as le } from "./VCard-BuMrnEL1.js";
const se = { class: "account_vendors_list" }, ie = { class: "account_ui_vcard" }, ne = { class: "d-flex align-center gap-2" }, oe = { class: "account_vcard_menu_items py-1" }, ce = ["onClick"], re = { class: "font-weight-bold" }, de = ["onClick"], ue = {
  __name: "index",
  setup(ve) {
    const k = o([
      { section: "Basic Information", label: "GSTIN (Optional)", key: "gstin", visible: !0 },
      { section: "Basic Information", label: "First Name", key: "firstName", visible: !0 },
      { section: "Basic Information", label: "Last Name", key: "lastName", visible: !0 },
      { section: "Basic Information", label: "Company Name", key: "companyName", visible: !0 },
      { section: "Contact Details", label: "Email Address", key: "email", visible: !0 },
      { section: "Contact Details", label: "Phone Number", key: "phone", visible: !0 },
      { section: "Address & Tax", label: "Street Address", key: "streetAddress", visible: !0 },
      { section: "Address & Tax", label: "City", key: "city", visible: !0 },
      { section: "Address & Tax", label: "State", key: "state", visible: !0 },
      { section: "Address & Tax", label: "ZIP Code", key: "zipCode", visible: !0 }
    ]);
    o([
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
    const P = M(() => {
      const i = {};
      return k.value.forEach((e) => {
        i[e.section] || (i[e.section] = []), i[e.section].push(e);
      }), i;
    }), F = (i) => P.value[i].every((m) => m.visible), z = (i) => {
      const e = P.value[i], m = e.every((p) => p.visible);
      e.forEach((p) => {
        p.visible = !m;
      });
    }, C = (i) => k.value.some((e) => e.section === i && e.visible), d = (i) => {
      var e;
      return (e = k.value.find((m) => m.key === i)) == null ? void 0 : e.visible;
    }, L = o([
      { title: "Vendor Name", align: "start", sortable: !1, value: "vendorName", visible: !0 },
      { title: "Vendor Type", value: "vendorType", visible: !0 },
      { title: "Total Purchases", value: "totalPurchases", visible: !0 },
      { title: "Last Purchase Date", value: "lastPurchaseDate", visible: !0 },
      { title: "Status", value: "status", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]), v = o(Array.from({ length: 100 }, (i, e) => ({
      vendorName: `Vendor ${e + 1}`,
      vendorEmail: `vendor${e + 1}@test.com`,
      vendorType: ["Supplier", "Manufacturer"][Math.floor(Math.random() * 2)],
      totalPurchases: Math.floor(Math.random() * 20),
      lastPurchaseDate: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
      status: ["Active", "Pending", "Inactive"][Math.floor(Math.random() * 3)]
    }))), j = o([
      { title: "Status", checked: !1 },
      { title: "Vendor Type", checked: !1 },
      { title: "Last Purchase From", checked: !1 },
      { title: "Last Purchase To", checked: !1 }
    ]), E = o([
      { title: "Active", value: "Active" },
      { title: "Pending", value: "Pending" },
      { title: "Inactive", value: "Inactive" }
    ]), H = o([
      { title: "Supplier", value: "Supplier" },
      { title: "Manufacturer", value: "Manufacturer" }
    ]), G = M(() => ({
      totalRecords: v.value.length,
      avgPurchase: v.value.reduce((i, e) => i + e.totalPurchases * 100, 0) / v.value.length,
      top10AvgPurchase: v.value.sort((i, e) => e.totalPurchases - i.totalPurchases).slice(0, Math.ceil(v.value.length * 0.1)).reduce((i, e) => i + e.totalPurchases * 100, 0) / Math.ceil(v.value.length * 0.1),
      avgRating: 4.2
    })), I = o(!1), S = () => {
      I.value = !I.value;
    };
    o([
      { title: "Credit", value: "credit" },
      { title: "Debit", value: "debit" }
    ]), o("credit");
    const A = o(0);
    return W(() => {
      setInterval(() => {
        A.value++;
      }, 3e3);
    }), o("02ABCDE1234F1Z5"), o(!1), o(!1), o(!0), o(!1), (i, e) => {
      const m = f("IconSettings"), p = f("IconCheck"), K = f("IconSquare"), $ = f("IconX"), J = f("IconDeviceFloppy"), O = U, R = f("IconCirclePlus");
      return l(), h("div", se, [
        a(Q, { mode: "in-out" }, {
          default: t(() => [
            I.value ? (l(), n(V, {
              key: 0,
              class: "justify-center"
            }, {
              default: t(() => [
                a(r, { cols: "12" }, {
                  default: t(() => [
                    s("div", ie, [
                      a(B, {
                        title: "Create a New Vendor",
                        class: "pa-2 account_vcard_border",
                        subtitle: "Fill in the details below to add a new vendor to your records."
                      }, {
                        append: t(() => [
                          s("div", ne, [
                            a(ee, {
                              location: "start",
                              transition: "slide-y-transition",
                              "offset-y": "",
                              "close-on-content-click": !1
                            }, {
                              activator: t(({ props: N }) => [
                                a(g, X(N, {
                                  variant: "text",
                                  size: "x-small",
                                  rounded: ""
                                }), {
                                  default: t(() => [
                                    a(m, { size: "20" })
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: t(() => [
                                a(B, {
                                  class: "account_vcard_menu account_vcard_border",
                                  width: "250px"
                                }, {
                                  default: t(() => [
                                    e[0] || (e[0] = s("div", { class: "account_vcard_menu_hdng" }, "Show/Hide Optional Fields", -1)),
                                    a(y, { class: "my-1 mt-0" }),
                                    s("div", oe, [
                                      (l(!0), h(x, null, D(P.value, (N, b) => (l(), h("div", { key: b }, [
                                        s("div", {
                                          class: "field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                          onClick: (_) => z(b)
                                        }, [
                                          F(b) ? (l(), n(p, {
                                            key: 0,
                                            size: "16"
                                          })) : (l(), n(K, {
                                            key: 1,
                                            size: "16"
                                          })),
                                          s("span", re, w(b), 1)
                                        ], 8, ce),
                                        (l(!0), h(x, null, D(N, (_) => (l(), h("div", {
                                          key: _.key,
                                          class: "account_vcard_menu_item",
                                          style: { "padding-left": "10px" }
                                        }, [
                                          s("div", {
                                            class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                            onClick: Z((me) => _.visible = !_.visible, ["stop"])
                                          }, [
                                            _.visible ? (l(), n(p, {
                                              key: 0,
                                              size: "16"
                                            })) : c("", !0),
                                            s("span", {
                                              class: q(_.visible ? "" : "field_list_dynamic_ml")
                                            }, w(_.label), 3)
                                          ], 8, de)
                                        ]))), 128))
                                      ]))), 128))
                                    ])
                                  ]),
                                  _: 1,
                                  __: [0]
                                })
                              ]),
                              _: 1
                            }),
                            a(g, {
                              onClick: S,
                              variant: "text",
                              size: "x-small",
                              rounded: "",
                              class: "account_vcard_close_btn"
                            }, {
                              default: t(() => [
                                a($, { size: "20" })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        default: t(() => [
                          a(ae, null, {
                            default: t(() => [
                              a(V, null, {
                                default: t(() => [
                                  C("Basic Information") ? (l(), n(r, {
                                    key: 0,
                                    cols: "12",
                                    class: "pb-0"
                                  }, {
                                    default: t(() => [
                                      e[1] || (e[1] = s("h5", { class: "account_form_info_hdng" }, "Basic Information", -1)),
                                      a(y, { class: "mb-2 mt-1" })
                                    ]),
                                    _: 1,
                                    __: [1]
                                  })) : c("", !0),
                                  d("gstin") ? (l(), n(r, {
                                    key: 1,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: t(() => [
                                      e[2] || (e[2] = s("label", { class: "account_label mb-2" }, "GSTIN (Optional)", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "15-digit GST Identification Number"
                                      })
                                    ]),
                                    _: 1,
                                    __: [2]
                                  })) : c("", !0),
                                  d("firstName") ? (l(), n(r, {
                                    key: 2,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: t(() => [
                                      e[3] || (e[3] = s("label", { class: "account_label mb-2" }, "First Name", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "John"
                                      })
                                    ]),
                                    _: 1,
                                    __: [3]
                                  })) : c("", !0),
                                  d("lastName") ? (l(), n(r, {
                                    key: 3,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: t(() => [
                                      e[4] || (e[4] = s("label", { class: "account_label mb-2" }, "Last Name", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Doe"
                                      })
                                    ]),
                                    _: 1,
                                    __: [4]
                                  })) : c("", !0),
                                  d("companyName") ? (l(), n(r, {
                                    key: 4,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: t(() => [
                                      e[5] || (e[5] = s("label", { class: "account_label mb-2" }, "Company Name", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Innovate Inc."
                                      })
                                    ]),
                                    _: 1,
                                    __: [5]
                                  })) : c("", !0),
                                  C("Contact Details") ? (l(), n(r, {
                                    key: 5,
                                    cols: "12",
                                    class: "pb-0"
                                  }, {
                                    default: t(() => [
                                      e[6] || (e[6] = s("h5", { class: "account_form_info_hdng" }, "Contact Details", -1)),
                                      a(y, { class: "mb-2 mt-1" })
                                    ]),
                                    _: 1,
                                    __: [6]
                                  })) : c("", !0),
                                  d("email") ? (l(), n(r, {
                                    key: 6,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: t(() => [
                                      e[7] || (e[7] = s("label", { class: "account_label mb-2" }, "Email Address", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "john.doe@example.com"
                                      })
                                    ]),
                                    _: 1,
                                    __: [7]
                                  })) : c("", !0),
                                  d("phone") ? (l(), n(r, {
                                    key: 7,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: t(() => [
                                      e[8] || (e[8] = s("label", { class: "account_label mb-2" }, "Phone Number", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "(123) 456-7890"
                                      })
                                    ]),
                                    _: 1,
                                    __: [8]
                                  })) : c("", !0),
                                  C("Address & Tax") ? (l(), n(r, {
                                    key: 8,
                                    cols: "12",
                                    class: "pb-0"
                                  }, {
                                    default: t(() => [
                                      e[9] || (e[9] = s("h5", { class: "account_form_info_hdng" }, "Address & Tax", -1)),
                                      a(y, { class: "mb-2 mt-1" })
                                    ]),
                                    _: 1,
                                    __: [9]
                                  })) : c("", !0),
                                  d("streetAddress") ? (l(), n(r, {
                                    key: 9,
                                    cols: "12",
                                    lg: "12",
                                    md: "12"
                                  }, {
                                    default: t(() => [
                                      e[10] || (e[10] = s("label", { class: "account_label mb-2" }, "Street Address", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "123 Main St"
                                      })
                                    ]),
                                    _: 1,
                                    __: [10]
                                  })) : c("", !0),
                                  d("city") ? (l(), n(r, {
                                    key: 10,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: t(() => [
                                      e[11] || (e[11] = s("label", { class: "account_label mb-2" }, "City", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Mumbai"
                                      })
                                    ]),
                                    _: 1,
                                    __: [11]
                                  })) : c("", !0),
                                  d("state") ? (l(), n(r, {
                                    key: 11,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: t(() => [
                                      e[12] || (e[12] = s("label", { class: "account_label mb-2" }, "State", -1)),
                                      a(te, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Select a state"
                                      })
                                    ]),
                                    _: 1,
                                    __: [12]
                                  })) : c("", !0),
                                  d("zipCode") ? (l(), n(r, {
                                    key: 12,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: t(() => [
                                      e[13] || (e[13] = s("label", { class: "account_label mb-2" }, "ZIP Code", -1)),
                                      a(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "400001"
                                      })
                                    ]),
                                    _: 1,
                                    __: [13]
                                  })) : c("", !0)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          a(le, { class: "justify-end" }, {
                            default: t(() => [
                              a(g, {
                                color: "success",
                                class: "account_v_btn_primary"
                              }, {
                                prepend: t(() => [
                                  a(J, { size: "20" })
                                ]),
                                default: t(() => [
                                  e[14] || (e[14] = T(" Save Vendor ", -1))
                                ]),
                                _: 1,
                                __: [14]
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
            })) : c("", !0)
          ]),
          _: 1
        }),
        a(V, null, {
          default: t(() => [
            a(r, { cols: "12" }, {
              default: t(() => [
                a(O, {
                  headers: L.value,
                  items: v.value,
                  filters: j.value,
                  title: "Vendor",
                  "status-items": E.value,
                  "account-type-items": H.value,
                  "currency-items": [],
                  widgets: G.value,
                  "item-value-key": "vendorName"
                }, null, 8, ["headers", "items", "filters", "status-items", "account-type-items", "widgets"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        (l(), n(g, {
          onClick: S,
          key: A.value,
          class: "account_add_new_btn bounce"
        }, {
          prepend: t(() => [
            a(R, { size: "20" })
          ]),
          default: t(() => [
            e[15] || (e[15] = T(" Add Vendor ", -1))
          ]),
          _: 1,
          __: [15]
        }))
      ]);
    };
  }
}, ge = /* @__PURE__ */ Y(ue, [["__scopeId", "data-v-2f8b35ee"]]);
export {
  ge as default
};
