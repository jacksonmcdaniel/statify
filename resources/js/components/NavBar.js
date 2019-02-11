import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountIcon from '@material-ui/icons/AccountCircle';
import PersonPinIcon from '@material-ui/icons/PersonPin';
//import statify_logo from '/var/www/assets/statify_logo.png';
//import statify_logo from '../../../public/images/statify_logo.png';
import SearchAppBar from './SearchAppBar.js';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter} from 'react-router-dom';
import theme from './statify-core/StatifyTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Root from './statify-core/Root.js';
import AppBar from '@material-ui/core/AppBar';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
    top: "64px",
  },
  styleForLogo: {
    width: "100%",
    height: "100%"
  },
};

class NavBar extends React.Component {

  render() {
    const { classes } = this.props;
    const { value } = this.props;

    return (
        <MuiThemeProvider theme={theme}>
         <BrowserRouter> 
            <Paper square>
               <Tabs value={value} variant="fullWidth" indicatorColor="secondary" textColor="primary" >
                  <Tab href="/home" >
                  </Tab>
                  <Tab label="Trends" href='/trends'>
                  </Tab>
                  <Tab label="Recommendations" href='/recommendations'>
                  </Tab>
                  <Tab icon={<AccountIcon/>} width="80px" height="80px" href='/account'>
                  </Tab>
               </Tabs>
            </Paper>
         </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

if (document.getElementById('NavBar')) {
    ReactDOM.render(<NavBar value={4} classes={<Root/>} />, document.getElementById('NavBar'));
}
