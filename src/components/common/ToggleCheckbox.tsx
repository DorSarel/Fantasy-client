import React from 'react';

interface Props {
  label: string;
  isChecked: boolean;
  onChange: (e: React.SyntheticEvent) => void;
}

const ToggleCheckbox: React.FC<Props> = ({ label, isChecked, onChange }) => {
  return (
    <div className="toggle-wrapper">
      <label>{label}</label>
      <input type="checkbox" className="toggle-checkbox" checked={isChecked} onChange={onChange} />
    </div>
  );
};

export default ToggleCheckbox;
