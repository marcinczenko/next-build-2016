import React from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import MessageList from './MessageList'
import Login from './Login'
import Logout from './Logout'

import Rebase from 're-base'

class Main extends React.Component {

    rebase = Rebase.createClass('https://next-build-2016-test.firebaseio.com/');

    constructor() {
        super();

        const user = {
            uid: ''
        };

        this.state = {
            messages: {},
            user: user
        }
    }
    
    componentWillMount() {
        this.rebase.syncState('messages', {
            context: this,
            state: 'messages'
        })
    }

    setUser = (user) => {
        this.setState({
            user: user
        })
    };

    renderBody() {
        if (!this.state.user.uid) {
            return <Login setUser={this.setUser} />
        } else {
            return (
                <div>
                    <MessageList messages={this.state.messages} />
                    <Logout setUser={this.setUser} />
                </div>
            )
        }
    }

    render() {
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="row">
                    <AppBar title="Next Build 2016"
                            showMenuIconButton={false}
                    />
                    { this.renderBody() }

                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main
