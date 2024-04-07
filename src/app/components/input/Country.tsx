import React from "react";
import { options } from "@/app/libs/CountryOptions";
import { useFormContext } from "react-hook-form";

const Country = () => {
  const { register } = useFormContext();
  return (
    <div className="p-3 w-1/2 mx-auto">
      <label htmlFor="selectedCountry">国の選択</label>
      <select {...register("selectedCountry")} id="selectedCountry">
        {options.map((opt) => {
          return (
            <option key={opt.key} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Country;
