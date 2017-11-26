import { Mongo } from 'meteor/mongo';
 
export const Abilities = new Mongo.Collection('abilities');

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
