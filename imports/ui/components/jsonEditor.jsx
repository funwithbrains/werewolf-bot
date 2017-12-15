import React from 'react';
import { moment, dateTime } from '/imports/utils'; 

const deactivate = o => {
  // We must not mutate the input.
  if (Array.isArray(o)) {
    o = o.slice();
  } else {
    o = Object.assign({}, o);
  }
  Object.keys(o).forEach(k => {
    const v = o[k];
    if (v !== Object(v)) { return; }

    if (v instanceof Date) { // Assume we never move instantiated objects across frames.
      o[k] = { $date: dateTime.format(moment(v)) };
    } else {
      o[k] = deactivate(v);
    }
  });

  return o;
};

const activate = o => {
  // We can mutate this input since we know it belongs to this file.
  Object.keys(o).forEach(k => {
    const v = o[k];
    if (v !== Object(v)) { return; }

    if (v.$date) {
      o[k] = dateTime.parse(v.$date).toDate();
    } else {
      activate(v);
    }
  });

  return o;
};

const stringify = v => JSON.stringify(deactivate(v), null, 2);
const parse = json => activate(JSON.parse(json));

export class JsonEditor extends React.Component {
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
          const value = parse(json);
          this.props.onChange(value);
        } catch(error) {}
      }} />
    </div>;
  }
};
