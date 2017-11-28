import React, { Component } from 'react';

const fieldTypeMap = Object.freeze({
  'text': key => <input ref={key} type="text" />,
  'longText': key => <textarea ref={key}></textarea>
});

export default class extends Component {
  save() {
    const { formDefinition } = this.props;

    const value = Object.keys(this.refs).reduce((memo, key) => {
      memo[key] = this.refs[key].value;
      return memo;
    }, {});

    formDefinition.save(value);
  }

  render() {
    const { formDefinition } = this.props;
    
    return <div>
      {formDefinition.fields.map(field => <div key={field.key}>
        <label>{field.label || field.key}</label> {fieldTypeMap[field.type](field.key)}
      </div>)}
      <button onClick={() => this.save()}>Save</button>
    </div>;
  }
};
