import React from "react";
import { PopList } from "../";

export default {
    title: "PopList",
    component: PopList
};

export const DefaultPop = () => {

    return (< PopList
        anchorOrigin={
            {vertical: 'center',
            horizontal: 'center'}
                    }
        transformOrigin={
            {vertical: 'top',
            horizontal: 'right'}
                    }
        options={["Edit", "Remove", "Duplicate"]} />)
};
