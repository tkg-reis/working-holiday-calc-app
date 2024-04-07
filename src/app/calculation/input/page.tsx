"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import YourAge from "@/app/components/input/YourAge";
import TravelMoney from "@/app/components/input/TravelMoney";
import Insurance from "@/app/components/input/Insurance";
import StayTime from "@/app/components/input/StayTime";
import EnglishLevel from "@/app/components/input/EnglishLevel";
import Country from "@/app/components/input/Country";
import PartTimeWork from "@/app/components/input/PartTimeWork";
import LanguageSchool from "@/app/components/input/LanguageSchool";
import Cook from "@/app/components/input/Cook";
import FrequencyTravel from "@/app/components/input/FrequencyTravel";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";

const Input = () => {
  const [age, setAge] = useState<string | number>();
  const [travelMoney, setTravelMoney] = useState();
  const [insurance, setInsurance] = useState();
  const [stayTime, setStayTime] = useState<number | string>();
  const [englishLevel, setEnglishLevel] = useState();

  const router = useRouter();
  const { handleSubmit } = useFormContext();
  const onSubmit = handleSubmit(async () => {
    router.push("/calculation/output");
  });

  return (
    <>
      <Header />
      <main className="mx-auto w-11/12 ">
        <form
          id="form"
          method="post"
          onSubmit={onSubmit}
          className="mx-auto w-10/12"
        >
          <h2>基本情報</h2>
          <hr />
          <YourAge age={age} />
          <TravelMoney travelMoney={travelMoney} />
          <Insurance insurance={insurance} />
          <StayTime stayTime={stayTime} />
          <EnglishLevel englishLevel={englishLevel} />
          <Country/>
          <h2>仕事・学校について</h2>
          <hr />
          <PartTimeWork/>
          <LanguageSchool/>
          <h2>その他</h2>
          <hr />
          <Cook/>
          <FrequencyTravel/>
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
};

export default Input;
