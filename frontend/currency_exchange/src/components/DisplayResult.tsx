import React from "react";

interface DisplayResultProps {
  result: string | number;
  denominator?: string;
}

export const DisplayResult = ({ result, denominator }: DisplayResultProps) => {
  return (
    <div>
      <h1>
        {result} {denominator || ""}
      </h1>
    </div>
  );
};

