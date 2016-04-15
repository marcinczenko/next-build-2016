import React from 'react'

import Message from './Message'

class MessageList extends React.Component {

    render() {

        const messages = this.props.messages;

        return (
            <div>
                { Object.keys(messages).map((key) => {
                    const message = messages[key];
                    return <Message title={message.title} key={key}/>
                })}
            </div>
        )
    }
}

export default MessageList
