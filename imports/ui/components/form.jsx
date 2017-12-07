import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import {
  DateTime,
  Input,
  ObjectSelector
} from '/imports/ui/components/input/index';

const FormInput = ({ field, value, onChange }) => {
  const { type } = field;

  if (type === 'longText') {
    return <Input
      value={value}
      onChange={onChange}
      type="long-text"
    />
  }
  
  if (type === 'dateTime') {
    return <DateTime
      value={value}
      onChange={onChange}
    />;
  }

  if (type === 'objectSelector') {
    return <ObjectSelector
      value={value}
      getLabel={field.getLabel}
      getValue={field.getValue}
      collection={field.collection}
      onChange={onChange}
    />
  }

  return <Input
    value={value}
    onChange={onChange}
    type={type}
  />;
};

export default class extends Component {
  render() {
    const { value: values, fields, onChange } = this.props;

    return <div>
      {fields.map(field => <div key={field.key}>
        <label>{field.label || field.key}</label>
        <span>
          <FormInput
            field={field}
            value={values && values[field.key] || ''}
            onChange={v => onChange(field, v)}
          />
        </span>
      </div>)}
    </div>;
  }
};
