import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { AccountUI } from './components/index';
import {
  Games,
  GameStatus,
  Home,
  Players,
  Roles,
  Setups
} from './views/index';

export default () => <Router>
  <div className="container">
    <AccountUI />

    <h1><Link to="/">werewolf-bot</Link></h1>

    <ul className="navigation">
      <li><Link to="/games">Games</Link></li>
      <li><Link to="/players">Players</Link></li>
      <li><Link to="/roles">Roles</Link></li>
      <li><Link to="/setups">Setups</Link></li>
    </ul>

    <Route exact path="/" component={Home}/>
    <Route path="/games" component={Games} />
    <Route path="/gameStatus/:id" component={GameStatus} />
    <Route path="/players" component={Players} />
    <Route path="/roles" component={Roles} />
    <Route path="/setups" component={Setups} />
  </div>
</Router>;
