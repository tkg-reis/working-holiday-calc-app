import React from "react";
import { useFormContext } from "react-hook-form";

const PartTimeWork = (partTime: any) => {
  const { register } = useFormContext();
  return (
    <div className="p-3 w-1/4 mx-auto flex justify-between">
      <label htmlFor="parttimeWork" className="mr-3">
        アルバイト
      </label>
      <input
        type="radio"
        {...register("parttimeWork")}
        id="parttimeWork"
        className="px-2"
        defaultValue="1"
      />
      あり
      <input
        type="radio"
        {...register("parttimeWork")}
        id="parttimeWork"
        className="px-2"
        defaultChecked
        defaultValue="2"
      />
      なし
    </div>
  );
};

export default PartTimeWork;
