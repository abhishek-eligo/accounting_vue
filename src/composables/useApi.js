import { ref, computed, readonly } from 'vue';
import { apiService } from '../services/api.js';

export function useApi() {
  const isLoading = ref(false);
  const error = ref(null);

  // Token management
  const hasToken = computed(() => apiService.hasToken());
  const getToken = () => apiService.getToken();
  const setToken = (token) => apiService.setToken(token);
  const removeToken = () => apiService.removeToken();

  // Generic API methods with loading states
  const apiCall = async (apiMethod, ...args) => {
    isLoading.value = true;
    error.value = null;
    
    try {
      const result = await apiMethod(...args);
      return result;
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'An error occurred';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Wrapped API methods
  const get = (endpoint, params) => apiCall(apiService.get, endpoint, params);
  const post = (endpoint, data) => apiCall(apiService.post, endpoint, data);
  const put = (endpoint, data) => apiCall(apiService.put, endpoint, data);
  const del = (endpoint) => apiCall(apiService.delete, endpoint);
  const upload = (endpoint, formData) => apiCall(apiService.upload, endpoint, formData);

  // Clear error
  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    isLoading: readonly(isLoading),
    error: readonly(error),
    hasToken: readonly(hasToken),
    
    // Token methods
    getToken,
    setToken,
    removeToken,
    
    // API methods
    get,
    post,
    put,
    delete: del,
    upload,
    
    // Utility methods
    clearError
  };
}
