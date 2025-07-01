<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import navigationListItems from '@/data/navigation_list_items'
import { useRoute } from 'vue-router'

const route = useRoute();

const props = defineProps({
  drawer: Boolean
})
const emit = defineEmits(['update:drawer'])

const drawerModel = computed({
  get: () => props.drawer,
  set: (val) => emit('update:drawer', val),
})

const settingsItems = computed(() => {
  return navigationListItems
    .flatMap(section => section.items)
    .filter(item => ['company-settings', 'user-roles'].includes(item.slug));
})

const navigationItems = computed(() => {
  return navigationListItems.map(section => {
    const filteredItems = section.items.filter(item =>
      !['company-settings', 'user-roles'].includes(item.slug)
    );
    return { ...section, items: filteredItems };
  }).filter(section => section.items.length > 0); // remove empty sections
});

</script>

<template>
  <v-navigation-drawer app v-model="drawerModel" color="grey-lighten-4">
    <div class="d-flex flex-column justify-sapce-between">
      <div>
        <div class="d-flex h-100 align-center justify-space-between">
          <div class="d-flex align-center gap-2">
            <VIcon icon="mdi-alpha-a-box-outline" size="35" />
            <h5 class="mb-0">Accounting</h5>
          </div>
        </div>

        <v-list class="account_navigation_list">
          <template v-for="(section, index) in navigationItems" :key="index">
            <v-list-subheader class="account_nav_section mt-2" v-if="section.section">{{ section.section
            }}</v-list-subheader>

            <VListItem v-for="item in section.items" :key="item.title" :to="item.path" link
              class="px-3 account_nav_listitem d-flex align-center gap-2 py-1">
              <template #prepend>
                <VIcon :icon="item.icon" size="16" />
              </template>
              <VListItemTitle>{{ item.title }}</VListItemTitle>
            </VListItem>
          </template>
        </v-list>
      </div>

      <!-- Settings List -->
      <div>
        <VList class="account_navigation_list">
          <VListItem v-for="item in settingsItems" :key="item.title" :to="item.path" link
            class="px-3 account_nav_listitem d-flex align-center gap-2 py-1">
            <template #prepend>
              <VIcon :icon="item.icon" size="16" />
            </template>
            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItem>
        </VList>
      </div>
    </div>
  </v-navigation-drawer>
  <!-- expand-on-hover rail -->
</template>
