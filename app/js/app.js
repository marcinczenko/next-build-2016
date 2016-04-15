import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { Router, Route, browserHistory } from 'react-router';

import Main from './Main';
import NotFound from './NotFound';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
        <Route path="*" component={NotFound}/>
    </Router>
);


ReactDOM.render(routes, document.querySelector('#main'));
