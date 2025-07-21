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
            <div class="invoice-address">123 Business Rd, Financial District, Mumbai, Maharashtra, 400001</div>
            <div class="invoice-gstin">GSTIN: 27ABCDE1234F1Z5</div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <h2 class="invoice-title">TAX INVOICE</h2>
        <div class="invoice-details">
          <div><b>Invoice No:</b> INV-2024-07-001</div>
          <div><b>Invoice Date:</b> July 21st, 2024</div>
          <div><b>Place of Supply:</b> Maharashtra</div>
          <div><b>Due Date:</b> August 20th, 2024</div>
        </div>
      </div>
    </div>
    <!-- <v-divider class="my-4" /> -->

    <!-- Bill To / Ship To -->
    <div class="d-flex justify-space-between mt-3 mb-4">
      <div>
        <div class="section-title">Bill To:</div>
        <div class="section-content">
          <div style="font-weight: 700;" class="account_invoice_content">Innovate Inc.</div>
          <div>789 Industrial Area, Andheri (E), Mumbai, Maharashtra, 400093</div>
          <div>GSTIN: 27AXYZE9876G1Z3</div>
        </div>
      </div>
      <div>
        <div style="font-weight: 700;" class="section-title">Ship To:</div>
        <div class="section-content">
          <div>Innovate Inc.</div>
          <div>789 Industrial Area, Andheri (E), Mumbai, Maharashtra, 400093</div>
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
            <th>Qty</th>
            <th>Rate</th>
            <th>GST</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Cloud Hosting Services</td>
            <td>998315</td>
            <td>1 year</td>
            <td>₹50,000.00</td>
            <td>18%</td>
            <td>₹59,000.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Domain Name Registration</td>
            <td>998314</td>
            <td>1 item</td>
            <td>₹2,500.00</td>
            <td>18%</td>
            <td>₹2,950.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Technical Support Retainer</td>
            <td>998313</td>
            <td>12 months</td>
            <td>₹10,000.00</td>
            <td>18%</td>
            <td>₹1,41,600.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <VDivider class="my-4" />

    <!-- Amount in Words & Summary -->
    <VRow>
      <VCol cols="12" lg="6" md="6">
        <div class="amount-in-words">
          <b>Amount in Words:</b>
          <p class="amount-in-words-b">Rupees Two Lakh Three Thousand Five Hundred And Fifty Only</p>
        </div>
      </VCol>
      <VCol cols="12" lg="6" md="6">
        <div class="invoice-summary">
          <div class="d-flex justify-space-between amount-in-words-b align-center mb-2">
            <p class="mb-0">Subtotal:</p>
            <p class="mb-0">₹1,72,500.00</p>
          </div>
          <div class="d-flex justify-space-between amount-in-words-b align-center mb-2">
            <p class="mb-0">CGST:</p>
            <p class="mb-0">₹15,525.00</p>
          </div>
          <div class="d-flex justify-space-between amount-in-words-b align-center mb-2">
            <p class="mb-0">SGST:</p>
            <p class="mb-0">₹15,525.00</p>
          </div>
          <div class="grand-total d-flex justify-space-between align-center mb-2">
            <p class="mb-0">Grand Total:</p>
            <p class="mb-0">₹2,03,550.00</p>
          </div>
          <div class="d-flex justify-space-between amount-in-words-b align-center mb-2">
            <p class="mb-0">Amount Paid:</p>
            <p class="mb-0">₹1,00,000.00</p>
          </div>
          <VDivider class="my-2" />
          <div class="amount-due d-flex justify-space-between align-center">
            <p class="mb-0">Amount Due:</p>
            <p class="mb-0">₹1,03,550.00</p>
          </div>
        </div>
      </VCol>
    </VRow>

    <!-- Tax Breakdown Table -->
    <div class="tax-breakdown-section mb-4">
      <div class="section-title mb-1">Tax Breakdown</div>
      <table class="tax-breakdown-table">
        <thead>
          <tr>
            <th>HSN/SAC</th>
            <th>Taxable Value</th>
            <th>CGST<br />Rate</th>
            <th>CGST<br />Amount</th>
            <th>SGST<br />Rate</th>
            <th>SGST<br />Amount</th>
            <th>Total Tax Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>998313</td>
            <td>₹1,20,000.00</td>
            <td>9%</td>
            <td>₹10,800.00</td>
            <td>9%</td>
            <td>₹10,800.00</td>
            <td>₹21,600.00</td>
          </tr>
          <tr>
            <td>998314</td>
            <td>₹2,500.00</td>
            <td>9%</td>
            <td>₹225.00</td>
            <td>9%</td>
            <td>₹225.00</td>
            <td>₹450.00</td>
          </tr>
          <tr>
            <td>998315</td>
            <td>₹50,000.00</td>
            <td>9%</td>
            <td>₹4,500.00</td>
            <td>9%</td>
            <td>₹4,500.00</td>
            <td>₹9,000.00</td>
          </tr>
          <tr class="tax-breakdown-total">
            <td>Total</td>
            <td>₹1,72,500.00</td>
            <td></td>
            <td>₹15,525.00</td>
            <td></td>
            <td>₹15,525.00</td>
            <td>₹31,050.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <VDivider class="my-2" />

    <!-- Bank Details & Terms -->
    <div class="d-flex justify-space-between my-4">
      <div>
        <div class="section-title">Bank Details:</div>
        <div class="section-content-details">
          <div>Bank Name: Global Bank of India</div>
          <div>Account Number: 123456789012</div>
          <div>IFSC Code: GBIN0001234</div>
        </div>
      </div>
      <div>
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
  color: var(--acc-primary-color);
  font-size: 36px;
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
  border-bottom: 1px solid var(--acc-border-color);
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
  font-size: 16px;
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
.grand-total p {
  font-size: 18px;
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
  color: var(--acc-secondary-text-color);
  font-weight: 600;
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
