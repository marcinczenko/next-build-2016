import React from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import MessageList from './MessageList'

import Rebase from 're-base'

class Main extends React.Component {

    rebase = Rebase.createClass('https://next-build-2016-test.firebaseio.com/');

    constructor() {
        super();

        this.state = {
            messages: {}
        }
    }
    
    componentWillMount() {
        this.rebase.syncState('messages', {
            context: this,
            state: 'messages'
        })
    }

    render() {
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="row">
                    <AppBar title="Next Build 2016"
                            showMenuIconButton={false}
                    />
                    <MessageList messages={this.state.messages} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main
