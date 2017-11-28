import { Mongo } from 'meteor/mongo';
 
export const Roles = new Mongo.Collection('roles');

Roles.formDefinition = {
  fields: [
    { key: 'name', type: 'text' },
    { key: 'description', type: 'longText' },
    { key: 'tags', type: 'text' }
  ],
  save: (role) => {
    Roles.insert(role);
  }
};
