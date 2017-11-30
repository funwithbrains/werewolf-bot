import React from 'react';
import { Route } from 'react-router-dom';

import { List } from '/imports/ui/components/index';
import { Roles } from '/imports/api/index';

import ListRoles from './list.jsx';
import CreateRole from './create.jsx';
import UpdateRole from './update.jsx';

export default () => <div>
  <Route exact path="/roles" component={ListRoles} />
  <Route path="/roles/create" component={CreateRole} />
  <Route path="/roles/update/:id" component={UpdateRole} />
</div>;
