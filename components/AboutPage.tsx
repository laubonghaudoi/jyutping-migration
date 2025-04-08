import type React from "react";
import { IconBrandGithub, IconMail, IconKeyboard } from "@tabler/icons-react";
import Link from "next/link";

// Define an interface for the translation structure
interface AboutPageTranslation {
  acknowledgementsTitle: string;
  acknowledgementsP1: React.ReactNode;
  acknowledgementsP2: string;
  acknowledgementsP3: string;
  acknowledgementsP4: string;
  acknowledgementsP5: string;
  developContributeTitle: string;
  developContributeP1: string;
  emailText: React.ReactNode;
  githubText: React.ReactNode;
  keyboardText: React.ReactNode | null; // Can be null if missing
  finalParagraph: string;
}

// Define translations for static text
// Note: Some links/elements might differ slightly between languages (e.g., keyboard link presence)
// We'll use conditional rendering for those based on locale if needed.
const translations: Record<string, AboutPageTranslation> = {
  en: {
    acknowledgementsTitle: "Acknowledgements",
    acknowledgementsP1: (
      <>
        This website is developed by{" "}
        <Link
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cantonese Computational Linguistics Infrastructure Development
          Workgroup (CanCLID)
        </Link>
        , with the assistance from{" "}
        <Link
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          The Linguistic Society of Hong Kong (LSHK)
        </Link>
        . All codes are open-sourced on{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </Link>
        , contributions are highly welcomed.
      </>
    ),
    acknowledgementsP2:
      "This site is made possible thanks to the Jyutping Workgroup of LSHK and words.hk. Special thanks to Dr. Chaak-ming Lau, Dr. Kwan-hin Cheung, Dr. Andy Chin, Mr. Raymond Tze and Mr. Zungman Ceoi.",
    acknowledgementsP3:
      "Thank Mr. Lim Hian-tong for providing the Taiwanese Hokkien version of this site.",
    acknowledgementsP4:
      "Thank Mr. 具區句魚 for providing the Wu version of this site.",
    acknowledgementsP5:
      "Thank 以成 (Wong Yising) for providing the Vietnamese version of this site.",
    developContributeTitle: "Develop and Contribute",
    developContributeP1:
      "If you want to get involved or support Jyutping, you can:",
    emailText: (
      <>
        Email to{" "}
        <Link
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
        >
          support@jyutping.org
        </Link>{" "}
        to tell us your thoughts or any feedbacks.
      </>
    ),
    githubText: (
      <>
        Contribute on{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </Link>{" "}
        by opening a new issue or making a new pull request of codes.
      </>
    ),
    keyboardText: (
      <>
        Install and type with
        <Link
          href="/keyboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          Jyutping keyboards
        </Link>
        , and share this site with others.
      </>
    ),
    finalParagraph: "Your help and contribution is always appreciated.",
  },
  yue: {
    acknowledgementsTitle: "鳴謝",
    acknowledgementsP1: (
      <>
        本站由
        <Link
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </Link>
        建成，並得到
        <Link
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </Link>
        嘅協助。網站原始碼全部開源喺
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>
        ，歡迎外界貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組同粵典對本站嘅支持。特別鳴謝 Chaak-ming Lau 博士、Andy Chin 博士、Kwan-hin Cheung 博士、Raymond Tze 先生同 Zungman Ceoi 先生爲建設本站提供嘅幫助。",
    acknowledgementsP3: "感謝 Lim Hian-tong 先生提供本站臺灣閩南語版本。",
    acknowledgementsP4: "感謝具區句魚先生提供本站吳語版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發同貢獻",
    developContributeP1: "若果閣下想支持粵拼或者參與我哋嘅事務，你可以：",
    emailText: (
      <>
        傳送電郵至{" "}
        <Link
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
        >
          support@jyutping.org
        </Link>{" "}
        話畀我哋知你嘅諗法或者回饋意見。
      </>
    ),
    githubText: (
      <>
        喺{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </Link>{" "}
        上面新開一個 issue 討論或者代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝同使用
        <Link
          href="/keyboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵拼輸入法
        </Link>
        嚟打字，以及同人分享本網站。
      </>
    ),
    finalParagraph:
      "若果閣下識得粵語，並且願意將本網站翻譯成其他語言，請務必以電郵聯絡我哋，我哋非常歡迎你嘅幫助同貢獻。",
  },
  cmn: {
    acknowledgementsTitle: "鸣谢",
    acknowledgementsP1: (
      <>
        本站由
        <Link
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </Link>
        建成，并得到
        <Link
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </Link>
        的協助。網站源碼全部開源在
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>
        ，歡迎外界貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組和粵典對本站的支持。特別鳴謝 Chaak-ming Lau 博士，Kwan-hin Cheung 博士，Andy Chin 博士，Raymond Tze 先生和 Zungman Ceoi 先生爲建設本站提供的幫助。",
    acknowledgementsP3: "感谢 Lim Hian-tong 先生提供本站臺灣闽南语版本。",
    acknowledgementsP4: "感谢具区句鱼先生提供本站吴语版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發及貢獻",
    developContributeP1: "如果你想支持粵拼或參與到我們的事務中，你可以：",
    emailText: (
      <>
        發郵件到
        <Link
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline mx-1"
        >
          support@jyutping.org
        </Link>
        告訴我們你的想法或者反饋意見。
      </>
    ),
    githubText: (
      <>
        在
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>
        上面新開一個 issue 討論或者代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝使用
        <Link
          href="/keyboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵拼輸入法
        </Link>
        打字，以及同人分享本網站。
      </>
    ),
    finalParagraph:
      "如果你熟習粵語和其他語言，并願意把本網站翻譯成其他語言，請務必郵件聯繫我們，我們非常歡迎你的幫助和貢獻。",
  },
  nan: {
    acknowledgementsTitle: "鳴謝",
    acknowledgementsP1: (
      <>
        本站由
        <Link
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </Link>
        建成，並得到
        <Link
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </Link>
        的協助。網站源碼全部開源佇
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>
        ，歡迎外界貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組佮粵典對本站的支持。特別感謝 Chaak-ming Lau 博士，Kwan-hin Cheung 博士，Andy Chin 博士，Raymond Tze 先生佮 Zungman Ceoi 先生為著建設本站所提供的幫助。",
    acknowledgementsP3: "感謝 Lim Hian-tong 先生提供本站臺灣閩南語版本。",
    acknowledgementsP4: "感謝具區句魚先生提供本站吳語版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發佮貢獻",
    developContributeP1: "你若想欲支持粵拼抑是參與阮的事務，你會當：",
    emailText: (
      <>
        寄批
        <Link
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline mx-1"
        >
          support@jyutping.org
        </Link>
        予阮知影你的想法抑是意見。
      </>
    ),
    githubText: (
      <>
        佇{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>{" "}
        頂面開一个新的 issue 討論抑是代碼 pull request。
      </>
    ),
    keyboardText: null, // Missing in NAN source
    finalParagraph:
      "你若會曉粵語佮其他語言，而且願意共這个網站翻譯做其他語言，請你著寄批聯絡阮，阮真歡迎你的幫助佮貢獻。",
  },
  vi: {
    acknowledgementsTitle: "Lời cảm ơn",
    acknowledgementsP1: (
      <>
        Trang web này được phát triển bởi{" "}
        <Link
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          Tổ phát triển cơ sở hạ tầng ngôn ngữ học tính toán tiếng Quảng Đông
          (CanCLID)
        </Link>
        , với sự hỗ trợ của{" "}
        <Link
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          Hội học thuật ngôn ngữ học Hồng Kông (LSHK)
        </Link>
        . Tất cả các mã đều có nguồn mở trên{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>
        , các đóng góp rất được hoan nghênh.
      </>
    ),
    acknowledgementsP2:
      "Trang web này được thực hiện nhờ Tổ Việt bính của LSHK và words.hk. Đặc biệt cảm ơn Tiến sĩ Chaak-ming Lau, Tiến sĩ Andy Chin, Tiến sĩ Kwan-hin Cheung, Ông Raymond Tze và Ông Zungman Ceoi.",
    acknowledgementsP3:
      "Cảm ơn Ông Lim Hian-tong đã cung cấp phiên bản tiếng Phúc Kiến Đài Loan của trang web này.",
    acknowledgementsP4:
      "Cảm ơn Ông 具區句魚 đã cung cấp phiên bản tiếng Ngô của trang web này.",
    acknowledgementsP5:
      "Cảm ơn 以成 (Dĩ Thành) đã cung cấp phiên bản tiếng Việt của trang web này.",
    developContributeTitle: "Phát triển và đóng góp",
    developContributeP1:
      "Nếu bạn muốn tham gia hoặc hỗ trợ Việt bính, bạn có thể:",
    emailText: (
      <>
        Gửi email tới{" "}
        <Link
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
        >
          support@jyutping.org
        </Link>{" "}
        để cho chúng tôi biết suy nghĩ của bạn hoặc bất kỳ phản hồi nào.
      </>
    ),
    githubText: (
      <>
        Đóng góp trên{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </Link>{" "}
        bằng cách mở một issue mới hoặc thực hiện một pull request mới.
      </>
    ),
    keyboardText: (
      <>
        Cài đặt và sử dụng{" "}
        <Link
          href="/keyboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          Bàn phím Việt bính
        </Link>{" "}
        để nhập và chia sẻ trang web này với những người khác.
      </>
    ),
    finalParagraph:
      "Nếu bạn biết tiếng Quảng Đông và các ngôn ngữ khác và sẵn sàng dịch trang web này sang các ngôn ngữ khác, vui lòng liên hệ với chúng tôi qua email. Chúng tôi hoan nghênh sự giúp đỡ và đóng góp của bạn.",
  },
  wuu: {
    acknowledgementsTitle: "鳴謝",
    acknowledgementsP1: (
      <>
        本站由
        <Link
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </Link>
        建成，並得到
        <Link
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </Link>
        个協助。網站源碼全部開源在
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>
        ，歡迎外界个貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組搭粵典對本站个支持。特別鳴謝 Chaak-ming Lau 博士，Andy Chin 博士，Kwan-hin Cheung 博士，Raymond Tze 先生搭 Zungman Ceoi 先生爲建設本站提供个幫助。",
    acknowledgementsP3: "感謝 Lim Hiantong 先生提供本站臺灣閩南語版本。",
    acknowledgementsP4: "感謝具區句魚先生提供本站吳語版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發搭貢獻",
    developContributeP1: "假使儂想支持粵拼或參與我伲个事務，好：",
    emailText: (
      <>
        發郵件到
        <Link
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline mx-1"
        >
          support@jyutping.org
        </Link>
        告訴我伲儂个想法或反饋意見。
      </>
    ),
    githubText: (
      <>
        在{" "}
        <Link
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </Link>{" "}
        上向新開一隻 issue 討論或代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝搭使用
        <Link
          href="/keyboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粵拼輸入法
        </Link>
        打字，以及分享本網站。
      </>
    ),
    finalParagraph:
      "假使儂會得粵語搭別個語言，外加願意拿本網站翻譯成功別他語言，請一定發郵件畀我伲，我伲交關歡迎儂个幫助搭貢獻。",
  },
};

interface AboutPageProps {
  locale: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ locale }) => {
  const t = translations[locale] || translations.en; // Fallback to English

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Column 1: Acknowledgements */}

      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {t.acknowledgementsTitle}
        </h2>
        <p className="mb-4">{t.acknowledgementsP1}</p>
        <p className="mb-4">{t.acknowledgementsP2}</p>
        <p className="mb-4">{t.acknowledgementsP3}</p>
        <p className="mb-4">{t.acknowledgementsP4}</p>
        <p className="mb-4">{t.acknowledgementsP5}</p>
      </div>

      {/* Column 2: Development & Contribution */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {t.developContributeTitle}
        </h2>
        <p className="mb-4">{t.developContributeP1}</p>
        <ul className="list-none space-y-3">
          <li className="flex items-start">
            <IconMail className="mr-2 mt-1 flex-shrink-0 h-5 w-5" />
            <span>{t.emailText}</span>
          </li>
          <li className="flex items-start">
            <IconBrandGithub className="mr-2 mt-1 flex-shrink-0 h-5 w-5" />
            <span>{t.githubText}</span>
          </li>
          {/* Conditionally render keyboard link if text exists for the locale */}
          {t.keyboardText && (
            <li className="flex items-start">
              <IconKeyboard className="mr-2 mt-1 flex-shrink-0 h-5 w-5" />
              <span>{t.keyboardText}</span>
            </li>
          )}
        </ul>
        <p className="mt-4">{t.finalParagraph}</p>
      </div>
    </div>
  );
};

export default AboutPage;
