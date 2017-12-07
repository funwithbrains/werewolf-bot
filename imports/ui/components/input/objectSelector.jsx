import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export default withTracker(({ collection }) => {
  return {
    options: collection.find({}).fetch()
  };
})(({
  value,
  options,
  getLabel,
  getValue,
  onChange
}) => {
  return <select
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {options.sort(String.compareStrings).map(v => <option
      key={v._id}
      value={getValue(v)}
    >
      {getLabel(v)}
    </option>)}
  </select>;
});
