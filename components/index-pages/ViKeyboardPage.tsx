import type React from "react";
import {
  IconBrandApple,
  IconBrandAndroid,
  IconDownload,
  IconBrandGooglePlay,
} from "@tabler/icons-react";

// Reusable Button Component (copied from YueKeyboardPage for consistency)
const DownloadButton: React.FC<{
  href: string;
  icon: React.ElementType;
  text: string;
  variant?: "dark" | "primary";
}> = ({ href, icon: Icon, text, variant = "dark" }) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3 mb-4";
  const variantClasses =
    variant === "dark"
      ? "border-gray-700 text-gray-700 bg-white hover:bg-gray-50"
      : "border-blue-600 text-blue-600 bg-white hover:bg-blue-50";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      <Icon className="mr-2 h-5 w-5" /> {text}
    </a>
  );
};

const ViKeyboardPage: React.FC = () => {
  return (
    <div>
      <p className="mb-6">
        Vui lòng truy cập:{" "}
        <a
          href="https://jyutping.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          jyutping.net
        </a>{" "}
        hoặc{" "}
        <a
          href="https://typeduck.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          typeduck.hk
        </a>
      </p>

      {/* Sogou Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Bộ gõ Sogou</h2>
        <div className="mb-4">
          <DownloadButton
            href="https://apps.apple.com/cn/app/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95-%E8%AF%AD%E9%9F%B3%E5%8F%98%E5%A3%B0%E6%96%97%E5%9B%BE%E8%A1%A8%E6%83%85/id917670924"
            icon={IconBrandApple}
            text="Tải trên AppStore"
            variant="dark"
          />
          <span className="text-sm text-gray-600 align-middle">
            Các phiên bản trên v10.11 đều hỗ trợ Việt bính
          </span>
        </div>
        <div className="mb-4">
          <DownloadButton
            href="https://shouji.sogou.com/interface/multilingual.php?language=3"
            icon={IconBrandAndroid}
            text="Tải APK trên web chính thức"
            variant="dark"
          />
          <span className="text-sm text-gray-600 align-middle">
            Các phiên bản trên v10.10 đều hỗ trợ Việt bính
          </span>
        </div>
        <p className="text-sm text-gray-700">
          Vào phần &quot;Language Settings&quot; trong cài đặt, chọn
          &quot;Chinese-Cantonese&quot; để gõ bằng Việt bính.
        </p>
      </div>

      {/* Rime Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Việt bính Rime</h2>
        <div className="mb-4">
          <DownloadButton
            href="https://github.com/rime/rime-cantonese/releases"
            icon={IconDownload}
            text="Cài đặt Việt bính Rime"
            variant="dark"
          />
        </div>
        <p className="text-sm text-gray-700">
          Việt bính Rime hỗ trợ cả các nền tảng (Windows, macOS, Linux, iOS,
          Android).
        </p>
      </div>

      {/* Gboard Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Việt bính Gboard</h2>
        <div className="mb-4">
          <DownloadButton
            href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US"
            icon={IconBrandGooglePlay}
            text="Cài đặt Gboard"
            variant="primary"
          />
        </div>
        <p className="text-sm text-gray-700">
          Việt bính Gboard chỉ hỗ trợ hệ thống Android.
        </p>
      </div>
    </div>
  );
};

export default ViKeyboardPage;
