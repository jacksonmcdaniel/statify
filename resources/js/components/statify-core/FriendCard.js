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
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 225,
    minHeight: 300,
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: "center",
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
});

function FriendCard(props) {

  const { classes, name, friend_id, image } = props;

  return (
    <Grid item xs={3}>
      <Grid container spacing={8} justify="space-evenly" align="center">
        <List className={classes.root}>
          <Grid container spacing={0} direction="column" alignItems="center" 
            justify="center" >
            <ListItem >
              <Grid container spacing={0} direction="column" alignItems="center" 
                justify="center" >
                <ListItemText disableTypography={true} 
                primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>{name}</Typography>}/>
              </Grid>
            </ListItem>
            <Divider variant="inset"/>
            <Button size="medium" color="primary" className={classes.margin} href={"/friends/"+friend_id}>
            <Avatar className={classes.bigAvatar}>
          {image != "" ?
            <img src={image}  width={150} height={170} mode='fit'/>
          : <AccountCircle /> }
          </Avatar>
            </Button>
          </Grid>
        </List>
      </Grid>
    </Grid>

  );
}

FriendCard.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  friend_id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default withStyles(styles)(FriendCard);