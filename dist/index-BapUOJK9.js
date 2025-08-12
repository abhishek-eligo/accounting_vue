import { _ as we } from "./DynamicDataTable-s1EmKkRe.js";
import { ref as u, onMounted as Re, computed as K, watchEffect as Q, resolveComponent as T, createElementBlock as w, openBlock as o, createVNode as a, createElementVNode as l, createBlock as d, withCtx as t, createCommentVNode as c, normalizeClass as P, toDisplayString as Z, createTextVNode as h, Fragment as ce, renderList as de, mergeProps as Fe } from "vue";
import { _ as Ue } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { a as Ge, b as f, e as r, V as C, h as Pe } from "./main-u1Mo8sLp.js";
import { V as g, a as n } from "./VRow-Bnh7mzWV.js";
import { V as y, a as x, b as J } from "./VCard-BuMrnEL1.js";
import { V as re } from "./VAutocomplete-DWGRBOQT.js";
import { V as Je } from "./VDataTable-C7AYZo_S.js";
import { V as me } from "./VDialog-CTlIykqf.js";
import { V as ve } from "./VTextarea-Dc6MPKZX.js";
import { V as _e } from "./VCheckbox-DqY53STU.js";
import { V as R } from "./VSwitch-Qz3vO7-X.js";
import { V as Me, a as X } from "./VRadioGroup-BK18R_TN.js";
const $e = { class: "account_ui_vcard" }, Ee = { class: "d-flex align-center gap-2" }, Le = { class: "mb-0" }, ze = { class: "pa-3" }, Oe = { class: "d-flex align-center gap-2 justify-end mt-3" }, We = { class: "account_invoice_list" }, je = {
  key: 0,
  class: "account_ui_vcard"
}, He = { class: "d-flex align-center gap-2" }, Ye = { class: "account_vcard_menu_items py-1" }, qe = ["onClick"], Ke = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, Qe = { class: "custom_option d-flex align-center" }, Ze = { class: "d-flex align-center justify-end mt-4" }, Xe = {
  key: 0,
  class: "account_ui_vcard"
}, ea = { class: "d-flex align-center justify-space-between" }, aa = { class: "d-flex align-center justify-space-between" }, ta = { class: "d-flex align-center justify-space-between" }, la = { class: "d-flex align-center justify-space-between" }, ia = { class: "d-flex align-center justify-space-between" }, na = { class: "d-flex align-center justify-space-between" }, sa = {
  __name: "index",
  setup(oa) {
    const be = u([
      { title: "Invoice Number", value: "invoiceNumber", visible: !0, minWidth: "120px" },
      { title: "Customer Name", value: "customerName", visible: !0, minWidth: "120px" },
      { title: "Invoice Date", value: "invoiceDate", visible: !0, minWidth: "120px" },
      { title: "Currency", value: "currency", visible: !0 },
      { title: "Exch. Rate", value: "exchangeRate", visible: !0 },
      { title: "Amount (FCY)", value: "amountFcy", visible: !0 },
      { title: "Amount (BCY)", value: "amountBcy", visible: !0 },
      { title: "Taxable Value", value: "taxableValue", visible: !0 },
      { title: "GST Amount", value: "gstAmount", visible: !0 },
      { title: "GST Type", value: "gstType", visible: !0 },
      { title: "Created By", value: "createdBy", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]), M = u(!1), ee = u([]);
    async function pe() {
      try {
        const s = [
          {
            invoiceNumber: "INV-1000",
            customerName: "Synergy LLC",
            invoiceDate: "Jun 9, 2025",
            currency: "USD",
            exchangeRate: "83.50",
            amountFcy: "$400.00",
            amountBcy: "₹33,400.00",
            taxableValue: "₹30,000.00",
            gstAmount: "₹3,400.00",
            gstType: "UTGST",
            createdBy: "John Doe",
            actions: ""
          },
          {
            invoiceNumber: "INV-1001",
            customerName: "Starlight Co.",
            invoiceDate: "Jul 14, 2025",
            currency: "EUR",
            exchangeRate: "90.75",
            amountFcy: "€4,450.00",
            amountBcy: "₹4,03,837.50",
            taxableValue: "₹3,63,450.00",
            gstAmount: "₹40,387.50",
            gstType: "UTGST",
            createdBy: "John Doe",
            actions: ""
          },
          {
            invoiceNumber: "INV-1002",
            customerName: "Quantum Tech",
            invoiceDate: "Jun 20, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹4,800.00",
            amountBcy: "₹4,800.00",
            taxableValue: "₹4,320.00",
            gstAmount: "₹480.00",
            gstType: "CGST&SGST",
            createdBy: "Jane Smith",
            actions: ""
          },
          {
            invoiceNumber: "INV-1003",
            customerName: "Innovative Inc.",
            invoiceDate: "May 15, 2025",
            currency: "USD",
            exchangeRate: "82.90",
            amountFcy: "$750.00",
            amountBcy: "₹62,175.00",
            taxableValue: "₹55,500.00",
            gstAmount: "₹6,675.00",
            gstType: "IGST",
            createdBy: "Alice Brown",
            actions: ""
          },
          {
            invoiceNumber: "INV-1004",
            customerName: "Solution Corp.",
            invoiceDate: "Jul 1, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹12,500.00",
            amountBcy: "₹12,500.00",
            taxableValue: "₹11,250.00",
            gstAmount: "₹1,250.00",
            gstType: "CGST&SGST",
            createdBy: "John Doe",
            actions: ""
          },
          {
            invoiceNumber: "INV-1005",
            customerName: "Tech Innovators",
            invoiceDate: "Jun 25, 2025",
            currency: "EUR",
            exchangeRate: "91.20",
            amountFcy: "€2,000.00",
            amountBcy: "₹1,82,400.00",
            taxableValue: "₹1, 64, 160.00",
            gstAmount: "₹18,240.00",
            gstType: "UTGST",
            createdBy: "Jane Smith",
            actions: ""
          },
          {
            invoiceNumber: "INV-1006",
            customerName: "Global Solutions",
            invoiceDate: "Jul 5, 2025",
            currency: "USD",
            exchangeRate: "83.10",
            amountFcy: "$1,200.00",
            amountBcy: "₹99,720.00",
            taxableValue: "₹89,750.00",
            gstAmount: "₹9,970.00",
            gstType: "IGST",
            createdBy: "Alice Brown",
            actions: ""
          },
          {
            invoiceNumber: "INV-1007",
            customerName: "Bright Future Ltd.",
            invoiceDate: "Jun 10, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹8,000.00",
            amountBcy: "₹8,000.00",
            taxableValue: "₹7,200.00",
            gstAmount: "₹800.00",
            gstType: "CGST&SGST",
            createdBy: "John Doe",
            actions: ""
          },
          {
            invoiceNumber: "INV-1008",
            customerName: "Synergy LLC",
            invoiceDate: "Jul 8, 2025",
            currency: "USD",
            exchangeRate: "83.75",
            amountFcy: "$900.00",
            amountBcy: "₹75,375.00",
            taxableValue: "₹67,837.50",
            gstAmount: "₹7,537.50",
            gstType: "UTGST",
            createdBy: "Jane Smith",
            actions: ""
          },
          {
            invoiceNumber: "INV-1009",
            customerName: "Starlight Co.",
            invoiceDate: "Jun 30, 2025",
            currency: "EUR",
            exchangeRate: "90.50",
            amountFcy: "€3,000.00",
            amountBcy: "₹2,71,500.00",
            taxableValue: "₹2,44,350.00",
            gstAmount: "₹27,150.00",
            gstType: "IGST",
            createdBy: "Alice Brown",
            actions: ""
          },
          {
            invoiceNumber: "INV-1010",
            customerName: "Quantum Tech",
            invoiceDate: "Jul 12, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹15,000.00",
            amountBcy: "₹15,000.00",
            taxableValue: "₹13,500.00",
            gstAmount: "₹1,500.00",
            gstType: "CGST&SGST",
            createdBy: "John Doe",
            actions: ""
          },
          {
            invoiceNumber: "INV-1011",
            customerName: "Innovative Inc.",
            invoiceDate: "Jun 15, 2025",
            currency: "USD",
            exchangeRate: "83.20",
            amountFcy: "$600.00",
            amountBcy: "₹49,920.00",
            taxableValue: "₹44,928.00",
            gstAmount: "₹4,992.00",
            gstType: "IGST",
            createdBy: "Jane Smith",
            actions: ""
          },
          {
            invoiceNumber: "INV-1012",
            customerName: "Solution Corp.",
            invoiceDate: "Jul 3, 2025",
            currency: "EUR",
            exchangeRate: "91.00",
            amountFcy: "€1,500.00",
            amountBcy: "₹1,36,500.00",
            taxableValue: "₹1,22,850.00",
            gstAmount: "₹13,650.00",
            gstType: "UTGST",
            createdBy: "Alice Brown",
            actions: ""
          },
          {
            invoiceNumber: "INV-1013",
            customerName: "Tech Innovators",
            invoiceDate: "Jun 28, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹10,000.00",
            amountBcy: "₹10,000.00",
            taxableValue: "₹9,000.00",
            gstAmount: "₹1,000.00",
            gstType: "CGST&SGST",
            createdBy: "John Doe",
            actions: ""
          },
          {
            invoiceNumber: "INV-1014",
            customerName: "Global Solutions",
            invoiceDate: "Jul 10, 2025",
            currency: "USD",
            exchangeRate: "83.60",
            amountFcy: "$1,000.00",
            amountBcy: "₹83,600.00",
            taxableValue: "₹75,240.00",
            gstAmount: "₹8,360.00",
            gstType: "IGST",
            createdBy: "Jane Smith",
            actions: ""
          }
        ];
        ee.value = s;
      } catch (s) {
        console.error("Error fetching invoice data:", s);
      }
    }
    const ye = u([
      { title: "Payment Status", checked: !0 },
      { title: "Currency", checked: !1 },
      { title: "GST Type", checked: !1 },
      { title: "Place of Supply", checked: !1 },
      { title: "Created By", checked: !1 },
      { title: "Invoice Date From", checked: !1 },
      { title: "Invoice Date To", checked: !1 },
      { title: "Due Date From", checked: !1 },
      { title: "Due Date To", checked: !1 }
    ]), fe = u([
      { title: "Paid", value: "Paid" },
      { title: "Overdue", value: "Overdue" },
      { title: "Outstanding", value: "Outstanding" }
    ]), ge = u([
      { title: "INR", value: "INR" },
      { title: "USD", value: "USD" },
      { title: "EUR", value: "EUR" }
    ]), Ne = u([
      {
        label: "TOTAL SALES (BCY)",
        value: "₹84,67,225.00",
        icon: "mdi-finance",
        color: "primary"
      },
      {
        label: "TOTAL OUTSTANDING",
        value: "₹15,90,567.21",
        icon: "mdi-cash-remove",
        color: "warning"
      },
      {
        label: "TOTAL OVERDUE",
        value: "₹35,25,725.52",
        icon: "mdi-bell-alert-outline",
        color: "error"
      },
      {
        label: "INVOICES PAID",
        value: "16 / 50",
        icon: "mdi-check-circle-outline",
        color: "success"
      },
      {
        label: "TOTAL GST",
        value: "₹8,46,722.50",
        icon: "mdi-bank-outline",
        color: "info"
      }
    ]), b = u("item"), ke = u([
      { title: "Item", value: "item", minWidth: "250px" },
      { title: "HSN/SAC", value: "hsn", minWidth: "250px" },
      { title: "Qty", value: "quantity", minWidth: "70px" },
      { title: "Rate", value: "rate", minWidth: "70px" },
      { title: "GST(%)", value: "gst", minWidth: "" },
      { title: "Amount", value: "amount", minWidth: "" },
      { title: "", value: "actions", minWidth: "" }
    ]), Ce = u(["0%", "5%", "12%", "18%", "28%"]), xe = u([
      { title: "Service", value: "item", minWidth: "250px" },
      { title: "Amount", value: "rate", minWidth: "100px" },
      { title: "Discount(%)", value: "discount", minWidth: "100px" },
      { title: "Taxable Amt.", value: "taxableAmount" },
      { title: "GST(%)", value: "gst" },
      { title: "Total", value: "total" },
      { title: "", value: "actions" }
    ]), O = u([]);
    async function Te() {
      try {
        const s = [
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
        ];
        O.value = s;
      } catch (s) {
        console.error("Error fetching states data:", s);
      }
    }
    const Ie = u([
      { title: "Credit", value: "credit" },
      { title: "Debit", value: "debit" }
    ]), ae = u("credit");
    function W(s = !1) {
      return {
        item: "",
        hsnCode: "",
        quantity: s ? void 0 : null,
        unit: s ? void 0 : "",
        rate: null,
        discount: null,
        taxableAmnt: 0,
        gst: "18%",
        total: 0,
        lockedRate: !1
      };
    }
    const v = u([W()]), _ = u([W(!0)]);
    function he(s) {
      const e = s === "service" ? _ : v;
      e.value.push({ ...W(s === "service"), lockedRate: e.value.length > 0 }), e.value.forEach((p, k) => p.lockedRate = k !== 0);
    }
    function Ve(s, e) {
      const p = e === "service" ? _ : v;
      p.value.length > 1 && (p.value.splice(s, 1), p.value.forEach((k, I) => k.lockedRate = I !== 0));
    }
    function te(s) {
      Q(() => {
        s.value.forEach((e) => {
          const p = parseFloat(e.quantity) || 1, k = parseFloat(e.rate) || 0, I = parseFloat(e.discount) || 0, U = (e.quantity !== void 0 ? p : 1) * k, L = U * (I / 100), G = U - L, z = parseFloat(e.gst) || 0, Y = G * (z / 100), q = G + Y;
          e.taxableAmnt = G.toFixed(2), e.total = q.toFixed(2);
        });
      });
    }
    const le = u(0);
    te(v), te(_), Re(() => {
      pe(), Te(), v.value[0].lockedRate = !1, _.value[0].lockedRate = !1, setInterval(() => {
        le.value++;
      }, 3e3);
    });
    const ie = u([
      // Core Information
      { label: "Name", key: "name", visible: !0 },
      { label: "Mobile", key: "mobile", visible: !0 },
      { label: "Opening Balance", key: "openingBalance", visible: !0 },
      // Contact Details
      { label: "Mailing Name", key: "mailingName", visible: !0 },
      { label: "Email", key: "email", visible: !0 },
      { label: "Address", key: "address", visible: !0 },
      { label: "State", key: "state", visible: !0 },
      { label: "Pincode", key: "pincode", visible: !0 },
      { label: "Country", key: "country", visible: !0 },
      // Tax & Compliance
      { label: "GSTIN/UIN", key: "gstin", visible: !0 },
      { label: "PAN", key: "pan", visible: !0 },
      { label: "Tax Registration Number", key: "taxReg", visible: !0 },
      { label: "TDS Applicable", key: "tds", visible: !0 },
      // Financial Controls
      { label: "Credit Limit", key: "creditLimit", visible: !0 },
      { label: "Credit Period (Days)", key: "creditPeriod", visible: !0 },
      { label: "Maintain Bill-wise Details", key: "billWise", visible: !0 },
      // Banking Details
      { label: "Bank Name", key: "bankName", visible: !0 },
      { label: "Account Number", key: "accountNumber", visible: !0 },
      { label: "IFSC Code", key: "ifscCode", visible: !0 },
      // Additional Fields
      { label: "Additional Country 1", key: "addCountry1", visible: !0 },
      { label: "Place of Supply", key: "state", visible: !0 },
      { label: "Ship-to Address", key: "shipToAddress", visible: !0 }
    ]), m = (s) => {
      var e;
      return (e = ie.value.find((p) => p.key === s)) == null ? void 0 : e.visible;
    }, j = u([
      {
        title: "Innovative Inc.",
        value: "innovative_inc",
        data: {
          name: "Innovative Inc.",
          mobile: "9876543210",
          openingBalance: "0",
          mailingName: "Innovative Incorporated",
          email: "contact@innovativeinc.com",
          address: "123 Innovation Drive, Tech City",
          state: "Karnataka",
          pincode: "560001",
          country: "India",
          gstin: "29AABC1234D1Z5",
          pan: "AABC1234D",
          taxReg: "TRN123456",
          tds: !1,
          creditLimit: "500000",
          creditPeriod: "30",
          billWise: !0,
          bankName: "HDFC Bank",
          accountNumber: "123456789012",
          ifscCode: "HDFC0001234",
          addCountry1: "India",
          shipToAddress: "123 Innovation Drive, Tech City, Karnataka, 560001"
        }
      },
      {
        title: "Solution Corp.",
        value: "solution_corp",
        data: {
          name: "Solution Corp.",
          mobile: "9123456789",
          openingBalance: "10000",
          mailingName: "Solution Corporation",
          email: "info@solutioncorp.com",
          address: "456 Business Avenue, Mumbai",
          state: "Maharashtra",
          pincode: "400001",
          country: "India",
          gstin: "27ADEF5678G1Z3",
          pan: "ADEF5678G",
          taxReg: "TRN789012",
          tds: !0,
          creditLimit: "750000",
          creditPeriod: "45",
          billWise: !1,
          bankName: "ICICI Bank",
          accountNumber: "987654321098",
          ifscCode: "ICIC0005678",
          addCountry1: "India",
          shipToAddress: "456 Business Avenue, Mumbai, Maharashtra, 400001"
        }
      },
      {
        title: "Quantum Tech",
        value: "quantum_tech",
        data: {
          name: "Quantum Tech",
          mobile: "9988776655",
          openingBalance: "5000",
          mailingName: "Quantum Technologies",
          email: "support@quantumtech.com",
          address: "789 Tech Park, Chennai",
          state: "Tamil Nadu",
          pincode: "600001",
          country: "India",
          gstin: "33AGHI9012J1Z1",
          pan: "AGHI9012J",
          taxReg: "TRN345678",
          tds: !1,
          creditLimit: "300000",
          creditPeriod: "15",
          billWise: !0,
          bankName: "Axis Bank",
          accountNumber: "456789123456",
          ifscCode: "UTIB0009012",
          addCountry1: "India",
          shipToAddress: "789 Tech Park, Chennai, Tamil Nadu, 600001"
        }
      }
    ]), V = u(!1), Se = () => {
      V.value = !V.value;
    }, S = u(null), ne = u(""), se = u(""), H = u("INR"), oe = u(/* @__PURE__ */ new Date()), $ = u(""), ue = u(/* @__PURE__ */ new Date());
    K(() => {
      if (!S.value) return "";
      const s = j.value.find((e) => e.value === S.value);
      return s ? `GSTIN: ${s.data.gstin}
Billing Address: ${s.data.address}, ${s.data.state}, ${s.data.pincode}
Currency: ${H.value}` : "";
    }), Q(() => {
      if (S.value) {
        const s = j.value.find((e) => e.value === S.value);
        s && (ne.value = s.data.gstin, se.value = `${s.data.address}, ${s.data.state}, ${s.data.pincode}`, H.value = s.data.currency || "INR", $.value = s.data.state);
      } else
        ne.value = "", se.value = "", H.value = "INR", $.value = "";
    });
    const F = u(!1), A = u("Numbering"), Ae = ["Numbering", "Columns", "Fields", "Mode"], D = u("Text"), B = u(""), E = u(1), De = K(() => {
      const s = /* @__PURE__ */ new Date(), e = s.getFullYear(), p = s.getMonth() >= 3 ? e + 1 : e;
      return `${p - 1}-${p.toString().slice(-2)}`;
    });
    Q(() => {
      D.value === "Financial Year" ? B.value = De.value : B.value = "";
    });
    const Be = K(() => !B.value || !E.value ? "" : `${B.value}/${E.value}`);
    return (s, e) => {
      const p = T("IconSettings"), k = T("IconX"), I = T("IconCirclePlus"), U = T("IconCalendar"), L = T("v-date-input"), G = T("IconTrash"), z = T("IconDeviceFloppy"), Y = we, q = T("IconCheck");
      return o(), w("div", $e, [
        a(Ge, null, {
          default: t(() => [
            M.value ? (o(), d(g, {
              key: 0,
              class: "mb-3"
            }, {
              default: t(() => [
                a(n, { cols: "12" }, {
                  default: t(() => [
                    a(y, {
                      class: "account_vcard_border",
                      title: "New Invoice",
                      subtitle: "Fill out the details below to create a new sales invoice."
                    }, {
                      append: t(() => [
                        l("div", Ee, [
                          a(f, {
                            onClick: e[0] || (e[0] = (i) => F.value = !0),
                            variant: "text",
                            size: "x-small",
                            rounded: ""
                          }, {
                            default: t(() => [
                              a(p, { size: "20" })
                            ]),
                            _: 1
                          }),
                          a(f, {
                            onClick: e[1] || (e[1] = (i) => M.value = !1),
                            variant: "text",
                            size: "x-small",
                            rounded: "",
                            class: "account_vcard_close_btn"
                          }, {
                            default: t(() => [
                              a(k, { size: "20" })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      default: t(() => [
                        a(x, null, {
                          default: t(() => [
                            a(g, null, {
                              default: t(() => [
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    e[17] || (e[17] = l("label", { class: "account_label mb-2" }, "Customer", -1)),
                                    a(re, {
                                      modelValue: S.value,
                                      "onUpdate:modelValue": e[3] || (e[3] = (i) => S.value = i),
                                      placeholder: "Select a customer",
                                      class: "accouting_field accouting_active_field",
                                      items: j.value,
                                      variant: "outlined"
                                    }, {
                                      append: t(() => [
                                        a(f, {
                                          class: "account_v_btn_outlined",
                                          onClick: e[2] || (e[2] = (i) => V.value = !0),
                                          rounded: "2"
                                        }, {
                                          default: t(() => [
                                            a(I, { size: "20" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "items"])
                                  ]),
                                  _: 1,
                                  __: [17]
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6",
                                  sm: "12"
                                }, {
                                  default: t(() => [
                                    e[18] || (e[18] = l("label", { class: "account_label mb-2" }, "Credit Note Number", -1)),
                                    a(r, {
                                      class: "accouting_field accouting_active_field",
                                      variant: "outlined",
                                      items: O.value
                                    }, null, 8, ["items"])
                                  ]),
                                  _: 1,
                                  __: [18]
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6",
                                  sm: "12"
                                }, {
                                  default: t(() => [
                                    e[19] || (e[19] = l("label", { class: "account_label mb-2" }, "Place of Supply", -1)),
                                    a(re, {
                                      modelValue: $.value,
                                      "onUpdate:modelValue": e[4] || (e[4] = (i) => $.value = i),
                                      class: "accouting_field accouting_active_field",
                                      variant: "outlined",
                                      items: O.value
                                    }, null, 8, ["modelValue", "items"])
                                  ]),
                                  _: 1,
                                  __: [19]
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    e[20] || (e[20] = l("label", { class: "account_label mb-2" }, "Credit Note Date", -1)),
                                    a(L, {
                                      class: "accounting_date_input",
                                      "cancel-text": "Close",
                                      "ok-text": "Apply",
                                      modelValue: ue.value,
                                      "onUpdate:modelValue": e[5] || (e[5] = (i) => ue.value = i)
                                    }, {
                                      "prepend-inner": t(() => [
                                        a(U, { size: "20" })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue"])
                                  ]),
                                  _: 1,
                                  __: [20]
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    e[21] || (e[21] = l("label", { class: "account_label mb-2" }, "Reason for Return", -1)),
                                    a(r, {
                                      class: "accounting_v_textarea",
                                      variant: "outlined",
                                      density: "compact"
                                    })
                                  ]),
                                  _: 1,
                                  __: [21]
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    a(g, null, {
                                      default: t(() => [
                                        a(n, {
                                          cols: "12",
                                          lg: "6",
                                          md: "6",
                                          sm: "12"
                                        }, {
                                          default: t(() => [
                                            e[22] || (e[22] = l("label", { class: "account_label mb-2" }, "Original Invoice No.", -1)),
                                            a(r, {
                                              class: "accouting_field accouting_active_field",
                                              variant: "outlined",
                                              density: "compact"
                                            })
                                          ]),
                                          _: 1,
                                          __: [22]
                                        }),
                                        a(n, {
                                          cols: "12",
                                          lg: "6",
                                          md: "6",
                                          sm: "12"
                                        }, {
                                          default: t(() => [
                                            e[23] || (e[23] = l("label", { class: "account_label mb-2" }, "Original Invoice Date", -1)),
                                            a(L, {
                                              class: "accounting_date_input",
                                              "cancel-text": "Close",
                                              "ok-text": "Apply",
                                              modelValue: oe.value,
                                              "onUpdate:modelValue": e[6] || (e[6] = (i) => oe.value = i)
                                            }, {
                                              "prepend-inner": t(() => [
                                                a(U, { size: "20" })
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue"])
                                          ]),
                                          _: 1,
                                          __: [23]
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
                            a(C, { class: "my-3" }),
                            a(g, null, {
                              default: t(() => [
                                a(n, {
                                  cols: "12",
                                  lg: "12",
                                  md: "12"
                                }, {
                                  default: t(() => [
                                    a(Je, {
                                      headers: b.value === "item" ? ke.value : xe.value,
                                      items: b.value === "item" ? v.value : _.value,
                                      class: "account_dynamic_table account_invoice_table"
                                    }, {
                                      "item.item": t(({ index: i }) => [
                                        a(r, {
                                          modelValue: (b.value === "item" ? v.value : _.value)[i].item,
                                          "onUpdate:modelValue": (N) => (b.value === "item" ? v.value : _.value)[i].item = N,
                                          placeholder: "Item/Service description",
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      "item.hsn": t(({ index: i }) => [
                                        a(r, {
                                          modelValue: (b.value === "item" ? v.value : _.value)[i].hsnCode,
                                          "onUpdate:modelValue": (N) => (b.value === "item" ? v.value : _.value)[i].hsnCode = N,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          placeholder: "Enter HSN/SAC code"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      "item.quantity": t(({ index: i }) => [
                                        a(r, {
                                          modelValue: v.value[i].quantity,
                                          "onUpdate:modelValue": (N) => v.value[i].quantity = N,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          type: "number",
                                          placeholder: "0",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      "item.rate": t(({ index: i }) => [
                                        a(r, {
                                          modelValue: (b.value === "item" ? v.value : _.value)[i].rate,
                                          "onUpdate:modelValue": (N) => (b.value === "item" ? v.value : _.value)[i].rate = N,
                                          readonly: (b.value === "item" ? v.value : _.value)[i].lockedRate,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          type: "number",
                                          placeholder: "0",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      "item.gst": t(({ index: i }) => [
                                        a(J, {
                                          modelValue: (b.value === "item" ? v.value : _.value)[i].gst,
                                          "onUpdate:modelValue": (N) => (b.value === "item" ? v.value : _.value)[i].gst = N,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          items: Ce.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      "item.amount": t(({ index: i }) => [
                                        l("p", Le, "₹" + Z((b.value === "item" ? v.value : _.value)[i].total), 1)
                                      ]),
                                      "item.actions": t(({ index: i }) => [
                                        a(G, {
                                          class: P(["cursor-pointer table_row_icon", {
                                            "opacity-50": (b.value === "item" ? v.value : _.value).length === 1,
                                            "cursor-not-allowed": (b.value === "item" ? v.value : _.value).length === 1
                                          }]),
                                          disabled: (b.value === "item" ? v.value : _.value).length === 1,
                                          onClick: (N) => Ve(i, b.value),
                                          size: "20"
                                        }, null, 8, ["class", "disabled", "onClick"])
                                      ]),
                                      _: 2
                                    }, 1032, ["headers", "items"])
                                  ]),
                                  _: 1
                                }),
                                a(n, { cols: "12" }, {
                                  default: t(() => [
                                    a(f, {
                                      class: "account_v_btn_outlined mt-3",
                                      variant: "text",
                                      onClick: e[7] || (e[7] = (i) => he(b.value))
                                    }, {
                                      prepend: t(() => [
                                        a(I, { size: "20" })
                                      ]),
                                      default: t(() => [
                                        e[24] || (e[24] = h(" Add Another Line ", -1))
                                      ]),
                                      _: 1,
                                      __: [24]
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            a(C),
                            a(g, null, {
                              default: t(() => [
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  sm: "6"
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  sm: "6"
                                }, {
                                  default: t(() => [
                                    a(g, null, {
                                      default: t(() => [
                                        a(n, { cols: "6" }),
                                        a(n, { cols: "6" }, {
                                          default: t(() => [
                                            a(y, { class: "shadow-none w-100" }, {
                                              default: t(() => [
                                                l("div", ze, [
                                                  e[25] || (e[25] = l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("span", { class: "account_gst_invoice_subtitle" }, "Subtotal"),
                                                    l("span", { class: "account_gst_invoice_subtitle_val" }, "₹0.00")
                                                  ], -1)),
                                                  e[26] || (e[26] = l("div", { class: "d-flex align-center justify-space-between py-2" }, [
                                                    l("span", { class: "account_gst_invoice_subtitle" }, "CGST"),
                                                    l("span", { class: "account_gst_invoice_subtitle_val" }, "₹0.00")
                                                  ], -1)),
                                                  e[27] || (e[27] = l("div", { class: "d-flex align-center justify-space-between pb-2" }, [
                                                    l("span", { class: "account_gst_invoice_subtitle" }, "SGST"),
                                                    l("span", { class: "account_gst_invoice_subtitle_val" }, "₹0.00")
                                                  ], -1)),
                                                  e[28] || (e[28] = l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("span", { class: "account_gst_invoice_subtitle" }, "IGST"),
                                                    l("span", { class: "account_gst_invoice_subtitle_val" }, "₹0.00")
                                                  ], -1)),
                                                  a(C),
                                                  e[29] || (e[29] = l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("span", { class: "account_gst_invoice_subtitle_total" }, "Total Credit Amount"),
                                                    l("span", { class: "account_gst_invoice_subtitle_total_val" }, "₹0.00")
                                                  ], -1))
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
                            l("div", Oe, [
                              a(f, { class: "account_v_btn_primary" }, {
                                prepend: t(() => [
                                  a(z, { size: "20" })
                                ]),
                                default: t(() => [
                                  e[30] || (e[30] = h(" Save Credit Note ", -1))
                                ]),
                                _: 1,
                                __: [30]
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
                })
              ]),
              _: 1
            })) : c("", !0)
          ]),
          _: 1
        }),
        l("div", We, [
          a(Y, {
            title: "Invoices",
            headers: be.value,
            items: ee.value,
            filters: ye.value,
            "status-items": fe.value,
            "account-type-items": [],
            "currency-items": ge.value,
            widgets: Ne.value,
            "item-value-key": "invoiceNumber"
          }, null, 8, ["headers", "items", "filters", "status-items", "currency-items", "widgets"])
        ]),
        a(me, {
          "max-width": "900",
          modelValue: V.value,
          "onUpdate:modelValue": e[9] || (e[9] = (i) => V.value = i)
        }, {
          default: t(() => [
            V.value ? (o(), w("div", je, [
              a(y, {
                title: "Create a New Customer",
                class: "pa-2 account_vcard_border shadow-none",
                subtitle: "Fill in the details below to add a new customer to your records."
              }, {
                append: t(() => [
                  l("div", He, [
                    a(Pe, {
                      location: "start",
                      transition: "slide-y-transition",
                      "offset-y": "",
                      "close-on-content-click": !1
                    }, {
                      activator: t(({ props: i }) => [
                        a(f, Fe(i, {
                          variant: "text",
                          size: "x-small",
                          rounded: ""
                        }), {
                          default: t(() => [
                            a(p, { size: "20" })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: t(() => [
                        a(y, { class: "account_vcard_menu account_vcard_border" }, {
                          default: t(() => [
                            e[31] || (e[31] = l("div", { class: "account_vcard_menu_hdng" }, "Show/Hide Optional Fields", -1)),
                            a(C, { class: "my-1 mt-0" }),
                            l("div", Ye, [
                              (o(!0), w(ce, null, de(ie.value, (i) => (o(), w("div", {
                                key: i.key,
                                class: "account_vcard_menu_item",
                                onClick: (N) => i.visible = !i.visible
                              }, [
                                l("div", Ke, [
                                  i.visible ? (o(), d(q, {
                                    key: 0,
                                    size: "16"
                                  })) : c("", !0),
                                  l("span", {
                                    class: P(i.visible ? "" : "field_list_dynamic_ml")
                                  }, Z(i.label), 3)
                                ])
                              ], 8, qe))), 128))
                            ])
                          ]),
                          _: 1,
                          __: [31]
                        })
                      ]),
                      _: 1
                    }),
                    a(f, {
                      onClick: Se,
                      variant: "text",
                      size: "x-small",
                      rounded: "",
                      class: "account_vcard_close_btn"
                    }, {
                      default: t(() => [
                        a(k, { size: "20" })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: t(() => [
                  a(x, { class: "add_customer_dialog" }, {
                    default: t(() => [
                      a(g, null, {
                        default: t(() => [
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[32] || (e[32] = l("h5", { class: "account_form_info_hdng" }, "Core Information", -1)),
                              a(C, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [32]
                          }),
                          m("name") ? (o(), d(n, {
                            key: 0,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[33] || (e[33] = l("label", { class: "account_label mb-2" }, "Name (Mandatory)", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Customer's Full Name or Company Name"
                              })
                            ]),
                            _: 1,
                            __: [33]
                          })) : c("", !0),
                          m("mobile") ? (o(), d(n, {
                            key: 1,
                            cols: "12",
                            lg: "5",
                            md: "5"
                          }, {
                            default: t(() => [
                              e[34] || (e[34] = l("label", { class: "account_label mb-2" }, "Mobile", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                type: "number",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "9876543210"
                              })
                            ]),
                            _: 1,
                            __: [34]
                          })) : c("", !0),
                          m("openingBalance") ? (o(), d(n, {
                            key: 2,
                            cols: "12",
                            lg: "7",
                            md: "7"
                          }, {
                            default: t(() => [
                              e[35] || (e[35] = l("label", { class: "account_label mb-2" }, "Opening Balance", -1)),
                              l("div", Qe, [
                                a(r, {
                                  class: "custom_option_field accouting_field accouting_active_field",
                                  type: "number",
                                  variant: "outlined",
                                  density: "compact",
                                  placeholder: "0"
                                }),
                                a(J, {
                                  class: "custom_option_select accouting_field accouting_active_field",
                                  modelValue: ae.value,
                                  "onUpdate:modelValue": e[8] || (e[8] = (i) => ae.value = i),
                                  items: Ie.value,
                                  variant: "outlined",
                                  density: "compact"
                                }, null, 8, ["modelValue", "items"])
                              ])
                            ]),
                            _: 1,
                            __: [35]
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[36] || (e[36] = l("h5", { class: "account_form_info_hdng" }, "Contact Details", -1)),
                              a(C, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [36]
                          }),
                          m("mailingName") ? (o(), d(n, {
                            key: 3,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[37] || (e[37] = l("label", { class: "account_label mb-2" }, "Mailing Name", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Name for correspondence"
                              })
                            ]),
                            _: 1,
                            __: [37]
                          })) : c("", !0),
                          m("email") ? (o(), d(n, {
                            key: 4,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[38] || (e[38] = l("label", { class: "account_label mb-2" }, "Email", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "customer@example.com"
                              })
                            ]),
                            _: 1,
                            __: [38]
                          })) : c("", !0),
                          m("address") ? (o(), d(n, {
                            key: 5,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[39] || (e[39] = l("label", { class: "account_label mb-2" }, "Address", -1)),
                              a(ve, {
                                class: "accounting_v_textarea",
                                placeholder: "Full address",
                                variant: "outlined"
                              })
                            ]),
                            _: 1,
                            __: [39]
                          })) : c("", !0),
                          m("state") ? (o(), d(n, {
                            key: 6,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[40] || (e[40] = l("label", { class: "account_label mb-2" }, "State", -1)),
                              a(J, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                placeholder: "Select an item"
                              })
                            ]),
                            _: 1,
                            __: [40]
                          })) : c("", !0),
                          m("pincode") ? (o(), d(n, {
                            key: 7,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[41] || (e[41] = l("label", { class: "account_label mb-2" }, "Pincode", -1)),
                              a(J, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                placeholder: "e.g. 400001"
                              })
                            ]),
                            _: 1,
                            __: [41]
                          })) : c("", !0),
                          m("country") ? (o(), d(n, {
                            key: 8,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[42] || (e[42] = l("label", { class: "account_label mb-2" }, "Country", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "India"
                              })
                            ]),
                            _: 1,
                            __: [42]
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[43] || (e[43] = l("h5", { class: "account_form_info_hdng" }, "Tax & Compliance", -1)),
                              a(C, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [43]
                          }),
                          m("gstin") ? (o(), d(n, {
                            key: 9,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[44] || (e[44] = l("label", { class: "account_label mb-2" }, "GSTIN/UIN", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "15-digit GSTIN"
                              })
                            ]),
                            _: 1,
                            __: [44]
                          })) : c("", !0),
                          m("pan") ? (o(), d(n, {
                            key: 10,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[45] || (e[45] = l("label", { class: "account_label mb-2" }, "PAN", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "15-digit PAN"
                              })
                            ]),
                            _: 1,
                            __: [45]
                          })) : c("", !0),
                          m("taxReg") ? (o(), d(n, {
                            key: 11,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[46] || (e[46] = l("label", { class: "account_label mb-2" }, "Tax Registration Number", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "If applicable"
                              })
                            ]),
                            _: 1,
                            __: [46]
                          })) : c("", !0),
                          m("tds") ? (o(), d(n, {
                            key: 12,
                            class: "d-flex align-center",
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              a(_e, {
                                density: "compact",
                                class: "account_v_checkbox",
                                label: "TDS Applicable"
                              })
                            ]),
                            _: 1
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[47] || (e[47] = l("h5", { class: "account_form_info_hdng" }, "Financial Controls", -1)),
                              a(C, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [47]
                          }),
                          m("creditLimit") ? (o(), d(n, {
                            key: 13,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[48] || (e[48] = l("label", { class: "account_label mb-2" }, "Credit Limit", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                type: "number",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "0"
                              })
                            ]),
                            _: 1,
                            __: [48]
                          })) : c("", !0),
                          m("creditPeriod") ? (o(), d(n, {
                            key: 14,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[49] || (e[49] = l("label", { class: "account_label mb-2" }, "Credit Period (Days)", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                type: "number",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "0"
                              })
                            ]),
                            _: 1,
                            __: [49]
                          })) : c("", !0),
                          m("billWise") ? (o(), d(n, {
                            key: 15,
                            class: "d-flex align-center",
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              a(_e, {
                                density: "compact",
                                class: "account_v_checkbox",
                                label: "Maintain Bill-wise Details"
                              })
                            ]),
                            _: 1
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[50] || (e[50] = l("h5", { class: "account_form_info_hdng" }, "Banking Details", -1)),
                              a(C, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [50]
                          }),
                          m("bankName") ? (o(), d(n, {
                            key: 16,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[51] || (e[51] = l("label", { class: "account_label mb-2" }, "Bank Name", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "e.g. HDFC Bank"
                              })
                            ]),
                            _: 1,
                            __: [51]
                          })) : c("", !0),
                          m("accountNumber") ? (o(), d(n, {
                            key: 17,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[52] || (e[52] = l("label", { class: "account_label mb-2" }, "Account Number", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Bank Account Number"
                              })
                            ]),
                            _: 1,
                            __: [52]
                          })) : c("", !0),
                          m("ifscCode") ? (o(), d(n, {
                            key: 18,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[53] || (e[53] = l("label", { class: "account_label mb-2" }, "IFSC Code", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "e.g. HDFC0000001"
                              })
                            ]),
                            _: 1,
                            __: [53]
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[54] || (e[54] = l("h5", { class: "account_form_info_hdng" }, "Additional Fields", -1)),
                              a(C, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [54]
                          }),
                          m("addCountry1") ? (o(), d(n, {
                            key: 19,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[55] || (e[55] = l("label", { class: "account_label mb-2" }, "Country", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "India"
                              })
                            ]),
                            _: 1,
                            __: [55]
                          })) : c("", !0),
                          m("state") ? (o(), d(n, {
                            key: 20,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[56] || (e[56] = l("label", { class: "account_label mb-2" }, "Place of Supply", -1)),
                              a(J, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "State"
                              })
                            ]),
                            _: 1,
                            __: [56]
                          })) : c("", !0),
                          m("shipToAddress") ? (o(), d(n, {
                            key: 21,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[58] || (e[58] = l("label", { class: "account_label mb-2" }, "Ship-to Address", -1)),
                              a(ve, {
                                class: "accounting_v_textarea",
                                placeholder: "Optional delivery address",
                                variant: "outlined"
                              }),
                              l("div", Ze, [
                                a(f, { class: "account_v_btn_primary" }, {
                                  prepend: t(() => [
                                    a(z, { size: "20" })
                                  ]),
                                  default: t(() => [
                                    e[57] || (e[57] = h(" Save Customer ", -1))
                                  ]),
                                  _: 1,
                                  __: [57]
                                })
                              ])
                            ]),
                            _: 1,
                            __: [58]
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
            ])) : c("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        a(me, {
          "max-width": "600",
          modelValue: F.value,
          "onUpdate:modelValue": e[15] || (e[15] = (i) => F.value = i)
        }, {
          default: t(() => [
            F.value ? (o(), w("div", Xe, [
              a(y, {
                title: "Invoice Settings",
                class: "pa-2 account_vcard_border shadow-none",
                subtitle: "Customize your invoice creation experience."
              }, {
                append: t(() => [
                  a(f, {
                    onClick: e[10] || (e[10] = (i) => F.value = !1),
                    variant: "text",
                    size: "x-small",
                    rounded: "",
                    class: "account_vcard_close_btn"
                  }, {
                    default: t(() => [
                      a(k, { size: "20" })
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  a(x, null, {
                    default: t(() => [
                      a(g, { class: "acc_invoice_settings_row mx-1" }, {
                        default: t(() => [
                          (o(), w(ce, null, de(Ae, (i) => a(n, {
                            class: "pa-1",
                            cols: "3",
                            key: i
                          }, {
                            default: t(() => [
                              a(f, {
                                size: "small",
                                class: P(["w-100", A.value === i ? "account_v_btn_light" : "account_v_btn_ghost"]),
                                variant: "text",
                                onClick: (N) => A.value = i
                              }, {
                                default: t(() => [
                                  h(Z(i), 1)
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"])
                            ]),
                            _: 2
                          }, 1024)), 64))
                        ]),
                        _: 1
                      }),
                      a(g, null, {
                        default: t(() => [
                          a(n, { cols: "12" }, {
                            default: t(() => [
                              A.value === "Numbering" ? (o(), d(y, {
                                key: 0,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[66] || (e[66] = l("h6", { class: "mb-4" }, "Invoice Numbering", -1)),
                                  a(g, null, {
                                    default: t(() => [
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(y, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(x, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", ea, [
                                                    e[59] || (e[59] = l("p", { class: "mb-0" }, "Change Every FY", -1)),
                                                    a(R, {
                                                      density: "compact",
                                                      color: "primary",
                                                      "hide-details": "",
                                                      class: "account_swtich_btn",
                                                      inset: ""
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
                                      }),
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          e[62] || (e[62] = l("label", { class: "account_label mb-2" }, "Prefix Mode", -1)),
                                          a(g, null, {
                                            default: t(() => [
                                              a(n, { cols: "6" }, {
                                                default: t(() => [
                                                  a(f, {
                                                    class: P(["w-100 account_v_btn_outlined", D.value === "Text" ? "active_border" : ""]),
                                                    size: "large",
                                                    onClick: e[11] || (e[11] = (i) => D.value = "Text")
                                                  }, {
                                                    default: t(() => e[60] || (e[60] = [
                                                      h(" Text ", -1)
                                                    ])),
                                                    _: 1,
                                                    __: [60]
                                                  }, 8, ["class"])
                                                ]),
                                                _: 1
                                              }),
                                              a(n, { cols: "6" }, {
                                                default: t(() => [
                                                  a(f, {
                                                    class: P(["w-100 account_v_btn_outlined", D.value === "Financial Year" ? "active_border" : ""]),
                                                    size: "large",
                                                    onClick: e[12] || (e[12] = (i) => D.value = "Financial Year")
                                                  }, {
                                                    default: t(() => e[61] || (e[61] = [
                                                      h(" Financial Year ", -1)
                                                    ])),
                                                    _: 1,
                                                    __: [61]
                                                  }, 8, ["class"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1,
                                        __: [62]
                                      }),
                                      a(n, {
                                        cols: "12",
                                        lg: "8",
                                        md: "8"
                                      }, {
                                        default: t(() => [
                                          e[63] || (e[63] = l("label", { class: "account_label mb-2" }, "Prefix Type", -1)),
                                          a(r, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            modelValue: B.value,
                                            "onUpdate:modelValue": e[13] || (e[13] = (i) => B.value = i),
                                            readonly: D.value === "Financial Year"
                                          }, null, 8, ["modelValue", "readonly"])
                                        ]),
                                        _: 1,
                                        __: [63]
                                      }),
                                      a(n, {
                                        cols: "12",
                                        lg: "4",
                                        md: "4"
                                      }, {
                                        default: t(() => [
                                          e[64] || (e[64] = l("label", { class: "account_label mb-2" }, "Starting Number", -1)),
                                          a(r, {
                                            class: "accouting_field accouting_active_field",
                                            type: "number",
                                            variant: "outlined",
                                            density: "compact",
                                            modelValue: E.value,
                                            "onUpdate:modelValue": e[14] || (e[14] = (i) => E.value = i)
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1,
                                        __: [64]
                                      }),
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          e[65] || (e[65] = l("label", { class: "account_label mb-2" }, "Preview", -1)),
                                          a(r, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            readonly: "",
                                            "model-value": Be.value
                                          }, null, 8, ["model-value"])
                                        ]),
                                        _: 1,
                                        __: [65]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1,
                                __: [66]
                              })) : c("", !0),
                              A.value === "Columns" ? (o(), d(y, {
                                key: 1,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[70] || (e[70] = l("h6", { class: "mb-4" }, "Column Visibility", -1)),
                                  a(g, null, {
                                    default: t(() => [
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(y, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(x, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", aa, [
                                                    e[67] || (e[67] = l("p", { class: "mb-0" }, "Unit", -1)),
                                                    a(R, {
                                                      density: "compact",
                                                      color: "primary",
                                                      "hide-details": "",
                                                      class: "account_swtich_btn",
                                                      inset: ""
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
                                      }),
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(y, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(x, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", ta, [
                                                    e[68] || (e[68] = l("p", { class: "mb-0" }, "HSN/SAC Code", -1)),
                                                    a(R, {
                                                      density: "compact",
                                                      color: "primary",
                                                      "hide-details": "",
                                                      class: "account_swtich_btn",
                                                      inset: ""
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
                                      }),
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(y, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(x, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", la, [
                                                    e[69] || (e[69] = l("p", { class: "mb-0" }, "Discount (%)", -1)),
                                                    a(R, {
                                                      density: "compact",
                                                      color: "primary",
                                                      "hide-details": "",
                                                      class: "account_swtich_btn",
                                                      inset: ""
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
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1,
                                __: [70]
                              })) : c("", !0),
                              A.value === "Fields" ? (o(), d(y, {
                                key: 2,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[73] || (e[73] = l("h6", { class: "mb-4" }, "Field Visibility", -1)),
                                  a(g, null, {
                                    default: t(() => [
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(y, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(x, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", ia, [
                                                    e[71] || (e[71] = l("p", { class: "mb-0" }, "Due Date", -1)),
                                                    a(R, {
                                                      density: "compact",
                                                      color: "primary",
                                                      "hide-details": "",
                                                      class: "account_swtich_btn",
                                                      inset: ""
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
                                      }),
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(y, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(x, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", na, [
                                                    e[72] || (e[72] = l("p", { class: "mb-0" }, "Currency & Exchange Rate", -1)),
                                                    a(R, {
                                                      density: "compact",
                                                      color: "primary",
                                                      "hide-details": "",
                                                      class: "account_swtich_btn",
                                                      inset: ""
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
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1,
                                __: [73]
                              })) : c("", !0),
                              A.value === "Mode" ? (o(), d(y, {
                                key: 3,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[74] || (e[74] = l("h6", { class: "mb-4" }, "Invoice Mode", -1)),
                                  a(Me, { class: "accounting_v_radio" }, {
                                    default: t(() => [
                                      a(X, {
                                        label: "Items and Services",
                                        value: "item_service"
                                      }),
                                      a(X, {
                                        label: "Items Only",
                                        value: "items"
                                      }),
                                      a(X, {
                                        label: "Services Only",
                                        value: "services"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1,
                                __: [74]
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
              })
            ])) : c("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        (o(), d(f, {
          onClick: e[16] || (e[16] = (i) => M.value = !M.value),
          key: le.value,
          class: "account_add_new_btn bounce"
        }, {
          prepend: t(() => [
            a(I, { size: "20" })
          ]),
          default: t(() => [
            e[75] || (e[75] = h(" Create Invoice ", -1))
          ]),
          _: 1,
          __: [75]
        }))
      ]);
    };
  }
}, ka = /* @__PURE__ */ Ue(sa, [["__scopeId", "data-v-565cbd77"]]);
export {
  ka as default
};
