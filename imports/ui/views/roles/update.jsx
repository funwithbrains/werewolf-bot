import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { Form } from '/imports/ui/components/index';
import { Roles } from '/imports/api/index';

export default withTracker(({ match: { params: { id } } }) => {
  return {
    role: Roles.findOne(id)
  };
})(({ role }) => <div>
  <h3>Updating a Role</h3>

  <Form value={role} formDefinition={{
    fields: [
      { key: 'name', type: 'text' },
      { key: 'description', type: 'longText' },
      { key: 'tags', type: 'text' }
    ],
    save: (newRole) => {
      Roles.update(role._id, newRole);
    }
  }} />
</div>);
