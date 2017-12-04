import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { AccountUI } from './components/index';
import {
  Games,
  Home,
  Players,
  Roles,
  Setup
} from './views/index';

export default () => <Router>
  <div className="container">
    <AccountUI />

    <h1><Link to="/">werewolf-bot</Link></h1>

    <ul className="navigation">
      <li><Link to="/games">Games</Link></li>
      <li><Link to="/players">Players</Link></li>
      <li><Link to="/roles">Roles</Link></li>
      <li><Link to="/setup">Setup</Link></li>
    </ul>

    <Route exact path="/" component={Home}/>
    <Route path="/games" component={Games} />
    <Route path="/players" component={Players} />
    <Route path="/roles" component={Roles} />
    <Route path="/setup" component={Setup} />
  </div>
</Router>;
