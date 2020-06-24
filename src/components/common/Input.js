import React from 'react';

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <input className="form-control"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export { Input };