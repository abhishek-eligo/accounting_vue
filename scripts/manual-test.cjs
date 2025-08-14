#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// CSS variables to inject into host app's styles.css
const CSS_VARIABLES_OVERRIDE = `
/* Accounting Vue Plugin CSS Variable Overrides */
:root {
  --acc-primary-color: rgba(var(--v-theme-primary));
  --acc-border-color: rgba(var(--v-border-color), var(--v-border-opacity));
  --acc-error-color: rgba(var(--v-theme-error));
  --acc-secondary-color: rgba(var(--v-theme-secondary));
  --acc-text-dark: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
  --acc-primary-text-color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
  --acc-primary-color-hover: rgba(var(--v-theme-primary), 0.38);
  --acc-default-font-family: Public Sans, sans-serif;
  --acc-input-bg-color: transparent;
  --acc-outlined-color: transparent;
  --acc-primary-color-tonal: rgba(var(--v-theme-primary), 0.16);
  --acc-error-color-tonal: rgba(var(--v-theme-error), 0.16);
}
/* End Accounting Vue Plugin CSS Variable Overrides */
`;

// Function to inject CSS variables into host app's styles.css
async function injectCSSVariables() {
  console.log('🎨 Injecting CSS variable overrides...');
  
  // Common paths where styles.css might be located (in order of preference)
  const possibleStylesPaths = [
    'resources/styles/styles.scss',
    'resources/css/app.css',
    'resources/sass/app.scss',
    'resources/css/styles.css',
    'src/assets/css/styles.css',
    'src/assets/scss/styles.scss',
    'src/styles.css',
    'public/css/styles.css',
    'assets/css/styles.css',
    'resources/css/main.css',
    'src/main.css',
    'src/assets/main.css'
  ];
  
  let stylesPath = null;
  
  // Find the styles file
  for (const possiblePath of possibleStylesPaths) {
    const fullPath = path.join(process.cwd(), possiblePath);
    if (fs.existsSync(fullPath)) {
      stylesPath = fullPath;
      break;
    }
  }
  
  // If no existing styles file found, create one
  if (!stylesPath) {
    stylesPath = path.join(process.cwd(), 'resources', 'css', 'app.css');
    
    // Create the directory if it doesn't exist
    const stylesDir = path.dirname(stylesPath);
    if (!fs.existsSync(stylesDir)) {
      fs.mkdirSync(stylesDir, { recursive: true });
    }
    
    console.log('📄 Creating new styles file:', stylesPath);
  } else {
    console.log('📄 Found styles file:', stylesPath);
  }
  
  // Read existing content
  let existingContent = '';
  if (fs.existsSync(stylesPath)) {
    existingContent = fs.readFileSync(stylesPath, 'utf8');
  }
  
  // Check if our CSS variables are already injected
  const markerStart = '/* Accounting Vue Plugin CSS Variable Overrides */';
  const markerEnd = '/* End Accounting Vue Plugin CSS Variable Overrides */';
  
  if (existingContent.includes(markerStart)) {
    console.log('🔄 CSS variables already exist, updating...');
    
    // Remove existing injection and add new one
    const startIndex = existingContent.indexOf(markerStart);
    const endIndex = existingContent.indexOf(markerEnd);
    
    if (startIndex !== -1 && endIndex !== -1) {
      const beforeInjection = existingContent.substring(0, startIndex);
      const afterInjection = existingContent.substring(endIndex + markerEnd.length);
      existingContent = beforeInjection + afterInjection;
    }
  }
  
  // Add our CSS variables at the end
  const updatedContent = existingContent + '\n' + CSS_VARIABLES_OVERRIDE;
  
  // Write the updated content
  fs.writeFileSync(stylesPath, updatedContent);
  console.log('✅ CSS variable overrides injected successfully!');
  console.log('📁 Updated file:', stylesPath);
  
  return stylesPath;
}

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
    targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'pages', 'accounting');
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

    // Inject CSS variables into host app's styles.css
    await injectCSSVariables();

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

    console.log('\n🎉 Installation completed successfully!');
    console.log('📁 Files copied to:', targetDir);

    // List copied directories
    if (fs.existsSync(path.join(targetDir, 'pages'))) {
      const pages = fs.readdirSync(path.join(targetDir, 'pages'));
      console.log('📝 Available pages:', pages.join(', '));
    }

    console.log('\n💡 Setup complete! The accounting components are ready to use.');
    console.log('🎨 CSS variable overrides have been automatically configured.');
    console.log('📝 You can now customize the components in the pages/ directory!');

  } catch (error) {
    console.error('❌ Error during manual copy:', error.message);
    console.error('Stack trace:', error.stack);
  }

  rl.close();
}

main();
