import React from 'react';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';
import Background from '../../../../public/Assets/images/earphones.jpg';
import BackgroundHeadPhones from '../../../../public/Assets/images/headphones.jpg';
import BackgroundPhone from '../../../../public/Assets/images/phone_trends.jpg';

const theme = createMuiTheme({
  palette: {
    secondary: {light:green[500], main:"#00CF6C", dark:"#00CF6C"},
    primary: {light:grey[300], main:"#00CF6C", dark:grey[900]},
    error: {main: green[50]},
    type: 'dark',
  },

  status: {
    // My business variables
    danger: green[500],
  },

    typography: {
    useNextVariants: true,
  },
  paperButton: {
    textTransform: true,
  },
  paper: {    
      padding: '40px',   
      },
  paperContainer1: {
      backgroundImage: 'url('+ Background+')',
      backgroundSize: 'cover',
      overflow: 'hidden',
      },
  paperContainer2: {
      backgroundImage: 'url('+ BackgroundHeadPhones+')',
      backgroundSize: 'cover',
      padding: '100px'
      },
    paperContainer3: {
      backgroundImage: 'url('+ BackgroundPhone+')',
      backgroundSize: 'cover',
      overflow: 'hidden',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      },
    paperContainer4: {
      backgroundImage: 'url('+ BackgroundHeadPhones+')',
      backgroundSize: 'cover',
      overflow:'hidden'
      },
});

export default theme;