"use client";

import { usePathname, useRouter } from "next/navigation";
// Remove direct config import
// import nextConfig from "../next.config";
// const { i18n } = nextConfig;
import type React from "react"; // Use import type

// Define props interface
interface LanguageSwitcherProps {
  locales: readonly string[];
  defaultLocale: string;
}

// Define language names (could be moved to a config/translation file later)
const languageNames: Record<string, string> = {
  en: "English",
  vi: "Tiếng Việt",
  yue: "粵語",
  cmn: "普通話/國語",
  nan: "臺灣閩南語",
  wuu: "吳語",
};

// Use props in component signature
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  locales,
  defaultLocale,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  // No need to check for i18n here, props are guaranteed by parent

  const currentLocale = locales.find(
    // Use locales from props
    // Find locale prefix in the pathname, if any
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  // If no prefix found, assume it's the default locale
  const effectiveCurrentLocale = currentLocale || defaultLocale;

  const handleLocaleChange = (newLocale: string) => {
    if (!pathname) return; // Should generally not happen

    // Determine the base path (without any locale prefix)
    let basePath = pathname;
    if (currentLocale) {
      // If there was a prefix in the current URL
      basePath = pathname.replace(`/${currentLocale}`, "");
      if (!basePath.startsWith("/")) basePath = `/${basePath}`;
      // Handle case where path was just /en -> /
      if (basePath === "") basePath = "/";
    }
    // If currentLocale was undefined, pathname is already the base path

    // Construct the target path
    let targetPath = "";
    if (newLocale === defaultLocale) {
      // Target is the default locale, path should have no prefix
      targetPath = basePath;
    } else {
      // Target is a non-default locale, path should have the prefix
      targetPath = `/${newLocale}${basePath}`;
      // Handle edge case: avoid double slash if basePath is "/"
      if (targetPath.endsWith("//")) {
        targetPath = targetPath.slice(0, -1);
      }
      // Handle case where target is just /en
      if (targetPath === `/${newLocale}/` && basePath === "/") {
        targetPath = `/${newLocale}`;
      }
    }

    // Set the cookie to remember the user's choice
    // Set cookie path to '/' to make it accessible across the site
    // Set max-age for persistence (e.g., 1 year)
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; expires=${date.toUTCString()}; SameSite=Lax`;

    // Navigate to the newly constructed target path
    router.push(targetPath);
  };

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => handleLocaleChange(e.target.value)}
        value={effectiveCurrentLocale} // Use the effective locale for the select value
        className="px-2 py-2 border-1 border-white rounded-sm bg-transparent"
        aria-label="Select language"
      >
        {locales.map(
          // Use locales from props
          (locale: string) => (
            <option key={locale} value={locale}>
              {languageNames[locale] || locale}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
