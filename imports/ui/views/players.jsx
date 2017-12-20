import React, { Component } from 'react';

import { Player } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export const Players = () => <div>
  <CRUD
    basePath="/players"
    nameSingular="Player"
    namePlural="Players"
    ormClass={Player}
    listColumns={[
      { label: 'Name', key: 'name', isLink: true }
    ]}
    formFields={[
      { key: 'name', type: 'text' }
    ]}
    createInitialValue={() => {
      return {};
    }}
  />
</div>;
