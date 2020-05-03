import React from "react";
import styled from "@emotion/styled";
import { map, get, getOr } from "lodash/fp";
import { Circuit } from "../circuit";
import { neutralColor } from "../../style/colors";
import { PopList } from "../atoms/popover"
import { TrainingControls } from "../atoms/trainingControls"
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";
import { Training as TrainingType, Circuit as CircuitType, TrainingHeader as TrainingHeaderType, AddCircuit as AddCircuitType } from "../../types";

const mapUncapped = map.convert({ cap: false });

type Props = {
  training: TrainingType | null;
  addCircuit: AddCircuitType;
};

const TrainingHeader = ({ addCircuit, state }: TrainingHeaderType) => (
  <div
    style={{
      width: '50%',
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
    <div style={{ margin: 5 }}>
      <TrainingControls state={state} />
    </div>
    <div style={{ margin: 5 }}>
      < PopList
        anchorOrigin={
          {
            vertical: 'center',
            horizontal: 'center'
          }
        }
        transformOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
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
      <TrainingHeader addCircuit={props.addCircuit} state={getOr('edit', 'state', props)} />
      <TrainingContainer>
        {getContentFromTraining(props.training)}
      </TrainingContainer>
    </div>
  );
};
