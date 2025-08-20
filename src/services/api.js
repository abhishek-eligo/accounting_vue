import { API_CONFIG } from '@/config/api.js';

class ApiService {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
    this.defaultHeaders = API_CONFIG.DEFAULT_HEADERS;
    
    // Check if fetch is available
    if (typeof fetch === 'undefined') {
      throw new Error('Fetch API is not available in this environment. Please use a polyfill or update your browser.');
    }
  }

  // Token management
  hasToken() {
    return !!localStorage.getItem('api_token');
  }

  getToken() {
    return localStorage.getItem('api_token') || '';
  }

  setToken(token) {
    localStorage.setItem('api_token', token);
  }

  removeToken() {
    localStorage.removeItem('api_token');
  }

  // Get auth headers
  getAuthHeaders() {
    const token = this.getToken();
    return token ? { ...this.defaultHeaders, 'Authorization': `Bearer ${token}` } : this.defaultHeaders;
  }

  // Build full URL
  buildUrl(endpoint) {
    return `${this.baseURL}${endpoint}`;
  }

  // Generic request method
  async request(method, endpoint, data = null, params = null) {
    const url = this.buildUrl(endpoint);
    const headers = this.getAuthHeaders();
    
    // Add query parameters if provided
    let fullUrl = url;
    if (params) {
      const searchParams = new URLSearchParams(params);
      fullUrl = `${url}?${searchParams.toString()}`;
    }

    const config = {
      method,
      headers,
    };

    if (data && method !== 'GET') {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(fullUrl, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return await response.text();
    } catch (error) {
      console.error(`API ${method} request failed:`, error);
      throw error;
    }
  }

  // HTTP methods
  async get(endpoint, params = null) {
    return this.request('GET', endpoint, null, params);
  }

  async post(endpoint, data) {
    return this.request('POST', endpoint, data);
  }

  async put(endpoint, data) {
    return this.request('PUT', endpoint, data);
  }

  async delete(endpoint) {
    return this.request('DELETE', endpoint);
  }

  async upload(endpoint, formData) {
    const url = this.buildUrl(endpoint);
    const token = this.getToken();
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return await response.json();
      }
      
      return await response.text();
    } catch (error) {
      console.error('API upload request failed:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const apiService = new ApiService();
