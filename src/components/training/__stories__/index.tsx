import React from "react";
import styled from "@emotion/styled";
import { Training } from "../";
import { DragDropContext } from "react-beautiful-dnd";

export default {
  title: "Training",
  component: Training
};

const Window = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
`;

export const Basic = () => (
  <DragDropContext>
    <Window>
      <Training />
    </Window>
  </DragDropContext>
);

const training = {
  type: "high-intensity-interval-training",
  name: "Example training",
  plan: [
    {
      type: "Circuit",
      status: "finished",
      plan: [
        { exercise: { name: "Crunch" }, time: 30, status: "finished" },
        {
          exercise: { name: "Mountain climbers" },
          time: 30,
          status: "finished"
        }
      ]
    },
    {
      type: "Circuit",
      status: "executing",
      plan: [
        { exercise: { name: "Squat" }, time: 30, status: "finished" },
        { exercise: { name: "Push ups" }, time: 45, status: "executing" }
      ]
    },
    {
      type: "Circuit",
      status: "planned",
      plan: [
        { exercise: { name: "Jumping jacks" }, time: 30 },
        { exercise: { name: "Spider crawl" }, time: 45 }
      ]
    }
  ]
};

export const WithContent = () => (
  <DragDropContext>
    <Window>
      <Training training={training} />
    </Window>
  </DragDropContext>
);
