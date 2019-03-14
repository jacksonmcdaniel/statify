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
        const { viewModel, user_image, name } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
            <PersistentDrawerLeft trends={this.state.trends} value={viewModel['value']} name={name} user_id={viewModel['user_id']} user_image={user_image}/>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('SignInRoot')) {
    var element = document.getElementById('SignInRoot');
    var user_image = element.getAttribute("user_image");
    var name = element.getAttribute("name");
    ReactDOM.render(<SignInRoot viewModel={signInRootViewModel} user_image={user_image} name={name} />, document.getElementById('SignInRoot'));
}
