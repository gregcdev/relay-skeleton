import { Route } from 'react-router';
import React, { Component } from 'react';
import { UserQuery } from './queries';
import App from './containers/App'

export default (
  <Route path='/' component={App} queries={UserQuery} >

  </Route>
)
