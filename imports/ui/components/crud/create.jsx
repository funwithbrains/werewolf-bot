import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export default withRouter(class extends Component {
  constructor (props) {
    super(props);

    const {
      history,
      crudProps: { collection, basePath }
    } = props;

    const newId = collection.insert({});
    history.replace(`${basePath}/update/${newId}`);
  }
  render() { return null; }
});
