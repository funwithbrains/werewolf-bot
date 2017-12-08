import React from 'react';

import { Setups } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export default () => <div>
  <CRUD
    basePath="/setups"
    nameSingular="Setup"
    namePlural="Setups"
    collection={Setups}
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
