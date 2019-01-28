import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountIcon from '@material-ui/icons/AccountCircle';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import statify_logo from '../../../Assets/statify_logo.png';
import SearchAppBar from './SearchAppBar.js';
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter} from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  styleForLogo: {
    width: "100%",
    height: "100%"
  },
};

class IconTabs extends React.Component {

  render() {

    return (
      <div>
      <BrowserRouter> 
      <Paper square >
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon=<img src={statify_logo} width="80px" height="80px" />  href="/home" >
          <a href='/home'></a>
          </Tab>
          <Tab label="Trends" href='/trends'>
          <a href='/trends'></a>
          </Tab>
          <Tab label="Recommendations" href='/recommendations'>
          <a href='/recommendations'></a>
          </Tab>
          <SearchAppBar/>
          <Tab icon={<AccountIcon/>} width="80px" height="80px" href='/account'>
          <a href='/account'></a>
          </Tab>
        </Tabs>
      </Paper>
      </BrowserRouter>
      </div>
    );
  }
}

/*IconTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

//export default withStyles(styles)(IconTabs);
if (document.getElementById('IconTabs')) {
    ReactDOM.render(<IconTabs />, document.getElementById('IconTabs'));
}
