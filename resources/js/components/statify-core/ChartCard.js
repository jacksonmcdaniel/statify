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
import LinearDeterminate from './LinearDeterminate';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    minHeight: 300,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    marginTop: theme.spacing.unit * 15,
    overflowX: 'visible',
    flexGrow: 1,
  },
  margin: {
    margin: "center",
  },
});

function ChartCard(props) {

  const { classes, name } = props;
  return (
    <Grid item xs={3}>
      <Grid container spacing={0} justify="space-evenly" align="center">
        <List className={classes.root}>
          <Grid container spacing={8} direction="column" alignItems="center" 
            justify="center" >
            <Typography variant='body1'>
                Song Stats
              </Typography>
            <Grid container spacing={0} direction="row" alignItems="flex-start" 
            justify="space-evenly" >
              <Grid item>
              <CircularProgress variant="static" value={25} />
              </Grid>
              <Typography align='left'>
                Danceability
              </Typography>
              <Divider variant="inset"/>
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="flex-start" 
            justify="space-evenly" >
             <Grid item>
              <CircularProgress variant="static" value={75} />
              </Grid>
              <Typography>
                Popularity
              </Typography>
              <Divider variant="inset"/>
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="flex-start" 
            justify="space-evenly" >
              <Grid item>
              <CircularProgress variant="static" value={42} />
              </Grid>
              <Typography>
                Energy
              </Typography>
              <Divider variant="inset"/>
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="flex-start" 
            justify="space-evenly" >
              <Grid item>
              <CircularProgress variant="static" value={9} />
              </Grid>
              <Typography>
                Liveness
              </Typography>
              <Divider variant="inset"/>
            </Grid>
            <Grid container spacing={0} direction="row" alignItems="flex-start" 
            justify="space-evenly" >
              <Grid item>
              <CircularProgress variant="static" value={82} />
              </Grid>
              <Typography>
                Acousticness
              </Typography>
              <Divider variant="inset"/>
            </Grid>
            
            
            <Divider variant="inset"/>
            
          </Grid>
        </List>
      </Grid>
    </Grid>

  );
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartCard);