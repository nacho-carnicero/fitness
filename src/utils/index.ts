import {
  addActivity as addActivityWithoutPersist,
  removeActivity,
  duplicateActivity,
  editActivity
} from "./activity";
import { withPersist } from "./persist";
export { addCircuit, removeCircuit, renameCircuit } from "./circuit";
export { renameTraining } from "./training";
const addActivity = withPersist(addActivityWithoutPersist);
export { addActivity, removeActivity, duplicateActivity, editActivity };
