import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop } from "@fortawesome/free-solid-svg-icons";

import { TrainingControls as TrainingControlsType } from "../../../types";

export const TrainingControls = ({ state, }: TrainingControlsType) => {

    // TYPESCRIPT FORMAT NEEDED ?
    const IconButton = ({ icon, color }) => (
        <div
            style={{
                padding: 5
            }}
            onClick={() => { console.log('click') }}>
            <FontAwesomeIcon icon={icon} color={color} />
        </div>
    );

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
            }}
        >
            {(state === 'edit' || state === 'paused') && <IconButton icon={faPlay} color="green" />}
            {state === 'executing' && <IconButton icon={faPause} color="gray" />}
            {(state === 'executing' || state === 'paused') && <IconButton icon={faStop} color="red" />}

        </div>
    );
};
