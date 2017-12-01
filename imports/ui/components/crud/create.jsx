import React from 'react';

import { Form } from '/imports/ui/components/index';

export default ({
  crudProps: { collection, formFields, nameSingular }
}) => <div>
  <h3>Creating a {nameSingular}</h3>

  <Form fields={formFields} handleSave={newValue => {
    collection.insert(newValue);
  }} />
</div>;
