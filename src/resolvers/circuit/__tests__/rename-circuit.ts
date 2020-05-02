import { renameCircuit } from "../rename-circuit";

test("Rename circuit works", () => {
  const testTraining = {
    id: "coiasbdoisabodiba",
    type: "training",
    plan: [
      {
        id: "coasibdoaisbdoiabsd",
        type: "circuit",
        plan: [],
        name: "Circuit 1"
      }
    ]
  };
  expect(
    renameCircuit(testTraining, "coasibdoaisbdoiabsd", "Changed name")
  ).toEqual({
    id: "coiasbdoisabodiba",
    type: "training",
    plan: [
      {
        id: "coasibdoaisbdoiabsd",
        type: "circuit",
        plan: [],
        name: "Changed name"
      }
    ]
  });
});
