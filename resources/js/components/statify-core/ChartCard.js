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

function ChartCard(props) {

  const { classes, name } = props;
  return (
    <Grid item xs={3}>
    <Paper className={classes.grid}>
      <Grid container spacing={0} justify="space-evenly" align="center">
            
            <div className={classes.root}>
            <Typography variant="body1">
              Song Stats
            </Typography>
            <ul/>
            <Typography>
              Danceability
            </Typography>
            <LinearProgress variant="determinate" value={22} />
            <br />
            <Typography>
              Accousticness
            </Typography>
            <LinearProgress variant="determinate" value={50} />
            <br />
            <Typography>
              Popularity
            </Typography>
            <LinearProgress variant="determinate" value={86} />
            <br />
            <Typography>
              Energy
            </Typography>
            <LinearProgress variant="determinate" value={9} />
            <br />
            <Typography>
              Liveness
            </Typography>
            <LinearProgress variant="determinate" value={43} />
            <br />
            </div>
            
                        
          </Grid>

      </Paper>
    </Grid>

  );
}

ChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartCard);