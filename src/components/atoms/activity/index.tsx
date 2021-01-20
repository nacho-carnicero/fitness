import React from "react";
import { ActivityProps } from "../../../types";
import { EditActivity } from "./edit-activity";
import { DisplayActivity } from "./display-activity";

export const Activity = (props: ActivityProps) => {
  return props.edit === true ? (
    <EditActivity {...props} />
  ) : (
      <DisplayActivity {...props} />
    );
};
