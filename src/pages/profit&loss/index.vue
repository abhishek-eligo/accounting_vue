<script setup>
import { ref } from 'vue';
import IncomeRow from '@/components/core/IncomeRow.vue';

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
    percent: "33.04%",
    current: "₹5,65,000.00",
    previous: "₹5,37,000.00",
    change: "5.2%",
    type: "group",
    children: [
      {
        name: "Cost of Goods Sold",
        percent: "23.39%",
        current: "₹4,00,000.00",
        previous: "₹3,80,000.00",
        change: "5.3%",
        type: "group",
        children: [
          {
            name: "Opening Stock",
            percent: "8.77%",
            current: "₹1,50,000.00",
            previous: "₹1,40,000.00",
            change: "7.1%",
            type: "ledger",
          },
          {
            name: "Purchases",
            percent: "20.32%",
            current: "₹4,50,000.00",
            previous: "₹4,20,000.00",
            change: "7.1%",
            type: "ledger",
          },
          {
            name: "Closing Stock",
            percent: "-11.70%",
            current: "₹2,00,000.00",
            previous: "₹1,80,000.00",
            change: "-11.1%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Factory Overheads",
        percent: "8.77%",
        current: "₹1,50,000.00",
        previous: "₹1,45,000.00",
        change: "3.4%",
        type: "group",
        children: [
          {
            name: "Factory Rent",
            percent: "2.92%",
            current: "₹50,000.00",
            previous: "₹50,000.00",
            change: "-",
            type: "ledger",
          },
          {
            name: "Wages",
            percent: "5.85%",
            current: "₹1,00,000.00",
            previous: "₹95,000.00",
            change: "5.3%",
            type: "ledger",
          },
          {
            name: "Other Direct Expenses",
            percent: "0.88%",
            current: "₹15,000.00",
            previous: "₹12,000.00",
            change: "25.0%",
            type: "ledger",
          },
        ],
      },
    ],
  },
  {
    name: "Expenses (Indirect)",
    percent: "42.63%",
    current: "₹7,29,000.00",
    previous: "₹6,81,500.00",
    change: "7.0%",
    type: "group",
    children: [
      {
        name: "Operating Expenses",
        percent: "25.82%",
        current: "₹4,41,500.00",
        previous: "₹4,12,000.00",
        change: "7.2%",
        type: "group",
        children: [
          {
            name: "Salaries & Wages",
            percent: "14.62%",
            current: "₹2,50,000.00",
            previous: "₹2,30,000.00",
            change: "8.7%",
            type: "ledger",
          },
          {
            name: "Rent & Rates",
            percent: "7.02%",
            current: "₹1,20,000.00",
            previous: "₹1,20,000.00",
            change: "-",
            type: "ledger",
          },
          {
            name: "Printing & Stationery",
            percent: "2.05%",
            current: "₹35,000.00",
            previous: "₹30,000.00",
            change: "16.7%",
            type: "ledger",
          },
          {
            name: "Telephone & Internet",
            percent: "1.46%",
            current: "₹25,000.00",
            previous: "₹22,000.00",
            change: "13.6%",
            type: "ledger",
          },
          {
            name: "Miscellaneous Operating Expenses",
            percent: "0.07%",
            current: "₹11,500.00",
            previous: "₹10,000.00",
            change: "15.0%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Financial Expenses",
        percent: "3.80%",
        current: "₹65,000.00",
        previous: "₹66,500.00",
        change: "-2.3%",
        type: "group",
        children: [
          {
            name: "Bank Charges",
            percent: "0.29%",
            current: "₹5,000.00",
            previous: "₹4,500.00",
            change: "11.1%",
            type: "ledger",
          },
          {
            name: "Interest on Loans",
            percent: "3.51%",
            current: "₹60,000.00",
            previous: "₹62,000.00",
            change: "-3.2%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Selling & Distribution",
        percent: "9.06%",
        current: "₹1,55,000.00",
        previous: "₹1,43,000.00",
        change: "8.4%",
        type: "group",
        children: [
          {
            name: "Advertising & Marketing",
            percent: "4.39%",
            current: "₹75,000.00",
            previous: "₹70,000.00",
            change: "7.1%",
            type: "ledger",
          },
          {
            name: "Freight Outward",
            percent: "1.75%",
            current: "₹30,000.00",
            previous: "₹28,000.00",
            change: "7.1%",
            type: "ledger",
          },
          {
            name: "Sales Commission",
            percent: "2.92%",
            current: "₹50,000.00",
            previous: "₹45,000.00",
            change: "11.1%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Depreciation & Amortization",
        percent: "3.51%",
        current: "₹60,000.00",
        previous: "₹53,000.00",
        change: "13.2%",
        type: "group",
        children: [
          {
            name: "Depreciation on Computers",
            percent: "2.34%",
            current: "₹40,000.00",
            previous: "₹35,000.00",
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
                  <VBtn v-bind="props" class="account_v_btn_outlined" variant="outlined" icon="mdi-cog-outline"
                    size="34" rounded="" />
                </template>
                <VCard class="account_vcard_menu account_vcard_border">
                  <div class="py-1">
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                        @click="isFullWidthView = !isFullWidthView">
                        <VIcon v-if="isFullWidthView" size="16" icon="mdi-check" />
                        <span :class="isFullWidthView ? '' : 'ml-6'">Full Width View</span>
                      </div>
                    </div>
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2"
                        @click="showCompareMode = !showCompareMode">
                        <VIcon v-if="showCompareMode" size="16" icon="mdi-check" />
                        <span :class="showCompareMode ? '' : 'ml-6'">Compare Periods</span>
                      </div>

                    </div>
                    <VDivider class="my-2" />
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                        <VIcon size="16" icon="mdi-tray-arrow-down" />
                        <span>Download</span>
                      </div>
                    </div>
                    <div class="account_vcard_menu_item">
                      <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                        <VIcon size="16" icon="mdi-printer-outline" />
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
                <VCard class="h-100 account_vcard_border account_income_card shadow-none">
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
                            <VIcon :icon="item.type === 'group' ? 'mdi-folder-outline' : 'mdi-file-document-outline'"
                              size="16" />

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
                              <VIcon v-if="item.new" icon="mdi-star" size="12" class="text-info" />
                              <VIcon v-else :icon="parseFloat(item.change) < 0 ? 'mdi-arrow-down' : 'mdi-arrow-up'"
                                size="12" :class="parseFloat(item.change) < 0 ? 'text-error' : 'text-success'" />
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
                        <td style="min-width: 254px;" class="text-start">Total Income</td>
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
                            <VIcon :icon="totalIncome.isIncrease ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="12"
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
                <VCard class="h-100 account_vcard_border account_expense_card shadow-none">
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
                            <VIcon :icon="item.type === 'group' ? 'mdi-folder-outline' : 'mdi-file-document-outline'"
                              size="16" />

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
                              <VIcon v-if="item.new" icon="mdi-star" size="12" class="text-info" />
                              <VIcon v-else :icon="parseFloat(item.change) < 0 ? 'mdi-arrow-down' : 'mdi-arrow-up'"
                                size="12" :class="parseFloat(item.change) < 0 ? 'text-error' : 'text-success'" />
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
                        <td class="text-start">Total Expenses</td>
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
                            <VIcon :icon="totalExpenses.isIncrease ? 'mdi-chevron-up' : 'mdi-chevron-down'" size="12"
                              :class="totalExpenses.isIncrease ? 'text-success' : 'text-error'" />
                          </td>
                        </Transition>
                      </tr>
                    </table>
                  </div>

                </VCard>
              </VCol>
            </VRow>
            <VDivider />
            <VRow class="justify-end">
              <VCol cols="12" lg="6" md="6">
                <VCard class="account_vcard_border account_expense_card shadow-none">
                  <VCardText class="">
                    <VRow>
                      <VCol cols="7">
                        <div class="d-flex align-center gap-2">
                          <h5 class="mb-0">Profit Before Tax</h5>
                          <VChip density="compact" class="account_chip account_chip_outlined py-1 px-1">
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
                      <VCol class="px-0" cols="2">
                        <div class="d-flex justify-end flex-column">
                          <p class="mb-0 amount_inc_previous_item">₹2,91,500.00</p>
                          <p class="mb-0 mt-2">(₹75,000.00)</p>
                        </div>
                      </VCol>
                      <VCol class="px-0" cols="1">
                        <div class="d-flex justify-end align-center gap-2">
                          <p class="mb-0 amount_inc_change_item">42.7%</p>
                          <VIcon icon="mdi-chevron-up" size="12" class="text-success" />
                        </div>
                      </VCol>
                    </VRow>
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
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
