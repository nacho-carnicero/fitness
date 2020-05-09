import React from "react";
import { EditActivity } from "../edit-activity";
import { DisplayActivity } from "../display-activity";

export default {
  title: "Activity"
};

const activity = {
  type: "activity",
  id: "coaisndoiasndonas",
  exercise: { name: "Squat" },
  time: 30
};

export const Basic = () => <DisplayActivity edit={false} {...activity} />;
export const Editing = () => (
  <EditActivity
    edit
    {...activity}
    removeActivity={() => {}}
    duplicateActivity={() => {}}
  />
);
export const Executing = () => (
  <DisplayActivity edit={false} {...{ ...activity, status: "executing" }} />
);
export const Finished = () => (
  <DisplayActivity edit={false} {...{ ...activity, status: "finished" }} />
);
