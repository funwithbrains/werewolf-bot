import React from 'react';
import { Form } from '/imports/ui/components/index';
import { Roles } from '/imports/api/index';

export default () => <div>
  <h3>Creating a Role</h3>

  <Form formDefinition={Roles.formDefinition} />
</div>;
