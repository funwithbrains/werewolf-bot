import React from 'react';

import { Form } from '/imports/ui/components/index';

export default ({
  crudProps: { collection, computeFormValue, formFields, nameSingular }
}) => <div>
  <h3>Creating a {nameSingular}</h3>

  <Form fields={formFields} handleSave={formData => {
    collection.insert(computeFormValue(formData));
  }} />
</div>;
