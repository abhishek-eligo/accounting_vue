<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" md="12" sm="12">
        <VCard class="account_vcard_border shadow-none gst_reports_vcard">
          <div class="d-flex align-center gap-3">
            <div>
              <v-icon size="32" class="account_icon_color">mdi-file-document-outline</v-icon>
            </div>
            <div>
              <h5 class="gst_reports_title mb-0">GST Report Generator</h5>
              <p class="account_text_subtitle mb-0">Select a report type and date range to generate your
                GST compliance reports.</p>
            </div>
          </div>

          <div class="mt-3">
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="12">
                <label class="account_label mb-2">Report Type</label>
                <VSelect class="accouting_field accouting_active_field" variant="outlined"
                  placeholder="Select a report to generate" :items="reportType" v-model="selectedReportType" />
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12">
                <label class="account_label mb-2">Date Range</label>
                <VMenu v-model="dateMenu" :close-on-content-click="false" max-width="600">
                  <template v-slot:activator="{ props }">
                    <VTextField v-bind="props" class="accouting_field accouting_active_field" variant="outlined"
                      :model-value="dateRangeText" placeholder="Select Date range" readonly
                      append-inner-icon="mdi-calendar" />
                  </template>
                  <div class="d-flex gap-2">
                    <VDatePicker v-model="dateRange" range @update:model-value="onDateRangeChange" />
                    <VDatePicker v-model="dateRange" range @update:model-value="onDateRangeChange" />
                  </div>
                </VMenu>
              </v-col>
              <VCol cols="12" class="d-flex justify-end">
                <VBtn class="account_v_btn_primary" prepend-icon="mdi-tray-arrow-down" rounded="1">Generate Reports
                </VBtn>
              </VCol>
            </v-row>
          </div>
        </VCard>

        <VDivider />

        <div class="pa-3">
          <h4 class="gst_report_title mb-0">GSTR-3B</h4>
        </div>

        <VCard class="account_vcard_border shadow-none gst_reports_table_vcard mt-3" :title="selectedReportType"
          v-if="selectedReportType">
          <template #append>
            <!-- <VBtn class="account_v_btn_primary"><v-icon class="mr-2"></v-icon>Generate Reports</VBtn>   -->

          </template>
          <div>
            <!-- GSTR-1 Table -->
            <v-table v-if="selectedReportType === 'GSTR-1'" density="compact">
              <thead>
                <tr>
                  <th>Invoice No</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>GSTIN</th>
                  <th>Taxable Value</th>
                  <th>CGST</th>
                  <th>SGST</th>
                  <th>IGST</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in gstr1Data" :key="row.invoiceNo">
                  <td>{{ row.invoiceNo }}</td>
                  <td>{{ row.date }}</td>
                  <td>{{ row.customer }}</td>
                  <td>{{ row.gstin }}</td>
                  <td>{{ row.taxableValue }}</td>
                  <td>{{ row.cgst }}</td>
                  <td>{{ row.sgst }}</td>
                  <td>{{ row.igst }}</td>
                </tr>
              </tbody>
            </v-table>

            <!-- GSTR-2 Table -->
            <v-table v-else-if="selectedReportType === 'GSTR-2'" density="compact">
              <thead>
                <tr>
                  <th>Invoice No</th>
                  <th>Date</th>
                  <th>Supplier</th>
                  <th>GSTIN</th>
                  <th>Taxable Value</th>
                  <th>CGST</th>
                  <th>SGST</th>
                  <th>IGST</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in gstr2Data" :key="row.invoiceNo">
                  <td>{{ row.invoiceNo }}</td>
                  <td>{{ row.date }}</td>
                  <td>{{ row.supplier }}</td>
                  <td>{{ row.gstin }}</td>
                  <td>{{ row.taxableValue }}</td>
                  <td>{{ row.cgst }}</td>
                  <td>{{ row.sgst }}</td>
                  <td>{{ row.igst }}</td>
                </tr>
              </tbody>
            </v-table>

            <!-- GSTR-3B Table -->
            <v-table v-else-if="selectedReportType === 'GSTR-3B'" density="compact">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Taxable Value</th>
                  <th>CGST</th>
                  <th>SGST</th>
                  <th>IGST</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in gstr3bData" :key="index">
                  <td>{{ row.description }}</td>
                  <td>{{ row.taxableValue }}</td>
                  <td>{{ row.cgst }}</td>
                  <td>{{ row.sgst }}</td>
                  <td>{{ row.igst }}</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </VCard>

      </v-col>
    </v-row>
  </div>
</template>


<script setup>
const reportType = ref(['GSTR-1', 'GSTR-2', 'GSTR-3B']);

const reportsTypeList = ref([
  {
    title: 'GSTR-1',
    summary_report: 'GSTR-3B Report',
    table: [
      {
        title: 'Details of Outward Supplies and inward supplies liable to reverse charge',
        headers: [
          {
            title: 'Nature of Supplies',
            value: 'nature_of_supplies'
          },
          {
            title: 'Taxable Value',
            value: 'taxable_value'
          },
          {
            title: 'IGST',
            value: 'igst'
          },
          {
            title: 'CGST',
            value: 'cgst'
          },
          {
            title: 'SGST',
            value: 'sgst'
          },
        ],
        tableData: [
          {
            nature_of_supplies: '(a) Outward taxable supplies (other than zero rated, nil rated and exempted)',
            taxable_value: '₹5,85,000.50',
            igst: '₹54,900.09',
            cgst: '₹25,425.05',
            sgst: '₹25,425.05',
          },
          {
            nature_of_supplies: '(d) Inward supplies (liable to reverse charge))',
            taxable_value: '₹75,000.00',
            igst: '₹0.00',
            cgst: '₹6,750.00',
            sgst: '₹6,750.00',
          }
        ]
      }
    ]

  }
])
const selectedReportType = ref("");
const dateMenu = ref(false);
const dateRange = ref([]);

const dateRangeText = computed(() => {
  if (!dateRange.value || dateRange.value.length === 0) {
    return '';
  }
  if (dateRange.value.length === 1) {
    return formatDate(dateRange.value[0]);
  }
  if (dateRange.value.length === 2) {
    return `${formatDate(dateRange.value[0])} - ${formatDate(dateRange.value[1])}`;
  }
  return '';
});

const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-GB');
};

const onDateRangeChange = (newRange) => {
  if (newRange && newRange.length === 2) {
    dateMenu.value = false;
  }
};


const gstr1Data = ref([
  { invoiceNo: 'INV001', date: '01/07/2025', customer: 'ABC Ltd', gstin: '27XXX1234X1Z', taxableValue: 10000, cgst: 900, sgst: 900, igst: 0 },
  { invoiceNo: 'INV002', date: '02/07/2025', customer: 'XYZ Pvt', gstin: '29XXX5678Z2Y', taxableValue: 5000, cgst: 0, sgst: 0, igst: 900 },
]);

const gstr2Data = ref([
  { invoiceNo: 'PINV001', date: '01/07/2025', supplier: 'MNO Ltd', gstin: '07ABC1234D1Z', taxableValue: 8000, cgst: 720, sgst: 720, igst: 0 },
]);

const gstr3bData = ref([
  { description: 'Outward Supplies', taxableValue: 30000, cgst: 2700, sgst: 2700, igst: 0 },
  { description: 'ITC Claimed', taxableValue: '-', cgst: 1500, sgst: 1500, igst: 0 },
]);


</script>
