import { renameTraining } from "../rename-training";

test("Rename training works", () => {
  const testTraining = { type: "training", plan: [], name: "Default name" };
  expect(renameTraining(testTraining, "New name")).toEqual({
    type: "training",
    plan: [],
    name: "New name"
  });
});
