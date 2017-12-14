import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

export const ObjectSelector = withTracker(({ collection }) => {
  return {
    options: collection.find({}).fetch()
  };
})(({
  value,
  options,
  getLabel,
  onChange
}) => {
  const compareObjects = (a, b) => getLabel(a).localeCompare(getLabel(b));

  return <select
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {options.sort(compareObjects).map(v => <option
      key={v._id}
      value={v._id}
    >
      {getLabel(v)}
    </option>)}
  </select>;
});
