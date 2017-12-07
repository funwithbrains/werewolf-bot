import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import Collapsible from '/imports/ui/components/collapsible.jsx';

export default withTracker(({ collection }) => {
  return {
    options: collection.find({}).fetch()
  };
})(class extends Component {
  handleChange(event, id) {
    let { value, onChange } = this.props;

    if (!Array.isArray(value)) {
      value = [];
    }

    const isAdded = event.target.checked;
    const newValue = (isAdded ?
      value.concat(id) :
      value.filter(i => i !== id)
    );

    onChange(newValue);
  }

  render() {
    let {
      value,
      options,
      getLabel
    } = this.props;

    const compareObjects = (a, b) => getLabel(a).localeCompare(getLabel(b));

    if (!Array.isArray(value)) {
      value = [];
    }

    const idSet = new Set();
    value.forEach(id => {
      idSet.add(id);
    });

    return <Collapsible>
      <ul>
        {options.sort(compareObjects).map(v => <li key={v._id}>
          <label>
            <div>
              <input
                type="checkbox"
                checked={idSet.has(v._id)}
                onChange={(e) => this.handleChange(e, v._id)}
              />
              {getLabel(v)}
            </div>
          </label>
        </li>)}
      </ul>
    </Collapsible>;
  }
});
