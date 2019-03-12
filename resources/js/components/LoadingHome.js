import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import SignIn from './SignIn.js';
import NavBar from './NavBar.js';
import PersistentDrawerLeft from './PersistentDrawerLeft.js';
import theme from './statify-core/StatifyTheme';
import StatifyTable from './statify-core/StatifyTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import statify_logo from '../../../public/Assets/images/statify_logo.png';
import Image from '../../../public/Assets/images/music_listening.jpg';
import LinearDeterminate from './statify-core/LinearDeterminate';
import {keyframes} from 'styled-components'
import green from '@material-ui/core/colors/green';

class Circle extends React.Component {
    constructor(props) {
        super(props);
    };

    render (){
        const {size} = this.props;
        var circleStyle = {
          position: 'absolute',
          left: (-size/2) +'px',
          top: '100px',
          padding:10,
          margin:20,
          display:"inline-block",
          backgroundColor: green[500],
          borderRadius: "50%",
          width:size,
          height:size,
        };
        return (
          <div style={circleStyle}>
                <Rectangle size={size} index={-2} key={1} bgColor={'#FFFFFF'}/>
                <Rectangle size={size} index={-1} key={2} bgColor={'#FFFFFF'}/>
                <Rectangle size={size} index={0} key={3} bgColor={'#FFFFFF'}/>
                <Rectangle size={size} index={1} key={4} bgColor={'#FFFFFF'}/>

          </div>
        );
  }
}

class Rectangle extends React.Component {
    constructor(props) {
        super(props);
    };

    render (){

    const {size, index} = this.props;
    var movingBars = null;
    var animationDuration = '1s';
    if (index == -2) {
        movingBars = keyframes`
          0% {
            height: 0px; }
          10% {
            height: ${size/4}px; }
          20% {
            height: ${size/4}px; }
          30% {
            height: ${size/4}px; }
          40% {
            height: ${size/4}px; }
          50% {
            height: ${size/4}px; }
          60% {
            height: 0px; }
          70% {
            height: 0px; }
          80% {
            height: 0px; }
          90% {
            height: 0px; }
          100% {
            height: 0px; }
        `;
    }

    if (index == -1) {
        movingBars = keyframes`
          0% {
            height: 0px; }
          20% {
            height: ${size*3/8}px; }
          30% {
            height: ${size*3/8}px; }
          40% {
            height: ${size*3/8}px; }
          50% {
            height: ${size*3/8}px; }
          60% {
            height: ${size*3/8}px; }
          70% {
            height: 0px; }
          80% {
            height: 0px; }
          90% {
            height: 0px; }
          100% {
            height: 0px; }
        `;
    }
    if (index == 0) {
        movingBars = keyframes`
          0% {
            height: 0px; }
          10% {
            height: 0px; }
          20% {
            height: 0px; }
          30% {
            height: ${size/2}px; }
          40% {
            height: ${size/2}px; }
          50% {
            height: ${size/2}px; }
          60% {
            height: ${size/2}px; }
          70% {
            height: ${size/2}px; }
          80% {
            height: 0px; }
          90% {
            height: 0px; }
          100% {
            height: 0px; }
        `;
    }
    if (index == 1) {
        movingBars = keyframes`
          0% {
            height: 0px; }
          10% {
            height: 0px; }
          20% {
            height: 0px; }
          30% {
            height: 0px; }
          40% {
            height: ${size/4}px; }
          50% {
            height: ${size/4}px; }
          60% {
            height: ${size/4}px; }
          70% {
            height: ${size/4}px; }
          80% {
            height: ${size/4}px; }
          90% {
            height: 0px; }
          100% {
            height: 0px; }
        `;
    }
    var rectangleStyle = {
      position: 'absolute',
      left: (size/2+(3/2*index)*size/10 + size/10/4) +'px',
      bottom: (size/4) + 'px',
      padding: '3px',
      margin:0,
      display:"inline-block",
      backgroundColor: this.props.bgColor,
      width:(size/10),
      height:(size/4),
      'animationName' : movingBars,
      'animationDuration': animationDuration,
      'animationIterationCount': 'infinite',
    };
    return (
      <div style={rectangleStyle}>
      </div>
    );
    }
}

export default class LoadingHome extends React.Component {

	constructor(props) {
		super(props);
        
    };


    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <Paper style={theme.paperContainer1}>
            <Grid container spacing={0} direction="column" alignItems="center" style={{ minHeight: '100vh' }}>

                <Typography variant="h3" color="default" p={2000} style={{textShadow: '0 0 3px #000000'}}>
                <div style={{ position: 'fixed'}}>
                                <Circle size={400} key={5} bgColor={'#66AC5B'}/>
                </div>

                </Typography>
                                <Typography variant="h4" color="default" p={200} style={{position: 'relative',  top: '520px',
textShadow: '0 0 3px #000000'}}>
               Loading Spotify trends
                </Typography>

            </Grid>
            </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('LoadingHome')) {
    ReactDOM.render(<LoadingHome />, document.getElementById('LoadingHome'));
}