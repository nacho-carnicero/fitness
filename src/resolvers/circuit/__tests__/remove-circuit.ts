import { removeCircuit } from "../remove-circuit";

test("Delete circuit from training works", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [{ type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" }]
  };
  expect(removeCircuit(testTraining, "ck9orwp460000oorse5h330it")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: []
  });
});

test("Delete circuit keeps order of other circuits", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  };
  expect(removeCircuit(testTraining, "ck9orwp460000oorse5h330it")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  });
});

test("Does nothing if circuit does not exist in current training", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  };
  expect(removeCircuit(testTraining, "ck9orwp460000oorse5h330tr")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  });
});
