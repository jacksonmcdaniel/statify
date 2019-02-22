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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: "center",
  },
});

function DeleteAccount(props) {

  const { classes } = props;
  return (
    <List className={classes.root}>
    
      <ListItem>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <ListItemText primary="Delete Account?" secondary="Once you delete your account, we will no longer have access to your Spotify lsitening habits." />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
      <Grid container spacing={0} direction="column" alignItems="center" 
      justify="center" >
        <Button size="medium" color="primary" className={classes.margin}>
          Delete Account
        </Button>
        </Grid>
      </ListItem>
     

    </List>
  );
}

DeleteAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteAccount);