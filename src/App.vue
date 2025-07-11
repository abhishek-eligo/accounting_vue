<template>
  <v-app>
    <!-- Sidebar -->
    <MenuNavigationDrawer v-model:drawer="drawer" />

    <!-- Top bar -->
    <v-app-bar class="account_app_bar" app dark>
      <v-container class="d-flex align-center" style="max-width: 1800px;">
        <!-- Toggle Icon with active route icon -->
        <v-app-bar-nav-icon @click="drawer = !drawer">
          <v-icon>{{ activeItem?.icon || 'mdi-menu' }}</v-icon>
        </v-app-bar-nav-icon>

        <!-- Active Route Title -->
        <v-toolbar-title class="d-flex account_toolbar_title align-center">
          <!-- <v-icon start class="mr-2">{{ activeItem?.icon || 'mdi-help-circle-outline' }}</v-icon> -->
          {{ activeItem?.title || 'Dashboard' }}
        </v-toolbar-title>
      </v-container>
    </v-app-bar>

    <!-- Main content -->
    <v-main>
      <v-container class="account_main_container" fluid style="background-color: #f9f9f9; min-height: 100vh;">
        <v-container style="max-width: 1800px;">
          <router-view />
        </v-container>
      </v-container>
    </v-main>

    <!-- <AppFooter /> -->
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppFooter from './components/AppFooter.vue'
import navigationListItems from '@/data/navigation_list_items'
import MenuNavigationDrawer from './components/navigation/MenuNavigationDrawer.vue'

const drawer = ref(true);
// Get current route
const route = useRoute()

// Flatten all items from navigationListItems
const allNavItems = navigationListItems.flatMap(section => section.items)

// Reactive computed to track current active item
const activeItem = computed(() => {
  return allNavItems.find(item => item.path === route.path)
})
</script>
