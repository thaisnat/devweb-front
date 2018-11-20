import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
});

function ListDividers(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Post 1" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Post 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Post 3" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Post 4" />
        </ListItem>
      </List>
    </div>
  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);
