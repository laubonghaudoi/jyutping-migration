import type React from "react";
import Link from "next/link";
import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown,
  // IconArrowRight, // Removed unused icon
} from "@tabler/icons-react";

const ViIndexPage: React.FC = () => {
  return (
    <>
      <h1 className="font-chiron text-8xl my-32 mx-auto text-center">粵拼</h1>
      <p className="font-chiron text-4xl my-8 mx-auto text-center">
        Đơn giản, hợp lý, dễ học, dễ dùng
      </p>
      <p className="font-chiron text-4xl mx-auto text-center">
        Phương pháp phiên âm tiếng Quảng Đông phổ biến
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-32 items-center">
        <p className="text-center text-3xl md:text-right">
          Tại sao học Việt bính?
        </p>{" "}
        <ul className="text-lg mx-auto md:col-span-2 space-y-2">
          <li className="flex items-start">
            <IconEar className="mr-2 flex-shrink-0" />
            <span>
              Việt bính có thể giúp bạn sửa cách phát âm tiếng Quảng Đông của
              mình.
            </span>{" "}
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-2 flex-shrink-0" />
            <span>
              Các chữ Hán không phải là chữ tượng thanh, chúng ta cần Việt bính
              để đại diện cho các âm của tiếng Quảng Đông.
            </span>{" "}
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-2 flex-shrink-0" />
            <span>
              Biết Việt bính, bạn có thể gõ tiếng Quảng Đông thuận tiện với bàn
              phím Việt bính, cách gõ tiếng Quảng Đông tự nhiên và dễ dàng nhất.
            </span>{" "}
          </li>
        </ul>
      </div>
      <p className="mx-auto text-center text-3xl my-12">
        <span className="inline-flex items-center">
          <IconBulb className="mr-2" />
          <span>Tôi đang học tiếng Quảng Đông và nói tiếng Việt.</span>
        </span>
      </p>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold">
          <IconArrowDown className="mr-2" />
        </span>
      </div>
      <div className="flex flex-wrap justify-center my-12">
        <Link
          href="/vi/learn"
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-200 px-8 py-4 rounded-md inline-flex items-center"
        >
          Bắt đầu học Việt bính
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </Link>
      </div>
      <span className="text-2xl text-center my-4 mx-auto block">Hoặc</span>{" "}
      <div className="flex flex-wrap justify-center my-12">
        <Link
          href="/vi/jyutping"
          className="text-2xl text-center bg-lime-400 text-neutral-800 hover:bg-lime-300 px-8 py-4 rounded-md inline-flex items-center"
        >
          Xem bảng Việt bính
          <IconTable className="ml-2 flex-shrink-0" />
        </Link>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        Không biết tiếng Quảng Đông?
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
          href="/en"
          className="bg-neutral-50 text-black hover:bg-neutral-100 px-4 py-2 rounded-sm w-full md:w-auto text-center"
        >
          Switch to English
        </Link>
      </div>
    </>
  );
};

export default ViIndexPage;
