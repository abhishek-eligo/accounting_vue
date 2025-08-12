import { ref as f, reactive as fe, onMounted as Ue, resolveComponent as I, createElementBlock as b, openBlock as v, createVNode as a, createBlock as ie, withCtx as n, withDirectives as $e, createElementVNode as t, Fragment as T, renderList as H, createCommentVNode as J, toDisplayString as _, createTextVNode as P, vShow as Je, mergeProps as he, normalizeClass as g, unref as ee } from "vue";
import { a as Me, e as te, b as h, h as be, V as ye, Y as We, d as ge, a1 as ae } from "./main-u1Mo8sLp.js";
import { _ as qe } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { V as F, a as L } from "./VRow-Bnh7mzWV.js";
import { V as R, a as ne, d as Ge, e as je, c as Ze } from "./VCard-BuMrnEL1.js";
import { V as xe } from "./VForm-C510S1He.js";
import { V as le } from "./VAutocomplete-DWGRBOQT.js";
import { V as Oe } from "./VTextarea-Dc6MPKZX.js";
import { V as Ve } from "./VSwitch-Qz3vO7-X.js";
import { V as ce } from "./VCheckbox-DqY53STU.js";
import { V as we } from "./VDialog-CTlIykqf.js";
import { V as He } from "./VTable-CUsxa3ap.js";
function Xe(s) {
  if (s === 0) return "zero";
  const o = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ], d = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ], x = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  function E(c) {
    if (c === 0) return "";
    if (c < 10) return o[c];
    if (c < 20) return x[c - 10];
    if (c < 100)
      return d[Math.floor(c / 10)] + (c % 10 !== 0 ? " " + o[c % 10] : "");
    if (c < 1e3)
      return o[Math.floor(c / 100)] + " hundred" + (c % 100 !== 0 ? " and " + E(c % 100) : "");
  }
  function $(c) {
    if (c === 0) return "zero";
    const V = Math.floor(c / 1e7), X = Math.floor(c % 1e7 / 1e5), q = Math.floor(c % 1e5 / 1e3), Y = c % 1e3;
    let p = "";
    return V > 0 && (p += E(V) + " crore"), X > 0 && (p !== "" && (p += " "), p += E(X) + " lakh"), q > 0 && (p !== "" && (p += " "), p += E(q) + " thousand"), Y > 0 && (p !== "" && (p += " "), p += E(Y)), p;
  }
  const M = s.toString().split("."), W = parseInt(M[0]), N = M[1] ? parseInt(M[1]) : 0;
  let S = $(W);
  return N > 0 && (S += " and " + $(N) + " paise"), S.charAt(0).toUpperCase() + S.slice(1);
}
const U = {
  // Required field validation
  required: (s) => !s || typeof s == "string" && s.trim() === "" ? "This field is required" : !0,
  // Email validation
  email: (s) => s ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) ? !0 : "Please enter a valid email address" : !0,
  // Phone number validation (Indian format)
  phone: (s) => s ? /^[6-9]\d{9}$/.test(s.replace(/\s/g, "")) ? !0 : "Please enter a valid 10-digit phone number" : !0,
  // PAN validation
  pan: (s) => s ? /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(s.toUpperCase()) ? !0 : "Please enter a valid PAN number" : !0,
  // GSTIN validation
  gstin: (s) => s ? /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(s.toUpperCase()) ? !0 : "Please enter a valid GSTIN" : !0,
  // Pincode validation
  pincode: (s) => s ? /^[1-9][0-9]{5}$/.test(s) ? !0 : "Please enter a valid 6-digit pincode" : !0,
  // Amount validation (positive number)
  amount: (s) => {
    if (!s) return !0;
    const o = parseFloat(s);
    return isNaN(o) || o < 0 ? "Please enter a valid positive amount" : !0;
  },
  // Percentage validation (0-100)
  percentage: (s) => {
    if (!s) return !0;
    const o = parseFloat(s);
    return isNaN(o) || o < 0 || o > 100 ? "Please enter a valid percentage between 0 and 100" : !0;
  },
  // Minimum length validation
  minLength: (s) => (o) => o && o.length < s ? `Minimum ${s} characters required` : !0,
  // Maximum length validation
  maxLength: (s) => (o) => o && o.length > s ? `Maximum ${s} characters allowed` : !0,
  // Date validation
  date: (s) => {
    if (!s) return !0;
    const o = new Date(s);
    return isNaN(o.getTime()) ? "Please enter a valid date" : !0;
  },
  // Future date validation
  futureDate: (s) => {
    if (!s) return !0;
    const o = new Date(s), d = /* @__PURE__ */ new Date();
    return d.setHours(0, 0, 0, 0), o < d ? "Date cannot be in the past" : !0;
  },
  // Past date validation
  pastDate: (s) => {
    if (!s) return !0;
    const o = new Date(s), d = /* @__PURE__ */ new Date();
    return d.setHours(0, 0, 0, 0), o > d ? "Date cannot be in the future" : !0;
  }
}, Ye = {
  // Description validation
  description: (s) => {
    const o = U.required(s);
    if (o !== !0) return o;
    const d = U.minLength(10)(s);
    if (d !== !0) return d;
    const x = U.maxLength(254)(s);
    return x !== !0 ? x : !0;
  }
}, Ie = {
  // Ledger name validation
  ledgerName: (s) => {
    const o = U.required(s);
    if (o !== !0) return o;
    const d = U.minLength(2)(s);
    if (d !== !0) return d;
    const x = U.maxLength(100)(s);
    return x !== !0 ? x : !0;
  },
  // Parent group validation
  parentGroup: (s) => {
    const o = U.required(s);
    return o !== !0 ? o : !0;
  }
}, ue = (s, o) => o(s), Ke = { class: "account" }, Qe = { style: { display: "flex", "align-items": "center" } }, et = { class: "d-flex align-center gap-3" }, tt = { class: "d-flex align-center gap-3" }, at = { class: "account_entry_form_label" }, nt = {
  key: 0,
  class: "account_label"
}, lt = {
  key: 0,
  class: "mt-1"
}, st = { class: "font-italic amountInWords" }, ot = { class: "d-flex align-center pr-9 mb-4 justify-end" }, rt = { class: "d-flex align-center gap-3" }, it = { class: "account_entry_form_label" }, ct = {
  key: 0,
  class: "account_label"
}, ut = {
  key: 0,
  class: "mt-1"
}, dt = { class: "font-italic amountInWords" }, _t = { class: "d-flex align-center pr-9 mb-4 justify-end" }, pt = { class: "d-flex align-start gap-3" }, mt = {
  key: 0,
  class: "text-error"
}, vt = { class: "d-flex align-center justify-end gap-2" }, ft = { class: "d-flex align-center px-3 justify-space-between" }, ht = { class: "d-flex align-center gap-2" }, bt = { class: "account_table_filter_menu py-1" }, yt = { class: "account_vcard_menu_item" }, gt = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, xt = { class: "account_vcard_menu_item" }, Vt = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, wt = { class: "account_vcard_menu_item" }, It = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, Ct = { class: "gst_summary_table_container" }, Pt = { class: "table table-bordered account_entries_table text-center w-100" }, At = ["onMouseover"], kt = ["rowspan"], Lt = ["rowspan"], St = ["onClick"], Dt = ["rowspan"], Rt = { class: "account_entries_table_debit account_primary_color" }, Nt = { class: "account_entries_table_credit account_error_color" }, Et = ["rowspan"], zt = ["rowspan"], Bt = { class: "d-flex align-center justify-center gap-2" }, Tt = ["onMouseover"], Ft = { class: "d-flex flex-column align-start justify-center" }, Ut = { class: "account_entry_desc_text" }, $t = { class: "mb-3" }, Jt = { class: "mb-3" }, Mt = { class: "d-flex align-center justify-space-between mb-2" }, Wt = { class: "d-flex align-center gap-1" }, qt = { class: "account_label_light" }, Gt = { class: "d-flex align-center gap-1" }, jt = { class: "account_label_light" }, Zt = { class: "d-flex align-center justify-space-between" }, Ot = { class: "" }, Ht = { class: "text-success text-right" }, Xt = { class: "text-error text-right" }, Yt = { class: "font-weight-bold" }, Kt = { class: "text-success text-right" }, Qt = { class: "text-error text-right" }, ea = { class: "d-flex align-center gap-1 mt-3 mb-2" }, ta = { class: "account_label_light font-italic" }, aa = {
  __name: "index",
  setup(s) {
    function o(i, e, u) {
      const k = i.target.value, C = parseFloat(k) || 0, y = Xe(C);
      u === "debit" ? (p.value[e].amount = C, p.value[e].amountInWords = y) : (z.value[e].amount = C, z.value[e].amountInWords = y);
    }
    const d = f({
      entryDate: /* @__PURE__ */ new Date(),
      description: "",
      voucherType: ""
    }), x = f(""), E = (i) => {
      x.value = ue(
        i,
        Ye.description
      ), console.log(x.value);
    }, $ = f();
    async function M() {
      var e, u;
      E(d.value.description);
      const { valid: i } = await ((e = $.value) == null ? void 0 : e.validate());
      if (!i)
        return !1;
      ae.success("Journal entry saved successfully!"), d.value = {
        entryDate: "",
        description: "",
        voucherType: ""
      }, p.value = [{ account: null, amount: 0, amountInWords: "" }], z.value = [{ account: null, amount: 0, amountInWords: "" }], N.value = !1, (u = $.value) == null || u.resetValidation();
    }
    const W = fe([
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
    ]), N = f(!1), S = f(!1), c = f(!1), V = f(null), X = f([
      {
        date: "29-Apr-25",
        entry: "JRNL-2025-1001",
        voucher_type: "Journal",
        particulars: {
          accounts: [
            {
              title: "Prepaid Insurance",
              debit: "₹14,589.00",
              credit: ""
            },
            {
              title: "Accumulated Depreciation",
              debit: "",
              credit: "₹10,293.00"
            },
            {
              title: "Accounts Payable",
              debit: "",
              credit: "₹4,296.00"
            }
          ],
          description: {
            // "to": "Accumulated Depreciation, Accounts Payable",
            narration: "Received cash from various customers on account"
          }
        },
        status: "Pending"
      },
      {
        date: "14-Apr-25",
        entry: "JRNL-2025-1002",
        voucher_type: "Sales",
        particulars: {
          accounts: [
            {
              title: "Service Revenue",
              debit: "₹12,727.00",
              credit: ""
            },
            {
              title: "Equipment",
              debit: "",
              credit: "₹2,727.00"
            },
            {
              title: "Utilities Expense",
              debit: "",
              credit: "₹10,000.00"
            }
          ],
          description: {
            // to: 'Equipment, Utilities Expense',
            narration: "Utility bill payments and other miscellaneous expenses"
          }
        },
        status: "Pending"
      },
      {
        date: "04-May-25",
        entry: "JRNL-2025-1003",
        voucher_type: "Sales",
        particulars: {
          accounts: [
            {
              title: "Salaries",
              debit: "₹9,166.00",
              credit: ""
            },
            {
              title: "Wages Payable",
              debit: "",
              credit: "₹9,166.00"
            }
          ],
          description: {
            to: "Wages Payable",
            narration: "Utility bill payments and other miscellaneous expenses"
          }
        },
        status: "Pending"
      },
      {
        date: "09-Jun-25",
        entry: "JRNL-2025-1004",
        voucher_type: "Purchase",
        particulars: {
          accounts: [
            {
              title: "Wages Payable",
              debit: "₹8,215.00",
              credit: ""
            },
            {
              title: "Utilities Expense",
              debit: "",
              credit: "₹8,215.00"
            }
          ],
          description: {
            to: "Utilities Expense",
            narration: "Initial capital contribution and office setup"
          }
        },
        status: "Pending"
      },
      {
        date: "08-May-25",
        entry: "JRNL-2025-1005",
        voucher_type: "Journal",
        particulars: {
          accounts: [
            {
              title: "Unearned Revenue",
              debit: "₹22,759.00",
              credit: ""
            },
            {
              title: "Equipment",
              debit: "",
              credit: "₹22,759.00"
            }
          ],
          description: {
            to: "Equipment",
            narration: "Payment of rent and utilities for the month"
          }
        },
        status: "Pending"
      },
      {
        date: "29-Jun-25",
        entry: "JRNL-2025-1006",
        voucher_type: "Payment",
        particulars: {
          accounts: [
            {
              title: "Office Supplies",
              debit: "₹20,521.00",
              credit: ""
            },
            {
              title: "Accounts Payable",
              debit: "",
              credit: "₹20,521.00"
            }
          ],
          description: {
            to: "Accounts Payable",
            narration: "Sold goods for cash and reduced COGS"
          }
        },
        status: "Approved"
      },
      {
        date: "01-May-25",
        entry: "JRNL-2025-1007",
        voucher_type: "Journal",
        particulars: {
          accounts: [
            {
              title: "Accounts Receivable",
              debit: "₹32,540.00",
              credit: ""
            },
            {
              title: "Wages Payable",
              debit: "",
              credit: "₹13,846.00"
            },
            {
              title: "Accounts Payable",
              debit: "",
              credit: "₹18,694.00"
            }
          ],
          description: {
            to: "Wages Payable, Accounts Payable",
            narration: "Paid for multiple insurance policies"
          }
        },
        status: "Pending"
      },
      {
        date: "27-Jun-25",
        entry: "JRNL-2025-1008",
        voucher_type: "Receipt",
        particulars: {
          accounts: [
            {
              title: "Utilities Expense",
              debit: "₹19,566.00",
              credit: ""
            },
            {
              title: "Equipment",
              debit: "",
              credit: "₹19,566.00"
            }
          ],
          description: {
            to: "Equipment",
            narration: "Received cash from various customers on account"
          }
        },
        status: "Pending"
      }
    ]);
    f([
      { title: "Date", value: "date", visible: !0 },
      { title: "Entry #", value: "entry", visible: !0 },
      { title: "Voucher Type", value: "voucher_type", visible: !0 },
      { title: "Particulars", value: "particulars", visible: !0 },
      { title: "Debit", value: "debit", visible: !0 },
      { title: "Credit", value: "credit", visible: !0 },
      { title: "Status", value: "status", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]);
    const q = f([
      { title: "HDFC Bank", value: "1.1.2.1", groupId: "1.1.2" },
      { title: "ICICI Bank", value: "1.1.2.2", groupId: "1.1.2" },
      { title: "Cash", value: "1.1.1.1", groupId: "1.1.1" },
      { title: "Innovate Inc.", value: "1.1.3.1", groupId: "1.1.3" },
      { title: "Solutions Corp.", value: "1.1.3.2", groupId: "1.1.3" },
      { title: "Furniture & Fixtures", value: "1.2.1.1", groupId: "1.2.1" },
      { title: "Computers", value: "1.2.1.2", groupId: "1.2.1" },
      { title: "GST Payable", value: "2.1.1.1", groupId: "2.1" },
      { title: "Cloud Services LLC", value: "1.1.3.3", groupId: "1.1.3" }
    ]), Y = f([
      { title: "Sales Voucher", value: "sales_voucher" },
      { title: "Purchase Voucher", value: "purchase_voucher" },
      { title: "Journal Voucher", value: "journal_voucher" },
      { title: "Payment Voucher", value: "payment_voucher" },
      { title: "Reciept Voucher", value: "reciept_voucher" }
    ]), p = f([{ account: null, amount: 0, amountInWords: "" }]), z = f([{ account: null, amount: 0, amountInWords: "" }]), A = fe({
      name: "",
      parentGroup: null
    }), G = f(), Ce = [(i) => ue(i, Ie.ledgerName)], Pe = [
      (i) => ue(i, Ie.parentGroup)
    ];
    function se(i, e = 0) {
      return i.flatMap((u) => {
        if (!u.children && u.children !== void 0) return [];
        const C = {
          title: `${"— ".repeat(e)}${u.name}`,
          value: u.id
        }, y = u.children ? se(u.children, e + 1) : [];
        return [C, ...y];
      });
    }
    const de = f(se(W));
    function _e(i, e) {
      for (const u of i) {
        if (u.id === e) return u;
        if (u.children) {
          const k = _e(u.children, e);
          if (k) return k;
        }
      }
      return null;
    }
    async function Ae() {
      var y, B;
      const { valid: i } = await ((y = G.value) == null ? void 0 : y.validate());
      if (!i) {
        ae.error("Please fill all required fields for Ledger.");
        return;
      }
      const e = _e(W, A.parentGroup);
      if (!e) {
        ae.error("Parent group not found.");
        return;
      }
      e.children || (e.children = []), A.parentGroup.split(".");
      const u = e.children.length ? Math.max(
        ...e.children.map((oe) => parseInt(oe.id.split(".").pop()))
      ) + 1 : 1, C = {
        id: `${A.parentGroup}.${u}`,
        name: A.name,
        type: e.type,
        children: null
      };
      e.children.push(C), de.value = se(W), ae.success("Ledger created successfully."), S.value = !1, A.name = "", A.parentGroup = null, (B = G.value) == null || B.resetValidation();
    }
    const ke = () => {
      p.value.push({ account: null, amount: 0, amountInWords: "" });
    }, Le = (i) => {
      p.value.length > 1 && p.value.splice(i, 1);
    }, Se = () => {
      z.value.push({ account: null, amount: 0, amountInWords: "" });
    }, De = (i) => {
      z.value.length > 1 && z.value.splice(i, 1);
    };
    function Re(i) {
      V.value = i, c.value = !0;
    }
    function pe(i, e) {
      return !i || !Array.isArray(i) ? "₹0.00" : `₹${i.reduce((k, C) => {
        var B;
        const y = ((B = C[e]) == null ? void 0 : B.replace(/[^0-9.-]+/g, "")) || "0";
        return k + parseFloat(y);
      }, 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
    }
    const w = f(null), me = f(0);
    return Ue(() => {
      setInterval(() => {
        me.value++;
      }, 3e3);
    }), (i, e) => {
      const u = I("IconPlus"), k = I("IconCalendar"), C = I("v-date-input"), y = I("IconTrash"), B = I("IconDeviceFloppy"), oe = I("IconSearch"), Ne = I("IconFilter"), Ee = I("IconDownload"), ze = I("IconPencil"), Be = I("IconArrowBackUp"), Te = I("IconX"), Fe = I("IconCirclePlus");
      return v(), b("div", Ke, [
        a(Me, null, {
          default: n(() => [
            $e(a(F, { class: "justify-center" }, {
              default: n(() => [
                a(L, {
                  cols: "8",
                  class: ""
                }, {
                  default: n(() => [
                    a(R, {
                      title: "New Journal Entry",
                      class: "account_vcard_border account_ui_vcard pa-2 shadow-none mb-6"
                    }, {
                      append: n(() => [
                        a(h, {
                          onClick: e[0] || (e[0] = (l) => S.value = !0),
                          class: "account_v_btn_outlined save_btn_height",
                          variant: "outlined",
                          size: "default",
                          rounded: "2",
                          color: "primary"
                        }, {
                          prepend: n(() => [
                            t("span", Qe, [
                              a(u, { size: "22" })
                            ])
                          ]),
                          default: n(() => [
                            e[16] || (e[16] = P(" Add Ledger ", -1))
                          ]),
                          _: 1,
                          __: [16]
                        })
                      ]),
                      default: n(() => [
                        a(ne, { class: "mt-4" }, {
                          default: n(() => [
                            a(xe, {
                              ref_key: "journalEntryFormRef",
                              ref: $
                            }, {
                              default: n(() => [
                                a(F, null, {
                                  default: n(() => [
                                    a(L, {
                                      cols: "12",
                                      lg: "6",
                                      md: "6"
                                    }, {
                                      default: n(() => [
                                        t("div", et, [
                                          e[17] || (e[17] = t("div", { class: "account_entry_form_label" }, [
                                            t("label", { class: "account_label" }, "Date *")
                                          ], -1)),
                                          a(C, {
                                            modelValue: d.value.entryDate,
                                            "onUpdate:modelValue": e[1] || (e[1] = (l) => d.value.entryDate = l),
                                            class: "accounting_date_input",
                                            "cancel-text": "Close",
                                            "ok-text": "Apply"
                                          }, {
                                            "prepend-inner": n(() => [
                                              a(k, { size: "20" })
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue"])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                (v(!0), b(T, null, H(p.value, (l, r) => (v(), ie(F, {
                                  key: r,
                                  class: "mb-1"
                                }, {
                                  default: n(() => [
                                    a(L, {
                                      cols: "12",
                                      lg: "8",
                                      md: "8"
                                    }, {
                                      default: n(() => [
                                        t("div", tt, [
                                          t("div", at, [
                                            r === 0 ? (v(), b("label", nt, "Debit*")) : J("", !0)
                                          ]),
                                          a(le, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            placeholder: "Select Account",
                                            density: "compact",
                                            items: q.value,
                                            "item-title": "title",
                                            "item-value": "value",
                                            modelValue: l.account,
                                            "onUpdate:modelValue": (m) => l.account = m
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    a(L, {
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: n(() => [
                                        a(te, {
                                          type: "number",
                                          class: "accouting_field accouting_active_field",
                                          placeholder: "0",
                                          variant: "outlined",
                                          density: "compact",
                                          modelValue: l.amount,
                                          "onUpdate:modelValue": (m) => l.amount = m,
                                          onInput: (m) => o(m, r, "debit")
                                        }, {
                                          append: n(() => [
                                            a(h, {
                                              class: "account_v_btn_ghost account_btn_primary_text",
                                              variant: "text",
                                              size: "x-small",
                                              rounded: "3",
                                              onClick: (m) => Le(r)
                                            }, {
                                              default: n(() => [
                                                a(y, { size: "18" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "onInput"]),
                                        l.amountInWords ? (v(), b("div", lt, [
                                          t("small", st, _(l.amountInWords) + " rupees only ", 1)
                                        ])) : J("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024))), 128)),
                                t("div", ot, [
                                  a(h, {
                                    class: "account_v_btn_ghost account_btn_primary_text",
                                    variant: "text",
                                    size: "small",
                                    rounded: "",
                                    onClick: ke
                                  }, {
                                    prepend: n(() => [
                                      a(u, { size: "18" })
                                    ]),
                                    default: n(() => [
                                      e[18] || (e[18] = P(" Add Debit Amount ", -1))
                                    ]),
                                    _: 1,
                                    __: [18]
                                  })
                                ]),
                                (v(!0), b(T, null, H(z.value, (l, r) => (v(), ie(F, {
                                  key: r,
                                  class: "mb-1"
                                }, {
                                  default: n(() => [
                                    a(L, {
                                      cols: "12",
                                      lg: "8",
                                      md: "8"
                                    }, {
                                      default: n(() => [
                                        t("div", rt, [
                                          t("div", it, [
                                            r === 0 ? (v(), b("label", ct, "Credit *")) : J("", !0)
                                          ]),
                                          a(le, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            placeholder: "Select Account",
                                            density: "compact",
                                            items: q.value,
                                            "item-title": "title",
                                            "item-value": "value",
                                            modelValue: l.account,
                                            "onUpdate:modelValue": (m) => l.account = m
                                          }, null, 8, ["items", "modelValue", "onUpdate:modelValue"])
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    a(L, {
                                      cols: "12",
                                      lg: "4",
                                      md: "4"
                                    }, {
                                      default: n(() => [
                                        a(te, {
                                          type: "number",
                                          class: "accouting_field accouting_active_field",
                                          placeholder: "0",
                                          variant: "outlined",
                                          density: "compact",
                                          modelValue: l.amount,
                                          "onUpdate:modelValue": (m) => l.amount = m,
                                          onInput: (m) => o(m, r, "credit")
                                        }, {
                                          append: n(() => [
                                            a(h, {
                                              onClick: (m) => De(r),
                                              class: "account_v_btn_ghost account_btn_primary_text",
                                              variant: "text",
                                              size: "x-small",
                                              rounded: "1"
                                            }, {
                                              default: n(() => [
                                                a(y, { size: "18" })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1032, ["modelValue", "onUpdate:modelValue", "onInput"]),
                                        l.amountInWords ? (v(), b("div", ut, [
                                          t("small", dt, _(l.amountInWords) + " rupees only ", 1)
                                        ])) : J("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024))), 128)),
                                t("div", _t, [
                                  a(h, {
                                    onClick: Se,
                                    class: "account_v_btn_ghost account_btn_primary_text",
                                    variant: "text",
                                    size: "small",
                                    rounded: ""
                                  }, {
                                    prepend: n(() => [
                                      a(u, { size: "18" })
                                    ]),
                                    default: n(() => [
                                      e[19] || (e[19] = P(" Add Credit Amount ", -1))
                                    ]),
                                    _: 1,
                                    __: [19]
                                  })
                                ]),
                                a(F, null, {
                                  default: n(() => [
                                    a(L, {
                                      cols: "12",
                                      lg: "7",
                                      md: "7"
                                    }, {
                                      default: n(() => [
                                        t("div", pt, [
                                          e[20] || (e[20] = t("div", { class: "account_entry_form_label" }, [
                                            t("label", { class: "account_label mt-3" }, "Description *")
                                          ], -1)),
                                          a(Oe, {
                                            modelValue: d.value.description,
                                            "onUpdate:modelValue": e[2] || (e[2] = (l) => d.value.description = l),
                                            class: "accounting_v_textarea",
                                            placeholder: "e.g. Inventory purchased on credit. XYZ Capital Introduce. Max length 254 characters",
                                            variant: "outlined"
                                          }, null, 8, ["modelValue"]),
                                          x.value ? (v(), b("small", mt, _(x.value), 1)) : J("", !0)
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    a(L, {
                                      cols: "12",
                                      lg: "5",
                                      md: "5"
                                    }, {
                                      default: n(() => [
                                        e[21] || (e[21] = t("label", { class: "account_label" }, "Voucher Type *", -1)),
                                        a(le, {
                                          modelValue: d.value.voucherType,
                                          "onUpdate:modelValue": e[3] || (e[3] = (l) => d.value.voucherType = l),
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          density: "compact",
                                          items: Y.value,
                                          "item-title": "title",
                                          "item-value": "value",
                                          placeholder: "Select Voucher Type"
                                        }, null, 8, ["modelValue", "items"])
                                      ]),
                                      _: 1,
                                      __: [21]
                                    })
                                  ]),
                                  _: 1
                                }),
                                a(F, null, {
                                  default: n(() => [
                                    a(L, {
                                      cols: "12",
                                      lg: "12",
                                      md: "12"
                                    }, {
                                      default: n(() => [
                                        a(R, {
                                          class: "account_vcard_border mt-2 account_module_card shadow-none",
                                          title: "Auto-Approve Entry",
                                          subtitle: "This entry will be approved automatically and will immediately affect your books."
                                        }, {
                                          append: n(() => [
                                            a(Ve, {
                                              density: "compact",
                                              inset: "",
                                              class: "account_swtich_btn",
                                              color: "primary",
                                              "hide-details": ""
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
                                a(F, null, {
                                  default: n(() => [
                                    a(L, { cols: "12" }, {
                                      default: n(() => [
                                        t("div", vt, [
                                          a(h, {
                                            onClick: e[4] || (e[4] = (l) => N.value = !1),
                                            class: "account_v_btn_outlined",
                                            variant: "outlined",
                                            rounded: "2",
                                            size: "default"
                                          }, {
                                            default: n(() => e[22] || (e[22] = [
                                              P("Cancel", -1)
                                            ])),
                                            _: 1,
                                            __: [22]
                                          }),
                                          a(h, {
                                            onClick: M,
                                            class: "account_v_btn_primary save_btn_height",
                                            variant: "outlined",
                                            size: "default",
                                            rounded: "2",
                                            color: "primary"
                                          }, {
                                            prepend: n(() => [
                                              a(B, { size: "18" })
                                            ]),
                                            default: n(() => [
                                              e[23] || (e[23] = P(" Save Voucher ", -1))
                                            ]),
                                            _: 1,
                                            __: [23]
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
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
            }, 512), [
              [Je, N.value]
            ])
          ]),
          _: 1
        }),
        a(R, {
          title: "All Entries",
          subtitle: "A record of all financial transactions.",
          class: "account_vcard_border pa-2 account_ui_vcard shadow-none"
        }, {
          default: n(() => [
            t("div", ft, [
              a(te, {
                style: { "max-width": "265px" },
                class: "accouting_field accouting_active_field",
                placeholder: "Filter entries",
                variant: "outlined"
              }, {
                "prepend-inner": n(() => [
                  a(oe, { size: "20" })
                ]),
                _: 1
              }),
              t("div", ht, [
                a(Ve, {
                  density: "compact",
                  inset: "",
                  class: "account_swtich_btn mr-3",
                  color: "primary",
                  "hide-details": "",
                  label: "Compact"
                }),
                a(be, {
                  width: "200px",
                  location: "start",
                  "close-on-content-click": !1
                }, {
                  activator: n(({ props: l }) => [
                    a(We, {
                      text: "Filters",
                      location: "top"
                    }, {
                      activator: n(({ props: r }) => [
                        a(h, he({ ...l, ...r }, {
                          variant: "text",
                          class: "account_filter_btn_color",
                          rounded: "1",
                          size: "36"
                        }), {
                          default: n(() => [
                            a(Ne, { size: "24" })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  default: n(() => [
                    a(R, { class: "account_vcard_menu account_vcard_border" }, {
                      default: n(() => [
                        e[27] || (e[27] = t("div", { class: "account_vcard_menu_hdng px-4" }, "Add Filters", -1)),
                        a(ye, { class: "my-1 mt-0" }),
                        t("div", bt, [
                          t("div", yt, [
                            t("div", gt, [
                              a(ce, {
                                class: "account_v_checkbox account_filter_menu_checkbox",
                                density: "compact"
                              }),
                              e[24] || (e[24] = t("span", null, "Date", -1))
                            ])
                          ]),
                          t("div", xt, [
                            t("div", Vt, [
                              a(ce, {
                                class: "account_v_checkbox account_filter_menu_checkbox",
                                density: "compact"
                              }),
                              e[25] || (e[25] = t("span", null, "Created By", -1))
                            ])
                          ]),
                          t("div", wt, [
                            t("div", It, [
                              a(ce, {
                                class: "account_v_checkbox account_filter_menu_checkbox",
                                density: "compact"
                              }),
                              e[26] || (e[26] = t("span", null, "Account", -1))
                            ])
                          ])
                        ])
                      ]),
                      _: 1,
                      __: [27]
                    })
                  ]),
                  _: 1
                }),
                a(be, {
                  width: "110px",
                  location: "bottom",
                  "close-on-content-click": !1
                }, {
                  activator: n(({ props: l }) => [
                    a(h, he(l, {
                      class: "account_filter_btn_color",
                      variant: "text",
                      rounded: "1",
                      size: "36"
                    }), {
                      default: n(() => [
                        a(Ee, { size: "24" })
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  default: n(() => [
                    a(R, { class: "account_vcard_border" }, {
                      default: n(() => e[28] || (e[28] = [
                        t("div", { class: "account_table_filter_menu py-1" }, [
                          t("div", { class: "account_vcard_menu_item" }, [
                            P(" ninthree "),
                            t("div", { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, [
                              t("span", null, "PDF")
                            ])
                          ]),
                          t("div", { class: "account_vcard_menu_item" }, [
                            t("div", { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, [
                              t("span", null, "CSV")
                            ])
                          ])
                        ], -1)
                      ])),
                      _: 1,
                      __: [28]
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            a(ne, { class: "mt-2 pa-3" }, {
              default: n(() => [
                a(R, {
                  variant: "flat",
                  class: "shadow-none"
                }, {
                  default: n(() => [
                    t("div", Ct, [
                      t("table", Pt, [
                        e[30] || (e[30] = t("thead", null, [
                          t("tr", null, [
                            t("th", { class: "account_entries_table_header_date" }, "Date"),
                            t("th", { class: "account_entries_table_header_entry" }, "Entry #"),
                            t("th", { class: "account_entries_table_header_voucher" }, " Voucher Type "),
                            t("th", { class: "account_entries_table_header_particulars" }, " Particulars "),
                            t("th", { class: "account_entries_table_header_debit" }, "Debit"),
                            t("th", { class: "account_entries_table_header_credit" }, "Credit"),
                            t("th", { class: "account_entries_table_header_status" }, "Status"),
                            t("th", { class: "account_entries_table_header_actions" }, "Actions")
                          ])
                        ], -1)),
                        t("tbody", null, [
                          (v(!0), b(T, null, H(X.value, (l, r) => {
                            var m, j, Z, O;
                            return v(), b(T, { key: r }, [
                              l && l.particulars && l.particulars.accounts && Array.isArray(l.particulars.accounts) && l.particulars.accounts.length > 0 ? (v(), b(T, { key: 0 }, [
                                t("tr", {
                                  class: g([
                                    "account_entries_table_row",
                                    { "even-entry": r % 2 === 0 }
                                  ]),
                                  onMouseover: (D) => w.value = r,
                                  onMouseleave: e[5] || (e[5] = (D) => w.value = null)
                                }, [
                                  t("td", {
                                    class: g(["account_entries_table_date", { "hovered-cell": w.value === r }]),
                                    rowspan: l.particulars.accounts.length + 1
                                  }, _(l.date || "N/A"), 11, kt),
                                  t("td", {
                                    class: g(["account_entries_table_entry", { "hovered-cell": w.value === r }]),
                                    rowspan: l.particulars.accounts.length + 1
                                  }, [
                                    P(_(l.entry || "N/A"), 1),
                                    e[29] || (e[29] = t("br", null, null, -1)),
                                    t("span", {
                                      onClick: (D) => Re(l)
                                    }, "View Details", 8, St)
                                  ], 10, Lt),
                                  t("td", {
                                    class: g(["account_entries_table_voucher", { "hovered-cell": w.value === r }]),
                                    rowspan: l.particulars.accounts.length + 1
                                  }, _(l.voucher_type || "N/A"), 11, Dt),
                                  t("td", {
                                    class: g(["account_entries_table_particulars", { "hovered-cell": w.value === r }])
                                  }, _(((m = l.particulars.accounts[0]) == null ? void 0 : m.title) || "N/A"), 3),
                                  t("td", Rt, _(((j = l.particulars.accounts[0]) == null ? void 0 : j.debit) || ""), 1),
                                  t("td", Nt, _(((Z = l.particulars.accounts[0]) == null ? void 0 : Z.credit) || ""), 1),
                                  t("td", {
                                    class: "account_entries_table_status",
                                    rowspan: l.particulars.accounts.length + 1
                                  }, [
                                    a(ge, {
                                      class: g(["account_v_chip", l.status === "Pending" ? "account_chip_error" : "account_chip_primary"]),
                                      size: "small"
                                    }, {
                                      default: n(() => [
                                        P(_(l.status || "N/A"), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ], 8, Et),
                                  t("td", {
                                    class: "account_entries_table_actions",
                                    rowspan: l.particulars.accounts.length + 1
                                  }, [
                                    t("div", Bt, [
                                      a(h, {
                                        size: "small",
                                        class: "account_v_btn_ghost",
                                        variant: "text"
                                      }, {
                                        default: n(() => [
                                          a(ze, { size: "20" })
                                        ]),
                                        _: 1
                                      }),
                                      a(h, {
                                        size: "small",
                                        class: "account_v_btn_ghost",
                                        variant: "text"
                                      }, {
                                        default: n(() => [
                                          a(Be, { size: "20" })
                                        ]),
                                        _: 1
                                      }),
                                      a(h, {
                                        size: "small",
                                        class: "account_v_btn_ghost",
                                        variant: "text"
                                      }, {
                                        default: n(() => [
                                          a(y, { size: "20" })
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ], 8, zt)
                                ], 42, At),
                                (v(!0), b(T, null, H(l.particulars.accounts.slice(1), (D, K) => (v(), b("tr", {
                                  key: `${r}-${K}`,
                                  class: g(["account_entries_table_row", { "even-entry-extension": r % 2 === 0 }]),
                                  onMouseover: (Q) => w.value = r,
                                  onMouseleave: e[6] || (e[6] = (Q) => w.value = null)
                                }, [
                                  t("td", {
                                    class: g(["account_entries_table_particulars", { "hovered-cell": w.value === r }])
                                  }, _(D.title || "N/A"), 3),
                                  t("td", {
                                    class: g(["account_entries_table_debit account_primary_color", { "hovered-cell": w.value === r }])
                                  }, _(D.debit || ""), 3),
                                  t("td", {
                                    class: g(["account_entries_table_credit account_error_color", { "hovered-cell": w.value === r }])
                                  }, _(D.credit || ""), 3)
                                ], 42, Tt))), 128)),
                                t("tr", {
                                  class: g(["account_entries_table_row", { "even-entry-extension": r % 2 === 0 }])
                                }, [
                                  t("td", {
                                    colspan: "3",
                                    class: g({ "hovered-cell": w.value === r })
                                  }, [
                                    t("div", Ft, [
                                      t("span", Ut, "(Narration: " + _(((O = l.particulars.description) == null ? void 0 : O.narration) || "N/A") + ")", 1)
                                    ])
                                  ], 2)
                                ], 2)
                              ], 64)) : J("", !0)
                            ], 64);
                          }), 128))
                        ])
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
        a(we, {
          modelValue: S.value,
          "onUpdate:modelValue": e[10] || (e[10] = (l) => S.value = l),
          "max-width": "400",
          "onClick:outside": e[11] || (e[11] = (l) => {
            var r;
            return (r = G.value) == null ? void 0 : r.resetValidation();
          })
        }, {
          default: n(() => [
            a(R, null, {
              default: n(() => [
                a(Ge, { class: "account_ui_swtich_title pb-0" }, {
                  default: n(() => e[31] || (e[31] = [
                    P("Add New Ledger", -1)
                  ])),
                  _: 1,
                  __: [31]
                }),
                a(je, { class: "account_ui_swtich_subtitle text-wrap px-3" }, {
                  default: n(() => e[32] || (e[32] = [
                    P(" Create a new ledger account under a specified group. ", -1)
                  ])),
                  _: 1,
                  __: [32]
                }),
                a(ne, null, {
                  default: n(() => [
                    a(xe, {
                      ref_key: "ledgerFormRef",
                      ref: G
                    }, {
                      default: n(() => [
                        t("div", $t, [
                          e[33] || (e[33] = t("label", { class: "account_label" }, "Ledger Name", -1)),
                          a(te, {
                            modelValue: ee(A).name,
                            "onUpdate:modelValue": e[7] || (e[7] = (l) => ee(A).name = l),
                            rules: Ce,
                            class: "accouting_field accouting_active_field",
                            placeholder: "Enter ledger name",
                            variant: "outlined",
                            "hide-details": "auto"
                          }, null, 8, ["modelValue"])
                        ]),
                        t("div", Jt, [
                          e[34] || (e[34] = t("label", { class: "account_label" }, "Parent Group", -1)),
                          a(le, {
                            modelValue: ee(A).parentGroup,
                            "onUpdate:modelValue": e[8] || (e[8] = (l) => ee(A).parentGroup = l),
                            items: de.value,
                            rules: Pe,
                            class: "accouting_field accouting_active_field",
                            placeholder: "Select parent group",
                            "item-title": "title",
                            "item-value": "value",
                            variant: "outlined",
                            "hide-details": "auto"
                          }, null, 8, ["modelValue", "items"])
                        ])
                      ]),
                      _: 1
                    }, 512)
                  ]),
                  _: 1
                }),
                a(Ze, { class: "justify-end mr-4 mb-2" }, {
                  default: n(() => [
                    a(h, {
                      text: "Cancel",
                      class: "account_v_btn_outlined",
                      variant: "outlined",
                      onClick: e[9] || (e[9] = (l) => {
                        var r;
                        S.value = !1, (r = G.value) == null || r.resetValidation();
                      })
                    }),
                    a(h, {
                      text: "Add Ledger",
                      class: "account_v_btn_primary",
                      onClick: Ae
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
        a(we, {
          modelValue: c.value,
          "onUpdate:modelValue": e[13] || (e[13] = (l) => c.value = l),
          "max-width": "600",
          "onClick:outside": e[14] || (e[14] = (l) => c.value = !1)
        }, {
          default: n(() => {
            var l;
            return [
              a(R, {
                class: "account_vcard_border account_details_dialog",
                title: "Journal Voucher",
                subtitle: (l = V.value) == null ? void 0 : l.entry
              }, {
                append: n(() => [
                  a(h, {
                    variant: "text",
                    size: "x-small",
                    rounded: "",
                    onClick: e[12] || (e[12] = (r) => c.value = !1),
                    class: "account_vcard_close_btn"
                  }, {
                    default: n(() => [
                      a(Te, { size: "20" })
                    ]),
                    _: 1
                  })
                ]),
                default: n(() => [
                  a(ne, null, {
                    default: n(() => {
                      var r, m, j, Z, O, D;
                      return [
                        t("div", Mt, [
                          t("div", Wt, [
                            e[35] || (e[35] = t("span", { class: "account_label_bold" }, "Date:", -1)),
                            t("span", qt, _((r = V.value) == null ? void 0 : r.date), 1)
                          ]),
                          t("div", Gt, [
                            e[36] || (e[36] = t("span", { class: "account_label_bold" }, "Type:", -1)),
                            t("span", jt, _((m = V.value) == null ? void 0 : m.voucher_type), 1)
                          ])
                        ]),
                        t("div", Zt, [
                          e[37] || (e[37] = t("div", { class: "d-flex align-center gap-1" }, [
                            t("span", { class: "account_label_bold" }, "Created By:"),
                            t("span", { class: "account_label_light" }, "Admin")
                          ], -1)),
                          t("div", Ot, [
                            a(ge, {
                              class: "account_chip_primary",
                              size: "small",
                              text: (j = V.value) == null ? void 0 : j.status
                            }, null, 8, ["text"])
                          ])
                        ]),
                        a(ye, { class: "my-2" }),
                        a(R, { class: "account_vcard_border shadow-none account_entries_table mt-2" }, {
                          default: n(() => [
                            a(He, { class: "" }, {
                              default: n(() => {
                                var K, Q;
                                return [
                                  e[39] || (e[39] = t("thead", null, [
                                    t("tr", null, [
                                      t("th", null, "Particulars"),
                                      t("th", { class: "text-right" }, "Debit"),
                                      t("th", { class: "text-right" }, "Credit")
                                    ])
                                  ], -1)),
                                  t("tbody", null, [
                                    (v(!0), b(T, null, H((Q = (K = V.value) == null ? void 0 : K.particulars) == null ? void 0 : Q.accounts, (re, ve) => (v(), b("tr", { key: ve }, [
                                      t("td", {
                                        class: g({ "pl-9": ve !== 0 })
                                      }, _(re.title), 3),
                                      t("td", Ht, _(re.debit || ""), 1),
                                      t("td", Xt, _(re.credit || ""), 1)
                                    ]))), 128)),
                                    t("tr", Yt, [
                                      e[38] || (e[38] = t("td", null, "Total", -1)),
                                      t("td", Kt, _(pe(V.value.particulars.accounts, "debit")), 1),
                                      t("td", Qt, _(pe(V.value.particulars.accounts, "credit")), 1)
                                    ])
                                  ])
                                ];
                              }),
                              _: 1,
                              __: [39]
                            })
                          ]),
                          _: 1
                        }),
                        t("div", ea, [
                          e[40] || (e[40] = t("span", { class: "account_label_bold abc" }, "Narration:", -1)),
                          t("span", ta, _(((D = (O = (Z = V.value) == null ? void 0 : Z.particulars) == null ? void 0 : O.description) == null ? void 0 : D.narration) || "N/A"), 1)
                        ])
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["subtitle"])
            ];
          }),
          _: 1
        }, 8, ["modelValue"]),
        (v(), ie(h, {
          onClick: e[15] || (e[15] = (l) => N.value = !N.value),
          key: me.value,
          class: "account_add_new_btn bounce"
        }, {
          prepend: n(() => [
            a(Fe, { size: "18" })
          ]),
          default: n(() => [
            e[41] || (e[41] = P(" New Journal Entry ", -1))
          ]),
          _: 1,
          __: [41]
        }))
      ]);
    };
  }
}, va = /* @__PURE__ */ qe(aa, [["__scopeId", "data-v-a2a53741"]]);
export {
  va as default
};
