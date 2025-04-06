import type React from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconEar,
  IconKeyboard,
  IconLanguage,
} from "@tabler/icons-react"; // Import necessary icons

const WuuIndexPage: React.FC = () => {
  return (
    <>
      <h1 className="font-chiron text-8xl my-32 mx-auto text-center">粵拼</h1>
      <p className="text-4xl my-8 mx-auto text-center">便當合理 易學易用</p>
      <p className="text-4xl my-8 mx-auto text-center">通行粵語拼音方案</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-32 items-center">
        <p className="text-center text-3xl md:text-right">为啥要學粤拼？</p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-2">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0" />{" "}
            <span>掌握粵拼好相幫糾正差誤讀音，規範自家个粵語發音。</span>{" "}
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0" />{" "}
            <span>
              漢字弗是拼音文字，有得一隻拼音方案，表達粵語發音再會得準足。
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0" />{" "}
            <span>會得粵拼，就好用粵拼輸入法錄粵語，打字頂便當頂省力。</span>
          </li>
        </ul>
      </div>

      <p>學普通話要學普通話拼音，學粵語就要學粵拼。</p>

      {/* Button section based on wuu/index.mdx */}
      <div className="flex flex-col items-center my-16 space-y-4">
        <p className="text-lg">我講得來吳語</p>
        <Link
          href="/learn" // Removed /index
          className="text-2xl bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-4 rounded-md inline-flex items-center"
        >
          用吳語學粵拼 <IconArrowRight className="ml-2" size={24} />
        </Link>
      </div>

      {/* Language switch links based on wuu/index.mdx */}
      <div className="flex flex-col items-center space-y-2 my-8">
        <Link
          href="/yue" // Updated href based on mdx (was '/')
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          革到本站粵語版 <IconArrowRight className="ml-2" size={20} />
        </Link>
        <Link
          href="/en"
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          Switch to English <IconArrowRight className="ml-2" size={20} />
        </Link>
      </div>

      {/* Responsive Language Links: Column on small, Row wrap on medium+ */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12">
        <Link
          href="/cmn"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center" // Full width on small, auto on medium+
        >
          切到普通話 / 國語版
        </Link>

        <Link
          href="/yue"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          革到粵語版
        </Link>

        <Link
          href="/cmn"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          換到台灣閩南語版
        </Link>

        <Link
          href="/vi"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          Chuyển sang tiếng Việt
        </Link>

        <Link
          href="/en"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          Switch to English
        </Link>
      </div>
    </>
  );
};

export default WuuIndexPage;
