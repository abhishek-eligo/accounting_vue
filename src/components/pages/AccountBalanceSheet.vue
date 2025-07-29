<script setup>
import { computed, ref } from "vue";
import { renderTablerIcon } from '@/helpers/tablerIconHelper.js';

const assetsData = ref([
  {
    name: "Fixed Assets",
    percent: "65.42%",
    current: "₹8,00,000.00",
    previous: "₹7,50,000.00",
    change: "6.7%",
    type: "group",
    children: [
      {
        name: "Land & Building",
        percent: "40.85%",
        current: "₹5,00,000.00",
        previous: "₹4,80,000.00",
        change: "4.2%",
        type: "ledger",
      },
      {
        name: "Plant & Machinery",
        percent: "16.34%",
        current: "₹2,00,000.00",
        previous: "₹1,80,000.00",
        change: "11.1%",
        type: "ledger",
      },
      {
        name: "Furniture & Fixtures",
        percent: "4.89%",
        current: "₹60,000.00",
        previous: "₹55,000.00",
        change: "9.1%",
        type: "ledger",
      },
      {
        name: "Computers",
        percent: "3.26%",
        current: "₹40,000.00",
        previous: "₹35,000.00",
        change: "14.3%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Investments",
    percent: "9.78%",
    current: "₹1,20,000.00",
    previous: "₹1,10,000.00",
    change: "9.1%",
    type: "group",
    children: [
      {
        name: "Shares",
        percent: "6.52%",
        current: "₹80,000.00",
        previous: "₹75,000.00",
        change: "6.7%",
        type: "ledger",
      },
      {
        name: "Mutual Funds",
        percent: "3.26%",
        current: "₹40,000.00",
        previous: "₹35,000.00",
        change: "14.3%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Current Assets",
    percent: "18.37%",
    current: "₹2,25,000.00",
    previous: "₹2,10,000.00",
    change: "7.1%",
    type: "group",
    children: [
      {
        name: "Cash-in-Hand",
        percent: "4.07%",
        current: "₹50,000.00",
        previous: "₹45,000.00",
        change: "11.1%",
        type: "ledger",
      },
      {
        name: "Bank Accounts",
        percent: "10.20%",
        current: "₹1,25,000.00",
        previous: "₹1,10,000.00",
        change: "13.6%",
        type: "ledger",
      },
      {
        name: "Sundry Debtors",
        percent: "4.89%",
        current: "₹60,000.00",
        previous: "₹55,000.00",
        change: "9.1%",
        type: "group",
        children: [
          {
            name: "e.g., Customer A",
            percent: "3.26%",
            current: "₹40,000.00",
            previous: "₹35,000.00",
            change: "14.3%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Advance to Supplier",
        percent: "1.22%",
        current: "₹15,000.00",
        previous: "₹12,000.00",
        change: "25.0%",
        type: "ledger",
      },
      {
        name: "GST Input Credit",
        percent: "0.61%",
        current: "₹7,500.00",
        previous: "₹7,000.00",
        change: "7.1%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Loans & Advances (Asset)",
    percent: "4.89%",
    current: "₹60,000.00",
    previous: "₹55,000.00",
    change: "9.1%",
    type: "group",
    children: [
      {
        name: "Loans to Employees",
        percent: "3.26%",
        current: "₹40,000.00",
        previous: "₹35,000.00",
        change: "14.3%",
        type: "ledger",
      },
      {
        name: "Advance to Others",
        percent: "1.22%",
        current: "₹15,000.00",
        previous: "₹15,000.00",
        change: "0.0%",
        type: "ledger",
      },
      {
        name: "Security Deposits",
        percent: "0.41%",
        current: "₹5,000.00",
        previous: "₹5,000.00",
        change: "0.0%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Misc. Expenses (Asset)",
    percent: "1.63%",
    current: "₹20,000.00",
    previous: "₹15,000.00",
    change: "33.3%",
    type: "group",
    children: [
      {
        name: "Preliminary Expenses",
        percent: "1.22%",
        current: "₹15,000.00",
        previous: "₹12,000.00",
        change: "25.0%",
        type: "ledger",
      },
      {
        name: "Deferred Revenue Expenses",
        percent: "0.41%",
        current: "₹5,000.00",
        previous: "₹3,000.00",
        change: "66.7%",
        type: "ledger",
      },
    ],
  },
]);

const liabilitiesData = ref([
  {
    name: "Capital Account",
    percent: "65.42%",
    current: "₹8,00,000.00",
    previous: "₹7,50,000.00",
    change: "6.7%",
    type: "group",
    children: [
      {
        name: "Capital",
        percent: "57.72%",
        current: "₹7,06,000.00",
        previous: "₹6,50,000.00",
        change: "8.6%",
        type: "ledger",
      },
      {
        name: "Partner's Capital",
        percent: "8.15%",
        current: "₹1,00,000.00",
        previous: "₹1,05,000.00",
        change: "-4.8%",
        type: "ledger",
      },
      {
        name: "Drawings",
        percent: "-0.41%",
        current: "₹(6,000.00)",
        previous: "₹(5,000.00)",
        change: "20.0%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Loans (Liability)",
    percent: "16.34%",
    current: "₹2,00,000.00",
    previous: "₹1,90,000.00",
    change: "5.3%",
    type: "group",
    children: [
      {
        name: "Secured Loans",
        percent: "14.70%",
        current: "₹1,80,000.00",
        previous: "₹1,70,000.00",
        change: "5.9%",
        type: "group",
        children: [
          {
            name: "e.g., Bank Term Loan",
            percent: "14.70%",
            current: "₹1,80,000.00",
            previous: "₹1,70,000.00",
            change: "5.9%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Unsecured Loans",
        percent: "1.63%",
        current: "₹20,000.00",
        previous: "₹20,000.00",
        change: "0.0%",
        type: "group",
        children: [
          {
            name: "e.g., Loan from Director",
            percent: "1.63%",
            current: "₹20,000.00",
            previous: "₹20,000.00",
            change: "0.0%",
            type: "ledger",
          },
          {
            name: "Bank ODCC",
            percent: "0.0%",
            current: "₹0.00",
            previous: "₹0.00",
            change: "-",
            type: "ledger",
          },
        ],
      },
    ],
  },
  {
    name: "Current Liabilities",
    percent: "12.24%",
    current: "₹1,50,000.00",
    previous: "₹1,40,000.00",
    change: "7.1%",
    type: "group",
    children: [
      {
        name: "Sundry Creditors",
        percent: "8.15%",
        current: "₹1,00,000.00",
        previous: "₹95,000.00",
        change: "5.3%",
        type: "group",
        children: [
          {
            name: "e.g., Vendor A",
            percent: "4.89%",
            current: "₹60,000.00",
            previous: "₹55,000.00",
            change: "9.1%",
            type: "ledger",
          },
        ],
      },
      {
        name: "Outstanding Expenses",
        percent: "2.44%",
        current: "₹30,000.00",
        previous: "₹25,000.00",
        change: "20.0%",
        type: "ledger",
      },
      {
        name: "Advance Received",
        percent: "1.63%",
        current: "₹20,000.00",
        previous: "₹20,000.00",
        change: "0.0%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Duties & Taxes",
    percent: "4.89%",
    current: "₹60,000.00",
    previous: "₹55,000.00",
    change: "9.1%",
    type: "group",
    children: [
      {
        name: "GST Payable",
        percent: "3.26%",
        current: "₹40,000.00",
        previous: "₹35,000.00",
        change: "14.3%",
        type: "ledger",
      },
      {
        name: "TDS Payable",
        percent: "1.22%",
        current: "₹15,000.00",
        previous: "₹15,000.00",
        change: "0.0%",
        type: "ledger",
      },
      {
        name: "Other Statutory Dues",
        percent: "0.41%",
        current: "₹5,000.00",
        previous: "₹5,000.00",
        change: "0.0%",
        type: "ledger",
      },
    ],
  },
  {
    name: "Provisions",
    percent: "1.22%",
    current: "₹15,000.00",
    previous: "₹12,000.00",
    change: "25.0%",
    type: "group",
    children: [
      {
        name: "Provision for Tax",
        percent: "0.81%",
        current: "₹10,000.00",
        previous: "₹8,000.00",
        change: "25.0%",
        type: "ledger",
      },
      {
        name: "Provision for Expenses",
        percent: "0.41%",
        current: "₹5,000.00",
        previous: "₹4,000.00",
        change: "25.0%",
        type: "ledger",
      },
    ],
  },
]);

const assetsHeaders = computed(() => {
  return [
    {
      title: "Assets",
      value: "name",
      width: "550px",
      align: "start",
      visible: true,
    },
    {
      title: showCompareMode.value ? "Current" : "",
      value: "current",
      width: "",
      align: "end",
      visible: true,
    },
    {
      title: "Previous",
      value: "previous",
      width: "",
      align: "end",
      visible: showCompareMode.value,
    },
    {
      title: "Change",
      value: "change",
      width: "",
      align: "end",
      visible: showCompareMode.value,
    },
  ].filter((h) => h.visible);
});

const liabilitiesHeaders = computed(() => {
  return [
    {
      title: "Liabilities",
      value: "name",
      width: "550px",
      align: "start",
      visible: true,
    },
    {
      title: showCompareMode.value ? "Current" : "",
      value: "current",
      width: "",
      align: "end",
      visible: true,
    },
    {
      title: "Previous",
      value: "previous",
      width: "",
      align: "end",
      visible: showCompareMode.value,
    },
    {
      title: "Change",
      value: "change",
      width: "",
      align: "end",
      visible: showCompareMode.value,
    },
  ].filter((h) => h.visible);
});

function flattenTree(data, level = 0, parentType = "") {
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

const flatAssetsData = computed(() => flattenTree([...assetsData.value]));
const flatLiabilitiesData = computed(() =>
  flattenTree([...liabilitiesData.value])
);

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
      if (item.type === "ledger") {
        const curr = parseFloat(item.current?.replace(/[^0-9.-]+/g, "") || 0);
        const prev = parseFloat(item.previous?.replace(/[^0-9.-]+/g, "") || 0);
        total.current += curr;
        total.previous += prev;
      }
      if (item.children?.length) {
        accumulate(item.children);
      }
    }
  }
  accumulate(data);
  const percentChange =
    total.previous === 0
      ? 0
      : ((total.current - total.previous) / total.previous) * 100;
  return {
    currentFormatted: `₹${total.current.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`,
    previousFormatted: `₹${total.previous.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
    })}`,
    changeFormatted: `${percentChange.toFixed(1)}%`,
    isIncrease: percentChange >= 0,
  };
};

const totalAssets = computed(() => getTotal(assetsData.value));
const totalLiabilities = computed(() => getTotal(liabilitiesData.value));

const downloadMenu = ref(false);

function downloadAs(type) {
  downloadMenu.value = false;
  // trigger download logic
  console.log("Download as", type);
}
</script>

<template>
  <div class="account_ui_vcard">
    <VRow>
      <VCol cols="12">
        <VCard class="account_vcard_border shadow-none" title="Balance Sheet" subtitle="As at Jul 09, 2025">
          <template #append>
            <div class="d-flex align-center gap-2">
              <VSwitch v-model="showPercent" density="compact" inset label="Show %" class="account_swtich_btn mr-4"
                style="min-width: 121px" color="primary" hide-details />
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
              <!-- Assets Data Table -->
              <VCol :cols="12" :lg="isFullWidthView ? 12 : 6" :md="isFullWidthView ? 12 : 6"
                :sm="isFullWidthView ? 12 : 6" class="col-transition"
                :class="isFullWidthView ? 'col-expand' : 'col-shrink'">
                <VCard variant="text" class="h-100 account_vcard_border card-content-transition account_income_card shadow-none">
                  <VDataTable :headers="assetsHeaders" :items="flatAssetsData" class="account_income_table"
                    hide-default-footer item-value="name">
                    <template #item="{ item }">
                      <tr :class="item.type === 'group'
                        ? item.level === 0
                          ? 'amount_income_item_title'
                          : 'amount_income_overlay_item_title'
                        : ''
                        ">
                        <!-- Name / tree column -->
                        <td>
                          <div class="d-flex align-center gap-2" :style="{ paddingLeft: `${item.level * 24}px` }">
                            <component v-if="item.type === 'group'" :is="renderTablerIcon('folder')"
                              style="font-size: 16px;" />
                            <component v-else :is="renderTablerIcon('file-text')" style="font-size: 16px;" />
                            <p class="mb-0 amount_income_group_item" :class="item.type === 'ledger'
                              ? 'account_ledger_secondary'
                              : item.name
                                ?.toLowerCase()
                                .includes('liability')
                                ? 'account_group_error'
                                : 'account_group_primary'
                              ">
                              {{ item.name }}
                            </p>
                            <VChip v-if="item.percent && showPercent" density="compact"
                              class="account_income_chip py-1 px-1" :class="item.type === 'ledger'
                                ? 'account_chip_outline'
                                : 'account_chip_secondary'
                                ">
                              ({{ item.percent }})
                            </VChip>
                          </div>
                        </td>
                        <!-- Current -->
                        <td class="text-end" v-if="true">
                          <p class="mb-0 amount_inc_current_item" :class="item.level === 0 && item.type === 'group'
                            ? 'amount_inc_current_font_wght'
                            : ''
                            ">
                            {{ item.current }}
                          </p>
                        </td>
                        <!-- Previous -->
                        <Transition name="slide-fade">
                          <td v-if="showCompareMode" class="text-end">
                            <p class="mb-0 amount_inc_previous_item" :class="item.level > 0 && item.type === 'group'
                              ? 'amount_inc_previous_font_wght'
                              : ''
                              ">
                              {{ item.previous }}
                            </p>
                          </td>
                        </Transition>
                        <!-- Change -->
                        <Transition name="slide-fade">
                          <td v-if="showCompareMode" class="text-end">
                            <div class="d-flex justify-end align-center gap-2">
                              <p class="mb-0 amount_inc_change_item" :class="[
                                item.type === 'ledger'
                                  ? 'amount_inc_change_font_wght'
                                  : '',
                                parseFloat(item.change) > 0
                                  ? 'text-success'
                                  : parseFloat(item.change) < 0
                                    ? 'text-error'
                                    : 'text-medium-emphasis',
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
                  <VDivider class="my-2" />
                  <!-- Total Assets Row -->
                  <div class="d-flex justify-end mb-3 px-4">
                    <table style="min-width: 100%">
                      <tr class="font-weight-medium">
                        <td style="min-width: 240px" class="text-start">
                          Total Assets
                        </td>
                        <td class="text-end amount_inc_current_item">
                          {{ totalAssets.currentFormatted }}
                        </td>
                        <Transition name="slide-fade">
                          <td class="text-end amount_inc_previous_item" v-if="showCompareMode">
                            {{ totalAssets.previousFormatted }}
                          </td>
                        </Transition>
                        <Transition name="slide-fade">
                          <td class="text-end d-flex align-center amount_inc_change_item justify-end gap-2"
                            v-if="showCompareMode">
                            {{ totalAssets.changeFormatted }}
                            <component :is="renderTablerIcon(totalAssets.isIncrease ? 'arrow-up' : 'arrow-down')"
                              style="font-size: 12px;"
                              :class="totalAssets.isIncrease ? 'text-success' : 'text-error'" />
                            <!-- <VIcon :icon="totalAssets.isIncrease
                              ? 'mdi-chevron-up'
                              : 'mdi-chevron-down'
                              " size="12" :class="totalAssets.isIncrease
                                ? 'text-success'
                                : 'text-error'
                                " /> -->
                          </td>
                        </Transition>
                      </tr>
                    </table>
                  </div>
                </VCard>
              </VCol>

              <!-- Liabilities Data Table -->
              <VCol :cols="12" :lg="isFullWidthView ? 12 : 6" :md="isFullWidthView ? 12 : 6"
                :sm="isFullWidthView ? 12 : 6" class="col-transition"
                :class="isFullWidthView ? 'col-expand' : 'col-shrink'">
                <VCard variant="text" class="h-100 account_vcard_border card-content-transition account_expense_card shadow-none">
                  <VDataTable :headers="liabilitiesHeaders" :items="flatLiabilitiesData"
                    class="account_income_table account_expense_table" hide-default-footer item-value="name">
                    <template #item="{ item }">
                      <tr :class="item.type === 'group'
                        ? item.level === 0
                          ? 'amount_income_item_title'
                          : 'amount_income_overlay_item_title'
                        : ''
                        ">
                        <!-- Name / tree column -->
                        <td>
                          <div class="d-flex align-center gap-2" :style="{ paddingLeft: `${item.level * 24}px` }">
                            <component v-if="item.type === 'group'" :is="renderTablerIcon('folder')"
                              style="font-size: 16px;" />
                            <component v-else :is="renderTablerIcon('file-text')" style="font-size: 16px;" />
                            <p class="mb-0 amount_income_group_item" :class="item.type === 'ledger'
                              ? 'account_ledger_secondary'
                              : item.name?.toLowerCase().includes('asset')
                                ? 'account_group_success'
                                : 'account_group_error'
                              ">
                              {{ item.name }}
                            </p>
                            <VChip v-if="item.percent && showPercent" density="compact"
                              class="account_income_chip py-1 px-1" :class="item.type === 'ledger'
                                ? 'account_chip_outline'
                                : 'account_chip_secondary'
                                ">
                              ({{ item.percent }})
                            </VChip>
                          </div>
                        </td>
                        <!-- Current -->
                        <td class="text-end" v-if="true">
                          <p class="mb-0 amount_inc_current_item" :class="item.level === 0 && item.type === 'group'
                            ? 'amount_inc_current_font_wght'
                            : ''
                            ">
                            {{ item.current }}
                          </p>
                        </td>
                        <!-- Previous -->
                        <td v-if="showCompareMode" class="text-end">
                          <Transition name="slide-fade">
                            <p class="mb-0 amount_inc_previous_item" :class="item.level > 0 && item.type === 'group'
                              ? 'amount_inc_previous_font_wght'
                              : ''
                              ">
                              {{ item.previous }}
                            </p>
                          </Transition>
                        </td>
                        <!-- Change -->
                        <Transition name="slide-fade">
                          <td v-if="showCompareMode" class="text-end">
                            <div class="d-flex justify-end align-center gap-2">
                              <p class="mb-0 amount_inc_change_item" :class="[
                                item.type === 'ledger'
                                  ? 'amount_inc_change_font_wght'
                                  : '',
                                parseFloat(item.change) > 0
                                  ? 'text-success'
                                  : parseFloat(item.change) < 0
                                    ? 'text-error'
                                    : 'text-medium-emphasis',
                              ]">
                                {{ item.change }}
                              </p>
                              <!-- <VIcon v-if="item.new" icon="mdi-star" size="12" class="text-info" /> -->
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
                  <VDivider class="my-2" />
                  <!-- Total Liabilities Row -->
                  <div class="d-flex justify-end mb-3 px-4">
                    <table style="min-width: 100%">
                      <tr class="font-weight-medium">
                        <td style="min-width: 240px" class="text-start">
                          Total Liabilities
                        </td>
                        <td class="text-end amount_inc_current_item">
                          {{ totalLiabilities.currentFormatted }}
                        </td>
                        <Transition name="slide-fade">
                          <td class="text-end amount_inc_previous_item" v-if="showCompareMode">
                            {{ totalLiabilities.previousFormatted }}
                          </td>
                        </Transition>
                        <Transition name="slide-fade">
                          <td class="text-end d-flex align-center justify-end amount_inc_change_item gap-2"
                            v-if="showCompareMode">
                            {{ totalLiabilities.changeFormatted }}
                            <component :is="renderTablerIcon(totalLiabilities.isIncrease ? 'arrow-up' : 'arrow-down')"
                              style="font-size: 12px;"
                              :class="totalLiabilities.isIncrease ? 'text-success' : 'text-error'" />
                          </td>
                        </Transition>
                      </tr>
                    </table>
                  </div>
                </VCard>
              </VCol>
            </VRow>
            <VDivider class="mt-3 mb-0" />
            <VRow class="justify-end mt-2">
              <VCol cols="12" lg="6" md="6">
                <div class="d-flex justify-space-between align-center px-4 py-3 rounded"
                  style="background-color: #e0f7fa; border: 1px solid #4dd0e1">
                  <div class="d-flex align-center gap-2">
                    <h5 class="mb-0 account_assets_title">Total Assets</h5>
                  </div>
                  <div>
                    <span class="account_assets_title">{{
                      totalAssets.currentFormatted
                      }}</span>
                  </div>
                </div>
              </VCol>
              <VCol cols="12" lg="6" md="6">
                <div class="d-flex justify-space-between align-center px-4 py-3 rounded"
                  style="background-color: #ffebee; border: 1px solid #ef5350">
                  <div class="d-flex align-center gap-2">
                    <h5 class="mb-0 account_liabilities_title">
                      Total Liabilities
                    </h5>
                  </div>
                  <div>
                    <span class="account_liabilities_title">{{
                      totalLiabilities.currentFormatted
                      }}</span>
                  </div>
                </div>
              </VCol>
            </VRow>
          </VCardText>
          <VDivider />
          <VCardText class="account_note_section pt-1 px-4">
            <p class="mb-0">Notes:</p>
            <ul class="px-5">
              <li class="mb-1">
                All figures are in Indian Rupees (INR) unless otherwise stated.
              </li>
              <li class="mb-1">
                This is an unaudited statement generated for internal review
                purposes.
              </li>
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

/* Add column width transition animations */
.col-transition {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: center;
}

.col-expand {
  animation: expandColumn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.col-shrink {
  animation: shrinkColumn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@keyframes expandColumn {
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shrinkColumn {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.98);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Card content animation */
.card-content-transition {
  transition: all 0.3s ease;
}
</style>
