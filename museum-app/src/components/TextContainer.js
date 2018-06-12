import React from 'react';
import '../styles/TextContainer.css'

const TextContainer = (props) => {
  return (
    <div className='text-container'>
      { props.children }
    </div>
  );
};



export default TextContainer;