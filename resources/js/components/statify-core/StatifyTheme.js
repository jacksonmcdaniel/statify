import React from 'react';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {

    type: 'dark',
    primary: green,
  },

  status: {
    // My business variables
    danger: green[500],
  },
});

export default theme;