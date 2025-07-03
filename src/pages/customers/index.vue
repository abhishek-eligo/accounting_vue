<script setup>
import { ref, computed } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'

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
</script>

<template>
  <div class="account_customers_list">
    <VSlideYTransition mode="in-out">
    <VRow v-if="addNewCustomerVisible">
      <VCol cols="12">
        <div class="account_ui_vcard">
          <VCard title="Create a New Customer" class="pa-2 account_vcard_border"
            subtitle="Fill in the details below to add a new customer to your records.">
            <template #append>
              <VBtn icon="mdi-cog-outline" variant="text" size="small" rounded="" />
            </template>
            <VCardText>
              <VRow>
                <VCol cols="12" class="pb-0">
                  <h5 class="account_form_info_hdng">Core Information</h5>
                  <VDivider class="mb-2 mt-1"/>
                </VCol>
                <VCol cols="12" lg="12" md="12">
                  <label class="account_label mb-2">Name (Mandatory)</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="Customer's Full Name or Company Name" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Mobile</label>
                  <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                    density="compact" placeholder="9876543210" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Opening Balance</label>
                  <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                    density="compact" placeholder="0" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Balance Type</label>
                  <v-radio-group class="accounting_v_radio" inline>
                    <v-radio class="mr-3" label="Debit" value="debit"></v-radio>
                    <v-radio label="Credit" value="credit"></v-radio>
                  </v-radio-group>
                </VCol>

                <VCol cols="12" class="pb-0">
                  <h5 class="account_form_info_hdng">Contact Details</h5>
                  <VDivider class="mb-2 mt-1"/>
                </VCol>

                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Mailing Name</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="Name for correspondence" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Email</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="customer@example.com" />
                </VCol>

                <VCol cols="12" lg="12" md="12">
                  <label class="account_label mb-2">Address</label>
                  <VTextarea class="accounting_v_textarea" placeholder="Full address" variant="outlined" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">State</label>
                  <VSelect class="accouting_field accouting_active_field" variant="outlined"
                    placeholder="Select an item" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Pincode</label>
                  <VSelect class="accouting_field accouting_active_field" variant="outlined"
                    placeholder="e.g. 400001" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Country</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="India" />
                </VCol>

                <VCol cols="12" class="pb-0">
                  <h5 class="account_form_info_hdng">Tax & Compliance</h5>
                  <VDivider class="mb-2 mt-1"/>
                </VCol>

                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">GSTIN/UIN</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="15-digit GSTIN" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">PAN</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="15-digit PAN" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Tax Registration Number</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="If applicable" />
                </VCol>
                <VCol class="d-flex align-center" cols="12" lg="6" md="6">
                  <VCheckbox density="compact" class="account_v_checkbox" label="TDS Applicable" />
                </VCol>

                <VCol cols="12" class="pb-0">
                  <h5 class="account_form_info_hdng">Financial Controls</h5>
                  <VDivider class="mb-2 mt-1"/>
                </VCol>

                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Credit Limit</label>
                  <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                    density="compact" placeholder="0" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Credit Period (Days)</label>
                  <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                    density="compact" placeholder="0" />
                </VCol>
                <VCol class="d-flex align-center" cols="12" lg="6" md="6">
                  <VCheckbox density="compact" class="account_v_checkbox" label="Maintain Bill-wise Details" />
                </VCol>

                <VCol cols="12" class="pb-0">
                  <h5 class="account_form_info_hdng">Banking Details</h5>
                  <VDivider class="mb-2 mt-1"/>
                </VCol>

                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Bank Name</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="e.g. HDFC Bank" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Account Number</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="Bank Account Number" />
                </VCol>
                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">IFSC Code</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="e.g. HDFC0000001" />
                </VCol>

                <VCol cols="12" class="pb-0">
                  <h5 class="account_form_info_hdng">Additional Fields</h5>
                  <VDivider class="mb-2 mt-1"/>
                </VCol>

                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Country</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="India" />
                </VCol>

                <VCol cols="12" lg="6" md="6">
                  <label class="account_label mb-2">Country</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    placeholder="India" />
                </VCol>

                <VCol cols="12" lg="12" md="12">
                  <label class="account_label mb-2">Ship-to Address</label>
                  <VTextarea class="accounting_v_textarea" placeholder="Optional delivery address" variant="outlined" />
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
    <VBtn @click="showAddCustomerForm" class="account_add_new_btn" prepend-icon="mdi-plus-circle-outline">Add Customer</VBtn>
  </div>
</template>

<style scoped></style>
