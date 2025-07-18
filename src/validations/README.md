# Form Validations

This folder contains global form validation rules for the accounting application.

## Available Validations

### Common Validations (`commonValidations`)

Basic validation rules that can be used across all forms:

- `required(value)` - Checks if field is required
- `email(value)` - Validates email format
- `phone(value)` - Validates Indian phone number format
- `pan(value)` - Validates PAN number format
- `gstin(value)` - Validates GSTIN format
- `pincode(value)` - Validates 6-digit pincode
- `amount(value)` - Validates positive number
- `percentage(value)` - Validates percentage (0-100)
- `minLength(min)(value)` - Validates minimum length
- `maxLength(max)(value)` - Validates maximum length
- `date(value)` - Validates date format
- `futureDate(value)` - Validates future date
- `pastDate(value)` - Validates past date

### Journal Entry Validations (`journalEntryValidations`)

Specific validations for journal entry forms:

- `entryDate(value)` - Validates entry date
- `account(value)` - Validates account selection
- `entryAmount(value)` - Validates amount
- `description(value)` - Validates description (10-254 chars)
- `voucherType(value)` - Validates voucher type selection

### Ledger Validations (`ledgerValidations`)

Specific validations for ledger forms:

- `ledgerName(value)` - Validates ledger name (2-100 chars)
- `parentGroup(value)` - Validates parent group selection

### Customer Validations (`customerValidations`)

Specific validations for customer forms:

- `customerName(value)` - Validates customer name
- `customerEmail(value)` - Validates email (optional)
- `customerPhone(value)` - Validates phone (optional)
- `customerGSTIN(value)` - Validates GSTIN (optional)
- `customerPAN(value)` - Validates PAN (optional)
- `openingBalance(value)` - Validates opening balance (optional)

## Usage Examples

### Importing Validations

```javascript
import {
  commonValidations,
  journalEntryValidations,
  validateForm,
  validateField,
} from "@/validations";
```

### Single Field Validation

```javascript
const emailError = validateField("test@example.com", commonValidations.email);
if (emailError !== true) {
  console.log(emailError); // Error message
}
```

### Form Validation

```javascript
const formData = {
  entryDate: "2025-01-15",
  account: "Cash",
  amount: "1000",
  description: "Test entry",
};

const validationRules = {
  entryDate: journalEntryValidations.entryDate,
  account: journalEntryValidations.account,
  amount: journalEntryValidations.entryAmount,
  description: journalEntryValidations.description,
};

const result = validateForm(formData, validationRules);
if (!result.isValid) {
  console.log(result.errors); // Object with field errors
}
```

### Vuetify Integration

```javascript
// In your Vue component
const rules = {
  email: (value) => validateField(value, commonValidations.email),
  phone: (value) => validateField(value, commonValidations.phone),
  amount: (value) => validateField(value, journalEntryValidations.entryAmount)
};

// In template
<VTextField
  v-model="form.email"
  :rules="[rules.email]"
  label="Email"
/>
```

## Adding New Validations

1. Add new validation rules to `formValidations.js`
2. Export them from the file
3. Add exports to `index.js`
4. Update this README with documentation

Example:

```javascript
// In formValidations.js
export const newFormValidations = {
  customField: (value) => {
    // Your validation logic
    return true; // or error message
  },
};

// In index.js
export { newFormValidations } from "./formValidations.js";
```

## Examples

See `example.js` for comprehensive usage examples including:

- Single field validation
- Form validation
- Vue component integration
- Customer form validation
- Ledger form validation
