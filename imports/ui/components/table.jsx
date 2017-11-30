import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

export default withTracker(({ collection, query }) => {
  return {
    values: collection.find(query).fetch()
  };
})(class extends Component {
  render() {
    const { values, link, columns } = this.props;
    
    return <table>
      <thead>
        <tr>
          {columns.map(column => <th key={column.key}>{column.label || column.key}</th>)}
        </tr>
      </thead>
      <tbody>
        {values.map(value => <tr key={value._id}>
          {columns.map(column => <td key={column.key}>
            {column.isLink ?
              <Link to={link.replace(':id', value._id)}>{value[column.key]}</Link> :
              value[column.key]
            }
          </td>)}
        </tr>)}
      </tbody>
    </table>;
  }
});
