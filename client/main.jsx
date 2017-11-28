import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/app.jsx';

import api from '/imports/api/index';
window.dev = { // TEMP
  React, Meteor, api
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#app-root-container'));
});
