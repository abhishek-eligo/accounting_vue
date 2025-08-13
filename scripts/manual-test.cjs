#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Manual test script to verify installation and copy files if needed
function main() {
  console.log('🧪 Manual test script for accounting_vue installation...');
  console.log('📁 Current working directory:', process.cwd());
  
  // Check if we're in a Laravel/Vue.js project
  const hasResourcesDir = fs.existsSync(path.join(process.cwd(), 'resources'));
  const hasPackageJson = fs.existsSync(path.join(process.cwd(), 'package.json'));
  
  console.log('📂 Has resources directory:', hasResourcesDir);
  console.log('📄 Has package.json:', hasPackageJson);
  
  if (!hasResourcesDir || !hasPackageJson) {
    console.log('❌ Not in a Laravel/Vue.js project');
    return;
  }
  
  // Check if the package is installed
  const packagePath = path.join(process.cwd(), 'node_modules', '@abhishek_eligo', 'accounting_ecs');
  if (!fs.existsSync(packagePath)) {
    console.log('❌ Package not found in node_modules');
    console.log('💡 Please install the package first:');
    console.log('   npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy');
    return;
  }
  
  console.log('✅ Package found:', packagePath);
  
  // Check source directories
  const sourcePagesDir = path.join(packagePath, 'src', 'pages');
  // const sourceComponentsDir = path.join(packagePath, 'src', 'components');
  
  console.log('📂 Source pages directory:', sourcePagesDir);
  // console.log('📂 Source components directory:', sourceComponentsDir);
  
  if (!fs.existsSync(sourcePagesDir)) {
    console.log('❌ Source pages directory not found');
    return;
  }
  
  console.log('✅ Source pages directory exists');
  
  // Define target directory
  const targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');
  console.log('📂 Target directory:', targetDir);
  
  // Check if target already exists
  if (fs.existsSync(targetDir)) {
    console.log('⚠️  Target directory already exists');
    const response = process.argv.includes('--force') ? 'y' : 'n';
    if (response !== 'y') {
      console.log('💡 Use --force flag to overwrite existing files');
      return;
    }
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
  
  try {
    // Create target directory
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log('📁 Created target directory');
    }
    
    // Copy pages
    console.log('📋 Copying pages directory...');
    copyDir(sourcePagesDir, path.join(targetDir, 'pages'));
    console.log('✅ Pages copied successfully');
    
    // Copy components
    // if (fs.existsSync(sourceComponentsDir)) {
    //   console.log('📋 Copying components directory...');
    //   copyDir(sourceComponentsDir, path.join(targetDir, 'components'));
    //   console.log('✅ Components copied successfully');
    // } else {
    //   console.log('⚠️  Source components directory not found');
    // }
    
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

For more information, visit: https://github.com/abhishek-eligo/accounting_vue
`;
    
    fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
    console.log('✅ README created');
    
    console.log('\n🎉 Manual copy completed successfully!');
    console.log('📁 Files copied to:', targetDir);
    
    // List copied directories
    if (fs.existsSync(path.join(targetDir, 'pages'))) {
      const pages = fs.readdirSync(path.join(targetDir, 'pages'));
      console.log('📝 Available pages:', pages.join(', '));
    }
    
    console.log('\n💡 You can now customize the components in the pages/ directory!');
    
  } catch (error) {
    console.error('❌ Error during manual copy:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

main(); 