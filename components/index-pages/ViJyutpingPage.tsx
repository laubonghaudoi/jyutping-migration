import type React from "react";
import Alert from "@/components/Alert";
import Audio from "@/components/Audio";
import Chartaudio from "@/components/Chartaudio";

const ViJyutpingPage: React.FC = () => {
  return (
    <>
      <Chartaudio />

      <Alert title="Về phiên âm IPA">
        Tất cả các phiên âm IPA trên trang này đều là chuyển tả âm vị, nguồn của
        dữ liệu âm thanh là{" "}
        <a href="https://words.hk/" target="_blank" rel="noopener noreferrer">
          粵典 works.hk
        </a>
        . Để biết thêm chi tiết vui lòng xem <a href="#tham-khảo">Tham khảo</a>.
      </Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">1. Thanh mẫu</h2>

      <table className="tg">
        <thead>
          <tr>
            <th className="tg-50s5" />
            <th>Âm đôi môi</th>
            <th>Âm môi răng</th>
            <th className="tg-d9jk">Âm răng</th>
            <th className="tg-d9jk">Âm vòm</th>
            <th className="tg-d9jk">Âm vòm mềm</th>
            <th className="tg-d9jk">Âm hầu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Âm bật</td>
            <td>
              b [p] 巴 <Audio id="baa1" />
              <br />p [pʰ] 怕 <Audio id="paa3" />
            </td>
            <td />
            <td>
              d [t] 打 <Audio id="daa2" />
              <br />t [tʰ] 他 <Audio id="taa1" />
            </td>
            <td />
            <td>
              g [k] 家 <Audio id="gaa1" />
              <br />k [kʰ] 卡 <Audio id="kaa1" />
              <br />
              gw [kʷ] 瓜 <Audio id="gwaa1" />
              <br />
              kw [kʷʰ] 夸 <Audio id="kwaa1" />
            </td>
            <td />
          </tr>
          <tr>
            <td>Âm tắc xát</td>
            <td />
            <td />
            <td>
              z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
              <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
            </td>
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td className="tg-43bj">Âm mũi</td>
            <td>
              m [m] 媽 <Audio id="maa1" />
            </td>
            <td />
            <td>
              n [n] 那 <Audio id="naa5" />
            </td>
            <td />
            <td>
              ng [ŋ] 牙 <Audio id="ngaa4" />
            </td>
            <td />
          </tr>
          <tr>
            <td className="tg-43bj">Âm xát</td>
            <td />
            <td>
              f [f] 花 <Audio id="faa1" />
            </td>
            <td>
              s [s] 沙 <Audio id="saa1" />
            </td>
            <td />
            <td />
            <td>
              h [h] 蝦 <Audio id="haa1" />
            </td>
          </tr>
          <tr>
            <td className="tg-43bj">Âm tiếp cận</td>
            <td>
              w [w] 蛙 <Audio id="waa1" />
            </td>
            <td />
            <td />
            <td>
              j [j] 也 <Audio id="jaa5" />
            </td>
            <td />
            <td />
          </tr>
          <tr>
            <td className="tg-43bj">Âm tiếp cận cạnh lưỡi</td>
            <td />
            <td />
            <td>
              l [l] 啦 <Audio id="laa1" />
            </td>
            <td />
            <td />
            <td />
          </tr>
        </tbody>
      </table>

      <Alert>
        Không thanh mẫu không cầu dấu chữ cái, ví dụ: &quot;呀&quot; chỉ được
        đánh thành &quot;aa&quot;.
      </Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">2. Âm tiết mũi</h2>

      <table className="tg">
        <thead>
          <tr>
            <th>
              m [m̩] 唔 <Audio id="m4" />
            </th>
            <th>
              ng [ŋ̩] 吳 <Audio id="ng4" />
            </th>
          </tr>
        </thead>
      </table>

      <h2 className="text-3xl font-semibold mt-8 mb-4">3. Vận mẫu</h2>

      <h3 className="text-2xl font-semibold mt-8 mb-4">
        3.1 Nguyên âm trong vận mẫu
      </h3>

      <table className="tg">
        <thead>
          <tr>
            <th>
              i [iː] 詩 <Audio id="si1" />
              <br />i<sub>Tiếp theo là -ng, -k</sub> [e] 星 <Audio id="sing1" />{" "}
              識 <Audio id="sik1" />
              <br />
              yu [y] 書 <Audio id="syu1" />
            </th>
            <th className="tg-lnec" />
            <th>
              u [uː] 夫 <Audio id="fu1" />
              <br />u<sub>Tiếp theo là -ng, -k</sub> [o] 風 <Audio id="fung1" />{" "}
              福 <Audio id="fuk1" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              e<sub>Tiếp theo là -i</sub> [e] 四 <Audio id="sei3" />
              <br />
              eo [ɵ] 詢 <Audio id="seon1" />
            </td>
            <td />
            <td>
              o<sub>Tiếp theo là -u</sub> [o] 蘇 <Audio id="sou1" />
            </td>
          </tr>
          <tr>
            <td>
              e [ɛː] 些 <Audio id="se1" />
              <br />
              oe [œː] 鋸 <Audio id="goe3" />
            </td>
            <td>
              a [ɐ] 新 <Audio id="san1" />
            </td>
            <td>
              o [ɔː] 疏 <Audio id="so1" />
            </td>
          </tr>
          <tr>
            <td className="tg-lnec" />
            <td>
              aa [aː] 沙 <Audio id="saa1" />
            </td>
            <td />
          </tr>
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold mt-8 mb-4">3.2 Âm cuối vận mẫu</h3>

      <table className="tg">
        <thead>
          <tr>
            <th>Âm bật</th>
            <th>
              p [p̚] 溼 <Audio id="sap1" />
            </th>
            <th>
              t [t̚] 失 <Audio id="sat1" />
            </th>
            <th>
              k [k̚] 塞 <Audio id="sak1" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Âm mũi</td>
            <td>
              m [m] 心 <Audio id="sam1" />
            </td>
            <td>
              n [n] 身 <Audio id="san1" />
            </td>
            <td>
              ng [ŋ] 生 <Audio id="sang1" />
            </td>
          </tr>
          <tr>
            <td>Nguyên âm</td>
            <td />
            <td>
              i [i] 西 <Audio id="sai1" /> 需 <Audio id="seoi1" />
            </td>
            <td>
              u [u] 收 <Audio id="sau1" />
            </td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold mt-8 mb-4">3.3 Tất cả vận mẫu</h3>

      <table className="tg">
        <thead>
          <tr>
            <th colSpan={2} rowSpan={2}>
              Nguyên âm trong vận mẫu
            </th>
            <th>Nguyên âm đơn</th>
            <th colSpan={2}>Nguyên âm kép</th>
            <th colSpan={3}>Âm mũi cuối vận mẫu</th>
            <th colSpan={3}>Âm bật cuối vận mẫu (Thanh nhập)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-i</td>
            <td>-u</td>
            <td>-m</td>
            <td>-n</td>
            <td>-ng</td>
            <td>-p</td>
            <td>-t</td>
            <td>-k</td>
          </tr>
          <tr>
            <td rowSpan={2}> i</td>
            <td>[iː]</td>
            <td>
              i 思 <Audio id="si1" />
            </td>
            <td className="tg-dgfm" />
            <td>
              iu 消 <Audio id="siu1" />
            </td>
            <td>
              im 閃 <Audio id="sim2" />
            </td>
            <td>
              in 先 <Audio id="sin1" />
            </td>
            <td />
            <td>
              ip 攝 <Audio id="sip3" />
            </td>
            <td>
              it 泄 <Audio id="sit3" />
            </td>
            <td />
          </tr>
          <tr>
            <td>[e]</td>
            <td />
            <td className="tg-dgfm" />
            <td />
            <td />
            <td />
            <td>
              ing 升 <Audio id="sing1" />
            </td>
            <td />
            <td />
            <td>
              ik 識 <Audio id="sik1" />
            </td>
          </tr>
          <tr>
            <td>yu</td>
            <td>[yː]</td>
            <td>
              yu 書 <Audio id="syu1" />
            </td>
            <td />
            <td />
            <td />
            <td>
              yun 孫 <Audio id="syun1" />
            </td>
            <td />
            <td />
            <td>
              yut 雪 <Audio id="syut3" />
            </td>
            <td />
          </tr>
          <tr>
            <td rowSpan={2}>u</td>
            <td>[uː]</td>
            <td>
              u 夫 <Audio id="fu1" />
            </td>
            <td>
              ui 灰 <Audio id="fui1" />
            </td>
            <td className="tg-dgfm" />
            <td />
            <td>
              un 歡 <Audio id="fun1" />
            </td>
            <td />
            <td />
            <td>
              ut 闊 <Audio id="fut3" />
            </td>
            <td />
          </tr>
          <tr>
            <td>[o]</td>
            <td />
            <td />
            <td className="tg-dgfm" />
            <td>um</td>
            <td />
            <td>
              ung 風 <Audio id="fung1" />
            </td>
            <td>up</td>
            <td />
            <td>
              uk 福 <Audio id="fuk1" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>e</td>
            <td>[e]</td>
            <td />
            <td>
              ei 四 <Audio id="sei3" />
            </td>
            <td />
            <td />
            <td>en </td>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>[ɛː]</td>
            <td>
              e 些 <Audio id="se1" />
            </td>
            <td />
            <td>
              eu 掉 <Audio id="deu6" />
            </td>
            <td>
              em 舐 <Audio id="lem2" />
            </td>
            <td />
            <td>
              eng 鄭 <Audio id="zeng6" />
            </td>
            <td>
              ep 夾 <Audio id="gep6" />
            </td>
            <td>
              et 坺 <Audio id="pet6" />
            </td>
            <td>
              ek 石 <Audio id="sek6" />
            </td>
          </tr>
          <tr>
            <td>eo</td>
            <td>[ɵ]</td>
            <td />
            <td>
              eoi 需 <Audio id="seoi1" />
            </td>
            <td />
            <td />
            <td>
              eon 詢 <Audio id="seon1" />
            </td>
            <td />
            <td />
            <td>
              eot 摔 <Audio id="seot1" />
            </td>
            <td />
          </tr>
          <tr>
            <td>oe</td>
            <td>[œː]</td>
            <td>
              oe 鋸 <Audio id="goe3" />
            </td>
            <td />
            <td />
            <td />
            <td />
            <td>
              oeng 疆 <Audio id="goeng1" />
            </td>
            <td />
            <td>
              oet <Audio id="oet6" />
            </td>
            <td>
              oek 腳 <Audio id="goek3" />
            </td>
          </tr>
          <tr>
            <td rowSpan={2}>o</td>
            <td>[o]</td>
            <td />
            <td />
            <td>
              ou 好 <Audio id="hou2" />
            </td>
            <td />
            <td />
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <td>[ɔː]</td>
            <td>
              o 可 <Audio id="ho2" />
            </td>
            <td>
              oi 開 <Audio id="hoi1" />
            </td>
            <td />
            <td />
            <td>
              on 看 <Audio id="hon3" />
            </td>
            <td>
              ong 康 <Audio id="hong1" />
            </td>
            <td />
            <td>
              ot 喝 <Audio id="hot3" />
            </td>
            <td>
              ok 學 <Audio id="hok6" />
            </td>
          </tr>
          <tr>
            <td>a</td>
            <td>[ɐ]</td>
            <td>
              a 嘞 <Audio id="la3" />
            </td>
            <td>
              ai 擠 <Audio id="zai1" />
            </td>
            <td>
              au 周 <Audio id="zau1" />
            </td>
            <td>
              am 斟 <Audio id="zam1" />
            </td>
            <td>
              an 珍 <Audio id="zan1" />
            </td>
            <td>
              ang 增 <Audio id="zang1" />
            </td>
            <td>
              ap 汁 <Audio id="zap1" />
            </td>
            <td>
              at 侄 <Audio id="zat6" />
            </td>
            <td>
              ak 則 <Audio id="zak1" />
            </td>
          </tr>
          <tr>
            <td>aa</td>
            <td>[aː]</td>
            <td>
              aa 渣 <Audio id="zaa1" />
            </td>
            <td>
              aai 齋 <Audio id="zaai1" />
            </td>
            <td>
              aau 嘲 <Audio id="zaau1" />
            </td>
            <td>
              aam 站 <Audio id="zaam6" />
            </td>
            <td>
              aan 讚 <Audio id="zaan3" />
            </td>
            <td>
              aang 掙 <Audio id="zaang6" />
            </td>
            <td>
              aap 集 <Audio id="zaap6" />
            </td>
            <td>
              aat 扎 <Audio id="zaat3" />
            </td>
            <td>
              aak 責 <Audio id="zaak6" />
            </td>
          </tr>
        </tbody>
      </table>

      <Alert color="secondary">
        <strong>a</strong> và <strong>oet</strong> đã được thêm vào năm 2018.
        Chi tiết vui lòng xem tại{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          đây
        </a>
        .
      </Alert>

      <h2 className="text-3xl font-semibold mt-8 mb-4">4. Thanh điệu</h2>

      <table className="tg">
        <thead>
          <tr>
            <th />
            <th>Bằng</th>
            <th className="tg-5ye1">Thượng</th>
            <th className="tg-5ye1">Khứ</th>
            <th className="tg-5ye1">Nhập</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-5ye1">Âm</td>
            <td className="tg-gjbb">
              1 [˥] 詩 <Audio id="si1" />
            </td>
            <td className="tg-gjbb">
              2 [˧˥] 史 <Audio id="si2" />
            </td>
            <td className="tg-gjbb">
              3 [˧] 試 <Audio id="si3" />
            </td>
            <td className="tg-gjbb">
              1 [˥] 識 <Audio id="sik1" />
              <br />3 [˧] 洩 <Audio id="sit3" />
            </td>
          </tr>
          <tr>
            <td className="tg-5ye1">Dương</td>
            <td className="tg-gjbb">
              4 [˨˩] 時 <Audio id="si4" />
            </td>
            <td className="tg-gjbb">
              5 [˩˧] 市 <Audio id="si5" />
            </td>
            <td className="tg-gjbb">
              6 [˨] 事 <Audio id="si6" />
            </td>
            <td className="tg-gjbb">
              6 [˨] 蝕 <Audio id="sit6" />
            </td>
          </tr>
        </tbody>
      </table>

      <Alert>
        <p>Thanh điệu được đánh dấu sau âm tiết.</p>
        <p>
          <strong>Thí dụ:</strong> fu1 （夫），fu2 （虎）, fu3 （副）, fu4
          （扶）, fu5 （婦）, fu6 （父）
        </p>
      </Alert>

      <h2 id="tham-khảo" className="text-3xl font-semibold mt-8 mb-4">
        Tham khảo
      </h2>

      <p>
        Bauer, Robert S., and Paul K. Benedict. 2011.{" "}
        <em>Modern cantonese phonology</em>. Vol. 102. Walter de Gruyter
      </p>
      <p>
        Mok, Peggy Pik-Ki, and Peggy, Wai-Yi Wong. 2010. Perception of the
        merging tones in Hong Kong Cantonese: preliminary data on monosyllables.{" "}
        <em>Speech Prosody 2010-Fifth International Conference</em>.
      </p>
      <p>
        Zee, Eric. 1991. Chinese (Hong Kong Cantonese).{" "}
        <em>Journal of the International Phonetic Association</em> 21.1: 46-48.
      </p>
      <p>
        Stephen, Matthews. 1992.{" "}
        <em>Jyutping 粵拼 - Cantonese Romanization Scheme</em>. The Linguistic
        Society of Hong Kong.{" "}
        <a
          href="https://lshk.org/jyutping-scheme/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://lshk.org/jyutping-scheme/
        </a>
      </p>
      <p>
        人文電算硏究中心　 2003：「粵語審音配詞字庫」，關子尹
        主持，“兩文三語敎育網上支援計劃”之工作項目之一，二零零三年一月十二日推出，香港優質敎育基金，存取於二零零七年十一月二十日，
        <a
          href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/
        </a>
        。
      </p>
    </>
  );
};

export default ViJyutpingPage;
