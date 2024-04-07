import React from "react";
import { useFormContext } from "react-hook-form";

const Insurance = (insurance: any) => {
  const { register } = useFormContext();

  return (
    <div className="p-3 w-1/5 mx-auto flex justify-between">
      <label htmlFor="insurance">海外保険料</label>
      <input
        id="insurance"
        type="number"
        min="1"
        max="999"
        placeholder="10万円"
        {...register("insurance")}
        defaultValue={insurance}
      />
    </div>
  );
};

export default Insurance;
