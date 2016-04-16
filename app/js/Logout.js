import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

import Rebase from 're-base'

class Logout extends React.Component {

    rebase = Rebase.createClass('https://next-build-2016-t2.firebaseio.com/');

    logoutHandler = () => {

        this.rebase.unauth();
        this.props.setUser({
            uid: '',
            displayName: ''
        })
    };

    render() {
        return (
            <RaisedButton primary={true} label="Log out..." onTouchTap={this.logoutHandler} />
        )
    }
}

export default Logout
