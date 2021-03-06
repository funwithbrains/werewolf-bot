import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import {
  DateTime,
  Input,
  ObjectMultiSelector,
  ObjectSelector
} from './input/index';

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

  if (type === 'objectMultiSelector') {
    return <ObjectMultiSelector
      value={value}
      getLabel={field.getLabel}
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

export const Form = ({
  value: values,
  fields,
  onChange
}) => <div>
  {fields.map(field => <div key={field.key}>
    <label>{field.label || field.key}
      <div>
        <FormInput
          field={field}
          value={values && values[field.key] || ''}
          onChange={v => onChange(field, v)}
        />
      </div>
    </label>
  </div>)}
</div>;
