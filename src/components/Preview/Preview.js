import React from 'react';
import './Preview.css';

export default function Preview({ head, middle, bottom }) {
  return ( 
    <div>
      <div className='phead' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${head}-head.png)` } }></div> 
    </div>
    

  );

}