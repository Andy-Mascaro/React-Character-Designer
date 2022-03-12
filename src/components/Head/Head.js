import React from 'react';
import './Head.css';

export default function Head({ setHead }) {
  return (
    <div className="headEditor">
      <label>Head</label>
      <select id="head-dropdown"
        onChange={(e) => {
          setHead(e.target.value);
        }}
      >
        <option value="bird">Bird</option>
        <option value="duck">Duck</option>
        <option value="dog">Dog</option>
        <option value="horse">Horse</option>
      </select>
     
    </div>
  );
}
