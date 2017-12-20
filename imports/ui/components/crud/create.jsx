import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom'

import { Editor } from './editor.jsx';

export default withRouter(class extends React.Component {
  render() {
    const {
      history,
      crudProps
    } = this.props;
    const {
      nameSingular,
      ormClass,
      basePath
    } = crudProps;
    const value = new ormClass();

    return <div>
      <h3>Creating a {nameSingular}</h3>

      <Editor value={value} crudProps={crudProps} onSave={() => {
        value.crudSave((error, id) => {
          history.replace(`${basePath}/update/${id}`);
        });
      }} />
    </div>;
  }
});
