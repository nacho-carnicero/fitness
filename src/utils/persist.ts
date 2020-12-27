import { throttle, isNil } from "lodash/fp";
import { Training } from "../types";

const trainingKeyInStorage = "training";

/**
 * Function that persists a training to a storage provider. It is throttled so that the write action executes max once per second
 */
export const persistTraining = throttle(
  1000,
  async (training: Training, storage): Promise<void> => {
    const trainingString = JSON.stringify(training);
    console.log("Will persist", trainingString);
    return storage.setItem(trainingKeyInStorage, trainingString);
  }
);

export const hydrateTraining = async (): Promise<null | Training> => {
  const trainingString = await localStorage.getItem(trainingKeyInStorage);
  console.log("Got this from local storage", trainingString);
  if (!isNil(trainingString)) {
    const training = JSON.parse(trainingString);
    return training;
  } else return null;
};

export const withPersist = action => (...input) => {
  const training = action(...input);
  persistTraining(training, localStorage);
  return training;
};
