import cuid from "cuid";
import { get } from "lodash/fp";

const defaultEmptyCircuit = { type: "circuit", plan: [] };

export const addCircuit = (previousPlan, newCircuit = defaultEmptyCircuit) => {
  const id = cuid();
  return {
    ...previousPlan,
    plan: [...get("plan", previousPlan), { ...newCircuit, id }]
  };
};
