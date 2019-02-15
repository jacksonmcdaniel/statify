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

export default class HomeRoot extends React.Component {

	constructor(props) {
		super(props);
		
	}

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Grid container spacing={0} direction="column" alignItems="center" 
			justify="center" style={{ minHeight: '100vh' }}>
             	<Typography variant="h3" color="inherit" align="center" p={2000}>
              	Welcome to your Statify home!
            	</Typography>
            </Grid>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('HomeRoot')) {
    ReactDOM.render(<HomeRoot />, document.getElementById('HomeRoot'));
}