export default [
  // {
  //   section: "",
  //   items: [
  //     {
  //       title: "Dashboard",
  //       icon: "mdi-view-dashboard-outline",
  //       slug: "dashboard",
  //     },
  //   ],
  // },
  // {
  //   section: "Component",
  //   items: [
  //     {
  //       title: "Table",
  //       slug: "table",
  //       icon: "mdi-file-document-outline",
  //       path: "/table",
  //       component: () => import("@/pages/table"),
  //     },
  //     {
  //       title: "Invoice Preview",
  //       slug: "invoice-preview",
  //       icon: "mdi-eye-outline",
  //       path: "/invoicepreview",
  //       component: () => import("@/pages/invoicepreview"),
  //     },
  //     {
  //       title: "Invoice Preview FC",
  //       slug: "invoice-preview-fc",
  //       icon: "mdi-earth",
  //       path: "/invoicepreview/fc",
  //       component: () => import("@/pages/invoicepreview/fc"),
  //     },
  //     {
  //       title: "Customer Portfolio",
  //       slug: "customer-portfolio",
  //       icon: "mdi-account-circle-outline",
  //       path: "/customers/view/:id",
  //       component: () => import("@/pages/customers/view/[id].vue"),
  //     },
  //     {
  //       title: "UI",
  //       slug: "user-interface",
  //       icon: "mdi-palette-outline",
  //       path: "/ui",
  //       component: () => import("@/pages/ui"),
  //     },
  //   ],
  // },
  {
    section: "Money In",
    items: [
      {
        title: "Customers",
        icon: "mdi-account-group-outline",
        slug: "customers",
        path: "/customers",
        component: () => import("@/pages/customers"),
      },
      {
        title: "Sales Invoices",
        icon: "mdi-receipt-outline",
        slug: "sales-invoices",
        path: "/sales-invoice",
        component: () => import("@/pages/sales-invoice"),
      },
      {
        title: "Invoice Returns (Sales)",
        icon: "mdi-arrow-left-bottom",
        slug: "invoice-returns-sales",
        path: "/invoice-return/sales",
        component: () => import("@/pages/invoice-return/sales"),
      },
    ],
  },
  {
    section: "Money Out",
    items: [
      {
        title: "Vendors",
        icon: "mdi-store-outline",
        slug: "vendors",
        path: "/vendors",
        component: () => import("@/pages/vendors"),
      },
      {
        title: "Purchase Bills",
        icon: "mdi-currency-usd",
        slug: "purchase-bills",
        path: "/purchase-bills",
        component: () => import("@/pages/purchase-bills"),
      },
      {
        title: "Invoice Returns (Purchase)",
        icon: "mdi-rotate-left",
        slug: "invoice-returns-purchase",
      },
    ],
  },
  {
    section: "Accounts & Books",
    items: [
      {
        title: "Groups & Ledgers",
        icon: "mdi-book-account-outline",
        slug: "groups-and-ledgers",
        path: "/groups-and-ledgers",
        component: () => import("@/pages/groups-and-ledgers"),
      },
      {
        title: "All Entries",
        icon: "tabler-book-open",
        slug: "all-entries",
        path: "/all-entries",
        component: () => import("@/pages/all-entries"),
      },
      // { title: 'Ledgers', icon: 'mdi-wallet-outline', slug: 'ledgers', path: '/ledgers', component: () => import('@/pages/ledgers') },
      {
        title : "Trial Balance",
        icon : "mdi-account-balance-outline",
        slug : "trial-balance",
        path : "/trial-balance",
        component : () => import('@/pages/trial-balance')
      },
      {
        title : "Ledger Table",
        icon : "mdi-account-balance-outline",
        slug : "ledger-table",
        path : "/ledger-table",
        component : () => import('@/pages/ledger-table')
      }
    ],
  },
  {
    section: "Reports",
    items: [
      {
        title: "Profit & Loss",
        icon: "mdi-trending-up",
        slug: "profit-and-loss",
        path: "/profit-and-loss",
        component: () => import("@/pages/profit-and-loss"),
      },
      {
        title: "Balance Sheet",
        icon: "mdi-text-box-outline",
        slug: "balance-sheet",
        path: "/balance-sheet",
        component: () => import("@/pages/balance-sheet"),
      },
      // { title: 'GST Summary', icon: 'mdi-percent-outline', slug: 'gstSummary', path: '/gstsummary', component: () => import('@/pages/gstsummary') },
      {
        title: "GST Reports",
        icon: "mdi-file-chart-outline",
        slug: "gst-reports",
        path: "/gst-reports",
        component: () => import("@/pages/gst-reports"),
      },
      // { title: 'Invoice Overviews', icon: 'mdi-book-open-blank-variant-outline', slug: 'invoice-overviews'},
    ],
  },
  {
    section: "",
    items: [
      {
        title: "Company Settings",
        icon: "mdi-cog-outline",
        slug: "company-settings",
        path: "/company-settings",
        component: () => import("@/pages/company-settings"),
      },
      {
        title: "User Roles",
        icon: "mdi-shield-account-outline",
        slug: "role-and-permission",
        path: "/role-and-permission",
        component: () => import("@/pages/role-and-permission"),
      },
    ],
  },
];
