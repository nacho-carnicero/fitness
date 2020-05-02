import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import { Training } from "./components/training";

const Window = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
`;

const emptyTraining = {
  id: "coiasbdoiasboida",
  type: "training",
  plan: [],
  name: "New training"
};

function App() {
  const [training] = useState(emptyTraining);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Window>
        <Training training={training} addCircuit={() => {}} />
      </Window>
    </DragDropContext>
  );
}

export default App;
