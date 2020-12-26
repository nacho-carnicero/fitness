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
      edit
      plan {
        id
        type
        name
        plan {
          id
          type
          time
          exercise {
            name
          }
        }
      }
    }
  }
`;

const addCircuitQuery = gql`
  mutation {
    addCircuit @client
  }
`;

const resetTrainingQuery = gql`
  mutation {
    resetTraining @client
  }
`;

const removeCircuitQuery = gql`
  mutation($id: ID) {
    removeCircuit(id: $id) @client
  }
`;

const addActivityQuery = gql`
  mutation($id: ID) {
    addActivity(id: $id) @client
  }
`;

const removeActivityQuery = gql`
  mutation($id: ID) {
    removeActivity(id: $id) @client
  }
`;

const duplicateActivityQuery = gql`
  mutation($id: ID) {
    duplicateActivity(id: $id) @client
  }
`;

const editActivityQuery = gql`
  mutation($id: ID, $newParameters: Json) {
    editActivity(id: $id, newParameters: $newParameters) @client
  }
`;

function App() {
  const trainingQueryResponse = useQuery(trainingQuery);
  const training = get("data.training", trainingQueryResponse);
  const [addCircuit] = useMutation(addCircuitQuery);
  const [resetTraining] = useMutation(resetTrainingQuery);
  const [removeCircuit] = useMutation(removeCircuitQuery);
  const [addActivity] = useMutation(addActivityQuery);
  const [removeActivity] = useMutation(removeActivityQuery);
  const [duplicateActivity] = useMutation(duplicateActivityQuery);
  const [editActivity] = useMutation(editActivityQuery);

  return (
    <DragDropContext onDragEnd={() => { }}>
      <Window>
        <Training
          training={training}
          addCircuit={addCircuit}
          resetTraining={resetTraining}
          removeCircuit={removeCircuit}
          addActivity={addActivity}
          removeActivity={removeActivity}
          duplicateActivity={duplicateActivity}
          editActivity={editActivity}
        />
      </Window>
    </DragDropContext>
  );
}

export default App;
