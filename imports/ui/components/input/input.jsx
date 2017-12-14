import React, { Component } from 'react';

export const Input = ({ value, type, onChange }) => {
  const handleChange = e => onChange && onChange(e.target.value);

  if (type === 'long-text') {
    return <textarea
      value={value}
      onChange={handleChange}
    />;
  }

  return <input
    type={type}
    value={value}
    onChange={handleChange}
  />;
};
