import { filter, map } from "lodash/fp";
import { DropResult, Training } from "../../types";

export const reorderTraining = (
  event: DropResult,
  training: Training,
  writeTraining: (Training) => void
) => {
  const { destination, source } = event;
  const destinationCircuit = destination.droppableId.split("-")[1];
  const sourceCircuit = source.droppableId.split("-")[1];

  const circuits = training?.plan;
  const newTraining = map(circuit => {
    if (
      circuit.id === destinationCircuit &&
      destinationCircuit === sourceCircuit
    ) {
      // Reorder circuit
      circuit.plan.splice(
        destination.index,
        0,
        circuit.plan.splice(source.index, 1)[0]
      );
      return circuit;
    } else if (circuit.id === destinationCircuit) {
      // Add element at specified index
    } else return circuit;
  }, circuits);
  console.log("New training is", newTraining);
  writeTraining({ variables: { training: newTraining } });
};
