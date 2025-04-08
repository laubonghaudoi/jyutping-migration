"use client"; // This component needs client-side interactivity

import type React from "react"; // Use import type for React
import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number; // h2 = 2, h3 = 3, etc.
}

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Function to extract headings from the article
    const extractHeadings = () => {
      // Ensure this runs only after the article content is likely rendered
      // Adjust the selector if your article container is different
      const articleElement = document.querySelector("article");
      if (!articleElement) return;

      // Find h2 and h3 elements within the article
      const headingElements = Array.from(
        articleElement.querySelectorAll("h2, h3")
      ) as HTMLElement[]; // Type assertion

      const extracted: Heading[] = headingElements.map((el, index) => {
        // Ensure headings have IDs for linking
        if (!el.id) {
          // Generate a simple ID if none exists
          el.id = `heading-${index}-${el.tagName.toLowerCase()}`;
        }
        return {
          id: el.id,
          text: el.innerText || "", // Use innerText, provide fallback
          level: Number.parseInt(el.tagName.substring(1), 10), // Get level (2 or 3)
        };
      });
      setHeadings(extracted);
    };

    // Run extraction after initial render and potentially after navigation changes
    // Using setTimeout to slightly delay execution, allowing MDX content to render
    const timeoutId = setTimeout(extractHeadings, 100); // Adjust delay if needed

    // --- Intersection Observer for Active Heading ---
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      }
    };

    const observerOptions = {
      rootMargin: "0px 0px -80% 0px", // Adjust rootMargin to trigger earlier/later
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all heading elements found
    const headingElements = document.querySelectorAll(
      "article h2[id], article h3[id]"
    );
    for (const el of headingElements) {
      observer.observe(el);
    }

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect(); // Disconnect observer on cleanup
    };
  }, []); // Rerun if the path changes (might need dependency on pathname)

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Optionally update URL hash
      // window.history.pushState(null, '', `#${id}`);
    }
  };

  if (headings.length === 0) {
    return null; // Don't render TOC if no headings found
  }

  return (
    <nav className="w-64 ml-8 hidden lg:block sticky top-16">
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`py-1 ${heading.level === 3 ? "ml-4" : ""}`} // Indent h3
          >
            <a
              href={`#${heading.id}`}
              onClick={handleScrollTo(heading.id)}
              className={`text-sm hover:text-blue-600 ${
                activeId === heading.id
                  ? "font-semibold text-blue-600" // Style for active link
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
