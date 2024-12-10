import React, { FC } from 'react';

interface buttonProps {
  label: string,
  onClick: () => void,
  disabled: boolean
}

const button: FC<buttonProps> = ({ label, onClick, disabled }) => {
  return (
    <>
      <button onClick={onClick} disabled={disabled} className='btn btn-primary px-4' >{label}</button>
    </>
  );
};

export default button;