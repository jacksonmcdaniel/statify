import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyTable from './statify-core/StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
let id = 0;
function createData(name, count) {
  id += 1;
  return { id, name, count };
}

const songs = [
  createData('Song1', 159),
  createData('Song2', 237),
  createData('Song3', 262),
  createData('Song4', 305),
  createData('Song5', 356),
];
export default class TrendRoot extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
              <StatifyTable songs={songs}/>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('TrendRoot')) {
    var element = document.getElementById('TrendRoot');
    var name = element.getAttribute("name");
    console.log(name);
    ReactDOM.render(<TrendRoot />, document.getElementById('TrendRoot'));
}
