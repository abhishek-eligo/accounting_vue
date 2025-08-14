<script setup>
import { VCard, VCardText, VCardSubtitle, VCardTitle, VCardActions } from 'vuetify/lib/components/index.mjs';

const widgetData = ref([
    { title: 'Total Taxable Value', amount: '₹44,80,436.00', icon: 'mdi-file-document-outline' },
    { title: 'Total GST Collected', amount: '₹8,06,478.48', icon: 'mdi-bank' },
    { title: 'Reports Filed', amount: '12 ', icon: 'mdi-check-circle-outline' },
    { title: 'Reports Pending', amount: '0', icon: 'mdi-file-alert-outline' },
])

const gstSummaryRows = ref([
  {
    month: "July 2025",
    gstr1: {
      taxableValue: "₹2,83,443.00",
      totalTax: "₹51,019.74",
      status: "Filed",
      filingDate: "17-Aug-25"
    },
    gstr3b: {
      taxableValue: "₹2,83,443.00",
      totalTax: "₹51,019.74",
      itc: "₹11,581.17",
      status: "Filed",
      filingDate: "15-Aug-25"
    }
  },
  {
    month: "August 2025",
    gstr1: {
      taxableValue: "₹3,10,000.00",
      totalTax: "₹55,800.00",
      status: "Pending",
      filingDate: "N/A"
    },
    gstr3b: {
      taxableValue: "₹3,10,000.00",
      totalTax: "₹55,800.00",
      itc: "₹12,000.00",
      status: "Pending",
      filingDate: "N/A"
    }
  },
  {
    month: "September 2025",
    gstr1: {
      taxableValue: "₹3,50,000.00",
      totalTax: "₹63,000.00",
      status: "Filed",
      filingDate: "18-Oct-25"
    },
    gstr3b: {
      taxableValue: "₹3,50,000.00",
      totalTax: "₹63,000.00",
      itc: "₹13,000.00",
      status: "Filed",
      filingDate: "16-Oct-25"
    }
  },
  {
    month: "October 2025",
    gstr1: {
      taxableValue: "₹2,90,000.00",
      totalTax: "₹52,200.00",
      status: "Filed",
      filingDate: "17-Nov-25"
    },
    gstr3b: {
      taxableValue: "₹2,90,000.00",
      totalTax: "₹52,200.00",
      itc: "₹11,500.00",
      status: "Filed",
      filingDate: "15-Nov-25"
    }
  },
  {
    month: "November 2025",
    gstr1: {
      taxableValue: "₹3,20,000.00",
      totalTax: "₹57,600.00",
      status: "Pending",
      filingDate: "N/A"
    },
    gstr3b: {
      taxableValue: "₹3,20,000.00",
      totalTax: "₹57,600.00",
      itc: "₹12,500.00",
      status: "Pending",
      filingDate: "N/A"
    }
  },
  {
    month: "December 2025",
    gstr1: {
      taxableValue: "₹3,60,000.00",
      totalTax: "₹64,800.00",
      status: "Filed",
      filingDate: "18-Jan-26"
    },
    gstr3b: {
      taxableValue: "₹3,60,000.00",
      totalTax: "₹64,800.00",
      itc: "₹13,500.00",
      status: "Filed",
      filingDate: "16-Jan-26"
    }
  },
  {
    month: "January 2026",
    gstr1: {
      taxableValue: "₹3,80,000.00",
      totalTax: "₹68,400.00",
      status: "Filed",
      filingDate: "18-Feb-26"
    },
    gstr3b: {
      taxableValue: "₹3,80,000.00",
      totalTax: "₹68,400.00",
      itc: "₹14,000.00",
      status: "Filed",
      filingDate: "16-Feb-26"
    }
  },
  {
    month: "February 2026",
    gstr1: {
      taxableValue: "₹3,40,000.00",
      totalTax: "₹61,200.00",
      status: "Pending",
      filingDate: "N/A"
    },
    gstr3b: {
      taxableValue: "₹3,40,000.00",
      totalTax: "₹61,200.00",
      itc: "₹12,800.00",
      status: "Pending",
      filingDate: "N/A"
    }
  }
]);

</script>

<template>
    <div>
        <v-row>
            <v-col cols="12" lg="3" md="3" sm="12" v-for="(item, index) in widgetData" :key="index">
                <VCard :class="index === 0 ? 'account_v_card_dark' : 'account_widget_vcard'"
                    class="gst_summary_vcard_border gst_summary_widget_vcard">
                    <div class="main_card_content d-flex align-center justify-space-between">
                        <VCardSubtitle :color="index === 0 ? 'account_text_white' : 'account_text_subtitle'"
                            class="gst_summary_card_title p-0">{{ item.title }}</VCardSubtitle>
                        <v-icon :class="index === 0 ? 'account_text_white' : 'account_text_subtitle'" size="16"
                            class="ml-2">{{ item.icon }}</v-icon>
                    </div>
                    <VCardText class="p-0">
                        <div class="d-flex align-center">
                            <h5 :class="index === 0 ? 'account_text_white' : 'account_text_dark'"
                                class=" mb-0 gst_summary-amount">{{ item.amount }}</h5>
                        </div>
                    </VCardText>
                </VCard>
            </v-col>
        </v-row>


        <v-row>
            <v-col cols="12" lg="12" md="12" sm="12">
                <v-card title="GST Filing Summary" subtitle="A monthly overview of your GSTR-1 and GSTR-3B filings."
                    class="account_vcard_border account_ui_vcard pa-2 mb-6">
                    <template #append>
                        <VBtn class="account_v_btn_outlined"><v-icon class="mr-2">mdi-tray-arrow-down</v-icon> Export Reports</VBtn>
                    </template>
                    
                    <div class="gst_summary_table_container">
                        <table class="table table-bordered">
                            <thead class="gst_summary_table_header text-center">
                                <tr>
                                    <th rowspan="3" class="gst_summary_table_header_month">Month</th>
                                    <th colspan="4" class="gst_summary_table_header_gstr1">GSTR-1</th>
                                    <th colspan="5" class="gst_summary_table_header_gstr3b">GSTR-3B</th>
                                </tr>
                                <tr>
                                    <th class="gst_summary_table_header_gstr1_taxable_value">Taxable Value</th>
                                    <th class="gst_summary_table_header_gstr1_total_tax">Total Tax</th>
                                    <th class="gst_summary_table_header_gstr1_status">Status</th>
                                    <th class="gst_summary_table_header_gstr1_filing_date">Filing Date</th>
                                    <th class="gst_summary_table_header_gstr3b_taxable_value">Taxable Value</th>
                                    <th class="gst_summary_table_header_gstr3b_total_tax">Total Tax</th>
                                    <th class="gst_summary_table_header_gstr3b_itc">ITC</th>
                                    <th class="gst_summary_table_header_gstr3b_status">Status</th>
                                    <th class="gst_summary_table_header_gstr3b_filing_date">Filing Date</th>
                                </tr>
                            </thead>
                            
                            <tbody class="gst_summary_table_body text-center">
                                <tr v-for="(row, idx) in gstSummaryRows" :key="idx">
                                    <td>{{ row.month }}</td>
                                    <td>{{ row.gstr1.taxableValue }}</td>
                                    <td>{{ row.gstr1.totalTax }}</td>
                                    <td><v-chip>{{ row.gstr1.status }}</v-chip></td>
                                    <td>{{ row.gstr1.filingDate || 'N/A' }}</td>
                                    <td>{{ row.gstr3b.taxableValue }}</td>
                                    <td>{{ row.gstr3b.totalTax }}</td>
                                    <td>{{ row.gstr3b.itc }}</td>
                                    <td><v-chip>{{ row.gstr3b.status }}</v-chip></td>
                                    <td>{{ row.gstr3b.filingDate || 'N/A' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </v-card>
            </v-col>
        </v-row>


    </div>
</template>
