import React from 'react';
import { Route } from 'react-router-dom';

import ListValues from './list.jsx';
import CreateValue from './create.jsx';
import UpdateValue from './update.jsx';

export const CRUD = (props) => {
  const { basePath } = props;

  return <div>
    <Route exact path={basePath} component={
      () => <ListValues crudProps={props} />
    } />
    <Route path={`${basePath}/create`} component={
      () => <CreateValue crudProps={props} />
    } />
    <Route path={`${basePath}/update/:id`} component={
      () => <UpdateValue crudProps={props} />
    } />
  </div>
};
