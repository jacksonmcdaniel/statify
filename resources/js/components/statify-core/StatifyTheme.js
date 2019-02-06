import React from 'react';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {

    type: 'dark',
    primary: green,
  },
});

export default theme;