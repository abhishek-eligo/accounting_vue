<script setup>
import { ref, computed, onMounted } from 'vue'
// import DynamicDataTable from '@/components/DynamicDataTable.vue'
// import AccountCustomerPortfolio from './AccountCustomerPortfolio.vue'
// import '../../main.css';
// import { $renderTablerIcon } from '@/helpers/tablerIconHelper.js';

const formFields = ref([
  // Core Information
  { section: 'Core Information', label: 'GSTIN/UIN', key: 'gstin', visible: true },
  { section: 'Core Information', label: 'Name', key: 'name', visible: true },
  { section: 'Core Information', label: 'Mobile', key: 'mobile', visible: true },
  { section: 'Core Information', label: 'Opening Balance', key: 'openingBalance', visible: true },

  // Contact Details
  { section: 'Contact Details', label: 'Mailing Name', key: 'mailingName', visible: true },
  { section: 'Contact Details', label: 'Email', key: 'email', visible: true },
  { section: 'Contact Details', label: 'Address', key: 'address', visible: true },
  { section: 'Contact Details', label: 'State', key: 'state', visible: true },
  { section: 'Contact Details', label: 'Pincode', key: 'pincode', visible: true },
  { section: 'Contact Details', label: 'Country', key: 'country', visible: true },

  // Tax & Compliance
  { section: 'Tax & Compliance', label: 'PAN', key: 'pan', visible: true },
  { section: 'Tax & Compliance', label: 'Tax Registration Number', key: 'taxReg', visible: true },
  { section: 'Tax & Compliance', label: 'TDS Applicable', key: 'tds', visible: true },

  // Financial Controls
  { section: 'Financial Controls', label: 'Credit Limit', key: 'creditLimit', visible: true },
  { section: 'Financial Controls', label: 'Credit Period (Days)', key: 'creditPeriod', visible: true },
  { section: 'Financial Controls', label: 'Maintain Bill-wise Details', key: 'billWise', visible: true },

  // Banking Details
  { section: 'Banking Details', label: 'Bank Name', key: 'bankName', visible: true },
  { section: 'Banking Details', label: 'Account Number', key: 'accountNumber', visible: true },
  { section: 'Banking Details', label: 'IFSC Code', key: 'ifscCode', visible: true },

  // Additional Fields
  { section: 'Additional Fields', label: 'Additional Country 1', key: 'addCountry1', visible: true },
  { section: 'Additional Fields', label: 'Place of Supply', key: 'state', visible: true },
  { section: 'Additional Fields', label: 'Ship-to Address', key: 'shipToAddress', visible: true },
]);

const statesList = ref([
  { title: 'Andhra Pradesh', value: 'Andhra Pradesh' },
  { title: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
  { title: 'Assam', value: 'Assam' },
  { title: 'Bihar', value: 'Bihar' },
  { title: 'Chhattisgarh', value: 'Chhattisgarh' },
  { title: 'Goa', value: 'Goa' },
  { title: 'Gujarat', value: 'Gujarat' },
  { title: 'Haryana', value: 'Haryana' },
  { title: 'Himachal Pradesh', value: 'Himachal Pradesh' },
  { title: 'Jharkhand', value: 'Jharkhand' },
  { title: 'Karnataka', value: 'Karnataka' },
  { title: 'Kerala', value: 'Kerala' },
  { title: 'Madhya Pradesh', value: 'Madhya Pradesh' },
  { title: 'Maharashtra', value: 'Maharashtra' },
  { title: 'Manipur', value: 'Manipur' },
  { title: 'Meghalaya', value: 'Meghalaya' },
  { title: 'Mizoram', value: 'Mizoram' },
  { title: 'Nagaland', value: 'Nagaland' },
  { title: 'Odisha', value: 'Odisha' },
  { title: 'Punjab', value: 'Punjab' },
  { title: 'Rajasthan', value: 'Rajasthan' },
  { title: 'Sikkim', value: 'Sikkim' },
  { title: 'Tamil Nadu', value: 'Tamil Nadu' },
  { title: 'Telangana', value: 'Telangana' },
  { title: 'Tripura', value: 'Tripura' },
  { title: 'Uttar Pradesh', value: 'Uttar Pradesh' },
  { title: 'Uttarakhand', value: 'Uttarakhand' },
  { title: 'West Bengal', value: 'West Bengal' },
  { title: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
  { title: 'Chandigarh', value: 'Chandigarh' },
  { title: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra and Nagar Haveli and Daman and Diu' },
  { title: 'Delhi', value: 'Delhi' },
  { title: 'Jammu and Kashmir', value: 'Jammu and Kashmir' },
  { title: 'Ladakh', value: 'Ladakh' },
  { title: 'Lakshadweep', value: 'Lakshadweep' },
  { title: 'Puducherry', value: 'Puducherry' }
])

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

const bounceKey = ref(0)

// Component visibility state
const showCustomerPortfolio = ref(false)
const selectedCustomer = ref(null)

// Handle view customer action
const handleViewCustomer = (customer) => {
  selectedCustomer.value = customer
  showCustomerPortfolio.value = true
}

// Handle back to list
const handleBackToList = () => {
  showCustomerPortfolio.value = false
  selectedCustomer.value = null
}

const formData = ref({
  gstin: '',
  name: '',
  mobile: '',
  openingBalance: '',
  mailingName: '',
  email: '',
  address: '',
  state: '',
  pincode: '',
  country: '',
  pan: '',
  taxReg: '',
  tds: false,
  creditLimit: '',
  creditPeriod: '',
  billWise: false,
  bankName: '',
  accountNumber: '',
  ifscCode: '',
  addCountry1: '',
  shipToAddress: '',
})

const dummyData = {
  gstin: '02ABCDE1234F1Z5',
  name: 'Dummy Company Ltd',
  mobile: '9876543210',
  openingBalance: '1000',
  mailingName: 'Dummy Mailing',
  email: 'dummy@example.com',
  address: '123 Dummy Street, Dummy City',
  state: 'Delhi',
  pincode: '110001',
  country: 'India',
  pan: 'ABCDE1234F',
  taxReg: '123456789',
  tds: true,
  creditLimit: '50000',
  creditPeriod: '30',
  billWise: true,
  bankName: 'Dummy Bank',
  accountNumber: '123456789012',
  ifscCode: 'DUMY0000001',
  addCountry1: 'India',
  shipToAddress: '456 Ship Street, Dummy City',
  selectedBalanceType: 'credit'
}

const dynamicHint = ref('02ABCDE1234F1Z5')
const gstinLoading = ref(false)
const gstinSuccess = ref(false)
const appendBtnVisible = ref(true)
const isGstinFocused = ref(false)

const fetchGstinData = () => {
  if (!formData.value.gstin) return
  gstinLoading.value = true
  setTimeout(() => {
    gstinLoading.value = false
    if (formData.value.gstin === '02ABCDE1234F1Z5') {
      gstinSuccess.value = true
      Object.keys(dummyData).forEach(key => {
        if (key !== 'gstin' && key !== 'selectedBalanceType') {
          formData.value[key] = dummyData[key]
        }
      })
      selectedBalanceType.value = dummyData.selectedBalanceType
    } else {
      appendBtnVisible.value = false
      dynamicHint.value = 'No data found for this GSTIN/UIN'
    }
  }, 1000)
}

const resetGstinSearch = () => {
  gstinSuccess.value = false
  if (!appendBtnVisible.value) {
    appendBtnVisible.value = true
    dynamicHint.value = '02ABCDE1234F1Z5'
  }
}

onMounted(() => {
  setInterval(() => {
    bounceKey.value++ // force key change to retrigger animation
  }, 3000)
})
</script>
<template>
  <div class="account_customers_list">
    <!-- Customer Portfolio View -->
    <VExpandTransition>
      <div v-if="showCustomerPortfolio">
        <VRow>
          <VCol cols="12">
            <div class="d-flex align-center gap-2 mb-4">
              <VBtn @click="handleBackToList" variant="text" class="account_v_btn_outlined">
                <template #prepend>
                  <IconArrowLeft size="20" />
                </template>
                Back to Customer List
              </VBtn>
            </div>
            <AccountCustomerPortfolio />
          </VCol>
        </VRow>
      </div>
    </VExpandTransition>

    <!-- Customer List View -->
    <VExpandTransition>
      <div v-if="!showCustomerPortfolio">
        <VRow v-if="addNewCustomerVisible" class="justify-center">
          <VCol cols="12">
            <div class="account_ui_vcard">
              <VCard title="Create a New Customer" class="pa-2 account_vcard_border"
                subtitle="Fill in the details below to add a new customer to your records.">
                <template #append>
                  <div class="d-flex align-center gap-2">
                    <VMenu location="start" transition="slide-y-transition" offset-y :close-on-content-click="false">
                      <template #activator="{ props }">
                        <VBtn v-bind="props" variant="text" size="x-small" rounded="">
                          <IconSettings size="20" />
                        </VBtn>
                      </template>
                      <VCard class="account_vcard_menu account_vcard_border" width="250px">
                        <div class="account_vcard_menu_hdng">Show/Hide Optional Fields</div>
                        <VDivider class="my-1 mt-0" />
                        <div class="account_vcard_menu_items py-1">
                          <div v-for="(fields, section) in sectionedFields" :key="section">
                            <div class="field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                              @click="toggleSection(section)">
                              <IconCheck v-if="isSectionVisible(section)" size="20" />
                              <IconSquare v-else size="20" />
                              <span class="font-weight-bold">{{ section }}</span>
                            </div>
                            <div v-for="field in fields" :key="field.key" class="account_vcard_menu_item"
                              style="padding-left: 10px;">
                              <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                                @click.stop="field.visible = !field.visible">
                                <IconCheck v-if="field.visible" size="20" />
                                <span :class="field.visible ? '' : 'field_list_dynamic_ml'">{{ field.label }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </VCard>
                    </VMenu>
                    <VBtn @click="showAddCustomerForm" variant="text" size="x-small" rounded=""
                      class="account_vcard_close_btn">
                      <IconX size="20" />
                    </VBtn>
                  </div>
                </template>
                <VCardText>
                  <VRow>
                    <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Core Information')">
                      <h5 class="account_form_info_hdng">Core Information</h5>
                      <VDivider class="mb-2 mt-1" />
                    </VCol>
                    <VCol v-if="isVisible('gstin')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">GSTIN/UIN</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        @focus="isGstinFocused = true" @blur="isGstinFocused = false" placeholder="15-digit GSTIN" v-model="formData.gstin"
                        @input="resetGstinSearch">
                        <template #append>
                          <VSlideXReverseTransition mode="out-in">
                            <VBtn v-if="appendBtnVisible" class="account_v_btn_outlined" rounded="1" size="default"
                              :loading="gstinLoading" @click="fetchGstinData">
                              <IconCircleArrowRight v-if="!gstinSuccess" size="20" />
                              <IconCircleDashedCheck v-else size="20" />
                            </VBtn>
                          </VSlideXReverseTransition>
                        </template>
                      </VTextField>
                      <VSlideYReverseTransition mode="out-in">
                        <small v-if="isGstinFocused || !appendBtnVisible" class="account_primary_color">{{ dynamicHint }}</small>
                      </VSlideYReverseTransition>
                    </VCol>
                    <VCol v-if="isVisible('name')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Name (Mandatory)</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        hint="02ABCDE1234F1Z5" placeholder="Customer's Full Name or Company Name"
                        v-model="formData.name" />
                    </VCol>
                    <VCol v-if="isVisible('mobile')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Mobile</label>
                      <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                        density="compact" placeholder="9876543210" v-model="formData.mobile" />
                    </VCol>
                    <VCol v-if="isVisible('openingBalance')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Opening Balance</label>
                      <div class="custom_option align-center">
                        <VTextField class="custom_option_field accouting_field accouting_active_field" type="number"
                          variant="outlined" density="compact" placeholder="0" v-model="formData.openingBalance" />
                        <VSelect class="custom_option_select accouting_field accouting_active_field"
                          v-model="selectedBalanceType" :items="balanceTypeList" variant="outlined" density="compact" />
                      </div>
                    </VCol>

                    <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Contact Details')">
                      <h5 class="account_form_info_hdng">Contact Details</h5>
                      <VDivider class="mb-2 mt-1" />
                    </VCol>

                    <VCol v-if="isVisible('mailingName')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Mailing Name</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Name for correspondence" v-model="formData.mailingName" />
                    </VCol>
                    <VCol v-if="isVisible('email')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Email</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="customer@example.com" v-model="formData.email" />
                    </VCol>

                    <VCol v-if="isVisible('address')" cols="12" lg="12" md="12">
                      <label class="account_label mb-2">Address</label>
                      <VTextarea class="accounting_v_textarea" placeholder="Full address" variant="outlined"
                        v-model="formData.address" />
                    </VCol>
                    <VCol v-if="isVisible('state')" cols="12" lg="4" md="4">
                      <label class="account_label mb-2">State</label>
                      <VSelect class="accouting_field accouting_active_field" variant="outlined" :items="statesList"
                        placeholder="Select State" v-model="formData.state" />
                    </VCol>
                    <VCol v-if="isVisible('pincode')" cols="12" lg="4" md="4">
                      <label class="account_label mb-2">Pincode</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="e.g. 400001" v-model="formData.pincode" />
                    </VCol>
                    <VCol v-if="isVisible('country')" cols="12" lg="4" md="4">
                      <label class="account_label mb-2">Country</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="India" v-model="formData.country" />
                    </VCol>

                    <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Tax & Compliance')">
                      <h5 class="account_form_info_hdng">Tax & Compliance</h5>
                      <VDivider class="mb-2 mt-1" />
                    </VCol>

                    <VCol v-if="isVisible('pan')" cols="12" lg="4" md="4">
                      <label class="account_label mb-2">PAN</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="15-digit PAN" v-model="formData.pan" />
                    </VCol>
                    <VCol v-if="isVisible('taxReg')" cols="12" lg="4" md="4">
                      <label class="account_label mb-2">Tax Registration Number</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="If applicable" v-model="formData.taxReg" />
                    </VCol>
                    <VCol v-if="isVisible('tds')" class="d-flex align-center" cols="12" lg="12" md="12">
                      <VCheckbox density="compact" class="account_v_checkbox" label="TDS Applicable"
                        v-model="formData.tds" />
                    </VCol>

                    <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Financial Controls')">
                      <h5 class="account_form_info_hdng">Financial Controls</h5>
                      <VDivider class="mb-2 mt-1" />
                    </VCol>

                    <VCol v-if="isVisible('creditLimit')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Credit Limit</label>
                      <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                        density="compact" placeholder="0" v-model="formData.creditLimit" />
                    </VCol>
                    <VCol v-if="isVisible('creditPeriod')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Credit Period (Days)</label>
                      <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                        density="compact" placeholder="0" v-model="formData.creditPeriod" />
                    </VCol>
                    <VCol v-if="isVisible('billWise')" class="d-flex align-center" cols="12" lg="6" md="6">
                      <VCheckbox density="compact" class="account_v_checkbox" label="Maintain Bill-wise Details"
                        v-model="formData.billWise" />
                    </VCol>

                    <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Banking Details')">
                      <h5 class="account_form_info_hdng">Banking Details</h5>
                      <VDivider class="mb-2 mt-1" />
                    </VCol>

                    <VCol v-if="isVisible('bankName')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Bank Name</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="e.g. HDFC Bank" v-model="formData.bankName" />
                    </VCol>
                    <VCol v-if="isVisible('accountNumber')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Account Number</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Bank Account Number" v-model="formData.accountNumber" />
                    </VCol>
                    <VCol v-if="isVisible('ifscCode')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">IFSC Code</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="e.g. HDFC0000001" v-model="formData.ifscCode" />
                    </VCol>

                    <VCol cols="12" class="pb-0" v-if="isAnyFieldVisible('Additional Fields')">
                      <h5 class="account_form_info_hdng">Additional Fields</h5>
                      <VDivider class="mb-2 mt-1" />
                    </VCol>

                    <VCol v-if="isVisible('addCountry1')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Country</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="India" v-model="formData.addCountry1" />
                    </VCol>

                    <VCol v-if="isVisible('state')" cols="12" lg="6" md="6">
                      <label class="account_label mb-2">Place of Supply</label>
                      <VSelect class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        :items="statesList" placeholder="Select State" v-model="formData.state" />
                    </VCol>

                    <VCol v-if="isVisible('shipToAddress')" cols="12" lg="12" md="12">
                      <label class="account_label mb-2">Ship-to Address</label>
                      <VTextarea class="accounting_v_textarea" placeholder="Optional delivery address"
                        variant="outlined" v-model="formData.shipToAddress" />
                      <div class="d-flex align-center justify-end mt-4">
                        <VBtn class="account_v_btn_primary">
                          <template #prepend>
                            <IconDeviceFloppy size="20" />
                          </template>
                          Save Customer
                        </VBtn>
                      </div>
                    </VCol>
                  </VRow>
                </VCardText>
              </VCard>
            </div>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="12">
            <DynamicDataTable :headers="customerHeaders" :items="customerItems" :filters="customerFilters"
              title="Customer" :status-items="customerStatusItems" :account-type-items="customerTypeItems"
              :currency-items="[]" :widgets="customerWidgetData" item-value-key="customerName" :enableViewAction="true"
              @view-item="handleViewCustomer" />
          </VCol>
        </VRow>
        <VBtn @click="showAddCustomerForm" :key="bounceKey" class="account_add_new_btn bounce">
          <template #prepend>
            <IconCirclePlus size="20" />
          </template>
          Add Customer
        </VBtn>
      </div>
    </VExpandTransition>
  </div>
</template>

<style scoped>
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
