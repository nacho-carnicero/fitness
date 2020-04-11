import React from "react";
import { Activity } from "../";

export default {
  title: "Activity",
  component: Activity
};

const exercise = { name: "Squat" };
const time = 30;

export const Basic = () => <Activity {...{ exercise, time }} />;
