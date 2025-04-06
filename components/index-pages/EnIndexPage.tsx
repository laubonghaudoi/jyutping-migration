import type React from "react";
import Link from "next/link";
import { IconEar, IconLanguage, IconKeyboard } from "@tabler/icons-react";

const EnIndexPage: React.FC = () => {
  return (
    <>
      {/* Updated heading based on en/index.mdx */}
      <h1 className="text-4xl md:text-5xl font-semibold my-8 mx-auto text-center leading-tight">
        Jyutping is the de-facto standard
        <br />
        romanization scheme for Cantonese.
      </h1>

      {/* Removed the "Why Learn" title paragraph and adjusted grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 my-16 gap-8 items-center">
        {/* Placeholder for potential image/graphic if needed */}
        <div className="hidden md:block" /> {/* Made self-closing */}
        {/* List items updated with content from en/index.mdx */}
        <ul className="text-lg my-8 mx-auto md:col-span-2 space-y-4">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0 mt-1" />{" "}
            {/* Added mt-1 for alignment */}
            <span>
              Jyutping can help you correct your Cantonese pronunciations and
              accents. Jyutping to Cantonese is like Pinyin to Mandarin.
            </span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0 mt-1" />{" "}
            {/* Added mt-1 */}
            <span>
              Chinese characters are not phonographic, we need Jyutping to
              represent the sounds of Cantonese.
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0 mt-1" />{" "}
            {/* Added mt-1 */}
            <span>
              Knowing Jyutping, you can type Cantonese smoothly with Jyutping
              keyboards, the most natural and easiest way to type Cantonese.
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center my-16">
        {/* Updated button text */}
        <Link
          href="/learn" // Removed /index
          className="text-2xl bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-4 rounded-md inline-flex items-center" // Adjusted size and added flex
        >
          Start learning Jyutping{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-map ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Map icon</title> {/* Added title */}
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7l6 -3l6 3l6 -3v13l-6 3l-6 -3l-6 3v-13" />
            <path d="M9 4v13" />
            <path d="M15 7v13" />
          </svg>{" "}
          {/* Added icon */}
        </Link>
      </div>

      {/* Updated language switch link */}
      <div className="flex flex-wrap justify-center items-center my-8">
        {" "}
        {/* Centered single link */}
        <Link
          href="/yue" // Updated href based on mdx (was '/')
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          切換到本站粵語版{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-circle-right ml-2"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Arrow circle right icon</title> {/* Added title */}
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
            <path d="M16 12l-4 -4" />
            <path d="M16 12h-8" />
            <path d="M12 16l4 -4" />
          </svg>{" "}
          {/* Added icon */}
        </Link>
      </div>
    </>
  );
};

export default EnIndexPage;
