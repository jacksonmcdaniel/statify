import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';
import PersonIcon from '@material-ui/icons/PersonOutline';
import WorldIcon from '@material-ui/icons/Language';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  
});

function AccountPaper(props) {
  const { classes, name, email } = props;
  
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar>
          <AccountCircle />
        </Avatar>
        <ListItemText primary="Profile"/>
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <ListItemText primary="Username" secondary={name} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>
          <EmailIcon />
        </Avatar>
        <ListItemText primary="e-mail" secondary={email} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>
          <WorldIcon />
        </Avatar>
        <ListItemText primary="Country" secondary="US" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar>
          <PlaceIcon />
        </Avatar>
        <ListItemText primary="Postal Code" secondary="93407" />
      </ListItem>

    </List>
  );
}

AccountPaper.propTypes = {
  classes: PropTypes.object.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(AccountPaper);