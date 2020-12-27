import {
  addActivity as addActivityWithoutPersist,
  removeActivity as removeActivityWithoutPersist,
  duplicateActivity as duplicateActivityWithoutPersist,
  editActivity as editActivityWithoutPersist
} from "./activity";
import { withPersist } from "./persist";
import {
  addCircuit as addCircuitWithoutPersist,
  removeCircuit as removeCircuitWithoutPersist,
  renameCircuit as renameCircuitWithoutPersist
} from "./circuit";
import { renameTraining as renameTrainingWithoutPersist } from "./training";

// Add persistance to all actions
const addActivity = withPersist(addActivityWithoutPersist);
const removeActivity = withPersist(removeActivityWithoutPersist);
const duplicateActivity = withPersist(duplicateActivityWithoutPersist);
const editActivity = withPersist(editActivityWithoutPersist);

const addCircuit = withPersist(addCircuitWithoutPersist);
const removeCircuit = withPersist(removeCircuitWithoutPersist);
const renameCircuit = withPersist(renameCircuitWithoutPersist);

const renameTraining = withPersist(renameTrainingWithoutPersist);

export {
  addActivity,
  removeActivity,
  duplicateActivity,
  editActivity,
  addCircuit,
  removeCircuit,
  renameCircuit,
  renameTraining
};
