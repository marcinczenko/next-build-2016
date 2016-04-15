import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends React.Component {

    loginHandler = () => {
        this.props.setUser({
            uid: 'userid',
            displayName: 'Gromisław Brzęszczychrząstkiewicz'
        })
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
