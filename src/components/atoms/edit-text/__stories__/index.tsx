import React from "react";
import { EditText } from "../";

export default {
  title: "EditText",
  component: EditText
};

export const Basic = () => (
  <EditText
    value="Change me!"
    changeParameter={value => {
      console.log("Parameter would change to:", value);
    }}
  />
);
