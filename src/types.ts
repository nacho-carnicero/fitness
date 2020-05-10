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

export type ActivityProps = Activity & {
  style?: any;
  edit: boolean;
  removeActivity: (options?: { variables: any }) => void;
  duplicateActivity: (options?: { variables: any }) => void;
  editActivity: (options?: { variables: any }) => void;
};

export type Circuit = {
  id: string;
  type: string;
  plan: Activity[];
  name?: string | null;
  __typename?: string;
};

export type CircuitResolvers = {
  addActivity: (options?: { variables: any }) => void;
  removeCircuit: (options?: { variables: any }) => void;
  duplicateActivity: (options?: { variables: any }) => void;
  removeActivity: (options?: { variables: any }) => void;
  editActivity: (options?: { variables: any }) => void;
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
  edit: boolean;
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
  state: string;
};

export type TrainingHeader = {
  addCircuit: () => void;
  state: string;
};

export type TrainingProps = {
  training: Training | null;
  addCircuit: () => void;
  removeCircuit: () => void;
  addActivity: () => void;
  removeActivity: () => void;
  duplicateActivity: () => void;
  editActivity: () => void;
  state?: string;
};
