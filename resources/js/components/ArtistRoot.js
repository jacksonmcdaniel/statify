import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyArtistTable from './statify-core/StatifyArtistTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


let id = 0;
function createData(name, count) {
  id += 1;
  return { id, name, count };
}

export default class ArtistRoot extends React.Component {

	constructor(props) {
     super(props);
    }

    render() {
        const { songs } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
              <Paper style={theme.paperContainer3}>
               <Grid container direction="column" alignItems="center" 
                  style={{ minHeight: '100vh' }}>
                  <StatifyArtistTable songs={songs}/>
                </Grid>
              </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('ArtistRoot')) {
    var element = document.getElementById('ArtistRoot');
    var name = element.getAttribute("name");
    var songs = element.getAttribute("songs");

    ReactDOM.render(<ArtistRoot songs={JSON.parse(songs)}/>, document.getElementById('ArtistRoot'));
}