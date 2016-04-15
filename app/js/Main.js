import React from 'react'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Main extends React.Component {

    render() {
        
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="row">
                    <AppBar title="Next Build 2016"
                            showMenuIconButton={false}
                    />
                </div>
            </MuiThemeProvider>

        );
    }
}

export default Main
