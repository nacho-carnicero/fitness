import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { Circuit } from "../";

export default {
  title: "Circuit",
  component: Circuit
};

const Window = styled.div`
  width: ${window.outerWidth}px;
  height: ${window.outerHeight}px;
`;

export const NoActivity = () => (
  <DragDropContext>
    <Window>
      <Circuit circuitIndex={0} plan={[]} />
    </Window>
  </DragDropContext>
);

export const WithActivities = () => (
  <DragDropContext>
    <Window>
      <Circuit
        circuitIndex={0}
        plan={[
          { exercise: { name: "Squat" }, time: 30 },
          { exercise: { name: "Push ups" }, time: 45, status: "executing" },
          { exercise: { name: "Crunch" }, time: 60 },
          { exercise: { name: "Pull ups" }, time: 15 }
        ]}
      />
    </Window>
  </DragDropContext>
);
