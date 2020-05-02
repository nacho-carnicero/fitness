import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { TextInput } from "../text-input";
import { ActivityProps } from "../../../types";

const executingShadow = "0px 0px 3px 1px #555555AA";

export const EditActivity = ({
  exercise,
  time,
  style,
  status = "planned"
}: ActivityProps) => {
  const ActivityContainer = styled.div(props => ({
    width: 300,
    height: 100,
    borderRadius: 5,
    boxShadow:
      status === "executing" ? executingShadow : "0px 0px 1px #555555AA",
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          margin: 10
        }}
      >
        <TextInput
          style={{
            fontSize: 20
          }}
          bold
          value={exercise.name}
        ></TextInput>
        <button
          style={{
            width: 30,
            height: 0.75 * 30,
            borderRadius: 5
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
      <TextInput
        style={{
          padding: 10,
          fontSize: 15,
          color: "#AAAAAA"
        }}
        value={`${time} s`}
      ></TextInput>
    </ActivityContainer>
  );
};
