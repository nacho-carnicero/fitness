import React from "react";

type Exercise = { name: string };
export type CircuitProps = { elements: { exercise: Exercise; time: number }[] };

export const Circuit = ({ elements }: CircuitProps) => (
  <div
    style={{
      width: 310,
      // height: "100 %",
      height: 1200,
      borderRadius: 5,
      boxShadow: "0px 0px 1px black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      backgroundColor: "#FAFAFA"
    }}
  >
    {/* <div
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
    </div> */}
  </div>
);
