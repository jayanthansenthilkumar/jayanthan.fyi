const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('app', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;
    
    // Replace react-router Link
    content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+["']react-router["'];/g, 'import Link from "next/link";');
    content = content.replace(/import\s+\{\s*NavLink\s*\}\s+from\s+["']react-router["'];/g, 'import Link from "next/link";'); // Just change NavLink to Link if it's imported (will handle Next.js active links later)
    content = content.replace(/import\s+\{\s*Link\s*,\s*NavLink\s*\}\s+from\s+["']react-router["'];/g, 'import Link from "next/link";\nimport { usePathname } from "next/navigation";');
    
    // Replace <Link to="..."> with <Link href="...">
    content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
    
    // Remove Route types
    content = content.replace(/import\s+type\s+\{\s*Route\s*\}\s+from\s+["']\.\/\+types\/.*["'];\n?/g, '');
    
    // Remove react-router meta functions
    content = content.replace(/export\s+function\s+meta\(\{\s*\}\s*:\s*Route\.MetaArgs\)\s*\{[\s\S]*?\}\n/g, '');
    
    // Check if we need "use client"
    if ((content.includes('useState') || content.includes('useEffect') || content.includes('framer-motion') || content.includes('usePathname')) && !content.includes('"use client"')) {
      content = '"use client";\n\n' + content;
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log('Updated', filePath);
    }
  }
});
