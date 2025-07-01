<script setup>
import { VBtn, VIcon, VRow, VCol, VCard } from 'vuetify/components'
</script>

<template>
  <div class="account">

    <!-- Buttons Card -->
    <VCard class="account_vcard_border account_ui_vcard pa-2 mb-6" title="Buttons"
      subtitle="A showcase of all button variants and sizes.">
      <VCardText class="pa-4">
        <VRow>
          <VCol class="d-flex align-center" cols="12" lg="1" md="1">
            <p class="account_ui_component_key mb-0">Default</p>
          </VCol>
          <VCol cols="12" lg="11" md="11">
            <div class="d-flex gap-3 align-center">
              <VBtn size="large" class="account_v_btn_primary">Large Button</VBtn>
              <VBtn class="account_v_btn_primary">Default Button</VBtn>
              <VBtn size="small" class="account_v_btn_primary">Small Button</VBtn>
              <VBtn icon class="account_v_btn_primary" size="x-small" rounded="">
                <VIcon>mdi-email-outline</VIcon>
              </VBtn>
              <VBtn disabled class="account_v_btn_primary" prepend-icon="mdi-refresh">Disabled</VBtn>
            </div>
          </VCol>
        </VRow>

        <VRow>
          <VCol class="d-flex align-center" cols="12" lg="1" md="1">
            <p class="account_ui_component_key mb-0">Destructive</p>
          </VCol>
          <VCol cols="12" lg="11" md="11">
            <div class="d-flex gap-3 align-center">
              <VBtn size="large" class="account_v_btn_error">Large Button</VBtn>
              <VBtn class="account_v_btn_error">Default Button</VBtn>
              <VBtn size="small" class="account_v_btn_error">Small Button</VBtn>
              <VBtn icon class="account_v_btn_error" size="x-small" rounded="">
                <VIcon>mdi-email-outline</VIcon>
              </VBtn>
              <VBtn disabled class="text-capitalize account_v_btn_error" color="error" prepend-icon="mdi-refresh">
                Disabled
              </VBtn>
            </div>
          </VCol>
        </VRow>

        <VRow>
          <VCol class="d-flex align-center" cols="12" lg="1" md="1">
            <p class="account_ui_component_key mb-0">Outline</p>
          </VCol>
          <VCol cols="12" lg="11" md="11">
            <div class="d-flex gap-3 align-center">
              <VBtn class="account_v_btn_outlined" size="large">Large Button</VBtn>
              <VBtn class="account_v_btn_outlined">Default Button</VBtn>
              <VBtn size="small" class="account_v_btn_outlined">Small Button</VBtn>
              <VBtn icon class="account_v_btn_outlined" rounded="" size="x-small">
                <VIcon>mdi-email</VIcon>
              </VBtn>
              <VBtn disabled class="account_v_btn_outlined" prepend-icon="mdi-refresh">Disabled</VBtn>
            </div>
          </VCol>
        </VRow>

        <VRow>
          <VCol class="d-flex align-center" cols="12" lg="1" md="1">
            <p class="account_ui_component_key mb-0">Secondary</p>
          </VCol>
          <VCol cols="12" lg="11" md="11">
            <div class="d-flex gap-3 align-center">
              <VBtn size="large" class="account_v_btn_secondary">Large Button</VBtn>
              <VBtn class="account_v_btn_secondary">Default Button</VBtn>
              <VBtn size="small" class="account_v_btn_secondary">Small Button</VBtn>
              <VBtn icon class="account_v_btn_secondary" rounded="" size="x-small">
                <VIcon>mdi-email</VIcon>
              </VBtn>
              <VBtn disabled class="account_v_btn_secondary" prepend-icon="mdi-refresh">Disabled</VBtn>
            </div>
          </VCol>
        </VRow>

        <VRow>
          <VCol class="d-flex align-center" cols="12" lg="1" md="1">
            <p class="account_ui_component_key mb-0">Ghost</p>
          </VCol>
          <VCol cols="12" lg="11" md="11">
            <div class="d-flex gap-3 align-center">
              <VBtn variant="text" class="account_v_btn_ghost" size="large">Large Button</VBtn>
              <VBtn class="account_v_btn_ghost" variant="text">Default Button</VBtn>
              <VBtn size="small" class="account_v_btn_ghost" variant="text">Small Button</VBtn>
              <VBtn icon class="account_v_btn_ghost" rounded="" size="x-small" variant="text">
                <VIcon>mdi-email-outline</VIcon>
              </VBtn>
              <VBtn disabled class="account_v_btn_ghost" variant="text" prepend-icon="mdi-refresh">Disabled</VBtn>
            </div>
          </VCol>
        </VRow>

        <VRow>
          <VCol class="d-flex align-center" cols="12" lg="1" md="1">
            <p class="account_ui_component_key mb-0">Link</p>
          </VCol>
          <VCol cols="12" lg="11" md="11">
            <div class="d-flex gap-3 align-center">
              <VBtn variant="plain" class="account_v_btn_link" size="large">Large Button</VBtn>
              <VBtn class="account_v_btn_link" variant="plain">Default Button</VBtn>
              <VBtn variant="plain" class="account_v_btn_link" size="small">Small Button</VBtn>
              <VBtn icon class="account_v_btn_link" variant="plain" rounded="" size="x-small">
                <VIcon>mdi-email</VIcon>
              </VBtn>
              <VBtn disabled class="account_v_btn_link" variant="plain" color="primary" prepend-icon="mdi-refresh">
                Disabled
              </VBtn>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- Badges Card -->
    <VCard title="Badges" subtitle="A showcase of all badge variants"
      class="mb-6 pa-2 account_ui_vcard account_vcard_border">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <div class="d-flex align-center gap-3">
              <VChip class="account_chip_primary" size="small" text="Default" />
              <VChip class="account_chip_secondary" size="small" text="Secondary" />
              <VChip class="account_chip_outline" size="small" text="Outline" />
              <VChip class="account_chip_error" size="small" text="Destructive" />
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- Cards -->
    <VCard title="Cards" subtitle="A comprehensive form showcasing various input types."
      class="pa-2 mb-6 account_ui_vcard account_vcard_border">
      <VCardText>
        <VRow>
          <VCol cols="12" lg="4" md="4">
            <VCard title="Basic Card" class="pa-2 h-100 account_vcard_border shadow-none">
              <VCardText>
                <p class="mb-0 account_text_color">This is the content of a basic card. It's simple and clean.</p>
              </VCardText>
            </VCard>
          </VCol>
          <VCol cols="12" lg="4" md="4">
            <VCard title="Full Card" subtitle="With header, content, and footer."
              class="pa-2 h-100 account_vcard_border shadow-none">
              <VCardText class="pb-1">
                <p class="mb-0 account_text_color">This card demonstrates all available sections for more complex
                  content.</p>
              </VCardText>
              <VCardActions class="d-flex justify-end py-0">
                <VBtn class="account_v_btn_primary">Action</VBtn>
              </VCardActions>
            </VCard>
          </VCol>
          <VCol cols="12" lg="4" md="4">
            <VCard title="Primary Card" class="pa-2 h-100 account_vcard_border account_v_card_dark shadow-none">
              <VCardText>
                <p class="mb-0 account_text_color">This card uses the primary theme color to draw attention.</p>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>

    <!-- Wizard Form -->
    <VCard title="Form Elements" subtitle="A multi-step form with animated transitions."
      class="pa-2 mb-6 account_ui_vcard account_vcard_border">
      <VCardText>
        <VRow>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Text Input</label>
            <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
              placeholder="Your name" />
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Email Input</label>
            <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact"
              :placeholder='`Your.email@example.com`' />
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Date Picker</label>
            <VTextField class="accouting_field accouting_active_field" type="date" variant="outlined" density="compact"
              placeholder="July 1, 2025" />
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Select</label>
            <VSelect class="accouting_field accouting_active_field" variant="outlined" placeholder="Select a fruit"
              :items="['abc', 'def']" />
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Combobox</label>
            <VAutocomplete placeholder="Select language" class="accouting_field accouting_active_field"
              variant="outlined" />
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Group Input</label>
            <VSelect class="accouting_field accouting_active_field" variant="outlined" placeholder="Select an item">
              <template #append>
                <VBtn class="account_v_btn_outlined" rounded="" icon="mdi-plus-circle-outline" size="x-small" />
              </template>
            </VSelect>
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Textarea</label>
            <VTextarea placeholder="Tell us about yourself" variant="outlined" />
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Checkbox</label>
            <div class="d-flex justify-start flex-column gap-2">
              <VCheckbox density="compact" class="account_v_checkbox" label="Checkbox 1" />
              <VCheckbox density="compact" class="account_v_checkbox" label="Checkbox 2" />
            </div>
          </VCol>
          <VCol cols="12" lg="6" md="6">
            <label class="account_label mb-2">Radio Group</label>
            <v-radio-group>
              <v-radio label="Radio One" value="one"></v-radio>
              <v-radio label="Radio Two" value="two"></v-radio>
            </v-radio-group>
          </VCol>
          <VCol cols="12" lg="6" md="6"></VCol>
          <VCol cols="12" lg="6" md="6"></VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>

<style scoped></style>
