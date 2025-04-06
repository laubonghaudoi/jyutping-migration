// jyutping/app/[locale]/jyutping/layout.tsx
import type React from "react";

export default function JyutpingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout wraps content in the 'jyutping' section (formerly 'community').
  // It sits inside the main [locale] layout.
  // Add specific 'jyutping' section structure here later.
  return <>{children}</>;
}
