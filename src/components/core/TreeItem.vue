<script setup>
import { ref, computed, onMounted } from "vue";
import { VIcon, VChip } from "vuetify/components";
import TreeItem from "./TreeItem.vue";

const props = defineProps({
  node: Object,
  level: {
    type: Number,
    default: 0,
  },
});

const expanded = ref(false);
const menu = ref(false);
const isHovered = ref(false);

function toggle() {
  if (props.node.children) {
    expanded.value = !expanded.value;
  }
}

function onEdit() {
  console.log("Edit:", props.node);
  menu.value = false;
  emit("edit", props.node);
}

function onDelete() {
  console.log("Delete:", props.node);
  menu.value = false;
}

// Dynamic class for chip
const typeClass = computed(() => {
  return props.node.type === "Balance Sheet"
    ? "account_balance_chip"
    : "account_profit_loss_chip";
});

// Determine if node is a ledger (no children)
const isLedger = computed(() => {
  return (
    props.node.children === null ||
    (props.node.children && props.node.children.length === 0 && !props.node.children)
  );
});

onMounted(() => {
  if (props.node.children && props.node.children.length > 0) {
    expanded.value = true;
  }
});

const emit = defineEmits(["edit"]);
</script>

<template>
  <!-- Apply padding based on level -->
  <div class="mb-1" :style="{ paddingLeft: `${props.level * 16}px` }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="d-flex align-center justify-space-between pa-1" @click="toggle" style="cursor: pointer">
      <div class="d-flex align-center gap-2">
        <div v-if="!isLedger" style="width: 16px; height: 16px;" class="">
          <VIcon v-if="props.node.children" :icon="expanded ? 'mdi-chevron-down' : 'mdi-chevron-right'" size="16" />
        </div>
        <VIcon :icon="isLedger ? 'mdi-file-document-outline' : 'mdi-folder-outline'" size="16"
          :class="isLedger ? 'account_ledger_icon' : 'account_folder_icon'" />
        <div class="">
          <h6 :class="[
            props.level === 0 ? 'expansion_base_parent_title' : 'expansion_node_title',
            'mb-0',
          ]">
            {{ props.node.name }}
          </h6>
        </div>
      </div>
      <div class="d-flex align-center gap-2" @click.stop>
        <VChip v-if="!isLedger" :class="typeClass" size="small">
          {{ props.node.type }}
        </VChip>
        <div class="more_options_w">
          <VMenu v-model="menu" :close-on-content-click="false" class="account_vmenu_border" location="bottom end">
            <template #activator="{ props: menuProps }">
              <VIcon v-if="isHovered || menu" open-on-hover icon="mdi-dots-horizontal" size="16" v-bind="menuProps" />
            </template>
            <VList class="account_expansion_list">
              <VListItem @click="onEdit">
                <VListItemTitle class="d-flex align-center gap-3">
                  <VIcon icon="mdi-pencil-outline" size="small" />
                  <p class="mb-0">Edit</p>
                </VListItemTitle>
              </VListItem>
              <VListItem @click="onDelete">
                <VListItemTitle class="d-flex trash align-center gap-3">
                  <VIcon icon="mdi-trash-can-outline" size="small" />
                  <p class="mb-0">Delete</p>
                </VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </div>
      </div>
    </div>

    <!-- Recursive Children with incremented level -->
    <div v-if="expanded">
      <TreeItem v-for="child in props.node.children" :key="child.id" :node="child" :level="props.level + 1"
        @edit="emit('edit', $event)" />
    </div>
  </div>
</template>

<style scoped></style>
