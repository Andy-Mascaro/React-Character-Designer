import React, { useState } from 'react';
import Bottom from '../../components/Bottom/Bottom';
import Head from '../../components/Head/Head';
import Middle from '../../components/Middle/Middle';
import Preview from '../../components/Preview/Preview';
import Phrase from '../../components/Phrase/Phrase';
import background from './background.jpeg';
import './Main.css';


export default function Main() {
  const [head, setHead] = useState('dog');
  const [middle, setMiddle] = useState('dress');
  const [bottom, setBottom] = useState('leg');
  const [phrase, setPhrase] = useState('');
  const [phraseArray, setPhraseArray] = useState([]);

  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div>
        <Head
          setHead={setHead}/>
        <Middle
          setMiddle={setMiddle}/>
        <Bottom
          setBottom={setBottom}/>

        <Phrase
          setPhrase={setPhrase}
          setPhraseArray={setPhraseArray}
          phrase={phrase}
          phraseArray={phraseArray}/>
          
        <Preview 
          head={head}
          middle={middle}
          bottom={bottom}/>
          
            

      </div>
    </main>
  );
}


