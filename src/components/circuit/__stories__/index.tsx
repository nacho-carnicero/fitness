import React from "react";
import { Circuit } from "../";
import { QuoteApp } from "../example-list";

export default {
  title: "Circuit",
  component: Circuit
};

const exercise = { name: "Squat" };
const time = 30;

export const NoActivity = () => <Circuit />;
export const ExampleList = () => <QuoteApp />;
