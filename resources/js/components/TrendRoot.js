import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyTable from './statify-core/StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ChartCard from './statify-core/ChartCard.js';


let id = 0;
function createData(name, count) {
  id += 1;
  return { id, name, count };
}

export default class TrendRoot extends React.Component {

	constructor(props) {
     super(props);
    }

    render() {
        const { songs } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
              <Paper style={theme.paperContainer3}>
                <Grid container direction="row"
                  style={{ minHeight: '100vh' }} justify="space-evenly">
                  <ChartCard songs={songs} />
                  <Grid item>
                    <Grid container spacing={0} justify="space-evenly" align="center">
                      <StatifyTable songs={songs}/>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('TrendRoot')) {
    var element = document.getElementById('TrendRoot');
    var name = element.getAttribute("name");
    var songs = element.getAttribute("songs");
    //console.log(songs);
    ReactDOM.render(<TrendRoot songs={JSON.parse(songs)}/>, document.getElementById('TrendRoot'));
}
