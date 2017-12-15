import React from 'react';

import { Roles as RolesCollection } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export const Roles = () => <div>
  <CRUD
    basePath="/roles"
    nameSingular="Role"
    namePlural="Roles"
    collection={RolesCollection}
    listColumns={[
      { label: 'Name', key: 'name', isLink: true },
      { label: 'Description', key: 'description' }
    ]}
    formFields={[
      { key: 'name', type: 'text' },
      { key: 'description', type: 'longText' },
      { key: 'tags', type: 'text' }
    ]}
    createInitialValue={() => {
      return {};
    }}
  />
</div>;
