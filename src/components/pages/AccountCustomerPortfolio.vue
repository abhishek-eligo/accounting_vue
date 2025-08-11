<script setup>
import { ref, computed } from 'vue'

const isFullAddressVisible = ref(false)
const isPaymentDialogVisible = ref(false)
const paymentType = ref('in')
const activeTab = ref('ledger') // default view

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

const widgetData = computed(() => {
  return activeTab.value === 'ledger'
    ? [
      { title: 'TOTAL DEBITS', value: '₹1,22,249.00', icon: 'trending-up' },
      { title: 'TOTAL CREDITS', value: '₹1,13,808.00', icon: 'coin' },
      { title: 'CLOSING BALANCE', value: '₹8,441.00', extra: 'Dr', icon: 'scale' }
    ]
    : [
      { title: 'TOTAL BILLED', value: '₹17,98,275.00', icon: 'file-text' },
      { title: 'TOTAL RECEIVED', value: '₹5,43,419.24', icon: 'credit-card' },
      { title: 'TOTAL DUE', value: '₹12,54,855.76', icon: 'file-alert' }
    ]
})

const tableHeaders = computed(() => {
  return activeTab.value === 'ledger'
    ? [
      { title: 'Date', value: 'date' },
      { title: 'Description', value: 'description' },
      { title: 'Ref #', value: 'ref' },
      { title: 'Debit', value: 'debit' },
      { title: 'Credit', value: 'credit' },
      { title: 'Balance', value: 'balance' }
    ]
    : [
      { title: 'Invoice #', value: 'invoice' },
      { title: 'Date', value: 'date' },
      { title: 'Due Date', value: 'dueDate' },
      { title: 'Amount', value: 'amount' },
      { title: 'Amount Due', value: 'due' },
      { title: 'Status', value: 'status' }
    ]
})

const tableItems = computed(() => {
  return activeTab.value === 'ledger'
    ? [
      { date: '09-Jan-25', description: 'Payment received for invoice', ref: 'INV-2024-109', debit: '-', credit: '₹9,172.00', balance: '₹9,172.00 Cr' },
      { date: '11-Jan-25', description: 'Payment received for invoice', ref: 'INV-2024-114', debit: '-', credit: '₹3,411.00', balance: '₹12,583.00 Cr' },
      { date: '19-Jan-25', description: 'Payment received for invoice', ref: 'INV-2024-108', debit: '-', credit: '₹1,855.00', balance: '₹14,438.00 Cr' },
      { date: '19-Jan-25', description: 'Sale of goods on credit', ref: 'INV-2024-117', debit: '₹8,866.00', credit: '-', balance: '₹5,572.00 Cr' },
      { date: '26-Jan-25', description: 'Sale of goods on credit', ref: 'INV-2024-118', debit: '₹6,400.00', credit: '-', balance: '₹828.00 Dr' },
      { date: '01-Feb-25', description: 'Payment received for invoice', ref: 'INV-2024-122', debit: '-', credit: '₹14,871.00', balance: '₹14,043.00 Cr' },
      { date: '03-Feb-25', description: 'Sale of goods on credit', ref: 'INV-2024-125', debit: '₹6,344.00', credit: '-', balance: '₹7,699.00 Cr' },
      { date: '11-Feb-25', description: 'Sale of goods on credit', ref: 'INV-2024-111', debit: '₹12,746.00', credit: '-', balance: '₹5,047.00 Dr' }
    ]
    : [
      { invoice: 'INV-1010', date: '27-May-2025', dueDate: '12-May-2025', amount: '₹2,08,750.00', due: '₹0.00', status: 'Paid' },
      { invoice: 'INV-1015', date: '02-Jul-2025', dueDate: '01-Aug-2025', amount: '₹3,34,000.00', due: '₹3,34,000.00', status: 'Outstanding' },
      { invoice: 'INV-1018', date: '06-Jul-2025', dueDate: '05-Aug-2025', amount: '₹1,67,000.00', due: '₹1,46,065.00', status: 'Outstanding' },
      { invoice: 'INV-1020', date: '20-Jun-2025', dueDate: '05-Jun-2025', amount: '₹4,500.00', due: '₹1,619.66', status: 'Overdue' },
      { invoice: 'INV-1032', date: '19-Jun-2025', dueDate: '19-Jul-2025', amount: '₹2,08,725.00', due: '₹2,08,725.00', status: 'Outstanding' },
      { invoice: 'INV-1039', date: '18-Jun-2025', dueDate: '18-Jul-2025', amount: '₹1,95,112.50', due: '₹35,930.42', status: 'Partially Paid' },
      { invoice: 'INV-1041', date: '22-May-2025', dueDate: '21-Jun-2025', amount: '₹12,250.00', due: '₹0.00', status: 'Paid' },
      { invoice: 'INV-1043', date: '17-Jun-2025', dueDate: '02-Jun-2025', amount: '₹5,21,812.50', due: '₹3,61,455.68', status: 'Overdue' },
      { invoice: 'INV-1044', date: '25-Jun-2025', dueDate: '25-Jul-2025', amount: '₹1,46,125.00', due: '₹1,46,125.00', status: 'Outstanding' }
    ]
})
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
              <VBtn @click="paymentType = 'in'; isPaymentDialogVisible = true" class="account_v_btn_primary">
                <template #prepend>
                  <component :is="$renderTablerIcon('circle-plus')" style="font-size: 20px;" />
                </template>
                Payment In
              </VBtn>
              <VBtn @click="paymentType = 'out'; isPaymentDialogVisible = true" class="account_v_btn_error">
                <template #prepend>
                  <component :is="$renderTablerIcon('circle-plus')" style="font-size: 20px;" />
                </template>
                Payment Out
              </VBtn>

              <VBtn @click="isFullAddressVisible = !isFullAddressVisible" variant="text" size="x-small" rounded=""
                class="account_vcard_close_btn">
                <template #prepend>
                  <component :is="$renderTablerIcon(isFullAddressVisible ? 'chevron-up' : 'chevron-down')"
                    style="font-size: 15px;" />
                </template>
              </VBtn>
            </div>
          </template>
          <VCardText class="mt-2">
            <VRow>
              <VCol class="d-flex align-center gap-2" cols="12" lg="4" md="4">
                <component class="account_info_icon" :is="$renderTablerIcon('file-text')" style="font-size: 20px;" />
                <p class="mb-0 account_info_text">GSTIN: 27ABCDE1000F1Z1</p>
              </VCol>
              <VCol class="d-flex align-center gap-2" cols="12" lg="4" md="4">
                <component class="account_info_icon" :is="$renderTablerIcon('phone')" style="font-size: 20px;" />
                <p class="mb-0 account_info_text">(628) 527-7859</p>
              </VCol>
              <VCol class="d-flex align-center gap-2" cols="12" lg="4" md="4">
                <component class="account_info_icon" :is="$renderTablerIcon('map-pin')" style="font-size: 20px;" />
                <p class="mb-0 account_info_text">Jaipur, Maharashtra</p>
              </VCol>
            </VRow>
            <VDivider class="my-3" v-if="isFullAddressVisible" />
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

      <VCol cols="12">
        <div class="d-flex align-center gap-2">
          <VBtn @click="activeTab = 'ledger'" size="small"
            :class="activeTab === 'ledger' ? 'account_v_btn_primary' : 'account_v_btn_outlined'">Ledger</VBtn>
          <VBtn @click="activeTab = 'invoices'" size="small"
            :class="activeTab === 'invoices' ? 'account_v_btn_primary' : 'account_v_btn_outlined'">Invoices</VBtn>
        </div>
      </VCol>
    </VRow>

    <VRow>
      <VCol v-for="(widget, index) in widgetData" :key="index" cols="12" lg="4" md="4">
        <VCard :subtitle="widget.title" class="account_widget_vcard account_vcard_border"
          :class="index === 0 ? 'account_v_card_dark' : ''">
          <template #append>
            <component :is="$renderTablerIcon(widget.icon)" style="font-size: 16px;"
              :class="index === 0 ? 'account_v_card_dark_icon' : ''" />
          </template>
          <VCardText>
            <h5 :class="index === 0 ? 'account_text_white' : 'account_text_dark'"
              class="account_texth5 mb-0 font-weight-bold">{{ widget.value }} {{ widget.extra || ''
              }}</h5>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow>
      <VCol cols="12">
        <VCard class="account_ui_vcard account_vcard_border pa-1" title="Customer Ledger"
          subtitle="A detailed view of all transactions.">
          <template #append>
            <div class="d-flex align-center gap-2">
              <VTextField style="min-inline-size: 250px;" class="accouting_field accouting_active_field"
                variant="outlined" density="compact" placeholder="Filter description...">
                <template #prepend-inner>
                  <component :is="$renderTablerIcon('search')" style="font-size: 20px;" />
                </template>
              </VTextField>

              <v-date-input class="accounting_date_input" placeholder="Select date range"
                style="min-inline-size: 300px;" cancel-text="Close" ok-text="Apply" multiple="range">
                <template #prepend-inner>
                  <component :is="$renderTablerIcon('calendar')" style="font-size: 20px;" />
                </template>
              </v-date-input>
              <VBtn class="account_v_btn_outlined">
                <template #prepend>
                  <component :is="$renderTablerIcon('download')" style="font-size: 20px;" />
                </template>
                Export
              </VBtn>
            </div>
          </template>

          <div class="pa-4">
            <VDataTable class="account_dynamic_table" :headers="tableHeaders" :items="tableItems">
              <template #item.status="{ item }">
                <VChip :class="{
                  'account_chip_primary': item.status === 'Paid',
                  'account_chip_secondary': item.status === 'Partially Paid',
                  'account_chip_outline': item.status === 'Outstanding',
                  'account_chip_error': item.status === 'Overdue',
                }" size="small" class="account_table_chip" :text="item.status" />
              </template>
            </VDataTable>

          </div>
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
              <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                density="compact" placeholder="Enter amount" />
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
