import React from "react";
import { PopList, SimplePopover } from "../";

export default {
    title: "PopList",
    component: PopList
};

export const DefaultPop = () => {

    return (< PopList
        anchorEl={true}
        handleClose={() => { }} />)
};

export const ExamplePop = () => {

    return < SimplePopover />
};

