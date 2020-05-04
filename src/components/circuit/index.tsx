import React from "react";
import { map } from "lodash/fp";
import styled from "@emotion/styled";
import { DraggableList, Activity, Text } from "../atoms/";
import { neutralColor, defaultShadowColor } from "../../style/colors";
import { PopList } from "../atoms/popover";
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";

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
  background-color: ${defaultShadowColor}
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
        borderRadius: defaultBorderRadius,
        boxShadow: defaultBoxShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: neutralColor,
        margin: 5
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Text
          style={{
            height: headerHeight,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flex: 1
          }}
          bold
        >{`Circuit ${circuitIndex + 1}`}</Text>
        <PopList
          anchorOrigin={{
            vertical: "center",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          options={["Edit", "Remove", "Duplicate"]}
        />
      </div>
      <Separator />

      <DraggableList listId={`circuit${circuitIndex}`}>{items}</DraggableList>
    </div>
  );
};
