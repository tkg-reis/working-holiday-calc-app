import React from "react";
import { useFormContext } from "react-hook-form";

const TravelMoney = (travelMoney : any) => {
    const { register } = useFormContext();
  return (
    <div className="p-3 w-1/5 mx-auto flex justify-between">
      <label htmlFor="money" className="mr-3">
        軍資金
      </label>
      <input
        type="number"
        id="money"
        {...register("money")}
        min="1"
        max="9999"
        placeholder="90万円..."
        defaultValue={travelMoney}
      />
    </div>
  );
};

export default TravelMoney;
