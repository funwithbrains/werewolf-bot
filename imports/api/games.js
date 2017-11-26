import { Mongo } from 'meteor/mongo';
 
export const Games = new Mongo.Collection('games');

Games.stateKey = {
  pending: 'pending',
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
