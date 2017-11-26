import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';

import { Players } from '/imports/api/index';

class PlayersComponent extends Component {
  render() {
    return (
      <div>
        { this.props.user ?
          <ul>
            {this.props.players.map(player => {
              return <li key={player._id}>
                {player.name}
              </li>;
            })}
          </ul> : ''
        }
      </div>
    );
  }
}

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
