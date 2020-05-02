import { addActivity } from "../add-activity";

// Mock cuid behavior so that we can have predictable behavior to test
jest.mock("cuid", () => () => "ck9orwp460000oorse5h330it");

test("Add activity to empty circuit works", () => {
  const emptyTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [{ id: "coiahsdoahsda", type: "circuit", plan: [] }]
  };
  expect(
    addActivity(emptyTraining, "coiahsdoahsda", {
      type: "activity",
      exercise: { name: "Squat" },
      time: 10
    })
  ).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        id: "coiahsdoahsda",
        type: "circuit",
        plan: [
          {
            id: "ck9orwp460000oorse5h330it",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          }
        ]
      }
    ]
  });
});

test("Add activity to non-empty circuit works", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" },
      {
        type: "circuit",
        plan: [
          {
            id: "coisahdoiashdoihasoid",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          }
        ],
        id: "ck9orwp460000oorse5h330jh"
      }
    ]
  };
  expect(
    addActivity(testTraining, "ck9orwp460000oorse5h330jh", {
      type: "activity",
      exercise: { name: "Mountain climbers" },
      time: 15
    })
  ).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" },
      {
        type: "circuit",
        plan: [
          {
            id: "coisahdoiashdoihasoid",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          },
          {
            id: "ck9orwp460000oorse5h330it",
            type: "activity",
            exercise: { name: "Mountain climbers" },
            time: 15
          }
        ],
        id: "ck9orwp460000oorse5h330jh"
      }
    ]
  });
});

test("Add activity without setting input activity adds new default activity", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [{ type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gf" }]
  };
  expect(addActivity(testTraining, "ck9orwp460000oorse5h330gf")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        type: "circuit",
        plan: [
          {
            id: "ck9orwp460000oorse5h330it",
            type: "activity",
            exercise: { name: "New exercise" },
            time: 0
          }
        ],
        id: "ck9orwp460000oorse5h330gf"
      }
    ]
  });
});
