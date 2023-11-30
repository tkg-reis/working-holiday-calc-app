"use client";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ChangeEvent, useEffect, useState } from "react"
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { RadioButton } from "./types";

export default function Home() {

  // 例外処理のアラート管理
  const [error, setError] = useState("");

  // 年齢の状態管理
  const [age, setAge] = useState<string | number>("");
  const ageInfo = (e: { target: { value: number; }; }) => {
    if(e.target.value < 30) {
      return;
    } else if (e.target.value > 31) {
      setError("ごめんなさい！あなたはワーキングホリデーには行ける年齢ではありません");
    } else {
      setError("error occurred");
    }
    
  }
  // 軍資金の状態管理
  // 入力時のエラー解消
  const [travelMoney, setTravelMoney] = useState("");
  const moneyInfo = (e: ChangeEvent<HTMLInputElement>) => {
    setTravelMoney(e.target.value);
    console.log(travelMoney);
  }

  // 滞在期間の状態管理
  const [stayTime, setStayTime] = useState<number | string>();
  const stayTimeInfo = (e : ChangeEvent<HTMLInputElement>) => {
    setStayTime(e.target.value);
    console.log(stayTime);
    
  }

  
  // 語学学校の有無
  const [joinSchool, setJoinSchool] = useState<boolean | string>(true);
  const joinSchoolInfo = (e: { target: { value: string | boolean | ((prevState: string | boolean) => string | boolean); }; }) => {
    setJoinSchool(e.target.value);
    console.log(joinSchool);
  }

  const RadioInfo :RadioButton[] =[
    {
      value:true, 
      schoolLabel: "あり"
    },
    {
      value: false,
      schoolLabel: "なし"
    }
  ];
  
  
  // 為替レートのデータ状態管理
  const [data, setData] = useState<number | string>();
  useEffect(() => {
    const getData = async() : Promise<any> => {
      try {
        const API_KEY : any= process.env.NEXT_PUBLIC_EXCHANGE_RATES_API;
        
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
    }
    // getData();
    // 副作用に「結果を表示」のonSubmitと紐付ける。
  }, []);

  return (
    <>
      <Header/>
      <main>
        <div className="p-3">
          <label htmlFor="age">年齢</label>
          <input type="number" id="age" onChange={() =>{}}/>歳
        </div>
        <div className="p-3">
          <label htmlFor="money">軍資金</label>
          <input type="number" id="money" onChange={moneyInfo}  />万円
        </div>
        <div className="p-3">
          <label htmlFor="time">滞在期間</label>
          <input type="number" id="time" />か月
        </div>
        <div className="p-3">
          <label htmlFor="school">語学学校の有無</label>
          {RadioInfo.map(radio => {
            return (
              <div>
                <input type="radio" checked={joinSchool === radio.value} name="school" id="school" className="px-2" onChange={joinSchoolInfo}/>
                <span>{radio.schoolLabel}</span>
              </div>
              )
            })}
        </div>
        <p>{data}</p>
        <div className="p-3">
          <label htmlFor="countries">ワーキングホリデで行きたい国</label>
          <select id="countries" name="countries" className="px-2">
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
          <label htmlFor="english-level" className="px-2">英語力 -自己評価- </label>
          <input type="number" id="english-level" className=""/>/100
        </div>
        <div>
          <label htmlFor="parttime-work">アルバイトの有無</label>
          <input type="radio" name="parttime-work" id="parttime-work" />あり
          <input type="radio" name="parttime-work" id="parttime-work" />なし
        </div>
        <div>
          <p>↓結果を表示する↓</p>
          <button className="bg-slate-300 rounded-lg p-4 hover:text-white" type="submit" onSubmit={() => {}}>結果！！！</button>
        </div>
        <div>
          <h2>あなたは、○○でしょう！！</h2>
          <p>あなたは○○でしょう！そのため、</p>
        </div>
      </main>
      <Footer/>
    </>
  )
}
