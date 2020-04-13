import styled from "@emotion/styled";
import { isNil } from "lodash/fp";

type Props = { bold?: boolean; color?: string; style?: any };

const defaultStyle = { fontFamily: "Arial" };
export const Text = styled.div((props: Props) => ({
  ...defaultStyle,
  fontWeight: props.bold === true ? 700 : undefined,
  color: !isNil(props.color) ? props.color : undefined,
  ...props.style
}));
