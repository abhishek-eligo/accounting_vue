<script setup>
import { ref, computed } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'
// Track the selected topic
const selectedTopic = ref('Accounting');

// Accounting data
const accountingHeaders = ref([
  { title: 'Account Name', align: 'start', sortable: false, value: 'accountName', visible: true },
  { title: 'Account Type', value: 'accountType', visible: true },
  { title: 'Balance', value: 'balance', visible: true, align: 'end' },
  { title: 'Currency', value: 'currency', visible: true },
  { title: 'Last Transaction', value: 'lastTransaction', visible: true },
  { title: 'Status', value: 'status', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
])

const accountingItems = ref([
  {
    accountName: 'Cash in Hand',
    accountType: 'Asset',
    balance: 12500.75,
    currency: 'INR',
    lastTransaction: '2025-06-22',
    status: 'Active',
  },
  {
    accountName: 'Accounts Receivable',
    accountType: 'Asset',
    balance: 45800.00,
    currency: 'INR',
    lastTransaction: '2025-06-20',
    status: 'Pending',
  },
  {
    accountName: 'Sales Revenue',
    accountType: 'Income',
    balance: 98500.25,
    currency: 'INR',
    lastTransaction: '2025-06-24',
    status: 'Active',
  },
  {
    accountName: 'Office Supplies',
    accountType: 'Expense',
    balance: 3200.60,
    currency: 'INR',
    lastTransaction: '2025-06-19',
    status: 'Inactive',
  },
  {
    accountName: 'Accounts Payable',
    accountType: 'Liability',
    balance: 15000.00,
    currency: 'INR',
    lastTransaction: '2025-06-21',
    status: 'Active',
  },
]);

const accountingFilters = ref([
  { title: 'Status', checked: false },
  { title: 'Account Type', checked: false },
  { title: 'Currency', checked: false },
  { title: 'Last Transaction From', checked: false },
  { title: 'Last Transaction To', checked: false },
]);

const accountingStatusItems = ref([
  { title: 'Active', value: 'Active' },
  { title: 'Pending', value: 'Pending' },
  { title: 'Inactive', value: 'Inactive' },
]);

const accountingAccountTypeItems = ref([
  { title: 'Asset', value: 'Asset' },
  { title: 'Income', value: 'Income' },
  { title: 'Expense', value: 'Expense' },
  { title: 'Liability', value: 'Liability' },
]);

const accountingCurrencyItems = ref([
  { title: 'INR', value: 'INR' },
]);

const accountingWidgetData = computed(() => ({
  totalRecords: accountingItems.value.length,
  avgSale: 2994.03,
  top10AvgSale: 5269.90,
  avgRating: 3.0,
}))

// Customers data
const customerHeaders = ref([
  { title: 'Customer Name', align: 'start', sortable: false, value: 'customerName', visible: true },
  { title: 'Customer Type', value: 'customerType', visible: true },
  { title: 'Total Orders', value: 'totalOrders', visible: true },
  { title: 'Last Order Date', value: 'lastOrderDate', visible: true },
  { title: 'Status', value: 'status', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
]);

const customerItems = ref([
  {
    customerName: 'John Doe',
    customerEmail: 'johndoe@test.com',
    customerType: 'Individual',
    totalOrders: 5,
    lastOrderDate: '2025-06-15',
    status: 'Active',
  },
  {
    customerName: 'Acme Corp',
    customerEmail: 'acme@test.com',
    customerType: 'Business',
    totalOrders: 12,
    lastOrderDate: '2025-06-18',
    status: 'Active',
  },
  {
    customerName: 'Jane Smith',
    customerEmail: 'janesmith@test.com',
    customerType: 'Individual',
    totalOrders: 3,
    lastOrderDate: '2025-06-10',
    status: 'Inactive',
  },
  {
    customerName: 'Global Traders',
    customerEmail: 'global@test.com',
    customerType: 'Business',
    totalOrders: 8,
    lastOrderDate: '2025-06-20',
    status: 'Pending',
  },
]);

const customerFilters = ref([
  { title: 'Status', checked: false },
  { title: 'Customer Type', checked: false },
  { title: 'Last Order From', checked: false },
  { title: 'Last Order To', checked: false },
]);

const customerStatusItems = ref([
  { title: 'Active', value: 'Active' },
  { title: 'Pending', value: 'Pending' },
  { title: 'Inactive', value: 'Inactive' },
]);

const customerTypeItems = ref([
  { title: 'Individual', value: 'Individual' },
  { title: 'Business', value: 'Business' },
]);

const customerWidgetData = computed(() => ({
  totalRecords: customerItems.value.length,
  avgSale: 1342.50,
  top10AvgSale: 3421.75,
  avgRating: 4.2,
}));

const tableWidgetData = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingWidgetData.value : customerWidgetData.value;
})

// Computed properties to dynamically select data based on selectedTopic
const tableHeaders = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingHeaders.value : customerHeaders.value;
});

const tableItems = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingItems.value : customerItems.value;
});

const tableFilters = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingFilters.value : customerFilters.value;
});

const tableStatusItems = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingStatusItems.value : customerStatusItems.value;
});

const tableTypeItems = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingAccountTypeItems.value : customerTypeItems.value;
});

const tableCurrencyItems = computed(() => {
  return selectedTopic.value === 'Accounting' ? accountingCurrencyItems.value : [];
});

const tableTitle = computed(() => {
  return selectedTopic.value;
});

const tableItemValueKey = computed(() => {
  return selectedTopic.value === 'Accounting' ? 'accountName' : 'customerName';
});

// Functions to switch topics
const selectAccounting = () => {
  selectedTopic.value = 'Accounting';
};

const selectCustomer = () => {
  selectedTopic.value = 'Customer';
};

</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <div class="d-flex align-center gap-2">
          <VBtn :class="selectedTopic === 'Customer' ? '' : 'account_v_btn_tonal'" @click="selectAccounting">
            Accounting</VBtn>
          <VBtn :class="selectedTopic === 'Customer' ? 'account_v_btn_tonal' : ''" @click="selectCustomer">Customer
          </VBtn>
        </div>
      </VCol>

      <VCol cols="12">
        <DynamicDataTable :headers="tableHeaders" :items="tableItems" :filters="tableFilters" :title="tableTitle"
          :status-items="tableStatusItems" :account-type-items="tableTypeItems" :currency-items="tableCurrencyItems"
          :widgets="tableWidgetData" :item-value-key="tableItemValueKey" />
      </VCol>
    </VRow>
  </div>
</template>

<style scoped></style>
