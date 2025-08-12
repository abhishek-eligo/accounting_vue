import { toRefs as Ve, toRef as m, computed as U, shallowRef as W, createVNode as e, mergeProps as T, ref as h, onMounted as Ie, resolveComponent as g, createElementBlock as G, openBlock as r, Fragment as H, createElementVNode as l, createBlock as d, withCtx as n, toDisplayString as Z, renderList as q, normalizeClass as we, createTextVNode as S } from "vue";
import { _ as De } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { g as ke, h as Te, i as Se, V as Q, a as Ce, c as Pe } from "./VCard-BuMrnEL1.js";
import { c as Re, b as ze, d as Be, u as Ae, p as Ee, e as Fe, f as Me, g as Ne, h as Ue, i as Ge, j as He, k as Y, l as $, m as je, n as Je, o as Le } from "./VDataTable-C7AYZo_S.js";
import { i as Oe, p as Ke, av as Xe, am as We, u as Ze, ao as j, aB as qe, e as Qe, aJ as Ye, b as C, Z as $e, _ as ea } from "./main-u1Mo8sLp.js";
import { V as ee } from "./VTable-CUsxa3ap.js";
import { V as aa } from "./VDialog-CTlIykqf.js";
import { V as ta } from "./VCheckbox-DqY53STU.js";
const la = Ke({
  ...Le(),
  ...Je(),
  ...Se(),
  ...qe()
}, "VDataTableVirtual"), sa = Oe()({
  name: "VDataTableVirtual",
  props: la(),
  emits: {
    "update:modelValue": (a) => !0,
    "update:sortBy": (a) => !0,
    "update:options": (a) => !0,
    "update:groupBy": (a) => !0,
    "update:expanded": (a) => !0
  },
  setup(a, P) {
    let {
      attrs: R,
      slots: s
    } = P;
    const {
      groupBy: v
    } = Re(a), {
      sortBy: p,
      multiSort: c,
      mustSort: z
    } = ze(a), {
      disableSort: y
    } = Ve(a), {
      columns: b,
      headers: B,
      filterFunctions: D,
      sortFunctions: J,
      sortRawFunctions: t
    } = Be(a, {
      groupBy: v,
      showSelect: m(a, "showSelect"),
      showExpand: m(a, "showExpand")
    }), {
      items: x
    } = Ae(a, b), f = m(a, "search"), {
      filteredItems: V
    } = Xe(a, x, f, {
      transform: (i) => i.columns,
      customKeyFilter: D
    }), {
      toggleSort: I
    } = Ee({
      sortBy: p,
      multiSort: c,
      mustSort: z
    }), {
      sortByWithGroups: A,
      opened: E,
      extractRows: o,
      isGroupOpen: F,
      toggleGroup: ae
    } = Fe({
      groupBy: v,
      sortBy: p,
      disableSort: y
    }), {
      sortedItems: te
    } = Me(a, V, A, {
      transform: (i) => ({
        ...i.raw,
        ...i.columns
      }),
      sortFunctions: J,
      sortRawFunctions: t
    }), {
      flatItems: M
    } = Ne(te, v, E), k = U(() => o(M.value)), {
      isSelected: le,
      select: se,
      selectAll: oe,
      toggleSelect: ne,
      someSelected: re,
      allSelected: ie
    } = Ue(a, {
      allItems: k,
      currentPage: k
    }), {
      isExpanded: ue,
      toggleExpand: de
    } = Ge(a), {
      containerRef: ce,
      markerRef: me,
      paddingTop: ve,
      paddingBottom: pe,
      computedItems: be,
      handleItemResize: fe,
      handleScroll: _e,
      handleScrollend: he
    } = ke(a, M), ge = U(() => be.value.map((i) => i.raw));
    He({
      sortBy: p,
      page: W(1),
      itemsPerPage: W(-1),
      groupBy: v,
      search: f
    }), We({
      VDataTableRows: {
        hideNoData: m(a, "hideNoData"),
        noDataText: m(a, "noDataText"),
        loading: m(a, "loading"),
        loadingText: m(a, "loadingText")
      }
    });
    const w = U(() => ({
      sortBy: p.value,
      toggleSort: I,
      someSelected: re.value,
      allSelected: ie.value,
      isSelected: le,
      select: se,
      selectAll: oe,
      toggleSelect: ne,
      isExpanded: ue,
      toggleExpand: de,
      isGroupOpen: F,
      toggleGroup: ae,
      items: k.value.map((i) => i.raw),
      internalItems: k.value,
      groupedItems: M.value,
      columns: b.value,
      headers: B.value
    }));
    Ze(() => {
      const i = Y.filterProps(a), ye = $.filterProps(a), xe = ee.filterProps(a);
      return e(ee, T({
        class: ["v-data-table", {
          "v-data-table--loading": a.loading
        }, a.class],
        style: a.style
      }, xe), {
        top: () => {
          var u;
          return (u = s.top) == null ? void 0 : u.call(s, w.value);
        },
        wrapper: () => {
          var u, L, O;
          return e("div", {
            ref: ce,
            onScrollPassive: _e,
            onScrollend: he,
            class: "v-table__wrapper",
            style: {
              height: j(a.height)
            }
          }, [e("table", null, [(u = s.colgroup) == null ? void 0 : u.call(s, w.value), !a.hideDefaultHeader && e("thead", {
            key: "thead"
          }, [e(Y, T(i, {
            sticky: a.fixedHeader
          }), s)]), !a.hideDefaultBody && e("tbody", null, [e("tr", {
            ref: me,
            style: {
              height: j(ve.value),
              border: 0
            }
          }, [e("td", {
            colspan: b.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)]), (L = s["body.prepend"]) == null ? void 0 : L.call(s, w.value), e($, T(R, ye, {
            items: ge.value
          }), {
            ...s,
            item: (_) => e(Te, {
              key: _.internalItem.index,
              renderless: !0,
              "onUpdate:height": (N) => fe(_.internalItem.index, N)
            }, {
              default: (N) => {
                var X;
                let {
                  itemRef: K
                } = N;
                return ((X = s.item) == null ? void 0 : X.call(s, {
                  ..._,
                  itemRef: K
                })) ?? e(je, T(_.props, {
                  ref: K,
                  key: _.internalItem.index,
                  index: _.internalItem.index
                }), s);
              }
            })
          }), (O = s["body.append"]) == null ? void 0 : O.call(s, w.value), e("tr", {
            style: {
              height: j(pe.value),
              border: 0
            }
          }, [e("td", {
            colspan: b.value.length,
            style: {
              height: 0,
              border: 0
            }
          }, null)])])])]);
        },
        bottom: () => {
          var u;
          return (u = s.bottom) == null ? void 0 : u.call(s, w.value);
        }
      });
    });
  }
}), oa = { class: "pa-2" }, na = { class: "custom-header-cell text-center" }, ra = { class: "header-col-flex" }, ia = { class: "header-icon-row mt-2" }, ua = { class: "custom-header-cell text-center" }, da = { class: "header-col-flex" }, ca = { class: "header-icon-row mt-2" }, ma = { class: "custom-header-cell text-center" }, va = { class: "header-col-flex" }, pa = { class: "header-icon-row mt-2" }, ba = { class: "text-center" }, fa = { class: "text-center" }, _a = { class: "text-center" }, ha = { class: "mb-4" }, ga = { class: "d-flex" }, ya = {
  __name: "index",
  setup(a) {
    const P = [
      { title: "Feature / Permission", value: "feature", align: "start" },
      { title: "Admin", value: "admin" },
      { title: "Accountant", value: "accountant" },
      { title: "Auditor", value: "auditor" }
    ], R = h([
      { feature: "Dashboard Access", admin: !0, accountant: !0, auditor: !0 },
      { feature: "Customer Management", admin: !0, accountant: !0, auditor: !1 },
      { feature: "Sales Invoices", admin: !0, accountant: !0, auditor: !1 },
      { feature: "Purchase Bills", admin: !0, accountant: !0, auditor: !1 },
      { feature: "Journal Entries", admin: !0, accountant: !0, auditor: !1 },
      { feature: "View Reports", admin: !0, accountant: !0, auditor: !0 },
      { feature: "Export Data", admin: !0, accountant: !0, auditor: !0 },
      { feature: "User Management", admin: !0, accountant: !1, auditor: !1 },
      { feature: "Company Settings", admin: !0, accountant: !1, auditor: !1 }
    ]), s = h(!1), v = h(""), p = [
      { label: "Dashboard", value: "dashboard" },
      { label: "Reporting", value: "reporting" },
      { label: "Sales", value: "sales" },
      { label: "Purchases", value: "purchases" },
      { label: "Accounting", value: "accounting" },
      { label: "Administration", value: "administration" }
    ], c = h("dashboard"), z = {
      dashboard: [{ label: "Dashboard Access", value: "dashboard_access" }],
      reporting: [{ label: "View Reports", value: "view_reports" }, { label: "Export Data", value: "export_data" }],
      sales: [{ label: "Sales Invoices", value: "sales_invoices" }, { label: "Customer Management", value: "Customer Management" }],
      purchases: [{ label: "Purchase Bills", value: "purchase_bills" }],
      accounting: [{ label: "Journal Entries", value: "journal_entries" }],
      administration: [{ label: "User Management", value: "user_management" }, { label: "Company Settings", value: "company_settings" }]
    }, y = h([]);
    function b() {
      s.value = !0, v.value = "", c.value = "dashboard", y.value = [];
    }
    function B() {
      s.value = !1;
    }
    const D = h(0);
    return Ie(() => {
      setInterval(() => {
        D.value++;
      }, 3e3);
    }), (J, t) => {
      const x = g("IconEdit"), f = g("IconTrash"), V = g("IconCheck"), I = g("IconX"), A = g("IconDeviceFloppy"), E = g("IconCirclePlus");
      return r(), G(H, null, [
        t[13] || (t[13] = l("div", { class: "d-flex align-center justify-space-between mb-4" }, [
          l("h1", { class: "user-title" }, "User Role and Permission")
        ], -1)),
        e(Q, {
          title: "Permission Matrix",
          subtitle: "Manage what users can see and do in your organization.",
          class: "pa-2 mb-6 account_ui_vcard account_vcard_border"
        }, {
          default: n(() => [
            l("div", oa, [
              e(sa, {
                headers: P,
                items: R.value,
                class: "custom-permission-table border",
                "hide-default-footer": ""
              }, {
                headers: n(() => [
                  l("tr", null, [
                    t[6] || (t[6] = l("th", { class: "custom-header-cell" }, "Feature / Permission", -1)),
                    l("th", na, [
                      l("div", ra, [
                        t[3] || (t[3] = l("span", { class: "role-label" }, "Admin", -1)),
                        l("div", ia, [
                          e(x, {
                            size: "20",
                            class: "header-action-icon"
                          }),
                          e(f, {
                            size: "20",
                            class: "header-action-icon ml-1"
                          })
                        ])
                      ])
                    ]),
                    l("th", ua, [
                      l("div", da, [
                        t[4] || (t[4] = l("span", { class: "role-label" }, "Accountant", -1)),
                        l("div", ca, [
                          e(x, {
                            size: "20",
                            class: "header-action-icon"
                          }),
                          e(f, {
                            size: "20",
                            class: "header-action-icon ml-1"
                          })
                        ])
                      ])
                    ]),
                    l("th", ma, [
                      l("div", va, [
                        t[5] || (t[5] = l("span", { class: "role-label" }, "Auditor", -1)),
                        l("div", pa, [
                          e(x, {
                            size: "20",
                            class: "header-action-icon"
                          }),
                          e(f, {
                            size: "20",
                            class: "header-action-icon ml-1"
                          })
                        ])
                      ])
                    ])
                  ])
                ]),
                item: n(({ item: o }) => [
                  l("tr", null, [
                    l("td", null, Z(o.feature), 1),
                    l("td", ba, [
                      o.admin ? (r(), d(V, {
                        key: 0,
                        size: "22",
                        style: { color: "#16a34a" }
                      })) : (r(), d(I, {
                        key: 1,
                        size: "22",
                        style: { color: "#ef4444" }
                      }))
                    ]),
                    l("td", fa, [
                      o.accountant ? (r(), d(V, {
                        key: 0,
                        size: "22",
                        style: { color: "#16a34a" }
                      })) : (r(), d(I, {
                        key: 1,
                        size: "22",
                        style: { color: "#ef4444" }
                      }))
                    ]),
                    l("td", _a, [
                      o.auditor ? (r(), d(V, {
                        key: 0,
                        size: "22",
                        style: { color: "#16a34a" }
                      })) : (r(), d(I, {
                        key: 1,
                        size: "22",
                        style: { color: "#ef4444" }
                      }))
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["items"])
            ])
          ]),
          _: 1
        }),
        e(aa, {
          modelValue: s.value,
          "onUpdate:modelValue": t[2] || (t[2] = (o) => s.value = o),
          "max-width": "800"
        }, {
          default: n(() => [
            e(Q, {
              title: "Create a New Role",
              subtitle: "Define a new user role and assign specific permissions.",
              class: "account_ui_vcard account_vcard_border pa-2"
            }, {
              default: n(() => [
                e(Ce, null, {
                  default: n(() => [
                    l("div", ha, [
                      t[7] || (t[7] = l("label", { class: "account_label mb-2" }, "Role Name", -1)),
                      e(Qe, {
                        class: "accouting_field accouting_active_field",
                        variant: "outlined",
                        density: "compact",
                        placeholder: "e.g. Sales Manager"
                      })
                    ]),
                    l("div", null, [
                      t[8] || (t[8] = l("div", { class: "font-weight-medium mb-1" }, "Permissions", -1)),
                      t[9] || (t[9] = l("div", { class: "text-caption mb-2" }, "Select the permissions this role should have.", -1)),
                      e(Ye, {
                        modelValue: c.value,
                        "onUpdate:modelValue": t[0] || (t[0] = (o) => c.value = o),
                        class: "mb-3 toggle-btn-section",
                        mandatory: ""
                      }, {
                        default: n(() => [
                          (r(), G(H, null, q(p, (o) => e(C, {
                            key: o.value,
                            value: o.value,
                            size: "small",
                            class: we([c.value === o.value ? "account_v_btn_primary" : "account_v_btn_ghost", "mx-1 rounded-sm"]),
                            variant: "elevated"
                          }, {
                            default: n(() => [
                              S(Z(o.label), 1)
                            ]),
                            _: 2
                          }, 1032, ["value", "class"])), 64))
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      e($e, { class: "pa-0 border rounded-lg" }, {
                        default: n(() => [
                          l("div", ga, [
                            (r(!0), G(H, null, q(z[c.value], (o) => (r(), d(ea, {
                              key: o.value,
                              class: "pa-0 me-3 ms-2"
                            }, {
                              default: n(() => [
                                e(ta, {
                                  class: "account_v_checkbox",
                                  modelValue: y.value,
                                  "onUpdate:modelValue": t[1] || (t[1] = (F) => y.value = F),
                                  label: o.label,
                                  value: o.value,
                                  "hide-details": "",
                                  density: "compact"
                                }, null, 8, ["modelValue", "label", "value"])
                              ]),
                              _: 2
                            }, 1024))), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                e(Pe, { class: "justify-end" }, {
                  default: n(() => [
                    e(C, {
                      class: "account_v_btn_outlined",
                      onClick: B
                    }, {
                      default: n(() => t[10] || (t[10] = [
                        S("Cancel", -1)
                      ])),
                      _: 1,
                      __: [10]
                    }),
                    e(C, { class: "account_v_btn_primary" }, {
                      prepend: n(() => [
                        e(A, { size: "15" })
                      ]),
                      default: n(() => [
                        t[11] || (t[11] = S(" Save ", -1))
                      ]),
                      _: 1,
                      __: [11]
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        (r(), d(C, {
          onClick: b,
          key: D.value,
          class: "account_add_new_btn bounce"
        }, {
          prepend: n(() => [
            e(E, {
              size: "20",
              style: { "margin-right": "6px" }
            })
          ]),
          default: n(() => [
            t[12] || (t[12] = S(" Add New Role ", -1))
          ]),
          _: 1,
          __: [12]
        }))
      ], 64);
    };
  }
}, Ca = /* @__PURE__ */ De(ya, [["__scopeId", "data-v-a18c9548"]]);
export {
  Ca as default
};
