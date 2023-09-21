import React from "react";

interface TextInputProps {
  placeholder: string;
}

export const TextInput = ({ placeholder }: TextInputProps) => {
  return (
    <div>
      <label>
        <h2>Összeg</h2>
        <input type="text" placeholder={placeholder} />
      </label>
    </div>
  );
};
