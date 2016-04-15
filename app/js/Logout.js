import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Logout extends React.Component {
    
    logoutHandler = () => {
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
