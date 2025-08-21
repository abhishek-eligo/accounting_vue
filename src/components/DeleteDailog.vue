<template>
  <VDialog v-model="showDeleteDialog" max-width="440" transition="scale-transition">
    <VCard
      class="rounded-2xl text-center py-8 px-6 shadow-2xl bg-white overflow-hidden"
    >
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
        This action will permanently delete the journal entry. <br />
        Type <strong class="text-red-500">"DELETE"</strong> below to confirm.
      </VCardText>

      <!-- Input -->
      <VTextField
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
          :style="{ backgroundColor: deleteConfirmation === 'DELETE' ? '#00A9A5' : '#cbd5e1' }"
          :disabled="deleteConfirmation !== 'DELETE'"
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
import { ref, watch, defineEmits, defineProps } from "vue"
import axios from "axios"

// Props passed from parent (table row click)
const props = defineProps({
  modelValue: { type: Boolean, required: true },   // for v-model
  entryId: { type: String, default: null }         // journal entry id
})

const emit = defineEmits(["update:modelValue", "deleted"])

// State
const showDeleteDialog = ref(props.modelValue)
const deleteConfirmation = ref("")

// Sync with parent v-model
watch(
  () => props.modelValue,
  (val) => (showDeleteDialog.value = val)
)

watch(showDeleteDialog, (val) => {
  emit("update:modelValue", val)
})

// Methods
const closeDeleteDialog = () => {
  showDeleteDialog.value = false
  deleteConfirmation.value = ""
}

const confirmDelete = async () => {
  try {
    await axios.delete(`account-history/${props.entryId}`, {
      headers: {
        Authorization: `Bearer 1|Eq5z4wPCkJ0nUW2AIRJ8q5GVgMS0cn7LWkTZM9y7ef1c07de`,
      },
    }
    );
    emit("deleted", props.entryId) // notify parent to refresh table
    closeDeleteDialog()
  } catch (error) {
    console.error("Delete failed:", error)
  }
}
</script>
