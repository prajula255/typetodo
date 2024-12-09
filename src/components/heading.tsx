import React, { FC } from 'react';


interface HeadingProps{
  value:string,
  className?:string
}
const Heading1:FC<HeadingProps> =({ value, ...prop }) =>{
  return (
    <>
    
      <h1{...prop}>{value}</h1>
    </>
  );
}

export default Heading1;