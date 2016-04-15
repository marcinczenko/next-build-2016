import React from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

import MessageList from './MessageList'

class Main extends React.Component {

    render() {

        const messages = {
            message1: {
                title: 'Message 1'
            },
            message2: {
                title: 'Message 2'
            }
        };
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="row">
                    <AppBar title="Next Build 2016"
                            showMenuIconButton={false}
                    />
                    <MessageList messages={messages} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main
