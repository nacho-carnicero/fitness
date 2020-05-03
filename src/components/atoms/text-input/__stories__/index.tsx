import React from "react";
import { TextInput } from "../";

export default {
  title: "TextInput",
  component: TextInput
};

export const Basic = () => <TextInput />;
export const WithPlaceholder = () => (
  <TextInput placeholder="This is a placeholder" />
);
export const WithValue = () => <TextInput value="Hello world!" />;
export const Disabled = () => <TextInput value="Hello world!" disabled />;
