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
import Carousel from './statify-core/Carousel';
import TopSongCard from './statify-core/TopSongCard';
import MediaCard from './statify-core/MediaCard';


export default class HomeRoot extends React.Component {

	constructor(props) {
		super(props);
        
    };


    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Paper style={theme.paperContainer1}>
                    <Grid container spacing={32} direction="column" alignItems="center" 
                        justify="center" style={{ minHeight: '110vh' }}>  
                        <Grid item>
                        <Typography variant="h1" style={{textShadow: '2px -2px 20px #000000', fontWeight: "450"}} >
                        <img src={statify_logo}  width={100} height={90}/>
                            Statify
                        </Typography>        
                        </Grid>    
                         <Typography variant="h6" style={{textShadow: '2px -2px 20px #000000', fontWeight: "500"}} >
                            Where you can view all of your Spotify Trends
                         </Typography>
                         <Grid item>
                            <Grid container direction="row" spacing={32}>
                                <Grid item>
                                <MediaCard/>
                                </Grid>
                                <Grid item>
                                <MediaCard/>
                                </Grid>
                                <Grid item>
                                <MediaCard/>
                                </Grid>
                            </Grid>
                        </Grid>
                            
                       
                    </Grid>  
                </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('HomeRoot')) {
    ReactDOM.render(<HomeRoot />, document.getElementById('HomeRoot'));
}