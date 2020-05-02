import React from "react";
import styled from "@emotion/styled";
import { map, get } from "lodash/fp";
import { Circuit } from "../circuit";
import { neutralColor } from "../../style/colors";
import { PopList } from "../atoms/popover"
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";
import { Training as TrainingType, Circuit as CircuitType } from "../../types";

const mapUncapped = map.convert({ cap: false });

type Props = {
  training: TrainingType | null;
  addCircuit: () => void;
};

const TrainingHeader = ({ addCircuit }: { addCircuit: () => void }) => (
  <div
    style={{
      width:'50%',
      height: headerHeight,
      backgroundColor: neutralColor,
      borderRadius: defaultBorderRadius,
      boxShadow: defaultBoxShadow,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }}
  >
    <div style={{ margin: 5 }}></div>
    <div style={{ margin: 5 }}>
    < PopList location={
          {
            but: {
              vertical: 'center',
              horizontal: 'center',
            },
            pop: {
              vertical: 'top',
              horizontal: 'right',
            }
          }}
          options={["Add", "Edit", "Remove", "Duplicate"]} />
    </div>
  </div>
);

const TrainingContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  height: "100%"
});

const getContentFromTraining = (training: TrainingType): React.ReactNode => {
  const content = mapUncapped((circuit: CircuitType, circuitIndex: number) => {
    return <Circuit circuitIndex={circuitIndex} plan={circuit.plan}></Circuit>;
  }, get("plan", training));
  return content;
};

export const Training = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TrainingHeader addCircuit={props.addCircuit} />
      <TrainingContainer>
        {getContentFromTraining(props.training)}
      </TrainingContainer>
    </div>
  );
};
