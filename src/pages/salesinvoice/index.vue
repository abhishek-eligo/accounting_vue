<script setup>
import { ref, computed, onMounted, watchEffect } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'
import { title } from '@primeuix/themes/aura/card';

// Headers from screenshots
const invoiceHeaders = ref([
  { title: 'Invoice Number', value: 'invoiceNumber', visible: true, minWidth: '120px' },
  { title: 'Customer Name', value: 'customerName', visible: true, minWidth: '120px' },
  { title: 'Invoice Date', value: 'invoiceDate', visible: true, minWidth: '120px' },
  { title: 'Due Date', value: 'dueDate', visible: true, minWidth: '120px' },
  { title: 'Currency', value: 'currency', visible: true },
  { title: 'Exch. Rate', value: 'exchangeRate', visible: true },
  { title: 'Amount (FCY)', value: 'amountFcy', visible: true },
  { title: 'Amount (BCY)', value: 'amountBcy', visible: true },
  { title: 'Amount Paid', value: 'amountPaid', visible: true },
  { title: 'Return Amount', value: 'returnAmount', visible: true },
  { title: 'Amount Due', value: 'amountDue', visible: true },
  { title: 'Taxable Value', value: 'taxableValue', visible: true },
  { title: 'GST Amount', value: 'gstAmount', visible: true },
  { title: 'GST Type', value: 'gstType', visible: true },
  { title: 'Place of Supply', value: 'placeOfSupply', visible: true },
  { title: 'Payment Status', value: 'status', visible: true },
  { title: 'Created By', value: 'createdBy', visible: true },
  { title: 'Actions', value: 'actions', visible: true },
]);

// Invoice Items from screenshots (sample)
const invoiceItems = ref([
  {
    invoiceNumber: 'INV-1000',
    customerName: 'Synergy LLC',
    invoiceDate: 'Jun 9, 2025',
    dueDate: 'Jul 9, 2025',
    currency: 'USD',
    exchangeRate: '83.50',
    amountFcy: '$400.00',
    amountBcy: '₹33,400.00',
    amountPaid: '₹0.00',
    returnAmount: '-',
    amountDue: '₹33,400.00',
    taxableValue: '₹30,000.00',
    gstAmount: '₹3,400.00',
    gstType: 'UTGST',
    placeOfSupply: 'Tamil Nadu',
    status: 'Overdue',
    createdBy: 'John Doe'
  },
  {
    invoiceNumber: 'INV-1001',
    customerName: 'Starlight Co.',
    invoiceDate: 'Jul 14, 2025',
    dueDate: 'Aug 13, 2025',
    currency: 'EUR',
    exchangeRate: '90.75',
    amountFcy: '€4,450.00',
    amountBcy: '₹4,03,837.50',
    amountPaid: '₹0.00',
    returnAmount: '-',
    amountDue: '₹4,03,837.50',
    taxableValue: '₹3,63,450.00',
    gstAmount: '₹40,387.50',
    gstType: 'UTGST',
    placeOfSupply: 'Maharashtra',
    status: 'Overdue',
    createdBy: 'John Doe'
  },
  {
    invoiceNumber: 'INV-1002',
    customerName: 'Synergy LLC',
    invoiceDate: 'Jun 20, 2025',
    dueDate: 'Jul 20, 2025',
    currency: 'INR',
    exchangeRate: '1.00',
    amountFcy: '₹4,800.00',
    amountBcy: '₹4,800.00',
    amountPaid: '₹0.00',
    returnAmount: '-',
    amountDue: '₹4,800.00',
    taxableValue: '₹4,320.00',
    gstAmount: '₹480.00',
    gstType: 'CGST&SGST',
    placeOfSupply: 'Uttar Pradesh',
    status: 'Paid',
    createdBy: 'Jane Smith'
  }
])

// Filters
const invoiceFilters = ref([
  { title: 'Payment Status', checked: true },
  { title: 'Currency', checked: false },
  { title: 'GST Type', checked: false },
  { title: 'Place of Supply', checked: false },
  { title: 'Created By', checked: false },
  { title: 'Invoice Date From', checked: false },
  { title: 'Invoice Date To', checked: false },
  { title: 'Due Date From', checked: false },
  { title: 'Due Date To', checked: false },
]);

// Dropdown filter options
const paymentStatusItems = ref([
  { title: 'Paid', value: 'Paid' },
  { title: 'Overdue', value: 'Overdue' },
  { title: 'Outstanding', value: 'Outstanding' },
]);

const currencyItems = ref([
  { title: 'INR', value: 'INR' },
  { title: 'USD', value: 'USD' },
  { title: 'EUR', value: 'EUR' },
]);

// Summary widgets
const invoiceWidgets = ref([
  {
    label: 'TOTAL SALES (BCY)',
    value: '₹84,67,225.00',
    icon: 'mdi-finance',
    color: 'primary'
  },
  {
    label: 'TOTAL OUTSTANDING',
    value: '₹15,90,567.21',
    icon: 'mdi-cash-remove',
    color: 'warning'
  },
  {
    label: 'TOTAL OVERDUE',
    value: '₹35,25,725.52',
    icon: 'mdi-bell-alert-outline',
    color: 'error'
  },
  {
    label: 'INVOICES PAID',
    value: '16 / 50',
    icon: 'mdi-check-circle-outline',
    color: 'success'
  },
  {
    label: 'TOTAL GST',
    value: '₹8,46,722.50',
    icon: 'mdi-bank-outline',
    color: 'info'
  }
]);

const activeInvoiceType = ref('item');

// Headers for Item Invoice table
const itemInvoiceHeaders = ref([
  { title: 'Item', value: 'item', minWidth: '250px' },
  { title: 'Qty', value: 'quantity', minWidth: '70px' },
  { title: 'Unit', value: 'unit', minWidth: '70px' },
  { title: 'Rate', value: 'rate', minWidth: '70px' },
  { title: 'Discount(%)', value: 'discount', minWidth: '70px' },
  { title: 'Taxable Amt.', value: 'taxableAmount', minWidth: '' },
  { title: 'GST(%)', value: 'gst', minWidth: '' },
  { title: 'Total', value: 'total', minWidth: '' },
  { title: '', value: 'actions', minWidth: '' },
])

const gstList = ref(['0%', '5%', '12%', '18%', '28%']);

const serviceInvoiceHeaders = ref([
  { title: 'Service', value: 'item', minWidth: '250px' },
  { title: 'Amount', value: 'rate', minWidth: '100px' },
  { title: 'Discount(%)', value: 'discount', minWidth: '100px' },
  { title: 'Taxable Amt.', value: 'taxableAmount' },
  { title: 'GST(%)', value: 'gst' },
  { title: 'Total', value: 'total' },
  { title: '', value: 'actions' },
]);

function defaultRow(isService = false) {
  return {
    item: '',
    hsnCode: '',
    quantity: isService ? undefined : null,
    unit: isService ? undefined : '',
    rate: null,
    discount: null,
    taxableAmnt: 0,
    gst: '18%',
    total: 0,
    lockedRate: false
  };
}

const itemInvoiceData = ref([defaultRow()]);
const serviceInvoiceData = ref([defaultRow(true)]);


function addInvoiceRow(type) {
  const target = type === 'service' ? serviceInvoiceData : itemInvoiceData;
  target.value.push({ ...defaultRow(type === 'service'), lockedRate: target.value.length > 0 });
  target.value.forEach((row, i) => (row.lockedRate = i !== 0));
}

function removeInvoiceRow(index, type) {
  const target = type === 'service' ? serviceInvoiceData : itemInvoiceData;
  if (target.value.length > 1) {
    target.value.splice(index, 1);
    target.value.forEach((row, i) => (row.lockedRate = i !== 0));
  }
}

function setupInvoiceWatch(dataList) {
  watchEffect(() => {
    dataList.value.forEach((row) => {
      const qty = parseFloat(row.quantity) || 1;
      const rate = parseFloat(row.rate) || 0;
      const discountPercent = parseFloat(row.discount) || 0;

      const baseAmount = (row.quantity !== undefined ? qty : 1) * rate;
      const discountAmount = baseAmount * (discountPercent / 100);
      const taxableAmount = baseAmount - discountAmount;
      const gstPercent = parseFloat(row.gst) || 0;
      const gstAmount = taxableAmount * (gstPercent / 100);
      const total = taxableAmount + gstAmount;

      row.taxableAmnt = taxableAmount.toFixed(2);
      row.total = total.toFixed(2);
    });
  });
}

setupInvoiceWatch(itemInvoiceData);
setupInvoiceWatch(serviceInvoiceData);

onMounted(() => {
  itemInvoiceData.value[0].lockedRate = false;
  serviceInvoiceData.value[0].lockedRate = false;
});

</script>

<template>
  <div class="account_ui_vcard">
    <VRow class="mb-3">
      <VCol cols="12">
        <VCard class="account_vcard_border" title="New Invoice"
          subtitle="Fill out the details below to create a new sales invoice.">
          <template #append>
            <VBtn icon="mdi-cog-outline" variant="text" size="x-small" rounded="" />
          </template>
          <VCardText>
            <VRow>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Bill To</label>
                <VAutocomplete placeholder="Select a customer" class="accouting_field accouting_active_field"
                  variant="outlined">
                  <template #append>
                    <VBtn class="account_v_btn_outlined" rounded="" icon="mdi-plus-circle-outline" size="x-small" />
                  </template>
                </VAutocomplete>
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Invoice Number</label>
                <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Customer GSTIN</label>
                <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Invoice Date</label>
                <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Currency</label>
                <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Due Date</label>
                <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Place of Supply</label>
                <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Billing Address</label>
                <VTextarea class="accounting_v_textarea" variant="outlined" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <VCheckbox density="compact" class="account_v_checkbox"
                  label="Shipping address is the same as billing address" />
              </VCol>
            </VRow>
            <VDivider />
            <VRow>
              <VCol cols="12" lg="12" md="12">
                <div class="d-flex align-center gap-2 mb-3">
                  <VBtn :class="activeInvoiceType === 'item' ? 'account_v_btn_primary' : 'account_v_btn_outlined'"
                    @click="activeInvoiceType = 'item'">
                    Item Invoice
                  </VBtn>
                  <VBtn :class="activeInvoiceType === 'service' ? 'account_v_btn_primary' : 'account_v_btn_outlined'"
                    @click="activeInvoiceType = 'service'">
                    Service Invoice
                  </VBtn>
                </div>

                <VDataTable :headers="activeInvoiceType === 'item' ? itemInvoiceHeaders : serviceInvoiceHeaders"
                  :items="activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData"
                  class="account_dynamic_table account_invoice_table">
                  <template #item.item="{ item, index }">
                    <VTextField
                      v-model="(activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData)[index].item"
                      placeholder="Item/Service description" class="accouting_field accouting_active_field"
                      variant="outlined" />
                  </template>

                  <template v-if="activeInvoiceType === 'item'" #item.quantity="{ item, index }">
                    <VTextField v-model="itemInvoiceData[index].quantity" class="accouting_field accouting_active_field"
                      variant="outlined" placeholder="0" density="compact" />
                  </template>

                  <template v-if="activeInvoiceType === 'item'" #item.unit="{ item, index }">
                    <VTextField v-model="itemInvoiceData[index].unit" class="accouting_field accouting_active_field"
                      suffix="pcs" variant="outlined" placeholder="0" density="compact" />
                  </template>

                  <template #item.rate="{ item, index }">
                    <VTextField
                      v-model="(activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData)[index].rate"
                      :readonly="(activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData)[index].lockedRate"
                      class="accouting_field accouting_active_field" variant="outlined" placeholder="0"
                      density="compact" />
                  </template>

                  <template #item.discount="{ item, index }">
                    <VTextField
                      v-model="(activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData)[index].discount"
                      class="accouting_field accouting_active_field" variant="outlined" placeholder="0"
                      density="compact" />
                  </template>

                  <template #item.taxableAmount="{ item, index }">
                    <p class="mb-0">₹{{ (activeInvoiceType === 'item' ? itemInvoiceData :
                      serviceInvoiceData)[index].taxableAmnt }}</p>
                  </template>

                  <template #item.gst="{ item, index }">
                    <VSelect v-model="(activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData)[index].gst"
                      class="accouting_field accouting_active_field" variant="outlined" :items="gstList" />
                  </template>

                  <template #item.total="{ item, index }">
                    <p class="mb-0">₹{{ (activeInvoiceType === 'item' ? itemInvoiceData :
                      serviceInvoiceData)[index].total }}</p>
                  </template>

                  <template #item.actions="{ index }">
                    <VIcon icon="mdi-trash-can-outline" class="cursor-pointer table_row_icon" :class="{
                      'opacity-50': (activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData).length === 1,
                      'cursor-not-allowed': (activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData).length === 1
                    }" :disabled="(activeInvoiceType === 'item' ? itemInvoiceData : serviceInvoiceData).length === 1"
                      @click="removeInvoiceRow(index, activeInvoiceType)" />
                  </template>
                </VDataTable>
              </VCol>
              <VCol cols="12">
                <VBtn class="account_v_btn_outlined mt-3" prepend-icon="mdi-plus-circle-outline" variant="text"
                  @click="addInvoiceRow(activeInvoiceType)">
                  Add Another Line
                </VBtn>
              </VCol>
            </VRow>
            <VDivider />
            <VRow>
              <VCol cols="12" lg="6" sm="6"></VCol>
              <VCol cols="12" lg="6" sm="6">
                <VRow>
                  <VCol cols="6">
                    <VCard class="account_vcard_border shadow-none w-100">
                      <div class="pa-3">
                        <h6 class="account_gst_title mb-0">GST Breakdown</h6>
                        <div class="d-flex align-center justify-space-between py-2">
                          <span class="account_gst_subtitle">CGST</span>
                          <span class="account_gst_subtitle_val">₹0.00</span>
                        </div>
                        <div class="d-flex align-center justify-space-between pb-2">
                          <span class="account_gst_subtitle">SGST</span>
                          <span class="account_gst_subtitle_val">₹0.00</span>
                        </div>
                        <div class="d-flex align-center justify-space-between">
                          <span class="account_gst_subtitle">IGST</span>
                          <span class="account_gst_subtitle_val">₹0.00</span>
                        </div>
                      </div>
                    </VCard>
                  </VCol>
                  <VCol cols="6">
                    <VCard class="account_vcard_border shadow-none w-100">
                      <div class="pa-3">
                        <h6 class="account_gst_title mb-0">Totals</h6>
                        <div class="d-flex align-center justify-space-between py-2">
                          <span class="account_gst_subtitle">Subtotal</span>
                          <span class="account_gst_subtitle_val">₹50.00</span>
                        </div>
                        <div class="d-flex align-center justify-space-between">
                          <span class="account_gst_subtitle">Total Discount</span>
                          <span class="account_gst_subtitle_val">- ₹0.00</span>
                        </div>
                        <VDivider class="my-2" />
                        <div class="d-flex align-center justify-space-between mb-2">
                          <span class="account_gst_subtitle">Taxable Value</span>
                          <span class="account_gst_subtitle_val">₹50.00</span>
                        </div>
                        <div class="d-flex align-center justify-space-between">
                          <span class="account_gst_subtitle">GST (18%)</span>
                          <span class="account_gst_subtitle_val">₹9.00</span>
                        </div>
                        <div class="d-flex align-center justify-space-between">
                          <div style="min-width: 200px;" class="d-flex align-center gap-1">
                            <span class="account_gst_subtitle">Round Off</span>
                            <VSwitch density="compact" inset class="account_swtich_btn" color="primary" hide-details />
                          </div>
                          <VTextField style="max-width: 100px;" class="accouting_field accouting_active_field"
                            type="number" variant="outlined" placeholder="0.00" density="compact" />
                        </div>
                        <VDivider class="my-2" />
                        <div class="d-flex align-center justify-space-between">
                          <h6 class="account_gst_title mb-0">Grand Total</h6>
                          <h6 class="account_gst_title mb-0">₹59.00</h6>
                        </div>
                        <div class="d-flex mt-1 justify-end">
                          <small class="base_currency_label">Base Currency (INR) ₹59.00</small>
                        </div>
                      </div>
                    </VCard>
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
            <VDivider />
            <VRow>
              <VCol cols="12">
                <h6 class="account_gst_title mb-0">Receive Payment</h6>
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <div class="mb-2">
                  <label class="account_label mb-2">Amount Received</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    type="number" />
                </div>
                <div>
                  <label class="account_label mb-2">Amount Received</label>
                  <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
                    type="number" />
                </div>
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <VCard class="account_vcard_border shadow-none pa-4">
                  <div class="">
                    <h6 class="account_gst_title mb-1">Balance Due</h6>
                    <h4 class="mb-0 account_invoice_balance_due mb-1">₹236.00</h4>
                    <small class="base_currency_label mb-2">Base Currency (INR) ₹59.00</small>
                  </div>
                </VCard>
              </VCol>
            </VRow>
            <VDivider />

            <VRow>
              <VCol cols="12">
                <label class="account_label mb-2">Notes / Terms & Conditions</label>
                <VTextarea class="accounting_v_textarea" placeholder="Thank you for your business. All payments are due within 30 days." variant="outlined" />
                <div class="d-flex align-center gap-2 justify-end mt-3">
                  <VBtn class="account_v_btn_primary" prepend-icon="mdi-content-save-outline">Save as Default</VBtn>
                  <VBtn class="account_v_btn_outlined" prepend-icon="mdi-send-outline">Save & Send Invoice</VBtn>
                </div>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <div class="pb-4 d-flex align-center justify-end">
      <VBtn class="account_v_btn_primary" prepend-icon="mdi-plus-circle-outline">Create Invoice</VBtn>
    </div>
    <div class="account_invoice_list">
      <DynamicDataTable title="Invoices" :headers="invoiceHeaders" :items="invoiceItems" :filters="invoiceFilters"
        :status-items="paymentStatusItems" :account-type-items="[]" :currency-items="currencyItems"
        :widgets="invoiceWidgets" />
    </div>
  </div>
</template>
