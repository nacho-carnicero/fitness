import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Text } from '../text'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

type props = {
    options?: Array<String>,
    optionsCall?: Array<Function>, 
    closure?: Function,
};

export function OptionsList(props: props) {
    const classes = useStyles();
    
    const theOptions = props.options || ["Edit", "Remove", "Duplicate"]
    const theCallBacks = props.optionsCall || theOptions.map((opt) => () => {console.log(opt)}) 

    const closeAndCall = (indx) => {
        props.closure()
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

/////////////////////////////////////////////////////////////////////////

////////////////     DEFAULT    EXAMPLE   ///////////////////////////////

/////////////////////////////////////////////////////////////////////////
export function DefaultList() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
        </div>
    );
}
