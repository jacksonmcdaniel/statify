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

export default class TrendRoot extends React.Component {

    render() {
      const { songs } = this.props;

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
    var songs = element.getAttribute("songs");
    ReactDOM.render(<TrendRoot songs={JSON.parse(songs)}/>, document.getElementById('TrendRoot'));
}
