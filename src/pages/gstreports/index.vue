<script setup>
import { ref, computed } from 'vue'
import { toast } from 'vue3-toastify';

const dates = ref()
const reportType = ref(['GSTR-1', 'GSTR-2', 'GSTR-3B'])
const selectedReportType = ref('')
const showTables = ref(false)

const reportsTypeList = ref([
  {
    title: 'GSTR-3B',
    summary_report: 'Monthly Summary Return',
    table: [
      {
        title: '3.1 Details of Outward Supplies and inward supplies liable to reverse charge',
        headers: [
          { title: 'Nature of Supplies', value: 'nature_of_supplies', type: 'string' },
          { title: 'Taxable Value', value: 'taxable_value', type: 'string' },
          { title: 'IGST', value: 'igst', type: 'string' },
          { title: 'CGST', value: 'cgst', type: 'string' },
          { title: 'SGST', value: 'sgst', type: 'string' },
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
            nature_of_supplies: '(d) Inward supplies (liable to reverse charge)',
            taxable_value: '₹75,000.00',
            igst: '₹0.00',
            cgst: '₹6,750.00',
            sgst: '₹6,750.00',
          }
        ]
      },
      {
        title: '4. Eligible ITC',
        headers: [
          { title: 'Details', value: 'details', type: 'string' },
          { title: 'Amount (INR)', value: 'amount_ind', type: 'string', align: 'end' },
        ],
        tableData: [
          {
            group: '(A) ITC Available (whether in full or part)',
            rows: [
              { details: '(1) Import of goods', amount_ind: '₹12,000.00' },
              { details: '(2) Import of services', amount_ind: '₹5,000.00' },
              { details: '(3) Inward supplies liable to reverse charge', amount_ind: '₹13,500.00' },
              { details: '(4) Inward supplies from ISD', amount_ind: '₹2,500.00' },
              { details: '(5) All other ITC', amount_ind: '₹45,000.00' }
            ]
          }
        ],
        totalRow: {
          details: 'Total ITC Available',
          amount_ind: '₹78,000.00',
          is_total: true
        }
      }
    ]
  },
  {
    title: 'GSTR-1',
    summary_report: 'Outward Supplies Summary',
    table: [
      {
        title: 'B2B Invoices',
        headers: [
          { title: 'Invoice Number', value: 'invoice_number', type: 'string' },
          { title: 'Customer GSTIN', value: 'gstin', type: 'string' },
          { title: 'Invoice Amount', value: 'amount', type: 'string' },
        ],
        tableData: [
          {
            invoice_number: 'INV-001',
            gstin: '29ABCDE1234F2Z5',
            amount: '₹1,50,000.00',
          },
          {
            invoice_number: 'INV-002',
            gstin: '27ABCDE4567H9Z6',
            amount: '₹2,20,000.00',
          }
        ]
      }
    ]
  },
  {
    title: 'GSTR-2',
    summary_report: 'Inward Supplies Summary',
    table: [
      {
        title: 'Purchases from Registered Dealers',
        headers: [
          { title: 'Vendor Name', value: 'vendor', type: 'string' },
          { title: 'Invoice Amount', value: 'amount', type: 'string' },
          { title: 'GST Paid', value: 'gst', type: 'string' },
        ],
        tableData: [
          {
            vendor: 'ABC Traders',
            amount: '₹55,000.00',
            gst: '₹9,900.00',
          },
          {
            vendor: 'XYZ Distributors',
            amount: '₹75,000.00',
            gst: '₹13,500.00',
          }
        ]
      }
    ]
  }
])

const selectedReportData = computed(() => {
  return reportsTypeList.value.find(r => r.title === selectedReportType.value)
})

function handleGenerate() {
  if (selectedReportType.value && dates.value?.[0] && dates.value?.[1]) {
    showTables.value = true
  } else {
    showTables.value = false
    toast.error("Please select report type and date range.");
  }
}
</script>

<template>
  <div>
    <v-row>
      <v-col cols="12">
        <VCard class="account_vcard_border shadow-none gst_reports_vcard pa-6">
          <div class="d-flex align-center gap-3">
            <IconFileAnalytics class="account_icon_color" size="38" style="margin-right: 6px;" />
            <div>
              <h5 class="gst_reports_title mb-0">GST Report Generator</h5>
              <p class="account_text_subtitle mb-0">Select a report type and date range to generate your GST compliance
                reports.</p>
            </div>
          </div>

          <v-row class="mt-3">
            <v-col cols="12" md="6">
              <label class="account_label mb-2">Report Type</label>
              <VSelect class="accouting_field accouting_active_field" variant="outlined"
                placeholder="Select a report to generate" :items="reportType" v-model="selectedReportType" />
            </v-col>
            <v-col cols="12" md="6">
              <label class="account_label mb-2 w-100">Date Range</label>
              <v-date-input class="accounting_date_input w-100" placeholder="Pick a date range" v-model="dates"
                multiple="range">
                <template #prepend-inner>
                  <IconCalendar size="20" />
                </template>
              </v-date-input>
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
              <VBtn class="account_v_btn_primary" rounded="1" @click="handleGenerate">
                <template #prepend>
                  <IconDownload size="18" />
                </template>
                Generate Reports
              </VBtn>
            </v-col>
          </v-row>
        </VCard>

        <VDivider class="my-5" />

        <!-- Render tables only when generate is clicked -->
        <div v-if="showTables && selectedReportData">
          <div v-for="(section, index) in selectedReportData.table" :key="index" class="mb-6">
            <h4 class="gst_report_title mb-2">{{ section.title }}</h4>
            <VCard class="account_vcard_border shadow-none gst_reports_table_vcard mt-3">
              <VDataTable :headers="section.headers" :items="[]" class="account_dynamic_table" hide-default-footer>
                <template #body>
                  <!-- GROUP + ROWS -->
                  <template v-if="section.tableData?.[0]?.group">
                    <template v-for="(group, gi) in section.tableData" :key="gi">
                      <!-- Group Header Row -->
                      <tr class="group-header-row">
                        <td :colspan="section.headers.length" class="text-medium-emphasis font-weight-bold">
                          {{ group.group }}
                        </td>
                      </tr>

                      <!-- Group Rows -->
                      <tr v-for="(row, ri) in group.rows" :key="`${gi}-${ri}`">
                        <td v-for="header in section.headers" :key="header.value">
                          <p :class="header.align === 'end' ? 'text-end pr-4' : 'pl-6'" class="mb-0">{{
                            row[header.value] || '-' }}</p>
                        </td>
                      </tr>
                    </template>
                  </template>

                  <!-- SIMPLE TABLE -->
                  <template v-else>
                    <tr v-for="(row, i) in section.tableData" :key="i">
                      <td v-for="header in section.headers" :key="header.value"
                        :class="header.align === 'end' ? 'text-end pr-4' : 'pl-4'">
                        {{ row[header.value] || '-' }}
                      </td>
                    </tr>
                  </template>

                  <!-- TOTAL ROW -->
                  <tr v-if="section.totalRow" class="font-weight-bold bg-grey-lighten-3">
                    <td v-for="header in section.headers" :key="header.value"
                      :class="header.align === 'end' ? 'text-end pr-4' : 'pl-4'">
                      {{ section.totalRow[header.value] || '' }}
                    </td>
                  </tr>
                </template>
              </VDataTable>
            </VCard>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.group-header-row td {
  background-color: #f1f1f1;
  font-weight: 600;
  padding-left: 12px;
}

.v-data-table .pl-4 {
  padding-left: 16px;
}

.v-data-table .pl-6 {
  padding-left: 32px;
}

.v-data-table .pr-4 {
  padding-right: 16px;
}

.v-data-table td {
  font-size: 14px;
  vertical-align: middle;
}
</style>
