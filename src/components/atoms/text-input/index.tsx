import React from "react";
import styled from "@emotion/styled";
import { isNil } from "lodash/fp";

type TextInputProps = {
  value?: string;
  placeholder?: string;
  bold?: boolean;
  color?: string;
  style?: any;
};
const defaultStyle = { fontFamily: "Arial" };
const StyledInput = styled.input((props: TextInputProps) => ({
  ...defaultStyle,
  fontWeight: props.bold === true ? 700 : undefined,
  color: !isNil(props.color) ? props.color : undefined,
  borderWidth: 0,
  borderBottomWidth: 1,
  ...props.style
}));
export const TextInput = (props: TextInputProps) => {
  return <StyledInput type="text" {...props}></StyledInput>;
};
