import type React from "react";
import Link from "next/link";
import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  // IconArrowRight, // Removed unused icon
} from "@tabler/icons-react";

const CmnIndexPage: React.FC = () => {
  return (
    <>
      <h1 className="font-chiron text-8xl my-32 mx-auto text-center">粵拼</h1>
      <p className="font-chiron text-4xl my-8 mx-auto text-center">
        簡單合理 易學易用
      </p>
      <p className="font-chiron text-4xl mx-auto text-center">
        通行粵語拼音方案
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-32 items-center">
        <p className="text-center text-3xl md:text-right">為什麼要學粵拼？</p>{" "}
        <ul className="text-lg mx-auto md:col-span-2 space-y-2">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0" />
            <span>掌握粵拼可以幫助糾正懶音錯音，規範自己的粵語口音。</span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0" />
            <span>漢字非拼音文字，需要一個拼音方案來準確表達粵語的發音。</span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0" />
            <span>
              掌握粵拼，就能用粵拼輸入法來打粵語，作爲最自然簡單的打字方式。
            </span>
          </li>
        </ul>
      </div>

      <p className="mx-auto text-center text-3xl my-12">
        <span className="inline-flex items-center">
          <IconBulb className="mr-2" />
          <span>學粵語就要學粵拼</span>
        </span>
      </p>

      <div className="flex flex-wrap justify-center my-12">
        <Link
          href="/learn"
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-200 px-8 py-4 rounded-md inline-flex items-center"
        >
          一文掌握粵拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      <span className="text-2xl text-center my-4 mx-auto block">或者</span>
      <div className="flex flex-wrap justify-center my-12">
        <Link
          href="/jyutping"
          className="text-2xl text-center bg-lime-400 text-neutral-800 hover:bg-lime-300 px-8 py-4 rounded-md inline-flex items-center"
        >
          看粵拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        想看其他語言版本？
      </span>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12">
        <Link
          href="/yue"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center" // Full width on small, auto on medium+
        >
          返去粵語版
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

export default CmnIndexPage;
