// jyutping/app/[locale]/learn/layout.tsx
import type React from "react";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout wraps content in the 'learn' section (formerly 'docs').
  // It sits inside the main [locale] layout.
  // Add specific 'learn' section structure here later (e.g., sidebar).
  return <>{children}</>;
}
