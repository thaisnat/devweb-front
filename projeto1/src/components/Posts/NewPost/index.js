import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import './styles.css';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 7,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    fontSize: 16,
    padding: '0 30px',
    transition: theme.transitions.create(['box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {

    },
  },

  bootstrapFormLabel: {
    fontSize: 18,
  },
});

const theme = createMuiTheme({
  typography: { useNextVariants: true },
});

function CustomizedInputs(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="New Post"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </MuiThemeProvider>
      <div>
        <Button variant="fab" mini color="secondary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
    </div>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);