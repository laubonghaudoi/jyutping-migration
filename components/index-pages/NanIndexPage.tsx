import type React from "react";
import Link from "next/link";
import Ruby from "@/components/Ruby"; // Import Ruby component
import { IconArrowRight, IconVocabulary } from "@tabler/icons-react"; // Import necessary icons

const NanIndexPage: React.FC = () => {
  return (
    <>
      {/* Title section with Ruby component */}
      <div className="text-4xl md:text-5xl font-semibold my-8 mx-auto text-center leading-tight space-y-2">
        <div>
          <Ruby text="簡" annotation="gaan2" />
          <Ruby text="單" annotation="daan1" />
          <Ruby text="合" annotation="hap6" />
          <Ruby text="理" annotation="lei5" />
          &nbsp;&nbsp;
          <Ruby text="易" annotation="ji6" />
          <Ruby text="學" annotation="hok6" />
          <Ruby text="易" annotation="ji6" />
          <Ruby text="用" annotation="jung6" />
        </div>
        <div>
          <Ruby text="通" annotation="tung1" />
          <Ruby text="行" annotation="hang4" />
          <Ruby text="粵" annotation="jyut6" />
          <Ruby text="語" annotation="jyu5" />
          <Ruby text="拼" annotation="ping3" />
          <Ruby text="音" annotation="jam1" />
          <Ruby text="方" annotation="fong1" />
          <Ruby text="案" annotation="on3" />
        </div>
      </div>

      {/* Paragraphs based on nan/index.mdx */}
      <div className="text-lg my-16 space-y-4 max-w-prose mx-auto text-center">
        <p>學會曉粵拼會當幫助糾正懶音錯音，規範家己的粵語口音。</p>
        <p>學普通話愛學普通話拼音，學粵語就愛學粵拼。</p>
        <p>漢字毋是拼音文字，需要一个拼音方案來準確表達粵語的發音。</p>
        <p>學會曉粵拼，會當用粵拼輸入法來拍粵語，按呢拍字上蓋自然簡單。</p>
      </div>

      {/* Button section based on nan/index.mdx */}
      <div className="flex flex-col items-center my-16 space-y-4">
        <p className="text-lg">我會曉臺羅（《臺灣閩南語羅馬字拼音方案》）</p>
        <Link
          href="/learn" // Removed /index
          className="text-2xl bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-4 rounded-md inline-flex items-center"
        >
          一文掌握粵拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </Link>
      </div>

      {/* Language switch link based on nan/index.mdx */}
      <div className="flex flex-col items-center space-y-2 my-8">
        <Link
          href="/yue" // Updated href based on mdx (was '/')
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          切換到本站粵語版 <IconArrowRight className="ml-2" size={20} />
        </Link>
        {/* Removed English link as it wasn't in nan/index.mdx */}
      </div>
    </>
  );
};

export default NanIndexPage;
