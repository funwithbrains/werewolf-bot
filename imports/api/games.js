import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import './behaviors/index';

export const Games = new Mongo.Collection('games');

export const Vote = Class.create({
  name: 'Vote',
  fields: {
    playerId: String,
    optionKey: String,
    timestamp: Date
  }
});

export const GamePhase = Class.create({
  name: 'GamePhase',
  fields: {
    type: String,
    votes: [Vote]
  }
});

export const Game = Class.create({
  name: 'Game',
  collection: Games,
  fields: {
    name: {
      type: String,
      default: 'New Game'
    },
    description: {
      type: String,
      default: ''
    },
    setupId: {
      type: String,
      optional: true
    },
    gameMasterId: {
      type: String,
      optional: true // TODO make this required but auto-set it based on logged-in user
    },
    startDate: {
      type: Date,
      optional: true
    },
    playerIds: {
      type: [String],
      default: []
    },
    phases: {
      type: [GamePhase],
      default: []
    }
  },
  behaviors: {
    crud: {}
  }
});

Games.stateKey = {
  pending: 'pending',
  completed: 'completed',
  day: 'day',
  night: 'night'
};

Meteor.methods({
  'games.create': ({ name, startDate, setupId }) => {
    // TODO verify data, or display error messages when displaying inconsistent data?

    const gmUserId = Meteor.userId();
    if (!gmUserId) { return; }

    Games.insert({
      gmUserId,

      name,
      startDate,
      setupId,

      gameStateKey: Games.stateKey.pending
    });
  }
});
