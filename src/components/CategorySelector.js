import React from 'react';

const CategorySelector = ({ options, category, onChange }) => (
  <select value={category} onChange={onChange}>
    {options.map(opt => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default CategorySelector;
