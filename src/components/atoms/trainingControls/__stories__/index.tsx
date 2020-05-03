import React from "react";
import { TrainingControls } from "../";

export default {
    title: "TrainingControls",
    component: TrainingControls
};

export const EditMode = () => {
    return (< TrainingControls state={'edit'} />)
};

export const ExecutingMode = () => {
    return (< TrainingControls state={'executing'} />)
};

export const PausedMode = () => {
    return (< TrainingControls state={'paused'} />)
};