import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import './behaviors/index';

export const Setups = new Mongo.Collection('setups');

export const Setup = Class.create({
  name: 'Setup',
  collection: Setups,
  fields: {
    name: {
      type: String,
      default: 'New Setup'
    },
    description: {
      type: String,
      default: ''
    }
  },
  behaviors: {
    crud: {}
  }
});
