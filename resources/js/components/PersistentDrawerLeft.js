import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchAppBar from './SearchAppBar.js';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Link, BrowserRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar.js';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class PersistentDrawerLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, trends: this.props.trends };

    this.handleDrawerOpen = () => {
      this.setState({ open: true });
    };

    this.handleDrawerClose = () => {
      this.setState({ open: false });
    };

     this.handleTrendsPage = () => {
      this.setState({ trends: true });
    };

    this.handleTrendsPageOff = () =>  {
      this.setState({ trends: false });
    };

    
  }

  render() {
    const { classes, theme } = this.props;
    const { open, handleDrawerClose, handleDrawerOpen} = this.state;
    const { trends, handleTrendsPage, handleTrendsPageOff }  = this.state;

    let button;
    if (trends) {
      button = <NavBar />;
    }else{
      button = <null />;
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Statify
            </Typography>
            <div className={classes.grow} />

            <SearchAppBar/>
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-haspopup="true"
                color="inherit"
                href="/account"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
          {button}

        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
        <BrowserRouter>

          <List>
              <ListItem button key={"home"} component="a" onClick={this.handleTrendsPageOff} href="/home" >
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <ListItem button key={"trend"} component="a" onClick={this.handleTrendsPage} href="/trends">
                <ListItemIcon><MusicNoteIcon /></ListItemIcon>
                <ListItemText primary={"Trends"} />
              </ListItem>
              <ListItem button key={"recommendations"} component="a" onClick={this.handleTrendsPage} href="/recommendations">
                <ListItemIcon><LibraryMusicIcon /></ListItemIcon>
                <ListItemText primary={"Recommendations"} />
              </ListItem>
                <ListItem button key={"account"} component="a" onClick={this.handleTrendsPageOff} href="/account">
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary={"Account"} />
              </ListItem>
          </List>
                    </BrowserRouter>

          <Divider />    
        </Drawer>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  trends: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
