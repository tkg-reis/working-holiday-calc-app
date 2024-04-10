"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { fetchData } from "./utils/supabaseFunc";
import { useEffect, useState } from "react";

export default function Home() {

  interface dataType {
    id: number;
    your_age: number;
    travel_money: number;
  }
  const [list, setList] = useState<dataType[]>([]);

  useEffect(() => {
    fetching();
  },[]);

  const fetching = async () => {
    const data = (await fetchData()) as any;
    setList(data);
    console.log(data);
    
  };
  return (
    <>
      <Header/>
      <h1>hello world</h1>
      {list.map((val, i) => {
        return (
          <span key={i}>{val.id} : {val.your_age} : {val.travel_money}</span>
        )
      })}
      {/* 計算画面のへの遷移処理とこのサイトの説明の明記 */}
      <Footer/>
    </>
  )
}
