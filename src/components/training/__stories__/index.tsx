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
  <DragDropContext onDragEnd={() => { }}>
    <Window>
      <Training
        training={null}
        addCircuit={() => { }}
        resetTraining={() => { }}
        removeCircuit={() => { }}
        removeActivity={() => { }}
        addActivity={() => { }}
        duplicateActivity={() => { }}
        editActivity={() => { }}
      />
    </Window>
  </DragDropContext>
);

const training = {
  id: "coiasboiasbdobsai",
  type: "high-intensity-interval-training",
  name: "Example training",
  edit: true,
  plan: [
    {
      id: "coiasbcoibsaoib",
      type: "Circuit",
      status: "finished",
      plan: [
        {
          id: "coiasndoisabdoia",
          type: "activity",
          exercise: { name: "Crunch" },
          time: 30,
          status: "finished"
        },
        {
          id: "coasindbosidoasboiba",
          type: "activity",
          exercise: { name: "Mountain climbers" },
          time: 30,
          status: "finished"
        }
      ]
    },
    {
      id: "copasindpsianodsain",
      type: "Circuit",
      status: "executing",
      plan: [
        {
          id: "cpsaidnpasindoaisboid",
          type: "activity",
          exercise: { name: "Squat" },
          time: 30,
          status: "finished"
        },
        {
          id: "coasibdoiasbodbsa",
          type: "activity",
          exercise: { name: "Push ups" },
          time: 45,
          status: "executing"
        }
      ]
    },
    {
      type: "Circuit",
      id: "coisabndoisabno",
      status: "planned",
      plan: [
        {
          id: "coisabndoisabno",
          type: "activity",
          exercise: { name: "Jumping jacks" },
          time: 30
        },
        {
          id: "cpoajsdpoapdn",
          type: "activity",
          exercise: { name: "Spider crawl" },
          time: 45
        }
      ]
    }
  ]
};

export const WithContent = () => (
  <DragDropContext onDragEnd={() => { }}>
    <Window>
      <Training
        training={training}
        addCircuit={() => { }}
        resetTraining={() => { }}
        removeCircuit={() => { }}
        removeActivity={() => { }}
        addActivity={() => { }}
        duplicateActivity={() => { }}
        editActivity={() => { }}
      />
    </Window>
  </DragDropContext>
);

export const WithContentExecuting = () => (
  <DragDropContext onDragEnd={() => { }}>
    <Window>
      <Training
        training={training}
        state={"executing"}
        addCircuit={() => { }}
        resetTraining={() => { }}
        removeCircuit={() => { }}
        removeActivity={() => { }}
        addActivity={() => { }}
        duplicateActivity={() => { }}
        editActivity={() => { }}
      />
    </Window>
  </DragDropContext>
);
export const WithContentPaused = () => (
  <DragDropContext onDragEnd={() => { }}>
    <Window>
      <Training
        training={training}
        state={"paused"}
        addCircuit={() => { }}
        resetTraining={() => { }}
        removeCircuit={() => { }}
        removeActivity={() => { }}
        addActivity={() => { }}
        duplicateActivity={() => { }}
        editActivity={() => { }}
      />
    </Window>
  </DragDropContext>
);
