import React from 'react';
import {
    makeStyles, List,
    Checkbox, Divider, ListItem, ListItemSecondaryAction, ListItemText, ListSubheader
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }
}));

export default function FilterList({ ...props }) {
    const { handleFilterClick, filters, onSelectedColumn } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List
              component="nav"
              subheader={<ListSubheader>Search by</ListSubheader>}
              aria-label="secondary mailbox folders"
            >
                {filters.map((item, key) => (
                    <ListItem
                      key={key}
                      dense
                      button
                      onClick={() => {
                          onSelectedColumn(item.name);
                      }}
                    >
                        <ListItemText id={key} primary={item.label} />
                        <ListItemSecondaryAction>
                            <Checkbox
                              edge="start"
                              checked={item.selected}
                              tabIndex={-1}
                              disableRipple
                              onClick={() => {
                                  onSelectedColumn(item.name);
                              }}
                              inputProps={{ 'aria-labelledby': item.name }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
