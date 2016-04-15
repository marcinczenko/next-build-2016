import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import Rebase from 're-base'

class Login extends React.Component {

    rebase = Rebase.createClass('https://next-build-2016-test.firebaseio.com/');
    
    authHandler = (error, authData) => {
        if (error) {
            console.log(error);
            return;
        }

        // console.log(authData);

        this.props.setUser({
            uid: authData.uid,
            displayName: authData.github.displayName
        })
    };

    loginHandler = () => {
        this.rebase.authWithOAuthPopup('github', this.authHandler);
    };

    render() {
        return (
            <div>
                <p>You must log in in order to see messages....</p>
                <RaisedButton secondary={true} label="Log in..." onTouchTap={this.loginHandler} />
            </div>
        )
    }
}

export default Login
