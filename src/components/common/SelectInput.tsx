import React from 'react';

interface Props {
  label?: string;
  value?: string;
  items?: any[];
  onChange?: (e: React.SyntheticEvent) => void;
}

const SelectInput: React.FC<Props> = ({ label, value, items, onChange }) => {
  return (
    <div>
      <label className="select-input" htmlFor={label}>
        {label}
      </label>
      <div className="select" id={label}>
        <select value={value} onChange={onChange}>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>
        <span className="focus"></span>
      </div>
    </div>
  );
};

export default SelectInput;
