import React from 'react';
import './Preview.css';

export default function Preview({ head, middle, bottom }) {
  return ( 
    <div>
      <div className='top' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${head}-head.png)` } }></div> 

      <div className='mid' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${middle}-middle.png)` } }></div>

      <div className='bot' style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/${bottom}-pants.png)` } }></div>

    </div>



  );

}