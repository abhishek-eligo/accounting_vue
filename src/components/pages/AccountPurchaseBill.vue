<script setup>
import { ref, computed, watchEffect } from 'vue'
import { onMounted } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';

// Vendor select and Add Vendor dialog
const vendorsList = ref([
  { title: 'Vendor 1', value: 'vendor1', gstin: '22AAAAA0000A1Z5', state: 'Maharashtra' },
  { title: 'Vendor 2', value: 'vendor2', gstin: '33BBBBB1111B2Z6', state: 'Tamil Nadu' },
])
const selectedVendor = ref(null)
const vendorGSTIN = ref('')
const vendorState = ref('')
const placeOfSupply = ref('')
const billNumber = ref('')
const billDate = ref('')
const dueDate = ref('')
const addVendorDialog = ref(false)

// Watch vendor selection to autofill GSTIN and state
watchEffect(() => {
  const vendor = vendorsList.value.find(v => v.value === selectedVendor.value)
  if (vendor) {
    vendorGSTIN.value = vendor.gstin
    placeOfSupply.value = vendor.state
  } else {
    vendorGSTIN.value = ''
    placeOfSupply.value = ''
  }
})

// Purchase Mode Menu
const purchaseModes = [
  { label: 'Assets & Inventory', value: 'both' },
  { label: 'Assets Only', value: 'asset' },
  { label: 'Inventory Only', value: 'inventory' },
]
const selectedPurchaseMode = ref('both')
const purchaseModeMenu = ref(false)

// Tabs
const activeTab = ref('inventory')

// Table headers
const inventoryHeaders = [
  { title: 'Item', value: 'item', width: '300px' },
  { title: 'Account', value: 'account', width: '250px' },
  { title: 'HSN/SAC', value: 'hsn', width: '150px' },
  { title: 'Qty', value: 'qty' },
  { title: 'Rate', value: 'rate' },
  { title: 'GST%', value: 'gst' },
  { title: 'Amount', value: 'amount' },
  { title: '', value: 'actions' },
]
const assetHeaders = [
  { title: 'Item', value: 'item', width: '300px' },
  { title: 'HSN/SAC', value: 'hsn', width: '150px' },
  { title: 'Qty', value: 'qty' },
  { title: 'Rate', value: 'rate' },
  { title: 'GST%', value: 'gst' },
  { title: 'Amount', value: 'amount' },
  { title: '', value: 'actions' },
]

// Table data
function defaultInventoryRow() {
  return { item: '', account: '', hsn: '', qty: 1, rate: 0, gst: 18, amount: 0 }
}
function defaultAssetRow() {
  return { item: '', hsn: '', qty: 1, rate: 0, gst: 18, amount: 0 }
}
const inventoryRows = ref([defaultInventoryRow()])
const assetRows = ref([defaultAssetRow()])

function addRow() {
  if (activeTab.value === 'inventory') inventoryRows.value.push(defaultInventoryRow())
  else assetRows.value.push(defaultAssetRow())
}
function removeRow(index) {
  if (activeTab.value === 'inventory') {
    if (inventoryRows.value.length > 1) inventoryRows.value.splice(index, 1)
  } else {
    if (assetRows.value.length > 1) assetRows.value.splice(index, 1)
  }
}

// Calculate amounts
function recalcAmounts() {
  const rows = activeTab.value === 'inventory' ? inventoryRows.value : assetRows.value
  rows.forEach(row => {
    const qty = parseFloat(row.qty) || 0
    const rate = parseFloat(row.rate) || 0
    const gst = parseFloat(row.gst) || 0
    const base = qty * rate
    row.amount = ((base * (1 + gst / 100))).toFixed(2)
  })
}
watchEffect(recalcAmounts)

// Summary
const subtotal = computed(() => {
  const rows = activeTab.value === 'inventory' ? inventoryRows.value : assetRows.value
  return rows.reduce((sum, row) => sum + (parseFloat(row.qty) * parseFloat(row.rate) || 0), 0)
})
const totalGST = computed(() => {
  const rows = activeTab.value === 'inventory' ? inventoryRows.value : assetRows.value
  return rows.reduce((sum, row) => {
    const qty = parseFloat(row.qty) || 0
    const rate = parseFloat(row.rate) || 0
    const gst = parseFloat(row.gst) || 0
    return sum + (qty * rate * gst / 100)
  }, 0)
})
const cgst = computed(() => totalGST.value / 2)
const sgst = computed(() => totalGST.value / 2)
const igst = computed(() => 0)
const totalAmount = computed(() => subtotal.value + totalGST.value)

// Notes
const notes = ref('')

// Dummy accounts for inventory
const accountsList = ref([
  { title: 'Purchase A/c', value: 'purchase' },
  { title: 'Expense A/c', value: 'expense' },
])

// Add Vendor form fields (from vendors/index.vue)
const vendorFormFields = ref([
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
])
const isVendorFieldVisible = key => vendorFormFields.value.find(f => f.key === key)?.visible

// Add Vendor form model
const newVendor = ref({})
function saveVendor() {
  // Add vendor to list
  vendorsList.value.push({
    title: newVendor.value.companyName || (newVendor.value.firstName + ' ' + newVendor.value.lastName),
    value: 'vendor' + (vendorsList.value.length + 1),
    gstin: newVendor.value.gstin || '',
    state: newVendor.value.state || '',
  })
  addVendorDialog.value = false
  newVendor.value = {}
}

// Add this statesList (from salesinvoice page)
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
</script>

<template>
  <div>
    <VRow class="justify-center">
      <VCol cols="12">
        <VCard class="account_ui_vcard account_vcard_border" title="New Purchase Bill"
          subtitle="Enter the details from your vendor's bill.">
          <template #append>
            <VMenu v-model="purchaseModeMenu" location="bottom end" offset-y transition="slide-y-transition"
              :close-on-content-click="false">
              <template #activator="{ props }">
                <VBtn v-bind="props" variant="text" size="x-small" rounded="">
                  <component :is="renderTablerIcon('settings')" style="font-size: 20px;" />
                </VBtn>
              </template>
              <VCard class="account_vcard_menu account_vcard_border">
                <div class="account_vcard_menu_hdng">Purchase Mode</div>
                <VDivider class="my-1 mt-0" />
                <div class="account_vcard_menu_items py-1">
                  <div v-for="mode in purchaseModes" :key="mode.value" class="account_vcard_menu_item"
                    @click="selectedPurchaseMode = mode.value">
                    <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                      <component v-if="selectedPurchaseMode === mode.value" :is="renderTablerIcon('check')"
                        style="font-size: 16px;" />
                      <span :class="selectedPurchaseMode === mode.value ? '' : 'field_list_dynamic_ml'">{{ mode.label
                      }}</span>
                    </div>
                  </div>
                </div>
              </VCard>
            </VMenu>
          </template>
          <VCardText>
            <VRow>
              <VCol cols="12" md="6">
                <label class="account_label mb-2">Vendor</label>
                <VAutocomplete v-model="selectedVendor" :items="vendorsList" placeholder="Select a vendor"
                  variant="outlined" class="accouting_field accouting_active_field">
                  <template #append>
                    <VBtn class="account_v_btn_outlined" @click="addVendorDialog = true" rounded="2">
                      <component :is="renderTablerIcon('circle-plus')" style="font-size: 20px;" />
                    </VBtn>
                  </template>
                </VAutocomplete>
              </VCol>
              <VCol cols="12" md="6">
                <label class="account_label mb-2">Bill Number</label>
                <VTextField v-model="billNumber" variant="outlined" class="accouting_field accouting_active_field" />
              </VCol>
              <VCol cols="12" md="6">
                <label class="account_label mb-2">Vendor GSTIN</label>
                <VTextField v-model="vendorGSTIN" variant="outlined" readonly placeholder="15-digit GSTIN"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol cols="12" md="6">
                <label class="account_label mb-2">Bill Date</label>
                <VTextField v-model="billDate" type="date" variant="outlined"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol cols="12" md="6">
                <label class="account_label mb-2">Place of Supply (Vendor's State)</label>
                <VAutocomplete :items="statesList" v-model="placeOfSupply" variant="outlined" placeholder="Select state"
                 class="accouting_field accouting_active_field" />
              </VCol>
              <VCol cols="12" md="6">
                <label class="account_label mb-2">Due Date</label>
                <VTextField v-model="dueDate" type="date" variant="outlined"
                  class="accouting_field accouting_active_field" />
              </VCol>
            </VRow>
            <VDivider class="my-4" />
            <div v-if="selectedPurchaseMode === 'both'" class="d-flex gap-2 mb-2">
              <VBtn :class="activeTab === 'inventory' ? 'account_v_btn_primary' : 'account_v_btn_outlined'"
                @click="activeTab = 'inventory'">Inventory Purchase</VBtn>
              <VBtn :class="activeTab === 'asset' ? 'account_v_btn_primary' : 'account_v_btn_outlined'"
                @click="activeTab = 'asset'">Asset Purchase</VBtn>
            </div>
            <VDataTable
              v-if="selectedPurchaseMode === 'both' ? true : selectedPurchaseMode === 'asset' ? activeTab = 'asset' : activeTab = 'inventory'"
              :headers="selectedPurchaseMode === 'both' ? (activeTab === 'inventory' ? inventoryHeaders : assetHeaders) : selectedPurchaseMode === 'asset' ? assetHeaders : inventoryHeaders"
              :items="selectedPurchaseMode === 'both' ? (activeTab === 'inventory' ? inventoryRows : assetRows) : selectedPurchaseMode === 'asset' ? assetRows : inventoryRows"
              class="account_dynamic_table account_invoice_table" hide-default-footer>
              <template v-slot:[`item.item`]="{ index }">
                <VTextField v-model="(activeTab === 'inventory' ? inventoryRows : assetRows)[index].item"
                  placeholder="Item name" variant="outlined" class="accouting_field accouting_active_field" />
              </template>
              <template v-if="activeTab === 'inventory'" v-slot:[`item.account`]="{ index }">
                <VSelect v-model="inventoryRows[index].account" :items="accountsList" placeholder="Select account"
                  variant="outlined" class="accouting_field accouting_active_field" />
              </template>
              <template v-slot:[`item.hsn`]="{ index }">
                <VTextField v-model="(activeTab === 'inventory' ? inventoryRows : assetRows)[index].hsn"
                  placeholder="HSN Code" variant="outlined" class="accouting_field accouting_active_field" />
              </template>
              <template v-slot:[`item.qty`]="{ index }">
                <VTextField v-model="(activeTab === 'inventory' ? inventoryRows : assetRows)[index].qty" type="number"
                  variant="outlined" class="accouting_field accouting_active_field" />
              </template>
              <template v-slot:[`item.rate`]="{ index }">
                <VTextField v-model="(activeTab === 'inventory' ? inventoryRows : assetRows)[index].rate" type="number"
                  variant="outlined" class="accouting_field accouting_active_field" />
              </template>
              <template v-slot:[`item.gst`]="{ index }">
                <VTextField v-model="(activeTab === 'inventory' ? inventoryRows : assetRows)[index].gst" type="number"
                  variant="outlined" class="accouting_field accouting_active_field" />
              </template>
              <template v-slot:[`item.amount`]="{ index }">
                <span>₹{{ (activeTab === 'inventory' ? inventoryRows : assetRows)[index].amount }}</span>
              </template>
              <template v-slot:[`item.actions`]="{ index }">
                <component :is="renderTablerIcon('trash')" class="text-error cursor-pointer table_row_icon" :class="{
                  'opacity-50': (activeTab === 'inventory' ? inventoryRows : assetRows).length === 1,
                  'cursor-not-allowed': (activeTab === 'inventory' ? inventoryRows : assetRows).length === 1
                }" :disabled="(activeTab === 'inventory' ? inventoryRows : assetRows).length === 1" @click="removeRow(index)"
                  style="font-size: 20px;" />
              </template>
            </VDataTable>
            <VBtn class="account_v_btn_outlined mt-3" variant="text" @click="addRow">
              <template #prepend>
                <component :is="renderTablerIcon('circle-plus')" style="font-size: 20px; margin-right: 6px;" />
              </template>
              Add Item
            </VBtn>
            <VDivider class="my-4" />
            <VRow>
              <VCol cols="12">
                <VTextarea v-model="notes" placeholder="Notes" variant="outlined" class="accounting_v_textarea" />
              </VCol>
            </VRow>
            <VDivider class="my-4" />
            <VRow>
              <VCol cols="12" md="6"></VCol>
              <VCol cols="12" md="6">
                <div class="d-flex flex-column align-end">
                  <div class="d-flex justify-space-between w-100 mb-1"><span>Subtotal</span><span>₹{{
                    subtotal.toFixed(2)
                      }}</span></div>
                  <div class="d-flex justify-space-between w-100 mb-1"><span>CGST</span><span>₹{{ cgst.toFixed(2)
                  }}</span></div>
                  <div class="d-flex justify-space-between w-100 mb-1"><span>SGST</span><span>₹{{ sgst.toFixed(2)
                  }}</span></div>
                  <div class="d-flex justify-space-between w-100 mb-1"><span>IGST</span><span>₹{{ igst.toFixed(2)
                  }}</span></div>
                </div>
                <VDivider class="my-2" />
                <div class="d-flex justify-space-between w-100 font-weight-bold"><span>Total Amount</span><span>₹{{
                  totalAmount.toFixed(2) }}</span></div>
              </VCol>
            </VRow>
            <VDivider />
            <VRow>
              <VCol cols="12">
                <label class="account_label mb-2">Notes</label>
                <VTextarea class="accounting_v_textarea" placeholder="Any notes related to this purchase bill"
                  variant="outlined" />
              </VCol>
              <VCol cols="12" class="d-flex align-center justify-end">
                <VBtn class="account_v_btn_primary">
                  <template #prepend>
                    <component :is="renderTablerIcon('device-floppy')" style="font-size: 20px; margin-right: 6px;" />
                  </template>
                  Save Purchase Bill
                </VBtn>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <!-- Add Vendor Dialog -->
    <v-dialog max-width="700" v-model="addVendorDialog">
      <div v-if="addVendorDialog" class="account_ui_vcard">
        <VCard title="Create a New Vendor" class="pa-2 account_vcard_border shadow-none"
          subtitle="Fill in the details below to add a new vendor to your records.">
          <template #append>
            <VBtn @click="addVendorDialog = false" icon="mdi-close" variant="text" size="x-small" rounded=""
              class="account_vcard_close_btn" />
          </template>
          <VCardText>
            <VRow>
              <VCol v-if="isVendorFieldVisible('firstName')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">First Name</label>
                <VTextField v-model="newVendor.firstName" variant="outlined" density="compact" placeholder="John"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('lastName')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">Last Name</label>
                <VTextField v-model="newVendor.lastName" variant="outlined" density="compact" placeholder="Doe"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('companyName')" cols="12" lg="12" md="12">
                <label class="account_label mb-2">Company Name</label>
                <VTextField v-model="newVendor.companyName" variant="outlined" density="compact"
                  placeholder="Innovate Inc." class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('email')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">Email Address</label>
                <VTextField v-model="newVendor.email" variant="outlined" density="compact"
                  placeholder="john.doe@example.com" class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('phone')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">Phone Number</label>
                <VTextField v-model="newVendor.phone" variant="outlined" density="compact" placeholder="(123) 456-7890"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('streetAddress')" cols="12" lg="12" md="12">
                <label class="account_label mb-2">Street Address</label>
                <VTextField v-model="newVendor.streetAddress" variant="outlined" density="compact"
                  placeholder="123 Main St" class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('city')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">City</label>
                <VTextField v-model="newVendor.city" variant="outlined" density="compact" placeholder="Mumbai"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('state')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">State</label>
                <VTextField v-model="newVendor.state" variant="outlined" density="compact" placeholder="Select a state"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('zipCode')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">ZIP Code</label>
                <VTextField v-model="newVendor.zipCode" variant="outlined" density="compact" placeholder="400001"
                  class="accouting_field accouting_active_field" />
              </VCol>
              <VCol v-if="isVendorFieldVisible('gstin')" cols="12" lg="6" md="6">
                <label class="account_label mb-2">GSTIN (Optional)</label>
                <VTextField v-model="newVendor.gstin" variant="outlined" density="compact"
                  placeholder="15-digit GST Identification Number" class="accouting_field accouting_active_field" />
              </VCol>
            </VRow>
          </VCardText>
          <VCardActions class="justify-end">
            <VBtn color="success" class="account_v_btn_primary" prepend-icon="mdi-content-save" @click="saveVendor">Save
              Vendor</VBtn>
          </VCardActions>
        </VCard>
      </div>
    </v-dialog>
  </div>
</template>
