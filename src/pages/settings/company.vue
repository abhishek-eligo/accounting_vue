<script setup>
import { ref, onMounted } from 'vue'

const currentTab = ref("")
const stateOptions = ref([])

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
</script>


<template>
  <div>
    <VCard class="account_vcard_border">
      <div class=" pa-2 ">
        <VCardTitle class="card-title">Settings</VCardTitle>
        <VCardSubtitle class="card-subtitle">Manage your company settings and preferences.</VCardSubtitle>
      </div>

      <VCardText class="pa-6">
        <VRow>
          <VCol cols="12" lg="2" md="2" sm="12">
            <div>
              <VTabs class="tabs_pill" v-model="currentTab" direction="vertical" rounded="pill">
                <VTab class="company-setting-tab">Company Setting</VTab>
                <VTab>GST Type</VTab>
                <VTab>Payment Terms</VTab>
                <VTab>Integeration</VTab>
              </VTabs>
            </div>
          </VCol>

          <VCol cols="12" lg="10" md="10" sm="12">
            <v-tabs-window>
              <v-tabs-window-item>
                <div class="d-flex align-center justify-between">
                  <div>
                    <h3 class="company-setting-heading m-0">Company Settings</h3>
                  </div>
                  <div>
                    <v-avatar size="28" class="me-2" color="primary" rounded="">
                      <v-icon icon="mdi-cog" color="white" size="18" />
                    </v-avatar>
                  </div>
                </div>
              </v-tabs-window-item>

              <div class="mt-8">
                <v-row>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Legal Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Your Company Inc." />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Trading Name</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Brand Name" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Business Type</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="Select Business Type " :items="[
                        'Proprietriship',
                        'Partnership',
                        'Private Limited Company',
                        'Public Limited Company ',
                        'Limited Liability Partnership (LLP)',
                        'Other',
                      ]">
                    </VSelect>
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">State</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="Select State" :items="stateOptions" />
                  </v-col>



                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Address Line 1</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="123 Main St" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Address Line 2</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Suite 4B" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">City</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Mumbai" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Pincode</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="400001" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Contact Email</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="contact@company.com" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Phone Number</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="+91 12345 67890" />
                  </v-col>

                  <v-col cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Website</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="https://company.com" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">GSTIN</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="15-digit GSTIN" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">PAN</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="15-digit PAN" />
                  </v-col>

                  <v-col cols="12" lg="12" md="12">
                    <label class="account_label mb-2">Company Logo</label>
                    <v-file-input class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      prepend-icon="" placeholder="Upload PAN card file">
                      <template #prepend>
                        <v-avatar size="28" class="me-2" color="primary" rounded="">
                          <v-icon icon="mdi-tray-arrow-up" color="white" size="18" />
                        </v-avatar>
                      </template>
                    </v-file-input>
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Financial Year Start</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      type="date" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Financial Year End</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      type="date" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Base Currency</label>
                    <VSelect class="accouting_field accouting_active_field" variant="outlined"
                      placeholder="Select Business Type " :items="[
                        'INR',
                        'USD',
                        'EUR',
                        'GBP',
                      ]">
                    </VSelect>
                  </v-col>


                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Decimal Places</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      placeholder="Number" type="number" />
                  </v-col>

                  <v-col cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Thousand Separator</label>
                    <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
                  </v-col>


                </v-row>
              </div>
            </v-tabs-window>
          </VCol>
        </VRow>
      </VCardText>

    </VCard>
  </div>
</template>

<style scoped>
/* .company-setting-tab{
  background: var(acc-primary-color);
} */

.card-title {
  line-height: 1;
  font-weight: 600;
  font-size: 24px;
  border: var(acc-border-color);
}

.card-subtitle {
  font-size: 14px;
  line-height: 20px;
}

.company-setting-heading {
  color: var(acc-text-dark);
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}

.small-label {
  line-height: 1;
  font-weight: 500;
  font-size: 14px;
  border: var(acc-border-color);
}
</style>
