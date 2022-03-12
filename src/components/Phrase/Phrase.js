import React from 'react';

export default function Phrase({ setPhrase, setPhraseArray, phrase, phraseArray }) {
  const addPhrase = () => {setPhraseArray((prevState) => [...prevState, phrase]); setPhrase ('');};
  return (
    <div className="phraseEditor">
      <label>Add A Catchphrase
        <input value={phrase} onChange={(e) => setPhrase (e.target.value) } ></input>
      </label>
      <button onClick={addPhrase}>Add</button>
      <ul> 
        {phraseArray.map ((item) => <li key={item}>{item}</li>)}

      </ul>
    
  



    </div>
  );
}
