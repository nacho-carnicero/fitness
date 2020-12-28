import { TextFieldProps } from "@material-ui/core";
import { DropResult as DropResultF } from "react-beautiful-dnd";

export type DropResult = DropResultF;

export type Exercise = { name: string };

// ACTIVITY TYPES

export type Activity = {
  id: string;
  type: string;
  exercise: Exercise;
  time: number;
  status?: string;
};

export type ActivityInputToAddActivity = Omit<Activity, "id"> & {
  id?: string;
  style?: any;
};

export type ActivityParametersInputToEditActivity = Partial<
  Exclude<Activity, "id" | "type">
>;

export type ActivityProps = Activity & {
  style?: any;
  edit: boolean;
  removeActivity: (options?: { variables: any }) => void;
  duplicateActivity: (options?: { variables: any }) => void;
  editActivity: (options?: { variables: any }) => void;
};

// CIRCUIT TYPES

export type Circuit = {
  id: string;
  type: string;
  plan: Activity[];
  name?: string | null;
  __typename?: string;
};

export type CircuitInputToAddCircuit = Omit<Circuit, "id"> & {
  id?: string;
};

export type CircuitResolvers = {
  addActivity: (options?: { variables: any }) => void;
  removeCircuit: (options?: { variables: any }) => void;
  duplicateActivity: (options?: { variables: any }) => void;
  removeActivity: (options?: { variables: any }) => void;
  editActivity: (options?: { variables: any }) => void;
};

export type CircuitProps = Circuit &
  CircuitResolvers & {
    circuitIndex: number;
    edit: boolean;
  };

// TRAINING TYPES

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

export type TrainingControls = {
  state: string;
};

// OTHER TYPES

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

export type TextProps = {
  bold?: boolean;
  color?: string;
  style?: any;
};

export type TrainingHeader = {
  addCircuit: () => void;
  resetTraining: () => void;
  state: string;
};

export type TrainingProps = {
  training: Training | null;
  addCircuit: () => void;
  resetTraining: () => void;
  removeCircuit: () => void;
  addActivity: () => void;
  removeActivity: () => void;
  duplicateActivity: () => void;
  editActivity: () => void;
  state?: string;
}
export type TextInputProps = TextFieldProps & { bold?: boolean };

export type EditTextInputProps = TextInputProps & {
  changeParameter: (value?: unknown) => void;
};

export enum StateTypes {
  edit = "edit",
  paused = "paused",
  executing = "executing"
}