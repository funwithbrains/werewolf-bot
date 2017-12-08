import React, { Component } from 'react';

import { moment, dateTime } from '/imports/utils/index';

const parseMomentValue = string => string ? dateTime.parse(string) : moment();
const createMomentValue = date => date ? moment(date) : moment();

export default class extends Component {
  constructor(props) {
    super(props);

    const { value } = props;
    const momentValue = createMomentValue(value);

    this.state = {
      inputString: dateTime.format(momentValue)
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    const momentValue = createMomentValue(value);
    
    const inputStringMomentValue = parseMomentValue(this.state.inputString);
    if (!inputStringMomentValue.isSame(momentValue)) {
      this.setState({
        inputString: dateTime.format(momentValue)
      });
    }
  }

  handleChange(event) {
    const inputString = event.target.value;

    this.setState({ inputString });

    const { onChange } = this.props;
    if (onChange) {
      const momentValue = parseMomentValue(inputString);
      if (momentValue.isValid()) {
        onChange(momentValue.toDate());
      }
    }
  }

  render() {
    const { value } = this.props;
    const momentValue = createMomentValue(value);

    const { inputString } = this.state;
    const inputStringMomentValue = parseMomentValue(inputString);
    const isValid = inputStringMomentValue.isValid();
    console.log(inputString, isValid);
    
    return <span>
      <input
        type="text"
        value={inputString}
        onChange={e => this.handleChange(e)}
      />
      {isValid ?
        null :
        <span> not valid, using previous value: </span>
      }
      <span> {momentValue.fromNow()}</span>
      <span> {dateTime.format(momentValue)}</span>
    </span>;
  }
};
