import React from 'react';

import { Games } from '/imports/api/index';
import { CRUD } from '/imports/ui/components/index';

export default () => <div>
  <CRUD
    basePath="/games"
    nameSingular="Game"
    namePlural="Games"
    collection={Games}
    listColumns={[
      { label: 'Name', key: 'name', isLink: true }
    ]}
    formFields={[
      { key: 'name', type: 'text' },
      { key: 'startDate', type: 'dateTime' }
    ]}
    computeFormValue={formData => formData}
  />
</div>;
