"use client";
import React from "react";
import InputAgain from "../../components/InputAgain";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import YourAge from "@/app/components/output/OutputYourAge";
import OutputYourAge from "@/app/components/output/OutputYourAge";
import OutputTravelMoney from "@/app/components/output/OutputTravelMoney";
import OutputStayTime from "@/app/components/output/OutputStayTime";
import OutputInsurance from "@/app/components/output/OutputInsurance";
import OutputEnglishLevel from "@/app/components/output/OutputEnglishLevel";
import OutputCountry from "@/app/components/output/OutputCountry";
import OutputPartTimeWork from "@/app/components/output/OutputPartTimeWork";
import OutputLanguageSchool from "@/app/components/output/OutputLanguageSchool";
import OutputCook from "@/app/components/output/OutputCook";
import OutputFrequencyTravel from "@/app/components/output/OutputFrequencyTravel";

const Output = () => {
  const router = useRouter();
  const { getValues } = useFormContext();
  const values = getValues();
  const lowerLimitAge = 17;
  const upperLimitAge = 31;
  return (
    <>
      {values.age > upperLimitAge || values.age < lowerLimitAge ? (
        <InputAgain yourAge={values.age} />
      ) : (
        <>
          <div>年齢：{values.age}</div>
          <OutputYourAge outputYourAge={values.age}/>
          <div>軍資金：{values.money}</div>
          <OutputTravelMoney outputTravelMoney={values.money} />
          <div>海外保険金：{values.insurance}</div>
          <OutputInsurance outputInsurance={values.insurance} />
          <div>滞在期間：{values.time}</div>
          <OutputStayTime outputStayTime={values.time} />
          <div>語学レベル：{values.englishLevel}</div>
          <OutputEnglishLevel outputEnglishLevel={values.englishLevel}/>
          <div>ワーキングホリデー国：{values.selectedCountry}</div>
          <OutputCountry outputCountry={values.selectedCountry}/>
          <div>アルバイト：{values.parttimeWork}</div>
          <OutputPartTimeWork outputPartTime={values.parttimeWork}/>
          <div>語学学校：{values.languageSchool}</div>
          <OutputLanguageSchool outputLanguageSchool={values.language}/>
          <div>自炊：{values.cook}</div>
          <OutputCook outputCook={values.cook}/>
          <div>海外旅行頻度：{values.travel}</div>
          <OutputFrequencyTravel outputFrequencyTravel={values.frequencyTravel}/>
        </>
      )}
    </>
  );
};

export default Output;
