import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { unstable_Box as Box } from '@material-ui/core/Box';
import statify_logo from '../../../../public/Assets/images/statify_logo.png';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 15,
    overflowX: 'visible',
    flexGrow: 1,
  },
  table: {
    minWidth: 750,
    maxWidth: 750,
    borderStyle: 'solid',
  },
  column:{
    maxWidth: 35,
  },
  column2:{
    maxWidth: 100,
  }
});

class StatifyTable extends React.Component {

  render () {
  const { classes, songs } = this.props;

  return (
   <Grid container justify="center" spacing={16}>
    <Grid item>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" padding="checkbox" className={classes.column}>Rank</TableCell>
            <TableCell align="center" padding="checkbox" className={classes.column}></TableCell>
            <TableCell className={classes.column2} >Song Name</TableCell>
            <TableCell align="left">Artist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map(song => (
            <TableRow key={song.song_id}>
            <TableCell component="th" scope="row" align="center" padding="checkbox" className={classes.column}>
                {song.song_ordinal+1}
              </TableCell>
              <TableCell component="th" scope="row" align="center" padding="checkbox" className={classes.column}>
                <Avatar>
                  <img src={song.image}  width={40} height={40} mode='fit' className={classes.column2}/>
                </Avatar>
                </TableCell>
              <TableCell component="th" scope="row">
                {song.song_name.length > 40 ? song.song_name.substring(0,40) + "..." : song.song_name}
              </TableCell>
              <TableCell >{song.artist}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Grid>
    </Grid>
  );
}
}

StatifyTable.propTypes = {
  classes: PropTypes.object.isRequired,
  songs: PropTypes.array.isRequired,
};

export default withStyles(styles)(StatifyTable);
