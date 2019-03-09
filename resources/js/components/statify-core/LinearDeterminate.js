import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class LinearDeterminate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 0,
    };
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress variant="determinate" value={50} />
        <br />
        <LinearProgress color="secondary" variant="determinate" value={75} />
      </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearDeterminate);