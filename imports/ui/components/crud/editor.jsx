import React from 'react';

import { Form } from '/imports/ui/components/index';

export const Editor = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (!value || this.state.value) { return; }
    
    this.setState({ value });
  }

  render() {
    const {
      onSave,
      crudProps: { formFields }
    } = this.props;

    const { value } = this.state;

    return <div>
      <Form
        value={value}
        fields={formFields}
        onChange={(field, v) => {
          const { key, transform } = field;
          if (transform) {
            v = transform(v);
          }

          value.set(key, v);
          this.setState({ value });
        }}
      />

      <button onClick={onSave}>Save</button>
    </div>;
  }
};
