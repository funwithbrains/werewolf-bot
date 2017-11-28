import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import { Players } from '/imports/api/index';

const PlayersComponent = ({ user, players }) => <div>
  <h3>Players</h3>
  { user ?
    <ul>
      {players.map(player => {
        return <li key={player._id}>
          {player.name}
        </li>;
      })}
    </ul> : ''
  }
</div>;

PlayersComponent.propTypes = {
  players: PropTypes.array.isRequired,
  user: PropTypes.object
};

export default withTracker(() => {
  return {
    players: Players.find({}).fetch(),
    user: Meteor.user()
  };
})(PlayersComponent);
