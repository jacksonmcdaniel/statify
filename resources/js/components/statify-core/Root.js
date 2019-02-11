import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import theme from './StatifyTheme';
import { withTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles';

class Root extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            </MuiThemeProvider>
        );
    }
}

export default withTheme(theme)(Root);


if (document.getElementById('Root')) {
    ReactDOM.render(<Root />, document.getElementById('Root'));
}
