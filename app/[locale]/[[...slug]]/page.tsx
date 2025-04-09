import { promises as fs } from "node:fs";
import path from "node:path";
import { glob } from "glob";
import matter from "gray-matter";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc"; // Import RSC version
import Link from "next/link"; // Import Link for internal navigation
import React from "react"; // Import React
import rehypeRaw from "rehype-raw"; // Import rehype-raw
import remarkGfm from "remark-gfm"; // Re-import remark-gfm

import AboutPage from "@/components/AboutPage"; // Import generic About page
import Alert from "@/components/Alert";
import Audio from "@/components/Audio";
import BlogPage from "@/components/BlogPage"; // Import generic Blog page
import Chartaudio from "@/components/Chartaudio";
import JyutpingPage from "@/components/JyutpingPage"; // Import generic Jyutping page
import KeyboardPage from "@/components/KeyboardPage"; // Import generic Keyboard page
import SampleText from "@/components/SampleText"; // Import the SampleText component
import TableOfContents from "@/components/TableOfContents"; // Import the TOC component
import CmnIndexPage from "@/components/index-pages/CmnIndexPage";
import EnIndexPage from "@/components/index-pages/EnIndexPage";
import NanIndexPage from "@/components/index-pages/NanIndexPage";
import ViIndexPage from "@/components/index-pages/ViIndexPage";
import WuuIndexPage from "@/components/index-pages/WuuIndexPage";
import YueIndexPage from "@/components/index-pages/YueIndexPage";
// Import other components like table renderers if created

const contentDir = path.join(process.cwd(), "_content");

// Map locales to their index page components
const IndexPageComponents: { [key: string]: React.FC } = {
  yue: YueIndexPage,
  en: EnIndexPage,
  cmn: CmnIndexPage,
  nan: NanIndexPage,
  vi: ViIndexPage,
  wuu: WuuIndexPage,
};

// Define the components available to MDX
const components = {
  Alert,
  Audio,
  Chartaudio,
  SampleText, // Add SampleText to the components mapping
  // Re-add basic styling for common elements as a workaround
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold my-8" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold my-8" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold my-6" {...props} /> // Added h3 styling
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold my-6" {...props} /> // Added h3 styling
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-semibold my-6" {...props} /> // Added h3 styling
  ),
  // Removed custom 'p' component mapping to avoid double nesting causing hydration errors.
  // Style paragraphs globally via CSS if needed (e.g., in globals.css targeting 'article p').
  // Add other components here
  // Example: pre: (props) => <pre className="bg-gray-100 p-2 rounded" {...props} />,
  // Custom 'a' component to handle internal vs external links
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, children, ...rest } = props; // Destructure props

    // Check if children is a paragraph element potentially added by MDX
    let linkContent = children;
    // Check if children is a valid React element, specifically a 'p' tag, and has props and children
    if (
      React.isValidElement(children) &&
      typeof children.type === "string" &&
      children.type.toLowerCase() === "p" &&
      typeof children.props === "object" && // Ensure props is an object
      children.props !== null && // Ensure props is not null
      "children" in children.props // Ensure children exists in props
    ) {
      // If children is <p>...</p>, use its children directly, asserting as ReactNode
      linkContent = children.props.children as React.ReactNode;
    }

    if (href && (href.startsWith("/") || href.startsWith("#"))) {
      // Internal link or hash link
      return (
        <Link href={href} {...rest}>
          {linkContent}
        </Link>
      );
    }
    // External link
    return (
      <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
        {linkContent}
      </a>
    );
  },
};

// --- Generate Static Paths ---
export async function generateStaticParams() {
  const files = await glob("**/*.mdx", { cwd: contentDir });
  const params = files.map((file) => {
    const parts = file.split(path.sep);
    const locale = parts[0];
    const slug =
      parts
        .slice(1)
        .join("/")
        .replace(/\.mdx$/, "")
        .replace(/index$/, "") || undefined;
    // Ensure slug is an array or undefined for [[...slug]]
    const slugArray = slug ? slug.split("/") : undefined;
    return { locale, slug: slugArray };
  });
  // console.log("Generated params:", JSON.stringify(params, null, 2));
  return params;
}

// --- Fetch Page Content ---
async function getPageContent(locale: string, slug: string[] | undefined) {
  const slugPath = slug ? slug.join("/") : "index";
  let filePath = path.join(contentDir, locale, `${slugPath}.mdx`); // Default to direct path

  try {
    // Try accessing the direct path first (e.g., about.mdx)
    await fs.access(filePath);
  } catch (error) {
    // If direct path fails, try the index path inside a directory (e.g., learn/index.mdx)
    const indexPath = path.join(contentDir, locale, slugPath, "index.mdx");
    try {
      await fs.access(indexPath);
      filePath = indexPath; // Update filePath to use the index file
    } catch (indexError) {
      // If both direct and index paths fail
      console.error(
        `Error accessing file for ${locale}/${slugPath}: Neither direct path nor index path found.`,
        error, // Log original error
        indexError // Log index path error
      );
      return null;
    }
  }

  // Now read the confirmed filePath
  try {
    const source = await fs.readFile(filePath, "utf-8");
    const { content, data } = matter(source);
    return { source: content, frontmatter: data };
  } catch (readError) {
    // Handle potential read errors even after access check
    console.error(`Error reading file content for ${filePath}:`, readError);
    return null;
  }
}

// Define a type for the resolved params shape
type ResolvedParams = {
  locale: string;
  slug: string[] | undefined;
};

// Define a type for the props passed to Page and generateMetadata
type PageAndMetadataProps = {
  params: Promise<ResolvedParams>; // Params is a Promise
};

// --- Generate Metadata (Optional but Recommended) ---
export async function generateMetadata({
  params,
}: PageAndMetadataProps): Promise<Metadata> {
  // Use the defined type
  const awaitedParams = await params; // Await the Promise
  const { locale, slug } = awaitedParams; // Destructure awaited params

  // Handle metadata for index pages
  if (!slug || slug.length === 0) {
    // Provide default metadata for known index pages
    switch (locale) {
      case "yue":
        return { title: "粵拼", description: "標準粵語拼音方案" };
      case "en":
        return {
          title: "Jyutping",
          description: "The Standard Cantonese Romanization Scheme",
        };
      case "cmn":
        return { title: "粤拼", description: "通行粤语拼音方案" };
      case "nan":
        return {
          title: "粵拼",
          description: "標準粵語拼音方案",
        }; // Placeholder
      case "vi":
        return {
          title: "Việt bính",
          description: "Placeholder Vi Description",
        }; // Placeholder
      case "wuu":
        return {
          title: "粤拼",
          description: "標準粵語拼音方案",
        }; // Placeholder
      default:
        return { title: "Jyutping Index" }; // Fallback for unknown index locale
    }
  }

  // --- Specific Metadata for Migrated Pages ---
  // Check for the specific /yue/jyutping or /en/jyutping route
  if (slug && slug.length === 1 && slug[0] === "jyutping") {
    if (locale === "yue") {
      return {
        title: "LSHK 粵拼方案", // Or a more specific title if available
        description: "香港語言學學會粵語拼音方案",
      };
    }
    if (locale === "en") {
      return {
        title: "LSHK Jyutping Scheme", // Or a more specific title if available
        description:
          "The Linguistic Society of Hong Kong Cantonese Romanization Scheme",
      };
    }
    if (locale === "vi") {
      return {
        title: "LSHK Phương pháp Việt bính", // Or a more specific title
        description:
          "Phương pháp phiên âm tiếng Quảng Đông của Hội học thuật ngôn ngữ học Hồng Kông",
      };
    }
    if (locale === "wuu") {
      return {
        title: "LSHK 粤拼方案", // Or a more specific title
        description: "香港语言学学会粤语拼音方案", // Placeholder description
      };
    }
    if (locale === "nan") {
      return {
        title: "LSHK 粵拼方案", // Or a more specific title
        description: "香港語言學學會粵語拼音方案", // Placeholder description
      };
    }
    if (locale === "cmn") {
      return {
        title: "LSHK 粤拼方案", // Or a more specific title
        description: "香港语言学学会粤语拼音方案", // Placeholder description
      };
    }
    // Add other locales if they also have migrated jyutping pages
  }

  // Check for the specific /about route
  if (slug && slug.length === 1 && slug[0] === "about") {
    // Provide metadata for about pages based on locale
    switch (locale) {
      case "yue":
        return { title: "關於", description: "關於 Jyutping.org" };
      case "en":
        return { title: "About", description: "About Jyutping.org" };
      case "cmn":
        return { title: "关于", description: "关于 Jyutping.org" };
      case "nan":
        return { title: "關於", description: "關於 Jyutping.org" };
      case "vi":
        return { title: "Liên lạc", description: "Về Jyutping.org" };
      case "wuu":
        return { title: "关于", description: "关于 Jyutping.org" };
      default:
        return { title: "關於" };
    }
  }

  // Check for the specific /keyboard route
  if (slug && slug.length === 1 && slug[0] === "keyboard") {
    // Provide metadata for keyboard pages based on locale
    switch (locale) {
      case "yue":
        return { title: "粵語輸入法", description: "粵語輸入法工具" };
      case "en":
        return {
          title: "Cantonese Keyboard",
          description: "Cantonese Keyboard Tools",
        };
      case "cmn":
        return { title: "粤语输入法", description: "粤语输入法工具" };
      case "nan":
        return { title: "粵語輸入法 (Nan)", description: "粵語輸入法工具" };
      case "vi":
        return {
          title: "Bàn phím tiếng Quảng Đông",
          description: "Công cụ bàn phím tiếng Quảng Đông",
        };
      case "wuu":
        return { title: "粤语输入法 (Wuu)", description: "粤语输入法工具" };
      default:
        return { title: "Keyboard" }; // Fallback
    }
  }

  // Check for the specific /blog route
  if (slug && slug.length === 1 && slug[0] === "blog") {
    switch (locale) {
      case "yue":
        return { title: "文集", description: "Jyutping.org 文集" };
      case "en":
        return { title: "Blog", description: "Jyutping.org Blog" };
      case "cmn":
        return { title: "文集", description: "Jyutping.org 文集" };
      case "nan":
        return { title: "文集 (Nan)", description: "Jyutping.org 文集" };
      case "vi":
        return { title: "Tập văn", description: "Jyutping.org Tập văn" };
      case "wuu":
        return { title: "文集 (Wuu)", description: "Jyutping.org 文集" };
      default:
        return { title: "Blog" }; // Fallback
    }
  }

  // --- Default Metadata Fetching ---
  // For other non-index pages, fetch content and use frontmatter
  const content = await getPageContent(locale, slug);
  if (!content) {
    return { title: "Page Not Found" }; // Keep this fallback
  }
  return {
    title: content.frontmatter.title || "粵拼 Jyutping",
    description: content.frontmatter.description || "粵拼 Jyutping",
    // Add other metadata from frontmatter if needed
  };
}

// --- Page Component ---
export default async function Page({ params }: PageAndMetadataProps) {
  // Use the defined type
  const awaitedParams = await params; // Await the Promise
  const { locale, slug } = awaitedParams; // Destructure awaited params

  // Add validation for locale before reading file
  const validLocales = ["en", "vi", "yue", "cmn", "nan", "wuu"]; // Add commas
  if (!validLocales.includes(locale)) {
    // Handle invalid locale - maybe return 404 or redirect
    // For now, return simple message
    return <div>Invalid locale specified.</div>;
  }

  // Check if it's an index page (no slug)
  if (!slug || slug.length === 0) {
    const IndexComponent = IndexPageComponents[locale];
    if (IndexComponent) {
      // Apply container constraints to index pages
      return (
        <div className="max-w-none bg-[#1678d3] text-white">
          <article className="max-w-6xl mx-auto px-4 py-8 container">
            <IndexComponent />
          </article>
        </div>
      );
    }
    // Handle case where locale is valid but no index component exists (shouldn't happen now)
    // This part is reached only if IndexComponent is falsy for the given locale.
    return <div>Index page not found for this locale.</div>;
  }

  // --- Specific Page Component Rendering ---
  // Check for the specific /jyutping route
  if (slug && slug.length === 1 && slug[0] === "jyutping") {
    // Render the full-width title block first, then the content grid
    return (
      <>
        {/* Full-width title block */}
        <div className="bg-[#1678d3] text-white py-6 px-4 mb-6">
          {/* Responsive H1 with increased line spacing */}
          <h1 className="font-chiron my-4 text-5xl md:text-6xl leading-relaxed text-center container max-w-8xl mx-auto">
            粵拼：香港語言學學會粵語拼音方案
          </h1>
          {/* Responsive H1 with increased line spacing */}
          <h1 className="chiron-font my-8 text-3xl md:text-4xl text-center container max-w-8xl mx-auto">
            Jyutping: The Linguistic Society of Hong Kong <br /> Cantonese
            Romanization Scheme
          </h1>
        </div>

        {/* Content Grid - Apply container constraints here */}
        <div className="container mx-auto max-w-6xl grid grid-cols-10 gap-x-8 w-full px-4 py-8">
          {/* Left spacer column for centering main content on larger screens */}
          <div className="col-span-1 hidden lg:block" />

          {/* Main content column */}
          <article className="col-span-10 lg:col-span-7">
            <JyutpingPage locale={locale} /> {/* Use generic component */}
          </article>

          {/* TOC column */}
          {/* Removed sticky, top-8, overflow-x-hidden. Sticky is handled inside TOC. */}
          <aside className="col-span-2 hidden my-8 lg:block">
            <TableOfContents />
          </aside>
        </div>
      </>
    );
  }

  // --- Specific Page Component Rendering for /about ---
  if (slug && slug.length === 1 && slug[0] === "about") {
    // Use the new generic AboutPage component, passing the locale
    return (
      <>
        <h1 className="mx-auto font-bold text-6xl text-center py-32 text-white bg-[#1678d3]">
          jyutping.org
        </h1>

        <article className="container mx-auto max-w-6xl px-4 py-8">
          <AboutPage locale={locale} />
        </article>
      </>
    );
  }

  // --- Specific Page Component Rendering for /keyboard ---
  if (slug && slug.length === 1 && slug[0] === "keyboard") {
    // Use the new generic KeyboardPage component, passing the locale
    return (
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <article>
          <KeyboardPage locale={locale} />
        </article>
      </div>
    );
  }

  // --- Specific Page Component Rendering for /blog ---
  if (slug && slug.length === 1 && slug[0] === "blog") {
    // Use the new generic BlogPage component, passing the locale
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <article>
          <BlogPage locale={locale} />
        </article>
      </div>
    );
  }

  // --- Default MDX Content Rendering ---
  // If it's not an index, jyutping, about, keyboard, or blog page, fetch and render MDX content
  const content = await getPageContent(locale, slug);

  if (!content) {
    // TODO: Implement a proper 404 page component
    return <div>Page not found.</div>;
  }

  // Main container for content and potential TOC - Wrapped in centered container
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-10 px-4 py-8">
        {/* Article takes full width below lg screens, 9/10 on lg+ */}
        <article className="w-full col-span-10 lg:col-span-9">
          {content.frontmatter.title && slug !== undefined && (
            <h1 className="text-3xl font-bold my-8">
              {content.frontmatter.title}
            </h1>
          )}
          <MDXRemote
            source={content.source}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypeRaw,
                    {
                      passThrough: [
                        "mdxjsEsm",
                        "mdxFlowExpression",
                        "mdxTextExpression",
                        "mdxJsxFlowElement",
                        "mdxJsxTextElement", // Add this line too
                      ],
                    },
                  ],
                ], // Add rehype-raw here
              },
            }}
          />
        </article>
        {/* TOC column for default MDX pages - hidden below lg */}
        <aside className="hidden lg:block lg:col-span-1 my-8">
          {/* Use 1 column, ensure visibility */}
          <TableOfContents />
        </aside>
      </div>
    </div>
  );
}

// Revalidate pages if content changes (optional, adjust as needed)
// export const revalidate = 60; // Revalidate every 60 seconds
