// jyutping/app/[locale]/about/layout.tsx
import type React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout wraps content in the 'about' section.
  // It sits inside the main [locale] layout.
  // Add specific 'about' section structure here later (e.g., sidebar, sub-nav).
  return <>{children}</>;
}
