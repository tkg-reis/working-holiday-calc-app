import React from "react";
import { useFormContext } from "react-hook-form";

const LanguageSchool = () => {
  const { register } = useFormContext();
  return (
    <div className="p-3 w-1/4 mx-auto flex justify-between">
      <label htmlFor="school" className="mr-3">
        語学学校
      </label>
      <input
        type="radio"
        {...register("languageSchool")}
        id="languageSchool"
        className="px-2"
        defaultValue="1"
      />
      あり
      <input
        type="radio"
        {...register("languageSchool")}
        id="languageSchool"
        className="px-2"
        defaultChecked
        defaultValue="2"
      />
      なし
    </div>
  );
};

export default LanguageSchool;
