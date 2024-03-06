"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ChangeEvent, useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { RadioButton } from "./types";
import Select, { ActionMeta } from "react-select";

type OptionType = {
  readonly value: string;
  readonly label: string;
}

const options: OptionType[] = [
  { value: "australia", label: "オーストラリア" },
  { value: "canada", label: "カナダ" },
  { value: "new-zealand", label: "ニュージーランド" },
  { value: "south-korea", label: "韓国" },
  { value: "france", label: "フランス" },
  { value: "taiwan", label: "台湾" },
  { value: "hungary", label: "ハンガリー" },
  { value: "united-kingdom", label: "イギリス" },
  { value: "spain", label: "スペイン" },
  { value: "argentina", label: "アルゼンチン" },
  { value: "chile", label: "チリ" },
  { value: "iceland", label: "アイスランド" },
  { value: "czech-republic", label: "チェコ" },
  { value: "lithuania", label: "リトアニア" },
  { value: "sweden", label: "スウェーデン" },
  { value: "estonia", label: "エストニア" },
  { value: "netherlands", label: "オランダ" },
  { value: "uruguay", label: "ウルグアイ" },
  { value: "finland", label: "フィンランド" },
  { value: "latvia", label: "ラトビア" },
  { value: "ireland", label: "アイルランド" },
  { value: "denmark", label: "デンマーク" },
  { value: "germany", label: "ドイツ" },
  { value: "norway", label: "ノルウェー" },
  { value: "poland", label: "ポーランド" },
  { value: "portugal", label: "ポルトガル" },
  { value: "slovakia", label: "スロバキア" },
  { value: "austria", label: "オーストリア" },
  { value: "hong-kong", label: "香港" },
];

export default function Home() {
  // 例外処理のアラート管理
  const [error, setError] = useState("");

  // 年齢の状態管理
  const [age, setAge] = useState<string | number>("");
  const ageInfo = (e: { target: { value: number } }) => {
    if (e.target.value < 30) {
      return;
    } else if (e.target.value > 31) {
      setError(
        "ごめんなさい！あなたはワーキングホリデーには行ける年齢ではありません"
      );
    } else {
      setError("error occurred");
    }
  };
  // 軍資金の状態管理
  // 入力時のエラー解消
  const [travelMoney, setTravelMoney] = useState("");
  const moneyInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setTravelMoney(e.target.value);
    console.log(travelMoney);
  };

  // 滞在期間の状態管理
  const [stayTime, setStayTime] = useState<number | string>();
  const stayTimeInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setStayTime(e.target.value);
    console.log(stayTime);
  };

  // 語学学校の有無
  const [joinSchool, setJoinSchool] = useState<boolean | string>(true);
  const joinSchoolInfo = (e: {
    target: {
      value:
        | string
        | boolean
        | ((prevState: string | boolean) => string | boolean);
    };
  }) => {
    setJoinSchool(e.target.value);
    console.log(joinSchool);
  };

  // 提携国の選択
  const [selectedValue, setSelectedValue] = useState<readonly OptionType[]>();

  const changeSelectValue = (val: any) => {
    console.log(val);

    setSelectedValue(val);
  };

  const RadioInfo: RadioButton[] = [
    {
      value: true,
      schoolLabel: "あり",
    },
    {
      value: false,
      schoolLabel: "なし",
    },
  ];

  // 国別為替レートのデータ状態管理
  const [data, setData] = useState<number | string>();
  useEffect(() => {
    const getData = async (): Promise<any> => {
      try {
        const API_KEY: any = process.env.NEXT_PUBLIC_EXCHANGE_RATES_API;

        // 基本一円から他の外貨情報を取得している。
        // ex.jpy 1円 => euro
        const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=JPY&to_currency=EUR&apikey=${API_KEY}`;

        // エンドポイントの変更
        // const endpoint = 'latest';
        const res = await axios.get(url);
        // setData(res.request.response);
        setData(res.request.responseText);
        console.log(res);
      } catch (error) {
        setError("Error occurred");
      }
    };
    // getData();
    // 副作用に「結果を表示」のonSubmitと紐付ける。
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto w-11/12 ">
        <form action="/result" method="get" className="mx-auto w-10/12">
          <h2>基本情報</h2>
          <hr />

          {/* 年齢 */}
          <div className="p-3 w-1/5 mx-auto flex justify-between">
            <label htmlFor="age" className="mr-3">
              年齢
            </label>
            <input
              type="number"
              id="age"
              name="age"
              min="15"
              max="100"
              placeholder="26歳..."
              autoFocus
            />
          </div>

          {/* 軍資金 */}
          <div className="p-3 w-1/5 mx-auto flex justify-between">
            <label htmlFor="money" className="mr-3">
              軍資金
            </label>
            <input
              type="number"
              id="money"
              name="money"
              min="1"
              max="9999"
              placeholder="90万円..."
            />
          </div>

          {/* 海外保険について */}
          <div className="p-3 w-1/5 mx-auto flex justify-between">
            <label htmlFor="insurelance">海外保険料</label>
            <input type="number" min="1" max="999" placeholder="10万円" />
          </div>

          {/* 滞在期間 */}
          <div className="p-3 w-1/5 mx-auto flex justify-between">
            <label htmlFor="time" className="mr-3">
              滞在期間
            </label>
            <input
              type="number"
              id="time"
              placeholder="9ヶ月"
              min="3"
              max="12"
              name="time"
            />
          </div>

          {/* 英語力 */}
          <div className="p-3 w-1/3 mx-auto flex justify-between">
            <label htmlFor="english-level">英語力 -自己評価-</label>
            <input
              type="number"
              id="english-level"
              className=""
              min="0"
              max="100"
              placeholder="72"
            />
            /100
          </div>

          {/* ワーキングホリデー提携国の選択 */}
          {/* または治安レベル・物価レベル・英語がそもそも通じる国かなどで選択できるようにする？？ */}
          <div className="p-3 w-1/2 mx-auto">
            <Select
              options={options}
              defaultValue={selectedValue}
              onChange={changeSelectValue}
              name="selectedCountry"
            />
          </div>

          <h2>仕事・学校について</h2>
          <hr />

          {/* アルバイトなどの仕事をするか否か */}
          <div className="p-3 w-1/4 mx-auto flex justify-between">
            <label htmlFor="parttime-work" className="mr-3">
              アルバイト
            </label>
            <input
              type="radio"
              name="parttimeWork"
              id="parttimeWork"
              className="px-2"
            />
            あり
            <input
              type="radio"
              name="parttimeWork"
              id="parttimeWork"
              className="px-2"
            />
            なし
          </div>

          {/* 語学学校の有無 */}
          {/* react radio module */}
          <div className="p-3 w-1/4 mx-auto flex justify-between">
            <label htmlFor="school" className="mr-3">
              語学学校
            </label>
            <input
              type="radio"
              name="languageSchool"
              id="languageSchool"
              className="px-2"
            />
            あり
            <input
              type="radio"
              name="languageSchool"
              id="languageSchool"
              className="px-2"
            />
            なし
          </div>

          <h2>その他</h2>
          {/* 自由回答欄 */}
          <hr />

          {/* 自炊の有無 */}
          <div className="p-3 w-1/4 mx-auto flex justify-between">
            <label htmlFor="cook">自炊</label>
            <input type="radio" name="cook" id="cook" checked />
            なし
            <input type="radio" name="cook" id="cook" />
            あり
          </div>

          {/* 移住先での旅行の頻度 */}
          <div className="p-3 w-1/4 mx-auto flex justify-between">
            <label htmlFor="numberOfTravleTimes">旅行頻度</label>
            <select name="" id="">
              <option value="">select</option>
              <option value="">1回</option>
              <option value="">2回</option>
              <option value="">3回</option>
              <option value="">4回以上</option>
            </select>
          </div>

          {/* 現地の文化や習慣の理解 */}
          {/* 現地コミュニティへの参加 */}

          {/* 仕事の当てがあるか */}
          {/* 住居 sim 銀行口座 観光地のリサーチ度 */}

          <div>
            <button
              className="bg-slate-300 rounded-lg p-4 hover:text-white"
              type="submit"
            >
              -結果-
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
