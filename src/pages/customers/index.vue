<script setup>
import { ref, computed, onMounted } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'


const formFields = ref([
  // Core Information
  { label: 'Name', key: 'name', visible: true },
  { label: 'Mobile', key: 'mobile', visible: true },
  { label: 'Opening Balance', key: 'openingBalance', visible: true },

  // Contact Details
  { label: 'Mailing Name', key: 'mailingName', visible: true },
  { label: 'Email', key: 'email', visible: true },
  { label: 'Address', key: 'address', visible: true },
  { label: 'State', key: 'state', visible: true },
  { label: 'Pincode', key: 'pincode', visible: true },
  { label: 'Country', key: 'country', visible: true },

  // Tax & Compliance
  { label: 'GSTIN/UIN', key: 'gstin', visible: true },
  { label: 'PAN', key: 'pan', visible: true },
  { label: 'Tax Registration Number', key: 'taxReg', visible: true },
  { label: 'TDS Applicable', key: 'tds', visible: true },

  // Financial Controls
  { label: 'Credit Limit', key: 'creditLimit', visible: true },
  { label: 'Credit Period (Days)', key: 'creditPeriod', visible: true },
  { label: 'Maintain Bill-wise Details', key: 'billWise', visible: true },

  // Banking Details
  { label: 'Bank Name', key: 'bankName', visible: true },
  { label: 'Account Number', key: 'accountNumber', visible: true },
  { label: 'IFSC Code', key: 'ifscCode', visible: true },

  // Additional Fields
  { label: 'Additional Country 1', key: 'addCountry1', visible: true },
  { label: 'Place of Supply', key: 'state', visible: true },
  { label: 'Ship-to Address', key: 'shipToAddress', visible: true },
]);

const isVisible = (key) => formFields.value.find(f => f.key === key)?.visible;

// Customer Headers
const customerHeaders = ref([
  { title: 'Customer Name', align: 'start', sortable: false, value: 'customerName', visible: true },
  { title: 'Customer Type', value: 'customerType', visible: true },
  { title: 'Total Orders', value: 'totalOrders', visible: true },
  { title: 'Last Order Date', value: 'lastOrderDate', visible: true },
  { title: 'Status', value: 'status', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
]);

// Generate 100 Customer Items
const customerItems = ref(Array.from({ length: 100 }, (_, index) => ({
  customerName: `Customer ${index + 1}`,
  customerEmail: `customer${index + 1}@test.com`,
  customerType: ['Individual', 'Business'][Math.floor(Math.random() * 2)],
  totalOrders: Math.floor(Math.random() * 20),
  lastOrderDate: `2025-${String(Math.floor(Math.random() * 6) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
  status: ['Active', 'Pending', 'Inactive'][Math.floor(Math.random() * 3)],
})));

// Filters
const customerFilters = ref([
  { title: 'Status', checked: false },
  { title: 'Customer Type', checked: false },
  { title: 'Last Order From', checked: false },
  { title: 'Last Order To', checked: false },
]);

// Dropdown Items
const customerStatusItems = ref([
  { title: 'Active', value: 'Active' },
  { title: 'Pending', value: 'Pending' },
  { title: 'Inactive', value: 'Inactive' },
]);

const customerTypeItems = ref([
  { title: 'Individual', value: 'Individual' },
  { title: 'Business', value: 'Business' },
]);

// Widget Summary
const customerWidgetData = computed(() => ({
  totalRecords: customerItems.value.length,
  avgSale: customerItems.value.reduce((sum, item) => sum + item.totalOrders * 100, 0) / customerItems.value.length,
  top10AvgSale: customerItems.value
    .sort((a, b) => b.totalOrders - a.totalOrders)
    .slice(0, Math.ceil(customerItems.value.length * 0.1))
    .reduce((sum, item) => sum + item.totalOrders * 100, 0) / Math.ceil(customerItems.value.length * 0.1),
  avgRating: 4.2,
}));

const addNewCustomerVisible = ref(false);

const showAddCustomerForm = () => {
  addNewCustomerVisible.value = !addNewCustomerVisible.value;
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
  <div class="account_customers_list">
    <VSlideYTransition mode="in-out">
      <VRow v-if="addNewCustomerVisible" class="justify-center">
        <VCol cols="8">
          <div class="account_ui_vcard">
            <VCard title="Create a New Customer" class="pa-2 account_vcard_border"
              subtitle="Fill in the details below to add a new customer to your records.">
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
                  <VBtn @click="showAddCustomerForm" icon="mdi-close" variant="text" size="x-small" rounded=""
                    class="account_vcard_close_btn" />
                </div>
              </template>
              <VCardText>
                <VRow>
                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Core Information</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>
                  <VCol v-if="isVisible('name')" cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Name (Mandatory)</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Customer's Full Name or Company Name" />
                  </VCol>
                  <VCol v-if="isVisible('mobile')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Mobile</label>
                    <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                      density="compact" placeholder="9876543210" />
                  </VCol>
                  <VCol v-if="isVisible('openingBalance')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Opening Balance</label>
                    <div class="custom_option d-flex align-center">
                      <VTextField class="custom_option_field accouting_field accouting_active_field" type="number"
                        variant="outlined" density="compact" placeholder="0" />
                      <VSelect class="custom_option_select accouting_field accouting_active_field"
                        v-model="selectedBalanceType" :items="balanceTypeList" variant="outlined" density="comapct" />
                    </div>
                  </VCol>
                  <!-- <VCol cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Balance Type</label>
                    <v-radio-group class="accounting_v_radio" inline>
                      <v-radio class="mr-3" label="Debit" value="debit"></v-radio>
                      <v-radio label="Credit" value="credit"></v-radio>
                    </v-radio-group>
                  </VCol> -->

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Contact Details</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>

                  <VCol v-if="isVisible('mailingName')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Mailing Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Name for correspondence" />
                  </VCol>
                  <VCol v-if="isVisible('email')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Email</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="customer@example.com" />
                  </VCol>

                  <VCol v-if="isVisible('address')" cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Address</label>
                    <VTextarea class="accounting_v_textarea" placeholder="Full address" variant="outlined" />
                  </VCol>
                  <VCol v-if="isVisible('state')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">State</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="Select an item" />
                  </VCol>
                  <VCol v-if="isVisible('pincode')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Pincode</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="e.g. 400001" />
                  </VCol>
                  <VCol v-if="isVisible('country')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Country</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="India" />
                  </VCol>

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Tax & Compliance</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>

                  <VCol v-if="isVisible('gstin')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">GSTIN/UIN</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="15-digit GSTIN" />
                  </VCol>
                  <VCol v-if="isVisible('pan')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">PAN</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="15-digit PAN" />
                  </VCol>
                  <VCol v-if="isVisible('taxReg')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Tax Registration Number</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="If applicable" />
                  </VCol>
                  <VCol v-if="isVisible('tds')" class="d-flex align-center" cols="12" lg="6" md="6">
                    <VCheckbox density="compact" class="account_v_checkbox" label="TDS Applicable" />
                  </VCol>

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Financial Controls</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>

                  <VCol v-if="isVisible('creditLimit')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Credit Limit</label>
                    <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                      density="compact" placeholder="0" />
                  </VCol>
                  <VCol v-if="isVisible('creditPeriod')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Credit Period (Days)</label>
                    <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                      density="compact" placeholder="0" />
                  </VCol>
                  <VCol v-if="isVisible('billWise')" class="d-flex align-center" cols="12" lg="6" md="6">
                    <VCheckbox density="compact" class="account_v_checkbox" label="Maintain Bill-wise Details" />
                  </VCol>

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Banking Details</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>

                  <VCol v-if="isVisible('bankName')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Bank Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="e.g. HDFC Bank" />
                  </VCol>
                  <VCol v-if="isVisible('accountNumber')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Account Number</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Bank Account Number" />
                  </VCol>
                  <VCol v-if="isVisible('ifscCode')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">IFSC Code</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="e.g. HDFC0000001" />
                  </VCol>

                  <VCol cols="12" class="pb-0">
                    <h5 class="account_form_info_hdng">Additional Fields</h5>
                    <VDivider class="mb-2 mt-1" />
                  </VCol>

                  <VCol v-if="isVisible('addCountry1')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Country</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="India" />
                  </VCol>

                  <VCol v-if="isVisible('state')" cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Place of Supply</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="State" />
                  </VCol>

                  <VCol v-if="isVisible('shipToAddress')" cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Ship-to Address</label>
                    <VTextarea class="accounting_v_textarea" placeholder="Optional delivery address"
                      variant="outlined" />
                    <div class="d-flex align-center justify-end mt-4">
                      <VBtn class="account_v_btn_primary" prepend-icon="mdi-content-save-outline">Save Customer</VBtn>
                    </div>
                  </VCol>

                </VRow>
              </VCardText>
            </VCard>
          </div>
        </VCol>
      </VRow>
    </VSlideYTransition>
    <VRow>
      <VCol cols="12">
        <DynamicDataTable :headers="customerHeaders" :items="customerItems" :filters="customerFilters" title="Customer"
          :status-items="customerStatusItems" :account-type-items="customerTypeItems" :currency-items="[]"
          :widgets="customerWidgetData" />
      </VCol>
    </VRow>
    <VBtn @click="showAddCustomerForm" :key="vibrateKey" class="account_add_new_btn vibrate"
      prepend-icon="mdi-plus-circle-outline">Add Customer
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
