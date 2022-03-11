import React from 'react';

export default function Bottom({ setBottom }) {
  return (
    <div className="bottomEditor">
      <label>Bottom</label>
      <select id="bottom-dropdown"
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      >
        <option value="leg">Single Leg</option>
        <option value="white">White Pants</option>
        <option value="blue">Blue Jeans</option>
      </select>

    </div>
  );
}
