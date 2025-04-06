import fs from 'node:fs/promises';
import path from 'node:path';

const contentDir = path.resolve('_content');
const alertOpenTagRegex = /<Alert(?:\s+[^>]*)?>/g;
const alertCloseTag = '</Alert>';
const blockEndRegex = /(\n\s*\n|\n#+|\n<[A-Z])/; // Blank line, heading, or another component

async function findMdxFiles(dir) {
  let results = [];
  const list = await fs.readdir(dir, { withFileTypes: true });
  for (const dirent of list) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      results = results.concat(await findMdxFiles(res));
    } else if (dirent.isFile() && res.endsWith('.mdx')) {
      results.push(res);
    }
  }
  return results;
}

async function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  let content = await fs.readFile(filePath, 'utf8');
  // let originalContent = content; // Unused
  let match;
  // let lastIndex = 0; // Unused
  let modified = false;

  // Reset regex state for each file
  alertOpenTagRegex.lastIndex = 0;

  // Refactored loop to avoid assignment in condition
  while (true) {
    match = alertOpenTagRegex.exec(content);
    if (match === null) {
      break; // Exit loop when no more matches are found
    }

    // Check if the matched tag is self-closing
    if (match[0].endsWith('/>')) {
      console.log(`  [-] Skipping self-closing tag at index ${match.index}.`);
      continue; // Move to the next match
    }

    const openTagIndex = match.index;
    const afterOpenTagIndex = alertOpenTagRegex.lastIndex;

    // Look for the closing tag or the end of the block *after* the current open tag
    const searchArea = content.substring(afterOpenTagIndex);
    const closeTagIndex = searchArea.indexOf(alertCloseTag);
    const blockEndMatch = searchArea.match(blockEndRegex);
    const blockEndIndex = blockEndMatch ? blockEndMatch.index : -1;

    // Check if a closing tag exists *before* the next block end
    if (closeTagIndex === -1 || (blockEndIndex !== -1 && blockEndIndex < closeTagIndex)) {
      // Missing or misplaced closing tag
      let insertIndex;
      if (blockEndIndex !== -1) {
        // Insert before the block end marker
        insertIndex = afterOpenTagIndex + blockEndIndex;
        // Adjust if the block end marker is preceded by whitespace
        const precedingWhitespaceMatch = searchArea.substring(0, blockEndIndex).match(/\s*$/);
        if (precedingWhitespaceMatch) {
          insertIndex = afterOpenTagIndex + precedingWhitespaceMatch.index;
        }
      } else {
        // No block end found, insert at the end of the file (or search area)
        insertIndex = content.length; // Insert at the very end relative to original content
      }

      // Removed the check that skipped insertion if insertIndex <= afterOpenTagIndex

      console.log(`  [+] Missing closing tag found after index ${openTagIndex}. Inserting at index ${insertIndex}.`);
      content = `${content.slice(0, insertIndex)}\n${alertCloseTag}\n${content.slice(insertIndex)}`;
      modified = true;

      // Adjust regex lastIndex due to content modification
      alertOpenTagRegex.lastIndex = insertIndex + alertCloseTag.length + 2; // +2 for newlines
    } else {
      console.log(`  [-] Closing tag found for tag at index ${openTagIndex}.`);
      // Move past the found closing tag
      alertOpenTagRegex.lastIndex = afterOpenTagIndex + closeTagIndex + alertCloseTag.length;
    }
  }

  if (modified) {
    console.log(`  [*] Writing changes to ${filePath}`);
    await fs.writeFile(filePath, content, 'utf8');
  } else {
    console.log(`  [=] No changes needed for ${filePath}`);
  }
}

async function main() {
  try {
    const mdxFiles = await findMdxFiles(contentDir);
    console.log(`Found ${mdxFiles.length} .mdx files.`);
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
