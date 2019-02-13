import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyTable from './statify-core/StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';

export default class TrendRoot extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
            
              <StatifyTable/>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('TrendRoot')) {
    ReactDOM.render(<TrendRoot />, document.getElementById('TrendRoot'));
}
