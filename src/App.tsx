import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import { Training } from "./components/training";
import { Training as TrainingType } from "./types";
import { addCircuit } from "./resolvers";

const Window = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
`;

const emptyTraining: TrainingType = {
  id: "coiasbdoiasboida",
  type: "training",
  plan: [],
  name: "New training"
};

function App() {
  const [training, setTraining] = useState(emptyTraining);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Window>
        <Training
          training={training}
          addCircuit={() => {
            const newTraining = addCircuit(training);
            setTraining(newTraining);
          }}
        />
      </Window>
    </DragDropContext>
  );
}

export default App;
