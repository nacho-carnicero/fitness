import React, { useState } from "react";
import { TextInput } from "../text-input";
import { EditTextInputProps } from "../../../types"

export const EditText = ({ value, changeParameter, ...props }: EditTextInputProps) => {
  const [textValue, setTextValue] = useState(value);
  return (
    <TextInput
      value={textValue}
      onChange={event => setTextValue(event.target.value)}
      onBlur={() => {
        changeParameter(textValue);
        setTextValue(value);
      }}
      {...props}
    />
  );
};
