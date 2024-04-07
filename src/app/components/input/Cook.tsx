import React from "react";
import { useFormContext } from "react-hook-form";

const Cook = () => {
  const { register } = useFormContext();
  return (
    <div className="p-3 w-1/4 mx-auto flex justify-between">
      <label htmlFor="cook">自炊</label>
      <input
        type="radio"
        {...register("cook")}
        id="cook"
        defaultValue="1"
      />
      あり
      <input 
        type="radio" 
        {...register("cook")}
        id="cook" 
        defaultChecked
        defaultValue="2"
      />
      なし
    </div>
  );
};

export default Cook;
