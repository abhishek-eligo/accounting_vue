# Installation Troubleshooting

This guide helps resolve common installation issues with the accounting_vue plugin.

## Common Issues

### 1. Postinstall Script Not Found

**Error:**
```
Error: Cannot find module '/path/to/node_modules/@abhishek_eligo/accounting_ecs/scripts/postinstall.cjs'
```

**Solution:**
The scripts directory might not be included in the package. Try these steps:

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Remove node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Install with verbose logging:**
   ```bash
   npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy --verbose
   ```

### 2. Manual Installation

If the automatic postinstall script fails, you can manually copy the files:

```bash
# Navigate to your project root
cd /path/to/your/project

# Create the target directory
mkdir -p resources/js/pages/admin/accounting

# Copy pages from node_modules
cp -r node_modules/@abhishek_eligo/accounting_ecs/src/pages resources/js/pages/admin/accounting/pages

# Copy components for reference
cp -r node_modules/@abhishek_eligo/accounting_ecs/src/components resources/js/pages/admin/accounting/components

# Create a simple README
cat > resources/js/pages/admin/accounting/README.md << 'EOF'
# Accounting Components

This directory contains accounting components copied from @abhishek_eligo/accounting_ecs.

You can customize the components in the pages/ directory.

For more info: https://github.com/abhishek-eligo/accounting_vue
EOF
```

### 3. Permission Issues

**Error:**
```
EACCES: permission denied
```

**Solution:**
```bash
# Fix npm permissions
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

# Or use nvm to avoid permission issues
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node
```

### 4. Network Issues

**Error:**
```
npm ERR! fetch failed
```

**Solution:**
```bash
# Try with different registry
npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy --registry=https://registry.npmjs.org/

# Or use yarn
yarn add git+https://github.com/abhishek-eligo/accounting_vue.git#dummy
```

### 5. Version Conflicts

**Error:**
```
npm ERR! ERESOLVE overriding peer dependency
```

**Solution:**
```bash
# Install with force flag
npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy --force

# Or use legacy peer deps
npm install git+https://github.com/abhishek-eligo/accounting_vue.git#dummy --legacy-peer-deps
```

## Verification

After installation, verify that the files were copied correctly:

```bash
# Check if the accounting directory exists
ls -la resources/js/pages/admin/accounting/

# Check if pages were copied
ls -la resources/js/pages/admin/accounting/pages/

# Check if components were copied
ls -la resources/js/pages/admin/accounting/components/
```

## Expected Output

You should see output similar to this during installation:

```
🚀 Starting accounting_vue postinstall script...
📁 Current working directory: /path/to/your/project
✅ Host app detected, proceeding with file copy...
📦 Package root found: /path/to/your/project/node_modules/@abhishek_eligo/accounting_ecs
📂 Source pages directory: /path/to/your/project/node_modules/@abhishek_eligo/accounting_ecs/src/pages
📂 Target directory: /path/to/your/project/resources/js/pages/admin/accounting
✅ Source pages directory exists
📁 Created target directory
📋 Copying pages directory...
✅ Pages directory copied successfully
📋 Copying components directory...
✅ Components directory copied successfully
📝 Creating README file...
✅ README file created

🎉 Accounting components copied successfully!
📁 Pages available at: /path/to/your/project/resources/js/pages/admin/accounting/pages
🔧 Source components available at: /path/to/your/project/resources/js/pages/admin/accounting/components

📝 Available pages:
   - allentries
   - balancesheet
   - customers
   - dashboard
   - groups&ledgers
   - gstreports
   - gstsummary
   - invoicepreview
   - invoicereturn
   - ledgers
   - profit&loss
   - purchasebills
   - role&permission
   - salesinvoice
   - settings
   - table
   - ui
   - vendors

💡 You can now:
   • Modify components in the pages/ directory
   • Use v-model, props, and events
   • Add custom styling and logic
   • Reference source components for implementation details

📖 Check the README.md file in the accounting directory for more details!
```

## Getting Help

If you're still experiencing issues:

1. **Check the logs:** Look at the npm debug log for more details
2. **Try the fallback script:** The package includes a fallback postinstall script
3. **Manual installation:** Use the manual steps above
4. **Report issues:** Create an issue on the GitHub repository with:
   - Your Node.js version (`node --version`)
   - Your npm version (`npm --version`)
   - Your operating system
   - The complete error message
   - The contents of your package.json

## Alternative Installation Methods

### Using Yarn
```bash
yarn add git+https://github.com/abhishek-eligo/accounting_vue.git#dummy
```

### Using pnpm
```bash
pnpm add git+https://github.com/abhishek-eligo/accounting_vue.git#dummy
```

### Direct Download
If all else fails, you can download the repository directly:
```bash
git clone https://github.com/abhishek-eligo/accounting_vue.git
cd accounting_vue
git checkout dummy
# Then manually copy the src/pages and src/components directories
``` 