import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import theme from './StatifyTheme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PersistentDrawerLeft from './../PersistentDrawerLeft.js';

export default class Root extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <PersistentDrawerLeft/>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('Root')) {
    ReactDOM.render(<Root />, document.getElementById('Root'));
}
