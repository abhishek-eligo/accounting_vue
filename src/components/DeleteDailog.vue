<template>
  <VDialog v-model="showDeleteDialog" max-width="440" transition="scale-transition">
    <VCard class="rounded-2xl text-center py-8 px-6 shadow-2xl bg-white overflow-hidden">
      <!-- Warning Icon -->
      <div class="flex justify-center mb-6">
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full border-2 border-orange-400 shadow-lg"
          style="box-shadow: 0 0 15px rgba(255,165,0,0.3);"
        >
          <v-icon color="orange" size="36">mdi-alert</v-icon>
        </div>
      </div>

      <!-- Title -->
      <VCardTitle class="text-gray-900 text-xl font-bold justify-center mb-2">
        Are you sure?
      </VCardTitle>

      <!-- Subtitle -->
      <VCardText class="text-gray-600 text-base">
        <span v-if="deleteMode === 'soft'">
          This action will <strong class="text-orange-500">soft delete</strong> the journal entry.<br />
          You can restore it later.
        </span>
        <span v-else>
          This action will <strong class="text-red-500">permanently delete</strong> the journal entry.
          <br /> Type <strong class="text-red-500">"DELETE"</strong> below to confirm.
        </span>
      </VCardText>

      <!-- Input only for permanent delete -->
      <VTextField
        v-if="deleteMode === 'force'"
        v-model="deleteConfirmation"
        placeholder="Type 'DELETE' to confirm"
        variant="outlined"
        density="comfortable"
        hide-details
        class="mt-5 rounded-lg"
        color="#00A9A5"
      />

      <!-- Actions -->
      <VCardActions class="justify-center mt-8 gap-4">
        <VBtn
          class="px-8 py-2 rounded-lg font-semibold text-white shadow-md transition-all"
          :style="{ backgroundColor: canConfirm ? '#00A9A5' : '#cbd5e1' }"
          :disabled="!canConfirm"
          @click="confirmDelete"
        >
          Confirm
        </VBtn>

        <VBtn
          variant="flat"
          class="px-8 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-200 transition-all"
          @click="closeDeleteDialog"
        >
          Cancel
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps, computed } from "vue"
import axios from "axios"

const props = defineProps({
  modelValue: { type: Boolean, required: true },   // v-model
  entryId: { type: String, default: null },        // journal entry id
  mode: { type: String, default: "soft" }          // "soft" or "force"
})

const emit = defineEmits(["update:modelValue", "deleted"])

const showDeleteDialog = ref(props.modelValue)
const deleteConfirmation = ref("")

// Sync with parent v-model
watch(() => props.modelValue, (val) => (showDeleteDialog.value = val))
watch(showDeleteDialog, (val) => emit("update:modelValue", val))

const deleteMode = computed(() => props.mode)

// ✅ Only allow confirm if correct input is typed
const canConfirm = computed(() => {
  return deleteMode.value === "soft" || deleteConfirmation.value.trim() === "DELETE"
})

const closeDeleteDialog = () => {
  showDeleteDialog.value = false
  deleteConfirmation.value = ""
}

const confirmDelete = async () => {
  try {
    // double check safeguard
    if (deleteMode.value === "force" && deleteConfirmation.value.trim() !== "DELETE") {
      return
    }

    const url =
      deleteMode.value === "soft"
        ? `/account-history/${props.entryId}`
        : `/account-history/${props.entryId}/force-delete`

    await axios.delete(url, {
      headers: {
        Authorization: `Bearer 1|Hj73Nc2i2LIuddwGjBpypo6RL2SF57x5gHakZo3ue431ac8c`,
        Accept: "application/json"
      }
    })

    emit("deleted", props.entryId) // notify parent
    closeDeleteDialog()
  } catch (error) {
    console.error("Delete failed:", error.response?.data || error.message)
  }
}
</script>
