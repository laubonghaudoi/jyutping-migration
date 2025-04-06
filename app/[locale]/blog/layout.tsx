// jyutping/app/[locale]/blog/layout.tsx
import type React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout wraps content in the 'blog' section.
  // It sits inside the main [locale] layout.
  // Add specific 'blog' section structure here later (e.g., different header/footer, sidebar).
  return <>{children}</>;
}
