import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '/imports/ui/components/index';
import { Roles } from '/imports/api/index';

export default () => <div>
  <h3>Viewing the Roles</h3>

  <Link to="/roles/create">Create a Role</Link>

  <Table link="/roles/update/:id" collection={Roles} definition={{
    query: {},
    columns: [{ label: 'Name', key: 'name', isLink: true }]
  }} />
</div>;
