import React from 'react'

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button'
import Dialog from 'material-ui/lib/dialog';

import EditMessage from './EditMessage'

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleClose = () => {
        this.setState({open: false});
    };

    editHandler = () => {
        this.setState({open: true});
    };

    renderEditButton() {

        if (this.props.user && this.props.message && this.props.user.uid === this.props.message.uid) {
            return (
                <FlatButton ref="aaa" label="Edit..." style={{float: 'right', textTransform: null}} onTouchTap={this.editHandler} />
            )
        }
        return null;

    }

    render() {

        const user = this.props.user;

        const message = this.props.message;

        const messagePath = this.props.messagePath;

        return (
            <div>
                <Card>
                    <CardHeader
                        title={message.title}
                        subtitle={`from ${user.displayName}`}
                        avatar={user.avatar}
                        actAsExpander={false}
                        showExpandableButton={false}
                        children={this.renderEditButton()}
                    />
                </Card>
                <Dialog
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <EditMessage initialMessage={message} messagePath={messagePath} closeHandler={this.handleClose} />
                </Dialog>
            </div>
        )
    }
}

export default Message
