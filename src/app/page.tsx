"use client";


import Header from "./components/Header"
import Footer from "./components/Footer"
import { ChangeEvent, useEffect, useState } from "react"
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";




export default function Home() {

  const [error, setError] = useState("");

  // 語学学校の有無
  const [joinSchool, setJoinSchool] = useState(false);
  // 軍資金の状態管理
  const [data, setData] = useState<number | string>();
  
  const joinSchoolInfo = () => {
    setJoinSchool(bool => !bool);
    console.log(joinSchool);
  }
  
  // // 軍資金の状態管理
  // const [travelMoney, setTravelMoney] = useState(null);
  // const moneyInfo = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTravelMoney(e.target.value);
  //   console.log(travelMoney);
  // }
  
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
        console.log(data);
        
        
      } catch (error) {
        setError("Error occurred");
      }
    }

    // getData();
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
          <input type="number" id="money" onChange={() => {}}  />万円
        </div>
        <div className="p-3">
          <label htmlFor="time">滞在期間</label>
          <input type="number" id="time" />か月
        </div>
        <div className="p-3">
          <label htmlFor="school">語学学校の有無</label>
          <input type="radio" name="school" id="school" className="px-2" value="true" onClick={joinSchoolInfo}/>あり
          <input type="radio" name="school" id="school" value="false" onClick={joinSchoolInfo}/>なし
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
