import React from "react";
import styled from "@emotion/styled";
import { map, get } from "lodash/fp";
import { Circuit } from "../circuit";
import { neutralColor } from "../../style/colors";
import {
  defaultBorderRadius,
  defaultBoxShadow,
  headerHeight
} from "../../style/layout";

const mapUncapped = map.convert({ cap: false });

const TrainingHeader = () => (
  <div
    style={{
      height: headerHeight,
      backgroundColor: neutralColor,
      borderRadius: defaultBorderRadius,
      boxShadow: defaultBoxShadow
    }}
  ></div>
);

const TrainingContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  height: "100%"
});

const getContentFromTraining = training => {
  const content = mapUncapped((circuit, circuitIndex) => {
    return <Circuit circuitIndex={circuitIndex} plan={circuit.plan}></Circuit>;
  }, get("plan", training));
  return content;
};

export const Training = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <TrainingHeader />
      <TrainingContainer>
        {getContentFromTraining(props.training)}
      </TrainingContainer>
    </div>
  );
};
