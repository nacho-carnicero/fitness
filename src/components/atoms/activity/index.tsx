import React from "react";
import { ActivityProps } from "../../../types";
import { EditActivity } from "./edit-activity";
import { DisplayActivity } from "./display-activity";
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

export const Activity = (props: ActivityProps) => {
  const [removeActivity] = useMutation(removeActivityQuery);
  const [duplicateActivity] = useMutation(duplicateActivityQuery);
  return props.edit === true ? (
    <EditActivity
      removeActivity={removeActivity}
      duplicateActivity={duplicateActivity}
      {...props}
    />
  ) : (
    <DisplayActivity {...props} />
  );
};
