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
  emit("delete", props.node);
}

function onRestore() {
  console.log("Restore:", props.node);
  menu.value = false;
  emit("restore", props.node);
}

function onSoft() {
  console.log("Soft:", props.node);
  menu.value = false;
  emit("soft", props.node);
}

// Dynamic class for chip
const typeClass = computed(() => {
  return props.node.type === "Balance Sheet"
    ? "account_balance_chip"
    : "account_profit_loss_chip";
});

// Determine if node is a ledger (no children)
const isLedger = computed(() => {
  if ('children' in props.node) {
    if (Array.isArray(props.node.children) && props.node.children.length === 0) {
      return false;
    } else {
      return false;
    }
  } else {
    return true;
  }
});

const isMainCategory = computed(() => {
  if (props.node.type === 'ledger-main-category') {
    return true;
  } else {
    return false;
  }
});

const isDeleted = computed(() => {
  return props.node.deleted_at !== null;
});

function formattedType(value) {
  if (!value) return ''
  return value
    .split('-') // split by "-"
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

onMounted(() => {
  if (props.node.children && props.node.children.length > 0) {
    expanded.value = true;
  }
});

const emit = defineEmits(["edit", "delete", "restore", "soft"]);
</script>

<template>
  <!-- Apply padding based on level -->
  <div class="mb-1" :style="{ paddingLeft: `${props.level * 16}px` }" @mouseenter="isHovered = true"
    @mouseleave="isHovered = false">
    <div class="d-flex align-center justify-space-between pa-1" @click="toggle" style="cursor: pointer">
      <div class="d-flex align-center gap-2">
        <div v-if="!isLedger" style="width: 16px; height: 16px;" class="">
          <IconChevronDown v-if="props.node.children && expanded" size="16" />
          <IconChevronRight v-else-if="props.node.children" size="16" />
        </div>
        <IconFileText v-if="isLedger" class="account_ledger_icon" size="16" />
        <IconFolder v-else class="account_folder_icon" size="16" />
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
        <!-- <VChip v-if="!isLedger" :class="typeClass" size="small">
          {{ props.node.type }}
        </VChip> -->
        <VChip :class="typeClass" size="small">
          {{ formattedType(props.node.heading) }}
        </VChip>
        <div class="more_options_w">
          <VMenu v-if="!isMainCategory" v-model="menu" :close-on-content-click="false" class="account_vmenu_border"
            location="bottom end">
            <template #activator="{ props: menuProps }">
              <IconDots v-if="isHovered || menu" size="16" v-bind="menuProps" />
            </template>
            <VList class="account_expansion_list">
              <VListItem v-if="!isDeleted" @click="onEdit">
                <VListItemTitle class="d-flex align-center gap-3">
                  <IconPencil size="18" />
                  <p class="mb-0">Edit</p>
                </VListItemTitle>
              </VListItem>
              <VListItem @click="onDelete">
                <VListItemTitle class="d-flex trash align-center gap-3">
                  <IconX size="18" />
                  <p class="mb-0">Delete</p>
                </VListItemTitle>
              </VListItem>
              <VListItem v-if="isDeleted" @click="onRestore">
                <VListItemTitle class="d-flex trash align-center gap-3">
                  <IconRestore size="18" />
                  <p class="mb-0">Restore</p>
                </VListItemTitle>
              </VListItem>
              <VListItem v-if="!isDeleted" @click="onSoft">
                <VListItemTitle class="d-flex trash align-center gap-3">
                  <IconTrash size="18" />
                  <p class="mb-0">SoftDelete</p>
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
        @edit="emit('edit', $event)" @delete="emit('delete', $event)" @soft="emit('soft', $event)" @restore="emit('restore', $event)" />
    </div>
  </div>
</template>

<style scoped></style>
