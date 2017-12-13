import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Games, Setups } from '/imports/api/index';

export default withTracker(({ match: { params: { id } } }) => {
  const game = Games.findOne(id);
  const setup = Setups.findOne(game && game.setupId);
  return {
    game,
    setup
  };
})(({ game, setup }) => <div>
  <h3>Game Status</h3>
  {setup ? <div>
    Setup: <Link to={`/setups/update/${setup._id}`}>{setup.name}</Link>
  </div> : <div>
    The setup could not be found.
  </div>}
</div>);
