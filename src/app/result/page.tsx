'use client'
import React from "react";
import { useSearchParams } from "next/navigation";
import Output from "../components/Output";
import InputAgain from "../components/InputAgain";

const Result = () => {

    const inputValue = useSearchParams();
    const age = inputValue?.get("age");
    const money = inputValue?.get("money");
    const insurance = inputValue?.get("insurance");
    const time = inputValue?.get("time");
    const englishLevel = inputValue?.get("english-level");
    const country = inputValue?.get("selectedCountry");
    const parttmeWork = inputValue?.get("parttimeWork");
    const languageSchool = inputValue?.get("languageSchool");
    const cook = inputValue?.get("cook");
    const travel = inputValue?.get("travel");
    const lostInputValue = null;
  
    const limitedAge = 31;
    // {/* {age > limitedAge } */}
    // {/* <Output /> */}
    // {/* <Output age={age} money={money} insurance={insurance} time={time} englishLevel={englishLevel} country={country} parttimeWork={parttmeWork} languageSchool={languageSchool} cook={cook} travel={travel}/> */}
  return (
    <>
      <div>{age}</div>
      <div>{money}</div>
      <div>{insurance}</div>
      <div>{time}</div>
      <div>{englishLevel}</div>
      <div>{country}</div>
      <div>{parttmeWork}</div>
      <div>{languageSchool}</div>
      <div>{cook}</div>
      <div>{travel}</div>
    </>
  )
}

export default Result

