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
import FriendCard from './statify-core/FriendCard';


export default class Friends extends React.Component {

	constructor(props) {
		super(props);
        
    };


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Paper style={theme.paperContainer2}>
                    <Grid container spacing={0} alignItems="center" justify="space-evenly"
        			style={{ minHeight: '100vh' }}>
                     	<FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                        <FriendCard/>
                    </Grid>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('Friends')) {
    ReactDOM.render(<Friends />, document.getElementById('Friends'));
}