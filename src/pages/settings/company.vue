<script setup>
const currentTab = ref('')
</script>

<template>
  <div>
    <VCard class="account_vcard_border">
      <VCardTitle>Settings</VCardTitle>
      <VCardSubtitle>Manage your company settings and preferences.</VCardSubtitle>
      <VCardText>
        <VRow>
          <VCol cols="12" lg="2" md="2" sm="12">
            <div>
              <VTabs class="tabs_pill" v-model="currentTab" direction="vertical" rounded="pill">
                <VTab>Company Setting</VTab>
                <VTab>GST Type</VTab>
                <VTab>Payment Terms</VTab>
                <VTab>Integeration</VTab>
              </VTabs>
            </div>
          </VCol>
          <VCol cols="12" lg="10" md="10" sm="12"></VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped></style>
