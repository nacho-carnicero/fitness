import React from "react";
import styled from "@emotion/styled";

type Exercise = { name: string };
export type ActivityProps = { exercise: Exercise; time: number; style: any };

export const Activity = ({ exercise, time, style }: ActivityProps) => {
  const ActivityContainer = styled.div(props => ({
    width: 300,
    height: 100,
    borderRadius: 5,
    boxShadow: "0px 0px 1px black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    ...style
  }));
  return (
    <ActivityContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          fontWeight: 700,
          padding: 10,
          fontSize: 20,
          fontFamily: "Arial"
        }}
      >
        {exercise.name}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          padding: 10,
          fontSize: 15,
          fontFamily: "Arial",
          color: "#AAAAAA"
        }}
      >
        {`${time} s`}
      </div>
    </ActivityContainer>
  );
};
