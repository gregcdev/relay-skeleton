import { RelayRouter } from 'react-router-relay';
import { Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes';
import Relay from 'react-relay';

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://graph.developmount.com', {
    credentials: 'include',
  })
);

ReactDOM.render(<RelayRouter history={browserHistory} routes={routes} />, document.getElementById('root'))
