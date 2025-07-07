<script setup>
const props = defineProps({
  item: Object,
  level: {
    type: Number,
    default: 0,
  },
});

const paddingLeft = `${props.level * 24}px`; // Increase padding per level

const isGroup = props.item.type === 'group';
const isLedger = props.item.type === 'ledger';

const isExpense = props.item.name?.toLowerCase().includes("expense");

const itemClass = isLedger
  ? '' // Ledger has no special wrapper class
  : props.level === 0
    ? 'amount_income_item_title'
    : 'amount_income_overlay_item_title';


const nameClass = computed(() => {
  if (isLedger) {
    return 'account_ledger_secondary';
  } else if (isGroup && isExpense) {
    return 'account_group_error';
  } else if (isGroup) {
    return 'account_group_primary';
  }
  return '';
});

const chipClass = computed(() => {
  return isLedger ? 'account_chip_outline' : 'account_chip_secondary';
});
</script>

<template>
  <!-- Wrapper class is dynamic based on rules -->
  <div class="px-2 py-2 mt-2" :class="itemClass">
    <div class="d-flex align-center" :style="{ paddingLeft }">
      <VCol class="pa-0" cols="7">
        <div class="d-flex align-center gap-2">
          <VIcon :icon="isGroup ? 'mdi-folder-outline' : 'mdi-file-document-outline'" size="16" />
          <p class="mb-0 amount_income_group_item" :class="nameClass">
            {{ item.name }}
          </p>
          <VChip v-if="item.percent" density="compact" class="account_income_chip py-1 px-1" :class="chipClass">
            ({{ item.percent }})
          </VChip>
        </div>
      </VCol>
      <VCol class="pa-0" cols="2">
        <div class="d-flex justify-end">
          <p class="mb-0 amount_inc_current_item">{{ item.current }}</p>
        </div>
      </VCol>
      <VCol class="pa-0" cols="2">
        <div class="d-flex justify-end">
          <p class="mb-0 amount_inc_previous_item">{{ item.previous }}</p>
        </div>
      </VCol>
      <VCol class="pa-0" cols="1">
        <div class="d-flex justify-end align-center gap-2">
          <p class="mb-0 amount_inc_change_item">{{ item.change }}</p>
          <VIcon :icon="item.new ? 'mdi-star' : 'mdi-chevron-up'" size="12"
            :class="item.new ? 'text-info' : 'text-success'" />
        </div>
      </VCol>
    </div>
  </div>

  <!-- Render children recursively -->
  <div v-if="item.children && item.children.length">
    <IncomeRow v-for="(child, idx) in item.children" :key="idx" :item="child" :level="level + 1" />
  </div>
</template>
