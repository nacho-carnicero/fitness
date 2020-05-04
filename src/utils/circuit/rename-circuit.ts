import { map } from "lodash/fp";
import { Training, Circuit } from "../../types";

/**
 * Function that enables to change the name of a circuit
 * @param previousTraining training object before renaming circuit
 * @param circuitId id of the circuit to be renamed
 * @param name new name for the circuit
 */
export const renameCircuit = (
  previousTraining: Training,
  circuitId: string,
  name: string
): Training => {
  const newTrainingPlan = map(
    (circuit: Circuit) =>
      circuit.id !== circuitId ? circuit : { ...circuit, name },
    previousTraining.plan
  );
  return { ...previousTraining, plan: newTrainingPlan };
};
