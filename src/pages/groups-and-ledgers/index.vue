<script setup>
import { ref, reactive, onMounted, watch } from "vue";
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
// import TreeItem from "@/components/core/TreeItem.vue";
import { toast } from "vue3-toastify";
import { API_CONFIG } from "../../config/api.js";

// === API Setup ===
import { apiService } from "../../services/api.js";

// === Data Structure ===
const expanded = ref(false);
const chartData = reactive([

]);

// === Dialog States ===
const showLedgerDialog = ref(false);
const showGroupDialog = ref(false);
const showSubgroupDialog = ref(false);
const showEditDialog = ref(false);
const showDeleteDialog = ref(false);

// === Selected Node for Editing/Deletion ===
const selectedNode = ref(null);
const selectedNodeToDelete = ref(null);

// === Form Refs ===
const ledgerFormRef = ref();
const groupFormRef = ref();
const subGroupFormRef = ref();
const editFormRef = ref();

// === Forms ===
const ledgerForm = reactive({
  name: "",
  ledgerGroup: null,
  ledgerSubgroup: null,
});

const groupForm = reactive({
  name: "",
  mainCategory: null,
});

const subGroupForm = reactive({
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
// Options for Add Group modal sourced from API main categories
const mainCategoryOptions = ref([]);
const ledgerGroupOptions = ref([]);
const ledgerSubGroupOptions = ref([]);
const isLoadingMainCategories = ref(false);
const isLoadingLedgerGroups = ref(false);

async function loadMainCategories() {
  try {
    isLoadingMainCategories.value = true;
    const response = await apiService.get(API_CONFIG.ENDPOINTS.LEDGER_MAIN_CATEGORY);
    const mainCategories = response?.data ?? response;
    mainCategoryOptions.value = mapMainCategoriesToOptions(mainCategories);
  } catch (error) {
    console.error('Failed to fetch ledgers main categories:', error);
    toast.error('Failed to load ledgers main categories');
  } finally {
    isLoadingMainCategories.value = false;
  }
}

async function loadLedgerGroups() {
  try {
    isLoadingLedgerGroups.value = true;
    const response = await apiService.get(API_CONFIG.ENDPOINTS.LEDGER_GROUPS);
    const ledgerGroups = response?.data;
    ledgerGroupOptions.value = mapLedgerGroupsToOptions(ledgerGroups);
  } catch (error) {
    console.error('Failed to fetch ledgers groups:', error);
    toast.error('Failed to load ledgers groups');
  } finally {
    isLoadingLedgerGroups.value = false;
  }
}

async function fetchLedgerHierarchy() {
  try {
    console.log("Fetching ledgers hierarchy...");
    const response = await apiService.get(API_CONFIG.ENDPOINTS.LEDGER_HIERARCHY);
    const hierarchy = response?.data ?? response;
    console.log("Ledgers hierarchy response:", hierarchy);

    if (Array.isArray(hierarchy)) {
      // Replace existing chartData with hierarchy from API
      chartData.splice(0, chartData.length, ...hierarchy);

      // Rebuild parent groups for selectors
      parentGroups.value = buildParentGroupOptions(chartData);
    }
  } catch (error) {
    console.error("Failed to fetch ledgers hierarchy:", error);
    toast.error("Failed to load ledgers hierarchy");
  }
}

function mapMainCategoriesToOptions(data) {
  if (!Array.isArray(data)) return [];
  return data.map(item => ({
    title: item?.name,
    value: item?.id
  }));
}

function mapLedgerGroupsToOptions(data) {
  if (!Array.isArray(data)) return [];
  return data.map(item => ({
    title: item?.name,
    value: item?.id
  }));
}

function mapLedgerSubGroupsToOptions(data) {
  if (!Array.isArray(data)) return [];
  return data.map(item => ({
    title: item?.name,
    value: item?.id
  }));
}

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

  try {
    // Call your backend API to create the new group
    const response = await apiService.post(
      API_CONFIG.ENDPOINTS.LEDGERS,
      {
        name: ledgerForm.name,
        ledger_group_id: ledgerForm.ledgerGroup, // send main ledger group id
        ledger_sub_group_id: ledgerForm.ledgerSubgroup, // send main ledger subgroup id
      }
    );
    if (response.status === 201) {
      fetchLedgerHierarchy();
      toast.success("Ledger created successfully.");
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    toast.error("Failed to create ledger.");
  }

  // Reset
  showLedgerDialog.value = false;
  ledgerForm.name = "";
  ledgerForm.ledgerGroup = null;
  ledgerForm.ledgerSubgroup = null;
  ledgerFormRef.value?.resetValidation();
}

async function submitGroupForm() {
  const { valid } = await groupFormRef.value?.validate();
  if (!valid) {
    toast.error("Please fill all required fields for Group.");
    return;
  }

  try {
    // Call your backend API to create the new group
    const response = await apiService.post(
      API_CONFIG.ENDPOINTS.LEDGER_GROUPS,
      {
        name: groupForm.name,
        ledger_main_category_id: groupForm.mainCategory, // send main ledger category id
        parent_ledger_group_id: null
      }
    );
    if (response.status === 201) {
      await loadLedgerGroups();
      await fetchLedgerHierarchy();
      toast.success("Ledger Group created successfully.");
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    toast.error("Failed to create group.");
  }
  //toast.success("Ledger Group created successfully.");

  // Reset
  showGroupDialog.value = false;
  groupForm.name = "";
  groupForm.mainCategory = null;
  groupFormRef.value?.resetValidation();
}

async function submitSubgroupForm() {
  const { valid } = await subGroupFormRef.value?.validate();
  if (!valid) {
    toast.error("Please fill all required fields for Sub-Group.");
    return;
  }

  try {
    // Call your backend API to create the new group
    const response = await apiService.post(
      API_CONFIG.ENDPOINTS.LEDGER_SUB_GROUPS,
      {
        name: subGroupForm.name,
        ledger_group_id: subGroupForm.parentGroup, // send main ledger group id
      }
    );
    if (response.status === 201) {
      fetchLedgerHierarchy();
      toast.success("Ledger Sub-Group created successfully.");
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    toast.error("Failed to create sub-group.");
  }

  // Reset
  showSubgroupDialog.value = false;
  subGroupForm.name = "";
  subGroupForm.parentGroup = null;
  subGroupFormRef.value?.resetValidation();
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
  console.log("handleEdit");
  console.log(node);
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
  console.log("handleDelete", node);
  selectedNodeToDelete.value = node;
  showDeleteDialog.value = true;
}

// === API Calls ===
onMounted(async () => {
  await loadMainCategories();
  await loadLedgerGroups();
  await fetchLedgerHierarchy();
});

watch(showGroupDialog, async (val) => {
  if (val && mainCategoryOptions.value.length === 0 && !isLoadingMainCategories.value) {
    await loadMainCategories();
  }
});

watch(showSubgroupDialog, async (val) => {
  if (val && ledgerGroupOptions.value.length === 0 && !isLoadingLedgerGroups.value) {
    await loadLedgerGroups();
  }
});

watch(
  () => ledgerForm.ledgerGroup, // getter
  async (newGroupId, oldGroupId) => {
    console.log("Parent group changed:", oldGroupId, "→", newGroupId);

    if (newGroupId) {
      ledgerForm.ledgerSubgroup = null;
      ledgerSubGroupOptions.value = [];
      try {
        const response = await apiService.get(
          API_CONFIG.ENDPOINTS.LEDGER_SUB_GROUPS_BY_LEDGER_GROUP(newGroupId)
        );
        const ledgerSubGroups = response?.data;
        ledgerSubGroupOptions.value = mapLedgerSubGroupsToOptions(ledgerSubGroups);
      } catch (error) {
        console.error("Failed to fetch sub-groups:", error);
        toast.error("Could not load sub-groups");
      }
    } else {
      ledgerSubGroupOptions.value = [];
    }
  }
);
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
                  <IconPlus size="18" />
                </template>
                Add Group
              </VBtn>
              <VBtn @click="showSubgroupDialog = true" class="account_v_btn_outlined" variant="outlined">
                <template #prepend>
                  <IconPlus size="18" />
                </template>
                Add Sub-Group
              </VBtn>
              <VBtn @click="showLedgerDialog = true" class="account_v_btn_primary" variant="tonal">
                <template #prepend>
                  <IconPlus size="18" />
                </template>
                Add Ledger
              </VBtn>
            </div>
          </template>

          <VCardText>
            <!-- Parent -->
            <div class="d-flex align-center gap-2 mb-2">
              <div class="d-flex align-center gap-1">
                <IconFolder class="account_folder_icon" size="16" />
                <p class="mb-0 account_info_title">Group</p>
              </div>
              <div class="d-flex align-center gap-1">
                <IconFolder class="account_folder_icon" size="16" />
                <p class="mb-0 account_info_title">Sub-Group</p>
              </div>
              <div class="d-flex align-center gap-1">
                <IconFileText class="account_ledger_icon" size="16" />
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
            <VAutocomplete v-model="ledgerForm.ledgerGroup"
              :items="ledgerGroupOptions.length ? ledgerGroupOptions : ledgerGroupOptions" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Ledger Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
            <VAutocomplete v-show="ledgerSubGroupOptions.length" v-model="ledgerForm.ledgerSubgroup"
              :items="ledgerSubGroupOptions.length ? ledgerSubGroupOptions : ledgerSubGroupOptions"
              class="mt-2 accouting_field accouting_active_field" placeholder="Ledger Sub-Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
          </VForm>
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined"
            @click=" showLedgerDialog = false; ledgerFormRef?.resetValidation();" />
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
            <VAutocomplete v-model="groupForm.mainCategory"
              :items="mainCategoryOptions.length ? mainCategoryOptions : mainCategoryOptions" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Ledger Main Category" item-title="title"
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

    <!-- Add Group dialog -->
    <VDialog v-model="showSubgroupDialog" max-width="400" @click:outside="subGroupFormRef?.resetValidation()">
      <VCard>
        <VCardTitle class="account_ui_swtich_title" pb-0>Add New Sub-Group</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle px-3">Add a new sub-group to your chart of accounts.
        </VCardSubtitle>
        <VCardText>
          <VForm ref="subGroupFormRef">
            <VTextField v-model="subGroupForm.name" :rules="nameRules"
              class="accouting_field accouting_active_field mb-2" placeholder="Name" variant="outlined"
              hide-details="auto" />
            <VAutocomplete v-model="subGroupForm.parentGroup"
              :items="ledgerGroupOptions.length ? ledgerGroupOptions : ledgerGroupOptions" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Parent Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
          </VForm>
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined" @click="
            showSubgroupDialog = false;
          subGroupFormRef?.resetValidation();
          " />
          <VBtn text="Add Sub-Group" class="account_v_btn_primary" @click="submitSubgroupForm" />
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
