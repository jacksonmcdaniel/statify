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
import Button from '@material-ui/core/Button';


let id = 0;
function createData(name, count) {
  id += 1;
  return { id, name, count };
}

export default class RecommendationRoot extends React.Component {

	constructor(props) {
     super(props);
    }

    render() {
        const { songs } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
              <Paper style={theme.paperContainer3}>
              
                <StatifyTable songs={songs} style={{marginTop: "-200px"}}/>
                <Grid container direction="column" alignItems="center" style={{padding: "50px"}}>
                  <Button color="primary" variant="contained" href='/recommendations/playlist'>
                    Create Spotify Playlist
                  </Button>
                </Grid>
                
              </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('RecommendationRoot')) {
    var element = document.getElementById('RecommendationRoot');
    var name = element.getAttribute("name");
    var songs = element.getAttribute("songs");
    //console.log(songs);
    ReactDOM.render(<RecommendationRoot songs={JSON.parse(songs)}/>, document.getElementById('RecommendationRoot'));
}
