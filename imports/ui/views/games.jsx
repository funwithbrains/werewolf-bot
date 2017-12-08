import React from 'react';

import { Games, Players, Setups } from '/imports/api/index';
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
      { key: 'name', type: 'text', label: 'Name' },
      { key: 'startDate', type: 'dateTime', label: 'Start Date' },
      {
        key: 'setupId',
        type: 'objectSelector',
        label: 'Setup',
        collection: Setups,
        getLabel: v => v.name
      },
      {
        key: 'gameMasterId',
        type: 'objectSelector',
        label: 'Game Master',
        collection: Meteor.users,
        getLabel: v => v.emails[0].address
      },
      {
        key: 'playerIds',
        type: 'objectMultiSelector',
        label: 'Players',
        collection: Players,
        getLabel: v => v.name
      }
    ]}
    createInitialValue={() => {
      return {};
    }}
  />
</div>;
