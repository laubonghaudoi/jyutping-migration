import { promises as fs } from "node:fs";
import path from "node:path";
import { glob } from "glob";
import matter from "gray-matter";
import Link from "next/link";
import type React from "react";
import { IconArrowRight } from "@tabler/icons-react";

const contentDir = path.join(process.cwd(), "_content");

interface BlogPost {
  title: string;
  slug: string;
  description?: string;
}

// Define translations for static text
const translations: Record<
  string,
  { title: string; readMore: string; noPosts: string }
> = {
  en: { title: "Blog", readMore: "Read more", noPosts: "No posts found yet." },
  yue: { title: "文章", readMore: "閱讀全文", noPosts: "暫時冇文章。" },
  cmn: { title: "文章", readMore: "閲讀全文", noPosts: "暂無文章。" },
  nan: { title: "文章", readMore: "讀全文", noPosts: "猶未有文。" },
  wuu: { title: "博客", readMore: "阅读全文", noPosts: "暂无博文。" },
  vi: { title: "Blog", readMore: "Đọc thêm", noPosts: "Chưa có bài viết nào." },
  // Add other locales as needed
};

// Modified function to accept locale
async function getBlogPosts(locale: string): Promise<BlogPost[]> {
  const blogDir = path.join(contentDir, locale, "blog");
  try {
    const files = await glob("**/*.mdx", { cwd: blogDir });
    const posts: BlogPost[] = [];

    for (const file of files) {
      if (file === "index.mdx") {
        continue;
      }

      const filePath = path.join(blogDir, file);
      try {
        const source = await fs.readFile(filePath, "utf-8");
        const { data } = matter(source);
        const title = data.title || "Untitled Post";
        const description = data.description;
        const slugPath = file.replace(/\.mdx$/, "");
        const slug = `/${locale}/blog/${slugPath}`; // Use dynamic locale
        posts.push({ title, slug, description });
      } catch (readError) {
        console.error(`Error reading or parsing file ${filePath}:`, readError);
      }
    }
    posts.sort((a, b) => a.title.localeCompare(b.title));
    return posts;
  } catch (error) {
    console.error(`Error finding blog posts in ${blogDir}:`, error);
    return [];
  }
}

interface BlogPageProps {
  locale: string;
}

const BlogPage: React.FC<BlogPageProps> = async ({ locale }) => {
  const posts = await getBlogPosts(locale);
  const t = translations[locale] || translations.en; // Fallback to English if locale not found

  return (
    <>
      <h1 className="text-3xl font-bold my-8">{t.title}</h1>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="block p-6 bg-white border border-neutral-800 rounded-sm"
            >
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h2>
              {post.description && (
                <p className="mb-4 font-normal text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
              )}
              <Link
                href={post.slug}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#1678d3] hover:bg-yellow-400 rounded-sm"
              >
                {t.readMore}
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 dark:text-gray-400">{t.noPosts}</p>
      )}
    </>
  );
};

export default BlogPage;
