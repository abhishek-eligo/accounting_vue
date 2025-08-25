// API Configuration
export const API_CONFIG = {
  // Base URL for your Laravel API
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',

  // Timeout for requests (in milliseconds)
  TIMEOUT: 10000,

  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  // Endpoints (customize these based on your Laravel API)
  ENDPOINTS: {
    // Test connection endpoint
    TEST_CONNECTION: '/test-connection',

    // Example endpoints - replace with your actual Laravel API endpoints
    USERS: '/users',
    CUSTOMERS: '/customers',
    VENDORS: '/vendors',
    INVOICES: '/invoices',
    PURCHASE_BILLS: '/purchase-bills',
    PRODUCTS: '/products',
    LEDGER_MAIN_CATEGORY: '/ledgers_main_category',
    LEDGER_GROUPS: '/ledgers_groups',
    LEDGER_SUB_GROUPS: '/ledgers_sub_groups',
    LEDGERS: '/ledgers',
    LEDGER_HIERARCHY: '/ledger-hierarchy',
    LEDGER_GROUPS_CATEGORY: '/ledger_groups_category',
    LEDGER_SUB_GROUPS_BY_LEDGER_GROUP: (ledgerGroupId) =>
      `/ledgers_sub_groups/by_group/${ledgerGroupId}`,
    REPORTS: {
      BALANCE_SHEET: '/reports/balance-sheet',
      PROFIT_LOSS: '/reports/profit-loss',
      GST_SUMMARY: '/reports/gst-summary'
    }
  }
};

// Helper function to build full URL
export const buildApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

