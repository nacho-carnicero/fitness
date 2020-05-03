import React from "react";
import { Activity } from "../";

export default {
  title: "Activity",
  component: Activity
};

const exercise = { name: "Squat" };
const time = 30;

export const Basic = () => <Activity {...{ exercise, time }} />;
export const Executing = () => (
  <Activity {...{ exercise, time, status: "executing" }} />
);
export const Finished = () => <Activity {...{ exercise, time, status: "finished"  }} />;
