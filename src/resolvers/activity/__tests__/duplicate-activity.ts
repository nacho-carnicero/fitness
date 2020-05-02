import { duplicateActivity } from "../duplicate-activity";

// Mock cuid behavior so that we can have predictable behavior to test
jest.mock("cuid", () => () => "ck9orwp460000oorse5h330it");

test("Duplicate activity works", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        id: "coiahsdoahsda",
        type: "circuit",
        plan: [
          {
            id: "oiadoaisbdoisabda",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          }
        ]
      }
    ]
  };
  expect(duplicateActivity(testTraining, "oiadoaisbdoisabda")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        id: "coiahsdoahsda",
        type: "circuit",
        plan: [
          {
            id: "oiadoaisbdoisabda",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          },
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

test("Duplicated activity shows up next to actvity being duplicated", () => {
  const testTraining = {
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        id: "coiahsdoahsda",
        type: "circuit",
        plan: [
          {
            id: "oiadoaisbdoisabda",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          },
          {
            id: "cqiweoibsajfakjsfd",
            type: "activity",
            exercise: { name: "Crunch" },
            time: 15
          }
        ]
      },
      {
        id: "cqwoeinoaisfoasbi",
        type: "circuit",
        plan: [
          {
            id: "cpq09wdiasibasd",
            type: "activity",
            exercise: { name: "Squat" },
            time: 14
          },
          {
            id: "cpoaishdpsoabpbsad",
            type: "activity",
            exercise: { name: "Superman" },
            time: 15
          }
        ]
      }
    ]
  };
  expect(duplicateActivity(testTraining, "oiadoaisbdoisabda")).toEqual({
    id: "ck9orwp460000oorse5h330ds",
    type: "training",
    plan: [
      {
        id: "coiahsdoahsda",
        type: "circuit",
        plan: [
          {
            id: "oiadoaisbdoisabda",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          },
          {
            id: "ck9orwp460000oorse5h330it",
            type: "activity",
            exercise: { name: "Squat" },
            time: 10
          },
          {
            id: "cqiweoibsajfakjsfd",
            type: "activity",
            exercise: { name: "Crunch" },
            time: 15
          }
        ]
      },
      {
        id: "cqwoeinoaisfoasbi",
        type: "circuit",
        plan: [
          {
            id: "cpq09wdiasibasd",
            type: "activity",
            exercise: { name: "Squat" },
            time: 14
          },
          {
            id: "cpoaishdpsoabpbsad",
            type: "activity",
            exercise: { name: "Superman" },
            time: 15
          }
        ]
      }
    ]
  });
});
