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

// Generate 100 accounting items
const accountingItems = ref(Array.from({ length: 100 }, (_, index) => ({
    accountName: `Account ${index + 1}`,
    accountType: ['Asset', 'Income', 'Expense', 'Liability'][Math.floor(Math.random() * 4)],
    balance: Number((Math.random() * 100000).toFixed(2)),
    currency: 'INR',
    lastTransaction: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    status: ['Active', 'Pending', 'Inactive'][Math.floor(Math.random() * 3)],
})));

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
    avgSale: accountingItems.value.reduce((sum, item) => sum + item.balance, 0) / accountingItems.value.length,
    top10AvgSale: accountingItems.value
        .sort((a, b) => b.balance - a.balance)
        .slice(0, Math.ceil(accountingItems.value.length * 0.1))
        .reduce((sum, item) => sum + item.balance, 0) / Math.ceil(accountingItems.value.length * 0.1),
    avgRating: 3.0,
}));

// Customers data
const customerHeaders = ref([
    { title: 'Customer Name', align: 'start', sortable: false, value: 'customerName', visible: true },
    { title: 'Customer Type', value: 'customerType', visible: true },
    { title: 'Total Orders', value: 'totalOrders', visible: true },
    { title: 'Last Order Date', value: 'lastOrderDate', visible: true },
    { title: 'Status', value: 'status', visible: true },
    { title: 'Actions', value: 'actions', visible: true },
]);

// Generate 100 customer items
const customerItems = ref(Array.from({ length: 100 }, (_, index) => ({
    customerName: `Customer ${index + 1}`,
    customerEmail: `customer${index + 1}@test.com`,
    customerType: ['Individual', 'Business'][Math.floor(Math.random() * 2)],
    totalOrders: Math.floor(Math.random() * 20),
    lastOrderDate: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
    status: ['Active', 'Pending', 'Inactive'][Math.floor(Math.random() * 3)],
})));

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
    avgSale: customerItems.value.reduce((sum, item) => sum + item.totalOrders * 100, 0) / customerItems.value.length,
    top10AvgSale: customerItems.value
        .sort((a, b) => b.totalOrders - a.totalOrders)
        .slice(0, Math.ceil(customerItems.value.length * 0.1))
        .reduce((sum, item) => sum + item.totalOrders * 100, 0) / Math.ceil(customerItems.value.length * 0.1),
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
                <DynamicDataTable :headers="tableHeaders" :items="tableItems" :filters="tableFilters"
                    :title="tableTitle" :status-items="tableStatusItems" :account-type-items="tableTypeItems"
                    :currency-items="tableCurrencyItems" :widgets="tableWidgetData" />
            </VCol>
        </VRow>
    </div>
</template>

<style scoped></style>
