export type Exercise = { name: string };

export type Activity = {
  id: string;
  type: string;
  exercise: Exercise;
  time: number;
  status?: string;
};

export type ActivityInputToAddActivity = {
  id?: string;
  type: string;
  exercise: Exercise;
  time: number;
  status?: string;
  style?: any;
};

export type ActivityParametersInputToEditActivity = {
  exercise?: Exercise;
  time?: number;
  status?: string;
};

export type ActivityProps = Activity & { style?: any; edit: boolean };

export type Circuit = {
  id: string;
  type: string;
  plan: Activity[];
  name?: string | null;
  __typename?: string;
};

export type CircuitInputToAddCircuit = {
  id?: string;
  type: string;
  plan: Activity[];
  name?: string | null;
  __typename?: string;
};

export type Training = {
  id: string;
  type: string;
  plan: Circuit[];
  edit: boolean,
  name?: string;
};

export type AddCircuit = (
  previousTraining: Training,
  newCircuit?: CircuitInputToAddCircuit
) => Training;

export type Popover = {
  anchorOrigin: any;
  transformOrigin: any;
  options: Array<String>;
  optionsCall?: Array<Function>;
};

export type PopList = {
  options: Array<String>;
  optionsCall?: Array<Function>;
  closure?: Function;
};

export type TrainingControls = {
  state: String;
};

export type TrainingHeader = {
  addCircuit: () => void;
  state: String;
};

export type TrainingProps = {
  training: Training | null;
  addCircuit: () => void;
  removeCircuit: () => void;
  addActivity: () => void;
  removeActivity: () => void;
  duplicateActivity: () => void;
};
