#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple fallback postinstall script
function main() {
  console.log('🔄 Running fallback postinstall script...');
  console.log('📁 Current working directory:', process.cwd());
  console.log('📦 Script location:', __dirname);
  
  try {
    // Get the current directory (should be the package root)
    const packageRoot = __dirname;
    const sourcePagesDir = path.join(packageRoot, '..', 'src', 'pages');
    const sourceComponentsDir = path.join(packageRoot, '..', 'src', 'components');
    const targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');
    
    console.log('📦 Package root:', packageRoot);
    console.log('📂 Source pages:', sourcePagesDir);
    console.log('📂 Source components:', sourceComponentsDir);
    console.log('📂 Target directory:', targetDir);
    
    // Check if source exists
    if (!fs.existsSync(sourcePagesDir)) {
      console.log('❌ Source pages directory not found');
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
    console.log('📋 Copying pages directory...');
    copyDir(sourcePagesDir, path.join(targetDir, 'pages'));
    console.log('✅ Pages copied successfully');
    
    // Copy components if they exist
    if (fs.existsSync(sourceComponentsDir)) {
      console.log('📋 Copying components directory...');
      copyDir(sourceComponentsDir, path.join(targetDir, 'components'));
      console.log('✅ Components copied successfully');
    } else {
      console.log('⚠️  Source components directory not found, skipping...');
    }
    
    // Create simple README
    const readme = `# Accounting Components

This directory contains accounting components copied from @abhishek_eligo/accounting_ecs.

You can customize the components in the pages/ directory.

For more info: https://github.com/abhishek-eligo/accounting_vue
`;
    
    fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
    console.log('✅ README created');
    
    console.log('\n🎉 Fallback script completed successfully!');
    console.log('📁 Files copied to:', targetDir);
    
    // List copied directories
    if (fs.existsSync(path.join(targetDir, 'pages'))) {
      const pages = fs.readdirSync(path.join(targetDir, 'pages'));
      console.log('📝 Available pages:', pages.join(', '));
    }
    
  } catch (error) {
    console.error('❌ Fallback script error:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

main(); 