import fs from 'fs-extra'; // fs-extra is not a built-in, keep as is
import path from 'node:path'; // Add node: prefix
import { glob } from 'glob'; // Use named import for glob
import matter from 'gray-matter';
// Remove unused import: import { promisify } from 'node:util';

// glob v9+ returns a promise directly, no need for promisify
// const globAsync = promisify(glob); // Remove promisify wrapper
const globAsync = glob; // Use glob directly

// Define paths relative to the script location
// Decode the pathname to handle spaces or other special characters correctly
const scriptPath = decodeURIComponent(new URL(import.meta.url).pathname);
const scriptDir = path.dirname(scriptPath);
const nextAppDir = path.resolve(scriptDir, '..'); // /Users/laufei/Documents/GitHub/jyutping migration/jyutping.org/nextjs-app
const hugoProjectDir = path.resolve(nextAppDir, '..'); // /Users/laufei/Documents/GitHub/jyutping migration/jyutping.org
const hugoContentDir = path.join(hugoProjectDir, 'content');
const nextContentDir = path.join(nextAppDir, '_content'); // Store transformed content here

// Locale mapping from Hugo dir to Next.js code
const localeMap = {
  'en': 'en',
  'vi': 'vi',
  'zh-yue-hant': 'yue',
  'zh-cmn-hant': 'cmn',
  'tw-nan-hant': 'nan',
  'zh-wuu-hant': 'wuu',
};

async function processFile(filePath, hugoLocaleDir) {
  const hugoLocale = path.basename(hugoLocaleDir);
  const nextLocale = localeMap[hugoLocale];
  if (!nextLocale) {
    console.warn(`Skipping unknown locale directory: ${hugoLocale}`);
    return;
  }

  console.log(`Processing [${hugoLocale} -> ${nextLocale}]: ${filePath}`);

  const rawContent = await fs.readFile(filePath, 'utf-8');
  // Use {delims: '+++'} to correctly parse TOML front matter if present
  const { data: frontmatter, content: hugoBody } = matter(rawContent, { delims: '+++' });

  // --- Transformations ---
  let processedBody = hugoBody;

  // 1. Replace specific shortcodes, adding newlines for <Alert>
  processedBody = processedBody.replace(/\{\{<\s*alert([^>]*)>\}\}/g, (match, args) => {
    const titleMatch = args.match(/title="([^"]*)"/);
    const colorMatch = args.match(/color="([^"]*)"/);
    const title = titleMatch ? ` title="${titleMatch[1]}"` : '';
    const color = colorMatch ? ` color="${colorMatch[1]}"` : '';
    // Add newlines before and after the opening tag for MDX block parsing
    return `\n\n<Alert${title}${color}>\n`;
  });
  // REMOVE the line that attempts to replace a closing alert shortcode, as it might not exist
  // processedBody = processedBody.replace(/\{\{\s*\/\s*alert\s*>\}\}/g, '\n</Alert>\n\n');
  processedBody = processedBody.replace(/\{\{<\s*audio\s+id="([^"]+)"\s*>\}\}/g, '<Audio id="$1" />');
  processedBody = processedBody.replace(/\{\{<\s*chartaudio\s*>\}\}/g, '\n<Chartaudio />\n'); // Add newlines for Chartaudio too

  // !! TEMPORARY FIX: Remove ALL OTHER Hugo shortcodes (both < and %) !!
  // A better long-term solution is to map these to React components.
  processedBody = processedBody.replace(/\{\{[<%][\s\S]*?[%>]\}\}/g, '');

  // 2. Remove <style> blocks
  processedBody = processedBody.replace(/<style[\s\S]*?<\/style>/gi, '');

  // 3. Handle HTML tables (Leave as raw HTML for now - requires rehype-raw or similar in MDX config)
  //    Future enhancement: Parse tables into structured data or JSX.

  // 4. Replace 'class=' with 'className=' for React compatibility (simple string replace)
  processedBody = processedBody.replace(/ class=/g, ' className=');

  // --- Output ---
  const relativePath = path.relative(hugoLocaleDir, filePath);
  // Change extension to .mdx, handle _index files
  const baseName = path.basename(relativePath, path.extname(relativePath));
  const dirName = path.dirname(relativePath);
  const outBaseName = baseName === '_index' ? 'index' : baseName; // Convert _index to index
  const outFileName = `${outBaseName}.mdx`;

  const outDir = path.join(nextContentDir, nextLocale, dirName);
  const outPath = path.join(outDir, outFileName);

  await fs.ensureDir(outDir);
  // Re-stringify frontmatter (ensure YAML delimiters) and combine with processed body
  const finalContent = matter.stringify(processedBody, frontmatter, {
    delimiters: '---', // Force YAML delimiters
  });
  await fs.writeFile(outPath, finalContent);
  console.log(`  -> Wrote ${outPath}`);
}

async function migrateContent() {
  console.log('Starting content migration...');
  await fs.remove(nextContentDir); // Clear previous migration attempts
  console.log(`Cleaned ${nextContentDir}`);

  for (const hugoLocale of Object.keys(localeMap)) {
    const hugoLocaleDir = path.join(hugoContentDir, hugoLocale);
    if (await fs.pathExists(hugoLocaleDir)) {
      console.log(`Scanning ${hugoLocaleDir}...`);
      // Find .md and .html files, including root _index files explicitly
      // Use a pattern that explicitly includes root _index files and other files
      const files = await globAsync('{_index.{md,html},**/*.{md,html}}', {
        cwd: hugoLocaleDir,
        nodir: true,
        // Remove '**/_*' to allow processing _index files
        ignore: ['**/.DS_Store'],
      });

      for (const file of files) {
        await processFile(path.join(hugoLocaleDir, file), hugoLocaleDir);
      }
    } else {
      console.warn(`Source directory not found, skipping: ${hugoLocaleDir}`);
    }
  }

  console.log('Content migration finished.');
}

migrateContent().catch(console.error);
