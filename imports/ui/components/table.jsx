import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(({ collection, query }) => {
  return {
    values: collection.find({}).fetch()
  };
})(class extends Component {
  render() {
    const { values, definition: { columns } } = this.props;
    
    return <table>
      <thead>
        <tr>
          {columns.map(column => <th>{column.label || column.key}</th>)}
        </tr>
      </thead>
      <tbody>
        {values.map(value => <tr key={value._id}>
          {columns.map(column => <td>{value[column.key]}</td>)}
        </tr>)}
      </tbody>
    </table>;
  }
});
