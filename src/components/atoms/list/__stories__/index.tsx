import React from "react";
import { OptionsList, DefaultList } from "../";

export default {
    title: "OptionsList",
    component: OptionsList
};

export const PopList = () => {

    return (< OptionsList
        options={["Edit", "Remove", "Duplicate"]} />)
};

export const DefaultList_ = () => {

    return < DefaultList />
};

