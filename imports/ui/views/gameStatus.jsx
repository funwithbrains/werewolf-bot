import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Game, Player, Setup } from '/imports/api/index';

const computeVoteSummary = (currentPhase) => {
  return currentPhase.votes.reduce((memo, vote) => {
    const { optionKey, playerId } = vote;
    const lastVoteKey = memo.latestVoteMap.get(playerId);

    if (lastVoteKey) {
      const lastVoteMap = memo.countMap.get(lastVoteKey);
      lastVoteMap.delete(playerId);
    }

    if (vote.optionKey) {
      const voteMap = memo.countMap.get(optionKey);
      voteMap.set(playerId, vote);
      memo.latestVoteMap.set(playerId, optionKey);
    } else {
      memo.latestVoteMap.delete(vote.playerId);
    }

    return memo;
  }, {
    countMap: currentPhase.survivorIds.reduce((memo, id) => {
      memo.set(id, new Map());

      return memo;
    }, new Map()),
    latestVoteMap: new Map()
  });
};

const PlayerSummary = ({ id, context }) => {
  const { voteSummary, playerMap } = context;
  if (!playerMap) { return null; }

  const player = playerMap.get(id);
  const votes = voteSummary.countMap.get(id);

  return <div>
    {player.name} ({votes.size}) {
      Array.from(votes.values()).map(v => playerMap.get(v.playerId).name).join(', ')
    }
  </div>;
};

export const GameStatus = withTracker(({
  match: { params: { id } }
}) => {
  const game = Game.findOne(id);
  const setup = game && Setup.findOne(game.setupId);
  const currentPhase = game && game.currentPhase();
  const voteSummary = currentPhase && computeVoteSummary(currentPhase);
  const playerMap = currentPhase && currentPhase.survivorIds.reduce((memo, id) => {
    memo.set(id, Player.findOne(id));

    return memo;
  }, new Map());

  return {
    game,
    setup,
    currentPhase,
    voteSummary,
    playerMap
  };
})((context) => {
  const {
    game,
    setup,
    currentPhase,
    voteSummary,
    playerMap
  } = context;
  if (!game) {
    return <div>The game could not be found.</div>;
  }

  const notVotingCount = (
    currentPhase.survivorIds.length -
    voteSummary.latestVoteMap.size
  );

  return <div>
    <h4>Game Status</h4>
    <h3>{game.name}</h3>

    {setup ? <div>
      Setup: <Link to={`/setups/update/${setup._id}`}>{setup.name}</Link>
    </div> : <div>
      The setup could not be found.
    </div>}

    {currentPhase ? <ul>
      {currentPhase.survivorIds.map(id => <li key={id}>
        <PlayerSummary id={id} context={context} />
      </li>)}
      <li>Not Voting ({notVotingCount}): {
        currentPhase.survivorIds
        .filter(id => !voteSummary.latestVoteMap.has(id))
        .map(id => {
          const player = playerMap.get(id);

          return player ? player.name : '';
        })
        .join(', ')
      }</li>
    </ul> : null}
  </div>;
});
