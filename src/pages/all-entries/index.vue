<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import axios from "axios";

// Function to handle amount input and show words
function handleAmountInput(event, rowIndex, type) {
  const amount = event.target.value;
  const numValue = parseFloat(amount) || 0;
  const words = numberToWords(numValue);

  // Update the row with both numeric value and words
  if (type === "debit") {
    debitRows.value[rowIndex].amount = numValue;
    debitRows.value[rowIndex].amountInWords = words;
  } else {
    creditRows.value[rowIndex].amount = numValue;
    creditRows.value[rowIndex].amountInWords = words;
  }
}

const journalEntryFormRef = ref(null)

// Journal entry form data
const journalEntryForm = ref({
  entryDate: new Date(),
  narration: "",
  voucherType: "",
  voucherNumber: "",
  entryType: "",

});

const debitRows = ref([
  { account: null, amount: null, amountInWords: "" }
]);
const creditRows = ref([
  { account: null, amount: null, amountInWords: "" }
]);

const narrationError = ref(null);
const showJournalEntryCard = ref(true);


const validateForm = () => {
  narrationError.value = null

  if (!journalEntryForm.value.entryDate) return "Please select an entry date"
  if (!journalEntryForm.value.entryType) return "Please select an entry type"
  if (!journalEntryForm.value.narration) {
    narrationError.value = "Narration is required"
    return "Please enter narration"
  }
  if (!journalEntryForm.value.voucherType) return "Please select voucher type"
  if (!debitRows.value.length || debitRows.value.some(d => !d.account || !d.amount)) {
    return "Please add valid debit entries"
  }
  if (!creditRows.value.length || creditRows.value.some(c => !c.account || !c.amount)) {
    return "Please add valid credit entries"
  }

  const totalDebit = debitRows.value.reduce((sum, d) => sum + Number(d.amount || 0), 0)
  const totalCredit = creditRows.value.reduce((sum, c) => sum + Number(c.amount || 0), 0)

  if (totalDebit !== totalCredit) return "Debit and Credit amounts must be equal"

  return null
}

const submitJournalEntryForm = async () => {
  const error = validateForm()
  if (error) {
    alert(error) // you can use Snackbar/Toast instead of alert
    return
  }

  try {
    const payload = {
      ...journalEntryForm.value,
      debitRows: debitRows.value,
      creditRows: creditRows.value,
    }

    const response = await axios.post("account-history",
    payload,
      {
        headers: {
      "Authorization": `Bearer 2|XVkW9zNO0IlrkaDLZHF7iR4KXOgg6ajSqSzRuj3D1143fc81`, // 👈 replace with your auth token
      "Content-Type": "application/json",
      "Accept" : "application/json",
     },
      }
    );

    if (response.status === 201 || response.status === 200) {
      alert("Journal Entry saved successfully!")
      // Reset form after success
      journalEntryForm.value = {
        entryDate: null,
        entryType: null,
        narration: "",
        voucherType: null,
        voucherNumber: null,
      }
      debitRows.value = [{ account: null, amount: null, amountInWords: "" }]
      creditRows.value = [{ account: null, amount: null, amountInWords: "" }]
      showJournalEntryCard.value = false
    }
  } catch (err) {
    console.error(err)
    alert("Failed to save journal entry")
  }
}


// Validation rules for journal entry form
// const journalEntryRules = {
// entryDate: (value) => validateField(value, journalEntryValidations.entryDate),
// description: (value) =>
//   validateField(value, journalEntryValidations.description),

// voucherType: (value) =>
// validateField(value, journalEntryValidations.voucherType),
// };
// console.log(journalEntryRules.description);

// const descriptionError = ref("");
// const checkValidation = (value) => {
//   descriptionError.value = validateField(
//     value,
//     journalEntryValidations.description
//   );
//   console.log(descriptionError.value);
//   // return result === true ? true : result;
// };

// Form reference
// const journalEntryFormRef = ref();

// Submit journal entry form
// async function submitJournalEntryForm() {

// const payload = { ...journalEntryForm.value };

// const response = await axios.post(
//   "/api/v1/account-history",
//   payload // 👈 data goes directly here
// );

// console.log(response.data);

//   // Reset form
//   journalEntryForm.value = {
//     entryDate: "",
//     narration: "",
//     voucherType: "",
//     voucherNumber: "",
//     entryType: "",
//   };

//   // Reset debit and credit rows
//   debitRows.value = [{ account: null, amount: 0, amountInWords: "" }];
//   creditRows.value = [{ account: null, amount: 0, amountInWords: "" }];

//   // Hide the form
//   showJournalEntryCard.value = false;

//   // Reset validation
//   journalEntryFormRef.value?.resetValidation();
// }

const chartData = reactive([
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
          { id: "1.1.3", name: "Accounts Receivable", type: "Balance Sheet" },
        ],
      },
      {
        id: "1.2",
        name: "Fixed Assets",
        type: "Balance Sheet",
        children: [
          { id: "1.2.1", name: "Property & Equipment", type: "Balance Sheet" },
          { id: "1.2.2", name: "Vehicles", type: "Balance Sheet" },
        ],
      },
    ],
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
          { id: "2.1.2", name: "Credit Card Payable", type: "Balance Sheet" },
        ],
      },
      {
        id: "2.2",
        name: "Long-Term Liabilities",
        type: "Balance Sheet",
        children: [{ id: "2.2.1", name: "Bank Loan", type: "Balance Sheet" }],
      },
    ],
  },
  {
    id: "3",
    name: "Equity",
    type: "Balance Sheet",
    children: [
      { id: "3.1", name: "Owner's Equity", type: "Balance Sheet" },
      { id: "3.2", name: "Retained Earnings", type: "Balance Sheet" },
    ],
  },
  {
    id: "4",
    name: "Income",
    type: "Profit & Loss",
    children: [
      { id: "4.1", name: "Sales Revenue", type: "Profit & Loss" },
      { id: "4.2", name: "Interest Income", type: "Profit & Loss" },
    ],
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
        children: [{ id: "5.1.1", name: "Purchases", type: "Profit & Loss" }],
      },
      {
        id: "5.2",
        name: "Operating Expenses",
        type: "Profit & Loss",
        children: [
          { id: "5.2.1", name: "Rent Expense", type: "Profit & Loss" },
          { id: "5.2.2", name: "Salaries & Wages", type: "Profit & Loss" },
          { id: "5.2.3", name: "Utilities Expense", type: "Profit & Loss" },
        ],
      },
    ],
  },
]);

// const showJournalEntryCard = ref(false);
const showLedgerDialog = ref(false);
const showDetailsDialog = ref(false);
const selectedEntry = ref(null);

const allEntries = ref([
  {
    date: "29-Apr-25",
    entry: "JRNL-2025-1001",
    voucher_type: "Journal",
    particulars: {
      accounts: [
        {
          title: "Prepaid Insurance",
          debit: "₹14,589.00",
          credit: "",
        },
        {
          title: "Accumulated Depreciation",
          debit: "",
          credit: "₹10,293.00",
        },
        {
          title: "Accounts Payable",
          debit: "",
          credit: "₹4,296.00",
        },
      ],
      description: {
        // "to": "Accumulated Depreciation, Accounts Payable",
        narration: "Received cash from various customers on account",
      },
    },
    status: "Pending",
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
          credit: "",
        },
        {
          title: "Equipment",
          debit: "",
          credit: "₹2,727.00",
        },
        {
          title: "Utilities Expense",
          debit: "",
          credit: "₹10,000.00",
        },
      ],
      description: {
        // to: 'Equipment, Utilities Expense',
        narration: "Utility bill payments and other miscellaneous expenses",
      },
    },
    status: "Pending",
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
          credit: "",
        },
        {
          title: "Wages Payable",
          debit: "",
          credit: "₹9,166.00",
        },
      ],
      description: {
        to: "Wages Payable",
        narration: "Utility bill payments and other miscellaneous expenses",
      },
    },
    status: "Pending",
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
          credit: "",
        },
        {
          title: "Utilities Expense",
          debit: "",
          credit: "₹8,215.00",
        },
      ],
      description: {
        to: "Utilities Expense",
        narration: "Initial capital contribution and office setup",
      },
    },
    status: "Pending",
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
          credit: "",
        },
        {
          title: "Equipment",
          debit: "",
          credit: "₹22,759.00",
        },
      ],
      description: {
        to: "Equipment",
        narration: "Payment of rent and utilities for the month",
      },
    },
    status: "Pending",
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
          credit: "",
        },
        {
          title: "Accounts Payable",
          debit: "",
          credit: "₹20,521.00",
        },
      ],
      description: {
        to: "Accounts Payable",
        narration: "Sold goods for cash and reduced COGS",
      },
    },
    status: "Approved",
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
          credit: "",
        },
        {
          title: "Wages Payable",
          debit: "",
          credit: "₹13,846.00",
        },
        {
          title: "Accounts Payable",
          debit: "",
          credit: "₹18,694.00",
        },
      ],
      description: {
        to: "Wages Payable, Accounts Payable",
        narration: "Paid for multiple insurance policies",
      },
    },
    status: "Pending",
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
          credit: "",
        },
        {
          title: "Equipment",
          debit: "",
          credit: "₹19,566.00",
        },
      ],
      description: {
        to: "Equipment",
        narration: "Received cash from various customers on account",
      },
    },
    status: "Pending",
  },
]);

const entriesTableHeaders = ref([
  { title: "Date", value: "date", visible: true },
  { title: "Entry #", value: "entry", visible: true },
  { title: "Voucher Type", value: "voucher_type", visible: true },
  { title: "Particulars", value: "particulars", visible: true },
  { title: "Debit", value: "debit", visible: true },
  { title: "Credit", value: "credit", visible: true },
  { title: "Status", value: "status", visible: true },
  { title: "Actions", value: "actions", visible: true },
]);

const allLedgers = ref([
  { title: "HDFC Bank", value: "1.1.2.1", groupId: "1.1.2" },
  { title: "ICICI Bank", value: "1.1.2.2", groupId: "1.1.2" },
  { title: "Cash", value: "1.1.1.1", groupId: "1.1.1" },
  { title: "Innovate Inc.", value: "1.1.3.1", groupId: "1.1.3" },
  { title: "Solutions Corp.", value: "1.1.3.2", groupId: "1.1.3" },
  { title: "Furniture & Fixtures", value: "1.2.1.1", groupId: "1.2.1" },
  { title: "Computers", value: "1.2.1.2", groupId: "1.2.1" },
  { title: "GST Payable", value: "2.1.1.1", groupId: "2.1" },
  { title: "Cloud Services LLC", value: "1.1.3.3", groupId: "1.1.3" },
]);

const voucherTypes = ref([
  { title: "Sales Voucher", value: "sales_voucher" },
  { title: "Purchase Voucher", value: "purchase_voucher" },
  { title: "Journal Voucher", value: "journal_voucher" },
  { title: "Payment Voucher", value: "payment_voucher" },
  { title: "Reciept Voucher", value: "reciept_voucher" },
]);

const voucherNo = ref([
  { title: "VOC-0001", value: "VOC-0001" },
  { title: "VOC-0002", value: "VOC-0002" },
  { title: "VOC-0003", value: "VOC-0003" },
  { title: "VOC-0004", value: "VOC-0004" },
  { title: "VOC-0005", value: "VOC-0005" },
]);

const entryTypes = ref([
  { title: "Journal", value: "Journal" },
  { title: "Deposit", value: "Deposit" },
  { title: "Expenses", value: "Expenses" },
  { title: "Invoices", value: "Invoices" },
]);

// const debitRows = ref([{ account: null, amount: 0, amountInWords: "" }]);
// const creditRows = ref([{ account: null, amount: 0, amountInWords: "" }]);

// Ledger form
const ledgerForm = reactive({
  name: "",
  parentGroup: null,
});

const ledgerFormRef = ref();

// Import ledger validations

const nameRules = [(v) => validateField(v, ledgerValidations.ledgerName)];
const parentGroupRules = [
  (v) => validateField(v, ledgerValidations.parentGroup),
];

// Build parent group options
function buildParentGroupOptions(data, level = 0) {
  return data.flatMap((node) => {
    if (!node.children && node.children !== undefined) return [];
    const indent = "— ".repeat(level);
    const current = {
      title: `${indent}${node.name}`,
      value: node.id,
    };
    const children = node.children
      ? buildParentGroupOptions(node.children, level + 1)
      : [];
    return [current, ...children];
  });
}
const parentGroups = ref(buildParentGroupOptions(chartData));

// Find node by ID
function findNodeById(data, id) {
  for (const node of data) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findNodeById(node.children, id);
      if (found) return found;
    }
  }
  return null;
}

// Submit ledger form
async function submitLedgerForm() {
  const { valid } = await ledgerFormRef.value?.validate();
  if (!valid) {
    toast.error("Please fill all required fields for Ledger.");
    return;
  }

  const parentNode = findNodeById(chartData, ledgerForm.parentGroup);
  if (!parentNode) {
    toast.error("Parent group not found.");
    return;
  }

  if (!parentNode.children) {
    parentNode.children = [];
  }

  const parentParts = ledgerForm.parentGroup.split(".");
  const newIndex = parentNode.children.length
    ? Math.max(
      ...parentNode.children.map((c) => parseInt(c.id.split(".").pop()))
    ) + 1
    : 1;
  const newId = `${ledgerForm.parentGroup}.${newIndex}`;

  const newLedger = {
    id: newId,
    name: ledgerForm.name,
    type: parentNode.type,
    children: null,
  };

  parentNode.children.push(newLedger);
  parentGroups.value = buildParentGroupOptions(chartData);
  toast.success("Ledger created successfully.");

  // Reset
  showLedgerDialog.value = false;
  ledgerForm.name = "";
  ledgerForm.parentGroup = null;
  ledgerFormRef.value?.resetValidation();
}

const addDebitRow = () => {
  debitRows.value.push({ account: null, amount: 0, amountInWords: "" });
};

const removeDebitRow = (index) => {
  if (debitRows.value.length > 1) {
    debitRows.value.splice(index, 1);
  }
};

const addCreditRow = () => {
  creditRows.value.push({ account: null, amount: 0, amountInWords: "" });
};

const removeCreditRow = (index) => {
  if (creditRows.value.length > 1) {
    creditRows.value.splice(index, 1);
  }
};

// Open details dialog for the selected entry
function openDetailsDialog(entry) {
  selectedEntry.value = entry;
  showDetailsDialog.value = true;
}

function totalAmount(accounts, type) {
  if (!accounts || !Array.isArray(accounts)) return "₹0.00";

  const sum = accounts.reduce((acc, item) => {
    const value = item[type]?.replace(/[^0-9.-]+/g, "") || "0";
    return acc + parseFloat(value);
  }, 0);

  return `₹${sum.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
}

function getToAccounts(entry) {
  if (!entry?.particulars?.description?.to) return [];
  return entry.particulars.description.to.split(",").map((a) => a.trim());
}

const hoveredRowIndex = ref(null);
const bounceKey = ref(0)

onMounted(() => {
  setInterval(() => {
    bounceKey.value++ // force key change to retrigger animation
  }, 3000)
})
</script>

<template>
  <div class="account">
    <VExpandTransition>
      <VRow v-show="showJournalEntryCard" class="justify-center">
        <VCol cols="8" class="">
          <VCard title="New Journal Entry" class="account_vcard_border account_ui_vcard pa-2 shadow-none mb-6">
            <template #append>
              <VBtn @click="showLedgerDialog = true" class="account_v_btn_outlined save_btn_height" variant="outlined"
                size="default" rounded="2" color="primary">
                <template #prepend>
                  <span style="display: flex; align-items: center;">
                    <IconPlus size="22" />
                  </span>
                </template>
                Add Ledger
              </VBtn>
            </template>
            <VCardText class="mt-4">
              <VForm ref="journalEntryFormRef" @submit.prevent="submitJournalEntryForm">
                <VRow>
                  <VCol cols="6">
                    <div class="d-flex align-center gap-3">
                      <div class="account_entry_form_label">
                        <label class="account_label">Date *</label>
                      </div>
                      <v-date-input v-model="journalEntryForm.entryDate" class="accounting_date_input"
                        cancel-text="Close" ok-text="Apply">
                        <template #prepend-inner>
                          <IconCalendar size="20" />
                        </template>
                      </v-date-input>
                    </div>
                  </VCol>

                  <VCol cols="6">
                    <div class="d-flex align-center gap-3">
                      <label class="account_label">Type* </label>
                      <VAutocomplete v-model="journalEntryForm.entryType" class="accouting_field accouting_active_field"
                        variant="outlined" density="compact" :items="entryTypes" item-title="title" item-value="value"
                        placeholder="Select Entry Type" />
                    </div>
                  </VCol>

                </VRow>

                <!-- Debit -->
                <VRow v-for="(debit, index) in debitRows" :key="index" class="mb-1">
                  <!-- Account -->
                  <VCol cols="12" lg="8" md="8">
                    <div class="d-flex align-center gap-3">
                      <div class="account_entry_form_label">
                        <label v-if="index === 0" class="account_label">Debit*</label>
                      </div>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select Account" density="compact" :items="allLedgers" item-title="title"
                        item-value="value" v-model="debit.account" />
                    </div>
                  </VCol>
                  <!-- Amount -->
                  <VCol cols="12" lg="4" md="4">
                    <VTextField type="number" class="accouting_field accouting_active_field" placeholder="0"
                      variant="outlined" density="compact" v-model="debit.amount" @input="
                        (event) => handleAmountInput(event, index, 'debit')
                      ">
                      <template #append>
                        <VBtn class="account_v_btn_ghost account_btn_primary_text" variant="text" size="x-small"
                          rounded="3" @click="removeDebitRow(index)">
                          <IconTrash size="18" />
                        </VBtn>
                      </template>
                    </VTextField>
                    <!-- Amount in words display -->
                    <div v-if="debit.amountInWords" class="mt-1">
                      <small class="font-italic amountInWords">
                        {{ debit.amountInWords }} rupees only
                      </small>
                    </div>
                  </VCol>
                </VRow>

                <!-- Add Button -->
                <div class="d-flex align-center pr-9 mb-4 justify-end">
                  <VBtn class="account_v_btn_ghost account_btn_primary_text" variant="text" size="small" rounded=""
                    @click="addDebitRow">
                    <template #prepend>
                      <IconPlus size="18" />
                    </template>
                    Add Debit Amount
                  </VBtn>
                </div>

                <!-- Credit -->
                <VRow v-for="(credit, index) in creditRows" :key="index" class="mb-1">
                  <VCol cols="12" lg="8" md="8">
                    <div class="d-flex align-center gap-3">
                      <div class="account_entry_form_label">
                        <label v-if="index === 0" class="account_label">Credit *</label>
                      </div>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select Account" density="compact" :items="allLedgers" item-title="title"
                        item-value="value" v-model="credit.account" />
                    </div>
                  </VCol>
                  <VCol cols="12" lg="4" md="4">
                    <VTextField type="number" class="accouting_field accouting_active_field" placeholder="0"
                      variant="outlined" density="compact" v-model="credit.amount" @input="
                        (event) => handleAmountInput(event, index, 'credit')
                      ">
                      <template #append>
                        <VBtn @click="removeCreditRow(index)" class="account_v_btn_ghost account_btn_primary_text"
                          variant="text" size="x-small" rounded="1">
                          <IconTrash size="18" />
                        </VBtn>
                      </template>
                    </VTextField>
                    <!-- Amount in words display -->
                    <div v-if="credit.amountInWords" class="mt-1">
                      <small class="font-italic amountInWords">
                        {{ credit.amountInWords }} rupees only
                      </small>
                    </div>
                  </VCol>
                </VRow>

                <div class="d-flex align-center pr-9 mb-4 justify-end">
                  <VBtn @click="addCreditRow" class="account_v_btn_ghost account_btn_primary_text" variant="text"
                    size="small" rounded="">
                    <template #prepend>
                      <IconPlus size="18" />
                    </template>
                    Add Credit Amount
                  </VBtn>
                </div>

                <VRow>
                  <VCol cols="12" lg="7" md="7">
                    <div class="d-flex align-start gap-3">
                      <div class="account_entry_form_label">
                        <label class="account_label mt-3">Description *</label>
                      </div>
                      <VTextarea v-model="journalEntryForm.narration" class="accounting_v_textarea"
                        placeholder="e.g. Inventory purchased on credit. XYZ Capital Introduce. Max length 254 characters"
                        variant="outlined" />
                      <small class="text-error" v-if="narrationError">
                        {{ narrationError }}
                      </small>
                    </div>
                  </VCol>
                  <VCol cols="12" lg="5" md="5">
                    <label class="account_label">Voucher Type *</label>
                    <VAutocomplete v-model="journalEntryForm.voucherType" class="accouting_field accouting_active_field"
                      variant="outlined" density="compact" :items="voucherTypes" item-title="title" item-value="value"
                      placeholder="Select Voucher Type" />

                      <label class="account_label">Voucher Number</label>
                      <VAutocomplete v-model="journalEntryForm.voucherNumber" class="accouting_field accouting_active_field"
                      variant="outlined" density="compact" :items="voucherNo" item-title="title" item-value="value"
                      placeholder="Select Voucher Number" />

                  </VCol>
                </VRow>

                <VRow>
                  <VCol cols="12" lg="12" md="12">
                    <VCard class="account_vcard_border mt-2 account_module_card shadow-none" title="Auto-Approve Entry"
                      subtitle="This entry will be approved automatically and will immediately affect your books.">
                      <template #append>
                        <VSwitch density="compact" inset class="account_swtich_btn" color="primary" hide-details />
                      </template>
                    </VCard>
                  </VCol>
                </VRow>

                <VRow>
                  <VCol cols="12">
                    <div class="d-flex align-center justify-end gap-2">
                      <VBtn @click="showJournalEntryCard = false" class="account_v_btn_outlined" variant="outlined"
                        rounded="2" size="default">Cancel</VBtn>
                      <VBtn class="account_v_btn_primary save_btn_height"
                        variant="outlined" size="default" rounded="2" color="primary" type="submit">
                        <template #prepend>
                          <IconDeviceFloppy size="18" />
                        </template>
                        Save Voucher
                      </VBtn>
                    </div>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VExpandTransition>

    <VCard title="All Entries" subtitle="A record of all financial transactions."
      class="account_vcard_border pa-2 account_ui_vcard shadow-none">
      <div class="d-flex align-center px-3 justify-space-between">
        <VTextField style="max-width: 265px" class="accouting_field accouting_active_field" placeholder="Filter entries"
          variant="outlined">
          <template #prepend-inner>
            <IconSearch size="20" />
          </template>
        </VTextField>

        <div class="d-flex align-center gap-2">
          <VSwitch density="compact" inset class="account_swtich_btn mr-3" color="primary" hide-details
            label="Compact" />
          <VMenu width="200px" location="start" :close-on-content-click="false">
            <template #activator="{ props }">
              <v-tooltip text="Filters" location="top">
                <template #activator="{ props: tooltipProps }">
                  <VBtn v-bind="{ ...props, ...tooltipProps }" variant="text" class="account_filter_btn_color"
                    rounded="1" size="36">
                    <IconFilter size="24" />
                  </VBtn>
                </template>
              </v-tooltip>
            </template>
            <VCard class="account_vcard_menu account_vcard_border">
              <div class="account_vcard_menu_hdng px-4">Add Filters</div>
              <VDivider class="my-1 mt-0" />
              <div class="account_table_filter_menu py-1">
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <VCheckbox class="account_v_checkbox account_filter_menu_checkbox" density="compact" />
                    <span>Date</span>
                  </div>
                </div>
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <VCheckbox class="account_v_checkbox account_filter_menu_checkbox" density="compact" />
                    <span>Created By</span>
                  </div>
                </div>
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <VCheckbox class="account_v_checkbox account_filter_menu_checkbox" density="compact" />
                    <span>Account</span>
                  </div>
                </div>
              </div>
            </VCard>
          </VMenu>

          <VMenu width="110px" location="bottom" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <VBtn v-bind="props" class="account_filter_btn_color" variant="text" rounded="1" size="36">
                <IconDownload size="24" />
              </VBtn>
            </template>
            <VCard class="account_vcard_border">
              <div class="account_table_filter_menu py-1">
                <div class="account_vcard_menu_item">
                  ninthree <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <span>PDF</span>
                  </div>
                </div>
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <span>CSV</span>
                  </div>
                </div>
              </div>
            </VCard>
          </VMenu>
        </div>
      </div>
      <VCardText class="mt-2 pa-3">
        <VCard variant="flat" class="shadow-none">
          <div class="gst_summary_table_container">
            <table class="table table-bordered account_entries_table text-center w-100">
              <thead>
                <tr>
                  <th class="account_entries_table_header_date">Date</th>
                  <th class="account_entries_table_header_entry">Entry #</th>
                  <th class="account_entries_table_header_voucher">
                    Voucher Type
                  </th>
                  <th class="account_entries_table_header_particulars">
                    Particulars
                  </th>
                  <th class="account_entries_table_header_debit">Debit</th>
                  <th class="account_entries_table_header_credit">Credit</th>
                  <th class="account_entries_table_header_status">Status</th>
                  <th class="account_entries_table_header_actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(entry, index) in allEntries" :key="index">
                  <template
                    v-if="entry && entry.particulars && entry.particulars.accounts && Array.isArray(entry.particulars.accounts) && entry.particulars.accounts.length > 0">
                    <tr :class="[
                      'account_entries_table_row',
                      { 'even-entry': index % 2 === 0 },
                    ]" @mouseover="hoveredRowIndex = index" @mouseleave="hoveredRowIndex = null">
                      <!-- Date, Entry #, Voucher Type, Status, and Actions span all account rows and description -->
                      <td class="account_entries_table_date" :rowspan="entry.particulars.accounts.length + 1"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ entry.date || "N/A" }}
                      </td>
                      <td class="account_entries_table_entry" :rowspan="entry.particulars.accounts.length + 1"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ entry.entry || "N/A" }}<br />
                        <span @click="openDetailsDialog(entry)">View Details</span>
                      </td>
                      <td class="account_entries_table_voucher" :rowspan="entry.particulars.accounts.length + 1"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ entry.voucher_type || "N/A" }}
                      </td>
                      <!-- First account row -->
                      <td class="account_entries_table_particulars"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ entry.particulars.accounts[0]?.title || "N/A" }}
                      </td>
                      <td class="account_entries_table_debit account_primary_color">
                        {{ entry.particulars.accounts[0]?.debit || "" }}
                      </td>
                      <td class="account_entries_table_credit account_error_color">
                        {{ entry.particulars.accounts[0]?.credit || "" }}
                      </td>
                      <td class="account_entries_table_status" :rowspan="entry.particulars.accounts.length + 1">
                        <VChip class="account_v_chip"
                          :class="entry.status === 'Pending' ? 'account_chip_error' : 'account_chip_primary'"
                          size="small">
                          {{ entry.status || "N/A" }}
                        </VChip>
                      </td>
                      <td class="account_entries_table_actions" :rowspan="entry.particulars.accounts.length + 1">
                        <div class="d-flex align-center justify-center gap-2">
                          <VBtn size="small" class="account_v_btn_ghost" variant="text">
                            <IconPencil size="20" />
                          </VBtn>
                          <VBtn size="small" class="account_v_btn_ghost" variant="text">
                            <IconArrowBackUp size="20" />
                          </VBtn>
                          <VBtn size="small" class="account_v_btn_ghost" variant="text">
                            <IconTrash size="20" />
                          </VBtn>
                        </div>
                      </td>
                    </tr>
                    <!-- Additional account rows (if any) -->
                    <tr v-for="(account, accIndex) in entry.particulars.accounts.slice(1)" :key="`${index}-${accIndex}`"
                      :class="['account_entries_table_row', { 'even-entry-extension': index % 2 === 0 },]"
                      @mouseover="hoveredRowIndex = index" @mouseleave="hoveredRowIndex = null">
                      <td class="account_entries_table_particulars"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ account.title || "N/A" }}
                      </td>
                      <td class="account_entries_table_debit account_primary_color"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ account.debit || "" }}
                      </td>
                      <td class="account_entries_table_credit account_error_color"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ account.credit || "" }}
                      </td>
                    </tr>
                    <!-- Description and Narration row -->
                    <tr :class="['account_entries_table_row', { 'even-entry-extension': index % 2 === 0 },]">
                      <td colspan="3" :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        <div class="d-flex flex-column align-start justify-center">
                          <span class="account_entry_desc_text">(Narration: {{ entry.particulars.description?.narration
                            || "N/A" }})</span>
                        </div>
                      </td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
          </div>
        </VCard>
      </VCardText>
    </VCard>

    <!-- Add Ledger Dialog -->
    <VDialog v-model="showLedgerDialog" max-width="400" @click:outside="ledgerFormRef?.resetValidation()">
      <VCard>
        <VCardTitle class="account_ui_swtich_title pb-0">Add New Ledger</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle text-wrap px-3">
          Create a new ledger account under a specified group.
        </VCardSubtitle>
        <VCardText>
          <VForm ref="ledgerFormRef">
            <div class="mb-3">
              <label class="account_label">Ledger Name</label>
              <VTextField v-model="ledgerForm.name" :rules="nameRules" class="accouting_field accouting_active_field"
                placeholder="Enter ledger name" variant="outlined" hide-details="auto" />
            </div>
            <div class="mb-3">
              <label class="account_label">Parent Group</label>
              <VAutocomplete v-model="ledgerForm.parentGroup" :items="parentGroups" :rules="parentGroupRules"
                class="accouting_field accouting_active_field" placeholder="Select parent group" item-title="title"
                item-value="value" variant="outlined" hide-details="auto" />
            </div>
          </VForm>
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="
            showLedgerDialog = false;
          ledgerFormRef?.resetValidation();
          " />
          <VBtn text="Add Ledger" class="account_v_btn_primary" @click="submitLedgerForm" />
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Entry Details Dialog -->
    <VDialog v-model="showDetailsDialog" max-width="600" @click:outside="showDetailsDialog = false">
      <VCard class="account_vcard_border account_details_dialog" title="Journal Voucher"
        :subtitle="selectedEntry?.entry">
        <template #append>
          <VBtn variant="text" size="x-small" rounded="" @click="showDetailsDialog = false"
            class="account_vcard_close_btn">
            <IconX size="20" />
          </VBtn>
        </template>
        <VCardText>
          <div class="d-flex align-center justify-space-between mb-2">
            <div class="d-flex align-center gap-1">
              <span class="account_label_bold">Date:</span>
              <span class="account_label_light">{{ selectedEntry?.date }}</span>
            </div>
            <div class="d-flex align-center gap-1">
              <span class="account_label_bold">Type:</span>
              <span class="account_label_light">{{
                selectedEntry?.voucher_type
              }}</span>
            </div>
          </div>

          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center gap-1">
              <span class="account_label_bold">Created By:</span>
              <span class="account_label_light">Admin</span>
            </div>
            <div class="">
              <VChip class="account_chip_primary" size="small" :text="selectedEntry?.status" />
            </div>
          </div>

          <VDivider class="my-2" />

          <VCard class="account_vcard_border shadow-none account_entries_table mt-2">
            <VTable class="">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th class="text-right">Debit</th>
                  <th class="text-right">Credit</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(acc, i) in selectedEntry?.particulars?.accounts" :key="i">
                  <tr>
                    <td :class="{ 'pl-9': i !== 0 }">{{ acc.title }}</td>
                    <td class="text-success text-right">
                      {{ acc.debit || "" }}
                    </td>
                    <td class="text-error text-right">
                      {{ acc.credit || "" }}
                    </td>
                  </tr>
                </template>
                <tr class="font-weight-bold">
                  <td>Total</td>
                  <td class="text-success text-right">
                    {{
                      totalAmount(selectedEntry.particulars.accounts, "debit")
                    }}
                  </td>
                  <td class="text-error text-right">
                    {{
                      totalAmount(selectedEntry.particulars.accounts, "credit")
                    }}
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VCard>

          <div class="d-flex align-center gap-1 mt-3 mb-2">
            <span class="account_label_bold abc">Narration:</span>
            <span class="account_label_light font-italic">{{
              selectedEntry?.particulars?.description?.narration || "N/A"
            }}</span>
          </div>
        </VCardText>
      </VCard>
    </VDialog>

    <VBtn @click="showJournalEntryCard = !showJournalEntryCard" :key="bounceKey" class="account_add_new_btn bounce">
      <template #prepend>
        <IconCirclePlus size="18" />
      </template>
      New Journal Entry
    </VBtn>
  </div>
</template>

<style scoped>
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-12px);
  }

  40% {
    transform: translateY(0);
  }

  60% {
    transform: translateY(-6px);
  }

  80% {
    transform: translateY(0);
  }
}

.bounce {
  animation: bounce 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
<style scoped>
/* Custom border color for the HTML table with class account_entries_table */
.account_entries_table {
  border-collapse: collapse;
  width: 100%;
}

.account_entries_table th,
.account_entries_table td {
  border: 1.5px solid var(--acc-border-color) !important;
  padding: 8px;
}

.account_entries_table tr {
  border-bottom: 1.5px solid var(--acc-border-color) !important;
}
</style>
