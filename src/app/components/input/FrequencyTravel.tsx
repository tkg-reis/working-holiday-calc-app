import React from "react";
import { useFormContext } from "react-hook-form";

const FrequencyTravel = (travel: any) => {
  const { register } = useFormContext();
  return (
    <div className="p-3 w-1/4 mx-auto flex justify-between">
      <label htmlFor="numberOfTravleTimes">旅行頻度</label>
      <select
        id="numberOfTravleTimes"
        defaultValue={travel}
        {...register("travel")}
      >
        <option value="">select</option>
        <option value="1">1回</option>
        <option value="2">2回</option>
        <option value="3">3回</option>
        <option value="4">4回以上</option>
      </select>
    </div>
  );
};

export default FrequencyTravel;
