import React from 'react'

import TextField from 'material-ui/TextField'

import Firebase from 'firebase';

class EditMessage extends React.Component {

    firebase = new Firebase('https://next-build-2016.firebaseio.com/');

    constructor(props) {
        super(props);

        this.ref = this.firebase.child(`messages/${props.messagePath}/title`);


        this.state = {
            hintText: "This will effectively make your message useless. Say something...",
            value: props.initialMessage.title
        }
    }

    componentDidMount() {
        this.refs.messageText.focus();
    }

    onChange = (event) => {
        this.setState({value: event.target.value});

        this.ref.set(event.target.value);
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.closeHandler();
    };

    render() {
        return (
            <form ref="editMessageForm" onSubmit={this.onSubmit}>
                <TextField ref="messageText"
                           hintText={this.state.hintText}
                           value={this.state.value}
                           fullWidth={true}
                           onChange={this.onChange}
                />
            </form>
        )
    }
}

export default EditMessage
