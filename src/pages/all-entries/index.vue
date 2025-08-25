<script setup>
import { ref, reactive, computed, watch } from "vue";
import { toast } from "vue3-toastify";
import axios from "axios";
import dayjs from "dayjs";
import { apiService } from "../../services/api.js";
import { API_CONFIG } from "../../config/api.js";
import DeleteDailog from "../../components/DeleteDailog.vue";
import RevertDialog from "../../components/RevertDialog.vue"


// Function to handle amount input and show words
function handleAmountInput(event, rowIndex, type) {
  const amount = event.target.value;
  const numValue = parseFloat(amount) || 0;
  const words = numberToWords(numValue);

  // Update the row with both numeric value and words
  if (type === "debit") {
    debitRows.value[rowIndex].amount = numValue;
    debitRows.value[rowIndex].amountInWords = words;
  } else {
    creditRows.value[rowIndex].amount = numValue;
    creditRows.value[rowIndex].amountInWords = words;
  }
}

const ledgerFormRef = ref();

const ledgerForm = reactive({
  name: "",
  ledgerGroup: null,
  ledgerSubgroup: null,
});
const isLoadingLedgerGroups = ref(false);

const showLedgerDialog = ref(false);

const journalEntryFormRef = ref(null)

const ledgerGroupOptions = ref([]);

const ledgerSubGroupOptions = ref([]);

const isEdit = ref(false)
const editId = ref(null)

// Journal entry form data
const journalEntryForm = ref({
  entryDate: new Date(),
  narration: "",
  voucherType: "",
  voucherNumber: "",
});

const debitRows = ref([
  { account: null, amount: null, amountInWords: "" }
]);
const creditRows = ref([
  { account: null, amount: null, amountInWords: "" }
]);

const narrationError = ref(null);



const validateForm = () => {
  narrationError.value = null

  if (!journalEntryForm.value.entryDate) return "Please select an entry date"
  if (!journalEntryForm.value.narration) {
    narrationError.value = "Narration is required"
    return "Please enter narration"
  }
  if (!journalEntryForm.value.voucherType) return "Please select voucher type"
  if (!debitRows.value.length || debitRows.value.some(d => !d.account || !d.amount)) {
    return "Please add valid debit entries"
  }
  if (!creditRows.value.length || creditRows.value.some(c => !c.account || !c.amount)) {
    return "Please add valid credit entries"
  }

  const totalDebit = debitRows.value.reduce((sum, d) => sum + Number(d.amount || 0), 0)
  const totalCredit = creditRows.value.reduce((sum, c) => sum + Number(c.amount || 0), 0)

  if (totalDebit !== totalCredit) return "Debit and Credit amounts must be equal"

  return null
}



const submitJournalEntryForm = async () => {
  const error = validateForm()
  if (error) {
    toast.error(error)
    return
  }

  try {
    const payload = {
      ...journalEntryForm.value,
      debitRows: debitRows.value,
      creditRows: creditRows.value,
      createdBy: "83fd1e60-a10c-4c2a-9826-58ec72559578",
      updatedBy: "83fd1e60-a10c-4c2a-9826-58ec72559578"
    }

    let response
    if (isEdit.value) {
      response = await axios.put(`account-history/${editId.value}`, payload, {
        headers: {
          Authorization: `Bearer 1|Fjdga5HXzWPbqjESI5ti2wlod1xO1kkQZb1ZdDwM99b012c4`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
    } else {
      response = await axios.post("account-history", payload, {
        headers: {
          Authorization: `Bearer 1|Fjdga5HXzWPbqjESI5ti2wlod1xO1kkQZb1ZdDwM99b012c4`,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      })
    }

    if (response.status === 200 || response.status === 201) {
      toast.success(isEdit.value ? "Journal Entry updated!" : "Journal Entry saved!")
      resetForm()
      showJournalEntryCard.value = false
      fetchData()
    }
  } catch (err) {
    console.error(err)
    toast.error("Failed to submit journal entry")
  }
}


const resetForm = () => {
  journalEntryForm.value = { entryDate: null, narration: "", voucherType: null, voucherNumber: null }
  debitRows.value = [{ account: null, amount: null, amountInWords: "" }]
  creditRows.value = [{ account: null, amount: null, amountInWords: "" }]
  isEdit.value = false
  editId.value = null
}


const openEditForm = (entry) => {
  showJournalEntryCard.value = true
  isEdit.value = true
  editId.value = entry.id
  console.log("Editing entry:", entry)

  // Map backend snake_case → frontend camelCase
  journalEntryForm.value = {
    entryDate: entry.entry_date,
    narration: entry.narration,
    voucherType: entry.voucher_type,
    voucherNumber: entry.voucher_number,
  }

  // particulars = lines (you had debitRows/creditRows separately in create form)
  debitRows.value = entry.particulars.accounts
    ?.filter(line => line.debit != '') // 1 = Debit
    .map(line => ({
      account: line.title,
      amount: line.debit,
    })) || []

  creditRows.value = entry.particulars.accounts
    ?.filter(line => line.credit != '') // 2 = Credit
    .map(line => ({
      account: line.title,
      amount: line.credit,
    })) || []
}


const showJournalEntryCard = ref(false);
const showDetailsDialog = ref(false);
const selectedEntry = ref(null);


const menu = ref(false)
const selectedDate = ref(null)
const showDateFilter = ref(false)


function format(date) {
  return date ? dayjs(date).format("DD-MM-YYYY") : ""
}



const isTableCompact = ref(false);



const voucherTypes = ref([
  { title: "Sales Voucher", value: "1" },
  { title: "Purchase Voucher", value: "2" },
  { title: "Journal Voucher", value: "3" },
  { title: "Payment Voucher", value: "4" },
  { title: "Reciept Voucher", value: "5" },
  { title: "Reverse Entry Voucher", value: "6" }
]);

const voucherNo = ref([
  { title: "VOC-0001", value: "9cf23710-8cf3-4c87-93e8-fe03f45e7e7d" },
  { title: "VOC-0002", value: "6821f93a-1b39-4d76-a68c-a7a0f1ad92b1" },
  { title: "VOC-0003", value: "983c90fd-1a62-4ceb-8bc1-fd34b82e227a" },
  { title: "VOC-0004", value: "3992f6a2-224c-433b-9ff0-90790c56ad7b" },
  { title: "VOC-0005", value: "07b848e3-3dcd-4ec6-8c39-c29145d8300c" },
]);

const allEntries = ref([])

const searchQuery = ref("")

const loading = ref(true)

const filteredEntries = computed(() => {
  let data = allEntries.value

  // 🔎 First apply text search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()

    data = data.filter(entry => {
      const voucherType = (getVoucherTypeTitle(entry.voucher_type) || "").toLowerCase()
      const voucherNumber = (getVoucherNumberTitle(entry.voucher_number) || "").toLowerCase()

      const accountNames = (entry.particulars?.accounts || [])
        .map(acc => (getLedgerTitle(acc.title) || "").toLowerCase())
        .join(" ")

      return (
        voucherType.includes(query) ||
        voucherNumber.includes(query) ||
        accountNames.includes(query)
      )
    })
  }

  if (showDateFilter.value && selectedDate.value) {
    if (Array.isArray(selectedDate.value)) {
      if (selectedDate.value.length === 2) {
        // Range mode
        const [start, end] = selectedDate.value
        const startDate = dayjs(start).startOf("day")
        const endDate = dayjs(end).endOf("day")

        data = data.filter(entry => {
          const entryDate = dayjs(entry.entry_date)
          return entryDate.isBetween(startDate, endDate, "day", "[]")
        })
      } else {
        // Multiple discrete dates
        const pickedDates = selectedDate.value.map(d => dayjs(d).format("DD-MM-YYYY"))

        data = data.filter(entry =>
          pickedDates.includes(dayjs(entry.entry_date).format("DD-MM-YYYY"))
        )
      }
    } else {
      // Single date
      const picked = dayjs(selectedDate.value).format("DD-MM-YYYY")
      data = data.filter(entry =>
        dayjs(entry.entry_date).format("DD-MM-YYYY") === picked
      )
    }
  }


  return data
})




const getVoucherNumberTitle = (value) => {
  const found = voucherNo.value.find(v => v.value === value)
  return found ? found.title : value
}

const getVoucherTypeTitle = (value) => {
  const found = voucherTypes.value.find(v => v.value == value) // int compare
  return found ? found.title : value
}

const getLedgerTitle = (value) => {
  const found = allLedgers.value.find(l => l.value === value)
  return found ? found.title : value
}

// const getLedgerTitle = (id) => {
//   const found = allLedgers.value.find(l => l.value === id)
//   return found ? found.title : id
// }






// Import ledger validations

const nameRules = [(v) => validateField(v, ledgerValidations.ledgerName)];
const parentGroupRules = [
  (v) => validateField(v, ledgerValidations.parentGroup),
];



const addDebitRow = () => {
  debitRows.value.push({ account: null, amount: 0, amountInWords: "" });
};

const removeDebitRow = (index) => {
  if (debitRows.value.length > 1) {
    debitRows.value.splice(index, 1);
  }
};

const addCreditRow = () => {
  creditRows.value.push({ account: null, amount: 0, amountInWords: "" });
};

const removeCreditRow = (index) => {
  if (creditRows.value.length > 1) {
    creditRows.value.splice(index, 1);
  }
};

// Open details dialog for the selected entry
function openDetailsDialog(entry) {
  selectedEntry.value = entry;
  showDetailsDialog.value = true;
}

function totalAmount(accounts, type) {
  if (!accounts || !Array.isArray(accounts)) return "₹0.00";

  const sum = accounts.reduce((acc, item) => {
    const value = item[type]?.replace(/[^0-9.-]+/g, "") || "0";
    return acc + parseFloat(value);
  }, 0);

  return `₹${sum.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
}

// function getToAccounts(entry) {
//   if (!entry?.particulars?.description?.to) return [];
//   return entry.particulars.description.to.split(",").map((a) => a.trim());
// }

const hoveredRowIndex = ref(null);
const bounceKey = ref(0);

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axios.get("account-history", {
      headers: {
        Authorization: `Bearer 1|Fjdga5HXzWPbqjESI5ti2wlod1xO1kkQZb1ZdDwM99b012c4`,
        Accept: "application/json",
      },
      params: {
        show: "withTrashed", // 👈 options: "active", "withTrashed", "onlyTrashed"
        per_page: 15,
      },
    })


    console.log("API Response:", response.data.data)



    allEntries.value = response.data.data.map(entry => {
      return {
        id: entry.id,
        entry_date: entry.entry_date,
        voucher_number: entry.voucher_number,
        voucher_type: entry.voucher_type,
        narration: entry.narration,
        status: "Pending", // you can adjust based on backend if status exists
        deleted_at: entry.deleted_at,
        particulars: {
          description: { narration: entry.narration },
          accounts: entry.acc_account_history_entry_line.map(line => ({
            title: line.ledger_account_id, // later you can replace with ledger name lookup
            debit: line.entry_type === 1 ? line.amount : "",
            credit: line.entry_type === 2 ? line.amount : "",
          })),
        },
      };
    });
  } catch (err) {
    console.error("Error fetching account history:", err);
    toast.error("Error fetching account history");
  } finally {
    loading.value = false;
  }
};

const showDeleteDialog = ref(false)
const selectedEntryId = ref(null)
const deleteMode = ref("soft");


const openDeleteDialog = (id, mode) => {
  selectedEntryId.value = id
  deleteMode.value = mode
  showDeleteDialog.value = true
}

const refreshTable = async () => {
  await fetchData();
  console.log("Entry deleted, refresh table...");
}

const restoreEntry = async (id) => {
  await axios.post(`/account-history/${id}/restore`, {}, {

    headers: {
      Authorization: `Bearer 1|Fjdga5HXzWPbqjESI5ti2wlod1xO1kkQZb1ZdDwM99b012c4`,
    },
  }
  );
  toast.success("Entry Restored successfully.");
  fetchData(); // refresh table
};

const showRevertDialog = ref(false)


const openRevert = (id) => {
  selectedEntryId.value = id
  showRevertDialog.value = true
}

const fetchEntries = async () => {
  await fetchData();
  console.log("Entry reverted");
}

const allLedgers = ref([])

const fetchledger = async () => {
  try {
    const response = await axios.get('ledgers', {
      headers: {
        Authorization: `Bearer 1|Fjdga5HXzWPbqjESI5ti2wlod1xO1kkQZb1ZdDwM99b012c4`,
        Accept: "application/json",
      },
    })

    console.log('Api Ledger Response', response.data);
    allLedgers.value = response.data.data.map(l => ({
      title: l.name,            // what user sees
      value: l.id,              // what gets saved in v-model
      groupId: l.ledger_group_id,
      subGroupId: l.ledger_sub_group_id,
    }))
  } catch (error) {
    console.error("Error fetching ledger:", error)
  }
}

async function submitLedgerForm() {
  const { valid } = await ledgerFormRef.value?.validate();
  if (!valid) {
    toast.error("Please fill all required fields for Ledger.");
    return;
  }

  try {
    // Call your backend API to create the new group
    const response = await apiService.post(
      API_CONFIG.ENDPOINTS.LEDGERS,
      {
        name: ledgerForm.name,
        ledger_group_id: ledgerForm.ledgerGroup, // send main ledger group id
        ledger_sub_group_id: ledgerForm.ledgerSubgroup, // send main ledger subgroup id
      }
    );
    if (response.status === 201) {
      // fetchLedgerHierarchy();
      fetchledger();
      toast.success("Ledger created successfully.");
    }
    console.log(response);
  } catch (error) {
    console.error(error);
    toast.error("Failed to create ledger.");
  }

  // Reset
  showLedgerDialog.value = false;
  ledgerForm.name = "";
  ledgerForm.ledgerGroup = null;
  ledgerForm.ledgerSubgroup = null;
  ledgerFormRef.value?.resetValidation();
}

// const mainCategoryOptions = ref([]);
// const isLoadingMainCategories = ref(false);

// function mapMainCategoriesToOptions(data) {
//   if (!Array.isArray(data)) return [];
//   return data.map(item => ({
//     title: item?.name,
//     value: item?.id
//   }));
// }

// async function loadMainCategories() {
//   try {
//     isLoadingMainCategories.value = true;
//     const response = await apiService.get(API_CONFIG.ENDPOINTS.LEDGER_MAIN_CATEGORY);
//     const mainCategories = response?.data ?? response;
//     console.log('Api response for categories', mainCategories);
//     mainCategoryOptions.value = mapMainCategoriesToOptions(mainCategories);
//   } catch (error) {
//     console.error('Failed to fetch ledgers main categories:', error);
//     toast.error('Failed to load ledgers main categories');
//   } finally {
//     isLoadingMainCategories.value = false;
//   }
// }

async function loadLedgerGroups() {
  try {
    isLoadingLedgerGroups.value = true;
    const response = await apiService.get(API_CONFIG.ENDPOINTS.LEDGER_GROUPS_CATEGORY);
    const ledgerGroups = response?.data;
    console.log('LEDGER WITH CATEGORY', response);
    ledgerGroupOptions.value = mapLedgerGroupsToOptions(ledgerGroups);
  } catch (error) {
    console.error('Failed to fetch ledgers groups:', error);
    toast.error('Failed to load ledgers groups');
  } finally {
    isLoadingLedgerGroups.value = false;
  }
}

function mapLedgerSubGroupsToOptions(data) {
  if (!Array.isArray(data)) return [];
  return data.map(item => ({
    title: item?.name,
    value: item?.id
  }));
}


function mapLedgerGroupsToOptions(data) {
  if (!Array.isArray(data)) return [];
  return data.map(item => ({
    title: item?.name,
    value: item?.id,
    categoryTitle: item?.main_category?.name
  }));
}

watch(
  () => ledgerForm.ledgerGroup, // getter
  async (newGroupId, oldGroupId) => {
    console.log("Parent group changed:", oldGroupId, "→", newGroupId);
    if (newGroupId) {
      ledgerForm.ledgerSubgroup = null;
      ledgerSubGroupOptions.value = [];
      try {
        const response = await apiService.get(
          API_CONFIG.ENDPOINTS.LEDGER_SUB_GROUPS_BY_LEDGER_GROUP(newGroupId)
        );
        const ledgerSubGroups = response?.data;
        ledgerSubGroupOptions.value = mapLedgerSubGroupsToOptions(ledgerSubGroups);
      } catch (error) {
        console.error("Failed to fetch sub-groups:", error);
        toast.error("Could not load sub-groups");
      }
    } else {
      ledgerSubGroupOptions.value = [];
    }
  }
);

onMounted(async () => {
  setInterval(() => {
    bounceKey.value++ // force key change to retrigger animation
  }, 3000)
  await fetchData();
  await loadLedgerGroups();
  await fetchledger();
});


</script>

<template>
  <div class="account">
    <!-- <template> -->
    <VExpandTransition>
      <VRow v-show="showJournalEntryCard" class="justify-center">
        <VCol cols="8">
          <VCard :title="isEdit ? 'Edit Journal Entry' : 'New Journal Entry'"
            class="account_vcard_border account_ui_vcard pa-2 shadow-none mb-6">
            <template #append>
              <VBtn @click="showLedgerDialog = true" class="account_v_btn_outlined save_btn_height" variant="outlined"
                size="default" rounded="2" color="primary">
                <template #prepend>
                  <span style="display: flex; align-items: center;">
                    <IconPlus size="22" />
                  </span>
                </template>
                Add Ledger
              </VBtn>
            </template>

            <VCardText class="mt-4">
              <VForm ref="journalEntryFormRef" @submit.prevent="submitJournalEntryForm">
                <!-- Date -->
                <VRow>
                  <VCol cols="6">
                    <div class="d-flex align-center gap-3">
                      <div class="account_entry_form_label">
                        <label class="account_label">Date *</label>
                      </div>
                      <v-date-input v-model="journalEntryForm.entryDate" class="accounting_date_input"
                        cancel-text="Close" ok-text="Apply">
                        <template #prepend-inner>
                          <IconCalendar size="20" />
                        </template>
                      </v-date-input>
                    </div>
                  </VCol>
                </VRow>

                <!-- Debit Rows -->
                <VRow v-for="(debit, index) in debitRows" :key="index" class="mb-1">
                  <VCol cols="12" lg="8" md="8">
                    <div class="d-flex align-center gap-3">
                      <div class="account_entry_form_label">
                        <label v-if="index === 0" class="account_label">Debit*</label>
                      </div>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select Account" density="compact" :items="allLedgers" item-title="title"
                        item-value="value" v-model="debit.account" />
                    </div>
                  </VCol>

                  <VCol cols="12" lg="4" md="4">
                    <VTextField type="number" class="accouting_field accouting_active_field" placeholder="0"
                      variant="outlined" density="compact" v-model="debit.amount"
                      @input="(event) => handleAmountInput(event, index, 'debit')">
                      <template #append>
                        <VBtn class="account_v_btn_ghost account_btn_primary_text" variant="text" size="x-small"
                          rounded="3" @click="removeDebitRow(index)">
                          <IconTrash size="18" />
                        </VBtn>
                      </template>
                    </VTextField>
                    <div v-if="debit.amountInWords" class="mt-1">
                      <small class="font-italic amountInWords">
                        {{ debit.amountInWords }} rupees only
                      </small>
                    </div>
                  </VCol>
                </VRow>

                <!-- Add Debit -->
                <div class="d-flex align-center pr-9 mb-4 justify-end">
                  <VBtn class="account_v_btn_ghost account_btn_primary_text" variant="text" size="small"
                    @click="addDebitRow">
                    <template #prepend>
                      <IconPlus size="18" />
                    </template>
                    Add Debit Amount
                  </VBtn>
                </div>

                <!-- Credit Rows -->
                <VRow v-for="(credit, index) in creditRows" :key="index" class="mb-1">
                  <VCol cols="12" lg="8" md="8">
                    <div class="d-flex align-center gap-3">
                      <div class="account_entry_form_label">
                        <label v-if="index === 0" class="account_label">Credit *</label>
                      </div>
                      <VAutocomplete class="accouting_field accouting_active_field" variant="outlined"
                        placeholder="Select Account" density="compact" :items="allLedgers" item-title="title"
                        item-value="value" v-model="credit.account" />
                    </div>
                  </VCol>

                  <VCol cols="12" lg="4" md="4">
                    <VTextField type="number" class="accouting_field accouting_active_field" placeholder="0"
                      variant="outlined" density="compact" v-model="credit.amount"
                      @input="(event) => handleAmountInput(event, index, 'credit')">
                      <template #append>
                        <VBtn @click="removeCreditRow(index)" class="account_v_btn_ghost account_btn_primary_text"
                          variant="text" size="x-small" rounded="1">
                          <IconTrash size="18" />
                        </VBtn>
                      </template>
                    </VTextField>
                    <div v-if="credit.amountInWords" class="mt-1">
                      <small class="font-italic amountInWords">
                        {{ credit.amountInWords }} rupees only
                      </small>
                    </div>
                  </VCol>
                </VRow>

                <!-- Add Credit -->
                <div class="d-flex align-center pr-9 mb-4 justify-end">
                  <VBtn @click="addCreditRow" class="account_v_btn_ghost account_btn_primary_text" variant="text"
                    size="small">
                    <template #prepend>
                      <IconPlus size="18" />
                    </template>
                    Add Credit Amount
                  </VBtn>
                </div>

                <!-- Narration & Voucher -->
                <VRow>
                  <VCol cols="12" lg="7" md="7">
                    <div class="d-flex align-start gap-3">
                      <div class="account_entry_form_label">
                        <label class="account_label mt-3">Narration *</label>
                      </div>
                      <VTextarea v-model="journalEntryForm.narration" class="accounting_v_textarea"
                        placeholder="e.g. Inventory purchased on credit" variant="outlined" />
                      <small class="text-error" v-if="narrationError">
                        {{ narrationError }}
                      </small>
                    </div>
                  </VCol>
                  <VCol cols="12" lg="5" md="5">
                    <label class="account_label">Voucher Type *</label>
                    <VAutocomplete v-model="journalEntryForm.voucherType" class="accouting_field accouting_active_field"
                      variant="outlined" density="compact" :items="voucherTypes" item-title="title" item-value="value"
                      placeholder="Select Voucher Type" />

                    <label class="account_label mt-3">Voucher Number</label>
                    <VAutocomplete v-model="journalEntryForm.voucherNumber"
                      class="accouting_field accouting_active_field" variant="outlined" density="compact"
                      :items="voucherNo" item-title="title" item-value="value" placeholder="Select Voucher Number" />
                  </VCol>
                </VRow>

                <!-- Auto Approve -->
                <VRow>
                  <VCol cols="12">
                    <VCard class="account_vcard_border mt-2 account_module_card shadow-none" title="Auto-Approve Entry"
                      subtitle="This entry will be approved automatically and will immediately affect your books.">
                      <template #append>
                        <VSwitch density="compact" inset class="account_swtich_btn" color="primary" hide-details />
                      </template>
                    </VCard>
                  </VCol>
                </VRow>

                <!-- Actions -->
                <VRow>
                  <VCol cols="12">
                    <div class="d-flex align-center justify-end gap-2">
                      <VBtn @click="showJournalEntryCard = false" class="account_v_btn_outlined" variant="outlined"
                        rounded="2" size="default">
                        Cancel
                      </VBtn>
                      <VBtn class="account_v_btn_primary save_btn_height" variant="outlined" size="default" rounded="2"
                        color="primary" type="submit">
                        <template #prepend>
                          <IconDeviceFloppy size="18" />
                        </template>
                        {{ isEdit ? "Update Voucher" : "Save Voucher" }}
                      </VBtn>
                    </div>
                  </VCol>
                </VRow>
              </VForm>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </VExpandTransition>
    <!-- </template> -->

    <VCard title="All Entries" subtitle="A record of all financial transactions, with all amounts expressed in Rupees."
      class="account_vcard_border pa-2 account_ui_vcard shadow-none">
      <div class="d-flex align-center px-3 justify-space-between">
        <VTextField v-model="searchQuery" style="max-width: 450px" class="accouting_field accouting_active_field"
          placeholder="Filter by voucher type, number, or account" variant="outlined">
          <template #prepend-inner>
            <IconSearch size="20" />
          </template>
        </VTextField>


        <VMenu v-if="showDateFilter" v-model="menu" :close-on-content-click="false" transition="scale-transition"
          offset-y max-width="290" min-width="auto">
          <template #activator="{ props }">
            <v-date-input v-model="selectedDate" @update:model-value="menu = false" multiple="range"
              :display-format="format" v-bind="props" class="accouting_field accouting_active_field"
              placeholder="Pick Entry Date" variant="outlined" cancel-text="Close" ok-text="Apply"
              style="max-width: 300px" />
          </template>
        </VMenu>


        <div class="d-flex align-center gap-2">
          <VSwitch density="compact" inset class="account_swtich_btn mr-3" color="primary" hide-details label="Compact"
            v-model="isTableCompact" />
          <VMenu width="200px" location="start" :close-on-content-click="false">
            <template #activator="{ props }">
              <v-tooltip text="Filters" location="top">
                <template #activator="{ props: tooltipProps }">
                  <VBtn v-bind="{ ...props, ...tooltipProps }" variant="text" class="account_filter_btn_color"
                    icon="mdi-filter-cog-outline" rounded size="36" />
                </template>
              </v-tooltip>
            </template>
            <VCard class="account_vcard_menu account_vcard_border">
              <div class="account_vcard_menu_hdng px-4">Add Filters</div>
              <VDivider class="my-1 mt-0" />
              <div class="account_table_filter_menu py-1">
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <VCheckbox v-model="showDateFilter" class="account_v_checkbox account_filter_menu_checkbox"
                      density="compact" />
                    <span>Date</span>
                  </div>
                </div>
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <VCheckbox class="account_v_checkbox account_filter_menu_checkbox" density="compact" />
                    <span>Created By</span>
                  </div>
                </div>
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <VCheckbox class="account_v_checkbox account_filter_menu_checkbox" density="compact" />
                    <span>Account</span>
                  </div>
                </div>
              </div>
            </VCard>
          </VMenu>


          <VMenu width="110px" location="bottom" :close-on-content-click="false">
            <template v-slot:activator="{ props }">
              <VBtn v-bind="props" class="account_filter_btn_color" variant="text" rounded="1" size="36">
                <IconDownload size="24" />
              </VBtn>
            </template>
            <VCard class="account_vcard_border">
              <div class="account_table_filter_menu py-1">
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <span>PDF</span>
                  </div>
                </div>
                <div class="account_vcard_menu_item">
                  <div class="my-1 field_list_title cursor-pointer px-3 py-1 d-flex align-center gap-2">
                    <span>CSV</span>
                  </div>
                </div>
              </div>
            </VCard>
          </VMenu>
        </div>
      </div>

      <VCardText class="mt-2 pa-3">
        <VCard variant="flat" class="shadow-none">
          <div class="gst_summary_table_container">

            <!-- Loader overlay -->
            <div v-if="loading" class="loader-overlay d-flex align-center justify-center">
              <v-progress-circular indeterminate size="48" color="primary" />
            </div>

            <table class="table table-bordered account_entries_table text-center w-100"
              :class="{ 'compact-table': isTableCompact }">


              <thead>
                <tr>
                  <th class="account_entries_table_header_date">Date</th>
                  <th class="account_entries_table_header_entry">Entry #</th>
                  <th class="account_entries_table_header_voucher">
                    Voucher Type
                  </th>
                  <th class="account_entries_table_header_particulars">
                    Particulars
                  </th>
                  <th class="account_entries_table_header_debit">Debit</th>
                  <th class="account_entries_table_header_credit">Credit</th>
                  <th class="account_entries_table_header_status">Status</th>
                  <th class="account_entries_table_header_actions">Actions</th>
                </tr>
              </thead>

              <tbody>
                <template v-for="(entry, index) in filteredEntries" :key="index">
                  <!-- {{ filteredEntries }} -->
                  <template v-if="entry">
                    <tr :class="[
                      'account_entries_table_row',
                      { 'even-entry': index % 2 === 0 },
                    ]" @mouseover="hoveredRowIndex = index" @mouseleave="hoveredRowIndex = null">
                      <td class="account_entries_table_date" :rowspan="entry.particulars.accounts.length + 1"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ dayjs(entry.entry_date).format("DD-MM-YYYY") }}
                      </td>
                      <td class="account_entries_table_entry" :rowspan="entry.particulars.accounts.length + 1"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ getVoucherNumberTitle(entry.voucher_number) }}<br />
                        <span @click="openDetailsDialog(entry)">View Details</span>
                      </td>
                      <td class="account_entries_table_voucher" :rowspan="entry.particulars.accounts.length + 1"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ getVoucherTypeTitle(entry.voucher_type) }}
                      </td>
                      <!-- First account row -->
                      <td class="account_entries_table_particulars"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ getLedgerTitle(entry.particulars.accounts[0]?.title) || "N/A" }}
                      </td>
                      <td class="account_entries_table_debit account_primary_color">
                        ₹{{ entry.particulars.accounts[0]?.debit || "" }}
                      </td>
                      <td class="account_entries_table_credit account_error_color">
                        {{ entry.particulars.accounts[0]?.credit || "" }}
                      </td>

                      <td class="account_entries_table_status" :rowspan="entry.particulars.accounts.length + 1">
                        <VChip class="account_v_chip"
                          :class="entry.status === 'Pending' ? 'account_chip_error' : 'account_chip_primary'"
                          size="small">
                          {{ entry.status || "N/A" }}
                        </VChip>
                      </td>

                      <td class="account_entries_table_actions" :rowspan="entry.particulars.accounts.length + 1">
                        <div class="d-flex align-center justify-center gap-2">
                          <VBtn size="small" class="account_v_btn_ghost" variant="text" @click="openEditForm(entry)">
                            <IconPencil size="20" />
                          </VBtn>
                          <VBtn size="small" class="account_v_btn_ghost" variant="text" @click="openRevert(entry.id)">
                            <IconArrowBackUp size="20" />
                          </VBtn>

                          <!-- If NOT deleted → show soft delete -->
                          <VBtn v-if="entry.deleted_at == null" size="small" class="account_v_btn_ghost" variant="text"
                            color="error" @click="openDeleteDialog(entry.id, 'soft')">

                            <IconTrash size="20" />
                          </VBtn>

                          <!-- If soft deleted → show restore + permanent delete -->
                          <template v-else>
                            <VBtn size="small" class="account_v_btn_ghost" variant="text" color="success"
                              @click="restoreEntry(entry.id)">
                              <IconRestore size="20" />
                            </VBtn>

                            <VBtn size="small" class="account_v_btn_ghost" variant="text" color="error"
                              @click="openDeleteDialog(entry.id, 'force')">
                              <IconTrash size="20" />
                            </VBtn>
                          </template>
                        </div>
                      </td>
                    </tr>



                    <!-- Additional account rows (if any) -->
                    <tr v-for="(account, accIndex) in entry.particulars.accounts.slice(1)" :key="`${index}-${accIndex}`"
                      :class="['account_entries_table_row', { 'even-entry-extension': index % 2 === 0 },]"
                      @mouseover="hoveredRowIndex = index" @mouseleave="hoveredRowIndex = null">
                      <td class="account_entries_table_particulars"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ getLedgerTitle(account.title) || "N/A" }}
                      </td>
                      <td class="account_entries_table_debit account_primary_color"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        {{ account.debit || "" }}
                      </td>
                      <td class="account_entries_table_credit account_error_color"
                        :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        ₹{{ account.credit || "" }}
                      </td>
                    </tr>
                    <!-- Description and Narration row -->
                    <tr :class="['account_entries_table_row', { 'even-entry-extension': index % 2 === 0 },]">
                      <td colspan="3" :class="{ 'hovered-cell': hoveredRowIndex === index }">
                        <div class="d-flex flex-column align-start justify-center">
                          <span class="account_entry_desc_text">(Narration: {{
                            entry.particulars.description?.narration
                            || "N/A" }})</span>
                        </div>
                      </td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
          </div>
        </VCard>
      </VCardText>
    </VCard>

    <!-- Add Ledger Dialog -->
    <VDialog v-model="showLedgerDialog" max-width="400" @click:outside="ledgerFormRef?.resetValidation()">
      <VCard>
        <VCardTitle class="account_ui_swtich_title pb-0">Add New Ledger</VCardTitle>
        <VCardSubtitle class="account_ui_swtich_subtitle text-wrap px-3">Add a new ledger to an existing group in your
          chart
          of
          accounts.</VCardSubtitle>
        <VCardText>
          <VForm ref="ledgerFormRef">
            <VTextField v-model="ledgerForm.name" :rules="nameRules" class="accouting_field accouting_active_field mb-2"
              placeholder="Name" variant="outlined" hide-details="auto" />
            <VAutocomplete v-model="ledgerForm.ledgerGroup" :items="ledgerGroupOptions" :rules="parentGroupRules"
              class="accouting_field accouting_active_field" placeholder="Ledger Group" item-value="value"
              variant="outlined" hide-details="auto">
              <!-- Customize dropdown items -->
              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props">
                  <!-- <v-list-item-title>{{ item.raw.title }}</v-list-item-title> -->
                  <v-list-item-subtitle>{{ item.raw.categoryTitle }}</v-list-item-subtitle>
                </v-list-item>
              </template>

              <!-- Customize selected item display -->
              <template v-slot:selection="{ item }">
                <div>
                  {{ item.raw.title }}
                  <span class="text-grey text-caption"> ({{ item.raw.categoryTitle }})</span>
                </div>
              </template>
            </VAutocomplete>
            <VAutocomplete v-show="ledgerSubGroupOptions.length" v-model="ledgerForm.ledgerSubgroup"
              :items="ledgerSubGroupOptions.length ? ledgerSubGroupOptions : ledgerSubGroupOptions"
              class="mt-2 accouting_field accouting_active_field" placeholder="Ledger Sub-Group" item-title="title"
              item-value="value" variant="outlined" hide-details="auto" />
          </VForm>
        </VCardText>
        <VCardActions class="justify-end mr-4 mb-2">
          <VBtn text="Cancel" class="account_v_btn_outlined" variant="outlined"
            @click=" showLedgerDialog = false; ledgerFormRef?.resetValidation();" />
          <VBtn text="Add Ledger" class="account_v_btn_primary" @click="submitLedgerForm" />
        </VCardActions>
      </VCard>
    </VDialog>

    <!-- Entry Details Dialog -->
    <VDialog v-model="showDetailsDialog" max-width="600" @click:outside="showDetailsDialog = false">
      <VCard class="account_vcard_border account_details_dialog" title="Journal Voucher"
        :subtitle="selectedEntry?.entry">
        <template #append>
          <VBtn variant="text" size="x-small" rounded="" @click="showDetailsDialog = false"
            class="account_vcard_close_btn">
            <IconX size="20" />
          </VBtn>
        </template>
        <VCardText>
          <div class="d-flex align-center justify-space-between mb-2">
            <div class="d-flex align-center gap-1">
              <span class="account_label_bold">Date:</span>
              <span class="account_label_light">{{ dayjs(selectedEntry?.entry_date).format("DD-MM-YYYY") }}</span>
            </div>
            <div class="d-flex align-center gap-1">
              <span class="account_label_bold">Type:</span>
              <span class="account_label_light">{{
                getVoucherTypeTitle(selectedEntry?.voucher_type)
              }}</span>
            </div>
          </div>

          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center gap-1">
              <span class="account_label_bold">Created By:</span>
              <span class="account_label_light">Admin</span>
            </div>
            <div class="">
              <VChip class="account_chip_primary" size="small" :text="selectedEntry?.status" />
            </div>
          </div>

          <VDivider class="my-2" />

          <VCard class="account_vcard_border shadow-none account_entries_table mt-2">
            <VTable class="">
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th class="text-right">Debit</th>
                  <th class="text-right">Credit</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(acc, i) in selectedEntry?.particulars?.accounts" :key="i">
                  <tr>
                    <td :class="{ 'pl-9': i !== 0 }">{{ getLedgerTitle(acc.title) }}</td>
                    <td class="text-success text-right">
                      {{ acc.debit || "" }}
                    </td>
                    <td class="text-error text-right">
                      {{ acc.credit || "" }}
                    </td>
                  </tr>
                </template>
                <tr class="font-weight-bold">
                  <td>Total</td>
                  <td class="text-success text-right">
                    {{
                      totalAmount(selectedEntry.particulars.accounts, "debit")
                    }}
                  </td>
                  <td class="text-error text-right">
                    {{
                      totalAmount(selectedEntry.particulars.accounts, "credit")
                    }}
                  </td>
                </tr>
              </tbody>
            </VTable>
          </VCard>

          <div class="d-flex align-center gap-1 mt-3 mb-2">
            <span class="account_label_bold abc">Narration:</span>
            <span class="account_label_light font-italic">{{
              selectedEntry?.particulars?.description?.narration || "N/A"
            }}</span>
          </div>
        </VCardText>
      </VCard>
    </VDialog>
    <DeleteDailog v-model="showDeleteDialog" :entryId="selectedEntryId" :mode="deleteMode" @deleted="refreshTable" />
    <RevertDialog v-model="showRevertDialog" :entryId="selectedEntryId" @reverted="fetchEntries" />
    <VBtn @click="showJournalEntryCard = !showJournalEntryCard" :key="bounceKey" class="account_add_new_btn bounce">
      <template #prepend>
        <IconCirclePlus size="18" />
      </template>
      New Journal Entry
    </VBtn>
  </div>
</template>

<style scoped>
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-12px);
  }

  40% {
    transform: translateY(0);
  }

  60% {
    transform: translateY(-6px);
  }

  80% {
    transform: translateY(0);
  }
}

.bounce {
  animation: bounce 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
<style scoped>
/* Custom border color for the HTML table with class account_entries_table */
.account_entries_table {
  border-collapse: collapse;
  width: 100%;
}

.account_entries_table th,
.account_entries_table td {
  border: 1.5px solid var(--acc-border-color) !important;
  padding: 8px 12px;
}

.account_entries_table tr {
  border-bottom: 1.5px solid var(--acc-border-color) !important;
}

.compact-table td,
.compact-table th {
  padding: 4px 6px;
  font-size: 0.85rem;
}
</style>
