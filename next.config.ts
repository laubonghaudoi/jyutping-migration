import type { NextConfig } from "next";
// Re-enable MDX plugin import
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  // Re-enable mdx page extension
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // Remove unsupported i18n block for App Router
  // i18n: {
  //   locales: ["en", "vi", "yue", "cmn", "nan", "wuu"],
  //   defaultLocale: "yue",
  //   localeDetection: false, // Rely on path prefix
  // },
  // Optionally configure MDX options if needed
  // experimental: {
  //   mdxRs: true, // Use Rust-based MDX compiler (faster)
  // },
};

// import rehypeRaw from "rehype-raw"; // Removed unused import
import remarkGfm from "remark-gfm"; // Import remark-gfm
// Remove rehype-react import
// import rehypeReact from "rehype-react";

// Re-enable MDX plugin wrapper
const withMDX = createMDX({
  // Add MDX options here, if needed
  options: {
    remarkPlugins: [remarkGfm], // Add remark-gfm here
    rehypePlugins: [], // Removed rehype-raw as it's handled in page.tsx for next-mdx-remote
  },
});

// Export the wrapped config object
export default withMDX(nextConfig);
