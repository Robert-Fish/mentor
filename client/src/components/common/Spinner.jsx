import React from 'react';
import spinner from '../../assets/Spinner.svg';

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt=""
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
}
