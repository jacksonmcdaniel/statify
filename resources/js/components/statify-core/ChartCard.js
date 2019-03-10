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
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    minHeight: 300,
    backgroundColor: theme.palette.background.paper,
    overflowX: 'visible',
    flexGrow: 1,
  },
  margin: {
    margin: "center",
  },
  grid: {
    marginTop: theme.spacing.unit * 25,
    borderStyle: 'solid',
    borderColor: "#757575"
  },
});

let id = 0;
function createAttribute(name, value) {
  id += 1;
  return { id, name, value };
}

function ChartCard(props) {

  const { classes, name, songs } = props;
  var danceability = 0;
  var acousticness = 0;
  var energy = 0;
  var liveness = 0;
  var danceability = 0;

  songs.map(song => {danceability += song.danceability;
                     acousticness += song.acousticness;
                     energy += song.energy;
                     liveness += song.liveness;});

  const attributes = [
    createAttribute('danceability', danceability),
    createAttribute('acousticness', acousticness),
    createAttribute('energy', energy),
    createAttribute('liveness', liveness),
  ];
  
  console.log(danceability);
  console.log(acousticness);
  console.log(energy);
  console.log(liveness);

  return (
    <Grid item xs={3}>
    <Paper className={classes.grid}>
      <Grid container spacing={0} justify="space-evenly" align="center">
            
            <div className={classes.root}>
            <Typography variant="body1">
              Song Stats
            </Typography>
            <ul/>
            {attributes.map(attr => (
              <div>
              <Typography>
                {attr.name}
              </Typography>
              <LinearProgress variant="determinate" value={Math.round(attr.value/25*100)} />
              <br />
              </div>
            ))}
            </div>
            
                        
          </Grid>

      </Paper>
    </Grid>

  );
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
    songs: PropTypes.array.isRequired,
};

export default withStyles(styles)(ChartCard);