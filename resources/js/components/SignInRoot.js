import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn.js';
import PropTypes from 'prop-types'
import theme from './statify-core/StatifyTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class SignInRoot extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>

            <div className="container">
            <SignIn/>
            </div>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('SignInRoot')) {
    ReactDOM.render(<SignInRoot />, document.getElementById('SignInRoot'));
}
