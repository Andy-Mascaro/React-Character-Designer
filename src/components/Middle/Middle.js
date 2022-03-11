import React from 'react';
import './Middle.css';

export default function Middle({ setMiddle }) {
  return (
    <div className="middleEditor">
      <select id="middle-dropdown"
        onChange={(e) => {
          setMiddle(e.target.value);
        }}
      >
        <option value="blue">Blue</option>
        <option value="dress">Fancy</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
      </select>

    </div>
    
  );
}
