import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyTable from './statify-core/StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import statify_logo from '../../../public/Assets/images/statify_logo.png';
import Image from '../../../public/Assets/images/music_listening.jpg';
import LinearDeterminate from './statify-core/LinearDeterminate';


export default class LoadingHome extends React.Component {

	constructor(props) {
		super(props);
        
    };


    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Paper style={theme.paperContainer1}>
            <Grid container spacing={0} direction="column" alignItems="center" 
			justify="center" style={{ minHeight: '100vh' }}>
             	<Typography variant="h3" color="default" align="center" p={2000} style={{textShadow: '0 0 3px #000000'}}>
              	Welcome to Statify!
            	</Typography>
                <img src={statify_logo}  width={300} height={275} mode='fit'/>
                <Typography variant="h4" color="default" align="center" p={2000} style={{textShadow: '0 0 3px #000000'}}>
               Please wait while we gather your Spotify listening trends.
                </Typography>
                
            </Grid>
            </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('LoadingHome')) {
    ReactDOM.render(<LoadingHome />, document.getElementById('LoadingHome'));
}