import React from 'react'

// import AppBar from 'material-ui/lib/app-bar'

import AppBar from 'material-ui/AppBar'
// import Popover from 'material-ui/lib/popover/popover';
import Popover from 'material-ui/Popover';
import PopoverAnimationFromTop from 'material-ui/Popover/PopoverAnimationVertical';
// import PopoverAnimationFromTop from 'material-ui/lib/popover/popover-animation-from-top';

import Logout from './Logout'



class MainAppBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    handleTouchTap = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    setUser = (user) => {
        this.handleRequestClose();
        this.props.setUser(user);
    };

    render() {
        return (
            <div>
                <AppBar title="Next Build 2016"
                        onLeftIconButtonTouchTap={this.handleTouchTap}
                        showMenuIconButton={this.props.user && this.props.user.uid !== ''}
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                    animation={PopoverAnimationFromTop}
                >
                    <Logout setUser={this.setUser}/>
                </Popover>
            </div>
        );
    }
}

export default MainAppBar
