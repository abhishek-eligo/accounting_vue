<script setup>
import { ref } from 'vue';
import IncomeRow from '@/components/core/IncomeRow.vue';
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';

const incomeData = ref([
  {
    name: "Income (Direct)",
    percent: "95.03%",
    current: "₹16,25,000.00",
    previous: "₹14,40,000.00",
    change: "12.8%",
    type: "group",
    children: [
      {
        name: "Revenue from Operations",
        percent: "93.57%",
        current: "₹16,00,000.00",
        previous: "₹14,20,000.00",
        change: "12.7%",
        type: "group",
        children: [
          {
            name: "Domestic Sales",
            percent: "73.10%",
            current: "₹12,50,000.00",
            previous: "₹11,00,000.00",
            change: "13.6%",
            type: "ledger",
          },
          {
            name: "Export Sales",
            percent: "20.47%",
            current: "₹3,50,000.00",
            previous: "₹3,20,000.00",
            change: "9.4%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Other Direct Income",
        percent: "1.46%",
        current: "₹25,000.00",
        previous: "₹20,000.00",
        change: "25.0%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Income (Indirect)",
    percent: "4.97%",
    current: "₹85,000.00",
    previous: "₹70,000.00",
    change: "21.4%",
    type: "group",
    children: [
      {
        name: "Interest Received",
        percent: "0.88%",
        current: "₹15,000.00",
        previous: "₹12,000.00",
        change: "25.0%",
        type: "ledger",
      },
      {
        name: "Commission Received",
        percent: "2.63%",
        current: "₹45,000.00",
        previous: "₹40,000.00",
        change: "12.5%",
        type: "ledger",
      },
      {
        name: "Dividend Received",
        percent: "1.17%",
        current: "₹20,000.00",
        previous: "₹18,000.00",
        change: "11.1%",
        type: "ledger",
      },
      {
        name: "Gain on Sale of Asset",
        percent: "0.29%",
        current: "₹5,000.00",
        previous: "₹0.00",
        change: "New",
        type: "ledger",
        new: true,
      },
    ],
  },
]);

const expensesData = ref([
  {
    name: "Expenses (Direct)",
    percent: "20.00%",
    current: "₹3,42,000.00",
    previous: "₹3,25,000.00",
    change: "5.2%",
    type: "group",

    children: [
      {
        name: "Cost of Goods Sold",
        percent: "14.16%",
        current: "₹2,42,000.00",
        previous: "₹2,30,000.00",
        change: "5.2%",
        type: "group",
        children: [
          {
            name: "Opening Stock",
            percent: "5.31%",
            current: "₹91,000.00",
            previous: "₹85,000.00",
            change: "7.1%",
            type: "ledger",
          },
          {
            name: "Purchases",
            percent: "12.30%",
            current: "₹2,10,000.00",
            previous: "₹2,00,000.00",
            change: "5.0%",
            type: "ledger",
          },
          {
            name: "Closing Stock",
            percent: "-7.08%",
            current: "₹1,21,000.00",
            previous: "₹1,10,000.00",
            change: "-9.1%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Factory Overheads",
        percent: "5.31%",
        current: "₹91,000.00",
        previous: "₹88,000.00",
        change: "3.4%",
        type: "group",
        children: [
          {
            name: "Factory Rent",
            percent: "1.76%",
            current: "₹30,000.00",
            previous: "₹30,000.00",
            change: "-",
            type: "ledger",
          },
          {
            name: "Wages",
            percent: "3.54%",
            current: "₹60,000.00",
            previous: "₹57,000.00",
            change: "5.3%",
            type: "ledger",
          },
          {
            name: "Other Direct Expenses",
            percent: "0.53%",
            current: "₹9,000.00",
            previous: "₹7,000.00",
            change: "28.6%",
            type: "ledger",
          },
        ],
      },
    ],
  },
  {
    name: "Expenses (Indirect)",
    percent: "25.80%",
    current: "₹4,41,000.00",
    previous: "₹4,12,000.00",
    change: "7.0%",
    type: "group",
    children: [
      {
        name: "Operating Expenses",
        percent: "15.62%",
        current: "₹2,67,000.00",
        previous: "₹2,50,000.00",
        change: "6.8%",
        type: "group",
        children: [
          {
            name: "Salaries & Wages",
            percent: "8.84%",
            current: "₹1,51,000.00",
            previous: "₹1,40,000.00",
            change: "7.9%",
            type: "ledger",
          },
          {
            name: "Rent & Rates",
            percent: "4.24%",

            current: "₹72,500.00",
            previous: "₹72,500.00",
            change: "-",
            type: "ledger",
          },
          {


            name: "Printing & Stationery",
            percent: "1.24%",
            current: "₹21,000.00",
            previous: "₹18,000.00",
            change: "16.7%",
            type: "ledger",
          },
          {
            name: "Telephone & Internet",
            percent: "0.88%",
            current: "₹15,000.00",
            previous: "₹13,000.00",
            change: "15.4%",
            type: "ledger",
          },
          {
            name: "Miscellaneous Operating Expenses",
            percent: "0.41%",
            current: "₹7,000.00",
            previous: "₹6,000.00",
            change: "16.7%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Financial Expenses",
        percent: "2.29%",
        current: "₹39,000.00",
        previous: "₹40,000.00",
        change: "-2.5%",
        type: "group",
        children: [
          {
            name: "Bank Charges",
            percent: "0.18%",
            current: "₹3,000.00",
            previous: "₹2,700.00",
            change: "11.1%",
            type: "ledger",
          },
          {
            name: "Interest on Loans",
            percent: "2.12%",
            current: "₹36,000.00",
            previous: "₹37,000.00",
            change: "-2.7%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Selling & Distribution",
        percent: "5.48%",
        current: "₹94,000.00",
        previous: "₹87,000.00",
        change: "8.0%",
        type: "group",
        children: [
          {
            name: "Advertising & Marketing",
            percent: "2.65%",
            current: "₹45,000.00",
            previous: "₹42,000.00",
            change: "7.1%",
            type: "ledger",
          },
          {
            name: "Freight Outward",
            percent: "1.06%",
            current: "₹18,000.00",
            previous: "₹17,000.00",
            change: "5.9%",
            type: "ledger",
          },
          {
            name: "Sales Commission",
            percent: "1.76%",
            current: "₹30,000.00",
            previous: "₹27,000.00",
            change: "11.1%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Depreciation & Amortization",
        percent: "2.12%",
        current: "₹36,000.00",
        previous: "₹32,000.00",
        change: "12.5%",
        type: "group",
        children: [
          {
            name: "Depreciation on Computers",
            percent: "1.41%",
            current: "₹24,000.00",
            previous: "₹21,000.00",
            change: "14.3%",
            type: "ledger",
          },
        ],
      },
    ],
  },
]);

const incomeHeaders = computed(() => {
  return [
    { title: 'Income Type', value: 'name', width: '550px', align: 'start', visible: true },
    { title: showCompareMode.value ? 'Current' : '', value: 'current', width: '', align: 'end', visible: true },
    { title: 'Previous', value: 'previous', width: '', align: 'end', visible: showCompareMode.value },
    { title: 'Change', value: 'change', width: '', align: 'end', visible: showCompareMode.value },
  ].filter(h => h.visible);
});

const expensesHeaders = computed(() => {
  return [
    { title: 'Expense Type', value: 'name', width: '550px', align: 'start', visible: true },
    { title: showCompareMode.value ? 'Current' : '', value: 'current', width: '', align: 'end', visible: true },
    { title: 'Previous', value: 'previous', width: '', align: 'end', visible: showCompareMode.value },
    { title: 'Change', value: 'change', width: '', align: 'end', visible: showCompareMode.value },
  ].filter(h => h.visible);
});


function flattenTree(data, level = 0, parentType = '') {
  const flatList = [];

  for (const item of data) {
    flatList.push({
      ...item,
      level,
      parentType,
    });

    if (item.children && item.children.length) {
      flatList.push(...flattenTree(item.children, level + 1, item.type));
    }
  }

  return flatList;
}

const flatIncomeData = computed(() => flattenTree([...incomeData.value]));
const flatExpensesData = computed(() => flattenTree([...expensesData.value]));

const isFullWidthView = ref(false);
const showCompareMode = ref(false);
const showPercent = ref(false);

const getTotal = (data) => {
  let total = {
    current: 0,
    previous: 0,
    change: 0,
  };

  function accumulate(items) {
    for (const item of items) {
      if (item.type === 'ledger') {
        const curr = parseFloat(item.current?.replace(/[^0-9.-]+/g, '') || 0);
        const prev = parseFloat(item.previous?.replace(/[^0-9.-]+/g, '') || 0);
        total.current += curr;
        total.previous += prev;
      }

      if (item.children?.length) {
        accumulate(item.children);
      }
    }
  }

  accumulate(data);

  const percentChange = total.previous === 0 ? 0 : ((total.current - total.previous) / total.previous) * 100;

  return {
    currentFormatted: `₹${total.current.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
    previousFormatted: `₹${total.previous.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
    changeFormatted: `${percentChange.toFixed(1)}%`,
    isIncrease: percentChange >= 0,
  };
};

const totalIncome = computed(() => getTotal(incomeData.value));
const totalExpenses = computed(() => getTotal(expensesData.value));

const netProfit = computed(() => {
  const income = getTotal(incomeData.value);
  const expenses = getTotal(expensesData.value);

  const netCurrent = parseFloat(income.currentFormatted.replace(/[^0-9.-]+/g, '')) -
    parseFloat(expenses.currentFormatted.replace(/[^0-9.-]+/g, ''));

  const netPrevious = parseFloat(income.previousFormatted.replace(/[^0-9.-]+/g, '')) -
    parseFloat(expenses.previousFormatted.replace(/[^0-9.-]+/g, ''));

  const percentChange = netPrevious === 0 ? 0 : ((netCurrent - netPrevious) / netPrevious) * 100;

  return {
    percent: `${percentChange.toFixed(1)}%`,
    currentFormatted: `₹${netCurrent.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
    previousFormatted: `₹${netPrevious.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`,
    isIncrease: percentChange >= 0,
  };
});

const downloadMenu = ref(false)

function downloadAs(type) {
  downloadMenu.value = false
  // trigger download logic
  console.log('Download as', type)
}



</script>

<template>
  <div class="account_ui_vcard">
    <VRow>
      <VCol cols="12">
        <VCard class="account_vcard_border shadow-none" title="Profit & Loss Statement"
          subtitle="For the period of Jan 01, 2025 to Jul 07, 2025">
          <template #append>
            <div class="d-flex align-center gap-2">
              <VSwitch v-model="showPercent" density="compact" inset label="Show %" class="account_swtich_btn"
                style="min-width: 121px;" color="primary" hide-details />
              <VTextField type="date" density="compact" class="accouting_field accouting_active_field mr-2" />
              <VMenu location="start" transition="slide-y-transition" offset-y :close-on-content-click="false">
                <template #activator="{ props }">
                  <VBtn v-bind="props" class="account_v_btn_outlined" variant="outlined" size="34" rounded="2">
                    <component :is="renderTablerIcon('settings')" style="font-size: 22px;" />
                  </VBtn>
                </template>
                <VCard class="account_vcard_menu account_vcard_border">
                  <div class="py-1">
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                        @click="isFullWidthView = !isFullWidthView">
                        <component v-if="isFullWidthView" :is="renderTablerIcon('check')" style="font-size: 16px;" />
                        <span :class="isFullWidthView ? '' : 'ml-6'">Full Width View</span>
                      </div>
                    </div>
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                        @click="showCompareMode = !showCompareMode">
                        <component v-if="showCompareMode" :is="renderTablerIcon('check')" style="font-size: 16px;" />
                        <span :class="showCompareMode ? '' : 'ml-6'">Compare Periods</span>
                      </div>

                    </div>
                    <VDivider class="my-2" />
                    <!-- Inside your main menu -->
                    <div class="account_vcard_menu_item">
                      <!-- Nested VMenu for Download -->
                      <VMenu v-model="downloadMenu" location="end" offset="10" transition="slide-y-transition"
                        :close-on-content-click="false">
                        <template #activator="{ props: downloadProps }">
                          <div v-bind="downloadProps"
                            class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                            <component :is="renderTablerIcon('download')" style="font-size: 16px;" />
                            <span>Download</span>
                            <component :is="renderTablerIcon('chevron-right')" style="font-size: 14px;"
                              class="ml-auto" />
                          </div>
                        </template>

                        <VCard class="account_vcard_menu account_vcard_border" width="120">
                          <div class="py-1">
                            <div class="account_vcard_menu_item field_list_title cursor-pointer px-3 py-1"
                              @click="downloadAs('pdf')">
                              <span>PDF</span>
                            </div>
                            <div class="account_vcard_menu_item field_list_title cursor-pointer px-3 py-1"
                              @click="downloadAs('xls')">
                              <span>XLS</span>
                            </div>
                          </div>
                        </VCard>
                      </VMenu>
                    </div>
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                        <component :is="renderTablerIcon('printer')" style="font-size: 16px;" />
                        <span>Print</span>
                      </div>
                    </div>
                  </div>
                </VCard>
              </VMenu>
            </div>
          </template>
          <VCardText>
            <VRow>
              <!-- Income Data Table -->
              <VCol :cols="12" :lg="isFullWidthView ? 12 : 6" :md="isFullWidthView ? 12 : 6"
                :sm="isFullWidthView ? 12 : 6">
                <VCard variant="text" class="h-100 account_vcard_border account_income_card shadow-none">
                  <VDataTable :headers="incomeHeaders" :items="flatIncomeData" class="account_income_table"
                    hide-default-footer item-value="name">
                    <template #item="{ item }">
                      <tr :class="item.type === 'group'
                        ? (item.level === 0
                          ? 'amount_income_item_title'
                          : 'amount_income_overlay_item_title')
                        : ''">
                        <!-- Name / tree column -->
                        <td>
                          <div class="d-flex align-center gap-2" :style="{ paddingLeft: `${item.level * 24}px` }">
                            <component v-if="item.type === 'group'" :is="renderTablerIcon('folder')"
                              style="font-size: 16px;" />
                            <component v-else :is="renderTablerIcon('file-text')" style="font-size: 16px;" />

                            <p class="mb-0 amount_income_group_item" :class="item.type === 'ledger'
                              ? 'account_ledger_secondary'
                              : item.name?.toLowerCase().includes('expense')
                                ? 'account_group_error'
                                : 'account_group_primary'">
                              {{ item.name }}
                            </p>

                            <VChip v-if="item.percent && showPercent" density="compact"
                              class="account_income_chip py-1 px-1"
                              :class="item.type === 'ledger' ? 'account_chip_outline' : 'account_chip_secondary'">
                              ({{ item.percent }})
                            </VChip>
                          </div>
                        </td>

                        <!-- Current -->
                        <td class="text-end" v-if="true">
                          <p class="mb-0 amount_inc_current_item"
                            :class="item.level === 0 && item.type === 'group' ? 'amount_inc_current_font_wght' : ''">
                            {{ item.current }}
                          </p>
                        </td>

                        <!-- Previous -->
                        <Transition name="slide-fade">
                          <td v-if="showCompareMode" class="text-end">
                            <p class="mb-0 amount_inc_previous_item"
                              :class="item.level > 0 && item.type === 'group' ? 'amount_inc_previous_font_wght' : ''">
                              {{ item.previous }}
                            </p>
                          </td>
                        </Transition>

                        <!-- Change -->
                        <Transition name="slide-fade">
                          <td v-if="showCompareMode" class="text-end">
                            <div class="d-flex justify-end align-center gap-2">
                              <p class="mb-0 amount_inc_change_item" :class="[
                                item.type === 'ledger' ? 'amount_inc_change_font_wght' : '',
                                parseFloat(item.change) > 0 ? 'text-success' :
                                  parseFloat(item.change) < 0 ? 'text-error' : 'text-medium-emphasis'
                              ]">
                                {{ item.change }}
                              </p>
                              <component v-if="item.new" :is="renderTablerIcon('star')" style="font-size: 12px;"
                                class="text-info" />
                              <component v-else
                                :is="renderTablerIcon(parseFloat(item.change) < 0 ? 'arrow-down' : 'arrow-up')"
                                style="font-size: 12px;"
                                :class="parseFloat(item.change) < 0 ? 'text-error' : 'text-success'" />
                            </div>
                          </td>
                        </Transition>
                      </tr>
                    </template>
                  </VDataTable>
                  <!-- Total Income Row -->
                  <div class="d-flex justify-end mb-3 px-4">
                    <table style="min-width: 100%;">
                      <tr class="font-weight-medium">
                        <td style="min-width: 240px;" class="text-start">Total Income</td>
                        <td class="text-end amount_inc_current_item">{{ totalIncome.currentFormatted }}</td>
                        <Transition name="slide-fade">
                          <td class="text-end amount_inc_previous_item" v-if="showCompareMode">{{
                            totalIncome.previousFormatted }}
                          </td>
                        </Transition>
                        <Transition name="slide-fade">
                          <td class="text-end d-flex align-center amount_inc_change_item justify-end gap-2"
                            v-if="showCompareMode">
                            {{ totalIncome.changeFormatted }}
                            <component :is="renderTablerIcon(totalIncome.isIncrease ? 'arrow-up' : 'arrow-down')"
                              style="font-size: 12px;"
                              :class="totalIncome.isIncrease ? 'text-success' : 'text-error'" />
                          </td>
                        </Transition>
                      </tr>
                    </table>
                  </div>
                </VCard>
              </VCol>

              <!-- Expenses Data Table -->
              <VCol :cols="12" :lg="isFullWidthView ? 12 : 6" :md="isFullWidthView ? 12 : 6"
                :sm="isFullWidthView ? 12 : 6">
                <VCard variant="text" class="h-100 account_vcard_border account_expense_card shadow-none">
                  <VDataTable :headers="expensesHeaders" :items="flatExpensesData"
                    class="account_income_table account_expense_table" hide-default-footer item-value="name">
                    <template #item="{ item }">
                      <tr :class="item.type === 'group'
                        ? (item.level === 0
                          ? 'amount_income_item_title'
                          : 'amount_income_overlay_item_title')
                        : ''">
                        <!-- Name / tree column -->
                        <td>
                          <div class="d-flex align-center gap-2" :style="{ paddingLeft: `${item.level * 24}px` }">
                            <component v-if="item.type === 'group'" :is="renderTablerIcon('folder')"
                              style="font-size: 16px;" />
                            <component v-else :is="renderTablerIcon('file-text')" style="font-size: 16px;" />

                            <p class="mb-0 amount_income_group_item" :class="item.type === 'ledger'
                              ? 'account_ledger_secondary'
                              : item.name?.toLowerCase().includes('income')
                                ? 'account_group_success'
                                : 'account_group_error'">
                              {{ item.name }}
                            </p>

                            <VChip v-if="item.percent && showPercent" density="compact"
                              class="account_income_chip py-1 px-1"
                              :class="item.type === 'ledger' ? 'account_chip_outline' : 'account_chip_secondary'">
                              ({{ item.percent }})
                            </VChip>
                          </div>
                        </td>

                        <!-- Current -->
                        <td class="text-end" v-if="true">
                          <p class="mb-0 amount_inc_current_item"
                            :class="item.level === 0 && item.type === 'group' ? 'amount_inc_current_font_wght' : ''">
                            {{ item.current }}
                          </p>
                        </td>

                        <!-- Previous -->
                        <td v-if="showCompareMode" class="text-end">
                          <Transition name="slide-fade">
                            <p class="mb-0 amount_inc_previous_item"
                              :class="item.level > 0 && item.type === 'group' ? 'amount_inc_previous_font_wght' : ''">
                              {{ item.previous }}
                            </p>
                          </Transition>
                        </td>

                        <!-- Change -->
                        <Transition name="slide-fade">
                          <td v-if="showCompareMode" class="text-end">
                            <div class="d-flex justify-end align-center gap-2">
                              <p class="mb-0 amount_inc_change_item" :class="[
                                item.type === 'ledger' ? 'amount_inc_change_font_wght' : '',
                                parseFloat(item.change) > 0 ? 'text-success' :
                                  parseFloat(item.change) < 0 ? 'text-error' : 'text-medium-emphasis'
                              ]">
                                {{ item.change }}
                              </p>
                              <component v-if="item.new" :is="renderTablerIcon('star')" style="font-size: 12px;"
                                class="text-info" />
                              <component v-else
                                :is="renderTablerIcon(parseFloat(item.change) < 0 ? 'arrow-down' : 'arrow-up')"
                                style="font-size: 12px;"
                                :class="parseFloat(item.change) < 0 ? 'text-error' : 'text-success'" />
                            </div>
                          </td>
                        </Transition>


                      </tr>
                    </template>
                  </VDataTable>

                  <!-- Total Expenses Row -->
                  <div class="d-flex justify-end mb-3 px-4">
                    <table style="min-width: 100%;">
                      <tr class="font-weight-medium">
                        <td style="min-width: 240px;" class="text-start">Total Expenses</td>
                        <td class="text-end amount_inc_current_item">{{ totalExpenses.currentFormatted }}</td>
                        <Transition name="slide-fade">
                          <td class="text-end amount_inc_previous_item" v-if="showCompareMode">{{
                            totalExpenses.previousFormatted
                            }}</td>
                        </Transition>
                        <Transition name="slide-fade">
                          <td class="text-end d-flex align-center justify-end amount_inc_change_item gap-2"
                            v-if="showCompareMode">
                            {{ totalExpenses.changeFormatted }}
                            <component :is="renderTablerIcon(totalExpenses.isIncrease ? 'arrow-up' : 'arrow-down')"
                              style="font-size: 12px;"
                              :class="totalExpenses.isIncrease ? 'text-success' : 'text-error'" />
                          </td>
                        </Transition>
                      </tr>
                    </table>
                  </div>
                </VCard>
              </VCol>
            </VRow>
            <VDivider class="my-3" />
            <VRow class="justify-end">
              <VCol cols="12" lg="6" md="6">
                <VCard variant="text" class="account_vcard_border account_expense_card shadow-none">
                  <VCardText class="">
                    <VRow class="justify-content-between">
                      <VCol cols="7">
                        <div class="d-flex align-center gap-2">
                          <h5 class="mb-0">Profit Before Tax</h5>
                          <VChip v-if="showPercent" density="compact"
                            class="account_chip account_chip_outlined py-1 px-1">
                            12.5%
                          </VChip>
                        </div>
                        <p class="mb-0 mt-2">Less: Income Tax</p>
                      </VCol>
                      <VCol class="px-0" cols="2">
                        <div class="d-flex justify-end flex-column">
                          <p class="mb-0 amount_inc_current_item">₹4,16,000.00</p>
                          <p class="mb-0 mt-2">(₹85,000.00)</p>
                        </div>
                      </VCol>
                      <Transition name="slide-fade">
                        <VCol v-if="showCompareMode" class="px-0" cols="2">
                          <div class="d-flex justify-end flex-column">
                            <p class="mb-0 amount_inc_previous_item">₹2,91,500.00</p>
                            <p class="mb-0 mt-2">(₹75,000.00)</p>
                          </div>
                        </VCol>
                      </Transition>

                      <Transition name="slide-fade">
                        <VCol v-if="showCompareMode" class="px-0" cols="1">
                          <div class="d-flex justify-end align-center gap-2">
                            <p class="mb-0 amount_inc_change_item">42.7%</p>
                            <component :is="renderTablerIcon('arrow-up')" style="font-size: 12px;"
                              class="text-success" />
                          </div>
                        </VCol>
                      </Transition>
                    </VRow>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
            <VRow class="justify-end mt-2">
              <VCol cols="12">
                <div class="d-flex justify-space-between align-center px-4 py-2 rounded"
                  style="background-color: #e6fff0;">
                  <!-- Left Side -->
                  <div class="d-flex align-center gap-2">
                    <h5 class="mb-0 text-success font-weight-bold">Net Profit</h5>
                    <VChip density="compact" class="py-1 px-2 text-success" variant="outlined">
                      {{ netProfit.percent }}
                    </VChip>
                  </div>

                  <!-- Right Side -->
                  <div class="d-flex align-center gap-4">
                    <!-- Previous -->
                    <div v-if="showCompareMode" class="px-2 py-1"
                      style="background-color: #f5d6c6; border-radius: 4px;">
                      <span class="font-weight-medium">{{ netProfit.previousFormatted }}</span>
                    </div>

                    <!-- Current -->
                    <div>
                      <span class="text-success font-weight-bold">{{ netProfit.currentFormatted }}</span>
                    </div>

                    <!-- Change -->
                    <div v-if="showCompareMode" class="d-flex align-center gap-1">
                      <span :class="netProfit.isIncrease ? 'text-success' : 'text-error'">{{
                        netProfit.percent
                      }}</span>
                      <component :is="renderTablerIcon(netProfit.isIncrease ? 'arrow-up' : 'arrow-down')"
                        style="font-size: 14px;"
                        :class="netProfit.isIncrease ? 'text-success' : 'text-error'" />
                    </div>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCardText>
          <VDivider class="my-2" />
          <VCardText class="account_note_section pt-1 px-4">
            <p class="mb-0">Notes:</p>
            <ul class="px-5">
              <li class="mb-1">All figures are in Indian Rupee (INR) unless otherwise stated..</li>
              <li class="mb-1">This is an unaudited statement generated for internal review purposes.</li>
              <li class="mb-1">GST collected and paid are accounted for under Duties & Taxes and do not affect the
                profit
                calculation directly.</li>
            </ul>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
