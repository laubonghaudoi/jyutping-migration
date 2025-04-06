import fs from 'node:fs/promises';
import path from 'node:path';

const contentDir = path.resolve('_content');

// Regex to find tables, trying to be careful about nested tables (though unlikely in MDX)
// It captures the content between <table> and </table>
const tableRegex = /<table([\s\S]*?)>([\s\S]*?)<\/table>/gi;
// Regex to find <tr> elements within the table content
const trRegex = /<tr([\s\S]*?)>([\s\S]*?)<\/tr>/gi;

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

function processTableContent(tableContent) {
  // Check if thead or tbody already exist
  if (/<thead[\s>]/i.test(tableContent) || /<tbody[\s>]/i.test(tableContent)) {
    return null; // Already structured, skip
  }

  const rows = [...tableContent.matchAll(trRegex)];
  if (rows.length === 0) {
    return null; // No rows found, skip
  }

  // Extract the full match for each row
  const rowStrings = rows.map(match => match[0]);

  const firstRow = rowStrings[0];
  const remainingRows = rowStrings.slice(1);

  // Basic indentation for readability (assuming table content starts indented)
  const indentMatch = tableContent.match(/^\s*/);
  const indent = indentMatch ? indentMatch[0] : '  '; // Default to 2 spaces if no indent found

  let newTableContent = `\n${indent}<thead>\n${indent}  ${firstRow}\n${indent}</thead>`;

  if (remainingRows.length > 0) {
    newTableContent += `\n${indent}<tbody>\n${indent}  ${remainingRows.join(`\n${indent}  `)}\n${indent}</tbody>`;
  }
  newTableContent += `\n${tableContent.match(/\s*$/)[0]}`; // Preserve trailing whitespace/newlines

  return newTableContent;
}


async function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  let content = await fs.readFile(filePath, 'utf8');
  // let originalContent = content; // Unused
  let modified = false;

  content = content.replace(tableRegex, (fullMatch, tableAttrs, tableContent) => {
    const processedContent = processTableContent(tableContent);
    if (processedContent !== null) {
      console.log(`  [+] Modifying table structure in ${filePath}`);
      modified = true;
      // Reconstruct the table tag with original attributes
      return `<table${tableAttrs}>${processedContent}</table>`;
    }
    // If processTableContent returned null, return the original match
    return fullMatch;
  });


  if (modified) {
    console.log(`  [*] Writing changes to ${filePath}`);
    await fs.writeFile(filePath, content, 'utf8');
  } else {
    console.log(`  [=] No table structure changes needed for ${filePath}`);
  }
}

async function main() {
  try {
    const mdxFiles = await findMdxFiles(contentDir);
    console.log(`Found ${mdxFiles.length} .mdx files.`);
    for (const file of mdxFiles) {
      // Reset regex state for each file if needed (though replace handles this)
      // tableRegex.lastIndex = 0;
      await processFile(file);
    }
    console.log('Finished processing files.');
  } catch (error) {
    console.error('Error processing files:', error);
    process.exit(1);
  }
}

main();
