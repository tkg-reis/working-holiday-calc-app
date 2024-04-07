import axios from "axios";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
dotenv.config();
// 国別為替レートのデータ状態管理
//   為替レートAPIを変更したので、その部分の変更を加える。
const [error, setError] = useState("");
const [data, setData] = useState<number | string>();
const currencyFecth = useEffect(() => {
  const getData = async (): Promise<any> => {
    try {
      const API_KEY: any = process.env.NEXT_PUBLIC_EXCHANGE_RATES_API;
      // 基本一円から他の外貨情報を取得している。
      // ex.jpy 1円 => euro
      // /calsulation/inputから渡ってきた値をテンプレートリテラルで載せる
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
  //
}, []);

export { currencyFecth };
