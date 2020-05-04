import React from "react";
import styled from "@emotion/styled";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { get } from "lodash/fp";
import { DragDropContext } from "react-beautiful-dnd";
import { Training } from "./components/training";

const Window = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
`;

const trainingQuery = gql`
  {
    training @client {
      id
      type
      name
      plan {
        id
        type
        name
        plan
      }
    }
  }
`;

const addCircuitQuery = gql`
  mutation {
    addCircuit @client
  }
`;

function App() {
  const trainingQueryResponse = useQuery(trainingQuery);
  const [addCircuit] = useMutation(addCircuitQuery);
  const training = get("data.training", trainingQueryResponse);
  console.log("Training", trainingQueryResponse);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <Window>
        <Training training={training} addCircuit={addCircuit} />
      </Window>
    </DragDropContext>
  );
}

export default App;
