import {
  IconBrandAndroid,
  IconBrandApple,
  IconBrandGooglePlay,
  IconDownload,
  IconKeyboard,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import type React from "react";

// Reusable Button Component
const DownloadButton: React.FC<{
  href: string;
  icon: React.ElementType;
  text: string;
  variant?: "dark" | "googleplay" | "android" | "apple" | "web" | "typeduck";
}> = ({ href, icon: Icon, text, variant = "dark" }) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 ease-in-out"; // Added transition for smoother hover

  // Define variant classes using a switch or conditional logic for better readability
  let variantClasses = "";
  switch (variant) {
    case "googleplay":
      variantClasses =
        "border-[#01875f] text-[#01875f] bg-white hover:bg-[#01875f] hover:text-white"; // Added Google Play variant styles
      break;
    case "android":
      variantClasses =
        "border-[#34a853] text-[#34a853] bg-white hover:bg-[#34a853] hover:text-white"; // Added android variant styles
      break;
    case "apple":
      variantClasses =
        "border-black text-black bg-white hover:bg-black hover:text-white"; // Added android variant styles
      break;
    case "web":
      variantClasses =
        "border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white"; // Added web variant styles
      break;
    case "typeduck":
      variantClasses =
        "border-amber-500 text-amber-500 bg-white hover:bg-amber-500 hover:text-white"; // Added typeduck variant styles
      break;
    default:
      variantClasses =
        "border-gray-700 text-gray-700 bg-white hover:bg-gray-50";
      break;
  }

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
  yuetyamTitle?: string; // Optional section
  yuetyamiOSButton?: string;
  yuetyamMacOSButton: string;
  yuetyamAndroidButton: string;
  gboardTitle: string;
}

// Define translations
const translations: Record<string, KeyboardPageTranslation> = {
  en: {
    introLinks: <>Jyutping Keyboards</>,
    sogouTitle: "搜狗輸入法 (Sogou Input)",
    sogouAppStoreButton: "AppStore Download",
    sogouAppStoreNote: "Versions above v10.11 support Jyutping",
    sogouApkButton: "Download APK",
    sogouApkNote: "Versions above v10.10 support Jyutping",
    sogouInstructions:
      'After downloading, go to "Language Settings", select "Chinese - Cantonese", choose T9 or Full Keyboard, then you can type with Jyutping.',
    yuetyamTitle: "Jyutping - Cantonese Keyboard",
    yuetyamiOSButton: "Download Jyutping Keyboard",
    yuetyamMacOSButton: "Download .pkg",
    yuetyamAndroidButton: "Download .apk",
    gboardTitle: "Gboard Jyutping",
  },
  yue: {
    introLinks: <>粵拼輸入法</>,
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    yuetyamTitle: "YuetYam 粵拼輸入法",
    yuetyamiOSButton: "AppStore 下載",
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
  },
  cmn: {
    introLinks: <>粵拼輸入法</>,
    sogouTitle: "搜狗输入法",
    sogouAppStoreButton: "AppStore 下载",
    sogouAppStoreNote: "v10.11 以上版本皆支持粤拼",
    sogouApkButton: "官网下载 APK",
    sogouApkNote: "v10.10 以上版本皆支持粤拼",
    sogouInstructions:
      "下载后入设置界面嘅「语言设置」，拣「中文-粤语」选择九宫格或者全键盘，就可以用粤拼打字。", // Note: Instructions seem to be in Cantonese, might need Cmn version
    yuetyamTitle: "iOS 开源粤拼输入法",
    yuetyamiOSButton: "下载 粤拼输入法",
    yuetyamMacOSButton: "下载 .pkg",
    yuetyamAndroidButton: "下载 .apk",

    gboardTitle: "Gboard 粤拼",
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
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
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
    yuetyamMacOSButton: "Tải .pkg",
    yuetyamAndroidButton: "Tải .apk",
    gboardTitle: "Việt bính Gboard",
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
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
  },
};

interface KeyboardPageProps {
  locale: string;
}

const KeyboardPage: React.FC<KeyboardPageProps> = ({ locale }) => {
  const t = translations[locale] || translations.en; // Fallback to English

  return (
    <>
      <h1 className="my-12 text-center text-4xl mx-auto">
        <span className="inline-flex items-center font-semibold">
          <IconKeyboard className="mr-2" /> {t.introLinks}
        </span>
      </h1>

      {/* Responsive grid: 1 column on small screens, 3 columns on medium+ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4">
          <h2 className="text-2xl font-semibold my-4">{t.sogouTitle}</h2>
          <h3 className="font-semibold my-2">iOS</h3>
          <div className="">
            <DownloadButton
              href="https://apps.apple.com/cn/app/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95-%E8%AF%AD%E9%9F%B3%E5%8F%98%E5%A3%B0%E6%96%97%E5%9B%BE%E8%A1%A8%E6%83%85/id917670924"
              icon={IconBrandApple}
              text={t.sogouAppStoreButton}
              variant="apple"
            />
            <p className="text-sm text-gray-600 align-middle">
              {t.sogouAppStoreNote}
            </p>
          </div>
          <h3 className="font-semibold my-2">Android</h3>
          <div className="">
            <DownloadButton
              href="https://shouji.sogou.com/interface/multilingual.php?language=3"
              icon={IconBrandAndroid}
              text={t.sogouApkButton}
              variant="android"
            />
            <p className="text-sm text-gray-600 align-middle">
              {t.sogouApkNote}
            </p>
          </div>
          <p className="text-sm text-gray-700">{t.sogouInstructions}</p>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-semibold my-4">
            TypeDuck 打得粵拼輸入法
          </h2>
          <h3 className="font-semibold my-2">Web</h3>
          <div className="my-4">
            <DownloadButton
              href="https://www.typeduck.hk/web/"
              icon={IconWorld}
              text="網頁版毋須安裝直接打字"
              variant="web"
            />
          </div>
          <h3 className="font-semibold my-2">Windows, macOS, iOS, Android</h3>
          <div className="my-4">
            <DownloadButton
              href="https://www.typeduck.hk/"
              icon={IconDownload}
              text="前往 TypeDuck 官網下載"
              variant="typeduck"
            />
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-semibold my-4">{t.yuetyamTitle}</h2>
          <p className="text-sm text-gray-700">
            <Link
              href="https://github.com/yuetyam/jyutping"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/yuetyam/jyutping
            </Link>
          </p>
          <div className="mb-4">
            <h3 className="font-semibold my-2">iOS</h3>
            <DownloadButton
              href="https://apps.apple.com/app/id1509367629"
              icon={IconBrandApple}
              text={t.yuetyamiOSButton || ""}
              variant="apple"
            />
          </div>
          <div>
            <h3 className="font-semibold my-2">macOS</h3>
            <DownloadButton
              href="https://jyutping.app/mac/"
              icon={IconBrandApple}
              text={t.yuetyamMacOSButton || ""}
              variant="apple"
            />
          </div>
          <div>
            <h3 className="font-semibold my-2">Android</h3>
            <DownloadButton
              href="https://jyutping.app/android/"
              icon={IconBrandAndroid}
              text={t.yuetyamAndroidButton || ""}
              variant="android"
            />
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-semibold my-4">rime-cantonese</h2>
          <h3 className="font-semibold my-2">
            Windows, macOS, Linux, iOS, Android
          </h3>
          <div className="mb-4">
            <DownloadButton
              href="https://jyutping.net/"
              icon={IconDownload}
              text="jyutping.net"
              variant="web"
            />
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-semibold my-4">{t.gboardTitle}</h2>
          <h3 className="font-semibold my-2">iOS</h3>
          <div className="my-4">
            <DownloadButton
              href="https://apps.apple.com/app/id1091700242"
              icon={IconBrandApple}
              text="AppStore"
              variant="apple"
            />
          </div>
          <h3 className="font-semibold my-2">Android</h3>
          <div className="my-4">
            <DownloadButton
              href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US"
              icon={IconBrandGooglePlay}
              text="Google Play"
              variant="googleplay"
            />
          </div>
        </div>
      </div>
      <h1 className="my-12 text-center text-4xl mx-auto">
        <span className="inline-flex items-center font-semibold">
          <IconKeyboard className="mr-2" /> {t.introLinks}
        </span>
      </h1>
    </>
  );
};

export default KeyboardPage;
