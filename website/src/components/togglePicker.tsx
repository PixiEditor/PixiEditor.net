import React, { useState } from 'react';

interface TogglePickerProps {
  label1: string;
  label2: string;
  onOptionSelected?: (selectedOption: number) => void;
}

const TogglePicker: React.FC<TogglePickerProps> = (props) => {
  const [isButton1Toggled, setIsButton1Toggled] = useState(true);
  const [isButton2Toggled, setIsButton2Toggled] = useState(false);

  const handleButton1Click = () => {
    setIsButton1Toggled(true);
    setIsButton2Toggled(false);
    props.onOptionSelected?.(0);
  };

  const handleButton2Click = () => {
    setIsButton1Toggled(false);
    setIsButton2Toggled(true);
    props.onOptionSelected?.(1);
  };

  return (
    <div className='togglePicker-container'>
      <button onClick={handleButton1Click} disabled={isButton1Toggled} className='togglePicker firstButton'>
      {props.label1}
      </button>
      <button onClick={handleButton2Click} disabled={isButton2Toggled} className='togglePicker secondButton'>
      {props.label2}
      </button>
    </div>
  );
};

export default TogglePicker;