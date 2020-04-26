# Fitness app

The main purpose of this app is to be able to plan and execute fitness trainings or other sport activities.

## Terminology

The training is divided into different kind of elements, each one with a different level of complexity:

- the most basic element is the `Activity` which represents one physical exercise during a certain amount of time or repetitions (example: Do pushups during 30 seconds)
- the next level in the hierarchy is the `Circuit` which can concatenate elements of `Activity` type (example: Do pushups during 30 seconds, then do 30 leg curls, then run for 10 kms)
- finally, in the most upper level of hiereachy comes the `Training` element. This element can contain elements of type `Activity` or `Circuit` and represents a whole training plan to be executed by the user

## Launch app

- Clone the repo and enter into the directory
- `yarn install`
- `yarn storybook`

This will launch a window in your browser with the project's [Storybook](https://storybook.js.org/). This holds a collection of "stories" which render components of the app in different states, without dealing with all the business logic. Click on the left panel to select to story you want to visualize and it will be loaded in the content view.
