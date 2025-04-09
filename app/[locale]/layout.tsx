"use client"; // Add this directive for using state

import Link from "next/link"; // Import Link component
import { useState, use } from "react"; // Import useState and use
// Removed Geist imports as they are unused here
import "@/app/globals.css"; // Use import alias and correct path
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Import the switcher
import {
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconMenu2,
} from "@tabler/icons-react"; // Add IconMenu2
import type React from "react"; // Added React import for type usage

// Define a type for the resolved params shape for Layout
type ResolvedLayoutParams = {
  locale: string;
};

// Define a type for the props passed to RootLayout - Keep params as Promise
type LayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<ResolvedLayoutParams>; // Params is a Promise, use() will unwrap it
}>;

// Metadata export is removed as it's not allowed in client components.
// It should be handled in a parent Server Component or page.tsx.

export default function RootLayout({
  // Remove async
  children,
  params,
}: LayoutProps) {
  // Apply the LayoutProps type here
  // Unwrap the params Promise using React.use()
  const resolvedParams = use(params);
  const locale = resolvedParams.locale; // Access locale from resolved params

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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
      yue: "粵拼方案", // Assuming this is the correct key/title for the root/scheme page
      en: "Jyutping Scheme",
      vi: "Việt bính",
      nan: "粵拼方案",
      wuu: "粵拼方案",
      cmn: "粵拼方案",
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
  // Return a single div wrapper instead of a fragment
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative p-4 bg-[#1678d3] text-white">
        <div className="flex justify-between items-center px-4">
          <Link href={`/${locale}`} className="text-white hover:opacity-80">
            <span className="text-3xl font-chiron">粵拼</span>
          </Link>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-12">
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
          <div className="hidden md:block">
            <LanguageSwitcher
              locales={["en", "vi", "yue", "cmn", "nan", "wuu"]}
              defaultLocale={"yue"}
            />
          </div>
          <button
            type="button" // Add explicit type for Biome linting
            className="md:hidden text-white" // Show only on small screens (md and up hidden)
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <IconMenu2 size={24} />
          </button>
          {/* Mobile Menu - Moved inside container, conditionally render based on state */}
          {isMenuOpen && (
            <div className="bg-[#1678d3] text-white absolute top-full left-0 right-0 z-50 shadow-md md:hidden">
              <div className="px-8 py-4 flex flex-col space-y-4">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`/${locale}${link.href}`}
                      className="text-white text-lg hover:opacity-80"
                      onClick={() => setIsMenuOpen(false)} // Close menu on click
                    >
                      {link.title}
                    </Link>
                  ))}
                </nav>
                {/* Mobile Language Switcher */}
                <LanguageSwitcher
                  locales={["en", "vi", "yue", "cmn", "nan", "wuu"]}
                  defaultLocale={"yue"}
                />
              </div>
            </div>
          )}
        </div>{" "}
        {/* End of simplified header content div */}
      </header>
      {/* Main Content Area - Removed container/width constraints */}
      <main className="flex-grow">{children}</main>
      {/* Simple Footer Placeholder */}
      <footer className="p-8 bg-gray-600 text-center text-white">
        {/* Copyright text on the first row */}
        <div className="my-2">
          {/* Add margin-bottom for spacing */}
          <span>{`© ${new Date().getFullYear()} jyutping.org`}</span>
        </div>

        {/* Icons on the second row, centered */}
        <div className="my-2 inline-flex items-center justify-center space-x-4">
          <Link
            href="https://github.com/CanCLID/jyutping.org"
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="text-white hover:opacity-80" // Style the link
          >
            <IconBrandGithub size={20} /> {/* GitHub Icon */}
          </Link>
          <Link
            href="mailto:support@jyutping.org"
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="text-white hover:opacity-80" // Style the link
          >
            <IconMail size={20} /> {/* GitHub Icon */}
          </Link>
          <Link
            href="https://huggingface.co/CanCLID"
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="text-white hover:opacity-80" // Style the link
          >
            🤗
          </Link>
          <Link
            href="https://x.com/Can_CLID"
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            className="text-white hover:opacity-80" // Style the link
          >
            <IconBrandX size={20} />
          </Link>
        </div>
      </footer>
    </div> // Close the wrapper div
  );
}
