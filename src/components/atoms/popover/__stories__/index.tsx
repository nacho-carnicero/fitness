import React from "react";
import { PopList } from "../";

export default {
    title: "PopList",
    component: PopList
};

export const DefaultPop = () => {

    return (< PopList
        location={
            {
                but: {
                    vertical: 'center',
                    horizontal: 'center',
                },
                pop: {
                    vertical: 'top',
                    horizontal: 'right',
                }
            }}
        options={["Edit", "Remove", "Duplicate"]} />)
};
