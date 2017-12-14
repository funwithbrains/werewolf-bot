import React, { Component } from 'react';

export class Collapsible extends Component {
  constructor(props) {
    super(props);

    this.state = { isExpanded: props.beginsExpanded || false };
  }

  setExpanded(value) {
    this.setState({ isExpanded: value });
  }

  render() {
    const { children } = this.props;
    const { isExpanded } = this.state;

    return <div>
      <label>
        <div>
          <input type="checkbox" checked={isExpanded} onChange={e => {
            this.setExpanded(e.target.checked);
          }} />
          Expand
        </div>
      </label>
      {isExpanded ? children : null}
    </div>;
  }
};
