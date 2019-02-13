import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyTable from './statify-core/StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class SignInRoot extends React.Component {

	constructor(props) {
     super(props);
     this.state={ trends: true };
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>

            <PersistentDrawerLeft trends={this.state.trends} />
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('SignInRoot')) {
    ReactDOM.render(<SignInRoot />, document.getElementById('SignInRoot'));
}
