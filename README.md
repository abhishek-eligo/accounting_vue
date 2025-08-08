# Accounting Vue Plugin

A comprehensive Vue.js accounting plugin with Vuetify components for financial management applications.

## Installation

```bash
npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy
```

## Features

### 🚀 Automatic Page Generation
When you install this plugin in your host app, it automatically creates an `accounting` folder at `resources/js/pages/admin/accounting/` containing all the page components. This allows you to:

- **Customize components** according to your app's requirements
- **Use v-model** and other Vue.js features
- **Modify styling** and functionality
- **Add custom logic** to each component

### 📁 Generated Structure
After installation, you'll find this structure in your host app:
```
resources/js/pages/admin/accounting/
├── allentries/
│   └── index.vue
├── balancesheet/
│   └── index.vue
├── customers/
│   └── index.vue
├── dashboard/
│   └── index.vue
├── groups&ledgers/
│   └── index.vue
├── gstreports/
│   └── index.vue
├── gstsummary/
│   └── index.vue
├── invoicepreview/
│   ├── fc/
│   │   └── index.vue
│   └── index.vue
├── invoicereturn/
│   └── index.vue
├── ledgers/
│   └── index.vue
├── profit&loss/
│   └── index.vue
├── purchasebills/
│   └── index.vue
├── role&permission/
│   └── index.vue
├── salesinvoice/
│   └── index.vue
├── settings/
│   └── index.vue
├── table/
│   └── index.vue
├── ui/
│   └── index.vue
└── vendors/
    └── index.vue
```

## Usage

### 1. Install the Plugin
```bash
npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy
```

### 2. Register in Your App
In your host app's `main.js`:
```javascript
import AccountingModule from '@abhishek_eligo/accounting_ecs';
import '@abhishek_eligo/accounting_ecs/dist/accounting_ecs.css';

app.use(AccountingModule);
```

### 3. Use Components
You can now use the components in two ways:

#### Option A: Use as Plugin Components (Static)
```vue
<template>
  <div>
    <AccountAllEntries />
  </div>
</template>
```

#### Option B: Use Generated Pages (Dynamic/Customizable)
Navigate to `resources/js/pages/admin/accounting/` and modify the generated `.vue` files according to your needs:

```vue
<template>
  <div>
    <!-- You can now customize this component -->
    <AccountAllEntries 
      v-model="customData"
      :custom-prop="value"
      @custom-event="handleEvent"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customData: {},
      value: ''
    }
  },
  methods: {
    handleEvent(data) {
      // Custom event handling
    }
  }
}
</script>
```

## Customization

### Modifying Components
1. Navigate to `resources/js/pages/admin/accounting/`
2. Open any `.vue` file you want to customize
3. Add your custom logic, props, events, or styling
4. The changes will be reflected in your app

### Example Customization
```vue
<template>
  <div class="custom-accounting-page">
    <AccountAllEntries 
      v-model="entriesData"
      :show-export="true"
      :custom-filters="filters"
      @entry-selected="handleEntrySelection"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      entriesData: [],
      filters: {
        dateRange: null,
        category: 'all'
      }
    }
  },
  methods: {
    handleEntrySelection(entry) {
      console.log('Selected entry:', entry);
      // Your custom logic here
    }
  }
}
</script>

<style scoped>
.custom-accounting-page {
  padding: 20px;
  background: #f5f5f5;
}
</style>
```

## Available Components

- `AccountAllEntries` - All accounting entries view
- `AccountBalanceSheet` - Balance sheet component
- `AccountCustomerList` - Customer management
- `AccountCustomerPortfolio` - Customer portfolio view
- `AccountGSTReports` - GST reporting
- `AccountGroupAndLedger` - Group and ledger management
- `AccountInvoiceReturn` - Invoice return handling
- `AccountProfitAndLoss` - Profit and loss statement
- `AccountPurchaseBill` - Purchase bill management
- `AccountSalesInvoice` - Sales invoice management
- `AccountSettings` - Application settings
- `AccountUserRolePermission` - User role and permissions
- `AccountVendorsList` - Vendor management
- `InvoicePreview` - Invoice preview component
- `ProductsPage` - Product management

## Dependencies

- Vue 3.x
- Vuetify 3.x
- Vue Router 4.x

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview

# Test postinstall script
npm run test:postinstall
```

## Documentation

For detailed information about the automatic page generation feature, see:
- [Automatic Page Generation Guide](docs/AUTOMATIC_PAGE_GENERATION.md)

## License

This project is licensed under the MIT License.
