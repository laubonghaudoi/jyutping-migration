import type React from "react";
import Link from "next/link";
import { IconMap, IconArrowRight } from "@tabler/icons-react"; // Import necessary icons

const ViIndexPage: React.FC = () => {
  return (
    <>
      {/* Heading based on vi/index.mdx */}
      <h1 className="text-4xl md:text-5xl font-semibold my-8 mx-auto text-center leading-tight">
        Một phương pháp sử dụng chữ Latinh
        <br />
        để phiên âm tiếng Quảng Đông.
      </h1>

      {/* Paragraphs based on vi/index.mdx */}
      <div className="text-lg my-16 space-y-4 max-w-prose mx-auto text-center">
        <p>
          Việt bính có thể giúp bạn sửa cách phát âm tiếng Quảng Đông của mình.
        </p>
        <p>
          Việt bính trong tiếng Quảng Đông giống như Pinyin trong tiếng Phổ
          Thông.
        </p>
        <p>
          Các chữ Hán không phải là chữ tượng thanh, chúng ta cần Việt bính để
          đại diện cho các âm của tiếng Quảng Đông.
        </p>
        <p>
          Biết Việt bính, bạn có thể gõ tiếng Quảng Đông thuận tiện với bàn phím
          Việt bính, cách gõ tiếng Quảng Đông tự nhiên và dễ dàng nhất.
        </p>
      </div>

      {/* Button section based on vi/index.mdx */}
      <div className="flex flex-wrap justify-center my-16">
        <Link
          href="/learn" // Removed /index
          className="text-2xl bg-neutral-800 text-white hover:bg-neutral-700 px-8 py-4 rounded-md inline-flex items-center"
        >
          Bắt đầu học Việt bính <IconMap className="ml-2" size={24} />
        </Link>
      </div>

      {/* Language switch link based on vi/index.mdx */}
      <div className="flex flex-wrap justify-center items-center my-8">
        <Link
          href="/yue" // Updated href based on mdx (was '/')
          className="bg-neutral-100 text-black hover:bg-neutral-200 px-4 py-2 rounded-md inline-flex items-center"
        >
          切換到本站粵語版 <IconArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </>
  );
};

export default ViIndexPage;
