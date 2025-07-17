/**
 * Global form validation rules for the accounting application
 */

// Common validation rules
export const commonValidations = {
  // Required field validation
  required: (value) => {
    if (!value || (typeof value === "string" && value.trim() === "")) {
      return "This field is required";
    }
    return true;
  },

  // Email validation
  email: (value) => {
    if (!value) return true; // Allow empty if not required
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return true;
  },

  // Phone number validation (Indian format)
  phone: (value) => {
    if (!value) return true;
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(value.replace(/\s/g, ""))) {
      return "Please enter a valid 10-digit phone number";
    }
    return true;
  },

  // PAN validation
  pan: (value) => {
    if (!value) return true;
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!panRegex.test(value.toUpperCase())) {
      return "Please enter a valid PAN number";
    }
    return true;
  },

  // GSTIN validation
  gstin: (value) => {
    if (!value) return true;
    const gstinRegex =
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!gstinRegex.test(value.toUpperCase())) {
      return "Please enter a valid GSTIN";
    }
    return true;
  },

  // Pincode validation
  pincode: (value) => {
    if (!value) return true;
    const pincodeRegex = /^[1-9][0-9]{5}$/;
    if (!pincodeRegex.test(value)) {
      return "Please enter a valid 6-digit pincode";
    }
    return true;
  },

  // Amount validation (positive number)
  amount: (value) => {
    if (!value) return true;
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) {
      return "Please enter a valid positive amount";
    }
    return true;
  },

  // Percentage validation (0-100)
  percentage: (value) => {
    if (!value) return true;
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0 || numValue > 100) {
      return "Please enter a valid percentage between 0 and 100";
    }
    return true;
  },

  // Minimum length validation
  minLength: (min) => (value) => {
    if (!value) return true;
    if (value.length < min) {
      return `Minimum ${min} characters required`;
    }
    return true;
  },

  // Maximum length validation
  maxLength: (max) => (value) => {
    if (!value) return true;
    if (value.length > max) {
      return `Maximum ${max} characters allowed`;
    }
    return true;
  },

  // Date validation
  date: (value) => {
    if (!value) return true;
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return "Please enter a valid date";
    }
    return true;
  },

  // Future date validation
  futureDate: (value) => {
    if (!value) return true;
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      return "Date cannot be in the past";
    }
    return true;
  },

  // Past date validation
  pastDate: (value) => {
    if (!value) return true;
    const date = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date > today) {
      return "Date cannot be in the future";
    }
    return true;
  },
};

// Specific validation rules for different forms
export const journalEntryValidations = {
  // Date validation for journal entries
  entryDate: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;

    const dateValid = commonValidations.date(value);
    if (dateValid !== true) return dateValid;

    return true;
  },

  // Account validation
  account: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;
    return true;
  },

  // Amount validation for journal entries
  entryAmount: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;

    const amountValid = commonValidations.amount(value);
    if (amountValid !== true) return amountValid;

    return true;
  },

  // Description validation
  description: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;

    const minLength = commonValidations.minLength(10)(value);
    if (minLength !== true) return minLength;

    const maxLength = commonValidations.maxLength(254)(value);
    if (maxLength !== true) return maxLength;

    return true;
  },

  // Voucher type validation
  voucherType: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;
    return true;
  },
};

export const ledgerValidations = {
  // Ledger name validation
  ledgerName: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;

    const minLength = commonValidations.minLength(2)(value);
    if (minLength !== true) return minLength;

    const maxLength = commonValidations.maxLength(100)(value);
    if (maxLength !== true) return maxLength;

    return true;
  },

  // Parent group validation
  parentGroup: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;
    return true;
  },
};

export const customerValidations = {
  // Customer name validation
  customerName: (value) => {
    const required = commonValidations.required(value);
    if (required !== true) return required;

    const minLength = commonValidations.minLength(2)(value);
    if (minLength !== true) return minLength;

    return true;
  },

  // Customer email validation
  customerEmail: (value) => {
    if (!value) return true; // Optional field
    return commonValidations.email(value);
  },

  // Customer phone validation
  customerPhone: (value) => {
    if (!value) return true; // Optional field
    return commonValidations.phone(value);
  },

  // Customer GSTIN validation
  customerGSTIN: (value) => {
    if (!value) return true; // Optional field
    return commonValidations.gstin(value);
  },

  // Customer PAN validation
  customerPAN: (value) => {
    if (!value) return true; // Optional field
    return commonValidations.pan(value);
  },

  // Opening balance validation
  openingBalance: (value) => {
    if (!value) return true; // Optional field
    return commonValidations.amount(value);
  },
};

// Helper function to validate multiple fields
export const validateForm = (formData, validationRules) => {
  const errors = {};

  for (const [field, value] of Object.entries(formData)) {
    if (validationRules[field]) {
      const result = validationRules[field](value);
      if (result !== true) {
        errors[field] = result;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Helper function to validate a single field
export const validateField = (value, validationRule) => {
  return validationRule(value);
};
