import React from "react";
import { Text } from "../";

export default {
  title: "Text",
  component: Text
};

const DemoSection = ({ title, children }) => (
  <div style={{ display: "flex", flexDirection: "column", margin: 10 }}>
    <Text>{`${title}:`}</Text>
    <div
      style={{
        width: "100%",
        height: 50,
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  </div>
);

export const WithDefaulProps = () => <Text>Hello world!</Text>;
export const ChaningStyle = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <DemoSection title="Default style">
      <Text>Hello world!</Text>
    </DemoSection>
    <DemoSection title="Bigger font size">
      <Text style={{ fontSize: 20 }}>Hello world!</Text>
    </DemoSection>
    <DemoSection title="Bold">
      <Text bold>Hello world!</Text>
    </DemoSection>
    <DemoSection title="Colored">
      <Text color={"#FF0000"}>Hello world!</Text>
    </DemoSection>
  </div>
);
