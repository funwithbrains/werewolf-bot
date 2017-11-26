import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { AccountUI } from './components/index';
import { Players, Setup } from './views/index';

const Home = () => <div>
  Home
</div>

export default class App extends Component {
  renderPlayers() {
    return this.props.players.map(player => {
      return <li key={player._id}>
        {player.name}
      </li>;
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <AccountUI />

          <header>
            <Link to="/"><h1>werewolf-bot</h1></Link>
          </header>

          <Link to="/setup">Setup</Link>
          <Link to="/players">Players</Link>

          <Route exact path="/" component={Home}/>
          <Route exact path="/setup" component={Setup} />
          <Route exact path="/players" component={Players} />
        </div>
      </Router>
    );
  }
}
