<script setup>
import { ref, reactive } from 'vue'
import { VBtn, VCard, VCardText, VCol, VIcon, VRow, VChip } from 'vuetify/components'
import TreeItem from '@/components/core/TreeItem.vue'

const expanded = ref(false)

function toggleExpand() {
  expanded.value = !expanded.value
}

// Define tree data structure
const chartData = reactive([
  {
    "id": "1",
    "name": "Assets",
    "type": "Balance Sheet",
    "children": [
      {
        "id": "1.1",
        "name": "Current Assets",
        "type": "Balance Sheet",
        "children": [
          { "id": "1.1.1", "name": "Cash", "type": "Balance Sheet" },
          { "id": "1.1.2", "name": "Bank Accounts", "type": "Balance Sheet" },
          { "id": "1.1.3", "name": "Accounts Receivable", "type": "Balance Sheet" }
        ]
      },
      {
        "id": "1.2",
        "name": "Fixed Assets",
        "type": "Balance Sheet",
        "children": [
          { "id": "1.2.1", "name": "Property & Equipment", "type": "Balance Sheet" },
          { "id": "1.2.2", "name": "Vehicles", "type": "Balance Sheet" }
        ]
      }
    ]
  },
  {
    "id": "2",
    "name": "Liabilities",
    "type": "Balance Sheet",
    "children": [
      {
        "id": "2.1",
        "name": "Current Liabilities",
        "type": "Balance Sheet",
        "children": [
          { "id": "2.1.1", "name": "Accounts Payable", "type": "Balance Sheet" },
          { "id": "2.1.2", "name": "Credit Card Payable", "type": "Balance Sheet" }
        ]
      },
      {
        "id": "2.2",
        "name": "Long-Term Liabilities",
        "type": "Balance Sheet",
        "children": [
          { "id": "2.2.1", "name": "Bank Loan", "type": "Balance Sheet" }
        ]
      }
    ]
  },
  {
    "id": "3",
    "name": "Equity",
    "type": "Balance Sheet",
    "children": [
      { "id": "3.1", "name": "Owner's Equity", "type": "Balance Sheet" },
      { "id": "3.2", "name": "Retained Earnings", "type": "Balance Sheet" }
    ]
  },
  {
    "id": "4",
    "name": "Income",
    "type": "Profit & Loss",
    "children": [
      { "id": "4.1", "name": "Sales Revenue", "type": "Profit & Loss" },
      { "id": "4.2", "name": "Interest Income", "type": "Profit & Loss" }
    ]
  },
  {
    "id": "5",
    "name": "Expenses",
    "type": "Profit & Loss",
    "children": [
      {
        "id": "5.1",
        "name": "Cost of Goods Sold",
        "type": "Profit & Loss",
        "children": [
          { "id": "5.1.1", "name": "Purchases", "type": "Profit & Loss" }
        ]
      },
      {
        "id": "5.2",
        "name": "Operating Expenses",
        "type": "Profit & Loss",
        "children": [
          { "id": "5.2.1", "name": "Rent Expense", "type": "Profit & Loss" },
          { "id": "5.2.2", "name": "Salaries & Wages", "type": "Profit & Loss" },
          { "id": "5.2.3", "name": "Utilities Expense", "type": "Profit & Loss" }
        ]
      }
    ]
  }
]);

// Dialog state
const showLedgerDialog = ref(false)
const showGroupDialog = ref(false)

// Form data
const ledgerForm = reactive({
  name: '',
  parentGroup: null
})

const groupForm = reactive({
  name: '',
  parentGroup: null
})

function buildParentGroupOptions(data, level = 0) {
  return data.flatMap((node) => {
    // Only include nodes that can have children (i.e., exclude ledgers)
    if (!node.children && node.children !== undefined) {
      return [];
    }
    const indent = '— '.repeat(level)
    const current = {
      title: `${indent}${node.name}`,
      value: node.id,
    }
    const children = node.children ? buildParentGroupOptions(node.children, level + 1) : []
    return [current, ...children]
  })
}

const parentGroups = ref(buildParentGroupOptions(chartData));

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

function submitLedgerForm() {
  if (!ledgerForm.name || !ledgerForm.parentGroup) {
    console.error('Ledger name and parent group are required');
    return;
  }

  // Find the parent node
  const parentNode = findNodeById(chartData, ledgerForm.parentGroup);
  if (!parentNode) {
    console.error('Parent group not found');
    return;
  }

  // Ensure parentNode has a children array
  if (!parentNode.children) {
    parentNode.children = [];
  }

  // Generate a unique ID at the same level as parent's children
  const parentParts = ledgerForm.parentGroup.split('.');
  const newIndex = parentNode.children.length ? Math.max(...parentNode.children.map(c => parseInt(c.id.split('.').pop())) + 1) : 1;
  const newId = parentParts.length > 1 ? `${parentParts.slice(0, -1).join('.')}.${newIndex}` : `${ledgerForm.parentGroup}.${newIndex}`;

  // Create new ledger object (no children)
  const newLedger = {
    id: newId,
    name: ledgerForm.name,
    type: parentNode.type,
    children: null // Explicitly set to null to indicate no children
  };

  // Add new ledger to parent node's children
  parentNode.children.push(newLedger);

  // Update parentGroups
  parentGroups.value = buildParentGroupOptions(chartData);

  console.log('Creating ledger:', newLedger);
  showLedgerDialog.value = false;

  // Reset form fields
  ledgerForm.name = '';
  ledgerForm.parentGroup = null;
}

function submitGroupForm() {
  if (!groupForm.name || !groupForm.parentGroup) {
    console.error('Group name and parent group are required');
    return;
  }

  // Find the parent node
  const parentNode = findNodeById(chartData, groupForm.parentGroup);
  if (!parentNode) {
    console.error('Parent group not found');
    return;
  }

  // Ensure parentNode has a children array
  if (!parentNode.children) {
    parentNode.children = [];
  }

  // Generate a unique ID at the same level as parent's children
  const parentParts = groupForm.parentGroup.split('.');
  const newIndex = parentNode.children.length ? Math.max(...parentNode.children.map(c => parseInt(c.id.split('.').pop())) + 1) : 1;
  const newId = parentParts.length > 1 ? `${parentParts.slice(0, -1).join('.')}.${newIndex}` : `${groupForm.parentGroup}.${newIndex}`;

  // Create new group object
  const newGroup = {
    id: newId,
    name: groupForm.name,
    type: parentNode.type,
    children: []
  };

  // Add new group to parent node's children
  parentNode.children.push(newGroup);

  // Update parentGroups
  parentGroups.value = buildParentGroupOptions(chartData);

  console.log('Creating group:', newGroup);
  showGroupDialog.value = false;

  // Reset form fields
  groupForm.name = '';
  groupForm.parentGroup = null;
}
</script>

<template>
  <div class="account_ui_vcard">
    <VRow>
      <VCol cols="12" lg="8" md="8">
        <VCard class="account_vcard_border shadow-none" title="Chart of Groups and Ledgers"
          subtitle="Create and manage your ledger accounts and groups.">
          <template #append>
            <div class="d-flex align-center gap-2">
              <VBtn @click="showGroupDialog = true" class="account_v_btn_outlined" variant="outlined"
                prepend-icon="mdi-plus-circle-outline">Add Group
              </VBtn>
              <VBtn @click="showLedgerDialog = true" class="account_v_btn_primary" variant="tonal"
                prepend-icon="mdi-plus-circle-outline">Add Ledger
              </VBtn>
            </div>
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

    <!-- Add Ledger dialog -->
    <VDialog v-model="showLedgerDialog" max-width="400">
      <VCard>
        <VCardTitle class="account_ui_swtich_title">Add New Ledger</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle px-3">Add a new ledger to an existing group in your chart of
          accounts.</VCardSubtitle>
        <VCardText>
          <VTextField class="accouting_field accouting_active_field mb-2" v-model="ledgerForm.name" placeholder="Name"
            variant="outlined" hide-details />
          <VSelect v-model="ledgerForm.parentGroup" :items="parentGroups" class="accouting_field accouting_active_field"
            placeholder="Parent Group" item-title="title" item-value="value" variant="outlined" hide-details />
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="showLedgerDialog = false" />
          <VBtn text="Add Ledger" class="account_v_btn_primary" @click="submitLedgerForm" />
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Add Group dialog -->
    <VDialog v-model="showGroupDialog" max-width="400">
      <VCard>
        <VCardTitle class="account_ui_swtich_title">Add New Group</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle px-3">Add a new group to your chart of accounts.
        </VCardSubtitle>
        <VCardText>
          <VTextField class="accouting_field accouting_active_field mb-2" v-model="groupForm.name" placeholder="Name"
            variant="outlined" hide-details />
          <VSelect v-model="groupForm.parentGroup" :items="parentGroups" class="accouting_field accouting_active_field"
            placeholder="Parent Group" item-title="title" item-value="value" variant="outlined" hide-details />
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="showGroupDialog = false" />
          <VBtn text="Add Group" class="account_v_btn_primary" @click="submitGroupForm" />
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
