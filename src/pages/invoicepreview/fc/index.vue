<script setup></script>

<template>
  <div class="invoice-preview-container">
    <!-- Header -->
    <div class="invoice-header d-flex justify-space-between align-center">
      <div>
        <div class="d-flex align-center mb-1">
          <v-icon class="mr-2" size="36">mdi-file-document-outline</v-icon>
          <div>
            <h2 class="invoice-company">Hicks Inc.</h2>
            <div class="invoice-address">123 Business Rd, Financial District, Mumbai, Maharashtra, 400001, India</div>
            <div class="invoice-gstin">GSTIN: 27ABCDE1234F1Z5</div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <h2 class="invoice-title">TAX INVOICE</h2>
        <div class="invoice-details">
          <div class="invoice-address"># INV-FC-2024-07-002</div>
        </div>
      </div>
    </div>
    <!-- <v-divider class="my-4" /> -->

    <!-- from / bill To -->
    <div class="d-flex justify-space-between mt-3 mb-4">
      <div>
        <div class="section-title">From:</div>
        <div class="section-content">
          <div style="font-weight: 700;" class="account_invoice_content">Hicks Inc.</div>
          <div>123 Business Rd, Financial District, Mumbai, Maharashtra, 400001, India</div>
          <div>GSTIN: 27ABCDE1234F1Z5</div>
        </div>
      </div>
      <div style="text-align: right;">
        <div style="font-weight: 700; " class="section-title">Bill To:</div>
        <div class="section-content">
          <div style="font-weight: 700;" class="account_invoice_content">Global Tech Solutions</div>
          <div>1 International Drive, Suite 500, Silicon Valley, CA 94025</div>
          <div>USA</div>
        </div>
      </div>
    </div>

    <!-- ship to -->
    <div class="d-flex justify-space-between mt-4 mb-4">
      <div>
        <div class="section-title">Ship To:</div>
        <div class="section-content">
          <div style="font-weight: 700;" class="account_invoice_content">Global Tech Solutions.</div>
          <div>1 International Drive, Suite 500, Silicon Valley, CA 94025</div>
          <div>USA</div>
        </div>
      </div>
      <div style="text-align: right;">
        <!-- <div style="font-weight: 700;" class="section-title">Ship To:</div> -->
        <div class="section-content">
          <div><b>Place of Supply</b>: USA</div>
          <div><b>Invoice Date</b>: July 22nd, 2024</div>
          <div><b>Due Date</b>: August 21st, 2024</div>
        </div>
      </div>
    </div>

    <!-- Items Table -->
    <div class="invoice-table-wrapper mb-4">
      <table class="invoice-table ">
        <thead>
          <tr>
            <th>#</th>
            <th>Item & Description</th>
            <th>HSN</th>
            <th class="text-right">Qty</th>
            <th class="text-right">Rate (USD)</th>
            <th class="text-right">Amount (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Software Development Services<br />
              <span style="color: var(--acc-secondary-text-color); font-size: 13px;">Q3 2024 Retainer</span>
            </td>
            <td>998314</td>
            <td class="text-right">3 months</td>
            <td class="text-right">$2,500.00</td>
            <td class="text-right">$7,500.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Cloud Infrastructure Management<br />
              <span style="color: var(--acc-secondary-text-color); font-size: 13px;">Managed Kubernetes Cluster</span>
            </td>
            <td>998315</td>
            <td class="text-right">1 service</td>
            <td class="text-right">$1,500.00</td>
            <td class="text-right">$1,500.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              API Integration Project<br />
              <span style="color: var(--acc-secondary-text-color); font-size: 13px;">Integration with third-party payment gateway</span>
            </td>
            <td>998313</td>
            <td class="text-right">40 hours</td>
            <td class="text-right">$100.00</td>
            <td class="text-right">$4,000.00</td>
          </tr>
          <tr>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell text-right"></td>
          <td class="invoice-fc-table-background summary-cell sub-total text-right">Subtotal</td>
          <td class="invoice-fc-table-background summary-cell sub-total text-right">$13,000.00</td>
        </tr>
        <tr>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell text-right"></td>
          <td class="invoice-fc-table-background summary-cell text-right">IGST @ 18%</td>
          <td class="invoice-fc-table-background summary-cell text-right">$2,340.00</td>
        </tr>
        <tr class="summary-cell-grand-total">
          <td class="invoice-fc-table-background"></td>
          <td class="invoice-fc-table-background"></td>
          <td class="invoice-fc-table-background"></td>
          <td class="invoice-fc-table-background text-right"></td>
          <td class="invoice-fc-table-background grand-total text-right">Grand Total (USD)</td>
          <td class="invoice-fc-table-background grand-total text-right">$15,340.00</td>
        </tr>
        <tr>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell"></td>
          <td class="invoice-fc-table-background summary-cell text-right"></td>
          <td class="invoice-fc-table-background summary-cell grand-total text-right">Grand Total (INR)</td>
          <td class="invoice-fc-table-background summary-cell grand-total text-right">₹12,80,890.00</td>
        </tr>
        </tbody>
      </table>
    </div>


    <!-- Amount in Words & Summary -->
    <!-- Removed old VRow summary block -->

 

    <VDivider class="my-2" />

    <!-- Bank Details & Terms -->
    <div >
      <div>
        <div class="section-title">Amount in Words (INR):</div>
        <div class="section-content-details">
          <div>Rupees Twelve Lakh Eightythousand Eight Hundred And Ninety Only</div>
        </div>
      </div>

      <div class="mt-4">
        <div class="section-title">Exchange Rate:</div>
        <div class="section-content-details">
          <div>1 USD = ₹83.50</div>
        </div>
      </div>

      <div class="mt-4">
        <div class="section-title">Bank Details for International Transfer:</div>
        <div class="section-content-details">
          <div>Bank Name: Global Bank of India</div>
          <div>Account Number: 123456789012</div>
          <div>IFSC Code: GBIN0001234</div>
          <div>SWIFT Code: GBININBBXXX</div>
        </div>
      </div>

      <div class="mt-4">
        <div class="section-title">Terms & Conditions:</div>
        <ul class="section-content-terms">
          <li>Payment is due within 30 days.</li>
          <li>Please include the invoice number on your payment.</li>
          <li>A late fee of 1.5% per month will be charged on overdue invoices.</li>
        </ul>
      </div>
      
    </div>

    <VDivider class="my-2" />

    <!-- Footer -->
    <div class="">
      <div class="invoice-footer text-right mt-4">
        For Hicks Inc.
      </div>
      <div style="min-height: 80px"></div>

      <div class="invoice-footer text-right">
        <p class="account_invoice_signature">(Authorized Signatory)</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
tr.summary-cell-grand-total td {
    background: #f1f1f1 !important;
}
.account_invoice_signature {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--acc-text-dark);
}
.section-content-details {
  font-size: 14px;
  font-weight: 400;
  font-weight: 20px;
  color: var(--acc-secondary-text-color);
}

.section-content-terms {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: var(--acc-secondary-text-color);
}

.invoice-preview-container {
  background: #fff;
  padding: 32px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  max-width: 900px;
  margin: 32px auto;
  font-size: 15px;
}

.invoice-header {
  border-bottom: 1px solid var(--acc-border-color);
  padding-bottom: 18px;
}

.invoice-company {
  font-size: 36PX;
  font-weight: 700;
  color: var(--acc-primary-text-color);
  margin-bottom: 2px;
}

.invoice-title {
  color: var(--acc-primary-text-color);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
}

.invoice-address,
.invoice-gstin {
  color: var(--acc-secondary-text-color);
  font-size: 14px;
}

.invoice-details {
  font-size: 14px;
  color: var(--acc-text-dark);
  margin-top: 8px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--acc-text-dark);
  margin-bottom: 2px;
}

.section-content {
  color: var(--acc-text-dark);
  font-size: 14px;
}

.invoice-table-wrapper {
  /* border: 1px solid var(--acc-border-color); */
  border-radius: 8px;
  overflow: hidden;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}

.invoice-table thead {
  background: var(--acc-primary-color);
  color: #fff;
}

.invoice-table th,
.invoice-table td {
  padding: 10px 12px;
  text-align: left;
}

.invoice-table th {
  font-weight: 600;
}

.invoice-table tbody tr:last-child td {
  border-bottom: none;
}

.amount-in-words {
  max-width: 350px;
  color: var(--acc-secondary-text-color);
  font-size: 15px;
  margin-bottom: 0 !important;
}

.amount-in-words b {
  font-weight: 700;
  color: var(--acc-text-dark);
  font-size: 15px;
  margin-bottom: 0;
}

.amount-in-words-b,
.amount-in-words-b p {
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: var(--acc-secondary-text-color);
  margin-bottom: 0;
}

.amount-in-words-p {
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: var(--acc-secondary-text-color);
  text-transform: capitalize;
}

/* .invoice-summary {
  min-width: 260px;
  text-align: right;
}
.invoice-summary div {
  margin-bottom: 2px;
  font-size: 15px;
} */

.sub-total td{
  font-size: 14px;
  color: var(--acc-text-dark);
  font-weight: 700;
}


.grand-total  {
  font-size: 16px;
  line-height: 28px;
  color: var(--acc-text-dark);
  font-weight: 700;
}

.amount-due p {
  color: var(--acc-error-color);
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
}

.tax-breakdown-section {
  /* border: 1px solid var(--acc-border-color); */
  border-radius: 8px;
  padding: 16px 12px 8px 12px;
  /* background: #f9fafb; */
}

.tax-breakdown-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.tax-breakdown-table th,
.tax-breakdown-table td {
  padding: 7px 8px;
  border-bottom: 1px solid var(--acc-border-color);
  text-align: center;
}

.tax-breakdown-table th {
  background: var(--acc-primary-color);
  color: #fff;
  font-weight: 600;
}

.tax-breakdown-table tbody tr:last-child td {
  border-bottom: none;
  font-weight: 700;
  background: #e6f7f7;
}

.tax-breakdown-total td {
  font-weight: 700;
  background: #e6f7f7;
}

.invoice-footer {
  font-size: 16px;
  color: var(--acc-text-dark);
  font-weight: 600;
}


.summary-cell {
  font-weight: 700;
  padding: 16px 12px !important;
  background: #f1f1f180 !important;
  border-bottom: none !important;
}


.text-right {
  text-align: right;
}

@media (max-width: 1000px) {
  .invoice-preview-container {
    padding: 16px 4vw;
    max-width: 100vw;
  }
}

@media (max-width: 700px) {

  .invoice-header,
  .d-flex.justify-space-between {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 12px;
  }

  .invoice-summary {
    min-width: unset;
    text-align: left;
  }
}
</style>
