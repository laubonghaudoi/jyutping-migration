import type React from "react";
import {
  IconBrandApple,
  IconBrandAndroid,
  IconDownload,
  IconBrandGooglePlay,
  IconKeyboard,
} from "@tabler/icons-react";

// Reusable Button Component
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

// Define an interface for the translation structure
interface KeyboardPageTranslation {
  introLinks: React.ReactNode;
  sogouTitle: string;
  sogouAppStoreButton: string;
  sogouAppStoreNote: string;
  sogouApkButton: string;
  sogouApkNote: string;
  sogouInstructions: string;
  iosOpenSourceTitle?: string; // Optional section
  iosOpenSourceDesc?: string;
  iosJyutpingTitle?: string;
  iosJyutpingButton?: string;
  iosJyutpingSource?: React.ReactNode;
  iosCantoboardTitle?: string;
  iosCantoboardButton?: string;
  iosCantoboardSource?: React.ReactNode;
  rimeTitle: string;
  rimeButton: string;
  rimeDesc: string;
  gboardTitle: string;
  gboardButton: string;
  gboardDesc: string;
}

// Define translations
const translations: Record<string, KeyboardPageTranslation> = {
  en: {
    introLinks: <>Jyutping Keyboards</>,
    sogouTitle: "搜狗輸入法 (Sogou Input)",
    sogouAppStoreButton: "AppStore Download",
    sogouAppStoreNote: "Versions above v10.11 support Jyutping",
    sogouApkButton: "Official Website Download APK",
    sogouApkNote: "Versions above v10.10 support Jyutping",
    sogouInstructions:
      'After downloading, go to "Language Settings", select "Chinese - Cantonese", choose T9 or Full Keyboard, then you can type with Jyutping.',
    iosOpenSourceTitle: "iOS Open Source Jyutping Keyboards",
    iosOpenSourceDesc:
      "There are two open source Jyutping keyboards on iOS, both are powered by rime-cantonese.",
    iosJyutpingTitle: "Jyutping Keyboard (yuetyam/jyutping)",
    iosJyutpingButton: "Download Jyutping Keyboard",
    iosJyutpingSource: (
      <>
        Source codes are opened at{" "}
        <a
          href="https://github.com/yuetyam/jyutping"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          yuetyam/jyutping
        </a>
      </>
    ),
    iosCantoboardTitle: "Cantoboard",
    iosCantoboardButton: "Download Cantoboard",
    iosCantoboardSource: (
      <>
        Source codes are opened at{" "}
        <a
          href="https://github.com/Cantoboard/Cantoboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cantoboard/Cantoboard
        </a>
      </>
    ),
    rimeTitle: "Rime Jyutping",
    rimeButton: "Install Rime Jyutping",
    rimeDesc:
      "Rime Jyutping supports all platforms: Windows, macOS, Linux, iOS, Android.",
    gboardTitle: "Gboard Jyutping",
    gboardButton: "Install Gboard",
    gboardDesc: "Gboard Jyutping only supports Android.",
  },
  yue: {
    introLinks: (
      <span className="inline-flex items-center font-semibold">
        <IconKeyboard className="mr-2" /> 粵拼輸入法
      </span>
    ),
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "Android 版官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    iosOpenSourceTitle: "iOS 開源粵拼輸入法",
    iosOpenSourceDesc:
      "iOS 平台有兩款開源嘅粵拼輸入法， 都採用 rime-cantonese 碼表。",
    iosJyutpingTitle: "粵拼輸入法 (yuetyam/jyutping)",
    iosJyutpingButton: "下載 粵拼輸入法",
    iosJyutpingSource: (
      <>
        源代碼開源喺{" "}
        <a
          href="https://github.com/yuetyam/jyutping"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          yuetyam/jyutping
        </a>
      </>
    ),
    iosCantoboardTitle: "Cantoboard",
    iosCantoboardButton: "下載 Cantoboard",
    iosCantoboardSource: (
      <>
        源代碼開源喺{" "}
        <a
          href="https://github.com/Cantoboard/Cantoboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cantoboard/Cantoboard
        </a>
      </>
    ),
    rimeTitle: "Rime 粵拼",
    rimeButton: "安裝 Rime 粵拼",
    rimeDesc: "Rime 粵拼支援全平臺（Windows, macOS, Linux, iOS, Android）。",
    gboardTitle: "Gboard 粵拼",
    gboardButton: "安裝 Gboard",
    gboardDesc: "Gboard 粵拼僅支援 Android 系統。",
  },
  cmn: {
    introLinks: <>粵拼輸入法</>,
    sogouTitle: "搜狗输入法",
    sogouAppStoreButton: "AppStore 下载",
    sogouAppStoreNote: "v10.11 以上版本皆支持粤拼",
    sogouApkButton: "Android 版官网下载 APK",
    sogouApkNote: "v10.10 以上版本皆支持粤拼",
    sogouInstructions:
      "下载后入设置界面嘅「语言设置」，拣「中文-粤语」选择九宫格或者全键盘，就可以用粤拼打字。", // Note: Instructions seem to be in Cantonese, might need Cmn version
    iosOpenSourceTitle: "iOS 开源粤拼输入法",
    iosOpenSourceDesc:
      "iOS 平台有两款开源嘅粤拼输入法， 都采用 rime-cantonese 码表。", // Note: Description seems to be in Cantonese
    iosJyutpingTitle: "粤拼输入法 (yuetyam/jyutping)",
    iosJyutpingButton: "下载 粤拼输入法",
    iosJyutpingSource: (
      <>
        源代码开源喺{" "}
        <a
          href="https://github.com/yuetyam/jyutping"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          yuetyam/jyutping
        </a>
      </>
    ),
    iosCantoboardTitle: "Cantoboard",
    iosCantoboardButton: "下载 Cantoboard",
    iosCantoboardSource: (
      <>
        源代码开源喺{" "}
        <a
          href="https://github.com/Cantoboard/Cantoboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cantoboard/Cantoboard
        </a>
      </>
    ),
    rimeTitle: "Rime 粤拼",
    rimeButton: "安装 Rime 粤拼",
    rimeDesc: "Rime 粤拼支援全平台（Windows, macOS, Linux, iOS, Android）。",
    gboardTitle: "Gboard 粤拼",
    gboardButton: "安装 Gboard",
    gboardDesc: "Gboard 粤拼仅支援 Android 系统。",
  },
  nan: {
    introLinks: <>粵拼輸入法</>,
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。", // Note: Instructions seem to be in Cantonese
    // iOS section missing in Nan source
    rimeTitle: "Rime 粵拼",
    rimeButton: "安裝 Rime 粵拼",
    rimeDesc: "Rime 粵拼支援全平臺（Windows, macOS, Linux, iOS, Android）。",
    gboardTitle: "Gboard 粵拼",
    gboardButton: "安裝 Gboard",
    gboardDesc: "Gboard 粵拼僅支援 Android 系統。",
  },
  vi: {
    introLinks: <>Việt bính bàn phím</>,
    sogouTitle: "Bộ gõ Sogou",
    sogouAppStoreButton: "Tải trên AppStore",
    sogouAppStoreNote: "Các phiên bản trên v10.11 đều hỗ trợ Việt bính",
    sogouApkButton: "Tải APK trên web chính thức",
    sogouApkNote: "Các phiên bản trên v10.10 đều hỗ trợ Việt bính",
    sogouInstructions:
      'Vào phần "Language Settings" trong cài đặt, chọn "Chinese-Cantonese" để gõ bằng Việt bính.',
    // iOS section missing in Vi source, assuming similar structure if needed
    rimeTitle: "Việt bính Rime",
    rimeButton: "Cài đặt Việt bính Rime",
    rimeDesc:
      "Việt bính Rime hỗ trợ cả các nền tảng (Windows, macOS, Linux, iOS, Android).",
    gboardTitle: "Việt bính Gboard",
    gboardButton: "Cài đặt Gboard",
    gboardDesc: "Việt bính Gboard chỉ hỗ trợ hệ thống Android.",
  },
  wuu: {
    introLinks: <>粵拼輸入法</>,
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。", // Note: Instructions seem to be in Cantonese
    // iOS section missing in Wuu source
    rimeTitle: "Rime 粵拼",
    rimeButton: "安裝 Rime 粵拼",
    rimeDesc: "Rime 粵拼支援全平臺（Windows, macOS, Linux, iOS, Android）。",
    gboardTitle: "Gboard 粵拼",
    gboardButton: "安裝 Gboard",
    gboardDesc: "Gboard 粵拼僅支援 Android 系統。",
  },
};

interface KeyboardPageProps {
  locale: string;
}

const KeyboardPage: React.FC<KeyboardPageProps> = ({ locale }) => {
  const t = translations[locale] || translations.en; // Fallback to English

  return (
    <>
      <h1 className="my-12 text-center text-4xl mx-auto">{t.introLinks}</h1>

      {/* Responsive grid: 1 column on small screens, 3 columns on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">{t.sogouTitle}</h2>
          <div className="mb-4">
            <DownloadButton
              href="https://apps.apple.com/cn/app/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95-%E8%AF%AD%E9%9F%B3%E5%8F%98%E5%A3%B0%E6%96%97%E5%9B%BE%E8%A1%A8%E6%83%85/id917670924"
              icon={IconBrandApple}
              text={t.sogouAppStoreButton}
              variant="dark"
            />
            <span className="text-sm text-gray-600 align-middle">
              {t.sogouAppStoreNote}
            </span>
          </div>
          <div className="mb-4">
            <DownloadButton
              href="https://shouji.sogou.com/interface/multilingual.php?language=3"
              icon={IconBrandAndroid}
              text={t.sogouApkButton}
              variant="dark"
            />
            <span className="text-sm text-gray-600 align-middle">
              {t.sogouApkNote}
            </span>
          </div>
          <p className="text-sm text-gray-700">{t.sogouInstructions}</p>
        </div>

        {t.iosOpenSourceTitle && (
          <div className="mb-8 p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {t.iosOpenSourceTitle}
            </h2>
            <p className="mb-4 text-sm text-gray-700">{t.iosOpenSourceDesc}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.iosJyutpingTitle}</h3>
              <DownloadButton
                href="https://apps.apple.com/app/id1509367629"
                icon={IconBrandApple}
                text={t.iosJyutpingButton || ""}
                variant="dark"
              />
              <span className="text-sm text-gray-600 align-middle">
                {t.iosJyutpingSource}
              </span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">{t.iosCantoboardTitle}</h3>
              <DownloadButton
                href="https://apps.apple.com/us/app/cantoboard/id1556817074"
                icon={IconBrandApple}
                text={t.iosCantoboardButton || ""}
                variant="dark"
              />
              <span className="text-sm text-gray-600 align-middle">
                {t.iosCantoboardSource}
              </span>
            </div>
          </div>
        )}

        <div className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">{t.rimeTitle}</h2>
          <div className="mb-4">
            <DownloadButton
              href="https://github.com/rime/rime-cantonese/releases"
              icon={IconDownload}
              text={t.rimeButton}
              variant="dark"
            />
          </div>
          <p className="text-sm text-gray-700">{t.rimeDesc}</p>
        </div>

        <div className="mb-8 p-6">
          <h2 className="text-2xl font-semibold mb-4">{t.gboardTitle}</h2>
          <div className="mb-4">
            <DownloadButton
              href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US"
              icon={IconBrandGooglePlay}
              text={t.gboardButton}
              variant="primary"
            />
          </div>
          <p className="text-sm text-gray-700">{t.gboardDesc}</p>
        </div>
      </div>
    </>
  );
};

export default KeyboardPage;
