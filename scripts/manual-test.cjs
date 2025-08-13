#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Manual test script to verify installation and copy files if needed
async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
  }

  console.log('🧪 Manual test script for accounting_vue installation...');
  console.log('📁 Current working directory:', process.cwd());

  // Check if we're in a Laravel/Vue.js project
  const hasResourcesDir = fs.existsSync(path.join(process.cwd(), 'resources'));
  const hasPackageJson = fs.existsSync(path.join(process.cwd(), 'package.json'));

  console.log('📂 Has resources directory:', hasResourcesDir);
  console.log('📄 Has package.json:', hasPackageJson);

  if (!hasResourcesDir || !hasPackageJson) {
    console.log('❌ Not in a Laravel/Vue.js project');
    rl.close();
    return;
  }

  // Check if the package is installed
  const packagePath = path.join(process.cwd(), 'node_modules', '@abhishek_eligo', 'accounting_ecs');
  if (!fs.existsSync(packagePath)) {
    console.log('❌ Package not found in node_modules');
    console.log('💡 Please install the package first:');
    console.log('   npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy');
    rl.close();
    return;
  }

  console.log('✅ Package found:', packagePath);

  // Check source directories
  const sourcePagesDir = path.join(packagePath, 'src', 'pages');
  const sourceComponentsDir = path.join(packagePath, 'src', 'components');

  console.log('📂 Source pages directory:', sourcePagesDir);
  console.log('📂 Source components directory:', sourceComponentsDir);

  if (!fs.existsSync(sourcePagesDir)) {
    console.log('❌ Source pages directory not found');
    rl.close();
    return;
  }

  console.log('✅ Source pages directory exists');

  // Ask about project type
  const projectType = await ask('Is your project Module based or standalone? (module/standalone): ');
  let targetDir;

  if (projectType.toLowerCase() === 'standalone') {
    targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');
  } else if (projectType.toLowerCase() === 'module') {
    // Find the base folder starting with 'Modules'
    function findModulesDir(baseDir) {
      const items = fs.readdirSync(baseDir);
      for (const item of items) {
        const fullPath = path.join(baseDir, item);
        if (fs.statSync(fullPath).isDirectory()) {
          if (item.startsWith('Modules')) {
            return fullPath;
          }
          const found = findModulesDir(fullPath);
          if (found) return found;
        }
      }
      return null;
    }

    const modulesDir = findModulesDir(process.cwd());
    if (!modulesDir) {
      console.log('❌ No folder starting with "Modules" found');
      rl.close();
      return;
    }

    console.log('✅ Found Modules directory:', modulesDir);

    // List all folders inside the Modules directory
    const modules = fs.readdirSync(modulesDir).filter(item => {
      const fullPath = path.join(modulesDir, item);
      return fs.statSync(fullPath).isDirectory();
    });

    if (modules.length === 0) {
      console.log('❌ No modules found in the Modules directory');
      rl.close();
      return;
    }

    console.log('Available modules:');
    modules.forEach((mod, index) => {
      console.log(`${index + 1}. ${mod}`);
    });

    const selectedIndex = await ask('Select the module number: ');
    const index = parseInt(selectedIndex) - 1;

    if (isNaN(index) || index < 0 || index >= modules.length) {
      console.log('❌ Invalid selection');
      rl.close();
      return;
    }

    const selectedModule = modules[index];
    targetDir = path.join(modulesDir, selectedModule, 'resources', 'assets', 'js', 'accounting');
  } else {
    console.log('❌ Invalid project type selected');
    rl.close();
    return;
  }

  console.log('📂 Target directory:', targetDir);

  // Check if target already exists
  if (fs.existsSync(targetDir)) {
    console.log('⚠️  Target directory already exists');
    const response = process.argv.includes('--force') ? 'y' : await ask('Overwrite existing files? (y/n): ');
    if (response.toLowerCase() !== 'y') {
      console.log('💡 Use --force flag to overwrite existing files without prompt');
      rl.close();
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

  rl.close();
}

main();
