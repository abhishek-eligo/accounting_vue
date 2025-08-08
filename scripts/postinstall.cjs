#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDirectory(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  const files = fs.readdirSync(source);
  
  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const destPath = path.join(destination, file);
    
    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  });
}

// Function to check if we're in a host app (not in the package development)
function isHostApp() {
  const cwd = process.cwd();
  console.log('🔍 Checking if we\'re in a host app...');
  console.log('📁 Current working directory:', cwd);
  
  // Check if we're in node_modules (which means we're in a host app)
  if (cwd.includes('node_modules')) {
    console.log('✅ Detected: Running inside node_modules (host app)');
    return true;
  }
  
  // Check if we're in a typical Laravel/Vue.js project structure
  const hasResourcesDir = fs.existsSync(path.join(cwd, 'resources'));
  const hasPackageJson = fs.existsSync(path.join(cwd, 'package.json'));
  
  console.log('📂 Has resources directory:', hasResourcesDir);
  console.log('📄 Has package.json:', hasPackageJson);
  
  if (hasResourcesDir && hasPackageJson) {
    // Read package.json to check if this is the host app
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
      const hasAccountingDependency = packageJson.dependencies && packageJson.dependencies['@abhishek_eligo/accounting_ecs'];
      console.log('📦 Has accounting dependency:', hasAccountingDependency);
      return hasAccountingDependency;
    } catch (error) {
      console.log('❌ Error reading package.json:', error.message);
      return false;
    }
  }
  
  console.log('❌ Not a host app environment');
  return false;
}

// Function to get package root directory
function getPackageRoot() {
  // Try to find the package root by looking for node_modules
  let currentDir = process.cwd();
  let packageRoot = null;
  
  console.log('🔍 Looking for package root...');
  
  // Look for node_modules in current directory or parent directories
  while (currentDir !== path.dirname(currentDir)) {
    const nodeModulesPath = path.join(currentDir, 'node_modules', '@abhishek_eligo', 'accounting_ecs');
    console.log('🔍 Checking:', nodeModulesPath);
    
    if (fs.existsSync(nodeModulesPath)) {
      packageRoot = nodeModulesPath;
      console.log('✅ Found package root:', packageRoot);
      break;
    }
    currentDir = path.dirname(currentDir);
  }
  
  // If we're already inside the package directory, use current directory
  if (!packageRoot && process.cwd().includes('@abhishek_eligo/accounting_ecs')) {
    packageRoot = process.cwd();
    console.log('✅ Using current directory as package root:', packageRoot);
  }
  
  return packageRoot;
}

// Function to create a helpful README file in the accounting directory
function createReadmeFile(targetDir) {
  const readmeContent = `# Accounting Components

This directory contains the accounting components copied from the @abhishek_eligo/accounting_ecs package.

## Structure

- **pages/** - Page components that wrap the main accounting components
- **components/** - Source components from the package (for reference)

## Customization

You can modify any of these components to suit your application's needs:

1. **Edit page components** in the \`pages/\` directory to customize the wrapper logic
2. **Reference source components** in the \`components/\` directory to understand the original implementation
3. **Add your own logic** like v-model, custom props, events, etc.

## Example Customization

\`\`\`vue
<template>
  <div class="custom-accounting-page">
    <AccountAllEntries 
      v-model="entriesData"
      :show-export="true"
      :custom-filters="filters"
      @entry-selected="handleEntrySelection"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      entriesData: [],
      filters: {
        dateRange: null,
        category: 'all'
      }
    }
  },
  methods: {
    handleEntrySelection(entry) {
      console.log('Selected entry:', entry);
      // Your custom logic here
    }
  }
}
</script>
\`\`\`

## Available Components

- AccountAllEntries
- AccountBalanceSheet
- AccountCustomerList
- AccountCustomerPortfolio
- AccountGSTReports
- AccountGroupAndLedger
- AccountInvoiceReturn
- AccountProfitAndLoss
- AccountPurchaseBill
- AccountSalesInvoice
- AccountSettings
- AccountUserRolePermission
- AccountVendorsList
- InvoicePreview
- ProductsPage

For more information, visit: https://github.com/abhishek-eligo/accounting_vue
`;

  fs.writeFileSync(path.join(targetDir, 'README.md'), readmeContent);
}

// Main execution
function main() {
  console.log('🚀 Starting accounting_vue postinstall script...');
  console.log('📁 Current working directory:', process.cwd());
  console.log('📦 Script location:', __dirname);
  
  // Only run if we're in a host app
  if (!isHostApp()) {
    console.log('ℹ️  Not in host app, skipping pages copy...');
    return;
  }

  console.log('✅ Host app detected, proceeding with file copy...');

  const packageRoot = getPackageRoot();
  if (!packageRoot) {
    console.log('❌ Package root not found, skipping pages copy...');
    return;
  }

  console.log('📦 Package root found:', packageRoot);

  const sourcePagesDir = path.join(packageRoot, 'src', 'pages');
  const sourceComponentsDir = path.join(packageRoot, 'src', 'components');
  const targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');

  console.log('📂 Source pages directory:', sourcePagesDir);
  console.log('📂 Source components directory:', sourceComponentsDir);
  console.log('📂 Target directory:', targetDir);

  try {
    // Check if source directories exist
    if (!fs.existsSync(sourcePagesDir)) {
      console.log('❌ Source pages directory not found, skipping...');
      return;
    }

    console.log('✅ Source pages directory exists');

    // Create target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log('📁 Created target directory');
    } else {
      console.log('📁 Target directory already exists');
    }

    // Copy the pages directory
    console.log('📋 Copying pages directory...');
    copyDirectory(sourcePagesDir, path.join(targetDir, 'pages'));
    console.log('✅ Pages directory copied successfully');
    
    // Copy the components directory for reference
    if (fs.existsSync(sourceComponentsDir)) {
      console.log('📋 Copying components directory...');
      copyDirectory(sourceComponentsDir, path.join(targetDir, 'components'));
      console.log('✅ Components directory copied successfully');
    } else {
      console.log('⚠️  Source components directory not found, skipping...');
    }
    
    // Create a helpful README file
    console.log('📝 Creating README file...');
    createReadmeFile(targetDir);
    console.log('✅ README file created');
    
    console.log('\n🎉 Accounting components copied successfully!');
    console.log('📁 Pages available at:', path.join(targetDir, 'pages'));
    console.log('🔧 Source components available at:', path.join(targetDir, 'components'));
    console.log('');
    console.log('📝 Available pages:');
    
    // List the copied pages
    const pagesDir = path.join(targetDir, 'pages');
    if (fs.existsSync(pagesDir)) {
      const pages = fs.readdirSync(pagesDir);
      pages.forEach(page => {
        console.log(`   - ${page}`);
      });
    }
    
    console.log('');
    console.log('💡 You can now:');
    console.log('   • Modify components in the pages/ directory');
    console.log('   • Use v-model, props, and events');
    console.log('   • Add custom styling and logic');
    console.log('   • Reference source components for implementation details');
    console.log('');
    console.log('📖 Check the README.md file in the accounting directory for more details!');
    
  } catch (error) {
    console.error('❌ Error copying accounting components:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run the script
main();
