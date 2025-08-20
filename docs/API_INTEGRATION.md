# Vue.js + Laravel API Integration

This document explains how to use the API integration setup in your Vue.js frontend to consume Laravel backend APIs.

## Overview

The setup provides a simple token-based authentication approach where you can paste your Laravel API token to access the backend without implementing login/logout/register functionality.

## Files Created

1. **`src/services/api.js`** - Core API service with axios configuration
2. **`src/components/TokenInput.vue`** - Component to input/paste API token
3. **`src/composables/useApi.js`** - Vue 3 composable for easy API usage
4. **`src/config/api.js`** - API configuration and endpoints
5. **`src/components/ExampleApiUsage.vue`** - Example component showing API usage

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Your Laravel API Base URL

Create a `.env` file in your project root:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Or modify `src/config/api.js` directly.

### 3. Use the Token Input Component

Import and use the `TokenInput` component in your app:

```vue
<template>
  <div>
    <TokenInput />
    <!-- Your other components -->
  </div>
</template>

<script>
import TokenInput from '@/components/TokenInput.vue';

export default {
  components: {
    TokenInput
  }
};
</script>
```

### 4. Paste Your Laravel API Token

1. Get your API token from Laravel (e.g., from Sanctum, JWT, or custom token)
2. Paste it in the TokenInput component
3. Click "Set Token"

## Using the API in Components

### Basic Usage with useApi Composable

```vue
<template>
  <div>
    <button @click="getData" :disabled="isLoading">
      {{ isLoading ? 'Loading...' : 'Get Data' }}
    </button>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<script>
import { useApi } from '@/composables/useApi.js';

export default {
  setup() {
    const { get, isLoading, error, hasToken } = useApi();
    const data = ref(null);

    const getData = async () => {
      try {
        data.value = await get('/your-endpoint');
      } catch (err) {
        console.error('API call failed:', err);
      }
    };

    return { getData, isLoading, error, hasToken, data };
  }
};
</script>
```

### Direct API Service Usage

```vue
<script>
import { apiService } from '@/services/api.js';

export default {
  methods: {
    async fetchData() {
      try {
        const response = await apiService.get('/customers');
        this.customers = response.data;
      } catch (error) {
        console.error('Failed to fetch customers:', error);
      }
    }
  }
};
</script>
```

## API Methods Available

### HTTP Methods
- `get(endpoint, params)` - GET request
- `post(endpoint, data)` - POST request
- `put(endpoint, data)` - PUT request
- `delete(endpoint)` - DELETE request
- `upload(endpoint, formData)` - File upload

### Token Management
- `setToken(token)` - Set API token
- `getToken()` - Get current token
- `removeToken()` - Remove token
- `hasToken()` - Check if token exists

## Laravel Backend Requirements

Your Laravel backend should:

1. **Accept Bearer Token Authentication**
   ```php
   // In your API routes
   Route::middleware('auth:sanctum')->group(function () {
       Route::get('/customers', [CustomerController::class, 'index']);
       Route::post('/customers', [CustomerController::class, 'store']);
   });
   ```

2. **Return Proper JSON Responses**
   ```php
   // In your controllers
   return response()->json([
       'success' => true,
       'data' => $customers,
       'message' => 'Customers retrieved successfully'
   ]);
   ```

3. **Handle CORS** (if frontend and backend are on different domains)
   ```php
   // In config/cors.php
   'allowed_origins' => ['http://localhost:3000'], // Your Vue dev server
   'allowed_methods' => ['*'],
   'allowed_headers' => ['*'],
   'exposed_headers' => [],
   'max_age' => 0,
   'supports_credentials' => false,
   ```

## Environment Variables

Create a `.env` file with:

```env
# Development
VITE_API_BASE_URL=http://localhost:8000/api

# Production
VITE_API_BASE_URL=https://yourdomain.com/api
```

## Customizing Endpoints

Modify `src/config/api.js` to match your Laravel API endpoints:

```javascript
export const API_CONFIG = {
  ENDPOINTS: {
    CUSTOMERS: '/customers',
    VENDORS: '/vendors',
    INVOICES: '/invoices',
    // Add your endpoints here
  }
};
```

## Error Handling

The API service automatically handles:
- 401 Unauthorized responses (removes invalid token)
- Network errors
- Response parsing errors

## Security Notes

- Tokens are stored in localStorage (not secure for production)
- Consider using httpOnly cookies for production
- Implement token refresh logic if needed
- Use HTTPS in production

## Example Laravel Sanctum Setup

If using Laravel Sanctum:

1. **Install Sanctum**
   ```bash
   composer require laravel/sanctum
   ```

2. **Publish config**
   ```bash
   php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
   ```

3. **Create API token**
   ```php
   // In your controller or command
   $token = $user->createToken('api-token')->plainTextToken;
   ```

4. **Use the token in Vue.js**
   - Copy the token from Laravel
   - Paste it in the TokenInput component
   - All API calls will now include the token

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure Laravel CORS is configured properly
   - Check if frontend and backend URLs match

2. **401 Unauthorized**
   - Verify token is valid
   - Check if token is being sent in Authorization header
   - Ensure Laravel middleware is configured correctly

3. **Network Errors**
   - Check if Laravel server is running
   - Verify API base URL is correct
   - Check firewall/network settings

### Debug Mode

Enable debug mode in your Vue component:

```javascript
const { get, error } = useApi();

const debugApi = async () => {
  try {
    console.log('Making API call...');
    const response = await get('/test');
    console.log('Response:', response);
  } catch (err) {
    console.error('Error details:', err);
    console.error('Response:', err.response);
  }
};
```

## Next Steps

1. Customize the endpoints in `src/config/api.js`
2. Add more API methods as needed
3. Implement proper error handling for your use case
4. Add loading states and user feedback
5. Consider implementing token refresh logic

