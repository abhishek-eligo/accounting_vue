<script setup>
import { ref } from 'vue'
import { VBtn, VCard, VCardText, VCol, VIcon, VRow, VChip } from 'vuetify/components'
// import TreeItem from '@/components/core/TreeItem.vue'
const expanded = ref(false)

function toggleExpand() {
  expanded.value = !expanded.value
}

// Define tree data structure
const chartData = reactive([
  {
    id: 1,
    name: 'Assets',
    type: 'Balance Sheet',
    children: [
      {
        id: 2,
        name: 'Current Assets',
        type: 'Balance Sheet',
        children: [
          { id: 3, name: 'Cash', type: 'Balance Sheet' },
          { id: 4, name: 'Bank Accounts', type: 'Balance Sheet' },
          { id: 5, name: 'Accounts Receivable', type: 'Balance Sheet' },
        ],
      },
      {
        id: 6,
        name: 'Fixed Assets',
        type: 'Balance Sheet',
        children: [
          { id: 7, name: 'Property & Equipment', type: 'Balance Sheet' },
          { id: 8, name: 'Vehicles', type: 'Balance Sheet' },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Liabilities',
    type: 'Balance Sheet',
    children: [
      {
        id: 10,
        name: 'Current Liabilities',
        type: 'Balance Sheet',
        children: [
          { id: 11, name: 'Accounts Payable', type: 'Balance Sheet' },
          { id: 12, name: 'Credit Card Payable', type: 'Balance Sheet' },
        ],
      },
      {
        id: 13,
        name: 'Long-Term Liabilities',
        type: 'Balance Sheet',
        children: [
          { id: 14, name: 'Bank Loan', type: 'Balance Sheet' },
        ],
      },
    ],
  },
  {
    id: 15,
    name: 'Equity',
    type: 'Balance Sheet',
    children: [
      {
        id: 16,
        name: "Owner's Equity",
        type: 'Balance Sheet',
      },
      {
        id: 17,
        name: 'Retained Earnings',
        type: 'Balance Sheet',
      },
    ],
  },
  {
    id: 18,
    name: 'Income',
    type: 'Profit & Loss',
    children: [
      {
        id: 19,
        name: "Sales Revenue",
        type: 'Profit & Loss',
      },
      {
        id: 20,
        name: 'Interest Income',
        type: 'Profit & Loss',
      },
    ],
  },
  {
    id: 21,
    name: 'Expenses',
    type: 'Profit & Loss',
    children: [
      {
        id: 22,
        name: 'Cost of Goods Sold',
        type: 'Profit & Loss',
        children: [
          { id: 23, name: 'Purchases', type: 'Profit & Loss' }
        ]
      },
      {
        id: 24,
        name: 'Operating Expenses',
        type: 'Profit & Loss',
        children: [
          {
            id: 25,
            name: 'Rent Expense',
            type: 'Profit & Loss',
          },
          {
            id: 26,
            name: 'Salaries & Wages',
            type: 'Profit & Loss',
          },
          {
            id: 27,
            name: 'Utilities Expense',
            type: 'Profit & Loss',
          },
        ]
      }
    ]
  }
])

// Dialog state
const showDialog = ref(false)

// Form data
const form = reactive({
  name: '',
  parentGroup: null
})

function buildParentGroupOptions(data, level = 0) {
  return data.flatMap((node) => {
    const indent = '— '.repeat(level)
    const current = {
      title: `${indent}${node.name}`,
      value: node.id,
    }

    const children = node.children ? buildParentGroupOptions(node.children, level + 1) : []
    return [current, ...children]
  })
}

const parentGroups = buildParentGroupOptions(chartData);

function submitForm() {
  console.log('Creating ledger:', form)
  showDialog.value = false
  // Optionally: Reset form fields here
}

</script>

<template>
  <div class="account_ui_vcard">
    <VRow>
      <VCol cols="12" lg="8" md="8">
        <VCard class="account_vcard_border shadow-none" title="Chart of Ledgers"
          subtitle="Create and manage your ledger accounts and groups.">
          <template #append>
            <VBtn @click="showDialog = true" class="account_v_btn_primary" variant="tonal"
              prepend-icon="mdi-plus-circle-outline">Add Account
            </VBtn>
          </template>

          <VCardText>
            <!-- Parent -->
            <VCard class="py-2 pr-2 account_vcard_border shadow-none">
              <div class="custom_expansion_item">
                <TreeItem v-for="item in chartData" :key="item.id" :node="item" />
              </div>
            </VCard>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VDialog v-model="showDialog" max-width="400">
      <VCard>
        <VCardTitle class="account_ui_swtich_title">Add New Ledger</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle px-3">Add a new ledger to an existing group in your chart of
          accounts.</VCardSubtitle>
        <VCardText>
          <VTextField class="accouting_field accouting_active_field mb-2" v-model="form.name" placeholder="Name"
            variant="outlined" hide-details />
          <VSelect v-model="form.parentGroup" :items="parentGroups" class="accouting_field accouting_active_field"
            placeholder="Parent Group" item-title="title" item-value="value" variant="outlined" hide-details />
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="showDialog = false" />
          <VBtn text="Add Item" class="account_v_btn_primary" @click="submitForm" />
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<style scoped></style>
