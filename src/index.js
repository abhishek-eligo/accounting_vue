import './main.css';
import AccountAllEntries from "./components/pages/AccountAllEntries.vue";
import AccountBalanceSheet from "./components/pages/AccountBalanceSheet.vue";
import AccountCustomerList from "./components/pages/AccountCustomerList.vue";
import AccountGSTReports from "./components/pages/AccountGSTReports.vue";
import AccountGroupAndLedger from "./components/pages/AccountGroupAndLedger.vue";
import AccountInvoiceReturn from "./components/pages/AccountInvoiceReturn.vue";
import AccountProfitAndLoss from "./components/pages/AccountProfitAndLoss.vue";
import AccountPurchaseBill from "./components/pages/AccountPurchaseBill.vue";
import AccountSalesInvoice from "./components/pages/AccountSalesInvoice.vue";
import AccountSettings from "./components/pages/AccountSettings.vue";
import AccountUserRolePermission from "./components/pages/AccountUserRolePermission.vue";
import AccountVendorsList from "./components/pages/AccountVendorsList.vue";
import InvoicePreview from "./components/pages/InvoicePreview.vue";
import ProductsPage from "./components/pages/ProductsPage.vue";
import vuetify from './plugins/vuetify.js';

// Helpers
export * from "./helpers/index.js";
// Validations
export * from "./validations/index.js";

// Export components individually
export { InvoicePreview }
export { vuetify };

// Export a plugin installer for global registration
export default {
  install(app) {
    app.component('AccountAllEntries', AccountAllEntries);
    app.component('AccountBalanceSheet', AccountBalanceSheet);
    app.component('AccountCustomerList', AccountCustomerList);
    app.component('AccountGSTReports', AccountGSTReports);
    app.component('AccountGroupAndLedger', AccountGroupAndLedger);
    app.component('AccountInvoiceReturn', AccountInvoiceReturn);
    app.component('AccountProfitAndLoss', AccountProfitAndLoss);
    app.component('AccountPurchaseBill', AccountPurchaseBill);
    app.component('AccountSalesInvoice', AccountSalesInvoice);
    app.component('AccountSettings', AccountSettings);
    app.component('AccountUserRolePermission', AccountUserRolePermission);
    app.component('AccountVendorsList', AccountVendorsList);
    app.component('InvoicePreview', InvoicePreview);
    app.component('ProductsPage', ProductsPage);
  }
}
