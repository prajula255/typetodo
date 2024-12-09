import React, { FC } from 'react';

interface TextInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string
}

const TextInput: FC<TextInputProps> = ({ onChange, value }) => {
  return (
    <>
      <input className='form-control' type="text" onChange={onChange} value={value} />
    </>
  );
};

export default TextInput;