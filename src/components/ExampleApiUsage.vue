<template>
  <div class="example-api-usage">
    <h3>Example API Usage</h3>
    
    <!-- Token Status -->
    <div class="token-status-section">
      <h4>Authentication Status</h4>
      <div v-if="hasToken" class="alert alert-success">
        ✅ Token is set and ready to use
      </div>
      <div v-else class="alert alert-warning">
        ⚠️ No token set. Please set your API token first.
      </div>
    </div>

    <!-- API Examples -->
    <div class="api-examples">
      <h4>API Examples</h4>
      
      <!-- Test Connection -->
      <div class="api-example">
        <h5>Test Connection</h5>
        <button 
          @click="testConnection" 
          :disabled="!hasToken || isLoading"
          class="btn btn-primary"
        >
          {{ isLoading ? 'Testing...' : 'Test Connection' }}
        </button>
        <div v-if="error" class="alert alert-danger mt-2">
          {{ error }}
        </div>
      </div>

      <!-- Get Customers -->
      <div class="api-example">
        <h5>Get Customers</h5>
        <button 
          @click="getCustomers" 
          :disabled="!hasToken || isLoading"
          class="btn btn-success"
        >
          {{ isLoading ? 'Loading...' : 'Get Customers' }}
        </button>
        <div v-if="customers.length > 0" class="mt-2">
          <h6>Customers ({{ customers.length }}):</h6>
          <ul class="list-group">
            <li v-for="customer in customers" :key="customer.id" class="list-group-item">
              {{ customer.name }} - {{ customer.email }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Create Customer -->
      <div class="api-example">
        <h5>Create Customer</h5>
        <div class="form-group">
          <input 
            v-model="newCustomer.name" 
            type="text" 
            placeholder="Customer Name" 
            class="form-control mb-2"
          />
          <input 
            v-model="newCustomer.email" 
            type="email" 
            placeholder="Customer Email" 
            class="form-control mb-2"
          />
          <button 
            @click="createCustomer" 
            :disabled="!hasToken || isLoading || !newCustomer.name || !newCustomer.email"
            class="btn btn-info"
          >
            {{ isLoading ? 'Creating...' : 'Create Customer' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Response Display -->
    <div v-if="lastResponse" class="response-display">
      <h4>Last API Response</h4>
      <pre class="response-json">{{ JSON.stringify(lastResponse, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useApi } from '../composables/useApi.js';
import { API_CONFIG } from '../config/api.js';

export default {
  name: 'ExampleApiUsage',
  setup() {
    const { 
      isLoading, 
      error, 
      hasToken, 
      get, 
      post, 
      clearError 
    } = useApi();

    const customers = ref([]);
    const lastResponse = ref(null);
    const newCustomer = reactive({
      name: '',
      email: ''
    });

    const testConnection = async () => {
      try {
        clearError();
        const response = await get(API_CONFIG.ENDPOINTS.TEST_CONNECTION);
        lastResponse.value = response;
        alert('Connection successful!');
      } catch (err) {
        console.error('Connection test failed:', err);
      }
    };

    const getCustomers = async () => {
      try {
        clearError();
        const response = await get(API_CONFIG.ENDPOINTS.CUSTOMERS);
        customers.value = response.data || response;
        lastResponse.value = response;
      } catch (err) {
        console.error('Failed to get customers:', err);
      }
    };

    const createCustomer = async () => {
      try {
        clearError();
        const response = await post(API_CONFIG.ENDPOINTS.CUSTOMERS, newCustomer);
        lastResponse.value = response;
        
        // Add to local list
        customers.value.push(response.data || response);
        
        // Clear form
        newCustomer.name = '';
        newCustomer.email = '';
        
        alert('Customer created successfully!');
      } catch (err) {
        console.error('Failed to create customer:', err);
      }
    };

    return {
      isLoading,
      error,
      hasToken,
      customers,
      lastResponse,
      newCustomer,
      testConnection,
      getCustomers,
      createCustomer
    };
  }
};
</script>

<style scoped>
.example-api-usage {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.token-status-section {
  margin-bottom: 2rem;
}

.api-examples {
  margin-bottom: 2rem;
}

.api-example {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.api-example h5 {
  margin-bottom: 1rem;
  color: #495057;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.alert {
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.alert-success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-warning {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeaa7;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.list-group {
  margin-top: 1rem;
}

.list-group-item {
  padding: 0.5rem;
  border: 1px solid #dee2e6;
  background-color: white;
}

.response-display {
  margin-top: 2rem;
}

.response-json {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  overflow-x: auto;
  font-size: 0.875rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}
</style>

