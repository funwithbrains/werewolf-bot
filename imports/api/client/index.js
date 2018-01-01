import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

export const Configurations = new Mongo.Collection(null);

export const Configuration = Class.create({
  name: 'Configuration',
  collection: Configurations,
  fields: {
    playerId: String
  },
  helpers: {
    updatePlayerId(id) {
      this.playerId = id;
      this.save();
    }
  }
});

