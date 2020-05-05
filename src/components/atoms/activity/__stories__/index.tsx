import React from "react";
import { Activity } from "../";

export default {
  title: "Activity",
  component: Activity
};

const activity = {
  type: "activity",
  id: "coaisndoiasndonas",
  exercise: { name: "Squat" },
  time: 30
};

export const Basic = () => <Activity edit={false} {...activity} />;
export const Editing = () => <Activity edit {...activity} />;
export const Executing = () => (
  <Activity edit={false} {...{ ...activity, status: "executing" }} />
);
export const Finished = () => (
  <Activity edit={false} {...{ ...activity, status: "finished" }} />
);
