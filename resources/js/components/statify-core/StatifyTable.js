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

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 15,
    overflowX: 'auto',
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
            <TableCell>SongName</TableCell>
            <TableCell align="left">Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {songs.map(song => (
            <TableRow key={song.id}>
              <TableCell component="th" scope="row">
                {song.name}
              </TableCell>
              <TableCell align="left">{song.count}</TableCell>
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
