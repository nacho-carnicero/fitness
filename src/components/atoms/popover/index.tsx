import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { OptionsList } from "../list"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";


import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            padding: theme.spacing(2),
        },
        list: {
            listStyleType: "none",
            paddingRight: 10,
            paddingLeft: 10,
        }
    }),
);

type props = {
    location: Object,
    options: Array<String>
};

export function PopList(props: props) {

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
                anchorOrigin={{
                    vertical: props.location.but.vertical,
                    horizontal: props.location.but.horizontal,
                }}
                transformOrigin={{
                    vertical: props.location.pop.vertical,
                    horizontal: props.location.pop.horizontal,
                }}
            >
                < OptionsList
                    options={props.options} />
            </Popover>
        </div >
    );
}


export function SimplePopover() {
    const classes = useStyles();
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
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
                Open Popover
        </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover>
        </div>
    );
}
