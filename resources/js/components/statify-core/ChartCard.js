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
    borderColor: "#757575",
    minWidth: 350,
    position: 'fixed'
  },
});

let id = 0;
function createAttribute(name, value) {
  id += 1;
  return { id, name, value };
}

function ChartCard(props) {

  const { classes, name, songs } = props;
  var acousticness = 0;
  var danceability = 0;
  var energy = 0;
  var instrumentalness = 0;
  var liveness = 0;
  var speechiness = 0;
  var valence = 0;
  var count = 0;
  songs.map(song => {acousticness += song.acousticness;
                     danceability += song.danceability;
                     energy += song.energy;
                     instrumentalness += song.instrumentalness;
                     liveness += song.liveness;
                     speechiness += song.speechiness;
                     valence += song.valence;
                     count += 1;
                   });

  if (count == 0) {
    // to make stats be zero
    count = 1;
  }

  const attributes = [
    createAttribute('acousticness', acousticness),
    createAttribute('danceability', danceability),
    createAttribute('energy', energy),
    createAttribute('instrumentalness', instrumentalness),
    createAttribute('liveness', liveness),
    createAttribute('speechiness', speechiness),
    createAttribute('valence', valence),
  ];

  console.log(acousticness);
  console.log(danceability);
  console.log(energy);
  console.log(instrumentalness);
  console.log(liveness);
  console.log(speechiness);
  console.log(valence);

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
              <div key={attr.id}>
              <Typography>
                {attr.name}
              </Typography>
              <LinearProgress variant="determinate" value={Math.round(attr.value/count*100)} />
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