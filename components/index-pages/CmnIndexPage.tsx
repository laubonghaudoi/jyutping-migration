import type React from "react";
import Link from "next/link";
// Removed unused icons: IconEar, IconLanguage, IconKeyboard

import { IconArrowRight } from "@tabler/icons-react"; // Import necessary icon

const CmnIndexPage: React.FC = () => {
  return (
    <>
      {/* Content based on _content/cmn/index.mdx */}
      <div className="text-lg my-16 space-y-4 max-w-prose mx-auto text-center">
        <p>学普通话要学普通话拼音，学粤语就要学粤拼。</p>
        <p>掌握粤拼可以帮助纠正懒音错音，规范自己的粤语口音。</p>
        <p>汉字非拼音文字，需要一个拼音方案来准确表达粤语的发音。</p>
        <p>学会了粤拼，就能用粤拼输入法来打粤语，作为最自然简单的打字方式。</p>
      </div>

      <div className="flex flex-col items-center my-16 space-y-4">
        <p className="text-lg">我会普通话拼音（《汉语拼音方案》）</p>
        <Link
          href="/learn" // Removed /index
          className="text-2xl bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-4 rounded-md inline-flex items-center"
        >
          一文掌握粤拼 <IconArrowRight className="ml-2" size={24} />
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-2 my-8">
        <Link
          href="/yue"
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          切换到本站粤语版 <IconArrowRight className="ml-2" size={20} />
        </Link>
        <Link
          href="/en"
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          Switch to English <IconArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </>
  );
};

export default CmnIndexPage;
