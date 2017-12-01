import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom'

import { Form } from '/imports/ui/components/index';
import { Roles } from '/imports/api/index';

export default withRouter(withTracker(({ match: { params: { id } } }) => {
  return {
    role: Roles.findOne(id)
  };
})(({ history, role }) => <div>
  <h3>Updating a Role</h3>

  <Form value={role} fields={[
    { key: 'name', type: 'text' },
    { key: 'description', type: 'longText' },
    { key: 'tags', type: 'text' }
  ]} handleSave={newRole => {
    Roles.update(role._id, newRole);
  }} />

  <button onClick={() => {
    Roles.remove(role._id);
    history.replace('..');
  }}>Delete this Role</button>
</div>));
