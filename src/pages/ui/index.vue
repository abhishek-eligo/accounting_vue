<script setup>
import { VBtn, VIcon, VRow, VCol, VCard } from 'vuetify/components'
</script>

<template>
  <div>
    <VCard title="Buttons" subtitle="A showcase of all button variants and sizes.">
      <VRow class="px-6 py-4" dense>
        <!-- Default -->
        <VCol cols="12" class="d-flex gap-3 align-center">
          <p class="me-4">Default</p>
          <VBtn size="large" class="account_v_btn_primary">Large Button</VBtn>
          <VBtn class="account_v_btn_primary">Default Button</VBtn>
          <VBtn size="small" class="account_v_btn_primary">Small Button</VBtn>
          <VBtn icon class="account_v_btn_primary" size="x-small" rounded=""><VIcon>mdi-email-outline</VIcon></VBtn>
          <VBtn disabled class="account_v_btn_primary" prepend-icon="mdi-refresh">Disabled</VBtn>
        </VCol>

        <!-- Destructive -->
        <VCol cols="12" class="d-flex gap-3 align-center">
          <p class="me-4">Destructive</p>
          <VBtn size="large" class="account_v_btn_error">Large Button</VBtn>
          <VBtn class="account_v_btn_error">Default Button</VBtn>
          <VBtn size="small" class="account_v_btn_error">Small Button</VBtn>
          <VBtn icon class="account_v_btn_error" size="x-small" rounded=""><VIcon>mdi-email-outline</VIcon></VBtn>
          <VBtn disabled class="text-capitalize account_v_btn_error" color="error" prepend-icon="mdi-refresh">Disabled</VBtn>
        </VCol>

        <!-- Outline -->
        <VCol cols="12" class="d-flex gap-3 align-center">
          <p class="me-4">Outline</p>
          <VBtn class="account_v_btn_outlined" size="large">Large Button</VBtn>
          <VBtn class="account_v_btn_outlined">Default Button</VBtn>
          <VBtn size="small" class="account_v_btn_outlined">Small Button</VBtn>
          <VBtn icon class="account_v_btn_outlined"><VIcon>mdi-email</VIcon></VBtn>
          <VBtn disabled class="account_v_btn_outlined" prepend-icon="mdi-refresh">Disabled</VBtn>
        </VCol>

        <!-- Secondary -->
        <VCol cols="12" class="d-flex align-center">
          <p class="me-4">Secondary</p>
          <VBtn size="large" color="secondary">Large Button</VBtn>
          <VBtn class="mx-2" color="secondary">Default Button</VBtn>
          <VBtn size="small" color="secondary">Small Button</VBtn>
          <VBtn icon class="mx-2" color="secondary"><VIcon>mdi-email</VIcon></VBtn>
          <VBtn disabled class="text-capitalize" color="secondary" prepend-icon="mdi-refresh">Disabled</VBtn>
        </VCol>

        <!-- Ghost -->
        <VCol cols="12" class="d-flex align-center">
          <p class="me-4">Ghost</p>
          <VBtn variant="text" size="large">Large Button</VBtn>
          <VBtn class="mx-2" variant="text">Default Button</VBtn>
          <VBtn size="small" variant="text">Small Button</VBtn>
          <VBtn icon class="mx-2" variant="text"><VIcon>mdi-email-outline</VIcon></VBtn>
          <VBtn disabled class="text-capitalize" variant="text" prepend-icon="mdi-refresh">Disabled</VBtn>
        </VCol>

        <!-- Link -->
        <VCol cols="12" class="d-flex align-center">
          <p class="me-4">Link</p>
          <VBtn variant="plain" color="primary" size="large">Large Button</VBtn>
          <VBtn class="mx-2" variant="plain" color="primary">Default Button</VBtn>
          <VBtn variant="plain" color="primary" size="small">Small Button</VBtn>
          <VBtn icon class="mx-2" variant="plain" color="primary"><VIcon>mdi-email</VIcon></VBtn>
          <VBtn disabled class="text-capitalize" variant="plain" color="primary" prepend-icon="mdi-refresh">Disabled</VBtn>
        </VCol>
      </VRow>
    </VCard>
  </div>
</template>

<style scoped>
strong {
  width: 100px;
}
</style>
