import React, { ChangeEvent, useState } from "react";

interface currencyOption {
  label: string;
  value: string;
}

interface CurrencyExchangeProps {
  currencyOptions: currencyOption[];
  label: string;
}

export const DropdownMenu = ({ currencyOptions, label }: CurrencyExchangeProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        <h2>{label}</h2>
        <select value={value} onChange={handleChange}>
          {currencyOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

