import React from 'react'
import Card from 'material-ui/Card'
import CardHeader from 'material-ui/Card/CardHeader'


class Message extends React.Component {

    render() {

        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    subtitle={`from ${this.props.user.displayName}`}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
            </Card>
        )
    }
}

export default Message
