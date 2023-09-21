import React from "react";
import { DropdownMenu } from "../../components/DropdownMenu";
import { TextInput } from "../../components/TextInput";
import { DisplayResult } from "../../components/DisplayResult";

// Ran out of time but the intent was to simply use CurrencyExchange as a HOC and simply pass down the values to options for the dropdown as props, and let the components bubble up the values.
// Then use a service to access the API wait for the response and give the value to the displayResult Component. In that way this would be the only component to manage any logic.

export const CurrencyExchange = () => {
  return (
    <>
      <div>
        <TextInput placeholder="How much" />
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
            { label: "EUR", value: "EUR" }, /// these were just place holders, would have replaced them with actual values
          ]}
        />
      </div>
      <div className="result">
        <DisplayResult result="" denominator="" />
      </div>
    </>
  );
};
