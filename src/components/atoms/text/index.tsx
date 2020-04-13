import styled from "@emotion/styled";
import { isNil } from "lodash/fp";

const defaultStyle = { fontFamily: "Arial" };
export const Text = styled.div(props => ({
  ...defaultStyle,
  fontWeight: props.bold === true ? 700 : undefined,
  color: !isNil(props.color) ? props.color : undefined,
  ...props.style
}));
