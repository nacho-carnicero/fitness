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
        >
            <button
                style={{
                    width: 30,
                    height: 0.75 * 30,
                    borderRadius: 5
                }}
                onClick={() => { console.log('click') }}
            >
                <FontAwesomeIcon icon={icon} color={color} />
            </button>
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
