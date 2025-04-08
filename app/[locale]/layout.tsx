import type { Metadata } from "next";
import Link from "next/link"; // Import Link component
// Removed Geist imports as they are unused here
import "@/app/globals.css"; // Use import alias and correct path
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Import the switcher
import { IconBrandGithub } from "@tabler/icons-react";
import type React from "react"; // Added React import for type usage

// Define a type for the resolved params shape for Layout
type ResolvedLayoutParams = {
  locale: string;
};

// Define a type for the props passed to RootLayout
type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<ResolvedLayoutParams>; // Params is a Promise
}>;

// Note: Metadata might need to be dynamic based on locale later
export const metadata: Metadata = {
  title: "Jyutping.org Migration", // Update title
  description: "Jyutping resources", // Update description
};

export default async function RootLayout({
  // Make function async
  children,
  params,
}: LayoutProps) {
  // Apply the LayoutProps type here
  const awaitedParams = await params; // Await the Promise
  const locale = awaitedParams.locale; // Access locale after awaiting

  // --- Navigation Translations ---
  const navTranslations: Record<string, Record<string, string>> = {
    learn: {
      yue: "學粵拼",
      en: "Learn Jyutping",
      vi: "Học Việt bính",
      nan: "學粵拼",
      wuu: "學粵拼",
      cmn: "學粵拼",
      // Add cmn, nan, wuu later
    },
    jyutping: {
      yue: "LSHK 粵拼方案", // Assuming this is the correct key/title for the root/scheme page
      en: "LSHK Jyutping Scheme",
      vi: "Việt bính",
      nan: "LSHK 粵拼方案",
      wuu: "LSHK 粵拼方案",
      cmn: "LSHK 粵拼方案",
      // Add cmn, nan, wuu later
    },
    blog: {
      yue: "文集",
      en: "Blog",
      vi: "Tập văn",
      nan: "文集",
      wuu: "文集",
      cmn: "文集",
      // Add cmn, nan, wuu later
    },
    keyboard: {
      yue: "輸入法工具",
      en: "Keyboard Tools",
      vi: "Bàn phím tiếng Quảng Đông",
      nan: "輸入法工具",
      wuu: "輸入法工具",
      cmn: "輸入法工具",
      // Add cmn, nan, wuu later
    },
    about: {
      yue: "關於",
      en: "About",
      vi: "Liên lạc",
      nan: "關於",
      wuu: "關於",
      cmn: "關於",
      // Add cmn, nan, wuu later
    },
  };

  // --- Generate Localized Nav Links ---
  const navLinkKeys = ["learn", "jyutping", "blog", "keyboard", "about"];
  const navLinks = navLinkKeys.map((key) => ({
    href: `/${key}`,
    // Fallback to key name if translation or locale is missing
    title: navTranslations[key]?.[locale] || key,
  }));

  // Removed placeholder await
  // Return a fragment instead of html/body
  return (
    <>
      {/* Simple Header Placeholder */}
      <header className="p-4 bg-[#1678d3] text-white">
        {/* Apply new background and default text color */}
        <div className="container max-w-8xl mx-auto flex justify-between items-center">
          <Link href={`/${locale}`} className="text-white hover:opacity-80">
            <span className="text-3xl font-chiron">粵拼</span>
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
                className="text-white text-lg hover:opacity-90" // Apply white text and hover effect
              >
                {link.title}
              </Link>
            ))}
          </nav>
          {/* Language Switcher */}
          <LanguageSwitcher
            locales={["en", "vi", "yue", "cmn", "nan", "wuu"]}
            defaultLocale={"yue"}
          />
        </div>
      </header>

      {/* Main Content Area - Removed container/width constraints */}
      <main className="flex-grow">{children}</main>

      {/* Simple Footer Placeholder */}
      <footer className="p-8 bg-gray-600  text-center text-white">
        <span>© {new Date().getFullYear()} jyutping.org</span>
        <Link
          className="mx-auto text-center w-full"
          href="https://github.com/CanCLID/jyutping.org"
        >
          <IconBrandGithub />
        </Link>
      </footer>
    </>
  );
}
