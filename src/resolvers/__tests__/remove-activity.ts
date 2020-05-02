import { removeActivity } from "../remove-activity";

test("Delete activity from training works", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        type: "circuit",
        plan: [
          {
            id: "coiabodibasoidas",
            type: "activity",
            exercise: { name: "Squat" },
            time: 15
          }
        ],
        id: "ck9orwp460000oorse5h330it"
      }
    ]
  };
  expect(removeActivity(testTraining, "coiabodibasoidas")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [{ type: "circuit", plan: [], id: "ck9orwp460000oorse5h330it" }]
  });
});

test("Delete activity keeps order of other activities", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      {
        type: "circuit",
        plan: [
          {
            id: "coiabodibasoidht",
            type: "activity",
            exercise: { name: "Squat" },
            time: 15
          },
          {
            id: "coiabodibasoidas",
            type: "activity",
            exercise: { name: "Crunch" },
            time: 15
          },
          {
            id: "coiabodibasoidqw",
            type: "activity",
            exercise: { name: "Mountain Climbers" },
            time: 15
          }
        ],
        id: "ck9orwp460000oorse5h330it"
      },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  };
  expect(removeActivity(testTraining, "coiabodibasoidas")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      {
        type: "circuit",
        plan: [
          {
            id: "coiabodibasoidht",
            type: "activity",
            exercise: { name: "Squat" },
            time: 15
          },
          {
            id: "coiabodibasoidqw",
            type: "activity",
            exercise: { name: "Mountain Climbers" },
            time: 15
          }
        ],
        id: "ck9orwp460000oorse5h330it"
      },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  });
});

test("Does nothing if activity does not exist in current training", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      {
        type: "circuit",
        plan: [
          {
            id: "coiabodibasoidht",
            type: "activity",
            exercise: { name: "Squat" },
            time: 15
          },
          {
            id: "coiabodibasoidqw",
            type: "activity",
            exercise: { name: "Mountain Climbers" },
            time: 15
          }
        ],
        id: "ck9orwp460000oorse5h330it"
      },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  };
  expect(removeActivity(testTraining, "ck9orwp460000oorse5h330fs")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330fs" },
      {
        type: "circuit",
        plan: [
          {
            id: "coiabodibasoidht",
            type: "activity",
            exercise: { name: "Squat" },
            time: 15
          },
          {
            id: "coiabodibasoidqw",
            type: "activity",
            exercise: { name: "Mountain Climbers" },
            time: 15
          }
        ],
        id: "ck9orwp460000oorse5h330it"
      },
      { type: "circuit", plan: [], id: "ck9orwp460000oorse5h330gh" }
    ]
  });
});
