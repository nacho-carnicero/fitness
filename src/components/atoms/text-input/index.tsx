import React from "react";
import { isNil } from "lodash/fp";
import { TextField, TextFieldProps } from "@material-ui/core";

export type TextInputProps = TextFieldProps & { bold?: boolean };
const defaultStyle = { fontFamily: "Arial" };

export const TextInput = (props: TextInputProps) => {
  return (
    <TextField
      inputProps={{
        style: {
          ...defaultStyle,
          fontWeight: props.bold === true ? 700 : undefined,
          color: !isNil(props.color) ? props.color : undefined,
          borderWidth: 0,
          borderBottomWidth: 1,
          ...props.style,
          padding: 0
        }
      }}
      {...props}
    />
  );
};
