import { addCircuit } from "../add-circuit";

// Mock cuid behavior so that we can have predictable behavior to test
jest.mock("cuid", () => () => "ck9orwp460000oorse5h330it");

test("Add circuit to empty training works", () => {
  const emptyTraining = { type: "training", plan: [] };
  expect(
    addCircuit(emptyTraining, {
      type: "circuit",
      plan: []
    })
  ).toEqual({
    type: "training",
    plan: [{ type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" }]
  });
});

test("Add circuit to non-empty training works", () => {
  const testTraining = {
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330jh" }
    ]
  };
  expect(
    addCircuit(testTraining, {
      type: "circuit",
      plan: []
    })
  ).toEqual({
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330jh" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" }
    ]
  });
});

test("Add circuit without setting input circuit adds new default circuit", () => {
  const testTraining = {
    type: "training",
    plan: [{ type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" }]
  };
  expect(addCircuit(testTraining)).toEqual({
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" }
    ]
  });
});
