import React, { useState } from "react";
import styled from "@emotion/styled";
import { DraggableList } from "../";

export default {
  title: "Draggable list",
  component: DraggableList
};

const grid = 8;
const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

export const ExampleList = () => {
  const [items, setItems] = useState({});
  return (
    <DraggableList>
      <QuoteItem />
      <QuoteItem />
    </DraggableList>
  );
};
