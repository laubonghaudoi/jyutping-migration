import type React from "react";
import Link from "next/link";
import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown, // Added IconVocabulary
} from "@tabler/icons-react";

const EnIndexPage: React.FC = () => {
  return (
    <>
      <h1 className="font-chiron text-8xl my-16 mx-auto text-center">粵拼</h1>

      <p className="font-chiron text-4xl my-8 mx-auto text-center">
        Jyutping is the standard romanization scheme for Cantonese
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center">
        <p className="text-center text-3xl md:text-right">
          Why learn Jyutping?
        </p>

        <ul className="text-lg mx-auto md:col-span-2 space-y-2">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0" />
            <span>
              Jyutping can help you correct your Cantonese pronunciations and
              accents. Jyutping to Cantonese is like Pinyin to Mandarin.
            </span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0" />
            <span>
              Chinese characters are not phonographic, we need Jyutping to
              represent the sounds of Cantonese.
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0" />
            <span>
              Knowing Jyutping, you can type Cantonese smoothly with Jyutping
              keyboards, the most natural and easiest way to type Cantonese.
            </span>
          </li>
        </ul>
      </div>

      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          <span>Like Pinyin for Mandarin, learn Jyutping for Cantonese</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold">
          <IconArrowDown className="mr-2" />
        </span>
      </div>

      <div className="flex flex-wrap justify-center my-8">
        <Link
          href="/en/learn" // Removed /index
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-200 px-8 py-4 rounded-md inline-flex items-center"
        >
          Learn Jyutping
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </Link>
      </div>
      <span className="text-2xl text-center mx-auto block">or</span>
      <div className="flex flex-wrap justify-center my-8">
        <Link
          href="/en/jyutping" // Removed /index
          className="text-2xl text-center bg-lime-400 text-neutral-800 hover:bg-lime-300 px-8 py-4 rounded-md inline-flex items-center"
        >
          View the Scheme
          <IconTable className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        Want other Languages?
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
          href="/yue"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          返去粵語版
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
      </div>
    </>
  );
};

export default EnIndexPage;
