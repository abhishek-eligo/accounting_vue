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

const customersList = ref([
  {
    title: 'Innovative Inc.',
    value: 'innovative_inc',
    data: {
      name: 'Innovative Inc.',
      mobile: '9876543210',
      openingBalance: '0',
      mailingName: 'Innovative Incorporated',
      email: 'contact@innovativeinc.com',
      address: '123 Innovation Drive, Tech City',
      state: 'Karnataka',
      pincode: '560001',
      country: 'India',
      gstin: '29AABC1234D1Z5',
      pan: 'AABC1234D',
      taxReg: 'TRN123456',
      tds: false,
      creditLimit: '500000',
      creditPeriod: '30',
      billWise: true,
      bankName: 'HDFC Bank',
      accountNumber: '123456789012',
      ifscCode: 'HDFC0001234',
      addCountry1: 'India',
      shipToAddress: '123 Innovation Drive, Tech City, Karnataka, 560001'
    }
  },
  {
    title: 'Solution Corp.',
    value: 'solution_corp',
    data: {
      name: 'Solution Corp.',
      mobile: '9123456789',
      openingBalance: '10000',
      mailingName: 'Solution Corporation',
      email: 'info@solutioncorp.com',
      address: '456 Business Avenue, Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India',
      gstin: '27ADEF5678G1Z3',
      pan: 'ADEF5678G',
      taxReg: 'TRN789012',
      tds: true,
      creditLimit: '750000',
      creditPeriod: '45',
      billWise: false,
      bankName: 'ICICI Bank',
      accountNumber: '987654321098',
      ifscCode: 'ICIC0005678',
      addCountry1: 'India',
      shipToAddress: '456 Business Avenue, Mumbai, Maharashtra, 400001'
    }
  },
  {
    title: 'Quantum Tech',
    value: 'quantum_tech',
    data: {
      name: 'Quantum Tech',
      mobile: '9988776655',
      openingBalance: '5000',
      mailingName: 'Quantum Technologies',
      email: 'support@quantumtech.com',
      address: '789 Tech Park, Chennai',
      state: 'Tamil Nadu',
      pincode: '600001',
      country: 'India',
      gstin: '33AGHI9012J1Z1',
      pan: 'AGHI9012J',
      taxReg: 'TRN345678',
      tds: false,
      creditLimit: '300000',
      creditPeriod: '15',
      billWise: true,
      bankName: 'Axis Bank',
      accountNumber: '456789123456',
      ifscCode: 'UTIB0009012',
      addCountry1: 'India',
      shipToAddress: '789 Tech Park, Chennai, Tamil Nadu, 600001'
    }
  }
])

const addNewCustomerVisible = ref(false);
const showAddCustomerForm = () => {
  addNewCustomerVisible.value = !addNewCustomerVisible.value;
}

// Reactive variables for form fields
const selectedCustomer = ref(null);
const customerGSTIN = ref('');
const billingAddress = ref('');
const currency = ref('INR');
const invoiceNumber = ref('');
const invoiceDate = ref('');
const dueDate = ref('');
const placeOfSupply = ref('');
const shippingSameAsBilling = ref(true);

// Computed property for customer GSTIN display
const customerGSTINDisplay = computed(() => {
  if (!selectedCustomer.value) return '';
  const customer = customersList.value.find(c => c.value === selectedCustomer.value);
  if (!customer) return '';
  return `GSTIN: ${customer.data.gstin}\nBilling Address: ${customer.data.address}, ${customer.data.state}, ${customer.data.pincode}\nCurrency: ${currency.value}`;
});

// Watch for customer selection changes
watchEffect(() => {
  if (selectedCustomer.value) {
    const customer = customersList.value.find(c => c.value === selectedCustomer.value);
    if (customer) {
      customerGSTIN.value = customer.data.gstin;
      billingAddress.value = `${customer.data.address}, ${customer.data.state}, ${customer.data.pincode}`;
      currency.value = customer.data.currency || 'INR'; // Default to INR if not specified
      placeOfSupply.value = customer.data.state;
      // Note: invoiceNumber, invoiceDate, and dueDate can be set based on your business logic
      // For example, you might want to auto-generate invoiceNumber or set dates
    }
  } else {
    customerGSTIN.value = '';
    billingAddress.value = '';
    currency.value = 'INR';
    placeOfSupply.value = '';
  }
});

const isInvoiceSettingsVisible = ref(false);

</script>

<template>
  <div class="account_ui_vcard">
    <VRow class="mb-3">
      <VCol cols="12">
        <VCard class="account_vcard_border" title="New Invoice"
          subtitle="Fill out the details below to create a new sales invoice.">
          <template #append>
            <VBtn @click="isInvoiceSettingsVisible = true" icon="mdi-cog-outline" variant="text" size="x-small"
              rounded="" />
          </template>
          <VCardText>
            <VRow>
              <VCol cols="12" lg="6" md="6">
                <label class="account_label mb-2">Bill To</label>
                <VAutocomplete v-model="selectedCustomer" placeholder="Select a customer"
                  class="accouting_field accouting_active_field" :items="customersList" variant="outlined">
                  <template #append>
                    <VBtn class="account_v_btn_outlined" @click="addNewCustomerVisible = true" rounded=""
                      icon="mdi-plus-circle-outline" size="x-small" />
                  </template>
                </VAutocomplete>
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <VRow>
                  <VCol cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Invoice Number</label>
                    <VTextField v-model="invoiceNumber" class="accouting_field accouting_active_field"
                      variant="outlined" density="compact" />
                  </VCol>
                  <VCol cols="12" lg="6" md="6">
                    <label class="account_label mb-2">Invoice Date</label>
                    <VTextField v-model="invoiceDate" class="accouting_field accouting_active_field" variant="outlined"
                      density="compact" />
                  </VCol>
                </VRow>
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <VTextarea :value="customerGSTINDisplay" class="accounting_v_textarea" variant="outlined" readonly
                  density="compact" />
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <VRow>
                  <VCol cols="12" lg="6" md="6" sm="12">
                    <label class="account_label mb-2">Currency</label>
                    <VTextField v-model="currency" class="accouting_field accouting_active_field" variant="outlined"
                      density="compact" />
                  </VCol>
                  <VCol cols="12" lg="6" md="6" sm="12">
                    <label class="account_label mb-2">Place of Supply</label>
                    <VTextField v-model="placeOfSupply" class="accouting_field accouting_active_field"
                      variant="outlined" density="compact" />
                  </VCol>
                  <VCol cols="12" lg="6" md="6">
                    <VCheckbox v-model="shippingSameAsBilling" density="compact" class="account_v_checkbox"
                      label="Shipping address is the same as billing address" />
                  </VCol>
                </VRow>
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
                <VTextarea class="accounting_v_textarea"
                  placeholder="Thank you for your business. All payments are due within 30 days." variant="outlined" />
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
    <v-dialog max-width="900" v-model="addNewCustomerVisible">
      <div v-if="addNewCustomerVisible" class="account_ui_vcard">
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
          <VCardText class="add_customer_dialog">
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
                <VSelect class="accouting_field accouting_active_field" variant="outlined" placeholder="e.g. 400001" />
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
                <VTextarea class="accounting_v_textarea" placeholder="Optional delivery address" variant="outlined" />

                <div class="d-flex align-center justify-end mt-4">
                  <VBtn class="account_v_btn_primary" prepend-icon="mdi-content-save-outline">Save Customer</VBtn>
                </div>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </div>
    </v-dialog>

    <v-dialog max-width="600" v-model="isInvoiceSettingsVisible">
      <div v-if="isInvoiceSettingsVisible" class="account_ui_vcard">
        <VCard title="Invoice Settings" class="pa-2 account_vcard_border"
          subtitle="Customize your invoice creation experience.">
          <template #append>
            <VBtn @click="isInvoiceSettingsVisible = false" icon="mdi-close" variant="text" size="x-small" rounded=""
              class="account_vcard_close_btn" />
          </template>
          <VCardText>
            <VRow class="acc_invoice_settings_row">
              <VCol class="py-2" cols="3">
                <VBtn size="small" class="account_v_btn_light">Numbering</VBtn>
              </VCol>
              <VCol class="py-2" cols="3">
                <VBtn size="small" class="account_v_btn_ghost" variant="text">Columns</VBtn>
              </VCol>
              <VCol class="py-2" cols="3">
                <VBtn size="small" class="account_v_btn_ghost" variant="text">Fields</VBtn>
              </VCol>
              <VCol class="py-2" cols="3">
                <VBtn size="small" class="account_v_btn_ghost" variant="text">Mode</VBtn>
              </VCol>
            </VRow>

            <VRow>
              <VCol cols="12">
                <VCard class="account_vcard_border shadow-none pa-4">
                  <h6 class="mb-4">Invoice Numbering</h6>
                  <VRow>
                    <VCol cols="12">
                      <VCard class="account_vcard_border shadow-none">
                        <VCardText class="py-1 px-2">
                          <div class="d-flex align-center justify-space-between">
                            <p class="mb-0">Change Every FY</p>
                            <VSwitch density="compact" color="primary" hide-details
                              class="account_swtich_btn invoice_stng_fy_switch" inset />
                          </div>
                        </VCardText>
                      </VCard>
                    </VCol>

                    <VCol cols="12">
                      <label class="account_label mb-2">Prefix Type</label>
                      <VRow>
                        <VCol cols="6">
                          <VBtn class="account_v_btn_outlined w-100" size="large">Text</VBtn>
                        </VCol>
                        <VCol cols="6">
                          <VBtn class="account_v_btn_outlined w-100" size="large">Financial Year</VBtn>
                        </VCol>
                      </VRow>
                    </VCol>

                    <VCol cols="12" lg="8" md="8">
                      <label class="account_label mb-2">Prefix Type</label>
                      <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" />
                    </VCol>
                    <VCol cols="12" lg="4" md="4">
                      <label class="account_label mb-2">Starting Number</label>
                      <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                        density="compact" />
                    </VCol>

                    <VCol cols="12">
                      <label class="account_label mb-2">Preview</label>
                      <VTextField class="accouting_field accouting_active_field" type="number" variant="outlined"
                        density="compact" />
                    </VCol>
                  </VRow>
                </VCard>
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
      </div>
    </v-dialog>
  </div>
</template>
