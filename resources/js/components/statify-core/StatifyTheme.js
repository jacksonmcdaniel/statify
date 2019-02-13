import React from 'react';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    secondary: {light:green[500], main:green[500], dark:green[500]},
    primary: {light:grey[300], main:green[500], dark:grey[900]},
    type: 'dark',
  },

  status: {
    // My business variables
    danger: green[500],
  },

    typography: {
    useNextVariants: true,
  },
});

export default theme;