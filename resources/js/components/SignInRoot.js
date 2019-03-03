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
        const { name, value, uid } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
            <PersistentDrawerLeft trends={this.state.trends} value={value} name={name} uid={uid}/>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('SignInRoot')) {
    var element = document.getElementById('SignInRoot');
    var value = element.getAttribute("value");
    var name = element.getAttribute("name");
    var uid = element.getAttribute("uid");
    ReactDOM.render(<SignInRoot value={parseInt(value, 10)} name={name} uid={parseInt(uid, 10)}/>, document.getElementById('SignInRoot'));
}
