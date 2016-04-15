import React from 'react'

import Message from './Message'

class MessageList extends React.Component {

    style = {
        margin: 12
    };
    
    render() {

        const user = this.props.user;
        const messages = this.props.messages;

        return (
            <div style={this.style}>
                { Object.keys(messages).reverse().map(function(key) {
                    const message = messages[key];
                    return <Message user={user} message={message} key={key} messagePath={key} />;
                })}
            </div>
        )
    }
}

export default MessageList
