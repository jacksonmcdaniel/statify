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
  constructor(props) {
    super(props);
    
    this.state = {
      value: 0,
      page: "trend",
    };

    this.handleChange = (event, value, page) => {
      this.setState({ value, page });
    };
  }
  render() {
    const { classes, value, page } = this.props;
    const { handleClick } = this.state;

    return (
        <MuiThemeProvider theme={theme}>
         <BrowserRouter> 
            <Paper square>
            {page=="trend" ?
               <Tabs value={value} onChange={this.handleChange} variant="fullWidth" indicatorColor="secondary" textColor="primary" >
                  <Tab label="All Time" href="/trends/long_term">
                  </Tab>
                  <Tab label="6 Months" href="/trends/medium_term">
                  </Tab>
                  <Tab label="This Month" href="/trends/short_term">
                  </Tab>
               </Tabs>
               :
               <Tabs value={value} onChange={this.handleChange} variant="fullWidth" indicatorColor="secondary" textColor="primary" >
                  <Tab label="All Time" href="/artists/long_term">
                  </Tab>
                  <Tab label="6 Months" href="/artists/medium_term">
                  </Tab>
                  <Tab label="This Month" href="/artists/short_term">
                  </Tab>
               </Tabs>
             }
            </Paper>
         </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
};

export default withStyles(styles)(NavBar);
