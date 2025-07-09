<script setup></script>

<template>
  <div class="account_ui_card">
    <VCard title="All Entries" subtitle="A record of all financial transactions. Showing 50 entries."
      class="account_vcard_border shadow-none">
      <template #append>
        <VTextField style="min-width: 175px;" prepend-inner-icon="mdi-magnify" class="accouting_field accouting_active_field" placeholder="Filter entries" variant="outlined" />
      </template>
    </VCard>
  </div>
</template>
