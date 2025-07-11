<script setup>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';


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

const showJournalEntryCard = ref(false);
const showLedgerDialog = ref(false);

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
          credit: "₹10,293.00"
        },
        {
          title: "Cash",
          debit: "",
          credit: "₹4,296.00"
        }
      ],
      description: {
        "to": "Accumulated Depreciation, Accounts Payable",
        "narration": "Narration: Received cash from various customers on account"
      }
    },
    status: "Pending"
  },
  {
    date: '14-Apr-25',
    entry: 'JRNL-2025-1002',
    voucher_type: 'Sales',
    particulars: {
      accounts: [
        {
          title: 'Service Revenue',
          debit: '₹2,729.00',
          credit: '₹5,747.00'
        },
        {
          title: 'Cash',
          debit: '₹2,727.00',
          credit: ''
        }
      ],
      description: {
        to: 'Equipment, Utilities Expense',
        narration: 'Narration: Utility bill payments and other miscellaneous expenses'
      }
    },
    status: 'Pending'
  },
  {
    date: '04-May-25',
    entry: 'JRNL-2025-1003',
    voucher_type: 'Sales',
    particulars: {
      accounts: [
        {
          title: 'Salaries',
          debit: '₹9,166.00',
          credit: '₹15,341.00'
        },
        {
          title: 'Advertising Expense',
          debit: '₹6,175.00',
          credit: ''
        }
      ],
      description: {
        to: 'Wages Payable',
        narration: 'Narration: Utility bill payments and other miscellaneous expenses'
      }
    },
    status: 'Pending'
  },
  {
    date: '09-Jun-25',
    entry: 'JRNL-2025-1004',
    voucher_type: 'Purchase',
    particulars: {
      accounts: [
        {
          title: 'Wages Payable',
          debit: '₹1,588.00',
          credit: '₹8,215.00'
        },
        {
          title: 'Accounts Payable',
          debit: '₹46,627.00',
          credit: ''
        }
      ],
      description: {
        to: 'Utilities Expense',
        narration: 'Narration: Initial capital contribution and office setup'
      }
    },
    status: 'Pending'
  },
  {
    date: '08-May-25',
    entry: 'JRNL-2025-1005',
    voucher_type: 'Journal',
    particulars: {
      accounts: [
        {
          title: 'Unearned Revenue',
          debit: '₹22,759.00',
          credit: '₹22,759.00'
        }
      ],
      description: {
        to: 'Equipment',
        narration: 'Narration: Payment of rent and utilities for the month'
      }
    },
    status: 'Pending'
  },
  {
    date: '29-Jun-25',
    entry: 'JRNL-2025-1006',
    voucher_type: 'Payment',
    particulars: {
      accounts: [
        {
          title: 'Office Supplies',
          debit: '₹20,521.00',
          credit: '₹20,521.00'
        }
      ],
      description: {
        to: 'Accounts Payable',
        narration: 'Narration: Sold goods for cash and reduced COGS'
      }
    },
    status: 'Approved'
  },
  {
    date: '01-May-25',
    entry: 'JRNL-2025-1007',
    voucher_type: 'Journal',
    particulars: {
      accounts: [
        {
          title: 'Accounts Receivable',
          debit: '₹46,386.00',
          credit: '₹13,846.00'
        },
        {
          title: 'Cash',
          debit: '',
          credit: '₹32,540.00'
        }
      ],
      description: {
        to: 'Wages Payable, Accounts Payable',
        narration: 'Narration: Paid for multiple insurance policies'
      }
    },
    status: 'Pending'
  },
  {
    date: '27-Jun-25',
    entry: 'JRNL-2025-1008',
    voucher_type: 'Receipt',
    particulars: {
      accounts: [
        {
          title: 'Utilities Expense',
          debit: '₹19,566.00',
          credit: '₹19,566.00'
        }
      ],
      description: {
        to: 'Equipment',
        narration: 'Narration: Received cash from various customers on account'
      }
    },
    status: 'Pending'
  }
]);

const entriesTableHeaders = ref([
  { title: 'Date', value: 'date', visible: true },
  { title: 'Entry #', value: 'entry', visible: true },
  { title: 'Voucher Type', value: 'voucher_type', visible: true },
  { title: 'Particulars', value: 'particulars', visible: true },
  { title: 'Debit', value: 'debit', visible: true },
  { title: 'Credit', value: 'credit', visible: true },
  { title: 'Status', value: 'status', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
])

const allLedgers = ref([
  { title: 'HDFC Bank', value: '1.1.2.1', groupId: '1.1.2' },
  { title: 'ICICI Bank', value: '1.1.2.2', groupId: '1.1.2' },
  { title: 'Cash', value: '1.1.1.1', groupId: '1.1.1' },
  { title: 'Innovate Inc.', value: '1.1.3.1', groupId: '1.1.3' },
  { title: 'Solutions Corp.', value: '1.1.3.2', groupId: '1.1.3' },
  { title: 'Furniture & Fixtures', value: '1.2.1.1', groupId: '1.2.1' },
  { title: 'Computers', value: '1.2.1.2', groupId: '1.2.1' },
  { title: 'GST Payable', value: '2.1.1.1', groupId: '2.1' },
  { title: 'Cloud Services LLC', value: '1.1.3.3', groupId: '1.1.3' },
]);

const voucherTypes = ref([
  { title: 'Sales Voucher', value: 'sales_voucher' },
  { title: 'Purchase Voucher', value: 'purchase_voucher' },
  { title: 'Journal Voucher', value: 'journal_voucher' },
  { title: 'Payment Voucher', value: 'payment_voucher' },
  { title: 'Reciept Voucher', value: 'reciept_voucher' },
])

const debitRows = ref([{ account: null, amount: 0 }]);
const creditRows = ref([{ account: null, amount: 0 }]);

// Ledger form
const ledgerForm = reactive({
  name: "",
  parentGroup: null,
});

const ledgerFormRef = ref();
const nameRules = [(v) => !!v || "This field is required"];
const parentGroupRules = [(v) => !!v || "This field is required"];

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
    ? Math.max(...parentNode.children.map((c) => parseInt(c.id.split(".").pop()))) + 1
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
  debitRows.value.push({ account: null, amount: 0 });
};

const removeDebitRow = (index) => {
  if (debitRows.value.length > 1) {
    debitRows.value.splice(index, 1);
  }
};

const addCreditRow = () => {
  creditRows.value.push({ account: null, amount: 0 });
};

const removeCreditRow = (index) => {
  if (creditRows.value.length > 1) {
    creditRows.value.splice(index, 1);
  }
};


</script>

<template>
  <div class="account">
    <VExpandTransition>
      <VRow v-show="showJournalEntryCard" class="justify-center">
        <VCol cols="8" class="">
          <VCard title="New Journal Entry" class="account_vcard_border account_ui_vcard pa-2 shadow-none mb-6">
            <template #append>
              <VBtn @click="showLedgerDialog = true" class="account_v_btn_outlined save_btn_height"
                prepend-icon="mdi-plus-circle-outline" variant="outlined" size="default" rounded="2" color="primary">
                Add Ledger
              </VBtn>
            </template>
            <VCardText class="mt-4">
              <VRow>
                <VCol cols="12" lg="6" md="6">
                  <div class="d-flex align-center gap-3">
                    <div class="account_entry_form_label">
                      <label class="account_label">Date *</label>
                    </div>
                    <VTextField class="accouting_field accouting_active_field" type="date" variant="outlined"
                      placeholder="Select Date" density="compact" prepend-inner-icon="mdi-calendar" />
                  </div>
                </VCol>
              </VRow>

              <!-- Debit -->
              <VRow v-for="(debit, index) in debitRows" :key="index" class="mb-1">
                <VCol cols="12" lg="8" md="8">
                  <div class="d-flex align-center gap-3">
                    <div class="account_entry_form_label">
                      <label v-if="index === 0" class="account_label">Debit *</label>
                    </div>
                    <!-- <div v-else style="width: 48px"></div> -->
                    <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="Select Account" density="compact" :items="allLedgers" item-title="title"
                      item-value="value" v-model="debit.account" />
                  </div>
                </VCol>
                <VCol cols="12" lg="4" md="4">
                  <VTextField type="number" class="accouting_field accouting_active_field" placeholder="0"
                    variant="outlined" density="compact" v-model="debit.amount">
                    <template #append>
                      <VBtn class="account_v_btn_ghost account_btn_primary_text" icon="mdi-close" variant="text"
                        size="x-small" rounded="1" @click="removeDebitRow(index)" />
                    </template>
                  </VTextField>
                </VCol>
              </VRow>

              <!-- Add Button -->
              <div class="d-flex align-center pr-9 mb-4 justify-end">
                <VBtn class="account_v_btn_ghost account_btn_primary_text" variant="text" size="small" rounded=""
                  prepend-icon="mdi-plus" @click="addDebitRow">
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
                    <!-- <div v-else style="width: 48px"></div> -->
                    <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="Select Account" density="compact" :items="allLedgers" item-title="title"
                      item-value="value" v-model="credit.account" />
                  </div>
                </VCol>
                <VCol cols="12" lg="4" md="4">
                  <VTextField type="number" class="accouting_field accouting_active_field" placeholder="0"
                    variant="outlined" density="compact" v-model="credit.amount">
                    <template #append>
                      <VBtn @click="removeCreditRow(index)" class="account_v_btn_ghost account_btn_primary_text"
                        icon="mdi-close" variant="text" size="x-small" rounded="1" />
                    </template>
                  </VTextField>
                </VCol>
              </VRow>

              <div class="d-flex align-center pr-9 mb-4 justify-end">
                <VBtn @click="addCreditRow" class="account_v_btn_ghost account_btn_primary_text" variant="text"
                  size="small" rounded="" prepend-icon="mdi-plus">Add
                  Credit
                  Amount</VBtn>
              </div>

              <VRow>
                <VCol cols="12" lg="7" md="7">
                  <div class="d-flex align-start gap-3">
                    <div class="account_entry_form_label">
                      <label class="account_label mt-3">Description *</label>
                    </div>
                    <VTextarea class="accounting_v_textarea"
                      placeholder="e.g. Inventory purchased on credit. XYZ Capital Introduce. Max length 254 characters"
                      variant="outlined" />
                  </div>
                </VCol>
                <VCol cols="12" lg="5" md="5">
                  <label class="account_label">Voucher Type *</label>
                  <VAutocomplete class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    :items="voucherTypes" item-title="title" item-value="value" placeholder="Select Voucher Type" />
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
                    <VBtn class="account_v_btn_primary save_btn_height" prepend-icon="mdi-content-save-outline"
                      variant="outlined" size="default" rounded="2" color="primary">Save Voucher</VBtn>
                  </div>
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VExpandTransition>

    <VCard title="All Entries" subtitle="A record of all financial transactions."
      class="account_vcard_border pa-2 account_ui_vcard shadow-none">
      <template #append>
        <div class="d-flex align-center gap-2">
          <VBtn @click="showJournalEntryCard = !showJournalEntryCard" class="account_v_btn_primary save_btn_height"
            prepend-icon="mdi-plus-circle-outline" variant="outlined" size="default" rounded="2" color="primary">
            New Journal Entry
          </VBtn>
        </div>
      </template>
      <div class="d-flex align-center px-3 justify-space-between">
        <VTextField style="max-width: 265px;" prepend-inner-icon="mdi-magnify"
          class="accouting_field accouting_active_field" placeholder="Filter entries" variant="outlined" />

        <div class="d-flex align-center gap-2">
          <VSwitch density="compact" inset class="account_swtich_btn mr-3" color="primary" hide-details
            label="Compact" />
          <VMenu width="200px" location="start" :close-on-content-click="false">
            <template #activator="{ props }">
              <v-tooltip text="Filters" location="top">
                <template #activator="{ props: tooltipProps }">
                  <VBtn v-bind="{ ...props, ...tooltipProps }" variant="text" class="account_filter_btn_color"
                    icon="mdi-filter-cog-outline" rounded size="36" />
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
              <VBtn v-bind="props" icon="mdi-tray-arrow-down" class="account_filter_btn_color " variant="text"
                rounded="" size="36" />
            </template>
            <VCard class="account_vcard_border">
              <div class="account_table_filter_menu py-1">
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
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
      <VCardText class="mt-2">
        <VCard class=" shadow-none">

          <!-- <VTable height="600" fixed-header class="account_entries_table">
            <thead>
              <tr class="account_entries_table_header">
                <th class="account_entries_table_header_date">Date</th>
                <th class="account_entries_table_header_entry">Entry #</th>
                <th class="account_entries_table_header_voucher">Voucher Type</th>
                <th class="account_entries_table_header_particulars">Particulars</th>
                <th class="account_entries_table_header_debit">Debit</th>
                <th class="account_entries_table_header_credit">Credit</th>
                <th class="account_entries_table_header_status">Status</th>
                <th class="account_entries_table_header_actions">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(entry, index) in allEntries" :key="index" class="account_entries_table_row">
                <td class="account_entries_table_date account_brdr_rght">{{ entry.date }}</td>
                <td class="account_entries_table_entry account_brdr_rght">{{ entry.entry }}</td>
                <td class="account_entries_table_voucher">{{ entry.voucher_type }}</td>
                <td class="account_entries_table_particulars account_brdr_left">
                  <div class="particulars_column">
                    <div class="d-flex flex-column justify-center">
                      <div class="entry_account px-2 py-1 account_brdr_bottom account_brdr_rght">
                        <p class="mb-0 account_entry_table_text">Prepaid Insurance</p>
                      </div>
                      <div class="py-1 px-2 account_brdr_rght account_brdr_bottom">
                        <p class="mb-0 account_entry_table_text">Cash</p>
                      </div>
                      <div class="d-flex flex-column justify-center px-2 py-1">
                        <span class="mb-0 ml-4 account_entry_desc_text">To Accumulated Depreciation, Accounts Payable</span>
                        <span class="account_entry_desc_text">(Narration: Received cash from various customers on account)</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="account_entries_table_debit account_brdr_rght">
                  <div class="d-flex flex-column justify-center">
                    <div class="py-1 px-2 account_brdr_bottom">
                      <p class="mb-0">₹14,589.00</p>
                    </div>
                    <div class="py-1 px-2 account_brdr_bottom">
                      <p class="mb-0">No data</p>
                    </div>
                  </div>
                </td>
                <td class="account_entries_table_credit account_brdr_rght">
                  <div class="d-flex flex-column justify-center">
                    <div class="py-1 px-2 account_brdr_bottom">
                      <p class="mb-0">₹10,293.00</p>
                    </div>
                    <div class="py-1 px-2 account_brdr_bottom">
                      <p class="mb-0">₹4,296.00</p>
                    </div>
                  </div>
                </td>
                <td class="account_entries_table_status">
                  <VChip class="account_v_chip" size="small">
                    Pending
                  </VChip>
                </td>
                <td class="account_entries_table_actions">
                  <div class="d-flex align-center gap-2">
                    <VBtn size="small" class="account_v_btn_ghost" icon="mdi-pencil-box-multiple-outline" variant="text" />
                    <VBtn size="small" class="account_v_btn_ghost" icon="mdi-arrow-u-left-top" variant="text" />
                    <VBtn size="small" class="account_v_btn_ghost" icon="mdi-trash-can-outline" variant="text" />
                  </div>
                </td>
              </tr>
            </tbody>
          </VTable> -->

          <div class="gst_summary_table_container">
            <table class="table account_dynamic_table table-bordered account_entries_table text-center">
              <thead>
                <tr>
                  <th class="account_entries_table_header_date">Date</th>
                  <th class="account_entries_table_header_entry">Entry #</th>
                  <th class="account_entries_table_header_voucher">Voucher Type</th>
                  <th class="account_entries_table_header_particulars">Particulars</th>
                  <th class="account_entries_table_header_debit">Debit</th>
                  <th class="account_entries_table_header_credit">Credit</th>
                  <th class="account_entries_table_header_status">Status</th>
                  <th class="account_entries_table_header_actions">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="account_entries_table_date" rowspan="3">15-Jul-24</td>
                  <td class="account_entries_table_entry" rowspan="3">
                    JRNL-2024-1001<br>
                    <span style="font-size: 12px; color: #009688;">View Details</span>
                  </td>
                  <td class="account_entries_table_voucher" rowspan="3">Journal</td>
                  <td class="account_entries_table_particulars">Computers</td>
                  <td class="account_entries_table_debit" style="color: #009688;">₹1,50,000.00</td>
                  <td class="account_entries_table_credit" style="color: #E53935;"></td>
                  <td rowspan="3" style="vertical-align: middle;">
                    <VChip class="account_v_chip" size="small">
                      Pending
                    </VChip>
                  </td>
                  <td rowspan="3" style="vertical-align: middle;">
                    <div class="d-flex align-center justify-center gap-2">
                      <VBtn size="small" class="account_v_btn_ghost" icon="mdi-pencil-box-multiple-outline"
                        variant="text" />
                      <VBtn size="small" class="account_v_btn_ghost" icon="mdi-arrow-u-left-top" variant="text" />
                      <VBtn size="small" class="account_v_btn_ghost" icon="mdi-trash-can-outline" variant="text" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="account_entries_table_particulars">dsfds</td>
                  <td>sdf</td>
                  <td class="account_entries_table_credit" style="color: #E53935;">₹1,00,000.00</td>
                </tr>
                <tr>
                  <td colspan="3" class="">
                    <div class="d-flex flex-column align-start justify-center">
                      <span class="mb-0 ml-4 account_entry_desc_text">To Accumulated Depreciation, Accounts
                        Payable</span>
                      <span class="account_entry_desc_text">(Narration: Received cash from various customers on
                        account)</span>
                    </div>
                  </td>
                </tr>
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
            <VTextField v-model="ledgerForm.name" :rules="nameRules" class="accouting_field accouting_active_field mb-2"
              placeholder="Name" variant="outlined" hide-details="auto" />
            <VAutocomplete v-model="ledgerForm.parentGroup" :items="parentGroups" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Parent Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
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
  </div>
</template>
