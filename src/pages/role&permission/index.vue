<script setup>
import { ref } from 'vue'

const headers = [
  { title: 'Feature / Permission', value: 'feature', align: 'start' },
  { title: 'Admin', value: 'admin' },
  { title: 'Accountant', value: 'accountant' },
  { title: 'Auditor', value: 'auditor' },
]

const permissions = ref([
  { feature: 'Dashboard Access', admin: true, accountant: true, auditor: true },
  { feature: 'Customer Management', admin: true, accountant: true, auditor: false },
  { feature: 'Sales Invoices', admin: true, accountant: true, auditor: false },
  { feature: 'Purchase Bills', admin: true, accountant: true, auditor: false },
  { feature: 'Journal Entries', admin: true, accountant: true, auditor: false },
  { feature: 'View Reports', admin: true, accountant: true, auditor: true },
  { feature: 'Export Data', admin: true, accountant: true, auditor: true },
  { feature: 'User Management', admin: true, accountant: false, auditor: false },
  { feature: 'Company Settings', admin: true, accountant: false, auditor: false },
])

// Dialog and form state for Add New Role
const dialog = ref(false)
const roleName = ref('')
const permissionCategories = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Reporting', value: 'reporting' },
  { label: 'Sales', value: 'sales' },
  { label: 'Purchases', value: 'purchases' },
  { label: 'Accounting', value: 'accounting' },
  { label: 'Administration', value: 'administration' },
]
const selectedCategory = ref('dashboard')
const permissionOptions = {
  dashboard: [{ label: 'Dashboard Access', value: 'dashboard_access' }],
  reporting: [{ label: 'View Reports', value: 'view_reports' }, { label: 'Export Data', value: 'export_data' }],
  sales: [{ label: 'Sales Invoices', value: 'sales_invoices' }, { label: 'Customer Management', value: 'Customer Management' }],
  purchases: [{ label: 'Purchase Bills', value: 'purchase_bills' }],
  accounting: [{ label: 'Journal Entries', value: 'journal_entries' }],
  administration: [{ label: 'User Management', value: 'user_management' }, { label: 'Company Settings', value: 'company_settings' }],
}
const selectedPermissions = ref([])

function openAddRoleDialog() {
  dialog.value = true
  roleName.value = ''
  selectedCategory.value = 'dashboard'
  selectedPermissions.value = []
}
function closeAddRoleDialog() {
  dialog.value = false
}
function saveRole() {
  // Save logic here
  dialog.value = false
}

const bounceKey = ref(0)

onMounted(() => {
  setInterval(() => {
    bounceKey.value++ // force key change to retrigger animation
  }, 3000)
})
</script>

<template>
  <div class="d-flex align-center justify-space-between mb-4">
    <h1 class="user-title">User Role and Permission</h1>
  </div>

  <VCard title="Permission Matrix" subtitle="Manage what users can see and do in your organization."
    class="pa-2 mb-6 account_ui_vcard account_vcard_border">
    <div class="pa-2">
      <v-data-table-virtual :headers="headers" :items="permissions" class="custom-permission-table border "
        hide-default-footer>
        <template #headers>
          <tr>
            <th class="custom-header-cell">Feature / Permission</th>
            <th class="custom-header-cell text-center">
              <div class="header-col-flex">
                <span class="role-label">Admin</span>
                <div class="header-icon-row mt-2">
                  <component :is="$renderTablerIcon('edit')" style="font-size: 20px;" class="header-action-icon" />
                  <component :is="$renderTablerIcon('trash')" style="font-size: 20px;" class="header-action-icon ml-1" />
                </div>
              </div>
            </th>
            <th class="custom-header-cell text-center">
              <div class="header-col-flex">
                <span class="role-label">Accountant</span>
                <div class="header-icon-row mt-2">
                  <component :is="$renderTablerIcon('edit')" style="font-size: 20px;" class="header-action-icon" />
                  <component :is="$renderTablerIcon('trash')" style="font-size: 20px;" class="header-action-icon ml-1" />
                </div>
              </div>
            </th>
            <th class="custom-header-cell text-center">
              <div class="header-col-flex">
                <span class="role-label">Auditor</span>
                <div class="header-icon-row mt-2">
                  <component :is="$renderTablerIcon('edit')" style="font-size: 20px;" class="header-action-icon" />
                  <component :is="$renderTablerIcon('trash')" style="font-size: 20px;" class="header-action-icon ml-1" />
                </div>
              </div>
            </th>
          </tr>
        </template>
        <template #item="{ item }">
          <tr>
            <td>{{ item.feature }}</td>
            <td class="text-center">
              <component :is="$renderTablerIcon(item.admin ? 'check' : 'x')"
                :style="`font-size: 22px; color: ${item.admin ? '#16a34a' : '#ef4444'};`" />
            </td>
            <td class="text-center">
              <component :is="$renderTablerIcon(item.accountant ? 'check' : 'x')"
                :style="`font-size: 22px; color: ${item.accountant ? '#16a34a' : '#ef4444'};`" />
            </td>
            <td class="text-center">
              <component :is="$renderTablerIcon(item.auditor ? 'check' : 'x')"
                :style="`font-size: 22px; color: ${item.auditor ? '#16a34a' : '#ef4444'};`" />
            </td>
          </tr>
        </template>
      </v-data-table-virtual>
    </div>
  </VCard>


  <!-- Add New Role Dialog -->
  <v-dialog v-model="dialog" max-width="800">
    <v-card title="Create a New Role" subtitle="Define a new user role and assign specific permissions."
      class="account_ui_vcard account_vcard_border pa-2">
      <v-card-text>
        <div class="mb-4">
          <label class="account_label mb-2">Role Name</label>
          <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
            placeholder="e.g. Sales Manager" />
        </div>
        <div>
          <div class="font-weight-medium mb-1">Permissions</div>
          <div class="text-caption mb-2">Select the permissions this role should have.</div>
          <v-btn-toggle v-model="selectedCategory" class="mb-3 toggle-btn-section" mandatory>
            <v-btn v-for="cat in permissionCategories" :key="cat.value" :value="cat.value" size="small"
              :class="selectedCategory === cat.value ? 'account_v_btn_primary' : 'account_v_btn_ghost'"
              class="mx-1 rounded-sm" variant="elevated">{{ cat.label }}</v-btn>
          </v-btn-toggle>
          <v-list class="pa-0 border rounded-lg">
            <div class="d-flex ">
              <v-list-item v-for="perm in permissionOptions[selectedCategory]" :key="perm.value" class="pa-0 me-3 ms-2">
                <v-checkbox class="account_v_checkbox" v-model="selectedPermissions" :label="perm.label"
                  :value="perm.value" hide-details density="compact" />
              </v-list-item>
            </div>
          </v-list>
        </div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn class="account_v_btn_outlined" @click="closeAddRoleDialog">Cancel</v-btn>
        <VBtn class="account_v_btn_primary"> <v-icon size="15">mdi-content-save-settings-outline</v-icon> Save
        </VBtn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <VBtn @click="openAddRoleDialog" :key="bounceKey" class="account_add_new_btn bounce">
    <template #prepend>
      <component :is="$renderTablerIcon('circle-plus')" style="font-size: 20px; margin-right: 6px;" />
    </template>
    Add New Role
  </VBtn>

</template>




<style scoped>
.custom-permission-table {
  border-radius: 8px;
  overflow: hidden;
  min-width: 500px;
  /* padding: 10px 16px; */
}

.custom-header-cell {
  background: var(--acc-primary-color);
  color: var(--acc-text-white);
  font-weight: 600;
  font-size: 1.08rem;
  border-bottom: none !important;
  padding: 14px 12px;
}

.header-action-icon {
  vertical-align: middle;
  color: var(--acc-text-white);
  cursor: pointer;
}

/* Delete icon: error color */
.header-action-icon:last-child {
  color: var(--v-error-base, #f44336);
}

.header-col-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.header-icon-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
}

.custom-permission-table thead tr th {
  padding: 16px !important;
  font-size: 16px !important;
}

.role-label {
  color: var(--acc-text-white);
}

/* Style the active toggle button with your custom color */


.toggle-btn-category {
  background: #f3f4f6;
  border-radius: 8px;
  padding: 6px 8px;
  margin-bottom: 16px;
  display: inline-block;
}

.toggle-btn-category .v-btn {
  background: transparent !important;
  color: #374151 !important;
  border-radius: 6px !important;
  box-shadow: none !important;
  padding: 10px 20px !important;
}

.toggle-btn-category .v-btn.v-btn--active {
  background: var(--acc-primary-color) !important;
  color: var(--acc-text-white) !important;
  border-color: var(--acc-primary-color) !important;
}

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
