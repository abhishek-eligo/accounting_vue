import { _ as Z } from "./DynamicDataTable-BJLDKDK3.js";
import { ref as d, computed as A, onMounted as J, resolveComponent as f, createElementBlock as b, openBlock as l, createVNode as t, createBlock as o, withCtx as a, createCommentVNode as n, createElementVNode as s, createTextVNode as T, Fragment as M, renderList as D, toDisplayString as w, withModifiers as K, normalizeClass as W, mergeProps as Y } from "vue";
import { _ as Q } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { w as U, V as g, e as u, b as h, h as ee } from "./main-V1ksYwjH.js";
import { V as x, a as c } from "./VRow-DeLLEu_l.js";
import { V as F, a as te, b as ae, c as le } from "./VCard-BbSjOW7e.js";
const se = { class: "account_vendors_list" }, ie = { class: "account_ui_vcard" }, oe = { class: "d-flex align-center gap-2" }, ne = { class: "account_vcard_menu_items py-1" }, ce = ["onClick"], re = { class: "font-weight-bold" }, de = ["onClick"], ue = {
  __name: "index",
  setup(_e) {
    const k = d([
      { section: "Basic Information", label: "First Name", key: "firstName", visible: !0 },
      { section: "Basic Information", label: "Last Name", key: "lastName", visible: !0 },
      { section: "Basic Information", label: "Company Name", key: "companyName", visible: !0 },
      { section: "Contact Details", label: "Email Address", key: "email", visible: !0 },
      { section: "Contact Details", label: "Phone Number", key: "phone", visible: !0 },
      { section: "Address & Tax", label: "Street Address", key: "streetAddress", visible: !0 },
      { section: "Address & Tax", label: "City", key: "city", visible: !0 },
      { section: "Address & Tax", label: "State", key: "state", visible: !0 },
      { section: "Address & Tax", label: "ZIP Code", key: "zipCode", visible: !0 },
      { section: "Address & Tax", label: "GSTIN (Optional)", key: "gstin", visible: !0 }
    ]), V = A(() => {
      const i = {};
      return k.value.forEach((e) => {
        i[e.section] || (i[e.section] = []), i[e.section].push(e);
      }), i;
    }), z = (i) => V.value[i].every((m) => m.visible), B = (i) => {
      const e = V.value[i], m = e.every((p) => p.visible);
      e.forEach((p) => {
        p.visible = !m;
      });
    }, C = (i) => k.value.some((e) => e.section === i && e.visible), r = (i) => {
      var e;
      return (e = k.value.find((m) => m.key === i)) == null ? void 0 : e.visible;
    }, E = d([
      { title: "Vendor Name", align: "start", sortable: !1, value: "vendorName", visible: !0 },
      { title: "Vendor Type", value: "vendorType", visible: !0 },
      { title: "Total Purchases", value: "totalPurchases", visible: !0 },
      { title: "Last Purchase Date", value: "lastPurchaseDate", visible: !0 },
      { title: "Status", value: "status", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]), _ = d(Array.from({ length: 100 }, (i, e) => ({
      vendorName: `Vendor ${e + 1}`,
      vendorEmail: `vendor${e + 1}@test.com`,
      vendorType: ["Supplier", "Manufacturer"][Math.floor(Math.random() * 2)],
      totalPurchases: Math.floor(Math.random() * 20),
      lastPurchaseDate: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
      status: ["Active", "Pending", "Inactive"][Math.floor(Math.random() * 3)]
    }))), L = d([
      { title: "Status", checked: !1 },
      { title: "Vendor Type", checked: !1 },
      { title: "Last Purchase From", checked: !1 },
      { title: "Last Purchase To", checked: !1 }
    ]), $ = d([
      { title: "Active", value: "Active" },
      { title: "Pending", value: "Pending" },
      { title: "Inactive", value: "Inactive" }
    ]), j = d([
      { title: "Supplier", value: "Supplier" },
      { title: "Manufacturer", value: "Manufacturer" }
    ]), G = A(() => ({
      totalRecords: _.value.length,
      avgPurchase: _.value.reduce((i, e) => i + e.totalPurchases * 100, 0) / _.value.length,
      top10AvgPurchase: _.value.sort((i, e) => e.totalPurchases - i.totalPurchases).slice(0, Math.ceil(_.value.length * 0.1)).reduce((i, e) => i + e.totalPurchases * 100, 0) / Math.ceil(_.value.length * 0.1),
      avgRating: 4.2
    })), I = d(!1), N = () => {
      I.value = !I.value;
    };
    d([
      { title: "Credit", value: "credit" },
      { title: "Debit", value: "debit" }
    ]), d("credit");
    const P = d(0);
    return J(() => {
      setInterval(() => {
        P.value++;
      }, 3e3);
    }), (i, e) => {
      const m = f("IconSettings"), p = f("IconCheck"), O = f("IconSquare"), R = f("IconX"), q = f("IconDeviceFloppy"), H = Z, X = f("IconCirclePlus");
      return l(), b("div", se, [
        t(U, { mode: "in-out" }, {
          default: a(() => [
            I.value ? (l(), o(x, {
              key: 0,
              class: "justify-center"
            }, {
              default: a(() => [
                t(c, { cols: "12" }, {
                  default: a(() => [
                    s("div", ie, [
                      t(F, {
                        title: "Create a New Vendor",
                        class: "pa-2 account_vcard_border",
                        subtitle: "Fill in the details below to add a new vendor to your records."
                      }, {
                        append: a(() => [
                          s("div", oe, [
                            t(ee, {
                              location: "start",
                              transition: "slide-y-transition",
                              "offset-y": "",
                              "close-on-content-click": !1
                            }, {
                              activator: a(({ props: S }) => [
                                t(h, Y(S, {
                                  variant: "text",
                                  size: "x-small",
                                  rounded: ""
                                }), {
                                  default: a(() => [
                                    t(m, { size: "20" })
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              default: a(() => [
                                t(F, {
                                  class: "account_vcard_menu account_vcard_border",
                                  width: "250px"
                                }, {
                                  default: a(() => [
                                    e[0] || (e[0] = s("div", { class: "account_vcard_menu_hdng" }, "Show/Hide Optional Fields", -1)),
                                    t(g, { class: "my-1 mt-0" }),
                                    s("div", ne, [
                                      (l(!0), b(M, null, D(V.value, (S, y) => (l(), b("div", { key: y }, [
                                        s("div", {
                                          class: "field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                          onClick: (v) => B(y)
                                        }, [
                                          z(y) ? (l(), o(p, {
                                            key: 0,
                                            size: "16"
                                          })) : (l(), o(O, {
                                            key: 1,
                                            size: "16"
                                          })),
                                          s("span", re, w(y), 1)
                                        ], 8, ce),
                                        (l(!0), b(M, null, D(S, (v) => (l(), b("div", {
                                          key: v.key,
                                          class: "account_vcard_menu_item",
                                          style: { "padding-left": "10px" }
                                        }, [
                                          s("div", {
                                            class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2",
                                            onClick: K((me) => v.visible = !v.visible, ["stop"])
                                          }, [
                                            v.visible ? (l(), o(p, {
                                              key: 0,
                                              size: "16"
                                            })) : n("", !0),
                                            s("span", {
                                              class: W(v.visible ? "" : "field_list_dynamic_ml")
                                            }, w(v.label), 3)
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
                            t(h, {
                              onClick: N,
                              variant: "text",
                              size: "x-small",
                              rounded: "",
                              class: "account_vcard_close_btn"
                            }, {
                              default: a(() => [
                                t(R, { size: "20" })
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        default: a(() => [
                          t(te, null, {
                            default: a(() => [
                              t(x, null, {
                                default: a(() => [
                                  C("Basic Information") ? (l(), o(c, {
                                    key: 0,
                                    cols: "12",
                                    class: "pb-0"
                                  }, {
                                    default: a(() => [
                                      e[1] || (e[1] = s("h5", { class: "account_form_info_hdng" }, "Basic Information", -1)),
                                      t(g, { class: "mb-2 mt-1" })
                                    ]),
                                    _: 1,
                                    __: [1]
                                  })) : n("", !0),
                                  r("firstName") ? (l(), o(c, {
                                    key: 1,
                                    cols: "12",
                                    lg: "4",
                                    md: "4"
                                  }, {
                                    default: a(() => [
                                      e[2] || (e[2] = s("label", { class: "account_label mb-2" }, "First Name", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "John"
                                      })
                                    ]),
                                    _: 1,
                                    __: [2]
                                  })) : n("", !0),
                                  r("lastName") ? (l(), o(c, {
                                    key: 2,
                                    cols: "12",
                                    lg: "4",
                                    md: "4"
                                  }, {
                                    default: a(() => [
                                      e[3] || (e[3] = s("label", { class: "account_label mb-2" }, "Last Name", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Doe"
                                      })
                                    ]),
                                    _: 1,
                                    __: [3]
                                  })) : n("", !0),
                                  r("companyName") ? (l(), o(c, {
                                    key: 3,
                                    cols: "12",
                                    lg: "4",
                                    md: "4"
                                  }, {
                                    default: a(() => [
                                      e[4] || (e[4] = s("label", { class: "account_label mb-2" }, "Company Name", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Innovate Inc."
                                      })
                                    ]),
                                    _: 1,
                                    __: [4]
                                  })) : n("", !0),
                                  C("Contact Details") ? (l(), o(c, {
                                    key: 4,
                                    cols: "12",
                                    class: "pb-0"
                                  }, {
                                    default: a(() => [
                                      e[5] || (e[5] = s("h5", { class: "account_form_info_hdng" }, "Contact Details", -1)),
                                      t(g, { class: "mb-2 mt-1" })
                                    ]),
                                    _: 1,
                                    __: [5]
                                  })) : n("", !0),
                                  r("email") ? (l(), o(c, {
                                    key: 5,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: a(() => [
                                      e[6] || (e[6] = s("label", { class: "account_label mb-2" }, "Email Address", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "john.doe@example.com"
                                      })
                                    ]),
                                    _: 1,
                                    __: [6]
                                  })) : n("", !0),
                                  r("phone") ? (l(), o(c, {
                                    key: 6,
                                    cols: "12",
                                    lg: "6",
                                    md: "6"
                                  }, {
                                    default: a(() => [
                                      e[7] || (e[7] = s("label", { class: "account_label mb-2" }, "Phone Number", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "(123) 456-7890"
                                      })
                                    ]),
                                    _: 1,
                                    __: [7]
                                  })) : n("", !0),
                                  C("Address & Tax") ? (l(), o(c, {
                                    key: 7,
                                    cols: "12",
                                    class: "pb-0"
                                  }, {
                                    default: a(() => [
                                      e[8] || (e[8] = s("h5", { class: "account_form_info_hdng" }, "Address & Tax", -1)),
                                      t(g, { class: "mb-2 mt-1" })
                                    ]),
                                    _: 1,
                                    __: [8]
                                  })) : n("", !0),
                                  r("streetAddress") ? (l(), o(c, {
                                    key: 8,
                                    cols: "12",
                                    lg: "12",
                                    md: "12"
                                  }, {
                                    default: a(() => [
                                      e[9] || (e[9] = s("label", { class: "account_label mb-2" }, "Street Address", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "123 Main St"
                                      })
                                    ]),
                                    _: 1,
                                    __: [9]
                                  })) : n("", !0),
                                  r("city") ? (l(), o(c, {
                                    key: 9,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: a(() => [
                                      e[10] || (e[10] = s("label", { class: "account_label mb-2" }, "City", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Mumbai"
                                      })
                                    ]),
                                    _: 1,
                                    __: [10]
                                  })) : n("", !0),
                                  r("state") ? (l(), o(c, {
                                    key: 10,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: a(() => [
                                      e[11] || (e[11] = s("label", { class: "account_label mb-2" }, "State", -1)),
                                      t(ae, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "Select a state"
                                      })
                                    ]),
                                    _: 1,
                                    __: [11]
                                  })) : n("", !0),
                                  r("zipCode") ? (l(), o(c, {
                                    key: 11,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: a(() => [
                                      e[12] || (e[12] = s("label", { class: "account_label mb-2" }, "ZIP Code", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "400001"
                                      })
                                    ]),
                                    _: 1,
                                    __: [12]
                                  })) : n("", !0),
                                  r("gstin") ? (l(), o(c, {
                                    key: 12,
                                    cols: "12",
                                    lg: "3",
                                    md: "3"
                                  }, {
                                    default: a(() => [
                                      e[13] || (e[13] = s("label", { class: "account_label mb-2" }, "GSTIN (Optional)", -1)),
                                      t(u, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        placeholder: "15-digit GST Identification Number"
                                      })
                                    ]),
                                    _: 1,
                                    __: [13]
                                  })) : n("", !0)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          t(le, { class: "justify-end" }, {
                            default: a(() => [
                              t(h, {
                                color: "success",
                                class: "account_v_btn_primary"
                              }, {
                                prepend: a(() => [
                                  t(q, { size: "20" })
                                ]),
                                default: a(() => [
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
            })) : n("", !0)
          ]),
          _: 1
        }),
        t(x, null, {
          default: a(() => [
            t(c, { cols: "12" }, {
              default: a(() => [
                t(H, {
                  headers: E.value,
                  items: _.value,
                  filters: L.value,
                  title: "Vendor",
                  "status-items": $.value,
                  "account-type-items": j.value,
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
        (l(), o(h, {
          onClick: N,
          key: P.value,
          class: "account_add_new_btn bounce"
        }, {
          prepend: a(() => [
            t(X, { size: "20" })
          ]),
          default: a(() => [
            e[15] || (e[15] = T(" Add Vendor ", -1))
          ]),
          _: 1,
          __: [15]
        }))
      ]);
    };
  }
}, he = /* @__PURE__ */ Q(ue, [["__scopeId", "data-v-971200b3"]]);
export {
  he as default
};
