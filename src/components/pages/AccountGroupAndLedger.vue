<script setup>
import { ref, reactive } from "vue";
import {
  VBtn,
  VCard,
  VCardText,
  VCol,
  VIcon,
  VRow,
  VChip,
  VForm,
  VTextField,
  VAutocomplete,
  VDialog,
  VCardTitle,
  VCardSubtitle,
  VCardActions,
} from "vuetify/components";
import TreeItem from "@/components/core/TreeItem.vue";
import { toast } from "vue3-toastify";
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';

// === Data Structure ===
const expanded = ref(false);
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

// === Dialog States ===
const showLedgerDialog = ref(false);
const showGroupDialog = ref(false);
const showEditDialog = ref(false);
const showDeleteDialog = ref(false);

// === Selected Node for Editing/Deletion ===
const selectedNode = ref(null);
const selectedNodeToDelete = ref(null);

// === Form Refs ===
const ledgerFormRef = ref();
const groupFormRef = ref();
const editFormRef = ref();

// === Forms ===
const ledgerForm = reactive({
  name: "",
  parentGroup: null,
});

const groupForm = reactive({
  name: "",
  parentGroup: null,
});

const editForm = reactive({
  name: "",
  position: "",
  parentGroup: null,
});

// === Validation Rules ===
const nameRules = [(v) => !!v || "This field is required"];

const parentGroupRules = [(v) => !!v || "This field is required"];

// === Parent Group Options ===
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

// === Submit Methods ===
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

async function submitGroupForm() {
  const { valid } = await groupFormRef.value?.validate();
  if (!valid) {
    toast.error("Please fill all required fields for Group.");
    return;
  }

  const parentNode = findNodeById(chartData, groupForm.parentGroup);
  if (!parentNode) {
    toast.error("Parent group not found.");
    return;
  }

  if (!parentNode.children) {
    parentNode.children = [];
  }

  const parentParts = groupForm.parentGroup.split(".");
  const newIndex = parentNode.children.length
    ? Math.max(...parentNode.children.map((c) => parseInt(c.id.split(".").pop()))) + 1
    : 1;
  const newId = `${groupForm.parentGroup}.${newIndex}`;

  const newGroup = {
    id: newId,
    name: groupForm.name,
    type: parentNode.type,
    children: [],
  };

  parentNode.children.push(newGroup);
  parentGroups.value = buildParentGroupOptions(chartData);
  toast.success("Group created successfully.");

  // Reset
  showGroupDialog.value = false;
  groupForm.name = "";
  groupForm.parentGroup = null;
  groupFormRef.value?.resetValidation();
}

async function submitEditForm() {
  const { valid } = await editFormRef.value?.validate();
  if (!valid || !selectedNode.value) return;

  const node = selectedNode.value;
  const newName = editForm.name;
  const newParentId = editForm.parentGroup;
  const newPosition = parseInt(editForm.position);

  const oldParentId = getParentId(node);
  const oldParent = findNodeById(chartData, oldParentId);
  const newParent = findNodeById(chartData, newParentId);

  if (!newParent || (oldParentId && !oldParent)) {
    toast.error("Parent group not found.");
    return;
  }

  // Remove from old parent
  if (oldParentId === newParentId) {
    const siblings = oldParent.children || [];
    const index = siblings.findIndex((child) => child.id === node.id);
    if (index === -1) return;

    siblings.splice(index, 1); // remove current
    siblings.splice(newPosition - 1, 0, node); // insert at new position
  } else {
    if (!newParent.children) newParent.children = [];

    const newId = `${newParent.id}.${newParent.children.length + 1}`;
    const movedNode = {
      ...node,
      id: newId,
      name: newName,
    };

    // Remove from old parent
    oldParent.children = oldParent.children.filter((child) => child.id !== node.id);

    // Insert at desired position
    newParent.children.splice(newPosition - 1, 0, movedNode);

    // Update reference
    selectedNode.value = movedNode;
  }

  selectedNode.value.name = newName;

  parentGroups.value = buildParentGroupOptions(chartData);
  toast.success("Node updated successfully.");

  // Reset
  showEditDialog.value = false;
  editForm.name = "";
  editForm.position = "";
  editForm.parentGroup = null;
  editFormRef.value?.resetValidation();
}


// === Edit Handler ===
function handleEdit(node) {
  selectedNode.value = node;
  editForm.name = node.name;
  editForm.position = getPositionInParent(node); // 🟢 Position (1-based index)
  editForm.parentGroup = getParentId(node); // 🟢 Get current parent
  showEditDialog.value = true;
}

// === Helper Function to Get Parent ID ===
function getParentId(node) {
  const findParent = (data, childId) => {
    for (const item of data) {
      if (item.children) {
        if (item.children.some((child) => child.id === childId)) return item.id;
        const parentId = findParent(item.children, childId);
        if (parentId) return parentId;
      }
    }
    return null;
  };
  return findParent(chartData, node.id);
}

function getPositionInParent(node) {
  const parentId = getParentId(node);
  if (!parentId) return 1;
  const parent = findNodeById(chartData, parentId);
  if (!parent?.children) return 1;
  const index = parent.children.findIndex((child) => child.id === node.id);
  return index >= 0 ? index + 1 : 1; // 1-based
}

// === Delete Method ===
// === Delete Method ===
async function confirmDelete() {
  if (!selectedNodeToDelete.value) return;

  const parentId = getParentId(selectedNodeToDelete.value);
  if (parentId) {
    // For nested nodes
    const parent = findNodeById(chartData, parentId);
    if (parent && parent.children) {
      parent.children = parent.children.filter(child => child.id !== selectedNodeToDelete.value.id);
    }
  } else {
    // For base-level nodes
    chartData.splice(
      chartData.findIndex(node => node.id === selectedNodeToDelete.value.id),
      1
    );
  }


  parentGroups.value = buildParentGroupOptions(chartData);
  toast.success("Node deleted successfully.");

  showDeleteDialog.value = false;
  selectedNodeToDelete.value = null;
}

function handleDelete(node) {
  selectedNodeToDelete.value = node;
  showDeleteDialog.value = true;
}
</script>

<template>
  <div class="account_ui_vcard">
    <VRow>
      <VCol cols="12" lg="9" md="9">
        <VCard class="account_vcard_border shadow-none" title="Chart of Groups and Ledgers"
          subtitle="Create and manage your ledger accounts and groups.">
          <template #append>
            <div class="d-flex align-center gap-2">
              <VBtn @click="showGroupDialog = true" class="account_v_btn_outlined" variant="outlined">
                <template #prepend>
                  <component :is="renderTablerIcon('plus')" style="font-size: 18px;" />
                </template>
                Add Group
              </VBtn>
              <VBtn @click="showLedgerDialog = true" class="account_v_btn_primary" variant="tonal">
                <template #prepend>
                  <component :is="renderTablerIcon('plus')" style="font-size: 18px;" />
                </template>
                Add Ledger
              </VBtn>
            </div>
          </template>

          <VCardText>
            <!-- Parent -->
            <div class="d-flex align-center gap-2 mb-2">
              <div class="d-flex align-center gap-1">
                <component class="account_folder_icon" :is="renderTablerIcon('folder')" style="font-size: 16px;" />
                <!-- <VIcon icon="mdi-folder-outline" class="account_folder_icon" size="16" /> -->
                <p class="mb-0 account_info_title">Group</p>
              </div>
              <div class="d-flex align-center gap-1">
                <component class="account_ledger_icon" :is="renderTablerIcon('file-text')" style="font-size: 16px;" />
                <!-- <VIcon icon="mdi-file-document-outline" class="account_ledger_icon" size="16" /> -->
                <p class="mb-0 account_info_title">Ledger</p>
              </div>
            </div>
            <VCard class="py-2 pr-2 account_vcard_border shadow-none" variant="text">
              <div class="custom_expansion_item">
                <TreeItem v-for="item in chartData" :key="item.id" :node="item" :level="0" @edit="handleEdit"
                  @delete="handleDelete" />
              </div>
            </VCard>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <!-- Add Ledger dialog -->
    <VDialog v-model="showLedgerDialog" max-width="400" @click:outside="ledgerFormRef?.resetValidation()">
      <VCard>
        <VCardTitle class="account_ui_swtich_title pb-0">Add New Ledger</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle text-wrap px-3">Add a new ledger to an existing group in your
          chart
          of
          accounts.</VCardSubtitle>
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
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click=" showLedgerDialog = false; ledgerFormRef?.resetValidation();" />
          <VBtn text="Add Ledger" class="account_v_btn_primary" @click="submitLedgerForm" />
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Add Group dialog -->
    <VDialog v-model="showGroupDialog" max-width="400" @click:outside="groupFormRef?.resetValidation()">
      <VCard>
        <VCardTitle class="account_ui_swtich_title" pb-0>Add New Group</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle px-3">Add a new group to your chart of accounts.
        </VCardSubtitle>
        <VCardText>
          <VForm ref="groupFormRef">
            <VTextField v-model="groupForm.name" :rules="nameRules" class="accouting_field accouting_active_field mb-2"
              placeholder="Name" variant="outlined" hide-details="auto" />
            <VAutocomplete v-model="groupForm.parentGroup" :items="parentGroups" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Parent Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
          </VForm>
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="
            showGroupDialog = false;
          groupFormRef?.resetValidation();
          " />
          <VBtn text="Add Group" class="account_v_btn_primary" @click="submitGroupForm" />
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Edit Dialog -->
    <VDialog v-model="showEditDialog" max-width="400" @click:outside="editFormRef?.resetValidation()">
      <VCard>
        <VCardTitle class="account_ui_swtich_title pb-0">Edit group</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle px-3">Update the name or parent group.</VCardSubtitle>
        <VCardText>
          <VForm ref="editFormRef">
            <VTextField v-model="editForm.name" :rules="nameRules" class="accouting_field accouting_active_field mb-2"
              placeholder="Name" variant="outlined" hide-details="auto" />
            <VTextField v-model="editForm.position" class="accouting_field accouting_active_field mb-2"
              placeholder="Position" variant="outlined" hide-details="auto" />
            <VAutocomplete v-model="editForm.parentGroup" :items="parentGroups" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Parent Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
          </VForm>
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="
            showEditDialog = false;
          editFormRef?.resetValidation();
          " />
          <VBtn text="Save Changes" class="account_v_btn_primary" @click="submitEditForm" />
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Delete Dialog -->
    <VDialog v-model="showDeleteDialog" max-width="400" @click:outside="showDeleteDialog = false">
      <VCard>
        <VCardTitle class="account_ui_swtich_title pb-0">Are you absolutely sure?</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle text-wrap px-3">
          This action cannot be undone. This will permanently delete the {{ selectedNodeToDelete?.name }} group and all
          of
          its subgroups.
        </VCardSubtitle>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="showDeleteDialog = false" />
          <VBtn text="Continue" class="account_v_btn_primary" @click="confirmDelete" />
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>
