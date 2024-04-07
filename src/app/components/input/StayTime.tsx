import React from "react";
import { useFormContext } from "react-hook-form";

const StayTime = (stayTime: any) => {
  const { register } = useFormContext();

  return (
    <div className="p-3 w-1/5 mx-auto flex justify-between">
      <label htmlFor="time" className="mr-3">
        滞在期間
      </label>
      <input
        type="number"
        id="time"
        placeholder="9ヶ月"
        min="3"
        max="12"
        {...register("time")}
        defaultValue={stayTime}
      />
    </div>
  );
};

export default StayTime;
