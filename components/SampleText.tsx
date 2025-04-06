import type React from "react";
import Audio from "./Audio"; // Import the existing Audio component

const sampleText =
  "有jau5 一jat1 次ci3 ， \
  北bak1 風fung1 同tung4 太taai3 陽joeng4 喺hai2 度dou6 拗aau3 緊gan2 邊bin1 個go3 叻lek1 啲di1 。 \
  佢keoi5 哋dei6 啱ngaam1 啱ngaam1 睇tai2 到dou2 有jau5 個go3 人jan4 行haang4 過gwo3 ，\
  呢nei1 個go3 人jan4 着zoek3 住zyu6 件gin6 大daai6 褸lau1 。\
  佢keoi5 哋dei6 就zau6 話waa6 嘞laak3 ，\
  邊bin1 個go3 可ho2 以ji5 整zing2 到dou3 呢nei1 個go3 人jan4 除ceoi4 咗zo2 件gin6 褸lau1 呢ne1 ，\
  就zau6 算syun3 邊bin1 個go3 叻lek1 啲di1 嘞laak3 。\
  於jyu1 是si6 ，\
  北bak1 風fung1 就zau6 搏bok3 命meng6 噉gam2 吹ceoi1 。\
  點dim2 知zi1 ，\
  佢keoi5 越jyut6 吹ceoi1 得dak1 犀sai1 利lei6 ，\
  嗰go2 個go3 人jan4 就zau6 越jyut6 係hai6 揦laa2 實sat6 件gin6 褸lau1 。\
  最zeoi3 後hau6 ，\
  北bak1 風fung1 冇mou5 晒saai3 符fu4 ，\
  唯wai4 有jau5 放fong3 棄hei3 。\
  跟gan1 住zyu6 ， \
  太taai3 陽joeng4 出ceot1 嚟lai4 曬saai3 咗zo2 一jat1 陣zan6 ，\
  嗰go2 個go3 人jan4 就zau6 即zik1 刻hak1 除ceoi4 咗zo2 件gin6 褸lau1 嘞laak3 。\
  於jyu1 是si6 ，\
  北bak1 風fung1 唯wai4 有jau5 認jing6 輸syu1 啦laa1 。";

// Function to parse the text into character/jyutping pairs
const parseText = (
  text: string
): { char: string; jyutping: string | null }[] => {
  const result: { char: string; jyutping: string | null }[] = [];

  // Split by spaces first to handle multi-character words correctly if needed,
  // but for this specific text, processing character by character seems intended.
  // We'll stick to the regex approach for individual char/jyutping pairs.

  // Simpler approach for this specific format: split by space, then separate char and jyutping
  const pairs = text.split(/\s+/).filter(Boolean); // Split by one or more spaces and remove empty strings

  for (const pair of pairs) {
    const char = pair.charAt(0);
    // Check if the rest of the string looks like Jyutping (letters followed by a digit)
    const potentialJyutping = pair.substring(1);
    if (/^[a-z]+\d$/.test(potentialJyutping)) {
      result.push({ char, jyutping: potentialJyutping });
    } else {
      // Handle punctuation or characters without Jyutping
      result.push({ char: pair, jyutping: null }); // Treat the whole 'pair' as the character if no valid jyutping
    }
  }

  return result;
};

const SampleText: React.FC = () => {
  const parsedItems = parseText(sampleText);
  const uniqueJyutpings = [
    ...new Set(parsedItems.map((item) => item.jyutping).filter(Boolean)),
  ] as string[]; // Filter out nulls and ensure string type

  return (
    <div className="my-6 p-4 border rounded-md">
      {/* Hidden audio elements */}
      <div style={{ display: "none" }}>
        {uniqueJyutpings.map((jp) => (
          <audio key={jp} id={jp} src={`/audio/${jp}.mp3`} preload="none">
            <track kind="captions" />
          </audio>
        ))}
      </div>

      {/* Display text with audio buttons */}
      <div className="flex flex-wrap items-end leading-loose">
        {parsedItems.map((item, index) => (
          // Use a more stable key combining content and index
          <div
            key={`${item.char}-${item.jyutping || "null"}-${index}`}
            className="inline-flex flex-col items-center mx-1"
          >
            {/* Audio button above character */}
            {item.jyutping ? (
              <Audio id={item.jyutping} />
            ) : (
              <span className="h-6 w-6 inline-block" /> // Placeholder for alignment (self-closing)
            )}
            {/* Character */}
            <span className="text-4xl font-chiron my-1">{item.char}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleText;
