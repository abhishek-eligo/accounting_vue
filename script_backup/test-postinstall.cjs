#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Test function to simulate the postinstall script logic
function testPostinstallLogic() {
  console.log('🧪 Testing postinstall script logic...\n');

  // Test 1: Check if we can find the package root
  console.log('1. Testing package root detection...');
  let currentDir = process.cwd();
  let packageRoot = null;

  while (currentDir !== path.dirname(currentDir)) {
    const nodeModulesPath = path.join(currentDir, 'node_modules', '@abhishek_eligo', 'accounting_ecs');
    if (fs.existsSync(nodeModulesPath)) {
      packageRoot = nodeModulesPath;
      break;
    }
    currentDir = path.dirname(currentDir);
  }

  if (packageRoot) {
    console.log('   ✅ Package root found:', packageRoot);
  } else {
    console.log('   ❌ Package root not found (expected in development)');
  }

  // Test 2: Check if source directories exist
  console.log('\n2. Testing source directory detection...');
  if (packageRoot) {
    const sourcePagesDir = path.join(packageRoot, 'src', 'pages');
    const sourceComponentsDir = path.join(packageRoot, 'src', 'components');

    console.log('   Pages directory:', fs.existsSync(sourcePagesDir) ? '✅ Exists' : '❌ Missing');
    console.log('   Components directory:', fs.existsSync(sourceComponentsDir) ? '✅ Exists' : '❌ Missing');
  } else {
    // Test with current directory structure
    const sourcePagesDir = path.join(process.cwd(), 'src', 'pages');
    const sourceComponentsDir = path.join(process.cwd(), 'src', 'components');

    console.log('   Pages directory:', fs.existsSync(sourcePagesDir) ? '✅ Exists' : '❌ Missing');
    console.log('   Components directory:', fs.existsSync(sourceComponentsDir) ? '✅ Exists' : '❌ Missing');
  }

  // Test 3: Check if target directory would be created
  console.log('\n3. Testing target directory creation...');
  const targetDir = path.join(process.cwd(), 'resources', 'js', 'pages', 'admin', 'accounting');
  console.log('   Target directory would be:', targetDir);
  console.log('   Current working directory:', process.cwd());

  // Test 4: Simulate file listing
  console.log('\n4. Testing file listing simulation...');
  const sourcePagesDir = path.join(process.cwd(), 'src', 'pages');
  if (fs.existsSync(sourcePagesDir)) {
    const pages = fs.readdirSync(sourcePagesDir);
    console.log('   Found pages:');
    pages.forEach(page => {
      console.log(`     - ${page}`);
    });
  } else {
    console.log('   ❌ Source pages directory not found');
  }

  console.log('\n✅ Test completed!');
  console.log('💡 This test simulates the postinstall script logic without actually copying files.');
}

// Run the test
testPostinstallLogic();
