import { ref as _, computed as se, onMounted as ge, resolveComponent as I, createElementBlock as T, openBlock as g, normalizeStyle as ye, createElementVNode as v, createCommentVNode as q, createBlock as S, normalizeClass as de, toDisplayString as le, withModifiers as he, unref as l, withCtx as a, createTextVNode as x, createVNode as t, mergeProps as Ve, Fragment as ce, renderList as pe, reactive as O } from "vue";
import { d as xe, h as be, Z as we, _ as re, a0 as ue, b as C, e as H, a1 as $ } from "./main-V1ksYwjH.js";
import { V as Ce, a as Ie } from "./VRow-DeLLEu_l.js";
import { V as N, a as W, d as Z, e as J, c as K } from "./VCard-BbSjOW7e.js";
import { V as Q } from "./VDialog-Cf8Ibzul.js";
import { V as te } from "./VForm-00XCBtFh.js";
import { V as ne } from "./VAutocomplete-Bjt6c7VC.js";
const Pe = { class: "d-flex align-center gap-2" }, ke = {
  key: 0,
  style: { width: "16px", height: "16px" },
  class: ""
}, Ge = { class: "" }, Le = { class: "more_options_w" }, $e = { key: 0 }, me = {
  __name: "TreeItem",
  props: {
    node: Object,
    level: {
      type: Number,
      default: 0
    }
  },
  emits: ["edit", "delete"],
  setup(ae, { emit: u }) {
    const r = ae, y = _(!1), h = _(!1), b = _(!1);
    function F() {
      r.node.children && (y.value = !y.value);
    }
    function P() {
      console.log("Edit:", r.node), h.value = !1, f("edit", r.node);
    }
    function D() {
      console.log("Delete:", r.node), h.value = !1, f("delete", r.node);
    }
    const E = se(() => r.node.type === "Balance Sheet" ? "account_balance_chip" : "account_profit_loss_chip"), k = se(() => r.node.children === null || r.node.children && r.node.children.length === 0 && !r.node.children);
    ge(() => {
      r.node.children && r.node.children.length > 0 && (y.value = !0);
    });
    const f = u;
    return (V, o) => {
      const A = I("IconChevronDown"), R = I("IconChevronRight"), B = I("IconFileText"), G = I("IconFolder"), L = I("IconDots"), X = I("IconPencil"), Y = I("IconTrash");
      return g(), T("div", {
        class: "mb-1",
        style: ye({ paddingLeft: `${r.level * 16}px` }),
        onMouseenter: o[4] || (o[4] = (w) => b.value = !0),
        onMouseleave: o[5] || (o[5] = (w) => b.value = !1)
      }, [
        v("div", {
          class: "d-flex align-center justify-space-between pa-1",
          onClick: F,
          style: { cursor: "pointer" }
        }, [
          v("div", Pe, [
            k.value ? q("", !0) : (g(), T("div", ke, [
              r.node.children && y.value ? (g(), S(A, {
                key: 0,
                size: "16"
              })) : r.node.children ? (g(), S(R, {
                key: 1,
                size: "16"
              })) : q("", !0)
            ])),
            k.value ? (g(), S(B, {
              key: 1,
              class: "account_ledger_icon",
              size: "16"
            })) : (g(), S(G, {
              key: 2,
              class: "account_folder_icon",
              size: "16"
            })),
            v("div", Ge, [
              v("h6", {
                class: de([
                  r.level === 0 ? "expansion_base_parent_title" : "expansion_node_title",
                  "mb-0"
                ])
              }, le(r.node.name), 3)
            ])
          ]),
          v("div", {
            class: "d-flex align-center gap-2",
            onClick: o[1] || (o[1] = he(() => {
            }, ["stop"]))
          }, [
            k.value ? q("", !0) : (g(), S(l(xe), {
              key: 0,
              class: de(E.value),
              size: "small"
            }, {
              default: a(() => [
                x(le(r.node.type), 1)
              ]),
              _: 1
            }, 8, ["class"])),
            v("div", Le, [
              t(be, {
                modelValue: h.value,
                "onUpdate:modelValue": o[0] || (o[0] = (w) => h.value = w),
                "close-on-content-click": !1,
                class: "account_vmenu_border",
                location: "bottom end"
              }, {
                activator: a(({ props: w }) => [
                  b.value || h.value ? (g(), S(L, Ve({
                    key: 0,
                    size: "16"
                  }, w), null, 16)) : q("", !0)
                ]),
                default: a(() => [
                  t(we, { class: "account_expansion_list" }, {
                    default: a(() => [
                      t(re, { onClick: P }, {
                        default: a(() => [
                          t(ue, { class: "d-flex align-center gap-3" }, {
                            default: a(() => [
                              t(X, { size: "18" }),
                              o[6] || (o[6] = v("p", { class: "mb-0" }, "Edit", -1))
                            ]),
                            _: 1,
                            __: [6]
                          })
                        ]),
                        _: 1
                      }),
                      t(re, { onClick: D }, {
                        default: a(() => [
                          t(ue, { class: "d-flex trash align-center gap-3" }, {
                            default: a(() => [
                              t(Y, { size: "18" }),
                              o[7] || (o[7] = v("p", { class: "mb-0" }, "Delete", -1))
                            ]),
                            _: 1,
                            __: [7]
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
            ])
          ])
        ]),
        y.value ? (g(), T("div", $e, [
          (g(!0), T(ce, null, pe(r.node.children, (w) => (g(), S(me, {
            key: w.id,
            node: w,
            level: r.level + 1,
            onEdit: o[2] || (o[2] = (z) => f("edit", z)),
            onDelete: o[3] || (o[3] = (z) => f("delete", z))
          }, null, 8, ["node", "level"]))), 128))
        ])) : q("", !0)
      ], 36);
    };
  }
}, Be = { class: "account_ui_vcard" }, Se = { class: "d-flex align-center gap-2" }, Fe = { class: "d-flex align-center gap-2 mb-2" }, De = { class: "d-flex align-center gap-1" }, Ee = { class: "d-flex align-center gap-1" }, Ne = { class: "custom_expansion_item" }, je = {
  __name: "index",
  setup(ae) {
    _(!1);
    const u = O([
      {
        id: "1",
        name: "Assets",
        type: "Balance Sheet",
        children: [
          {
            id: "1.1",
            name: "Current Assets",
            type: "Balance Sheet",
            children: [
              { id: "1.1.1", name: "Cash", type: "Balance Sheet" },
              { id: "1.1.2", name: "Bank Accounts", type: "Balance Sheet" },
              { id: "1.1.3", name: "Accounts Receivable", type: "Balance Sheet" }
            ]
          },
          {
            id: "1.2",
            name: "Fixed Assets",
            type: "Balance Sheet",
            children: [
              { id: "1.2.1", name: "Property & Equipment", type: "Balance Sheet" },
              { id: "1.2.2", name: "Vehicles", type: "Balance Sheet" }
            ]
          }
        ]
      },
      {
        id: "2",
        name: "Liabilities",
        type: "Balance Sheet",
        children: [
          {
            id: "2.1",
            name: "Current Liabilities",
            type: "Balance Sheet",
            children: [
              { id: "2.1.1", name: "Accounts Payable", type: "Balance Sheet" },
              { id: "2.1.2", name: "Credit Card Payable", type: "Balance Sheet" }
            ]
          },
          {
            id: "2.2",
            name: "Long-Term Liabilities",
            type: "Balance Sheet",
            children: [{ id: "2.2.1", name: "Bank Loan", type: "Balance Sheet" }]
          }
        ]
      },
      {
        id: "3",
        name: "Equity",
        type: "Balance Sheet",
        children: [
          { id: "3.1", name: "Owner's Equity", type: "Balance Sheet" },
          { id: "3.2", name: "Retained Earnings", type: "Balance Sheet" }
        ]
      },
      {
        id: "4",
        name: "Income",
        type: "Profit & Loss",
        children: [
          { id: "4.1", name: "Sales Revenue", type: "Profit & Loss" },
          { id: "4.2", name: "Interest Income", type: "Profit & Loss" }
        ]
      },
      {
        id: "5",
        name: "Expenses",
        type: "Profit & Loss",
        children: [
          {
            id: "5.1",
            name: "Cost of Goods Sold",
            type: "Profit & Loss",
            children: [{ id: "5.1.1", name: "Purchases", type: "Profit & Loss" }]
          },
          {
            id: "5.2",
            name: "Operating Expenses",
            type: "Profit & Loss",
            children: [
              { id: "5.2.1", name: "Rent Expense", type: "Profit & Loss" },
              { id: "5.2.2", name: "Salaries & Wages", type: "Profit & Loss" },
              { id: "5.2.3", name: "Utilities Expense", type: "Profit & Loss" }
            ]
          }
        ]
      }
    ]), r = _(!1), y = _(!1), h = _(!1), b = _(!1), F = _(null), P = _(null), D = _(), E = _(), k = _(), f = O({
      name: "",
      parentGroup: null
    }), V = O({
      name: "",
      parentGroup: null
    }), o = O({
      name: "",
      position: "",
      parentGroup: null
    }), A = [(s) => !!s || "This field is required"], R = [(s) => !!s || "This field is required"];
    function B(s, e = 0) {
      return s.flatMap((i) => {
        if (!i.children && i.children !== void 0) return [];
        const c = {
          title: `${"— ".repeat(e)}${i.name}`,
          value: i.id
        }, m = i.children ? B(i.children, e + 1) : [];
        return [c, ...m];
      });
    }
    const G = _(B(u));
    function L(s, e) {
      for (const i of s) {
        if (i.id === e) return i;
        if (i.children) {
          const p = L(i.children, e);
          if (p) return p;
        }
      }
      return null;
    }
    async function X() {
      var m, n;
      const { valid: s } = await ((m = D.value) == null ? void 0 : m.validate());
      if (!s) {
        $.error("Please fill all required fields for Ledger.");
        return;
      }
      const e = L(u, f.parentGroup);
      if (!e) {
        $.error("Parent group not found.");
        return;
      }
      e.children || (e.children = []), f.parentGroup.split(".");
      const i = e.children.length ? Math.max(...e.children.map((d) => parseInt(d.id.split(".").pop()))) + 1 : 1, c = {
        id: `${f.parentGroup}.${i}`,
        name: f.name,
        type: e.type,
        children: null
      };
      e.children.push(c), G.value = B(u), $.success("Ledger created successfully."), r.value = !1, f.name = "", f.parentGroup = null, (n = D.value) == null || n.resetValidation();
    }
    async function Y() {
      var m, n;
      const { valid: s } = await ((m = E.value) == null ? void 0 : m.validate());
      if (!s) {
        $.error("Please fill all required fields for Group.");
        return;
      }
      const e = L(u, V.parentGroup);
      if (!e) {
        $.error("Parent group not found.");
        return;
      }
      e.children || (e.children = []), V.parentGroup.split(".");
      const i = e.children.length ? Math.max(...e.children.map((d) => parseInt(d.id.split(".").pop()))) + 1 : 1, c = {
        id: `${V.parentGroup}.${i}`,
        name: V.name,
        type: e.type,
        children: []
      };
      e.children.push(c), G.value = B(u), $.success("Group created successfully."), y.value = !1, V.name = "", V.parentGroup = null, (n = E.value) == null || n.resetValidation();
    }
    async function w() {
      var oe, ie;
      const { valid: s } = await ((oe = k.value) == null ? void 0 : oe.validate());
      if (!s || !F.value) return;
      const e = F.value, i = o.name, p = o.parentGroup, c = parseInt(o.position), m = j(e), n = L(u, m), d = L(u, p);
      if (!d || m && !n) {
        $.error("Parent group not found.");
        return;
      }
      if (m === p) {
        const U = n.children || [], M = U.findIndex((ee) => ee.id === e.id);
        if (M === -1) return;
        U.splice(M, 1), U.splice(c - 1, 0, e);
      } else {
        d.children || (d.children = []);
        const U = `${d.id}.${d.children.length + 1}`, M = {
          ...e,
          id: U,
          name: i
        };
        n.children = n.children.filter((ee) => ee.id !== e.id), d.children.splice(c - 1, 0, M), F.value = M;
      }
      F.value.name = i, G.value = B(u), $.success("Node updated successfully."), h.value = !1, o.name = "", o.position = "", o.parentGroup = null, (ie = k.value) == null || ie.resetValidation();
    }
    function z(s) {
      F.value = s, o.name = s.name, o.position = fe(s), o.parentGroup = j(s), h.value = !0;
    }
    function j(s) {
      const e = (i, p) => {
        for (const c of i)
          if (c.children) {
            if (c.children.some((n) => n.id === p)) return c.id;
            const m = e(c.children, p);
            if (m) return m;
          }
        return null;
      };
      return e(u, s.id);
    }
    function fe(s) {
      const e = j(s);
      if (!e) return 1;
      const i = L(u, e);
      if (!(i != null && i.children)) return 1;
      const p = i.children.findIndex((c) => c.id === s.id);
      return p >= 0 ? p + 1 : 1;
    }
    async function ve() {
      if (!P.value) return;
      const s = j(P.value);
      if (s) {
        const e = L(u, s);
        e && e.children && (e.children = e.children.filter((i) => i.id !== P.value.id));
      } else
        u.splice(
          u.findIndex((e) => e.id === P.value.id),
          1
        );
      G.value = B(u), $.success("Node deleted successfully."), b.value = !1, P.value = null;
    }
    function _e(s) {
      P.value = s, b.value = !0;
    }
    return (s, e) => {
      const i = I("IconPlus"), p = I("IconFolder"), c = I("IconFileText"), m = me;
      return g(), T("div", Be, [
        t(l(Ce), null, {
          default: a(() => [
            t(l(Ie), {
              cols: "12",
              lg: "9",
              md: "9"
            }, {
              default: a(() => [
                t(l(N), {
                  class: "account_vcard_border shadow-none",
                  title: "Chart of Groups and Ledgers",
                  subtitle: "Create and manage your ledger accounts and groups."
                }, {
                  append: a(() => [
                    v("div", Se, [
                      t(l(C), {
                        onClick: e[0] || (e[0] = (n) => y.value = !0),
                        class: "account_v_btn_outlined",
                        variant: "outlined"
                      }, {
                        prepend: a(() => [
                          t(i, { size: "18" })
                        ]),
                        default: a(() => [
                          e[21] || (e[21] = x(" Add Group ", -1))
                        ]),
                        _: 1,
                        __: [21]
                      }),
                      t(l(C), {
                        onClick: e[1] || (e[1] = (n) => r.value = !0),
                        class: "account_v_btn_primary",
                        variant: "tonal"
                      }, {
                        prepend: a(() => [
                          t(i, { size: "18" })
                        ]),
                        default: a(() => [
                          e[22] || (e[22] = x(" Add Ledger ", -1))
                        ]),
                        _: 1,
                        __: [22]
                      })
                    ])
                  ]),
                  default: a(() => [
                    t(l(W), null, {
                      default: a(() => [
                        v("div", Fe, [
                          v("div", De, [
                            t(p, {
                              class: "account_folder_icon",
                              size: "16"
                            }),
                            e[23] || (e[23] = v("p", { class: "mb-0 account_info_title" }, "Group", -1))
                          ]),
                          v("div", Ee, [
                            t(c, {
                              class: "account_ledger_icon",
                              size: "16"
                            }),
                            e[24] || (e[24] = v("p", { class: "mb-0 account_info_title" }, "Ledger", -1))
                          ])
                        ]),
                        t(l(N), {
                          class: "py-2 pr-2 account_vcard_border shadow-none",
                          variant: "text"
                        }, {
                          default: a(() => [
                            v("div", Ne, [
                              (g(!0), T(ce, null, pe(u, (n) => (g(), S(m, {
                                key: n.id,
                                node: n,
                                level: 0,
                                onEdit: z,
                                onDelete: _e
                              }, null, 8, ["node"]))), 128))
                            ])
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
        t(l(Q), {
          modelValue: r.value,
          "onUpdate:modelValue": e[5] || (e[5] = (n) => r.value = n),
          "max-width": "400",
          "onClick:outside": e[6] || (e[6] = (n) => {
            var d;
            return (d = D.value) == null ? void 0 : d.resetValidation();
          })
        }, {
          default: a(() => [
            t(l(N), null, {
              default: a(() => [
                t(l(Z), { class: "account_ui_swtich_title pb-0" }, {
                  default: a(() => e[25] || (e[25] = [
                    x("Add New Ledger", -1)
                  ])),
                  _: 1,
                  __: [25]
                }),
                t(l(J), { class: "account_ui_swtich_subtitle text-wrap px-3" }, {
                  default: a(() => e[26] || (e[26] = [
                    x("Add a new ledger to an existing group in your chart of accounts.", -1)
                  ])),
                  _: 1,
                  __: [26]
                }),
                t(l(W), null, {
                  default: a(() => [
                    t(l(te), {
                      ref_key: "ledgerFormRef",
                      ref: D
                    }, {
                      default: a(() => [
                        t(l(H), {
                          modelValue: f.name,
                          "onUpdate:modelValue": e[2] || (e[2] = (n) => f.name = n),
                          rules: A,
                          class: "accouting_field accouting_active_field mb-2",
                          placeholder: "Name",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue"]),
                        t(l(ne), {
                          modelValue: f.parentGroup,
                          "onUpdate:modelValue": e[3] || (e[3] = (n) => f.parentGroup = n),
                          items: G.value,
                          rules: R,
                          class: "accouting_field accouting_active_field",
                          placeholder: "Parent Group",
                          "item-title": "title",
                          "item-value": "value",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue", "items"])
                      ]),
                      _: 1
                    }, 512)
                  ]),
                  _: 1
                }),
                t(l(K), { class: "justify-end mr-4 mb-2" }, {
                  default: a(() => [
                    t(l(C), {
                      text: "Cancel",
                      class: "account_v_btn_outlined",
                      variant: "outlined",
                      onClick: e[4] || (e[4] = (n) => {
                        var d;
                        r.value = !1, (d = D.value) == null || d.resetValidation();
                      })
                    }),
                    t(l(C), {
                      text: "Add Ledger",
                      class: "account_v_btn_primary",
                      onClick: X
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
        t(l(Q), {
          modelValue: y.value,
          "onUpdate:modelValue": e[10] || (e[10] = (n) => y.value = n),
          "max-width": "400",
          "onClick:outside": e[11] || (e[11] = (n) => {
            var d;
            return (d = E.value) == null ? void 0 : d.resetValidation();
          })
        }, {
          default: a(() => [
            t(l(N), null, {
              default: a(() => [
                t(l(Z), {
                  class: "account_ui_swtich_title",
                  "pb-0": ""
                }, {
                  default: a(() => e[27] || (e[27] = [
                    x("Add New Group", -1)
                  ])),
                  _: 1,
                  __: [27]
                }),
                t(l(J), { class: "account_ui_swtich_subtitle px-3" }, {
                  default: a(() => e[28] || (e[28] = [
                    x("Add a new group to your chart of accounts. ", -1)
                  ])),
                  _: 1,
                  __: [28]
                }),
                t(l(W), null, {
                  default: a(() => [
                    t(l(te), {
                      ref_key: "groupFormRef",
                      ref: E
                    }, {
                      default: a(() => [
                        t(l(H), {
                          modelValue: V.name,
                          "onUpdate:modelValue": e[7] || (e[7] = (n) => V.name = n),
                          rules: A,
                          class: "accouting_field accouting_active_field mb-2",
                          placeholder: "Name",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue"]),
                        t(l(ne), {
                          modelValue: V.parentGroup,
                          "onUpdate:modelValue": e[8] || (e[8] = (n) => V.parentGroup = n),
                          items: G.value,
                          rules: R,
                          class: "accouting_field accouting_active_field",
                          placeholder: "Parent Group",
                          "item-title": "title",
                          "item-value": "value",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue", "items"])
                      ]),
                      _: 1
                    }, 512)
                  ]),
                  _: 1
                }),
                t(l(K), { class: "justify-end mr-4 mb-2" }, {
                  default: a(() => [
                    t(l(C), {
                      text: "Cancel",
                      class: "account_v_btn_outlined",
                      variant: "outlined",
                      onClick: e[9] || (e[9] = (n) => {
                        var d;
                        y.value = !1, (d = E.value) == null || d.resetValidation();
                      })
                    }),
                    t(l(C), {
                      text: "Add Group",
                      class: "account_v_btn_primary",
                      onClick: Y
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
        t(l(Q), {
          modelValue: h.value,
          "onUpdate:modelValue": e[16] || (e[16] = (n) => h.value = n),
          "max-width": "400",
          "onClick:outside": e[17] || (e[17] = (n) => {
            var d;
            return (d = k.value) == null ? void 0 : d.resetValidation();
          })
        }, {
          default: a(() => [
            t(l(N), null, {
              default: a(() => [
                t(l(Z), { class: "account_ui_swtich_title pb-0" }, {
                  default: a(() => e[29] || (e[29] = [
                    x("Edit group", -1)
                  ])),
                  _: 1,
                  __: [29]
                }),
                t(l(J), { class: "account_ui_swtich_subtitle px-3" }, {
                  default: a(() => e[30] || (e[30] = [
                    x("Update the name or parent group.", -1)
                  ])),
                  _: 1,
                  __: [30]
                }),
                t(l(W), null, {
                  default: a(() => [
                    t(l(te), {
                      ref_key: "editFormRef",
                      ref: k
                    }, {
                      default: a(() => [
                        t(l(H), {
                          modelValue: o.name,
                          "onUpdate:modelValue": e[12] || (e[12] = (n) => o.name = n),
                          rules: A,
                          class: "accouting_field accouting_active_field mb-2",
                          placeholder: "Name",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue"]),
                        t(l(H), {
                          modelValue: o.position,
                          "onUpdate:modelValue": e[13] || (e[13] = (n) => o.position = n),
                          class: "accouting_field accouting_active_field mb-2",
                          placeholder: "Position",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue"]),
                        t(l(ne), {
                          modelValue: o.parentGroup,
                          "onUpdate:modelValue": e[14] || (e[14] = (n) => o.parentGroup = n),
                          items: G.value,
                          rules: R,
                          class: "accouting_field accouting_active_field",
                          placeholder: "Parent Group",
                          "item-title": "title",
                          "item-value": "value",
                          variant: "outlined",
                          "hide-details": "auto"
                        }, null, 8, ["modelValue", "items"])
                      ]),
                      _: 1
                    }, 512)
                  ]),
                  _: 1
                }),
                t(l(K), { class: "justify-end mr-4 mb-2" }, {
                  default: a(() => [
                    t(l(C), {
                      text: "Cancel",
                      class: "account_v_btn_outlined",
                      variant: "outlined",
                      onClick: e[15] || (e[15] = (n) => {
                        var d;
                        h.value = !1, (d = k.value) == null || d.resetValidation();
                      })
                    }),
                    t(l(C), {
                      text: "Save Changes",
                      class: "account_v_btn_primary",
                      onClick: w
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
        t(l(Q), {
          modelValue: b.value,
          "onUpdate:modelValue": e[19] || (e[19] = (n) => b.value = n),
          "max-width": "400",
          "onClick:outside": e[20] || (e[20] = (n) => b.value = !1)
        }, {
          default: a(() => [
            t(l(N), null, {
              default: a(() => [
                t(l(Z), { class: "account_ui_swtich_title pb-0" }, {
                  default: a(() => e[31] || (e[31] = [
                    x("Are you absolutely sure?", -1)
                  ])),
                  _: 1,
                  __: [31]
                }),
                t(l(J), { class: "account_ui_swtich_subtitle text-wrap px-3" }, {
                  default: a(() => {
                    var n;
                    return [
                      x(" This action cannot be undone. This will permanently delete the " + le((n = P.value) == null ? void 0 : n.name) + " group and all of its subgroups. ", 1)
                    ];
                  }),
                  _: 1
                }),
                t(l(K), { class: "justify-end mr-4 mb-2" }, {
                  default: a(() => [
                    t(l(C), {
                      text: "Cancel",
                      class: "account_v_btn_outlined",
                      variant: "outlined",
                      onClick: e[18] || (e[18] = (n) => b.value = !1)
                    }),
                    t(l(C), {
                      text: "Continue",
                      class: "account_v_btn_primary",
                      onClick: ve
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
};
export {
  je as default
};
