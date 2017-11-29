import { Mongo } from 'meteor/mongo';
 
export const Roles = new Mongo.Collection('roles');

Roles.tableDefinition = {
  query: {},
  columns: [{ label: 'Name', key: 'name' }]
};

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
