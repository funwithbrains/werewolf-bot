import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from '/imports/ui/components/index';
import { Roles } from '/imports/api/index';

export default ({
  crudProps: { basePath, collection, listColumns, nameSingular, namePlural }
}) => <div>
  <h3>Viewing the {namePlural}</h3>

  <Link to={`${basePath}/create`}>Create a {nameSingular}</Link>

  <Table
    link={`${basePath}/update/:id`}
    collection={collection}
    query={{}}
    columns={listColumns}
  />
</div>;
