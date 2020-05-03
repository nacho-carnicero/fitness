import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Text } from '../text'

import { PopList as PopListType } from "../../../types";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export function OptionsList({ options, optionsCall, closure }: PopListType) {
    const classes = useStyles();

    const theOptions = options || ["Edit", "Remove", "Duplicate"]
    const theCallBacks = optionsCall || theOptions.map((opt) => () => { console.log(opt) })

    const closeAndCall = (indx) => {
        closure()
        theCallBacks[indx]()
    }

    const ListObject = theOptions.map((option, indx) => {
        return (
            <ListItem
                button
                onClick={() => closeAndCall(indx)}
                key={indx}
            >
                <Text>{option}</Text>
            </ListItem>
        )
    })

    return (
        <div className={classes.root}>
            <List>{ListObject}</List>
        </div>
    );
}