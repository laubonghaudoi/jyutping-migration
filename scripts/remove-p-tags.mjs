import fs from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob'; // Assuming glob is installed

const contentDir = path.resolve('jyutping/_content'); // Point to the correct directory

async function findMdxFiles(dir) {
  const pattern = path.join(dir, '**/*.mdx').replace(/\\/g, '/'); // Ensure forward slashes for glob
  return glob(pattern);
}

async function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  const content = await fs.readFile(filePath, 'utf8'); // Changed let to const
  // let originalContent = content; // Unused
  let modified = false;

  // Regex to find opening <p> tags (potentially with attributes) and closing </p> tags
  const pOpenRegex = /<p(?:\s+[^>]*)?>/gi;
  const pCloseRegex = /<\/p>/gi;

  let newContent = content;

  // Remove opening tags
  newContent = newContent.replace(pOpenRegex, (match) => {
    console.log(`  [-] Removing opening tag: ${match} in ${path.basename(filePath)}`);
    modified = true;
    return ''; // Replace with empty string
  });

  // Remove closing tags
  newContent = newContent.replace(pCloseRegex, (match) => {
    console.log(`  [-] Removing closing tag: ${match} in ${path.basename(filePath)}`);
    modified = true; // Mark as modified even if only closing tags are found
    return ''; // Replace with empty string
  });

  // Optional: Clean up potential resulting double blank lines (more than two consecutive newlines)
  // newContent = newContent.replace(/\n{3,}/g, '\n\n');
  // if (newContent !== content.replace(pOpenRegex, '').replace(pCloseRegex, '')) {
  //     modified = true; // Mark modified if cleanup changed something
  // }


  if (modified) {
    console.log(`  [*] Writing changes to ${filePath}`);
    await fs.writeFile(filePath, newContent, 'utf8');
  } else {
    console.log(`  [=] No <p> tags found or removed in ${filePath}`);
  }
}

async function main() {
  try {
    // Check if glob is installed
    try {
      await import('glob');
    } catch {
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
