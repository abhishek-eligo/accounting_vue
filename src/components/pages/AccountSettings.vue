<script setup>
import { ref, onMounted } from 'vue'
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';
import { VWindow, VWindowItem } from 'vuetify/components'

const currentTab = ref("")
const stateOptions = ref([])

// Visibility state for each field
const fieldVisibility = reactive({
  gstin: true,
  legalName: true,
  tradingName: true,
  businessType: true,
  state: true,
  address1: true,
  address2: true,
  city: true,
  pincode: true,
  contactEmail: true,
  phone: true,
  website: true,
  pan: true,
  fyStart: true,
  fyEnd: true,
  baseCurrency: true,
  decimalPlaces: true,
  thousandSeparator: true,
  companyLogo: true,
})

const fieldLabels = {
  gstin: 'GSTIN',
  legalName: 'Legal Name',
  tradingName: 'Trading Name',
  businessType: 'Business Type',
  state: 'State',
  address1: 'Address Line 1',
  address2: 'Address Line 2',
  city: 'City',
  pincode: 'Pincode',
  contactEmail: 'Contact Email',
  phone: 'Phone Number',
  website: 'Website',
  pan: 'PAN',
  fyStart: 'Financial Year Start',
  fyEnd: 'Financial Year End',
  baseCurrency: 'Base Currency',
  decimalPlaces: 'Decimal Places',
  thousandSeparator: 'Thousand Separator',
  companyLogo: 'Company Logo',
}


const toggleField = (key) => {
  fieldVisibility[key] = !fieldVisibility[key]
}

onMounted(async () => {
  try {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ country: 'India' })
    })

    const data = await response.json()
    console.log("the data is :", data)

    stateOptions.value = data.data.states.map(state => state.name)
  } catch (error) {
    console.error('Failed to fetch states:', error)
  }
})

const softwareModules = ref([
  { title: 'Travel Module', value: 'travel_module', description: 'Enable features for managing hotels, cabs, and trips.', active: true },
  { title: 'Advanced Accounting View', value: 'advanced_accounting_view', description: 'Show detailed accounting views and reports.', active: true },
  { title: 'Integrate Inventory with Accounts', value: 'integrate_inventory_with_accounts', description: 'Automatically create accounting entries for inventory transactions.', active: true },
])

const gstRateHeaders = ref([
  { title: 'Rate (%)', value: 'rate', visible: true },
  { title: 'CGST (%)', value: 'cgst', visible: true },
  { title: 'SGST (%)', value: 'sgst', visible: true },
  { title: 'IGST (%)', value: 'igst', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
])

const gstRates = ref([
  { rate: 18, cgst: 9, sgst: 9, igst: 18 },
  { rate: 12, cgst: 6, sgst: 6, igst: 12 },
  { rate: 5, cgst: 2.5, sgst: 2.5, igst: 5 },
  { rate: 28, cgst: 14, sgst: 14, igst: 28 },
  { rate: 0, cgst: 0, sgst: 0, igst: 0 },
  { rate: 3, cgst: 1.5, sgst: 1.5, igst: 3 },
])

const gstDialog = ref(false)
const newGstRate = ref(null)

const addGstRate = () => {
  const rate = parseFloat(newGstRate.value)

  if (!isNaN(rate)) {
    const newRateEntry = {
      rate: rate,
      cgst: rate / 2,
      sgst: rate / 2,
      igst: rate
    }

    gstRates.value.push(newRateEntry)
    newGstRate.value = null
    gstDialog.value = false
  }
}

const templates = {
  net30: `Payment is due within 30 days.\nPlease include the invoice number on your payment.`,
  dueOnReceipt: `Payment is due immediately upon receipt of this invoice.`,
  upfront50: `50% of the total amount is due upon signing the contract. The remaining 50% is due upon project completion.`,
}

const defaultTerms = 'net30'
const paymentTermsText = ref(templates[defaultTerms])

const getTemplateText = (key) => templates[key] || ''

const insertTemplateText = (key) => {
  const textToAdd = getTemplateText(key)
  const current = paymentTermsText.value.trim()

  paymentTermsText.value = current
    ? `${current}\n\n${textToAdd}`
    : textToAdd
}

</script>


<template>
  <div class="account_ui_vcard">
    <VCard title="Settings" subtitle="Manage your company settings and preferences." class="account_vcard_border">
      <VCardText class="pa-6">
        <VRow>
          <VCol cols="12" lg="2" md="2" sm="12">
            <div>
              <VTabs v-model="currentTab" direction="vertical" class="company_setting_tabs tabs_pill">
                <VTab :value="0">Company</VTab>
                <VTab :value="1">Software</VTab>
                <VTab :value="2">GST Type</VTab>
                <VTab :value="3">Payment Terms</VTab>
                <VTab :value="4">Integration</VTab>
              </VTabs>
            </div>
          </VCol>

          <VCol cols="12" lg="10" md="10" sm="12">
            <VWindow v-model="currentTab">
              <VWindowItem :value="0">
                <div class="d-flex align-center justify-space-between">
                  <div>
                    <h3 class="company-setting-heading m-0">Company Settings</h3>
                  </div>
                  <div>
                    <VMenu location="start" transition="slide-y-transition" offset-y :close-on-content-click="false">
                      <template #activator="{ props }">
                        <VBtn v-bind="props" variant="text" size="x-small" rounded="">
                          <component :is="renderTablerIcon('settings')" style="font-size: 20px;" />
                        </VBtn>
                      </template>
                      <VCard class="account_vcard_menu account_vcard_border">
                        <div class="account_vcard_menu_hdng">Show/Hide Optional Fields</div>
                        <VDivider class="my-1 mt-0" />
                        <div class="account_vcard_menu_items py-1">
                          <div v-for="(label, key) in fieldLabels" :key="key" @click="toggleField(key)">
                            <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                              <component v-if="fieldVisibility[key]" :is="renderTablerIcon('check')"
                                style="font-size: 16px;" />
                              <span :class="fieldVisibility[key] ? '' : 'field_list_dynamic_ml'">{{ label }}</span>
                            </div>
                          </div>
                        </div>
                      </VCard>
                    </VMenu>
                  </div>
                </div>

                <div class="mt-8">
                  <v-row>
                    <v-col v-if="fieldVisibility.gstin" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">GSTIN</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="15-digit GSTIN" />
                    </v-col>

                    <v-col v-if="fieldVisibility.legalName" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Legal Name</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Your Company Inc." />
                    </v-col>

                    <v-col v-if="fieldVisibility.tradingName" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Trading Name</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Brand Name" />
                    </v-col>

                    <v-col v-if="fieldVisibility.businessType" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Business Type</label>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select Business Type " :items="[
                          'Proprietriship',
                          'Partnership',
                          'Private Limited Company',
                          'Public Limited Company ',
                          'Limited Liability Partnership (LLP)',
                          'Other',
                        ]">
                      </VAutocomplete>
                    </v-col>

                    <v-col v-if="fieldVisibility.state" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">State</label>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select State" :items="stateOptions" />
                    </v-col>

                    <v-col v-if="fieldVisibility.address1" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Address Line 1</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="123 Main St" />
                    </v-col>

                    <v-col v-if="fieldVisibility.address2" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Address Line 2</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Suite 4B" />
                    </v-col>

                    <v-col v-if="fieldVisibility.city" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">City</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Mumbai" />
                    </v-col>

                    <v-col v-if="fieldVisibility.pincode" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Pincode</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="400001" />
                    </v-col>

                    <v-col v-if="fieldVisibility.contactEmail" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Contact Email</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="contact@company.com" />
                    </v-col>

                    <v-col v-if="fieldVisibility.phone" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Phone Number</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="+91 12345 67890" />
                    </v-col>

                    <v-col v-if="fieldVisibility.website" cols="12" lg="12" md="12">
                      <label class="account_label mb-1">Website</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="https://company.com" />
                    </v-col>

                    <v-col v-if="fieldVisibility.pan" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">PAN</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="15-digit PAN" />
                    </v-col>

                    <v-col v-if="fieldVisibility.fyStart" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Financial Year Start</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        type="date" />
                    </v-col>

                    <v-col v-if="fieldVisibility.fyEnd" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Financial Year End</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        type="date" />
                    </v-col>


                    <v-col v-if="fieldVisibility.baseCurrency" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Base Currency</label>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select Business Type " :items="[
                          'INR',
                          'USD',
                          'EUR',
                          'GBP',
                        ]">
                      </VAutocomplete>
                    </v-col>

                    <v-col v-if="fieldVisibility.decimalPlaces" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Decimal Places</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                        placeholder="Number" type="number" />
                    </v-col>

                    <v-col v-if="fieldVisibility.thousandSeparator" cols="12" lg="6" md="6">
                      <label class="account_label mb-1">Thousand Separator</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
                    </v-col>


                    <v-col v-if="fieldVisibility.companyLogo" cols="12" lg="12" md="12">
                      <label class="account_label mb-1">Company Logo</label>
                      <v-file-input class="accouting_field align-center accouting_active_field" variant="outlined"
                        density="compact" prepend-icon="" placeholder="Upload PAN card file">
                        <template #prepend>
                          <VBtn class="account_v_btn_outlined" variant="outlined" size="64" rounded="" disabled>
                            <component :is="renderTablerIcon('upload')" style="font-size: 32px;" />
                          </VBtn>
                          <!-- <v-avatar size="64" class="me-2" color="secondary" rounded="">
                          <v-icon icon="mdi-tray-arrow-up" color="white" size="18" />
                        </v-avatar> -->
                        </template>
                      </v-file-input>
                    </v-col>

                    <VCol cols="12" class="d-flex justify-end">
                      <VBtn class="account_v_btn_primary save_btn_height" variant="outlined" size="large" rounded="3"
                        color="primary">
                        <template #prepend>
                          <component :is="renderTablerIcon('device-floppy')"
                            style="font-size: 22px; margin-right: 6px;" />
                        </template>
                        Save Changes
                      </VBtn>
                    </VCol>
                  </v-row>
                </div>
              </VWindowItem>
              <VWindowItem :value="1">
                <div>
                  <h3 class="company-setting-heading m-0">Software Settings</h3>
                </div>
                <div class="mt-8">
                  <VCard class="account_vcard_border shadow-none pa-2" title="Module Management"
                    subtitle="Enable or disable major features of the application.">
                    <VCardText>
                      <VCard v-for="card in softwareModules" :key="card.title"
                        class="account_vcard_border account_module_card mt-4 shadow-none" :title="card.title"
                        :subtitle="card.description">
                        <template #append>
                          <VSwitch density="compact" v-model="card.active" inset class="account_swtich_btn"
                            color="primary" hide-details />
                        </template>
                      </VCard>
                    </VCardText>
                  </VCard>
                  <div class="pa-4 d-flex align-center justify-end">
                    <VBtn class="account_v_btn_primary save_btn_height" variant="outlined" size="default" rounded="3"
                      color="primary">
                      <template #prepend>
                        <component :is="renderTablerIcon('device-floppy')"
                          style="font-size: 22px; margin-right: 6px;" />
                      </template>
                      Save Software Settings
                    </VBtn>
                  </div>
                </div>
              </VWindowItem>
              <VWindowItem :value="2">
                <div class="d-flex align-center justify-space-between">
                  <h3 class="company-setting-heading m-0">GST Settings</h3>
                  <VBtn class="account_v_btn_primary save_btn_height" variant="outlined" color="primary"
                    @click="gstDialog = true">
                    <template #prepend>
                      <component :is="renderTablerIcon('circle-plus')" style="font-size: 22px; margin-right: 6px;" />
                    </template>
                    Add New GST Rate
                  </VBtn>
                </div>

                <VCard class="account_vcard_border shadow-none mt-3 pa-2" title="Available GST Rates"
                  subtitle="Manage the GST rates used across your invoices.">
                  <div class="px-3">
                    <div class="account_vcard_border">
                      <VDataTable :headers="gstRateHeaders" :items="gstRates" class="account_dynamic_table shadow-none">
                        <template #item.actions="{ item }">
                          <VBtn variant="text" size="x-small" color="error" class="trash_error_color">
                            <component :is="renderTablerIcon('trash')" style="font-size: 16px;" />
                          </VBtn>
                        </template>
                      </VDataTable>
                    </div>
                  </div>
                  <!-- GST Add Dialog -->
                  <VDialog class="account_add_dialog" v-model="gstDialog" max-width="400">
                    <VCard class="pa-2">
                      <VCardTitle>Add New GST Rate</VCardTitle>
                      <VCardSubtitle class="mb-1">Enter the new GST percentage you want to add.</VCardSubtitle>

                      <VCardText>
                        <label class="account_label mb-1">Rate</label>
                        <VTextField v-model="newGstRate" type="number" class="accouting_field accouting_active_field"
                          variant="outlined" density="compact" placeholder="e.g. 18" />
                      </VCardText>

                      <VCardActions class="justify-end">
                        <VBtn class="account_v_btn_outlined" variant="outlined" @click="gstDialog = false">Cancel</VBtn>
                        <VBtn color="primary" variant="outlined" class="account_v_btn_primary" @click="addGstRate">
                          <template #prepend>
                            <component :is="renderTablerIcon('circle-plus')"
                              style="font-size: 20px; margin-right: 6px;" />
                          </template>
                          Add Rate
                        </VBtn>
                      </VCardActions>
                    </VCard>
                  </VDialog>
                </VCard>
              </VWindowItem>
              <VWindowItem :value="3">
                <div>
                  <h3 class="company-setting-heading m-0">Payment Terms</h3>
                </div>
                <VCard class="account_vcard_border shadow-none mt-3 pa-2" title="Default Payment Terms"
                  subtitle="Set the default terms and conditions that will appear on your invoices. You can use one of the templates or write your own.">
                  <VCardText class="mt-2">
                    <label class="account_label mb-1">Terms & Conditions</label>
                    <VTextarea v-model="paymentTermsText" class="accounting_v_textarea" variant="outlined" />

                    <div class="mt-3">
                      <label class="account_label mb-1">Insert Template</label>
                      <div class="d-flex align-center gap-2">
                        <VBtn class="account_v_btn_outlined" variant="outlined" size="default" rounded="2"
                          @click="insertTemplateText('net30')">
                          Net 30
                        </VBtn>

                        <VBtn class="account_v_btn_outlined" variant="outlined" size="default" rounded="2"
                          @click="insertTemplateText('dueOnReceipt')">
                          Due on Receipt
                        </VBtn>

                        <VBtn class="account_v_btn_outlined" variant="outlined" size="default" rounded="2"
                          @click="insertTemplateText('upfront50')">
                          50% Upfront
                        </VBtn>
                      </div>
                    </div>
                  </VCardText>
                </VCard>
                <div class="pa-4 d-flex align-center justify-end">
                  <VBtn class="account_v_btn_primary save_btn_height" variant="outlined" size="default" rounded="3"
                    color="primary">
                    <template #prepend>
                      <component :is="renderTablerIcon('device-floppy')" style="font-size: 22px; margin-right: 6px;" />
                    </template>
                    Save Terms
                  </VBtn>
                </div>
              </VWindowItem>
              <VWindowItem :value="4">Integration Content</VWindowItem>
            </VWindow>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped>
.small-label {
  line-height: 1;
  font-weight: 500;
  font-size: 14px;
  border: var(acc-border-color);
}
</style>
