import React from "react";
import { map } from "lodash/fp";
import { DraggableList, Activity } from "../atoms/";

const mapUncapped = map.convert({ cap: false });

type Exercise = { name: string };
type PlanElement = { exercise: Exercise; time: number };
export type CircuitProps = {
  plan: PlanElement[];
  circuitIndex: number;
};

export const Circuit = ({ plan, circuitIndex }: CircuitProps) => {
  const items = mapUncapped(
    ({ exercise, time }: PlanElement, index: number) => (
      <Activity
        style={{ margin: 5 }}
        {...{ exercise, time }}
        key={`circuit${circuitIndex}-activity${index}`}
      />
    ),
    plan
  );
  return (
    <div
      style={{
        width: 310,
        height: "100%",
        borderRadius: 5,
        boxShadow: "0px 0px 1px black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#FAFAFA"
      }}
    >
      <div
        style={{
          width: "100%",
          height: 50,
          // borderRadius: 5,
          // boxShadow: "0px 0px 1px black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FAFAFA"
        }}
      >{`Circuit ${circuitIndex + 1}`}</div>
      <DraggableList listId={`circuit${circuitIndex}`}>{items}</DraggableList>
    </div>
  );
};
