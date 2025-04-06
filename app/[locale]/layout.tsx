import type { Metadata } from "next";
import Link from "next/link"; // Import Link component
// Removed Geist imports as they are unused here
import "@/app/globals.css"; // Use import alias and correct path
import LanguageSwitcher from "@/components/LanguageSwitcher"; // Import the switcher
import { IconBrandGithub } from "@tabler/icons-react";

// Note: Metadata might need to be dynamic based on locale later
export const metadata: Metadata = {
  title: "Jyutping.org Migration", // Update title
  description: "Jyutping resources", // Update description
};

export default function RootLayout({
  // Remove async
  children,
  params, // Destructure params to get locale
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }; // Keep param type for Next.js structure
}>) {
  const locale = params.locale; // Get locale from params

  // Define navigation links (adjust titles/paths as needed for different locales later if necessary)
  const navLinks = [
    { href: "/learn", title: "學粵拼" }, // Assuming /docs maps to /learn in new structure
    { href: "/jyutping", title: "LSHK 粵拼方案" },
    { href: "/blog", title: "文集" },
    { href: "/keyboard", title: "粵語輸入法" },
    { href: "/about", title: "關於" },
  ];

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
