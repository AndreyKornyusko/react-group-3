import React from 'react';

const CategorySelector = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default CategorySelector;
