import type React from "react";
import Alert from "@/components/Alert";
import Audio from "@/components/Audio";
import Chartaudio from "@/components/Chartaudio";

// Define an interface for the translation structure
interface JyutpingPageTranslation {
  intro?: string; // Optional intro paragraph
  alertIpaTitle: string;
  alertIpaContent: React.ReactNode;
  onsetHeading: string;
  onsetTableHeaders: string[]; // Bilabial, Labio-dental, etc.
  onsetRowHeaders: string[]; // Plosive, Nasal, etc.
  alertNullInitial: React.ReactNode;
  syllabicNasalHeading: string;
  finalHeading: string;
  nucleiHeading: string;
  codaHeading: string;
  codaRowHeaders: string[]; // Plosive, Nasal, Vowel
  finalsChartHeading: string;
  finalsChartColHeaders1: string[]; // Monothong, Diphthong, Nasal coda, Plosive coda
  finalsChartColHeaders2: string[]; // -, -i, -u, -m, -n, -ng, -p, -t, -k
  finalsChartRowHeader: string; // Nuclei
  alertAddedFinals: React.ReactNode;
  toneHeading: string;
  toneTableHeaders: string[]; // 平, 上, 去, 入
  toneRowHeaders: string[]; // 陰, 陽
  alertToneMarks: React.ReactNode;
  referenceHeading: string;
  referenceId: string;
}

// Define translations
const translations: Record<string, JyutpingPageTranslation> = {
  en: {
    alertIpaTitle: "About IPA transcriptions",
    alertIpaContent: (
      <p>
        All IPA transcriptions on this page are phonemic transcriptions，source
        of the audio data is
        <a
          href="https://words.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          粵典 works.hk
        </a>
        . For further details please see
        <a href="#reference" className="text-blue-600 hover:underline">
          Reference
        </a>
        .
      </p>
    ),
    onsetHeading: "1. Onset",
    onsetTableHeaders: [
      "Bilabial",
      "Labio-dental",
      "Alveolar-dental",
      "Palatal",
      "Velar",
      "Glottal",
    ],
    onsetRowHeaders: [
      "Plosive",
      "Nasal",
      "Affricate",
      "Fricative",
      "Approximant",
      "Lateral Approximant",
    ],
    alertNullInitial: (
      <p>
        Null initial is not represented, e.g. &quot;呀&quot; is only spelt as
        &quot;aa&quot;.
      </p>
    ),
    syllabicNasalHeading: "2. Syllabic nasal",
    finalHeading: "3. Final",
    nucleiHeading: "3.1 Nuclei",
    codaHeading: "3.2 Coda",
    codaRowHeaders: ["Plosive", "Nasal", "Vowel"],
    finalsChartHeading: "3.3 Finals Chart",
    finalsChartColHeaders1: [
      "Monothong",
      "Diphthong",
      "Nasal coda",
      "Plosive coda",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "Nuclei",
    alertAddedFinals: (
      <p>
        <strong>a</strong> and <strong>oet</strong> were added in 2018. Please
        see
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          here
        </a>
        for further information.
      </p>
    ),
    toneHeading: "4. Tone",
    toneTableHeaders: ["平", "上", "去", "入"], // Keep Chinese characters for tone categories
    toneRowHeaders: ["陰", "陽"], // Keep Chinese characters for tone categories
    alertToneMarks: (
      <>
        <p>Tone marks appear at the end of the syllables.</p>
        <p>
          <strong>Examples:</strong>
          fu1 (夫), fu2 (虎), fu3 (副), fu4 (扶), fu5 (婦), fu6 (父)
        </p>
      </>
    ),
    referenceHeading: "Reference",
    referenceId: "reference",
  },
  yue: {
    intro: "「香港語言學學會粵語拼音方案」，簡稱「粵拼」。",
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本頁面所用國際音標轉寫皆係寬式轉寫，錄音數據來源係粵典。詳情請見
        <a href="#references-yue" className="text-blue-600 hover:underline">
          參考文獻
        </a>
        一節。
      </p>
    ),
    onsetHeading: "1. 聲母表",
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母唔用字母做標記，例如「呀」只拼作 aa。</p>,
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartHeading: "3.3 韻母表",
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 同 <strong>oet</strong> 於 2018 年新增。詳情請睇
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          呢度
        </a>
        。
      </p>
    ),
    toneHeading: "4. 字調",
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標喺音節後面。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    referenceHeading: "參考文獻",
    referenceId: "references-yue",
  },
  cmn: {
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本頁面所用國際音標轉寫皆爲寬式轉寫，錄音數據來源爲粵典。詳情請見
        <a href="#references-cmn" className="text-blue-600 hover:underline">
          參考文獻
        </a>
        一節。
      </p>
    ),
    onsetHeading: "1. 聲母表",
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    // Note: Same as Yue, might need specific Cmn phrasing if available
    alertNullInitial: <p>零聲母唔用字母做標記，例如「呀」只拼作 aa。</p>,
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartHeading: "3.3 韻母表",
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 和 <strong>oet</strong> 於 2018 年新增。詳情請看
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          這裏
        </a>
        。
      </p>
    ),
    toneHeading: "4. 字調",
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標在音節後。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    referenceHeading: "參考文獻",
    referenceId: "references-cmn",
  },
  nan: {
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本頁面所用的國際音標轉寫攏是寬式轉寫，錄音數 據來源是粵典。詳情請看
        <a href="#references-nan" className="text-blue-600 hover:underline">
          參考文獻
        </a>
        遐。
      </p>
    ),
    onsetHeading: "1. 聲母表",
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母無用字母做標記，譬如講「呀」干焦拼做 aa。</p>,
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartHeading: "3.3 韻母表",
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 佮 <strong>oet</strong> 佇 2018 年新增。詳情請 看
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          遮
        </a>
        。
      </p>
    ),
    toneHeading: "4. 字調",
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標佇音節後壁。</p>
        <p>
          <strong>舉例：</strong> fu1 （夫），fu2 （虎）, fu3 （副）, fu4
          （扶）, fu5 （婦）, fu6 （父 ）
        </p>
      </>
    ),
    referenceHeading: "參考文獻",
    referenceId: "references-nan",
  },
  vi: {
    alertIpaTitle: "Về phiên âm IPA",
    alertIpaContent: (
      <p>
        Tất cả các phiên âm IPA trên trang này đều là chuyển tả âm vị, nguồn của
        dữ liệu âm thanh là
        <a
          href="https://words.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          粵典 works.hk
        </a>
        . Để biết thêm chi tiết vui lòng xem
        <a href="#references-vi" className="text-blue-600 hover:underline">
          Tham khảo
        </a>
        .
      </p>
    ),
    onsetHeading: "1. Thanh mẫu",
    onsetTableHeaders: [
      "Âm đôi môi",
      "Âm môi răng",
      "Âm răng",
      "Âm vòm",
      "Âm vòm mềm",
      "Âm hầu",
    ],
    onsetRowHeaders: [
      "Âm bật",
      "Âm tắc xát",
      "Âm mũi",
      "Âm xát",
      "Âm tiếp cận",
      "Âm tiếp cận cạnh lưỡi",
    ],
    alertNullInitial: (
      <p>
        Không thanh mẫu không cầu dấu chữ cái, ví dụ: &quot;呀&quot; chỉ được
        đánh thành &quot;aa&quot;.
      </p>
    ),
    syllabicNasalHeading: "2. Âm tiết mũi",
    finalHeading: "3. Vận mẫu",
    nucleiHeading: "3.1 Nguyên âm trong vận mẫu",
    codaHeading: "3.2 Âm cuối vận mẫu",
    codaRowHeaders: ["Âm bật", "Âm mũi", "Nguyên âm"],
    finalsChartHeading: "3.3 Tất cả vận mẫu",
    finalsChartColHeaders1: [
      "Nguyên âm đơn",
      "Nguyên âm kép",
      "Âm mũi cuối vận mẫu",
      "Âm bật cuối vận mẫu (Thanh nhập)",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "Nguyên âm trong vận mẫu",
    alertAddedFinals: (
      <p>
        <strong>a</strong> và <strong>oet</strong> đã được thêm vào năm 2018.
        Chi tiết vui lòng xem tại
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          đây
        </a>
        .
      </p>
    ),
    toneHeading: "4. Thanh điệu",
    toneTableHeaders: ["Bằng", "Thượng", "Khứ", "Nhập"],
    toneRowHeaders: ["Âm", "Dương"],
    alertToneMarks: (
      <>
        <p>Thanh điệu được đánh dấu sau âm tiết.</p>
        <p>
          <strong>Thí dụ:</strong> fu1 （夫），fu2 （虎）, fu3 （副）, fu4
          （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    referenceHeading: "Tham khảo",
    referenceId: "references-vi",
  },
  wuu: {
    intro: "「香港語言學學會粵語拼音方案」，略稱「粵拼」。",
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本葉面用个國際音標轉寫全是寬式轉寫，錄音數據來自粵典。具體請參
        <a href="#references-wuu" className="text-blue-600 hover:underline">
          參考文獻
        </a>
        一節。
      </p>
    ),
    onsetHeading: "1. 聲母表",
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母弗用字母做標記，譬方「呀」單單是 aa。</p>,
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartHeading: "3.3 韻母表",
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 搭 <strong>oet</strong> 是 2018 年新增。具體請參
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          此地
        </a>
        。
      </p>
    ),
    toneHeading: "4. 字調",
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標在音節後。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    referenceHeading: "參考文獻",
    referenceId: "references-wuu",
  },
};

interface JyutpingPageProps {
  locale: string;
}

const JyutpingPage: React.FC<JyutpingPageProps> = ({ locale }) => {
  const t = translations[locale] || translations.en; // Fallback to English

  return (
    <>
      {t.intro && <p className="text-lg mb-6 font-semibold">{t.intro}</p>}

      <Chartaudio />

      <Alert title={t.alertIpaTitle}>{t.alertIpaContent}</Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">{t.onsetHeading}</h2>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="tg-50s5 border p-2" />
              {t.onsetTableHeaders.map((header) => (
                <th key={header} className="border p-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{t.onsetRowHeaders[0]}</td>
              <td className="border p-2">
                b [p] 巴 <Audio id="baa1" />
                <br />p [pʰ] 怕 <Audio id="paa3" />
              </td>
              <td className="border p-2" />
              <td className="border p-2">
                d [t] 打 <Audio id="daa2" />
                <br />t [tʰ] 他 <Audio id="taa1" />
              </td>
              <td className="border p-2" />
              <td className="border p-2">
                g [k] 家 <Audio id="gaa1" />
                <br />k [kʰ] 卡 <Audio id="kaa1" />
                <br />
                gw [kʷ] 瓜 <Audio id="gwaa1" />
                <br />
                kw [kʷʰ] 夸 <Audio id="kwaa1" />
              </td>
              <td className="border p-2" />
            </tr>
            {/* Yue/Cmn/Nan/Wuu have Affricate row here, En/Vi have Nasal */}
            {["yue", "cmn", "nan", "wuu"].includes(locale) ? (
              <tr>
                <td className="border p-2">{t.onsetRowHeaders[1]}</td>
                {/* Affricate */}
                <td className="border p-2" />
                <td className="border p-2" />
                <td className="border p-2">
                  z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                  <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
                </td>
                <td className="border p-2" />
                <td className="border p-2" />
                <td className="border p-2" />
              </tr>
            ) : (
              <tr>
                <td className="border p-2">{t.onsetRowHeaders[1]}</td>
                {/* Nasal */}
                <td className="border p-2">
                  m [m] 媽 <Audio id="maa1" />
                </td>
                <td className="border p-2" />
                <td className="border p-2">
                  n [n] 那 <Audio id="naa5" />
                </td>
                <td className="border p-2" />
                <td className="border p-2">
                  ng [ŋ] 牙 <Audio id="ngaa4" />
                </td>
                <td className="border p-2" />
              </tr>
            )}
            {/* Yue/Cmn/Nan/Wuu have Nasal row here, En/Vi have Affricate */}
            {["yue", "cmn", "nan", "wuu"].includes(locale) ? (
              <tr>
                <td className="border p-2">{t.onsetRowHeaders[2]}</td>
                {/* Nasal */}
                <td className="border p-2">
                  m [m] 媽 <Audio id="maa1" />
                </td>
                <td className="border p-2" />
                <td className="border p-2">
                  n [n] 那 <Audio id="naa5" />
                </td>
                <td className="border p-2" />
                <td className="border p-2">
                  ng [ŋ] 牙 <Audio id="ngaa4" />
                </td>
                <td className="border p-2" />
              </tr>
            ) : (
              <tr>
                <td className="border p-2">{t.onsetRowHeaders[2]}</td>
                {/* Affricate */}
                <td className="border p-2" />
                <td className="border p-2" />
                <td className="border p-2">
                  z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                  <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
                </td>
                <td className="border p-2" />
                <td className="border p-2" />
                <td className="border p-2" />
              </tr>
            )}
            <tr>
              <td className="border p-2">{t.onsetRowHeaders[3]}</td>
              {/* Fricative */}
              <td className="border p-2" />
              <td className="border p-2">
                f [f] 花 <Audio id="faa1" />
              </td>
              <td className="border p-2">
                s [s] 沙 <Audio id="saa1" />
              </td>
              <td className="border p-2" />
              <td className="border p-2" />
              <td className="border p-2">
                h [h] 蝦 <Audio id="haa1" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">{t.onsetRowHeaders[4]}</td>
              {/* Approximant */}
              <td className="border p-2">
                w [w] 蛙 <Audio id="waa1" />
              </td>
              <td className="border p-2" />
              <td className="border p-2" />
              <td className="border p-2">
                j [j] 也 <Audio id="jaa5" />
              </td>
              <td className="border p-2" />
              <td className="border p-2" />
            </tr>
            <tr>
              <td className="border p-2">{t.onsetRowHeaders[5]}</td>
              {/* Lateral Approximant */}
              <td className="border p-2" />
              <td className="border p-2" />
              <td className="border p-2">
                l [l] 啦 <Audio id="laa1" />
              </td>
              <td className="border p-2" />
              <td className="border p-2" />
              <td className="border p-2" />
            </tr>
          </tbody>
        </table>
      </div>

      <Alert>{t.alertNullInitial}</Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">
        {t.syllabicNasalHeading}
      </h2>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border p-2">
                m [m̩] 唔 <Audio id="m4" />
              </th>
              <th className="border p-2">
                ng [ŋ̩] 吳 <Audio id="ng4" />
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4">{t.finalHeading}</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-3">{t.nucleiHeading}</h3>

      {/* Nuclei Table - Modified */}
      <div className="overflow-x-auto">
        <table className="my-4 border border-collapse border-gray-300">
          <tbody>
            <tr>
              <td className="border p-2">
                i [iː] 詩 <Audio id="si1" />
                <br />i<sub>後接 -ng, -k</sub> [e] 星 <Audio id="sing1" /> 識
                <Audio id="sik1" />
                <br />
                yu [y] 書 <Audio id="syu1" />
              </td>
              <td className="border p-2" />
              <td className="border p-2">
                {/* Changed from th */}
                u [uː] 夫 <Audio id="fu1" />
                <br />u<sub>後接 -ng, -k</sub> [o] 風 <Audio id="fung1" /> 福
                <Audio id="fuk1" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                e<sub>後接 -i</sub> [e] 四 <Audio id="sei3" />
                <br />
                eo [ɵ] 詢 <Audio id="seon1" />
              </td>
              <td className="border p-2" />
              <td className="border p-2">
                o<sub>後接 -u</sub> [o] 蘇 <Audio id="sou1" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                e [ɛː] 些 <Audio id="se1" />
                <br />
                oe [œː] 鋸 <Audio id="goe3" />
              </td>
              <td className="border p-2">
                a [ɐ] 新 <Audio id="san1" />
              </td>
              <td className="border p-2">
                o [ɔː] 疏 <Audio id="so1" />
              </td>
            </tr>
            <tr>
              <td className="border p-2" />
              <td className="border p-2">
                aa [aː] 沙 <Audio id="saa1" />
              </td>
              <td className="border p-2" />
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mt-6 mb-3">{t.codaHeading}</h3>

      {/* Coda Table - Modified */}
      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <tbody>
            <tr>
              <td className="border p-2">{t.codaRowHeaders[0]}</td>
              {/* Changed from th */}
              <td className="border p-2">
                {/* Changed from th */}
                p [p̚] 溼 <Audio id="sap1" />
              </td>
              <td className="border p-2">
                {/* Changed from th */}
                t [t̚] 失 <Audio id="sat1" />
              </td>
              <td className="border p-2">
                {/* Changed from th */}
                k [k̚] 塞 <Audio id="sak1" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">{t.codaRowHeaders[1]}</td>
              <td className="border p-2">
                m [m] 心 <Audio id="sam1" />
              </td>
              <td className="border p-2">
                n [n] 身 <Audio id="san1" />
              </td>
              <td className="border p-2">
                ng [ŋ] 生 <Audio id="sang1" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">{t.codaRowHeaders[2]}</td>
              <td className="border p-2" />
              <td className="border p-2">
                i [i] 西 <Audio id="sai1" /> 需 <Audio id="seoi1" />
              </td>
              <td className="border p-2">
                u [u] 收 <Audio id="sau1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mt-6 mb-3">
        {t.finalsChartHeading}
      </h3>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300 text-xs">
          <thead>
            <tr>
              <th className="border p-1" colSpan={2} rowSpan={2}>
                {t.finalsChartRowHeader}
              </th>
              <th className="border p-1">{t.finalsChartColHeaders1[0]}</th>
              <th className="border p-1" colSpan={2}>
                {t.finalsChartColHeaders1[1]}
              </th>
              <th className="border p-1" colSpan={3}>
                {t.finalsChartColHeaders1[2]}
              </th>
              <th className="border p-1" colSpan={3}>
                {t.finalsChartColHeaders1[3]}
              </th>
            </tr>
            <tr>
              {t.finalsChartColHeaders2.map((header) => (
                <td key={header} className="tg-solh border p-1">
                  {header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-1" rowSpan={2}>
                i
              </td>
              <td className="border p-1">[iː]</td>
              <td className="border p-1">
                i 思 <Audio id="si1" />
              </td>
              <td className="border p-1 bg-gray-300" />
              <td className="border p-1">
                iu 消 <Audio id="siu1" />
              </td>
              <td className="border p-1">
                im 閃 <Audio id="sim2" />
              </td>
              <td className="border p-1">
                in 先 <Audio id="sin1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1">
                ip 攝 <Audio id="sip3" />
              </td>
              <td className="border p-1">
                it 泄 <Audio id="sit3" />
              </td>
              <td className="border p-1" />
            </tr>
            <tr>
              <td className="border p-1">[e]</td>
              <td className="border p-1" />
              <td className="border p-1 bg-gray-300" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                ing 升 <Audio id="sing1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                ik 識 <Audio id="sik1" />
              </td>
            </tr>
            <tr>
              <td className="border p-1">yu</td>
              <td className="border p-1">[yː]</td>
              <td className="border p-1">
                yu 書 <Audio id="syu1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                yun 孫 <Audio id="syun1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                yut 雪 <Audio id="syut3" />
              </td>
              <td className="border p-1" />
            </tr>
            <tr>
              <td className="border p-1" rowSpan={2}>
                u
              </td>
              <td className="border p-1">[uː]</td>
              <td className="border p-1">
                u 夫 <Audio id="fu1" />
              </td>
              <td className="border p-1">
                ui 灰 <Audio id="fui1" />
              </td>
              <td className="border p-1 bg-gray-300" />
              <td className="border p-1" />
              <td className="border p-1">
                un 歡 <Audio id="fun1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                ut 闊 <Audio id="fut3" />
              </td>
              <td className="border p-1" />
            </tr>
            <tr>
              <td className="border p-1">[o]</td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1 bg-gray-300" />
              <td className="border p-1">um</td>
              <td className="border p-1" />
              <td className="border p-1">
                ung 風 <Audio id="fung1" />
              </td>
              <td className="border p-1">up</td>
              <td className="border p-1" />
              <td className="border p-1">
                uk 福 <Audio id="fuk1" />
              </td>
            </tr>
            <tr>
              <td className="border p-1" rowSpan={2}>
                e
              </td>
              <td className="border p-1">[e]</td>
              <td className="border p-1" />
              <td className="border p-1">
                ei 四 <Audio id="sei3" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">en </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
            </tr>
            <tr>
              <td className="border p-1">[ɛː]</td>
              <td className="border p-1">
                e 些 <Audio id="se1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1">
                eu 掉 <Audio id="deu6" />
              </td>
              <td className="border p-1">
                em 舐 <Audio id="lem2" />
              </td>
              <td className="border p-1" />
              <td className="border p-1">
                eng 鄭 <Audio id="zeng6" />
              </td>
              <td className="border p-1">
                ep 夾 <Audio id="gep6" />
              </td>
              <td className="border p-1">
                et 坺 <Audio id="pet6" />
              </td>
              <td className="border p-1">
                ek 石 <Audio id="sek6" />
              </td>
            </tr>
            <tr>
              <td className="border p-1">eo</td>
              <td className="border p-1">[ɵ]</td>
              <td className="border p-1" />
              <td className="border p-1">
                eoi 需 <Audio id="seoi1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                eon 詢 <Audio id="seon1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                eot 摔 <Audio id="seot1" />
              </td>
              <td className="border p-1" />
            </tr>
            <tr>
              <td className="border p-1">oe</td>
              <td className="border p-1">[œː]</td>
              <td className="border p-1">
                oe 鋸 <Audio id="goe3" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                oeng 疆 <Audio id="goeng1" />
              </td>
              <td className="border p-1" />
              <td className="tg-7gzb border p-1 bg-yellow-100">
                oet <Audio id="oet6" />
              </td>
              <td className="border p-1">
                oek 腳 <Audio id="goek3" />
              </td>
            </tr>
            <tr>
              <td className="border p-1" rowSpan={2}>
                o
              </td>
              <td className="border p-1">[o]</td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                ou 好 <Audio id="hou2" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1" />
            </tr>
            <tr>
              <td className="border p-1">[ɔː]</td>
              <td className="border p-1">
                o 可 <Audio id="ho2" />
              </td>
              <td className="border p-1">
                oi 開 <Audio id="hoi1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1" />
              <td className="border p-1">
                on 看 <Audio id="hon3" />
              </td>
              <td className="border p-1">
                ong 康 <Audio id="hong1" />
              </td>
              <td className="border p-1" />
              <td className="border p-1">
                ot 喝 <Audio id="hot3" />
              </td>
              <td className="border p-1">
                ok 學 <Audio id="hok6" />
              </td>
            </tr>
            <tr>
              <td className="border p-1">a</td>
              <td className="border p-1">[ɐ]</td>
              <td className="tg-7gzb border p-1 bg-yellow-100">
                a 嘞 <Audio id="la3" />
              </td>
              <td className="border p-1">
                ai 擠 <Audio id="zai1" />
              </td>
              <td className="border p-1">
                au 周 <Audio id="zau1" />
              </td>
              <td className="border p-1">
                am 斟 <Audio id="zam1" />
              </td>
              <td className="border p-1">
                an 珍 <Audio id="zan1" />
              </td>
              <td className="border p-1">
                ang 增 <Audio id="zang1" />
              </td>
              <td className="border p-1">
                ap 汁 <Audio id="zap1" />
              </td>
              <td className="border p-1">
                at 侄 <Audio id="zat6" />
              </td>
              <td className="border p-1">
                ak 則 <Audio id="zak1" />
              </td>
            </tr>
            <tr>
              <td className="border p-1">aa</td>
              <td className="border p-1">[aː]</td>
              <td className="border p-1">
                aa 渣 <Audio id="zaa1" />
              </td>
              <td className="border p-1">
                aai 齋 <Audio id="zaai1" />
              </td>
              <td className="border p-1">
                aau 嘲 <Audio id="zaau1" />
              </td>
              <td className="border p-1">
                aam 站 <Audio id="zaam6" />
              </td>
              <td className="border p-1">
                aan 讚 <Audio id="zaan3" />
              </td>
              <td className="border p-1">
                aang 掙 <Audio id="zaang6" />
              </td>
              <td className="border p-1">
                aap 集 <Audio id="zaap6" />
              </td>
              <td className="border p-1">
                aat 扎 <Audio id="zaat3" />
              </td>
              <td className="border p-1">
                aak 責 <Audio id="zaak6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert color="secondary">{t.alertAddedFinals}</Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">{t.toneHeading}</h2>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="border p-2" />
              {t.toneTableHeaders.map((header) => (
                <th key={header} className="border p-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">{t.toneRowHeaders[0]}</td>
              <td className="border p-2">
                1 [˥] 詩 <Audio id="si1" />
              </td>
              <td className="border p-2">
                2 [˧˥] 史 <Audio id="si2" />
              </td>
              <td className="border p-2">
                3 [˧] 試 <Audio id="si3" />
              </td>
              <td className="border p-2">
                1 [˥] 識 <Audio id="sik1" />
                <br />3 [˧] 洩 <Audio id="sit3" />
              </td>
            </tr>
            <tr>
              <td className="border p-2">{t.toneRowHeaders[1]}</td>
              <td className="border p-2">
                4 [˨˩] 時 <Audio id="si4" />
              </td>
              <td className="border p-2">
                5 [˩˧] 市 <Audio id="si5" />
              </td>
              <td className="border p-2">
                6 [˨] 事 <Audio id="si6" />
              </td>
              <td className="border p-2">
                6 [˨] 蝕 <Audio id="sit6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert>{t.alertToneMarks}</Alert>

      <h2 id={t.referenceId} className="text-3xl font-semibold mt-8 mb-4">
        {t.referenceHeading}
      </h2>
      <div className="prose dark:prose-invert max-w-none text-sm space-y-2">
        <p>
          Bauer, Robert S., and Paul K. Benedict. 2011.
          <em>Modern cantonese phonology</em>. Vol. 102. Walter de Gruyter
        </p>
        <p>
          Mok, Peggy Pik-Ki, and Peggy, Wai-Yi Wong. 2010. Perception of the
          merging tones in Hong Kong Cantonese: preliminary data on
          monosyllables.
          <em>Speech Prosody 2010-Fifth International Conference</em>.
        </p>
        <p>
          Zee, Eric. 1991. Chinese (Hong Kong Cantonese).
          <em>Journal of the International Phonetic Association</em> 21.1:
          46-48.
        </p>
        <p>
          Stephen, Matthews. 1992.
          <em>Jyutping 粵拼 - Cantonese Romanization Scheme</em>. The Linguistic
          Society of Hong Kong.
          <a
            href="https://lshk.org/jyutping-scheme/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://lshk.org/jyutping-scheme/
          </a>
        </p>
        <p>
          人文電算硏究中心 2003：“粵語審音配詞字庫”，關子尹
          主持，“兩文三語敎育網上支援計劃”之工作項目之一，二零零三年一月十二日推出，香港優質敎育基金，存取於二零零七年十一月二十日，
          <a
            href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/
          </a>
          。
        </p>
      </div>
    </>
  );
};

export default JyutpingPage;
