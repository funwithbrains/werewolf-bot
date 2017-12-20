import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import './behaviors/index';

export const Players = new Mongo.Collection('players');

export const Player = Class.create({
  name: 'Player',
  collection: Players,
  fields: {
    name: {
      type: String,
      default: 'New Player'
    }
  },
  behaviors: {
    crud: {}
  }
});
