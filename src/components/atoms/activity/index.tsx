import React from "react";
import styled from "@emotion/styled";
import { Text } from "../text";

type Exercise = { name: string };
export type ActivityProps = {
  exercise: Exercise;
  time: number;
  style?: any;
  status?: "planned" | "executing" | "finished";
};

const executingShadow = "0px 0px 3px 1px #555555AA";

export const Activity = ({
  exercise,
  time,
  style,
  status = "planned"
}: ActivityProps) => {
  const ActivityContainer = styled.div(props => ({
    width: 300,
    height: 100,
    borderRadius: 5,
    boxShadow:
      status === "executing" ? executingShadow : "0px 0px 1px #555555AA",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    ...style
  }));
  return (
    <ActivityContainer>
      <Text
        style={{
          padding: 10,
          fontSize: 20
        }}
        bold
      >
        {exercise.name}
      </Text>
      <Text
        style={{
          padding: 10,
          fontSize: 15,
          color: "#AAAAAA"
        }}
      >
        {`${time} s`}
      </Text>
    </ActivityContainer>
  );
};
