<script setup>
import { ref, computed, onMounted } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';

const formFields = ref([
  { section: 'Basic Information', label: 'First Name', key: 'firstName', visible: true },
  { section: 'Basic Information', label: 'Last Name', key: 'lastName', visible: true },
  { section: 'Basic Information', label: 'Company Name', key: 'companyName', visible: true },
  { section: 'Contact Details', label: 'Email Address', key: 'email', visible: true },
  { section: 'Contact Details', label: 'Phone Number', key: 'phone', visible: true },
  { section: 'Address & Tax', label: 'Street Address', key: 'streetAddress', visible: true },
  { section: 'Address & Tax', label: 'City', key: 'city', visible: true },
  { section: 'Address & Tax', label: 'State', key: 'state', visible: true },
  { section: 'Address & Tax', label: 'ZIP Code', key: 'zipCode', visible: true },
  { section: 'Address & Tax', label: 'GSTIN (Optional)', key: 'gstin', visible: true },
]);

// Group fields by section
const sectionedFields = computed(() => {
  const sections = {};
  formFields.value.forEach(field => {
    if (!sections[field.section]) sections[field.section] = [];
    sections[field.section].push(field);
  });
  return sections;
});

// Section toggle helpers
const isSectionVisible = (section) => {
  const fields = sectionedFields.value[section];
  return fields.every(f => f.visible);
};
const toggleSection = (section) => {
  const fields = sectionedFields.value[section];
  const allVisible = fields.every(f => f.visible);
  fields.forEach(f => { f.visible = !allVisible; });
};

// Helper to check if any field in a section is visible
const isAnyFieldVisible = (section) => {
  return formFields.value.some(f => f.section === section && f.visible);
};

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

const bounceKey = ref(0)

onMounted(() => {
  setInterval(() => {
    bounceKey.value++ // force key change to retrigger animation
  }, 3000)
})
</script>

<template>
  <div class="account_vendors_list">
    <VSlideYTransition mode="in-out">
      <VRow v-if="addNewVendorVisible" class="justify-center">
        <VCol cols="12">
          <div class="account_ui_vcard">
            <VCard title="Create a New Vendor" class="pa-2 account_vcard_border"
              subtitle="Fill in the details below to add a new vendor to your records.">
              <template #append>
                <div class="d-flex align-center gap-2">
                  <VMenu location="start" transition="slide-y-transition" offset-y :close-on-content-click="false">
                    <template #activator="{ props }">
                      <VBtn v-bind="props" variant="text" size="x-small" rounded="">
                        <component :is="renderTablerIcon('settings')" style="font-size: 20px;" />
                      </VBtn>
                    </template>
                    <VCard class="account_vcard_menu account_vcard_border" width="250px">
                      <div class="account_vcard_menu_hdng">Show/Hide Optional Fields</div>
                      <VDivider class="my-1 mt-0" />
                      <div class="account_vcard_menu_items py-1">
                        <div v-for="(fields, section) in sectionedFields" :key="section">
                          <div class="field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                               @click="toggleSection(section)">
                            <component :is="renderTablerIcon(isSectionVisible(section) ? 'check' : 'square')" style="font-size: 16px;" />
                            <span class="font-weight-bold">{{ section }}</span>
                          </div>
                          <div v-for="field in fields" :key="field.key" class="account_vcard_menu_item" style="padding-left: 10px;">
                            <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                                 @click.stop="field.visible = !field.visible">
                              <component v-if="field.visible" :is="renderTablerIcon('check')" style="font-size: 16px;" />
                              <span :class="field.visible ? '' : 'field_list_dynamic_ml'">{{ field.label }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </VCard>
                  </VMenu>
                  <VBtn @click="showAddVendorForm" variant="text" size="x-small" rounded=""
                    class="account_vcard_close_btn">
                    <component :is="renderTablerIcon('x')" style="font-size: 20px;" />
                  </VBtn>
                </div>
              </template>
              <VCardText>
                <VRow>
                  <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Basic Information')">
                    <h5 class="account_form_info_hdng">Basic Information</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>
                  <VCol v-if="isVisible('firstName')" cols="12" lg="4" md="4">
                    <label class="account_label mb-2">First Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="John" />
                  </VCol>
                  <VCol v-if="isVisible('lastName')" cols="12" lg="4" md="4">
                    <label class="account_label mb-2">Last Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Doe" />
                  </VCol>
                  <VCol v-if="isVisible('companyName')" cols="12" lg="4" md="4">
                    <label class="account_label mb-2">Company Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Innovate Inc." />
                  </VCol>

                  <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Contact Details')">
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

                  <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Address & Tax')">
                    <h5 class="account_form_info_hdng">Address & Tax</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>
                  <VCol v-if="isVisible('streetAddress')" cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Street Address</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="123 Main St" />
                  </VCol>
                  <VCol v-if="isVisible('city')" cols="12" lg="3" md="3">
                    <label class="account_label mb-2">City</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Mumbai" />
                  </VCol>
                  <VCol v-if="isVisible('state')" cols="12" lg="3" md="3">
                    <label class="account_label mb-2">State</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Select a state" />
                  </VCol>
                  <VCol v-if="isVisible('zipCode')" cols="12" lg="3" md="3">
                    <label class="account_label mb-2">ZIP Code</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="400001" />
                  </VCol>
                  <VCol v-if="isVisible('gstin')" cols="12" lg="3" md="3">
                    <label class="account_label mb-2">GSTIN (Optional)</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="15-digit GST Identification Number" />
                  </VCol>
                </VRow>
              </VCardText>
              <VCardActions class="justify-end">
                <VBtn color="success" class="account_v_btn_primary">
                  <template #prepend>
                    <component :is="renderTablerIcon('device-floppy')" style="font-size: 20px; margin-right: 6px;" />
                  </template>
                  Save Vendor
                </VBtn>
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
    <VBtn @click="showAddVendorForm" :key="bounceKey" class="account_add_new_btn bounce">
      <template #prepend>
        <component :is="renderTablerIcon('circle-plus')" style="font-size: 20px; margin-right: 6px;" />
      </template>
      Add Vendor
    </VBtn>
  </div>
</template>

<style scoped>
@keyframes bounce {
  0%, 100% {
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
