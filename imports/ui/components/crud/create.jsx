import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export default withRouter(class extends Component {
  constructor (props) {
    super(props);

    const {
      history,
      crudProps: { collection, basePath, createInitialValue }
    } = props;

    const newId = collection.insert(createInitialValue());
    history.replace(`${basePath}/update/${newId}`);
  }
  render() { return null; }
});
