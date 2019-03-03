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
            <TableCell>Song Name</TableCell>
            <TableCell align="left">Artist</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map(song => (
            <TableRow key={song.sid}>
              <TableCell component="th" scope="row">
                {song.name}
              </TableCell>
              <TableCell align="left">{song.artist}</TableCell>
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
