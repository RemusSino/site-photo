const fs = require('fs');
const path = require('path');

// Function to copy CSS files from .next/static to out/styles.css
function extractCss() {
  console.log('Extracting CSS for static deployment...');
  
  // Create destination directory if it doesn't exist
  if (!fs.existsSync('out')) {
    fs.mkdirSync('out');
  }
  
  // Find CSS files in the .next/static/css directory
  const cssDir = path.join('.next', 'static', 'css');
  if (!fs.existsSync(cssDir)) {
    console.error('No CSS directory found in .next/static. Did the build complete successfully?');
    return;
  }
  
  // Read all CSS files in the directory
  const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
  if (cssFiles.length === 0) {
    console.error('No CSS files found in .next/static/css');
    return;
  }
  
  // Combine all CSS files
  let combinedCss = '';
  for (const file of cssFiles) {
    console.log(`Processing CSS file: ${file}`);
    const filePath = path.join(cssDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    combinedCss += content + '\n';
  }
  
  // Write combined CSS to output file
  const outputPath = path.join('out', 'styles.css');
  fs.writeFileSync(outputPath, combinedCss);
  
  console.log(`CSS extracted to ${outputPath}`);
  
  // Copy _document.html to index.html if needed
  const documentPath = path.join('public', '_document.html');
  if (fs.existsSync(documentPath)) {
    const documentTemplate = fs.readFileSync(documentPath, 'utf8');
    const indexPath = path.join('out', 'document-template.html');
    fs.writeFileSync(indexPath, documentTemplate);
    console.log(`Document template copied to ${indexPath}`);
  }
}

// Run the function
extractCss(); 