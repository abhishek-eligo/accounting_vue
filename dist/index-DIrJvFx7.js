import { _ as Ue } from "./DynamicDataTable-QZQawQLr.js";
import { ref as o, onMounted as Ge, computed as Z, watchEffect as X, resolveComponent as N, createElementBlock as F, openBlock as u, createVNode as a, createElementVNode as l, createBlock as d, withCtx as t, createCommentVNode as c, normalizeClass as V, createTextVNode as T, createSlots as Oe, toDisplayString as z, Fragment as ve, renderList as _e, mergeProps as Je } from "vue";
import { _ as Me } from "./_plugin-vue_export-helper-CHgC5LLL.js";
import { a as $e, b as y, e as r, V as k, h as je } from "./main-DaW4PQ0p.js";
import { V as g, a as n } from "./VRow-CgaVC7ay.js";
import { V as f, a as h, b as U } from "./VCard-DwrOBi19.js";
import { V as pe } from "./VAutocomplete-CngmkW_4.js";
import { V as E } from "./VTextarea-BAqBXVkQ.js";
import { V as ee } from "./VCheckbox-Cg1rOSBP.js";
import { V as Le } from "./VDataTable-j6B5KFVH.js";
import { V as C } from "./VSwitch-CQtK7rAo.js";
import { V as be } from "./VDialog-wKMehTMg.js";
import { V as ze, a as ae } from "./VRadioGroup-2jStluw7.js";
const Ee = { class: "account_ui_vcard" }, We = { class: "d-flex align-center gap-2" }, He = { class: "d-flex align-center gap-2 mb-3" }, Ye = { class: "mb-0" }, Ke = { class: "mb-0" }, qe = { class: "pa-3" }, Qe = { class: "d-flex align-center justify-space-between" }, Ze = {
  style: { "min-width": "200px" },
  class: "d-flex align-center gap-1"
}, Xe = { class: "mb-2" }, ea = { class: "d-flex align-center gap-2 justify-end mt-3" }, aa = { class: "account_invoice_list" }, ta = {
  key: 0,
  class: "account_ui_vcard"
}, la = { class: "d-flex align-center gap-2" }, na = { class: "account_vcard_menu_items py-1" }, ia = ["onClick"], sa = { class: "my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2" }, ua = { class: "custom_option d-flex align-center" }, oa = { class: "d-flex align-center justify-end mt-4" }, ca = {
  key: 0,
  class: "account_ui_vcard"
}, da = { class: "d-flex align-center justify-space-between" }, ra = { class: "d-flex align-center justify-space-between" }, ma = { class: "d-flex align-center justify-space-between" }, va = { class: "d-flex align-center justify-space-between" }, _a = { class: "d-flex align-center justify-space-between" }, pa = { class: "d-flex align-center justify-space-between" }, ba = {
  __name: "index",
  setup(fa) {
    const fe = o([
      { title: "Invoice Number", value: "invoiceNumber", visible: !0, minWidth: "120px" },
      { title: "Customer Name", value: "customerName", visible: !0, minWidth: "120px" },
      { title: "Invoice Date", value: "invoiceDate", visible: !0, minWidth: "120px" },
      { title: "Due Date", value: "dueDate", visible: !0, minWidth: "120px" },
      { title: "Currency", value: "currency", visible: !0 },
      { title: "Exch. Rate", value: "exchangeRate", visible: !0 },
      { title: "Amount (FCY)", value: "amountFcy", visible: !0 },
      { title: "Amount (BCY)", value: "amountBcy", visible: !0 },
      { title: "Amount Paid", value: "amountPaid", visible: !0 },
      { title: "Return Amount", value: "returnAmount", visible: !0 },
      { title: "Amount Due", value: "amountDue", visible: !0 },
      { title: "Taxable Value", value: "taxableValue", visible: !0 },
      { title: "GST Amount", value: "gstAmount", visible: !0 },
      { title: "GST Type", value: "gstType", visible: !0 },
      { title: "Place of Supply", value: "placeOfSupply", visible: !0 },
      { title: "Payment Status", value: "status", visible: !0 },
      { title: "Created By", value: "createdBy", visible: !0 },
      { title: "Actions", value: "actions", visible: !0 }
    ]), W = o(!1), te = o([]);
    async function ye() {
      try {
        const s = [
          {
            invoiceNumber: "INV-1000",
            customerName: "Synergy LLC",
            invoiceDate: "Jun 9, 2025",
            dueDate: "Jul 9, 2025",
            currency: "USD",
            exchangeRate: "83.50",
            amountFcy: "$400.00",
            amountBcy: "₹33,400.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹33,400.00",
            taxableValue: "₹30,000.00",
            gstAmount: "₹3,400.00",
            gstType: "UTGST",
            placeOfSupply: "Tamil Nadu",
            status: "Overdue",
            createdBy: "John Doe"
          },
          {
            invoiceNumber: "INV-1001",
            customerName: "Starlight Co.",
            invoiceDate: "Jul 14, 2025",
            dueDate: "Aug 13, 2025",
            currency: "EUR",
            exchangeRate: "90.75",
            amountFcy: "€4,450.00",
            amountBcy: "₹4,03,837.50",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹4,03,837.50",
            taxableValue: "₹3,63,450.00",
            gstAmount: "₹40,387.50",
            gstType: "UTGST",
            placeOfSupply: "Maharashtra",
            status: "Overdue",
            createdBy: "John Doe"
          },
          {
            invoiceNumber: "INV-1002",
            customerName: "Quantum Tech",
            invoiceDate: "Jun 20, 2025",
            dueDate: "Jul 20, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹4,800.00",
            amountBcy: "₹4,800.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹4,800.00",
            taxableValue: "₹4,320.00",
            gstAmount: "₹480.00",
            gstType: "CGST&SGST",
            placeOfSupply: "Uttar Pradesh",
            status: "Paid",
            createdBy: "Jane Smith"
          },
          {
            invoiceNumber: "INV-1003",
            customerName: "Innovative Inc.",
            invoiceDate: "May 15, 2025",
            dueDate: "Jun 14, 2025",
            currency: "USD",
            exchangeRate: "82.90",
            amountFcy: "$750.00",
            amountBcy: "₹62,175.00",
            amountPaid: "₹30,000.00",
            returnAmount: "-",
            amountDue: "₹32,175.00",
            taxableValue: "₹55,500.00",
            gstAmount: "₹6,675.00",
            gstType: "IGST",
            placeOfSupply: "Karnataka",
            status: "Outstanding",
            createdBy: "Alice Brown"
          },
          {
            invoiceNumber: "INV-1004",
            customerName: "Solution Corp.",
            invoiceDate: "Jul 1, 2025",
            dueDate: "Jul 31, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹12,500.00",
            amountBcy: "₹12,500.00",
            amountPaid: "₹12,500.00",
            returnAmount: "-",
            amountDue: "₹0.00",
            taxableValue: "₹11,250.00",
            gstAmount: "₹1,250.00",
            gstType: "CGST&SGST",
            placeOfSupply: "Delhi",
            status: "Paid",
            createdBy: "John Doe"
          },
          {
            invoiceNumber: "INV-1005",
            customerName: "Tech Innovators",
            invoiceDate: "Jun 25, 2025",
            dueDate: "Jul 25, 2025",
            currency: "EUR",
            exchangeRate: "91.20",
            amountFcy: "€2,000.00",
            amountBcy: "₹1,82,400.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹1,82,400.00",
            taxableValue: "₹1, 64, 160.00",
            gstAmount: "₹18,240.00",
            gstType: "UTGST",
            placeOfSupply: "Gujarat",
            status: "Overdue",
            createdBy: "Jane Smith"
          },
          {
            invoiceNumber: "INV-1006",
            customerName: "Global Solutions",
            invoiceDate: "Jul 5, 2025",
            dueDate: "Aug 4, 2025",
            currency: "USD",
            exchangeRate: "83.10",
            amountFcy: "$1,200.00",
            amountBcy: "₹99,720.00",
            amountPaid: "₹50,000.00",
            returnAmount: "-",
            amountDue: "₹49,720.00",
            taxableValue: "₹89,750.00",
            gstAmount: "₹9,970.00",
            gstType: "IGST",
            placeOfSupply: "Rajasthan",
            status: "Outstanding",
            createdBy: "Alice Brown"
          },
          {
            invoiceNumber: "INV-1007",
            customerName: "Bright Future Ltd.",
            invoiceDate: "Jun 10, 2025",
            dueDate: "Jul 10, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹8,000.00",
            amountBcy: "₹8,000.00",
            amountPaid: "₹8,000.00",
            returnAmount: "-",
            amountDue: "₹0.00",
            taxableValue: "₹7,200.00",
            gstAmount: "₹800.00",
            gstType: "CGST&SGST",
            placeOfSupply: "Punjab",
            status: "Paid",
            createdBy: "John Doe"
          },
          {
            invoiceNumber: "INV-1008",
            customerName: "Synergy LLC",
            invoiceDate: "Jul 8, 2025",
            dueDate: "Aug 7, 2025",
            currency: "USD",
            exchangeRate: "83.75",
            amountFcy: "$900.00",
            amountBcy: "₹75,375.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹75,375.00",
            taxableValue: "₹67,837.50",
            gstAmount: "₹7,537.50",
            gstType: "UTGST",
            placeOfSupply: "Tamil Nadu",
            status: "Overdue",
            createdBy: "Jane Smith"
          },
          {
            invoiceNumber: "INV-1009",
            customerName: "Starlight Co.",
            invoiceDate: "Jun 30, 2025",
            dueDate: "Jul 30, 2025",
            currency: "EUR",
            exchangeRate: "90.50",
            amountFcy: "€3,000.00",
            amountBcy: "₹2,71,500.00",
            amountPaid: "₹1,00,000.00",
            returnAmount: "-",
            amountDue: "₹1,71,500.00",
            taxableValue: "₹2,44,350.00",
            gstAmount: "₹27,150.00",
            gstType: "IGST",
            placeOfSupply: "Maharashtra",
            status: "Outstanding",
            createdBy: "Alice Brown"
          },
          {
            invoiceNumber: "INV-1010",
            customerName: "Quantum Tech",
            invoiceDate: "Jul 12, 2025",
            dueDate: "Aug 11, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹15,000.00",
            amountBcy: "₹15,000.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹15,000.00",
            taxableValue: "₹13,500.00",
            gstAmount: "₹1,500.00",
            gstType: "CGST&SGST",
            placeOfSupply: "Kerala",
            status: "Overdue",
            createdBy: "John Doe"
          },
          {
            invoiceNumber: "INV-1011",
            customerName: "Innovative Inc.",
            invoiceDate: "Jun 15, 2025",
            dueDate: "Jul 15, 2025",
            currency: "USD",
            exchangeRate: "83.20",
            amountFcy: "$600.00",
            amountBcy: "₹49,920.00",
            amountPaid: "₹49,920.00",
            returnAmount: "-",
            amountDue: "₹0.00",
            taxableValue: "₹44,928.00",
            gstAmount: "₹4,992.00",
            gstType: "IGST",
            placeOfSupply: "Karnataka",
            status: "Paid",
            createdBy: "Jane Smith"
          },
          {
            invoiceNumber: "INV-1012",
            customerName: "Solution Corp.",
            invoiceDate: "Jul 3, 2025",
            dueDate: "Aug 2, 2025",
            currency: "EUR",
            exchangeRate: "91.00",
            amountFcy: "€1,500.00",
            amountBcy: "₹1,36,500.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹1,36,500.00",
            taxableValue: "₹1,22,850.00",
            gstAmount: "₹13,650.00",
            gstType: "UTGST",
            placeOfSupply: "Delhi",
            status: "Overdue",
            createdBy: "Alice Brown"
          },
          {
            invoiceNumber: "INV-1013",
            customerName: "Tech Innovators",
            invoiceDate: "Jun 28, 2025",
            dueDate: "Jul 28, 2025",
            currency: "INR",
            exchangeRate: "1.00",
            amountFcy: "₹10,000.00",
            amountBcy: "₹10,000.00",
            amountPaid: "₹5,000.00",
            returnAmount: "-",
            amountDue: "₹5,000.00",
            taxableValue: "₹9,000.00",
            gstAmount: "₹1,000.00",
            gstType: "CGST&SGST",
            placeOfSupply: "Gujarat",
            status: "Outstanding",
            createdBy: "John Doe"
          },
          {
            invoiceNumber: "INV-1014",
            customerName: "Global Solutions",
            invoiceDate: "Jul 10, 2025",
            dueDate: "Aug 9, 2025",
            currency: "USD",
            exchangeRate: "83.60",
            amountFcy: "$1,000.00",
            amountBcy: "₹83,600.00",
            amountPaid: "₹0.00",
            returnAmount: "-",
            amountDue: "₹83,600.00",
            taxableValue: "₹75,240.00",
            gstAmount: "₹8,360.00",
            gstType: "IGST",
            placeOfSupply: "Rajasthan",
            status: "Overdue",
            createdBy: "Jane Smith"
          }
        ];
        te.value = s;
      } catch (s) {
        console.error("Error fetching invoice data:", s);
      }
    }
    const ge = o([
      { title: "Payment Status", checked: !0 },
      { title: "Currency", checked: !1 },
      { title: "GST Type", checked: !1 },
      { title: "Place of Supply", checked: !1 },
      { title: "Created By", checked: !1 },
      { title: "Invoice Date From", checked: !1 },
      { title: "Invoice Date To", checked: !1 },
      { title: "Due Date From", checked: !1 },
      { title: "Due Date To", checked: !1 }
    ]), xe = o([
      { title: "Paid", value: "Paid" },
      { title: "Overdue", value: "Overdue" },
      { title: "Outstanding", value: "Outstanding" }
    ]), ke = o([
      { title: "INR", value: "INR" },
      { title: "USD", value: "USD" },
      { title: "EUR", value: "EUR" }
    ]), Se = o([
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
    ]), v = o("item"), Te = o([
      { title: "Item", value: "item", minWidth: "250px" },
      { title: "Qty", value: "quantity", minWidth: "70px" },
      { title: "Unit", value: "unit", minWidth: "70px" },
      { title: "Rate", value: "rate", minWidth: "70px" },
      { title: "Discount(%)", value: "discount", minWidth: "70px" },
      { title: "Taxable Amt.", value: "taxableAmount", minWidth: "" },
      { title: "GST(%)", value: "gst", minWidth: "" },
      { title: "Total", value: "total", minWidth: "" },
      { title: "", value: "actions", minWidth: "" }
    ]), Ie = o(["0%", "5%", "12%", "18%", "28%"]), Ne = o([
      { title: "Service", value: "item", minWidth: "250px" },
      { title: "Amount", value: "rate", minWidth: "100px" },
      { title: "Discount(%)", value: "discount", minWidth: "100px" },
      { title: "Taxable Amt.", value: "taxableAmount" },
      { title: "GST(%)", value: "gst" },
      { title: "Total", value: "total" },
      { title: "", value: "actions" }
    ]), le = o([]);
    async function he() {
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
        le.value = s;
      } catch (s) {
        console.error("Error fetching states data:", s);
      }
    }
    const De = o([
      { title: "Credit", value: "credit" },
      { title: "Debit", value: "debit" }
    ]), ne = o("credit");
    function H(s = !1) {
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
    const _ = o([H()]), b = o([H(!0)]);
    function Ve(s) {
      const e = s === "service" ? b : _;
      e.value.push({ ...H(s === "service"), lockedRate: e.value.length > 0 }), e.value.forEach((x, I) => x.lockedRate = I !== 0);
    }
    function Ce(s, e) {
      const x = e === "service" ? b : _;
      x.value.length > 1 && (x.value.splice(s, 1), x.value.forEach((I, D) => I.lockedRate = D !== 0));
    }
    function ie(s) {
      X(() => {
        s.value.forEach((e) => {
          const x = parseFloat(e.quantity) || 1, I = parseFloat(e.rate) || 0, D = parseFloat(e.discount) || 0, j = (e.quantity !== void 0 ? x : 1) * I, K = j * (D / 100), J = j - K, L = parseFloat(e.gst) || 0, q = J * (L / 100), Q = J + q;
          e.taxableAmnt = J.toFixed(2), e.total = Q.toFixed(2);
        });
      });
    }
    ie(_), ie(b);
    const se = o(0);
    Ge(() => {
      ye(), he(), _.value[0].lockedRate = !1, b.value[0].lockedRate = !1, setInterval(() => {
        se.value++;
      }, 3e3);
    });
    const ue = o([
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
    ]), p = (s) => {
      var e;
      return (e = ue.value.find((x) => x.key === s)) == null ? void 0 : e.visible;
    }, Y = o([
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
    ]), A = o(!1), Ae = () => {
      A.value = !A.value;
    }, B = o(null), oe = o(""), ce = o(""), G = o("INR"), de = o(""), re = o(/* @__PURE__ */ new Date());
    o("");
    const M = o(""), me = o(!0), Be = Z(() => {
      if (!B.value) return "";
      const s = Y.value.find((e) => e.value === B.value);
      return s ? `GSTIN: ${s.data.gstin}
Billing Address: ${s.data.address}, ${s.data.state}, ${s.data.pincode}
Currency: ${G.value}` : "";
    });
    X(() => {
      if (B.value) {
        const s = Y.value.find((e) => e.value === B.value);
        s && (oe.value = s.data.gstin, ce.value = `${s.data.address}, ${s.data.state}, ${s.data.pincode}`, G.value = s.data.currency || "INR", M.value = s.data.state);
      } else
        oe.value = "", ce.value = "", G.value = "INR", M.value = "";
    });
    const O = o(!1), w = o("Numbering"), we = ["Numbering", "Columns", "Fields", "Mode"], P = o("Text"), R = o(""), $ = o(1), Pe = Z(() => {
      const s = /* @__PURE__ */ new Date(), e = s.getFullYear(), x = s.getMonth() >= 3 ? e + 1 : e;
      return `${x - 1}-${x.toString().slice(-2)}`;
    });
    X(() => {
      P.value === "Financial Year" ? R.value = Pe.value : R.value = "";
    });
    const Re = Z(() => !R.value || !$.value ? "" : `${R.value}/${$.value}`);
    return (s, e) => {
      const x = N("IconSettings"), I = N("IconX"), D = N("IconCirclePlus"), j = N("IconCalendar"), K = N("v-date-input"), J = N("IconTrash"), L = N("IconDeviceFloppy"), q = N("IconSend"), Q = Ue, Fe = N("IconCheck");
      return u(), F("div", Ee, [
        a($e, null, {
          default: t(() => [
            W.value ? (u(), d(g, {
              key: 0,
              class: "mb-3"
            }, {
              default: t(() => [
                a(n, { cols: "12" }, {
                  default: t(() => [
                    a(f, {
                      class: "account_vcard_border",
                      title: "New Invoice",
                      subtitle: "Fill out the details below to create a new sales invoice."
                    }, {
                      append: t(() => [
                        l("div", We, [
                          a(y, {
                            onClick: e[0] || (e[0] = (i) => O.value = !0),
                            variant: "text",
                            size: "x-small",
                            rounded: ""
                          }, {
                            default: t(() => [
                              a(x, { size: "20" })
                            ]),
                            _: 1
                          }),
                          a(y, {
                            onClick: e[1] || (e[1] = (i) => W.value = !1),
                            variant: "text",
                            size: "x-small",
                            rounded: "",
                            class: "account_vcard_close_btn"
                          }, {
                            default: t(() => [
                              a(I, { size: "20" })
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      default: t(() => [
                        a(h, null, {
                          default: t(() => [
                            a(g, null, {
                              default: t(() => [
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    e[21] || (e[21] = l("label", { class: "account_label mb-2" }, "Bill To", -1)),
                                    a(pe, {
                                      modelValue: B.value,
                                      "onUpdate:modelValue": e[3] || (e[3] = (i) => B.value = i),
                                      placeholder: "Select a customer",
                                      class: "accouting_field accouting_active_field",
                                      items: Y.value,
                                      variant: "outlined"
                                    }, {
                                      append: t(() => [
                                        a(y, {
                                          class: "account_v_btn_outlined",
                                          onClick: e[2] || (e[2] = (i) => A.value = !0),
                                          rounded: "1",
                                          size: "default"
                                        }, {
                                          default: t(() => [
                                            a(D, { size: "20" })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "items"])
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
                                          md: "6"
                                        }, {
                                          default: t(() => [
                                            e[22] || (e[22] = l("label", { class: "account_label mb-2" }, "Invoice Number", -1)),
                                            a(r, {
                                              modelValue: de.value,
                                              "onUpdate:modelValue": e[4] || (e[4] = (i) => de.value = i),
                                              class: "accouting_field accouting_active_field",
                                              variant: "outlined",
                                              density: "compact"
                                            }, null, 8, ["modelValue"])
                                          ]),
                                          _: 1,
                                          __: [22]
                                        }),
                                        a(n, {
                                          cols: "12",
                                          lg: "6",
                                          md: "6"
                                        }, {
                                          default: t(() => [
                                            e[23] || (e[23] = l("label", { class: "account_label mb-2" }, "Invoice Date", -1)),
                                            a(K, {
                                              class: "accounting_date_input",
                                              "cancel-text": "Close",
                                              "ok-text": "Apply",
                                              modelValue: re.value,
                                              "onUpdate:modelValue": e[5] || (e[5] = (i) => re.value = i)
                                            }, {
                                              "prepend-inner": t(() => [
                                                a(j, { size: "20" })
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
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    a(E, {
                                      value: Be.value,
                                      class: "accounting_v_textarea",
                                      variant: "outlined",
                                      readonly: "",
                                      density: "compact"
                                    }, null, 8, ["value"])
                                  ]),
                                  _: 1
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
                                            e[24] || (e[24] = l("label", { class: "account_label mb-2" }, "Currency", -1)),
                                            a(r, {
                                              modelValue: G.value,
                                              "onUpdate:modelValue": e[6] || (e[6] = (i) => G.value = i),
                                              class: "accouting_field accouting_active_field",
                                              variant: "outlined",
                                              density: "compact"
                                            }, null, 8, ["modelValue"])
                                          ]),
                                          _: 1,
                                          __: [24]
                                        }),
                                        a(n, {
                                          cols: "12",
                                          lg: "6",
                                          md: "6",
                                          sm: "12"
                                        }, {
                                          default: t(() => [
                                            e[25] || (e[25] = l("label", { class: "account_label mb-2" }, "Place of Supply", -1)),
                                            a(pe, {
                                              modelValue: M.value,
                                              "onUpdate:modelValue": e[7] || (e[7] = (i) => M.value = i),
                                              class: "accouting_field accouting_active_field",
                                              variant: "outlined",
                                              items: le.value
                                            }, null, 8, ["modelValue", "items"])
                                          ]),
                                          _: 1,
                                          __: [25]
                                        }),
                                        a(n, {
                                          cols: "12",
                                          lg: "12",
                                          md: "12"
                                        }, {
                                          default: t(() => [
                                            a(ee, {
                                              modelValue: me.value,
                                              "onUpdate:modelValue": e[8] || (e[8] = (i) => me.value = i),
                                              density: "compact",
                                              class: "account_v_checkbox",
                                              label: "Shipping address is the same as billing address"
                                            }, null, 8, ["modelValue"])
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
                            a(k, { class: "my-3" }),
                            a(g, null, {
                              default: t(() => [
                                a(n, {
                                  cols: "12",
                                  lg: "12",
                                  md: "12"
                                }, {
                                  default: t(() => [
                                    l("div", He, [
                                      a(y, {
                                        class: V(v.value === "item" ? "account_v_btn_primary" : "account_v_btn_outlined"),
                                        onClick: e[9] || (e[9] = (i) => v.value = "item")
                                      }, {
                                        default: t(() => e[26] || (e[26] = [
                                          T(" Item Invoice ", -1)
                                        ])),
                                        _: 1,
                                        __: [26]
                                      }, 8, ["class"]),
                                      a(y, {
                                        class: V(v.value === "service" ? "account_v_btn_primary" : "account_v_btn_outlined"),
                                        onClick: e[10] || (e[10] = (i) => v.value = "service")
                                      }, {
                                        default: t(() => e[27] || (e[27] = [
                                          T(" Service Invoice ", -1)
                                        ])),
                                        _: 1,
                                        __: [27]
                                      }, 8, ["class"])
                                    ]),
                                    a(Le, {
                                      headers: v.value === "item" ? Te.value : Ne.value,
                                      items: v.value === "item" ? _.value : b.value,
                                      class: "account_dynamic_table account_invoice_table"
                                    }, Oe({
                                      "item.item": t(({ item: i, index: m }) => [
                                        a(r, {
                                          modelValue: (v.value === "item" ? _.value : b.value)[m].item,
                                          "onUpdate:modelValue": (S) => (v.value === "item" ? _.value : b.value)[m].item = S,
                                          placeholder: "Item/Service description",
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      "item.rate": t(({ item: i, index: m }) => [
                                        a(r, {
                                          modelValue: (v.value === "item" ? _.value : b.value)[m].rate,
                                          "onUpdate:modelValue": (S) => (v.value === "item" ? _.value : b.value)[m].rate = S,
                                          readonly: (v.value === "item" ? _.value : b.value)[m].lockedRate,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          placeholder: "0",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly"])
                                      ]),
                                      "item.discount": t(({ item: i, index: m }) => [
                                        a(r, {
                                          modelValue: (v.value === "item" ? _.value : b.value)[m].discount,
                                          "onUpdate:modelValue": (S) => (v.value === "item" ? _.value : b.value)[m].discount = S,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          placeholder: "0",
                                          density: "compact"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      "item.taxableAmount": t(({ item: i, index: m }) => [
                                        l("p", Ye, "₹" + z((v.value === "item" ? _.value : b.value)[m].taxableAmnt), 1)
                                      ]),
                                      "item.gst": t(({ item: i, index: m }) => [
                                        a(U, {
                                          modelValue: (v.value === "item" ? _.value : b.value)[m].gst,
                                          "onUpdate:modelValue": (S) => (v.value === "item" ? _.value : b.value)[m].gst = S,
                                          class: "accouting_field accouting_active_field",
                                          variant: "outlined",
                                          items: Ie.value
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"])
                                      ]),
                                      "item.total": t(({ item: i, index: m }) => [
                                        l("p", Ke, "₹" + z((v.value === "item" ? _.value : b.value)[m].total), 1)
                                      ]),
                                      "item.actions": t(({ index: i }) => [
                                        a(J, {
                                          class: V(["cursor-pointer table_row_icon", {
                                            "opacity-50": (v.value === "item" ? _.value : b.value).length === 1,
                                            "cursor-not-allowed": (v.value === "item" ? _.value : b.value).length === 1
                                          }]),
                                          disabled: (v.value === "item" ? _.value : b.value).length === 1,
                                          onClick: (m) => Ce(i, v.value),
                                          size: "20"
                                        }, null, 8, ["class", "disabled", "onClick"])
                                      ]),
                                      _: 2
                                    }, [
                                      v.value === "item" ? {
                                        name: "item.quantity",
                                        fn: t(({ item: i, index: m }) => [
                                          a(r, {
                                            modelValue: _.value[m].quantity,
                                            "onUpdate:modelValue": (S) => _.value[m].quantity = S,
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            placeholder: "0",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        key: "0"
                                      } : void 0,
                                      v.value === "item" ? {
                                        name: "item.unit",
                                        fn: t(({ item: i, index: m }) => [
                                          a(r, {
                                            modelValue: _.value[m].unit,
                                            "onUpdate:modelValue": (S) => _.value[m].unit = S,
                                            class: "accouting_field accouting_active_field",
                                            suffix: "pcs",
                                            variant: "outlined",
                                            placeholder: "0",
                                            density: "compact"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        key: "1"
                                      } : void 0
                                    ]), 1032, ["headers", "items"])
                                  ]),
                                  _: 1
                                }),
                                a(n, { cols: "12" }, {
                                  default: t(() => [
                                    a(y, {
                                      class: "account_v_btn_outlined mt-3",
                                      variant: "text",
                                      onClick: e[11] || (e[11] = (i) => Ve(v.value))
                                    }, {
                                      prepend: t(() => [
                                        a(D, {
                                          size: "20",
                                          style: { "margin-right": "6px" }
                                        })
                                      ]),
                                      default: t(() => [
                                        e[28] || (e[28] = T(" Add Another Line ", -1))
                                      ]),
                                      _: 1,
                                      __: [28]
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            a(k, { class: "my-3" }),
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
                                        a(n, { cols: "6" }, {
                                          default: t(() => [
                                            a(f, { class: "account_vcard_border shadow-none w-100" }, {
                                              default: t(() => e[29] || (e[29] = [
                                                l("div", { class: "pa-3" }, [
                                                  l("h6", { class: "account_gst_title mb-0" }, "GST Breakdown"),
                                                  l("div", { class: "d-flex align-center justify-space-between py-2" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "CGST"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "₹0.00")
                                                  ]),
                                                  l("div", { class: "d-flex align-center justify-space-between pb-2" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "SGST"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "₹0.00")
                                                  ]),
                                                  l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "IGST"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "₹0.00")
                                                  ])
                                                ], -1)
                                              ])),
                                              _: 1,
                                              __: [29]
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        a(n, { cols: "6" }, {
                                          default: t(() => [
                                            a(f, { class: "account_vcard_border shadow-none w-100" }, {
                                              default: t(() => [
                                                l("div", qe, [
                                                  e[31] || (e[31] = l("h6", { class: "account_gst_title mb-0" }, "Totals", -1)),
                                                  e[32] || (e[32] = l("div", { class: "d-flex align-center justify-space-between py-2" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "Subtotal"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "₹50.00")
                                                  ], -1)),
                                                  e[33] || (e[33] = l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "Total Discount"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "- ₹0.00")
                                                  ], -1)),
                                                  a(k, { class: "my-2" }),
                                                  e[34] || (e[34] = l("div", { class: "d-flex align-center justify-space-between mb-2" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "Taxable Value"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "₹50.00")
                                                  ], -1)),
                                                  e[35] || (e[35] = l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("span", { class: "account_gst_subtitle" }, "GST (18%)"),
                                                    l("span", { class: "account_gst_subtitle_val" }, "₹9.00")
                                                  ], -1)),
                                                  l("div", Qe, [
                                                    l("div", Ze, [
                                                      e[30] || (e[30] = l("span", { class: "account_gst_subtitle" }, "Round Off", -1)),
                                                      a(C, {
                                                        density: "compact",
                                                        inset: "",
                                                        class: "account_swtich_btn",
                                                        color: "primary",
                                                        "hide-details": ""
                                                      })
                                                    ]),
                                                    a(r, {
                                                      style: { "max-width": "100px" },
                                                      class: "accouting_field accouting_active_field",
                                                      type: "number",
                                                      variant: "outlined",
                                                      placeholder: "0.00",
                                                      density: "compact"
                                                    })
                                                  ]),
                                                  a(k, { class: "my-2" }),
                                                  e[36] || (e[36] = l("div", { class: "d-flex align-center justify-space-between" }, [
                                                    l("h6", { class: "account_gst_title mb-0" }, "Grand Total"),
                                                    l("h6", { class: "account_gst_title mb-0" }, "₹59.00")
                                                  ], -1)),
                                                  e[37] || (e[37] = l("div", { class: "d-flex mt-1 justify-end" }, [
                                                    l("small", { class: "base_currency_label" }, "Base Currency (INR) ₹59.00")
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
                            a(k),
                            a(g, null, {
                              default: t(() => [
                                a(n, { cols: "12" }, {
                                  default: t(() => e[38] || (e[38] = [
                                    l("h6", { class: "account_gst_title mb-0" }, "Receive Payment", -1)
                                  ])),
                                  _: 1,
                                  __: [38]
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    l("div", Xe, [
                                      e[39] || (e[39] = l("label", { class: "account_label mb-2" }, "Amount Received", -1)),
                                      a(r, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        density: "compact",
                                        type: "number"
                                      })
                                    ]),
                                    l("div", null, [
                                      e[40] || (e[40] = l("label", { class: "account_label mb-2" }, "Payment Mode", -1)),
                                      a(U, {
                                        class: "accouting_field accouting_active_field",
                                        variant: "outlined",
                                        placeholder: "Select mode",
                                        items: ["Cash", "HDFC Bank", "SBI Bank", "ICICI Bank", "Online/UPI"]
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }),
                                a(n, {
                                  cols: "12",
                                  lg: "6",
                                  md: "6"
                                }, {
                                  default: t(() => [
                                    a(f, { class: "account_vcard_border shadow-none pa-4" }, {
                                      default: t(() => e[41] || (e[41] = [
                                        l("div", { class: "" }, [
                                          l("h6", { class: "account_gst_title mb-1" }, "Balance Due"),
                                          l("h4", { class: "mb-0 account_invoice_balance_due mb-1" }, "₹236.00"),
                                          l("small", { class: "base_currency_label mb-2" }, "Base Currency (INR) ₹59.00")
                                        ], -1)
                                      ])),
                                      _: 1,
                                      __: [41]
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            a(k),
                            a(g, null, {
                              default: t(() => [
                                a(n, { cols: "12" }, {
                                  default: t(() => [
                                    e[44] || (e[44] = l("label", { class: "account_label mb-2" }, "Notes / Terms & Conditions", -1)),
                                    a(E, {
                                      class: "accounting_v_textarea",
                                      placeholder: "Thank you for your business. All payments are due within 30 days.",
                                      variant: "outlined"
                                    }),
                                    l("div", ea, [
                                      a(y, { class: "account_v_btn_primary" }, {
                                        prepend: t(() => [
                                          a(L, {
                                            size: "20",
                                            style: { "margin-right": "6px" }
                                          })
                                        ]),
                                        default: t(() => [
                                          e[42] || (e[42] = T(" Save as Default ", -1))
                                        ]),
                                        _: 1,
                                        __: [42]
                                      }),
                                      a(y, { class: "account_v_btn_outlined" }, {
                                        prepend: t(() => [
                                          a(q, {
                                            size: "20",
                                            style: { "margin-right": "6px" }
                                          })
                                        ]),
                                        default: t(() => [
                                          e[43] || (e[43] = T(" Save & Send Invoice ", -1))
                                        ]),
                                        _: 1,
                                        __: [43]
                                      })
                                    ])
                                  ]),
                                  _: 1,
                                  __: [44]
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
            })) : c("", !0)
          ]),
          _: 1
        }),
        l("div", aa, [
          a(Q, {
            title: "Invoices",
            headers: fe.value,
            items: te.value,
            filters: ge.value,
            "status-items": xe.value,
            "account-type-items": [],
            "currency-items": ke.value,
            widgets: Se.value,
            "item-value-key": "invoiceNumber"
          }, null, 8, ["headers", "items", "filters", "status-items", "currency-items", "widgets"])
        ]),
        a(be, {
          "max-width": "900",
          modelValue: A.value,
          "onUpdate:modelValue": e[13] || (e[13] = (i) => A.value = i)
        }, {
          default: t(() => [
            A.value ? (u(), F("div", ta, [
              a(f, {
                title: "Create a New Customer",
                class: "pa-2 account_vcard_border shadow-none",
                subtitle: "Fill in the details below to add a new customer to your records."
              }, {
                append: t(() => [
                  l("div", la, [
                    a(je, {
                      location: "start",
                      transition: "slide-y-transition",
                      "offset-y": "",
                      "close-on-content-click": !1
                    }, {
                      activator: t(({ props: i }) => [
                        a(y, Je(i, {
                          variant: "text",
                          size: "x-small",
                          rounded: ""
                        }), {
                          default: t(() => [
                            a(x, { size: "20" })
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: t(() => [
                        a(f, { class: "account_vcard_menu account_vcard_border" }, {
                          default: t(() => [
                            e[45] || (e[45] = l("div", { class: "account_vcard_menu_hdng" }, "Show/Hide Optional Fields", -1)),
                            a(k, { class: "my-1 mt-0" }),
                            l("div", na, [
                              (u(!0), F(ve, null, _e(ue.value, (i) => (u(), F("div", {
                                key: i.key,
                                class: "account_vcard_menu_item",
                                onClick: (m) => i.visible = !i.visible
                              }, [
                                l("div", sa, [
                                  i.visible ? (u(), d(Fe, {
                                    key: 0,
                                    size: "16"
                                  })) : c("", !0),
                                  l("span", {
                                    class: V(i.visible ? "" : "field_list_dynamic_ml")
                                  }, z(i.label), 3)
                                ])
                              ], 8, ia))), 128))
                            ])
                          ]),
                          _: 1,
                          __: [45]
                        })
                      ]),
                      _: 1
                    }),
                    a(y, {
                      onClick: Ae,
                      icon: "mdi-close",
                      variant: "text",
                      size: "x-small",
                      rounded: "",
                      class: "account_vcard_close_btn"
                    }, {
                      default: t(() => [
                        a(I, { size: "20" })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: t(() => [
                  a(h, { class: "add_customer_dialog" }, {
                    default: t(() => [
                      a(g, null, {
                        default: t(() => [
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[46] || (e[46] = l("h5", { class: "account_form_info_hdng" }, "Core Information", -1)),
                              a(k, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [46]
                          }),
                          p("name") ? (u(), d(n, {
                            key: 0,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[47] || (e[47] = l("label", { class: "account_label mb-2" }, "Name (Mandatory)", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Customer's Full Name or Company Name"
                              })
                            ]),
                            _: 1,
                            __: [47]
                          })) : c("", !0),
                          p("mobile") ? (u(), d(n, {
                            key: 1,
                            cols: "12",
                            lg: "5",
                            md: "5"
                          }, {
                            default: t(() => [
                              e[48] || (e[48] = l("label", { class: "account_label mb-2" }, "Mobile", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                type: "number",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "9876543210"
                              })
                            ]),
                            _: 1,
                            __: [48]
                          })) : c("", !0),
                          p("openingBalance") ? (u(), d(n, {
                            key: 2,
                            cols: "12",
                            lg: "7",
                            md: "7"
                          }, {
                            default: t(() => [
                              e[49] || (e[49] = l("label", { class: "account_label mb-2" }, "Opening Balance", -1)),
                              l("div", ua, [
                                a(r, {
                                  class: "custom_option_field accouting_field accouting_active_field",
                                  type: "number",
                                  variant: "outlined",
                                  density: "compact",
                                  placeholder: "0"
                                }),
                                a(U, {
                                  class: "custom_option_select accouting_field accouting_active_field",
                                  modelValue: ne.value,
                                  "onUpdate:modelValue": e[12] || (e[12] = (i) => ne.value = i),
                                  items: De.value,
                                  variant: "outlined",
                                  density: "comapct"
                                }, null, 8, ["modelValue", "items"])
                              ])
                            ]),
                            _: 1,
                            __: [49]
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[50] || (e[50] = l("h5", { class: "account_form_info_hdng" }, "Contact Details", -1)),
                              a(k, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [50]
                          }),
                          p("mailingName") ? (u(), d(n, {
                            key: 3,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[51] || (e[51] = l("label", { class: "account_label mb-2" }, "Mailing Name", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Name for correspondence"
                              })
                            ]),
                            _: 1,
                            __: [51]
                          })) : c("", !0),
                          p("email") ? (u(), d(n, {
                            key: 4,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[52] || (e[52] = l("label", { class: "account_label mb-2" }, "Email", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "customer@example.com"
                              })
                            ]),
                            _: 1,
                            __: [52]
                          })) : c("", !0),
                          p("address") ? (u(), d(n, {
                            key: 5,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[53] || (e[53] = l("label", { class: "account_label mb-2" }, "Address", -1)),
                              a(E, {
                                class: "accounting_v_textarea",
                                placeholder: "Full address",
                                variant: "outlined"
                              })
                            ]),
                            _: 1,
                            __: [53]
                          })) : c("", !0),
                          p("state") ? (u(), d(n, {
                            key: 6,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[54] || (e[54] = l("label", { class: "account_label mb-2" }, "State", -1)),
                              a(U, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                placeholder: "Select an item"
                              })
                            ]),
                            _: 1,
                            __: [54]
                          })) : c("", !0),
                          p("pincode") ? (u(), d(n, {
                            key: 7,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[55] || (e[55] = l("label", { class: "account_label mb-2" }, "Pincode", -1)),
                              a(U, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                placeholder: "e.g. 400001"
                              })
                            ]),
                            _: 1,
                            __: [55]
                          })) : c("", !0),
                          p("country") ? (u(), d(n, {
                            key: 8,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[56] || (e[56] = l("label", { class: "account_label mb-2" }, "Country", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "India"
                              })
                            ]),
                            _: 1,
                            __: [56]
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[57] || (e[57] = l("h5", { class: "account_form_info_hdng" }, "Tax & Compliance", -1)),
                              a(k, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [57]
                          }),
                          p("gstin") ? (u(), d(n, {
                            key: 9,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[58] || (e[58] = l("label", { class: "account_label mb-2" }, "GSTIN/UIN", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "15-digit GSTIN"
                              })
                            ]),
                            _: 1,
                            __: [58]
                          })) : c("", !0),
                          p("pan") ? (u(), d(n, {
                            key: 10,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[59] || (e[59] = l("label", { class: "account_label mb-2" }, "PAN", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "15-digit PAN"
                              })
                            ]),
                            _: 1,
                            __: [59]
                          })) : c("", !0),
                          p("taxReg") ? (u(), d(n, {
                            key: 11,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[60] || (e[60] = l("label", { class: "account_label mb-2" }, "Tax Registration Number", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "If applicable"
                              })
                            ]),
                            _: 1,
                            __: [60]
                          })) : c("", !0),
                          p("tds") ? (u(), d(n, {
                            key: 12,
                            class: "d-flex align-center",
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              a(ee, {
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
                              e[61] || (e[61] = l("h5", { class: "account_form_info_hdng" }, "Financial Controls", -1)),
                              a(k, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [61]
                          }),
                          p("creditLimit") ? (u(), d(n, {
                            key: 13,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[62] || (e[62] = l("label", { class: "account_label mb-2" }, "Credit Limit", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                type: "number",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "0"
                              })
                            ]),
                            _: 1,
                            __: [62]
                          })) : c("", !0),
                          p("creditPeriod") ? (u(), d(n, {
                            key: 14,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[63] || (e[63] = l("label", { class: "account_label mb-2" }, "Credit Period (Days)", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                type: "number",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "0"
                              })
                            ]),
                            _: 1,
                            __: [63]
                          })) : c("", !0),
                          p("billWise") ? (u(), d(n, {
                            key: 15,
                            class: "d-flex align-center",
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              a(ee, {
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
                              e[64] || (e[64] = l("h5", { class: "account_form_info_hdng" }, "Banking Details", -1)),
                              a(k, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [64]
                          }),
                          p("bankName") ? (u(), d(n, {
                            key: 16,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[65] || (e[65] = l("label", { class: "account_label mb-2" }, "Bank Name", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "e.g. HDFC Bank"
                              })
                            ]),
                            _: 1,
                            __: [65]
                          })) : c("", !0),
                          p("accountNumber") ? (u(), d(n, {
                            key: 17,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[66] || (e[66] = l("label", { class: "account_label mb-2" }, "Account Number", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "Bank Account Number"
                              })
                            ]),
                            _: 1,
                            __: [66]
                          })) : c("", !0),
                          p("ifscCode") ? (u(), d(n, {
                            key: 18,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[67] || (e[67] = l("label", { class: "account_label mb-2" }, "IFSC Code", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "e.g. HDFC0000001"
                              })
                            ]),
                            _: 1,
                            __: [67]
                          })) : c("", !0),
                          a(n, {
                            cols: "12",
                            class: "pb-0"
                          }, {
                            default: t(() => [
                              e[68] || (e[68] = l("h5", { class: "account_form_info_hdng" }, "Additional Fields", -1)),
                              a(k, { class: "mb-2 mt-1" })
                            ]),
                            _: 1,
                            __: [68]
                          }),
                          p("addCountry1") ? (u(), d(n, {
                            key: 19,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[69] || (e[69] = l("label", { class: "account_label mb-2" }, "Country", -1)),
                              a(r, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "India"
                              })
                            ]),
                            _: 1,
                            __: [69]
                          })) : c("", !0),
                          p("state") ? (u(), d(n, {
                            key: 20,
                            cols: "12",
                            lg: "6",
                            md: "6"
                          }, {
                            default: t(() => [
                              e[70] || (e[70] = l("label", { class: "account_label mb-2" }, "Place of Supply", -1)),
                              a(U, {
                                class: "accouting_field accouting_active_field",
                                variant: "outlined",
                                density: "compact",
                                placeholder: "State"
                              })
                            ]),
                            _: 1,
                            __: [70]
                          })) : c("", !0),
                          p("shipToAddress") ? (u(), d(n, {
                            key: 21,
                            cols: "12",
                            lg: "12",
                            md: "12"
                          }, {
                            default: t(() => [
                              e[72] || (e[72] = l("label", { class: "account_label mb-2" }, "Ship-to Address", -1)),
                              a(E, {
                                class: "accounting_v_textarea",
                                placeholder: "Optional delivery address",
                                variant: "outlined"
                              }),
                              l("div", oa, [
                                a(y, { class: "account_v_btn_primary" }, {
                                  prepend: t(() => [
                                    a(L, { size: "20" })
                                  ]),
                                  default: t(() => [
                                    e[71] || (e[71] = T(" Save Customer ", -1))
                                  ]),
                                  _: 1,
                                  __: [71]
                                })
                              ])
                            ]),
                            _: 1,
                            __: [72]
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
        a(be, {
          "max-width": "600",
          modelValue: O.value,
          "onUpdate:modelValue": e[19] || (e[19] = (i) => O.value = i)
        }, {
          default: t(() => [
            O.value ? (u(), F("div", ca, [
              a(f, {
                title: "Invoice Settings",
                class: "pa-2 account_vcard_border shadow-none",
                subtitle: "Customize your invoice creation experience."
              }, {
                append: t(() => [
                  a(y, {
                    onClick: e[14] || (e[14] = (i) => O.value = !1),
                    icon: "mdi-close",
                    variant: "text",
                    size: "x-small",
                    rounded: "",
                    class: "account_vcard_close_btn"
                  })
                ]),
                default: t(() => [
                  a(h, null, {
                    default: t(() => [
                      a(g, { class: "acc_invoice_settings_row mx-1" }, {
                        default: t(() => [
                          (u(), F(ve, null, _e(we, (i) => a(n, {
                            class: "pa-1",
                            cols: "3",
                            key: i
                          }, {
                            default: t(() => [
                              a(y, {
                                size: "small",
                                class: V(["w-100", w.value === i ? "account_v_btn_light" : "account_v_btn_ghost"]),
                                variant: "text",
                                onClick: (m) => w.value = i
                              }, {
                                default: t(() => [
                                  T(z(i), 1)
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
                              w.value === "Numbering" ? (u(), d(f, {
                                key: 0,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[80] || (e[80] = l("h6", { class: "mb-4" }, "Invoice Numbering", -1)),
                                  a(g, null, {
                                    default: t(() => [
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(f, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(h, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", da, [
                                                    e[73] || (e[73] = l("p", { class: "mb-0" }, "Change Every FY", -1)),
                                                    a(C, {
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
                                          e[76] || (e[76] = l("label", { class: "account_label mb-2" }, "Prefix Mode", -1)),
                                          a(g, null, {
                                            default: t(() => [
                                              a(n, { cols: "6" }, {
                                                default: t(() => [
                                                  a(y, {
                                                    class: V(["w-100 account_v_btn_outlined", P.value === "Text" ? "active_border" : ""]),
                                                    size: "large",
                                                    onClick: e[15] || (e[15] = (i) => P.value = "Text")
                                                  }, {
                                                    default: t(() => e[74] || (e[74] = [
                                                      T(" Text ", -1)
                                                    ])),
                                                    _: 1,
                                                    __: [74]
                                                  }, 8, ["class"])
                                                ]),
                                                _: 1
                                              }),
                                              a(n, { cols: "6" }, {
                                                default: t(() => [
                                                  a(y, {
                                                    class: V(["w-100 account_v_btn_outlined", P.value === "Financial Year" ? "active_border" : ""]),
                                                    size: "large",
                                                    onClick: e[16] || (e[16] = (i) => P.value = "Financial Year")
                                                  }, {
                                                    default: t(() => e[75] || (e[75] = [
                                                      T(" Financial Year ", -1)
                                                    ])),
                                                    _: 1,
                                                    __: [75]
                                                  }, 8, ["class"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1,
                                        __: [76]
                                      }),
                                      a(n, {
                                        cols: "12",
                                        lg: "8",
                                        md: "8"
                                      }, {
                                        default: t(() => [
                                          e[77] || (e[77] = l("label", { class: "account_label mb-2" }, "Prefix Type", -1)),
                                          a(r, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            modelValue: R.value,
                                            "onUpdate:modelValue": e[17] || (e[17] = (i) => R.value = i),
                                            readonly: P.value === "Financial Year"
                                          }, null, 8, ["modelValue", "readonly"])
                                        ]),
                                        _: 1,
                                        __: [77]
                                      }),
                                      a(n, {
                                        cols: "12",
                                        lg: "4",
                                        md: "4"
                                      }, {
                                        default: t(() => [
                                          e[78] || (e[78] = l("label", { class: "account_label mb-2" }, "Starting Number", -1)),
                                          a(r, {
                                            class: "accouting_field accouting_active_field",
                                            type: "number",
                                            variant: "outlined",
                                            density: "compact",
                                            modelValue: $.value,
                                            "onUpdate:modelValue": e[18] || (e[18] = (i) => $.value = i)
                                          }, null, 8, ["modelValue"])
                                        ]),
                                        _: 1,
                                        __: [78]
                                      }),
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          e[79] || (e[79] = l("label", { class: "account_label mb-2" }, "Preview", -1)),
                                          a(r, {
                                            class: "accouting_field accouting_active_field",
                                            variant: "outlined",
                                            density: "compact",
                                            readonly: "",
                                            "model-value": Re.value
                                          }, null, 8, ["model-value"])
                                        ]),
                                        _: 1,
                                        __: [79]
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1,
                                __: [80]
                              })) : c("", !0),
                              w.value === "Columns" ? (u(), d(f, {
                                key: 1,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[84] || (e[84] = l("h6", { class: "mb-4" }, "Column Visibility", -1)),
                                  a(g, null, {
                                    default: t(() => [
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(f, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(h, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", ra, [
                                                    e[81] || (e[81] = l("p", { class: "mb-0" }, "Unit", -1)),
                                                    a(C, {
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
                                          a(f, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(h, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", ma, [
                                                    e[82] || (e[82] = l("p", { class: "mb-0" }, "HSN/SAC Code", -1)),
                                                    a(C, {
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
                                          a(f, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(h, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", va, [
                                                    e[83] || (e[83] = l("p", { class: "mb-0" }, "Discount (%)", -1)),
                                                    a(C, {
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
                                __: [84]
                              })) : c("", !0),
                              w.value === "Fields" ? (u(), d(f, {
                                key: 2,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[87] || (e[87] = l("h6", { class: "mb-4" }, "Field Visibility", -1)),
                                  a(g, null, {
                                    default: t(() => [
                                      a(n, { cols: "12" }, {
                                        default: t(() => [
                                          a(f, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(h, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", _a, [
                                                    e[85] || (e[85] = l("p", { class: "mb-0" }, "Due Date", -1)),
                                                    a(C, {
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
                                          a(f, { class: "account_vcard_border shadow-none" }, {
                                            default: t(() => [
                                              a(h, { class: "py-1 px-2" }, {
                                                default: t(() => [
                                                  l("div", pa, [
                                                    e[86] || (e[86] = l("p", { class: "mb-0" }, "Currency & Exchange Rate", -1)),
                                                    a(C, {
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
                                __: [87]
                              })) : c("", !0),
                              w.value === "Mode" ? (u(), d(f, {
                                key: 3,
                                class: "account_vcard_border shadow-none pa-4"
                              }, {
                                default: t(() => [
                                  e[88] || (e[88] = l("h6", { class: "mb-4" }, "Invoice Mode", -1)),
                                  a(ze, { class: "accounting_v_radio" }, {
                                    default: t(() => [
                                      a(ae, {
                                        label: "Items and Services",
                                        value: "item_service"
                                      }),
                                      a(ae, {
                                        label: "Items Only",
                                        value: "items"
                                      }),
                                      a(ae, {
                                        label: "Services Only",
                                        value: "services"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1,
                                __: [88]
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
        (u(), d(y, {
          onClick: e[20] || (e[20] = (i) => W.value = !0),
          key: se.value,
          class: "account_add_new_btn bounce"
        }, {
          prepend: t(() => [
            a(D, { style: { "font-size": "20px", "margin-right": "6px" } })
          ]),
          default: t(() => [
            e[89] || (e[89] = T(" Create Invoice ", -1))
          ]),
          _: 1,
          __: [89]
        }))
      ]);
    };
  }
}, Ba = /* @__PURE__ */ Me(ba, [["__scopeId", "data-v-3f60cddd"]]);
export {
  Ba as default
};
