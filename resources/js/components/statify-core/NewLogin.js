import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from '../SignIn.js';
import NavBar from '../NavBar.js';
import PersistentDrawerLeft from '../PersistentDrawerLeft.js';
import theme from './StatifyTheme';
import StatifyTable from './StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import statify_logo from '../../../../public/Assets/images/statify_logo.png';
import Image from '../../../../public/Assets/images/music_listening.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


export default class NewLogin extends React.Component {

	constructor(props) {
		super(props);
        
    };


    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Paper>
            
            <AppBar color="primary">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                  Statify
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid container spacing={0} direction="column" alignItems="center" 
			justify="center" style={{ minHeight: '100vh' }}>
                <img src={statify_logo}  width={300} height={275} mode='fit'/>
             	<Typography variant="h5" color="default" align="center" p={2000} style={{textShadow: '0 0 3px #000000'}}>
              	Welcome to Statify!
                </Typography>
                <Typography variant="h5" color="default" align="center" p={2000} style={{textShadow: '0 0 3px #000000'}}>
                This is where you can view all of your Spotify Trends.
                </Typography>
                <Typography variant="h5" color="default" align="center" p={2000} style={{textShadow: '0 0 3px #000000'}}>
                Please login through your Spotify.  You will need a Spotify Account to use Statify
            	</Typography>
                
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </Grid>
            </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('NewLogin')) {
    ReactDOM.render(<NewLogin />, document.getElementById('NewLogin'));
}