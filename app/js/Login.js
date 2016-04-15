import * as React from 'react'

import RaisedButton from 'material-ui/lib/raised-button';

import Rebase from 're-base';
const base = Rebase.createClass('https://next-build-2016.firebaseio.com/');


class Login extends React.Component {

    componentWillMount() {
        const token = localStorage.getItem('token');

        if (token) {
            base.authWithCustomToken(token, (err, authData) => {this.authHandler(err, authData)})
        }
    }

    authHandler(err, authData) {
        if (err) {
            console.log(err);
            return;
        }

        localStorage.setItem('token', authData.token);

        let displayName = null;
        let avatar = null;

        if(authData.github) {
            displayName = authData.github.displayName;
            avatar = authData.github.profileImageURL
        }

        this.props.setUser({
            uid: authData.uid,
            displayName: displayName,
            avatar: avatar
        });

        //
        // if(authData.github) {
        //     localStorage.setItem('displayName', authData.github.displayName);
        //     localStorage.setItem('avatar', authData.github.profileImageURL);
        // }
        //
        // this.props.setUser({
        //     uid: authData.uid,
        //     displayName: localStorage.getItem('displayName') || authData.uid,
        //     avatar: localStorage.getItem('avatar')
        // });
    }

    loginHandler(event) {
        event.preventDefault();

        base.authWithOAuthPopup('github', (err, authData) => {this.authHandler(err, authData)});
    }

    render() {
        const style = {
            margin: 12
        };

        return (
            <div>
                <p>You must be logged in to see what's happening on Next Build 2016! Only for developers, thus logging in only with github!</p>
                <RaisedButton label="Log in..." secondary={true} style={style} onTouchTap={event => this.loginHandler(event)} />
            </div>
        )
    }
}

export default Login
