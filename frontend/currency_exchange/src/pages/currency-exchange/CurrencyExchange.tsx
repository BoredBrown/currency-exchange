import React from "react";
import { DropdownMenu } from "../../components/DropdownMenu";
import { TextInput } from "../../components/TextInput";
import { DisplayResult } from "../../components/DisplayResult";

export const CurrencyExchange = () => {
  return (
    <>
      <div>
        <TextInput placeholder="Összeg" />
        <DropdownMenu
          label="from"
          currencyOptions={[
            { label: "HUF", value: "HUF" },
            { label: "EUR", value: "EUR" },
          ]}
        />
        <DropdownMenu
          label="to"
          currencyOptions={[
            { label: "HUF", value: "HUF" },
            { label: "EUR", value: "EUR" },
          ]}
        />
      </div>
      <div className="result">
        <DisplayResult result="" denominator="" />
      </div>
    </>
  );
};
