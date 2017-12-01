import React, { Component } from 'react';

import { Players } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export default () => <div>
  <CRUD
    basePath="/players"
    nameSingular="Player"
    namePlural="Players"
    collection={Players}
    listColumns={[
      { label: 'Name', key: 'name', isLink: true }
    ]}
    formFields={[
      { key: 'name', type: 'text' }
    ]}
  />
</div>;
