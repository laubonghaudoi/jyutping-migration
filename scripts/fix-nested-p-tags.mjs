import fs from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob'; // Assuming glob is installed, if not: npm install glob

const contentDir = path.resolve('jyutping/_content'); // Point to the correct directory

async function findMdxFiles(dir) {
  const pattern = path.join(dir, '**/*.mdx').replace(/\\/g, '/'); // Ensure forward slashes for glob
  return glob(pattern);
}

async function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  let content = await fs.readFile(filePath, 'utf8');
  // let originalContent = content; // Unused
  let modified = false;

  // 1. Replace <p class="lead">...</p> with <div class="lead">...</div>
  // This regex attempts to match the opening and corresponding closing tag.
  // It's not foolproof for deeply nested/complex cases but should work for simple ones.
  content = content.replace(/<p\s+className="lead"\s*>([\s\S]*?)<\/p>/gi, (match, innerContent) => {
    console.log(`  [+] Replacing <p class="lead"> with <div class="lead"> in ${path.basename(filePath)}`);
    modified = true;
    // Basic check to avoid replacing if innerContent itself contains <p> which might indicate more complex nesting
    if (/<p[\s>]/.test(innerContent)) {
      console.warn(`  [!] Skipping replacement for <p class="lead"> due to potential nested <p> in inner content. Manual review recommended.`);
      return match; // Return original match if complex nesting detected
    }
    return `<div className="lead">${innerContent}</div>`;
  });

  // 2. Remove <p> tags incorrectly wrapping heading tags (h1-h6)
  // This causes hydration errors in React/Next.js
  const nestedHeadingRegex = /<p>\s*(<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>)\s*<\/p>/gi;
  if (nestedHeadingRegex.test(content)) {
    console.log(`  [+] Removing <p> tags wrapping headings in ${path.basename(filePath)}`);
    content = content.replace(nestedHeadingRegex, '$1'); // Replace with just the heading tag
    modified = true;
  }


  // 3. Ensure blank lines around <Alert> tags
  // Add blank line before <Alert> if missing
  content = content.replace(/([^\n])\n(<Alert[\s>])/gi, (match, charBefore, alertTag) => {
    console.log(`  [+] Adding blank line before ${alertTag.split('>')[0]}> in ${path.basename(filePath)}`);
    modified = true;
    return `${charBefore}\n\n${alertTag}`;
  });
  // Add blank line after </Alert> if missing
  // Ensure we don't match the end of the file
  content = content.replace(/(<\/Alert>)\n([^\n\s])/gi, (match, alertTag, charAfter) => {
    console.log(`  [+] Adding blank line after ${alertTag} in ${path.basename(filePath)}`);
    modified = true;
    return `${alertTag}\n\n${charAfter}`;
  });


  if (modified) {
    console.log(`  [*] Writing changes to ${filePath}`);
    await fs.writeFile(filePath, content, 'utf8');
  } else {
    console.log(`  [=] No changes needed for ${filePath}`);
  }
}

async function main() {
  try {
    // Check if glob is installed
    try {
      await import('glob');
    } catch { // Removed unused 'e' variable
      console.error("Error: 'glob' package not found. Please install it: npm install glob");
      process.exit(1);
    }

    const mdxFiles = await findMdxFiles(contentDir);
    console.log(`Found ${mdxFiles.length} .mdx files.`);
    if (mdxFiles.length === 0) {
      console.log("No .mdx files found in _content directory.");
      return;
    }
    for (const file of mdxFiles) {
      await processFile(file);
    }
    console.log('Finished processing files.');
  } catch (error) {
    console.error('Error processing files:', error);
    process.exit(1);
  }
}

main();
