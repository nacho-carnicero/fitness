import React from 'react';
import Popover from '@material-ui/core/Popover';
import { OptionsList } from "../list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Popover as PopoverType } from "../../../types";

export function PopList({
    anchorOrigin,
    transformOrigin,
    options,
    optionsCall }: PopoverType) {

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <button
                style={{
                    width: 30,
                    height: 0.75 * 30,
                    borderRadius: 5
                }}
                onClick={(event) => handleClick(event)}
            >
                <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
            >
                < OptionsList
                    options={options}
                    optionsCall={optionsCall}
                    closure={handleClose} />
            </Popover>
        </div >
    );
}
