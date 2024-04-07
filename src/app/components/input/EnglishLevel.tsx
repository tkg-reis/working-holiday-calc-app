import React from "react";
import { useFormContext } from "react-hook-form";

const EnglishLevel = (englishLevel: any) => {
  const { register } = useFormContext();

  return (
    <div className="p-3 w-1/3 mx-auto flex justify-between">
      <label htmlFor="english-level">英語力 -自己評価-</label>
      <input
        type="number"
        id="english-level"
        className=""
        min="0"
        max="100"
        placeholder="72"
        defaultValue={englishLevel}
        {...register("englishLevel")}
      />
      /100
    </div>
  );
};

export default EnglishLevel;
