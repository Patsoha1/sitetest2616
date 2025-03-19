
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building project...');

// Create dist directory if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

try {
  // Run the TypeScript compiler
  console.log('Compiling TypeScript...');
  execSync('npx tsc --project tsconfig.json', { stdio: 'inherit' });
  
  // Copy CSS files
  console.log('Copying CSS files...');
  fs.copyFileSync('src/index.css', 'dist/index.css');
  
  // Copy public files to dist
  console.log('Copying public files...');
  const publicFiles = fs.readdirSync('public');
  publicFiles.forEach(file => {
    const sourcePath = path.join('public', file);
    const destPath = path.join('dist', file);
    
    if (fs.lstatSync(sourcePath).isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      
      const dirFiles = fs.readdirSync(sourcePath);
      dirFiles.forEach(dirFile => {
        fs.copyFileSync(
          path.join(sourcePath, dirFile),
          path.join(destPath, dirFile)
        );
      });
    } else {
      fs.copyFileSync(sourcePath, destPath);
    }
  });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
