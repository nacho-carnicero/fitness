import React from "react";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { map, get, getOr } from "lodash/fp";
import { Circuit } from "../circuit";
import { neutralColor } from "../../style/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TrainingControls } from "../atoms/trainingControls";
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";
import {
  Training as TrainingType,
  TrainingProps,
  Circuit as CircuitType,
  TrainingHeader as TrainingHeaderType,
  CircuitResolvers,
  StateTypes
} from "../../types";

const mapUncapped = map.convert({ cap: false });

const buttonStyle = {
  width: 30,
  height: 0.75 * 30,
  borderRadius: 5,
  marginRight: 5
}

const TrainingHeader = ({ addCircuit, resetTraining, state }: TrainingHeaderType) => (
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
        style={buttonStyle}
        onClick={() => { addCircuit() }}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <button
        style={buttonStyle}
        onClick={() => { resetTraining() }}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  </div>
);

const TrainingContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  height: "100%"
});

const getContentFromTraining = (
  training: TrainingType,
  edit: boolean,
  circuitResolvers: CircuitResolvers
): React.ReactNode => {
  const content = mapUncapped((circuit: CircuitType, circuitIndex: number) => {
    return (
      <Circuit
        key={`Circuit-${circuit.id}`}
        circuitIndex={circuitIndex}
        {...circuit}
        edit={edit}
        {...circuitResolvers}
      />
    );
  }, get("plan", training));
  return content;
};

const stateQuery = gql`
  {
    state @client 
  }
`;

export const Training = ({
  training,
  addCircuit,
  resetTraining,
  addActivity,
  removeActivity,
  removeCircuit,
  duplicateActivity,
  editActivity,
}: TrainingProps) => {
  const stateQueryResponse = useQuery(stateQuery);
  const state = getOr(StateTypes.edit, "data.state", stateQueryResponse);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TrainingHeader addCircuit={addCircuit} resetTraining={resetTraining} state={state} />
      <TrainingContainer>
        {getContentFromTraining(training, state === "edit" ? true : false, {
          addActivity,
          removeActivity,
          removeCircuit,
          duplicateActivity,
          editActivity
        })}
      </TrainingContainer>
    </div>
  );
};
