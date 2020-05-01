type Exercise = { name: string };

export type Activity = {
  id: string;
  type: string;
  exercise: Exercise;
  time: number;
  status?: string;
};

export type Circuit = {
  id: string;
  type: string;
  plan: Activity[];
  name?: string;
};

export type CircuitInputToAddCircuit = {
  id?: string;
  type: string;
  plan: Activity[];
  name?: string;
};

export type Training = {
  id: string;
  type: string;
  plan: Circuit[];
  name?: string;
};
