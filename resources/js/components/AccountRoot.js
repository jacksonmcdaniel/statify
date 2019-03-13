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
        const { email, name, user_image } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
            <Paper style={theme.paperContainer4}>
            <Grid container spacing={0} alignItems="center" 
			justify="space-evenly" style={{ minHeight: '100vh' }}>
            <AccountPaper email={email} name={name} user_image={user_image}/>
            <DeleteAccount user_image={user_image}/>
            </Grid>
            </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('AccountRoot')) {
    var element = document.getElementById('AccountRoot');
    var email = element.getAttribute("email");
    var name = element.getAttribute("name");
    var user_image = element.getAttribute("user_image");
    ReactDOM.render(<AccountRoot email={email} name={name} user_image={user_image}/>, document.getElementById('AccountRoot'));
}