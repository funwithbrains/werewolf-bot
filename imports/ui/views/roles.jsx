import React from 'react';

import { Roles } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export default () => <div>
  <CRUD
    basePath="/roles"
    nameSingular="Role"
    namePlural="Roles"
    collection={Roles}
    listColumns={[
      { label: 'Name', key: 'name', isLink: true },
      { label: 'Description', key: 'description' }
    ]}
    formFields={[
      { key: 'name', type: 'text' },
      { key: 'description', type: 'longText' },
      { key: 'tags', type: 'text' }
    ]}
    computeFormValue={formData => formData}
  />
</div>;
