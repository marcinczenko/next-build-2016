import * as React from 'react'

import Login from './Login'
import NewMessage from './NewMessage'
import MessageList from './MessageList'

import Rebase from 're-base';

class WhatNext extends React.Component {

    base = Rebase.createClass('https://next-build-2016.firebaseio.com/');

    constructor() {
        super();

        this.state = {
            messages: {}
        };
    }

    componentDidMount() {
        this.base.syncState('messages', {
            context : this,
            state : 'messages'
        });
    }

    render() {

        if (!this.props.user.uid) {
            return (
                <Login setUser={this.props.setUser} />
            )
        }

        return (
            <div>
                <NewMessage uid={this.props.user.uid} />
                <MessageList messages={this.state.messages} user={this.props.user} setUser={(user) => this.props.setUser(user)} />
            </div>
        )
    }
}

export default WhatNext
