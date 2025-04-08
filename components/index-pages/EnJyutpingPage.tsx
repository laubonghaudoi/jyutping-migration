import type React from "react";
import Alert from "@/components/Alert";
import Audio from "@/components/Audio";
import Chartaudio from "@/components/Chartaudio";

const EnJyutpingPage: React.FC = () => {
  return (
    <>
      <Chartaudio />

      <Alert title="About IPA transcriptions">
        <p>
          All IPA transcriptions on this page are phonemic
          transcriptions，source of the audio data is{" "}
          <a
            href="https://words.hk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            粵典 works.hk
          </a>
          . For further details please see{" "}
          <a href="#reference" className="text-blue-600 hover:underline">
            Reference
          </a>
          .
        </p>
      </Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1. Onset</h2>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="tg-50s5 border p-2" />
              <th className="tg-ed5u border p-2">Bilabial</th>
              <th className="tg-ed5u border p-2">Labio-dental</th>
              <th className="tg-ed5u border p-2">Alveolar-dental</th>
              <th className="tg-ed5u border p-2">Palatal</th>
              <th className="tg-ed5u border p-2">Velar</th>
              <th className="tg-ed5u border p-2">Glottal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-99yb border p-2">Plosive</td>
              <td className="tg-0o7j border p-2">
                b [p] 巴 <Audio id="baa1" />
                <br />p [pʰ] 怕 <Audio id="paa3" />
              </td>
              <td className="tg-0o7j border p-2" />
              <td className="tg-aqzh border p-2">
                d [t] 打 <Audio id="daa2" />
                <br />t [tʰ] 他 <Audio id="taa1" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                g [k] 家 <Audio id="gaa1" />
                <br />k [kʰ] 卡 <Audio id="kaa1" />
                <br />
                gw [kʷ] 瓜 <Audio id="gwaa1" />
                <br />
                kw [kʷʰ] 夸 <Audio id="kwaa1" />
              </td>
              <td className="tg-aqzh border p-2" />
            </tr>
            <tr>
              <td className="tg-99yb border p-2">Nasal</td>
              <td className="tg-aqzh border p-2">
                m [m] 媽 <Audio id="maa1" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                n [n] 那 <Audio id="naa5" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                ng [ŋ] 牙 <Audio id="ngaa4" />
              </td>
              <td className="tg-aqzh border p-2" />
            </tr>
            <tr>
              <td className="tg-99yb border p-2">Affricate</td>
              <td className="tg-0o7j border p-2" />
              <td className="tg-0o7j border p-2" />
              <td className="tg-aqzh border p-2">
                z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
            </tr>
            <tr>
              <td className="tg-99yb border p-2">Fricative</td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                f [f] 花 <Audio id="faa1" />
              </td>
              <td className="tg-aqzh border p-2">
                s [s] 沙 <Audio id="saa1" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                h [h] 蝦 <Audio id="haa1" />
              </td>
            </tr>
            <tr>
              <td className="tg-99yb border p-2">Approximant</td>
              <td className="tg-aqzh border p-2">
                w [w] 蛙 <Audio id="waa1" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                j [j] 也 <Audio id="jaa5" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
            </tr>
            <tr>
              <td className="tg-99yb border p-2">Lateral Approximant</td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2">
                l [l] 啦 <Audio id="laa1" />
              </td>
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
              <td className="tg-aqzh border p-2" />
            </tr>
          </tbody>
        </table>
      </div>

      <Alert>
        Null initial is not represented, e.g. &quot;呀&quot; is only spelt as
        &quot;aa&quot;.
      </Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">2. Syllabic nasal</h2>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="tg-8oy2 border p-2">
                m [m̩] 唔 <Audio id="m4" />
              </th>
              <th className="tg-8oy2 border p-2">
                ng [ŋ̩] 吳 <Audio id="ng4" />
              </th>
            </tr>
          </thead>
        </table>
      </div>

      <h2 className="text-3xl font-semibold mt-8 mb-4">3. Final</h2>

      <h3 className="text-2xl font-semibold mt-6 mb-3">3.1 Nuclei</h3>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="tg-teg3 border p-2">
                i [iː] 詩 <Audio id="si1" />
                <br />i<sub>followed by -ng, -k</sub> [e] 星{" "}
                <Audio id="sing1" /> 識 <Audio id="sik1" />
                <br />
                yu [y] 書 <Audio id="syu1" />
              </th>
              <th className="tg-lnec border p-2" />
              <th className="tg-teg3 border p-2">
                u [uː] 夫 <Audio id="fu1" />
                <br />u<sub>followed by -ng, -k</sub> [o] 風{" "}
                <Audio id="fung1" /> 福 <Audio id="fuk1" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-teg3 border p-2">
                e<sub>followed by -i</sub> [e] 四 <Audio id="sei3" />
                <br />
                eo [ɵ] 詢 <Audio id="seon1" />
              </td>
              <td className="tg-teg3 border p-2" />
              <td className="tg-teg3 border p-2">
                o<sub>followed by -u</sub> [o] 蘇 <Audio id="sou1" />
              </td>
            </tr>
            <tr>
              <td className="tg-teg3 border p-2">
                e [ɛː] 些 <Audio id="se1" />
                <br />
                oe [œː] 鋸 <Audio id="goe3" />
              </td>
              <td className="tg-teg3 border p-2">
                a [ɐ] 新 <Audio id="san1" />
              </td>
              <td className="tg-teg3 border p-2">
                o [ɔː] 疏 <Audio id="so1" />
              </td>
            </tr>
            <tr>
              <td className="tg-lnec border p-2" />
              <td className="tg-teg3 border p-2">
                aa [aː] 沙 <Audio id="saa1" />
              </td>
              <td className="tg-teg3 border p-2" />
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mt-6 mb-3">3.2 Coda</h3>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="tg-ed5u border p-2">Plosive</th>
              <th className="tg-8oy2 border p-2">
                p [p̚] 溼 <Audio id="sap1" />
              </th>
              <th className="tg-8oy2 border p-2">
                t [t̚] 失 <Audio id="sat1" />
              </th>
              <th className="tg-8oy2 border p-2">
                k [k̚] 塞 <Audio id="sak1" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-ed5u border p-2">Nasal</td>
              <td className="tg-8oy2 border p-2">
                m [m] 心 <Audio id="sam1" />
              </td>
              <td className="tg-8oy2 border p-2">
                n [n] 身 <Audio id="san1" />
              </td>
              <td className="tg-8oy2 border p-2">
                ng [ŋ] 生 <Audio id="sang1" />
              </td>
            </tr>
            <tr>
              <td className="tg-ed5u border p-2">Vowel</td>
              <td className="tg-8oy2 border p-2" />
              <td className="tg-8oy2 border p-2">
                i [i] 西 <Audio id="sai1" /> 需 <Audio id="seoi1" />
              </td>
              <td className="tg-8oy2 border p-2">
                u [u] 收 <Audio id="sau1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-semibold mt-6 mb-3">3.3 Finals Chart</h3>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300 text-xs">
          <thead>
            <tr>
              <th className="tg-pmgz border p-1" colSpan={2} rowSpan={2}>
                Nuclei
              </th>
              <th className="tg-pmgz border p-1">Monothong</th>
              <th className="tg-pmgz border p-1" colSpan={2}>
                Diphthong
              </th>
              <th className="tg-pmgz border p-1" colSpan={3}>
                Nasal coda
              </th>
              <th className="tg-pmgz border p-1" colSpan={3}>
                Plosive coda
              </th>
            </tr>
            <tr>
              <td className="tg-solh border p-1">-</td>
              <td className="tg-solh border p-1">-i</td>
              <td className="tg-solh border p-1">-u</td>
              <td className="tg-solh border p-1">-m</td>
              <td className="tg-solh border p-1">-n</td>
              <td className="tg-solh border p-1">-ng</td>
              <td className="tg-solh border p-1">-p</td>
              <td className="tg-solh border p-1">-t</td>
              <td className="tg-solh border p-1">-k</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-i8xi border p-1" rowSpan={2}>
                {" "}
                i
              </td>
              <td className="tg-cdar border p-1">[iː]</td>
              <td className="tg-ssw7 border p-1">
                i 思 <Audio id="si1" />
              </td>
              <td className="tg-dgfm border p-1 bg-gray-300" />
              <td className="tg-ssw7 border p-1">
                iu 消 <Audio id="siu1" />
              </td>
              <td className="tg-ssw7 border p-1">
                im 閃 <Audio id="sim2" />
              </td>
              <td className="tg-ssw7 border p-1">
                in 先 <Audio id="sin1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ip 攝 <Audio id="sip3" />
              </td>
              <td className="tg-ssw7 border p-1">
                it 泄 <Audio id="sit3" />
              </td>
              <td className="tg-ssw7 border p-1" />
            </tr>
            <tr>
              <td className="tg-cdar border p-1">[e]</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-dgfm border p-1 bg-gray-300" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ing 升 <Audio id="sing1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ik 識 <Audio id="sik1" />
              </td>
            </tr>
            <tr>
              <td className="tg-i8xi border p-1">yu</td>
              <td className="tg-cdar border p-1">[yː]</td>
              <td className="tg-ssw7 border p-1">
                yu 書 <Audio id="syu1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                yun 孫 <Audio id="syun1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                yut 雪 <Audio id="syut3" />
              </td>
              <td className="tg-ssw7 border p-1" />
            </tr>
            <tr>
              <td className="tg-i8xi border p-1" rowSpan={2}>
                u
              </td>
              <td className="tg-cdar border p-1">[uː]</td>
              <td className="tg-ssw7 border p-1">
                u 夫 <Audio id="fu1" />
              </td>
              <td className="tg-ssw7 border p-1">
                ui 灰 <Audio id="fui1" />
              </td>
              <td className="tg-dgfm border p-1 bg-gray-300" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                un 歡 <Audio id="fun1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ut 闊 <Audio id="fut3" />
              </td>
              <td className="tg-ssw7 border p-1" />
            </tr>
            <tr>
              <td className="tg-cdar border p-1">[o]</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-dgfm border p-1 bg-gray-300" />
              <td className="tg-ssw7 border p-1">um</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ung 風 <Audio id="fung1" />
              </td>
              <td className="tg-ssw7 border p-1">up</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                uk 福 <Audio id="fuk1" />
              </td>
            </tr>
            <tr>
              <td className="tg-i8xi border p-1" rowSpan={2}>
                e
              </td>
              <td className="tg-cdar border p-1">[e]</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ei 四 <Audio id="sei3" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">en</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
            </tr>
            <tr>
              <td className="tg-cdar border p-1">[ɛː]</td>
              <td className="tg-ssw7 border p-1">
                e 些 <Audio id="se1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                eu 掉 <Audio id="deu6" />
              </td>
              <td className="tg-ssw7 border p-1">
                em 舐 <Audio id="lem2" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                eng 鄭 <Audio id="zeng6" />
              </td>
              <td className="tg-ssw7 border p-1">
                ep 夾 <Audio id="gep6" />
              </td>
              <td className="tg-ssw7 border p-1">
                et 坺 <Audio id="pet6" />
              </td>
              <td className="tg-ssw7 border p-1">
                ek 石 <Audio id="sek6" />
              </td>
            </tr>
            <tr>
              <td className="tg-i8xi border p-1">eo</td>
              <td className="tg-cdar border p-1">[ɵ]</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                eoi 需 <Audio id="seoi1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                eon 詢 <Audio id="seon1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                eot 摔 <Audio id="seot1" />
              </td>
              <td className="tg-ssw7 border p-1" />
            </tr>
            <tr>
              <td className="tg-i8xi border p-1">oe</td>
              <td className="tg-cdar border p-1">[œː]</td>
              <td className="tg-ssw7 border p-1">
                oe 鋸 <Audio id="goe3" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                oeng 疆 <Audio id="goeng1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-7gzb border p-1 bg-yellow-100">
                oet <Audio id="oet6" />
              </td>
              <td className="tg-ssw7 border p-1">
                oek 腳 <Audio id="goek3" />
              </td>
            </tr>
            <tr>
              <td className="tg-i8xi border p-1" rowSpan={2}>
                o
              </td>
              <td className="tg-cdar border p-1">[o]</td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ou 好 <Audio id="hou2" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
            </tr>
            <tr>
              <td className="tg-cdar border p-1">[ɔː]</td>
              <td className="tg-ssw7 border p-1">
                o 可 <Audio id="ho2" />
              </td>
              <td className="tg-ssw7 border p-1">
                oi 開 <Audio id="hoi1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                on 看 <Audio id="hon3" />
              </td>
              <td className="tg-ssw7 border p-1">
                ong 康 <Audio id="hong1" />
              </td>
              <td className="tg-ssw7 border p-1" />
              <td className="tg-ssw7 border p-1">
                ot 喝 <Audio id="hot3" />
              </td>
              <td className="tg-ssw7 border p-1">
                ok 學 <Audio id="hok6" />
              </td>
            </tr>
            <tr>
              <td className="tg-i8xi border p-1">a</td>
              <td className="tg-cdar border p-1">[ɐ]</td>
              <td className="tg-7gzb border p-1 bg-yellow-100">
                a 嘞 <Audio id="la3" />
              </td>
              <td className="tg-ssw7 border p-1">
                ai 擠 <Audio id="zai1" />
              </td>
              <td className="tg-ssw7 border p-1">
                au 周 <Audio id="zau1" />
              </td>
              <td className="tg-ssw7 border p-1">
                am 斟 <Audio id="zam1" />
              </td>
              <td className="tg-ssw7 border p-1">
                an 珍 <Audio id="zan1" />
              </td>
              <td className="tg-ssw7 border p-1">
                ang 增 <Audio id="zang1" />
              </td>
              <td className="tg-ssw7 border p-1">
                ap 汁 <Audio id="zap1" />
              </td>
              <td className="tg-ssw7 border p-1">
                at 侄 <Audio id="zat6" />
              </td>
              <td className="tg-ssw7 border p-1">
                ak 則 <Audio id="zak1" />
              </td>
            </tr>
            <tr>
              <td className="tg-i8xi border p-1">aa</td>
              <td className="tg-cdar border p-1">[aː]</td>
              <td className="tg-ssw7 border p-1">
                aa 渣 <Audio id="zaa1" />
              </td>
              <td className="tg-ssw7 border p-1">
                aai 齋 <Audio id="zaai1" />
              </td>
              <td className="tg-ssw7 border p-1">
                aau 嘲 <Audio id="zaau1" />
              </td>
              <td className="tg-ssw7 border p-1">
                aam 站 <Audio id="zaam6" />
              </td>
              <td className="tg-ssw7 border p-1">
                aan 讚 <Audio id="zaan3" />
              </td>
              <td className="tg-ssw7 border p-1">
                aang 掙 <Audio id="zaang6" />
              </td>
              <td className="tg-ssw7 border p-1">
                aap 集 <Audio id="zaap6" />
              </td>
              <td className="tg-ssw7 border p-1">
                aat 扎 <Audio id="zaat3" />
              </td>
              <td className="tg-ssw7 border p-1">
                aak 責 <Audio id="zaak6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert color="secondary">
        <p>
          <strong>a</strong> and <strong>oet</strong> were added in 2018. Please
          see{" "}
          <a
            href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            here
          </a>{" "}
          for further information.
        </p>
      </Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">4. Tone</h2>

      <div className="overflow-x-auto">
        <table className="tg my-4 border border-collapse border-gray-300">
          <thead>
            <tr>
              <th className="tg-ed5u border p-2" />
              <th className="tg-ed5u border p-2">平</th>
              <th className="tg-5ye1 border p-2">上</th>
              <th className="tg-5ye1 border p-2">去</th>
              <th className="tg-5ye1 border p-2">入</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-5ye1 border p-2">陰</td>
              <td className="tg-gjbb border p-2">
                1 [˥] 詩 <Audio id="si1" />
              </td>
              <td className="tg-gjbb border p-2">
                2 [˧˥] 史 <Audio id="si2" />
              </td>
              <td className="tg-gjbb border p-2">
                3 [˧] 試 <Audio id="si3" />
              </td>
              <td className="tg-gjbb border p-2">
                1 [˥] 識 <Audio id="sik1" />
                <br />3 [˧] 洩 <Audio id="sit3" />
              </td>
            </tr>
            <tr>
              <td className="tg-5ye1 border p-2">陽</td>
              <td className="tg-gjbb border p-2">
                4 [˨˩] 時 <Audio id="si4" />
              </td>
              <td className="tg-gjbb border p-2">
                5 [˩˧] 市 <Audio id="si5" />
              </td>
              <td className="tg-gjbb border p-2">
                6 [˨] 事 <Audio id="si6" />
              </td>
              <td className="tg-gjbb border p-2">
                6 [˨] 蝕 <Audio id="sit6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Alert>
        <p>Tone marks appear at the end of the syllables.</p>
        <p>
          <strong>Examples:</strong>
          fu1 (夫), fu2 (虎), fu3 (副), fu4 (扶), fu5 (婦), fu6 (父)
        </p>
      </Alert>

      <h2 id="reference" className="text-3xl font-semibold mt-8 mb-4">
        Reference
      </h2>
      <div className="prose dark:prose-invert max-w-none text-sm space-y-2">
        <p>
          Bauer, Robert S., and Paul K. Benedict. 2011.{" "}
          <em>Modern cantonese phonology</em>. Vol. 102. Walter de Gruyter
        </p>
        <p>
          Mok, Peggy Pik-Ki, and Peggy, Wai-Yi Wong. 2010. Perception of the
          merging tones in Hong Kong Cantonese: preliminary data on
          monosyllables.{" "}
          <em>Speech Prosody 2010-Fifth International Conference</em>.
        </p>
        <p>
          Zee, Eric. 1991. Chinese (Hong Kong Cantonese).{" "}
          <em>Journal of the International Phonetic Association</em> 21.1:
          46-48.
        </p>
        <p>
          Stephen, Matthews. 1992.{" "}
          <em>Jyutping 粵拼 - Cantonese Romanization Scheme</em>. The Linguistic
          Society of Hong Kong.{" "}
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
          人文電算硏究中心 2003：&quot;粵語審音配詞字庫&quot;，關子尹
          主持，&quot;兩文三語敎育網上支援計劃&quot;之工作項目之一，二零零三年一月十二日推出，香港優質敎育基金，存取於二零零七年十一月二十日，
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

export default EnJyutpingPage;
