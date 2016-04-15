import React from 'react'

import MainAppBar from './MainAppBar'
import WhatNext from './WhatNext'

import Firebase from 'firebase';

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class Main extends React.Component {

    firebaseUsers = new Firebase('https://next-build-2016.firebaseio.com/users');

    constructor() {
        super();

        const user = {
            uid: '',
            displayName: '',
            avatar: ''
        };

        this.state = {
            user: user
        };
    }

    updateState(user) {
        this.setState({
            user: user
        })
    }

    static hasFullLoginData(user) {
        return user.uid && user.displayName && user.avatar && user.uid.length > 0 && user.displayName.length > 0 && user.avatar.length > 0;
    }

    firebaseUpdateSuccessHandler(snapshot, user) {
        if (snapshot.val()) {
            this.updateState({
                uid: user.uid,
                displayName: snapshot.child('displayName').val(),
                avatar: snapshot.child('avatar').val()
            });
        } else {
            this.firebaseUsers.child(user.uid).set({
                displayName: user.displayName || user.uid,
                avatar: user.avatar
            });
            this.updateState({
                uid: user.uid,
                displayName: user.displayName || user.uid,
                avatar: user.avatar
            })
        }
    };


    updateFirebaseWith(user) {
        this.firebaseUsers.child(user.uid).set({
            displayName: user.displayName,
            avatar: user.avatar
        });
    }

    updateUsersOnFirebase(user) {
        this.firebaseUsers.child(user.uid).once('value', (snapshot) => {
            this.firebaseUpdateSuccessHandler(snapshot, user)}, (error) => {
            console.log(error);
        });
    }

    setUser(user) {
        if (!user.uid) {
            this.updateState(user);
            return;
        }

        if (Main.hasFullLoginData(user)) {
            this.updateFirebaseWith(user);
            this.updateState(user);
        } else {
            this.updateUsersOnFirebase(user)
        }
    }

    render() {
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="row">
                    <MainAppBar user={this.state.user} setUser={(user) => this.setUser(user)} />
                    <WhatNext user={this.state.user} setUser={(user) => this.setUser(user)} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main
