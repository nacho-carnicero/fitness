import React from "react";
import styled from "@emotion/styled";
import { PopList } from "../popover";
import { TextInput } from "../text-input";
import { ActivityProps } from "../../../types";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const removeActivityQuery = gql`
  mutation($id: ID) {
    removeActivity(id: $id) @client
  }
`;

const duplicateActivityQuery = gql`
  mutation($id: ID) {
    duplicateActivity(id: $id) @client
  }
`;

const executingShadow = "0px 0px 3px 1px #555555AA";

export const EditActivity = ({
  exercise,
  time,
  style,
  status = "planned",
  id
}: ActivityProps) => {
  const [removeActivity] = useMutation(removeActivityQuery);
  const [duplicateActivity] = useMutation(duplicateActivityQuery);

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
        <PopList
          anchorOrigin={{
            vertical: "center",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          options={["Duplicate", "Remove"]}
          optionsCall={
            [() => duplicateActivity({ variables: { id } }),
            () => removeActivity({ variables: { id } })]
          }
        />
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
