import React from "react";
import { Activity } from "../";

export default {
  title: "Activity"
};

const activity = {
  type: "activity",
  id: "coaisndoiasndonas",
  exercise: { name: "Squat" },
  time: 30
};

export const Basic = () => (
  <Activity
    edit={false}
    {...activity}
    removeActivity={() => {}}
    duplicateActivity={() => {}}
    editActivity={() => {}}
  />
);
export const Editing = () => (
  <Activity
    edit
    {...activity}
    removeActivity={() => {}}
    duplicateActivity={() => {}}
    editActivity={() => {}}
  />
);
export const Executing = () => (
  <Activity
    edit={false}
    {...{ ...activity, status: "executing" }}
    removeActivity={() => {}}
    duplicateActivity={() => {}}
    editActivity={() => {}}
  />
);
export const Finished = () => (
  <Activity
    edit={false}
    {...{ ...activity, status: "finished" }}
    removeActivity={() => {}}
    duplicateActivity={() => {}}
    editActivity={() => {}}
  />
);
