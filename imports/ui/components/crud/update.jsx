import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom'

import { Editor } from './editor.jsx';

export default withRouter(withTracker(({
  match: { params: { id } }, crudProps: { ormClass }
}) => {
  return { // TODO Do not replace value when server pushes. May require stateful Update component.
    value: ormClass.findOne(id)
  };
})(class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (!value || this.state.value) { return; }
    
    this.setState({ value });
  }

  render() {
    const {
      history,
      crudProps
    } = this.props;
    const { nameSingular, basePath } = crudProps;
    const { value } = this.state;

    return <div>
      <h3>Updating a {nameSingular}</h3>

      <Editor value={value} onSave={(value) => {
        value.crudSave();
      }} crudProps={crudProps} />

      <button onClick={() => {
        value.crudRemove();
        history.replace(basePath);
      }}>Delete this {nameSingular}</button>
    </div>;
  }
}));
