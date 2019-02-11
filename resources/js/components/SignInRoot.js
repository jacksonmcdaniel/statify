import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class SignInRoot extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>

            <PersistentDrawerLeft/>
            <NavBar value={0}/>
            <SignIn/>

            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('SignInRoot')) {
    ReactDOM.render(<SignInRoot />, document.getElementById('SignInRoot'));
}
