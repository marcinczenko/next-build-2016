import React from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import MessageList from './MessageList'
import Login from './Login'
import Logout from './Logout'

import Rebase from 're-base'

class Main extends React.Component {

    rebase = Rebase.createClass('https://next-build-2016-t2.firebaseio.com/');
    ref = null;

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

    authCallback = (authData) => {
        if (authData) {
            console.log('authenticated');
            if (!this.ref){
                this.ref = this.rebase.bindToState('messages', {
                    context: this,
                    state: 'messages'
                });
            }
        } else {
            if (this.ref) {
                this.rebase.removeBinding(this.ref);
                this.ref = null;
            }
            console.log('non-authenticated');

        }
    };

    componentDidMount() {
        this.rebase.onAuth(this.authCallback);
    }

    componentWillUnmount() {
        this.rebase.offAuth(this.authCallback);
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
                    <MessageList messages={this.state.messages} user={this.state.user} />
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
