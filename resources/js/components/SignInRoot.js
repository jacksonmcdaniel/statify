import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn.js';
import PropTypes from 'prop-types'

export default class SignInRoot extends React.Component {

    render() {
        return (
            <div className="container">
            <SignIn/>
            hi
            </div>
        );
    }
}

if (document.getElementById('SignInRoot')) {
    ReactDOM.render(<SignInRoot />, document.getElementById('SignInRoot'));
}
