<template>
  <div class="token-input-container">
    <div class="token-input-card">
      <h3>API Token Setup</h3>
      <p class="text-muted">Paste your Laravel API token to access the backend</p>
      
      <div class="form-group">
        <label for="apiToken">API Token:</label>
        <input
          id="apiToken"
          v-model="token"
          type="text"
          class="form-control"
          placeholder="Paste your Laravel API token here..."
          @keyup.enter="setToken"
        />
      </div>
      
      <div class="button-group">
        <button @click="setToken" class="btn btn-primary">
          Set Token
        </button>
        <button @click="clearToken" class="btn btn-secondary">
          Clear Token
        </button>
      </div>
      
      <div v-if="tokenStatus" class="token-status">
        <div v-if="tokenStatus.success" class="alert alert-success">
          {{ tokenStatus.message }}
        </div>
        <div v-else class="alert alert-danger">
          {{ tokenStatus.message }}
        </div>
      </div>
      
      <div v-if="hasToken" class="current-token-info">
        <p><strong>Current Token:</strong> {{ maskedToken }}</p>
        <button @click="testConnection" class="btn btn-info">
          Test Connection
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { apiService } from '../services/api.js';

export default {
  name: 'TokenInput',
  data() {
    return {
      token: '',
      tokenStatus: null,
      hasToken: false
    };
  },
  computed: {
    maskedToken() {
      if (!this.hasToken) return '';
      const token = apiService.getToken();
      if (token.length <= 10) return token;
      return token.substring(0, 10) + '...' + token.substring(token.length - 4);
    }
  },
  mounted() {
    this.checkTokenStatus();
  },
  methods: {
    setToken() {
      if (!this.token.trim()) {
        this.tokenStatus = {
          success: false,
          message: 'Please enter a token'
        };
        return;
      }
      
      try {
        apiService.setToken(this.token.trim());
        this.tokenStatus = {
          success: true,
          message: 'Token set successfully!'
        };
        this.token = '';
        this.checkTokenStatus();
        
        // Clear status after 3 seconds
        setTimeout(() => {
          this.tokenStatus = null;
        }, 3000);
      } catch (error) {
        this.tokenStatus = {
          success: false,
          message: 'Error setting token: ' + error.message
        };
      }
    },
    
    clearToken() {
      apiService.removeToken();
      this.tokenStatus = {
        success: true,
        message: 'Token cleared successfully!'
      };
      this.checkTokenStatus();
      
      setTimeout(() => {
        this.tokenStatus = null;
      }, 3000);
    },
    
    checkTokenStatus() {
      this.hasToken = apiService.hasToken();
    },
    
    async testConnection() {
      try {
        // Test with a simple endpoint - adjust this to match your Laravel API
        const response = await apiService.get('/test-connection');
        this.tokenStatus = {
          success: true,
          message: 'Connection successful! Backend is accessible.'
        };
      } catch (error) {
        this.tokenStatus = {
          success: false,
          message: `Connection failed: ${error.response?.data?.message || error.message}`
        };
      }
      
      setTimeout(() => {
        this.tokenStatus = null;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.token-input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.token-input-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.token-input-card h3 {
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.text-muted {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #6c757d;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
}

.form-control:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #545b62;
}

.btn-info {
  background-color: #17a2b8;
  color: white;
}

.btn-info:hover {
  background-color: #138496;
}

.token-status {
  margin-bottom: 1rem;
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

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.current-token-info {
  background-color: #e9ecef;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.current-token-info p {
  margin-bottom: 1rem;
  margin-top: 0;
}
</style>

