<template>
  <div class="api-demo-page">
    <div class="container">
      <h1 class="text-center mb-4">Vue.js + Laravel API Integration Demo</h1>
      
      <!-- Token Input Section -->
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Step 1: Set Your API Token</h5>
            </div>
            <div class="card-body">
              <TokenInput />
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5>Step 2: Test API Integration</h5>
            </div>
            <div class="card-body">
              <ExampleApiUsage />
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Start Guide -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h5>Quick Start Guide</h5>
            </div>
            <div class="card-body">
              <ol>
                <li><strong>Get your Laravel API token</strong> - Generate a token from your Laravel backend (Sanctum, JWT, etc.)</li>
                <li><strong>Paste the token</strong> - Use the Token Input component above to paste your token</li>
                <li><strong>Test the connection</strong> - Use the "Test Connection" button to verify your token works</li>
                <li><strong>Start making API calls</strong> - Use the example API methods or integrate into your own components</li>
              </ol>
              
              <div class="alert alert-info mt-3">
                <strong>Note:</strong> Make sure your Laravel backend is running and accessible at the URL specified in your configuration.
                The default is <code>http://localhost:8000/api</code>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TokenInput from '@/components/TokenInput.vue';
import ExampleApiUsage from '@/components/ExampleApiUsage.vue';

export default {
  name: 'ApiDemoPage',
  components: {
    TokenInput,
    ExampleApiUsage
  }
};
</script>

<style scoped>
.api-demo-page {
  padding: 2rem 0;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.card {
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
}

.card-header h5 {
  margin-bottom: 0;
  color: #495057;
}

.alert-info {
  background-color: #d1ecf1;
  color: #0c5460;
  border: 1px solid #bee5eb;
}

code {
  background-color: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.875em;
}
</style>

