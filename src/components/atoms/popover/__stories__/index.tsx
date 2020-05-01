import React from "react";
import { PopList, SimplePopover } from "../";

export default {
    title: "PopList",
    component: PopList
};

export const DefaultPop = () => {

    const but = <button />
    return (< PopList
        location={
            {
                but: {
                    vertical: 'center',
                    horizontal: 'right',
                },
                pop: {
                    vertical: 'center',
                    horizontal: 'right',
                }
            }}
        options={["Edit", "Remove", "Duplicate"]} />)
};

export const ExamplePop = () => {

    return < SimplePopover />
};

