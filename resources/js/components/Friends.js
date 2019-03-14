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
import FriendCard from './statify-core/FriendCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class Friends extends React.Component {

	constructor(props) {
		super(props);
        
    };


    render() {
        const { friends } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Paper style={theme.paperContainer2}>
                    <Grid container spacing={24} style={{ minHeight: '100vh'}}>
                        {friends.map(friend => (
                            <FriendCard key={friend.user_id} name={friend.name} friend_id={friend.user_id}/>
                          ))}
                        <FriendCard name="friend name"/>
                        
                    </Grid>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

if (document.getElementById('Friends')) {
    var element = document.getElementById('Friends');
    var friends = element.getAttribute("friends");
    //console.log(friends);
    ReactDOM.render(<Friends friends={JSON.parse(friends)}/>, document.getElementById('Friends'));
}
