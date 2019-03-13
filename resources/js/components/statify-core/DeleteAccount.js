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
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: "center",
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class DeleteAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false};

    this.handleOpenModal = () => {
    this.setState({ openModal: true });
    };

    this.handleCloseModal = () => {
      this.setState({ openModal: false });
    };
  }

  render() {
    const { classes, accountImage, openModal, handleCloseModal, handleOpenModal } = this.props;
    return (
      <List className={classes.root}>
      
        <ListItem>
          <Avatar>
            <img src='https://profile-images.scdn.co/images/userprofile/default/2f294d73d7342bdb3e2a120c2093bb8443b98779'  width={40} height={40} mode='fit'/>
          </Avatar>
          <ListItemText primary="Delete Account?" secondary="Once you delete your account, we will no longer have access to your Spotify listening habits." />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
        <Grid container spacing={0} direction="column" alignItems="center" 
        justify="center" >
          <Button size="medium" color="primary" className={classes.margin} onClick={this.handleOpenModal}>
            Delete Account
          </Button>
          </Grid>
        </ListItem>
       
      <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={this.state.openModal}
      onClose={this.handleCloseModal}
      >
      <Grid container spacing={0} alignItems="center" justify="space-evenly" style={{ minHeight: '100vh' }}>
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Are you sure you would like to delete your account?
          </Typography>
          <Grid container spacing={0} direction="row" alignItems="center" 
          justify="center" >
            <Button size="medium" color="primary" className={classes.margin}
            component="a" href="/account/delete">
                Yes
            </Button>
            <Button size="medium" color="primary" className={classes.margin} 
            onClick={this.handleCloseModal}>
                No
            </Button>
          </Grid>
        </div>
        </Grid>
      </Modal>
      </List>
    );
  }
}

DeleteAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  accountImage: PropTypes.string.isRequired,
};

export default withStyles(styles)(DeleteAccount);