import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import './behaviors/index';

export const Roles = new Mongo.Collection('roles');

export const Role = Class.create({
  name: 'Role',
  collection: Roles,
  fields: {
    name: {
      type: String,
      default: 'New Role'
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    }
  },
  behaviors: {
    crud: {}
  }
});
