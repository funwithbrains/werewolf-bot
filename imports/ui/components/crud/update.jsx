import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom'

import { Form } from '/imports/ui/components/index';

export default withRouter(withTracker(({
  match: { params: { id } }, crudProps: { collection }
}) => {
  return {
    value: collection.findOne(id)
  };
})(({
  history,
  value,
  crudProps: {
    collection,
    formFields, computeFormValue,
    nameSingular,
    basePath
  }
}) => <div>
  <h3>Updating a {nameSingular}</h3>

  <Form
    value={value}
    fields={formFields}
    onChange={(field, v) => {
      const { key, transform } = field;
      if (transform) {
        v = transform(v);
      }

      collection.update(value._id, {
        $set: { [key]: v }
      });
    }}
  />

  <button onClick={() => {
    collection.remove(value._id);
    history.replace(basePath);
  }}>Delete this {nameSingular}</button>
</div>));
