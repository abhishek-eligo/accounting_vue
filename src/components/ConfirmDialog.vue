<template>
  <VDialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" max-width="600">
    <VCard>
      <VCardTitle class="account_ui_swtich_title pb-0">
        {{ actionTitle }}
      </VCardTitle>

      <VCardSubtitle class="account_ui_swtich_subtitle px-3">
        <template v-if="action === 'delete'">
          Are you sure you want to permanently delete this
          <strong>{{ itemName }}</strong> {{ type }}?
          <h6 class="text-error text-center">This action cannot be undone.</h6>
        </template>

        <template v-else-if="action === 'soft'">
          Are you sure you want to delete this
          <strong>{{ itemName }}</strong> {{ type }}?
        </template>

        <template v-else-if="action === 'restore'">
          Are you sure you want to restore this
          <strong>{{ itemName }}</strong> {{ type }}?
        </template>
      </VCardSubtitle>

      <VCardActions class="justify-end mr-4 mb-2">
        <VBtn
          text="Cancel"
          class="account_v_btn_outlined"
          variant="outlined"
          @click="$emit('update:modelValue', false)"
        />
        <VBtn
          :text="confirmButtonText"
          class="account_v_btn_primary"
          :color="confirmButtonColor"
          @click="handleConfirm"
        />
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  type: { type: String, required: true },       // "Ledger Group" | "Ledger Sub Group" | "Ledger"
  action: { type: String, required: true },     // "delete" | "soft" | "restore"
  itemName: { type: String, required: false },
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const actionTitle = computed(() => {
  switch (props.action) {
    case 'delete': return `Permanent Delete ${props.type}`
    case 'soft': return `Soft Delete ${props.type}`
    case 'restore': return `Restore ${props.type}`
  }
})

const confirmButtonText = computed(() => {
  if (props.action === 'restore') return 'Restore'
  return 'Delete'
})

const confirmButtonColor = computed(() => {
  if (props.action === 'restore') return 'success'
  return 'error'
})

const handleConfirm = () => {
  emit('confirm')
  emit('update:modelValue', false)
}
</script>
