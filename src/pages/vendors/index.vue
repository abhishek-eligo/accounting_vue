<script setup>
import { ref, computed, onMounted } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'

const formFields = ref([
  { label: 'First Name', key: 'firstName', visible: true },
  { label: 'Last Name', key: 'lastName', visible: true },
  { label: 'Company Name', key: 'companyName', visible: true },
  { label: 'Email Address', key: 'email', visible: true },
  { label: 'Phone Number', key: 'phone', visible: true },
  { label: 'Street Address', key: 'streetAddress', visible: true },
  { label: 'City', key: 'city', visible: true },
  { label: 'State', key: 'state', visible: true },
  { label: 'ZIP Code', key: 'zipCode', visible: true },
  { label: 'GSTIN (Optional)', key: 'gstin', visible: true },
]);

const isVisible = (key) => formFields.value.find(f => f.key === key)?.visible;


// Vendor Headers
const vendorHeaders = ref([
  { title: 'Vendor Name', align: 'start', sortable: false, value: 'vendorName', visible: true },
  { title: 'Vendor Type', value: 'vendorType', visible: true },
  { title: 'Total Purchases', value: 'totalPurchases', visible: true },
  { title: 'Last Purchase Date', value: 'lastPurchaseDate', visible: true },
  { title: 'Status', value: 'status', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
]);

// Generate 100 Vendor Items
const vendorItems = ref(Array.from({ length: 100 }, (_, index) => ({
  vendorName: `Vendor ${index + 1}`,
  vendorEmail: `vendor${index + 1}@test.com`,
  vendorType: ['Supplier', 'Manufacturer'][Math.floor(Math.random() * 2)],
  totalPurchases: Math.floor(Math.random() * 20),
  lastPurchaseDate: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
  status: ['Active', 'Pending', 'Inactive'][Math.floor(Math.random() * 3)],
})));

// Filters
const vendorFilters = ref([
  { title: 'Status', checked: false },
  { title: 'Vendor Type', checked: false },
  { title: 'Last Purchase From', checked: false },
  { title: 'Last Purchase To', checked: false },
]);

// Dropdown Items
const vendorStatusItems = ref([
  { title: 'Active', value: 'Active' },
  { title: 'Pending', value: 'Pending' },
  { title: 'Inactive', value: 'Inactive' },
]);

const vendorTypeItems = ref([
  { title: 'Supplier', value: 'Supplier' },
  { title: 'Manufacturer', value: 'Manufacturer' },
]);

// Widget Summary
const vendorWidgetData = computed(() => ({
  totalRecords: vendorItems.value.length,
  avgPurchase: vendorItems.value.reduce((sum, item) => sum + item.totalPurchases * 100, 0) / vendorItems.value.length,
  top10AvgPurchase: vendorItems.value
    .sort((a, b) => b.totalPurchases - a.totalPurchases)
    .slice(0, Math.ceil(vendorItems.value.length * 0.1))
    .reduce((sum, item) => sum + item.totalPurchases * 100, 0) / Math.ceil(vendorItems.value.length * 0.1),
  avgRating: 4.2,
}));

const addNewVendorVisible = ref(false);

const showAddVendorForm = () => {
  addNewVendorVisible.value = !addNewVendorVisible.value;
}

const balanceTypeList = ref([
  { title: 'Credit', value: 'credit' },
  { title: 'Debit', value: 'debit' },
]);

const selectedBalanceType = ref('credit');

const vibrateKey = ref(0)

onMounted(() => {
  setInterval(() => {
    vibrateKey.value++ // force key change to retrigger animation
  }, 3000)
})
</script>

<template>
  <div class="account_vendors_list">
    <VSlideYTransition mode="in-out">
      <VRow v-if="addNewVendorVisible" class="justify-center">
        <VCol cols="8">
          <div class="account_ui_vcard">
            <VCard title="Create a New Vendor" class="pa-2 account_vcard_border"
              subtitle="Fill in the details below to add a new vendor to your records.">
              <template #append>
                <div class="d-flex align-center gap-2">
                  <VMenu location="start" transition="slide-y-transition" offset-y :close-on-content-click="false">
                    <template #activator="{ props }">
                      <VBtn v-bind="props" icon="mdi-cog-outline" variant="text" size="x-small" rounded="" />
                    </template>
                    <VCard class="account_vcard_menu account_vcard_border">
                      <div class="account_vcard_menu_hdng">Show/Hide Optional Fields</div>
                      <VDivider class="my-1 mt-0" />
                      <div class="account_vcard_menu_items py-1">
                        <div v-for="field in formFields" :key="field.key" class="account_vcard_menu_item"
                          @click="field.visible = !field.visible">
                          <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                            <VIcon v-if="field.visible" size="16" icon="mdi-check" />
                            <span :class="field.visible ? '' : 'field_list_dynamic_ml'">{{ field.label }}</span>
                          </div>
                        </div>
                      </div>
                    </VCard>
                  </VMenu>
                  <VBtn @click="showAddVendorForm" icon="mdi-close" variant="text" size="x-small" rounded=""
                    class="account_vcard_close_btn" />
                </div>
              </template>
              <VCardText>
                <VRow>
                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Basic Information</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>
                  <VCol v-if="isVisible('firstName')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">First Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="John" />
                  </VCol>
                  <VCol v-if="isVisible('lastName')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Last Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Doe" />
                  </VCol>
                  <VCol v-if="isVisible('companyName')" cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Company Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Innovate Inc." />
                  </VCol>

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Contact Details</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>
                  <VCol v-if="isVisible('email')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Email Address</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="john.doe@example.com" />
                  </VCol>
                  <VCol v-if="isVisible('phone')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Phone Number</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="(123) 456-7890" />
                  </VCol>

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Address & Tax</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>
                  <VCol v-if="isVisible('streetAddress')" cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Street Address</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="123 Main St" />
                  </VCol>
                  <VCol v-if="isVisible('city')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">City</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Mumbai" />
                  </VCol>
                  <VCol v-if="isVisible('state')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">State</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Select a state" />
                  </VCol>
                  <VCol v-if="isVisible('zipCode')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">ZIP Code</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="400001" />
                  </VCol>
                  <VCol v-if="isVisible('gstin')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">GSTIN (Optional)</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="15-digit GST Identification Number" />
                  </VCol>
                </VRow>
              </VCardText>
              <VCardActions class="justify-end">
                <VBtn color="success" class="account_v_btn_primary" prepend-icon="mdi-content-save">Save Vendor</VBtn>
              </VCardActions>
            </VCard>
          </div>
        </VCol>
      </VRow>
    </VSlideYTransition>
    <VRow>
      <VCol cols="12">
        <DynamicDataTable :headers="vendorHeaders" :items="vendorItems" :filters="vendorFilters" title="Vendor"
          :status-items="vendorStatusItems" :account-type-items="vendorTypeItems" :currency-items="[]"
          :widgets="vendorWidgetData" />
      </VCol>
    </VRow>
    <VBtn @click="showAddVendorForm" :key="vibrateKey" class="account_add_new_btn vibrate"
      prepend-icon="mdi-plus-circle-outline">Add Vendor
    </VBtn>
  </div>
</template>

<style scoped>
@keyframes vibrate {
  0% {
    transform: translate(0, 0);
  }

  10% {
    transform: translate(-2px, 2px);
  }

  20% {
    transform: translate(-2px, -2px);
  }

  30% {
    transform: translate(2px, 2px);
  }

  40% {
    transform: translate(2px, -2px);
  }

  50% {
    transform: translate(-3px, 3px);
  }

  60% {
    transform: translate(3px, -3px);
  }

  70% {
    transform: translate(-2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  90% {
    transform: translate(-1px, 1px);
  }

  100% {
    transform: translate(0, 0);
  }
}

.vibrate {
  animation: vibrate 0.3s linear;
}
</style>
