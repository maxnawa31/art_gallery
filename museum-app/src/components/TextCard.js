import React, { Component } from 'react';
import '../styles/TextCard.css'

const TextCard = (props) => {
  return (
    <div className='text-card'>
      {props.children}
    </div>
  );
};


export default TextCard;
