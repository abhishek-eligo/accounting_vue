#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple fallback postinstall script
function main() {
  console.log('🔄 Running fallback postinstall script...');
  
  try {
    // Get the current directory (should be the package root)
    const packageRoot = __dirname;
    const sourcePagesDir = path.join(packageRoot, '..', 'src', 'pages');
    const targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');
    
    console.log('📦 Package root:', packageRoot);
    console.log('📂 Source pages:', sourcePagesDir);
    console.log('📂 Target directory:', targetDir);
    
    // Check if source exists
    if (!fs.existsSync(sourcePagesDir)) {
      console.log('❌ Source pages directory not found');
      return;
    }
    
    // Create target directory
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    
    // Simple copy function
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
    copyDir(sourcePagesDir, path.join(targetDir, 'pages'));
    console.log('✅ Pages copied successfully');
    
    // Create simple README
    const readme = `# Accounting Components

This directory contains accounting components copied from @abhishek_eligo/accounting_ecs.

You can customize the components in the pages/ directory.

For more info: https://github.com/abhishek-eligo/accounting_vue
`;
    
    fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
    console.log('✅ README created');
    
    console.log('🎉 Fallback script completed successfully!');
    
  } catch (error) {
    console.error('❌ Fallback script error:', error.message);
  }
}

main(); 