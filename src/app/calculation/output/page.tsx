"use client";
import React from "react";
import InputAgain from "../../components/InputAgain";
import { useRouter } from "next/navigation";
import { useFormContext } from "react-hook-form";
import YourAge from "@/app/components/output/YourAge";

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
          <YourAge yourAge={values.age}/>
          <div>軍資金：{values.money}</div>
          <div>海外保険金：{values.insurance}</div>
          <div>滞在期間：{values.time}</div>
          <div>語学レベル：{values.englishLevel}</div>
          <div>ワーキングホリデー国：{values.selectedCountry}</div>
          <div>アルバイト：{values.parttimeWork}</div>
          <div>語学学校：{values.languageSchool}</div>
          <div>自炊：{values.cook}</div>
          <div>海外旅行頻度：{values.travel}</div>
        </>
      )}
    </>
  );
};

export default Output;
