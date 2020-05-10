import React, { useState, useEffect } from "react";
import { TextInput, TextInputProps } from "../text-input";

type Props = TextInputProps & {
  changeParameter: (value?: unknown) => void;
};

export const EditText = ({ value, changeParameter }: Props) => {
  const [textValue, setTextValue] = useState(value);
  return (
    <TextInput
      value={textValue}
      onChange={event => setTextValue(event.target.value)}
      onBlur={() => {
        changeParameter(textValue);
        setTextValue(value);
      }}
    />
  );
};
