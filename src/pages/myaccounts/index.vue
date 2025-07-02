<script setup></script>

<template>
  <div class="account_ui_vcard">
    <VRow>
      <VCol cols="12" lg="8" md="8">
        <VCard class="account_vcard_border shadow-none" title="Chart of Accounts" subtitle="Create and manage your ledger accounts and groups.">
          <template #append>
            <VBtn class="account_v_btn_primary" variant="tonal" prepend-icon="mdi-plus-circle-outline">Add Account</VBtn>
          </template>
          <VCardText>
            <VCard class="pa-2 account_vcard_border shadow-none">


            </VCard>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped></style>
