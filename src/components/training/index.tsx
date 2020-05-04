import React from "react";
import styled from "@emotion/styled";
import { map, get, getOr } from "lodash/fp";
import { Circuit } from "../circuit";
import { PopList } from "../atoms/popover";
import { neutralColor } from "../../style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { TrainingControls } from "../atoms/trainingControls";
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";
import {
  Training as TrainingType,
  Circuit as CircuitType,
  TrainingHeader as TrainingHeaderType
} from "../../types";

const mapUncapped = map.convert({ cap: false });

type Props = {
  training: TrainingType | null;
  addCircuit: () => void;
};

const TrainingHeader = ({ addCircuit, state }: TrainingHeaderType) => (
  <div
    style={{
      width: "99%",
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
    <div style={{ margin: 5, flexDirection: "row", display: "flex" }}>
      <button
        style={{
          width: 30,
          height: 0.75 * 30,
          borderRadius: 5,
          marginRight: 5
        }}
        onClick={() => {
          addCircuit();
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
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
  </div>
);

const TrainingContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  height: "100%"
});

const getContentFromTraining = (training: TrainingType): React.ReactNode => {
  const content = mapUncapped((circuit: CircuitType, circuitIndex: number) => {
    return (
      <Circuit
        key={`Circuit-${circuit.id}`}
        circuitIndex={circuitIndex}
        {...circuit}
      ></Circuit>
    );
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
      <TrainingHeader
        addCircuit={props.addCircuit}
        state={getOr("edit", "state", props)}
      />
      <TrainingContainer>
        {getContentFromTraining(props.training)}
      </TrainingContainer>
    </div>
  );
};
