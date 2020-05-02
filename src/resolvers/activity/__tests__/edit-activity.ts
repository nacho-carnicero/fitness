import { editActivity } from "../edit-activity";

test("Edit activity exercise works", () => {
  const testTraining = {
    id: "coasibndpasindoiaspd",
    type: "training",
    plan: [
      {
        id: "coaifpsiandoisabdias",
        type: "circuit",
        plan: [
          {
            id: "cpioasndfpisadiasbn",
            type: "activity",
            exercise: { name: "Squat" },
            time: 30
          }
        ]
      }
    ]
  };
  expect(
    editActivity(testTraining, "cpioasndfpisadiasbn", {
      exercise: { name: "Mountain climbers" }
    })
  ).toEqual({
    id: "coasibndpasindoiaspd",
    type: "training",
    plan: [
      {
        id: "coaifpsiandoisabdias",
        type: "circuit",
        plan: [
          {
            id: "cpioasndfpisadiasbn",
            type: "activity",
            exercise: { name: "Mountain climbers" },
            time: 30
          }
        ]
      }
    ]
  });
});

test("Edit activity time works", () => {
  const testTraining = {
    id: "coasibndpasindoiaspd",
    type: "training",
    plan: [
      {
        id: "coaifpsiandoisabdias",
        type: "circuit",
        plan: [
          {
            id: "cpioasndfpisadiasbn",
            type: "activity",
            exercise: { name: "Squat" },
            time: 30
          }
        ]
      }
    ]
  };
  expect(
    editActivity(testTraining, "cpioasndfpisadiasbn", {
      time: 15
    })
  ).toEqual({
    id: "coasibndpasindoiaspd",
    type: "training",
    plan: [
      {
        id: "coaifpsiandoisabdias",
        type: "circuit",
        plan: [
          {
            id: "cpioasndfpisadiasbn",
            type: "activity",
            exercise: { name: "Squat" },
            time: 15
          }
        ]
      }
    ]
  });
});

test("Edit several parameters at once works", () => {
  const testTraining = {
    id: "coasibndpasindoiaspd",
    type: "training",
    plan: [
      {
        id: "coaifpsiandoisabdias",
        type: "circuit",
        plan: [
          {
            id: "cpioasndfpisadiasbn",
            type: "activity",
            exercise: { name: "Squat" },
            time: 30
          }
        ]
      }
    ]
  };
  expect(
    editActivity(testTraining, "cpioasndfpisadiasbn", {
      exercise: { name: "Crunch" },
      time: 15
    })
  ).toEqual({
    id: "coasibndpasindoiaspd",
    type: "training",
    plan: [
      {
        id: "coaifpsiandoisabdias",
        type: "circuit",
        plan: [
          {
            id: "cpioasndfpisadiasbn",
            type: "activity",
            exercise: { name: "Crunch" },
            time: 15
          }
        ]
      }
    ]
  });
});
