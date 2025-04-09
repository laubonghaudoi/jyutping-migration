import type React from "react";
import Link from "next/link";
import {
  // IconArrowRight, // Will be removed if unused
  IconEar,
  IconKeyboard,
  IconLanguage,
  IconVocabulary, // Added
  IconTable, // Added
  IconBulb,
  IconArrowDown, // Added
} from "@tabler/icons-react";

const WuuIndexPage: React.FC = () => {
  return (
    <>
      <h1 className="font-chiron text-8xl my-16 mx-auto text-center">粵拼</h1>
      <p className="font-chiron leading-relaxed text-4xl mx-auto text-center">
        便當合理 易學易用
      </p>
      <p className="font-chiron leading-relaxed text-4xl mx-auto text-center">
        通行粵語拼音方案
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center">
        <p className="text-center text-3xl md:text-right">为啥要學粤拼？</p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-2">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0" />
            <span>掌握粵拼好相幫糾正差誤讀音，規範自家个粵語發音。</span>{" "}
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0" />
            <span>
              漢字弗是拼音文字，有得一隻拼音方案，表達粵語發音再會得準足。
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0" />
            <span>會得粵拼，就好用粵拼輸入法錄粵語，打字頂便當頂省力。</span>
          </li>
        </ul>
      </div>

      <div className="mx-auto text-center text-3xl my-12">
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          <span>學粵語就要學粵拼</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold">
          <IconArrowDown className="mr-2" />
        </span>
      </div>

      <div className="flex flex-wrap justify-center my-8">
        <Link
          href="/learn"
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-200 px-8 py-4 rounded-md inline-flex items-center"
        >
          用吳語學粵拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      <span className="text-2xl text-center my-4 mx-auto block">或者</span>
      <div className="flex flex-wrap justify-center my-8">
        <Link
          href="/jyutping"
          className="text-2xl text-center bg-lime-400 text-neutral-800 hover:bg-lime-300 px-8 py-4 rounded-md inline-flex items-center"
        >
          看粵拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        弗識講粵語？
      </span>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12">
        <Link
          href="/cmn"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
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
          href="/nan" // Corrected link based on YueIndexPage structure
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
