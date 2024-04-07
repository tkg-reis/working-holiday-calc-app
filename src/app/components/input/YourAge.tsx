import React from "react";
import { useFormContext } from "react-hook-form";

const YourAge = (age: any) => {
  const { register } = useFormContext();
  return (
    <div className="p-3 w-1/5 mx-auto flex justify-between">
      <label htmlFor="age" className="mr-3">
        年齢
      </label>
      <input
        type="number"
        id="age"
        {...register("age")}
        min="10"
        max="100"
        placeholder="26歳..."
        defaultValue={age}
        autoFocus
      />
    </div>
  );
};

export default YourAge;
