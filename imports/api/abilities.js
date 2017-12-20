import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import './behaviors/index';

export const Abilities = new Mongo.Collection('abilities');

export const Ability = Class.create({
  name: 'Ability',
  collection: Abilities,
  fields: {},
  behaviors: {
    crud: {}
  }
});

Meteor.methods({
  'abilities.create': ({
    name,
    description,
    abilityConfig
  }) => {
    const creatorUserId = Meteor.userId();
    if (!creatorUserId) { return; }

    Games.insert({
      creatorUserId,

      name,
      description,
      abilityConfig
    });
  }
});
