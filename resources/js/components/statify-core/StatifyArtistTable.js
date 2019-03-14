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
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 15,
    overflowX: 'visible',
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
    borderStyle: 'solid',
  },
  column:{
    maxWidth: 5,
  },
  column2:{
    maxWidth: 100,
  }
});

class StatifyArtistTable extends React.Component {

  render () {
  const { classes, artists } = this.props;

  var i = 1;
  return (
   <Grid container justify="center" spacing={16}>
    <Grid item>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center" padding="checkbox" className={classes.column}>Rank</TableCell>
            <TableCell align="center" padding="checkbox" className={classes.column}></TableCell>
            <TableCell align="left">Artist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artists.map(artist => (
            <TableRow key={artist.artist_id}>
            <TableCell component="th" scope="row" align="center" padding="checkbox" className={classes.column}>
              {i++}
            </TableCell>
            <TableCell component="th" scope="row" align="center" padding="checkbox" className={classes.column}>
                <Avatar>
                  <img src={artist.artist_image}  width={40} height={40} mode='fit'/>
                </Avatar>
                </TableCell>
              <TableCell component="th" scope="row">
                {artist.artist_name}
              </TableCell>
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

StatifyArtistTable.propTypes = {
  classes: PropTypes.object.isRequired,
  artists: PropTypes.array.isRequired,
};

export default withStyles(styles)(StatifyArtistTable);
