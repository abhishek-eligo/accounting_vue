<template>
  <VDialog v-model="dialogVisible" max-width="440" transition="scale-transition">
    <VCard class="rounded-2xl text-center py-8 px-6 shadow-2xl bg-white">

      <!-- Warning Icon -->
      <div class="flex justify-center mb-6">
        <div
          class="w-16 h-16 flex items-center justify-center rounded-full border-2 border-blue-400 shadow-lg"
          style="box-shadow: 0 0 15px rgba(59,130,246,0.3);"
        >
          <v-icon color="blue" size="36">mdi-swap-horizontal</v-icon>
        </div>
      </div>

      <!-- Title -->
      <VCardTitle class="text-gray-900 text-xl font-bold justify-center mb-2">
        Reverse Journal Entry
      </VCardTitle>

      <!-- Subtitle -->
      <VCardText class="text-gray-600 text-base">
        Are you sure you want to <span class="font-semibold text-blue-500">reverse</span> this entry?<br />
        This will swap debit & credit, and narration will become
        <strong>"This is a Reverse Entry"</strong>.
      </VCardText>

      <!-- Actions -->
      <VCardActions class="justify-center mt-8 gap-4">
        <VBtn
          class="px-8 py-2 rounded-lg font-semibold text-white shadow-md transition-all"
          :style="{ backgroundColor: '#00A9A5' }"
          @click="confirmRevert"
        >
          Confirm
        </VBtn>

        <VBtn
          variant="flat"
          class="px-8 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-200 transition-all"
          @click="dialogVisible = false"
        >
          Cancel
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { computed } from "vue"
import axios from "axios"

// Props
const props = defineProps({
  modelValue: { type: Boolean, required: true }, // for v-model
  entryId: { type: String, required: true }
})

// Emits
const emit = defineEmits(["update:modelValue", "reverted"])

// Proxy v-model
const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val)
})

const confirmRevert = async () => {
  try {
    await axios.post(`account-history/${props.entryId}/reverse`,{}, {
      headers: {
        Authorization: `Bearer 1|Hj73Nc2i2LIuddwGjBpypo6RL2SF57x5gHakZo3ue431ac8c`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    emit("reverted")
    dialogVisible.value = false
  } catch (error) {
    console.error("Reverse failed:", error.response?.data || error.message);
  }
}
</script>
