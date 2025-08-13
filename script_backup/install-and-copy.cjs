#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Combined install and copy script
function main() {
  console.log('🚀 Starting accounting_vue installation and file copy...');
  console.log('📁 Current working directory:', process.cwd());
  
  try {
    // Check if we're in a Laravel/Vue.js project
    const hasResourcesDir = fs.existsSync(path.join(process.cwd(), 'resources'));
    const hasPackageJson = fs.existsSync(path.join(process.cwd(), 'package.json'));
    
    if (!hasResourcesDir || !hasPackageJson) {
      console.log('❌ Not in a Laravel/Vue.js project');
      console.log('💡 Please run this script from your Laravel/Vue.js project root');
      return;
    }
    
    console.log('✅ Laravel/Vue.js project detected');
    
    // Check if package is already installed
    const packagePath = path.join(process.cwd(), 'node_modules', '@abhishek_eligo', 'accounting_ecs');
    const isAlreadyInstalled = fs.existsSync(packagePath);
    
    if (isAlreadyInstalled) {
      console.log('📦 Package already installed, skipping installation...');
    } else {
      console.log('📦 Installing package...');
      try {
        execSync('npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy --force', { 
          stdio: 'inherit',
          cwd: process.cwd()
        });
        console.log('✅ Package installed successfully');
      } catch (error) {
        console.log('⚠️  Installation failed, but continuing with file copy...');
      }
    }
    
    // Now copy the files
    console.log('\n📋 Starting file copy process...');
    
    const sourcePagesDir = path.join(packagePath, 'src', 'pages');
    const sourceComponentsDir = path.join(packagePath, 'src', 'components');
    const targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');
    
    console.log('📂 Source pages directory:', sourcePagesDir);
    console.log('📂 Source components directory:', sourceComponentsDir);
    console.log('📂 Target directory:', targetDir);
    
    if (!fs.existsSync(sourcePagesDir)) {
      console.log('❌ Source pages directory not found');
      console.log('💡 Please ensure the package is properly installed');
      return;
    }
    
    console.log('✅ Source pages directory exists');
    
    // Create target directory
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log('📁 Created target directory');
    } else {
      console.log('📁 Target directory already exists');
    }
    
    // Copy function
    function copyDir(src, dest) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      const items = fs.readdirSync(src);
      items.forEach(item => {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        
        if (fs.statSync(srcPath).isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    }
    
    // Copy pages
    console.log('📋 Copying pages directory...');
    copyDir(sourcePagesDir, path.join(targetDir, 'pages'));
    console.log('✅ Pages copied successfully');
    
    // Copy components
    if (fs.existsSync(sourceComponentsDir)) {
      console.log('📋 Copying components directory...');
      copyDir(sourceComponentsDir, path.join(targetDir, 'components'));
      console.log('✅ Components copied successfully');
    } else {
      console.log('⚠️  Source components directory not found');
    }
    
    // Create README
    const readme = `# Accounting Components

This directory contains accounting components copied from @abhishek_eligo/accounting_ecs.

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
      filters: { dateRange: null, category: 'all' }
    }
  },
  methods: {
    handleEntrySelection(entry) {
      console.log('Selected entry:', entry);
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
    
    fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
    console.log('✅ README created');
    
    console.log('\n🎉 Installation and file copy completed successfully!');
    console.log('📁 Files copied to:', targetDir);
    
    // List copied directories
    if (fs.existsSync(path.join(targetDir, 'pages'))) {
      const pages = fs.readdirSync(path.join(targetDir, 'pages'));
      console.log('📝 Available pages:', pages.join(', '));
    }
    
    console.log('\n💡 Next steps:');
    console.log('1. Register the plugin in your main.js:');
    console.log('   import AccountingModule from \'@abhishek_eligo/accounting_ecs\';');
    console.log('   import \'@abhishek_eligo/accounting_ecs/dist/accounting_ecs.css\';');
    console.log('   app.use(AccountingModule);');
    console.log('');
    console.log('2. Customize components in the pages/ directory');
    console.log('3. Use components with v-model, props, and events');
    
  } catch (error) {
    console.error('❌ Error during installation and copy:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

main(); 