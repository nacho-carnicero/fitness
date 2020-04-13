import React from "react";
import { map } from "lodash/fp";
import styled from "@emotion/styled";
import { DraggableList, Activity, Text } from "../atoms/";

const mapUncapped = map.convert({ cap: false });

type Exercise = { name: string };
type PlanElement = { exercise: Exercise; time: number; status?: string };
export type CircuitProps = {
  plan: PlanElement[];
  circuitIndex: number;
};

const Separator = styled.div(`
  width:100%;
  height:1px;
  box-shadow: 0px -1px 1px black
`);

export const Circuit = ({ plan, circuitIndex }: CircuitProps) => {
  const items = mapUncapped(
    (elementPlan: PlanElement, index: number) => (
      <Activity
        style={{ margin: 5 }}
        {...elementPlan}
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
      <Text
        style={{
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        }}
        bold
      >{`Circuit ${circuitIndex + 1}`}</Text>
      <Separator />

      <DraggableList listId={`circuit${circuitIndex}`}>{items}</DraggableList>
    </div>
  );
};
