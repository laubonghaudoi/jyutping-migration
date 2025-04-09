import type React from "react"; // Use import type
import Link from "next/link";
import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown,
} from "@tabler/icons-react";

const YueIndexPage: React.FC = () => {
  return (
    <>
      <h1 className="font-chiron text-8xl my-16 mx-auto text-center">粵拼</h1>

      <p className="font-chiron leading-relaxed text-4xl mx-auto text-center">
        簡單合理 易學易用
      </p>
      <p className="font-chiron leading-relaxed text-4xl mx-auto text-center">
        通行粵語拼音方案
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center">
        <p className="text-center text-3xl md:text-right">點解要學粵拼？</p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-2">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0" />{" "}
            <span>學識粵拼可以幫助糾正懶音錯音，規範自己嘅粵語口音。</span>{" "}
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0" />{" "}
            <span>
              漢字非拼音文字， 需要一個拼音方案嚟準確表示粵語嘅發音 。
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0" />{" "}
            <span>
              學識粵拼，可以用粵拼輸入法嚟打粵語，作爲最自然簡單嘅打字方式。
            </span>
          </li>
        </ul>
      </div>

      <div className="mx-auto text-center text-3xl block">
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          <span>識粵語就要學粵拼</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold">
          <IconArrowDown className="mr-2" />
        </span>
      </div>

      <div className="flex flex-wrap justify-center my-8">
        <Link
          href="/learn" // Removed /index
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-200 px-8 py-4 rounded-md inline-flex items-center"
        >
          一文掌握粵拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </Link>
      </div>
      <span className="text-2xl text-center mx-auto block">或</span>
      <div className="flex flex-wrap flex-col justify-center my-8">
        <Link
          href="/jyutping" // Removed /index
          className="w-fit my mx-auto text-2xl text-center bg-lime-400 text-neutral-800 hover:bg-lime-300 px-8 py-4 rounded-md inline-flex items-center"
        >
          睇粵拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </Link>
        <Link
          href="/jyutping" // Removed /index
          className="w-fit my-8 mx-auto text-2xl text-center bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-4 rounded-md inline-flex items-center"
        >
          裝粵拼輸入法
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        唔識粵語？
      </span>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12">
        <Link
          href="/cmn"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center" // Full width on small, auto on medium+
        >
          切到普通話 / 國語版
        </Link>

        <Link
          href="/wuu"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          換到吳語版
        </Link>

        <Link
          href="/nan"
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

export default YueIndexPage;
