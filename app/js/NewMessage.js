import React from 'react'
import TextField from 'material-ui/lib/text-field';

import Firebase from 'firebase';

class NewMessage extends React.Component {

    firebase = new Firebase('https://next-build-2016.firebaseio.com/messages');

    constructor() {
        super();

        this.state = {
            hintText: 'Say something...',
            value: ''
        }
    }

    onChange = (event) => {
      this.setState({value: event.target.value});
    };

    submitNewMessage(event) {
        event.preventDefault();
        const value = this.refs.messageText.getValue();
        this.refs.newMessageForm.reset();
        this.setState({hintText: 'Say something again...', value: ''});

        this.firebase.push({title: value, uid: this.props.uid});
    }
    
    render() {
        return (
            <form ref="newMessageForm" onSubmit={(event) => this.submitNewMessage(event)}>
                <TextField id="newMessage" ref="messageText"
                           hintText={this.state.hintText}
                           value={this.state.value}
                           fullWidth={true}
                           onChange={this.onChange}
                />
            </form>
        )
    }
}

export default NewMessage
