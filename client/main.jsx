import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '/imports/ui/app.jsx';

import api from '/imports/api';

import utils from '/imports/utils';
import { Astronomy } from 'meteor/jagi:astronomy';
window.dev = { // TEMP
  React, Meteor, Astronomy,
  api, utils
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#app-root-container'));
});
