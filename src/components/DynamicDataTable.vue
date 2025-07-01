<script setup>
import { ref, computed } from 'vue'
import { VAutocomplete, VTextField, VSpacer } from 'vuetify/lib/components/index.mjs';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  filters: {
    type: Array,
    required: true,
  },
  statusItems: {
    type: Array,
    default: () => [],
  },
  accountTypeItems: {
    type: Array,
    default: () => [],
  },
  currencyItems: {
    type: Array,
    default: () => [],
  },
  widgets: {
    type: Object,
    required: true
  }
})

const page = ref(1)
const itemsPerPage = ref(10)

const visibleHeaders = computed(() => {
  return props.headers.filter(h => h.visible !== false)
})

// Check if any filter is active
const hasActiveFilters = computed(() => {
  return props.filters.some(filter => isFilterChecked(filter.title));
})

const isFilterSectionVisible = ref(false);
const openFilterSection = () => {
  isFilterSectionVisible.value = !isFilterSectionVisible.value;
}

// Helper function to check if a filter is checked
const isFilterChecked = (title) => {
  return props.filters.find(item => item.title === title)?.checked || false;
}

// Update filter checked state
const toggleFilter = (title) => {
  const filter = props.filters.find(item => item.title === title);
  if (filter) {
    filter.checked = !filter.checked;
  }
}

// New function to handle cancel button click
const cancelFilter = (title) => {
  const filter = props.filters.find(item => item.title === title);
  if (filter) {
    filter.checked = false;
  }
}

const isTableCompact = ref(false);

const isheaderReorderSectionVisible = ref(false);
const openHeaderReorderSection = () => {
  isheaderReorderSectionVisible.value = !isheaderReorderSectionVisible.value;
}

const dragIconActive = ref(false)
const draggingIndex = ref(null)

const onDragStart = (e, index) => {
  if (!dragIconActive.value) {
    e.preventDefault()
    return
  }
  draggingIndex.value = index
  e.dataTransfer.effectAllowed = 'move'
}

const onDrop = (e, dropIndex) => {
  if (draggingIndex.value === null || draggingIndex.value === dropIndex) return

  const temp = props.headers[draggingIndex.value]
  props.headers[draggingIndex.value] = props.headers[dropIndex]
  props.headers[dropIndex] = temp

  draggingIndex.value = null
  dragIconActive.value = false
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'active':
      return 'active';
    case 'inactive':
      return 'inactive';
    case 'pending':
      return 'pending';
    default:
      return '';
  }
}

// Pagination calculations
const paginatedItems = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return props.items.slice(start, end);
})

const totalPages = computed(() => {
  return Math.ceil(props.items.length / itemsPerPage.value);
})

</script>


<template>
  <div class="account">
    <VRow class="">
      <!-- Total Records -->
      <VCol cols="12" md="3">
        <VCard subtitle="Total Records" class="account_v_card_dark account_widget_vcard account_vcard_border">
          <template #append>
            <v-icon color="white" size="16" class="ml-2">mdi-account-group</v-icon>
          </template>
          <VCardText>
            <!-- <div class="text-h5 font-weight-bold">{{ props.widgets.totalRecords.toLocaleString() }}</div> -->
            <h5 class="account_texth5 mb-0 account_text_white font-weight-bold">10,000</h5>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Average Sale -->
      <VCol cols="12" md="3">
        <VCard subtitle="Average Sale" class="account_vcard_border account_widget_vcard">
          <template #append>
            <v-icon size="16" class="ml-2">mdi-currency-rupee</v-icon>
          </template>
          <VCardText>
            <h5 class="account_texth5 mb-0 font-weight-bold">${{ props.widgets.avgSale.toFixed(2) }}</h5>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Top 10% Avg. Sale -->
      <VCol cols="12" md="3">
        <VCard subtitle="Top 10% Avg. Sale" class="account_vcard_border account_widget_vcard">
          <template #append>
            <v-icon size="16" class="ml-2">mdi-trending-up</v-icon>
          </template>
          <VCardText>
            <h5 class="account_texth5 mb-0 font-weight-bold">${{ props.widgets.top10AvgSale.toFixed(2) }}</h5>
          </VCardText>
        </VCard>
      </VCol>

      <!-- Average Rating -->
      <VCol cols="12" md="3">
        <VCard subtitle="Average Rating" class="account_vcard_border account_widget_vcard">
          <template #append>
            <v-icon size="16" class="ml-2">mdi-star-outline</v-icon>
          </template>
          <VCardText>
            <h5 class="account_texth5 mb-0 font-weight-bold">{{ props.widgets.avgRating.toFixed(1) }} / 5.0</h5>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>

    <VRow class="">
      <VCol cols="12" class="d-flex align-center">
        <VTextField class="accouting_field accouting_active_field" variant="outlined" density="compact" style="max-inline-size: 377px;"
          prepend-inner-icon="mdi-magnify"
          :placeholder="title === 'Accounting' ? 'Search by Name' : 'Search by Customer Name'" />
        <VSpacer />
        <div class="d-flex align-center gap-2">
          <VSwitch density="compact" inset class="account_swtich_btn mr-3" color="primary" hide-details label="Compact View"
            v-model="isTableCompact" />
          <VMenu location="bottom" :close-on-content-click="false">
            <template #activator="{ props }">
              <v-tooltip text="Filters list" location="top">
                <template #activator="{ props: tooltipProps }">
                  <VBtn v-bind="{ ...props, ...tooltipProps }" variant="text" class="account_filter_btn_color"
                    icon="mdi-filter-cog-outline" rounded size="36" />
                </template>
              </v-tooltip>
            </template>
            <VCard>
              <VCardTitle class="pb-0">Add Filters</VCardTitle>
              <VDivider class="my-1" />
              <VList lines="three" density="compact" select-strategy="classic" class="action-item-group-list">
                <VListItem v-for="filter in filters" :key="filter.title" class="ma-0 dynamicTable_listitem">
                  <template #prepend>
                    <VListItemAction>
                      <VCheckbox :model-value="isFilterChecked(filter.title)"
                        @update:model-value="toggleFilter(filter.title)" color="primary" />
                    </VListItemAction>
                  </template>
                  <VListItemTitle>{{ filter.title }}</VListItemTitle>
                </VListItem>
              </VList>
            </VCard>
          </VMenu>
          <VMenu width="300px" location="bottom" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <VBtn v-bind="props" class="account_filter_btn_color" variant="text" icon="mdi-view-column-outline"
                rounded="" size="36" />
            </template>
            <VCard>
              <VCardTitle>Toggle and Reorder</VCardTitle>
              <VDivider class="m-0" />
              <VRow class="mt-2">
                <VCol cols="12" class="py-1 draggable-header" v-for="(header, index) in props.headers"
                  :key="header.value" draggable="true" @dragstart="onDragStart($event, index)" @dragover.prevent
                  @drop="onDrop($event, index)">
                  <div class="d-flex align-center justify-space-between">
                    <div class="d-flex align-center w-100 gap-1">
                      <v-icon icon="mdi-drag" class="ml-2 drag-icon" @mousedown="dragIconActive = true"
                        @mouseup="dragIconActive = false" />
                      <p class="mb-0">{{ header.title }}</p>
                    </div>
                    <VSwitch density="compact" color="primary" hide-details class="account_swtich_btn"
                      v-model="props.headers[index].visible" />
                  </div>
                </VCol>
              </VRow>
            </VCard>
          </VMenu>

          <VMenu width="110px" location="bottom" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <VBtn v-bind="props" icon="mdi-tray-arrow-down" class="account_filter_btn_color " variant="text" rounded=""
                size="36" />
            </template>
            <VCard class="account_vcard_border">
              <VList>
                <VListItem title="PDF" link />
                <VListItem title="Excel" link />
                <VListItem title="CSV" link />
              </VList>
            </VCard>
          </VMenu>
        </div>
      </VCol>
    </VRow>

    <VSlideYTransition mode="in-out">
      <VRow v-if="hasActiveFilters">
        <VCol v-if="!hasActiveFilters" cols="12">
          <VAlert type="info" variant="tonal">
            No filters selected. Please select a filter to apply.
          </VAlert>
        </VCol>
        <VCol v-if="isFilterChecked('Status')" cols="12" lg="3" md="3">
          <VAutocomplete class="accouting_field accouting_active_field" variant="outlined" placeholder="Status" :items="statusItems" item-title="title" density="compact"
            item-value="value">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Status')" />
            </template>
          </VAutocomplete>
        </VCol>
        <VCol v-if="isFilterChecked('Account Type')" cols="12" lg="3" md="3">
          <VAutocomplete class="accouting_field accouting_active_field" variant="outlined" placeholder="Account Type" :items="accountTypeItems" item-title="title"
            density="compact" item-value="value">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Account Type')" />
            </template>
          </VAutocomplete>
        </VCol>
        <VCol v-if="isFilterChecked('Customer Type')" cols="12" lg="3" md="3">
          <VAutocomplete class="accouting_field accouting_active_field" variant="outlined" placeholder="Customer Type" :items="accountTypeItems" item-title="title"
            density="compact" item-value="value">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Customer Type')" />
            </template>
          </VAutocomplete>
        </VCol>
        <VCol v-if="isFilterChecked('Currency')" cols="12" lg="3" md="3">
          <VAutocomplete class="accouting_field accouting_active_field" variant="outlined" placeholder="Currency" :items="currencyItems" item-title="title" density="compact"
            item-value="value">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Currency')" />
            </template>
          </VAutocomplete>
        </VCol>
        <VCol v-if="isFilterChecked('Last Transaction From')" cols="12" lg="3" md="3">
          <VTextField class="accouting_field accouting_active_field" variant="outlined" placeholder="Last Transaction From" type="date" density="compact">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Last Transaction From')" />
            </template>
          </VTextField>
        </VCol>
        <VCol v-if="isFilterChecked('Last Transaction To')" cols="12" lg="3" md="3">
          <VTextField class="accouting_field accouting_active_field" variant="outlined" placeholder="Last Transaction To" type="date" density="compact">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Last Transaction To')" />
            </template>
          </VTextField>
        </VCol>
        <VCol v-if="isFilterChecked('Last Order From')" cols="12" lg="3" md="3">
          <VTextField class="accouting_field accouting_active_field" variant="outlined" placeholder="Last Order From" type="date" density="compact">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Last Order From')" />
            </template>
          </VTextField>
        </VCol>
        <VCol v-if="isFilterChecked('Last Order To')" cols="12" lg="3" md="3">
          <VTextField class="accouting_field accouting_active_field" variant="outlined" placeholder="Last Order To" type="date" density="compact">
            <template #append>
              <VBtn variant="text" icon="mdi-window-close" size="small" @click="cancelFilter('Last Order To')" />
            </template>
          </VTextField>
        </VCol>
      </VRow>
    </VSlideYTransition>

    <VCard class="mt-4 account_vcard_border">
      <VDataTable :headers="visibleHeaders" :items="paginatedItems" :items-per-page="itemsPerPage" show-select
        :density="isTableCompact ? 'compact' : 'default'" class="elevation-1 border rounded account_dynamic_table">
        <template #item.actions="{ item }">
          <div class="d-flex align-center gap-2">
            <VIcon style="cursor: pointer;" icon="mdi-eye-outline" class="account_v_btn_color" size="small" />
            <VIcon style="cursor: pointer;" icon="mdi-square-edit-outline" class="account_v_btn_color" size="small" />
            <VIcon style="cursor: pointer;" icon="mdi-trash-can-outline" color="error" size="small" />
          </div>
        </template>
        <template #item.status="{ item }">
          <VChip :class="['account_table_chip', getStatusClass(item.status)]" size="small">
            {{ item.status }}
          </VChip>
        </template>
        <template #item.customerName="{ item }">
          <div class="d-flex flex-column gap-1">
            <p class="mb-0">{{ item.customerName }}</p>
            <p class="mb-0 secondary_email">{{ item.customerEmail }}</p>
          </div>
        </template>
      </VDataTable>
    </VCard>

    <VRow>
      <VCol class="mt-3" cols="12">
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center gap-2">
            <p class="account_table_pagination_text mb-0">Page {{ page }} of {{ totalPages }}</p>
            <div class="d-flex align-center gap-1">
              <p class="mb-0 account_table_pagination_text">Rows per page:</p>
              <VSelect class="accouting_field accouting_active_field" variant="outlined" density="compact" :items="[5, 10, 15, 20, 25, 30, 50]"
                v-model="itemsPerPage" />
            </div>
          </div>
          <v-pagination class="account_pagination_bg" v-model="page" :total-visible="3" next-icon="mdi-arrow-right-drop-circle-outline"
            prev-icon="mdi-arrow-left-drop-circle-outline" :length="totalPages"></v-pagination>
        </div>
      </VCol>
    </VRow>
  </div>
</template>

<style scoped>
.combine_btn_one {
  border-radius: 6px 0px 0px 6px !important;
}

.combine_btn_two {
  border-left: unset !important;
  border-radius: 0px 6px 6px 0px !important;
}

.dynamicTable_listitem {
  padding-block: 0px !important;
  padding-inline: 0px !important;
  padding: 0px 11px 0px 4px !important;
}

.drag-icon {
  cursor: grab;
}
</style>
