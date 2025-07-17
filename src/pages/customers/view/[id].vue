<script setup>
import { ref, computed } from 'vue'

const isFullAddressVisible = ref(false)
const isPaymentDialogVisible = ref(false)
const paymentType = ref('in') // 'in' or 'out'

// Dynamic dialog content
const dialogTitle = computed(() =>
  paymentType.value === 'in'
    ? 'Add Payment In from Nexus Group'
    : 'Record Payment Out for Nexus Group'
)

const dialogSubtitle = computed(() =>
  paymentType.value === 'in'
    ? 'Record a payment received from this customer. This will be an on-account payment.'
    : 'Record a payment made to this customer or on their behalf.'
)
</script>


<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard class="account_vcard_border account_ui_vcard pa-2" title="Jessica Brown" subtitle="Nexus Group">
          <template #prepend>
            <VAvatar size="64" rounded="circle" variant="outlined">
              JB
            </VAvatar>
          </template>
          <template #append>
            <div class="d-flex align-center gap-2">
              <VBtn @click="paymentType = 'in'; isPaymentDialogVisible = true" prepend-icon="mdi-plus"
                class="account_v_btn_primary">Payment In</VBtn>
              <VBtn @click="paymentType = 'out'; isPaymentDialogVisible = true" prepend-icon="mdi-plus"
                class="account_v_btn_error">Payment Out</VBtn>

              <VBtn @click="isFullAddressVisible = !isFullAddressVisible"
                :icon="isFullAddressVisible ? 'mdi-chevron-up' : 'mdi-chevron-down'" variant="text" size="x-small"
                rounded="" class="account_vcard_close_btn" />
            </div>
          </template>
          <VCardText class="mt-2">
            <VRow>
              <VCol class="d-flex align-center gap-2" cols="12" lg="4" md="4">
                <VBtn variant="text" class="account_info_icon" icon="mdi-file-document-outline" rounded size="36" />
                <p class="mb-0 account_info_text">GSTIN: 27ABCDE1000F1Z1</p>
              </VCol>
              <VCol class="d-flex align-center gap-2" cols="12" lg="4" md="4">
                <VBtn variant="text" class="account_info_icon" icon="mdi-phone-outline" rounded size="36" />
                <p class="mb-0 account_info_text">(628) 527-7859</p>
              </VCol>
              <VCol class="d-flex align-center gap-2" cols="12" lg="4" md="4">
                <VBtn variant="text" class="account_info_icon" icon="mdi-map-marker-outline" rounded size="36" />
                <p class="mb-0 account_info_text">Jaipur, Maharashtra</p>
              </VCol>
            </VRow>
            <VDivider v-if="isFullAddressVisible" />
            <VExpandTransition>
              <VRow v-if="isFullAddressVisible">
                <VCol cols="12">
                  <div class="mb-2">
                    <p class="mb-0 account_info_label">Full Address</p>
                    <p class="mb-0 account_info_subLabel">537 River Rd, Jaipur, Maharashtra - 37679</p>
                  </div>

                  <div class="">
                    <p class="mb-0 account_info_label">Bio</p>
                    <p style="font-style:italic;" class="mb-0 account_info_subLabel">Experienced in client relations and
                      project
                      management, always aiming for excellence.</p>
                  </div>
                </VCol>
              </VRow>
            </VExpandTransition>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VDialog v-model="isPaymentDialogVisible" max-width="600">
      <VCard class="pa-2 account_vcard_border shadow-none">
        <template #title>{{ dialogTitle }}</template>
        <template #subtitle>{{ dialogSubtitle }}</template>
        <template #append>
          <VBtn icon="mdi-close" variant="text" size="x-small" @click="isPaymentDialogVisible = false"
            class="account_vcard_close_btn" />
        </template>

        <VCardText>
          <VRow>
            <VCol cols="12">
              <label class="account_label mb-2">Amount</label>
              <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined" density="compact"
                placeholder="Enter amount" />
            </VCol>
            <VCol cols="12">
              <label class="account_label mb-2">Payment Mode</label>
              <VSelect class="accouting_field accouting_active_field" variant="outlined" density="compact"
                :items="['Bank Transfer', 'Cash', 'UPI', 'Cheque']" placeholder="Select mode" />
            </VCol>
            <VCol v-if="paymentType === 'out'" cols="12">
              <label class="account_label mb-2">Reason</label>
              <VTextarea class="accounting_v_textarea" variant="outlined" density="compact"
                placeholder="Reason for payment out (e.g., refund, advance settlement)" auto-grow />
            </VCol>
          </VRow>
        </VCardText>

        <VCardActions class="justify-end">
          <VBtn class="account_v_btn_outlined" @click="isPaymentDialogVisible = false">Cancel</VBtn>
          <VBtn class="account_v_btn_primary">Save Payment</VBtn>
        </VCardActions>
      </VCard>
    </VDialog>

  </div>
</template>
