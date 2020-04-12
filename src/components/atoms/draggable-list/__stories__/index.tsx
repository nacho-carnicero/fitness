import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import { DraggableList } from "../";

export default {
  title: "Draggable list",
  component: DraggableList
};

const grid = 8;
const StyledElement = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding: ${grid}px;
`;

const reorder = (
  list: React.FC[],
  startIndex: number,
  endIndex: number
): React.FC[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const ExampleList = () => {
  const intialItems = [
    <StyledElement key="element0">Element 0</StyledElement>,
    <StyledElement key="element1">Element 1</StyledElement>,
    <StyledElement key="element2">Element 2</StyledElement>,
    <StyledElement key="element3">Element 3</StyledElement>,
    <StyledElement key="element4">Element 4</StyledElement>,
    <StyledElement key="element5">Element 5</StyledElement>,
    <StyledElement key="element6">Element 6</StyledElement>,
    <StyledElement key="element7">Element 7 </StyledElement>
  ];
  const [items, setItems] = useState(intialItems);

  const onDragEnd = useCallback(
    result => {
      if (!result.destination) {
        return;
      }

      if (result.destination.index === result.source.index) {
        return;
      }

      const newItems = reorder(
        items,
        result.source.index,
        result.destination.index
      );
      setItems(newItems);
    },
    [items]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DraggableList listId={"list"}>{items}</DraggableList>
    </DragDropContext>
  );
};
