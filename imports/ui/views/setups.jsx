import React from 'react';

import { Setup } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export const Setups = () => <div>
  <CRUD
    basePath="/setups"
    nameSingular="Setup"
    namePlural="Setups"
    ormClass={Setup}
    listColumns={[
      { label: 'Name', key: 'name', isLink: true }
    ]}
    formFields={[
      { key: 'name', type: 'text', label: 'Name' },
      { key: 'description', type: 'longText', label: 'Description' }
    ]}
    createInitialValue={() => {
      return {};
    }}
  />
</div>;
