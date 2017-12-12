import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom'

import { Form } from '/imports/ui/components/index';

const stringify = v => JSON.stringify(v, null, 2);

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      json: stringify(props.value)
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      json: stringify(nextProps.value)
    });
  }

  render() {
    const { json } = this.state;
    return <div>
      <textarea value={json} onChange={e => {
        const json = e.target.value;
        this.setState({ json });

        try {
          const value = JSON.parse(json);
          this.props.onChange(value);
        } catch(error) {}
      }} />
    </div>;
  }
};