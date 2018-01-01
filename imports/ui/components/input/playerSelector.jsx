import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Player } from '/imports/api';
import { Configuration } from '/imports/api/client';

export const PlayerSelector = withTracker(() => {
  const players = Player.find({}).fetch();
  const configuration = Configuration.findOne() || new Configuration();

  return {
    players,
    configuration
  };
})(({ players, configuration }) => <label><div>
  <select
    value={configuration.playerId || ''}
    onChange={e => {
      configuration.updatePlayerId(e.target.value);
    }}
  >
    {players.map(player => <option key={player._id} value={player._id}>{player.name}</option>)}
  </select>
</div></label>);
