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
import AccountPaper from './statify-core/AccountPaper';
import DeleteAccount from './statify-core/DeleteAccount';

export default class AccountRoot extends React.Component {

	constructor(props) {
		super(props);
		
	}

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Grid container spacing={0} alignItems="center" 
			justify="space-evenly" style={{ minHeight: '100vh' }}>
            <AccountPaper/>
            <DeleteAccount/>
            </Grid>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('AccountRoot')) {
    ReactDOM.render(<AccountRoot />, document.getElementById('AccountRoot'));
}