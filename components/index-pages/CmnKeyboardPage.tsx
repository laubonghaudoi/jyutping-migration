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

const CmnKeyboardPage: React.FC = () => {
  return (
    <div>
      <p className="mb-6">
        请前往{" "}
        <a
          href="https://jyutping.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          jyutping.net
        </a>{" "}
        或{" "}
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
        <h2 className="text-2xl font-semibold mb-4">搜狗输入法</h2>
        <div className="mb-4">
          <DownloadButton
            href="https://apps.apple.com/cn/app/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95-%E8%AF%AD%E9%9F%B3%E5%8F%98%E5%A3%B0%E6%96%97%E5%9B%BE%E8%A1%A8%E6%83%85/id917670924"
            icon={IconBrandApple}
            text="AppStore 下载"
            variant="dark"
          />
          <span className="text-sm text-gray-600 align-middle">
            v10.11 以上版本皆支持粤拼
          </span>
        </div>
        <div className="mb-4">
          <DownloadButton
            href="https://shouji.sogou.com/interface/multilingual.php?language=3"
            icon={IconBrandAndroid}
            text="Android 版官网下载 APK"
            variant="dark"
          />
          <span className="text-sm text-gray-600 align-middle">
            v10.10 以上版本皆支持粤拼
          </span>
        </div>
        <p className="text-sm text-gray-700">
          下载后入设置界面嘅「语言设置」，拣「中文-粤语」选择九宫格或者全键盘，就可以用粤拼打字。
        </p>
      </div>

      {/* iOS Open Source Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">iOS 开源粤拼输入法</h2>
        <p className="mb-4 text-sm text-gray-700">
          iOS 平台有两款开源嘅粤拼输入法， 都采用 rime-cantonese 码表。
        </p>
        <div className="mb-4">
          <h3 className="font-semibold mb-2">粤拼输入法 (yuetyam/jyutping)</h3>
          <DownloadButton
            href="https://apps.apple.com/app/id1509367629"
            icon={IconBrandApple}
            text="下载 粤拼输入法"
            variant="dark"
          />
          <span className="text-sm text-gray-600 align-middle">
            源代码开源喺{" "}
            <a
              href="https://github.com/yuetyam/jyutping"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              yuetyam/jyutping
            </a>
          </span>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Cantoboard</h3>
          <DownloadButton
            href="https://apps.apple.com/us/app/cantoboard/id1556817074"
            icon={IconBrandApple}
            text="下载 Cantoboard"
            variant="dark"
          />
          <span className="text-sm text-gray-600 align-middle">
            源代码开源喺{" "}
            <a
              href="https://github.com/Cantoboard/Cantoboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Cantoboard/Cantoboard
            </a>
          </span>
        </div>
      </div>

      {/* Rime Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Rime 粤拼</h2>
        <div className="mb-4">
          <DownloadButton
            href="https://github.com/rime/rime-cantonese/releases"
            icon={IconDownload}
            text="安装 Rime 粤拼"
            variant="dark"
          />
        </div>
        <p className="text-sm text-gray-700">
          Rime 粤拼支援全平台（Windows, macOS, Linux, iOS, Android）。
        </p>
      </div>

      {/* Gboard Section */}
      <div className="mb-8 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Gboard 粤拼</h2>
        <div className="mb-4">
          <DownloadButton
            href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US"
            icon={IconBrandGooglePlay}
            text="安装 Gboard"
            variant="primary"
          />
        </div>
        <p className="text-sm text-gray-700">
          Gboard 粤拼仅支援 Android 系统。
        </p>
      </div>
    </div>
  );
};

export default CmnKeyboardPage;
