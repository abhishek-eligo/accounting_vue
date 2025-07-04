export default [
  {
    section: '',
    items: [
      {
        title: 'Dashboard',
        icon: 'mdi-view-dashboard-outline',
        slug: 'dashboard',
      },
    ],
  },
    {
    section: 'Component',
    items: [
      { title: 'Table', slug: 'table', icon: 'mdi-file-document-outline', path: '/table', component: () => import('@/pages/table') },
      { title: 'Invoice Preview', slug: 'invoice-preview', icon: 'mdi-eye-outline' },
      { title: 'Invoice Preview FC', slug: 'invoice-preview-fc', icon: 'mdi-earth' },
      { title: 'Customer Portfolio', slug: 'customer-portfolio', icon: 'mdi-account-circle-outline' },
      { title: 'UI', slug: 'user-interface', icon: 'mdi-palette-outline', path: '/ui', component: () => import('@/pages/ui') },
    ],
  },
  {
    section: 'Money In',
    items: [
      { title: 'Customers', icon: 'mdi-account-group-outline', slug: 'customers', path: '/customers', component: () => import('@/pages/customers') },
      { title: 'Sales Invoices', icon: 'mdi-receipt-outline', slug: 'sales-invoices' },
      { title: 'Invoice Returns (Sales)', icon: 'mdi-arrow-left-bottom', slug: 'invoice-returns-sales' },
    ],
  },
  {
    section: 'Money Out',
    items: [
      { title: 'Vendors', icon: 'mdi-store-outline', slug: 'vendors' },
      { title: 'Purchase Bills', icon: 'mdi-currency-usd', slug: 'purchase-bills' },
      { title: 'Invoice Returns (Purchase)', icon: 'mdi-rotate-left', slug: 'invoice-returns-purchase' },
    ],
  },
  {
    section: 'Accounts & Books',
    items: [
      { title: 'Groups & Ledgers', icon: 'mdi-book-account-outline', slug: 'groups&ledgers', path: '/groups&ledgers', component: () => import('@/pages/groups&ledgers') },
      { title: 'Journal Entries', icon: 'mdi-book-open-outline', slug: 'journal-entries' },
      // { title: 'Ledgers', icon: 'mdi-wallet-outline', slug: 'ledgers', path: '/ledgers', component: () => import('@/pages/ledgers') },
    ],
  },
  {
    section: '',
    items: [
      { title: 'Company Settings', icon: 'mdi-cog-outline', slug: 'company-settings', path: '/settings/company', component: () => import('@/pages/settings/company.vue') },
      { title: 'User Roles', icon: 'mdi-shield-account-outline', slug: 'user-roles' },
    ],
  },
]
