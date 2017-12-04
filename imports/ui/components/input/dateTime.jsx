import React, { Component } from 'react';
import { moment, dateTime } from '/imports/utils/index';

export default class extends Component {
  handleChange() {
    console.log(dateTime.format(dateTime.parse(this.refs.input.value)));
  }

  render() {
    return <input ref="input" type="text" onChange={() => this.handleChange()} />
  }
};
