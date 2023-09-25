export default function Home() {
  return (
    <>
      <header>
        <h2>ワーキングホリデー充実度計算アプリ</h2>
      </header>
      <main>
        <div>
          <label htmlFor="age">年齢</label>
          <input type="number" id="age"/>歳
        </div>
        <div>
          <label htmlFor="money">軍資金</label>
          <input type="number" id="money"  />万円
        </div>
        <div>
          <label htmlFor="time">滞在期間</label>
          <input type="number" id="time" />か月
        </div>
        <div>
          <label htmlFor="school">語学学校の有無</label>
          <input type="radio" name="school" id="school" />あり
          <input type="radio" name="school" id="school" />なし
        </div>
        <div>
          <label htmlFor="countries">ワーキングホリデで行きたい国</label>
          <select id="countries" name="countries">
            <option value="australia">オーストラリア</option>
            <option value="canada">カナダ</option>
            <option value="new-zealand">ニュージーランド</option>
            <option value="south-korea">韓国</option>
            <option value="france">フランス</option>
            <option value="taiwan">台湾</option>
            <option value="hungary">ハンガリー</option>
            <option value="united-kingdom">イギリス</option>
            <option value="spain">スペイン</option>
            <option value="argentina">アルゼンチン</option>
            <option value="chile">チリ</option>
            <option value="iceland">アイスランド</option>
            <option value="czech-republic">チェコ</option>
            <option value="lithuania">リトアニア</option>
            <option value="sweden">スウェーデン</option>
            <option value="estonia">エストニア</option>
            <option value="netherlands">オランダ</option>
            <option value="uruguay">ウルグアイ</option>
            <option value="finland">フィンランド</option>
            <option value="latvia">ラトビア</option>
            <option value="ireland">アイルランド</option>
            <option value="denmark">デンマーク</option>
            <option value="germany">ドイツ</option>
            <option value="norway">ノルウェー</option>
            <option value="poland">ポーランド</option>
            <option value="portugal">ポルトガル</option>
            <option value="slovakia">スロバキア</option>
            <option value="austria">オーストリア</option>
            <option value="hong-kong">香港</option>
          </select>
        </div>
        <div>
          <label htmlFor="english-level">英語力</label>
          <input type="number" id="english-level" />/100
        </div>
        <div>
          <label htmlFor="parttime-work">アルバイトの有無</label>
          <input type="radio" name="parttime-work" id="parttime-work" />あり
          <input type="radio" name="parttime-work" id="parttime-work" />なし
        </div>
        <div>
          <p>↓結果を表示する↓</p>
          <button type="submit">結果！！！</button>
        </div>
        <div>
          <h2>あなたは、○○でしょう！！</h2>
          <p>あなたは○○でしょう！そのため、</p>
        </div>
      </main>
    </>
  )
}
