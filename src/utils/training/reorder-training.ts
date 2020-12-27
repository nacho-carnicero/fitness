import { filter, map, isNil } from "lodash/fp";
import { DropResult, Training } from "../../types";
import { persistTraining, withPersist } from "../persist";

export const reorderTraining = (
  event: DropResult,
  training: Training,
  writeTraining: (Training) => void
) => {
  const { destination, source } = event;
  if (!isNil(destination?.droppableId)) {
    const destinationCircuit = destination.droppableId.split("-")[1];
    const sourceCircuit = source.droppableId.split("-")[1];

    const circuits = training?.plan;
    const newTrainingPlan = map(circuit => {
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
        return {
          ...circuit,
          plan: [
            ...circuit.plan.slice(0, destination.index),
            filter(circuit => circuit.id === sourceCircuit, circuits)[0]
              ?.plan?.[source.index],
            ...circuit.plan.slice(destination.index, circuit.plan.length)
          ]
        };
      } else if (circuit.id === sourceCircuit) {
        return {
          ...circuit,
          plan: [
            ...circuit.plan.slice(0, source.index),
            ...circuit.plan.slice(source.index + 1, circuit.plan.length)
          ]
        };
      } else return circuit;
    }, circuits);
    const newTraining = { ...training, plan: newTrainingPlan };
    writeTraining({ variables: { training: newTraining } });
    persistTraining(newTraining, localStorage);
  } else return null;
};
