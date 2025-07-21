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
      { title: 'Invoice Preview', slug: 'invoice-preview', icon: 'mdi-eye-outline', path: '/invoicepreview', component: () => import('@/pages/invoicepreview') },
      { title: 'Invoice Preview FC', slug: 'invoice-preview-fc', icon: 'mdi-earth' },
      { title: 'Customer Portfolio', slug: 'customer-portfolio', icon: 'mdi-account-circle-outline', path: '/customers/view/:id', component: () => import('@/pages/customers/view/[id].vue') },
      { title: 'UI', slug: 'user-interface', icon: 'mdi-palette-outline', path: '/ui', component: () => import('@/pages/ui') },
    ],
  },
  {
    section: 'Money In',
    items: [
      { title: 'Customers', icon: 'mdi-account-group-outline', slug: 'customers', path: '/customers', component: () => import('@/pages/customers') },
      { title: 'Sales Invoices', icon: 'mdi-receipt-outline', slug: 'sales-invoices', path: '/salesinvoice', component: () => import('@/pages/salesinvoice') },
      { title: 'Invoice Returns (Sales)', icon: 'mdi-arrow-left-bottom', slug: 'invoice-returns-sales', path: '/invoicereturn' , component: () => import('@/pages/invoicereturn') },
    ],
  },
  {
    section: 'Money Out',
    items: [
      { title: 'Vendors', icon: 'mdi-store-outline', slug: 'vendors', path: '/vendors', component: () => import('@/pages/vendors') },
      { title: 'Purchase Bills', icon: 'mdi-currency-usd', slug: 'purchase-bills', path: '/purchasebills', component: () => import('@/pages/purchasebills') },
      { title: 'Invoice Returns (Purchase)', icon: 'mdi-rotate-left', slug: 'invoice-returns-purchase' },
    ],
  },
  {
    section: 'Accounts & Books',
    items: [
      { title: 'Groups & Ledgers', icon: 'mdi-book-account-outline', slug: 'groups&ledgers', path: '/groups&ledgers', component: () => import('@/pages/groups&ledgers') },
      { title: 'All Entries', icon: 'mdi-book-open-outline', slug: 'all-entries', path: '/all-entries', component: () => import('@/pages/allentries') },
      // { title: 'Ledgers', icon: 'mdi-wallet-outline', slug: 'ledgers', path: '/ledgers', component: () => import('@/pages/ledgers') },
    ],
  },
  {
    section: 'Reports',
    items: [
      { title: 'Profit & Loss', icon: 'mdi-trending-up', slug: 'profit&loss', path: '/profit&loss', component: () => import('@/pages/profit&loss') },
      { title: 'Balance Sheet', icon: 'mdi-text-box-outline', slug: 'balance-sheet', path: '/balance-sheet', component: () => import('@/pages/balancesheet') },
      // { title: 'GST Summary', icon: 'mdi-percent-outline', slug: 'gstSummary', path: '/gstsummary', component: () => import('@/pages/gstsummary') },
      { title: 'GST Reports', icon: 'mdi-file-chart-outline', slug: 'gstReports', path: '/gstreports', component: () => import('@/pages/gstreports') },
      { title: 'Invoice Overviews', icon: 'mdi-book-open-blank-variant-outline', slug: 'invoice-overviews'},
    ]
  },
  {
    section: '',
    items: [
      { title: 'Company Settings', icon: 'mdi-cog-outline', slug: 'company-settings', path: '/settings', component: () => import('@/pages/settings') },
      { title: 'User Roles', icon: 'mdi-shield-account-outline', slug: 'user-roles' },
    ],
  },
]