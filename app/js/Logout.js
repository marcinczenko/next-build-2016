import React from 'react'
import FlatButton from 'material-ui/lib/flat-button'

import Rebase from 're-base';

class Logout extends React.Component {
    base = Rebase.createClass('https://next-build-2016.firebaseio.com/');

    styles = {
        popover: {
            padding: 5
        },
        menuItem: {
            margin: 12
        }
    };

    logoutHandler = (event) => {
        event.preventDefault();

        this.base.unauth();
        localStorage.removeItem('token');
        localStorage.removeItem('displayName');
        localStorage.removeItem('avatar');

        this.props.setUser({uid: '', displayName: '', avatar: ''});
    };
    
    render() {
        return (
            <div style={this.styles.popover}>
                <FlatButton label="Log out..." onTouchTap={this.logoutHandler} />
            </div>
        )
    }
}

export default Logout
