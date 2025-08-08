# Automatic Page Generation

This document explains how the automatic page generation feature works in the accounting_vue plugin.

## Overview

When you install the `@abhishek_eligo/accounting_ecs` package in your host application, it automatically creates an `accounting` folder at `resources/js/pages/admin/accounting/` containing all the page components. This allows you to customize the components according to your application's specific requirements.

## How It Works

### 1. Installation Process

When you run `npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy`, the following happens:

1. The package is downloaded and installed in `node_modules/@abhishek_eligo/accounting_ecs`
2. The `postinstall` script automatically runs
3. The script detects if it's running in a host app (not in package development)
4. If it's a host app, it copies the pages and components to the target location

### 2. Generated Structure

After installation, you'll find this structure in your host app:

```
resources/js/pages/admin/accounting/
├── README.md                    # Documentation for the copied files
├── pages/                       # Page components (customizable)
│   ├── allentries/
│   │   └── index.vue
│   ├── balancesheet/
│   │   └── index.vue
│   ├── customers/
│   │   └── index.vue
│   ├── dashboard/
│   │   └── index.vue
│   ├── groups&ledgers/
│   │   └── index.vue
│   ├── gstreports/
│   │   └── index.vue
│   ├── gstsummary/
│   │   └── index.vue
│   ├── invoicepreview/
│   │   ├── fc/
│   │   │   └── index.vue
│   │   └── index.vue
│   ├── invoicereturn/
│   │   └── index.vue
│   ├── ledgers/
│   │   └── index.vue
│   ├── profit&loss/
│   │   └── index.vue
│   ├── purchasebills/
│   │   └── index.vue
│   ├── role&permission/
│   │   └── index.vue
│   ├── salesinvoice/
│   │   └── index.vue
│   ├── settings/
│   │   └── index.vue
│   ├── table/
│   │   └── index.vue
│   ├── ui/
│   │   └── index.vue
│   └── vendors/
│       └── index.vue
└── components/                  # Source components (for reference)
    ├── pages/
    │   ├── AccountAllEntries.vue
    │   ├── AccountBalanceSheet.vue
    │   ├── AccountCustomerList.vue
    │   └── ... (all other components)
    └── core/
        ├── IncomeRow.vue
        └── TreeItem.vue
```

## Usage Examples

### Basic Usage (Static Components)

You can use the components directly as plugin components:

```vue
<template>
  <div>
    <AccountAllEntries />
  </div>
</template>
```

### Advanced Usage (Customizable Components)

Navigate to `resources/js/pages/admin/accounting/pages/` and modify any `.vue` file:

#### Example 1: Adding v-model and Custom Props

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
        category: 'all',
        status: 'active'
      }
    }
  },
  methods: {
    handleEntrySelection(entry) {
      console.log('Selected entry:', entry);
      // Your custom logic here
      this.$emit('entry-selected', entry);
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

#### Example 2: Customizing Customer List

```vue
<template>
  <div class="custom-customer-page">
    <AccountCustomerList 
      v-model="customers"
      :show-actions="true"
      :enable-search="true"
      :custom-columns="customColumns"
      @customer-selected="handleCustomerSelection"
      @customer-edit="handleCustomerEdit"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [],
      customColumns: [
        { key: 'name', label: 'Customer Name' },
        { key: 'email', label: 'Email Address' },
        { key: 'phone', label: 'Phone Number' },
        { key: 'balance', label: 'Account Balance' }
      ]
    }
  },
  methods: {
    handleCustomerSelection(customer) {
      // Navigate to customer details
      this.$router.push(`/customers/${customer.id}`);
    },
    handleCustomerEdit(customer) {
      // Open edit modal
      this.$emit('edit-customer', customer);
    }
  }
}
</script>
```

#### Example 3: Customizing Sales Invoice

```vue
<template>
  <div class="custom-sales-invoice">
    <AccountSalesInvoice 
      v-model="invoiceData"
      :show-preview="true"
      :enable-draft="true"
      :custom-tax-rates="taxRates"
      @invoice-created="handleInvoiceCreated"
      @invoice-saved="handleInvoiceSaved"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoiceData: {
        customer: null,
        items: [],
        tax: 0,
        total: 0
      },
      taxRates: [
        { id: 1, name: 'GST 18%', rate: 18 },
        { id: 2, name: 'GST 12%', rate: 12 },
        { id: 3, name: 'GST 5%', rate: 5 }
      ]
    }
  },
  methods: {
    handleInvoiceCreated(invoice) {
      console.log('Invoice created:', invoice);
      this.$toast.success('Invoice created successfully!');
    },
    handleInvoiceSaved(invoice) {
      console.log('Invoice saved:', invoice);
      this.$toast.info('Invoice saved as draft');
    }
  }
}
</script>
```

## Customization Options

### Available Props and Events

Each component supports various props and events. You can:

1. **Add v-model** for two-way data binding
2. **Use custom props** to configure component behavior
3. **Listen to events** for user interactions
4. **Override styling** with custom CSS
5. **Add custom logic** in methods

### Common Customization Patterns

#### 1. Data Binding
```vue
<AccountComponent v-model="localData" />
```

#### 2. Event Handling
```vue
<AccountComponent @custom-event="handleEvent" />
```

#### 3. Conditional Rendering
```vue
<AccountComponent v-if="showComponent" />
```

#### 4. Custom Styling
```vue
<AccountComponent class="custom-styles" />
```

## Troubleshooting

### Common Issues

1. **Pages not copied**: Make sure you're installing in a Laravel/Vue.js project with a `resources` directory
2. **Components not found**: Check that the plugin is properly registered in your `main.js`
3. **Styling issues**: Ensure you've imported the CSS file: `@abhishek_eligo/accounting_ecs/dist/accounting_ecs.css`

### Manual Copy

If the automatic copy doesn't work, you can manually copy the files:

```bash
# Copy pages
cp -r node_modules/@abhishek_eligo/accounting_ecs/src/pages resources/js/pages/admin/accounting/pages

# Copy components for reference
cp -r node_modules/@abhishek_eligo/accounting_ecs/src/components resources/js/pages/admin/accounting/components
```

## Development

### Testing the Postinstall Script

To test the postinstall script without actually copying files:

```bash
npm run test:postinstall
```

### Manual Postinstall

To run the postinstall script manually:

```bash
npm run postinstall
```

## Best Practices

1. **Always backup** your customizations before updating the package
2. **Use version control** for your customizations
3. **Test thoroughly** after making changes
4. **Follow Vue.js conventions** for component structure
5. **Document your customizations** for team members

## Support

If you encounter issues with the automatic page generation:

1. Check the console output during installation
2. Verify your project structure matches the expected layout
3. Ensure you have the necessary permissions to create directories
4. Check the generated README.md file in the accounting directory

For more information, visit: https://github.com/abhishek-eligo/accounting_vue 