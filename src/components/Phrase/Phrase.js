import React from 'react';

export default function Phrase({ setAdd }) {
  return (
    <div className="phraseEditor">
    <label>Add A Catchphrase</label>
    <button>Add</button>
    onClick={(e) => {
        setAdd(e.target.value);

    }}
   >



    </div>
  );
}
