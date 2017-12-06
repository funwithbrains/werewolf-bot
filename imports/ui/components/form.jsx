import React, { Component } from 'react';

import { DateTime, Input } from '/imports/ui/components/input/index';

const FormInput = ({ type, value, onChange }) => {
  if (type === 'longText') {
    return <Input value={value} onChange={onChange} type="long-text" />
  }
  
  if (type === 'dateTime') {
    return <DateTime value={value} onChange={onChange} />;
  }

  return <Input value={value} onChange={onChange} type={type} />;
};

export default class extends Component {
  render() {
    const { value: values, fields, onChange } = this.props;

    return <div>
      {fields.map(field => <div key={field.key}>
        <label>{field.label || field.key}</label>
        <span>
          <FormInput
            type={field.type}
            value={values && values[field.key] || ''}
            onChange={v => onChange(field.key, v)}
          />
        </span>
      </div>)}
    </div>;
  }
};
