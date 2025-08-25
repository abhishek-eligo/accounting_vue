<script setup>
import { ref } from 'vue'
import DynamicDataTable from '@/components/DynamicDataTable.vue'

// Account dropdown data
const selectedAccount = ref('HDFC Bank')
const accountOptions = ref([
    { title: 'HDFC Bank', value: 'hdfc' },
    { title: 'SBI Bank', value: 'sbi' },
    { title: 'ICICI Bank', value: 'icici' },
    { title: 'Axis Bank', value: 'axis' },
    { title: 'Kotak Bank', value: 'kotak' }
])

// Account-specific data
const accountData = ref({
    'HDFC Bank': {
        ledgerData: [
            {
                id: 1,
                date: '12-May-24',
                particulars: 'Rent payment (w.r.t. Rent & Rates.)',
                voucherNo: 'JRN-2024-0512',
                debit: '₹08,000.00',
                credit: '-',
                balance: '₹2,05,000.00 Dr'
            },
            {
                id: 2,
                date: '11-May-24',
                particulars: 'Salary payment (w.r.t. Salaries & Wages.)',
                voucherNo: 'JRN-2024-0511',
                debit: '₹1,50,000.00',
                credit: '-',
                balance: '₹2,05,000.00 Dr'
            },
            {
                id: 3,
                date: '10-May-24',
                particulars: 'Purchase of Furniture (w.r.t. Furniture & Fixtures.)',
                voucherNo: 'JRN-2024-0510',
                debit: '₹50,000.00',
                credit: '-',
                balance: '₹4,15,000.00 Dr'
            },
            {
                id: 4,
                date: '08-May-24',
                particulars: 'Capital infusion (w.r.t. Retained Earnings)',
                voucherNo: 'JRN-2024-0508',
                debit: '-',
                credit: '₹5,00,000.00',
                balance: '₹4,65,000.00 Dr'
            },
            {
                id: 5,
                date: '07-May-24',
                particulars: 'GST Payable adjustment (w.r.t. GST Payable.)',
                voucherNo: 'JRN-2024-0507',
                debit: '₹10,000.00',
                credit: '-',
                balance: '₹35,000.00 Cr'
            },
            {
                id: 6,
                date: '05-May-24',
                particulars: 'Paid to Cloud Services LLC (w.r.t. Cloud Services LLC.)',
                voucherNo: 'JRN_2024-0505',
                debit: '-',
                credit: '₹12,000.00',
                balance: '₹25,000.00 Cr'
            },
            {
                id: 7,
                date: '04-May-24',
                particulars: 'Received payment from Solutions Corp. (w.r.t. Solutions Corp.)',
                voucherNo: 'JRN_2024-0504',
                debit: '₹20,000.00',
                credit: '-',
                balance: '₹10,000.00 Cr'
            },
            {
                id: 8,
                date: '02-May-24',
                particulars: 'Paid for computer equipment (w.r.t. Computers.)',
                voucherNo: 'JRN-2024-0502',
                debit: '-',
                credit: '₹25,000.00',
                balance: '₹30,000.00 Cr'
            },
            {
                id: 9,
                date: '01-May-24',
                particulars: 'Paid for office supplies (w.r.t. Office Supplies A/c.)',
                voucherNo: 'JRN-2024-0501',
                debit: '-',
                credit: '₹5,000.00',
                balance: '₹5,000.00 Cr'
            }
        ],
        widgets: {
            totalDebits: 320000.00,
            totalCredits: 315000.00,
            closingBalance: 205000.00
        },
        closingBalance: {
            date: '',
            particulars: 'Closing Balance',
            voucherNo: '',
            debit: '₹9,70,000.00',
            credit: '₹3,15,000.00',
            balance: '₹2,05,000.00 Dr'
        }
    },
    'SBI Bank': {
        ledgerData: [
            {
                id: 1,
                date: '15-May-24',
                particulars: 'Interest received (w.r.t. Interest Income)',
                voucherNo: 'SBI-2024-0515',
                debit: '-',
                credit: '₹15,000.00',
                balance: '₹1,85,000.00 Dr'
            },
            {
                id: 2,
                date: '14-May-24',
                particulars: 'Bank charges (w.r.t. Bank Charges)',
                voucherNo: 'SBI-2024-0514',
                debit: '₹2,000.00',
                credit: '-',
                balance: '₹2,00,000.00 Dr'
            }
        ],
        widgets: {
            totalDebits: 200000.00,
            totalCredits: 185000.00,
            closingBalance: 185000.00
        },
        closingBalance: {
            date: '',
            particulars: 'Closing Balance',
            voucherNo: '',
            debit: '₹2,02,000.00',
            credit: '₹15,000.00',
            balance: '₹1,85,000.00 Dr'
        }
    },
    'ICICI Bank': {
        ledgerData: [
            {
                id: 1,
                date: '16-May-24',
                particulars: 'Loan repayment (w.r.t. Bank Loan)',
                voucherNo: 'ICICI-2024-0516',
                debit: '₹50,000.00',
                credit: '-',
                balance: '₹1,50,000.00 Dr'
            }
        ],
        widgets: {
            totalDebits: 150000.00,
            totalCredits: 100000.00,
            closingBalance: 150000.00
        },
        closingBalance: {
            date: '',
            particulars: 'Closing Balance',
            voucherNo: '',
            debit: '₹50,000.00',
            credit: '-',
            balance: '₹1,50,000.00 Dr'
        }
    },
    'Axis Bank': {
        ledgerData: [
            {
                id: 1,
                date: '17-May-24',
                particulars: 'Cash deposit (w.r.t. Cash in Hand)',
                voucherNo: 'AXIS-2024-0517',
                debit: '-',
                credit: '₹25,000.00',
                balance: '₹75,000.00 Dr'
            }
        ],
        widgets: {
            totalDebits: 75000.00,
            totalCredits: 50000.00,
            closingBalance: 75000.00
        },
        closingBalance: {
            date: '',
            particulars: 'Closing Balance',
            voucherNo: '',
            debit: '-',
            credit: '₹25,000.00',
            balance: '₹75,000.00 Dr'
        }
    },
    'Kotak Bank': {
        ledgerData: [
            {
                id: 1,
                date: '18-May-24',
                particulars: 'Transfer from HDFC (w.r.t. Inter Bank Transfer)',
                voucherNo: 'KOTAK-2024-0518',
                debit: '-',
                credit: '₹1,00,000.00',
                balance: '₹1,00,000.00 Cr'
            }
        ],
        widgets: {
            totalDebits: 0.00,
            totalCredits: 100000.00,
            closingBalance: 100000.00
        },
        closingBalance: {
            date: '',
            particulars: 'Closing Balance',
            voucherNo: '',
            debit: '-',
            credit: '₹1,00,000.00',
            balance: '₹1,00,000.00 Cr'
        }
    }
})

// Calculate totals for current ledger data
const calculateTotals = (data) => {
    let totalDebits = 0
    let totalCredits = 0

    data.forEach(item => {
        // Extract numeric value from currency strings
        if (item.debit && item.debit !== '-') {
            const debitValue = parseFloat(item.debit.replace(/[₹,]/g, ''))
            totalDebits += debitValue
        }
        if (item.credit && item.credit !== '-') {
            const creditValue = parseFloat(item.credit.replace(/[₹,]/g, ''))
            totalCredits += creditValue
        }
    })

    return { totalDebits, totalCredits }
}

// Create combined data with closing balance row
const createTableData = (data, accountName = 'HDFC Bank') => {
    const totals = calculateTotals(data)
    const accountClosingBalance = accountData.value[accountName].closingBalance
    const closingRow = {
        id: 'closing-balance',
        date: '',
        particulars: '',
        voucherNo: 'Closing Balance',
        debit: `₹${totals.totalDebits.toLocaleString()}.00`,
        credit: `₹${totals.totalCredits.toLocaleString()}.00`,
        balance: accountClosingBalance.balance,
        isClosingBalance: true
    }
    return [...data, closingRow]
}

// Handle account change
const handleAccountChange = (newAccount) => {
    const data = accountData.value[newAccount]
    if (data) {
        ledgerData.value = createTableData(data.ledgerData, newAccount)
        widgets.value = {
            ...data.widgets,
            totalRecords: data.ledgerData.length
        }
        closingBalanceRow.value = data.closingBalance
    }
}

// Initialize reactive data after accountData is defined
const ledgerData = ref(createTableData(accountData.value['HDFC Bank'].ledgerData, 'HDFC Bank'))
const widgets = ref({
    ...accountData.value['HDFC Bank'].widgets,
    totalRecords: accountData.value['HDFC Bank'].ledgerData.length
})
const closingBalanceRow = ref(accountData.value['HDFC Bank'].closingBalance)

// Headers for the ledger table
const headers = ref([
    { title: 'Date', value: 'date', visible: true },
    { title: 'Particulars', value: 'particulars', visible: true },
    { title: 'Voucher No.', value: 'voucherNo', visible: true },
    { title: 'Debit', value: 'debit', visible: true },
    { title: 'Credit', value: 'credit', visible: true },
    { title: 'Balance', value: 'balance', visible: true }
])

// Filters for the ledger table
const filters = ref([
    { title: 'Date Range', checked: false },
])
</script>

<template>
    <div class="ledger-table-page">
        <!-- Account Name Header -->
        <VRow class="mb-4">
            <VCol cols="12">
                <VCard class="account_vcard_border p-3">
                    <VCardTitle class="d-flex align-center justify-space-between">
                        <div>
                            <h3 class="mb-1">{{ selectedAccount }}</h3>
                            <p class="text-body-2 mb-0 text-medium-emphasis">View transactions for the selected ledger.
                            </p>
                        </div>
                        <VAutocomplete v-model="selectedAccount" :items="accountOptions" item-title="title"
                            item-value="title" variant="outlined" density="compact" style="max-width: 200px;"
                            class="accouting_field accouting_active_field" @update:model-value="handleAccountChange" />
                    </VCardTitle>

                    <!-- Top Summary Cards -->
                    <VRow class="mb-4">
                        <VCol cols="12" md="4">
                            <VCard subtitle="Total Debits"
                                class="account_v_card_dark  account_widget_vcard account_vcard_border">
                                <template #append>
                                    <IconTrendingUp style="color: white;" size="20" />
                                </template>
                                <VCardText>
                                    <h5 class="account_texth5 mb-0 account_text_white font-weight-bold">
                                        ₹{{ widgets.totalDebits.toLocaleString() }}.00
                                    </h5>
                                </VCardText>
                            </VCard>
                        </VCol>

                        <VCol cols="12" md="4">
                            <VCard subtitle="Total Credits" class="account_vcard_border account_widget_vcard">
                                <template #append>
                                    <IconTrendingDown size="20" />
                                </template>
                                <VCardText>
                                    <h5 class="account_texth5 mb-0 font-weight-bold">
                                        ₹{{ widgets.totalCredits.toLocaleString() }}.00
                                    </h5>
                                </VCardText>
                            </VCard>
                        </VCol>

                        <VCol cols="12" md="4">
                            <VCard subtitle="Closing Balance" class="account_vcard_border account_widget_vcard">
                                <template #append>
                                    <IconWallet size="20" />
                                </template>
                                <VCardText>
                                    <h5 class="account_texth5 mb-0 font-weight-bold">
                                        ₹{{ widgets.closingBalance.toLocaleString() }}.00
                                    </h5>
                                </VCardText>
                            </VCard>
                        </VCol>
                    </VRow>

                    <!-- Dynamic Data Table -->
                    <DynamicDataTable class="account_vcard_border  p-3" title="Ledger Transactions"
                        :headers="headers" :items="ledgerData" :filters="filters" :widgets="widgets" item-value-key="id"
                        :enable-view-action="false" :hide-widgets="true" :show-select="false">
                        <!-- Custom template for debit column -->
                        <template #item.debit="{ item }">
                            <span :class="item.debit !== '-' ? 'text-error font-weight-bold' : ''">
                                {{ item.debit }}
                            </span>
                        </template>

                        <!-- Custom template for credit column -->
                        <template #item.credit="{ item }">
                            <span :class="item.credit !== '-' ? 'text-success font-weight-bold' : ''">
                                {{ item.credit }}
                            </span>
                        </template>

                        <!-- Custom template for balance column -->
                        <template #item.balance="{ item }">
                            <span
                                :class="item.balance.includes('Dr') ? 'text-error font-weight-bold' : 'text-success font-weight-bold'">
                                {{ item.balance }}
                            </span>
                        </template>

                        <!-- Custom row styling for closing balance -->
                        <template #item="{ item, props }">
                            <tr :class="{ 'closing-balance-row': item.isClosingBalance }">
                                <td v-for="header in headers.filter(h => h.visible)" :key="header.value">
                                    <template v-if="header.value === 'voucherNo'">
                                        <strong v-if="item.isClosingBalance" class="text-dark">{{ item[header.value]
                                            }}</strong>
                                        <span v-else>{{ item[header.value] }}</span>
                                    </template>
                                    <template v-else-if="header.value === 'debit'">
                                        <strong v-if="item.isClosingBalance" class="text-error">{{ item[header.value]
                                            }}</strong>
                                        <span v-else
                                            :class="item[header.value] !== '-' ? 'text-error font-weight-bold' : ''">{{
                                                item[header.value] }}</span>
                                    </template>
                                    <template v-else-if="header.value === 'credit'">
                                        <strong v-if="item.isClosingBalance" class="text-success">{{ item[header.value]
                                            }}</strong>
                                        <span v-else
                                            :class="item[header.value] !== '-' ? 'text-success font-weight-bold' : ''">{{
                                                item[header.value] }}</span>
                                    </template>
                                    <template v-else-if="header.value === 'balance'">
                                        <strong v-if="item.isClosingBalance" class="text-error">{{ item[header.value]
                                            }}</strong>
                                        <span v-else
                                            :class="item[header.value].includes('Dr') ? 'text-error font-weight-bold' : 'text-success font-weight-bold'">{{
                                                item[header.value] }}</span>
                                    </template>
                                    <template v-else>
                                        <span>{{ item[header.value] }}</span>
                                    </template>
                                </td>
                            </tr>
                        </template>

                    </DynamicDataTable>

                </VCard>
            </VCol>
        </VRow>





    </div>
</template>

<style scoped>
.ledger-table-page {
  padding: 16px;
}

.closing-balance-row {
  background-color: #ffe0e0 !important; /* light red background */
}

.closing-balance-row td {
  background-color: #ffe0e0 !important; /* match cells */
}
</style>
